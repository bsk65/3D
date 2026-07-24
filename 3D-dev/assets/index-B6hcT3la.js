(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var zu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Yg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let _=(c&15)<<2|d>>6,E=d&63;l||(E=64,o||(_=64)),r.push(t[f],t[m],t[_],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Yg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new Xg;const _=i<<2|c>>4;if(r.push(_),d!==64){const E=c<<4&240|d>>2;if(r.push(E),m!==64){const P=d<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Xg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zg=function(n){const e=Bh(n);return Uh.encodeByteArray(e,!0)},So=function(n){return Zg(n).replace(/\./g,"")},$h=function(n){try{return Uh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=()=>e_().__FIREBASE_DEFAULTS__,n_=()=>{if(typeof process>"u"||typeof zu>"u")return;const n=zu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},r_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$h(n[1]);return e&&JSON.parse(e)},Xo=()=>{try{return t_()||n_()||r_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jh=n=>{var e,t;return(t=(e=Xo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},s_=n=>{const e=jh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},qh=()=>{var n;return(n=Xo())===null||n===void 0?void 0:n.config},Gh=n=>{var e;return(e=Xo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[So(JSON.stringify(t)),So(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function a_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function c_(){var n;const e=(n=Xo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function l_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function u_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function d_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h_(){const n=Oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zh(){return!c_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kh(){try{return typeof indexedDB=="object"}catch{return!1}}function f_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="FirebaseError";class qt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=m_,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?p_(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new qt(s,c,r)}}function p_(n,e){return n.replace(g_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const g_=/\{\$([^}]+)}/g;function __(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ei(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Ku(i)&&Ku(o)){if(!ei(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ku(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ls(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function y_(n,e){const t=new v_(n,e);return t.subscribe.bind(t)}class v_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");I_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=qa),s.error===void 0&&(s.error=qa),s.complete===void 0&&(s.complete=qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n){return n&&n._delegate?n._delegate:n}class Pn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new i_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(T_(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:E_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E_(n){return n===Wn?void 0:n}function T_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new w_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ie||(ie={}));const A_={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},R_=ie.INFO,S_={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},P_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=S_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uc{constructor(e){this.name=e,this._logLevel=R_,this._logHandler=P_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const C_=(n,e)=>e.some(t=>n instanceof t);let Hu,Wu;function k_(){return Hu||(Hu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D_(){return Wu||(Wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hh=new WeakMap,oc=new WeakMap,Wh=new WeakMap,Ga=new WeakMap,$c=new WeakMap;function x_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Tn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Hh.set(t,n)}).catch(()=>{}),$c.set(e,n),e}function V_(n){if(oc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});oc.set(n,e)}let ac={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return oc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function N_(n){ac=n(ac)}function L_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(za(this),e,...t);return Wh.set(r,e.sort?e.sort():[e]),Tn(r)}:D_().includes(n)?function(...e){return n.apply(za(this),e),Tn(Hh.get(this))}:function(...e){return Tn(n.apply(za(this),e))}}function M_(n){return typeof n=="function"?L_(n):(n instanceof IDBTransaction&&V_(n),C_(n,k_())?new Proxy(n,ac):n)}function Tn(n){if(n instanceof IDBRequest)return x_(n);if(Ga.has(n))return Ga.get(n);const e=M_(n);return e!==n&&(Ga.set(n,e),$c.set(e,n)),e}const za=n=>$c.get(n);function O_(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tn(o.result),l.oldVersion,l.newVersion,Tn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const F_=["get","getKey","getAll","getAllKeys","count"],B_=["put","add","delete","clear"],Ka=new Map;function Qu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ka.get(e))return Ka.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=B_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||F_.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return Ka.set(e,i),i}N_(n=>({...n,get:(e,t,r)=>Qu(e,t)||n.get(e,t,r),has:(e,t)=>!!Qu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function $_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cc="@firebase/app",Ju="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Uc("@firebase/app"),j_="@firebase/app-compat",q_="@firebase/analytics-compat",G_="@firebase/analytics",z_="@firebase/app-check-compat",K_="@firebase/app-check",H_="@firebase/auth",W_="@firebase/auth-compat",Q_="@firebase/database",J_="@firebase/data-connect",Y_="@firebase/database-compat",X_="@firebase/functions",Z_="@firebase/functions-compat",ey="@firebase/installations",ty="@firebase/installations-compat",ny="@firebase/messaging",ry="@firebase/messaging-compat",sy="@firebase/performance",iy="@firebase/performance-compat",oy="@firebase/remote-config",ay="@firebase/remote-config-compat",cy="@firebase/storage",ly="@firebase/storage-compat",uy="@firebase/firestore",dy="@firebase/vertexai-preview",hy="@firebase/firestore-compat",fy="firebase",my="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="[DEFAULT]",py={[cc]:"fire-core",[j_]:"fire-core-compat",[G_]:"fire-analytics",[q_]:"fire-analytics-compat",[K_]:"fire-app-check",[z_]:"fire-app-check-compat",[H_]:"fire-auth",[W_]:"fire-auth-compat",[Q_]:"fire-rtdb",[J_]:"fire-data-connect",[Y_]:"fire-rtdb-compat",[X_]:"fire-fn",[Z_]:"fire-fn-compat",[ey]:"fire-iid",[ty]:"fire-iid-compat",[ny]:"fire-fcm",[ry]:"fire-fcm-compat",[sy]:"fire-perf",[iy]:"fire-perf-compat",[oy]:"fire-rc",[ay]:"fire-rc-compat",[cy]:"fire-gcs",[ly]:"fire-gcs-compat",[uy]:"fire-fst",[hy]:"fire-fst-compat",[dy]:"fire-vertex","fire-js":"fire-js",[fy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,gy=new Map,uc=new Map;function Yu(n,e){try{n.container.addComponent(e)}catch(t){en.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ir(n){const e=n.name;if(uc.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;uc.set(e,n);for(const t of Po.values())Yu(t,n);for(const t of gy.values())Yu(t,n);return!0}function Zo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Lt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new yi("app","Firebase",_y);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=my;function Qh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw bn.create("bad-app-name",{appName:String(s)});if(t||(t=qh()),!t)throw bn.create("no-options");const i=Po.get(s);if(i){if(ei(t,i.options)&&ei(r,i.config))return i;throw bn.create("duplicate-app",{appName:s})}const o=new b_(s);for(const l of uc.values())o.addComponent(l);const c=new yy(t,r,o);return Po.set(s,c),c}function Jh(n=lc){const e=Po.get(n);if(!e&&n===lc&&qh())return Qh();if(!e)throw bn.create("no-app",{appName:n});return e}function Ft(n,e,t){var r;let s=(r=py[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(c.join(" "));return}ir(new Pn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="firebase-heartbeat-database",Iy=1,ti="firebase-heartbeat-store";let Ha=null;function Yh(){return Ha||(Ha=O_(vy,Iy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ti)}catch(t){console.warn(t)}}}}).catch(n=>{throw bn.create("idb-open",{originalErrorMessage:n.message})})),Ha}async function wy(n){try{const t=(await Yh()).transaction(ti),r=await t.objectStore(ti).get(Xh(n));return await t.done,r}catch(e){if(e instanceof qt)en.warn(e.message);else{const t=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(t.message)}}}async function Xu(n,e){try{const r=(await Yh()).transaction(ti,"readwrite");await r.objectStore(ti).put(e,Xh(n)),await r.done}catch(t){if(t instanceof qt)en.warn(t.message);else{const r=bn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});en.warn(r.message)}}}function Xh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=1024,Ty=30*24*60*60*1e3;class by{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ry(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Ty}),this._storage.overwrite(this._heartbeatsCache))}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zu(),{heartbeatsToSend:r,unsentEntries:s}=Ay(this._heartbeatsCache.heartbeats),i=So(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return en.warn(t),""}}}function Zu(){return new Date().toISOString().substring(0,10)}function Ay(n,e=Ey){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ed(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ed(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kh()?f_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ed(n){return So(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){ir(new Pn("platform-logger",e=>new U_(e),"PRIVATE")),ir(new Pn("heartbeat",e=>new by(e),"PRIVATE")),Ft(cc,Ju,n),Ft(cc,Ju,"esm2017"),Ft("fire-js","")}Sy("");var Py="firebase",Cy="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(Py,Cy,"app");function jc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Zh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ky=Zh,ef=new yi("auth","Firebase",Zh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Uc("@firebase/auth");function Dy(n,...e){Co.logLevel<=ie.WARN&&Co.warn(`Auth (${_r}): ${n}`,...e)}function lo(n,...e){Co.logLevel<=ie.ERROR&&Co.error(`Auth (${_r}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n,...e){throw qc(n,...e)}function Bt(n,...e){return qc(n,...e)}function tf(n,e,t){const r=Object.assign(Object.assign({},ky()),{[e]:t});return new yi("auth","Firebase",r).create(e,{appName:n.name})}function Zt(n){return tf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ef.create(n,...e)}function ee(n,e,...t){if(!n)throw qc(e,...t)}function Wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lo(e),new Error(e)}function tn(n,e){n||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xy(){return td()==="http:"||td()==="https:"}function td(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xy()||u_()||"connection"in navigator)?navigator.onLine:!0}function Ny(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.shortDelay=e,this.longDelay=t,tn(t>e,"Short delay should be less than long delay!"),this.isMobile=a_()||d_()}get(){return Vy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n,e){tn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=new Ii(3e4,6e4);function sn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function on(n,e,t,r,s={}){return rf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=vi(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return l_()||(d.referrerPolicy="no-referrer"),nf.fetch()(sf(n,n.config.apiHost,t,c),d)})}async function rf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ly),e);try{const s=new Fy(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw eo(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw eo(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw eo(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw tf(n,f,d);Pt(n,f)}}catch(s){if(s instanceof qt)throw s;Pt(n,"network-request-failed",{message:String(s)})}}async function wi(n,e,t,r,s={}){const i=await on(n,e,t,r,s);return"mfaPendingCredential"in i&&Pt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function sf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Gc(n.config,s):`${n.config.apiScheme}://${s}`}function Oy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),My.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Bt(n,e,r);return s.customData._tokenResponse=t,s}function nd(n){return n!==void 0&&n.enterprise!==void 0}class By{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Oy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Uy(n,e){return on(n,"GET","/v2/recaptchaConfig",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y(n,e){return on(n,"POST","/v1/accounts:delete",e)}async function of(n,e){return on(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jy(n,e=!1){const t=Se(n),r=await t.getIdToken(e),s=zc(r);ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gs(Wa(s.auth_time)),issuedAtTime:Gs(Wa(s.iat)),expirationTime:Gs(Wa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wa(n){return Number(n)*1e3}function zc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=$h(t);return s?JSON.parse(s):(lo("Failed to decode base64 JWT payload"),null)}catch(s){return lo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rd(n){const e=zc(n);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qt&&qy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ni(n,of(t,{idToken:r}));ee(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?af(i.providerUserInfo):[],c=Ky(n.providerData,o),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new hc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function zy(n){const e=Se(n);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ky(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function af(n){return n.map(e=>{var{providerId:t}=e,r=jc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(n,e){const t=await rf(n,{},async()=>{const r=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=sf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",nf.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Wy(n,e){return on(n,"POST","/v2/accounts:revokeToken",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=rd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Hy(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new qr;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n,e){ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=jc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ni(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jy(this,e)}reload(){return zy(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await ni(this,$y(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,d,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,E=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,$=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:B,isAnonymous:z,providerData:Z,stsTokenManager:w}=t;ee(N&&w,e,"internal-error");const y=qr.fromJSON(this.name,w);ee(typeof N=="string",e,"internal-error"),fn(m,e.name),fn(_,e.name),ee(typeof B=="boolean",e,"internal-error"),ee(typeof z=="boolean",e,"internal-error"),fn(E,e.name),fn(P,e.name),fn(C,e.name),fn(D,e.name),fn($,e.name),fn(F,e.name);const I=new Qt({uid:N,auth:e,email:_,emailVerified:B,displayName:m,isAnonymous:z,photoURL:P,phoneNumber:E,tenantId:C,stsTokenManager:y,createdAt:$,lastLoginAt:F});return Z&&Array.isArray(Z)&&(I.providerData=Z.map(T=>Object.assign({},T))),D&&(I._redirectEventId=D),I}static async _fromIdTokenResponse(e,t,r=!1){const s=new qr;s.updateFromServerResponse(t);const i=new Qt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ko(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?af(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new qr;c.updateFromIdToken(r);const l=new Qt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=new Map;function Jt(n){tn(n instanceof Function,"Expected a class definition");let e=sd.get(n);return e?(tn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cf.type="NONE";const id=cf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n,e,t){return`firebase:${n}:${e}:${t}`}class Gr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=uo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gr(Jt(id),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Jt(id);const o=uo(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(o);if(f){const m=Qt._fromJSON(e,f);d!==i&&(c=m),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Gr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Gr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mf(e))return"Blackberry";if(pf(e))return"Webos";if(uf(e))return"Safari";if((e.includes("chrome/")||df(e))&&!e.includes("edge/"))return"Chrome";if(ff(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lf(n=Oe()){return/firefox\//i.test(n)}function uf(n=Oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function df(n=Oe()){return/crios\//i.test(n)}function hf(n=Oe()){return/iemobile/i.test(n)}function ff(n=Oe()){return/android/i.test(n)}function mf(n=Oe()){return/blackberry/i.test(n)}function pf(n=Oe()){return/webos/i.test(n)}function Kc(n=Oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Qy(n=Oe()){var e;return Kc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jy(){return h_()&&document.documentMode===10}function gf(n=Oe()){return Kc(n)||ff(n)||pf(n)||mf(n)||/windows phone/i.test(n)||hf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(n,e=[]){let t;switch(n){case"Browser":t=od(Oe());break;case"Worker":t=`${od(Oe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,e={}){return on(n,"GET","/v2/passwordPolicy",sn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=6;class ev{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Zy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ad(this),this.idTokenSubscription=new ad(this),this.beforeStateQueue=new Yy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ef,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await of(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ny()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(Zt(this));const t=e?Se(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xy(this),t=new ev(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Wy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jt(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[Jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_f(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Dy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function xn(n){return Se(n)}class ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=y_(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nv(n){ea=n}function yf(n){return ea.loadJS(n)}function rv(){return ea.recaptchaEnterpriseScript}function sv(){return ea.gapiScript}function iv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ov="recaptcha-enterprise",av="NO_RECAPTCHA";class cv{constructor(e){this.type=ov,this.auth=xn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Uy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new By(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;nd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(av)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&nd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=rv();l.length!==0&&(l+=c),yf(l).then(()=>{s(c,i,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function cd(n,e,t,r=!1){const s=new cv(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Do(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await cd(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cd(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n,e){const t=Zo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ei(i,e??{}))return s;Pt(s,"already-initialized")}return t.initialize({options:e})}function uv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Jt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dv(n,e,t){const r=xn(n);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vf(e),{host:o,port:c}=hv(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),fv()}function vf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hv(n){const e=vf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ld(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ld(o)}}}function ld(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,t){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function mv(n,e){return on(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(n,e){return wi(n,"POST","/v1/accounts:signInWithPassword",sn(n,e))}async function gv(n,e){return on(n,"POST","/v1/accounts:sendOobCode",sn(n,e))}async function _v(n,e){return gv(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(n,e){return wi(n,"POST","/v1/accounts:signInWithEmailLink",sn(n,e))}async function vv(n,e){return wi(n,"POST","/v1/accounts:signInWithEmailLink",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Hc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ri(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ri(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,t,"signInWithPassword",pv);case"emailLink":return yv(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,r,"signUpPassword",mv);case"emailLink":return vv(e,{idToken:t,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(n,e){return wi(n,"POST","/v1/accounts:signInWithIdp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="http://localhost";class or extends Hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=jc(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new or(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return zr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zr(e,t)}buildRequest(){const e={requestUri:Iv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ev(n){const e=Ns(Ls(n)).link,t=e?Ns(Ls(e)).deep_link_id:null,r=Ns(Ls(n)).deep_link_id;return(r?Ns(Ls(r)).link:null)||r||t||e||n}class Wc{constructor(e){var t,r,s,i,o,c;const l=Ns(Ls(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=wv((s=l.mode)!==null&&s!==void 0?s:null);ee(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Ev(e);try{return new Wc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,t){return ri._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wc.parseLink(t);return ee(r,"argument-error"),ri._fromEmailAndCode(e,r.code,r.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends If{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Ei{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return or._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _n.credential(t,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Ei{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Ei{constructor(){super("twitter.com")}static credential(e,t){return or._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vn.credential(t,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tv(n,e){return wi(n,"POST","/v1/accounts:signUp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Qt._fromIdTokenResponse(e,r,s),o=ud(r);return new ar({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ud(r);return new ar({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ud(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends qt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new xo(e,t,r,s)}}function wf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(n,i,e,r):i})}async function bv(n,e,t=!1){const r=await ni(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ar._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(n,e,t=!1){const{auth:r}=n;if(Lt(r.app))return Promise.reject(Zt(r));const s="reauthenticate";try{const i=await ni(n,wf(r,s,e,n),t);ee(i.idToken,r,"internal-error");const o=zc(i.idToken);ee(o,r,"internal-error");const{sub:c}=o;return ee(n.uid===c,r,"user-mismatch"),ar._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(n,e,t=!1){if(Lt(n.app))return Promise.reject(Zt(n));const r="signIn",s=await wf(n,r,e),i=await ar._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Rv(n,e){return Ef(xn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tf(n){const e=xn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Sv(n,e,t){const r=xn(n);await Do(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",_v)}async function Pv(n,e,t){if(Lt(n.app))return Promise.reject(Zt(n));const r=xn(n),o=await Do(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Tv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Tf(n),l}),c=await ar._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Cv(n,e,t){return Lt(n.app)?Promise.reject(Zt(n)):Rv(Se(n),os.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tf(n),r})}function kv(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function Dv(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function xv(n,e,t,r){return Se(n).onAuthStateChanged(e,t,r)}function Vv(n){return Se(n).signOut()}const Vo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=1e3,Lv=10;class Af extends bf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Jy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Lv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Nv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Af.type="LOCAL";const Mv=Af;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends bf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rf.type="SESSION";const Sf=Rf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,i)),l=await Ov(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const d=Qc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function Bv(n){Ut().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function Uv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $v(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jv(){return Pf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="firebaseLocalStorageDb",qv=1,No="firebaseLocalStorage",kf="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function na(n,e){return n.transaction([No],e?"readwrite":"readonly").objectStore(No)}function Gv(){const n=indexedDB.deleteDatabase(Cf);return new Ti(n).toPromise()}function fc(){const n=indexedDB.open(Cf,qv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(No,{keyPath:kf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(No)?e(r):(r.close(),await Gv(),e(await fc()))})})}async function dd(n,e,t){const r=na(n,!0).put({[kf]:e,value:t});return new Ti(r).toPromise()}async function zv(n,e){const t=na(n,!1).get(e),r=await new Ti(t).toPromise();return r===void 0?null:r.value}function hd(n,e){const t=na(n,!0).delete(e);return new Ti(t).toPromise()}const Kv=800,Hv=3;class Df{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Hv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(jv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Uv(),!this.activeServiceWorker)return;this.sender=new Fv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$v()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fc();return await dd(e,Vo,"1"),await hd(e,Vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=na(s,!1).getAll();return new Ti(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Df.type="LOCAL";const Wv=Df;new Ii(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(n,e){return e?Jt(e):(ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Jv(n){return Ef(n.auth,new Jc(n),n.bypassAuthState)}function Yv(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),Av(t,new Jc(n),n.bypassAuthState)}async function Xv(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),bv(t,new Jc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jv;case"linkViaPopup":case"linkViaRedirect":return Xv;case"reauthViaPopup":case"reauthViaRedirect":return Yv;default:Pt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new Ii(2e3,1e4);class jr extends xf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zv.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="pendingRedirect",ho=new Map;class tI extends xf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ho.get(this.auth._key());if(!e){try{const r=await nI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ho.set(this.auth._key(),e)}return this.bypassAuthState||ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nI(n,e){const t=iI(e),r=sI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function rI(n,e){ho.set(n._key(),e)}function sI(n){return Jt(n._redirectPersistence)}function iI(n){return uo(eI,n.config.apiKey,n.name)}async function oI(n,e,t=!1){if(Lt(n.app))return Promise.reject(Zt(n));const r=xn(n),s=Qv(r,e),o=await new tI(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=10*60*1e3;class cI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Vf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Bt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aI&&this.cachedEventUids.clear(),this.cachedEventUids.has(fd(e))}saveEventToCache(e){this.cachedEventUids.add(fd(e)),this.lastProcessedEventTime=Date.now()}}function fd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(n,e={}){return on(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hI=/^https?/;async function fI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uI(n);for(const t of e)try{if(mI(t))return}catch{}Pt(n,"unauthorized-domain")}function mI(n){const e=dc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!hI.test(t))return!1;if(dI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new Ii(3e4,6e4);function md(){const n=Ut().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function gI(n){return new Promise((e,t)=>{var r,s,i;function o(){md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{md(),t(Bt(n,"network-request-failed"))},timeout:pI.get()})}if(!((s=(r=Ut().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)o();else{const c=iv("iframefcb");return Ut()[c]=()=>{gapi.load?o():t(Bt(n,"network-request-failed"))},yf(`${sv()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw fo=null,e})}let fo=null;function _I(n){return fo=fo||gI(n),fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new Ii(5e3,15e3),vI="__/auth/iframe",II="emulator/auth/iframe",wI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TI(n){const e=n.config;ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gc(e,II):`https://${n.config.authDomain}/${vI}`,r={apiKey:e.apiKey,appName:n.name,v:_r},s=EI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${vi(r).slice(1)}`}async function bI(n){const e=await _I(n),t=Ut().gapi;return ee(t,n,"internal-error"),e.open({where:document.body,url:TI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(n,"network-request-failed"),c=Ut().setTimeout(()=>{i(o)},yI.get());function l(){Ut().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RI=500,SI=600,PI="_blank",CI="http://localhost";class pd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kI(n,e,t,r=RI,s=SI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},AI),{width:r.toString(),height:s.toString(),top:i,left:o}),d=Oe().toLowerCase();t&&(c=df(d)?PI:t),lf(d)&&(e=e||CI,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[E,P])=>`${_}${E}=${P},`,"");if(Qy(d)&&c!=="_self")return DI(e||"",c),new pd(null);const m=window.open(e||"",c,f);ee(m,n,"popup-blocked");try{m.focus()}catch{}return new pd(m)}function DI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="__/auth/handler",VI="emulator/auth/handler",NI=encodeURIComponent("fac");async function gd(n,e,t,r,s,i){ee(n.config.authDomain,n,"auth-domain-config-required"),ee(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_r,eventId:s};if(e instanceof If){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",__(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ei){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${NI}=${encodeURIComponent(l)}`:"";return`${LI(n)}?${vi(c).slice(1)}${d}`}function LI({config:n}){return n.emulator?Gc(n,VI):`https://${n.authDomain}/${xI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="webStorageSupport";class MI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sf,this._completeRedirectFn=oI,this._overrideRedirectResult=rI}async _openPopup(e,t,r,s){var i;tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await gd(e,t,r,dc(),s);return kI(e,o,Qc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await gd(e,t,r,dc(),s);return Bv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await bI(e),r=new cI(e);return t.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qa,{type:Qa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qa];o!==void 0&&t(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gf()||uf()||Kc()}}const OI=MI;var _d="@firebase/auth",yd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UI(n){ir(new Pn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_f(n)},d=new tv(r,s,i,l);return uv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ir(new Pn("auth-internal",e=>{const t=xn(e.getProvider("auth").getImmediate());return(r=>new FI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(_d,yd,BI(n)),Ft(_d,yd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=5*60,jI=Gh("authIdTokenMaxAge")||$I;let vd=null;const qI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>jI)return;const s=t==null?void 0:t.token;vd!==s&&(vd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GI(n=Jh()){const e=Zo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=lv(n,{popupRedirectResolver:OI,persistence:[Wv,Mv,Sf]}),r=Gh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qI(i.toString());Dv(t,o,()=>o(t.currentUser)),kv(t,c=>o(c))}}const s=jh("auth");return s&&dv(t,`http://${s}`),t}function zI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}nv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Bt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",zI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UI("Browser");var Id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tr,Nf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.D=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(T,b,R){for(var v=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)v[qe-2]=arguments[qe];return y.prototype[b].apply(T,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,I){I||(I=0);var T=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)T[b]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(b=0;16>b;++b)T[b]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],b=w.g[2];var R=w.g[3],v=y+(R^I&(b^R))+T[0]+3614090360&4294967295;y=I+(v<<7&4294967295|v>>>25),v=R+(b^y&(I^b))+T[1]+3905402710&4294967295,R=y+(v<<12&4294967295|v>>>20),v=b+(I^R&(y^I))+T[2]+606105819&4294967295,b=R+(v<<17&4294967295|v>>>15),v=I+(y^b&(R^y))+T[3]+3250441966&4294967295,I=b+(v<<22&4294967295|v>>>10),v=y+(R^I&(b^R))+T[4]+4118548399&4294967295,y=I+(v<<7&4294967295|v>>>25),v=R+(b^y&(I^b))+T[5]+1200080426&4294967295,R=y+(v<<12&4294967295|v>>>20),v=b+(I^R&(y^I))+T[6]+2821735955&4294967295,b=R+(v<<17&4294967295|v>>>15),v=I+(y^b&(R^y))+T[7]+4249261313&4294967295,I=b+(v<<22&4294967295|v>>>10),v=y+(R^I&(b^R))+T[8]+1770035416&4294967295,y=I+(v<<7&4294967295|v>>>25),v=R+(b^y&(I^b))+T[9]+2336552879&4294967295,R=y+(v<<12&4294967295|v>>>20),v=b+(I^R&(y^I))+T[10]+4294925233&4294967295,b=R+(v<<17&4294967295|v>>>15),v=I+(y^b&(R^y))+T[11]+2304563134&4294967295,I=b+(v<<22&4294967295|v>>>10),v=y+(R^I&(b^R))+T[12]+1804603682&4294967295,y=I+(v<<7&4294967295|v>>>25),v=R+(b^y&(I^b))+T[13]+4254626195&4294967295,R=y+(v<<12&4294967295|v>>>20),v=b+(I^R&(y^I))+T[14]+2792965006&4294967295,b=R+(v<<17&4294967295|v>>>15),v=I+(y^b&(R^y))+T[15]+1236535329&4294967295,I=b+(v<<22&4294967295|v>>>10),v=y+(b^R&(I^b))+T[1]+4129170786&4294967295,y=I+(v<<5&4294967295|v>>>27),v=R+(I^b&(y^I))+T[6]+3225465664&4294967295,R=y+(v<<9&4294967295|v>>>23),v=b+(y^I&(R^y))+T[11]+643717713&4294967295,b=R+(v<<14&4294967295|v>>>18),v=I+(R^y&(b^R))+T[0]+3921069994&4294967295,I=b+(v<<20&4294967295|v>>>12),v=y+(b^R&(I^b))+T[5]+3593408605&4294967295,y=I+(v<<5&4294967295|v>>>27),v=R+(I^b&(y^I))+T[10]+38016083&4294967295,R=y+(v<<9&4294967295|v>>>23),v=b+(y^I&(R^y))+T[15]+3634488961&4294967295,b=R+(v<<14&4294967295|v>>>18),v=I+(R^y&(b^R))+T[4]+3889429448&4294967295,I=b+(v<<20&4294967295|v>>>12),v=y+(b^R&(I^b))+T[9]+568446438&4294967295,y=I+(v<<5&4294967295|v>>>27),v=R+(I^b&(y^I))+T[14]+3275163606&4294967295,R=y+(v<<9&4294967295|v>>>23),v=b+(y^I&(R^y))+T[3]+4107603335&4294967295,b=R+(v<<14&4294967295|v>>>18),v=I+(R^y&(b^R))+T[8]+1163531501&4294967295,I=b+(v<<20&4294967295|v>>>12),v=y+(b^R&(I^b))+T[13]+2850285829&4294967295,y=I+(v<<5&4294967295|v>>>27),v=R+(I^b&(y^I))+T[2]+4243563512&4294967295,R=y+(v<<9&4294967295|v>>>23),v=b+(y^I&(R^y))+T[7]+1735328473&4294967295,b=R+(v<<14&4294967295|v>>>18),v=I+(R^y&(b^R))+T[12]+2368359562&4294967295,I=b+(v<<20&4294967295|v>>>12),v=y+(I^b^R)+T[5]+4294588738&4294967295,y=I+(v<<4&4294967295|v>>>28),v=R+(y^I^b)+T[8]+2272392833&4294967295,R=y+(v<<11&4294967295|v>>>21),v=b+(R^y^I)+T[11]+1839030562&4294967295,b=R+(v<<16&4294967295|v>>>16),v=I+(b^R^y)+T[14]+4259657740&4294967295,I=b+(v<<23&4294967295|v>>>9),v=y+(I^b^R)+T[1]+2763975236&4294967295,y=I+(v<<4&4294967295|v>>>28),v=R+(y^I^b)+T[4]+1272893353&4294967295,R=y+(v<<11&4294967295|v>>>21),v=b+(R^y^I)+T[7]+4139469664&4294967295,b=R+(v<<16&4294967295|v>>>16),v=I+(b^R^y)+T[10]+3200236656&4294967295,I=b+(v<<23&4294967295|v>>>9),v=y+(I^b^R)+T[13]+681279174&4294967295,y=I+(v<<4&4294967295|v>>>28),v=R+(y^I^b)+T[0]+3936430074&4294967295,R=y+(v<<11&4294967295|v>>>21),v=b+(R^y^I)+T[3]+3572445317&4294967295,b=R+(v<<16&4294967295|v>>>16),v=I+(b^R^y)+T[6]+76029189&4294967295,I=b+(v<<23&4294967295|v>>>9),v=y+(I^b^R)+T[9]+3654602809&4294967295,y=I+(v<<4&4294967295|v>>>28),v=R+(y^I^b)+T[12]+3873151461&4294967295,R=y+(v<<11&4294967295|v>>>21),v=b+(R^y^I)+T[15]+530742520&4294967295,b=R+(v<<16&4294967295|v>>>16),v=I+(b^R^y)+T[2]+3299628645&4294967295,I=b+(v<<23&4294967295|v>>>9),v=y+(b^(I|~R))+T[0]+4096336452&4294967295,y=I+(v<<6&4294967295|v>>>26),v=R+(I^(y|~b))+T[7]+1126891415&4294967295,R=y+(v<<10&4294967295|v>>>22),v=b+(y^(R|~I))+T[14]+2878612391&4294967295,b=R+(v<<15&4294967295|v>>>17),v=I+(R^(b|~y))+T[5]+4237533241&4294967295,I=b+(v<<21&4294967295|v>>>11),v=y+(b^(I|~R))+T[12]+1700485571&4294967295,y=I+(v<<6&4294967295|v>>>26),v=R+(I^(y|~b))+T[3]+2399980690&4294967295,R=y+(v<<10&4294967295|v>>>22),v=b+(y^(R|~I))+T[10]+4293915773&4294967295,b=R+(v<<15&4294967295|v>>>17),v=I+(R^(b|~y))+T[1]+2240044497&4294967295,I=b+(v<<21&4294967295|v>>>11),v=y+(b^(I|~R))+T[8]+1873313359&4294967295,y=I+(v<<6&4294967295|v>>>26),v=R+(I^(y|~b))+T[15]+4264355552&4294967295,R=y+(v<<10&4294967295|v>>>22),v=b+(y^(R|~I))+T[6]+2734768916&4294967295,b=R+(v<<15&4294967295|v>>>17),v=I+(R^(b|~y))+T[13]+1309151649&4294967295,I=b+(v<<21&4294967295|v>>>11),v=y+(b^(I|~R))+T[4]+4149444226&4294967295,y=I+(v<<6&4294967295|v>>>26),v=R+(I^(y|~b))+T[11]+3174756917&4294967295,R=y+(v<<10&4294967295|v>>>22),v=b+(y^(R|~I))+T[2]+718787259&4294967295,b=R+(v<<15&4294967295|v>>>17),v=I+(R^(b|~y))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var I=y-this.blockSize,T=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=I;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(T[b++]=w.charCodeAt(R++),b==this.blockSize){s(this,T),b=0;break}}else for(;R<y;)if(T[b++]=w[R++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var I=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=I&255,I/=256;for(this.u(w),w=Array(16),y=I=0;4>y;++y)for(var T=0;32>T;T+=8)w[I++]=this.g[y]>>>T&255;return w};function i(w,y){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;for(var I=[],T=!0,b=w.length-1;0<=b;b--){var R=w[b]|0;T&&R==y||(I[b]=R,T=!1)}this.g=I}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return D(d(-w));for(var y=[],I=1,T=0;w>=I;T++)y[T]=w/I|0,I*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return D(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(y,8)),T=m,b=0;b<w.length;b+=8){var R=Math.min(8,w.length-b),v=parseInt(w.substring(b,b+R),y);8>R?(R=d(Math.pow(y,R)),T=T.j(R).add(d(v))):(T=T.j(I),T=T.add(d(v)))}return T}var m=l(0),_=l(1),E=l(16777216);n=o.prototype,n.m=function(){if(C(this))return-D(this).m();for(var w=0,y=1,I=0;I<this.g.length;I++){var T=this.i(I);w+=(0<=T?T:4294967296+T)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(C(this))return"-"+D(this).toString(w);for(var y=d(Math.pow(w,6)),I=this,T="";;){var b=B(I,y).g;I=$(I,b.j(y));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=b,P(I))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function C(w){return w.h==-1}n.l=function(w){return w=$(this,w),C(w)?-1:P(w)?0:1};function D(w){for(var y=w.g.length,I=[],T=0;T<y;T++)I[T]=~w.g[T];return new o(I,~w.h).add(_)}n.abs=function(){return C(this)?D(this):this},n.add=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],T=0,b=0;b<=y;b++){var R=T+(this.i(b)&65535)+(w.i(b)&65535),v=(R>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);T=v>>>16,R&=65535,v&=65535,I[b]=v<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function $(w,y){return w.add(D(y))}n.j=function(w){if(P(this)||P(w))return m;if(C(this))return C(w)?D(this).j(D(w)):D(D(this).j(w));if(C(w))return D(this.j(D(w)));if(0>this.l(E)&&0>w.l(E))return d(this.m()*w.m());for(var y=this.g.length+w.g.length,I=[],T=0;T<2*y;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<w.g.length;b++){var R=this.i(T)>>>16,v=this.i(T)&65535,qe=w.i(b)>>>16,Dt=w.i(b)&65535;I[2*T+2*b]+=v*Dt,F(I,2*T+2*b),I[2*T+2*b+1]+=R*Dt,F(I,2*T+2*b+1),I[2*T+2*b+1]+=v*qe,F(I,2*T+2*b+1),I[2*T+2*b+2]+=R*qe,F(I,2*T+2*b+2)}for(T=0;T<y;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=y;T<2*y;T++)I[T]=0;return new o(I,0)};function F(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function N(w,y){this.g=w,this.h=y}function B(w,y){if(P(y))throw Error("division by zero");if(P(w))return new N(m,m);if(C(w))return y=B(D(w),y),new N(D(y.g),D(y.h));if(C(y))return y=B(w,D(y)),new N(D(y.g),y.h);if(30<w.g.length){if(C(w)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var I=_,T=y;0>=T.l(w);)I=z(I),T=z(T);var b=Z(I,1),R=Z(T,1);for(T=Z(T,2),I=Z(I,2);!P(T);){var v=R.add(T);0>=v.l(w)&&(b=b.add(I),R=v),T=Z(T,1),I=Z(I,1)}return y=$(w,b.j(y)),new N(b,y)}for(b=m;0<=w.l(y);){for(I=Math.max(1,Math.floor(w.m()/y.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=d(I),v=R.j(y);C(v)||0<v.l(w);)I-=T,R=d(I),v=R.j(y);P(R)&&(R=_),b=b.add(R),w=$(w,v)}return new N(b,w)}n.A=function(w){return B(this,w).h},n.and=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)&w.i(T);return new o(I,this.h&w.h)},n.or=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)|w.i(T);return new o(I,this.h|w.h)},n.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)^w.i(T);return new o(I,this.h^w.h)};function z(w){for(var y=w.g.length+1,I=[],T=0;T<y;T++)I[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(I,w.h)}function Z(w,y){var I=y>>5;y%=32;for(var T=w.g.length-I,b=[],R=0;R<T;R++)b[R]=0<y?w.i(R+I)>>>y|w.i(R+I+1)<<32-y:w.i(R+I);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Nf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,tr=o}).apply(typeof Id<"u"?Id:typeof self<"u"?self:typeof window<"u"?window:{});var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lf,Ms,Mf,mo,mc,Of,Ff,Bf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,h){return a==Array.prototype||a==Object.prototype||(a[u]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof to=="object"&&to];for(var u=0;u<a.length;++u){var h=a[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var h=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in h))break e;h=h[A]}a=a[a.length-1],g=h[a],u=u(g),u!=g&&u!=null&&e(h,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var h=0,g=!1,A={next:function(){if(!g&&h<a.length){var k=h++;return{value:u(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function d(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,h){return a.call.apply(a.bind,arguments)}function m(a,u,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,g),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function _(a,u,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function E(a,u){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,u){function h(){}h.prototype=u.prototype,a.aa=u.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,A,k){for(var L=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)L[_e-2]=arguments[_e];return u.prototype[A].apply(g,L)}}function C(a){const u=a.length;if(0<u){const h=Array(u);for(let g=0;g<u;g++)h[g]=a[g];return h}return[]}function D(a,u){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(l(g)){const A=a.length||0,k=g.length||0;a.length=A+k;for(let L=0;L<k;L++)a[A+L]=g[L]}else a.push(g)}}class ${constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var z=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function Z(a,u,h){for(const g in a)u.call(h,a[g],g,a)}function w(a,u){for(const h in a)u.call(void 0,a[h],h,a)}function y(a){const u={};for(const h in a)u[h]=a[h];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let h,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(h in g)a[h]=g[h];for(let k=0;k<I.length;k++)h=I[k],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function b(a){var u=1;a=a.split(":");const h=[];for(;0<u&&a.length;)h.push(a.shift()),u--;return a.length&&h.push(a.join(":")),h}function R(a){c.setTimeout(()=>{throw a},0)}function v(){var a=Bn;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class qe{constructor(){this.h=this.g=null}add(u,h){const g=Dt.get();g.set(u,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Dt=new $(()=>new Er,a=>a.reset());class Er{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Gt,zt=!1,Bn=new qe,dt=()=>{const a=c.Promise.resolve(void 0);Gt=()=>{a.then(Li)}};var Li=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(h){R(h)}var u=Dt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}zt=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var Tr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return a}();function Un(a,u){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(z){e:{try{B(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else h=="mouseover"?u=a.fromElement:h=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Un.aa.h.call(this)}}P(Un,ke);var wt={2:"touch",3:"pen",4:"mouse"};Un.prototype.h=function(){Un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),Mi=0;function Oi(a,u,h,g,A){this.listener=a,this.proxy=null,this.src=u,this.type=h,this.capture=!!g,this.ha=A,this.key=++Mi,this.da=this.fa=!1}function $n(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function jn(a){this.src=a,this.g={},this.h=0}jn.prototype.add=function(a,u,h,g,A){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var L=Ar(a,u,g,A);return-1<L?(u=a[L],h||(u.fa=!1)):(u=new Oi(u,this.src,k,!!g,A),u.fa=h,a.push(u)),u};function br(a,u){var h=u.type;if(h in a.g){var g=a.g[h],A=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=A)&&Array.prototype.splice.call(g,A,1),k&&($n(u),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Ar(a,u,h,g){for(var A=0;A<a.length;++A){var k=a[A];if(!k.da&&k.listener==u&&k.capture==!!h&&k.ha==g)return A}return-1}var Rr="closure_lm_"+(1e6*Math.random()|0),Sr={};function ms(a,u,h,g,A){if(Array.isArray(u)){for(var k=0;k<u.length;k++)ms(a,u[k],h,g,A);return null}return h=de(h),a&&a[Et]?a.K(u,h,d(g)?!!g.capture:!1,A):Fi(a,u,h,!1,g,A)}function Fi(a,u,h,g,A,k){if(!u)throw Error("Invalid event type");var L=d(A)?!!A.capture:!!A,_e=fe(a);if(_e||(a[Rr]=_e=new jn(a)),h=_e.add(u,h,g,L,k),h.proxy)return h;if(g=j(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)Tr||(A=L),A===void 0&&(A=!1),a.addEventListener(u.toString(),g,A);else if(a.attachEvent)a.attachEvent(Q(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function j(){function a(h){return u.call(a.src,a.listener,h)}const u=J;return a}function O(a,u,h,g,A){if(Array.isArray(u))for(var k=0;k<u.length;k++)O(a,u[k],h,g,A);else g=d(g)?!!g.capture:!!g,h=de(h),a&&a[Et]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],h=Ar(k,h,g,A),-1<h&&($n(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=fe(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Ar(u,h,g,A)),(h=-1<a?u[a]:null)&&W(h))}function W(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Et])br(u.i,a);else{var h=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(h,g,a.capture):u.detachEvent?u.detachEvent(Q(h),g):u.addListener&&u.removeListener&&u.removeListener(g),(h=fe(u))?(br(h,a),h.h==0&&(h.src=null,u[Rr]=null)):$n(a)}}}function Q(a){return a in Sr?Sr[a]:Sr[a]="on"+a}function J(a,u){if(a.da)a=!0;else{u=new Un(u,this);var h=a.listener,g=a.ha||a.src;a.fa&&W(a),a=h.call(g,u)}return a}function fe(a){return a=a[Rr],a instanceof jn?a:null}var ye="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(a){return typeof a=="function"?a:(a[ye]||(a[ye]=function(u){return a.handleEvent(u)}),a[ye])}function re(){ht.call(this),this.i=new jn(this),this.M=this,this.F=null}P(re,ht),re.prototype[Et]=!0,re.prototype.removeEventListener=function(a,u,h,g){O(this,a,u,h,g)};function ae(a,u){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new ke(u,a);else if(u instanceof ke)u.target=u.target||a;else{var A=u;u=new ke(g,a),T(u,A)}if(A=!0,h)for(var k=h.length-1;0<=k;k--){var L=u.g=h[k];A=et(L,g,!0,u)&&A}if(L=u.g=a,A=et(L,g,!0,u)&&A,A=et(L,g,!1,u)&&A,h)for(k=0;k<h.length;k++)L=u.g=h[k],A=et(L,g,!1,u)&&A}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var h=a.g[u],g=0;g<h.length;g++)$n(h[g]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,h,g){return this.i.add(String(a),u,!1,h,g)},re.prototype.L=function(a,u,h,g){return this.i.add(String(a),u,!0,h,g)};function et(a,u,h,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,k=0;k<u.length;++k){var L=u[k];if(L&&!L.da&&L.capture==h){var _e=L.listener,Ue=L.ha||L.src;L.fa&&br(a.i,L),A=_e.call(Ue,g)!==!1&&A}}return A&&!g.defaultPrevented}function Ve(a,u,h){if(typeof a=="function")h&&(a=_(a,h));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Ne(a){a.g=Ve(()=>{a.g=null,a.i&&(a.i=!1,Ne(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Tt extends ht{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ne(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){ht.call(this),this.h=a,this.g={}}P(ft,ht);var ge=[];function tt(a){Z(a.g,function(u,h){this.g.hasOwnProperty(h)&&W(u)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),tt(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xt=c.JSON.stringify,bt=c.JSON.parse,Pr=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ge(){}Ge.prototype.h=null;function ze(a){return a.h||(a.h=a.i())}function qn(){}var At={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cn(){ke.call(this,"d")}P(cn,ke);function ps(){ke.call(this,"c")}P(ps,ke);var Ie={},ln=null;function Bi(){return ln=ln||new re}Ie.La="serverreachability";function ru(a){ke.call(this,Ie.La,a)}P(ru,ke);function gs(a){const u=Bi();ae(u,new ru(u))}Ie.STAT_EVENT="statevent";function su(a,u){ke.call(this,Ie.STAT_EVENT,a),this.stat=u}P(su,ke);function nt(a){const u=Bi();ae(u,new su(u,a))}Ie.Ma="timingevent";function iu(a,u){ke.call(this,Ie.Ma,a),this.size=u}P(iu,ke);function _s(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function ys(){this.g=!0}ys.prototype.xa=function(){this.g=!1};function Pg(a,u,h,g,A,k){a.info(function(){if(a.g)if(k)for(var L="",_e=k.split("&"),Ue=0;Ue<_e.length;Ue++){var ue=_e[Ue].split("=");if(1<ue.length){var Ke=ue[0];ue=ue[1];var He=Ke.split("_");L=2<=He.length&&He[1]=="type"?L+(Ke+"="+ue+"&"):L+(Ke+"=redacted&")}}else L=null;else L=k;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+u+`
`+h+`
`+L})}function Cg(a,u,h,g,A,k,L){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+u+`
`+h+`
`+k+" "+L})}function Cr(a,u,h,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Dg(a,h)+(g?" "+g:"")})}function kg(a,u){a.info(function(){return"TIMEOUT: "+u})}ys.prototype.info=function(){};function Dg(a,u){if(!a.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var A=g[1];if(Array.isArray(A)&&!(1>A.length)){var k=A[0];if(k!="noop"&&k!="stop"&&k!="close")for(var L=1;L<A.length;L++)A[L]=""}}}}return xt(h)}catch{return u}}var Ui={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ou={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Da;function $i(){}P($i,Ge),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},Da=new $i;function un(a,u,h,g){this.j=a,this.i=u,this.l=h,this.R=g||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new au}function au(){this.i=null,this.g="",this.h=!1}var cu={},xa={};function Va(a,u,h){a.L=1,a.v=zi(Kt(u)),a.m=h,a.P=!0,lu(a,null)}function lu(a,u){a.F=Date.now(),ji(a),a.A=Kt(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Tu(h.i,"t",g),a.C=0,h=a.j.J,a.h=new au,a.g=$u(a.j,h?u:null,!a.m),0<a.O&&(a.M=new Tt(_(a.Y,a,a.g),a.O)),u=a.U,h=a.g,g=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(ge[0]=A.toString()),A=ge);for(var k=0;k<A.length;k++){var L=ms(h,A[k],g||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),gs(),Pg(a.i,a.u,a.A,a.l,a.R,a.m)}un.prototype.ca=function(a){a=a.target;const u=this.M;u&&Ht(a)==3?u.j():this.Y(a)},un.prototype.Y=function(a){try{if(a==this.g)e:{const He=Ht(this.g);var u=this.g.Ba();const xr=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||ku(this.g)))){this.J||He!=4||u==7||(u==8||0>=xr?gs(3):gs(2)),Na(this);var h=this.g.Z();this.X=h;t:if(uu(this)){var g=ku(this.g);a="";var A=g.length,k=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),vs(this);var L="";break t}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(k&&u==A-1)});g.length=0,this.h.g+=a,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,Cg(this.i,this.u,this.A,this.l,this.R,He,h),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,Ue=this.g;if((_e=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(_e)){var ue=_e;break t}}ue=null}if(h=ue)Cr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,La(this,h);else{this.o=!1,this.s=3,nt(12),Gn(this),vs(this);break e}}if(this.P){h=!0;let Rt;for(;!this.J&&this.C<L.length;)if(Rt=xg(this,L),Rt==xa){He==4&&(this.s=4,nt(14),h=!1),Cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==cu){this.s=4,nt(15),Cr(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else Cr(this.i,this.l,Rt,null),La(this,Rt);if(uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||L.length!=0||this.h.h||(this.s=1,nt(16),h=!1),this.o=this.o&&h,!h)Cr(this.i,this.l,L,"[Invalid Chunked Response]"),Gn(this),vs(this);else if(0<L.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),$a(Ke),Ke.M=!0,nt(11))}}else Cr(this.i,this.l,L,null),La(this,L);He==4&&Gn(this),this.o&&!this.J&&(He==4?Ou(this.j,this):(this.o=!1,ji(this)))}else Qg(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),Gn(this),vs(this)}}}catch{}finally{}};function uu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function xg(a,u){var h=a.C,g=u.indexOf(`
`,h);return g==-1?xa:(h=Number(u.substring(h,g)),isNaN(h)?cu:(g+=1,g+h>u.length?xa:(u=u.slice(g,g+h),a.C=g+h,u)))}un.prototype.cancel=function(){this.J=!0,Gn(this)};function ji(a){a.S=Date.now()+a.I,du(a,a.I)}function du(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_s(_(a.ba,a),u)}function Na(a){a.B&&(c.clearTimeout(a.B),a.B=null)}un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(kg(this.i,this.A),this.L!=2&&(gs(),nt(17)),Gn(this),this.s=2,vs(this)):du(this,this.S-a)};function vs(a){a.j.G==0||a.J||Ou(a.j,a)}function Gn(a){Na(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,tt(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function La(a,u){try{var h=a.j;if(h.G!=0&&(h.g==a||Ma(h.h,a))){if(!a.K&&Ma(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Yi(h),Qi(h);else break e;Ua(h),nt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=_s(_(h.Za,h),6e3));if(1>=mu(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Kn(h,11)}else if((a.K||h.g==a)&&Yi(h),!F(u))for(A=h.Da.g.parse(u),u=0;u<A.length;u++){let ue=A[u];if(h.T=ue[0],ue=ue[1],h.G==2)if(ue[0]=="c"){h.K=ue[1],h.ia=ue[2];const Ke=ue[3];Ke!=null&&(h.la=Ke,h.j.info("VER="+h.la));const He=ue[4];He!=null&&(h.Aa=He,h.j.info("SVER="+h.Aa));const xr=ue[5];xr!=null&&typeof xr=="number"&&0<xr&&(g=1.5*xr,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Rt=a.g;if(Rt){const Zi=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var k=g.h;k.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Oa(k,k.h),k.h=null))}if(g.D){const ja=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;ja&&(g.ya=ja,we(g.I,g.D,ja))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var L=a;if(g.qa=Uu(g,g.J?g.ia:null,g.W),L.K){pu(g.h,L);var _e=L,Ue=g.L;Ue&&(_e.I=Ue),_e.B&&(Na(_e),ji(_e)),g.g=L}else Lu(g);0<h.i.length&&Ji(h)}else ue[0]!="stop"&&ue[0]!="close"||Kn(h,7);else h.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Kn(h,7):Ba(h):ue[0]!="noop"&&h.l&&h.l.ta(ue),h.v=0)}}gs(4)}catch{}}var Vg=class{constructor(a,u){this.g=a,this.map=u}};function hu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mu(a){return a.h?1:a.g?a.g.size:0}function Ma(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Oa(a,u){a.g?a.g.add(u):a.h=u}function pu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}hu.prototype.cancel=function(){if(this.i=gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const h of a.g.values())u=u.concat(h.D);return u}return C(a.i)}function Ng(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],h=a.length,g=0;g<h;g++)u.push(a[g]);return u}u=[],h=0;for(g in a)u[h++]=a[g];return u}function Lg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var h=0;h<a;h++)u.push(h);return u}u=[],h=0;for(const g in a)u[h++]=g;return u}}}function _u(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var h=Lg(a),g=Ng(a),A=g.length,k=0;k<A;k++)u.call(void 0,g[k],h&&h[k],a)}var yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mg(a,u){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),A=null;if(0<=g){var k=a[h].substring(0,g);A=a[h].substring(g+1)}else k=a[h];u(k,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function zn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zn){this.h=a.h,qi(this,a.j),this.o=a.o,this.g=a.g,Gi(this,a.s),this.l=a.l;var u=a.i,h=new Es;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),vu(this,h),this.m=a.m}else a&&(u=String(a).match(yu))?(this.h=!1,qi(this,u[1]||"",!0),this.o=Is(u[2]||""),this.g=Is(u[3]||"",!0),Gi(this,u[4]),this.l=Is(u[5]||"",!0),vu(this,u[6]||"",!0),this.m=Is(u[7]||"")):(this.h=!1,this.i=new Es(null,this.h))}zn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ws(u,Iu,!0),":");var h=this.g;return(h||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ws(u,Iu,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(ws(h,h.charAt(0)=="/"?Bg:Fg,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",ws(h,$g)),a.join("")};function Kt(a){return new zn(a)}function qi(a,u,h){a.j=h?Is(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Gi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function vu(a,u,h){u instanceof Es?(a.i=u,jg(a.i,a.h)):(h||(u=ws(u,Ug)),a.i=new Es(u,a.h))}function we(a,u,h){a.i.set(u,h)}function zi(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Is(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ws(a,u,h){return typeof a=="string"?(a=encodeURI(a).replace(u,Og),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Og(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Iu=/[#\/\?@]/g,Fg=/[#\?:]/g,Bg=/[#\?]/g,Ug=/[#\?@]/g,$g=/#/g;function Es(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function dn(a){a.g||(a.g=new Map,a.h=0,a.i&&Mg(a.i,function(u,h){a.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Es.prototype,n.add=function(a,u){dn(this),this.i=null,a=kr(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(u),this.h+=1,this};function wu(a,u){dn(a),u=kr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Eu(a,u){return dn(a),u=kr(a,u),a.g.has(u)}n.forEach=function(a,u){dn(this),this.g.forEach(function(h,g){h.forEach(function(A){a.call(u,A,g,this)},this)},this)},n.na=function(){dn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let g=0;g<u.length;g++){const A=a[g];for(let k=0;k<A.length;k++)h.push(u[g])}return h},n.V=function(a){dn(this);let u=[];if(typeof a=="string")Eu(this,a)&&(u=u.concat(this.g.get(kr(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)u=u.concat(a[h])}return u},n.set=function(a,u){return dn(this),this.i=null,a=kr(this,a),Eu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Tu(a,u,h){wu(a,u),0<h.length&&(a.i=null,a.g.set(kr(a,u),C(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var g=u[h];const k=encodeURIComponent(String(g)),L=this.V(g);for(g=0;g<L.length;g++){var A=k;L[g]!==""&&(A+="="+encodeURIComponent(String(L[g]))),a.push(A)}}return this.i=a.join("&")};function kr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function jg(a,u){u&&!a.j&&(dn(a),a.i=null,a.g.forEach(function(h,g){var A=g.toLowerCase();g!=A&&(wu(this,g),Tu(this,A,h))},a)),a.j=u}function qg(a,u){const h=new ys;if(c.Image){const g=new Image;g.onload=E(hn,h,"TestLoadImage: loaded",!0,u,g),g.onerror=E(hn,h,"TestLoadImage: error",!1,u,g),g.onabort=E(hn,h,"TestLoadImage: abort",!1,u,g),g.ontimeout=E(hn,h,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Gg(a,u){const h=new ys,g=new AbortController,A=setTimeout(()=>{g.abort(),hn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(A),k.ok?hn(h,"TestPingServer: ok",!0,u):hn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),hn(h,"TestPingServer: error",!1,u)})}function hn(a,u,h,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(h)}catch{}}function zg(){this.g=new Pr}function Kg(a,u,h){const g=h||"";try{_u(a,function(A,k){let L=A;d(A)&&(L=xt(A)),u.push(g+k+"="+encodeURIComponent(L))})}catch(A){throw u.push(g+"type="+encodeURIComponent("_badmap")),A}}function Ki(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Ki,Ge),Ki.prototype.g=function(){return new Hi(this.l,this.j)},Ki.prototype.i=function(a){return function(){return a}}({});function Hi(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Hi,re),n=Hi.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,bs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ts(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ts(this):bs(this),this.readyState==3&&bu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Ts(this))},n.Qa=function(a){this.g&&(this.response=a,Ts(this))},n.ga=function(){this.g&&Ts(this)};function Ts(a){a.readyState=4,a.l=null,a.j=null,a.v=null,bs(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=u.next();return a.join(`\r
`)};function bs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Au(a){let u="";return Z(a,function(h,g){u+=g,u+=":",u+=h,u+=`\r
`}),u}function Fa(a,u,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=Au(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):we(a,u,h))}function Ae(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ae,re);var Hg=/^https?$/i,Wg=["POST","PUT"];n=Ae.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Da.g(),this.v=this.o?ze(this.o):ze(Da),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){Ru(this,k);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)h.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())h.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Wg,u,void 0))||g||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,L]of h)this.g.setRequestHeader(k,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cu(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){Ru(this,k)}};function Ru(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Su(a),Wi(a)}function Su(a){a.A||(a.A=!0,ae(a,"complete"),ae(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ae(this,"complete"),ae(this,"abort"),Wi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wi(this,!0)),Ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pu(this):this.bb())},n.bb=function(){Pu(this)};function Pu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ht(a)!=4||a.Z()!=2)){if(a.u&&Ht(a)==4)Ve(a.Ea,0,a);else if(ae(a,"readystatechange"),Ht(a)==4){a.h=!1;try{const L=a.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var g;if(g=L===0){var A=String(a.D).match(yu)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),g=!Hg.test(A?A.toLowerCase():"")}h=g}if(h)ae(a,"complete"),ae(a,"success");else{a.m=6;try{var k=2<Ht(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Su(a)}}finally{Wi(a)}}}}function Wi(a,u){if(a.g){Cu(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ae(a,"ready");try{h.onreadystatechange=g}catch{}}}function Cu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Ht(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),bt(u)}};function ku(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Qg(a){const u={};a=(a.g&&2<=Ht(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var h=b(a[g]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=u[A]||[];u[A]=k,k.push(h)}w(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||u}function Du(a){this.Aa=0,this.i=[],this.j=new ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,a),this.cb=As("retryDelaySeedMs",1e4,a),this.Wa=As("forwardChannelMaxRetries",2,a),this.wa=As("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hu(a&&a.concurrentRequestLimit),this.Da=new zg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Du.prototype,n.la=8,n.G=1,n.connect=function(a,u,h,g){nt(0),this.W=a,this.H=u||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=Uu(this,null,this.W),Ji(this)};function Ba(a){if(xu(a),a.G==3){var u=a.U++,h=Kt(a.I);if(we(h,"SID",a.K),we(h,"RID",u),we(h,"TYPE","terminate"),Rs(a,h),u=new un(a,a.j,u),u.L=2,u.v=zi(Kt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=$u(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ji(u)}Bu(a)}function Qi(a){a.g&&($a(a),a.g.cancel(),a.g=null)}function xu(a){Qi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Yi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ji(a){if(!fu(a.h)&&!a.s){a.s=!0;var u=a.Ga;Gt||dt(),zt||(Gt(),zt=!0),Bn.add(u,a),a.B=0}}function Jg(a,u){return mu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_s(_(a.Ga,a,u),Fu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new un(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(A.H=k,k=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Nu(this,A,u),h=Kt(this.I),we(h,"RID",a),we(h,"CVER",22),this.D&&we(h,"X-HTTP-Session-Id",this.D),Rs(this,h),k&&(this.O?u="headers="+encodeURIComponent(String(Au(k)))+"&"+u:this.m&&Fa(h,this.m,k)),Oa(this.h,A),this.Ua&&we(h,"TYPE","init"),this.P?(we(h,"$req",u),we(h,"SID","null"),A.T=!0,Va(A,h,null)):Va(A,h,u),this.G=2}}else this.G==3&&(a?Vu(this,a):this.i.length==0||fu(this.h)||Vu(this))};function Vu(a,u){var h;u?h=u.l:h=a.U++;const g=Kt(a.I);we(g,"SID",a.K),we(g,"RID",h),we(g,"AID",a.T),Rs(a,g),a.m&&a.o&&Fa(g,a.m,a.o),h=new un(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Nu(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Oa(a.h,h),Va(h,g,u)}function Rs(a,u){a.H&&Z(a.H,function(h,g){we(u,g,h)}),a.l&&_u({},function(h,g){we(u,g,h)})}function Nu(a,u,h){h=Math.min(a.i.length,h);var g=a.l?_(a.l.Na,a.l,a):null;e:{var A=a.i;let k=-1;for(;;){const L=["count="+h];k==-1?0<h?(k=A[0].g,L.push("ofs="+k)):k=0:L.push("ofs="+k);let _e=!0;for(let Ue=0;Ue<h;Ue++){let ue=A[Ue].g;const Ke=A[Ue].map;if(ue-=k,0>ue)k=Math.max(0,A[Ue].g-100),_e=!1;else try{Kg(Ke,L,"req"+ue+"_")}catch{g&&g(Ke)}}if(_e){g=L.join("&");break e}}}return a=a.i.splice(0,h),u.D=a,g}function Lu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Gt||dt(),zt||(Gt(),zt=!0),Bn.add(u,a),a.v=0}}function Ua(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_s(_(a.Fa,a),Fu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Mu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_s(_(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Qi(this),Mu(this))};function $a(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Mu(a){a.g=new un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Kt(a.qa);we(u,"RID","rpc"),we(u,"SID",a.K),we(u,"AID",a.T),we(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(u,"TO",a.ja),we(u,"TYPE","xmlhttp"),Rs(a,u),a.m&&a.o&&Fa(u,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=zi(Kt(u)),h.m=null,h.P=!0,lu(h,a)}n.Za=function(){this.C!=null&&(this.C=null,Qi(this),Ua(this),nt(19))};function Yi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Ou(a,u){var h=null;if(a.g==u){Yi(a),$a(a),a.g=null;var g=2}else if(Ma(a.h,u))h=u.D,pu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;g=Bi(),ae(g,new iu(g,h)),Ji(a)}else Lu(a);else if(A=u.s,A==3||A==0&&0<u.X||!(g==1&&Jg(a,u)||g==2&&Ua(a)))switch(h&&0<h.length&&(u=a.h,u.i=u.i.concat(h)),A){case 1:Kn(a,5);break;case 4:Kn(a,10);break;case 3:Kn(a,6);break;default:Kn(a,2)}}}function Fu(a,u){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*u}function Kn(a,u){if(a.j.info("Error code "+u),u==2){var h=_(a.fb,a),g=a.Xa;const A=!g;g=new zn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||qi(g,"https"),zi(g),A?qg(g.toString(),h):Gg(g.toString(),h)}else nt(2);a.G=0,a.l&&a.l.sa(u),Bu(a),xu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Bu(a){if(a.G=0,a.ka=[],a.l){const u=gu(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Uu(a,u,h){var g=h instanceof zn?Kt(h):new zn(h);if(g.g!="")u&&(g.g=u+"."+g.g),Gi(g,g.s);else{var A=c.location;g=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var k=new zn(null);g&&qi(k,g),u&&(k.g=u),A&&Gi(k,A),h&&(k.l=h),g=k}return h=a.D,u=a.ya,h&&u&&we(g,h,u),we(g,"VER",a.la),Rs(a,g),g}function $u(a,u,h){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ae(new Ki({eb:h})):new Ae(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ju(){}n=ju.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xi(){}Xi.prototype.g=function(a,u){return new mt(a,u)};function mt(a,u){re.call(this),this.g=new Du(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Dr(this)}P(mt,re),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){Ba(this.g)},mt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=xt(a),a=h);u.i.push(new Vg(u.Ya++,a)),u.G==3&&Ji(u)},mt.prototype.N=function(){this.g.l=null,delete this.j,Ba(this.g),delete this.g,mt.aa.N.call(this)};function qu(a){cn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const h in u){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}P(qu,cn);function Gu(){ps.call(this),this.status=1}P(Gu,ps);function Dr(a){this.g=a}P(Dr,ju),Dr.prototype.ua=function(){ae(this.g,"a")},Dr.prototype.ta=function(a){ae(this.g,new qu(a))},Dr.prototype.sa=function(a){ae(this.g,new Gu)},Dr.prototype.ra=function(){ae(this.g,"b")},Xi.prototype.createWebChannel=Xi.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,Bf=function(){return new Xi},Ff=function(){return Bi()},Of=Ie,mc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ui.NO_ERROR=0,Ui.TIMEOUT=8,Ui.HTTP_ERROR=6,mo=Ui,ou.COMPLETE="complete",Mf=ou,qn.EventType=At,At.OPEN="a",At.CLOSE="b",At.ERROR="c",At.MESSAGE="d",re.prototype.listen=re.prototype.K,Ms=qn,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,Lf=Ae}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});const wd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Uc("@firebase/firestore");function Or(){return cr.logLevel}function V(n,...e){if(cr.logLevel<=ie.DEBUG){const t=e.map(Yc);cr.debug(`Firestore (${as}): ${n}`,...t)}}function De(n,...e){if(cr.logLevel<=ie.ERROR){const t=e.map(Yc);cr.error(`Firestore (${as}): ${n}`,...t)}}function si(n,...e){if(cr.logLevel<=ie.WARN){const t=e.map(Yc);cr.warn(`Firestore (${as}): ${n}`,...t)}}function Yc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+n;throw De(e),new Error(e)}function H(n,e){n||q()}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Qe.UNAUTHENTICATED))}shutdown(){}}class WI{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){H(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $t,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $t)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new KI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new Qe(e)}}class QI{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class JI{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new QI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){H(this.o===void 0);const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(H(typeof t.token=="string"),this.R=t.token,new YI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ZI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function Hr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function $f(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new M(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new be(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new be(0,0))}static max(){return new Y(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(),r===void 0?r=e.length-t:r>e.length-t&&q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ii.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ii?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class he extends ii{construct(e,t,r){return new he(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new he(t)}static emptyPath(){return new he([])}}const ew=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends ii{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return ew.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new M(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new M(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(he.fromString(e))}static fromName(e){return new U(he.fromString(e).popFirst(5))}static empty(){return new U(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new he(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function pc(n){return n.fields.find(e=>e.kind===2)}function Qn(n){return n.fields.filter(e=>e.kind!==2)}Lo.UNKNOWN_ID=-1;class po{constructor(e,t){this.fieldPath=e,this.kind=t}}class oi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new oi(0,It.min())}}function jf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new be(t+1,0):new be(t,r));return new It(s,U.empty(),e)}function qf(n){return new It(n.readTime,n.key,-1)}class It{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new It(Y.min(),U.empty(),-1)}static max(){return new It(Y.max(),U.empty(),-1)}}function Xc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Gf)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(s=>s?S.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new S((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(f=>{o[d]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new S((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new $t,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new zs(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Zc(r.target.error);this.V.reject(new zs(e,s))}}static open(e,t,r,s){try{return new ra(t,e.transaction(s,r))}catch(i){throw new zs(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new nw(t)}}class An{constructor(e,t,r){this.name=e,this.version=t,this.p=r,An.S(Oe())===12.2&&De("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),Jn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Kh())return!1;if(An.v())return!0;const e=Oe(),t=An.S(e),r=0<t&&t<10,s=Kf(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new zs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new M(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new M(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new zs(e,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=ra.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next(d=>(c.g(),d)).catch(d=>(c.abort(d),S.reject(d))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,d=l.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Kf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class tw{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Jn(this.B.delete())}}class zs extends M{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Nn(n){return n.name==="IndexedDbTransactionError"}class nw{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(V("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Jn(r)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),Jn(this.store.add(e))}get(e){return Jn(this.store.get(e)).next(t=>(t===void 0&&(t=null),V("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),Jn(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),Jn(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new S((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new S((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){V("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new S((r,s)=>{t.onerror=i=>{const o=Zc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new S((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new tw(c),d=t(c.primaryKey,c.value,l);if(d instanceof S){const f=d.catch(m=>(l.done(),S.reject(m)));r.push(f)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>S.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Jn(n){return new S((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Zc(r.target.error);t(s)}})}let Ed=!1;function Zc(n){const e=An.S(Oe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ed||(Ed=!0,setTimeout(()=>{throw r},0)),r}}return n}class rw{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){V("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{V("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Nn(t)?V("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Vn(t)}await this.X(6e4)})}}class sw{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return S.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return V("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(V("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=qf(i);Xc(o,r)>0&&(r=o)}),new It(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ct.oe=-1;function sa(n){return n==null}function ai(n){return n===0&&1/n==-1/0}function Hf(n){return typeof n=="number"&&Number.isInteger(n)&&!ai(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Td(e)),e=iw(n.get(t),e);return Td(e)}function iw(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Td(n){return n+""}function Mt(n){const e=n.length;if(H(e>=2),e===2)return H(n.charAt(0)===""&&n.charAt(1)===""),he.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&q(),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:q()}i=o+2}return new he(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(n,e){return[n,st(e)]}function Wf(n,e,t){return[n,st(e),t]}const ow={},aw=["prefixPath","collectionGroup","readTime","documentId"],cw=["prefixPath","collectionGroup","documentId"],lw=["collectionGroup","readTime","prefixPath","documentId"],uw=["canonicalId","targetId"],dw=["targetId","path"],hw=["path","targetId"],fw=["collectionId","parent"],mw=["indexId","uid"],pw=["uid","sequenceNumber"],gw=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_w=["indexId","uid","orderedDocumentKey"],yw=["userId","collectionPath","documentId"],vw=["userId","collectionPath","largestBatchId"],Iw=["userId","collectionGroup","largestBatchId"],Qf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ww=[...Qf,"documentOverlays"],Jf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Yf=Jf,el=[...Yf,"indexConfiguration","indexState","indexEntries"],Ew=el,Tw=[...el,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends zf{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Fe(n,e){const t=G(n);return An.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function yr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Xf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||$e.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new $e(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,r,s,i){return this}insert(e,t,r){return new $e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rd(this.data.getIterator())}getIteratorFrom(e){return new Rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class Rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Vr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new lt([])}unionWith(e){let t=new pe(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new lt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zf("Invalid base64 string: "+i):i}}(e);return new xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const bw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(n){if(H(!!n),typeof n=="string"){let e=0;const t=bw.exec(n);if(H(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Cn(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function nl(n){const e=n.mapValue.fields.__previous_value__;return tl(e)?nl(e):e}function ci(n){const e=nn(n.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,r,s,i,o,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class lr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},_o={nullValue:"NULL_VALUE"};function ur(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?tl(n)?4:em(n)?9007199254740991:ia(n)?10:11:q()}function jt(n,e){if(n===e)return!0;const t=ur(n);if(t!==ur(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ci(n).isEqual(ci(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=nn(s.timestampValue),c=nn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Cn(s.bytesValue).isEqual(Cn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ee(s.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ee(s.integerValue)===Ee(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ee(s.doubleValue),c=Ee(i.doubleValue);return o===c?ai(o)===ai(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Hr(n.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ad(o)!==Ad(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!jt(o[l],c[l])))return!1;return!0}(n,e);default:return q()}}function li(n,e){return(n.values||[]).find(t=>jt(t,e))!==void 0}function kn(n,e){if(n===e)return 0;const t=ur(n),r=ur(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ee(i.integerValue||i.doubleValue),l=Ee(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Sd(n.timestampValue,e.timestampValue);case 4:return Sd(ci(n),ci(e));case 5:return te(n.stringValue,e.stringValue);case 6:return function(i,o){const c=Cn(i),l=Cn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=te(c[d],l[d]);if(f!==0)return f}return te(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=te(Ee(i.latitude),Ee(o.latitude));return c!==0?c:te(Ee(i.longitude),Ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Pd(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,d,f;const m=i.fields||{},_=o.fields||{},E=(c=m.value)===null||c===void 0?void 0:c.arrayValue,P=(l=_.value)===null||l===void 0?void 0:l.arrayValue,C=te(((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:Pd(E,P)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===En.mapValue&&o===En.mapValue)return 0;if(i===En.mapValue)return 1;if(o===En.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=o.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const _=te(l[m],f[m]);if(_!==0)return _;const E=kn(c[l[m]],d[f[m]]);if(E!==0)return E}return te(l.length,f.length)}(n.mapValue,e.mapValue);default:throw q()}}function Sd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=nn(n),r=nn(e),s=te(t.seconds,r.seconds);return s!==0?s:te(t.nanos,r.nanos)}function Pd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=kn(t[s],r[s]);if(i)return i}return te(t.length,r.length)}function Wr(n){return _c(n)}function _c(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=nn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Cn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=_c(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_c(t.fields[o])}`;return s+"}"}(n.mapValue):q()}function ui(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function yc(n){return!!n&&"integerValue"in n}function di(n){return!!n&&"arrayValue"in n}function Cd(n){return!!n&&"nullValue"in n}function kd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yo(n){return!!n&&"mapValue"in n}function ia(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ks(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return yr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ks(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ks(n.arrayValue.values[t]);return e}return Object.assign({},n)}function em(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const tm={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Rw(n){return"nullValue"in n?_o:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ui(lr.empty(),U.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?ia(n)?tm:{mapValue:{}}:q()}function Sw(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ui(lr.empty(),U.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?tm:"mapValue"in n?ia(n)?{mapValue:{}}:En:q()}function Dd(n,e){const t=kn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function xd(n,e){const t=kn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!yo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(t)}setAll(e){let t=Te.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Ks(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());yo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){yr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Je(Ks(this.value))}}function nm(n){const e=[];return yr(n.fields,(t,r)=>{const s=new Te([t]);if(yo(r)){const i=nm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Re(e,0,Y.min(),Y.min(),Y.min(),Je.empty(),0)}static newFoundDocument(e,t,r,s){return new Re(e,1,t,Y.min(),r,s,0)}static newNoDocument(e,t){return new Re(e,2,t,Y.min(),Y.min(),Je.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,Y.min(),Y.min(),Je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){this.position=e,this.inclusive=t}}function Vd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),t.key):r=kn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!jt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{}class oe extends rm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cw(e,t,r):t==="array-contains"?new xw(e,r):t==="in"?new lm(e,r):t==="not-in"?new Vw(e,r):t==="array-contains-any"?new Nw(e,r):new oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new kw(e,r):new Dw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(kn(t,this.value)):t!==null&&ur(this.value)===ur(t)&&this.matchesComparison(kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class me extends rm{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new me(e,t)}matches(e){return Jr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Jr(n){return n.op==="and"}function vc(n){return n.op==="or"}function rl(n){return sm(n)&&Jr(n)}function sm(n){for(const e of n.filters)if(e instanceof me)return!1;return!0}function Ic(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+Wr(n.value);if(rl(n))return n.filters.map(e=>Ic(e)).join(",");{const e=n.filters.map(t=>Ic(t)).join(",");return`${n.op}(${e})`}}function im(n,e){return n instanceof oe?function(r,s){return s instanceof oe&&r.op===s.op&&r.field.isEqual(s.field)&&jt(r.value,s.value)}(n,e):n instanceof me?function(r,s){return s instanceof me&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&im(o,s.filters[c]),!0):!1}(n,e):void q()}function om(n,e){const t=n.filters.concat(e);return me.create(t,n.op)}function am(n){return n instanceof oe?function(t){return`${t.field.canonicalString()} ${t.op} ${Wr(t.value)}`}(n):n instanceof me?function(t){return t.op.toString()+" {"+t.getFilters().map(am).join(" ,")+"}"}(n):"Filter"}class Cw extends oe{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class kw extends oe{constructor(e,t){super(e,"in",t),this.keys=cm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Dw extends oe{constructor(e,t){super(e,"not-in",t),this.keys=cm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class xw extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return di(t)&&li(t.arrayValue,this.value)}}class lm extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&li(this.value.arrayValue,t)}}class Vw extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!li(this.value.arrayValue,t)}}class Nw extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!di(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>li(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function wc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Lw(n,e,t,r,s,i,o)}function dr(n){const e=G(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ic(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Wr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Wr(r)).join(",")),e.ue=t}return e.ue}function bi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Pw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!im(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nd(n.startAt,e.startAt)&&Nd(n.endAt,e.endAt)}function Oo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Fo(n,e){return n.filters.filter(t=>t instanceof oe&&t.field.isEqual(e))}function Ld(n,e,t){let r=_o,s=!0;for(const i of Fo(n,e)){let o=_o,c=!0;switch(i.op){case"<":case"<=":o=Rw(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=_o}Dd({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Dd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Md(n,e,t){let r=En,s=!0;for(const i of Fo(n,e)){let o=En,c=!0;switch(i.op){case">=":case">":o=Sw(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=En}xd({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];xd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function um(n,e,t,r,s,i,o,c){return new cs(n,e,t,r,s,i,o,c)}function oa(n){return new cs(n)}function Od(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dm(n){return n.collectionGroup!==null}function Hs(n){const e=G(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new pe(Te.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Mo(i,r))}),t.has(Te.keyField().canonicalString())||e.ce.push(new Mo(Te.keyField(),r))}return e.ce}function _t(n){const e=G(n);return e.le||(e.le=Mw(e,Hs(n))),e.le}function Mw(n,e){if(n.limitType==="F")return wc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mo(s.field,i)});const t=n.endAt?new Qr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qr(n.startAt.position,n.startAt.inclusive):null;return wc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ec(n,e){const t=n.filters.concat([e]);return new cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Tc(n,e,t){return new cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function aa(n,e){return bi(_t(n),_t(e))&&n.limitType===e.limitType}function hm(n){return`${dr(_t(n))}|lt:${n.limitType}`}function Fr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>am(s)).join(", ")}]`),sa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Wr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Wr(s)).join(",")),`Target(${r})`}(_t(n))}; limitType=${n.limitType})`}function Ai(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const d=Vd(o,c,l);return o.inclusive?d<=0:d<0}(r.startAt,Hs(r),s)||r.endAt&&!function(o,c,l){const d=Vd(o,c,l);return o.inclusive?d>=0:d>0}(r.endAt,Hs(r),s))}(n,e)}function fm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mm(n){return(e,t)=>{let r=!1;for(const s of Hs(n)){const i=Ow(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ow(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),d=c.data.field(i);return l!==null&&d!==null?kn(l,d):q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Xf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=new ve(U.comparator);function pt(){return Fw}const pm=new ve(U.comparator);function Os(...n){let e=pm;for(const t of n)e=e.insert(t.key,t);return e}function gm(n){let e=pm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ot(){return Ws()}function _m(){return Ws()}function Ws(){return new Ln(n=>n.toString(),(n,e)=>n.isEqual(e))}const Bw=new ve(U.comparator),Uw=new pe(U.comparator);function se(...n){let e=Uw;for(const t of n)e=e.add(t);return e}const $w=new pe(te);function sl(){return $w}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(e)?"-0":e}}function ym(n){return{integerValue:""+n}}function jw(n,e){return Hf(e)?ym(e):il(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this._=void 0}}function qw(n,e,t){return n instanceof Yr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tl(i)&&(i=nl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Xr?Im(n,e):n instanceof Zr?wm(n,e):function(s,i){const o=vm(s,i),c=Fd(o)+Fd(s.Pe);return yc(o)&&yc(s.Pe)?ym(c):il(s.serializer,c)}(n,e)}function Gw(n,e,t){return n instanceof Xr?Im(n,e):n instanceof Zr?wm(n,e):t}function vm(n,e){return n instanceof hi?function(r){return yc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Yr extends ca{}class Xr extends ca{constructor(e){super(),this.elements=e}}function Im(n,e){const t=Em(e);for(const r of n.elements)t.some(s=>jt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Zr extends ca{constructor(e){super(),this.elements=e}}function wm(n,e){let t=Em(e);for(const r of n.elements)t=t.filter(s=>!jt(s,r));return{arrayValue:{values:t}}}class hi extends ca{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Fd(n){return Ee(n.integerValue||n.doubleValue)}function Em(n){return di(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,t){this.field=e,this.transform=t}}function zw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Xr&&s instanceof Xr||r instanceof Zr&&s instanceof Zr?Hr(r.elements,s.elements,jt):r instanceof hi&&s instanceof hi?jt(r.Pe,s.Pe):r instanceof Yr&&s instanceof Yr}(n.transform,e.transform)}class Kw{constructor(e,t){this.version=e,this.transformResults=t}}class Ye{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ye}static exists(e){return new Ye(void 0,e)}static updateTime(e){return new Ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class la{}function bm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ua(n.key,Ye.none()):new ls(n.key,n.data,Ye.none());{const t=n.data,r=Je.empty();let s=new pe(Te.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new an(n.key,r,new lt(s.toArray()),Ye.none())}}function Hw(n,e,t){n instanceof ls?function(s,i,o){const c=s.value.clone(),l=Ud(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof an?function(s,i,o){if(!vo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ud(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Am(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Qs(n,e,t,r){return n instanceof ls?function(i,o,c,l){if(!vo(i.precondition,o))return c;const d=i.value.clone(),f=$d(i.fieldTransforms,l,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof an?function(i,o,c,l){if(!vo(i.precondition,o))return c;const d=$d(i.fieldTransforms,l,o),f=o.data;return f.setAll(Am(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,o,c){return vo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function Ww(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=vm(r.transform,s||null);i!=null&&(t===null&&(t=Je.empty()),t.set(r.field,i))}return t||null}function Bd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hr(r,s,(i,o)=>zw(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ls extends la{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class an extends la{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Am(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ud(n,e,t){const r=new Map;H(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Gw(o,c,t[s]))}return r}function $d(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,qw(i,o,e))}return r}class ua extends la{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rm extends la{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Hw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Qs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Qs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=_m();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=bm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(t,r)=>Bd(t,r))&&Hr(this.baseMutations,e.baseMutations,(t,r)=>Bd(t,r))}}class al{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){H(e.mutations.length===r.length);let s=function(){return Bw}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new al(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,le;function Jw(n){switch(n){default:return q();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Sm(n){if(n===void 0)return De("GRPC error has no .code"),x.UNKNOWN;switch(n){case Le.OK:return x.OK;case Le.CANCELLED:return x.CANCELLED;case Le.UNKNOWN:return x.UNKNOWN;case Le.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Le.INTERNAL:return x.INTERNAL;case Le.UNAVAILABLE:return x.UNAVAILABLE;case Le.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Le.NOT_FOUND:return x.NOT_FOUND;case Le.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Le.ABORTED:return x.ABORTED;case Le.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Le.DATA_LOSS:return x.DATA_LOSS;default:return q()}}(le=Le||(Le={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new tr([4294967295,4294967295],0);function jd(n){const e=Yw().encode(n),t=new Nf;return t.update(e),new Uint8Array(t.digest())}function qd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tr([t,r],0),new tr([s,i],0)]}class ll{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fs(`Invalid padding: ${t}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=tr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(tr.fromNumber(r)));return s.compare(Xw)===1&&(s=new tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=jd(e),[r,s]=qd(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ll(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=jd(e),[r,s]=qd(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ri(Y.min(),s,new ve(te),pt(),se())}}class Si{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Si(r,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Pm{constructor(e,t){this.targetId=e,this.me=t}}class Cm{constructor(e,t,r=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Gd{constructor(){this.fe=0,this.ge=Kd(),this.pe=xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),t=se(),r=se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:q()}}),new Si(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Kd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Zw{constructor(e){this.Le=e,this.Be=new Map,this.ke=pt(),this.qe=zd(),this.Qe=new ve(te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Oo(i))if(r===0){const o=new U(i.path);this.Ue(t,o,Re.newNoDocument(o,Y.min()))}else H(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Cn(r).toUint8Array()}catch(l){if(l instanceof Zf)return si("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ll(o,s,i)}catch(l){return si(l instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Oo(c.target)){const l=new U(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Re.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=se();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ri(e,t,this.Qe,this.ke,r);return this.ke=pt(),this.qe=zd(),this.Qe=new ve(te),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Gd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pe(te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Gd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function zd(){return new ve(U.comparator)}function Kd(){return new ve(U.comparator)}const eE={asc:"ASCENDING",desc:"DESCENDING"},tE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nE={and:"AND",or:"OR"};class rE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bc(n,e){return n.useProto3Json||sa(e)?e:{value:e}}function es(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function km(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function sE(n,e){return es(n,e.toTimestamp())}function it(n){return H(!!n),Y.fromTimestamp(function(t){const r=nn(t);return new be(r.seconds,r.nanos)}(n))}function ul(n,e){return Ac(n,e).canonicalString()}function Ac(n,e){const t=function(s){return new he(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Dm(n){const e=he.fromString(n);return H(Um(e)),e}function Bo(n,e){return ul(n.databaseId,e.path)}function nr(n,e){const t=Dm(e);if(t.get(1)!==n.databaseId.projectId)throw new M(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(Nm(t))}function xm(n,e){return ul(n.databaseId,e)}function Vm(n){const e=Dm(n);return e.length===4?he.emptyPath():Nm(e)}function Rc(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nm(n){return H(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hd(n,e,t){return{name:Bo(n,e),fields:t.value.mapValue.fields}}function iE(n,e,t){const r=nr(n,e.name),s=it(e.updateTime),i=e.createTime?it(e.createTime):Y.min(),o=new Je({mapValue:{fields:e.fields}}),c=Re.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function oE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(H(f===void 0||typeof f=="string"),xe.fromBase64String(f||"")):(H(f===void 0||f instanceof Buffer||f instanceof Uint8Array),xe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const f=d.code===void 0?x.UNKNOWN:Sm(d.code);return new M(f,d.message||"")}(o);t=new Cm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nr(n,r.document.name),i=it(r.document.updateTime),o=r.document.createTime?it(r.document.createTime):Y.min(),c=new Je({mapValue:{fields:r.document.fields}}),l=Re.newFoundDocument(s,i,o,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Io(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nr(n,r.document),i=r.readTime?it(r.readTime):Y.min(),o=Re.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Io([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nr(n,r.document),i=r.removedTargetIds||[];t=new Io([],i,s,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Qw(s,i),c=r.targetId;t=new Pm(c,o)}}return t}function Uo(n,e){let t;if(e instanceof ls)t={update:Hd(n,e.key,e.value)};else if(e instanceof ua)t={delete:Bo(n,e.key)};else if(e instanceof an)t={update:Hd(n,e.key,e.data),updateMask:hE(e.fieldMask)};else{if(!(e instanceof Rm))return q();t={verify:Bo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Yr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Xr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Zr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof hi)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(n,e.precondition)),t}function Sc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Ye.updateTime(it(i.updateTime)):i.exists!==void 0?Ye.exists(i.exists):Ye.none()}(e.currentDocument):Ye.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)H(c.setToServerValue==="REQUEST_TIME"),l=new Yr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new Xr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Zr(f)}else"increment"in c?l=new hi(o,c.increment):q();const d=Te.fromServerFormat(c.fieldPath);return new Tm(d,l)}(n,s)):[];if(e.update){e.update.name;const s=nr(n,e.update.name),i=new Je({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const d=l.fieldPaths||[];return new lt(d.map(f=>Te.fromServerFormat(f)))}(e.updateMask);return new an(s,i,o,t,r)}return new ls(s,i,t,r)}if(e.delete){const s=nr(n,e.delete);return new ua(s,t)}if(e.verify){const s=nr(n,e.verify);return new Rm(s,t)}return q()}function aE(n,e){return n&&n.length>0?(H(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?it(s.updateTime):it(i);return o.isEqual(Y.min())&&(o=it(i)),new Kw(o,s.transformResults||[])}(t,e))):[]}function Lm(n,e){return{documents:[xm(n,e.path)]}}function Mm(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=xm(n,s);const i=function(d){if(d.length!==0)return Bm(me.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:Br(_.field),direction:lE(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=bc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function Om(n){let e=Vm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){H(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const _=Fm(m);return _ instanceof me&&rl(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(_=>function(P){return new Mo(Ur(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,sa(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(m){const _=!!m.before,E=m.values||[];return new Qr(E,_)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const _=!m.before,E=m.values||[];return new Qr(E,_)}(t.endAt)),um(e,s,o,i,c,"F",l,d)}function cE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Fm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ur(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(t.unaryFilter.field);return oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(t.unaryFilter.field);return oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ur(t.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(t){return oe.create(Ur(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return me.create(t.compositeFilter.filters.map(r=>Fm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(n):q()}function lE(n){return eE[n]}function uE(n){return tE[n]}function dE(n){return nE[n]}function Br(n){return{fieldPath:n.canonicalString()}}function Ur(n){return Te.fromServerFormat(n.fieldPath)}function Bm(n){return n instanceof oe?function(t){if(t.op==="=="){if(kd(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NAN"}};if(Cd(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(kd(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NOT_NAN"}};if(Cd(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(t.field),op:uE(t.op),value:t.value}}}(n):n instanceof me?function(t){const r=t.getFilters().map(s=>Bm(s));return r.length===1?r[0]:{compositeFilter:{op:dE(t.op),filters:r}}}(n):q()}function hE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Um(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t,r,s,i=Y.min(),o=Y.min(),c=xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.ct=e}}function fE(n,e){let t;if(e.document)t=iE(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=U.fromSegments(e.noDocument.path),s=fr(e.noDocument.readTime);t=Re.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const r=U.fromSegments(e.unknownDocument.path),s=fr(e.unknownDocument.version);t=Re.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new be(s[0],s[1]);return Y.fromTimestamp(i)}(e.readTime)),t}function Wd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:$o(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Bo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:es(i,o.version.toTimestamp()),createTime:es(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:hr(e.version)};else{if(!e.isUnknownDocument())return q();r.unknownDocument={path:t.path.toArray(),version:hr(e.version)}}return r}function $o(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function hr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function fr(n){const e=new be(n.seconds,n.nanoseconds);return Y.fromTimestamp(e)}function Yn(n,e){const t=(e.baseMutations||[]).map(i=>Sc(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Sc(n.ct,i)),s=be.fromMillis(e.localWriteTimeMs);return new ol(e.batchId,s,t,r)}function Bs(n){const e=fr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?fr(n.lastLimboFreeSnapshotVersion):Y.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return H(i.documents.length===1),_t(oa(Vm(i.documents[0])))}(n.query):function(i){return _t(Om(i))}(n.query),new Yt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,xe.fromBase64String(n.resumeToken))}function jm(n,e){const t=hr(e.snapshotVersion),r=hr(e.lastLimboFreeSnapshotVersion);let s;s=Oo(e.target)?Lm(n.ct,e.target):Mm(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:dr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function qm(n){const e=Om({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Tc(e,e.limit,"L"):e}function Ja(n,e){return new cl(e.largestBatchId,Sc(n.ct,e.overlayMutation))}function Qd(n,e){const t=e.path.lastSegment();return[n,st(e.path.popLast()),t]}function Jd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:hr(r.readTime),documentKey:st(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{getBundleMetadata(e,t){return Yd(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:fr(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Yd(e).put(function(s){return{bundleId:s.id,createTime:hr(it(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Xd(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:qm(i.bundledQuery),readTime:fr(i.readTime)}}(r)})}saveNamedQuery(e,t){return Xd(e).put(function(s){return{name:s.name,readTime:hr(it(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Yd(n){return Fe(n,"bundles")}function Xd(n){return Fe(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new da(e,r)}getOverlay(e,t){return Ss(e).get(Qd(this.userId,t)).next(r=>r?Ja(this.serializer,r):null)}getOverlays(e,t){const r=Ot();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new cl(t,o);s.push(this.ht(e,c))}),S.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(st(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Ss(e).j("collectionPathOverlayIndex",c))}),S.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Ot(),i=st(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ss(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const d=Ja(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=Ot();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ss(e).J({index:"collectionGroupOverlayIndex",range:c},(l,d,f)=>{const m=Ja(this.serializer,d);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return Ss(e).put(function(s,i,o){const[c,l,d]=Qd(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Uo(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Ss(n){return Fe(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{Pt(e){return Fe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?xe.fromUint8Array(r):xe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Ee(e.integerValue));else if("doubleValue"in e){const r=Ee(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),ai(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=nn(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Cn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?em(e)?this.dt(t,Number.MAX_SAFE_INTEGER):ia(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):q()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(Ee(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),U.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Xn.vt=new Xn;function gE(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Zd(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=gE(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class _E{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Zd(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Zd(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class yE{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class vE{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Ps{constructor(){this.jt=new _E,this.Ht=new yE(this.jt),this.Jt=new vE(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Zn(this.indexId,this.documentKey,this.arrayValue,r)}}function mn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=eh(n.arrayValue,e.arrayValue),t!==0?t:(t=eh(n.directionalValue,e.directionalValue),t!==0?t:U.comparator(n.documentKey,e.documentKey)))}function eh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.Xt=new pe((t,r)=>Te.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(H(e.collectionGroup===this.collectionId),this.nn)return!1;const t=pc(e);if(t!==void 0&&!this.sn(t))return!1;const r=Qn(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new pe(Te.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new po(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new po(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new po(r.field,r.dir==="asc"?0:1)));return new Lo(Lo.UNKNOWN_ID,this.collectionId,t,oi.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n){var e,t;if(H(n instanceof oe||n instanceof me),n instanceof oe){if(n instanceof lm){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>oe.create(n.field,"==",i)))||[];return me.create(s,"or")}return n}const r=n.filters.map(s=>Gm(s));return me.create(r,n.op)}function IE(n){if(n.getFilters().length===0)return[];const e=kc(Gm(n));return H(zm(e)),Pc(e)||Cc(e)?[e]:e.getFilters()}function Pc(n){return n instanceof oe}function Cc(n){return n instanceof me&&rl(n)}function zm(n){return Pc(n)||Cc(n)||function(t){if(t instanceof me&&vc(t)){for(const r of t.getFilters())if(!Pc(r)&&!Cc(r))return!1;return!0}return!1}(n)}function kc(n){if(H(n instanceof oe||n instanceof me),n instanceof oe)return n;if(n.filters.length===1)return kc(n.filters[0]);const e=n.filters.map(r=>kc(r));let t=me.create(e,n.op);return t=jo(t),zm(t)?t:(H(t instanceof me),H(Jr(t)),H(t.filters.length>1),t.filters.reduce((r,s)=>dl(r,s)))}function dl(n,e){let t;return H(n instanceof oe||n instanceof me),H(e instanceof oe||e instanceof me),t=n instanceof oe?e instanceof oe?function(s,i){return me.create([s,i],"and")}(n,e):nh(n,e):e instanceof oe?nh(e,n):function(s,i){if(H(s.filters.length>0&&i.filters.length>0),Jr(s)&&Jr(i))return om(s,i.getFilters());const o=vc(s)?s:i,c=vc(s)?i:s,l=o.filters.map(d=>dl(d,c));return me.create(l,"or")}(n,e),jo(t)}function nh(n,e){if(Jr(e))return om(e,n.getFilters());{const t=e.filters.map(r=>dl(n,r));return me.create(t,"or")}}function jo(n){if(H(n instanceof oe||n instanceof me),n instanceof oe)return n;const e=n.getFilters();if(e.length===1)return jo(e[0]);if(sm(n))return n;const t=e.map(s=>jo(s)),r=[];return t.forEach(s=>{s instanceof oe?r.push(s):s instanceof me&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:me.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(){this.un=new hl}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(It.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(It.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class hl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new pe(he.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pe(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new Uint8Array(0);class EE{constructor(e,t){this.databaseId=t,this.cn=new hl,this.ln=new Ln(r=>dr(r),(r,s)=>bi(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:st(s)};return rh(e).put(i)}return S.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[$f(t),""],!1,!0);return rh(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Mt(o.parent))}return r})}addFieldIndex(e,t){const r=Cs(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Lr(e);return i.next(c=>{o.put(Jd(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Cs(e),s=Lr(e),i=Nr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Cs(e),r=Nr(e),s=Lr(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return S.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new th(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=Nr(e);let s=!0;const i=new Map;return S.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=se();const c=[];return S.forEach(i,(l,d)=>{V("IndexedDbIndexManager",`Using index ${function(N){return`id=${N.indexId}|cg=${N.collectionGroup}|f=${N.fields.map(B=>`${B.fieldPath}:${B.kind}`).join(",")}`}(l)} to execute ${dr(t)}`);const f=function(N,B){const z=pc(B);if(z===void 0)return null;for(const Z of Fo(N,z.fieldPath))switch(Z.op){case"array-contains-any":return Z.value.arrayValue.values||[];case"array-contains":return[Z.value]}return null}(d,l),m=function(N,B){const z=new Map;for(const Z of Qn(B))for(const w of Fo(N,Z.fieldPath))switch(w.op){case"==":case"in":z.set(Z.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return z.set(Z.fieldPath.canonicalString(),w.value),Array.from(z.values())}return null}(d,l),_=function(N,B){const z=[];let Z=!0;for(const w of Qn(B)){const y=w.kind===0?Ld(N,w.fieldPath,N.startAt):Md(N,w.fieldPath,N.startAt);z.push(y.value),Z&&(Z=y.inclusive)}return new Qr(z,Z)}(d,l),E=function(N,B){const z=[];let Z=!0;for(const w of Qn(B)){const y=w.kind===0?Md(N,w.fieldPath,N.endAt):Ld(N,w.fieldPath,N.endAt);z.push(y.value),Z&&(Z=y.inclusive)}return new Qr(z,Z)}(d,l),P=this.In(l,d,_),C=this.In(l,d,E),D=this.Tn(l,d,m),$=this.En(l.indexId,f,P,_.inclusive,C,E.inclusive,D);return S.forEach($,F=>r.G(F,t.limit).next(N=>{N.forEach(B=>{const z=U.fromSegments(B.documentKey);o.has(z)||(o=o.add(z),c.push(z))})}))}).next(()=>c)}return S.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=IE(me.create(e.filters,"and")).map(r=>wc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),d=l/(t!=null?t.length:1),f=[];for(let m=0;m<l;++m){const _=t?this.dn(t[m/d]):ro,E=this.An(e,_,r[m%d],s),P=this.Rn(e,_,i[m%d],o),C=c.map(D=>this.An(e,_,D,!0));f.push(...this.createRange(E,P,C))}return f}An(e,t,r,s){const i=new Zn(e,U.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new Zn(e,U.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new th(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return S.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let d=new pe(Te.comparator),f=!1;for(const m of l.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:d=d.add(_.field));for(const m of l.orderBy)m.field.isKeyField()||(d=d.add(m.field));return d.size+(f?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new Ps;for(const s of Qn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);Xn.vt.It(i,o)}return r.zt()}dn(e){const t=new Ps;return Xn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new Ps;return Xn.vt.It(ui(this.databaseId,t),r.Yt(function(i){const o=Qn(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new Ps);let i=0;for(const o of Qn(e)){const c=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&di(c))s=this.gn(s,o,c);else{const d=l.Yt(o.kind);Xn.vt.It(c,d)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new Ps;l.seed(c.zt()),Xn.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Cs(e),s=Lr(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return S.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,m){const _=m?new oi(m.sequenceNumber,new It(fr(m.readTime),new U(Mt(m.documentKey)),m.largestBatchId)):oi.empty(),E=f.fields.map(([P,C])=>new po(Te.fromServerFormat(P),C));return new Lo(f.indexId,f.collectionGroup,E,_)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:te(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Cs(e),i=Lr(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>S.forEach(c,l=>i.put(Jd(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return S.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),S.forEach(c,l=>this.wn(e,s,l).next(d=>{const f=this.Sn(i,l);return d.isEqual(f)?S.resolve():this.bn(e,i,l,d,f)}))))})}Dn(e,t,r,s){return Nr(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return Nr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=Nr(e);let i=new pe(mn);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{i=i.add(new Zn(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let r=new pe(mn);const s=this.Vn(t,e);if(s==null)return r;const i=pc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(di(o))for(const c of o.arrayValue.values||[])r=r.add(new Zn(t.indexId,e.key,this.dn(c),s))}else r=r.add(new Zn(t.indexId,e.key,ro,s));return r}bn(e,t,r,s,i){V("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,d,f,m,_){const E=l.getIterator(),P=d.getIterator();let C=Vr(E),D=Vr(P);for(;C||D;){let $=!1,F=!1;if(C&&D){const N=f(C,D);N<0?F=!0:N>0&&($=!0)}else C!=null?F=!0:$=!0;$?(m(D),D=Vr(P)):F?(_(C),C=Vr(E)):(C=Vr(E),D=Vr(P))}}(s,i,mn,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),S.waitFor(o)}yn(e){let t=1;return Lr(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>mn(o,c)).filter((o,c,l)=>!c||mn(o,l[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=mn(o,e),l=mn(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,ro,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,ro,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return mn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(sh)}getMinOffset(e,t){return S.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||q())).next(sh)}}function rh(n){return Fe(n,"collectionParents")}function Nr(n){return Fe(n,"indexEntries")}function Cs(n){return Fe(n,"indexConfiguration")}function Lr(n){return Fe(n,"indexState")}function sh(n){H(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Xc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new It(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class at{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new at(e,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.J({range:o},(f,m,_)=>(c++,_.delete()));i.push(l.next(()=>{H(c===1)}));const d=[];for(const f of t.mutations){const m=Wf(e,f.key.path,t.batchId);i.push(s.delete(m)),d.push(f.key)}return S.waitFor(i).next(()=>d)}function qo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw q();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at.DEFAULT_COLLECTION_PERCENTILE=10,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,at.DEFAULT=new at(41943040,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),at.DISABLED=new at(-1,0,0);class ha{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){H(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new ha(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return pn(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=$r(e),o=pn(e);return o.add({}).next(c=>{H(typeof c=="number");const l=new ol(c,t,r,s),d=function(E,P,C){const D=C.baseMutations.map(F=>Uo(E.ct,F)),$=C.mutations.map(F=>Uo(E.ct,F));return{userId:P,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:D,mutations:$}}(this.serializer,this.userId,l),f=[];let m=new pe((_,E)=>te(_.canonicalString(),E.canonicalString()));for(const _ of s){const E=Wf(this.userId,_.key.path,c);m=m.add(_.key.path.popLast()),f.push(o.put(d)),f.push(i.put(E,ow))}return m.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),S.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return pn(e).get(t).next(r=>r?(H(r.userId===this.userId),Yn(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?S.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return pn(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(H(c.batchId>=r),i=Yn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return pn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return pn(e).U("userMutationsIndex",t).next(r=>r.map(s=>Yn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=go(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return $r(e).J({range:s},(o,c,l)=>{const[d,f,m]=o,_=Mt(f);if(d===this.userId&&t.path.isEqual(_))return pn(e).get(m).next(E=>{if(!E)throw q();H(E.userId===this.userId),i.push(Yn(this.serializer,E))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(te);const s=[];return t.forEach(i=>{const o=go(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=$r(e).J({range:c},(d,f,m)=>{const[_,E,P]=d,C=Mt(E);_===this.userId&&i.path.isEqual(C)?r=r.add(P):m.done()});s.push(l)}),S.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=go(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new pe(te);return $r(e).J({range:o},(l,d,f)=>{const[m,_,E]=l,P=Mt(_);m===this.userId&&r.isPrefixOf(P)?P.length===s&&(c=c.add(E)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(pn(e).get(i).next(o=>{if(o===null)throw q();H(o.userId===this.userId),r.push(Yn(this.serializer,o))}))}),S.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Km(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),S.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return $r(e).J({range:r},(i,o,c)=>{if(i[0]===this.userId){const l=Mt(i[1]);s.push(l)}else c.done()}).next(()=>{H(s.length===0)})})}containsKey(e,t){return Hm(e,this.userId,t)}Nn(e){return Wm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Hm(n,e,t){const r=go(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return $r(n).J({range:i,H:!0},(c,l,d)=>{const[f,m,_]=c;f===e&&m===s&&(o=!0),d.done()}).next(()=>o)}function pn(n){return Fe(n,"mutations")}function $r(n){return Fe(n,"documentMutations")}function Wm(n){return Fe(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new mr(0)}static kn(){return new mr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new mr(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Y.fromTimestamp(new be(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Mr(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(H(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Mr(e).J((o,c)=>{const l=Bs(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>S.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Mr(e).J((r,s)=>{const i=Bs(s);t(i)})}qn(e){return oh(e).get("targetGlobalKey").next(t=>(H(t!==null),t))}Qn(e,t){return oh(e).put("targetGlobalKey",t)}Kn(e,t){return Mr(e).put(jm(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=dr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Mr(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const d=Bs(c);bi(t,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=In(e);return t.forEach(o=>{const c=st(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),S.waitFor(s)}removeMatchingKeys(e,t,r){const s=In(e);return S.forEach(t,i=>{const o=st(i.path);return S.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=In(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=In(e);let i=se();return s.J({range:r,H:!0},(o,c,l)=>{const d=Mt(o[1]),f=new U(d);i=i.add(f)}).next(()=>i)}containsKey(e,t){const r=st(t.path),s=IDBKeyRange.bound([r],[$f(r)],!1,!0);let i=0;return In(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,d)=>{o!==0&&(i++,d.done())}).next(()=>i>0)}ot(e,t){return Mr(e).get(t).next(r=>r?Bs(r):null)}}function Mr(n){return Fe(n,"targets")}function oh(n){return Fe(n,"targetGlobal")}function In(n){return Fe(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah([n,e],[t,r]){const s=te(n,t);return s===0?te(e,r):s}class bE{constructor(e){this.Un=e,this.buffer=new pe(ah),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ah(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nn(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Vn(t)}await this.Hn(3e5)})}}class RE{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(ct.oe);const r=new bE(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(ih)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ih):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,c,l,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),Or()<=ie.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function SE(n,e){return new RE(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t){this.db=e,this.garbageCollector=SE(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return so(e,r)}removeReference(e,t,r){return so(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return so(e,t)}nr(e,t){return function(s,i){let o=!1;return Wm(s).Y(c=>Hm(s,c,i).next(l=>(l&&(o=!0),S.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(d=>{if(!d)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Y.min()),In(e).delete(function(m){return[0,st(m.path)]}(o))))});s.push(l)}}).next(()=>S.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return so(e,t)}tr(e,t){const r=In(e);let s,i=ct.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:d})=>{o===0?(i!==ct.oe&&t(new U(Mt(s)),i),i=d,s=l):i=ct.oe}).next(()=>{i!==ct.oe&&t(new U(Mt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function so(n,e){return In(n).put(function(r,s){return{targetId:0,path:st(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(){this.changes=new Ln(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Hn(e).put(r)}removeEntry(e,t,r){return Hn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],$o(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Re.newInvalidDocument(t);return Hn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ks(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:Re.newInvalidDocument(t)};return Hn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ks(t))},(s,i)=>{r={document:this.ir(t,i),size:qo(i)}}).next(()=>r)}getEntries(e,t){let r=pt();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=pt(),s=new ve(U.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);r=r.insert(i,c),s=s.insert(i,qo(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return S.resolve();let s=new pe(uh);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(ks(s.first()),ks(s.last())),o=s.getIterator();let c=o.getNext();return Hn(e).J({index:"documentKeyIndex",range:i},(l,d,f)=>{const m=U.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&uh(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,d),c=o.hasNext()?o.getNext():null),c?f.$(ks(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),$o(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Hn(e).U(IDBKeyRange.bound(c,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let f=pt();for(const m of d){const _=this.ir(U.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(Ai(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,r,s){let i=pt();const o=lh(t,r),c=lh(t,It.max());return Hn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,d,f)=>{const m=this.ir(U.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(m.key,m),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new kE(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ch(e).get("remoteDocumentGlobalKey").next(t=>(H(!!t),t))}rr(e,t){return ch(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=fE(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Y.min())))return r}return Re.newInvalidDocument(e)}}function Jm(n){return new CE(n)}class kE extends Qm{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Ln(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new pe((i,o)=>te(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Wd(this.cr.serializer,o);s=s.add(i.path.popLast());const d=qo(l);r+=d-c.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=Wd(this.cr.serializer,o.convertToNoDocument(Y.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),S.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function ch(n){return Fe(n,"remoteDocumentGlobal")}function Hn(n){return Fe(n,"remoteDocumentsV14")}function ks(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function lh(n,e){const t=e.documentKey.path.toArray();return[n,$o(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function uh(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=te(t[i],r[i]),s)return s;return s=te(t.length,r.length),s||(s=te(t[t.length-2],r[r.length-2]),s||te(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Qs(r.mutation,s,lt.empty(),be.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const s=Ot();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Os();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Ot();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=pt();const o=Ws(),c=function(){return Ws()}();return t.forEach((l,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof an)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Qs(f.mutation,d,f.mutation.getFieldMask(),be.now())):o.set(d.key,lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,f)=>o.set(d,f)),t.forEach((d,f)=>{var m;return c.set(d,new DE(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Ws();let s=new ve((o,c)=>o-c),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||lt.empty();f=c.applyToLocalView(d,f),r.set(l,f);const m=(s.get(c.batchId)||se()).add(l);s=s.insert(c.batchId,m)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,m=_m();f.forEach(_=>{if(!i.has(_)){const E=bm(t.get(_),r.get(_));E!==null&&m.set(_,E),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return U.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):S.resolve(Ot());let c=-1,l=i;return o.next(d=>S.forEach(d,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,se())).next(f=>({batchId:c,changes:gm(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let s=Os();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Os();return this.indexManager.getCollectionParents(e,i).next(c=>S.forEach(c,l=>{const d=function(m,_){return new cs(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,Re.newInvalidDocument(f)))});let c=Os();return o.forEach((l,d)=>{const f=i.get(l);f!==void 0&&Qs(f.mutation,d,lt.empty(),be.now()),Ai(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:it(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:qm(s.bundledQuery),readTime:it(s.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.overlays=new ve(U.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ot();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=Ot(),i=t.length+1,o=new U(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ve((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Ot(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Ot(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return S.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cl(t,r));let i=this.Ir.get(t);i===void 0&&(i=se(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.Tr=new pe(Be.Er),this.dr=new pe(Be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Be(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Be(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new U(new he([])),r=new Be(t,e),s=new Be(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new U(new he([])),r=new Be(t,e),s=new Be(t,e+1);let i=se();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Be(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return U.comparator(e.key,t.key)||te(e.wr,t.wr)}static Ar(e,t){return te(e.wr,t.wr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new pe(Be.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ol(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Be(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Be(t,0),s=new Be(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(te);return t.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const o=new Be(new U(i),0);let c=new pe(te);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.wr)),!0)},o),S.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){H(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(t.mutations,s=>{const i=new Be(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Be(t,0),s=this.br.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.Mr=e,this.docs=function(){return new ve(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=pt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=pt();const o=t.path,c=new U(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Xc(qf(f),r)<=0||(s.has(f.key)||Ai(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,r,s){q()}Or(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new OE(this)}getSize(e){return S.resolve(this.size)}}class OE extends Qm{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.persistence=e,this.Nr=new Ln(t=>dr(t),bi),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new fl,this.targetCount=0,this.kr=mr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new mr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ct(0),this.Kr=!1,this.Kr=!0,this.$r=new NE,this.referenceDelegate=e(this),this.Ur=new FE(this),this.indexManager=new wE,this.remoteDocumentCache=function(s){return new ME(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new $m(t),this.Gr=new xE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new VE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new LE(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new BE(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return S.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class BE extends zf{constructor(e){super(),this.currentSequenceNumber=e}}class fa{constructor(e){this.persistence=e,this.Jr=new fl,this.Yr=null}static Zr(e){return new fa(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,r=>{const s=U.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Y.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.serializer=e}O(e,t,r,s){const i=new ra("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bd,{unique:!0}),l.createObjectStore("documentMutations")}(e),dh(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=S.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),dh(e)),o=o.next(()=>function(l){const d=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,d){return d.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bd,{unique:!0});const m=d.store("mutations"),_=f.map(E=>m.put(E));return S.waitFor(_)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const d=l.createObjectStore("documentOverlays",{keyPath:yw});d.createIndex("collectionPathOverlayIndex",vw,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",Iw,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const d=l.createObjectStore("remoteDocumentsV14",{keyPath:aw});d.createIndex("documentKeyIndex",cw),d.createIndex("collectionGroupIndex",lw)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:mw}).createIndex("sequenceNumberIndex",pw,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:gw}).createIndex("documentKeyIndex",_w,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=qo(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>S.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>S.forEach(c,l=>{H(l.userId===i.userId);const d=Yn(this.serializer,l);return Km(e,i.userId,d).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,c)=>{const l=new he(o),d=function(m){return[0,st(m)]}(l);i.push(t.get(d).next(f=>f?S.resolve():(m=>t.put({targetId:0,path:st(m),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>S.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:fw});const r=t.store("collectionParents"),s=new hl,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:st(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new he(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],d)=>{const f=Mt(c);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=Bs(s),o=jm(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(m){return m.document?new U(he.fromString(m.document.name).popFirst(5)):m.noDocument?U.fromSegments(m.noDocument.path):m.unknownDocument?U.fromSegments(m.unknownDocument.path):q()}(o).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(d))}).next(()=>S.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=Jm(this.serializer),i=new Xm(fa.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(l=>{var d;let f=(d=c.get(l.userId))!==null&&d!==void 0?d:se();Yn(this.serializer,l).keys().forEach(m=>f=f.add(m)),c.set(l.userId,f)}),S.forEach(c,(l,d)=>{const f=new Qe(d),m=da.lt(this.serializer,f),_=i.getIndexManager(f),E=ha.lt(f,this.serializer,_,i.referenceDelegate);return new Ym(s,E,m,_).recalculateAndSaveOverlaysForDocumentKeys(new gc(t,ct.oe),l).next()})})}}function dh(n){n.createObjectStore("targetDocuments",{keyPath:dw}).createIndex("documentTargetsIndex",hw,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",uw,{unique:!0}),n.createObjectStore("targetGlobal")}const Ya="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ml{constructor(e,t,r,s,i,o,c,l,d,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=c,this.ci=d,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!ml.D())throw new M(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new PE(this,s),this.Ai=t+"main",this.serializer=new $m(l),this.Ri=new An(this.Ai,this.hi,new UE(this.serializer)),this.$r=new pE,this.Ur=new TE(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Jm(this.serializer),this.Gr=new mE,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&De("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(x.FAILED_PRECONDITION,Ya);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new ct(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>io(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Nn(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Ds(e).get("owner").next(t=>S.resolve(this.vi(t)))}Ci(e){return io(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Fe(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return S.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?S.resolve(!0):Ds(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new M(x.FAILED_PRECONDITION,Ya);return!1}}return!(!this.networkEnabled||!this.inForeground)||io(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new gc(e,ct.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>io(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return ha.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new EE(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return da.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?Tw:l===16?Ew:l===15?el:l===14?Yf:l===13?Jf:l===12?ww:l===11?Qf:void q()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new gc(c,this.Qr?this.Qr.next():ct.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw De(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new M(x.FAILED_PRECONDITION,Gf);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Ds(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new M(x.FAILED_PRECONDITION,Ya)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ds(e).put("owner",t)}static D(){return An.D()}bi(e){const t=Ds(e);return t.get("owner").next(r=>this.vi(r)?(V("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):S.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(De(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;zh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return De("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){De("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ds(n){return Fe(n,"owner")}function io(n){return Fe(n,"clientMetadata")}function Zm(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=se(),s=se();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zh()?8:Kf(Oe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $E;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Or()<=ie.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Fr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(Or()<=ie.DEBUG&&V("QueryEngine","Query:",Fr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Or()<=ie.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Fr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(t))):S.resolve())}Yi(e,t){if(Od(t))return S.resolve(null);let r=_t(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Tc(t,null,"F"),r=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(t,c);return this.ns(t,d,o,l.readTime)?this.Yi(e,Tc(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,s){return Od(t)||s.isEqual(Y.min())?S.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?S.resolve(null):(Or()<=ie.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fr(t)),this.rs(e,o,t,jf(s,-1)).next(c=>c))})}ts(e,t){let r=new pe(mm(e));return t.forEach((s,i)=>{Ai(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Or()<=ie.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Fr(t)),this.Ji.getDocumentsMatchingQuery(e,t,It.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ve(te),this._s=new Ln(i=>dr(i),bi),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ym(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function tp(n,e,t,r){return new jE(n,e,t,r)}async function np(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=se();for(const d of s){o.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:c}))})})}function qE(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){const m=d.batch,_=m.keys();let E=S.resolve();return _.forEach(P=>{E=E.next(()=>f.getEntry(l,P)).next(C=>{const D=d.docVersions.get(P);H(D!==null),C.version.compareTo(D)<0&&(m.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),f.addEntry(C)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=se();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function rp(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function GE(n,e){const t=G(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,m)=>{const _=s.get(m);if(!_)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,m)));let E=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(xe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(m,E),function(C,D,$){return C.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,E,f)&&c.push(t.Ur.updateTargetData(i,E))});let l=pt(),d=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(zE(i,o,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(Y.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return S.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.os=s,i))}function zE(n,e,t){let r=se(),s=se();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=pt();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function KE(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Go(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new Yt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ts(n,e,t){const r=G(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Nn(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Dc(n,e,t){const r=G(n);let s=Y.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,f){const m=G(l),_=m._s.get(f);return _!==void 0?S.resolve(m.os.get(_)):m.Ur.getTargetData(d,f)}(r,o,_t(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:Y.min(),t?i:se())).next(c=>(op(r,fm(e),c),{documents:c,Ts:i})))}function sp(n,e){const t=G(n),r=G(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function ip(n,e){const t=G(n),r=t.us.get(e)||Y.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,jf(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(op(t,e,s),s))}function op(n,e,t){let r=n.us.get(e)||Y.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function hh(n,e){return`firestore_clients_${n}_${e}`}function fh(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Xa(n,e){return`firestore_targets_${n}_${e}`}class zo{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new M(s.error.code,s.error.message))),o?new zo(e,t,s.state,i):(De("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Js{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new M(r.error.code,r.error.message))),i?new Js(e,r.state,s):(De("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ko{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=sl();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Hf(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Ko(e,i):(De("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class gl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new gl(t.clientId,t.onlineState):(De("SharedClientState",`Failed to parse online state: ${e}`),null)}}class xc{constructor(){this.activeTargetIds=sl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Za{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ve(te),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=hh(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new xc),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(hh(this.persistenceKey,r));if(s){const i=Ko.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Xa(this.persistenceKey,e));if(s){const i=Js.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Xa(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V("SharedClientState","READ",e,t),t}setItem(e,t){V("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(V("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void De("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=ct.oe;if(i!=null)try{const c=JSON.parse(i);H(typeof c=="number"),o=c}catch(c){De("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==ct.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new zo(this.currentUser,e,t,r),i=fh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=fh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=Xa(this.persistenceKey,e),i=new Js(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Ko.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return zo.Rs(new Qe(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return Js.Rs(s,t)}Ls(e){return gl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=sl();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class ap{constructor(){this.so=new xc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new xc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo=null;function ec(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class JE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=ec(),l=this.xo(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(t,l,d,s).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw si("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=WE[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=ec();return new Promise((o,c)=>{const l=new Lf;l.setWithCredentials(!0),l.listenOnce(Mf.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case mo.NO_ERROR:const f=l.getResponseJson();V(We,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case mo.TIMEOUT:V(We,`RPC '${e}' ${i} timed out`),c(new M(x.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const m=l.getStatus();if(V(We,`RPC '${e}' ${i} failed with status:`,m,"response text:",l.getResponseText()),m>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const E=_==null?void 0:_.error;if(E&&E.status&&E.message){const P=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf($)>=0?$:x.UNKNOWN}(E.status);c(new M(P,E.message))}else c(new M(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new M(x.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{V(We,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);V(We,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=ec(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Bf(),c=Ff(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");V(We,`Creating RPC '${e}' stream ${s}: ${f}`,l);const m=o.createWebChannel(f,l);let _=!1,E=!1;const P=new QE({Io:D=>{E?V(We,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(_||(V(We,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),V(We,`RPC '${e}' stream ${s} sending:`,D),m.send(D))},To:()=>m.close()}),C=(D,$,F)=>{D.listen($,N=>{try{F(N)}catch(B){setTimeout(()=>{throw B},0)}})};return C(m,Ms.EventType.OPEN,()=>{E||(V(We,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),C(m,Ms.EventType.CLOSE,()=>{E||(E=!0,V(We,`RPC '${e}' stream ${s} transport closed`),P.So())}),C(m,Ms.EventType.ERROR,D=>{E||(E=!0,si(We,`RPC '${e}' stream ${s} transport errored:`,D),P.So(new M(x.UNAVAILABLE,"The operation could not be completed")))}),C(m,Ms.EventType.MESSAGE,D=>{var $;if(!E){const F=D.data[0];H(!!F);const N=F,B=N.error||(($=N[0])===null||$===void 0?void 0:$.error);if(B){V(We,`RPC '${e}' stream ${s} received error:`,B);const z=B.status;let Z=function(I){const T=Le[I];if(T!==void 0)return Sm(T)}(z),w=B.message;Z===void 0&&(Z=x.INTERNAL,w="Unknown error status: "+z+" with message "+B.message),E=!0,P.So(new M(Z,w)),m.close()}else V(We,`RPC '${e}' stream ${s} received:`,F),P.bo(F)}}),C(c,Of.STAT_EVENT,D=>{D.stat===mc.PROXY?V(We,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===mc.NOPROXY&&V(We,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){return typeof window<"u"?window:null}function wo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n){return new rE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new lp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(De(t.toString()),De("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new M(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YE extends up{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=oE(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?it(o.readTime):Y.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Rc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=Oo(l)?{documents:Lm(i,l)}:{query:Mm(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=km(i,o.resumeToken);const d=bc(i,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(Y.min())>0){c.readTime=es(i,o.snapshotVersion.toTimestamp());const d=bc(i,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=cE(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Rc(this.serializer),t.removeTarget=e,this.a_(t)}}class XE extends up{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return H(!!e.streamToken),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=aE(e.writeResults,e.commitTime),r=it(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Rc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Uo(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new M(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Ac(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(x.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Ac(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(x.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class eT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(De(t),this.D_=!1):V("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{vr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=G(l);d.L_.add(4),await Pi(d),d.q_.set("Unknown"),d.L_.delete(4),await pa(d)}(this))})}),this.q_=new eT(r,s)}}async function pa(n){if(vr(n))for(const e of n.B_)await e(!0)}async function Pi(n){for(const e of n.B_)await e(!1)}function ga(n,e){const t=G(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),vl(t)?yl(t):ds(t).r_()&&_l(t,e))}function ns(n,e){const t=G(n),r=ds(t);t.N_.delete(e),r.r_()&&dp(t,e),t.N_.size===0&&(r.r_()?r.o_():vr(t)&&t.q_.set("Unknown"))}function _l(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ds(n).A_(e)}function dp(n,e){n.Q_.xe(e),ds(n).R_(e)}function yl(n){n.Q_=new Zw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ds(n).start(),n.q_.v_()}function vl(n){return vr(n)&&!ds(n).n_()&&n.N_.size>0}function vr(n){return G(n).L_.size===0}function hp(n){n.Q_=void 0}async function nT(n){n.q_.set("Online")}async function rT(n){n.N_.forEach((e,t)=>{_l(n,e)})}async function sT(n,e){hp(n),vl(n)?(n.q_.M_(e),yl(n)):n.q_.set("Unknown")}async function iT(n,e,t){if(n.q_.set("Online"),e instanceof Cm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ho(n,r)}else if(e instanceof Io?n.Q_.Ke(e):e instanceof Pm?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Y.min()))try{const r=await rp(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,d)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(xe.EMPTY_BYTE_STRING,f.snapshotVersion)),dp(i,l);const m=new Yt(f.target,l,d,f.sequenceNumber);_l(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Ho(n,r)}}async function Ho(n,e,t){if(!Nn(e))throw e;n.L_.add(1),await Pi(n),n.q_.set("Offline"),t||(t=()=>rp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await pa(n)})}function fp(n,e){return e().catch(t=>Ho(n,t,e))}async function us(n){const e=G(n),t=Dn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;oT(e);)try{const s=await KE(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,aT(e,s)}catch(s){await Ho(e,s)}mp(e)&&pp(e)}function oT(n){return vr(n)&&n.O_.length<10}function aT(n,e){n.O_.push(e);const t=Dn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function mp(n){return vr(n)&&!Dn(n).n_()&&n.O_.length>0}function pp(n){Dn(n).start()}async function cT(n){Dn(n).p_()}async function lT(n){const e=Dn(n);for(const t of n.O_)e.m_(t.mutations)}async function uT(n,e,t){const r=n.O_.shift(),s=al.from(r,e,t);await fp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await us(n)}async function dT(n,e){e&&Dn(n).V_&&await async function(r,s){if(function(o){return Jw(o)&&o!==x.ABORTED}(s.code)){const i=r.O_.shift();Dn(r).s_(),await fp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await us(r)}}(n,e),mp(n)&&pp(n)}async function ph(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=vr(t);t.L_.add(3),await Pi(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await pa(t)}async function Vc(n,e){const t=G(n);e?(t.L_.delete(2),await pa(t)):e||(t.L_.add(2),await Pi(t),t.q_.set("Unknown"))}function ds(n){return n.K_||(n.K_=function(t,r,s){const i=G(t);return i.w_(),new YE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:nT.bind(null,n),Ro:rT.bind(null,n),mo:sT.bind(null,n),d_:iT.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),vl(n)?yl(n):n.q_.set("Unknown")):(await n.K_.stop(),hp(n))})),n.K_}function Dn(n){return n.U_||(n.U_=function(t,r,s){const i=G(t);return i.w_(),new XE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cT.bind(null,n),mo:dT.bind(null,n),f_:lT.bind(null,n),g_:uT.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await us(n)):(await n.U_.stop(),n.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Il(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wl(n,e){if(De("AsyncQueue",`${e}: ${n}`),Nn(n))return new M(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=Os(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new Kr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.W_=new ve(U.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class rs{constructor(e,t,r,s,i,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new rs(e,t,Kr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class fT{constructor(){this.queries=_h(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=_h(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new M(x.ABORTED,"Firestore shutting down"))}}function _h(){return new Ln(n=>hm(n),aa)}async function gp(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new hT,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=wl(o,`Initialization of query '${Fr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&El(t)}async function _p(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function mT(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&El(t)}function pT(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function El(n){n.Y_.forEach(e=>{e.next()})}var Nc,yh;(yh=Nc||(Nc={})).ea="default",yh.Cache="cache";class yp{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Nc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.key=e}}class Ip{constructor(e){this.key=e}}class gT{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=mm(e),this.Ra=new Kr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new gh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const _=s.get(f),E=Ai(this.query,m)?m:null,P=!!_&&this.mutatedKeys.has(_.key),C=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;_&&E?_.data.isEqual(E.data)?P!==C&&(r.track({type:3,doc:E}),D=!0):this.ga(_,E)||(r.track({type:2,doc:E}),D=!0,(l&&this.Aa(E,l)>0||d&&this.Aa(E,d)<0)&&(c=!0)):!_&&E?(r.track({type:0,doc:E}),D=!0):_&&!E&&(r.track({type:1,doc:_}),D=!0,(l||d)&&(c=!0)),D&&(E?(o=o.add(E),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(E,P){const C=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return C(E)-C(P)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,d=l!==this.Ea;return this.Ea=l,o.length!==0||d?{snapshot:new rs(this.query,e.Ra,i,o,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new gh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Ip(r))}),this.da.forEach(r=>{e.has(r)||t.push(new vp(r))}),t}ba(e){this.Ta=e.Ts,this.da=se();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return rs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _T{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class yT{constructor(e){this.key=e,this.va=!1}}class vT{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ln(c=>hm(c),aa),this.Ma=new Map,this.xa=new Set,this.Oa=new ve(U.comparator),this.Na=new Map,this.La=new fl,this.Ba={},this.ka=new Map,this.qa=mr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function IT(n,e,t=!0){const r=_a(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await wp(r,e,t,!0),s}async function wT(n,e){const t=_a(n);await wp(t,e,!0,!1)}async function wp(n,e,t,r){const s=await Go(n.localStore,_t(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Tl(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&ga(n.remoteStore,s),c}async function Tl(n,e,t,r,s){n.Ka=(m,_,E)=>async function(C,D,$,F){let N=D.view.ma($);N.ns&&(N=await Dc(C.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,N)));const B=F&&F.targetChanges.get(D.targetId),z=F&&F.targetMismatches.get(D.targetId)!=null,Z=D.view.applyChanges(N,C.isPrimaryClient,B,z);return Lc(C,D.targetId,Z.wa),Z.snapshot}(n,m,_,E);const i=await Dc(n.localStore,e,!0),o=new gT(e,i.Ts),c=o.ma(i.documents),l=Si.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=o.applyChanges(c,n.isPrimaryClient,l);Lc(n,t,d.wa);const f=new _T(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function ET(n,e,t){const r=G(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!aa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ts(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ns(r.remoteStore,s.targetId),ss(r,s.targetId)}).catch(Vn)):(ss(r,s.targetId),await ts(r.localStore,s.targetId,!0))}async function TT(n,e){const t=G(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ns(t.remoteStore,r.targetId))}async function bT(n,e,t){const r=Sl(n);try{const s=await function(o,c){const l=G(o),d=be.now(),f=c.reduce((E,P)=>E.add(P.key),se());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let P=pt(),C=se();return l.cs.getEntries(E,f).next(D=>{P=D,P.forEach(($,F)=>{F.isValidDocument()||(C=C.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,P)).next(D=>{m=D;const $=[];for(const F of c){const N=Ww(F,m.get(F.key).overlayedDocument);N!=null&&$.push(new an(F.key,N,nm(N.value.mapValue),Ye.exists(!0)))}return l.mutationQueue.addMutationBatch(E,d,$,c)}).next(D=>{_=D;const $=D.applyToLocalDocumentSet(m,C);return l.documentOverlayCache.saveOverlays(E,D.batchId,$)})}).then(()=>({batchId:_.batchId,changes:gm(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let d=o.Ba[o.currentUser.toKey()];d||(d=new ve(te)),d=d.insert(c,l),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,t),await Mn(r,s.changes),await us(r.remoteStore)}catch(s){const i=wl(s,"Failed to persist write");t.reject(i)}}async function Ep(n,e){const t=G(n);try{const r=await GE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?H(o.va):s.removedDocuments.size>0&&(H(o.va),o.va=!1))}),await Mn(t,r,e)}catch(r){await Vn(r)}}function vh(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=G(o);l.onlineState=c;let d=!1;l.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(c)&&(d=!0)}),d&&El(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AT(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new ve(U.comparator);o=o.insert(i,Re.newNoDocument(i,Y.min()));const c=se().add(i),l=new Ri(Y.min(),new Map,new ve(te),o,c);await Ep(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Rl(r)}else await ts(r.localStore,e,!1).then(()=>ss(r,e,t)).catch(Vn)}async function RT(n,e){const t=G(n),r=e.batch.batchId;try{const s=await qE(t.localStore,e);Al(t,r,null),bl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Mn(t,s)}catch(s){await Vn(s)}}async function ST(n,e,t){const r=G(n);try{const s=await function(o,c){const l=G(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(m=>(H(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);Al(r,e,t),bl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Mn(r,s)}catch(s){await Vn(s)}}function bl(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Al(n,e,t){const r=G(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ss(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Tp(n,r)})}function Tp(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(ns(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Rl(n))}function Lc(n,e,t){for(const r of t)r instanceof vp?(n.La.addReference(r.key,e),PT(n,r)):r instanceof Ip?(V("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Tp(n,r.key)):q()}function PT(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(V("SyncEngine","New document in limbo: "+t),n.xa.add(r),Rl(n))}function Rl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new U(he.fromString(e)),r=n.qa.next();n.Na.set(r,new yT(t)),n.Oa=n.Oa.insert(t,r),ga(n.remoteStore,new Yt(_t(oa(t.path)),r,"TargetPurposeLimboResolution",ct.oe))}}async function Mn(n,e,t){const r=G(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){s.push(d);const m=pl.Wi(l.targetId,d);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,d){const f=G(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>S.forEach(d,_=>S.forEach(_.$i,E=>f.persistence.referenceDelegate.addReference(m,_.targetId,E)).next(()=>S.forEach(_.Ui,E=>f.persistence.referenceDelegate.removeReference(m,_.targetId,E)))))}catch(m){if(!Nn(m))throw m;V("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const _=m.targetId;if(!m.fromCache){const E=f.os.get(_),P=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(_,C)}}}(r.localStore,i))}async function CT(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await np(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new M(x.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mn(t,r.hs)}}function kT(n,e){const t=G(n),r=t.Na.get(e);if(r&&r.va)return se().add(r.key);{let s=se();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function DT(n,e){const t=G(n),r=await Dc(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&Lc(t,e.targetId,s.wa),s}async function xT(n,e){const t=G(n);return ip(t.localStore,e).then(r=>Mn(t,r))}async function VT(n,e,t,r){const s=G(n),i=await function(c,l){const d=G(c),f=G(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Mn(m,l).next(_=>_?d.localDocuments.getDocuments(m,_):S.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await us(s.remoteStore):t==="acknowledged"||t==="rejected"?(Al(s,e,r||null),bl(s,e),function(c,l){G(G(c).mutationQueue).On(l)}(s.localStore,e)):q(),await Mn(s,i)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function NT(n,e){const t=G(n);if(_a(t),Sl(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Ih(t,r.toArray());t.Qa=!0,await Vc(t.remoteStore,!0);for(const i of s)ga(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(ss(t,o),ts(t.localStore,o,!0))),ns(t.remoteStore,o)}),await s,await Ih(t,r),function(o){const c=G(o);c.Na.forEach((l,d)=>{ns(c.remoteStore,d)}),c.La.pr(),c.Na=new Map,c.Oa=new ve(U.comparator)}(t),t.Qa=!1,await Vc(t.remoteStore,!1)}}async function Ih(n,e,t){const r=G(n),s=[],i=[];for(const o of e){let c;const l=r.Ma.get(o);if(l&&l.length!==0){c=await Go(r.localStore,_t(l[0]));for(const d of l){const f=r.Fa.get(d),m=await DT(r,f);m.snapshot&&i.push(m.snapshot)}}else{const d=await sp(r.localStore,o);c=await Go(r.localStore,d),await Tl(r,bp(d),o,!1,c.resumeToken)}s.push(c)}return r.Ca.d_(i),s}function bp(n){return um(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function LT(n){return function(t){return G(G(t).persistence).Qi()}(G(n).localStore)}async function MT(n,e,t,r){const s=G(n);if(s.Qa)return void V("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await ip(s.localStore,fm(i[0])),c=Ri.createSynthesizedRemoteEventForCurrentChange(e,t==="current",xe.EMPTY_BYTE_STRING);await Mn(s,o,c);break}case"rejected":await ts(s.localStore,e,!0),ss(s,e,r);break;default:q()}}async function OT(n,e,t){const r=_a(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){V("SyncEngine","Adding an already active target "+s);continue}const i=await sp(r.localStore,s),o=await Go(r.localStore,i);await Tl(r,bp(i),o.targetId,!1,o.resumeToken),ga(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await ts(r.localStore,s,!1).then(()=>{ns(r.remoteStore,s),ss(r,s)}).catch(Vn)}}function _a(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ep.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AT.bind(null,e),e.Ca.d_=mT.bind(null,e.eventManager),e.Ca.$a=pT.bind(null,e.eventManager),e}function Sl(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ST.bind(null,e),e}class fi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ma(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return tp(this.persistence,new ep,e.initialUser,this.serializer)}Ga(e){return new Xm(fa.Zr,this.serializer)}Wa(e){return new ap}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fi.provider={build:()=>new fi};class Ap extends fi{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Sl(this.Ja.syncEngine),await us(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return tp(this.persistence,new ep,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new AE(r,e.asyncQueue,t)}Ha(e,t){const r=new sw(t,this.persistence);return new rw(e.asyncQueue,r)}Ga(e){const t=Zm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?at.withCacheSize(this.cacheSizeBytes):at.DEFAULT;return new ml(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,cp(),wo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new ap}}class FT extends Ap{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Za&&(this.sharedClientState.syncEngine={no:VT.bind(null,t),ro:MT.bind(null,t),io:OT.bind(null,t),Qi:LT.bind(null,t),eo:xT.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await NT(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=cp();if(!Za.D(t))throw new M(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Zm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Za(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class mi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CT.bind(null,this.syncEngine),await Vc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fT}()}createDatastore(e){const t=ma(e.databaseInfo.databaseId),r=function(i){return new JE(i)}(e.databaseInfo);return function(i,o,c,l){return new ZE(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new tT(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>vh(this.syncEngine,t,0),function(){return mh.D()?new mh:new HE}())}createSyncEngine(e,t){return function(s,i,o,c,l,d,f){const m=new vT(s,i,o,c,l,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);V("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Pi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}mi.provider={build:()=>new mi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):De("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=Uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await np(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await UT(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ph(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ph(e.remoteStore,s)),n._onlineComponents=e}async function UT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await tc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;si("Error using user provided cache. Falling back to memory cache: "+t),await tc(n,new fi)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await tc(n,new fi);return n._offlineComponents}async function Sp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await wh(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await wh(n,new mi))),n._onlineComponents}function $T(n){return Sp(n).then(e=>e.syncEngine)}async function Pp(n){const e=await Sp(n),t=e.eventManager;return t.onListen=IT.bind(null,e.syncEngine),t.onUnlisten=ET.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=wT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=TT.bind(null,e.syncEngine),t}function jT(n,e,t={}){const r=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,d){const f=new Rp({next:_=>{f.Za(),o.enqueueAndForget(()=>_p(i,m));const E=_.docs.has(c);!E&&_.fromCache?d.reject(new M(x.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&_.fromCache&&l&&l.source==="server"?d.reject(new M(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new yp(oa(c.path),f,{includeMetadataChanges:!0,_a:!0});return gp(i,m)}(await Pp(n),n.asyncQueue,e,t,r)),r.promise}function qT(n,e,t={}){const r=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,d){const f=new Rp({next:_=>{f.Za(),o.enqueueAndForget(()=>_p(i,m)),_.fromCache&&l.source==="server"?d.reject(new M(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new yp(c,f,{includeMetadataChanges:!0,_a:!0});return gp(i,m)}(await Pp(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(n,e,t){if(!t)throw new M(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function GT(n,e,t,r){if(e===!0&&r===!0)throw new M(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Th(n){if(!U.isDocumentKey(n))throw new M(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bh(n){if(U.isDocumentKey(n))throw new M(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ya(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q()}function Ct(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ya(n);throw new M(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class va{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ah({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ah(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HI;switch(r.type){case"firstParty":return new JI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Eh.get(t);r&&(V("ComponentProvider","Removing Datastore"),Eh.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ir(this.firestore,e,this._query)}}class ot{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Rn extends Ir{constructor(e,t,r){super(e,t,oa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new U(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function je(n,e,...t){if(n=Se(n),Pl("collection","path",e),n instanceof va){const r=he.fromString(e,...t);return bh(r),new Rn(n,null,r)}{if(!(n instanceof ot||n instanceof Rn))throw new M(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return bh(r),new Rn(n.firestore,null,r)}}function zT(n,e){if(n=Ct(n,va),Pl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new M(x.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ir(n,null,function(r){return new cs(he.emptyPath(),r)}(e))}function ce(n,e,...t){if(n=Se(n),arguments.length===1&&(e=Uf.newId()),Pl("doc","path",e),n instanceof va){const r=he.fromString(e,...t);return Th(r),new ot(n,null,new U(r))}{if(!(n instanceof ot||n instanceof Rn))throw new M(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return Th(r),new ot(n.firestore,n instanceof Rn?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new lp(this,"async_queue_retry"),this.Vu=()=>{const r=wo();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=wo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=wo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new $t;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Nn(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw De("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Il.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class wr extends va{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Rh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rh(e),this._firestoreClient=void 0,await e}}}function KT(n,e,t){t||(t="(default)");const r=Zo(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(ei(i,e))return s;throw new M(x.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new M(x.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function Cl(n){if(n._terminated)throw new M(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||HT(n),n._firestoreClient}function HT(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,d,f){return new Aw(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Cp(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new BT(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(xe.fromBase64String(e))}catch(t){throw new M(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new is(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=/^__.*__$/;class QT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new an(e,this.data,this.fieldMask,t,this.fieldTransforms):new ls(e,this.data,t,this.fieldTransforms)}}class kp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new an(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Dp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class xl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new xl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Wo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Dp(this.Cu)&&WT.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class JT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ma(e)}Qu(e,t,r,s=!1){return new xl({Cu:e,methodName:t,qu:r,path:Te.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ea(n){const e=n._freezeSettings(),t=ma(n._databaseId);return new JT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xp(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Nl("Data must be an object, but it was:",o,r);const c=Vp(r,o);let l,d;if(i.merge)l=new lt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=Mc(e,m,t);if(!o.contains(_))throw new M(x.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Lp(f,_)||f.push(_)}l=new lt(f),d=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=o.fieldTransforms;return new QT(new Je(c),l,d)}class Ta extends wa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ta}}class Vl extends wa{_toFieldTransform(e){return new Tm(e.path,new Yr)}isEqual(e){return e instanceof Vl}}function YT(n,e,t,r){const s=n.Qu(1,e,t);Nl("Data must be an object, but it was:",s,r);const i=[],o=Je.empty();yr(r,(l,d)=>{const f=Ll(e,l,t);d=Se(d);const m=s.Nu(f);if(d instanceof Ta)i.push(f);else{const _=Ci(d,m);_!=null&&(i.push(f),o.set(f,_))}});const c=new lt(i);return new kp(o,c,s.fieldTransforms)}function XT(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[Mc(e,r,t)],l=[s];if(i.length%2!=0)throw new M(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(Mc(e,i[_])),l.push(i[_+1]);const d=[],f=Je.empty();for(let _=c.length-1;_>=0;--_)if(!Lp(d,c[_])){const E=c[_];let P=l[_];P=Se(P);const C=o.Nu(E);if(P instanceof Ta)d.push(E);else{const D=Ci(P,C);D!=null&&(d.push(E),f.set(E,D))}}const m=new lt(d);return new kp(f,m,o.fieldTransforms)}function ZT(n,e,t,r=!1){return Ci(t,n.Qu(r?4:3,e))}function Ci(n,e){if(Np(n=Se(n)))return Nl("Unsupported field value:",e,n),Vp(n,e);if(n instanceof wa)return function(r,s){if(!Dp(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ci(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=be.fromDate(r);return{timestampValue:es(s.serializer,i)}}if(r instanceof be){const i=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:es(s.serializer,i)}}if(r instanceof kl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof is)return{bytesValue:km(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ul(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Dl)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return il(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ya(r)}`)}(n,e)}function Vp(n,e){const t={};return Xf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(n,(r,s)=>{const i=Ci(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Np(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof be||n instanceof kl||n instanceof is||n instanceof ot||n instanceof wa||n instanceof Dl)}function Nl(n,e,t){if(!Np(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ya(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Mc(n,e,t){if((e=Se(e))instanceof Ia)return e._internalPath;if(typeof e=="string")return Ll(n,e);throw Wo("Field path arguments must be of type string or ",n,!1,void 0,t)}const eb=new RegExp("[~\\*/\\[\\]]");function Ll(n,e,t){if(e.search(eb)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ia(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new M(x.INVALID_ARGUMENT,c+n+l)}function Lp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ml("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class tb extends Mp{data(){return super.data()}}function Ml(n,e){return typeof e=="string"?Ll(n,e):e instanceof Ia?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ol{}class rb extends Ol{}function Qo(n,e,...t){let r=[];e instanceof Ol&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof Fl).length,c=i.filter(l=>l instanceof ba).length;if(o>1||o>0&&c>0)throw new M(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ba extends rb{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ba(e,t,r)}_apply(e){const t=this._parse(e);return Op(e._query,t),new Ir(e.firestore,e.converter,Ec(e._query,t))}_parse(e){const t=Ea(e.firestore);return function(i,o,c,l,d,f,m){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new M(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ph(m,f);const E=[];for(const P of m)E.push(Sh(l,i,P));_={arrayValue:{values:E}}}else _=Sh(l,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ph(m,f),_=ZT(c,o,m,f==="in"||f==="not-in");return oe.create(d,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ys(n,e,t){const r=e,s=Ml("where",n);return ba._create(s,r,t)}class Fl extends Ol{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:me.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Op(o,l),o=Ec(o,l)}(e._query,t),new Ir(e.firestore,e.converter,Ec(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Sh(n,e,t){if(typeof(t=Se(t))=="string"){if(t==="")throw new M(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dm(e)&&t.indexOf("/")!==-1)throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(he.fromString(t));if(!U.isDocumentKey(r))throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ui(n,new U(r))}if(t instanceof ot)return ui(n,t._key);throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ya(t)}.`)}function Ph(n,e){if(!Array.isArray(n)||n.length===0)throw new M(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Op(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new M(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class sb{convertValue(e,t="none"){switch(ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Cn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return yr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ee(o.doubleValue));return new Dl(i)}convertGeoPoint(e){return new kl(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=nl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const t=nn(e);return new be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=he.fromString(e);H(Um(r));const s=new lr(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||De(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bp extends Mp{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ml("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Eo extends Bp{data(e={}){return super.data(e)}}class ib{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Eo(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:ob(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ob(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n){n=Ct(n,ot);const e=Ct(n.firestore,wr);return jT(Cl(e),n._key).then(t=>ab(e,n,t))}class Up extends sb{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function Ze(n){n=Ct(n,Ir);const e=Ct(n.firestore,wr),t=Cl(e),r=new Up(e);return nb(n._query),qT(t,n._query).then(s=>new ib(e,r,n,s))}function Sn(n,e,t){n=Ct(n,ot);const r=Ct(n.firestore,wr),s=Fp(n.converter,e);return Aa(r,[xp(Ea(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ye.none())])}function ut(n,e,t,...r){n=Ct(n,ot);const s=Ct(n.firestore,wr),i=Ea(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof Ia?XT(i,"updateDoc",n._key,e,t,r):YT(i,"updateDoc",n._key,e),Aa(s,[o.toMutation(n._key,Ye.exists(!0))])}function rn(n){return Aa(Ct(n.firestore,wr),[new ua(n._key,Ye.none())])}function $p(n,e){const t=Ct(n.firestore,wr),r=ce(n),s=Fp(n.converter,e);return Aa(t,[xp(Ea(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ye.exists(!1))]).then(()=>r)}function Aa(n,e){return function(r,s){const i=new $t;return r.asyncQueue.enqueueAndForget(async()=>bT(await $T(r),s,i)),i.promise}(Cl(n),e)}function ab(n,e,t){const r=t.docs.get(e._key),s=new Up(n);return new Bp(n,s,e._key,r,new Us(t.hasPendingWrites,t.fromCache),e.converter)}class cb{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=hb(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function lb(n){return new cb(n)}class ub{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=mi.provider,this._offlineComponentProvider={build:t=>new Ap(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class db{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=mi.provider,this._offlineComponentProvider={build:t=>new FT(t,e==null?void 0:e.cacheSizeBytes)}}}function hb(n){return new ub(void 0)}function fb(){return new db}function yt(){return new Vl("serverTimestamp")}(function(e,t=!0){(function(s){as=s})(_r),ir(new Pn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new wr(new WI(r.getProvider("auth-internal")),new XI(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lr(d.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ft(wd,"4.7.3",e),Ft(wd,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="firebasestorage.googleapis.com",qp="storageBucket",mb=2*60*1e3,pb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends qt{constructor(e,t,r=0){super(nc(e),`Firebase Storage: ${t} (${nc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pe||(Pe={}));function nc(n){return"storage/"+n}function Bl(){const n="An unknown error occurred, please check the error payload for server response.";return new Ce(Pe.UNKNOWN,n)}function gb(n){return new Ce(Pe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function _b(n){return new Ce(Pe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yb(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(Pe.UNAUTHENTICATED,n)}function vb(){return new Ce(Pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ib(n){return new Ce(Pe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function wb(){return new Ce(Pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Eb(){return new Ce(Pe.CANCELED,"User canceled the upload/download.")}function Tb(n){return new Ce(Pe.INVALID_URL,"Invalid URL '"+n+"'.")}function bb(n){return new Ce(Pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ab(){return new Ce(Pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qp+"' property when initializing the app?")}function Rb(){return new Ce(Pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Sb(){return new Ce(Pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Pb(n){return new Ce(Pe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Oc(n){return new Ce(Pe.INVALID_ARGUMENT,n)}function Gp(){return new Ce(Pe.APP_DELETED,"The Firebase app was deleted.")}function Cb(n){return new Ce(Pe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xs(n,e){return new Ce(Pe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function xs(n){throw new Ce(Pe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=gt.makeFromUrl(e,t)}catch{return new gt(e,"")}if(r.path==="")return r;throw bb(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(B){B.path_=decodeURIComponent(B.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",E=new RegExp(`^https?://${m}/${f}/b/${s}/o${_}`,"i"),P={bucket:1,path:3},C=t===jp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",$=new RegExp(`^https?://${C}/${s}/${D}`,"i"),N=[{regex:c,indices:l,postModify:i},{regex:E,indices:P,postModify:d},{regex:$,indices:{bucket:1,path:2},postModify:d}];for(let B=0;B<N.length;B++){const z=N[B],Z=z.regex.exec(e);if(Z){const w=Z[z.indices.bucket];let y=Z[z.indices.path];y||(y=""),r=new gt(w,y),z.postModify(r);break}}if(r==null)throw Tb(e);return r}}class kb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let d=!1;function f(...D){d||(d=!0,e.apply(null,D))}function m(D){s=setTimeout(()=>{s=null,n(E,l())},D)}function _(){i&&clearTimeout(i)}function E(D,...$){if(d){_();return}if(D){_(),f.call(null,D,...$);return}if(l()||o){_(),f.call(null,D,...$);return}r<64&&(r*=2);let N;c===1?(c=2,N=0):N=(r+Math.random())*1e3,m(N)}let P=!1;function C(D){P||(P=!0,_(),!d&&(s!==null?(D||(c=2),clearTimeout(s),m(0)):D||(c=1)))}return m(0),i=setTimeout(()=>{o=!0,C(!0)},t),C}function xb(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(n){return n!==void 0}function Nb(n){return typeof n=="object"&&!Array.isArray(n)}function Ul(n){return typeof n=="string"||n instanceof String}function Ch(n){return $l()&&n instanceof Blob}function $l(){return typeof Blob<"u"}function kh(n,e,t,r){if(r<e)throw Oc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Oc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function zp(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var rr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(rr||(rr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t,r,s,i,o,c,l,d,f,m,_=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,P)=>{this.resolve_=E,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ao(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===rr.NO_ERROR,l=i.getStatus();if(!c||Lb(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===rr.ABORT;r(!1,new ao(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new ao(d,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Vb(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Bl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Gp():Eb();o(l)}else{const l=wb();o(l)}};this.canceled_?t(!1,new ao(!1,null,!0)):this.backoffId_=Db(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ao{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Ob(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Fb(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Bb(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Ub(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function $b(n,e,t,r,s,i,o=!0){const c=zp(n.urlParams),l=n.url+c,d=Object.assign({},n.headers);return Bb(d,e),Ob(d,t),Fb(d,i),Ub(d,r),new Mb(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qb(...n){const e=jb();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if($l())return new Blob(n);throw new Ce(Pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Gb(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(n){if(typeof atob>"u")throw Pb("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rc{constructor(e,t){this.data=e,this.contentType=t||null}}function Kp(n,e){switch(n){case St.RAW:return new rc(Hp(e));case St.BASE64:case St.BASE64URL:return new rc(Wp(n,e));case St.DATA_URL:return new rc(Hb(e),Wb(e))}throw Bl()}function Hp(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Kb(n){let e;try{e=decodeURIComponent(n)}catch{throw Xs(St.DATA_URL,"Malformed data URL.")}return Hp(e)}function Wp(n,e){switch(n){case St.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Xs(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Xs(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=zb(e)}catch(s){throw s.message.includes("polyfill")?s:Xs(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Qp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Xs(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Qb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Hb(n){const e=new Qp(n);return e.base64?Wp(St.BASE64,e.rest):Kb(e.rest)}function Wb(n){return new Qp(n).contentType}function Qb(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){let r=0,s="";Ch(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ch(this.data_)){const r=this.data_,s=Gb(r,e,t);return s===null?null:new wn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new wn(r,!0)}}static getBlob(...e){if($l()){const t=e.map(r=>r instanceof wn?r.data_:r);return new wn(qb.apply(null,t))}else{const t=e.map(o=>Ul(o)?Kp(St.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new wn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n){let e;try{e=JSON.parse(n)}catch{return null}return Nb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Yb(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Yp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(n,e){return e}class rt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Xb}}let co=null;function Zb(n){return!Ul(n)||n.length<2?n:Yp(n)}function Xp(){if(co)return co;const n=[];n.push(new rt("bucket")),n.push(new rt("generation")),n.push(new rt("metageneration")),n.push(new rt("name","fullPath",!0));function e(i,o){return Zb(o)}const t=new rt("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new rt("size");return s.xform=r,n.push(s),n.push(new rt("timeCreated")),n.push(new rt("updated")),n.push(new rt("md5Hash",null,!0)),n.push(new rt("cacheControl",null,!0)),n.push(new rt("contentDisposition",null,!0)),n.push(new rt("contentEncoding",null,!0)),n.push(new rt("contentLanguage",null,!0)),n.push(new rt("contentType",null,!0)),n.push(new rt("metadata","customMetadata",!0)),co=n,co}function eA(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new gt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function tA(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return eA(r,n),r}function Zp(n,e,t){const r=Jp(e);return r===null?null:tA(n,r,t)}function nA(n,e,t,r){const s=Jp(e);if(s===null||!Ul(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const f=n.bucket,m=n.fullPath,_="/b/"+o(f)+"/o/"+o(m),E=jl(_,t,r),P=zp({alt:"media",token:d});return E+P})[0]}function rA(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class eg{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n){if(!n)throw Bl()}function sA(n,e){function t(r,s){const i=Zp(n,s,e);return tg(i!==null),i}return t}function iA(n,e){function t(r,s){const i=Zp(n,s,e);return tg(i!==null),nA(i,s,n.host,n._protocol)}return t}function ng(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=vb():s=yb():t.getStatus()===402?s=_b(n.bucket):t.getStatus()===403?s=Ib(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function oA(n){const e=ng(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=gb(n.path)),i.serverResponse=s.serverResponse,i}return t}function aA(n,e,t){const r=e.fullServerUrl(),s=jl(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new eg(s,i,iA(n,t),o);return c.errorHandler=oA(e),c}function cA(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function lA(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=cA(null,e)),r}function uA(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let N="";for(let B=0;B<2;B++)N=N+Math.random().toString().slice(2);return N}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=lA(e,r,s),f=rA(d,t),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,_=`\r
--`+l+"--",E=wn.getBlob(m,r,_);if(E===null)throw Rb();const P={name:d.fullPath},C=jl(i,n.host,n._protocol),D="POST",$=n.maxUploadRetryTime,F=new eg(C,D,sA(n,t),$);return F.urlParams=P,F.headers=o,F.body=E.uploadData(),F.errorHandler=ng(e),F}class dA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=rr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=rr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=rr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw xs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hA extends dA{initXhr(){this.xhr_.responseType="text"}}function rg(){return new hA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){this._service=e,t instanceof gt?this._location=t:this._location=gt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new pr(e,t)}get root(){const e=new gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yp(this._location.path)}get storage(){return this._service}get parent(){const e=Jb(this._location.path);if(e===null)return null;const t=new gt(this._location.bucket,e);return new pr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Cb(e)}}function fA(n,e,t){n._throwIfRoot("uploadBytes");const r=uA(n.storage,n._location,Xp(),new wn(e,!0),t);return n.storage.makeRequestWithTokens(r,rg).then(s=>({metadata:s,ref:n}))}function mA(n,e,t=St.RAW,r){n._throwIfRoot("uploadString");const s=Kp(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),fA(n,s.data,i)}function pA(n){n._throwIfRoot("getDownloadURL");const e=aA(n.storage,n._location,Xp());return n.storage.makeRequestWithTokens(e,rg).then(t=>{if(t===null)throw Sb();return t})}function gA(n,e){const t=Yb(n._location.path,e),r=new gt(n._location.bucket,t);return new pr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n){return/^[A-Za-z]+:\/\//.test(n)}function yA(n,e){return new pr(n,e)}function sg(n,e){if(n instanceof ql){const t=n;if(t._bucket==null)throw Ab();const r=new pr(t,t._bucket);return e!=null?sg(r,e):r}else return e!==void 0?gA(n,e):n}function vA(n,e){if(e&&_A(e)){if(n instanceof ql)return yA(n,e);throw Oc("To use ref(service, url), the first argument must be a Storage instance.")}else return sg(n,e)}function Dh(n,e){const t=e==null?void 0:e[qp];return t==null?null:gt.makeFromBucketSpec(t,n)}function IA(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:o_(s,n.app.options.projectId))}class ql{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=jp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mb,this._maxUploadRetryTime=pb,this._requests=new Set,s!=null?this._bucket=gt.makeFromBucketSpec(s,this._host):this._bucket=Dh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gt.makeFromBucketSpec(this._url,e):this._bucket=Dh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new kb(Gp());{const o=$b(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const xh="@firebase/storage",Vh="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="storage";function og(n,e,t,r){return n=Se(n),mA(n,e,t,r)}function ag(n){return n=Se(n),pA(n)}function cg(n,e){return n=Se(n),vA(n,e)}function wA(n=Jh(),e){n=Se(n);const r=Zo(n,ig).getImmediate({identifier:e}),s=s_("storage");return s&&EA(r,...s),r}function EA(n,e,t,r={}){IA(n,e,t,r)}function TA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ql(t,r,s,e,_r)}function bA(){ir(new Pn(ig,TA,"PUBLIC").setMultipleInstances(!0)),Ft(xh,Vh,""),Ft(xh,Vh,"esm2017")}bA();const AA={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},Gl=Qh(AA),ki=GI(Gl),X=KT(Gl,{localCache:lb({tabManager:fb()})}),lg=wA(Gl),p={user:null,profile:null,isAdmin:!1,isSuperAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,meetups:[],currentCourse:null,courseMap:null,courseMapLayer:null,approvedDraft:{new:[],edit:[]},gpsTracking:!1,warnThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0};function K(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ne(n,e="info"){const t=document.createElement("div");t.className=`toast toast-${e}`,t.textContent=n,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("toast-show")),setTimeout(()=>{t.classList.remove("toast-show"),setTimeout(()=>t.remove(),300)},3500)}function Di(n,e){const t=document.getElementById("confirm-modal");document.getElementById("confirm-msg").textContent=n,t.classList.remove("hidden");const r=()=>{t.classList.add("hidden"),window._confirmAccept=null,window._confirmReject=null};window._confirmAccept=()=>{r(),e()},window._confirmReject=()=>{r()}}const ug="archery_v5",RA="archery_v4";function Nh(){try{const n=JSON.parse(localStorage.getItem(ug)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(RA)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function kt(){try{localStorage.setItem(ug,JSON.stringify({friends:p.friends,rounds:p.rounds.slice(0,200),courses:p.courses}))}catch(n){(n==null?void 0:n.name)==="QuotaExceededError"&&ne("Lokalt lager er fuldt — nogle data blev ikke gemt","error")}}function gi(){const n=document.getElementById("friends-list");if(!p.friends.length){n.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}n.innerHTML="",p.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${K(e.name)}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).map(K).join(" · ")}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del">🗑</button></div>`,t.querySelector(".frd-edit").addEventListener("click",()=>openFriendModal(e)),t.querySelector(".frd-del").addEventListener("click",()=>doDeleteFriend(e.id,e.name)),n.appendChild(t)})}function _i(){const n=document.getElementById("qfriends");n.innerHTML="",p.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=p.friends.filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await Ze(je(X,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=p.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...r];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" data-id="${K(i.id)}" data-name="${K(i.name||"")}" data-email="${K(i.email||"")}">${K(i.name)}${i.email?` <span style='font-size:11px;opacity:.6'>${K(i.email)}</span>`:""}</div>`).join(""),e.querySelectorAll(".ac-item").forEach(i=>i.addEventListener("click",()=>{selectFriend(i.dataset.id,i.dataset.name,i.dataset.email),document.getElementById("friend-search").value="",document.getElementById("ac-list").classList.add("hidden")})),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){if(!p.friends.find(r=>r.id===n)){const r={id:n,name:e,email:t};p.friends.push(r),kt(),gi(),_i(),p.user&&Sn(ce(X,"users",p.user.uid,"friends",n),r).catch(s=>console.warn(s))}window.addParticipant(n,e)};window.openFriendModal=function(n){p.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=n?"Rediger ven":"Tilføj ven",document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim().slice(0,80),email:document.getElementById("f-email").value.trim().slice(0,100),phone:document.getElementById("f-phone").value.trim().slice(0,30),club:document.getElementById("f-club").value.trim().slice(0,80),bowType:document.getElementById("f-bow").value};if(!n.name)return;if(p.editFriendId){const r=p.friends.findIndex(s=>s.id===p.editFriendId);r!==-1?p.friends[r]={...n,id:p.editFriendId}:p.friends.push({...n,id:p.editFriendId})}else p.friends.push({...n,id:"f_"+Date.now()});const e=p.editFriendId||"f_"+Date.now();p.editFriendId||(p.friends[p.friends.length-1].id=e);const t=p.friends.find(r=>r.id===(p.editFriendId||e));t&&p.user&&Sn(ce(X,"users",p.user.uid,"friends",t.id),t).catch(r=>console.warn(r)),kt(),document.getElementById("friend-modal").classList.add("hidden"),gi(),_i()};window.doDeleteFriend=function(n,e){Di(`Slet ${e}?`,()=>{p.friends=p.friends.filter(t=>t.id!==n),kt(),gi(),_i(),p.user&&rn(ce(X,"users",p.user.uid,"friends",n)).catch(t=>console.warn(t))})};const SA=[11,10,8,5,"M"];function Me(n){return n==="M"||n==null?0:Number(n)}function gr(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":t==="-"?null:Number(t))):[]}function PA(n){return n.map(e=>e.map(t=>t??"-").join(",")).join(";")}function Xe(n){return n.flat().reduce((e,t)=>e+Me(t),0)}function CA(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(s=>s!=null).map(Me));return t.length?(t.reduce((r,s)=>r+s,0)/t.length).toFixed(1):null}function zl(n){const e={11:0,10:0,8:0,5:0,M:0};return n.flat().forEach(t=>{t==="M"?e.M++:t!=null&&e[Number(t)]!==void 0&&e[Number(t)]++}),e}function Kl(n){return n.length?n.reduce((e,t)=>Xe(t.scores)>Xe(e.scores)?t:e,n[0]):null}function kA(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,s)=>r+Me(s),0)/t.length<e:!1}function DA(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function xA(n,e){for(;n.scores.length<e;)n.scores.push([null,null])}function VA(n,e){let t=0;for(let r=0;r<e;r++)n.every(s=>{const i=s.scores[r]||[null,null];return i[0]!=null&&i[1]!=null})&&t++;return t}function dg(n){return{id:n.id||null,name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:PA(e.scores)}))}}function NA(n){return{...n,shooters:(n.shooters||[]).map(e=>({...e,scores:gr(e.scores)}))}}function hg(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}let To=null,bo=!1,sr=!1,Fc=[],Zs=null,$s=0,Vt=null,Bc=null,Vs=null;function fg(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function Hl(n,e){const r=(e.lat-n.lat)*Math.PI/180,s=(e.lng-n.lng)*Math.PI/180,i=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function mg(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function pg(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function LA(n){return navigator.geolocation?(Vs=n,Fc=[],$s=0,Vt=null,Zs=Date.now(),sr=!1,bo=!0,To=navigator.geolocation.watchPosition(e=>{if(!bo||sr)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};Vt&&($s+=Hl(Vt,t)),Vt=t,Fc.push(t),Vs&&Vs({lat:t.lat,lng:t.lng,distance:$s,elapsed:Math.round((Date.now()-Zs)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),Bc=setInterval(()=>{bo&&!sr&&Vs&&Vs({lat:Vt==null?void 0:Vt.lat,lng:Vt==null?void 0:Vt.lng,distance:$s,elapsed:Math.round((Date.now()-Zs)/1e3)})},1e3),!0):!1}function MA(){return sr=!sr,sr}function gg(){return bo=!1,sr=!1,To!==null&&(navigator.geolocation.clearWatch(To),To=null),clearInterval(Bc),Bc=null,{route:Fc.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round($s),duration:Zs?Math.round((Date.now()-Zs)/1e3):0}}function Ra(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function OA(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((s,i)=>{if(!s.gps)return;const o=Hl(e,s.gps);o<t&&(t=o,r=i)}),r}function FA(n){const e=n.data();return{id:n.id,name:e.name||e.yam||"—",numTargets:e.numTargets||e.antalMål||24,location:e.location||e.beliggenhed||"",targets:e.targets||e.mål||[],visits:e.visits||e.besøg||[],private:e.private??e.privat??!1,hidden:e.hidden??e.skjult??!1,approvedUsers:e.approvedUsers||e.godkendteBrugere||[]}}async function BA(){var n;try{const e=(((n=p.user)==null?void 0:n.email)||"").toLowerCase();let t;if(p.isAdmin)t=[await Ze(je(X,"courses"))];else{const i=[Ze(Qo(je(X,"courses"),Ys("hidden","==",!1)))];e&&i.push(Ze(Qo(je(X,"courses"),Ys("hidden","==",!0),Ys("approvedUsers","array-contains",e)))),t=await Promise.all(i)}const r=new Map;t.forEach(i=>i.docs.forEach(o=>r.set(o.id,o)));const s=[...r.values()].map(FA);s.length&&(p.courses=s,kt(),xi(),window.populateCourseDropdown())}catch(e){console.warn("courses:",e)}}function xi(){const n=document.getElementById("courses-list");if(!p.courses.length){n.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}n.innerHTML="",p.courses.forEach(e=>{const t=document.createElement("div");t.className="ccard",t.innerHTML=`<div class="ccard-name">${K(e.name)}${e.private?' <span class="ccard-private-note">(Banen er kun for medlemmer)</span>':""}</div><div class="ccard-meta">${e.numTargets} mål · ${K(e.location||"—")}</div>`,t.onclick=()=>UA(e),n.appendChild(t)})}function UA(n){p.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name+(n.private?" (Banen er kun for medlemmer)":""),window.switchSubtab("map"),$A(n),jA(n),Vi(n)}function $A(n){const e=document.getElementById("course-map");p.courseMap&&(p.courseMap.remove(),p.courseMap=null),p.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(p.courseMap);const t=[];(n.targets||[]).forEach((r,s)=>{const i=r.gps||r.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div class="map-marker-num">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(p.courseMap).bindPopup(`<b>${s+1}. ${r.name||"Mål"}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" class="popup-target-img"/>`:""}`))}),t.length?p.courseMap.fitBounds(t,{padding:[20,20]}):p.courseMap.setView([55.7,12.5],10)}function jA(n){const e=document.getElementById("visits-list"),t=p.rounds.filter(r=>r.courseId===n.id).map(r=>{const s=(r.shooters||[]).map(o=>({...o,scores:gr(o.scores)})),i=Kl(s);return{roundId:r.id,date:r.completed?new Date(r.completed).toLocaleDateString("da-DK"):r.created?new Date(r.created).toLocaleDateString("da-DK"):"—",participants:s.map(o=>o.name),winner:i==null?void 0:i.name,winnerScore:i?Xe(i.scores):0}});if(!t.length){e.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}e.innerHTML="",t.forEach(r=>{const s=document.createElement("div");s.className="visit-card",s.onclick=i=>{i.target.closest(".btn-icon")||window.showVisitResults(r.roundId)},s.innerHTML=`<div class="visit-card-head"><span class="visit-card-date">${K(r.date)}</span><button class="btn-icon" onclick="window.showVisitResults('${K(r.roundId)}')" title="Se resultat">📊</button></div><div class="visit-card-participants">${(r.participants||[]).map(K).join(", ")}</div>${r.winner?`<div class="visit-card-winner">🏆 ${K(r.winner)} (${r.winnerScore} pt)</div>`:""}`,e.appendChild(s)})}function Vi(n){const e=n.targets||[];let t=`
    <div class="card edit-info-card">
      <div class="card-title">Baneinfo</div>
      <div class="fg"><label class="lbl">Banenavn</label><input type="text" id="edit-cname" value="${n.name}" /></div>
      <div class="fg"><label class="lbl">Lokation</label><input type="text" id="edit-cloc" value="${n.location||""}" /></div>
      <div class="fg"><label class="lbl">Synlighed</label>
        <select id="edit-cvisibility" onchange="document.getElementById('edit-capproved-wrap').style.display=this.value==='hidden'?'':'none'">
          <option value="public" ${n.private?"":"selected"}>Offentlig</option>
          <option value="private" ${n.private&&!n.hidden?"selected":""}>Privat</option>
          <option value="hidden" ${n.hidden?"selected":""}>Skjult (kun godkendte)</option>
        </select>
      </div>
      <div class="trow-sub edit-visibility-hint">Privat: banen er stadig synlig for alle, men vises med "(Banen er kun for medlemmer)". Skjult: kun skytter du selv godkender (nedenfor) kan se banen.</div>
      <div id="edit-capproved-wrap" style="display:${n.hidden?"":"none"};">
        <div class="ac-wrap fg">
          <input type="text" id="edit-capproved-search" placeholder="Søg registreret bruger…" autocomplete="off" oninput="searchApprovedUsers('edit',this.value)" />
          <div id="edit-capproved-ac" class="ac-list hidden"></div>
        </div>
        <div id="edit-capproved-chips" class="edit-approved-chips-wrap"></div>
        <input type="text" id="edit-capproved-manual" placeholder="…eller indtast email direkte" />
        <button type="button" class="btn btn-dark edit-approved-add-btn" onclick="addApprovedEmailManual('edit')">Tilføj</button>
      </div>
      <button class="btn btn-gold edit-save-btn" onclick="saveCourseEdit()">Gem baneinfo</button>
    </div>
    <div class="card">
      <div class="card-title targets-card-title">
        <span>Mål (${e.length})</span>
        <button class="btn-icon add-target-btn" onclick="addTargetToCurrentCourse()">＋</button>
      </div>
      <div id="targets-edit-list">`;e.forEach((r,s)=>{t+=`<div class="fg target-edit-block">
      <div class="target-edit-head">
        <span class="target-edit-title">Mål ${s+1}</span>
        <div class="target-edit-actions">
          <button class="btn-icon" onclick="setTargetGps(${s})" title="Sæt GPS">📍</button>
          <button class="btn-icon target-delete-btn" onclick="deleteTargetFromCourse(${s})">🗑</button>
        </div>
      </div>
      <div class="fg"><label class="lbl">Navn</label>
        <input type="text" value="${r.name||""}" onchange="updateTargetField(${s},'name',this.value)" class="target-edit-input" /></div>
      <div class="target-edit-row">
        <div class="fg target-edit-col"><label class="lbl">Emoji</label>
          <input type="text" value="${r.emoji||""}" onchange="updateTargetField(${s},'emoji',this.value)" class="target-edit-input" /></div>
        <div class="fg target-edit-col"><label class="lbl">Afstand (m)</label>
          <input type="number" value="${r.distance||""}" onchange="updateTargetField(${s},'distance',this.value)" class="target-edit-input" /></div>
      </div>
      ${r.gps||r.GPS?`<div class="target-gps-info">📍 GPS: ${(r.gps||r.GPS).lat.toFixed(5)}, ${(r.gps||r.GPS).lng.toFixed(5)}</div>`:'<div class="target-gps-missing">Ingen GPS</div>'}
      ${r.imageUrl||r.photo?`<img src="${r.imageUrl||r.photo}" class="target-photo-preview" />`:""}
      <label class="btn btn-dark target-upload-label">
        📷 Upload foto
        <input type="file" accept="image/*" class="target-file-input" onchange="uploadTargetPhoto(${s},this)" />
      </label>
      <button class="btn btn-gold target-save-btn" onclick="saveAllTargets()">💾 Gem alle mål</button>
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t,p.approvedDraft.edit=[...n.approvedUsers||[]],Sa("edit")}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim().slice(0,100),e=document.getElementById("edit-cloc").value.trim().slice(0,100),t=document.getElementById("edit-cvisibility").value,r=t!=="public",s=t==="hidden",i=s?[...p.approvedDraft.edit]:[];if(!n)return;await ut(ce(X,"courses",p.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i}),p.currentCourse.name=n,p.currentCourse.location=e,p.currentCourse.private=r,p.currentCourse.hidden=s,p.currentCourse.approvedUsers=i;const o=p.courses.findIndex(c=>c.id===p.currentCourse.id);o>-1&&(p.courses[o]={...p.courses[o],name:n,location:e,private:r,hidden:s,approvedUsers:i}),kt(),xi(),document.getElementById("course-detail-title").textContent=n+(r?" (Banen er kun for medlemmer)":""),ne("Gemt!","success")};window.updateTargetField=function(n,e,t){var r;(r=p.currentCourse)!=null&&r.targets&&(p.currentCourse.targets[n][e]=t)};window.addTargetToCurrentCourse=async function(){if(!p.currentCourse)return;const n=[...p.currentCourse.targets||[]];n.push({number:n.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await ut(ce(X,"courses",p.currentCourse.id),{targets:n}),p.currentCourse.targets=n,Vi(p.currentCourse),ne(`Mål ${n.length} tilføjet!`,"success")};window.deleteTargetFromCourse=function(n){var e;(e=p.currentCourse)!=null&&e.targets&&Di(`Slet mål ${n+1}?`,async()=>{try{const t=[...p.currentCourse.targets];t.splice(n,1),t.forEach((r,s)=>r.number=s+1),await ut(ce(X,"courses",p.currentCourse.id),{targets:t,numTargets:t.length}),p.currentCourse.targets=t,p.currentCourse.numTargets=t.length,Vi(p.currentCourse)}catch{ne("Fejl: Kunne ikke slette mål","error")}})};window.setTargetGps=async function(n){var e;if((e=p.currentCourse)!=null&&e.targets)try{const t=await Ra();p.currentCourse.targets[n].gps=t,await ut(ce(X,"courses",p.currentCourse.id),{targets:p.currentCourse.targets}),Vi(p.currentCourse),ne(`GPS sat for mål ${n+1}!`,"success")}catch(t){ne("GPS fejl: "+t.message,"error")}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await yg(t),s=cg(lg,`courses/${p.currentCourse.id}/target_${n}.jpg`);await og(s,r,"base64",{contentType:"image/jpeg"});const i=await ag(s);p.currentCourse.targets[n].imageUrl=i,await ut(ce(X,"courses",p.currentCourse.id),{targets:p.currentCourse.targets}),Vi(p.currentCourse),ne("Foto gemt!","success")}catch(r){ne("Upload fejl: "+r.message,"error")}};window.saveAllTargets=async function(){var n;(n=p.currentCourse)!=null&&n.targets&&(await ut(ce(X,"courses",p.currentCourse.id),{targets:p.currentCourse.targets}),ne("Alle mål gemt!","success"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&p.courseMap&&setTimeout(()=>p.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await Ra();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(p.courseMap),p.courseMap.panTo([e.lat,e.lng])}catch{ne("GPS ikke tilgængeligt","error"),n.classList.remove("on")}};window.doDeleteCourse=function(){if(!p.currentCourse)return;const n=p.currentCourse.id,e=p.currentCourse.name;Di(`Slet banen "${e}"?`,async()=>{try{await rn(ce(X,"courses",n)),p.courses=p.courses.filter(t=>t.id!==n),p.currentCourse=null,kt(),xi(),window.populateCourseDropdown(),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"),ne("Bane slettet","success")}catch{ne("Fejl: Kunne ikke slette bane","error")}})};const Jo={new:"new-course-approved",edit:"edit-capproved"};function Sa(n){const e=p.approvedDraft[n];document.getElementById(`${Jo[n]}-chips`).innerHTML=e.length?e.map(t=>`<span class="approved-chip">${K(t)}<span class="approved-chip-remove" onclick="removeApprovedEmail('${n}','${K(t)}')">✕</span></span>`).join(""):'<span class="approved-empty">Ingen godkendt endnu</span>'}function _g(n,e){const t=e.trim().toLowerCase();!t||!t.includes("@")||(p.approvedDraft[n].includes(t)||p.approvedDraft[n].push(t),Sa(n))}window.removeApprovedEmail=function(n,e){p.approvedDraft[n]=p.approvedDraft[n].filter(t=>t!==e),Sa(n)};window.addApprovedEmailManual=function(n){const e=document.getElementById(`${Jo[n]}-manual`);_g(n,e.value),e.value=""};window.searchApprovedUsers=async function(n,e){const t=document.getElementById(`${Jo[n]}-ac`);if(!e.trim()){t.classList.add("hidden");return}let r=[];try{r=(await Ze(je(X,"users"))).docs.map(i=>i.data()).map(i=>({name:i.name||i.yam||i.email||"—",email:(i.email||i["e-mail"]||"").toLowerCase()})).filter(i=>i.email&&(i.name.toLowerCase().includes(e.toLowerCase())||i.email.includes(e.toLowerCase())))}catch(s){console.warn(s)}if(!r.length){t.classList.add("hidden");return}t.innerHTML=r.map(s=>`<div class="ac-item" data-email="${K(s.email)}">${K(s.name)} <span style='font-size:11px;opacity:.6'>${K(s.email)}</span></div>`).join(""),t.querySelectorAll(".ac-item").forEach(s=>s.addEventListener("click",()=>{_g(n,s.dataset.email),document.getElementById(`${Jo[n]}-search`).value="",t.classList.add("hidden")})),t.classList.remove("hidden")};window.openCreateCourseModal=function(){p.approvedDraft.new=[],Sa("new"),document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",document.getElementById("create-course-modal").classList.remove("hidden")};window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim().slice(0,100),e=document.getElementById("new-course-loc").value.trim().slice(0,100),t=document.getElementById("new-course-visibility").value,r=t!=="public",s=t==="hidden",i=s?[...p.approvedDraft.new]:[],o=document.getElementById("new-course-targets"),c=(o.value==="custom"?Number(document.getElementById("new-course-targets-custom").value):Number(o.value))||24;if(!n)return;const l=Array.from({length:c},(d,f)=>({number:f+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));try{const d=await $p(je(X,"courses"),{name:n,yam:n,numTargets:c,antalMål:c,location:e,beliggenhed:e,targets:l,mål:l,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i,created:yt(),visits:[],besøg:[]});p.courses.unshift({id:d.id,name:n,numTargets:c,location:e,targets:l,visits:[],private:r,hidden:s,approvedUsers:i}),kt(),xi(),window.populateCourseDropdown(),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value="",document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",ne("Bane oprettet!","success")}catch{ne("Fejl: Kunne ikke oprette bane","error")}};async function Wl(n,e,t){const r=ce(X,"courses",n),s=await pi(r);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await ut(r,{targets:o,mål:o})}function yg(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,l=i.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const d=document.createElement("canvas");d.width=c,d.height=l,d.getContext("2d").drawImage(i,0,0,c,l),e(d.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},r.onerror=t,r.readAsDataURL(n)})}async function qA(n,e){const t=ce(X,"courses",n),r=await pi(t);if(!r.exists())return;const s=(r.data().visits||[]).filter(o=>o.roundId!==e);await ut(t,{visits:s});const i=p.courses.find(o=>o.id===n);i&&(i.visits=s)}let js=[];async function GA(){if(p.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{await Ql()}catch(n){console.warn(n)}if(p.isSuperAdmin){document.getElementById("users-section").classList.remove("hidden");try{js=(await Ze(je(X,"users"))).docs.map(e=>({uid:e.id,...e.data()})).sort((e,t)=>(e.name||e.yam||"").localeCompare(t.name||t.yam||"","da")),vg()}catch(n){console.warn(n)}}}}async function Ql(){const n=document.getElementById("admins-list");if(!n)return;n.innerHTML='<div class="admin-hint">Henter admins…</div>';const e=await Ze(je(X,"admins"));if(e.empty){n.innerHTML='<div class="admin-hint">Ingen admins fundet</div>';return}n.innerHTML='<div class="admin-list-label">NUVÆRENDE ADMINISTRATORER</div>',e.docs.forEach(t=>{var o;const r=document.createElement("div");r.className="admin-row";const s=t.data().email||t.id,i=t.id===((o=p.user)==null?void 0:o.uid);if(r.innerHTML=`<span class="admin-row-email">${K(s)}${i?' <span class="admin-you-tag">(dig)</span>':""}</span>`,p.isSuperAdmin&&!i){const c=document.createElement("button");c.className="btn btn-dark btn-sm admin-remove-btn",c.textContent="Fjern",c.onclick=()=>doRemoveAdmin(t.id,s),r.appendChild(c)}n.appendChild(r)})}const sc=[{label:"Sidste 7 dage",ms:7*864e5},{label:"Sidste 30 dage",ms:30*864e5},{label:"Sidste 365 dage",ms:365*864e5}];window.loadUsageStats=async function(){const n=document.getElementById("usage-stats-result");if(n){n.textContent="Henter…";try{const e=await Ze(zT(X,"runder")),t=Date.now(),r=sc.map(()=>0);let s=0;e.forEach(o=>{var d,f;s++;const c=(f=(d=o.data().dato)==null?void 0:d.toDate)==null?void 0:f.call(d);if(!c)return;const l=t-c.getTime();sc.forEach((m,_)=>{l<=m.ms&&r[_]++})});const i=sc.map((o,c)=>`<div class="usage-stat-row"><span>${K(o.label)}</span><b>${r[c]}</b></div>`).join("");n.innerHTML=`${i}<div class="usage-stat-row usage-stat-total"><span>I alt registreret</span><b>${s}</b></div>`}catch(e){n.textContent="Fejl: "+e.message}}};const zA={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"};function vg(n=""){const e=document.getElementById("users-list");e.innerHTML="";const t=n.toLowerCase(),r=t?js.filter(c=>(c.name||c.yam||"").toLowerCase().includes(t)||(c.email||c["e-mail"]||"").toLowerCase().includes(t)):js;document.getElementById("users-count").textContent=`${js.length} brugere`;const s=document.getElementById("users-summary"),i={};js.forEach(c=>{const l=c.bueklasse||"Ukendt";i[l]=(i[l]||0)+1});const o=Object.entries(i).sort((c,l)=>l[1]-c[1]).map(([c,l])=>`<span class="bow-chip"><b>${l}</b> ${K(zA[c]||c)}</span>`).join("");s.innerHTML=`<div class="bow-chips-wrap">${o}</div>`,r.forEach(c=>{var _;const l=document.createElement("div");l.className="urow";const d=(_=c.created)!=null&&_.toDate?c.created.toDate().toLocaleDateString("da-DK"):"—",f=c.bueklasse||"",m=c.kon==="m"?"♂":c.kon==="k"?"♀":"";l.innerHTML=`<span class="un">${K(c.name||c.yam||"—")}</span><span class="ue">${K(c.email||c["e-mail"]||"")}</span><span class="ubow">${K(f)}${m?` ${K(m)}`:""}</span><span class="ud">${K(d)}</span>`,e.appendChild(l)})}window.filterUsers=function(n){vg(n)};window.doAddAdmin=async function(){if(!p.isSuperAdmin)return;const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await Ze(je(X,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){ne("Bruger ikke fundet","error");return}await Sn(ce(X,"admins",t.id),{email:n,created:yt()}),ne(`${t.data().name||n} er nu admin`,"success"),document.getElementById("admin-email").value="",await Ql()}catch(e){ne("Fejl: "+e.message,"error")}};window.doRemoveAdmin=async function(n,e){if(p.isSuperAdmin&&confirm(`Fjern ${e} som administrator?`))try{await rn(ce(X,"admins",n)),ne(`${e} er fjernet som admin`,"success"),await Ql()}catch(t){ne("Fejl: "+t.message,"error")}};function KA(n){return'<div class="dist-grid">'+n.shooters.map(e=>{const t=zl(e.scores),r=Xe(e.scores),s=e.scores.map(f=>(f||[null,null])[0]).filter(f=>f!=null),i=e.scores.map(f=>(f||[null,null])[1]).filter(f=>f!=null),o=e.scores.flat().filter(f=>f!=null),c=s.length?(s.reduce((f,m)=>f+Me(m),0)/s.length).toFixed(2):"—",l=i.length?(i.reduce((f,m)=>f+Me(m),0)/i.length).toFixed(2):"—",d=o.length?(o.reduce((f,m)=>f+Me(m),0)/o.length).toFixed(2):"—";return`<div class="dist-card"><div class="dist-name">${K(e.name)}</div><div class="dist-row dist-row-total"><span>Total</span><span>${r} pt</span></div><div class="dist-row"><span>Snit pil 1</span><span>${c}</span></div><div class="dist-row"><span>Snit pil 2</span><span>${l}</span></div><div class="dist-row dist-row-border"><span>Samlet snit</span><span>${d}</span></div>${Object.entries(t).map(([f,m])=>`<div class="dist-row"><span>${f}</span><span>${m}x</span></div>`).join("")}</div>`}).join("")+"</div>"}function HA(n){const e=Kl(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${K((e==null?void 0:e.name)||"—")}</div><div class="win-score">${e?Xe(e.scores):0} point</div>`,document.getElementById("res-table").innerHTML=Ig(n),document.getElementById("res-dist").innerHTML=KA(n)}function Ig(n){const e=(n.startTarget||1)-1;let t=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${n.shooters.map(r=>`<th>${r.name}</th>`).join("")}</tr>`;for(let r=0;r<n.numTargets;r++)t+=`<tr><td class="tc">${r===e?'<span class="start-target-dot"></span>':""}${r+1}</td>`,n.shooters.forEach(i=>{const o=i.scores[r]||[null,null],c=(o[0]!=null&&o[0]!=="M"?Number(o[0]):0)+(o[1]!=null&&o[1]!=="M"?Number(o[1]):0);t+=`<td>${o.map(l=>l??"—").join("/")}<br><small>${c}</small></td>`}),t+="</tr>";return t+=`<tr class="tr-tot"><td class="tc">Total</td>${n.shooters.map(r=>`<td>${Xe(r.scores)}</td>`).join("")}</tr></table></div>`,t}function WA(n){const e=["11","10","8","5","M"];return n.shooters.map(t=>{const r=Xe(t.scores),s=t.scores.map(_=>(_||[null,null])[0]).filter(_=>_!=null),i=t.scores.map(_=>(_||[null,null])[1]).filter(_=>_!=null),o=t.scores.flat().filter(_=>_!=null),c=o.length,l=s.length?(s.reduce((_,E)=>_+Me(E),0)/s.length).toFixed(2):"—",d=i.length?(i.reduce((_,E)=>_+Me(E),0)/i.length).toFixed(2):"—",f=c?(o.reduce((_,E)=>_+Me(E),0)/c).toFixed(2):"—",m=zl(t.scores);return`<div class="summary-card">
      <div class="summary-card-name">${K(t.name)}</div>
      <div class="summary-stats-row3">
        <div class="summary-stat-box">
          <div class="summary-stat-val">${r}</div>
          <div class="summary-stat-lbl">POINT</div>
        </div>
        <div class="summary-stat-box">
          <div class="summary-stat-val">${c}</div>
          <div class="summary-stat-lbl">PILE</div>
        </div>
        <div class="summary-stat-box">
          <div class="summary-stat-val">${f}</div>
          <div class="summary-stat-lbl">SNT/PIL</div>
        </div>
      </div>
      <div class="summary-stats-row2">
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${l}</div>
          <div class="summary-stat-lbl">SNIT PIL 1</div>
        </div>
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${d}</div>
          <div class="summary-stat-lbl">SNIT PIL 2</div>
        </div>
      </div>
      <div class="summary-zones-row">
        ${e.map(_=>`<div><div class="summary-zone-key">${_}</div><div class="summary-zone-val">${m[_]||0}</div></div>`).join("")}
      </div>
    </div>`}).join("")}function QA(n){const e=n.shooters.map(r=>{const s=r.scores.filter(f=>{const m=f||[null,null];return m[0]!==null&&m[1]!==null});if(!s.length||s.length===n.numTargets)return null;const i=s.flat().filter(f=>f!==null),o=i.reduce((f,m)=>f+Me(m),0),c=i.length,l=c?(o/c).toFixed(2):0,d=s.length?(o/s.length).toFixed(1):0;return{name:r.name,shot:s.length,total:o,avgPil:l,avgMaal:d}}).filter(Boolean);return e.length?`<div class="actual-results-wrap"><div class="actual-results-title">Kun skudte mål</div><div class="actual-results-cards">${e.map(r=>`<div class="actual-card"><div class="actual-card-name">${r.name}</div><div class="actual-card-sub">${r.shot} af ${n.numTargets} mål</div><div class="actual-card-total">${r.total}</div><div class="actual-card-total-lbl">POINT</div><div class="actual-card-avgs"><div><div class="actual-avg-val">${r.avgPil}</div><div class="actual-avg-lbl">SNT/PIL</div></div><div><div class="actual-avg-val">${r.avgMaal}</div><div class="actual-avg-lbl">SNT/MÅL</div></div></div></div>`).join("")}</div></div>`:""}function Yo(){const n=document.getElementById("rounds-list");if(!p.rounds.length){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}n.innerHTML="",p.rounds.forEach(e=>{const t=(e.shooters||[]).map(c=>({...c,scores:gr(c.scores)})),r=t.length?Kl(t):null,s=e.created,i=s!=null&&s.toDate?s.toDate().toLocaleDateString("da-DK"):s!=null&&s.seconds?new Date(s.seconds*1e3).toLocaleDateString("da-DK"):typeof s=="number"?new Date(s).toLocaleDateString("da-DK"):"—",o=document.createElement("div");o.className="rcard",o.innerHTML=`<div class="rcard-info"><div class="rcard-name">${K(e.name||"Runde")}</div><div class="rcard-meta"><span class="rcard-date">${K(i)}</span> · ${K(e.courseName||e.numTargets+" mål")}</div><div class="rcard-win">🏆 ${K((r==null?void 0:r.name)||"—")} (${r?Xe(r.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser">📈</button><button class="del-btn" data-id="${K(e.id)}">✕</button>`,o.querySelector(".rcard-info").onclick=()=>Jl({...e,shooters:t}),o.querySelector(".rcard-analyse").onclick=()=>window.analyseRound(e.id),o.querySelector(".del-btn").onclick=c=>{const l=c.currentTarget,d=`r-${e.id}`;p.deleteConfirm[d]?(delete p.deleteConfirm[d],p.rounds=p.rounds.filter(f=>f.id!==e.id),kt(),Yo(),p.user&&rn(ce(X,"users",p.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),p.user&&e.courseId&&rn(ce(X,"bane_stats",e.courseId,"runder",e.id)).catch(f=>console.warn(f)),e.courseId&&qA(e.courseId,e.id).catch(f=>console.warn(f))):(p.deleteConfirm[d]=!0,l.classList.add("conf"),l.textContent="Slet?",setTimeout(()=>{delete p.deleteConfirm[d],l.classList.remove("conf"),l.textContent="✕"},3e3))},n.appendChild(o)})}function Jl(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),p.rpopMap&&(p.rpopMap.remove(),p.rpopMap=null);const t=n.gpsRoute||n.route||null,r=n.gpsDuration||n.duration||null,s=n.gpsDistance||n.distance||null,i=r?mg(r):null,o=s?pg(s):null,c=o||i?`<div class="rpop-gps-row">${o?`<div class="rpop-gps-box"><div class="rpop-gps-val">${o}</div><div class="rpop-gps-lbl">DISTANCE</div></div>`:""}${i?`<div class="rpop-gps-box"><div class="rpop-gps-val">${i}</div><div class="rpop-gps-lbl">TID</div></div>`:""}</div>${t?'<div id="rpop-map"></div>':""}`:"";if(document.getElementById("rpop-body").innerHTML=`<h3 class="rpop-title">${K(n.name)}</h3>${c}`+WA(n)+Ig(n)+QA(n)+'<button class="btn btn-gold rpop-send-btn" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>',t){const l=fg(t);l.length&&setTimeout(()=>{const d=document.getElementById("rpop-map");if(!d)return;p.rpopMap=window.L.map(d),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(p.rpopMap);const f=window.L.polyline(l.map(m=>[m.lat,m.lng]),{color:"#e8a020",weight:3}).addTo(p.rpopMap);p.rpopMap.fitBounds(f.getBounds(),{padding:[20,20]})},50)}}window.sendResults=async function(n){if(!n){ne("Ingen runde at sende","error");return}const e=new Date().toLocaleDateString("da-DK");let t=`3D Bueskydning - Resultater
`;t+="Dato: "+e+`
`,n.courseName&&(t+="Bane: "+n.courseName+`
`),t+=`
--- RESULTATER ---
`,[...n.shooters].sort((c,l)=>Xe(l.scores)-Xe(c.scores)).forEach((c,l)=>{t+=`
`+(l+1)+". "+c.name+": "+Xe(c.scores)+" point"}),t+=`

--- DETALJERET ---
`,n.shooters.forEach(c=>{t+=`
`+c.name+`:
`;for(let C=0;C<n.numTargets;C++){const D=c.scores[C]||[null,null],$=(D[0]!=null&&D[0]!=="M"?Number(D[0]):0)+(D[1]!=null&&D[1]!=="M"?Number(D[1]):0);t+="  Mål "+(C+1)+": "+D.map(F=>F??"-").join("+")+" = "+$+`
`}const l=c.scores.map(C=>(C||[null,null])[0]).filter(C=>C!=null),d=c.scores.map(C=>(C||[null,null])[1]).filter(C=>C!=null),f=c.scores.flat().filter(C=>C!=null),m=l.length?(l.reduce((C,D)=>C+Me(D),0)/l.length).toFixed(2):"—",_=d.length?(d.reduce((C,D)=>C+Me(D),0)/d.length).toFixed(2):"—",E=f.length?(f.reduce((C,D)=>C+Me(D),0)/f.length).toFixed(2):"—",P=zl(c.scores);t+="  Total: "+Xe(c.scores)+` point
`,t+="  Snit pil 1: "+m+" | Snit pil 2: "+_+" | Samlet snit: "+E+`
`,t+="  Fordeling: "+Object.entries(P).map(([C,D])=>C+":"+D+"x").join("  ")+`
`}),n.id&&(t+=`

Se resultater i appen:
https://bsk65.github.io/3D/?round=${n.id}
(Kræver login med din bruger)`);const s=n.shooters.map(c=>{var l;return(l=p.friends.find(d=>d.id===c.id))==null?void 0:l.email}).filter(Boolean),i="3D Bueskydning - "+n.name,o="mailto:"+s.join(",")+"?subject="+encodeURIComponent(i)+"&body="+encodeURIComponent(t);window.location.href=o};const wg="archery_meetups_seen",JA={afventer:"Afventer",tilmeldt:"Tilmeldt ✅",foreslået:"Foreslår andet tidspunkt 🕓",afvist:"Afbud ❌"};function ic(n){if(!n)return"";const[e,t,r]=n.split("-");return e&&t&&r?`${r}-${t}-${e}`:n}let vt=new Map,Ni="venner",qs=null,Eg=null,Yl=null;async function Tg(){if(p.user)try{const n=[Ze(Qo(je(X,"meetups"),Ys("creatorUid","==",p.user.uid))),Ze(Qo(je(X,"meetups"),Ys("invitedUids","array-contains",p.user.uid)))];p.isSuperAdmin&&n.push(Ze(je(X,"meetups")));const e=await Promise.all(n),t=new Map;e.forEach(r=>r.docs.forEach(s=>t.set(s.id,{id:s.id,...s.data()}))),p.meetups=[...t.values()].sort((r,s)=>`${r.date}${r.time}`.localeCompare(`${s.date}${s.time}`))}catch(n){console.warn("Hent meetups:",n)}}function YA(n,e){return n.filter(t=>{var s,i;return(((i=(s=t.updatedAt)==null?void 0:s.toMillis)==null?void 0:i.call(s))??(typeof t.updatedAt=="number"?t.updatedAt:0))>e}).length}function Xl(){const n=document.getElementById("meetup-badge");if(!n)return;const e=Number(localStorage.getItem(wg)||0),t=YA(p.meetups,e);n.classList.toggle("hidden",t===0),n.textContent=t}function XA(){localStorage.setItem(wg,String(Date.now())),Xl()}function On(){const n=document.getElementById("meetups-list");if(!n)return;const e=new Date().toISOString().slice(0,10),t=p.meetups.filter(r=>r.date>=e);if(!t.length){n.innerHTML='<div class="empty"><div class="empty-icon">🏹</div>Ingen planlagte skydninger endnu</div>';return}n.innerHTML="",t.forEach(r=>n.appendChild(ZA(r)))}function ZA(n){var d;const e=document.createElement("div");e.className="meetup-card"+(n.status==="aflyst"?" meetup-cancelled":"");const t=n.creatorUid===((d=p.user)==null?void 0:d.uid),r=(n.participants||[]).find(f=>{var m;return f.uid===((m=p.user)==null?void 0:m.uid)}),s=p.isSuperAdmin&&!t&&!r,i=(n.participants||[]).map(f=>{const m=f.status==="foreslået"&&f.proposedDate?` → ${K(ic(f.proposedDate))} ${K(f.proposedTime||"")}`:"";return`<div class="meetup-partrow"><span>${K(f.name)}</span><span class="meetup-status meetup-status-${K(f.status)}">${K(JA[f.status]||f.status)}${m}</span></div>`}).join(""),o=(n.comments||[]).map(f=>`<div class="meetup-comment"><b>${K(f.name)}:</b> ${K(f.text)}</div>`).join("");let c="";n.status!=="aflyst"&&(r&&(r.status!=="tilmeldt"&&(c+=`<button class="btn btn-gold btn-sm" onclick="joinMeetup('${n.id}')">Tilmeld</button>`),c+=`<button class="btn btn-dark btn-sm" onclick="openProposeTimeModal('${n.id}')">Foreslå andet tidspunkt</button>`,r.status!=="afvist"&&(c+=`<button class="btn btn-dark btn-sm" onclick="declineMeetup('${n.id}')">Afbud</button>`)),t&&((n.participants||[]).filter(f=>f.status==="foreslået"&&f.proposedDate).forEach(f=>{c+=`<button class="btn btn-gold btn-sm" onclick="acceptProposedTime('${n.id}','${f.uid}')">Accepter ${K(ic(f.proposedDate))} ${K(f.proposedTime||"")} (${K(f.name)})</button>`}),c+=`<button class="btn btn-dark btn-sm" onclick="cancelMeetup('${n.id}')">Aflys</button>`)),e.innerHTML=`
    ${n.status==="aflyst"?'<div class="meetup-cancelled-banner">❌ Aflyst</div>':""}
    ${s?'<div class="meetup-notinvited-banner">👁 Du er ikke inviteret — vises kun for superadmin</div>':""}
    <div class="meetup-head">
      <div class="meetup-title">${K(n.courseName)}</div>
      <div class="meetup-when">${K(ic(n.date))} kl. ${K(n.time)}</div>
      <div class="meetup-creator">Oprettet af ${K(n.creatorName)}</div>
    </div>
    <div class="meetup-participants">${i}</div>
    <div class="meetup-actions">${c}</div>
    <div class="meetup-comments">${o}</div>
    <div class="meetup-comment-add">
      <input type="text" placeholder="Skriv en kommentar…" class="meetup-comment-input" maxlength="300" />
      <button class="btn btn-dark btn-sm meetup-comment-send">Send</button>
    </div>
  `;const l=e.querySelector(".meetup-comment-input");return e.querySelector(".meetup-comment-send").addEventListener("click",()=>{tR(n.id,l.value),l.value=""}),e}window.openMeetupModal=function(){if(!p.courses.length){ne("Ingen baner tilgængelige","error");return}vt=new Map,Ni="venner",qs=null,Yl=null,document.getElementById("mu-course-display").value="",document.getElementById("mu-course-list").classList.add("hidden"),eR(),document.getElementById("mu-date").value="",document.getElementById("mu-time").value="",document.querySelectorAll(".mu-pool-tab").forEach(n=>n.classList.toggle("active",n.dataset.pool==="venner")),Pa(),Zl(),document.getElementById("meetup-modal").classList.remove("hidden")};window.toggleMeetupCourseList=function(){document.getElementById("mu-course-list").classList.toggle("hidden")};function eR(){const n=document.getElementById("mu-course-list");n.innerHTML="",p.courses.forEach(e=>{const t=document.createElement("div");t.className="ac-item",t.textContent=e.name||e.yam||"",t.addEventListener("click",()=>{Yl=e.id,document.getElementById("mu-course-display").value=e.name||e.yam||"",n.classList.add("hidden")}),n.appendChild(t)})}window.toggleMeetupPool=function(n){Ni=n,document.querySelectorAll(".mu-pool-tab").forEach(e=>e.classList.toggle("active",e.dataset.pool===n)),Pa()};async function bg(){if(Ni==="venner")return p.friends.map(n=>({uid:n.id,name:n.name}));if(!qs)try{qs=(await Ze(je(X,"users"))).docs.map(e=>({uid:e.id,name:e.data().name||e.data().yam||e.data().email||"—"}))}catch(n){console.warn(n),qs=[]}return qs.filter(n=>{var e;return n.uid!==((e=p.user)==null?void 0:e.uid)})}async function Pa(){const n=document.getElementById("mu-invitee-list");if(!n)return;const e=await bg();if(n.innerHTML="",!e.length){n.innerHTML=`<div class="empty"><div class="empty-icon">👤</div>${Ni==="venner"?"Du har ingen venner endnu":"Ingen andre registrerede brugere"}</div>`;return}e.forEach(t=>{const r=document.createElement("label");r.className="mu-invitee-row";const s=document.createElement("input");s.type="checkbox",s.checked=vt.has(t.uid),s.addEventListener("change",()=>Ag(t.uid,t.name));const i=document.createElement("span");i.textContent=t.name,r.appendChild(s),r.appendChild(i),n.appendChild(r)})}function Ag(n,e){vt.has(n)?vt.delete(n):vt.set(n,{uid:n,name:e}),Zl(),Pa()}window.toggleSelectAllMeetup=async function(){const n=await bg();if(!n.length)return;n.every(t=>vt.has(t.uid))?n.forEach(t=>vt.delete(t.uid)):n.forEach(t=>vt.set(t.uid,t)),Zl(),Pa()};function Zl(){const n=document.getElementById("mu-selected-chips");if(n){if(n.innerHTML="",!vt.size){n.innerHTML='<div class="mu-chips-empty">Ingen modtagere valgt endnu</div>';return}[...vt.values()].forEach(e=>{const t=document.createElement("div");t.className="pchip";const r=document.createElement("span");r.className="pchip-name",r.textContent=e.name;const s=document.createElement("button");s.className="pchip-rm",s.textContent="✕",s.addEventListener("click",()=>Ag(e.uid,e.name)),t.appendChild(r),t.appendChild(s),n.appendChild(t)})}}window.saveMeetup=async function(){var c;const n=p.courses.find(l=>l.id===Yl),e=document.getElementById("mu-date").value,t=document.getElementById("mu-time").value;if(!n){ne("Vælg en bane","error");return}if(!e||!t){ne("Vælg dato og tid","error");return}if(!vt.size){ne("Vælg mindst én modtager","error");return}const r=[...vt.keys()],s=[...vt.values()].map(l=>({uid:l.uid,name:l.name,status:"afventer",proposedDate:null,proposedTime:null})),i=new Date(`${e}T${t}`);i.setDate(i.getDate()+1);const o={courseId:n.id,courseName:n.name||n.yam||"",date:e,time:t,creatorUid:p.user.uid,creatorName:((c=p.profile)==null?void 0:c.name)||"—",pool:Ni,invitedUids:r,participants:s,comments:[],status:"åben",createdAt:yt(),updatedAt:yt(),expireAt:i};try{await $p(je(X,"meetups"),o),document.getElementById("meetup-modal").classList.add("hidden"),ne("Forslag sendt","success"),await Tg(),On(),Xl()}catch(l){ne("Fejl: "+l.message,"error")}};async function Rg(n,e){const t=p.meetups.find(s=>s.id===n);if(!t||!p.user)return;const r=(t.participants||[]).map(s=>s.uid===p.user.uid?{...s,status:e,proposedDate:null,proposedTime:null}:s);try{await ut(ce(X,"meetups",t.id),{participants:r,updatedAt:yt()}),t.participants=r,t.updatedAt=Date.now(),On()}catch(s){ne("Fejl: "+s.message,"error")}}window.joinMeetup=function(n){Rg(n,"tilmeldt")};window.declineMeetup=function(n){Rg(n,"afvist")};window.openProposeTimeModal=function(n){Eg=n,document.getElementById("mu-propose-date").value="",document.getElementById("mu-propose-time").value="",document.getElementById("meetup-propose-modal").classList.remove("hidden")};window.saveProposeTime=async function(){const n=document.getElementById("mu-propose-date").value,e=document.getElementById("mu-propose-time").value;if(!n||!e){ne("Vælg dato og tid","error");return}const t=p.meetups.find(s=>s.id===Eg);if(!t||!p.user)return;const r=(t.participants||[]).map(s=>s.uid===p.user.uid?{...s,status:"foreslået",proposedDate:n,proposedTime:e}:s);try{await ut(ce(X,"meetups",t.id),{participants:r,updatedAt:yt()}),t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-propose-modal").classList.add("hidden"),On()}catch(s){ne("Fejl: "+s.message,"error")}};window.acceptProposedTime=async function(n,e){var c;const t=p.meetups.find(l=>l.id===n);if(!t||t.creatorUid!==((c=p.user)==null?void 0:c.uid))return;const r=(t.participants||[]).find(l=>l.uid===e);if(!(r!=null&&r.proposedDate)||!(r!=null&&r.proposedTime))return;const s=r.proposedDate,i=r.proposedTime,o=t.participants.map(l=>l.uid===e?{...l,status:"tilmeldt",proposedDate:null,proposedTime:null}:{...l,status:"afventer",proposedDate:null,proposedTime:null});try{await ut(ce(X,"meetups",t.id),{date:s,time:i,participants:o,updatedAt:yt()}),t.date=s,t.time=i,t.participants=o,t.updatedAt=Date.now(),On(),ne("Nyt tidspunkt accepteret","success")}catch(l){ne("Fejl: "+l.message,"error")}};window.cancelMeetup=function(n){var t;const e=p.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=p.user)==null?void 0:t.uid)||Di("Aflys denne skydning?",async()=>{try{await ut(ce(X,"meetups",e.id),{status:"aflyst",updatedAt:yt()}),e.status="aflyst",e.updatedAt=Date.now(),On()}catch(r){ne("Fejl: "+r.message,"error")}})};async function tR(n,e){var i;if(e=(e||"").trim().slice(0,300),!e||!p.user)return;const t=p.meetups.find(o=>o.id===n);if(!t)return;const r={uid:p.user.uid,name:((i=p.profile)==null?void 0:i.name)||"—",text:e,createdAt:new Date},s=[...t.comments||[],r];try{await ut(ce(X,"meetups",t.id),{comments:s,updatedAt:yt()}),t.comments=s,t.updatedAt=Date.now(),On()}catch(o){ne("Fejl: "+o.message,"error")}}function Lh(n,e){var F;const t=N=>{var B;return N.shooters.find(z=>z.id===e)||((B=N.shooters)==null?void 0:B[0])},r=n.map(N=>{const B=t(N);return B?Xe(B.scores):null}).filter(N=>N!==null);let s=0,i=0,o=0,c=0;const l={11:0,10:0,8:0,5:0,M:0},d={11:0,10:0,8:0,5:0,M:0};n.forEach(N=>{const B=t(N);B&&B.scores.forEach(z=>{z[0]!=null&&(z[0]==="M"?(l.M++,i++):(l[Number(z[0])]=(l[Number(z[0])]||0)+1,s+=Number(z[0]),i++)),z[1]!=null&&(z[1]==="M"?(d.M++,c++):(d[Number(z[1])]=(d[Number(z[1])]||0)+1,o+=Number(z[1]),c++))})});const f=i?(s/i).toFixed(2):0,m=c?(o/c).toFixed(2):0,_=i+c?((s+o)/(i+c)).toFixed(2):0,E=((F=n[0])==null?void 0:F.numTargets)||24,C=Array.from({length:E},(N,B)=>{let z=0,Z=0;return n.forEach(w=>{const y=t(w);if(!y)return;(y.scores[B]||[null,null]).forEach(T=>{T!=null&&(z+=Me(T),Z++)})}),Z?z/Z:null}).map((N,B)=>({v:N,i:B})).filter(N=>N.v!==null),D=C.length?C.reduce((N,B)=>N.v>B.v?N:B):null,$=C.length?C.reduce((N,B)=>N.v<B.v?N:B):null;return{myScores:r,p1avg:f,p2avg:m,pilAvg:_,distP1:l,distP2:d,bestTarget:D,worstTarget:$}}function Mh(n){if(!n.length)return 0;const e=n.reduce((t,r)=>t+r,0)/n.length;return Math.sqrt(n.reduce((t,r)=>t+(r-e)**2,0)/n.length)}function nR(n){var l;const e=n.length;if(e<2)return{slope:0,intercept:((l=n[0])==null?void 0:l.y)||0};const t=n.reduce((d,f)=>d+f.x,0),r=n.reduce((d,f)=>d+f.y,0),s=n.reduce((d,f)=>d+f.x*f.y,0),i=n.reduce((d,f)=>d+f.x*f.x,0),o=e*i-t*t,c=o?(e*s-t*r)/o:0;return{slope:c,intercept:(r-c*t)/e}}function Oh(n,e){var o,c;const t=((o=n.shooters)==null?void 0:o.find(l=>l.id===e))||((c=n.shooters)==null?void 0:c[0]);if(!t)return[];const r=n.numTargets||24,s=n.traversalOrder||Array.from({length:r},(l,d)=>d),i=[];for(let l=0;l<r;l++){const d=s[l];if(d===void 0)continue;const f=t.scores[d]||[null,null];let m=0,_=0;f.forEach(E=>{E!=null&&(m+=Me(E),_++)}),_&&i.push(m/_)}return i}function rR(n,e){let t=1,r=0,s=0,i=0,o=1,c=0,l=0,d=0,f=0,m=0,_=0,E=0,P=0;const C=()=>{e.style.transformOrigin="0 0",e.style.transform=t>1?`translate(${r}px,${s}px) scale(${t})`:""};n.addEventListener("touchstart",$=>{if($.preventDefault(),$.touches.length===2){const F=$.touches,N=n.getBoundingClientRect();i=Math.hypot(F[0].clientX-F[1].clientX,F[0].clientY-F[1].clientY),o=t,c=r,l=s,d=(F[0].clientX+F[1].clientX)/2-N.left,f=(F[0].clientY+F[1].clientY)/2-N.top}else $.touches.length===1&&(m=$.touches[0].clientX,_=$.touches[0].clientY,E=r,P=s)},{passive:!1}),n.addEventListener("touchmove",$=>{if($.preventDefault(),$.touches.length===2){const F=$.touches,N=Math.hypot(F[0].clientX-F[1].clientX,F[0].clientY-F[1].clientY),B=Math.min(8,Math.max(1,o*N/i)),z=(d-c)/o,Z=(f-l)/o;r=d-z*B,s=f-Z*B,t=B,C()}else $.touches.length===1&&t>1&&(r=E+$.touches[0].clientX-m,s=P+$.touches[0].clientY-_,C())},{passive:!1}),n.addEventListener("touchend",()=>{t<1.05&&(t=1,r=0,s=0,C())},{passive:!0});let D=0;n.addEventListener("touchend",()=>{const $=Date.now();$-D<300&&(t=1,r=0,s=0,C()),D=$},{passive:!0})}let Nt=null,er=null;function sR(){const n=document.getElementById("graph-fs");n&&n.classList.add("hidden"),Nt&&(window.removeEventListener("resize",Nt),window.removeEventListener("orientationchange",Nt),Nt=null),er&&(document.removeEventListener("gesturestart",er),er=null)}window.closeGraphFs=sR;function iR(n){p.pendingAnalyseRound=n,document.getElementById("analyse-filter").value="specific",window.switchTab("analyse")}window.analyseRound=iR;function oR(n,e,t,r){const s=["11","10","8","5","M"],i={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333"},o=n.myScores[0]||0,c=t.myScores[0]||0,l=Math.abs(o-c),d='<div class="cmp-sep"></div>',f=(E,P,C)=>`<div style="font-size:11px;color:${C};margin-bottom:4px;">${K(P)}</div>
    <div class="cmp-pil-grid">
      <div><div class="cmp-pil-lbl">PIL 1</div><div class="cmp-pil-val">${E.p1avg}</div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">SNT/PIL</div><div class="cmp-pil-val-mid">${E.pilAvg}</div>
      </div>
      <div><div class="cmp-pil-lbl">PIL 2</div><div class="cmp-pil-val">${E.p2avg}</div></div>
    </div>`,m=(E,P,C)=>E.bestTarget&&E.worstTarget?`<div style="font-size:11px;color:${C};margin-bottom:6px;">${K(P)}</div>
    <div class="cmp-target-grid">
      <div class="cmp-target-best">
        <div class="cmp-pil-lbl">BEDSTE</div>
        <div class="cmp-target-best-val">Mål ${E.bestTarget.i+1}</div>
        <div class="cmp-target-sub">⌀ ${E.bestTarget.v.toFixed(2)}</div>
      </div>
      <div class="cmp-target-worst">
        <div class="cmp-pil-lbl">SVÆRESTE</div>
        <div class="cmp-target-worst-val">Mål ${E.worstTarget.i+1}</div>
        <div class="cmp-target-sub">⌀ ${E.worstTarget.v.toFixed(2)}</div>
      </div>
    </div>`:"";let _="";return _+=`<div class="card card-mb16">
    <div class="cmp-section-title">SAMMENLIGNING</div>
    <div class="cmp-score-grid">
      <div>
        <div class="cmp-score-lbl-a">${K(e)}</div>
        <div class="cmp-score-val-a">${o}</div>
        <div class="cmp-score-unit">POINT</div>
      </div>
      <div class="cmp-vs">VS</div>
      <div>
        <div class="cmp-score-lbl-b">${K(r)}</div>
        <div class="cmp-score-val-b">${c}</div>
        <div class="cmp-score-unit">POINT</div>
      </div>
    </div>
    <div class="cmp-winner-line">${o>c?`${K(e)} vandt med ${l} point`:c>o?`${K(r)} vandt med ${l} point`:"Uafgjort!"}</div>
  </div>`,_+=`<div class="card card-mb16">
    <div class="cmp-section-title">PIL STATISTIK</div>
    ${f(n,e,"var(--acc)")}${d}${f(t,r,"#f0c030")}
  </div>`,(n.bestTarget||t.bestTarget)&&(_+=`<div class="card card-mb16">
      <div class="cmp-section-title">BEDSTE OG SVÆRESTE MÅL</div>
      ${m(n,e,"var(--acc)")}${d}${m(t,r,"#f0c030")}
    </div>`),_+=`<div class="card card-mb16">
    <div class="cmp-section-title">FORDELING PR. SCOREZONE</div>
    <div class="cmp-dist-grid">
      <div></div>
      ${s.map(E=>`<div style="text-align:center;font-weight:700;color:${i[E]};">${E}</div>`).join("")}
      <div class="cmp-dist-lbl-a">${K(e)}</div>
      ${s.map(E=>`<div class="cmp-dist-val">${(n.distP1[E]||0)+(n.distP2[E]||0)}</div>`).join("")}
      <div class="cmp-dist-lbl-b">${K(r)}</div>
      ${s.map(E=>`<div class="cmp-dist-val">${(t.distP1[E]||0)+(t.distP2[E]||0)}</div>`).join("")}
    </div>
  </div>`,_}window.renderAnalyse=function(){var Mi,Oi,$n,jn,br,Ar,Rr,Sr,ms,Fi;const n=document.getElementById("analyse-content");if(!n)return;const e=document.getElementById("analyse-bane");if(e&&e.options.length<=1&&[...new Set(p.rounds.map(O=>O.courseId).filter(Boolean))].forEach(O=>{const W=p.courses.find(Q=>Q.id===O);if(W&&!Array.from(e.options).find(Q=>Q.value===O)){const Q=document.createElement("option");Q.value=O,Q.textContent=W.name,e.appendChild(Q)}}),p.pendingAnalyseRound&&e){const j=p.rounds.find(O=>O.id===p.pendingAnalyseRound);j!=null&&j.courseId&&Array.from(e.options).some(O=>O.value===j.courseId)&&(e.value=j.courseId)}const t=((Mi=document.getElementById("analyse-filter"))==null?void 0:Mi.value)||"all",r=t==="all"?0:t==="lastround"?1:t==="specific"?0:Number(t),s=((Oi=document.getElementById("analyse-bane"))==null?void 0:Oi.value)||"all",i=Number(($n=document.getElementById("analyse-antal"))==null?void 0:$n.value)||0,o=document.getElementById("analyse-runde-wrap"),c=document.getElementById("analyse-runde"),l=document.getElementById("analyse-runde-wrap-2"),d=document.getElementById("analyse-runde-2"),f=document.getElementById("analyse-runde-lbl"),m=t==="compare";o&&(o.style.display=t==="specific"||m?"":"none"),l&&(l.style.display=m?"":"none"),f&&(f.style.display=m?"":"none");const _=j=>{const O=j.created;return O!=null&&O.toDate?O.toDate().toLocaleDateString("da-DK"):O!=null&&O.seconds?new Date(O.seconds*1e3).toLocaleDateString("da-DK"):typeof O=="number"?new Date(O).toLocaleDateString("da-DK"):"—"},E=(j,O)=>{const W=s==="all"?p.rounds:p.rounds.filter(J=>J.courseId===s),Q=j.value;j.innerHTML=`<option value="">${O}</option>`,W.forEach(J=>{const fe=document.createElement("option");fe.value=J.id,fe.textContent=`${_(J)} — ${J.name||"Runde"}`,j.appendChild(fe)}),W.some(J=>J.id===Q)&&(j.value=Q)};if((t==="specific"||m)&&c&&(E(c,"Vælg runde..."),p.pendingAnalyseRound&&(c.value=p.pendingAnalyseRound,p.pendingAnalyseRound=null)),m&&d&&E(d,"Vælg runde 2..."),m){const j=c==null?void 0:c.value,O=d==null?void 0:d.value;if(!j||!O){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Vælg to runder ovenfor</div>';return}const W=p.rounds.map(de=>({...de,shooters:(de.shooters||[]).map(re=>({...re,scores:gr(re.scores)}))})),Q=W.find(de=>de.id===j),J=W.find(de=>de.id===O);if(!Q||!J){n.innerHTML='<div class="empty">Kunne ikke finde runderne</div>';return}const fe=`${Q.name||"Runde"} (${_(Q)})`,ye=`${J.name||"Runde"} (${_(J)})`;n.innerHTML=oR(Lh([Q],(jn=p.user)==null?void 0:jn.uid),fe,Lh([J],(br=p.user)==null?void 0:br.uid),ye);return}const P=p.rounds.map(j=>({...j,shooters:(j.shooters||[]).map(O=>({...O,scores:gr(O.scores)}))})),C=((Ar=document.getElementById("analyse-completed-only"))==null?void 0:Ar.checked)||!1,D=((Rr=document.getElementById("analyse-startat1-only"))==null?void 0:Rr.checked)||!1,$=j=>{var Q;const O=p.courses.find(J=>J.id===j.courseId),W=(O==null?void 0:O.numTargets)||j.numTargets||24;return(j.numTargets||24)!==W?!1:Oh(j,(Q=p.user)==null?void 0:Q.uid).length===W},F=j=>j.startTarget===1;let N=s==="all"?P:P.filter(j=>j.courseId===s);if(C&&(N=N.filter($)),D&&(N=N.filter(F)),t==="specific"){const j=c==null?void 0:c.value;N=j?N.filter(O=>O.id===j):[]}const B=i||r,z=B&&t!=="specific"?N.slice(0,B):N;if(!z.length){n.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}const Z=j=>{var O;return j.shooters.find(W=>{var Q;return W.id===((Q=p.user)==null?void 0:Q.uid)})||((O=j.shooters)==null?void 0:O[0])},w=z.map(j=>{const O=Z(j);return O?Xe(O.scores):null}).filter(j=>j!==null),y=w.length?(w.reduce((j,O)=>j+O,0)/w.length).toFixed(1):0,I=w.length?Math.max(...w):0,T=w.length?Math.min(...w):0;let b=0,R=0,v=0,qe=0;const Dt={11:0,10:0,8:0,5:0,M:0},Er={11:0,10:0,8:0,5:0,M:0};z.forEach(j=>{const O=Z(j);O&&O.scores.forEach(W=>{W[0]!=null&&(W[0]==="M"?(Dt.M++,R++):(Dt[Number(W[0])]=(Dt[Number(W[0])]||0)+1,b+=Number(W[0]),R++)),W[1]!=null&&(W[1]==="M"?(Er.M++,qe++):(Er[Number(W[1])]=(Er[Number(W[1])]||0)+1,v+=Number(W[1]),qe++))})});const Gt=R?(b/R).toFixed(2):0,zt=qe?(v/qe).toFixed(2):0,Bn=R+qe?((b+v)/(R+qe)).toFixed(2):0,dt=((Sr=z[0])==null?void 0:Sr.numTargets)||24,Li=Array.from({length:dt},(j,O)=>{let W=0,Q=0;return z.forEach(J=>{const fe=Z(J);if(!fe)return;const de=(J.traversalOrder||Array.from({length:J.numTargets||dt},(ae,et)=>et))[O];if(de===void 0)return;(fe.scores[de]||[null,null]).forEach(ae=>{ae!=null&&(W+=Me(ae),Q++)})}),Q?W/Q:null}),ht=Li.map((j,O)=>({v:j,i:O})).filter(j=>j.v!==null),ke=ht.length?ht.reduce((j,O)=>j.v>O.v?j:O):null,Tr=ht.length?ht.reduce((j,O)=>j.v<O.v?j:O):null,Un=["11","10","8","5","M"];let wt="";if(wt+=`<div class="stats-grid2">
    <div class="card stat-card"><div class="stat-lbl">RUNDER</div><div class="stat-val-28">${z.length}</div></div>
    <div class="card stat-card"><div class="stat-lbl">SNIT/RUNDE</div><div class="stat-val-28">${y}</div></div>
    <div class="card stat-card"><div class="stat-lbl">BEDSTE</div><div class="stat-val-28-good">${I}</div></div>
    <div class="card stat-card"><div class="stat-lbl">LAVESTE</div><div class="stat-val-28-bad">${T}</div></div>
  </div>`,wt+=`<div class="card card-mb16">
    <div class="section-title-mb8">PIL STATISTIK</div>
    <div class="cmp-pil-grid">
      <div><div class="stat-lbl">PIL 1</div><div class="stat-val-22">${Gt}</div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">SNT/PIL</div>
        <div class="stat-val-22-mid">${Bn}</div>
      </div>
      <div><div class="stat-lbl">PIL 2</div><div class="stat-val-22">${zt}</div></div>
    </div>
    <div class="pil-best-note">
      ${Number(Gt)>Number(zt)?"Bedst med PIL 1 🏹":Number(zt)>Number(Gt)?"Bedst med PIL 2 🏹":"Begge pile er lige gode 🎯"}
    </div>
  </div>`,ke&&Tr&&ke.i!==Tr.i&&(wt+=`<div class="card card-mb16">
      <div class="section-title-mb8">BEDSTE OG SVÆRESTE MÅL</div>
      <div class="cmp-target-grid">
        <div class="target-best-box">
          <div class="stat-lbl">BEDSTE</div>
          <div class="target-best-val">Skud nr. ${ke.i+1}</div>
          <div class="target-sub-13">⌀ ${ke.v.toFixed(2)}</div>
        </div>
        <div class="target-worst-box">
          <div class="stat-lbl">SVÆRESTE</div>
          <div class="target-worst-val">Skud nr. ${Tr.i+1}</div>
          <div class="target-sub-13">⌀ ${Tr.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`),wt+=`<div class="card card-mb16">
    <div class="section-title-mb12">FORDELING PR. SCOREZONE</div>
    <div class="pie-grid">`,Un.forEach(j=>{const O=Dt[j]||0,W=Er[j]||0,Q=O+W,J=30;let fe="";if(Q===0)fe=`<circle cx="${J}" cy="${J}" r="${J}" fill="var(--surface2)"/>`;else if(W===0)fe=`<circle cx="${J}" cy="${J}" r="${J}" fill="#ffd700"/>`;else if(O===0)fe=`<circle cx="${J}" cy="${J}" r="${J}" fill="#00cc44"/>`;else{const ye=O/Q,de=ye*2*Math.PI,re=J,ae=0,et=J-J*Math.sin(de),Ve=J-J*Math.cos(de),Ne=de>Math.PI?1:0;fe=`<path d="M${J},${J} L${re},${ae} A${J},${J} 0 ${Ne},0 ${et},${Ve} Z" fill="#ffd700"/>
           <path d="M${J},${J} L${et},${Ve} A${J},${J} 0 ${1-Ne},0 ${re},${ae} Z" fill="#00cc44"/>`}wt+=`<div class="pie-cell">
      <div class="pie-zone-label">${j}</div>
      <svg viewBox="0 0 ${J*2} ${J*2}" class="pie-svg">${fe}</svg>
      <div class="pie-count">${O}/${W}</div>
      <div class="pie-total">${Q}</div>
    </div>`}),wt+=`</div>
    <div class="pie-legend">
      <span><span class="pie-legend-dot-1"></span>PIL 1</span>
      <span><span class="pie-legend-dot-2"></span>PIL 2</span>
    </div>
  </div>`,w.length>1){const Q=Math.min(...w)-5,J=Math.max(...w)+5,fe=w.slice().reverse().map((ye,de)=>{const re=30+de/(w.length-1)*280,ae=90-(ye-Q)/(J-Q)*(120-2*30);return`${re},${ae}`}).join(" ");wt+=`<div class="card card-mb16">
      <div class="section-title-mb8">UDVIKLING (RUNDER)</div>
      <svg viewBox="0 0 340 120" class="graph-svg">
        <polyline points="${fe}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${w.slice().reverse().map((ye,de)=>{const re=30+de/(w.length-1)*280,ae=90-(ye-Q)/(J-Q)*(120-2*30);return`<circle cx="${re}" cy="${ae}" r="4" fill="var(--acc)"/><text x="${re}" y="${ae-8}" text-anchor="middle" font-size="10" fill="var(--text)">${ye}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg>
    </div>`}const Et=Li.map((j,O)=>({v:j,i:O})).filter(j=>j.v!==null);if(Et.length>1){const ye=Math.floor(Math.min(...Et.map(ge=>ge.v))),de=Math.ceil(Math.max(...Et.map(ge=>ge.v))),re=de-ye||1,ae=[];for(let ge=ye;ge<=de;ge++)(de-ye<=6||ge%Math.ceil((de-ye)/5)===0)&&ae.push(ge);const{slope:et,intercept:Ve}=nR(Et.map(({v:ge,i:tt})=>({x:tt,y:ge}))),Ne=Mh(Et.map(ge=>ge.v)),Tt=(ge,tt,{dotR:xt=3,valFont:bt=9,showVals:Pr=!1}={})=>{const Ge=Ie=>42+(dt>1?Ie/(dt-1)*(ge-42-15):0),ze=Ie=>15+(tt-15-25)*(1-(Ie-ye)/re),qn=Et.map(({v:Ie,i:ln})=>Ge(ln)+","+ze(Ie)).join(" "),At=ae.map(Ie=>`<line x1="38" y1="${ze(Ie)}" x2="42" y2="${ze(Ie)}" stroke="var(--muted)" stroke-width="1" pointer-events="none"/><text x="36" y="${ze(Ie)+4}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${Ie}</text><line x1="42" y1="${ze(Ie)}" x2="${ge-15}" y2="${ze(Ie)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3" pointer-events="none"/>`).join(""),cn=Et.map(({v:Ie,i:ln})=>Pr?`<circle cx="${Ge(ln)}" cy="${ze(Ie)}" r="${xt}" fill="var(--acc)" pointer-events="none"/><text x="${Ge(ln)}" y="${ze(Ie)-xt-5}" text-anchor="middle" font-size="${bt}" fill="#fff" pointer-events="none">${Ie.toFixed(1)}</text>`:`<circle cx="${Ge(ln)}" cy="${ze(Ie)}" r="${xt}" fill="var(--acc)" pointer-events="none"/>`).join(""),ps=`<line x1="${Ge(0)}" y1="${ze(Ve)}" x2="${Ge(dt-1)}" y2="${ze(Ve+et*(dt-1))}" stroke="#f0c030" stroke-width="1.5" stroke-dasharray="6,4" pointer-events="none"/>`;return`<line x1="42" y1="15" x2="42" y2="${tt-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        <line x1="42" y1="${tt-25}" x2="${ge-15}" y2="${tt-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        ${At}
        <polyline points="${qn}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round" pointer-events="none"/>
        ${ps}
        ${cn}
        <text x="42" y="${tt-5}" font-size="9" fill="var(--muted)" pointer-events="none">1</text>
        <text x="${Ge(dt-1)}" y="${tt-5}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${dt}</text>`},ft=Math.max(340,dt*30);wt+=`<div class="card card-mb16">
      <div class="graph-header-row">
        <span>GENNEMSNIT PR. SKUDRÆKKEFØLGE</span>
        <button class="btn-icon graph-fs-btn" onclick="window.openGraphFs()">⤢</button>
      </div>
      <svg viewBox="0 0 340 160" class="graph-svg">${Tt(340,160,{dotR:3})}</svg>
      <div class="graph-caption">Skudrækkefølge — 1 = første mål skudt · stiplet linje = trend</div>
    </div>
    <div class="card card-mb16">
      <div class="section-title-mb8">KONSISTENS (SPREDNING)</div>
      <div class="spredning-row">
        <div class="stat-val-28">${Ne.toFixed(2)}</div>
        <div class="spredning-note">Lavere tal = mere ensartet skydning gennem runden.</div>
      </div>
    </div>
    <div id="graph-fs" class="fs-ov hidden graph-fs-overlay" onclick="window.closeGraphFs()">
      <div class="graph-fs-box" id="graph-fs-box" onclick="event.stopPropagation()">
        <div class="graph-fs-title">GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset</div>
        <div id="graph-fs-viewport" class="graph-fs-viewport">
          <svg id="graph-fs-svg" viewBox="0 0 ${ft} 160" class="graph-fs-svg">${Tt(ft,160,{dotR:5,valFont:10,showVals:!0})}</svg>
        </div>
        <button class="btn btn-dark graph-fs-close-btn" onclick="window.closeGraphFs()">Luk</button>
      </div>
    </div>`,window.openGraphFs=function(){const ge=document.getElementById("graph-fs");if(!ge)return;ge.classList.remove("hidden");const tt=document.getElementById("graph-fs-svg"),xt=document.getElementById("graph-fs-box"),bt=document.getElementById("graph-fs-viewport"),Pr=()=>{const Ge=Math.min(window.innerWidth*.96,900),ze=Math.min(window.innerHeight*.9,700),qn=Math.max(200,Ge-32),At=Math.max(140,ze-90),cn=Math.max(qn,dt*30);tt.setAttribute("viewBox",`0 0 ${cn} ${At}`),tt.innerHTML=Tt(cn,At,{dotR:5,valFont:10,showVals:!0}),xt&&(xt.style.width=Ge+"px"),bt&&(bt.style.width=qn+"px",bt.style.height=At+"px")};Pr(),Nt&&(window.removeEventListener("resize",Nt),window.removeEventListener("orientationchange",Nt)),Nt=Pr,window.addEventListener("resize",Nt),window.addEventListener("orientationchange",Nt),er&&document.removeEventListener("gesturestart",er),er=Ge=>Ge.preventDefault(),document.addEventListener("gesturestart",er,{passive:!1}),bt&&!bt.dataset.pinchInit&&(rR(bt,tt),bt.dataset.pinchInit="1")}}if(s!=="all"){const j=W=>{const Q=W.created;return Q!=null&&Q.toDate?Q.toDate().getTime():Q!=null&&Q.seconds?Q.seconds*1e3:typeof Q=="number"?Q:0},O=P.filter(W=>W.courseId===s).filter(W=>!C||$(W)).filter(W=>!D||F(W)).map(W=>{var J;const Q=Oh(W,(J=p.user)==null?void 0:J.uid);return Q.length>1?{t:j(W),cv:Mh(Q)}:null}).filter(Boolean).sort((W,Q)=>W.t-Q.t);if(O.length>1){const fe=O.map(Ne=>Ne.cv),ye=Math.min(...fe),de=Math.max(...fe),re=de-ye||1,ae=(Ne,Tt)=>({x:30+Tt/(O.length-1)*(340-2*30),y:90-(Ne.cv-ye)/re*(120-2*30)}),et=O.map((Ne,Tt)=>{const{x:ft,y:ge}=ae(Ne,Tt);return`${ft},${ge}`}).join(" "),Ve=O.map((Ne,Tt)=>{const{x:ft,y:ge}=ae(Ne,Tt);return`<circle cx="${ft}" cy="${ge}" r="4" fill="#f0c030"/><text x="${ft}" y="${ge-8}" text-anchor="middle" font-size="10" fill="var(--text)">${Ne.cv.toFixed(2)}</text>`}).join("");wt+=`<div class="card card-mb16">
        <div class="section-title-mb8">KONSISTENS OVER TID · denne bane</div>
        <svg viewBox="0 0 340 120" class="graph-svg">
          <polyline points="${et}" fill="none" stroke="#f0c030" stroke-width="2.5" stroke-linejoin="round"/>
          ${Ve}
          <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
          <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
        </svg>
        <div class="graph-caption">Spredning pr. runde — faldende kurve = mere ensartet skydning over tid</div>
      </div>`}}if(n.innerHTML=wt,s!=="all"&&((ms=p.profile)!=null&&ms.kon)&&((Fi=p.profile)!=null&&Fi.bueklasse)){const j=p.profile.kon==="herre"?"Herre":"Dame",O={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"}[p.profile.bueklasse]||p.profile.bueklasse,W=document.createElement("div");W.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">SAMMENLIGNING · ${j} ${O}</div><div class="comp-loading-msg">Henter...</div></div>`,n.appendChild(W),Ze(je(X,"bane_stats",s,"runder")).then(Q=>{const fe=Q.docs.map(Ve=>Ve.data()).filter(Ve=>Ve.kon===p.profile.kon&&Ve.bueklasse===p.profile.bueklasse);if(!fe.length){W.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">SAMMENLIGNING · ${j} ${O}</div><div class="comp-loading-msg">Ingen andre ${j} ${O}-skytter har skudt denne bane endnu.</div></div>`;return}const ye=fe.filter(Ve=>(Ve.arrowsShot||Ve.numTargets*2)>0),de=ye.length?(ye.reduce((Ve,Ne)=>Ve+Ne.score/(Ne.arrowsShot||Ne.numTargets*2),0)/ye.length).toFixed(2):"—",re=de!=="—"?Number(Bn)-Number(de):null,ae=re!==null?(re>0?"+":"")+re.toFixed(2):"—",et=re===null?"var(--muted)":re>0?"#2aaa5a":re<0?"var(--danger)":"var(--muted)";W.innerHTML=`<div class="card card-mb16">
        <div class="section-title-mb12">SAMMENLIGNING · ${j} ${O}</div>
        <div class="cmp-pil-grid">
          <div><div class="stat-lbl">DIT SNT/PIL</div><div class="stat-val-22">${Bn}</div></div>
          <div class="cmp-pil-mid">
            <div class="stat-lbl">DIFFERENCE</div>
            <div style="font-size:22px;font-weight:700;color:${et};">${ae}</div>
          </div>
          <div><div class="stat-lbl">ANDRES SNT/PIL</div><div class="stat-val-22-txt">${de}</div></div>
        </div>
        <div class="pil-best-note">Baseret på ${fe.length} runde${fe.length!==1?"r":""} fra andre skytter</div>
      </div>`}).catch(()=>{W.remove()})}};let Ao=null;async function aR(){try{"wakeLock"in navigator&&(Ao=await navigator.wakeLock.request("screen"))}catch{}}function eu(){Ao&&(Ao.release(),Ao=null)}function Fh(){if(!p.pendingRound)return;const n=p.rounds.find(t=>t.id===p.pendingRound);if(!n)return;p.pendingRound=null;const e=(n.shooters||[]).map(t=>({...t,scores:gr(t.scores)}));setTimeout(()=>Jl({...n,shooters:e}),300)}function cR(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${K(e)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};window.startRound=async function(){var f,m;const n=(document.getElementById("round-name").value.trim()||"Min Skydning").slice(0,80),e=document.getElementById("course-sel").value,t=document.getElementById("target-count"),r=(t.value==="custom"?Number(document.getElementById("target-count-custom").value):Number(t.value))||24,s=Number(document.getElementById("start-target").value)-1,i=document.getElementById("gps-auto-sw").classList.contains("on"),o=document.getElementById("gps-track-sw").classList.contains("on");p.warnThreshold=Number(document.getElementById("warn-thresh").value)||8;const c=[{id:p.user.uid,name:p.profile.name,isGuest:!1},...cR().filter(_=>_.id!==p.user.uid)];p.course=e&&p.courses.find(_=>_.id===e)||null;const l=c.map(_=>{const E=DA(_.id,_.name,_.isGuest);return xA(E,r),E});let d=s;if(i&&((f=p.course)!=null&&f.targets))try{d=OA(p.course.targets,await Ra())}catch{}p.round={id:"r_"+Date.now(),name:n,courseId:e||null,courseName:((m=p.course)==null?void 0:m.name)||null,numTargets:r,startTarget:d+1,shooters:l,created:Date.now(),traversalOrder:hg(d,r),traversalPos:0},o&&(p.gpsTracking=LA(lR),document.getElementById("gps-bar").classList.toggle("hidden",!p.gpsTracking),aR()),showActivePanel(),fs(),Fn(),ka(),Ca()};function hs(){return p.round.traversalOrder[p.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function Fn(){var l,d;if(!p.round)return;const n=hs(),e=p.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=" af "+e,document.getElementById("round-badge").textContent=p.round.name;const t=(d=(l=p.course)==null?void 0:l.targets)==null?void 0:d[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||`Mål ${n+1}`;const r=VA(p.round.shooters,e);document.getElementById("pbar").style.width=`${r/e*100}%`;const s=p.round.shooters.flatMap(f=>f.scores.flat().filter(m=>m!=null)),i=s.reduce((f,m)=>f+Me(m),0);document.getElementById("stat-avg").textContent=s.length?(i/s.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=i,document.getElementById("stat-rem").textContent=e-r;const o=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(o.classList.add("hidden"),o.onload=()=>o.classList.remove("hidden"),o.onerror=()=>o.classList.add("hidden"),o.src=t.imageUrl||t.photo):(o.src="",o.classList.add("hidden")),document.getElementById("edit-target-btn").classList.toggle("hidden",!(p.isAdmin&&p.round.courseId)),document.getElementById("next-btn").textContent=p.round.traversalPos===e-1?"AFSLUT →":"NÆSTE →";const c=CA(p.round.shooters,n);document.getElementById("target-avg").textContent=c!==null?`Gns. dette mål: ${c}`:""}function fs(){if(!p.round)return;const n=hs(),e=document.getElementById("shooters-list");e.innerHTML="",p.round.shooters.forEach((t,r)=>{const s=Xe(t.scores),i=kA(t.scores,p.warnThreshold),o=t.scores[n]||[null,null],c=document.createElement("div");c.className="shooter-card";const l=t.scores.map(P=>P[0]).filter(P=>P!=null),d=t.scores.map(P=>P[1]).filter(P=>P!=null),f=[...l,...d],m=l.length?(l.reduce((P,C)=>P+Me(C),0)/l.length).toFixed(2):"—",_=d.length?(d.reduce((P,C)=>P+Me(C),0)/d.length).toFixed(2):"—",E=f.length?(f.reduce((P,C)=>P+Me(C),0)/f.length).toFixed(2):"—";c.innerHTML=`
      <div class="sh-head"><span class="sh-target-emoji">🎯</span>${i?'<span class="warn-dot"></span>':""}
        <span class="sh-name">${K(t.name)}</span>
        <div class="sh-mini-group">
          <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${s}</div></div>
          <div class="sh-mini"><div class="sh-mini-lbl">P1</div><div class="sh-mini-val sh-mini-val-sm">${m}</div></div>
          <div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">SNT</div><div class="sh-mini-val sh-mini-val-acc">${E}</div></div>
          <div class="sh-mini"><div class="sh-mini-lbl">P2</div><div class="sh-mini-val sh-mini-val-sm">${_}</div></div>
        </div>
      </div>
      <div class="arrows-row">${[0,1].map(P=>`
        <div class="arrow-grp"><div class="arrow-lbl">🎯 PIL ${P+1}</div>
          <div class="score-btns">${SA.map(C=>`
            <button class="sbtn ${o[P]===C?`sel-${C}`:""}" data-v="${C}"
              onclick="setScore(${r},${n},${P},'${C}')">${C}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(c)})}window.setScore=function(n,e,t,r){const s=r==="M"?"M":Number(r);p.round.shooters[n].scores[e][t]=s,Ca(),fs(),Fn()};function lR({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=mg(r),document.getElementById("gps-dist").textContent=pg(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function Ca(){if(!(!p.round||!p.user))try{await Sn(ce(X,"users",p.user.uid,"active","round"),dg(p.round))}catch(n){console.warn(n)}}async function uR(){var n;try{const e=await pi(ce(X,"users",p.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(t.id&&p.rounds.some(s=>s.id===t.id)){await rn(ce(X,"users",p.user.uid,"active","round"));return}if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await rn(ce(X,"users",p.user.uid,"active","round"));return}Di("Genoptag den igangværende runde?",()=>{p.round=NA(t),p.round.traversalOrder=t.traversalOrder||hg(0,p.round.numTargets),p.round.traversalPos=t.traversalPos||0,p.round.courseId&&(p.course=p.courses.find(s=>s.id===p.round.courseId)||null),showActivePanel(),fs(),Fn(),ka()})}catch(e){console.warn(e)}}function ka(){const n=document.getElementById("app-main");n&&(n.scrollTop=0,requestAnimationFrame(()=>{n.scrollTop=0,setTimeout(()=>{n.scrollTop=0},100)}))}function tu(){document.getElementById("edit-panel").classList.add("hidden")}window.prevTarget=function(){!p.round||p.round.traversalPos<=0||(tu(),p.round.traversalPos--,Ca(),fs(),Fn(),ka())};window.nextTarget=function(){p.round&&(tu(),p.round.traversalPos<p.round.numTargets-1?(p.round.traversalPos++,Ca(),fs(),Fn(),ka()):window.finishRound())};window.skipToTarget=function(){p.round&&(document.getElementById("skip-input").max=p.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!p.round||n<1||n>p.round.numTargets)return;tu();const e=p.round.traversalOrder.indexOf(n-1);e!==-1&&(p.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),fs(),Fn()};window.finishRound=async function(){var o,c,l;p.finishTap++;const n=document.getElementById("finish-btn");if(p.finishTap===1){n.textContent="✓ BEKRÆFT",setTimeout(()=>{p.finishTap=0,n.textContent="✓ AFSLUT NU"},3e3);return}p.finishTap=0,n.textContent="✓ AFSLUT NU";let e={};p.gpsTracking&&(e=gg(),p.gpsTracking=!1),eu();const t=p.round.id||"r_"+Date.now(),r=p.round.shooters.filter(d=>!d.isGuest).map(d=>d.id),s={...dg(p.round),completed:Date.now(),...e,id:t,shooterIds:r};p.rounds.unshift({...s,created:Date.now()}),kt(),Yo(),Sn(ce(X,"users",p.user.uid,"rounds",t),{...s,created:yt()}).catch(()=>ne("Runde gemt lokalt (netværksfejl)","error")),p.round.shooters.filter(d=>!d.isGuest&&d.id!==p.user.uid).forEach(d=>{Sn(ce(X,"users",d.id,"rounds",t),{...s,created:yt()}).catch(()=>ne("Kunne ikke dele runde med medskytte","error"))});const i=p.round;if(i.courseId&&((o=p.profile)!=null&&o.kon)&&((c=p.profile)!=null&&c.bueklasse)){const d=i.shooters.find(f=>{var m;return f.id===((m=p.user)==null?void 0:m.uid)})||((l=i.shooters)==null?void 0:l[0]);if(d){const f=d.scores.flat().filter(m=>m!=null).length;Sn(ce(X,"bane_stats",i.courseId,"runder",t),{score:Xe(d.scores),arrowsShot:f,kon:p.profile.kon,bueklasse:p.profile.bueklasse,numTargets:i.numTargets,dato:yt()}).catch(m=>console.warn("bane_stats fejl:",m))}}window._lastRound=i,p.round=null,await rn(ce(X,"users",p.user.uid,"active","round")).catch(()=>{}),HA(i),showResultsPanel()};window.abortRound=async function(){p.abortTap++;const n=document.getElementById("abort-btn");if(p.abortTap===1){n.textContent="🗑 BEKRÆFT",setTimeout(()=>{p.abortTap=0,n.textContent="🗑 AFBRYD"},3e3);return}p.abortTap=0,n.textContent="🗑 AFBRYD",p.gpsTracking&&(gg(),p.gpsTracking=!1),eu(),await rn(ce(X,"users",p.user.uid,"active","round")).catch(()=>{}),p.round=null,showSetupPanel()};window.showVisitResults=function(n){const e=p.rounds.find(r=>r.id===n);if(!e){ne("Runden er ikke gemt lokalt","error");return}const t=(e.shooters||[]).map(r=>({...r,scores:gr(r.scores)}));window.switchTab("results"),Jl({...e,shooters:t})};window.showRouteOnMap=function(n){!p.courseMap||!n.length||(p.courseMapLayer&&p.courseMap.removeLayer(p.courseMapLayer),p.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(p.courseMap),p.courseMap.fitBounds(p.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.openEditTarget=function(){var t,r;const n=hs(),e=(r=(t=p.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=hs();p.round.courseId&&(await Wl(p.round.courseId,e,{name:n}),(t=p.course)!=null&&t.targets&&(p.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),Fn()};window.editGps=async function(){var n;try{const e=await Ra(),t=hs();await Wl(p.round.courseId,t,{gps:e}),(n=p.course)!=null&&n.targets&&(p.course.targets[t].gps=e),ne("GPS gemt!","success")}catch(e){ne("GPS fejl: "+e.message,"error")}};const dR={"auth/user-not-found":"Bruger ikke fundet.","auth/wrong-password":"Forkert kodeord.","auth/invalid-credential":"Ugyldig email eller kodeord.","auth/email-already-in-use":"Email er allerede i brug.","auth/weak-password":"Kodeordet er for svagt (min. 6 tegn).","auth/invalid-email":"Ugyldig email-adresse.","auth/too-many-requests":"For mange forsøg. Prøv igen senere.","auth/network-request-failed":"Netværksfejl. Tjek din forbindelse."};function nu(n){return dR[n]||"Der opstod en fejl. Prøv igen."}function Xt(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){Xt("Udfyld alle felter.");return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await Cv(ki,n,e)}catch(r){Xt(nu(r.code))}finally{t.disabled=!1,t.textContent="LOG IND"}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value,r=document.getElementById("signup-kon").value,s=document.getElementById("signup-bueklasse").value;if(!n||!e||!t||!r||!s){Xt("Udfyld alle felter.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){Xt("Ugyldig email-adresse.");return}if(t.length<6){Xt("Adgangskoden skal være mindst 6 tegn.");return}const i=document.querySelector("#signup-form .btn");i.disabled=!0,i.textContent="...";try{const o=await Pv(ki,e,t);await Sn(ce(X,"users",o.user.uid),{name:n,email:e,yam:n,"e-mail":e,kon:r,bueklasse:s,created:yt()})}catch(o){Xt(nu(o.code))}finally{i.disabled=!1,i.textContent="OPRET KONTO"}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){Xt("Indtast din email først.");return}try{await Sv(ki,n),Xt("Nulstillingsmail sendt!","ok")}catch(e){Xt(nu(e.code))}};window.doLogout=async function(){try{await Vv(ki)}catch{}};window.toggleGpsPause=MA;window.parseRoute=fg;document.addEventListener("DOMContentLoaded",()=>{var o,c,l,d,f;const n=document.getElementById("warn-enabled-sw");if(n){const m=localStorage.getItem("warnEnabled");p.warnEnabled=m===null?!0:m==="true",n.classList.toggle("on",p.warnEnabled),n.addEventListener("click",()=>{p.warnEnabled=!p.warnEnabled,n.classList.toggle("on",p.warnEnabled),localStorage.setItem("warnEnabled",p.warnEnabled)})}xv(ki,async m=>{if(m){p.user=m;let _,E;for(let P=0;P<3;P++)try{[_,E]=await Promise.all([pi(ce(X,"users",m.uid)),pi(ce(X,"admins",m.uid))]);break}catch(C){console.error("Profil fejl attempt",P,C.code,C.message),P<2?await new Promise(D=>setTimeout(D,2e3*(P+1))):(p.profile={name:m.email,email:m.email},p.isAdmin=!1)}if(_!=null&&_.exists()){const P=_.data();p.profile={name:P.name||P.yam||m.email,email:P.email||P["e-mail"]||m.email,kon:P.kon||null,bueklasse:P.bueklasse||null}}else p.profile||(p.profile={name:m.email,email:m.email});p.isAdmin=(E==null?void 0:E.exists())||!1,p.isSuperAdmin=p.isAdmin&&m.email==="bsklausen@proton.me",hR()}else fR()});const e="archery_pwa_dismissed",t=localStorage.getItem(e)==="1";let r=null;window.addEventListener("beforeinstallprompt",m=>{m.preventDefault(),r=m,t||document.getElementById("pwa-banner").classList.remove("hidden")}),(o=document.getElementById("pwa-install-btn"))==null||o.addEventListener("click",async()=>{r&&(r.prompt(),await r.userChoice,r=null,document.getElementById("pwa-banner").classList.add("hidden"))}),(c=document.getElementById("pwa-dismiss-btn"))==null||c.addEventListener("click",()=>{document.getElementById("pwa-banner").classList.add("hidden"),localStorage.setItem(e,"1")});const s=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.MSStream,i=window.navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches;s&&!i&&!t&&((l=document.getElementById("ios-install-banner"))==null||l.classList.remove("hidden")),(d=document.getElementById("ios-dismiss-btn"))==null||d.addEventListener("click",()=>{document.getElementById("ios-install-banner").classList.add("hidden"),localStorage.setItem(e,"1")}),Ro(24),document.getElementById("target-count").addEventListener("change",m=>{const _=m.target.value,E=document.getElementById("target-count-custom");E.style.display=_==="custom"?"":"none",_!=="custom"&&Ro(Number(_))}),document.getElementById("target-count-custom").addEventListener("input",m=>{const _=Number(m.target.value);_>0&&Ro(_)}),(f=document.getElementById("photo-input"))==null||f.addEventListener("change",async m=>{var E;const _=m.target.files[0];if(_)try{const P=await yg(_),C=hs(),D=cg(lg,`courses/${p.round.courseId}/target_${C}.jpg`);await og(D,P,"base64",{contentType:"image/jpeg"});const $=await ag(D);await Wl(p.round.courseId,C,{imageUrl:$}),(E=p.course)!=null&&E.targets&&(p.course.targets[C].imageUrl=$),Fn()}catch(P){ne("Upload fejl: "+P.message,"error")}}),document.querySelectorAll(".modal").forEach(m=>{m.addEventListener("click",_=>{_.target===m&&m.classList.add("hidden")})})});window.saveProfilModal=async function(){const n=document.getElementById("profil-kon").value,e=document.getElementById("profil-bueklasse").value,t=document.getElementById("profil-err");if(!n||!e){t.textContent="Vælg både køn og bueklasse.",t.classList.remove("hidden");return}t.classList.add("hidden");try{await ut(ce(X,"users",p.user.uid),{kon:n,bueklasse:e}),p.profile.kon=n,p.profile.bueklasse=e,document.getElementById("profil-modal").classList.add("hidden")}catch{t.textContent="Fejl ved gem. Prøv igen.",t.classList.remove("hidden")}};function hR(){document.getElementById("hdr-name").textContent=p.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),(!p.profile.kon||!p.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),800),document.getElementById("admin-badge").classList.toggle("hidden",!p.isAdmin),document.querySelectorAll(".admin-only").forEach(t=>t.classList.toggle("hidden",!p.isAdmin));const n=Nh();p.friends=n.friends||[],p.rounds=n.rounds||[],Ze(je(X,"users",p.user.uid,"friends")).then(t=>{p.friends=t.docs.map(r=>({...r.data(),id:r.id})),kt(),gi(),_i()}).catch(t=>console.warn("Hent venner:",t)),gi(),_i(),Yo(),p.pendingRound=new URLSearchParams(window.location.search).get("round")||null,p.pendingRound&&Fh();const e=Nh().courses||[];p.courses=e,xi(),Sg(),mR(),Ze(je(X,"users",p.user.uid,"rounds")).then(t=>{if(!t.docs.length)return;const r=t.docs.map(o=>({...o.data(),id:o.id})),s=new Set(p.rounds.map(o=>o.id)),i=r.filter(o=>!s.has(o.id));i.length&&(p.rounds=[...p.rounds,...i].sort((o,c)=>{var f,m;const l=o.completed||o.created||0,d=c.completed||c.created||0;return(typeof d=="number"?d:((f=d.toMillis)==null?void 0:f.call(d))??0)-(typeof l=="number"?l:((m=l.toMillis)==null?void 0:m.call(l))??0)}),kt(),Yo(),p.pendingRound&&Fh())}).catch(t=>console.warn("Hent runder:",t)),BA(),Tg().then(()=>{On(),Xl()}).catch(t=>console.warn("Hent meetups:",t)),uR()}function fR(){p.user=null,p.profile=null,p.round=null,eu(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){window.appLang=window.appLang==="da"?"en":"da",document.getElementById("lang-btn").textContent=window.appLang.toUpperCase()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&(GA(),On(),XA()),n==="analyse"&&window.renderAnalyse(),n==="courses"&&p.courseMap&&setTimeout(()=>p.courseMap.invalidateSize(),100)};function mR(){!navigator.geolocation||!p.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(p.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=Hl(e,o);c<t&&(t=c,r=s.id)})}),r&&t<500){const s=document.getElementById("course-sel");s.value=r,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function Sg(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML='<option value="">-- Ingen bane --</option>',p.courses.forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${t.numTargets} mål)`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=p.courses.find(i=>i.id===n.value),r=document.getElementById("target-count"),s=document.getElementById("target-count-custom");t?(!!r.querySelector(`option[value="${t.numTargets}"]`)?(r.value=String(t.numTargets),s.style.display="none"):(r.value="custom",s.value=t.numTargets,s.style.display=""),r.disabled=!0,s.disabled=!0):(r.disabled=!1,s.disabled=!1,r.value!=="custom"&&(s.style.display="none")),Ro(t?t.numTargets:r.value==="custom"?Number(s.value):Number(r.value))}}window.populateCourseDropdown=Sg;function Ro(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"}),document.getElementById("qr-url").value=window.location.href};window.copyQrUrl=function(){var e;const n=document.getElementById("qr-url");(e=navigator.clipboard)==null||e.writeText(n.value).then(()=>ne("Link kopieret","success"),()=>{n.select(),document.execCommand("copy"),ne("Link kopieret","success")})};window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
