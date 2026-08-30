(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Kd={};/**
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
 */const em=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Hv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,h=i>>2,p=(i&3)<<4|c>>4;let y=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(y=64)),r.push(t[h],t[p],t[y],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(em(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Hv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Wv;const y=i<<2|c>>4;if(r.push(y),u!==64){const w=c<<4&240|u>>2;if(r.push(w),p!==64){const A=u<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qv=function(n){const e=em(n);return tm.encodeByteArray(e,!0)},ua=function(n){return Qv(n).replace(/\./g,"")},nm=function(n){try{return tm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jv=()=>Yv().__FIREBASE_DEFAULTS__,Xv=()=>{if(typeof process>"u"||typeof Kd>"u")return;const n=Kd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&nm(n[1]);return e&&JSON.parse(e)},Ma=()=>{try{return Jv()||Xv()||Zv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rm=n=>{var e,t;return(t=(e=Ma())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},e_=n=>{const e=rm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},sm=()=>{var n;return(n=Ma())===null||n===void 0?void 0:n.config},im=n=>{var e;return(e=Ma())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class t_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function n_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ua(JSON.stringify(t)),ua(JSON.stringify(o)),""].join(".")}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function s_(){var n;const e=(n=Ma())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function i_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function o_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function a_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function c_(){const n=He();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function om(){return!s_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fl(){try{return typeof indexedDB=="object"}catch{return!1}}function am(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function l_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const u_="FirebaseError";class jt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=u_,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zr.prototype.create)}}class zr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?d_(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new jt(s,c,r)}}function d_(n,e){return n.replace(h_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const h_=/\{\$([^}]+)}/g;function f_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(zd(i)&&zd(o)){if(!Rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function zd(n){return n!==null&&typeof n=="object"}/**
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
 */function io(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ei(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function m_(n,e){const t=new p_(n,e);return t.subscribe.bind(t)}class p_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");g_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=xc),s.error===void 0&&(s.error=xc),s.complete===void 0&&(s.complete=xc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xc(){}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}class xt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _r="[DEFAULT]";/**
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
 */class y_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new t_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(__(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:v_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function v_(n){return n===_r?void 0:n}function __(n){return n.instantiationMode==="EAGER"}/**
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
 */class w_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new y_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(le||(le={}));const I_={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},T_=le.INFO,E_={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},b_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=E_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $l{constructor(e){this.name=e,this._logLevel=T_,this._logHandler=b_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const A_=(n,e)=>e.some(t=>n instanceof t);let Hd,Wd;function S_(){return Hd||(Hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R_(){return Wd||(Wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cm=new WeakMap,nl=new WeakMap,lm=new WeakMap,Lc=new WeakMap,Ul=new WeakMap;function P_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(mn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&cm.set(t,n)}).catch(()=>{}),Ul.set(e,n),e}function C_(n){if(nl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});nl.set(n,e)}let rl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function k_(n){rl=n(rl)}function D_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Vc(this),e,...t);return lm.set(r,e.sort?e.sort():[e]),mn(r)}:R_().includes(n)?function(...e){return n.apply(Vc(this),e),mn(cm.get(this))}:function(...e){return mn(n.apply(Vc(this),e))}}function N_(n){return typeof n=="function"?D_(n):(n instanceof IDBTransaction&&C_(n),A_(n,S_())?new Proxy(n,rl):n)}function mn(n){if(n instanceof IDBRequest)return P_(n);if(Lc.has(n))return Lc.get(n);const e=N_(n);return e!==n&&(Lc.set(n,e),Ul.set(e,n)),e}const Vc=n=>Ul.get(n);function Ba(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}function Oc(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),mn(t).then(()=>{})}const x_=["get","getKey","getAll","getAllKeys","count"],L_=["put","add","delete","clear"],Mc=new Map;function Qd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=L_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||x_.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return Mc.set(e,i),i}k_(n=>({...n,get:(e,t,r)=>Qd(e,t)||n.get(e,t,r),has:(e,t)=>!!Qd(e,t)||n.has(e,t)}));/**
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
 */class V_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(O_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function O_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sl="@firebase/app",Yd="0.10.13";/**
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
 */const gn=new $l("@firebase/app"),M_="@firebase/app-compat",B_="@firebase/analytics-compat",F_="@firebase/analytics",$_="@firebase/app-check-compat",U_="@firebase/app-check",j_="@firebase/auth",q_="@firebase/auth-compat",G_="@firebase/database",K_="@firebase/data-connect",z_="@firebase/database-compat",H_="@firebase/functions",W_="@firebase/functions-compat",Q_="@firebase/installations",Y_="@firebase/installations-compat",J_="@firebase/messaging",X_="@firebase/messaging-compat",Z_="@firebase/performance",ew="@firebase/performance-compat",tw="@firebase/remote-config",nw="@firebase/remote-config-compat",rw="@firebase/storage",sw="@firebase/storage-compat",iw="@firebase/firestore",ow="@firebase/vertexai-preview",aw="@firebase/firestore-compat",cw="firebase",lw="10.14.1";/**
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
 */const il="[DEFAULT]",uw={[sl]:"fire-core",[M_]:"fire-core-compat",[F_]:"fire-analytics",[B_]:"fire-analytics-compat",[U_]:"fire-app-check",[$_]:"fire-app-check-compat",[j_]:"fire-auth",[q_]:"fire-auth-compat",[G_]:"fire-rtdb",[K_]:"fire-data-connect",[z_]:"fire-rtdb-compat",[H_]:"fire-fn",[W_]:"fire-fn-compat",[Q_]:"fire-iid",[Y_]:"fire-iid-compat",[J_]:"fire-fcm",[X_]:"fire-fcm-compat",[Z_]:"fire-perf",[ew]:"fire-perf-compat",[tw]:"fire-rc",[nw]:"fire-rc-compat",[rw]:"fire-gcs",[sw]:"fire-gcs-compat",[iw]:"fire-fst",[aw]:"fire-fst-compat",[ow]:"fire-vertex","fire-js":"fire-js",[cw]:"fire-js-all"};/**
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
 */const da=new Map,dw=new Map,ol=new Map;function Jd(n,e){try{n.container.addComponent(e)}catch(t){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ft(n){const e=n.name;if(ol.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;ol.set(e,n);for(const t of da.values())Jd(t,n);for(const t of dw.values())Jd(t,n);return!0}function Hr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Jt(n){return n.settings!==void 0}/**
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
 */const hw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new zr("app","Firebase",hw);/**
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
 */class fw{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Wr=lw;function um(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:il,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(t||(t=sm()),!t)throw Kn.create("no-options");const i=da.get(s);if(i){if(Rs(t,i.options)&&Rs(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const o=new w_(s);for(const l of ol.values())o.addComponent(l);const c=new fw(t,r,o);return da.set(s,c),c}function jl(n=il){const e=da.get(n);if(!e&&n===il&&sm())return um();if(!e)throw Kn.create("no-app",{appName:n});return e}function Et(n,e,t){var r;let s=(r=uw[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(c.join(" "));return}Ft(new xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mw="firebase-heartbeat-database",pw=1,ji="firebase-heartbeat-store";let Bc=null;function dm(){return Bc||(Bc=Ba(mw,pw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ji)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kn.create("idb-open",{originalErrorMessage:n.message})})),Bc}async function gw(n){try{const t=(await dm()).transaction(ji),r=await t.objectStore(ji).get(hm(n));return await t.done,r}catch(e){if(e instanceof jt)gn.warn(e.message);else{const t=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(t.message)}}}async function Xd(n,e){try{const r=(await dm()).transaction(ji,"readwrite");await r.objectStore(ji).put(e,hm(n)),await r.done}catch(t){if(t instanceof jt)gn.warn(t.message);else{const r=Kn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gn.warn(r.message)}}}function hm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yw=1024,vw=30*24*60*60*1e3;class _w{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Iw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=vw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zd(),{heartbeatsToSend:r,unsentEntries:s}=ww(this._heartbeatsCache.heartbeats),i=ua(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gn.warn(t),""}}}function Zd(){return new Date().toISOString().substring(0,10)}function ww(n,e=yw){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),eh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),eh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Iw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fl()?am().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function eh(n){return ua(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Tw(n){Ft(new xt("platform-logger",e=>new V_(e),"PRIVATE")),Ft(new xt("heartbeat",e=>new _w(e),"PRIVATE")),Et(sl,Yd,n),Et(sl,Yd,"esm2017"),Et("fire-js","")}Tw("");var Ew="firebase",bw="10.14.1";/**
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
 */Et(Ew,bw,"app");function ql(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Aw=fm,mm=new zr("auth","Firebase",fm());/**
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
 */const ha=new $l("@firebase/auth");function Sw(n,...e){ha.logLevel<=le.WARN&&ha.warn(`Auth (${Wr}): ${n}`,...e)}function zo(n,...e){ha.logLevel<=le.ERROR&&ha.error(`Auth (${Wr}): ${n}`,...e)}/**
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
 */function $t(n,...e){throw Gl(n,...e)}function en(n,...e){return Gl(n,...e)}function pm(n,e,t){const r=Object.assign(Object.assign({},Aw()),{[e]:t});return new zr("auth","Firebase",r).create(e,{appName:n.name})}function pn(n){return pm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return mm.create(n,...e)}function re(n,e,...t){if(!n)throw Gl(e,...t)}function un(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zo(e),new Error(e)}function yn(n,e){n||un(e)}/**
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
 */function al(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Rw(){return th()==="http:"||th()==="https:"}function th(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Pw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rw()||o_()||"connection"in navigator)?navigator.onLine:!0}function Cw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class oo{constructor(e,t){this.shortDelay=e,this.longDelay=t,yn(t>e,"Short delay should be less than long delay!"),this.isMobile=r_()||a_()}get(){return Pw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kl(n,e){yn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class gm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dw=new oo(3e4,6e4);function _n(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function wn(n,e,t,r,s={}){return ym(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=io(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},i);return i_()||(u.referrerPolicy="no-referrer"),gm.fetch()(vm(n,n.config.apiHost,t,c),u)})}async function ym(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},kw),e);try{const s=new xw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mo(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mo(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Mo(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Mo(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pm(n,h,u);$t(n,h)}}catch(s){if(s instanceof jt)throw s;$t(n,"network-request-failed",{message:String(s)})}}async function ao(n,e,t,r,s={}){const i=await wn(n,e,t,r,s);return"mfaPendingCredential"in i&&$t(n,"multi-factor-auth-required",{_serverResponse:i}),i}function vm(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Kl(n.config,s):`${n.config.apiScheme}://${s}`}function Nw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),Dw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=en(n,e,r);return s.customData._tokenResponse=t,s}function nh(n){return n!==void 0&&n.enterprise!==void 0}class Lw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Nw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Vw(n,e){return wn(n,"GET","/v2/recaptchaConfig",_n(n,e))}/**
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
 */async function Ow(n,e){return wn(n,"POST","/v1/accounts:delete",e)}async function _m(n,e){return wn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function xi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mw(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),s=zl(r);re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xi(Fc(s.auth_time)),issuedAtTime:xi(Fc(s.iat)),expirationTime:xi(Fc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fc(n){return Number(n)*1e3}function zl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const s=nm(t);return s?JSON.parse(s):(zo("Failed to decode base64 JWT payload"),null)}catch(s){return zo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rh(n){const e=zl(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jt&&Bw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Bw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Fw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xi(this.lastLoginAt),this.creationTime=xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fa(n){var e;const t=n.auth,r=await n.getIdToken(),s=await qi(n,_m(t,{idToken:r}));re(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wm(i.providerUserInfo):[],c=Uw(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new cl(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function $w(n){const e=Ae(n);await fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Uw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wm(n){return n.map(e=>{var{providerId:t}=e,r=ql(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jw(n,e){const t=await ym(n,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=vm(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",gm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qw(n,e){return wn(n,"POST","/v2/accounts:revokeToken",_n(n,e))}/**
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
 */class Es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=rh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await jw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Es;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Es,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function Vn(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=ql(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await qi(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mw(this,e)}reload(){return $w(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await qi(this,Ow(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,u,h;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,O=(u=t.createdAt)!==null&&u!==void 0?u:void 0,F=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:B,isAnonymous:ne,providerData:X,stsTokenManager:b}=t;re(L&&b,e,"internal-error");const _=Es.fromJSON(this.name,b);re(typeof L=="string",e,"internal-error"),Vn(p,e.name),Vn(y,e.name),re(typeof B=="boolean",e,"internal-error"),re(typeof ne=="boolean",e,"internal-error"),Vn(w,e.name),Vn(A,e.name),Vn(P,e.name),Vn(D,e.name),Vn(O,e.name),Vn(F,e.name);const T=new dn({uid:L,auth:e,email:y,emailVerified:B,displayName:p,isAnonymous:ne,photoURL:A,phoneNumber:w,tenantId:P,stsTokenManager:_,createdAt:O,lastLoginAt:F});return X&&Array.isArray(X)&&(T.providerData=X.map(S=>Object.assign({},S))),D&&(T._redirectEventId=D),T}static async _fromIdTokenResponse(e,t,r=!1){const s=new Es;s.updateFromServerResponse(t);const i=new dn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fa(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?wm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Es;c.updateFromIdToken(r);const l=new dn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new cl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const sh=new Map;function hn(n){yn(n instanceof Function,"Expected a class definition");let e=sh.get(n);return e?(yn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sh.set(n,e),e)}/**
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
 */class Im{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Im.type="NONE";const ih=Im;/**
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
 */function Ho(n,e,t){return`firebase:${n}:${e}:${t}`}class bs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ho("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new bs(hn(ih),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||hn(ih);const o=Ho(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const h=await u._get(o);if(h){const p=dn._fromJSON(e,h);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new bs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new bs(i,e,r))}}/**
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
 */function oh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rm(e))return"Blackberry";if(Pm(e))return"Webos";if(Em(e))return"Safari";if((e.includes("chrome/")||bm(e))&&!e.includes("edge/"))return"Chrome";if(Sm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tm(n=He()){return/firefox\//i.test(n)}function Em(n=He()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bm(n=He()){return/crios\//i.test(n)}function Am(n=He()){return/iemobile/i.test(n)}function Sm(n=He()){return/android/i.test(n)}function Rm(n=He()){return/blackberry/i.test(n)}function Pm(n=He()){return/webos/i.test(n)}function Hl(n=He()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Gw(n=He()){var e;return Hl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kw(){return c_()&&document.documentMode===10}function Cm(n=He()){return Hl(n)||Sm(n)||Pm(n)||Rm(n)||/windows phone/i.test(n)||Am(n)}/**
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
 */function km(n,e=[]){let t;switch(n){case"Browser":t=oh(He());break;case"Worker":t=`${oh(He())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wr}/${r}`}/**
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
 */class zw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Hw(n,e={}){return wn(n,"GET","/v2/passwordPolicy",_n(n,e))}/**
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
 */const Ww=6;class Qw{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Ww,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Yw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ah(this),this.idTokenSubscription=new ah(this),this.beforeStateQueue=new zw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _m(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fa(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(pn(this));const t=e?Ae(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hw(this),t=new Qw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await qw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&hn(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[hn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Sw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function tr(n){return Ae(n)}class ah{constructor(e){this.auth=e,this.observer=null,this.addObserver=m_(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jw(n){Fa=n}function Dm(n){return Fa.loadJS(n)}function Xw(){return Fa.recaptchaEnterpriseScript}function Zw(){return Fa.gapiScript}function eI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const tI="recaptcha-enterprise",nI="NO_RECAPTCHA";class rI{constructor(e){this.type=tI,this.auth=tr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Vw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Lw(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;nh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(nI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&nh(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Xw();l.length!==0&&(l+=c),Dm(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function ch(n,e,t,r=!1){const s=new rI(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ma(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ch(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ch(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
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
 */function sI(n,e){const t=Hr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Rs(i,e??{}))return s;$t(s,"already-initialized")}return t.initialize({options:e})}function iI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(hn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oI(n,e,t){const r=tr(n);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Nm(e),{host:o,port:c}=aI(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),cI()}function Nm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function aI(n){const e=Nm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lh(o)}}}function lh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Wl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,t){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function lI(n,e){return wn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function uI(n,e){return ao(n,"POST","/v1/accounts:signInWithPassword",_n(n,e))}async function dI(n,e){return wn(n,"POST","/v1/accounts:sendOobCode",_n(n,e))}async function hI(n,e){return dI(n,e)}/**
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
 */async function fI(n,e){return ao(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}async function mI(n,e){return ao(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}/**
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
 */class Gi extends Wl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Gi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Gi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ma(e,t,"signInWithPassword",uI);case"emailLink":return fI(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ma(e,r,"signUpPassword",lI);case"emailLink":return mI(e,{idToken:t,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function As(n,e){return ao(n,"POST","/v1/accounts:signInWithIdp",_n(n,e))}/**
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
 */const pI="http://localhost";class Nr extends Wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=ql(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return As(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,As(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,As(e,t)}buildRequest(){const e={requestUri:pI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=io(t)}return e}}/**
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
 */function gI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yI(n){const e=Ei(bi(n)).link,t=e?Ei(bi(e)).deep_link_id:null,r=Ei(bi(n)).deep_link_id;return(r?Ei(bi(r)).link:null)||r||t||e||n}class Ql{constructor(e){var t,r,s,i,o,c;const l=Ei(bi(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=gI((s=l.mode)!==null&&s!==void 0?s:null);re(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=yI(e);try{return new Ql(t)}catch{return null}}}/**
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
 */class qs{constructor(){this.providerId=qs.PROVIDER_ID}static credential(e,t){return Gi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ql.parseLink(t);return re(r,"argument-error"),Gi._fromEmailAndCode(e,r.code,r.tenantId)}}qs.PROVIDER_ID="password";qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class co extends xm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bn extends co{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class Fn extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Fn.credential(t,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
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
 */class $n extends co{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class Un extends co{constructor(){super("twitter.com")}static credential(e,t){return Nr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Un.credential(t,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
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
 */async function vI(n,e){return ao(n,"POST","/v1/accounts:signUp",_n(n,e))}/**
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
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await dn._fromIdTokenResponse(e,r,s),o=uh(r);return new xr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=uh(r);return new xr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function uh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class pa extends jt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new pa(e,t,r,s)}}function Lm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pa._fromErrorAndOperation(n,i,e,r):i})}async function _I(n,e,t=!1){const r=await qi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xr._forOperation(n,"link",r)}/**
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
 */async function wI(n,e,t=!1){const{auth:r}=n;if(Jt(r.app))return Promise.reject(pn(r));const s="reauthenticate";try{const i=await qi(n,Lm(r,s,e,n),t);re(i.idToken,r,"internal-error");const o=zl(i.idToken);re(o,r,"internal-error");const{sub:c}=o;return re(n.uid===c,r,"user-mismatch"),xr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),i}}/**
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
 */async function Vm(n,e,t=!1){if(Jt(n.app))return Promise.reject(pn(n));const r="signIn",s=await Lm(n,r,e),i=await xr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function II(n,e){return Vm(tr(n),e)}/**
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
 */async function Om(n){const e=tr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TI(n,e,t){const r=tr(n);await ma(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",hI)}async function EI(n,e,t){if(Jt(n.app))return Promise.reject(pn(n));const r=tr(n),o=await ma(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Om(n),l}),c=await xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function bI(n,e,t){return Jt(n.app)?Promise.reject(pn(n)):II(Ae(n),qs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Om(n),r})}function AI(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function SI(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}function RI(n,e,t,r){return Ae(n).onAuthStateChanged(e,t,r)}function PI(n){return Ae(n).signOut()}const ga="__sak";/**
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
 */class Mm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ga,"1"),this.storage.removeItem(ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CI=1e3,kI=10;class Bm extends Mm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Kw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},CI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bm.type="LOCAL";const DI=Bm;/**
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
 */class Fm extends Mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fm.type="SESSION";const $m=Fm;/**
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
 */function NI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class $a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new $a(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await NI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$a.receivers=[];/**
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
 */function Yl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class xI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Yl("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===u)switch(y.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function LI(n){tn().location.href=n}/**
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
 */function Um(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function VI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function MI(){return Um()?self:null}/**
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
 */const jm="firebaseLocalStorageDb",BI=1,ya="firebaseLocalStorage",qm="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ua(n,e){return n.transaction([ya],e?"readwrite":"readonly").objectStore(ya)}function FI(){const n=indexedDB.deleteDatabase(jm);return new lo(n).toPromise()}function ll(){const n=indexedDB.open(jm,BI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ya,{keyPath:qm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ya)?e(r):(r.close(),await FI(),e(await ll()))})})}async function dh(n,e,t){const r=Ua(n,!0).put({[qm]:e,value:t});return new lo(r).toPromise()}async function $I(n,e){const t=Ua(n,!1).get(e),r=await new lo(t).toPromise();return r===void 0?null:r.value}function hh(n,e){const t=Ua(n,!0).delete(e);return new lo(t).toPromise()}const UI=800,jI=3;class Gm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ll(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$a._getInstance(MI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await VI(),!this.activeServiceWorker)return;this.sender=new xI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ll();return await dh(e,ga,"1"),await hh(e,ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>$I(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ua(s,!1).getAll();return new lo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gm.type="LOCAL";const qI=Gm;new oo(3e4,6e4);/**
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
 */function GI(n,e){return e?hn(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Jl extends Wl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,t){return As(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function KI(n){return Vm(n.auth,new Jl(n),n.bypassAuthState)}function zI(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),wI(t,new Jl(n),n.bypassAuthState)}async function HI(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),_I(t,new Jl(n),n.bypassAuthState)}/**
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
 */class Km{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KI;case"linkViaPopup":case"linkViaRedirect":return HI;case"reauthViaPopup":case"reauthViaRedirect":return zI;default:$t(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WI=new oo(2e3,1e4);class Is extends Km{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WI.get())};e()}}Is.currentPopupAction=null;/**
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
 */const QI="pendingRedirect",Wo=new Map;class YI extends Km{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const r=await JI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JI(n,e){const t=eT(e),r=ZI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function XI(n,e){Wo.set(n._key(),e)}function ZI(n){return hn(n._redirectPersistence)}function eT(n){return Ho(QI,n.config.apiKey,n.name)}async function tT(n,e,t=!1){if(Jt(n.app))return Promise.reject(pn(n));const r=tr(n),s=GI(r,e),o=await new YI(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nT=10*60*1e3;class rT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!zm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(en(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nT&&this.cachedEventUids.clear(),this.cachedEventUids.has(fh(e))}saveEventToCache(e){this.cachedEventUids.add(fh(e)),this.lastProcessedEventTime=Date.now()}}function fh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zm(n);default:return!1}}/**
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
 */async function iT(n,e={}){return wn(n,"GET","/v1/projects",e)}/**
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
 */const oT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aT=/^https?/;async function cT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await iT(n);for(const t of e)try{if(lT(t))return}catch{}$t(n,"unauthorized-domain")}function lT(n){const e=al(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!aT.test(t))return!1;if(oT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const uT=new oo(3e4,6e4);function mh(){const n=tn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dT(n){return new Promise((e,t)=>{var r,s,i;function o(){mh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mh(),t(en(n,"network-request-failed"))},timeout:uT.get()})}if(!((s=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tn().gapi)===null||i===void 0)&&i.load)o();else{const c=eI("iframefcb");return tn()[c]=()=>{gapi.load?o():t(en(n,"network-request-failed"))},Dm(`${Zw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Qo=null,e})}let Qo=null;function hT(n){return Qo=Qo||dT(n),Qo}/**
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
 */const fT=new oo(5e3,15e3),mT="__/auth/iframe",pT="emulator/auth/iframe",gT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vT(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Kl(e,pT):`https://${n.config.authDomain}/${mT}`,r={apiKey:e.apiKey,appName:n.name,v:Wr},s=yT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${io(r).slice(1)}`}async function _T(n){const e=await hT(n),t=tn().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:vT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=en(n,"network-request-failed"),c=tn().setTimeout(()=>{i(o)},fT.get());function l(){tn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const wT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IT=500,TT=600,ET="_blank",bT="http://localhost";class ph{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AT(n,e,t,r=IT,s=TT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},wT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=He().toLowerCase();t&&(c=bm(u)?ET:t),Tm(u)&&(e=e||bT,l.scrollbars="yes");const h=Object.entries(l).reduce((y,[w,A])=>`${y}${w}=${A},`,"");if(Gw(u)&&c!=="_self")return ST(e||"",c),new ph(null);const p=window.open(e||"",c,h);re(p,n,"popup-blocked");try{p.focus()}catch{}return new ph(p)}function ST(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const RT="__/auth/handler",PT="emulator/auth/handler",CT=encodeURIComponent("fac");async function gh(n,e,t,r,s,i){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Wr,eventId:s};if(e instanceof xm){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",f_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof co){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await n._getAppCheckToken(),u=l?`#${CT}=${encodeURIComponent(l)}`:"";return`${kT(n)}?${io(c).slice(1)}${u}`}function kT({config:n}){return n.emulator?Kl(n,PT):`https://${n.authDomain}/${RT}`}/**
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
 */const $c="webStorageSupport";class DT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$m,this._completeRedirectFn=tT,this._overrideRedirectResult=XI}async _openPopup(e,t,r,s){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await gh(e,t,r,al(),s);return AT(e,o,Yl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await gh(e,t,r,al(),s);return LI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await _T(e),r=new rT(e);return t.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($c,{type:$c},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$c];o!==void 0&&t(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cm()||Em()||Hl()}}const NT=DT;var yh="@firebase/auth",vh="1.7.9";/**
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
 */class xT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VT(n){Ft(new xt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:km(n)},u=new Yw(r,s,i,l);return iI(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ft(new xt("auth-internal",e=>{const t=tr(e.getProvider("auth").getImmediate());return(r=>new xT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(yh,vh,LT(n)),Et(yh,vh,"esm2017")}/**
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
 */const OT=5*60,MT=im("authIdTokenMaxAge")||OT;let _h=null;const BT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>MT)return;const s=t==null?void 0:t.token;_h!==s&&(_h=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FT(n=jl()){const e=Hr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sI(n,{popupRedirectResolver:NT,persistence:[qI,DI,$m]}),r=im("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=BT(i.toString());SI(t,o,()=>o(t.currentUser)),AI(t,c=>o(c))}}const s=rm("auth");return s&&oI(t,`http://${s}`),t}function $T(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Jw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",$T().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VT("Browser");var wh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,Hm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function T(){}T.prototype=_.prototype,b.D=_.prototype,b.prototype=new T,b.prototype.constructor=b,b.C=function(S,E,R){for(var I=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)I[Re-2]=arguments[Re];return _.prototype[E].apply(S,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,T){T||(T=0);var S=Array(16);if(typeof _=="string")for(var E=0;16>E;++E)S[E]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(E=0;16>E;++E)S[E]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=b.g[0],T=b.g[1],E=b.g[2];var R=b.g[3],I=_+(R^T&(E^R))+S[0]+3614090360&4294967295;_=T+(I<<7&4294967295|I>>>25),I=R+(E^_&(T^E))+S[1]+3905402710&4294967295,R=_+(I<<12&4294967295|I>>>20),I=E+(T^R&(_^T))+S[2]+606105819&4294967295,E=R+(I<<17&4294967295|I>>>15),I=T+(_^E&(R^_))+S[3]+3250441966&4294967295,T=E+(I<<22&4294967295|I>>>10),I=_+(R^T&(E^R))+S[4]+4118548399&4294967295,_=T+(I<<7&4294967295|I>>>25),I=R+(E^_&(T^E))+S[5]+1200080426&4294967295,R=_+(I<<12&4294967295|I>>>20),I=E+(T^R&(_^T))+S[6]+2821735955&4294967295,E=R+(I<<17&4294967295|I>>>15),I=T+(_^E&(R^_))+S[7]+4249261313&4294967295,T=E+(I<<22&4294967295|I>>>10),I=_+(R^T&(E^R))+S[8]+1770035416&4294967295,_=T+(I<<7&4294967295|I>>>25),I=R+(E^_&(T^E))+S[9]+2336552879&4294967295,R=_+(I<<12&4294967295|I>>>20),I=E+(T^R&(_^T))+S[10]+4294925233&4294967295,E=R+(I<<17&4294967295|I>>>15),I=T+(_^E&(R^_))+S[11]+2304563134&4294967295,T=E+(I<<22&4294967295|I>>>10),I=_+(R^T&(E^R))+S[12]+1804603682&4294967295,_=T+(I<<7&4294967295|I>>>25),I=R+(E^_&(T^E))+S[13]+4254626195&4294967295,R=_+(I<<12&4294967295|I>>>20),I=E+(T^R&(_^T))+S[14]+2792965006&4294967295,E=R+(I<<17&4294967295|I>>>15),I=T+(_^E&(R^_))+S[15]+1236535329&4294967295,T=E+(I<<22&4294967295|I>>>10),I=_+(E^R&(T^E))+S[1]+4129170786&4294967295,_=T+(I<<5&4294967295|I>>>27),I=R+(T^E&(_^T))+S[6]+3225465664&4294967295,R=_+(I<<9&4294967295|I>>>23),I=E+(_^T&(R^_))+S[11]+643717713&4294967295,E=R+(I<<14&4294967295|I>>>18),I=T+(R^_&(E^R))+S[0]+3921069994&4294967295,T=E+(I<<20&4294967295|I>>>12),I=_+(E^R&(T^E))+S[5]+3593408605&4294967295,_=T+(I<<5&4294967295|I>>>27),I=R+(T^E&(_^T))+S[10]+38016083&4294967295,R=_+(I<<9&4294967295|I>>>23),I=E+(_^T&(R^_))+S[15]+3634488961&4294967295,E=R+(I<<14&4294967295|I>>>18),I=T+(R^_&(E^R))+S[4]+3889429448&4294967295,T=E+(I<<20&4294967295|I>>>12),I=_+(E^R&(T^E))+S[9]+568446438&4294967295,_=T+(I<<5&4294967295|I>>>27),I=R+(T^E&(_^T))+S[14]+3275163606&4294967295,R=_+(I<<9&4294967295|I>>>23),I=E+(_^T&(R^_))+S[3]+4107603335&4294967295,E=R+(I<<14&4294967295|I>>>18),I=T+(R^_&(E^R))+S[8]+1163531501&4294967295,T=E+(I<<20&4294967295|I>>>12),I=_+(E^R&(T^E))+S[13]+2850285829&4294967295,_=T+(I<<5&4294967295|I>>>27),I=R+(T^E&(_^T))+S[2]+4243563512&4294967295,R=_+(I<<9&4294967295|I>>>23),I=E+(_^T&(R^_))+S[7]+1735328473&4294967295,E=R+(I<<14&4294967295|I>>>18),I=T+(R^_&(E^R))+S[12]+2368359562&4294967295,T=E+(I<<20&4294967295|I>>>12),I=_+(T^E^R)+S[5]+4294588738&4294967295,_=T+(I<<4&4294967295|I>>>28),I=R+(_^T^E)+S[8]+2272392833&4294967295,R=_+(I<<11&4294967295|I>>>21),I=E+(R^_^T)+S[11]+1839030562&4294967295,E=R+(I<<16&4294967295|I>>>16),I=T+(E^R^_)+S[14]+4259657740&4294967295,T=E+(I<<23&4294967295|I>>>9),I=_+(T^E^R)+S[1]+2763975236&4294967295,_=T+(I<<4&4294967295|I>>>28),I=R+(_^T^E)+S[4]+1272893353&4294967295,R=_+(I<<11&4294967295|I>>>21),I=E+(R^_^T)+S[7]+4139469664&4294967295,E=R+(I<<16&4294967295|I>>>16),I=T+(E^R^_)+S[10]+3200236656&4294967295,T=E+(I<<23&4294967295|I>>>9),I=_+(T^E^R)+S[13]+681279174&4294967295,_=T+(I<<4&4294967295|I>>>28),I=R+(_^T^E)+S[0]+3936430074&4294967295,R=_+(I<<11&4294967295|I>>>21),I=E+(R^_^T)+S[3]+3572445317&4294967295,E=R+(I<<16&4294967295|I>>>16),I=T+(E^R^_)+S[6]+76029189&4294967295,T=E+(I<<23&4294967295|I>>>9),I=_+(T^E^R)+S[9]+3654602809&4294967295,_=T+(I<<4&4294967295|I>>>28),I=R+(_^T^E)+S[12]+3873151461&4294967295,R=_+(I<<11&4294967295|I>>>21),I=E+(R^_^T)+S[15]+530742520&4294967295,E=R+(I<<16&4294967295|I>>>16),I=T+(E^R^_)+S[2]+3299628645&4294967295,T=E+(I<<23&4294967295|I>>>9),I=_+(E^(T|~R))+S[0]+4096336452&4294967295,_=T+(I<<6&4294967295|I>>>26),I=R+(T^(_|~E))+S[7]+1126891415&4294967295,R=_+(I<<10&4294967295|I>>>22),I=E+(_^(R|~T))+S[14]+2878612391&4294967295,E=R+(I<<15&4294967295|I>>>17),I=T+(R^(E|~_))+S[5]+4237533241&4294967295,T=E+(I<<21&4294967295|I>>>11),I=_+(E^(T|~R))+S[12]+1700485571&4294967295,_=T+(I<<6&4294967295|I>>>26),I=R+(T^(_|~E))+S[3]+2399980690&4294967295,R=_+(I<<10&4294967295|I>>>22),I=E+(_^(R|~T))+S[10]+4293915773&4294967295,E=R+(I<<15&4294967295|I>>>17),I=T+(R^(E|~_))+S[1]+2240044497&4294967295,T=E+(I<<21&4294967295|I>>>11),I=_+(E^(T|~R))+S[8]+1873313359&4294967295,_=T+(I<<6&4294967295|I>>>26),I=R+(T^(_|~E))+S[15]+4264355552&4294967295,R=_+(I<<10&4294967295|I>>>22),I=E+(_^(R|~T))+S[6]+2734768916&4294967295,E=R+(I<<15&4294967295|I>>>17),I=T+(R^(E|~_))+S[13]+1309151649&4294967295,T=E+(I<<21&4294967295|I>>>11),I=_+(E^(T|~R))+S[4]+4149444226&4294967295,_=T+(I<<6&4294967295|I>>>26),I=R+(T^(_|~E))+S[11]+3174756917&4294967295,R=_+(I<<10&4294967295|I>>>22),I=E+(_^(R|~T))+S[2]+718787259&4294967295,E=R+(I<<15&4294967295|I>>>17),I=T+(R^(E|~_))+S[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(E+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var T=_-this.blockSize,S=this.B,E=this.h,R=0;R<_;){if(E==0)for(;R<=T;)s(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<_;)if(S[E++]=b.charCodeAt(R++),E==this.blockSize){s(this,S),E=0;break}}else for(;R<_;)if(S[E++]=b[R++],E==this.blockSize){s(this,S),E=0;break}}this.h=E,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var T=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=T&255,T/=256;for(this.u(b),b=Array(16),_=T=0;4>_;++_)for(var S=0;32>S;S+=8)b[T++]=this.g[_]>>>S&255;return b};function i(b,_){var T=c;return Object.prototype.hasOwnProperty.call(T,b)?T[b]:T[b]=_(b)}function o(b,_){this.h=_;for(var T=[],S=!0,E=b.length-1;0<=E;E--){var R=b[E]|0;S&&R==_||(T[E]=R,S=!1)}this.g=T}var c={};function l(b){return-128<=b&&128>b?i(b,function(_){return new o([_|0],0>_?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return D(u(-b));for(var _=[],T=1,S=0;b>=T;S++)_[S]=b/T|0,T*=4294967296;return new o(_,0)}function h(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return D(h(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(_,8)),S=p,E=0;E<b.length;E+=8){var R=Math.min(8,b.length-E),I=parseInt(b.substring(E,E+R),_);8>R?(R=u(Math.pow(_,R)),S=S.j(R).add(u(I))):(S=S.j(T),S=S.add(u(I)))}return S}var p=l(0),y=l(1),w=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-D(this).m();for(var b=0,_=1,T=0;T<this.g.length;T++){var S=this.i(T);b+=(0<=S?S:4294967296+S)*_,_*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(P(this))return"-"+D(this).toString(b);for(var _=u(Math.pow(b,6)),T=this,S="";;){var E=B(T,_).g;T=O(T,E.j(_));var R=((0<T.g.length?T.g[0]:T.h)>>>0).toString(b);if(T=E,A(T))return R+S;for(;6>R.length;)R="0"+R;S=R+S}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=O(this,b),P(b)?-1:A(b)?0:1};function D(b){for(var _=b.g.length,T=[],S=0;S<_;S++)T[S]=~b.g[S];return new o(T,~b.h).add(y)}n.abs=function(){return P(this)?D(this):this},n.add=function(b){for(var _=Math.max(this.g.length,b.g.length),T=[],S=0,E=0;E<=_;E++){var R=S+(this.i(E)&65535)+(b.i(E)&65535),I=(R>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);S=I>>>16,R&=65535,I&=65535,T[E]=I<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function O(b,_){return b.add(D(_))}n.j=function(b){if(A(this)||A(b))return p;if(P(this))return P(b)?D(this).j(D(b)):D(D(this).j(b));if(P(b))return D(this.j(D(b)));if(0>this.l(w)&&0>b.l(w))return u(this.m()*b.m());for(var _=this.g.length+b.g.length,T=[],S=0;S<2*_;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var E=0;E<b.g.length;E++){var R=this.i(S)>>>16,I=this.i(S)&65535,Re=b.i(E)>>>16,Qe=b.i(E)&65535;T[2*S+2*E]+=I*Qe,F(T,2*S+2*E),T[2*S+2*E+1]+=R*Qe,F(T,2*S+2*E+1),T[2*S+2*E+1]+=I*Re,F(T,2*S+2*E+1),T[2*S+2*E+2]+=R*Re,F(T,2*S+2*E+2)}for(S=0;S<_;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=_;S<2*_;S++)T[S]=0;return new o(T,0)};function F(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function L(b,_){this.g=b,this.h=_}function B(b,_){if(A(_))throw Error("division by zero");if(A(b))return new L(p,p);if(P(b))return _=B(D(b),_),new L(D(_.g),D(_.h));if(P(_))return _=B(b,D(_)),new L(D(_.g),_.h);if(30<b.g.length){if(P(b)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var T=y,S=_;0>=S.l(b);)T=ne(T),S=ne(S);var E=X(T,1),R=X(S,1);for(S=X(S,2),T=X(T,2);!A(S);){var I=R.add(S);0>=I.l(b)&&(E=E.add(T),R=I),S=X(S,1),T=X(T,1)}return _=O(b,E.j(_)),new L(E,_)}for(E=p;0<=b.l(_);){for(T=Math.max(1,Math.floor(b.m()/_.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),R=u(T),I=R.j(_);P(I)||0<I.l(b);)T-=S,R=u(T),I=R.j(_);A(R)&&(R=y),E=E.add(R),b=O(b,I)}return new L(E,b)}n.A=function(b){return B(this,b).h},n.and=function(b){for(var _=Math.max(this.g.length,b.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)&b.i(S);return new o(T,this.h&b.h)},n.or=function(b){for(var _=Math.max(this.g.length,b.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)|b.i(S);return new o(T,this.h|b.h)},n.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)^b.i(S);return new o(T,this.h^b.h)};function ne(b){for(var _=b.g.length+1,T=[],S=0;S<_;S++)T[S]=b.i(S)<<1|b.i(S-1)>>>31;return new o(T,b.h)}function X(b,_){var T=_>>5;_%=32;for(var S=b.g.length-T,E=[],R=0;R<S;R++)E[R]=0<_?b.i(R+T)>>>_|b.i(R+T+1)<<32-_:b.i(R+T);return new o(E,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Hm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Rr=o}).apply(typeof wh<"u"?wh:typeof self<"u"?self:typeof window<"u"?window:{});var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wm,Ai,Qm,Yo,ul,Ym,Jm,Xm;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bo=="object"&&Bo];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var C=a[v];if(!(C in f))break e;f=f[C]}a=a[a.length-1],v=f[a],d=d(v),d!=v&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,v=!1,C={next:function(){if(!v&&f<a.length){var N=f++;return{value:d(N,a[N]),done:!1}}return v=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,v),a.apply(d,C)}}return function(){return a.apply(d,arguments)}}function y(a,d,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,y.apply(null,arguments)}function w(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function A(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,C,N){for(var U=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)U[ve-2]=arguments[ve];return d.prototype[C].apply(v,U)}}function P(a){const d=a.length;if(0<d){const f=Array(d);for(let v=0;v<d;v++)f[v]=a[v];return f}return[]}function D(a,d){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(l(v)){const C=a.length||0,N=v.length||0;a.length=C+N;for(let U=0;U<N;U++)a[C+U]=v[U]}else a.push(v)}}class O{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function F(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var ne=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function X(a,d,f){for(const v in a)d.call(f,a[v],v,a)}function b(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function _(a){const d={};for(const f in a)d[f]=a[f];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,d){let f,v;for(let C=1;C<arguments.length;C++){v=arguments[C];for(f in v)a[f]=v[f];for(let N=0;N<T.length;N++)f=T[N],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function E(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function R(a){c.setTimeout(()=>{throw a},0)}function I(){var a=Je;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Re{constructor(){this.h=this.g=null}add(d,f){const v=Qe.get();v.set(d,f),this.h?this.h.next=v:this.g=v,this.h=v}}var Qe=new O(()=>new cr,a=>a.reset());class cr{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ye,bt=!1,Je=new Re,To=()=>{const a=c.Promise.resolve(void 0);Ye=()=>{a.then(Ic)}};var Ic=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){R(f)}var d=Qe;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}bt=!1};function Gt(){this.s=this.s,this.C=this.C}Gt.prototype.s=!1,Gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Xs=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,d),c.removeEventListener("test",f,d)}catch{}return a}();function Tn(a,d){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(ne){e:{try{B(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:En[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Tn.aa.h.call(this)}}A(Tn,je);var En={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),Zs=0;function lr(a,d,f,v,C){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!v,this.ha=C,this.key=++Zs,this.da=this.fa=!1}function bn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function zt(a){this.src=a,this.g={},this.h=0}zt.prototype.add=function(a,d,f,v,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var U=An(a,d,v,C);return-1<U?(d=a[U],f||(d.fa=!1)):(d=new lr(d,this.src,N,!!v,C),d.fa=f,a.push(d)),d};function ts(a,d){var f=d.type;if(f in a.g){var v=a.g[f],C=Array.prototype.indexOf.call(v,d,void 0),N;(N=0<=C)&&Array.prototype.splice.call(v,C,1),N&&(bn(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function An(a,d,f,v){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==d&&N.capture==!!f&&N.ha==v)return C}return-1}var Sn="closure_lm_"+(1e6*Math.random()|0),ur={};function ns(a,d,f,v,C){if(Array.isArray(d)){for(var N=0;N<d.length;N++)ns(a,d[N],f,v,C);return null}return f=ss(f),a&&a[Kt]?a.K(d,f,u(v)?!!v.capture:!1,C):Tc(a,d,f,!1,v,C)}function Tc(a,d,f,v,C,N){if(!d)throw Error("Invalid event type");var U=u(C)?!!C.capture:!!C,ve=we(a);if(ve||(a[Sn]=ve=new zt(a)),f=ve.add(d,f,v,U,N),f.proxy)return f;if(v=At(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)Xs||(C=U),C===void 0&&(C=!1),a.addEventListener(d.toString(),v,C);else if(a.attachEvent)a.attachEvent(dr(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function At(){function a(f){return d.call(a.src,a.listener,f)}const d=rs;return a}function ei(a,d,f,v,C){if(Array.isArray(d))for(var N=0;N<d.length;N++)ei(a,d[N],f,v,C);else v=u(v)?!!v.capture:!!v,f=ss(f),a&&a[Kt]?(a=a.i,d=String(d).toString(),d in a.g&&(N=a.g[d],f=An(N,f,v,C),-1<f&&(bn(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[d],a.h--)))):a&&(a=we(a))&&(d=a.g[d.toString()],a=-1,d&&(a=An(d,f,v,C)),(f=-1<a?d[a]:null)&&Rn(f))}function Rn(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Kt])ts(d.i,a);else{var f=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(f,v,a.capture):d.detachEvent?d.detachEvent(dr(f),v):d.addListener&&d.removeListener&&d.removeListener(v),(f=we(d))?(ts(f,a),f.h==0&&(f.src=null,d[Sn]=null)):bn(a)}}}function dr(a){return a in ur?ur[a]:ur[a]="on"+a}function rs(a,d){if(a.da)a=!0;else{d=new Tn(d,this);var f=a.listener,v=a.ha||a.src;a.fa&&Rn(a),a=f.call(v,d)}return a}function we(a){return a=a[Sn],a instanceof zt?a:null}var ti="__closure_events_fn_"+(1e9*Math.random()>>>0);function ss(a){return typeof a=="function"?a:(a[ti]||(a[ti]=function(d){return a.handleEvent(d)}),a[ti])}function pe(){Gt.call(this),this.i=new zt(this),this.M=this,this.F=null}A(pe,Gt),pe.prototype[Kt]=!0,pe.prototype.removeEventListener=function(a,d,f,v){ei(this,a,d,f,v)};function Pe(a,d){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new je(d,a);else if(d instanceof je)d.target=d.target||a;else{var C=d;d=new je(v,a),S(d,C)}if(C=!0,f)for(var N=f.length-1;0<=N;N--){var U=d.g=f[N];C=hr(U,v,!0,d)&&C}if(U=d.g=a,C=hr(U,v,!0,d)&&C,C=hr(U,v,!1,d)&&C,f)for(N=0;N<f.length;N++)U=d.g=f[N],C=hr(U,v,!1,d)&&C}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],v=0;v<f.length;v++)bn(f[v]);delete a.g[d],a.h--}}this.F=null},pe.prototype.K=function(a,d,f,v){return this.i.add(String(a),d,!1,f,v)},pe.prototype.L=function(a,d,f,v){return this.i.add(String(a),d,!0,f,v)};function hr(a,d,f,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,N=0;N<d.length;++N){var U=d[N];if(U&&!U.da&&U.capture==f){var ve=U.listener,tt=U.ha||U.src;U.fa&&ts(a.i,U),C=ve.call(tt,v)!==!1&&C}}return C&&!v.defaultPrevented}function ni(a,d,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function ri(a){a.g=ni(()=>{a.g=null,a.i&&(a.i=!1,ri(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Eo extends Gt{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ri(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(a){Gt.call(this),this.h=a,this.g={}}A(Pn,Gt);var si=[];function ii(a){X(a.g,function(d,f){this.g.hasOwnProperty(f)&&Rn(d)},a),a.g={}}Pn.prototype.N=function(){Pn.aa.N.call(this),ii(this)},Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var is=c.JSON.stringify,bo=c.JSON.parse,Ao=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function os(){}os.prototype.h=null;function oi(a){return a.h||(a.h=a.i())}function ai(){}var Cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function as(){je.call(this,"d")}A(as,je);function cs(){je.call(this,"c")}A(cs,je);var V={},$=null;function z(){return $=$||new pe}V.La="serverreachability";function W(a){je.call(this,V.La,a)}A(W,je);function J(a){const d=z();Pe(d,new W(d))}V.STAT_EVENT="statevent";function ie(a,d){je.call(this,V.STAT_EVENT,a),this.stat=d}A(ie,je);function ae(a){const d=z();Pe(d,new ie(d,a))}V.Ma="timingevent";function me(a,d){je.call(this,V.Ma,a),this.size=d}A(me,je);function Te(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function oe(){this.g=!0}oe.prototype.xa=function(){this.g=!1};function Ce(a,d,f,v,C,N){a.info(function(){if(a.g)if(N)for(var U="",ve=N.split("&"),tt=0;tt<ve.length;tt++){var he=ve[tt].split("=");if(1<he.length){var it=he[0];he=he[1];var ot=it.split("_");U=2<=ot.length&&ot[1]=="type"?U+(it+"="+he+"&"):U+(it+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+v+") [attempt "+C+"]: "+d+`
`+f+`
`+U})}function Ht(a,d,f,v,C,N,U){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+C+"]: "+d+`
`+f+`
`+N+" "+U})}function ke(a,d,f,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+_t(a,f)+(v?" "+v:"")})}function Fe(a,d){a.info(function(){return"TIMEOUT: "+d})}oe.prototype.info=function(){};function _t(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var C=v[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<C.length;U++)C[U]=""}}}}return is(f)}catch{return d}}var Nt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xe={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},st;function Ot(){}A(Ot,os),Ot.prototype.g=function(){return new XMLHttpRequest},Ot.prototype.i=function(){return{}},st=new Ot;function Xe(a,d,f,v){this.j=a,this.i=d,this.l=f,this.R=v||1,this.U=new Pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fr}function fr(){this.i=null,this.g="",this.h=!1}var ft={},et={};function kn(a,d,f){a.L=1,a.v=Po(an(d)),a.m=f,a.P=!0,Dn(a,null)}function Dn(a,d){a.F=Date.now(),Le(a),a.A=an(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Ed(f.i,"t",v),a.C=0,f=a.j.J,a.h=new fr,a.g=Ud(a.j,f?d:null,!a.m),0<a.O&&(a.M=new Eo(y(a.Y,a,a.g),a.O)),d=a.U,f=a.g,v=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(si[0]=C.toString()),C=si);for(var N=0;N<C.length;N++){var U=ns(f,C[N],v||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),J(),Ce(a.i,a.u,a.A,a.l,a.R,a.m)}Xe.prototype.ca=function(a){a=a.target;const d=this.M;d&&cn(a)==3?d.j():this.Y(a)},Xe.prototype.Y=function(a){try{if(a==this.g)e:{const ot=cn(this.g);var d=this.g.Ba();const ds=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||kd(this.g)))){this.J||ot!=4||d==7||(d==8||0>=ds?J(3):J(2)),bc(this);var f=this.g.Z();this.X=f;t:if(mr(this)){var v=kd(this.g);a="";var C=v.length,N=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),ci(this);var U="";break t}this.h.i=new c.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(N&&d==C-1)});v.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,Ht(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,tt=this.g;if((ve=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ve)){var he=ve;break t}}he=null}if(f=he)ke(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ac(this,f);else{this.o=!1,this.s=3,ae(12),pr(this),ci(this);break e}}if(this.P){f=!0;let Mt;for(;!this.J&&this.C<U.length;)if(Mt=Ec(this,U),Mt==et){ot==4&&(this.s=4,ae(14),f=!1),ke(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==ft){this.s=4,ae(15),ke(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else ke(this.i,this.l,Mt,null),Ac(this,Mt);if(mr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||U.length!=0||this.h.h||(this.s=1,ae(16),f=!1),this.o=this.o&&f,!f)ke(this.i,this.l,U,"[Invalid Chunked Response]"),pr(this),ci(this);else if(0<U.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Dc(it),it.M=!0,ae(11))}}else ke(this.i,this.l,U,null),Ac(this,U);ot==4&&pr(this),this.o&&!this.J&&(ot==4?Md(this.j,this):(this.o=!1,Le(this)))}else Kv(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,ae(12)):(this.s=0,ae(13)),pr(this),ci(this)}}}catch{}finally{}};function mr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ec(a,d){var f=a.C,v=d.indexOf(`
`,f);return v==-1?et:(f=Number(d.substring(f,v)),isNaN(f)?ft:(v+=1,v+f>d.length?et:(d=d.slice(v,v+f),a.C=v+f,d)))}Xe.prototype.cancel=function(){this.J=!0,pr(this)};function Le(a){a.S=Date.now()+a.I,Nn(a,a.I)}function Nn(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Te(y(a.ba,a),d)}function bc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Xe.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Fe(this.i,this.A),this.L!=2&&(J(),ae(17)),pr(this),this.s=2,ci(this)):Nn(this,this.S-a)};function ci(a){a.j.G==0||a.J||Md(a.j,a)}function pr(a){bc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,ii(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Ac(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Sc(f.h,a))){if(!a.K&&Sc(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var C=v;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Lo(f),No(f);else break e;kc(f),ae(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Te(y(f.Za,f),6e3));if(1>=md(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else yr(f,11)}else if((a.K||f.g==a)&&Lo(f),!F(d))for(C=f.Da.g.parse(d),d=0;d<C.length;d++){let he=C[d];if(f.T=he[0],he=he[1],f.G==2)if(he[0]=="c"){f.K=he[1],f.ia=he[2];const it=he[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const ot=he[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const ds=he[5];ds!=null&&typeof ds=="number"&&0<ds&&(v=1.5*ds,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Mt=a.g;if(Mt){const Oo=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oo){var N=v.h;N.g||Oo.indexOf("spdy")==-1&&Oo.indexOf("quic")==-1&&Oo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Rc(N,N.h),N.h=null))}if(v.D){const Nc=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Nc&&(v.ya=Nc,Ee(v.I,v.D,Nc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var U=a;if(v.qa=$d(v,v.J?v.ia:null,v.W),U.K){pd(v.h,U);var ve=U,tt=v.L;tt&&(ve.I=tt),ve.B&&(bc(ve),Le(ve)),v.g=U}else Vd(v);0<f.i.length&&xo(f)}else he[0]!="stop"&&he[0]!="close"||yr(f,7);else f.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?yr(f,7):Cc(f):he[0]!="noop"&&f.l&&f.l.ta(he),f.v=0)}}J(4)}catch{}}var Cv=class{constructor(a,d){this.g=a,this.map=d}};function hd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function md(a){return a.h?1:a.g?a.g.size:0}function Sc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Rc(a,d){a.g?a.g.add(d):a.h=d}function pd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}hd.prototype.cancel=function(){if(this.i=gd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return P(a.i)}function kv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],f=a.length,v=0;v<f;v++)d.push(a[v]);return d}d=[],f=0;for(v in a)d[f++]=a[v];return d}function Dv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const v in a)d[f++]=v;return d}}}function yd(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=Dv(a),v=kv(a),C=v.length,N=0;N<C;N++)d.call(void 0,v[N],f&&f[N],a)}var vd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nv(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),C=null;if(0<=v){var N=a[f].substring(0,v);C=a[f].substring(v+1)}else N=a[f];d(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,So(this,a.j),this.o=a.o,this.g=a.g,Ro(this,a.s),this.l=a.l;var d=a.i,f=new di;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),_d(this,f),this.m=a.m}else a&&(d=String(a).match(vd))?(this.h=!1,So(this,d[1]||"",!0),this.o=li(d[2]||""),this.g=li(d[3]||"",!0),Ro(this,d[4]),this.l=li(d[5]||"",!0),_d(this,d[6]||"",!0),this.m=li(d[7]||"")):(this.h=!1,this.i=new di(null,this.h))}gr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(ui(d,wd,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(ui(d,wd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ui(f,f.charAt(0)=="/"?Vv:Lv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ui(f,Mv)),a.join("")};function an(a){return new gr(a)}function So(a,d,f){a.j=f?li(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ro(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function _d(a,d,f){d instanceof di?(a.i=d,Bv(a.i,a.h)):(f||(d=ui(d,Ov)),a.i=new di(d,a.h))}function Ee(a,d,f){a.i.set(d,f)}function Po(a){return Ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function li(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ui(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,xv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wd=/[#\/\?@]/g,Lv=/[#\?:]/g,Vv=/[#\?]/g,Ov=/[#\?@]/g,Mv=/#/g;function di(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function xn(a){a.g||(a.g=new Map,a.h=0,a.i&&Nv(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=di.prototype,n.add=function(a,d){xn(this),this.i=null,a=ls(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Id(a,d){xn(a),d=ls(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Td(a,d){return xn(a),d=ls(a,d),a.g.has(d)}n.forEach=function(a,d){xn(this),this.g.forEach(function(f,v){f.forEach(function(C){a.call(d,C,v,this)},this)},this)},n.na=function(){xn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let v=0;v<d.length;v++){const C=a[v];for(let N=0;N<C.length;N++)f.push(d[v])}return f},n.V=function(a){xn(this);let d=[];if(typeof a=="string")Td(this,a)&&(d=d.concat(this.g.get(ls(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},n.set=function(a,d){return xn(this),this.i=null,a=ls(this,a),Td(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Ed(a,d,f){Id(a,d),0<f.length&&(a.i=null,a.g.set(ls(a,d),P(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var v=d[f];const N=encodeURIComponent(String(v)),U=this.V(v);for(v=0;v<U.length;v++){var C=N;U[v]!==""&&(C+="="+encodeURIComponent(String(U[v]))),a.push(C)}}return this.i=a.join("&")};function ls(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Bv(a,d){d&&!a.j&&(xn(a),a.i=null,a.g.forEach(function(f,v){var C=v.toLowerCase();v!=C&&(Id(this,v),Ed(this,C,f))},a)),a.j=d}function Fv(a,d){const f=new oe;if(c.Image){const v=new Image;v.onload=w(Ln,f,"TestLoadImage: loaded",!0,d,v),v.onerror=w(Ln,f,"TestLoadImage: error",!1,d,v),v.onabort=w(Ln,f,"TestLoadImage: abort",!1,d,v),v.ontimeout=w(Ln,f,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function $v(a,d){const f=new oe,v=new AbortController,C=setTimeout(()=>{v.abort(),Ln(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(N=>{clearTimeout(C),N.ok?Ln(f,"TestPingServer: ok",!0,d):Ln(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),Ln(f,"TestPingServer: error",!1,d)})}function Ln(a,d,f,v,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),v(f)}catch{}}function Uv(){this.g=new Ao}function jv(a,d,f){const v=f||"";try{yd(a,function(C,N){let U=C;u(C)&&(U=is(C)),d.push(v+N+"="+encodeURIComponent(U))})}catch(C){throw d.push(v+"type="+encodeURIComponent("_badmap")),C}}function Co(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Co,os),Co.prototype.g=function(){return new ko(this.l,this.j)},Co.prototype.i=function(a){return function(){return a}}({});function ko(a,d){pe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ko,pe),n=ko.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,fi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?hi(this):fi(this),this.readyState==3&&bd(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,hi(this))},n.Qa=function(a){this.g&&(this.response=a,hi(this))},n.ga=function(){this.g&&hi(this)};function hi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,fi(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function fi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ad(a){let d="";return X(a,function(f,v){d+=v,d+=":",d+=f,d+=`\r
`}),d}function Pc(a,d,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=Ad(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ee(a,d,f))}function Ve(a){pe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ve,pe);var qv=/^https?$/i,Gv=["POST","PUT"];n=Ve.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():st.g(),this.v=this.o?oi(this.o):oi(st),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(N){Sd(this,N);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var C in v)f.set(C,v[C]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const N of v.keys())f.set(N,v.get(N));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Gv,d,void 0))||v||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of f)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cd(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Sd(this,N)}};function Sd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Rd(a),Do(a)}function Rd(a){a.A||(a.A=!0,Pe(a,"complete"),Pe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Pe(this,"complete"),Pe(this,"abort"),Do(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Do(this,!0)),Ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pd(this):this.bb())},n.bb=function(){Pd(this)};function Pd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||cn(a)!=4||a.Z()!=2)){if(a.u&&cn(a)==4)ni(a.Ea,0,a);else if(Pe(a,"readystatechange"),cn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var v;if(v=U===0){var C=String(a.D).match(vd)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),v=!qv.test(C?C.toLowerCase():"")}f=v}if(f)Pe(a,"complete"),Pe(a,"success");else{a.m=6;try{var N=2<cn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Rd(a)}}finally{Do(a)}}}}function Do(a,d){if(a.g){Cd(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Pe(a,"ready");try{f.onreadystatechange=v}catch{}}}function Cd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function cn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),bo(d)}};function kd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Kv(a){const d={};a=(a.g&&2<=cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(F(a[v]))continue;var f=E(a[v]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=d[C]||[];d[C]=N,N.push(f)}b(d,function(v){return v.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Dd(a){this.Aa=0,this.i=[],this.j=new oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mi("baseRetryDelayMs",5e3,a),this.cb=mi("retryDelaySeedMs",1e4,a),this.Wa=mi("forwardChannelMaxRetries",2,a),this.wa=mi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hd(a&&a.concurrentRequestLimit),this.Da=new Uv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Dd.prototype,n.la=8,n.G=1,n.connect=function(a,d,f,v){ae(0),this.W=a,this.H=d||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=$d(this,null,this.W),xo(this)};function Cc(a){if(Nd(a),a.G==3){var d=a.U++,f=an(a.I);if(Ee(f,"SID",a.K),Ee(f,"RID",d),Ee(f,"TYPE","terminate"),pi(a,f),d=new Xe(a,a.j,d),d.L=2,d.v=Po(an(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=d.v,f=!0),f||(d.g=Ud(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Le(d)}Fd(a)}function No(a){a.g&&(Dc(a),a.g.cancel(),a.g=null)}function Nd(a){No(a),a.u&&(c.clearTimeout(a.u),a.u=null),Lo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function xo(a){if(!fd(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ye||To(),bt||(Ye(),bt=!0),Je.add(d,a),a.B=0}}function zv(a,d){return md(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Te(y(a.Ga,a,d),Bd(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Xe(this,this.j,a);let N=this.o;if(this.S&&(N?(N=_(N),S(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Ld(this,C,d),f=an(this.I),Ee(f,"RID",a),Ee(f,"CVER",22),this.D&&Ee(f,"X-HTTP-Session-Id",this.D),pi(this,f),N&&(this.O?d="headers="+encodeURIComponent(String(Ad(N)))+"&"+d:this.m&&Pc(f,this.m,N)),Rc(this.h,C),this.Ua&&Ee(f,"TYPE","init"),this.P?(Ee(f,"$req",d),Ee(f,"SID","null"),C.T=!0,kn(C,f,null)):kn(C,f,d),this.G=2}}else this.G==3&&(a?xd(this,a):this.i.length==0||fd(this.h)||xd(this))};function xd(a,d){var f;d?f=d.l:f=a.U++;const v=an(a.I);Ee(v,"SID",a.K),Ee(v,"RID",f),Ee(v,"AID",a.T),pi(a,v),a.m&&a.o&&Pc(v,a.m,a.o),f=new Xe(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Ld(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Rc(a.h,f),kn(f,v,d)}function pi(a,d){a.H&&X(a.H,function(f,v){Ee(d,v,f)}),a.l&&yd({},function(f,v){Ee(d,v,f)})}function Ld(a,d,f){f=Math.min(a.i.length,f);var v=a.l?y(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const U=["count="+f];N==-1?0<f?(N=C[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let ve=!0;for(let tt=0;tt<f;tt++){let he=C[tt].g;const it=C[tt].map;if(he-=N,0>he)N=Math.max(0,C[tt].g-100),ve=!1;else try{jv(it,U,"req"+he+"_")}catch{v&&v(it)}}if(ve){v=U.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,v}function Vd(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ye||To(),bt||(Ye(),bt=!0),Je.add(d,a),a.v=0}}function kc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Te(y(a.Fa,a),Bd(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Od(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Te(y(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ae(10),No(this),Od(this))};function Dc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Od(a){a.g=new Xe(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=an(a.qa);Ee(d,"RID","rpc"),Ee(d,"SID",a.K),Ee(d,"AID",a.T),Ee(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ee(d,"TO",a.ja),Ee(d,"TYPE","xmlhttp"),pi(a,d),a.m&&a.o&&Pc(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Po(an(d)),f.m=null,f.P=!0,Dn(f,a)}n.Za=function(){this.C!=null&&(this.C=null,No(this),kc(this),ae(19))};function Lo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Md(a,d){var f=null;if(a.g==d){Lo(a),Dc(a),a.g=null;var v=2}else if(Sc(a.h,d))f=d.D,pd(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var C=a.B;v=z(),Pe(v,new me(v,f)),xo(a)}else Vd(a);else if(C=d.s,C==3||C==0&&0<d.X||!(v==1&&zv(a,d)||v==2&&kc(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),C){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function Bd(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function yr(a,d){if(a.j.info("Error code "+d),d==2){var f=y(a.fb,a),v=a.Xa;const C=!v;v=new gr(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||So(v,"https"),Po(v),C?Fv(v.toString(),f):$v(v.toString(),f)}else ae(2);a.G=0,a.l&&a.l.sa(d),Fd(a),Nd(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))};function Fd(a){if(a.G=0,a.ka=[],a.l){const d=gd(a.h);(d.length!=0||a.i.length!=0)&&(D(a.ka,d),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function $d(a,d,f){var v=f instanceof gr?an(f):new gr(f);if(v.g!="")d&&(v.g=d+"."+v.g),Ro(v,v.s);else{var C=c.location;v=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var N=new gr(null);v&&So(N,v),d&&(N.g=d),C&&Ro(N,C),f&&(N.l=f),v=N}return f=a.D,d=a.ya,f&&d&&Ee(v,f,d),Ee(v,"VER",a.la),pi(a,v),v}function Ud(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ve(new Co({eb:f})):new Ve(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jd(){}n=jd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vo(){}Vo.prototype.g=function(a,d){return new St(a,d)};function St(a,d){pe.call(this),this.g=new Dd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!F(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!F(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new us(this)}A(St,pe),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Cc(this.g)},St.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=is(a),a=f);d.i.push(new Cv(d.Ya++,a)),d.G==3&&xo(d)},St.prototype.N=function(){this.g.l=null,delete this.j,Cc(this.g),delete this.g,St.aa.N.call(this)};function qd(a){as.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}A(qd,as);function Gd(){cs.call(this),this.status=1}A(Gd,cs);function us(a){this.g=a}A(us,jd),us.prototype.ua=function(){Pe(this.g,"a")},us.prototype.ta=function(a){Pe(this.g,new qd(a))},us.prototype.sa=function(a){Pe(this.g,new Gd)},us.prototype.ra=function(){Pe(this.g,"b")},Vo.prototype.createWebChannel=Vo.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Xm=function(){return new Vo},Jm=function(){return z()},Ym=V,ul={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nt.NO_ERROR=0,Nt.TIMEOUT=8,Nt.HTTP_ERROR=6,Yo=Nt,xe.COMPLETE="complete",Qm=xe,ai.EventType=Cn,Cn.OPEN="a",Cn.CLOSE="b",Cn.ERROR="c",Cn.MESSAGE="d",pe.prototype.listen=pe.prototype.K,Ai=ai,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,Wm=Ve}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});const Ih="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let Gs="10.14.0";/**
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
 */const Lr=new $l("@firebase/firestore");function gs(){return Lr.logLevel}function M(n,...e){if(Lr.logLevel<=le.DEBUG){const t=e.map(Xl);Lr.debug(`Firestore (${Gs}): ${n}`,...t)}}function $e(n,...e){if(Lr.logLevel<=le.ERROR){const t=e.map(Xl);Lr.error(`Firestore (${Gs}): ${n}`,...t)}}function Ki(n,...e){if(Lr.logLevel<=le.WARN){const t=e.map(Xl);Lr.warn(`Firestore (${Gs}): ${n}`,...t)}}function Xl(n){if(typeof n=="string")return n;try{/**
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
 */function Q(n="Unexpected state"){const e=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: `+n;throw $e(e),new Error(e)}function Z(n,e){n||Q()}function Y(n,e){return n}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends jt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class UT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ct.UNAUTHENTICATED))}shutdown(){}}class qT{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new UT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new ct(e)}}class GT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new GT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Z(this.o===void 0);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string"),this.R=t.token,new zT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function WT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Zm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=WT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function Ps(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function ep(n){return n+"\0"}/**
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
 */class Ne{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ne(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ne(0,0))}static max(){return new ee(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zi{constructor(e,t,r){t===void 0?t=0:t>e.length&&Q(),r===void 0?r=e.length-t:r>e.length-t&&Q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return zi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof zi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class fe extends zi{construct(e,t,r){return new fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const QT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends zi{construct(e,t,r){return new De(e,t,r)}static isValidIdentifier(e){return QT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new j(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(t)}static emptyPath(){return new De([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}/**
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
 */class va{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function dl(n){return n.fields.find(e=>e.kind===2)}function wr(n){return n.fields.filter(e=>e.kind!==2)}va.UNKNOWN_ID=-1;class Jo{constructor(e,t){this.fieldPath=e,this.kind=t}}class Hi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Hi(0,kt.min())}}function tp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Ne(t+1,0):new Ne(t,r));return new kt(s,q.empty(),e)}function np(n){return new kt(n.readTime,n.key,-1)}class kt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new kt(ee.min(),q.empty(),-1)}static max(){return new kt(ee.max(),q.empty(),-1)}}function Zl(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
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
 */const rp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nr(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==rp)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
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
 */class ja{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new nn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Li(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=eu(r.target.error);this.V.reject(new Li(e,s))}}static open(e,t,r,s){try{return new ja(t,e.transaction(s,r))}catch(i){throw new Li(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(M("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new JT(t)}}class zn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,zn.S(He())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return M("SimpleDb","Removing database:",e),Ir(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Fl())return!1;if(zn.v())return!0;const e=He(),t=zn.S(e),r=0<t&&t<10,s=ip(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(M("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Li(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new j(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Li(e,o))},s.onupgradeneeded=i=>{M("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{M("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=ja.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next(u=>(c.g(),u)).catch(u=>(c.abort(u),k.reject(u))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,u=l.name!=="FirebaseError"&&o<3;if(M("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ip(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class YT{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ir(this.B.delete())}}class Li extends j{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function rr(n){return n.name==="IndexedDbTransactionError"}class JT{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(M("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(M("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ir(r)}add(e){return M("SimpleDb","ADD",this.store.name,e,e),Ir(this.store.add(e))}get(e){return Ir(this.store.get(e)).next(t=>(t===void 0&&(t=null),M("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return M("SimpleDb","DELETE",this.store.name,e),Ir(this.store.delete(e))}count(){return M("SimpleDb","COUNT",this.store.name),Ir(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new k((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new k((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){M("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new k((r,s)=>{t.onerror=i=>{const o=eu(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new k((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new YT(c),u=t(c.primaryKey,c.value,l);if(u instanceof k){const h=u.catch(p=>(l.done(),k.reject(p)));r.push(h)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>k.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ir(n){return new k((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=eu(r.target.error);t(s)}})}let Th=!1;function eu(n){const e=zn.S(He());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Th||(Th=!0,setTimeout(()=>{throw r},0)),r}}return n}class XT{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){M("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{M("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){rr(t)?M("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await nr(t)}await this.X(6e4)})}}class ZT{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return k.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return M("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(M("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=np(i);Zl(o,r)>0&&(r=o)}),new kt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class It{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}It.oe=-1;function qa(n){return n==null}function Wi(n){return n===0&&1/n==-1/0}function op(n){return typeof n=="number"&&Number.isInteger(n)&&!Wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function gt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Eh(e)),e=eE(n.get(t),e);return Eh(e)}function eE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Eh(n){return n+""}function Xt(n){const e=n.length;if(Z(e>=2),e===2)return Z(n.charAt(0)===""&&n.charAt(1)===""),fe.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&Q(),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:Q()}i=o+2}return new fe(r)}/**
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
 */const bh=["userId","batchId"];/**
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
 */function Xo(n,e){return[n,gt(e)]}function ap(n,e,t){return[n,gt(e),t]}const tE={},nE=["prefixPath","collectionGroup","readTime","documentId"],rE=["prefixPath","collectionGroup","documentId"],sE=["collectionGroup","readTime","prefixPath","documentId"],iE=["canonicalId","targetId"],oE=["targetId","path"],aE=["path","targetId"],cE=["collectionId","parent"],lE=["indexId","uid"],uE=["uid","sequenceNumber"],dE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],hE=["indexId","uid","orderedDocumentKey"],fE=["userId","collectionPath","documentId"],mE=["userId","collectionPath","largestBatchId"],pE=["userId","collectionGroup","largestBatchId"],cp=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],gE=[...cp,"documentOverlays"],lp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],up=lp,tu=[...up,"indexConfiguration","indexState","indexEntries"],yE=tu,vE=[...tu,"globals"];/**
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
 */class hl extends sp{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function We(n,e){const t=Y(n);return zn.F(t._e,e)}/**
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
 */function Ah(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ie{constructor(e,t){this.comparator=e,this.root=t||nt.EMPTY}insert(e,t){return new Ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fo(this.root,e,this.comparator,!0)}}class Fo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new nt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,t,r,s,i){return this}insert(e,t,r){return new nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ye{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sh(this.data.getIterator())}getIteratorFrom(e){return new Sh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class Sh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function hs(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new Tt([])}unionWith(e){let t=new ye(De.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Tt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class hp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hp("Invalid base64 string: "+i):i}}(e);return new Ue(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const _E=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vn(n){if(Z(!!n),typeof n=="string"){let e=0;const t=_E.exec(n);if(Z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qn(n){return typeof n=="string"?Ue.fromBase64String(n):Ue.fromUint8Array(n)}/**
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
 */function nu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ru(n){const e=n.mapValue.fields.__previous_value__;return nu(e)?ru(e):e}function Qi(n){const e=vn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class wE{constructor(e,t,r,s,i,o,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Vr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Vr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Gn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Zo={nullValue:"NULL_VALUE"};function Or(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?nu(n)?4:fp(n)?9007199254740991:Ga(n)?10:11:Q()}function sn(n,e){if(n===e)return!0;const t=Or(n);if(t!==Or(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qi(n).isEqual(Qi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vn(s.timestampValue),c=vn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Qn(s.bytesValue).isEqual(Qn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Se(s.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Se(s.integerValue)===Se(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Se(s.doubleValue),c=Se(i.doubleValue);return o===c?Wi(o)===Wi(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Ps(n.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ah(o)!==Ah(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!sn(o[l],c[l])))return!1;return!0}(n,e);default:return Q()}}function Yi(n,e){return(n.values||[]).find(t=>sn(t,e))!==void 0}function Yn(n,e){if(n===e)return 0;const t=Or(n),r=Or(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Se(i.integerValue||i.doubleValue),l=Se(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Rh(n.timestampValue,e.timestampValue);case 4:return Rh(Qi(n),Qi(e));case 5:return se(n.stringValue,e.stringValue);case 6:return function(i,o){const c=Qn(i),l=Qn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=se(c[u],l[u]);if(h!==0)return h}return se(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=se(Se(i.latitude),Se(o.latitude));return c!==0?c:se(Se(i.longitude),Se(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ph(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,h;const p=i.fields||{},y=o.fields||{},w=(c=p.value)===null||c===void 0?void 0:c.arrayValue,A=(l=y.value)===null||l===void 0?void 0:l.arrayValue,P=se(((u=w==null?void 0:w.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:Ph(w,A)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Gn.mapValue&&o===Gn.mapValue)return 0;if(i===Gn.mapValue)return 1;if(o===Gn.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const y=se(l[p],h[p]);if(y!==0)return y;const w=Yn(c[l[p]],u[h[p]]);if(w!==0)return w}return se(l.length,h.length)}(n.mapValue,e.mapValue);default:throw Q()}}function Rh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=vn(n),r=vn(e),s=se(t.seconds,r.seconds);return s!==0?s:se(t.nanos,r.nanos)}function Ph(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Yn(t[s],r[s]);if(i)return i}return se(t.length,r.length)}function Cs(n){return fl(n)}function fl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=vn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Qn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=fl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fl(t.fields[o])}`;return s+"}"}(n.mapValue):Q()}function Ji(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ml(n){return!!n&&"integerValue"in n}function Xi(n){return!!n&&"arrayValue"in n}function Ch(n){return!!n&&"nullValue"in n}function kh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ea(n){return!!n&&"mapValue"in n}function Ga(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Vi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Qr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Vi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function fp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const mp={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function IE(n){return"nullValue"in n?Zo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ji(Vr.empty(),q.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Ga(n)?mp:{mapValue:{}}:Q()}function TE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ji(Vr.empty(),q.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?mp:"mapValue"in n?Ga(n)?{mapValue:{}}:Gn:Q()}function Dh(n,e){const t=Yn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Nh(n,e){const t=Yn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ea(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vi(t)}setAll(e){let t=De.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Vi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ea(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Qr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new lt(Vi(this.value))}}function pp(n){const e=[];return Qr(n.fields,(t,r)=>{const s=new De([t]);if(ea(r)){const i=pp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Tt(e)}/**
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
 */class Oe{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Oe(e,0,ee.min(),ee.min(),ee.min(),lt.empty(),0)}static newFoundDocument(e,t,r,s){return new Oe(e,1,t,ee.min(),r,s,0)}static newNoDocument(e,t){return new Oe(e,2,t,ee.min(),ee.min(),lt.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,ee.min(),ee.min(),lt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ks{constructor(e,t){this.position=e,this.inclusive=t}}function xh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),t.key):r=Yn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!sn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _a{constructor(e,t="asc"){this.field=e,this.dir=t}}function EE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class gp{}class ue extends gp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new bE(e,t,r):t==="array-contains"?new RE(e,r):t==="in"?new Tp(e,r):t==="not-in"?new PE(e,r):t==="array-contains-any"?new CE(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new AE(e,r):new SE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Yn(t,this.value)):t!==null&&Or(this.value)===Or(t)&&this.matchesComparison(Yn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ge extends gp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ge(e,t)}matches(e){return Ds(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ds(n){return n.op==="and"}function pl(n){return n.op==="or"}function su(n){return yp(n)&&Ds(n)}function yp(n){for(const e of n.filters)if(e instanceof ge)return!1;return!0}function gl(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+Cs(n.value);if(su(n))return n.filters.map(e=>gl(e)).join(",");{const e=n.filters.map(t=>gl(t)).join(",");return`${n.op}(${e})`}}function vp(n,e){return n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&sn(r.value,s.value)}(n,e):n instanceof ge?function(r,s){return s instanceof ge&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&vp(o,s.filters[c]),!0):!1}(n,e):void Q()}function _p(n,e){const t=n.filters.concat(e);return ge.create(t,n.op)}function wp(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${Cs(t.value)}`}(n):n instanceof ge?function(t){return t.op.toString()+" {"+t.getFilters().map(wp).join(" ,")+"}"}(n):"Filter"}class bE extends ue{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class AE extends ue{constructor(e,t){super(e,"in",t),this.keys=Ip("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class SE extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Ip("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ip(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class RE extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xi(t)&&Yi(t.arrayValue,this.value)}}class Tp extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Yi(this.value.arrayValue,t)}}class PE extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Yi(this.value.arrayValue,t)}}class CE extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Yi(this.value.arrayValue,r))}}/**
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
 */class kE{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function yl(n,e=null,t=[],r=[],s=null,i=null,o=null){return new kE(n,e,t,r,s,i,o)}function Mr(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>gl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),qa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ue=t}return e.ue}function uo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!vp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Lh(n.startAt,e.startAt)&&Lh(n.endAt,e.endAt)}function wa(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ia(n,e){return n.filters.filter(t=>t instanceof ue&&t.field.isEqual(e))}function Vh(n,e,t){let r=Zo,s=!0;for(const i of Ia(n,e)){let o=Zo,c=!0;switch(i.op){case"<":case"<=":o=IE(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Zo}Dh({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Dh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Oh(n,e,t){let r=Gn,s=!0;for(const i of Ia(n,e)){let o=Gn,c=!0;switch(i.op){case">=":case">":o=TE(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Gn}Nh({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Nh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Ks{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ep(n,e,t,r,s,i,o,c){return new Ks(n,e,t,r,s,i,o,c)}function Ka(n){return new Ks(n)}function Mh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bp(n){return n.collectionGroup!==null}function Oi(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ye(De.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new _a(i,r))}),t.has(De.keyField().canonicalString())||e.ce.push(new _a(De.keyField(),r))}return e.ce}function Ct(n){const e=Y(n);return e.le||(e.le=DE(e,Oi(n))),e.le}function DE(n,e){if(n.limitType==="F")return yl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new _a(s.field,i)});const t=n.endAt?new ks(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ks(n.startAt.position,n.startAt.inclusive):null;return yl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function vl(n,e){const t=n.filters.concat([e]);return new Ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function _l(n,e,t){return new Ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function za(n,e){return uo(Ct(n),Ct(e))&&n.limitType===e.limitType}function Ap(n){return`${Mr(Ct(n))}|lt:${n.limitType}`}function ys(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>wp(s)).join(", ")}]`),qa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Cs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Cs(s)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function ho(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Oi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=xh(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Oi(r),s)||r.endAt&&!function(o,c,l){const u=xh(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Oi(r),s))}(n,e)}function Sp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Rp(n){return(e,t)=>{let r=!1;for(const s of Oi(n)){const i=NE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function NE(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Yn(l,u):Q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class sr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return dp(this.inner)}size(){return this.innerSize}}/**
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
 */const xE=new Ie(q.comparator);function Rt(){return xE}const Pp=new Ie(q.comparator);function Si(...n){let e=Pp;for(const t of n)e=e.insert(t.key,t);return e}function Cp(n){let e=Pp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Zt(){return Mi()}function kp(){return Mi()}function Mi(){return new sr(n=>n.toString(),(n,e)=>n.isEqual(e))}const LE=new Ie(q.comparator),VE=new ye(q.comparator);function ce(...n){let e=VE;for(const t of n)e=e.add(t);return e}const OE=new ye(se);function iu(){return OE}/**
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
 */function ou(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wi(e)?"-0":e}}function Dp(n){return{integerValue:""+n}}function ME(n,e){return op(e)?Dp(e):ou(n,e)}/**
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
 */class Ha{constructor(){this._=void 0}}function BE(n,e,t){return n instanceof Ns?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&nu(i)&&(i=ru(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Br?xp(n,e):n instanceof xs?Lp(n,e):function(s,i){const o=Np(s,i),c=Bh(o)+Bh(s.Pe);return ml(o)&&ml(s.Pe)?Dp(c):ou(s.serializer,c)}(n,e)}function FE(n,e,t){return n instanceof Br?xp(n,e):n instanceof xs?Lp(n,e):t}function Np(n,e){return n instanceof Zi?function(r){return ml(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ns extends Ha{}class Br extends Ha{constructor(e){super(),this.elements=e}}function xp(n,e){const t=Vp(e);for(const r of n.elements)t.some(s=>sn(s,r))||t.push(r);return{arrayValue:{values:t}}}class xs extends Ha{constructor(e){super(),this.elements=e}}function Lp(n,e){let t=Vp(e);for(const r of n.elements)t=t.filter(s=>!sn(s,r));return{arrayValue:{values:t}}}class Zi extends Ha{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Bh(n){return Se(n.integerValue||n.doubleValue)}function Vp(n){return Xi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class au{constructor(e,t){this.field=e,this.transform=t}}function $E(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Br&&s instanceof Br||r instanceof xs&&s instanceof xs?Ps(r.elements,s.elements,sn):r instanceof Zi&&s instanceof Zi?sn(r.Pe,s.Pe):r instanceof Ns&&s instanceof Ns}(n.transform,e.transform)}class UE{constructor(e,t){this.version=e,this.transformResults=t}}class ut{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Wa{}function Op(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qa(n.key,ut.none()):new zs(n.key,n.data,ut.none());{const t=n.data,r=lt.empty();let s=new ye(De.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new In(n.key,r,new Tt(s.toArray()),ut.none())}}function jE(n,e,t){n instanceof zs?function(s,i,o){const c=s.value.clone(),l=$h(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof In?function(s,i,o){if(!ta(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=$h(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Mp(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Bi(n,e,t,r){return n instanceof zs?function(i,o,c,l){if(!ta(i.precondition,o))return c;const u=i.value.clone(),h=Uh(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof In?function(i,o,c,l){if(!ta(i.precondition,o))return c;const u=Uh(i.fieldTransforms,l,o),h=o.data;return h.setAll(Mp(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return ta(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function qE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Np(r.transform,s||null);i!=null&&(t===null&&(t=lt.empty()),t.set(r.field,i))}return t||null}function Fh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ps(r,s,(i,o)=>$E(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class zs extends Wa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class In extends Wa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function $h(n,e,t){const r=new Map;Z(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,FE(o,c,t[s]))}return r}function Uh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,BE(i,o,e))}return r}class Qa extends Wa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bp extends Wa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cu{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Bi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Bi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=kp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Op(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(t,r)=>Fh(t,r))&&Ps(this.baseMutations,e.baseMutations,(t,r)=>Fh(t,r))}}class lu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length);let s=function(){return LE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new lu(e,t,r,s)}}/**
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
 */class uu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class GE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var qe,de;function KE(n){switch(n){default:return Q();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Fp(n){if(n===void 0)return $e("GRPC error has no .code"),x.UNKNOWN;switch(n){case qe.OK:return x.OK;case qe.CANCELLED:return x.CANCELLED;case qe.UNKNOWN:return x.UNKNOWN;case qe.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case qe.INTERNAL:return x.INTERNAL;case qe.UNAVAILABLE:return x.UNAVAILABLE;case qe.UNAUTHENTICATED:return x.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case qe.NOT_FOUND:return x.NOT_FOUND;case qe.ALREADY_EXISTS:return x.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return x.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case qe.ABORTED:return x.ABORTED;case qe.OUT_OF_RANGE:return x.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return x.UNIMPLEMENTED;case qe.DATA_LOSS:return x.DATA_LOSS;default:return Q()}}(de=qe||(qe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zE(){return new TextEncoder}/**
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
 */const HE=new Rr([4294967295,4294967295],0);function jh(n){const e=zE().encode(n),t=new Hm;return t.update(e),new Uint8Array(t.digest())}function qh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rr([t,r],0),new Rr([s,i],0)]}class du{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ri(`Invalid padding: ${t}`);if(r<0)throw new Ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ri(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ri(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Rr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Rr.fromNumber(r)));return s.compare(HE)===1&&(s=new Rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=jh(e),[r,s]=qh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new du(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=jh(e),[r,s]=qh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,mo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new fo(ee.min(),s,new Ie(se),Rt(),ce())}}class mo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new mo(r,t,ce(),ce(),ce())}}/**
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
 */class na{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class $p{constructor(e,t){this.targetId=e,this.me=t}}class Up{constructor(e,t,r=Ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Gh{constructor(){this.fe=0,this.ge=zh(),this.pe=Ue.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),t=ce(),r=ce();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new mo(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=zh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class WE{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rt(),this.qe=Kh(),this.Qe=new Ie(se)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(wa(i))if(r===0){const o=new q(i.path);this.Ue(t,o,Oe.newNoDocument(o,ee.min()))}else Z(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Qn(r).toUint8Array()}catch(l){if(l instanceof hp)return Ki("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new du(o,s,i)}catch(l){return Ki(l instanceof Ri?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&wa(c.target)){const l=new q(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Oe.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=ce();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new fo(e,t,this.Qe,this.ke,r);return this.ke=Rt(),this.qe=Kh(),this.Qe=new Ie(se),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Gh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ye(se),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Gh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Kh(){return new Ie(q.comparator)}function zh(){return new Ie(q.comparator)}const QE={asc:"ASCENDING",desc:"DESCENDING"},YE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JE={and:"AND",or:"OR"};class XE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wl(n,e){return n.useProto3Json||qa(e)?e:{value:e}}function Ls(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ZE(n,e){return Ls(n,e.toTimestamp())}function yt(n){return Z(!!n),ee.fromTimestamp(function(t){const r=vn(t);return new Ne(r.seconds,r.nanos)}(n))}function hu(n,e){return Il(n,e).canonicalString()}function Il(n,e){const t=function(s){return new fe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function qp(n){const e=fe.fromString(n);return Z(Xp(e)),e}function Ta(n,e){return hu(n.databaseId,e.path)}function Pr(n,e){const t=qp(e);if(t.get(1)!==n.databaseId.projectId)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(zp(t))}function Gp(n,e){return hu(n.databaseId,e)}function Kp(n){const e=qp(n);return e.length===4?fe.emptyPath():zp(e)}function Tl(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zp(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hh(n,e,t){return{name:Ta(n,e),fields:t.value.mapValue.fields}}function eb(n,e,t){const r=Pr(n,e.name),s=yt(e.updateTime),i=e.createTime?yt(e.createTime):ee.min(),o=new lt({mapValue:{fields:e.fields}}),c=Oe.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function tb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Z(h===void 0||typeof h=="string"),Ue.fromBase64String(h||"")):(Z(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ue.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?x.UNKNOWN:Fp(u.code);return new j(h,u.message||"")}(o);t=new Up(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pr(n,r.document.name),i=yt(r.document.updateTime),o=r.document.createTime?yt(r.document.createTime):ee.min(),c=new lt({mapValue:{fields:r.document.fields}}),l=Oe.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];t=new na(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pr(n,r.document),i=r.readTime?yt(r.readTime):ee.min(),o=Oe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new na([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pr(n,r.document),i=r.removedTargetIds||[];t=new na([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new GE(s,i),c=r.targetId;t=new $p(c,o)}}return t}function Ea(n,e){let t;if(e instanceof zs)t={update:Hh(n,e.key,e.value)};else if(e instanceof Qa)t={delete:Ta(n,e.key)};else if(e instanceof In)t={update:Hh(n,e.key,e.data),updateMask:ab(e.fieldMask)};else{if(!(e instanceof Bp))return Q();t={verify:Ta(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ns)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Br)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof xs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zi)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw Q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ZE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(n,e.precondition)),t}function El(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ut.updateTime(yt(i.updateTime)):i.exists!==void 0?ut.exists(i.exists):ut.none()}(e.currentDocument):ut.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)Z(c.setToServerValue==="REQUEST_TIME"),l=new Ns;else if("appendMissingElements"in c){const h=c.appendMissingElements.values||[];l=new Br(h)}else if("removeAllFromArray"in c){const h=c.removeAllFromArray.values||[];l=new xs(h)}else"increment"in c?l=new Zi(o,c.increment):Q();const u=De.fromServerFormat(c.fieldPath);return new au(u,l)}(n,s)):[];if(e.update){e.update.name;const s=Pr(n,e.update.name),i=new lt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Tt(u.map(h=>De.fromServerFormat(h)))}(e.updateMask);return new In(s,i,o,t,r)}return new zs(s,i,t,r)}if(e.delete){const s=Pr(n,e.delete);return new Qa(s,t)}if(e.verify){const s=Pr(n,e.verify);return new Bp(s,t)}return Q()}function nb(n,e){return n&&n.length>0?(Z(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?yt(s.updateTime):yt(i);return o.isEqual(ee.min())&&(o=yt(i)),new UE(o,s.transformResults||[])}(t,e))):[]}function Hp(n,e){return{documents:[Gp(n,e.path)]}}function Wp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Gp(n,s);const i=function(u){if(u.length!==0)return Jp(ge.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(y){return{field:vs(y.field),direction:sb(y.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=wl(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:s}}function Qp(n){let e=Kp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(p){const y=Yp(p);return y instanceof ge&&su(y)?y.getFilters():[y]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(y=>function(A){return new _a(_s(A.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(y))}(t.orderBy));let c=null;t.limit&&(c=function(p){let y;return y=typeof p=="object"?p.value:p,qa(y)?null:y}(t.limit));let l=null;t.startAt&&(l=function(p){const y=!!p.before,w=p.values||[];return new ks(w,y)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const y=!p.before,w=p.values||[];return new ks(w,y)}(t.endAt)),Ep(e,s,o,i,c,"F",l,u)}function rb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=_s(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_s(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_s(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_s(t.unaryFilter.field);return ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(n):n.fieldFilter!==void 0?function(t){return ue.create(_s(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ge.create(t.compositeFilter.filters.map(r=>Yp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(t.compositeFilter.op))}(n):Q()}function sb(n){return QE[n]}function ib(n){return YE[n]}function ob(n){return JE[n]}function vs(n){return{fieldPath:n.canonicalString()}}function _s(n){return De.fromServerFormat(n.fieldPath)}function Jp(n){return n instanceof ue?function(t){if(t.op==="=="){if(kh(t.value))return{unaryFilter:{field:vs(t.field),op:"IS_NAN"}};if(Ch(t.value))return{unaryFilter:{field:vs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(kh(t.value))return{unaryFilter:{field:vs(t.field),op:"IS_NOT_NAN"}};if(Ch(t.value))return{unaryFilter:{field:vs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(t.field),op:ib(t.op),value:t.value}}}(n):n instanceof ge?function(t){const r=t.getFilters().map(s=>Jp(s));return r.length===1?r[0]:{compositeFilter:{op:ob(t.op),filters:r}}}(n):Q()}function ab(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class fn{constructor(e,t,r,s,i=ee.min(),o=ee.min(),c=Ue.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Zp{constructor(e){this.ct=e}}function cb(n,e){let t;if(e.document)t=eb(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),s=$r(e.noDocument.readTime);t=Oe.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Q();{const r=q.fromSegments(e.unknownDocument.path),s=$r(e.unknownDocument.version);t=Oe.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Ne(s[0],s[1]);return ee.fromTimestamp(i)}(e.readTime)),t}function Wh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ba(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Ta(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Ls(i,o.version.toTimestamp()),createTime:Ls(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Fr(e.version)};else{if(!e.isUnknownDocument())return Q();r.unknownDocument={path:t.path.toArray(),version:Fr(e.version)}}return r}function ba(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Fr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function $r(n){const e=new Ne(n.seconds,n.nanoseconds);return ee.fromTimestamp(e)}function Tr(n,e){const t=(e.baseMutations||[]).map(i=>El(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>El(n.ct,i)),s=Ne.fromMillis(e.localWriteTimeMs);return new cu(e.batchId,s,t,r)}function Pi(n){const e=$r(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?$r(n.lastLimboFreeSnapshotVersion):ee.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return Z(i.documents.length===1),Ct(Ka(Kp(i.documents[0])))}(n.query):function(i){return Ct(Qp(i))}(n.query),new fn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ue.fromBase64String(n.resumeToken))}function eg(n,e){const t=Fr(e.snapshotVersion),r=Fr(e.lastLimboFreeSnapshotVersion);let s;s=wa(e.target)?Hp(n.ct,e.target):Wp(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Mr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function tg(n){const e=Qp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_l(e,e.limit,"L"):e}function Uc(n,e){return new uu(e.largestBatchId,El(n.ct,e.overlayMutation))}function Qh(n,e){const t=e.path.lastSegment();return[n,gt(e.path.popLast()),t]}function Yh(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Fr(r.readTime),documentKey:gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class lb{getBundleMetadata(e,t){return Jh(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:$r(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Jh(e).put(function(s){return{bundleId:s.id,createTime:Fr(yt(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Xh(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:tg(i.bundledQuery),readTime:$r(i.readTime)}}(r)})}saveNamedQuery(e,t){return Xh(e).put(function(s){return{name:s.name,readTime:Fr(yt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Jh(n){return We(n,"bundles")}function Xh(n){return We(n,"namedQueries")}/**
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
 */class Ya{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Ya(e,r)}getOverlay(e,t){return gi(e).get(Qh(this.userId,t)).next(r=>r?Uc(this.serializer,r):null)}getOverlays(e,t){const r=Zt();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new uu(t,o);s.push(this.ht(e,c))}),k.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(gt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(gi(e).j("collectionPathOverlayIndex",c))}),k.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Zt(),i=gt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return gi(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const u=Uc(this.serializer,l);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=Zt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return gi(e).J({index:"collectionGroupOverlayIndex",range:c},(l,u,h)=>{const p=Uc(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>i)}ht(e,t){return gi(e).put(function(s,i,o){const[c,l,u]=Qh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ea(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function gi(n){return We(n,"documentOverlays")}/**
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
 */class ub{Pt(e){return We(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ue.fromUint8Array(r):Ue.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Er{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Se(e.integerValue));else if("doubleValue"in e){const r=Se(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Wi(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=vn(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Qn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?fp(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Ga(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):Q()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(Se(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),q.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Er.vt=new Er;function db(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Zh(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=db(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class hb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Zh(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Zh(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class fb{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class mb{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class yi{constructor(){this.jt=new hb,this.Ht=new fb(this.jt),this.Jt=new mb(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class br{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new br(this.indexId,this.documentKey,this.arrayValue,r)}}function On(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=ef(n.arrayValue,e.arrayValue),t!==0?t:(t=ef(n.directionalValue,e.directionalValue),t!==0?t:q.comparator(n.documentKey,e.documentKey)))}function ef(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class tf{constructor(e){this.Xt=new ye((t,r)=>De.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Z(e.collectionGroup===this.collectionId),this.nn)return!1;const t=dl(e);if(t!==void 0&&!this.sn(t))return!1;const r=wr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ye(De.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Jo(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Jo(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Jo(r.field,r.dir==="asc"?0:1)));return new va(va.UNKNOWN_ID,this.collectionId,t,Hi.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function ng(n){var e,t;if(Z(n instanceof ue||n instanceof ge),n instanceof ue){if(n instanceof Tp){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ue.create(n.field,"==",i)))||[];return ge.create(s,"or")}return n}const r=n.filters.map(s=>ng(s));return ge.create(r,n.op)}function pb(n){if(n.getFilters().length===0)return[];const e=Sl(ng(n));return Z(rg(e)),bl(e)||Al(e)?[e]:e.getFilters()}function bl(n){return n instanceof ue}function Al(n){return n instanceof ge&&su(n)}function rg(n){return bl(n)||Al(n)||function(t){if(t instanceof ge&&pl(t)){for(const r of t.getFilters())if(!bl(r)&&!Al(r))return!1;return!0}return!1}(n)}function Sl(n){if(Z(n instanceof ue||n instanceof ge),n instanceof ue)return n;if(n.filters.length===1)return Sl(n.filters[0]);const e=n.filters.map(r=>Sl(r));let t=ge.create(e,n.op);return t=Aa(t),rg(t)?t:(Z(t instanceof ge),Z(Ds(t)),Z(t.filters.length>1),t.filters.reduce((r,s)=>fu(r,s)))}function fu(n,e){let t;return Z(n instanceof ue||n instanceof ge),Z(e instanceof ue||e instanceof ge),t=n instanceof ue?e instanceof ue?function(s,i){return ge.create([s,i],"and")}(n,e):nf(n,e):e instanceof ue?nf(e,n):function(s,i){if(Z(s.filters.length>0&&i.filters.length>0),Ds(s)&&Ds(i))return _p(s,i.getFilters());const o=pl(s)?s:i,c=pl(s)?i:s,l=o.filters.map(u=>fu(u,c));return ge.create(l,"or")}(n,e),Aa(t)}function nf(n,e){if(Ds(e))return _p(e,n.getFilters());{const t=e.filters.map(r=>fu(n,r));return ge.create(t,"or")}}function Aa(n){if(Z(n instanceof ue||n instanceof ge),n instanceof ue)return n;const e=n.getFilters();if(e.length===1)return Aa(e[0]);if(yp(n))return n;const t=e.map(s=>Aa(s)),r=[];return t.forEach(s=>{s instanceof ue?r.push(s):s instanceof ge&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ge.create(r,n.op)}/**
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
 */class gb{constructor(){this.un=new mu}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(kt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(kt.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class mu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ye(fe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ye(fe.comparator)).toArray()}}/**
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
 */const $o=new Uint8Array(0);class yb{constructor(e,t){this.databaseId=t,this.cn=new mu,this.ln=new sr(r=>Mr(r),(r,s)=>uo(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:gt(s)};return rf(e).put(i)}return k.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[ep(t),""],!1,!0);return rf(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Xt(o.parent))}return r})}addFieldIndex(e,t){const r=vi(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=ms(e);return i.next(c=>{o.put(Yh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=vi(e),s=ms(e),i=fs(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=vi(e),r=fs(e),s=ms(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return k.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new tf(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=fs(e);let s=!0;const i=new Map;return k.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=ce();const c=[];return k.forEach(i,(l,u)=>{M("IndexedDbIndexManager",`Using index ${function(L){return`id=${L.indexId}|cg=${L.collectionGroup}|f=${L.fields.map(B=>`${B.fieldPath}:${B.kind}`).join(",")}`}(l)} to execute ${Mr(t)}`);const h=function(L,B){const ne=dl(B);if(ne===void 0)return null;for(const X of Ia(L,ne.fieldPath))switch(X.op){case"array-contains-any":return X.value.arrayValue.values||[];case"array-contains":return[X.value]}return null}(u,l),p=function(L,B){const ne=new Map;for(const X of wr(B))for(const b of Ia(L,X.fieldPath))switch(b.op){case"==":case"in":ne.set(X.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return ne.set(X.fieldPath.canonicalString(),b.value),Array.from(ne.values())}return null}(u,l),y=function(L,B){const ne=[];let X=!0;for(const b of wr(B)){const _=b.kind===0?Vh(L,b.fieldPath,L.startAt):Oh(L,b.fieldPath,L.startAt);ne.push(_.value),X&&(X=_.inclusive)}return new ks(ne,X)}(u,l),w=function(L,B){const ne=[];let X=!0;for(const b of wr(B)){const _=b.kind===0?Oh(L,b.fieldPath,L.endAt):Vh(L,b.fieldPath,L.endAt);ne.push(_.value),X&&(X=_.inclusive)}return new ks(ne,X)}(u,l),A=this.In(l,u,y),P=this.In(l,u,w),D=this.Tn(l,u,p),O=this.En(l.indexId,h,A,y.inclusive,P,w.inclusive,D);return k.forEach(O,F=>r.G(F,t.limit).next(L=>{L.forEach(B=>{const ne=q.fromSegments(B.documentKey);o.has(ne)||(o=o.add(ne),c.push(ne))})}))}).next(()=>c)}return k.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=pb(ge.create(e.filters,"and")).map(r=>yl(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),h=[];for(let p=0;p<l;++p){const y=t?this.dn(t[p/u]):$o,w=this.An(e,y,r[p%u],s),A=this.Rn(e,y,i[p%u],o),P=c.map(D=>this.An(e,y,D,!0));h.push(...this.createRange(w,A,P))}return h}An(e,t,r,s){const i=new br(e,q.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new br(e,q.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new tf(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return k.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new ye(De.comparator),h=!1;for(const p of l.filters)for(const y of p.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?h=!0:u=u.add(y.field));for(const p of l.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(h?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new yi;for(const s of wr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);Er.vt.It(i,o)}return r.zt()}dn(e){const t=new yi;return Er.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new yi;return Er.vt.It(Ji(this.databaseId,t),r.Yt(function(i){const o=wr(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new yi);let i=0;for(const o of wr(e)){const c=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&Xi(c))s=this.gn(s,o,c);else{const u=l.Yt(o.kind);Er.vt.It(c,u)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new yi;l.seed(c.zt()),Er.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof ue&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=vi(e),s=ms(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return k.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(h,p){const y=p?new Hi(p.sequenceNumber,new kt($r(p.readTime),new q(Xt(p.documentKey)),p.largestBatchId)):Hi.empty(),w=h.fields.map(([A,P])=>new Jo(De.fromServerFormat(A),P));return new va(h.indexId,h.collectionGroup,w,y)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:se(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=vi(e),i=ms(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>k.forEach(c,l=>i.put(Yh(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return k.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?k.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),k.forEach(c,l=>this.wn(e,s,l).next(u=>{const h=this.Sn(i,l);return u.isEqual(h)?k.resolve():this.bn(e,i,l,u,h)}))))})}Dn(e,t,r,s){return fs(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return fs(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=fs(e);let i=new ye(On);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{i=i.add(new br(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let r=new ye(On);const s=this.Vn(t,e);if(s==null)return r;const i=dl(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Xi(o))for(const c of o.arrayValue.values||[])r=r.add(new br(t.indexId,e.key,this.dn(c),s))}else r=r.add(new br(t.indexId,e.key,$o,s));return r}bn(e,t,r,s,i){M("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,u,h,p,y){const w=l.getIterator(),A=u.getIterator();let P=hs(w),D=hs(A);for(;P||D;){let O=!1,F=!1;if(P&&D){const L=h(P,D);L<0?F=!0:L>0&&(O=!0)}else P!=null?F=!0:O=!0;O?(p(D),D=hs(A)):F?(y(P),P=hs(w)):(P=hs(w),D=hs(A))}}(s,i,On,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),k.waitFor(o)}yn(e){let t=1;return ms(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>On(o,c)).filter((o,c,l)=>!c||On(o,l[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=On(o,e),l=On(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,$o,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,$o,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return On(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(sf)}getMinOffset(e,t){return k.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||Q())).next(sf)}}function rf(n){return We(n,"collectionParents")}function fs(n){return We(n,"indexEntries")}function vi(n){return We(n,"indexConfiguration")}function ms(n){return We(n,"indexState")}function sf(n){Z(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Zl(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new kt(e.readTime,e.documentKey,t)}/**
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
 */const of={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class wt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function sg(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.J({range:o},(h,p,y)=>(c++,y.delete()));i.push(l.next(()=>{Z(c===1)}));const u=[];for(const h of t.mutations){const p=ap(e,h.key.path,t.batchId);i.push(s.delete(p)),u.push(h.key)}return k.waitFor(i).next(()=>u)}function Sa(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw Q();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(41943040,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);class Ja{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){Z(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ja(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Mn(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=ws(e),o=Mn(e);return o.add({}).next(c=>{Z(typeof c=="number");const l=new cu(c,t,r,s),u=function(w,A,P){const D=P.baseMutations.map(F=>Ea(w.ct,F)),O=P.mutations.map(F=>Ea(w.ct,F));return{userId:A,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:D,mutations:O}}(this.serializer,this.userId,l),h=[];let p=new ye((y,w)=>se(y.canonicalString(),w.canonicalString()));for(const y of s){const w=ap(this.userId,y.key.path,c);p=p.add(y.key.path.popLast()),h.push(o.put(u)),h.push(i.put(w,tE))}return p.forEach(y=>{h.push(this.indexManager.addToCollectionParentIndex(e,y))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),k.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return Mn(e).get(t).next(r=>r?(Z(r.userId===this.userId),Tr(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?k.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Mn(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(Z(c.batchId>=r),i=Tr(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Mn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Mn(e).U("userMutationsIndex",t).next(r=>r.map(s=>Tr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Xo(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return ws(e).J({range:s},(o,c,l)=>{const[u,h,p]=o,y=Xt(h);if(u===this.userId&&t.path.isEqual(y))return Mn(e).get(p).next(w=>{if(!w)throw Q();Z(w.userId===this.userId),i.push(Tr(this.serializer,w))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(se);const s=[];return t.forEach(i=>{const o=Xo(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=ws(e).J({range:c},(u,h,p)=>{const[y,w,A]=u,P=Xt(w);y===this.userId&&i.path.isEqual(P)?r=r.add(A):p.done()});s.push(l)}),k.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Xo(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new ye(se);return ws(e).J({range:o},(l,u,h)=>{const[p,y,w]=l,A=Xt(y);p===this.userId&&r.isPrefixOf(A)?A.length===s&&(c=c.add(w)):h.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Mn(e).get(i).next(o=>{if(o===null)throw Q();Z(o.userId===this.userId),r.push(Tr(this.serializer,o))}))}),k.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return sg(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),k.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return k.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return ws(e).J({range:r},(i,o,c)=>{if(i[0]===this.userId){const l=Xt(i[1]);s.push(l)}else c.done()}).next(()=>{Z(s.length===0)})})}containsKey(e,t){return ig(e,this.userId,t)}Nn(e){return og(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ig(n,e,t){const r=Xo(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ws(n).J({range:i,H:!0},(c,l,u)=>{const[h,p,y]=c;h===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Mn(n){return We(n,"mutations")}function ws(n){return We(n,"documentMutations")}function og(n){return We(n,"mutationQueues")}/**
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
 */class Ur{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ur(0)}static kn(){return new Ur(-1)}}/**
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
 */class vb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Ur(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>ee.fromTimestamp(new Ne(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ps(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(Z(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return ps(e).J((o,c)=>{const l=Pi(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>k.waitFor(i)).next(()=>s)}forEachTarget(e,t){return ps(e).J((r,s)=>{const i=Pi(s);t(i)})}qn(e){return af(e).get("targetGlobalKey").next(t=>(Z(t!==null),t))}Qn(e,t){return af(e).put("targetGlobalKey",t)}Kn(e,t){return ps(e).put(eg(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Mr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return ps(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const u=Pi(c);uo(t,u.target)&&(i=u,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=jn(e);return t.forEach(o=>{const c=gt(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),k.waitFor(s)}removeMatchingKeys(e,t,r){const s=jn(e);return k.forEach(t,i=>{const o=gt(i.path);return k.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=jn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=jn(e);let i=ce();return s.J({range:r,H:!0},(o,c,l)=>{const u=Xt(o[1]),h=new q(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const r=gt(t.path),s=IDBKeyRange.bound([r],[ep(r)],!1,!0);let i=0;return jn(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ot(e,t){return ps(e).get(t).next(r=>r?Pi(r):null)}}function ps(n){return We(n,"targets")}function af(n){return We(n,"targetGlobal")}function jn(n){return We(n,"targetDocuments")}/**
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
 */function cf([n,e],[t,r]){const s=se(n,t);return s===0?se(e,r):s}class _b{constructor(e){this.Un=e,this.buffer=new ye(cf),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();cf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class wb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){M("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rr(t)?M("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await nr(t)}await this.Hn(3e5)})}}class Ib{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(It.oe);const r=new _b(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(of)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),of):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),gs()<=le.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Tb(n,e){return new Ib(n,e)}/**
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
 */class Eb{constructor(e,t){this.db=e,this.garbageCollector=Tb(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return Uo(e,r)}removeReference(e,t,r){return Uo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Uo(e,t)}nr(e,t){return function(s,i){let o=!1;return og(s).Y(c=>ig(s,c,i).next(l=>(l&&(o=!0),k.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),jn(e).delete(function(p){return[0,gt(p.path)]}(o))))});s.push(l)}}).next(()=>k.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Uo(e,t)}tr(e,t){const r=jn(e);let s,i=It.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:u})=>{o===0?(i!==It.oe&&t(new q(Xt(s)),i),i=u,s=l):i=It.oe}).next(()=>{i!==It.oe&&t(new q(Xt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Uo(n,e){return jn(n).put(function(r,s){return{targetId:0,path:gt(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class ag{constructor(){this.changes=new sr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return vr(e).put(r)}removeEntry(e,t,r){return vr(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],ba(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Oe.newInvalidDocument(t);return vr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(_i(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:Oe.newInvalidDocument(t)};return vr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(_i(t))},(s,i)=>{r={document:this.ir(t,i),size:Sa(i)}}).next(()=>r)}getEntries(e,t){let r=Rt();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=Rt(),s=new Ie(q.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);r=r.insert(i,c),s=s.insert(i,Sa(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return k.resolve();let s=new ye(df);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(_i(s.first()),_i(s.last())),o=s.getIterator();let c=o.getNext();return vr(e).J({index:"documentKeyIndex",range:i},(l,u,h)=>{const p=q.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&df(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,u),c=o.hasNext()?o.getNext():null),c?h.$(_i(c)):h.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),ba(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return vr(e).U(IDBKeyRange.bound(c,l,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let h=Rt();for(const p of u){const y=this.ir(q.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);y.isFoundDocument()&&(ho(t,y)||s.has(y.key))&&(h=h.insert(y.key,y))}return h})}getAllFromCollectionGroup(e,t,r,s){let i=Rt();const o=uf(t,r),c=uf(t,kt.max());return vr(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,u,h)=>{const p=this.ir(q.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&h.done()}).next(()=>i)}newChangeBuffer(e){return new Ab(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return lf(e).get("remoteDocumentGlobalKey").next(t=>(Z(!!t),t))}rr(e,t){return lf(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=cb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return Oe.newInvalidDocument(e)}}function cg(n){return new bb(n)}class Ab extends ag{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new sr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new ye((i,o)=>se(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Wh(this.cr.serializer,o);s=s.add(i.path.popLast());const u=Sa(l);r+=u-c.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=Wh(this.cr.serializer,o.convertToNoDocument(ee.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),k.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function lf(n){return We(n,"remoteDocumentGlobal")}function vr(n){return We(n,"remoteDocumentsV14")}function _i(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function uf(n,e){const t=e.documentKey.path.toArray();return[n,ba(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function df(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=se(t[i],r[i]),s)return s;return s=se(t.length,r.length),s||(s=se(t[t.length-2],r[r.length-2]),s||se(t[t.length-1],r[r.length-1]))}/**
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
 */class Sb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class lg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Bi(r.mutation,s,Tt.empty(),Ne.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ce()){const s=Zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Si();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ce()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=Rt();const o=Mi(),c=function(){return Mi()}();return t.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof In)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Bi(h.mutation,u,h.mutation.getFieldMask(),Ne.now())):o.set(u.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var p;return c.set(u,new Sb(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Mi();let s=new Ie((o,c)=>o-c),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let h=r.get(l)||Tt.empty();h=c.applyToLocalView(u,h),r.set(l,h);const p=(s.get(c.batchId)||ce()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,p=kp();h.forEach(y=>{if(!i.has(y)){const w=Op(t.get(y),r.get(y));w!==null&&p.set(y,w),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Zt());let c=-1,l=i;return o.next(u=>k.forEach(u,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(h)?k.resolve():this.remoteDocumentCache.getEntry(e,h).next(y=>{l=l.insert(h,y)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ce())).next(h=>({batchId:c,changes:Cp(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let s=Si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Si();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,l=>{const u=function(p,y){return new Ks(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Oe.newInvalidDocument(h)))});let c=Si();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Bi(h.mutation,u,Tt.empty(),Ne.now()),ho(t,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class Rb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:yt(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:tg(s.bundledQuery),readTime:yt(s.readTime)}}(t)),k.resolve()}}/**
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
 */class Pb{constructor(){this.overlays=new Ie(q.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Zt();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Zt(),i=t.length+1,o=new q(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ie((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Zt(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=Zt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return k.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uu(t,r));let i=this.Ir.get(t);i===void 0&&(i=ce(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Cb{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class pu{constructor(){this.Tr=new ye(Ze.Er),this.dr=new ye(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ze(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ze(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new q(new fe([])),r=new Ze(t,e),s=new Ze(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new q(new fe([])),r=new Ze(t,e),s=new Ze(t,e+1);let i=ce();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ze(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return q.comparator(e.key,t.key)||se(e.wr,t.wr)}static Ar(e,t){return se(e.wr,t.wr)||q.comparator(e.key,t.key)}}/**
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
 */class kb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ye(Ze.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cu(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ze(t,0),s=new Ze(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(se);return t.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new q(i),0);let c=new ye(se);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),k.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,s=>{const i=new Ze(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ze(t,0),s=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Db{constructor(e){this.Mr=e,this.docs=function(){return new Ie(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=Rt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Oe.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Rt();const o=t.path,c=new q(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Zl(np(h),r)<=0||(s.has(h.key)||ho(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){Q()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Nb(this)}getSize(e){return k.resolve(this.size)}}class Nb extends ag{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class xb{constructor(e){this.persistence=e,this.Nr=new sr(t=>Mr(t),uo),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pu,this.targetCount=0,this.kr=Ur.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Ur(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
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
 */class ug{constructor(e,t){this.qr={},this.overlays={},this.Qr=new It(0),this.Kr=!1,this.Kr=!0,this.$r=new Cb,this.referenceDelegate=e(this),this.Ur=new xb(this),this.indexManager=new gb,this.remoteDocumentCache=function(s){return new Db(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Zp(t),this.Gr=new Rb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Pb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new kb(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new Lb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Lb extends sp{constructor(e){super(),this.currentSequenceNumber=e}}class Xa{constructor(e){this.persistence=e,this.Jr=new pu,this.Yr=null}static Zr(e){return new Xa(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const s=q.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,ee.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Vb{constructor(e){this.serializer=e}O(e,t,r,s){const i=new ja("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bh,{unique:!0}),l.createObjectStore("documentMutations")}(e),hf(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=k.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),hf(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",h)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bh,{unique:!0});const p=u.store("mutations"),y=h.map(w=>p.put(w));return k.waitFor(y)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:fE});u.createIndex("collectionPathOverlayIndex",mE,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",pE,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:nE});u.createIndex("documentKeyIndex",rE),u.createIndex("collectionGroupIndex",sE)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:lE}).createIndex("sequenceNumberIndex",uE,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:dE}).createIndex("documentKeyIndex",hE,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=Sa(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>k.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>k.forEach(c,l=>{Z(l.userId===i.userId);const u=Tr(this.serializer,l);return sg(e,i.userId,u).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,c)=>{const l=new fe(o),u=function(p){return[0,gt(p)]}(l);i.push(t.get(u).next(h=>h?k.resolve():(p=>t.put({targetId:0,path:gt(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>k.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:cE});const r=t.store("collectionParents"),s=new mu,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:gt(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new fe(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],u)=>{const h=Xt(c);return i(h.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=Pi(s),o=eg(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new q(fe.fromString(p.document.name).popFirst(5)):p.noDocument?q.fromSegments(p.noDocument.path):p.unknownDocument?q.fromSegments(p.unknownDocument.path):Q()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(u))}).next(()=>k.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=cg(this.serializer),i=new ug(Xa.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(l=>{var u;let h=(u=c.get(l.userId))!==null&&u!==void 0?u:ce();Tr(this.serializer,l).keys().forEach(p=>h=h.add(p)),c.set(l.userId,h)}),k.forEach(c,(l,u)=>{const h=new ct(u),p=Ya.lt(this.serializer,h),y=i.getIndexManager(h),w=Ja.lt(h,this.serializer,y,i.referenceDelegate);return new lg(s,w,p,y).recalculateAndSaveOverlaysForDocumentKeys(new hl(t,It.oe),l).next()})})}}function hf(n){n.createObjectStore("targetDocuments",{keyPath:oE}).createIndex("documentTargetsIndex",aE,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",iE,{unique:!0}),n.createObjectStore("targetGlobal")}const jc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class gu{constructor(e,t,r,s,i,o,c,l,u,h,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=c,this.ci=u,this.li=h,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=y=>Promise.resolve(),!gu.D())throw new j(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Eb(this,s),this.Ai=t+"main",this.serializer=new Zp(l),this.Ri=new zn(this.Ai,this.hi,new Vb(this.serializer)),this.$r=new ub,this.Ur=new vb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=cg(this.serializer),this.Gr=new lb,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(x.FAILED_PRECONDITION,jc);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new It(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>jo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(rr(e))return M("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return M("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return wi(e).get("owner").next(t=>k.resolve(this.vi(t)))}Ci(e){return jo(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=We(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return k.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?k.resolve(!0):wi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new j(x.FAILED_PRECONDITION,jc);return!1}}return!(!this.networkEnabled||!this.inForeground)||jo(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&M("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new hl(e,It.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>jo(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Ja.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new yb(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ya.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?vE:l===16?yE:l===15?tu:l===14?up:l===13?lp:l===12?gE:l===11?cp:void Q()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new hl(c,this.Qr?this.Qr.next():It.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new j(x.FAILED_PRECONDITION,rp);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return wi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new j(x.FAILED_PRECONDITION,jc)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return wi(e).put("owner",t)}static D(){return zn.D()}bi(e){const t=wi(e);return t.get("owner").next(r=>this.vi(r)?(M("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):k.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;om()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return M("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function wi(n){return We(n,"owner")}function jo(n){return We(n,"clientMetadata")}function dg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class yu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ce(),s=ce();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yu(e,t.fromCache,r,s)}}/**
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
 */class Ob{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hg{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return om()?8:ip(He())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ob;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(gs()<=le.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",ys(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(gs()<=le.DEBUG&&M("QueryEngine","Query:",ys(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(gs()<=le.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",ys(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):k.resolve())}Yi(e,t){if(Mh(t))return k.resolve(null);let r=Ct(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=_l(t,null,"F"),r=Ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(t,c);return this.ns(t,u,o,l.readTime)?this.Yi(e,_l(t,null,"F")):this.rs(e,u,t,l)}))})))}Zi(e,t,r,s){return Mh(t)||s.isEqual(ee.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?k.resolve(null):(gs()<=le.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ys(t)),this.rs(e,o,t,tp(s,-1)).next(c=>c))})}ts(e,t){let r=new ye(Rp(e));return t.forEach((s,i)=>{ho(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return gs()<=le.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",ys(t)),this.Ji.getDocumentsMatchingQuery(e,t,kt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Mb{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Ie(se),this._s=new sr(i=>Mr(i),uo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function fg(n,e,t,r){return new Mb(n,e,t,r)}async function mg(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ce();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function Bb(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const p=u.batch,y=p.keys();let w=k.resolve();return y.forEach(A=>{w=w.next(()=>h.getEntry(l,A)).next(P=>{const D=u.docVersions.get(A);Z(D!==null),P.version.compareTo(D)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),h.addEntry(P)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ce();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function pg(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Fb(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((h,p)=>{const y=s.get(p);if(!y)return;c.push(t.Ur.removeMatchingKeys(i,h.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,h.addedDocuments,p)));let w=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ue.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),s=s.insert(p,w),function(P,D,O){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(y,w,h)&&c.push(t.Ur.updateTargetData(i,w))});let l=Rt(),u=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push($b(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(ee.min())){const h=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return k.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.os=s,i))}function $b(n,e,t){let r=ce(),s=ce();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Rt();return t.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):M("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function Ub(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ra(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new fn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Vs(n,e,t){const r=Y(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!rr(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Rl(n,e,t){const r=Y(n);let s=ee.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const p=Y(l),y=p._s.get(h);return y!==void 0?k.resolve(p.os.get(y)):p.Ur.getTargetData(u,h)}(r,o,Ct(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:ee.min(),t?i:ce())).next(c=>(vg(r,Sp(e),c),{documents:c,Ts:i})))}function gg(n,e){const t=Y(n),r=Y(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function yg(n,e){const t=Y(n),r=t.us.get(e)||ee.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,tp(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(vg(t,e,s),s))}function vg(n,e,t){let r=n.us.get(e)||ee.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function ff(n,e){return`firestore_clients_${n}_${e}`}function mf(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function qc(n,e){return`firestore_targets_${n}_${e}`}class Pa{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new j(s.error.code,s.error.message))),o?new Pa(e,t,s.state,i):($e("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new j(r.error.code,r.error.message))),i?new Fi(e,r.state,s):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ca{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=iu();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=op(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Ca(e,i):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class vu{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new vu(t.clientId,t.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Pl{constructor(){this.activeTargetIds=iu()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gc{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Ie(se),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=ff(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Pl),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(ff(this.persistenceKey,r));if(s){const i=Ca.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(qc(this.persistenceKey,e));if(s){const i=Fi.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(qc(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return M("SharedClientState","READ",e,t),t}setItem(e,t){M("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){M("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(M("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=It.oe;if(i!=null)try{const c=JSON.parse(i);Z(typeof c=="number"),o=c}catch(c){$e("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==It.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new Pa(this.currentUser,e,t,r),i=mf(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=mf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=qc(this.persistenceKey,e),i=new Fi(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Ca.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Pa.Rs(new ct(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return Fi.Rs(s,t)}Ls(e){return vu.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);M("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=iu();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class _g{constructor(){this.so=new Pl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jb{_o(e){}shutdown(){}}/**
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
 */class pf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qo=null;function Kc(){return qo===null?qo=function(){return 268435456+Math.round(2147483648*Math.random())}():qo++,"0x"+qo.toString(16)}/**
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
 */const qb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Gb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const at="WebChannelConnection";class Kb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=Kc(),l=this.xo(t,r.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(t,l,u,s).then(h=>(M("RestConnection",`Received RPC '${t}' ${c}: `,h),h),h=>{throw Ki("RestConnection",`RPC '${t}' ${c} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gs}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=qb[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Kc();return new Promise((o,c)=>{const l=new Wm;l.setWithCredentials(!0),l.listenOnce(Qm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Yo.NO_ERROR:const h=l.getResponseJson();M(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Yo.TIMEOUT:M(at,`RPC '${e}' ${i} timed out`),c(new j(x.DEADLINE_EXCEEDED,"Request time out"));break;case Yo.HTTP_ERROR:const p=l.getStatus();if(M(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const w=y==null?void 0:y.error;if(w&&w.status&&w.message){const A=function(D){const O=D.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(O)>=0?O:x.UNKNOWN}(w.status);c(new j(A,w.message))}else c(new j(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new j(x.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{M(at,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);M(at,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",u,r,15)})}Bo(e,t,r){const s=Kc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Xm(),c=Jm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");M(at,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);let y=!1,w=!1;const A=new Gb({Io:D=>{w?M(at,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(y||(M(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),M(at,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},To:()=>p.close()}),P=(D,O,F)=>{D.listen(O,L=>{try{F(L)}catch(B){setTimeout(()=>{throw B},0)}})};return P(p,Ai.EventType.OPEN,()=>{w||(M(at,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),P(p,Ai.EventType.CLOSE,()=>{w||(w=!0,M(at,`RPC '${e}' stream ${s} transport closed`),A.So())}),P(p,Ai.EventType.ERROR,D=>{w||(w=!0,Ki(at,`RPC '${e}' stream ${s} transport errored:`,D),A.So(new j(x.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ai.EventType.MESSAGE,D=>{var O;if(!w){const F=D.data[0];Z(!!F);const L=F,B=L.error||((O=L[0])===null||O===void 0?void 0:O.error);if(B){M(at,`RPC '${e}' stream ${s} received error:`,B);const ne=B.status;let X=function(T){const S=qe[T];if(S!==void 0)return Fp(S)}(ne),b=B.message;X===void 0&&(X=x.INTERNAL,b="Unknown error status: "+ne+" with message "+B.message),w=!0,A.So(new j(X,b)),p.close()}else M(at,`RPC '${e}' stream ${s} received:`,F),A.bo(F)}}),P(c,Ym.STAT_EVENT,D=>{D.stat===ul.PROXY?M(at,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===ul.NOPROXY&&M(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}/**
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
 */function wg(){return typeof window<"u"?window:null}function ra(){return typeof document<"u"?document:null}/**
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
 */function Za(n){return new XE(n,!0)}/**
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
 */class Ig{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Tg{constructor(e,t,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ig(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?($e(t.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new j(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zb extends Tg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=tb(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?yt(o.readTime):ee.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Tl(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=wa(l)?{documents:Hp(i,l)}:{query:Wp(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=jp(i,o.resumeToken);const u=wl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ee.min())>0){c.readTime=Ls(i,o.snapshotVersion.toTimestamp());const u=wl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=rb(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Tl(this.serializer),t.removeTarget=e,this.a_(t)}}class Hb extends Tg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=nb(e.writeResults,e.commitTime),r=yt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Tl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ea(this.serializer,r))};this.a_(t)}}/**
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
 */class Wb extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Il(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(x.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Il(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(x.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Qb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($e(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Yb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Y(l);u.L_.add(4),await po(u),u.q_.set("Unknown"),u.L_.delete(4),await ec(u)}(this))})}),this.q_=new Qb(r,s)}}async function ec(n){if(Yr(n))for(const e of n.B_)await e(!0)}async function po(n){for(const e of n.B_)await e(!1)}function tc(n,e){const t=Y(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Iu(t)?wu(t):Ws(t).r_()&&_u(t,e))}function Os(n,e){const t=Y(n),r=Ws(t);t.N_.delete(e),r.r_()&&Eg(t,e),t.N_.size===0&&(r.r_()?r.o_():Yr(t)&&t.q_.set("Unknown"))}function _u(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ws(n).A_(e)}function Eg(n,e){n.Q_.xe(e),Ws(n).R_(e)}function wu(n){n.Q_=new WE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ws(n).start(),n.q_.v_()}function Iu(n){return Yr(n)&&!Ws(n).n_()&&n.N_.size>0}function Yr(n){return Y(n).L_.size===0}function bg(n){n.Q_=void 0}async function Jb(n){n.q_.set("Online")}async function Xb(n){n.N_.forEach((e,t)=>{_u(n,e)})}async function Zb(n,e){bg(n),Iu(n)?(n.q_.M_(e),wu(n)):n.q_.set("Unknown")}async function eA(n,e,t){if(n.q_.set("Online"),e instanceof Up&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ka(n,r)}else if(e instanceof na?n.Q_.Ke(e):e instanceof $p?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ee.min()))try{const r=await pg(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(Ue.EMPTY_BYTE_STRING,h.snapshotVersion)),Eg(i,l);const p=new fn(h.target,l,u,h.sequenceNumber);_u(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await ka(n,r)}}async function ka(n,e,t){if(!rr(e))throw e;n.L_.add(1),await po(n),n.q_.set("Offline"),t||(t=()=>pg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ec(n)})}function Ag(n,e){return e().catch(t=>ka(n,t,e))}async function Hs(n){const e=Y(n),t=Jn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;tA(e);)try{const s=await Ub(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,nA(e,s)}catch(s){await ka(e,s)}Sg(e)&&Rg(e)}function tA(n){return Yr(n)&&n.O_.length<10}function nA(n,e){n.O_.push(e);const t=Jn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Sg(n){return Yr(n)&&!Jn(n).n_()&&n.O_.length>0}function Rg(n){Jn(n).start()}async function rA(n){Jn(n).p_()}async function sA(n){const e=Jn(n);for(const t of n.O_)e.m_(t.mutations)}async function iA(n,e,t){const r=n.O_.shift(),s=lu.from(r,e,t);await Ag(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Hs(n)}async function oA(n,e){e&&Jn(n).V_&&await async function(r,s){if(function(o){return KE(o)&&o!==x.ABORTED}(s.code)){const i=r.O_.shift();Jn(r).s_(),await Ag(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hs(r)}}(n,e),Sg(n)&&Rg(n)}async function gf(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Yr(t);t.L_.add(3),await po(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ec(t)}async function Cl(n,e){const t=Y(n);e?(t.L_.delete(2),await ec(t)):e||(t.L_.add(2),await po(t),t.q_.set("Unknown"))}function Ws(n){return n.K_||(n.K_=function(t,r,s){const i=Y(t);return i.w_(),new zb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Jb.bind(null,n),Ro:Xb.bind(null,n),mo:Zb.bind(null,n),d_:eA.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Iu(n)?wu(n):n.q_.set("Unknown")):(await n.K_.stop(),bg(n))})),n.K_}function Jn(n){return n.U_||(n.U_=function(t,r,s){const i=Y(t);return i.w_(),new Hb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:rA.bind(null,n),mo:oA.bind(null,n),f_:sA.bind(null,n),g_:iA.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Hs(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Tu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Tu(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eu(n,e){if($e("AsyncQueue",`${e}: ${n}`),rr(n))return new j(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ss{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=Si(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class yf{constructor(){this.W_=new Ie(q.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ms{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Ms(e,t,Ss.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&za(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class aA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class cA{constructor(){this.queries=vf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=vf(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new j(x.ABORTED,"Firestore shutting down"))}}function vf(){return new sr(n=>Ap(n),za)}async function Pg(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new aA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Eu(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&bu(t)}async function Cg(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function lA(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&bu(t)}function uA(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function bu(n){n.Y_.forEach(e=>{e.next()})}var kl,_f;(_f=kl||(kl={})).ea="default",_f.Cache="cache";class kg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==kl.Cache}}/**
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
 */class Dg{constructor(e){this.key=e}}class Ng{constructor(e){this.key=e}}class dA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=Rp(e),this.Ra=new Ss(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new yf,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const y=s.get(h),w=ho(this.query,p)?p:null,A=!!y&&this.mutatedKeys.has(y.key),P=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let D=!1;y&&w?y.data.isEqual(w.data)?A!==P&&(r.track({type:3,doc:w}),D=!0):this.ga(y,w)||(r.track({type:2,doc:w}),D=!0,(l&&this.Aa(w,l)>0||u&&this.Aa(w,u)<0)&&(c=!0)):!y&&w?(r.track({type:0,doc:w}),D=!0):y&&!w&&(r.track({type:1,doc:y}),D=!0,(l||u)&&(c=!0)),D&&(w?(o=o.add(w),i=P?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(w,A){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return P(w)-P(A)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Ms(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new yf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Ng(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Dg(r))}),t}ba(e){this.Ta=e.Ts,this.da=ce();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ms.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class hA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class fA{constructor(e){this.key=e,this.va=!1}}class mA{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new sr(c=>Ap(c),za),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(q.comparator),this.Na=new Map,this.La=new pu,this.Ba={},this.ka=new Map,this.qa=Ur.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function pA(n,e,t=!0){const r=nc(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await xg(r,e,t,!0),s}async function gA(n,e){const t=nc(n);await xg(t,e,!0,!1)}async function xg(n,e,t,r){const s=await Ra(n.localStore,Ct(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Au(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&tc(n.remoteStore,s),c}async function Au(n,e,t,r,s){n.Ka=(p,y,w)=>async function(P,D,O,F){let L=D.view.ma(O);L.ns&&(L=await Rl(P.localStore,D.query,!1).then(({documents:b})=>D.view.ma(b,L)));const B=F&&F.targetChanges.get(D.targetId),ne=F&&F.targetMismatches.get(D.targetId)!=null,X=D.view.applyChanges(L,P.isPrimaryClient,B,ne);return Dl(P,D.targetId,X.wa),X.snapshot}(n,p,y,w);const i=await Rl(n.localStore,e,!0),o=new dA(e,i.Ts),c=o.ma(i.documents),l=mo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);Dl(n,t,u.wa);const h=new hA(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),u.snapshot}async function yA(n,e,t){const r=Y(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!za(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Os(r.remoteStore,s.targetId),Bs(r,s.targetId)}).catch(nr)):(Bs(r,s.targetId),await Vs(r.localStore,s.targetId,!0))}async function vA(n,e){const t=Y(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Os(t.remoteStore,r.targetId))}async function _A(n,e,t){const r=Cu(n);try{const s=await function(o,c){const l=Y(o),u=Ne.now(),h=c.reduce((w,A)=>w.add(A.key),ce());let p,y;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let A=Rt(),P=ce();return l.cs.getEntries(w,h).next(D=>{A=D,A.forEach((O,F)=>{F.isValidDocument()||(P=P.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,A)).next(D=>{p=D;const O=[];for(const F of c){const L=qE(F,p.get(F.key).overlayedDocument);L!=null&&O.push(new In(F.key,L,pp(L.value.mapValue),ut.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,O,c)}).next(D=>{y=D;const O=D.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(w,D.batchId,O)})}).then(()=>({batchId:y.batchId,changes:Cp(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ie(se)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,t),await ir(r,s.changes),await Hs(r.remoteStore)}catch(s){const i=Eu(s,"Failed to persist write");t.reject(i)}}async function Lg(n,e){const t=Y(n);try{const r=await Fb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Z(o.va):s.removedDocuments.size>0&&(Z(o.va),o.va=!1))}),await ir(t,r,e)}catch(r){await nr(r)}}function wf(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Y(o);l.onlineState=c;let u=!1;l.queries.forEach((h,p)=>{for(const y of p.j_)y.Z_(c)&&(u=!0)}),u&&bu(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wA(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ie(q.comparator);o=o.insert(i,Oe.newNoDocument(i,ee.min()));const c=ce().add(i),l=new fo(ee.min(),new Map,new Ie(se),o,c);await Lg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Pu(r)}else await Vs(r.localStore,e,!1).then(()=>Bs(r,e,t)).catch(nr)}async function IA(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await Bb(t.localStore,e);Ru(t,r,null),Su(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ir(t,s)}catch(s){await nr(s)}}async function TA(n,e,t){const r=Y(n);try{const s=await function(o,c){const l=Y(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Z(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Ru(r,e,t),Su(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ir(r,s)}catch(s){await nr(s)}}function Su(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Ru(n,e,t){const r=Y(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Bs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Vg(n,r)})}function Vg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Os(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Pu(n))}function Dl(n,e,t){for(const r of t)r instanceof Dg?(n.La.addReference(r.key,e),EA(n,r)):r instanceof Ng?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Vg(n,r.key)):Q()}function EA(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+t),n.xa.add(r),Pu(n))}function Pu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new q(fe.fromString(e)),r=n.qa.next();n.Na.set(r,new fA(t)),n.Oa=n.Oa.insert(t,r),tc(n.remoteStore,new fn(Ct(Ka(t.path)),r,"TargetPurposeLimboResolution",It.oe))}}async function ir(n,e,t){const r=Y(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(u=>{var h;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=yu.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=Y(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(u,y=>k.forEach(y.$i,w=>h.persistence.referenceDelegate.addReference(p,y.targetId,w)).next(()=>k.forEach(y.Ui,w=>h.persistence.referenceDelegate.removeReference(p,y.targetId,w)))))}catch(p){if(!rr(p))throw p;M("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const y=p.targetId;if(!p.fromCache){const w=h.os.get(y),A=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(A);h.os=h.os.insert(y,P)}}}(r.localStore,i))}async function bA(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await mg(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new j(x.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ir(t,r.hs)}}function AA(n,e){const t=Y(n),r=t.Na.get(e);if(r&&r.va)return ce().add(r.key);{let s=ce();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function SA(n,e){const t=Y(n),r=await Rl(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&Dl(t,e.targetId,s.wa),s}async function RA(n,e){const t=Y(n);return yg(t.localStore,e).then(r=>ir(t,r))}async function PA(n,e,t,r){const s=Y(n),i=await function(c,l){const u=Y(c),h=Y(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",p=>h.Mn(p,l).next(y=>y?u.localDocuments.getDocuments(p,y):k.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Hs(s.remoteStore):t==="acknowledged"||t==="rejected"?(Ru(s,e,r||null),Su(s,e),function(c,l){Y(Y(c).mutationQueue).On(l)}(s.localStore,e)):Q(),await ir(s,i)):M("SyncEngine","Cannot apply mutation batch with id: "+e)}async function CA(n,e){const t=Y(n);if(nc(t),Cu(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await If(t,r.toArray());t.Qa=!0,await Cl(t.remoteStore,!0);for(const i of s)tc(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Bs(t,o),Vs(t.localStore,o,!0))),Os(t.remoteStore,o)}),await s,await If(t,r),function(o){const c=Y(o);c.Na.forEach((l,u)=>{Os(c.remoteStore,u)}),c.La.pr(),c.Na=new Map,c.Oa=new Ie(q.comparator)}(t),t.Qa=!1,await Cl(t.remoteStore,!1)}}async function If(n,e,t){const r=Y(n),s=[],i=[];for(const o of e){let c;const l=r.Ma.get(o);if(l&&l.length!==0){c=await Ra(r.localStore,Ct(l[0]));for(const u of l){const h=r.Fa.get(u),p=await SA(r,h);p.snapshot&&i.push(p.snapshot)}}else{const u=await gg(r.localStore,o);c=await Ra(r.localStore,u),await Au(r,Og(u),o,!1,c.resumeToken)}s.push(c)}return r.Ca.d_(i),s}function Og(n){return Ep(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function kA(n){return function(t){return Y(Y(t).persistence).Qi()}(Y(n).localStore)}async function DA(n,e,t,r){const s=Y(n);if(s.Qa)return void M("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await yg(s.localStore,Sp(i[0])),c=fo.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ue.EMPTY_BYTE_STRING);await ir(s,o,c);break}case"rejected":await Vs(s.localStore,e,!0),Bs(s,e,r);break;default:Q()}}async function NA(n,e,t){const r=nc(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){M("SyncEngine","Adding an already active target "+s);continue}const i=await gg(r.localStore,s),o=await Ra(r.localStore,i);await Au(r,Og(i),o.targetId,!1,o.resumeToken),tc(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await Vs(r.localStore,s,!1).then(()=>{Os(r.remoteStore,s),Bs(r,s)}).catch(nr)}}function nc(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wA.bind(null,e),e.Ca.d_=lA.bind(null,e.eventManager),e.Ca.$a=uA.bind(null,e.eventManager),e}function Cu(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TA.bind(null,e),e}class eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Za(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return fg(this.persistence,new hg,e.initialUser,this.serializer)}Ga(e){return new ug(Xa.Zr,this.serializer)}Wa(e){return new _g}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eo.provider={build:()=>new eo};class Mg extends eo{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Cu(this.Ja.syncEngine),await Hs(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return fg(this.persistence,new hg,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new wb(r,e.asyncQueue,t)}Ha(e,t){const r=new ZT(t,this.persistence);return new XT(e.asyncQueue,r)}Ga(e){const t=dg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new gu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,wg(),ra(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new _g}}class xA extends Mg{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Gc&&(this.sharedClientState.syncEngine={no:PA.bind(null,t),ro:DA.bind(null,t),io:NA.bind(null,t),Qi:kA.bind(null,t),eo:RA.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await CA(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=wg();if(!Gc.D(t))throw new j(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=dg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Gc(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class to{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bA.bind(null,this.syncEngine),await Cl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cA}()}createDatastore(e){const t=Za(e.databaseInfo.databaseId),r=function(i){return new Kb(i)}(e.databaseInfo);return function(i,o,c,l){return new Wb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new Yb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>wf(this.syncEngine,t,0),function(){return pf.D()?new pf:new jb}())}createSyncEngine(e,t){return function(s,i,o,c,l,u,h){const p=new mA(s,i,o,c,l,u);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Y(s);M("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await po(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}to.provider={build:()=>new to};/**
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
 */class Bg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class LA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=Zm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{M("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(M("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Eu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zc(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await mg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Tf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await VA(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>gf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>gf(e.remoteStore,s)),n._onlineComponents=e}async function VA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await zc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ki("Error using user provided cache. Falling back to memory cache: "+t),await zc(n,new eo)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await zc(n,new eo);return n._offlineComponents}async function Fg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Tf(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Tf(n,new to))),n._onlineComponents}function OA(n){return Fg(n).then(e=>e.syncEngine)}async function $g(n){const e=await Fg(n),t=e.eventManager;return t.onListen=pA.bind(null,e.syncEngine),t.onUnlisten=yA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vA.bind(null,e.syncEngine),t}function MA(n,e,t={}){const r=new nn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new Bg({next:y=>{h.Za(),o.enqueueAndForget(()=>Cg(i,p));const w=y.docs.has(c);!w&&y.fromCache?u.reject(new j(x.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&y.fromCache&&l&&l.source==="server"?u.reject(new j(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(y)},error:y=>u.reject(y)}),p=new kg(Ka(c.path),h,{includeMetadataChanges:!0,_a:!0});return Pg(i,p)}(await $g(n),n.asyncQueue,e,t,r)),r.promise}function BA(n,e,t={}){const r=new nn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new Bg({next:y=>{h.Za(),o.enqueueAndForget(()=>Cg(i,p)),y.fromCache&&l.source==="server"?u.reject(new j(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(y)},error:y=>u.reject(y)}),p=new kg(c,h,{includeMetadataChanges:!0,_a:!0});return Pg(i,p)}(await $g(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Ug(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ef=new Map;/**
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
 */function ku(n,e,t){if(!t)throw new j(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function FA(n,e,t,r){if(e===!0&&r===!0)throw new j(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bf(n){if(!q.isDocumentKey(n))throw new j(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Af(n){if(q.isDocumentKey(n))throw new j(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function rc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q()}function Ut(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rc(n);throw new j(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Sf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ug((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jT;switch(r.type){case"firstParty":return new KT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ef.get(t);r&&(M("ComponentProvider","Removing Datastore"),Ef.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Jr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class vt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Hn extends Jr{constructor(e,t,r){super(e,t,Ka(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new q(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function Ge(n,e,...t){if(n=Ae(n),ku("collection","path",e),n instanceof sc){const r=fe.fromString(e,...t);return Af(r),new Hn(n,null,r)}{if(!(n instanceof vt||n instanceof Hn))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return Af(r),new Hn(n.firestore,null,r)}}function $A(n,e){if(n=Ut(n,sc),ku("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new j(x.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Jr(n,null,function(r){return new Ks(fe.emptyPath(),r)}(e))}function te(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=Zm.newId()),ku("doc","path",e),n instanceof sc){const r=fe.fromString(e,...t);return bf(r),new vt(n,null,new q(r))}{if(!(n instanceof vt||n instanceof Hn))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return bf(r),new vt(n.firestore,n instanceof Hn?n.converter:null,new q(r))}}/**
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
 */class Rf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ig(this,"async_queue_retry"),this.Vu=()=>{const r=ra();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ra();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ra();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new nn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!rr(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw $e("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Tu.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Xr extends sc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Rf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rf(e),this._firestoreClient=void 0,await e}}}function UA(n,e,t){t||(t="(default)");const r=Hr(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Rs(i,e))return s;throw new j(x.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new j(x.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function Du(n){if(n._terminated)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jA(n),n._firestoreClient}function jA(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,u,h){return new wE(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ug(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new LA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class Fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fs(Ue.fromBase64String(e))}catch(t){throw new j(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fs(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ic{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class go{constructor(e){this._methodName=e}}/**
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
 */class Nu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */class xu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const qA=/^__.*__$/;class GA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new In(e,this.data,this.fieldMask,t,this.fieldTransforms):new zs(e,this.data,t,this.fieldTransforms)}}class jg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new In(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class oc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new oc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Da(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(qg(this.Cu)&&qA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class KA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Za(e)}Qu(e,t,r,s=!1){return new oc({Cu:e,methodName:t,qu:r,path:De.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ac(n){const e=n._freezeSettings(),t=Za(n._databaseId);return new KA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Gg(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Ou("Data must be an object, but it was:",o,r);const c=Kg(r,o);let l,u;if(i.merge)l=new Tt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const y=Nl(e,p,t);if(!o.contains(y))throw new j(x.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Hg(h,y)||h.push(y)}l=new Tt(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new GA(new lt(c),l,u)}class cc extends go{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cc}}function zA(n,e,t){return new oc({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Lu extends go{_toFieldTransform(e){return new au(e.path,new Ns)}isEqual(e){return e instanceof Lu}}class Vu extends go{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=zA(this,e,!0),r=this.Ku.map(i=>Qs(i,t)),s=new Br(r);return new au(e.path,s)}isEqual(e){return e instanceof Vu&&Rs(this.Ku,e.Ku)}}function HA(n,e,t,r){const s=n.Qu(1,e,t);Ou("Data must be an object, but it was:",s,r);const i=[],o=lt.empty();Qr(r,(l,u)=>{const h=Mu(e,l,t);u=Ae(u);const p=s.Nu(h);if(u instanceof cc)i.push(h);else{const y=Qs(u,p);y!=null&&(i.push(h),o.set(h,y))}});const c=new Tt(i);return new jg(o,c,s.fieldTransforms)}function WA(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[Nl(e,r,t)],l=[s];if(i.length%2!=0)throw new j(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)c.push(Nl(e,i[y])),l.push(i[y+1]);const u=[],h=lt.empty();for(let y=c.length-1;y>=0;--y)if(!Hg(u,c[y])){const w=c[y];let A=l[y];A=Ae(A);const P=o.Nu(w);if(A instanceof cc)u.push(w);else{const D=Qs(A,P);D!=null&&(u.push(w),h.set(w,D))}}const p=new Tt(u);return new jg(h,p,o.fieldTransforms)}function QA(n,e,t,r=!1){return Qs(t,n.Qu(r?4:3,e))}function Qs(n,e){if(zg(n=Ae(n)))return Ou("Unsupported field value:",e,n),Kg(n,e);if(n instanceof go)return function(r,s){if(!qg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Qs(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ME(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ne.fromDate(r);return{timestampValue:Ls(s.serializer,i)}}if(r instanceof Ne){const i=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ls(s.serializer,i)}}if(r instanceof Nu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fs)return{bytesValue:jp(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof xu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return ou(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${rc(r)}`)}(n,e)}function Kg(n,e){const t={};return dp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(n,(r,s)=>{const i=Qs(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function zg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ne||n instanceof Nu||n instanceof Fs||n instanceof vt||n instanceof go||n instanceof xu)}function Ou(n,e,t){if(!zg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=rc(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Nl(n,e,t){if((e=Ae(e))instanceof ic)return e._internalPath;if(typeof e=="string")return Mu(n,e);throw Da("Field path arguments must be of type string or ",n,!1,void 0,t)}const YA=new RegExp("[~\\*/\\[\\]]");function Mu(n,e,t){if(e.search(YA)>=0)throw Da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ic(...e.split("."))._internalPath}catch{throw Da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Da(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new j(x.INVALID_ARGUMENT,c+n+l)}function Hg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Wg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Bu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JA extends Wg{data(){return super.data()}}function Bu(n,e){return typeof e=="string"?Mu(n,e):e instanceof ic?e._internalPath:e._delegate._internalPath}/**
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
 */function XA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fu{}class ZA extends Fu{}function $s(n,e,...t){let r=[];e instanceof Fu&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof $u).length,c=i.filter(l=>l instanceof lc).length;if(o>1||o>0&&c>0)throw new j(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class lc extends ZA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new lc(e,t,r)}_apply(e){const t=this._parse(e);return Qg(e._query,t),new Jr(e.firestore,e.converter,vl(e._query,t))}_parse(e){const t=ac(e.firestore);return function(i,o,c,l,u,h,p){let y;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new j(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Cf(p,h);const w=[];for(const A of p)w.push(Pf(l,i,A));y={arrayValue:{values:w}}}else y=Pf(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Cf(p,h),y=QA(c,o,p,h==="in"||h==="not-in");return ue.create(u,h,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Cr(n,e,t){const r=e,s=Bu("where",n);return lc._create(s,r,t)}class $u extends Fu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new $u(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ge.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Qg(o,l),o=vl(o,l)}(e._query,t),new Jr(e.firestore,e.converter,vl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Pf(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new j(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bp(e)&&t.indexOf("/")!==-1)throw new j(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(fe.fromString(t));if(!q.isDocumentKey(r))throw new j(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ji(n,new q(r))}if(t instanceof vt)return Ji(n,t._key);throw new j(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rc(t)}.`)}function Cf(n,e){if(!Array.isArray(n)||n.length===0)throw new j(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qg(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class eS{convertValue(e,t="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Qr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Se(o.doubleValue));return new xu(i)}convertGeoPoint(e){return new Nu(Se(e.latitude),Se(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ru(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Qi(e));default:return null}}convertTimestamp(e){const t=vn(e);return new Ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=fe.fromString(e);Z(Xp(r));const s=new Vr(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||$e(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Yg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Ci{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jg extends Wg{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Bu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class sa extends Jg{data(e={}){return super.data(e)}}class tS{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ci(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new sa(this._firestore,this._userDataWriter,r.key,r,new Ci(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new sa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ci(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new sa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ci(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:nS(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function Xn(n){n=Ut(n,vt);const e=Ut(n.firestore,Xr);return MA(Du(e),n._key).then(t=>rS(e,n,t))}class Xg extends eS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function ze(n){n=Ut(n,Jr);const e=Ut(n.firestore,Xr),t=Du(e),r=new Xg(e);return XA(n._query),BA(t,n._query).then(s=>new tS(e,r,n,s))}function pt(n,e,t){n=Ut(n,vt);const r=Ut(n.firestore,Xr),s=Yg(n.converter,e,t);return uc(r,[Gg(ac(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ut.none())])}function Ke(n,e,t,...r){n=Ut(n,vt);const s=Ut(n.firestore,Xr),i=ac(s);let o;return o=typeof(e=Ae(e))=="string"||e instanceof ic?WA(i,"updateDoc",n._key,e,t,r):HA(i,"updateDoc",n._key,e),uc(s,[o.toMutation(n._key,ut.exists(!0))])}function Lt(n){return uc(Ut(n.firestore,Xr),[new Qa(n._key,ut.none())])}function Zg(n,e){const t=Ut(n.firestore,Xr),r=te(n),s=Yg(n.converter,e);return uc(t,[Gg(ac(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ut.exists(!1))]).then(()=>r)}function uc(n,e){return function(r,s){const i=new nn;return r.asyncQueue.enqueueAndForget(async()=>_A(await OA(r),s,i)),i.promise}(Du(n),e)}function rS(n,e,t){const r=t.docs.get(e._key),s=new Xg(n);return new Jg(n,s,e._key,r,new Ci(t.hasPendingWrites,t.fromCache),e.converter)}class sS{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=cS(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function iS(n){return new sS(n)}class oS{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=to.provider,this._offlineComponentProvider={build:t=>new Mg(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class aS{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=to.provider,this._offlineComponentProvider={build:t=>new xA(t,e==null?void 0:e.cacheSizeBytes)}}}function cS(n){return new oS(void 0)}function lS(){return new aS}function be(){return new Lu("serverTimestamp")}function ey(...n){return new Vu("arrayUnion",n)}(function(e,t=!0){(function(s){Gs=s})(Wr),Ft(new xt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Xr(new qT(r.getProvider("auth-internal")),new HT(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new j(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vr(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Et(Ih,"4.7.3",e),Et(Ih,"4.7.3","esm2017")})();/**
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
 */const ty="firebasestorage.googleapis.com",ny="storageBucket",uS=2*60*1e3,dS=10*60*1e3;/**
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
 */class Be extends jt{constructor(e,t,r=0){super(Hc(e),`Firebase Storage: ${t} (${Hc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Me;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Me||(Me={}));function Hc(n){return"storage/"+n}function Uu(){const n="An unknown error occurred, please check the error payload for server response.";return new Be(Me.UNKNOWN,n)}function hS(n){return new Be(Me.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function fS(n){return new Be(Me.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mS(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be(Me.UNAUTHENTICATED,n)}function pS(){return new Be(Me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gS(n){return new Be(Me.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function yS(){return new Be(Me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vS(){return new Be(Me.CANCELED,"User canceled the upload/download.")}function _S(n){return new Be(Me.INVALID_URL,"Invalid URL '"+n+"'.")}function wS(n){return new Be(Me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function IS(){return new Be(Me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ny+"' property when initializing the app?")}function TS(){return new Be(Me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ES(){return new Be(Me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bS(n){return new Be(Me.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xl(n){return new Be(Me.INVALID_ARGUMENT,n)}function ry(){return new Be(Me.APP_DELETED,"The Firebase app was deleted.")}function AS(n){return new Be(Me.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $i(n,e){return new Be(Me.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ii(n){throw new Be(Me.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Pt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Pt.makeFromUrl(e,t)}catch{return new Pt(e,"")}if(r.path==="")return r;throw wS(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(B){B.path_=decodeURIComponent(B.path)}const h="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${h}/b/${s}/o${y}`,"i"),A={bucket:1,path:3},P=t===ty?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",O=new RegExp(`^https?://${P}/${s}/${D}`,"i"),L=[{regex:c,indices:l,postModify:i},{regex:w,indices:A,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let B=0;B<L.length;B++){const ne=L[B],X=ne.regex.exec(e);if(X){const b=X[ne.indices.bucket];let _=X[ne.indices.path];_||(_=""),r=new Pt(b,_),ne.postModify(r);break}}if(r==null)throw _S(e);return r}}class SS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function RS(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function h(...D){u||(u=!0,e.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,n(w,l())},D)}function y(){i&&clearTimeout(i)}function w(D,...O){if(u){y();return}if(D){y(),h.call(null,D,...O);return}if(l()||o){y(),h.call(null,D,...O);return}r<64&&(r*=2);let L;c===1?(c=2,L=0):L=(r+Math.random())*1e3,p(L)}let A=!1;function P(D){A||(A=!0,y(),!u&&(s!==null?(D||(c=2),clearTimeout(s),p(0)):D||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,P(!0)},t),P}function PS(n){n(!1)}/**
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
 */function CS(n){return n!==void 0}function kS(n){return typeof n=="object"&&!Array.isArray(n)}function ju(n){return typeof n=="string"||n instanceof String}function kf(n){return qu()&&n instanceof Blob}function qu(){return typeof Blob<"u"}function Df(n,e,t,r){if(r<e)throw xl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw xl(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Gu(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function sy(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var kr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(kr||(kr={}));/**
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
 */function DS(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class NS{constructor(e,t,r,s,i,o,c,l,u,h,p,y=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=p,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,A)=>{this.resolve_=w,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Go(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===kr.NO_ERROR,l=i.getStatus();if(!c||DS(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===kr.ABORT;r(!1,new Go(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Go(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());CS(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Uu();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?ry():vS();o(l)}else{const l=yS();o(l)}};this.canceled_?t(!1,new Go(!1,null,!0)):this.backoffId_=RS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Go{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function xS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function LS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VS(n,e){e&&(n["X-Firebase-GMPID"]=e)}function OS(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function MS(n,e,t,r,s,i,o=!0){const c=sy(n.urlParams),l=n.url+c,u=Object.assign({},n.headers);return VS(u,e),xS(u,t),LS(u,i),OS(u,r),new NS(l,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
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
 */function BS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FS(...n){const e=BS();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(qu())return new Blob(n);throw new Be(Me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function $S(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function US(n){if(typeof atob>"u")throw bS("base-64");return atob(n)}/**
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
 */const Bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wc{constructor(e,t){this.data=e,this.contentType=t||null}}function iy(n,e){switch(n){case Bt.RAW:return new Wc(oy(e));case Bt.BASE64:case Bt.BASE64URL:return new Wc(ay(n,e));case Bt.DATA_URL:return new Wc(qS(e),GS(e))}throw Uu()}function oy(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function jS(n){let e;try{e=decodeURIComponent(n)}catch{throw $i(Bt.DATA_URL,"Malformed data URL.")}return oy(e)}function ay(n,e){switch(n){case Bt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw $i(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Bt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw $i(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=US(e)}catch(s){throw s.message.includes("polyfill")?s:$i(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class cy{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw $i(Bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=KS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function qS(n){const e=new cy(n);return e.base64?ay(Bt.BASE64,e.rest):jS(e.rest)}function GS(n){return new cy(n).contentType}function KS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class qn{constructor(e,t){let r=0,s="";kf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(kf(this.data_)){const r=this.data_,s=$S(r,e,t);return s===null?null:new qn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new qn(r,!0)}}static getBlob(...e){if(qu()){const t=e.map(r=>r instanceof qn?r.data_:r);return new qn(FS.apply(null,t))}else{const t=e.map(o=>ju(o)?iy(Bt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new qn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function ly(n){let e;try{e=JSON.parse(n)}catch{return null}return kS(e)?e:null}/**
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
 */function zS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function HS(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function uy(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function WS(n,e){return e}class mt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||WS}}let Ko=null;function QS(n){return!ju(n)||n.length<2?n:uy(n)}function dy(){if(Ko)return Ko;const n=[];n.push(new mt("bucket")),n.push(new mt("generation")),n.push(new mt("metageneration")),n.push(new mt("name","fullPath",!0));function e(i,o){return QS(o)}const t=new mt("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new mt("size");return s.xform=r,n.push(s),n.push(new mt("timeCreated")),n.push(new mt("updated")),n.push(new mt("md5Hash",null,!0)),n.push(new mt("cacheControl",null,!0)),n.push(new mt("contentDisposition",null,!0)),n.push(new mt("contentEncoding",null,!0)),n.push(new mt("contentLanguage",null,!0)),n.push(new mt("contentType",null,!0)),n.push(new mt("metadata","customMetadata",!0)),Ko=n,Ko}function YS(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Pt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function JS(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return YS(r,n),r}function hy(n,e,t){const r=ly(e);return r===null?null:JS(n,r,t)}function XS(n,e,t,r){const s=ly(e);if(s===null||!ju(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=n.bucket,p=n.fullPath,y="/b/"+o(h)+"/o/"+o(p),w=Gu(y,t,r),A=sy({alt:"media",token:u});return w+A})[0]}function ZS(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class fy{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function my(n){if(!n)throw Uu()}function eR(n,e){function t(r,s){const i=hy(n,s,e);return my(i!==null),i}return t}function tR(n,e){function t(r,s){const i=hy(n,s,e);return my(i!==null),XS(i,s,n.host,n._protocol)}return t}function py(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=pS():s=mS():t.getStatus()===402?s=fS(n.bucket):t.getStatus()===403?s=gS(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function nR(n){const e=py(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=hS(n.path)),i.serverResponse=s.serverResponse,i}return t}function rR(n,e,t){const r=e.fullServerUrl(),s=Gu(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new fy(s,i,tR(n,t),o);return c.errorHandler=nR(e),c}function sR(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function iR(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=sR(null,e)),r}function oR(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let L="";for(let B=0;B<2;B++)L=L+Math.random().toString().slice(2);return L}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=iR(e,r,s),h=ZS(u,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,y=`\r
--`+l+"--",w=qn.getBlob(p,r,y);if(w===null)throw TS();const A={name:u.fullPath},P=Gu(i,n.host,n._protocol),D="POST",O=n.maxUploadRetryTime,F=new fy(P,D,eR(n,t),O);return F.urlParams=A,F.headers=o,F.body=w.uploadData(),F.errorHandler=py(e),F}class aR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=kr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=kr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=kr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw Ii("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ii("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ii("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ii("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ii("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class cR extends aR{initXhr(){this.xhr_.responseType="text"}}function gy(){return new cR}/**
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
 */class jr{constructor(e,t){this._service=e,t instanceof Pt?this._location=t:this._location=Pt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new jr(e,t)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uy(this._location.path)}get storage(){return this._service}get parent(){const e=zS(this._location.path);if(e===null)return null;const t=new Pt(this._location.bucket,e);return new jr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw AS(e)}}function lR(n,e,t){n._throwIfRoot("uploadBytes");const r=oR(n.storage,n._location,dy(),new qn(e,!0),t);return n.storage.makeRequestWithTokens(r,gy).then(s=>({metadata:s,ref:n}))}function uR(n,e,t=Bt.RAW,r){n._throwIfRoot("uploadString");const s=iy(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),lR(n,s.data,i)}function dR(n){n._throwIfRoot("getDownloadURL");const e=rR(n.storage,n._location,dy());return n.storage.makeRequestWithTokens(e,gy).then(t=>{if(t===null)throw ES();return t})}function hR(n,e){const t=HS(n._location.path,e),r=new Pt(n._location.bucket,t);return new jr(n.storage,r)}/**
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
 */function fR(n){return/^[A-Za-z]+:\/\//.test(n)}function mR(n,e){return new jr(n,e)}function yy(n,e){if(n instanceof Ku){const t=n;if(t._bucket==null)throw IS();const r=new jr(t,t._bucket);return e!=null?yy(r,e):r}else return e!==void 0?hR(n,e):n}function pR(n,e){if(e&&fR(e)){if(n instanceof Ku)return mR(n,e);throw xl("To use ref(service, url), the first argument must be a Storage instance.")}else return yy(n,e)}function Nf(n,e){const t=e==null?void 0:e[ny];return t==null?null:Pt.makeFromBucketSpec(t,n)}function gR(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:n_(s,n.app.options.projectId))}class Ku{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ty,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uS,this._maxUploadRetryTime=dS,this._requests=new Set,s!=null?this._bucket=Pt.makeFromBucketSpec(s,this._host):this._bucket=Nf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=Nf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Df("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Df("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new SS(ry());{const o=MS(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const xf="@firebase/storage",Lf="0.13.2";/**
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
 */const vy="storage";function _y(n,e,t,r){return n=Ae(n),uR(n,e,t,r)}function wy(n){return n=Ae(n),dR(n)}function Iy(n,e){return n=Ae(n),pR(n,e)}function yR(n=jl(),e){n=Ae(n);const r=Hr(n,vy).getImmediate({identifier:e}),s=e_("storage");return s&&vR(r,...s),r}function vR(n,e,t,r={}){gR(n,e,t,r)}function _R(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Ku(t,r,s,e,Wr)}function wR(){Ft(new xt(vy,_R,"PUBLIC").setMultipleInstances(!0)),Et(xf,Lf,""),Et(xf,Lf,"esm2017")}wR();const Ty="@firebase/installations",zu="0.6.9";/**
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
 */const Ey=1e4,by=`w:${zu}`,Ay="FIS_v2",IR="https://firebaseinstallations.googleapis.com/v1",TR=60*60*1e3,ER="installations",bR="Installations";/**
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
 */const AR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qr=new zr(ER,bR,AR);function Sy(n){return n instanceof jt&&n.code.includes("request-failed")}/**
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
 */function Ry({projectId:n}){return`${IR}/projects/${n}/installations`}function Py(n){return{token:n.token,requestStatus:2,expiresIn:RR(n.expiresIn),creationTime:Date.now()}}async function Cy(n,e){const r=(await e.json()).error;return qr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ky({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function SR(n,{refreshToken:e}){const t=ky(n);return t.append("Authorization",PR(e)),t}async function Dy(n){const e=await n();return e.status>=500&&e.status<600?n():e}function RR(n){return Number(n.replace("s","000"))}function PR(n){return`${Ay} ${n}`}/**
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
 */async function CR({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Ry(n),s=ky(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:Ay,appId:n.appId,sdkVersion:by},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Dy(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Py(u.authToken)}}else throw await Cy("Create Installation",l)}/**
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
 */function Ny(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function kR(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const DR=/^[cdef][\w-]{21}$/,Ll="";function NR(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=xR(n);return DR.test(t)?t:Ll}catch{return Ll}}function xR(n){return kR(n).substr(0,22)}/**
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
 */function dc(n){return`${n.appName}!${n.appId}`}/**
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
 */const xy=new Map;function Ly(n,e){const t=dc(n);Vy(t,e),LR(t,e)}function Vy(n,e){const t=xy.get(n);if(t)for(const r of t)r(e)}function LR(n,e){const t=VR();t&&t.postMessage({key:n,fid:e}),OR()}let Ar=null;function VR(){return!Ar&&"BroadcastChannel"in self&&(Ar=new BroadcastChannel("[Firebase] FID Change"),Ar.onmessage=n=>{Vy(n.data.key,n.data.fid)}),Ar}function OR(){xy.size===0&&Ar&&(Ar.close(),Ar=null)}/**
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
 */const MR="firebase-installations-database",BR=1,Gr="firebase-installations-store";let Qc=null;function Hu(){return Qc||(Qc=Ba(MR,BR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Gr)}}})),Qc}async function Na(n,e){const t=dc(n),s=(await Hu()).transaction(Gr,"readwrite"),i=s.objectStore(Gr),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Ly(n,e.fid),e}async function Oy(n){const e=dc(n),r=(await Hu()).transaction(Gr,"readwrite");await r.objectStore(Gr).delete(e),await r.done}async function hc(n,e){const t=dc(n),s=(await Hu()).transaction(Gr,"readwrite"),i=s.objectStore(Gr),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&Ly(n,c.fid),c}/**
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
 */async function Wu(n){let e;const t=await hc(n.appConfig,r=>{const s=FR(r),i=$R(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Ll?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function FR(n){const e=n||{fid:NR(),registrationStatus:0};return My(e)}function $R(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(qr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=UR(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jR(n)}:{installationEntry:e}}async function UR(n,e){try{const t=await CR(n,e);return Na(n.appConfig,t)}catch(t){throw Sy(t)&&t.customData.serverCode===409?await Oy(n.appConfig):await Na(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function jR(n){let e=await Vf(n.appConfig);for(;e.registrationStatus===1;)await Ny(100),e=await Vf(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Wu(n);return r||t}return e}function Vf(n){return hc(n,e=>{if(!e)throw qr.create("installation-not-found");return My(e)})}function My(n){return qR(n)?{fid:n.fid,registrationStatus:0}:n}function qR(n){return n.registrationStatus===1&&n.registrationTime+Ey<Date.now()}/**
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
 */async function GR({appConfig:n,heartbeatServiceProvider:e},t){const r=KR(n,t),s=SR(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:by,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Dy(()=>fetch(r,c));if(l.ok){const u=await l.json();return Py(u)}else throw await Cy("Generate Auth Token",l)}function KR(n,{fid:e}){return`${Ry(n)}/${e}/authTokens:generate`}/**
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
 */async function Qu(n,e=!1){let t;const r=await hc(n.appConfig,i=>{if(!By(i))throw qr.create("not-registered");const o=i.authToken;if(!e&&WR(o))return i;if(o.requestStatus===1)return t=zR(n,e),i;{if(!navigator.onLine)throw qr.create("app-offline");const c=YR(i);return t=HR(n,c),c}});return t?await t:r.authToken}async function zR(n,e){let t=await Of(n.appConfig);for(;t.authToken.requestStatus===1;)await Ny(100),t=await Of(n.appConfig);const r=t.authToken;return r.requestStatus===0?Qu(n,e):r}function Of(n){return hc(n,e=>{if(!By(e))throw qr.create("not-registered");const t=e.authToken;return JR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function HR(n,e){try{const t=await GR(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Na(n.appConfig,r),t}catch(t){if(Sy(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Oy(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Na(n.appConfig,r)}throw t}}function By(n){return n!==void 0&&n.registrationStatus===2}function WR(n){return n.requestStatus===2&&!QR(n)}function QR(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+TR}function YR(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function JR(n){return n.requestStatus===1&&n.requestTime+Ey<Date.now()}/**
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
 */async function XR(n){const e=n,{installationEntry:t,registrationPromise:r}=await Wu(e);return r?r.catch(console.error):Qu(e).catch(console.error),t.fid}/**
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
 */async function ZR(n,e=!1){const t=n;return await e0(t),(await Qu(t,e)).token}async function e0(n){const{registrationPromise:e}=await Wu(n);e&&await e}/**
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
 */function t0(n){if(!n||!n.options)throw Yc("App Configuration");if(!n.name)throw Yc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Yc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Yc(n){return qr.create("missing-app-config-values",{valueName:n})}/**
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
 */const Fy="installations",n0="installations-internal",r0=n=>{const e=n.getProvider("app").getImmediate(),t=t0(e),r=Hr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},s0=n=>{const e=n.getProvider("app").getImmediate(),t=Hr(e,Fy).getImmediate();return{getId:()=>XR(t),getToken:s=>ZR(t,s)}};function i0(){Ft(new xt(Fy,r0,"PUBLIC")),Ft(new xt(n0,s0,"PRIVATE"))}i0();Et(Ty,zu);Et(Ty,zu,"esm2017");/**
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
 */const o0="/firebase-messaging-sw.js",a0="/firebase-cloud-messaging-push-scope",$y="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",c0="https://fcmregistrations.googleapis.com/v1",Uy="google.c.a.c_id",l0="google.c.a.c_l",u0="google.c.a.ts",d0="google.c.a.e";var Mf;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Mf||(Mf={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var no;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(no||(no={}));/**
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
 */function ln(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function h0(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Jc="fcm_token_details_db",f0=5,Bf="fcm_token_object_Store";async function m0(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Jc))return null;let e=null;return(await Ba(Jc,f0,{upgrade:async(r,s,i,o)=>{var c;if(s<2||!r.objectStoreNames.contains(Bf))return;const l=o.objectStore(Bf),u=await l.index("fcmSenderId").get(n);if(await l.clear(),!!u){if(s===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(c=h.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:ln(h.vapidKey)}}}else if(s===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ln(h.auth),p256dh:ln(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ln(h.vapidKey)}}}else if(s===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ln(h.auth),p256dh:ln(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ln(h.vapidKey)}}}}}})).close(),await Oc(Jc),await Oc("fcm_vapid_details_db"),await Oc("undefined"),p0(e)?e:null}function p0(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const g0="firebase-messaging-database",y0=1,ro="firebase-messaging-store";let Xc=null;function jy(){return Xc||(Xc=Ba(g0,y0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ro)}}})),Xc}async function v0(n){const e=qy(n),r=await(await jy()).transaction(ro).objectStore(ro).get(e);if(r)return r;{const s=await m0(n.appConfig.senderId);if(s)return await Yu(n,s),s}}async function Yu(n,e){const t=qy(n),s=(await jy()).transaction(ro,"readwrite");return await s.objectStore(ro).put(e,t),await s.done,e}function qy({appConfig:n}){return n.appId}/**
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
 */const _0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ht=new zr("messaging","Messaging",_0);/**
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
 */async function w0(n,e){const t=await Xu(n),r=Gy(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(Ju(n.appConfig),s)).json()}catch(o){throw ht.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ht.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw ht.create("token-subscribe-no-token");return i.token}async function I0(n,e){const t=await Xu(n),r=Gy(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Ju(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw ht.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ht.create("token-update-failed",{errorInfo:o})}if(!i.token)throw ht.create("token-update-no-token");return i.token}async function T0(n,e){const r={method:"DELETE",headers:await Xu(n)};try{const i=await(await fetch(`${Ju(n.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw ht.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw ht.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Ju({projectId:n}){return`${c0}/projects/${n}/registrations`}async function Xu({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Gy({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==$y&&(s.web.applicationPubKey=r),s}/**
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
 */const E0=7*24*60*60*1e3;async function b0(n){const e=await S0(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:ln(e.getKey("auth")),p256dh:ln(e.getKey("p256dh"))},r=await v0(n.firebaseDependencies);if(r){if(R0(r.subscriptionOptions,t))return Date.now()>=r.createTime+E0?A0(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await T0(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Ff(n.firebaseDependencies,t)}else return Ff(n.firebaseDependencies,t)}async function A0(n,e){try{const t=await I0(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Yu(n.firebaseDependencies,r),t}catch(t){throw t}}async function Ff(n,e){const r={token:await w0(n,e),createTime:Date.now(),subscriptionOptions:e};return await Yu(n,r),r.token}async function S0(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:h0(e)})}function R0(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
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
 */function $f(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return P0(e,n),C0(e,n),k0(e,n),e}function P0(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function C0(n,e){e.data&&(n.data=e.data)}function k0(n,e){var t,r,s,i,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;c&&(n.fcmOptions.link=c);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(n.fcmOptions.analyticsLabel=l)}/**
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
 */function D0(n){return typeof n=="object"&&!!n&&Uy in n}/**
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
 */function N0(n){if(!n||!n.options)throw Zc("App Configuration Object");if(!n.name)throw Zc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Zc(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Zc(n){return ht.create("missing-app-config-values",{valueName:n})}/**
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
 */class x0{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=N0(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function L0(n){try{n.swRegistration=await navigator.serviceWorker.register(o0,{scope:a0}),n.swRegistration.update().catch(()=>{})}catch(e){throw ht.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function V0(n,e){if(!e&&!n.swRegistration&&await L0(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ht.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function O0(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=$y)}/**
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
 */async function Ky(n,e){if(!navigator)throw ht.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ht.create("permission-blocked");return await O0(n,e==null?void 0:e.vapidKey),await V0(n,e==null?void 0:e.serviceWorkerRegistration),b0(n)}/**
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
 */async function M0(n,e,t){const r=B0(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[Uy],message_name:t[l0],message_time:t[u0],message_device_time:Math.floor(Date.now()/1e3)})}function B0(n){switch(n){case no.NOTIFICATION_CLICKED:return"notification_open";case no.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function F0(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===no.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler($f(t)):n.onMessageHandler.next($f(t)));const r=t.data;D0(r)&&r[d0]==="1"&&await M0(n,t.messageType,r)}const Uf="@firebase/messaging",jf="0.12.12";/**
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
 */const $0=n=>{const e=new x0(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>F0(e,t)),e},U0=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Ky(e,r)}};function j0(){Ft(new xt("messaging",$0,"PUBLIC")),Ft(new xt("messaging-internal",U0,"PRIVATE")),Et(Uf,jf),Et(Uf,jf,"esm2017")}/**
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
 */async function zy(){try{await am()}catch{return!1}return typeof window<"u"&&Fl()&&l_()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function q0(n,e){if(!navigator)throw ht.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function G0(n=jl()){return zy().then(e=>{if(!e)throw ht.create("unsupported-browser")},e=>{throw ht.create("indexed-db-unsupported")}),Hr(Ae(n),"messaging").getImmediate()}async function K0(n,e){return n=Ae(n),Ky(n,e)}function z0(n,e){return n=Ae(n),q0(n,e)}j0();const H0={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},fc=um(H0),yo=FT(fc),G=UA(fc,{localCache:iS({tabManager:lS()})}),Hy=yR(fc);let so=null;const Wy=zy().then(n=>(n&&(so=G0(fc)),n)),m={user:null,profile:null,isAdmin:!1,isSuperAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,meetups:[],currentCourse:null,courseMap:null,courseMapLayer:null,approvedDraft:{new:[],edit:[]},gpsTracking:!1,boostThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0,shareRequests:[],viewingUid:null,viewingName:null,viewedRounds:{},compareUid1:void 0,compareUid2:void 0};function H(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function K(n,e="info"){const t=document.createElement("div");t.className=`toast toast-${e}`,t.textContent=n,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("toast-show")),setTimeout(()=>{t.classList.remove("toast-show"),setTimeout(()=>t.remove(),300)},3500)}function or(n,e){const t=document.getElementById("confirm-modal");document.getElementById("confirm-msg").textContent=n,t.classList.remove("hidden");const r=()=>{t.classList.add("hidden"),window._confirmAccept=null,window._confirmReject=null};window._confirmAccept=()=>{r(),e()},window._confirmReject=()=>{r()}}const Qy="archery_v5",W0="archery_v4";function qf(){try{const n=JSON.parse(localStorage.getItem(Qy)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(W0)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function Dt(){try{localStorage.setItem(Qy,JSON.stringify({friends:m.friends,rounds:m.rounds.slice(0,200),courses:m.courses}))}catch(n){(n==null?void 0:n.name)==="QuotaExceededError"&&K("Lokalt lager er fuldt — nogle data blev ikke gemt","error")}}const Yy="archery_lang",xa={da:{nav:{scoring:"POINT",results:"RESULTATER",analyse:"ANALYSE",courses:"BANER",friends:"VENNER"},common:{cancel:"Annuller",confirm:"Bekræft",save:"Gem",add:"Tilføj",errorPrefix:"Fejl: ",linkCopied:"Link kopieret",unknown:"Ukendt",gender:{herre:"Herre",dame:"Dame"},bowClass:{langbue:"Langbue",trad:"Traditionel",recurve:"Recurve (olympisk)",compound:"Compound",barbue:"Barbue",buejaeger:"Buejæger",tradBuejaeger:"Traditionel buejæger",rytterbue:"Rytterbue"},bowClassShort:{langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejaeger:"Buejæger",tradBuejaeger:"Trad. buejæger",rytterbue:"Rytterbue"}},setup:{newRoundTitle:"🌲 Ny Runde",roundName:"Rundenavn",roundNameDefault:"Min Skydning",courseLabel:"Bane (valgfri)",noCourse:"-- Ingen bane --",targetCountLabel:"Antal mål",targets24:"24 Mål",targets30:"30 Mål",other:"Andet...",targetsUnit:"{n} mål",targetCountPlaceholder:"Antal mål",rulesetLabel:"Forbund",rulesetDgs1:"DGS (1 pil)",rulesetDgs2:"DGS (2 pile)",participantsTitle:"👥 Deltagere",searchFriend:"Søg ven...",addGuest:"+ Tilføj gæst",boostTitle:"🟢 Positiv forstærkning",enableBoost:"Aktiver positiv forstærkning",boostThreshPre:"Grøn prik hvis gns. mindst",boostThreshPost:"point/pil",gpsTitle:"📍 GPS",startTarget:"Startmål",autoFindTitle:"Auto-find nærmeste mål",autoFindSub:"Brug GPS automatisk",trackRouteTitle:"Spor rute og tid",trackRouteSub:"Registrer rute og afstand",showDistancesTitle:"Vis afstande på mål",showDistancesSub:"Kun visning — ikke redigering",startRoundBtn:"START RUNDE →"},active:{targetPrefix:"MÅL ",ofN:" af {n}",targetFallback:"Mål {n}",statAvg:"GNS.",statPoint:"POINT",statRemaining:"Tilbage",statRemainingSub:"mål",editTitle:"Rediger mål",editNamePlaceholder:"Navn på dyr",takePhoto:"📷 Tag billede",saveGps:"📍 Gem GPS",save:"Gem",cancel:"Annuller",back:"← TILBAGE",next:"NÆSTE →",finish:"AFSLUT →",skip:"⤵ SPRING",finishNow:"✓ AFSLUT NU",finishConfirm:"✓ BEKRÆFT",abort:"🗑 AFBRYD",abortConfirm:"🗑 BEKRÆFT",editBtn:"✏️ RET",runde:"RUNDE",snt:"SNT",pilLabel:"🎯 PIL {n}",arrowShort1:"P1",arrowShort2:"P2",distanceLabel:"{m} m",targetAvg:"Gns. dette mål: {v}",resumeConfirm:"Genoptag den igangværende runde?",networkError:"Runde gemt lokalt (netværksfejl)",shareError:"Kunne ikke dele runde med medskytte",notSavedLocally:"Runden er ikke gemt lokalt",gpsSaved:"GPS gemt!",gpsError:"GPS fejl: {msg}"},results:{title:"Mine runder",import:"⬆ Importér",empty:"Ingen runder endnu",roundFallback:"Runde",targetsUnit:"{n} mål",deleteConfirm:"Slet?",pointWord:"point",tableTargetHeader:"Mål",totalLabel:"Total",distArrow1:"Snit pil 1",distArrow2:"Snit pil 2",overallAvg:"Samlet snit",summaryArrow1:"SNIT PIL 1",summaryArrow2:"SNIT PIL 2",summaryPoints:"POINT",summaryArrows:"PILE",summaryAvgPerArrow:"SNT/PIL",actualTitle:"Kun skudte mål",actualSub:"{shot} af {total} mål",actualAvgPerArrow:"SNT/PIL",actualAvgPerTarget:"SNT/MÅL",popupDistance:"DISTANCE",popupTime:"TID",sendResultsBtn:"📧 Send resultater",doneBtn:"Afslut",noRoundToSend:"Ingen runde at sende"},email:{header:"3D Bueskydning - Resultater",subjectPrefix:"3D Bueskydning - ",dateLabel:"Dato: ",courseLabel:"Bane: ",resultsHeader:"--- RESULTATER ---",pointWord:" point",detailHeader:"--- DETALJERET ---",targetLabel:"  Mål ",totalLabel:"  Total: ",arrow1Label:"Snit pil 1",arrow2Label:"Snit pil 2",overallAvgLabel:"Samlet snit",distributionLabel:"  Fordeling: ",seeInApp:"Se resultater i appen:",loginRequired:"(Kræver login med din bruger)"},auth:{loginTab:"Log ind",signupTab:"Opret konto",emailPlaceholder:"Email",passwordPlaceholder:"Kodeord",loginBtn:"LOG IND",forgotPassword:"Glemt kodeord?",namePlaceholder:"Navn",signupPasswordPlaceholder:"Kodeord (min. 6 tegn)",selectGender:"Vælg køn",selectBowClass:"Vælg bueklasse",signupBtn:"OPRET KONTO",errUserNotFound:"Bruger ikke fundet.",errWrongPassword:"Forkert kodeord.",errInvalidCredential:"Ugyldig email eller kodeord.",errEmailInUse:"Email er allerede i brug.",errWeakPassword:"Kodeordet er for svagt (min. 6 tegn).",errInvalidEmail:"Ugyldig email-adresse.",errTooManyRequests:"For mange forsøg. Prøv igen senere.",errNetwork:"Netværksfejl. Tjek din forbindelse.",errGeneric:"Der opstod en fejl. Prøv igen.",errFillAllFields:"Udfyld alle felter.",errPasswordTooShort:"Adgangskoden skal være mindst 6 tegn.",errEnterEmailFirst:"Indtast din email først.",resetEmailSent:"Nulstillingsmail sendt!",privacyAcceptLabel:"Jeg accepterer privatlivspolitikken",newsletterOptLabel:"Jeg vil gerne modtage nyhedsbreve",errPrivacyRequired:"Du skal acceptere privatlivspolitikken for at oprette en konto."},roundImport:{importedToast:"Runde importeret: {name}",importError:"Fejl ved import: {msg}",noFileSelected:"Ingen fil valgt",loginFirst:"Log ind først",noPlayersInFile:"Filen indeholder ingen spillere med resultater",readError:"Kunne ikke læse filen: {msg}",guestFallback:"Gæst {n}",importedRoundFallback:"Importeret runde"},modals:{profil:{title:"Fuldfør din profil",desc:"Vælg køn og bueklasse for at aktivere sammenligning med andre skytter.",laterBtn:"Senere",validationMsg:"Vælg både køn og bueklasse.",saveError:"Fejl ved gem. Prøv igen."},privacy:{title:"Opdateret privatlivspolitik",desc:"Vi har opdateret vores privatlivspolitik. Læs den, og bekræft at du accepterer den, for at fortsætte.",readLink:"Læs privatlivspolitikken",continueBtn:"Fortsæt"},qr:{closeBtn:"Luk"},skip:{title:"Hop til mål",placeholder:"Målnummer",goBtn:"Hop"},guest:{title:"Tilføj gæst",placeholder:"Gæstens navn",addBtn:"Tilføj"},importPlayer:{title:"Hvem er du?"}},banners:{pwa:{text:"Installer 3D Bueskydning på din hjemmeskærm for hurtig adgang",installBtn:"INSTALLER APP"},iosInstall:{line1:"Installer 3D Bueskydning på din hjemmeskærm:",shareStepPre:"Tryk på ",shareStepPost:' Del-ikonet nederst i Safari, og vælg "Føj til hjemmeskærm".'},push:{text:"Få besked med det samme når nogen inviterer dig til en skydning – også når appen er lukket.",enableBtn:"AKTIVÉR NOTIFIKATIONER",enabledToast:"Notifikationer aktiveret"}},push:{permissionError:"Kunne ikke bede om tilladelse: {msg}",blocked:"Notifikationer blokeret i browseren — skal ændres i browserens side-indstillinger",unsupported:"Push-notifikationer understøttes ikke i denne browser",swError:"Kunne ikke registrere service worker",tokenError:"Kunne ikke hente push-token",genericError:"Push-fejl: {msg}",newMessageFallback:"Ny besked"},friends:{title:"Venner",addFriendBtn:"+ Tilføj ven",newsletterTitle:"Nyhedsbrev",requestAccessBtn:"🔎 Må jeg kigge med?",statusPending:"Afventer",cancelRequestTitle:"Fortryd anmodning",statusApproved:"Kan se resultater ✅",statusRejected:"Afvist",retryBtn:"Prøv igen",empty:"Ingen venner endnu",editTitle:"Rediger ven",addTitle:"Tilføj ven",deleteConfirm:"Slet {name}?",namePlaceholder:"Navn",phonePlaceholder:"Telefon",clubPlaceholder:"Klub",bowTypeDefault:"Buetype...",bowTypeRecurve:"Recurve",bowTypeCompound:"Compound",bowTypeLongbow:"Longbow",bowTypeBarebow:"Barebow"},admin:{loading:"Henter admins…",empty:"Ingen admins fundet",currentAdminsTitle:"NUVÆRENDE ADMINISTRATORER",youTag:"(dig)",removeBtn:"Fjern",period7:"Sidste 7 dage",period30:"Sidste 30 dage",period365:"Sidste 365 dage",loadingStats:"Henter…",totalRegistered:"I alt registreret",userNotFound:"Bruger ikke fundet",nowAdmin:"{name} er nu admin",removeConfirm:"Fjern {email} som administrator?",removedAdmin:"{email} er fjernet som admin",title:"Administrator",addAdminPlaceholder:"Email til ny admin",usageTitle:"BRUG AF APPEN",updateBtn:"Opdater",statsHint:'Klik "Opdater" for at hente statistik',allUsersTitle:"ALLE BRUGERE",searchUserPlaceholder:"Søg navn eller email…",usersCount:"{n} brugere",exportNewsletterBtn:"⬇ Eksportér nyhedsbrevs-liste",newsletterBadgeTitle:"Tilmeldt nyhedsbrev",noNewsletterSubscribers:"Ingen har tilmeldt sig nyhedsbrevet endnu",csvNameHeader:"Navn",csvEmailHeader:"Email"},meetups:{header:"Skal vi skyde sammen?",sectionSuggestBtn:"+ Foreslå",statusPending:"Afventer",statusAccepted:"Tilmeldt ✅",statusProposing:"Foreslår andet tidspunkt 🕓",statusDeclined:"Afbud ❌",empty:"Ingen planlagte skydninger endnu",joinBtn:"Tilmeld",proposeOtherBtn:"Foreslå andet tidspunkt",declineBtn:"Afbud",acceptProposalBtn:"Accepter {date} {time} ({name})",editTimeBtn:"Rediger tidspunkt",cancelMeetupBtn:"Aflys",deleteBtn:"Slet",cancelledBanner:"❌ Aflyst",notInvitedBanner:"👁 Du er ikke inviteret — vises kun for superadmin",dateTimeLine:"{date} kl. {time}",createdBy:"Oprettet af {name}",commentPlaceholder:"Skriv en kommentar…",sendBtn:"Send",noCoursesToast:"Ingen baner tilgængelige",noFriendsYet:"Du har ingen venner endnu",noOtherUsers:"Ingen andre registrerede brugere",notRegisteredNote:"ikke registreret i appen",noRecipientsSelected:"Ingen modtagere valgt endnu",selectCourseToast:"Vælg en bane",selectDateTimeToast:"Vælg dato og tid",selectRecipientToast:"Vælg mindst én modtager",invalidNamesToast:"{names} er ikke registreret i appen og blev ikke inviteret",proposalSentToast:"Forslag sendt",newTimeAcceptedToast:"Nyt tidspunkt accepteret",timeUpdatedToast:"Tidspunkt opdateret",cancelConfirm:"Aflys denne skydning?",deleteConfirm:"Slet denne skydning permanent? Det kan ikke fortrydes.",modalTitle:"Foreslå fælles skydning",proposeAnotherTitle:"Foreslå andet tidspunkt",editTimeTitle:"Rediger tidspunkt",courseLabel:"Bane",selectCoursePlaceholder:"-- Vælg bane --",dateLabel:"Dato",timeLabel:"Tidspunkt",noteLabel:"Bemærkning (valgfrit)",notePlaceholder:"Skriv en bemærkning om skydningen…",myFriendsTab:"Mine venner",allRegisteredTab:"Alle registrerede",selectAllBtn:"Vælg alle",sendProposalBtn:"Send forslag"},sharing:{title:"Må jeg kigge med?",emptyState:'Anmod om at se en vens resultater ved at trykke "🔎 Må jeg kigge med?" på personen i din venneliste ovenfor.',incomingRequestsTitle:"Anmodninger om at se dine resultater",acceptBtn:"Accepter",rejectBtn:"Afvis",sharingWithTitle:"Du deler resultater med",stopSharingBtn:"Afslut deling",viewableTitle:"Du kan se resultater for",viewInAnalyseBtn:"Se i Analyse",ownRequestError:"Du kan ikke anmode om at se dine egne resultater",notRegisteredError:"{name} er ikke registreret i appen",requestSentToast:"Anmodning sendt",acceptedToast:"Deling accepteret",rejectConfirm:"Afvis denne anmodning?",stopConfirm:"Afslut denne deling? Personen mister med det samme adgang til dine resultater.",stoppedToast:"Deling afsluttet"},courses:{title:"Baner",createBtn:"+ Opret bane",backBtn:"← Tilbage",mapTab:"Kort",visitsTab:"Besøg",editTab:"Rediger",showMyPosition:"📍 Vis min position",deleteCourseBtn:"🗑 Slet bane",createModalTitle:"Opret bane",namePlaceholder:"Banenavn",searchPlaceholder:"Søg bane...",targets24:"24 mål",targets30:"30 mål",locationPlaceholder:"Lokation (fx by)",visibilityPublic:"Offentlig",visibilityPrivate:"Privat",visibilityHidden:"Skjult (kun godkendte)",visibilityHint:'Privat: banen er stadig synlig for alle, men vises med "(Banen er kun for medlemmer)". Skjult: kun skytter du selv godkender (nedenfor) kan se banen.',membersOnlySuffix:"(Banen er kun for medlemmer)",searchUserPlaceholder:"Søg registreret bruger…",manualEmailPlaceholder:"…eller indtast email direkte",createBtnModal:"Opret",empty:"Ingen baner endnu",targetNameFallback:"Mål",emptyVisits:"Ingen besøg endnu",viewResultTitle:"Se resultat",infoTitle:"Baneinfo",nameLabel:"Banenavn",locationLabel:"Lokation",visibilityLabel:"Synlighed",saveInfoBtn:"Gem baneinfo",targetsHeader:"Mål ({n})",targetTitle:"Mål {n}",setGpsTitle:"Sæt GPS",nameLabelTarget:"Navn",emojiLabel:"Emoji",distanceLabel:"Afstand (m)",gpsInfo:"📍 GPS: {coords}",gpsMissing:"Ingen GPS",uploadPhotoBtn:"📷 Upload foto",saveAllTargetsBtn:"💾 Gem alle mål",noApprovedYet:"Ingen godkendt endnu",savedToast:"Gemt!",targetAddedToast:"Mål {n} tilføjet!",deleteTargetConfirm:"Slet mål {n}?",deleteTargetError:"Fejl: Kunne ikke slette mål",gpsSetToast:"GPS sat for mål {n}!",gpsErrorToast:"GPS fejl: {msg}",photoSavedToast:"Foto gemt!",uploadErrorToast:"Upload fejl: {msg}",allTargetsSavedToast:"Alle mål gemt!",gpsUnavailableToast:"GPS ikke tilgængeligt",deleteCourseConfirm:'Slet banen "{name}"?',courseDeletedToast:"Bane slettet",deleteCourseError:"Fejl: Kunne ikke slette bane",courseCreatedToast:"Bane oprettet!",createCourseError:"Fejl: Kunne ikke oprette bane"},analyse:{title:"Analyse",myselfOption:"Mig selv",filterAll:"Alle runder",filterLatest:"Seneste runde",filterLast10:"Seneste 10",filterLast20:"Seneste 20",filterSpecific:"Specifik runde",filterCompare:"Sammenlign runder",allCourses:"Alle baner",allRulesets:"Alle forbund",numRoundsPlaceholder:"Antal runder",onlyCompletedLabel:"Kun gennemførte runder (alle mål skudt)",onlyStartedAt1Label:"Kun runder startet ved mål 1",round1Label:"RUNDE 1",round2Label:"RUNDE 2",selectRoundPlaceholder:"Vælg runde...",selectRound2Placeholder:"Vælg runde 2...",arrow1:"PIL 1",arrow2:"PIL 2",singleArrowNote:"{ruleset} skydes med 1 pil pr. mål — PIL 1/PIL 2 er derfor ikke relevant",singleArrowNoteCompare:"{ruleset} skydes med 1 pil pr. mål — PIL 1/PIL 2-sammenligning er derfor ikke relevant",notRelevant:"Ikke relevant",best:"BEDSTE",worst:"SVÆRESTE",comparisonTitle:"SAMMENLIGNING",vs:"VS",wonBy:"{name} vandt med {diff} point",tie:"Uafgjort!",arrowStatsTitle:"PIL STATISTIK",bestWorstTargetTitle:"BEDSTE OG SVÆRESTE MÅL",zoneDistTitle:"FORDELING PR. SCOREZONE",selectTwoRounds:"Vælg to runder ovenfor",roundsNotFound:"Kunne ikke finde runderne",meFallback:"Mig",viewingResultsFor:"Viser resultater for {name}",statRounds:"RUNDER",statAvgPerRound:"SNIT/RUNDE",statBest:"BEDSTE",statLowest:"LAVESTE",roundsIncludedTitle:"RUNDER I DENNE ANALYSE ({n})",selectRulesetNote:"Vælg et specifikt forbund i filteret ovenfor for at se pil-fordeling (runderne i dette udvalg bruger forskellige regelsæt)",bestWithArrow1:"Bedst med PIL 1 🏹",bestWithArrow2:"Bedst med PIL 2 🏹",bothArrowsEqual:"Begge pile er lige gode 🎯",shotOrdinal:"Skud nr. {n}",developmentTitle:"UDVIKLING (RUNDER)",oldest:"ældst",newest:"nyest",perTargetGraphTitle:"GENNEMSNIT PR. SKUDRÆKKEFØLGE",perTargetCaption:"Skudrækkefølge — 1 = første mål skudt · stiplet linje = trend",consistencyTitle:"KONSISTENS (SPREDNING)",consistencyNote:"Standardafvigelse i point (samme skala som scoren, 0-11) — ikke et 0-1-tal. Tæt på 0 = meget ensartet gennem runden; jo højere tal, jo større udsving mellem de bedste og sværeste mål.",fullscreenGraphTitle:"GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset",consistencyOverTimeTitle:"KONSISTENS OVER TID · denne bane",consistencyOverTimeCaption:"Spredning pr. runde (samme point-skala som ovenfor) — faldende kurve = mere ensartet skydning over tid",comparisonSectionTitle:"SAMMENLIGNING · {gender} {bowClass}",loadingComparison:"Henter...",noOtherShootersYet:"Ingen andre {gender} {bowClass}-skytter har skudt denne bane endnu.",yourAvgPerArrow:"DIT SNT/PIL",difference:"DIFFERENCE",othersAvgPerArrow:"ANDRES SNT/PIL",basedOnRoundsSingular:"Baseret på {n} runde fra andre skytter",basedOnRoundsPlural:"Baseret på {n} runder fra andre skytter",distanceInsightsTitle:"AFSTANDS-ANALYSE",distanceInsightsSubtitle:"Andel skud der rammer {label} pr. afstandsgruppe",distanceInsightsCoverage:"Baseret på {used} af {total} runder — kun runder spillet på baner med kendte mål-afstande tæller med",distBucket0to10:"0-10 m",distBucket10to20:"10-20 m",distBucket20to30:"20-30 m",killZoneLabel:"kill-zonen",trendUp:"📈 Din score er steget {pct}% de seneste {weeks} uger",trendDown:"📉 Din score er faldet {pct}% de seneste {weeks} uger",trendFlat:"Din score har ligget stabilt de seneste {weeks} uger",trendNotEnoughData:"Ikke nok runder de seneste {weeks} uger til at vise en udvikling endnu",weakestZone:"Din største svaghed er mål på {range}",pointPotential:"Hvis din træfprocent på {range} kom op på dit snit, svarer det til ca. +{n} point pr. runde"}},en:{nav:{scoring:"SCORING",results:"RESULTS",analyse:"ANALYSIS",courses:"COURSES",friends:"FRIENDS"},common:{cancel:"Cancel",confirm:"Confirm",save:"Save",add:"Add",errorPrefix:"Error: ",linkCopied:"Link copied",unknown:"Unknown",gender:{herre:"Male",dame:"Female"},bowClass:{langbue:"Longbow",trad:"Traditional",recurve:"Recurve (Olympic)",compound:"Compound",barbue:"Barebow",buejaeger:"Bowhunter",tradBuejaeger:"Traditional bowhunter",rytterbue:"Horsebow"},bowClassShort:{langbue:"Longbow",trad:"Traditional",recurve:"Recurve",compound:"Compound",barbue:"Barebow",buejaeger:"Bowhunter",tradBuejaeger:"Trad. bowhunter",rytterbue:"Horsebow"}},setup:{newRoundTitle:"🌲 New Round",roundName:"Round name",roundNameDefault:"My Shoot",courseLabel:"Course (optional)",noCourse:"-- No course --",targetCountLabel:"Number of targets",targets24:"24 Targets",targets30:"30 Targets",other:"Other...",targetsUnit:"{n} targets",targetCountPlaceholder:"Number of targets",rulesetLabel:"Ruleset",rulesetDgs1:"DGS (1 arrow)",rulesetDgs2:"DGS (2 arrows)",participantsTitle:"👥 Participants",searchFriend:"Search friend...",addGuest:"+ Add guest",boostTitle:"🟢 Positive reinforcement",enableBoost:"Enable positive reinforcement",boostThreshPre:"Green dot if avg. at least",boostThreshPost:"points/arrow",gpsTitle:"📍 GPS",startTarget:"Start target",autoFindTitle:"Auto-find nearest target",autoFindSub:"Use GPS automatically",trackRouteTitle:"Track route and time",trackRouteSub:"Record route and distance",showDistancesTitle:"Show target distances",showDistancesSub:"View only — not editable",startRoundBtn:"START ROUND →"},active:{targetPrefix:"TARGET ",ofN:" of {n}",targetFallback:"Target {n}",statAvg:"AVG.",statPoint:"POINTS",statRemaining:"Remaining",statRemainingSub:"targets",editTitle:"Edit target",editNamePlaceholder:"Animal name",takePhoto:"📷 Take photo",saveGps:"📍 Save GPS",save:"Save",cancel:"Cancel",back:"← BACK",next:"NEXT →",finish:"FINISH →",skip:"⤵ SKIP",finishNow:"✓ FINISH NOW",finishConfirm:"✓ CONFIRM",abort:"🗑 ABORT",abortConfirm:"🗑 CONFIRM",editBtn:"✏️ EDIT",runde:"ROUND",snt:"AVG",pilLabel:"🎯 ARROW {n}",arrowShort1:"A1",arrowShort2:"A2",distanceLabel:"{m} m",targetAvg:"Avg. this target: {v}",resumeConfirm:"Resume the round in progress?",networkError:"Round saved locally (network error)",shareError:"Could not share round with co-shooter",notSavedLocally:"The round is not saved locally",gpsSaved:"GPS saved!",gpsError:"GPS error: {msg}"},results:{title:"My rounds",import:"⬆ Import",empty:"No rounds yet",roundFallback:"Round",targetsUnit:"{n} targets",deleteConfirm:"Delete?",pointWord:"points",tableTargetHeader:"Target",totalLabel:"Total",distArrow1:"Avg. arrow 1",distArrow2:"Avg. arrow 2",overallAvg:"Overall avg.",summaryArrow1:"AVG ARROW 1",summaryArrow2:"AVG ARROW 2",summaryPoints:"POINTS",summaryArrows:"ARROWS",summaryAvgPerArrow:"AVG/ARROW",actualTitle:"Targets shot only",actualSub:"{shot} of {total} targets",actualAvgPerArrow:"AVG/ARROW",actualAvgPerTarget:"AVG/TARGET",popupDistance:"DISTANCE",popupTime:"TIME",sendResultsBtn:"📧 Send results",doneBtn:"Done",noRoundToSend:"No round to send"},email:{header:"3D Archery - Results",subjectPrefix:"3D Archery - ",dateLabel:"Date: ",courseLabel:"Course: ",resultsHeader:"--- RESULTS ---",pointWord:" points",detailHeader:"--- DETAILED ---",targetLabel:"  Target ",totalLabel:"  Total: ",arrow1Label:"Avg. arrow 1",arrow2Label:"Avg. arrow 2",overallAvgLabel:"Overall avg.",distributionLabel:"  Distribution: ",seeInApp:"See results in the app:",loginRequired:"(Requires login with your account)"},auth:{loginTab:"Log in",signupTab:"Create account",emailPlaceholder:"Email",passwordPlaceholder:"Password",loginBtn:"LOG IN",forgotPassword:"Forgot password?",namePlaceholder:"Name",signupPasswordPlaceholder:"Password (min. 6 characters)",selectGender:"Select gender",selectBowClass:"Select bow class",signupBtn:"CREATE ACCOUNT",errUserNotFound:"User not found.",errWrongPassword:"Incorrect password.",errInvalidCredential:"Invalid email or password.",errEmailInUse:"Email is already in use.",errWeakPassword:"The password is too weak (min. 6 characters).",errInvalidEmail:"Invalid email address.",errTooManyRequests:"Too many attempts. Try again later.",errNetwork:"Network error. Check your connection.",errGeneric:"An error occurred. Try again.",errFillAllFields:"Fill in all fields.",errPasswordTooShort:"The password must be at least 6 characters.",errEnterEmailFirst:"Enter your email first.",resetEmailSent:"Reset email sent!",privacyAcceptLabel:"I accept the privacy policy",newsletterOptLabel:"I would like to receive newsletters",errPrivacyRequired:"You must accept the privacy policy to create an account."},roundImport:{importedToast:"Round imported: {name}",importError:"Import error: {msg}",noFileSelected:"No file selected",loginFirst:"Log in first",noPlayersInFile:"The file contains no players with results",readError:"Could not read the file: {msg}",guestFallback:"Guest {n}",importedRoundFallback:"Imported round"},modals:{profil:{title:"Complete your profile",desc:"Select gender and bow class to enable comparison with other archers.",laterBtn:"Later",validationMsg:"Select both gender and bow class.",saveError:"Error saving. Try again."},privacy:{title:"Updated privacy policy",desc:"We have updated our privacy policy. Please read it and confirm you accept it to continue.",readLink:"Read the privacy policy",continueBtn:"Continue"},qr:{closeBtn:"Close"},skip:{title:"Jump to target",placeholder:"Target number",goBtn:"Go"},guest:{title:"Add guest",placeholder:"Guest's name",addBtn:"Add"},importPlayer:{title:"Who are you?"}},banners:{pwa:{text:"Install 3D Bueskydning on your home screen for quick access",installBtn:"INSTALL APP"},iosInstall:{line1:"Install 3D Bueskydning on your home screen:",shareStepPre:"Tap the ",shareStepPost:' Share icon at the bottom of Safari, and choose "Add to Home Screen".'},push:{text:"Get notified instantly when someone invites you to a shoot – even when the app is closed.",enableBtn:"ENABLE NOTIFICATIONS",enabledToast:"Notifications enabled"}},push:{permissionError:"Could not request permission: {msg}",blocked:"Notifications blocked in the browser — must be changed in the browser's site settings",unsupported:"Push notifications are not supported in this browser",swError:"Could not register service worker",tokenError:"Could not get push token",genericError:"Push error: {msg}",newMessageFallback:"New message"},friends:{title:"Friends",addFriendBtn:"+ Add friend",newsletterTitle:"Newsletter",requestAccessBtn:"🔎 May I follow along?",statusPending:"Pending",cancelRequestTitle:"Cancel request",statusApproved:"Can see results ✅",statusRejected:"Rejected",retryBtn:"Try again",empty:"No friends yet",editTitle:"Edit friend",addTitle:"Add friend",deleteConfirm:"Delete {name}?",namePlaceholder:"Name",phonePlaceholder:"Phone",clubPlaceholder:"Club",bowTypeDefault:"Bow type...",bowTypeRecurve:"Recurve",bowTypeCompound:"Compound",bowTypeLongbow:"Longbow",bowTypeBarebow:"Barebow"},admin:{loading:"Loading admins…",empty:"No admins found",currentAdminsTitle:"CURRENT ADMINISTRATORS",youTag:"(you)",removeBtn:"Remove",period7:"Last 7 days",period30:"Last 30 days",period365:"Last 365 days",loadingStats:"Loading…",totalRegistered:"Total registered",userNotFound:"User not found",nowAdmin:"{name} is now an admin",removeConfirm:"Remove {email} as administrator?",removedAdmin:"{email} has been removed as admin",title:"Administrator",addAdminPlaceholder:"Email for new admin",usageTitle:"APP USAGE",updateBtn:"Update",statsHint:'Click "Update" to fetch statistics',allUsersTitle:"ALL USERS",searchUserPlaceholder:"Search name or email…",usersCount:"{n} users",exportNewsletterBtn:"⬇ Export newsletter list",newsletterBadgeTitle:"Subscribed to newsletter",noNewsletterSubscribers:"No one has subscribed to the newsletter yet",csvNameHeader:"Name",csvEmailHeader:"Email"},meetups:{header:"Shall we shoot together?",sectionSuggestBtn:"+ Suggest",statusPending:"Pending",statusAccepted:"Joined ✅",statusProposing:"Suggesting a different time 🕓",statusDeclined:"Declined ❌",empty:"No planned shoots yet",joinBtn:"Join",proposeOtherBtn:"Suggest a different time",declineBtn:"Decline",acceptProposalBtn:"Accept {date} {time} ({name})",editTimeBtn:"Edit time",cancelMeetupBtn:"Cancel",deleteBtn:"Delete",cancelledBanner:"❌ Cancelled",notInvitedBanner:"👁 You are not invited — shown only to superadmin",dateTimeLine:"{date} at {time}",createdBy:"Created by {name}",commentPlaceholder:"Write a comment…",sendBtn:"Send",noCoursesToast:"No courses available",noFriendsYet:"You have no friends yet",noOtherUsers:"No other registered users",notRegisteredNote:"not registered in the app",noRecipientsSelected:"No recipients selected yet",selectCourseToast:"Select a course",selectDateTimeToast:"Select date and time",selectRecipientToast:"Select at least one recipient",invalidNamesToast:"{names} are not registered in the app and were not invited",proposalSentToast:"Proposal sent",newTimeAcceptedToast:"New time accepted",timeUpdatedToast:"Time updated",cancelConfirm:"Cancel this shoot?",deleteConfirm:"Delete this shoot permanently? This cannot be undone.",modalTitle:"Suggest a joint shoot",proposeAnotherTitle:"Suggest a different time",editTimeTitle:"Edit time",courseLabel:"Course",selectCoursePlaceholder:"-- Select course --",dateLabel:"Date",timeLabel:"Time",noteLabel:"Note (optional)",notePlaceholder:"Write a note about the shoot…",myFriendsTab:"My friends",allRegisteredTab:"All registered",selectAllBtn:"Select all",sendProposalBtn:"Send proposal"},sharing:{title:"May I follow along?",emptyState:`Ask to see a friend's results by tapping "🔎 May I follow along?" on the person in your friends list above.`,incomingRequestsTitle:"Requests to see your results",acceptBtn:"Accept",rejectBtn:"Reject",sharingWithTitle:"You are sharing results with",stopSharingBtn:"Stop sharing",viewableTitle:"You can see results for",viewInAnalyseBtn:"View in Analysis",ownRequestError:"You cannot request to see your own results",notRegisteredError:"{name} is not registered in the app",requestSentToast:"Request sent",acceptedToast:"Sharing accepted",rejectConfirm:"Reject this request?",stopConfirm:"Stop this sharing? The person will immediately lose access to your results.",stoppedToast:"Sharing stopped"},courses:{title:"Courses",createBtn:"+ Create course",backBtn:"← Back",mapTab:"Map",visitsTab:"Visits",editTab:"Edit",showMyPosition:"📍 Show my position",deleteCourseBtn:"🗑 Delete course",createModalTitle:"Create course",namePlaceholder:"Course name",searchPlaceholder:"Search course...",targets24:"24 targets",targets30:"30 targets",locationPlaceholder:"Location (e.g. city)",visibilityPublic:"Public",visibilityPrivate:"Private",visibilityHidden:"Hidden (approved only)",visibilityHint:'Private: the course is still visible to everyone, but shown with "(Members only)". Hidden: only archers you approve (below) can see the course.',membersOnlySuffix:"(Members only)",searchUserPlaceholder:"Search registered user…",manualEmailPlaceholder:"…or enter email directly",createBtnModal:"Create",empty:"No courses yet",targetNameFallback:"Target",emptyVisits:"No visits yet",viewResultTitle:"View result",infoTitle:"Course info",nameLabel:"Course name",locationLabel:"Location",visibilityLabel:"Visibility",saveInfoBtn:"Save course info",targetsHeader:"Targets ({n})",targetTitle:"Target {n}",setGpsTitle:"Set GPS",nameLabelTarget:"Name",emojiLabel:"Emoji",distanceLabel:"Distance (m)",gpsInfo:"📍 GPS: {coords}",gpsMissing:"No GPS",uploadPhotoBtn:"📷 Upload photo",saveAllTargetsBtn:"💾 Save all targets",noApprovedYet:"None approved yet",savedToast:"Saved!",targetAddedToast:"Target {n} added!",deleteTargetConfirm:"Delete target {n}?",deleteTargetError:"Error: Could not delete target",gpsSetToast:"GPS set for target {n}!",gpsErrorToast:"GPS error: {msg}",photoSavedToast:"Photo saved!",uploadErrorToast:"Upload error: {msg}",allTargetsSavedToast:"All targets saved!",gpsUnavailableToast:"GPS not available",deleteCourseConfirm:'Delete course "{name}"?',courseDeletedToast:"Course deleted",deleteCourseError:"Error: Could not delete course",courseCreatedToast:"Course created!",createCourseError:"Error: Could not create course"},analyse:{title:"Analysis",myselfOption:"Myself",filterAll:"All rounds",filterLatest:"Latest round",filterLast10:"Last 10",filterLast20:"Last 20",filterSpecific:"Specific round",filterCompare:"Compare rounds",allCourses:"All courses",allRulesets:"All rulesets",numRoundsPlaceholder:"Number of rounds",onlyCompletedLabel:"Only completed rounds (all targets shot)",onlyStartedAt1Label:"Only rounds started at target 1",round1Label:"ROUND 1",round2Label:"ROUND 2",selectRoundPlaceholder:"Select round...",selectRound2Placeholder:"Select round 2...",arrow1:"ARROW 1",arrow2:"ARROW 2",singleArrowNote:"{ruleset} is shot with 1 arrow per target — ARROW 1/ARROW 2 is therefore not relevant",singleArrowNoteCompare:"{ruleset} is shot with 1 arrow per target — the ARROW 1/ARROW 2 comparison is therefore not relevant",notRelevant:"Not relevant",best:"BEST",worst:"HARDEST",comparisonTitle:"COMPARISON",vs:"VS",wonBy:"{name} won by {diff} points",tie:"Tie!",arrowStatsTitle:"ARROW STATISTICS",bestWorstTargetTitle:"BEST AND HARDEST TARGET",zoneDistTitle:"DISTRIBUTION PER SCORE ZONE",selectTwoRounds:"Select two rounds above",roundsNotFound:"Could not find the rounds",meFallback:"Me",viewingResultsFor:"Showing results for {name}",statRounds:"ROUNDS",statAvgPerRound:"AVG/ROUND",statBest:"BEST",statLowest:"LOWEST",roundsIncludedTitle:"ROUNDS IN THIS ANALYSIS ({n})",selectRulesetNote:"Select a specific ruleset in the filter above to see arrow distribution (the rounds in this selection use different rulesets)",bestWithArrow1:"Best with ARROW 1 🏹",bestWithArrow2:"Best with ARROW 2 🏹",bothArrowsEqual:"Both arrows are equally good 🎯",shotOrdinal:"Shot no. {n}",developmentTitle:"DEVELOPMENT (ROUNDS)",oldest:"oldest",newest:"newest",perTargetGraphTitle:"AVERAGE PER SHOT ORDER",perTargetCaption:"Shot order — 1 = first target shot · dashed line = trend",consistencyTitle:"CONSISTENCY (SPREAD)",consistencyNote:"Standard deviation in points (same scale as the score, 0-11) — not a 0-1 number. Close to 0 = very consistent through the round; the higher the number, the bigger the swing between the best and hardest targets.",fullscreenGraphTitle:"AVERAGE PER SHOT ORDER · pinch to zoom · double-tap to reset",consistencyOverTimeTitle:"CONSISTENCY OVER TIME · this course",consistencyOverTimeCaption:"Spread per round (same point scale as above) — declining curve = more consistent shooting over time",comparisonSectionTitle:"COMPARISON · {gender} {bowClass}",loadingComparison:"Loading...",noOtherShootersYet:"No other {gender} {bowClass} archers have shot this course yet.",yourAvgPerArrow:"YOUR AVG/ARROW",difference:"DIFFERENCE",othersAvgPerArrow:"OTHERS' AVG/ARROW",basedOnRoundsSingular:"Based on {n} round from other archers",basedOnRoundsPlural:"Based on {n} rounds from other archers",distanceInsightsTitle:"DISTANCE ANALYSIS",distanceInsightsSubtitle:"Share of shots hitting {label} per distance group",distanceInsightsCoverage:"Based on {used} of {total} rounds — only rounds played on courses with known target distances are included",distBucket0to10:"0-10 m",distBucket10to20:"10-20 m",distBucket20to30:"20-30 m",killZoneLabel:"the kill zone",trendUp:"📈 Your score has risen {pct}% over the last {weeks} weeks",trendDown:"📉 Your score has dropped {pct}% over the last {weeks} weeks",trendFlat:"Your score has been stable over the last {weeks} weeks",trendNotEnoughData:"Not enough rounds in the last {weeks} weeks to show a trend yet",weakestZone:"Your biggest weakness is targets at {range}",pointPotential:"If your hit rate at {range} matched your average, that would be roughly +{n} points per round"}}};let Ys=localStorage.getItem(Yy)||"da";function Jy(){return Ys}function rn(){return Ys==="da"?"da-DK":"en-US"}function g(n,e){const t=n.split(".");let r=xa[Ys];for(const s of t)r=r==null?void 0:r[s];if(r==null){r=xa.da;for(const s of t)r=r==null?void 0:r[s]}if(r==null)return n;if(e)for(const[s,i]of Object.entries(e))r=r.replace(`{${s}}`,i);return r}function Xy(n=document){n.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=g(t.dataset.i18n)}),n.querySelectorAll("[data-i18n-placeholder]").forEach(t=>{t.placeholder=g(t.dataset.i18nPlaceholder)});const e=document.getElementById("lang-btn");e&&(e.textContent=Ys.toUpperCase())}function Q0(n){Ys=n,localStorage.setItem(Yy,n),document.documentElement.lang=n,Xy()}function Y0(){document.documentElement.lang=Ys,Xy()}function J0(n){const e=m.shareRequests.find(t=>{var r;return t.viewerUid===((r=m.user)==null?void 0:r.uid)&&t.ownerUid===n});return e?e.status==="afventer"?`<span class="share-badge share-badge-afventer">${g("friends.statusPending")}</span><button class="btn-icon" onclick="window.cancelShareRequest('${e.id}')" title="${g("friends.cancelRequestTitle")}">✕</button>`:e.status==="accepteret"?`<span class="share-badge share-badge-accepteret">${g("friends.statusApproved")}</span>`:`<span class="share-badge share-badge-afvist">${g("friends.statusRejected")}</span><button class="btn-share-req" data-share-friend="${n}">${g("friends.retryBtn")}</button>`:`<button class="btn-share-req" data-share-friend="${n}">${g("friends.requestAccessBtn")}</button>`}function Wn(){const n=document.getElementById("friends-list");if(!m.friends.length){n.innerHTML=`<div class="empty"><div class="empty-icon">👥</div>${g("friends.empty")}</div>`;return}n.innerHTML="",m.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${H(e.name)}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).map(H).join(" · ")}</div><div class="fshare-row">${J0(e.id)}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del">🗑</button></div>`,t.querySelector(".frd-edit").addEventListener("click",()=>openFriendModal(e)),t.querySelector(".frd-del").addEventListener("click",()=>doDeleteFriend(e.id,e.name));const r=t.querySelector("[data-share-friend]");r&&r.addEventListener("click",()=>window.requestViewAccess(e.id,e.name)),n.appendChild(t)})}window.renderFriendsList=Wn;function Us(){const n=document.getElementById("qfriends");n.innerHTML="",m.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=m.friends.filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await ze(Ge(G,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=m.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...r];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" data-id="${H(i.id)}" data-name="${H(i.name||"")}" data-email="${H(i.email||"")}">${H(i.name)}${i.email?` <span style='font-size:11px;opacity:.6'>${H(i.email)}</span>`:""}</div>`).join(""),e.querySelectorAll(".ac-item").forEach(i=>i.addEventListener("click",()=>{selectFriend(i.dataset.id,i.dataset.name,i.dataset.email),document.getElementById("friend-search").value="",document.getElementById("ac-list").classList.add("hidden")})),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){if(!m.friends.find(r=>r.id===n)){const r={id:n,name:e,email:t};m.friends.push(r),Dt(),Wn(),Us(),m.user&&pt(te(G,"users",m.user.uid,"friends",n),r).catch(s=>console.warn(s))}window.addParticipant(n,e)};window.openFriendModal=function(n){m.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=g(n?"friends.editTitle":"friends.addTitle"),document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim().slice(0,80),email:document.getElementById("f-email").value.trim().slice(0,100),phone:document.getElementById("f-phone").value.trim().slice(0,30),club:document.getElementById("f-club").value.trim().slice(0,80),bowType:document.getElementById("f-bow").value};if(!n.name)return;if(m.editFriendId){const r=m.friends.findIndex(s=>s.id===m.editFriendId);r!==-1?m.friends[r]={...n,id:m.editFriendId}:m.friends.push({...n,id:m.editFriendId})}else m.friends.push({...n,id:"f_"+Date.now()});const e=m.editFriendId||"f_"+Date.now();m.editFriendId||(m.friends[m.friends.length-1].id=e);const t=m.friends.find(r=>r.id===(m.editFriendId||e));t&&m.user&&pt(te(G,"users",m.user.uid,"friends",t.id),t).catch(r=>console.warn(r)),Dt(),document.getElementById("friend-modal").classList.add("hidden"),Wn(),Us()};window.doDeleteFriend=function(n,e){or(g("friends.deleteConfirm",{name:e}),()=>{m.friends=m.friends.filter(t=>t.id!==n),Dt(),Wn(),Us(),m.user&&Lt(te(G,"users",m.user.uid,"friends",n)).catch(t=>console.warn(t))})};const X0=[11,10,8,5,"M"],Zu={WA:{label:"WA",arrowsPerTarget:2,scoreValues:[11,10,8,5,"M"],boostThreshold:8},"HDH-IAA":{label:"HDH-IAA",arrowsPerTarget:1,scoreValues:[11,10,8,5,"M"],boostThreshold:8},DGS:{label:"DGS",arrowsPerTarget:2,scoreValues:[5,3,-1,"M"],boostThreshold:4},"DGS-1":{label:"DGS-1",arrowsPerTarget:1,scoreValues:[5,3,-1,"M"],boostThreshold:4}},Zn="WA";function qt(n){var e;return((e=Zu[n])==null?void 0:e.arrowsPerTarget)??2}function er(n){var e;return((e=Zu[n])==null?void 0:e.scoreValues)??X0}function Z0(n){var e;return((e=Zu[n])==null?void 0:e.boostThreshold)??8}function eP(n){return er(n).slice(0,2)}function _e(n){return n==="M"||n==null?0:Number(n)}function Kr(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":t==="-"?null:Number(t))):[]}function Vl(n){return n.map(e=>e.map(t=>t??"-").join(",")).join(";")}function dt(n){return n.flat().reduce((e,t)=>e+_e(t),0)}function tP(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(s=>s!=null).map(_e));return t.length?(t.reduce((r,s)=>r+s,0)/t.length).toFixed(1):null}function ed(n,e){const t={};return er(e).forEach(r=>{t[r]=0}),n.flat().forEach(r=>{r!=null&&t[r]!==void 0&&t[r]++}),t}function td(n){return n.length?n.reduce((e,t)=>dt(t.scores)>dt(e.scores)?t:e,n[0]):null}function nP(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,s)=>r+_e(s),0)/t.length>=e:!1}function rP(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function sP(n,e,t=2){for(;n.scores.length<e;)n.scores.push(Array(t).fill(null))}function iP(n,e,t=2){let r=0;for(let s=0;s<e;s++)n.every(i=>{const o=i.scores[s]||[];return o.length>=t&&o.slice(0,t).every(c=>c!=null)})&&r++;return r}function Zy(n){return{id:n.id||null,name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,ruleset:n.ruleset||Zn,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:Vl(e.scores)}))}}function oP(n){return{...n,ruleset:n.ruleset||Zn,shooters:(n.shooters||[]).map(e=>({...e,scores:Kr(e.scores)}))}}function nd(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}let ia=null,oa=!1,Dr=!1,Ol=[],Ui=null,ki=0,Wt=null,Ml=null,Ti=null;function ev(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function rd(n,e){const r=(e.lat-n.lat)*Math.PI/180,s=(e.lng-n.lng)*Math.PI/180,i=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function tv(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function nv(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function aP(n){return navigator.geolocation?(Ti=n,Ol=[],ki=0,Wt=null,Ui=Date.now(),Dr=!1,oa=!0,ia=navigator.geolocation.watchPosition(e=>{if(!oa||Dr)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};Wt&&(ki+=rd(Wt,t)),Wt=t,Ol.push(t),Ti&&Ti({lat:t.lat,lng:t.lng,distance:ki,elapsed:Math.round((Date.now()-Ui)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),Ml=setInterval(()=>{oa&&!Dr&&Ti&&Ti({lat:Wt==null?void 0:Wt.lat,lng:Wt==null?void 0:Wt.lng,distance:ki,elapsed:Math.round((Date.now()-Ui)/1e3)})},1e3),!0):!1}function cP(){return Dr=!Dr,Dr}function rv(){return oa=!1,Dr=!1,ia!==null&&(navigator.geolocation.clearWatch(ia),ia=null),clearInterval(Ml),Ml=null,{route:Ol.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round(ki),duration:Ui?Math.round((Date.now()-Ui)/1e3):0}}function mc(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function lP(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((s,i)=>{if(!s.gps)return;const o=rd(e,s.gps);o<t&&(t=o,r=i)}),r}function uP(n){const e=n.data();return{id:n.id,name:e.name||e.yam||"—",numTargets:e.numTargets||e.antalMål||24,location:e.location||e.beliggenhed||"",targets:e.targets||e.mål||[],visits:e.visits||e.besøg||[],private:e.private??e.privat??!1,hidden:e.hidden??e.skjult??!1,approvedUsers:e.approvedUsers||e.godkendteBrugere||[],ownerId:e.ownerId||null}}function dP(n){var e;return m.isAdmin||!!n.ownerId&&n.ownerId===((e=m.user)==null?void 0:e.uid)}async function hP(){var n;try{const e=(((n=m.user)==null?void 0:n.email)||"").toLowerCase();let t;if(m.isAdmin)t=[await ze(Ge(G,"courses"))];else{const i=[ze($s(Ge(G,"courses"),Cr("hidden","==",!1)))];e&&i.push(ze($s(Ge(G,"courses"),Cr("hidden","==",!0),Cr("approvedUsers","array-contains",e)))),t=await Promise.all(i)}const r=new Map;t.forEach(i=>i.docs.forEach(o=>r.set(o.id,o)));const s=[...r.values()].map(uP);s.length&&(m.courses=s,Dt(),Zr(),window.populateCourseDropdown())}catch(e){console.warn("courses:",e)}}function Zr(n=""){const e=document.getElementById("courses-list");if(!m.courses.length){e.innerHTML=`<div class="empty"><div class="empty-icon">🗺️</div>${g("courses.empty")}</div>`;return}const t=n.trim().toLowerCase(),r=[...m.courses].filter(s=>!t||s.name.toLowerCase().includes(t)).sort((s,i)=>s.name.localeCompare(i.name,"da"));if(!r.length){e.innerHTML=`<div class="empty"><div class="empty-icon">🗺️</div>${g("courses.empty")}</div>`;return}e.innerHTML="",r.forEach(s=>{const i=document.createElement("div");i.className="ccard",i.innerHTML=`<div class="ccard-name">${H(s.name)}${s.private?` <span class="ccard-private-note">${g("courses.membersOnlySuffix")}</span>`:""}</div><div class="ccard-meta">${g("setup.targetsUnit",{n:s.numTargets})} · ${H(s.location||"—")}</div>`,i.onclick=()=>fP(s),e.appendChild(i)})}window.filterCourses=function(n){Zr(n)};function fP(n){m.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name+(n.private?" "+g("courses.membersOnlySuffix"):""),document.getElementById("course-edit-stab-btn").classList.toggle("hidden",!dP(n)),window.switchSubtab("map"),mP(n),pP(n),vo(n)}function mP(n){const e=document.getElementById("course-map");m.courseMap&&(m.courseMap.remove(),m.courseMap=null),m.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(m.courseMap);const t=[];(n.targets||[]).forEach((r,s)=>{const i=r.gps||r.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div class="map-marker-num">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(m.courseMap).bindPopup(`<b>${s+1}. ${r.name||g("courses.targetNameFallback")}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" class="popup-target-img"/>`:""}`))}),t.length?m.courseMap.fitBounds(t,{padding:[20,20]}):m.courseMap.setView([55.7,12.5],10)}function pP(n){const e=document.getElementById("visits-list"),t=m.rounds.filter(r=>r.courseId===n.id).map(r=>{const s=(r.shooters||[]).map(o=>({...o,scores:Kr(o.scores)})),i=td(s);return{roundId:r.id,date:r.completed?new Date(r.completed).toLocaleDateString(rn()):r.created?new Date(r.created).toLocaleDateString(rn()):"—",participants:s.map(o=>o.name),winner:i==null?void 0:i.name,winnerScore:i?dt(i.scores):0}});if(!t.length){e.innerHTML=`<div class="empty"><div class="empty-icon">📍</div>${g("courses.emptyVisits")}</div>`;return}e.innerHTML="",t.forEach(r=>{const s=document.createElement("div");s.className="visit-card",s.onclick=i=>{i.target.closest(".btn-icon")||window.showVisitResults(r.roundId)},s.innerHTML=`<div class="visit-card-head"><span class="visit-card-date">${H(r.date)}</span><button class="btn-icon" onclick="window.showVisitResults('${H(r.roundId)}')" title="${g("courses.viewResultTitle")}">📊</button></div><div class="visit-card-participants">${(r.participants||[]).map(H).join(", ")}</div>${r.winner?`<div class="visit-card-winner">🏆 ${H(r.winner)} (${r.winnerScore} pt)</div>`:""}`,e.appendChild(s)})}function vo(n){const e=n.targets||[];let t=`
    <div class="card edit-info-card">
      <div class="card-title">${g("courses.infoTitle")}</div>
      <div class="fg"><label class="lbl">${g("courses.nameLabel")}</label><input type="text" id="edit-cname" value="${n.name}" /></div>
      <div class="fg"><label class="lbl">${g("courses.locationLabel")}</label><input type="text" id="edit-cloc" value="${n.location||""}" /></div>
      <div class="fg"><label class="lbl">${g("courses.visibilityLabel")}</label>
        <select id="edit-cvisibility" onchange="document.getElementById('edit-capproved-wrap').style.display=this.value==='hidden'?'':'none'">
          <option value="public" ${n.private?"":"selected"}>${g("courses.visibilityPublic")}</option>
          <option value="private" ${n.private&&!n.hidden?"selected":""}>${g("courses.visibilityPrivate")}</option>
          <option value="hidden" ${n.hidden?"selected":""}>${g("courses.visibilityHidden")}</option>
        </select>
      </div>
      <div class="trow-sub edit-visibility-hint">${g("courses.visibilityHint")}</div>
      <div id="edit-capproved-wrap" style="display:${n.hidden?"":"none"};">
        <div class="ac-wrap fg">
          <input type="text" id="edit-capproved-search" placeholder="${g("courses.searchUserPlaceholder")}" autocomplete="off" oninput="searchApprovedUsers('edit',this.value)" />
          <div id="edit-capproved-ac" class="ac-list hidden"></div>
        </div>
        <div id="edit-capproved-chips" class="edit-approved-chips-wrap"></div>
        <input type="text" id="edit-capproved-manual" placeholder="${g("courses.manualEmailPlaceholder")}" />
        <button type="button" class="btn btn-dark edit-approved-add-btn" onclick="addApprovedEmailManual('edit')">${g("common.add")}</button>
      </div>
      <button class="btn btn-gold edit-save-btn" onclick="saveCourseEdit()">${g("courses.saveInfoBtn")}</button>
    </div>
    <div class="card">
      <div class="card-title targets-card-title">
        <span>${g("courses.targetsHeader",{n:e.length})}</span>
        <button class="btn-icon add-target-btn" onclick="addTargetToCurrentCourse()">＋</button>
      </div>
      <div id="targets-edit-list">`;e.forEach((r,s)=>{t+=`<div class="fg target-edit-block">
      <div class="target-edit-head">
        <span class="target-edit-title">${g("courses.targetTitle",{n:s+1})}</span>
        <div class="target-edit-actions">
          <button class="btn-icon" onclick="setTargetGps(${s})" title="${g("courses.setGpsTitle")}">📍</button>
          <button class="btn-icon target-delete-btn" onclick="deleteTargetFromCourse(${s})">🗑</button>
        </div>
      </div>
      <div class="fg"><label class="lbl">${g("courses.nameLabelTarget")}</label>
        <input type="text" value="${r.name||""}" onchange="updateTargetField(${s},'name',this.value)" class="target-edit-input" /></div>
      <div class="target-edit-row">
        <div class="fg target-edit-col"><label class="lbl">${g("courses.emojiLabel")}</label>
          <input type="text" value="${r.emoji||""}" onchange="updateTargetField(${s},'emoji',this.value)" class="target-edit-input" /></div>
        <div class="fg target-edit-col"><label class="lbl">${g("courses.distanceLabel")}</label>
          <input type="number" value="${r.distance||""}" onchange="updateTargetField(${s},'distance',this.value)" class="target-edit-input" /></div>
      </div>
      ${r.gps||r.GPS?`<div class="target-gps-info">${g("courses.gpsInfo",{coords:`${(r.gps||r.GPS).lat.toFixed(5)}, ${(r.gps||r.GPS).lng.toFixed(5)}`})}</div>`:`<div class="target-gps-missing">${g("courses.gpsMissing")}</div>`}
      ${r.imageUrl||r.photo?`<img src="${r.imageUrl||r.photo}" class="target-photo-preview" />`:""}
      <label class="btn btn-dark target-upload-label">
        ${g("courses.uploadPhotoBtn")}
        <input type="file" accept="image/*" class="target-file-input" onchange="uploadTargetPhoto(${s},this)" />
      </label>
      <button class="btn btn-gold target-save-btn" onclick="saveAllTargets()">${g("courses.saveAllTargetsBtn")}</button>
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t,m.approvedDraft.edit=[...n.approvedUsers||[]],pc("edit")}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim().slice(0,100),e=document.getElementById("edit-cloc").value.trim().slice(0,100),t=document.getElementById("edit-cvisibility").value,r=t!=="public",s=t==="hidden",i=s?[...m.approvedDraft.edit]:[];if(!n)return;await Ke(te(G,"courses",m.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i}),m.currentCourse.name=n,m.currentCourse.location=e,m.currentCourse.private=r,m.currentCourse.hidden=s,m.currentCourse.approvedUsers=i;const o=m.courses.findIndex(c=>c.id===m.currentCourse.id);o>-1&&(m.courses[o]={...m.courses[o],name:n,location:e,private:r,hidden:s,approvedUsers:i}),Dt(),Zr(),document.getElementById("course-detail-title").textContent=n+(r?" "+g("courses.membersOnlySuffix"):""),K(g("courses.savedToast"),"success")};window.updateTargetField=function(n,e,t){var r;(r=m.currentCourse)!=null&&r.targets&&(m.currentCourse.targets[n][e]=e==="distance"?t===""?null:Number(t):t)};window.addTargetToCurrentCourse=async function(){if(!m.currentCourse)return;const n=[...m.currentCourse.targets||[]];n.push({number:n.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await Ke(te(G,"courses",m.currentCourse.id),{targets:n}),m.currentCourse.targets=n,vo(m.currentCourse),K(g("courses.targetAddedToast",{n:n.length}),"success")};window.deleteTargetFromCourse=function(n){var e;(e=m.currentCourse)!=null&&e.targets&&or(g("courses.deleteTargetConfirm",{n:n+1}),async()=>{try{const t=[...m.currentCourse.targets];t.splice(n,1),t.forEach((r,s)=>r.number=s+1),await Ke(te(G,"courses",m.currentCourse.id),{targets:t,numTargets:t.length}),m.currentCourse.targets=t,m.currentCourse.numTargets=t.length,vo(m.currentCourse)}catch{K(g("courses.deleteTargetError"),"error")}})};window.setTargetGps=async function(n){var e;if((e=m.currentCourse)!=null&&e.targets)try{const t=await mc();m.currentCourse.targets[n].gps=t,await Ke(te(G,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),vo(m.currentCourse),K(g("courses.gpsSetToast",{n:n+1}),"success")}catch(t){K(g("courses.gpsErrorToast",{msg:t.message}),"error")}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await iv(t),s=Iy(Hy,`courses/${m.currentCourse.id}/target_${n}.jpg`);await _y(s,r,"base64",{contentType:"image/jpeg"});const i=await wy(s);m.currentCourse.targets[n].imageUrl=i,await Ke(te(G,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),vo(m.currentCourse),K(g("courses.photoSavedToast"),"success")}catch(r){K(g("courses.uploadErrorToast",{msg:r.message}),"error")}};window.saveAllTargets=async function(){var n;(n=m.currentCourse)!=null&&n.targets&&(await Ke(te(G,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),K(g("courses.allTargetsSavedToast"),"success"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&m.courseMap&&setTimeout(()=>m.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await mc();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(m.courseMap),m.courseMap.panTo([e.lat,e.lng])}catch{K(g("courses.gpsUnavailableToast"),"error"),n.classList.remove("on")}};window.doDeleteCourse=function(){if(!m.currentCourse)return;const n=m.currentCourse.id,e=m.currentCourse.name;or(g("courses.deleteCourseConfirm",{name:e}),async()=>{try{await Lt(te(G,"courses",n)),m.courses=m.courses.filter(t=>t.id!==n),m.currentCourse=null,Dt(),Zr(),window.populateCourseDropdown(),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"),K(g("courses.courseDeletedToast"),"success")}catch{K(g("courses.deleteCourseError"),"error")}})};const La={new:"new-course-approved",edit:"edit-capproved"};function pc(n){const e=m.approvedDraft[n];document.getElementById(`${La[n]}-chips`).innerHTML=e.length?e.map(t=>`<span class="approved-chip">${H(t)}<span class="approved-chip-remove" onclick="removeApprovedEmail('${n}','${H(t)}')">✕</span></span>`).join(""):`<span class="approved-empty">${g("courses.noApprovedYet")}</span>`}function sv(n,e){const t=e.trim().toLowerCase();!t||!t.includes("@")||(m.approvedDraft[n].includes(t)||m.approvedDraft[n].push(t),pc(n))}window.removeApprovedEmail=function(n,e){m.approvedDraft[n]=m.approvedDraft[n].filter(t=>t!==e),pc(n)};window.addApprovedEmailManual=function(n){const e=document.getElementById(`${La[n]}-manual`);sv(n,e.value),e.value=""};window.searchApprovedUsers=async function(n,e){const t=document.getElementById(`${La[n]}-ac`);if(!e.trim()){t.classList.add("hidden");return}let r=[];try{r=(await ze(Ge(G,"users"))).docs.map(i=>i.data()).map(i=>({name:i.name||i.yam||i.email||"—",email:(i.email||i["e-mail"]||"").toLowerCase()})).filter(i=>i.email&&(i.name.toLowerCase().includes(e.toLowerCase())||i.email.includes(e.toLowerCase())))}catch(s){console.warn(s)}if(!r.length){t.classList.add("hidden");return}t.innerHTML=r.map(s=>`<div class="ac-item" data-email="${H(s.email)}">${H(s.name)} <span style='font-size:11px;opacity:.6'>${H(s.email)}</span></div>`).join(""),t.querySelectorAll(".ac-item").forEach(s=>s.addEventListener("click",()=>{sv(n,s.dataset.email),document.getElementById(`${La[n]}-search`).value="",t.classList.add("hidden")})),t.classList.remove("hidden")};window.openCreateCourseModal=function(){m.approvedDraft.new=[],pc("new"),document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",document.getElementById("create-course-modal").classList.remove("hidden")};window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim().slice(0,100),e=document.getElementById("new-course-loc").value.trim().slice(0,100),t=document.getElementById("new-course-visibility").value,r=t!=="public",s=t==="hidden",i=s?[...m.approvedDraft.new]:[],o=document.getElementById("new-course-targets"),c=(o.value==="custom"?Number(document.getElementById("new-course-targets-custom").value):Number(o.value))||24;if(!n)return;const l=Array.from({length:c},(u,h)=>({number:h+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));try{const u=m.user.uid,h=await Zg(Ge(G,"courses"),{name:n,yam:n,numTargets:c,antalMål:c,location:e,beliggenhed:e,targets:l,mål:l,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i,ownerId:u,created:be(),visits:[],besøg:[]});m.courses.unshift({id:h.id,name:n,numTargets:c,location:e,targets:l,visits:[],private:r,hidden:s,approvedUsers:i,ownerId:u}),Dt(),Zr(),window.populateCourseDropdown(),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value="",document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",K(g("courses.courseCreatedToast"),"success")}catch{K(g("courses.createCourseError"),"error")}};async function sd(n,e,t){const r=te(G,"courses",n),s=await Xn(r);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await Ke(r,{targets:o,mål:o})}function iv(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,l=i.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const u=document.createElement("canvas");u.width=c,u.height=l,u.getContext("2d").drawImage(i,0,0,c,l),e(u.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},r.onerror=t,r.readAsDataURL(n)})}async function gP(n,e){const t=te(G,"courses",n),r=await Xn(t);if(!r.exists())return;const s=(r.data().visits||[]).filter(o=>o.roundId!==e);await Ke(t,{visits:s});const i=m.courses.find(o=>o.id===n);i&&(i.visits=s)}let Ts=[];async function ov(){if(m.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{await id()}catch(n){console.warn(n)}if(m.isSuperAdmin){document.getElementById("users-section").classList.remove("hidden");try{Ts=(await ze(Ge(G,"users"))).docs.map(e=>({uid:e.id,...e.data()})).sort((e,t)=>(e.name||e.yam||"").localeCompare(t.name||t.yam||"","da")),av()}catch(n){console.warn(n)}}}}async function id(){const n=document.getElementById("admins-list");if(!n)return;n.innerHTML=`<div class="admin-hint">${g("admin.loading")}</div>`;const e=await ze(Ge(G,"admins"));if(e.empty){n.innerHTML=`<div class="admin-hint">${g("admin.empty")}</div>`;return}n.innerHTML=`<div class="admin-list-label">${g("admin.currentAdminsTitle")}</div>`,e.docs.forEach(t=>{var o;const r=document.createElement("div");r.className="admin-row";const s=t.data().email||t.id,i=t.id===((o=m.user)==null?void 0:o.uid);if(r.innerHTML=`<span class="admin-row-email">${H(s)}${i?` <span class="admin-you-tag">${g("admin.youTag")}</span>`:""}</span>`,m.isSuperAdmin&&!i){const c=document.createElement("button");c.className="btn btn-dark btn-sm admin-remove-btn",c.textContent=g("admin.removeBtn"),c.onclick=()=>doRemoveAdmin(t.id,s),r.appendChild(c)}n.appendChild(r)})}const el=[{key:"period7",ms:7*864e5},{key:"period30",ms:30*864e5},{key:"period365",ms:365*864e5}];window.loadUsageStats=async function(){const n=document.getElementById("usage-stats-result");if(n){n.textContent=g("admin.loadingStats");try{const e=await ze($A(G,"runder")),t=Date.now(),r=el.map(()=>0);let s=0;e.forEach(o=>{var u,h;s++;const c=(h=(u=o.data().dato)==null?void 0:u.toDate)==null?void 0:h.call(u);if(!c)return;const l=t-c.getTime();el.forEach((p,y)=>{l<=p.ms&&r[y]++})});const i=el.map((o,c)=>`<div class="usage-stat-row"><span>${H(g("admin."+o.key))}</span><b>${r[c]}</b></div>`).join("");n.innerHTML=`${i}<div class="usage-stat-row usage-stat-total"><span>${g("admin.totalRegistered")}</span><b>${s}</b></div>`}catch(e){n.textContent=g("common.errorPrefix")+e.message}}};const Gf={langbue:"langbue",trad:"trad",recurve:"recurve",compound:"compound",barbue:"barbue",buejæger:"buejaeger","trad-buejæger":"tradBuejaeger",rytterbue:"rytterbue"};function av(n=""){const e=document.getElementById("users-list");e.innerHTML="";const t=n.toLowerCase(),r=t?Ts.filter(c=>(c.name||c.yam||"").toLowerCase().includes(t)||(c.email||c["e-mail"]||"").toLowerCase().includes(t)):Ts;document.getElementById("users-count").textContent=g("admin.usersCount",{n:Ts.length});const s=document.getElementById("users-summary"),i={};Ts.forEach(c=>{const l=c.bueklasse||g("common.unknown");i[l]=(i[l]||0)+1});const o=Object.entries(i).sort((c,l)=>l[1]-c[1]).map(([c,l])=>`<span class="bow-chip"><b>${l}</b> ${H(Gf[c]?g("common.bowClassShort."+Gf[c]):c)}</span>`).join("");s.innerHTML=`<div class="bow-chips-wrap">${o}</div>`,r.forEach(c=>{var w;const l=document.createElement("div");l.className="urow";const u=(w=c.created)!=null&&w.toDate?c.created.toDate().toLocaleDateString(rn()):"—",h=c.bueklasse||"",p=c.kon==="m"?"♂":c.kon==="k"?"♀":"",y=c.newsletterConsent?`<span class="unl" title="${g("admin.newsletterBadgeTitle")}">✉️</span>`:"";l.innerHTML=`<span class="un">${H(c.name||c.yam||"—")}${y}</span><span class="ue">${H(c.email||c["e-mail"]||"")}</span><span class="ubow">${H(h)}${p?` ${H(p)}`:""}</span><span class="ud">${H(u)}</span>`,e.appendChild(l)})}window.filterUsers=function(n){av(n)};window.exportNewsletterList=function(){const n=Ts.filter(c=>c.newsletterConsent);if(!n.length){K(g("admin.noNewsletterSubscribers"),"error");return}const e=c=>`"${String(c||"").replace(/"/g,'""')}"`,r=[[g("admin.csvNameHeader"),g("admin.csvEmailHeader")],...n.map(c=>[c.name||c.yam||"",c.email||c["e-mail"]||""])].map(c=>c.map(e).join(",")).join(`\r
`),s=new Blob(["\uFEFF"+r],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.download="nyhedsbrev-tilmeldinger.csv",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i)};window.doAddAdmin=async function(){if(!m.isSuperAdmin)return;const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await ze(Ge(G,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){K(g("admin.userNotFound"),"error");return}await pt(te(G,"admins",t.id),{email:n,created:be()}),K(g("admin.nowAdmin",{name:t.data().name||n}),"success"),document.getElementById("admin-email").value="",await id()}catch(e){K(g("common.errorPrefix")+e.message,"error")}};window.doRemoveAdmin=async function(n,e){if(m.isSuperAdmin&&confirm(g("admin.removeConfirm",{email:e})))try{await Lt(te(G,"admins",n)),K(g("admin.removedAdmin",{email:e}),"success"),await id()}catch(t){K(g("common.errorPrefix")+t.message,"error")}};function cv(n,e,t){const r=ed(n.scores,e.ruleset),s=dt(n.scores),i=n.scores.flat().filter(l=>l!=null),o=i.length?(i.reduce((l,u)=>l+_e(u),0)/i.length).toFixed(2):"—";let c="";if(t>=2){const l=n.scores.map(y=>(y||[])[0]).filter(y=>y!=null),u=n.scores.map(y=>(y||[])[1]).filter(y=>y!=null),h=l.length?(l.reduce((y,w)=>y+_e(w),0)/l.length).toFixed(2):"—",p=u.length?(u.reduce((y,w)=>y+_e(w),0)/u.length).toFixed(2):"—";c=`<div class="dist-row"><span>${g("results.distArrow1")}</span><span>${h}</span></div><div class="dist-row"><span>${g("results.distArrow2")}</span><span>${p}</span></div>`}return`<div class="dist-name">${H(n.name)}</div><div class="dist-row dist-row-total"><span>${g("results.totalLabel")}</span><span>${s} pt</span></div>${c}<div class="dist-row dist-row-border"><span>${g("results.overallAvg")}</span><span>${o}</span></div>${Object.entries(r).map(([l,u])=>`<div class="dist-row"><span>${l}</span><span>${u}x</span></div>`).join("")}`}let Di=null;function yP(n){Di=n;const e=qt(n.ruleset);return'<div class="dist-grid">'+n.shooters.map((t,r)=>`<div class="dist-card" onclick="window.showDistCardEnlarged(${r})">${cv(t,n,e)}</div>`).join("")+"</div>"}window.showDistCardEnlarged=function(n){if(!Di)return;const e=Di.shooters[n];if(!e)return;const t=document.getElementById("dist-enlarge-body");t&&(t.innerHTML=cv(e,Di,qt(Di.ruleset)),document.getElementById("dist-enlarge-ov").classList.remove("hidden"))};function lv(n){const e=td(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${H((e==null?void 0:e.name)||"—")}</div><div class="win-score">${e?dt(e.scores):0} ${g("results.pointWord")}</div>`,document.getElementById("res-table").innerHTML=uv(n),document.getElementById("res-dist").innerHTML=yP(n)}function uv(n){const e=(n.startTarget||1)-1,t=qt(n.ruleset);let r=`<div class="tbl-wrap"><table class="rtbl"><tr><th>${g("results.tableTargetHeader")}</th>${n.shooters.map(s=>`<th>${s.name}</th>`).join("")}</tr>`;for(let s=0;s<n.numTargets;s++)r+=`<tr><td class="tc">${s===e?'<span class="start-target-dot"></span>':""}${s+1}</td>`,n.shooters.forEach(o=>{const c=o.scores[s]||Array(t).fill(null),l=c.reduce((u,h)=>u+(h!=null&&h!=="M"?Number(h):0),0);r+=`<td>${c.map(u=>u??"—").join("/")}<br><small>${l}</small></td>`}),r+="</tr>";return r+=`<tr class="tr-tot"><td class="tc">${g("results.totalLabel")}</td>${n.shooters.map(s=>`<td>${dt(s.scores)}</td>`).join("")}</tr></table></div>`,r}function vP(n){const e=er(n.ruleset),t=qt(n.ruleset);return n.shooters.map(r=>{const s=dt(r.scores),i=r.scores.flat().filter(h=>h!=null),o=i.length,c=o?(i.reduce((h,p)=>h+_e(p),0)/o).toFixed(2):"—",l=ed(r.scores,n.ruleset);let u="";if(t>=2){const h=r.scores.map(A=>(A||[])[0]).filter(A=>A!=null),p=r.scores.map(A=>(A||[])[1]).filter(A=>A!=null),y=h.length?(h.reduce((A,P)=>A+_e(P),0)/h.length).toFixed(2):"—",w=p.length?(p.reduce((A,P)=>A+_e(P),0)/p.length).toFixed(2):"—";u=`<div class="summary-stats-row2">
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${y}</div>
          <div class="summary-stat-lbl">${g("results.summaryArrow1")}</div>
        </div>
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${w}</div>
          <div class="summary-stat-lbl">${g("results.summaryArrow2")}</div>
        </div>
      </div>`}return`<div class="summary-card">
      <div class="summary-card-name">${H(r.name)}</div>
      <div class="summary-stats-row3">
        <div class="summary-stat-box">
          <div class="summary-stat-val">${s}</div>
          <div class="summary-stat-lbl">${g("results.summaryPoints")}</div>
        </div>
        <div class="summary-stat-box">
          <div class="summary-stat-val">${o}</div>
          <div class="summary-stat-lbl">${g("results.summaryArrows")}</div>
        </div>
        <div class="summary-stat-box">
          <div class="summary-stat-val">${c}</div>
          <div class="summary-stat-lbl">${g("results.summaryAvgPerArrow")}</div>
        </div>
      </div>
      ${u}
      <div class="summary-zones-row">
        ${e.map(h=>`<div><div class="summary-zone-key">${h}</div><div class="summary-zone-val">${l[h]||0}</div></div>`).join("")}
      </div>
    </div>`}).join("")}function _P(n){const e=qt(n.ruleset),t=n.shooters.map(s=>{const i=s.scores.filter(p=>{const y=p||Array(e).fill(null);return y.length>=e&&y.slice(0,e).every(w=>w!==null)});if(!i.length||i.length===n.numTargets)return null;const o=i.flat().filter(p=>p!==null),c=o.reduce((p,y)=>p+_e(y),0),l=o.length,u=l?(c/l).toFixed(2):0,h=i.length?(c/i.length).toFixed(1):0;return{name:s.name,shot:i.length,total:c,avgPil:u,avgMaal:h}}).filter(Boolean);if(!t.length)return"";const r=t.map(s=>`<div class="actual-card"><div class="actual-card-name">${s.name}</div><div class="actual-card-sub">${g("results.actualSub",{shot:s.shot,total:n.numTargets})}</div><div class="actual-card-total">${s.total}</div><div class="actual-card-total-lbl">${g("results.summaryPoints")}</div><div class="actual-card-avgs"><div><div class="actual-avg-val">${s.avgPil}</div><div class="actual-avg-lbl">${g("results.actualAvgPerArrow")}</div></div><div><div class="actual-avg-val">${s.avgMaal}</div><div class="actual-avg-lbl">${g("results.actualAvgPerTarget")}</div></div></div></div>`).join("");return`<div class="actual-results-wrap"><div class="actual-results-title">${g("results.actualTitle")}</div><div class="actual-results-cards">${r}</div></div>`}function js(){const n=document.getElementById("rounds-list");if(!m.rounds.length){n.innerHTML=`<div class="empty"><div class="empty-icon">📊</div>${g("results.empty")}</div>`;return}n.innerHTML="",m.rounds.forEach(e=>{const t=(e.shooters||[]).map(l=>({...l,scores:Kr(l.scores)})),r=t.length?td(t):null,s=e.created,i=s!=null&&s.toDate?s.toDate().toLocaleDateString(rn()):s!=null&&s.seconds?new Date(s.seconds*1e3).toLocaleDateString(rn()):typeof s=="number"?new Date(s).toLocaleDateString(rn()):"—",o=document.createElement("div");o.className="rcard";const c=e.ruleset&&e.ruleset!=="WA"?` · <span class="rcard-ruleset-tag">${H(e.ruleset)}</span>`:"";o.innerHTML=`<div class="rcard-info"><div class="rcard-name">${H(e.name||g("results.roundFallback"))}</div><div class="rcard-meta"><span class="rcard-date">${H(i)}</span> · ${H(e.courseName||g("results.targetsUnit",{n:e.numTargets}))}${c}</div><div class="rcard-win">🏆 ${H((r==null?void 0:r.name)||"—")} (${r?dt(r.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser">📈</button><button class="del-btn" data-id="${H(e.id)}">✕</button>`,o.querySelector(".rcard-info").onclick=()=>gc({...e,shooters:t}),o.querySelector(".rcard-analyse").onclick=()=>window.analyseRound(e.id),o.querySelector(".del-btn").onclick=l=>{const u=l.currentTarget,h=`r-${e.id}`;m.deleteConfirm[h]?(delete m.deleteConfirm[h],m.rounds=m.rounds.filter(p=>p.id!==e.id),Dt(),js(),m.user&&Lt(te(G,"users",m.user.uid,"rounds",e.id)).catch(p=>console.warn(p)),m.user&&e.courseId&&Lt(te(G,"bane_stats",e.courseId,"runder",e.id)).catch(p=>console.warn(p)),e.courseId&&gP(e.courseId,e.id).catch(p=>console.warn(p))):(m.deleteConfirm[h]=!0,u.classList.add("conf"),u.textContent=g("results.deleteConfirm"),setTimeout(()=>{delete m.deleteConfirm[h],u.classList.remove("conf"),u.textContent="✕"},3e3))},n.appendChild(o)})}function gc(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),m.rpopMap&&(m.rpopMap.remove(),m.rpopMap=null);const t=n.gpsRoute||n.route||null,r=n.gpsDuration||n.duration||null,s=n.gpsDistance||n.distance||null,i=r?tv(r):null,o=s?nv(s):null,c=o||i?`<div class="rpop-gps-row">${o?`<div class="rpop-gps-box"><div class="rpop-gps-val">${o}</div><div class="rpop-gps-lbl">${g("results.popupDistance")}</div></div>`:""}${i?`<div class="rpop-gps-box"><div class="rpop-gps-val">${i}</div><div class="rpop-gps-lbl">${g("results.popupTime")}</div></div>`:""}</div>${t?'<div id="rpop-map"></div>':""}`:"";if(document.getElementById("rpop-body").innerHTML=`<h3 class="rpop-title">${H(n.name)}</h3>${c}`+vP(n)+uv(n)+_P(n)+`<button class="btn btn-gold rpop-send-btn" onclick="window.sendResults(window._lastRound)">${g("results.sendResultsBtn")}</button>`,t){const l=ev(t);l.length&&setTimeout(()=>{const u=document.getElementById("rpop-map");if(!u)return;m.rpopMap=window.L.map(u),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(m.rpopMap);const h=window.L.polyline(l.map(p=>[p.lat,p.lng]),{color:"#e8a020",weight:3}).addTo(m.rpopMap);m.rpopMap.fitBounds(h.getBounds(),{padding:[20,20]})},50)}}window.sendResults=async function(n){if(!n){K(g("results.noRoundToSend"),"error");return}const e=new Date().toLocaleDateString(rn());let t=g("email.header")+`
`;t+=g("email.dateLabel")+e+`
`,n.courseName&&(t+=g("email.courseLabel")+n.courseName+`
`),t+=`
`+g("email.resultsHeader")+`
`,[...n.shooters].sort((l,u)=>dt(u.scores)-dt(l.scores)).forEach((l,u)=>{t+=`
`+(u+1)+". "+l.name+": "+dt(l.scores)+g("email.pointWord")}),t+=`

`+g("email.detailHeader")+`
`;const s=qt(n.ruleset);n.shooters.forEach(l=>{t+=`
`+l.name+`:
`;for(let y=0;y<n.numTargets;y++){const w=l.scores[y]||Array(s).fill(null),A=w.reduce((P,D)=>P+(D!=null&&D!=="M"?Number(D):0),0);t+=g("email.targetLabel")+(y+1)+": "+w.map(P=>P??"-").join("+")+" = "+A+`
`}const u=l.scores.flat().filter(y=>y!=null),h=u.length?(u.reduce((y,w)=>y+_e(w),0)/u.length).toFixed(2):"—",p=ed(l.scores,n.ruleset);if(t+=g("email.totalLabel")+dt(l.scores)+g("email.pointWord")+`
`,s>=2){const y=l.scores.map(D=>(D||[])[0]).filter(D=>D!=null),w=l.scores.map(D=>(D||[])[1]).filter(D=>D!=null),A=y.length?(y.reduce((D,O)=>D+_e(O),0)/y.length).toFixed(2):"—",P=w.length?(w.reduce((D,O)=>D+_e(O),0)/w.length).toFixed(2):"—";t+="  "+g("email.arrow1Label")+": "+A+" | "+g("email.arrow2Label")+": "+P+" | "+g("email.overallAvgLabel")+": "+h+`
`}else t+="  "+g("email.overallAvgLabel")+": "+h+`
`;t+=g("email.distributionLabel")+Object.entries(p).map(([y,w])=>y+":"+w+"x").join("  ")+`
`}),n.id&&(t+=`

${g("email.seeInApp")}
https://bsk65.github.io/3D/?round=${n.id}
${g("email.loginRequired")}`);const i=n.shooters.map(l=>{var u;return(u=m.friends.find(h=>h.id===l.id))==null?void 0:u.email}).filter(Boolean),o=g("email.subjectPrefix")+n.name,c="mailto:"+i.join(",")+"?subject="+encodeURIComponent(o)+"&body="+encodeURIComponent(t);window.location.href=c};const dv="archery_meetups_seen",Kf={afventer:"statusPending",tilmeldt:"statusAccepted",foreslået:"statusProposing",afvist:"statusDeclined"};function tl(n){if(!n)return"";const[e,t,r]=n.split("-");return e&&t&&r?`${r}-${t}-${e}`:n}let rt=new Map,_o="venner",Ni=null,hv=null,od=null,fv=null;async function ad(){if(m.user)try{const n=[ze($s(Ge(G,"meetups"),Cr("creatorUid","==",m.user.uid))),ze($s(Ge(G,"meetups"),Cr("invitedUids","array-contains",m.user.uid)))];m.isSuperAdmin&&n.push(ze(Ge(G,"meetups")));const e=await Promise.all(n),t=new Map;e.forEach(r=>r.docs.forEach(s=>t.set(s.id,{id:s.id,...s.data()}))),m.meetups=[...t.values()].sort((r,s)=>`${r.date}${r.time}`.localeCompare(`${s.date}${s.time}`))}catch(n){console.warn("Hent meetups:",n)}}function wP(n,e){return n.filter(t=>{var s,i;return(((i=(s=t.updatedAt)==null?void 0:s.toMillis)==null?void 0:i.call(s))??(typeof t.updatedAt=="number"?t.updatedAt:0))>e}).length}function wo(){const n=document.getElementById("meetup-badge");if(!n)return;const e=Number(localStorage.getItem(dv)||0),t=wP(m.meetups,e);n.classList.toggle("hidden",t===0),n.textContent=t}function IP(){localStorage.setItem(dv,String(Date.now())),wo()}function Vt(){const n=document.getElementById("meetups-list");if(!n)return;const e=new Date().toISOString().slice(0,10),t=m.meetups.filter(r=>r.date>=e);if(!t.length){n.innerHTML=`<div class="empty"><div class="empty-icon">🏹</div>${g("meetups.empty")}</div>`;return}n.innerHTML="",t.forEach(r=>n.appendChild(TP(r)))}function TP(n){var u;const e=document.createElement("div");e.className="meetup-card"+(n.status==="aflyst"?" meetup-cancelled":"");const t=n.creatorUid===((u=m.user)==null?void 0:u.uid),r=(n.participants||[]).find(h=>{var p;return h.uid===((p=m.user)==null?void 0:p.uid)}),s=m.isSuperAdmin&&!t&&!r,i=(n.participants||[]).map(h=>{const p=h.status==="foreslået"&&h.proposedDate?` → ${H(tl(h.proposedDate))} ${H(h.proposedTime||"")}`:"";return`<div class="meetup-partrow"><span>${H(h.name)}</span><span class="meetup-status meetup-status-${H(h.status)}">${H(Kf[h.status]?g("meetups."+Kf[h.status]):h.status)}${p}</span></div>`}).join(""),o=(n.comments||[]).map(h=>`<div class="meetup-comment"><b>${H(h.name)}:</b> ${H(h.text)}</div>`).join("");let c="";n.status!=="aflyst"&&(r&&(r.status!=="tilmeldt"&&(c+=`<button class="btn btn-gold btn-sm" onclick="joinMeetup('${n.id}')">${g("meetups.joinBtn")}</button>`),c+=`<button class="btn btn-dark btn-sm" onclick="openProposeTimeModal('${n.id}')">${g("meetups.proposeOtherBtn")}</button>`,r.status!=="afvist"&&(c+=`<button class="btn btn-dark btn-sm" onclick="declineMeetup('${n.id}')">${g("meetups.declineBtn")}</button>`)),t&&((n.participants||[]).filter(h=>h.status==="foreslået"&&h.proposedDate).forEach(h=>{c+=`<button class="btn btn-gold btn-sm" onclick="acceptProposedTime('${n.id}','${h.uid}')">${g("meetups.acceptProposalBtn",{date:H(tl(h.proposedDate)),time:H(h.proposedTime||""),name:H(h.name)})}</button>`}),c+=`<button class="btn btn-dark btn-sm" onclick="openEditMeetupModal('${n.id}')">${g("meetups.editTimeBtn")}</button>`,c+=`<button class="btn btn-dark btn-sm" onclick="cancelMeetup('${n.id}')">${g("meetups.cancelMeetupBtn")}</button>`,c+=`<button class="btn btn-red btn-sm" onclick="deleteMeetup('${n.id}')">${g("meetups.deleteBtn")}</button>`)),e.innerHTML=`
    ${n.status==="aflyst"?`<div class="meetup-cancelled-banner">${g("meetups.cancelledBanner")}</div>`:""}
    ${s?`<div class="meetup-notinvited-banner">${g("meetups.notInvitedBanner")}</div>`:""}
    <div class="meetup-head">
      <div class="meetup-title">${H(n.courseName)}</div>
      <div class="meetup-when">${g("meetups.dateTimeLine",{date:H(tl(n.date)),time:H(n.time)})}</div>
      <div class="meetup-creator">${g("meetups.createdBy",{name:H(n.creatorName)})}</div>
    </div>
    <div class="meetup-participants">${i}</div>
    <div class="meetup-actions">${c}</div>
    <div class="meetup-comments">${o}</div>
    <div class="meetup-comment-add">
      <input type="text" placeholder="${g("meetups.commentPlaceholder")}" class="meetup-comment-input" maxlength="300" />
      <button class="btn btn-dark btn-sm meetup-comment-send">${g("meetups.sendBtn")}</button>
    </div>
  `;const l=e.querySelector(".meetup-comment-input");return e.querySelector(".meetup-comment-send").addEventListener("click",()=>{bP(n.id,l.value),l.value=""}),e}window.openMeetupModal=function(){if(!m.courses.length){K(g("meetups.noCoursesToast"),"error");return}rt=new Map,_o="venner",Ni=null,od=null,document.getElementById("mu-course-display").value="",document.getElementById("mu-course-list").classList.add("hidden"),EP(),document.getElementById("mu-date").value="",document.getElementById("mu-time").value="",document.getElementById("mu-comment").value="",document.querySelectorAll(".mu-pool-tab").forEach(n=>n.classList.toggle("active",n.dataset.pool==="venner")),Io(),yc(),document.getElementById("meetup-modal").classList.remove("hidden")};window.toggleMeetupCourseList=function(){document.getElementById("mu-course-list").classList.toggle("hidden")};function EP(){const n=document.getElementById("mu-course-list");n.innerHTML="",m.courses.forEach(e=>{const t=document.createElement("div");t.className="ac-item",t.textContent=e.name||e.yam||"",t.addEventListener("click",()=>{od=e.id,document.getElementById("mu-course-display").value=e.name||e.yam||"",n.classList.add("hidden")}),n.appendChild(t)})}window.toggleMeetupPool=function(n){_o=n,document.querySelectorAll(".mu-pool-tab").forEach(e=>e.classList.toggle("active",e.dataset.pool===n)),Io()};async function Bl(){if(!Ni)try{Ni=(await ze(Ge(G,"users"))).docs.map(e=>({uid:e.id,name:e.data().name||e.data().yam||e.data().email||"—"}))}catch(n){console.warn(n),Ni=[]}return Ni}async function mv(){if(_o==="venner"){const e=new Set((await Bl()).map(t=>t.uid));return m.friends.map(t=>({uid:t.id,name:t.name,registered:e.has(t.id)})).sort((t,r)=>t.name.localeCompare(r.name,"da"))}return(await Bl()).filter(e=>{var t;return e.uid!==((t=m.user)==null?void 0:t.uid)}).map(e=>({...e,registered:!0})).sort((e,t)=>e.name.localeCompare(t.name,"da"))}async function Io(){const n=document.getElementById("mu-invitee-list");if(!n)return;const e=await mv();if(n.innerHTML="",!e.length){n.innerHTML=`<div class="empty"><div class="empty-icon">👤</div>${g(_o==="venner"?"meetups.noFriendsYet":"meetups.noOtherUsers")}</div>`;return}e.forEach(t=>{const r=document.createElement("label");r.className="mu-invitee-row"+(t.registered===!1?" mu-invitee-unregistered":"");const s=document.createElement("input");s.type="checkbox",s.checked=rt.has(t.uid);const i=document.createElement("span");if(i.textContent=t.name,r.appendChild(s),r.appendChild(i),t.registered===!1){s.disabled=!0;const o=document.createElement("span");o.className="mu-invitee-note",o.textContent=g("meetups.notRegisteredNote"),r.appendChild(o)}else s.addEventListener("change",()=>pv(t.uid,t.name));n.appendChild(r)})}function pv(n,e){rt.has(n)?rt.delete(n):rt.set(n,{uid:n,name:e}),yc(),Io()}window.toggleSelectAllMeetup=async function(){const n=(await mv()).filter(t=>t.registered!==!1);if(!n.length)return;n.every(t=>rt.has(t.uid))?n.forEach(t=>rt.delete(t.uid)):n.forEach(t=>rt.set(t.uid,t)),yc(),Io()};function yc(){const n=document.getElementById("mu-selected-chips");if(n){if(n.innerHTML="",!rt.size){n.innerHTML=`<div class="mu-chips-empty">${g("meetups.noRecipientsSelected")}</div>`;return}[...rt.values()].forEach(e=>{const t=document.createElement("div");t.className="pchip";const r=document.createElement("span");r.className="pchip-name",r.textContent=e.name;const s=document.createElement("button");s.className="pchip-rm",s.textContent="✕",s.addEventListener("click",()=>pv(e.uid,e.name)),t.appendChild(r),t.appendChild(s),n.appendChild(t)})}}window.saveMeetup=async function(){var p,y;const n=m.courses.find(w=>w.id===od),e=document.getElementById("mu-date").value,t=document.getElementById("mu-time").value;if(!n){K(g("meetups.selectCourseToast"),"error");return}if(!e||!t){K(g("meetups.selectDateTimeToast"),"error");return}if(!rt.size){K(g("meetups.selectRecipientToast"),"error");return}const r=new Set((await Bl()).map(w=>w.uid)),s=[...rt.values()].filter(w=>!r.has(w.uid)).map(w=>w.name);if(s.length&&(s.forEach(w=>{const A=[...rt.entries()].find(([,P])=>P.name===w);A&&rt.delete(A[0])}),K(g("meetups.invalidNamesToast",{names:s.join(", ")}),"error"),yc(),Io(),!rt.size))return;const i=document.getElementById("mu-comment").value.trim().slice(0,300),o=[...rt.keys()],c=[...rt.values()].map(w=>({uid:w.uid,name:w.name,status:"afventer",proposedDate:null,proposedTime:null})),l=i?[{uid:m.user.uid,name:((p=m.profile)==null?void 0:p.name)||"—",text:i,createdAt:new Date}]:[],u=new Date(`${e}T${t}`);u.setDate(u.getDate()+1);const h={courseId:n.id,courseName:n.name||n.yam||"",date:e,time:t,creatorUid:m.user.uid,creatorName:((y=m.profile)==null?void 0:y.name)||"—",pool:_o,invitedUids:o,participants:c,comments:l,status:"åben",createdAt:be(),updatedAt:be(),expireAt:u};try{await Zg(Ge(G,"meetups"),h),document.getElementById("meetup-modal").classList.add("hidden"),K(g("meetups.proposalSentToast"),"success"),await ad(),Vt(),wo()}catch(w){K(g("common.errorPrefix")+w.message,"error")}};async function gv(n,e){const t=m.meetups.find(s=>s.id===n);if(!t||!m.user)return;const r=(t.participants||[]).map(s=>s.uid===m.user.uid?{...s,status:e,proposedDate:null,proposedTime:null}:s);try{await Ke(te(G,"meetups",t.id),{participants:r,updatedAt:be()}),t.participants=r,t.updatedAt=Date.now(),Vt()}catch(s){K(g("common.errorPrefix")+s.message,"error")}}window.joinMeetup=function(n){gv(n,"tilmeldt")};window.declineMeetup=function(n){gv(n,"afvist")};window.openProposeTimeModal=function(n){hv=n,document.getElementById("mu-propose-date").value="",document.getElementById("mu-propose-time").value="",document.getElementById("meetup-propose-modal").classList.remove("hidden")};window.saveProposeTime=async function(){const n=document.getElementById("mu-propose-date").value,e=document.getElementById("mu-propose-time").value;if(!n||!e){K(g("meetups.selectDateTimeToast"),"error");return}const t=m.meetups.find(s=>s.id===hv);if(!t||!m.user)return;const r=(t.participants||[]).map(s=>s.uid===m.user.uid?{...s,status:"foreslået",proposedDate:n,proposedTime:e}:s);try{await Ke(te(G,"meetups",t.id),{participants:r,updatedAt:be()}),t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-propose-modal").classList.add("hidden"),Vt()}catch(s){K(g("common.errorPrefix")+s.message,"error")}};window.acceptProposedTime=async function(n,e){var c;const t=m.meetups.find(l=>l.id===n);if(!t||t.creatorUid!==((c=m.user)==null?void 0:c.uid))return;const r=(t.participants||[]).find(l=>l.uid===e);if(!(r!=null&&r.proposedDate)||!(r!=null&&r.proposedTime))return;const s=r.proposedDate,i=r.proposedTime,o=t.participants.map(l=>l.uid===e?{...l,status:"tilmeldt",proposedDate:null,proposedTime:null}:{...l,status:"afventer",proposedDate:null,proposedTime:null});try{await Ke(te(G,"meetups",t.id),{date:s,time:i,participants:o,updatedAt:be()}),t.date=s,t.time=i,t.participants=o,t.updatedAt=Date.now(),Vt(),K(g("meetups.newTimeAcceptedToast"),"success")}catch(l){K(g("common.errorPrefix")+l.message,"error")}};window.openEditMeetupModal=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||(fv=n,document.getElementById("mu-edit-date").value=e.date,document.getElementById("mu-edit-time").value=e.time,document.getElementById("meetup-edit-modal").classList.remove("hidden"))};window.saveEditMeetup=async function(){var s;const n=document.getElementById("mu-edit-date").value,e=document.getElementById("mu-edit-time").value;if(!n||!e){K(g("meetups.selectDateTimeToast"),"error");return}const t=m.meetups.find(i=>i.id===fv);if(!t||t.creatorUid!==((s=m.user)==null?void 0:s.uid))return;const r=(t.participants||[]).map(i=>({...i,status:"afventer",proposedDate:null,proposedTime:null}));try{await Ke(te(G,"meetups",t.id),{date:n,time:e,participants:r,updatedAt:be()}),t.date=n,t.time=e,t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-edit-modal").classList.add("hidden"),Vt(),K(g("meetups.timeUpdatedToast"),"success")}catch(i){K(g("common.errorPrefix")+i.message,"error")}};window.cancelMeetup=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||or(g("meetups.cancelConfirm"),async()=>{try{await Ke(te(G,"meetups",e.id),{status:"aflyst",updatedAt:be()}),e.status="aflyst",e.updatedAt=Date.now(),Vt()}catch(r){K(g("common.errorPrefix")+r.message,"error")}})};window.deleteMeetup=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||or(g("meetups.deleteConfirm"),async()=>{try{await Lt(te(G,"meetups",e.id)),m.meetups=m.meetups.filter(r=>r.id!==n),Vt(),wo()}catch(r){K(g("common.errorPrefix")+r.message,"error")}})};async function bP(n,e){var i;if(e=(e||"").trim().slice(0,300),!e||!m.user)return;const t=m.meetups.find(o=>o.id===n);if(!t)return;const r={uid:m.user.uid,name:((i=m.profile)==null?void 0:i.name)||"—",text:e,createdAt:new Date},s=[...t.comments||[],r];try{await Ke(te(G,"meetups",t.id),{comments:s,updatedAt:be()}),t.comments=s,t.updatedAt=Date.now(),Vt()}catch(o){K(g("common.errorPrefix")+o.message,"error")}}const yv="archery_share_requests_seen";function AP(n,e){return`${n}_${e}`}async function vv(){if(m.user)try{const[n,e]=await Promise.all([ze($s(Ge(G,"shareRequests"),Cr("ownerUid","==",m.user.uid))),ze($s(Ge(G,"shareRequests"),Cr("viewerUid","==",m.user.uid)))]),t=new Map;n.docs.forEach(r=>t.set(r.id,{id:r.id,...r.data()})),e.docs.forEach(r=>t.set(r.id,{id:r.id,...r.data()})),m.shareRequests=[...t.values()]}catch(n){console.warn("Hent delingsanmodninger:",n)}}function SP(n,e,t){return n.filter(r=>{var i,o;return r.ownerUid!==e||r.status!=="afventer"?!1:(((o=(i=r.createdAt)==null?void 0:i.toMillis)==null?void 0:o.call(i))??(typeof r.createdAt=="number"?r.createdAt:0))>t}).length}function vc(){var r;const n=document.getElementById("share-badge");if(!n)return;const e=Number(localStorage.getItem(yv)||0),t=SP(m.shareRequests,(r=m.user)==null?void 0:r.uid,e);n.classList.toggle("hidden",t===0),n.textContent=t}function RP(){localStorage.setItem(yv,String(Date.now())),vc()}function _v(){return m.user?m.shareRequests.filter(n=>n.viewerUid===m.user.uid&&n.status==="accepteret").map(n=>({uid:n.ownerUid,name:n.ownerName})).sort((n,e)=>n.name.localeCompare(e.name,"da")):[]}async function wv(n){var e,t,r;try{const s=m.shareRequests.find(p=>{var y;return p.ownerUid===n&&p.viewerUid===((y=m.user)==null?void 0:y.uid)&&p.status==="accepteret"}),i=((t=(e=(s==null?void 0:s.acceptedAt)||(s==null?void 0:s.updatedAt))==null?void 0:e.toMillis)==null?void 0:t.call(e))??0,l=(((r=(await Xn(te(G,"users",n))).data())==null?void 0:r.roundIndex)||[]).filter(p=>(p.completed||0)>i).map(p=>p.id),h=(await Promise.all(l.map(p=>Xn(te(G,"users",n,"rounds",p)).catch(()=>null)))).filter(p=>p==null?void 0:p.exists()).map(p=>({...p.data(),id:p.id})).sort((p,y)=>{var P,D;const w=p.completed||p.created||0,A=y.completed||y.created||0;return(typeof A=="number"?A:((P=A.toMillis)==null?void 0:P.call(A))??0)-(typeof w=="number"?w:((D=w.toMillis)==null?void 0:D.call(w))??0)});return m.viewedRounds[n]=h,h}catch(s){return console.warn("Hent delte runder:",s),m.viewedRounds[n]=[],[]}}function ar(){var o;const n=document.getElementById("sharing-list");if(!n)return;const e=(o=m.user)==null?void 0:o.uid,t=m.shareRequests.filter(c=>c.ownerUid===e&&c.status==="afventer"),r=m.shareRequests.filter(c=>c.ownerUid===e&&c.status==="accepteret"),s=m.shareRequests.filter(c=>c.viewerUid===e&&c.status==="accepteret");if(!t.length&&!r.length&&!s.length){n.innerHTML=`<div class="share-empty">${g("sharing.emptyState")}</div>`;return}let i="";t.length&&(i+=`<div class="share-group-title">${g("sharing.incomingRequestsTitle")}</div>`,t.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${H(c.viewerName)}</div>
        <div class="share-actions">
          <button class="btn btn-gold btn-sm" onclick="acceptShareRequest('${c.id}')">${g("sharing.acceptBtn")}</button>
          <button class="btn btn-dark btn-sm" onclick="declineShareRequest('${c.id}')">${g("sharing.rejectBtn")}</button>
        </div>
      </div>`})),r.length&&(i+=`<div class="share-group-title">${g("sharing.sharingWithTitle")}</div>`,r.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${H(c.viewerName)}</div>
        <div class="share-actions">
          <button class="btn btn-red btn-sm" onclick="endSharing('${c.id}')">${g("sharing.stopSharingBtn")}</button>
        </div>
      </div>`})),s.length&&(i+=`<div class="share-group-title">${g("sharing.viewableTitle")}</div>`,s.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${H(c.ownerName)}</div>
        <div class="share-actions">
          <button class="btn btn-dark btn-sm" onclick="window.switchTab('analyse');window.setAnalyseViewer('${c.ownerUid}')">${g("sharing.viewInAnalyseBtn")}</button>
        </div>
      </div>`})),n.innerHTML=i}window.requestViewAccess=async function(n,e){var t,r;if(m.user){if(n===m.user.uid){K(g("sharing.ownRequestError"),"error");return}try{let s=(await Xn(te(G,"users",n))).exists();if(!s){const i=m.friends.find(o=>o.id===n);if(i!=null&&i.email){const c=(await ze(Ge(G,"users"))).docs.find(l=>{const u=l.data(),h=(u.email||u["e-mail"]||"").toLowerCase();return h&&h===i.email.toLowerCase()});c&&(n=c.id,s=!0,i.id=n,Dt(),pt(te(G,"users",m.user.uid,"friends",n),i).catch(l=>console.warn(l)))}}if(!s){K(g("sharing.notRegisteredError",{name:e}),"error");return}await pt(te(G,"shareRequests",AP(n,m.user.uid)),{ownerUid:n,ownerName:e,viewerUid:m.user.uid,viewerName:((t=m.profile)==null?void 0:t.name)||"—",status:"afventer",createdAt:be(),updatedAt:be()}),K(g("sharing.requestSentToast"),"success"),await vv(),ar(),(r=window.renderFriendsList)==null||r.call(window)}catch(s){K(g("common.errorPrefix")+s.message,"error")}}};window.cancelShareRequest=async function(n){var e;try{await Lt(te(G,"shareRequests",n)),m.shareRequests=m.shareRequests.filter(t=>t.id!==n),ar(),(e=window.renderFriendsList)==null||e.call(window)}catch(t){K(g("common.errorPrefix")+t.message,"error")}};window.acceptShareRequest=async function(n){try{await Ke(te(G,"shareRequests",n),{status:"accepteret",acceptedAt:be(),updatedAt:be()});const e=m.shareRequests.find(t=>t.id===n);e&&(e.status="accepteret"),ar(),vc(),K(g("sharing.acceptedToast"),"success")}catch(e){K(g("common.errorPrefix")+e.message,"error")}};window.declineShareRequest=function(n){or(g("sharing.rejectConfirm"),async()=>{try{await Ke(te(G,"shareRequests",n),{status:"afvist",updatedAt:be()});const e=m.shareRequests.find(t=>t.id===n);e&&(e.status="afvist"),ar(),vc()}catch(e){K(g("common.errorPrefix")+e.message,"error")}})};window.endSharing=function(n){or(g("sharing.stopConfirm"),async()=>{try{await Lt(te(G,"shareRequests",n)),m.shareRequests=m.shareRequests.filter(e=>e.id!==n),ar(),K(g("sharing.stoppedToast"),"success")}catch(e){K(g("common.errorPrefix")+e.message,"error")}})};const PP="BOJHqC2HeXd9Ru6EjuL7HEuAZuZ2MM86LPqPfVbeQsm8M8-wgT_u3QPWYFs0XN0vfMz_FS3rDgjXgCXXm0GkmZs",CP="/3D/sw.js";async function Iv(){if(!("serviceWorker"in navigator))return null;try{return await navigator.serviceWorker.register(CP,{scope:"/3D/"})}catch(n){return console.warn("SW-registrering fejlede",n),null}}function kP(){return"Notification"in window&&Notification.permission==="default"}async function Tv(){let n;try{n=await Notification.requestPermission()}catch(e){return console.warn("Notification.requestPermission fejlede",e),K(g("push.permissionError",{msg:e.message}),"error"),!1}if(n==="denied")return K(g("push.blocked"),"error"),!1;if(n!=="granted")return!1;try{if(!await Wy||!so)return K(g("push.unsupported"),"error"),!1;const t=await Iv();if(!t)return K(g("push.swError"),"error"),!1;const r=await K0(so,{vapidKey:PP,serviceWorkerRegistration:t});return r?(await Ke(te(G,"users",m.user.uid),{fcmToken:r}),!0):(K(g("push.tokenError"),"error"),!1)}catch(e){return console.warn("Push-opsætning fejlede",e),K(g("push.genericError",{msg:e.message}),"error"),!1}}function DP(){"Notification"in window&&Notification.permission==="granted"&&Tv()}function NP(){Wy.then(n=>{!n||!so||z0(so,e=>{const t=e.data||{};K(t.body||g("push.newMessageFallback"),"info"),ad().then(()=>{Vt(),wo()}).catch(()=>{})})})}function zf(n,e){var S;const t=E=>{var R;return E.shooters.find(I=>I.id===e)||((R=E.shooters)==null?void 0:R[0])},r=n.map(E=>{const R=t(E);return R?dt(R.scores):null}).filter(E=>E!==null),s=new Set(n.map(E=>E.ruleset||Zn)),i=s.size===1?[...s][0]:null,o=!!i&&qt(i)>=2;let c=0,l=0,u=0,h=0;const p=o?er(i):[],y={},w={};p.forEach(E=>{y[E]=0,w[E]=0});const A={};let P=0,D=0;n.forEach(E=>{const R=t(E);R&&(R.scores.forEach(I=>{I.forEach(Re=>{Re!=null&&(A[Re]=(A[Re]||0)+1,P+=_e(Re),D++)})}),o&&R.scores.forEach(I=>{I[0]!=null&&(y[I[0]]!==void 0&&y[I[0]]++,c+=_e(I[0]),l++),I[1]!=null&&(w[I[1]]!==void 0&&w[I[1]]++,u+=_e(I[1]),h++)}))});const O=l?(c/l).toFixed(2):0,F=h?(u/h).toFixed(2):0,L=l+h?((c+u)/(l+h)).toFixed(2):0,B=D?(P/D).toFixed(2):0,ne=((S=n[0])==null?void 0:S.numTargets)||24,b=Array.from({length:ne},(E,R)=>{let I=0,Re=0;return n.forEach(Qe=>{const cr=t(Qe);if(!cr)return;(cr.scores[R]||[null,null]).forEach(bt=>{bt!=null&&(I+=_e(bt),Re++)})}),Re?I/Re:null}).map((E,R)=>({v:E,i:R})).filter(E=>E.v!==null),_=b.length?b.reduce((E,R)=>E.v>R.v?E:R):null,T=b.length?b.reduce((E,R)=>E.v<R.v?E:R):null;return{myScores:r,p1avg:O,p2avg:F,pilAvg:L,overallPilAvg:B,distP1:y,distP2:w,distAll:A,bestTarget:_,worstTarget:T,pilRuleset:i,pilEligible:o}}function Hf(n){if(!n.length)return 0;const e=n.reduce((t,r)=>t+r,0)/n.length;return Math.sqrt(n.reduce((t,r)=>t+(r-e)**2,0)/n.length)}function xP(n){var l;const e=n.length;if(e<2)return{slope:0,intercept:((l=n[0])==null?void 0:l.y)||0};const t=n.reduce((u,h)=>u+h.x,0),r=n.reduce((u,h)=>u+h.y,0),s=n.reduce((u,h)=>u+h.x*h.y,0),i=n.reduce((u,h)=>u+h.x*h.x,0),o=e*i-t*t,c=o?(e*s-t*r)/o:0;return{slope:c,intercept:(r-c*t)/e}}function LP(n,e){var o,c;const t=((o=n.shooters)==null?void 0:o.find(l=>l.id===e))||((c=n.shooters)==null?void 0:c[0]);if(!t)return[];const r=n.numTargets||24,s=n.traversalOrder||Array.from({length:r},(l,u)=>u),i=[];for(let l=0;l<r;l++){const u=s[l];if(u===void 0)continue;const h=t.scores[u]||[null,null];let p=0,y=0;h.forEach(w=>{w!=null&&(p+=_e(w),y++)}),y&&i.push(p/y)}return i}const Ev=[{key:"0to10",min:0,max:10},{key:"10to20",min:10,max:20},{key:"20to30",min:20}];function VP(n){return Ev.find(e=>(e.min==null||n>=e.min)&&(e.max==null||n<e.max))}function Wf(n){return n!=null&&n.toDate?n.toDate().getTime():n!=null&&n.seconds?n.seconds*1e3:typeof n=="number"?n:null}const OP=10,Qf=56,MP=4;function BP(n,e,t){const r=L=>{var B;return L.shooters.find(ne=>ne.id===e)||((B=L.shooters)==null?void 0:B[0])},s={};Ev.forEach(L=>{s[L.key]={...L,shots:0,kills:0,scoreSum:0}});const i=new Set,o=new Set;n.forEach(L=>{var b;const B=t.find(_=>_.id===L.courseId);if(!B||!((b=B.targets)!=null&&b.length))return;const ne=r(L);if(!ne)return;const X=eP(L.ruleset||Zn);ne.scores.forEach((_,T)=>{var R;const S=(R=B.targets[T])==null?void 0:R.distance;if(S==null||S==="")return;const E=VP(S);E&&_.forEach(I=>{I!=null&&(s[E.key].shots++,s[E.key].scoreSum+=_e(I),X.includes(I)&&s[E.key].kills++,i.add(L.id),o.add(X.join("/")))})})});const c=o.size===1?[...o][0]:null,l=Object.values(s).filter(L=>L.shots>0).map(L=>({...L,killPct:L.kills/L.shots*100,avgPerArrow:L.scoreSum/L.shots})),u=l.reduce((L,B)=>L+B.shots,0),h=l.reduce((L,B)=>L+B.kills,0),p=l.reduce((L,B)=>L+B.scoreSum,0),y=u?{killPct:h/u*100,avgPerArrow:p/u}:null,w=l.filter(L=>L.shots>=OP),A=w.length?w.reduce((L,B)=>B.killPct<L.killPct?B:L):null;let P=null;if(A&&y&&A.avgPerArrow<y.avgPerArrow&&i.size){const L=A.shots/i.size,B=(y.avgPerArrow-A.avgPerArrow)*L;B>=.5&&(P=Math.round(B))}const D=Date.now()-Qf*864e5,O=n.map(L=>{const B=Wf(L.completed)??Wf(L.created),ne=r(L);if(!ne||B==null||B<D)return null;const X=ne.scores.flat().filter(b=>b!=null);return X.length?{ms:B,avgPerArrow:X.reduce((b,_)=>b+_e(_),0)/X.length}:null}).filter(Boolean).sort((L,B)=>L.ms-B.ms);let F=null;if(O.length>=MP){const L=Math.ceil(O.length/2),B=O.slice(0,L),ne=O.slice(L),X=T=>T.reduce((S,E)=>S+E.avgPerArrow,0)/T.length,b=X(B),_=X(ne);b>0&&(F={pctChange:(_-b)/b*100,weeks:Qf/7,rounds:O.length})}return{buckets:l,overall:y,weakest:A,pointPotential:P,trend:F,killLabel:c,roundsUsed:i.size,roundsTotal:n.length,hasData:l.length>0}}function FP(n,e){let t=1,r=0,s=0,i=0,o=1,c=0,l=0,u=0,h=0,p=0,y=0,w=0,A=0;const P=()=>{e.style.transformOrigin="0 0",e.style.transform=t>1?`translate(${r}px,${s}px) scale(${t})`:""};n.addEventListener("touchstart",O=>{if(O.preventDefault(),O.touches.length===2){const F=O.touches,L=n.getBoundingClientRect();i=Math.hypot(F[0].clientX-F[1].clientX,F[0].clientY-F[1].clientY),o=t,c=r,l=s,u=(F[0].clientX+F[1].clientX)/2-L.left,h=(F[0].clientY+F[1].clientY)/2-L.top}else O.touches.length===1&&(p=O.touches[0].clientX,y=O.touches[0].clientY,w=r,A=s)},{passive:!1}),n.addEventListener("touchmove",O=>{if(O.preventDefault(),O.touches.length===2){const F=O.touches,L=Math.hypot(F[0].clientX-F[1].clientX,F[0].clientY-F[1].clientY),B=Math.min(8,Math.max(1,o*L/i)),ne=(u-c)/o,X=(h-l)/o;r=u-ne*B,s=h-X*B,t=B,P()}else O.touches.length===1&&t>1&&(r=w+O.touches[0].clientX-p,s=A+O.touches[0].clientY-y,P())},{passive:!1}),n.addEventListener("touchend",()=>{t<1.05&&(t=1,r=0,s=0,P())},{passive:!0});let D=0;n.addEventListener("touchend",()=>{const O=Date.now();O-D<300&&(t=1,r=0,s=0,P()),D=O},{passive:!0})}let Qt=null,Sr=null;function $P(){const n=document.getElementById("graph-fs");n&&n.classList.add("hidden"),Qt&&(window.removeEventListener("resize",Qt),window.removeEventListener("orientationchange",Qt),Qt=null),Sr&&(document.removeEventListener("gesturestart",Sr),Sr=null)}window.closeGraphFs=$P;function UP(n){m.pendingAnalyseRound=n,m.viewingUid=null,m.viewingName=null,document.getElementById("analyse-filter").value="specific",window.switchTab("analyse")}window.setAnalyseViewer=async function(n){m.viewingUid=n||null;const e=n?_v().find(t=>t.uid===n):null;m.viewingName=(e==null?void 0:e.name)||null,n&&!m.viewedRounds[n]&&await wv(n),window.renderAnalyse()};window.analyseRound=UP;window.setCompareKilde=async function(n,e){e=e||null,n===1?m.compareUid1=e:m.compareUid2=e,e&&!m.viewedRounds[e]&&await wv(e),window.renderAnalyse()};const jP={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333",3:"#0a8a8a","-1":"#5a5a6a"};function qP(n,e,t,r){const s=n.myScores[0]||0,i=t.myScores[0]||0,o=Math.abs(s-i),c='<div class="cmp-sep"></div>',l=(y,w,A)=>`<div style="font-size:11px;color:${A};margin-bottom:4px;">${H(w)}</div>
    ${y.pilEligible?`<div class="cmp-pil-grid">
      <div><div class="cmp-pil-lbl">${g("analyse.arrow1")}</div><div class="cmp-pil-val">${y.p1avg}</div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">${g("results.summaryAvgPerArrow")}</div><div class="cmp-pil-val-mid">${y.pilAvg}</div>
      </div>
      <div><div class="cmp-pil-lbl">${g("analyse.arrow2")}</div><div class="cmp-pil-val">${y.p2avg}</div></div>
    </div>`:`<div class="cmp-pil-grid">
      <div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">${g("results.summaryAvgPerArrow")}</div><div class="cmp-pil-val-mid">${y.overallPilAvg}</div>
      </div>
      <div></div>
    </div>
    <div class="pil-best-note">${y.pilRuleset?g("analyse.singleArrowNoteCompare",{ruleset:y.pilRuleset}):g("analyse.notRelevant")}</div>`}`,u=(y,w,A)=>y.bestTarget&&y.worstTarget?`<div style="font-size:11px;color:${A};margin-bottom:6px;">${H(w)}</div>
    <div class="cmp-target-grid">
      <div class="cmp-target-best">
        <div class="cmp-pil-lbl">${g("analyse.best")}</div>
        <div class="cmp-target-best-val">${g("active.targetFallback",{n:y.bestTarget.i+1})}</div>
        <div class="cmp-target-sub">⌀ ${y.bestTarget.v.toFixed(2)}</div>
      </div>
      <div class="cmp-target-worst">
        <div class="cmp-pil-lbl">${g("analyse.worst")}</div>
        <div class="cmp-target-worst-val">${g("active.targetFallback",{n:y.worstTarget.i+1})}</div>
        <div class="cmp-target-sub">⌀ ${y.worstTarget.v.toFixed(2)}</div>
      </div>
    </div>`:"";let h="";h+=`<div class="card card-mb16">
    <div class="cmp-section-title">${g("analyse.comparisonTitle")}</div>
    <div class="cmp-score-grid">
      <div>
        <div class="cmp-score-lbl-a">${H(e)}</div>
        <div class="cmp-score-val-a">${s}</div>
        <div class="cmp-score-unit">${g("results.summaryPoints")}</div>
      </div>
      <div class="cmp-vs">${g("analyse.vs")}</div>
      <div>
        <div class="cmp-score-lbl-b">${H(r)}</div>
        <div class="cmp-score-val-b">${i}</div>
        <div class="cmp-score-unit">${g("results.summaryPoints")}</div>
      </div>
    </div>
    <div class="cmp-winner-line">${s>i?g("analyse.wonBy",{name:H(e),diff:o}):i>s?g("analyse.wonBy",{name:H(r),diff:o}):g("analyse.tie")}</div>
  </div>`,h+=`<div class="card card-mb16">
    <div class="cmp-section-title">${g("analyse.arrowStatsTitle")}</div>
    ${l(n,e,"var(--acc)")}${c}${l(t,r,"#f0c030")}
  </div>`,(n.bestTarget||t.bestTarget)&&(h+=`<div class="card card-mb16">
      <div class="cmp-section-title">${g("analyse.bestWorstTargetTitle")}</div>
      ${u(n,e,"var(--acc)")}${c}${u(t,r,"#f0c030")}
    </div>`);const p=[...new Set([...n.pilRuleset?er(n.pilRuleset):Object.keys(n.distAll),...t.pilRuleset?er(t.pilRuleset):Object.keys(t.distAll)])];return h+=`<div class="card card-mb16">
    <div class="cmp-section-title">${g("analyse.zoneDistTitle")}</div>
    <div class="cmp-dist-grid">
      <div></div>
      ${p.map(y=>`<div style="text-align:center;font-weight:700;color:${jP[y]||"var(--muted)"};">${y}</div>`).join("")}
      <div class="cmp-dist-lbl-a">${H(e)}</div>
      ${p.map(y=>`<div class="cmp-dist-val">${n.distAll[y]||0}</div>`).join("")}
      <div class="cmp-dist-lbl-b">${H(r)}</div>
      ${p.map(y=>`<div class="cmp-dist-val">${t.distAll[y]||0}</div>`).join("")}
    </div>
  </div>`,h}window.renderAnalyse=function(){var hr,ni,ri,Eo,Pn,si,ii,is,bo,Ao,os,oi,ai,Cn,as,cs;const n=document.getElementById("analyse-content");if(!n)return;const e=m.viewingUid||((hr=m.user)==null?void 0:hr.uid),t=m.viewingUid?m.viewedRounds[m.viewingUid]||[]:m.rounds,r=_v(),s=((ni=document.getElementById("analyse-filter"))==null?void 0:ni.value)||"all",i=s==="compare",o=m.compareUid1!==void 0?m.compareUid1:m.viewingUid,c=m.compareUid2!==void 0?m.compareUid2:m.viewingUid,l=o?m.viewedRounds[o]||[]:m.rounds,u=c?m.viewedRounds[c]||[]:m.rounds,h=document.getElementById("analyse-viewer-wrap"),p=document.getElementById("analyse-viewer");if(p){for(;p.options.length>1;)p.remove(1);r.forEach(V=>{const $=document.createElement("option");$.value=V.uid,$.textContent=V.name,p.appendChild($)}),p.value=m.viewingUid&&r.some(V=>V.uid===m.viewingUid)?m.viewingUid:"",h&&h.classList.toggle("hidden",!r.length)}const y=(V,$)=>{if(V){for(;V.options.length>1;)V.remove(1);r.forEach(z=>{const W=document.createElement("option");W.value=z.uid,W.textContent=z.name,V.appendChild(W)}),V.value=$&&r.some(z=>z.uid===$)?$:"",V.classList.toggle("hidden",!i||!r.length)}};y(document.getElementById("analyse-kilde-1"),o),y(document.getElementById("analyse-kilde-2"),c);const w=document.getElementById("analyse-bane");if(w){const V=w.value;for(;w.options.length>1;)w.remove(1);const $=i?[...l,...u]:t,z=[...new Set($.map(W=>W.courseId).filter(Boolean))];z.forEach(W=>{const J=m.courses.find(ie=>ie.id===W);if(J){const ie=document.createElement("option");ie.value=W,ie.textContent=J.name,w.appendChild(ie)}}),z.includes(V)&&(w.value=V)}if(m.pendingAnalyseRound&&w&&!m.viewingUid){const V=m.rounds.find($=>$.id===m.pendingAnalyseRound);V!=null&&V.courseId&&Array.from(w.options).some($=>$.value===V.courseId)&&(w.value=V.courseId)}const A=s==="all"?0:s==="lastround"?1:s==="specific"?0:Number(s),P=((ri=document.getElementById("analyse-bane"))==null?void 0:ri.value)||"all",D=Number((Eo=document.getElementById("analyse-antal"))==null?void 0:Eo.value)||0,O=document.getElementById("analyse-runde-wrap"),F=document.getElementById("analyse-runde"),L=document.getElementById("analyse-runde-wrap-2"),B=document.getElementById("analyse-runde-2"),ne=document.getElementById("analyse-runde-lbl");O&&(O.style.display=s==="specific"||i?"":"none"),L&&(L.style.display=i?"":"none"),ne&&(ne.style.display=i?"":"none");const X=V=>{const $=V.created;return $!=null&&$.toDate?$.toDate().toLocaleDateString(rn()):$!=null&&$.seconds?new Date($.seconds*1e3).toLocaleDateString(rn()):typeof $=="number"?new Date($).toLocaleDateString(rn()):"—"},b=((Pn=document.getElementById("analyse-ruleset"))==null?void 0:Pn.value)||"all",_=(V,$,z)=>{let W=P==="all"?z:z.filter(ie=>ie.courseId===P);b!=="all"&&(W=W.filter(ie=>(ie.ruleset||"WA")===b));const J=V.value;V.innerHTML=`<option value="">${$}</option>`,W.forEach(ie=>{const ae=document.createElement("option");ae.value=ie.id,ae.textContent=`${X(ie)} — ${ie.name||g("results.roundFallback")}`,V.appendChild(ae)}),W.some(ie=>ie.id===J)&&(V.value=J)};if((s==="specific"||i)&&F&&(_(F,g("analyse.selectRoundPlaceholder"),i?l:t),m.pendingAnalyseRound&&(F.value=m.pendingAnalyseRound,m.pendingAnalyseRound=null)),i&&B&&_(B,g("analyse.selectRound2Placeholder"),u),i){const V=F==null?void 0:F.value,$=B==null?void 0:B.value;if(!V||!$){n.innerHTML=`<div class="empty"><div class="empty-icon">📊</div>${g("analyse.selectTwoRounds")}</div>`;return}const z=oe=>({...oe,shooters:(oe.shooters||[]).map(Ce=>({...Ce,scores:Kr(Ce.scores)}))}),W=l.map(z).find(oe=>oe.id===V),J=u.map(z).find(oe=>oe.id===$);if(!W||!J){n.innerHTML=`<div class="empty">${g("analyse.roundsNotFound")}</div>`;return}const ie=o?((si=r.find(oe=>oe.uid===o))==null?void 0:si.name)||"—":((ii=m.profile)==null?void 0:ii.name)||g("analyse.meFallback"),ae=c?((is=r.find(oe=>oe.uid===c))==null?void 0:is.name)||"—":((bo=m.profile)==null?void 0:bo.name)||g("analyse.meFallback"),me=`${ie}: ${W.name||g("results.roundFallback")} (${X(W)})`,Te=`${ae}: ${J.name||g("results.roundFallback")} (${X(J)})`;n.innerHTML=qP(zf([W],o||((Ao=m.user)==null?void 0:Ao.uid)),me,zf([J],c||((os=m.user)==null?void 0:os.uid)),Te);return}const T=t.map(V=>({...V,shooters:(V.shooters||[]).map($=>({...$,scores:Kr($.scores)}))})),S=((oi=document.getElementById("analyse-completed-only"))==null?void 0:oi.checked)||!1,E=((ai=document.getElementById("analyse-startat1-only"))==null?void 0:ai.checked)||!1,R=V=>{var W,J;const $=((W=V.shooters)==null?void 0:W.find(ie=>ie.id===e))||((J=V.shooters)==null?void 0:J[0]);if(!$)return!1;const z=V.numTargets||24;for(let ie=0;ie<z;ie++){const ae=$.scores[ie]||[null,null];if(ae[0]==null&&ae[1]==null)return!1}return!0},I=V=>V.startTarget===1,Re=b;let Qe=P==="all"?T:T.filter(V=>V.courseId===P);if(Re!=="all"&&(Qe=Qe.filter(V=>(V.ruleset||"WA")===Re)),S&&(Qe=Qe.filter(R)),E&&(Qe=Qe.filter(I)),s==="specific"){const V=F==null?void 0:F.value;Qe=V?Qe.filter($=>$.id===V):[]}const cr=D||A,Ye=cr&&s!=="specific"?Qe.slice(0,cr):Qe;if(!Ye.length){n.innerHTML=`<div class="empty"><div class="empty-icon">📈</div>${g("results.empty")}</div>`;return}const bt=V=>{var $;return V.shooters.find(z=>z.id===e)||(($=V.shooters)==null?void 0:$[0])},Je=Ye.map(V=>{const $=bt(V);return $?dt($.scores):null}).filter(V=>V!==null),To=Je.length?(Je.reduce((V,$)=>V+$,0)/Je.length).toFixed(1):0,Ic=Je.length?Math.max(...Je):0,Gt=Je.length?Math.min(...Je):0,je=Ye.flatMap(V=>{const $=bt(V);return $?$.scores.flat().filter(z=>z!=null):[]}),Xs=je.length?(je.reduce((V,$)=>V+_e($),0)/je.length).toFixed(2):0,Tn=new Set(Ye.map(V=>V.ruleset||Zn)),En=Tn.size===1?[...Tn][0]:null,Kt=!!En&&qt(En)>=2;let Zs=0,lr=0,bn=0,zt=0;const ts=Kt?er(En):[],An={},Sn={};ts.forEach(V=>{An[V]=0,Sn[V]=0}),Ye.forEach(V=>{const $=bt(V);$&&Kt&&$.scores.forEach(z=>{z[0]!=null&&(An[z[0]]!==void 0&&An[z[0]]++,Zs+=_e(z[0]),lr++),z[1]!=null&&(Sn[z[1]]!==void 0&&Sn[z[1]]++,bn+=_e(z[1]),zt++)})});const ur=lr?(Zs/lr).toFixed(2):0,ns=zt?(bn/zt).toFixed(2):0,Tc=lr+zt?((Zs+bn)/(lr+zt)).toFixed(2):0,At=((Cn=Ye[0])==null?void 0:Cn.numTargets)||24,ei=Array.from({length:At},(V,$)=>{let z=0,W=0;return Ye.forEach(J=>{const ie=bt(J);if(!ie)return;const me=(J.traversalOrder||Array.from({length:J.numTargets||At},(oe,Ce)=>Ce))[$];if(me===void 0)return;(ie.scores[me]||[null,null]).forEach(oe=>{oe!=null&&(z+=_e(oe),W++)})}),W?z/W:null}),Rn=ei.map((V,$)=>({v:V,i:$})).filter(V=>V.v!==null),dr=Rn.length?Rn.reduce((V,$)=>V.v>$.v?V:$):null,rs=Rn.length?Rn.reduce((V,$)=>V.v<$.v?V:$):null;let we="";m.viewingUid&&(we+=`<div class="viewing-banner">👁 ${g("analyse.viewingResultsFor",{name:H(m.viewingName||"—")})}</div>`),we+=`<div class="stats-grid2">
    <div class="card stat-card"><div class="stat-lbl">${g("analyse.statRounds")}</div><div class="stat-val-28">${Ye.length}</div></div>
    <div class="card stat-card"><div class="stat-lbl">${g("analyse.statAvgPerRound")}</div><div class="stat-val-28">${To}</div></div>
    <div class="card stat-card"><div class="stat-lbl">${g("analyse.statBest")}</div><div class="stat-val-28-good">${Ic}</div></div>
    <div class="card stat-card"><div class="stat-lbl">${g("analyse.statLowest")}</div><div class="stat-val-28-bad">${Gt}</div></div>
  </div>`,we+=`<details class="card card-mb16 rounds-included-card">
    <summary class="section-title-mb8 rounds-included-summary">${g("analyse.roundsIncludedTitle",{n:Ye.length})}</summary>
    <div class="rounds-included-list">
      ${Ye.map(V=>`<div class="rounds-included-row"><span class="rounds-included-date">${X(V)}</span><span class="rounds-included-name">${H(V.name||g("results.roundFallback"))}${P==="all"?` · ${H(V.courseName||"")}`:""}${V.ruleset&&V.ruleset!=="WA"?` · <span class="rcard-ruleset-tag">${H(V.ruleset)}</span>`:""}</span></div>`).join("")}
    </div>
  </details>`;const ti=En&&!Kt,ss=En?g("analyse.singleArrowNote",{ruleset:En}):g("analyse.selectRulesetNote");we+=`<div class="card card-mb16">
    <div class="section-title-mb8">${g("analyse.arrowStatsTitle")}</div>
    ${Kt?`<div class="cmp-pil-grid">
      <div><div class="stat-lbl">${g("analyse.arrow1")}</div><div class="stat-val-22">${ur}</div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">${g("results.summaryAvgPerArrow")}</div>
        <div class="stat-val-22-mid">${Tc}</div>
      </div>
      <div><div class="stat-lbl">${g("analyse.arrow2")}</div><div class="stat-val-22">${ns}</div></div>
    </div>
    <div class="pil-best-note">
      ${Number(ur)>Number(ns)?g("analyse.bestWithArrow1"):Number(ns)>Number(ur)?g("analyse.bestWithArrow2"):g("analyse.bothArrowsEqual")}
    </div>`:ti?`<div class="cmp-pil-grid">
      <div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">${g("results.summaryAvgPerArrow")}</div>
        <div class="stat-val-22-mid">${Xs}</div>
      </div>
      <div></div>
    </div>
    <div class="pil-best-note">${ss}</div>`:`<div class="pil-best-note">${ss}</div>`}
  </div>`,dr&&rs&&dr.i!==rs.i&&(we+=`<div class="card card-mb16">
      <div class="section-title-mb8">${g("analyse.bestWorstTargetTitle")}</div>
      <div class="cmp-target-grid">
        <div class="target-best-box">
          <div class="stat-lbl">${g("analyse.best")}</div>
          <div class="target-best-val">${g("analyse.shotOrdinal",{n:dr.i+1})}</div>
          <div class="target-sub-13">⌀ ${dr.v.toFixed(2)}</div>
        </div>
        <div class="target-worst-box">
          <div class="stat-lbl">${g("analyse.worst")}</div>
          <div class="target-worst-val">${g("analyse.shotOrdinal",{n:rs.i+1})}</div>
          <div class="target-sub-13">⌀ ${rs.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`);const pe=BP(Ye,e,m.courses);if(pe.hasData){const V={"0to10":"distBucket0to10","10to20":"distBucket10to20","20to30":"distBucket20to30"},$=pe.killLabel||g("analyse.killZoneLabel");if(we+=`<div class="card card-mb16">
      <div class="section-title-mb8">${g("analyse.distanceInsightsTitle")}</div>
      <div class="dist-subtitle">${g("analyse.distanceInsightsSubtitle",{label:$})}</div>
      <div class="dist-subtitle">${g("analyse.distanceInsightsCoverage",{used:pe.roundsUsed,total:pe.roundsTotal})}</div>`,pe.trend){const z=pe.trend.pctChange,W=pe.trend.weeks,J=Math.abs(z)<.5?g("analyse.trendFlat",{weeks:W}):z>0?g("analyse.trendUp",{pct:z.toFixed(1),weeks:W}):g("analyse.trendDown",{pct:Math.abs(z).toFixed(1),weeks:W});we+=`<div class="dist-trend-line">${J}</div>`}else we+=`<div class="dist-trend-line dist-trend-muted">${g("analyse.trendNotEnoughData",{weeks:8})}</div>`;if(we+=`<div class="dist-bucket-grid">${pe.buckets.map(z=>`
      <div class="dist-bucket-cell">
        <div class="stat-lbl">${g("analyse."+V[z.key])}</div>
        <div class="dist-bucket-pct">${z.killPct.toFixed(0)}%</div>
        <div class="target-sub-13">⌀ ${z.avgPerArrow.toFixed(2)}</div>
      </div>`).join("")}</div>`,pe.weakest){const z=g("analyse."+V[pe.weakest.key]);we+=`<div class="dist-weakest-note">${g("analyse.weakestZone",{range:z})}</div>`,pe.pointPotential!=null&&(we+=`<div class="dist-weakest-note">${g("analyse.pointPotential",{range:z,n:pe.pointPotential})}</div>`)}we+="</div>"}if(we+=`<div class="card card-mb16">
    <div class="section-title-mb12">${g("analyse.zoneDistTitle")}</div>`,Kt?(we+='<div class="pie-grid">',ts.forEach(V=>{const $=An[V]||0,z=Sn[V]||0,W=$+z,J=30;let ie="";if(W===0)ie=`<circle cx="${J}" cy="${J}" r="${J}" fill="var(--surface2)"/>`;else if(z===0)ie=`<circle cx="${J}" cy="${J}" r="${J}" fill="#ffd700"/>`;else if($===0)ie=`<circle cx="${J}" cy="${J}" r="${J}" fill="#00cc44"/>`;else{const ae=$/W,me=ae*2*Math.PI,Te=J,oe=0,Ce=J-J*Math.sin(me),Ht=J-J*Math.cos(me),ke=me>Math.PI?1:0;ie=`<path d="M${J},${J} L${Te},${oe} A${J},${J} 0 ${ke},0 ${Ce},${Ht} Z" fill="#ffd700"/>
             <path d="M${J},${J} L${Ce},${Ht} A${J},${J} 0 ${1-ke},0 ${Te},${oe} Z" fill="#00cc44"/>`}we+=`<div class="pie-cell">
        <div class="pie-zone-label">${V}</div>
        <svg viewBox="0 0 ${J*2} ${J*2}" class="pie-svg">${ie}</svg>
        <div class="pie-count">${$}/${z}</div>
        <div class="pie-total">${W}</div>
      </div>`}),we+=`</div>
      <div class="pie-legend">
        <span><span class="pie-legend-dot-1"></span>${g("analyse.arrow1")}</span>
        <span><span class="pie-legend-dot-2"></span>${g("analyse.arrow2")}</span>
      </div>`):we+=`<div class="pil-best-note">${ss}</div>`,we+="</div>",Je.length>1){const W=Math.min(...Je)-5,J=Math.max(...Je)+5,ie=Je.slice().reverse().map((ae,me)=>{const Te=30+me/(Je.length-1)*280,oe=90-(ae-W)/(J-W)*(120-2*30);return`${Te},${oe}`}).join(" ");we+=`<div class="card card-mb16">
      <div class="section-title-mb8">${g("analyse.developmentTitle")}</div>
      <svg viewBox="0 0 340 120" class="graph-svg">
        <polyline points="${ie}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${Je.slice().reverse().map((ae,me)=>{const Te=30+me/(Je.length-1)*280,oe=90-(ae-W)/(J-W)*(120-2*30);return`<circle cx="${Te}" cy="${oe}" r="4" fill="var(--acc)"/><text x="${Te}" y="${oe-8}" text-anchor="middle" font-size="10" fill="var(--text)">${ae}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">${g("analyse.oldest")}</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">${g("analyse.newest")}</text>
      </svg>
    </div>`}const Pe=ei.map((V,$)=>({v:V,i:$})).filter(V=>V.v!==null);if(Pe.length>1){const{slope:ae,intercept:me}=xP(Pe.map(({v:xe,i:st})=>({x:st,y:xe}))),Te=[me,me+ae*(At-1)],oe=Math.floor(Math.min(...Pe.map(xe=>xe.v),...Te)),Ce=Math.ceil(Math.max(...Pe.map(xe=>xe.v),...Te)),Ht=Ce-oe||1,ke=[];for(let xe=oe;xe<=Ce;xe++)(Ce-oe<=6||xe%Math.ceil((Ce-oe)/5)===0)&&ke.push(xe);const Fe=Hf(Pe.map(xe=>xe.v)),_t=(xe,st,{dotR:Ot=3,valFont:Xe=9,showVals:fr=!1}={})=>{const ft=Le=>42+(At>1?Le/(At-1)*(xe-42-15):0),et=Le=>15+(st-15-25)*(1-(Le-oe)/Ht),kn=Pe.map(({v:Le,i:Nn})=>ft(Nn)+","+et(Le)).join(" "),Dn=ke.map(Le=>`<line x1="38" y1="${et(Le)}" x2="42" y2="${et(Le)}" stroke="var(--muted)" stroke-width="1" pointer-events="none"/><text x="36" y="${et(Le)+4}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${Le}</text><line x1="42" y1="${et(Le)}" x2="${xe-15}" y2="${et(Le)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3" pointer-events="none"/>`).join(""),mr=Pe.map(({v:Le,i:Nn})=>fr?`<circle cx="${ft(Nn)}" cy="${et(Le)}" r="${Ot}" fill="var(--acc)" pointer-events="none"/><text x="${ft(Nn)}" y="${et(Le)-Ot-5}" text-anchor="middle" font-size="${Xe}" fill="#fff" pointer-events="none">${Le.toFixed(1)}</text>`:`<circle cx="${ft(Nn)}" cy="${et(Le)}" r="${Ot}" fill="var(--acc)" pointer-events="none"/>`).join(""),Ec=`<line x1="${ft(0)}" y1="${et(me)}" x2="${ft(At-1)}" y2="${et(me+ae*(At-1))}" stroke="#f0c030" stroke-width="1.5" stroke-dasharray="6,4" pointer-events="none"/>`;return`<line x1="42" y1="15" x2="42" y2="${st-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        <line x1="42" y1="${st-25}" x2="${xe-15}" y2="${st-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        ${Dn}
        <polyline points="${kn}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round" pointer-events="none"/>
        ${Ec}
        ${mr}
        <text x="42" y="${st-5}" font-size="9" fill="var(--muted)" pointer-events="none">1</text>
        <text x="${ft(At-1)}" y="${st-5}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${At}</text>`},Nt=Math.max(340,At*30);we+=`<div class="card card-mb16">
      <div class="graph-header-row">
        <span>${g("analyse.perTargetGraphTitle")}</span>
        <button class="btn-icon graph-fs-btn" onclick="window.openGraphFs()">⤢</button>
      </div>
      <svg viewBox="0 0 340 160" class="graph-svg">${_t(340,160,{dotR:3})}</svg>
      <div class="graph-caption">${g("analyse.perTargetCaption")}</div>
    </div>
    <div class="card card-mb16">
      <div class="section-title-mb8">${g("analyse.consistencyTitle")}</div>
      <div class="spredning-row">
        <div class="stat-val-28">${Fe.toFixed(2)}</div>
        <div class="spredning-note">${g("analyse.consistencyNote")}</div>
      </div>
    </div>
    <div id="graph-fs" class="fs-ov hidden graph-fs-overlay" onclick="window.closeGraphFs()">
      <div class="graph-fs-box" id="graph-fs-box" onclick="event.stopPropagation()">
        <div class="graph-fs-title">${g("analyse.fullscreenGraphTitle")}</div>
        <div id="graph-fs-viewport" class="graph-fs-viewport">
          <svg id="graph-fs-svg" viewBox="0 0 ${Nt} 160" class="graph-fs-svg">${_t(Nt,160,{dotR:5,valFont:10,showVals:!0})}</svg>
        </div>
        <button class="btn btn-dark graph-fs-close-btn" onclick="window.closeGraphFs()">${g("modals.qr.closeBtn")}</button>
      </div>
    </div>`,window.openGraphFs=function(){const xe=document.getElementById("graph-fs");if(!xe)return;xe.classList.remove("hidden");const st=document.getElementById("graph-fs-svg"),Ot=document.getElementById("graph-fs-box"),Xe=document.getElementById("graph-fs-viewport"),fr=()=>{const ft=Math.min(window.innerWidth*.96,900),et=Math.min(window.innerHeight*.9,700),kn=Math.max(200,ft-32),Dn=Math.max(140,et-90),mr=Math.max(kn,At*30);st.setAttribute("viewBox",`0 0 ${mr} ${Dn}`),st.innerHTML=_t(mr,Dn,{dotR:5,valFont:10,showVals:!0}),Ot&&(Ot.style.width=ft+"px"),Xe&&(Xe.style.width=kn+"px",Xe.style.height=Dn+"px")};fr(),Qt&&(window.removeEventListener("resize",Qt),window.removeEventListener("orientationchange",Qt)),Qt=fr,window.addEventListener("resize",Qt),window.addEventListener("orientationchange",Qt),Sr&&document.removeEventListener("gesturestart",Sr),Sr=ft=>ft.preventDefault(),document.addEventListener("gesturestart",Sr,{passive:!1}),Xe&&!Xe.dataset.pinchInit&&(FP(Xe,st),Xe.dataset.pinchInit="1")}}if(P!=="all"){const V=z=>{const W=z.created;return W!=null&&W.toDate?W.toDate().getTime():W!=null&&W.seconds?W.seconds*1e3:typeof W=="number"?W:0},$=T.filter(z=>z.courseId===P).filter(z=>!S||R(z)).filter(z=>!E||I(z)).map(z=>{const W=LP(z,e);return W.length>1?{t:V(z),cv:Hf(W)}:null}).filter(Boolean).sort((z,W)=>z.t-W.t);if($.length>1){const ie=$.map(ke=>ke.cv),ae=Math.min(...ie),me=Math.max(...ie),Te=me-ae||1,oe=(ke,Fe)=>({x:30+Fe/($.length-1)*(340-2*30),y:90-(ke.cv-ae)/Te*(120-2*30)}),Ce=$.map((ke,Fe)=>{const{x:_t,y:Nt}=oe(ke,Fe);return`${_t},${Nt}`}).join(" "),Ht=$.map((ke,Fe)=>{const{x:_t,y:Nt}=oe(ke,Fe);return`<circle cx="${_t}" cy="${Nt}" r="4" fill="#f0c030"/><text x="${_t}" y="${Nt-8}" text-anchor="middle" font-size="10" fill="var(--text)">${ke.cv.toFixed(2)}</text>`}).join("");we+=`<div class="card card-mb16">
        <div class="section-title-mb8">${g("analyse.consistencyOverTimeTitle")}</div>
        <svg viewBox="0 0 340 120" class="graph-svg">
          <polyline points="${Ce}" fill="none" stroke="#f0c030" stroke-width="2.5" stroke-linejoin="round"/>
          ${Ht}
          <text x="30" y="115" font-size="10" fill="var(--muted)">${g("analyse.oldest")}</text>
          <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">${g("analyse.newest")}</text>
        </svg>
        <div class="graph-caption">${g("analyse.consistencyOverTimeCaption")}</div>
      </div>`}}if(n.innerHTML=we,!m.viewingUid&&P!=="all"&&((as=m.profile)!=null&&as.kon)&&((cs=m.profile)!=null&&cs.bueklasse)){const V=m.profile.kon==="herre"?g("common.gender.herre"):g("common.gender.dame"),z={langbue:"langbue",trad:"trad",recurve:"recurve",compound:"compound",barbue:"barbue",buejæger:"buejaeger","trad-buejæger":"tradBuejaeger",rytterbue:"rytterbue"}[m.profile.bueklasse],W=z?g("common.bowClassShort."+z):m.profile.bueklasse,J=document.createElement("div");J.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">${g("analyse.comparisonSectionTitle",{gender:V,bowClass:W})}</div><div class="comp-loading-msg">${g("analyse.loadingComparison")}</div></div>`,n.appendChild(J),ze(Ge(G,"bane_stats",P,"runder")).then(ie=>{let me=ie.docs.map(Fe=>Fe.data()).filter(Fe=>Fe.kon===m.profile.kon&&Fe.bueklasse===m.profile.bueklasse);if(Re!=="all"&&(me=me.filter(Fe=>(Fe.ruleset||Zn)===Re)),!me.length){J.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">${g("analyse.comparisonSectionTitle",{gender:V,bowClass:W})}</div><div class="comp-loading-msg">${g("analyse.noOtherShootersYet",{gender:V,bowClass:W})}</div></div>`;return}const Te=me.filter(Fe=>(Fe.arrowsShot||Fe.numTargets*2)>0),oe=Te.length?(Te.reduce((Fe,_t)=>Fe+_t.score/(_t.arrowsShot||_t.numTargets*2),0)/Te.length).toFixed(2):"—",Ce=oe!=="—"?Number(Xs)-Number(oe):null,Ht=Ce!==null?(Ce>0?"+":"")+Ce.toFixed(2):"—",ke=Ce===null?"var(--muted)":Ce>0?"#2aaa5a":Ce<0?"var(--danger)":"var(--muted)";J.innerHTML=`<div class="card card-mb16">
        <div class="section-title-mb12">${g("analyse.comparisonSectionTitle",{gender:V,bowClass:W})}</div>
        <div class="cmp-pil-grid">
          <div><div class="stat-lbl">${g("analyse.yourAvgPerArrow")}</div><div class="stat-val-22">${Xs}</div></div>
          <div class="cmp-pil-mid">
            <div class="stat-lbl">${g("analyse.difference")}</div>
            <div style="font-size:22px;font-weight:700;color:${ke};">${Ht}</div>
          </div>
          <div><div class="stat-lbl">${g("analyse.othersAvgPerArrow")}</div><div class="stat-val-22-txt">${oe}</div></div>
        </div>
        <div class="pil-best-note">${me.length===1?g("analyse.basedOnRoundsSingular",{n:me.length}):g("analyse.basedOnRoundsPlural",{n:me.length})}</div>
      </div>`}).catch(()=>{J.remove()})}};function Yf(n,e,t){const r=Array.from({length:e},()=>Array(t).fill(null));for(const s of n.eventresult)r[s.targetid-1][s.arrownr-1]=s.points===0?"M":s.points;return r}async function bv(n,e,t){var p;const r=Math.max(...t.flatMap(y=>y.eventresult.map(w=>w.targetid))),s=Math.max(...t.flatMap(y=>y.eventresult.map(w=>w.arrownr)));let i=null,o=n.name||n.eventname||null;if(o){const y=o.split(" - ")[0].trim().toLowerCase(),w=m.courses.filter(A=>(A.name||"").toLowerCase().includes(y));w.length===1&&(i=w[0].id,o=w[0].name)}const c=t.filter(y=>y!==e).map((y,w)=>({id:`guest-import-${Date.now()}-${w}`,name:y.name||g("roundImport.guestFallback",{n:w+1}),isGuest:!0,scores:Vl(Yf(y,r,s))})),l=n.eventinsstmp||Date.parse(n.eventdate)||Date.now(),u="imp_"+(e.objectId||n.eventobjectId||Date.now()),h={id:u,name:o||g("roundImport.importedRoundFallback"),courseId:i,courseName:o,numTargets:r,startTarget:1,ruleset:"WA",completed:l,gpsRoute:null,gpsDuration:null,gpsDistance:null,traversalOrder:nd(0,r),traversalPos:r,shooters:[{id:m.user.uid,name:((p=m.profile)==null?void 0:p.name)||g("analyse.meFallback"),isGuest:!1,scores:Vl(Yf(e,r,s))},...c],shooterIds:[m.user.uid]};await pt(te(G,"users",m.user.uid,"rounds",u),{...h,created:l}),pt(te(G,"users",m.user.uid),{roundIndex:ey({id:u,completed:l})},{merge:!0}).catch(()=>{}),m.rounds=m.rounds.filter(y=>y.id!==u),m.rounds.unshift({...h,created:l}),m.rounds.sort((y,w)=>{var D,O;const A=y.completed||y.created||0,P=w.completed||w.created||0;return(typeof P=="number"?P:((D=P.toMillis)==null?void 0:D.call(P))??0)-(typeof A=="number"?A:((O=A.toMillis)==null?void 0:O.call(A))??0)}),Dt(),js(),K(g("roundImport.importedToast",{name:h.name}),"success")}let Va=null;function Av(){var n;(n=document.getElementById("import-player-modal"))==null||n.classList.add("hidden"),Va=null}window.cancelImportPlayer=Av;window.pickImportPlayer=async function(n){if(!Va)return;const{raw:e,validPlayers:t}=Va,r=t[n];Av();try{await bv(e,r,t)}catch(s){console.warn("Import fejl:",s),K(g("roundImport.importError",{msg:s.message}),"error")}};function GP(n,e){Va={raw:n,validPlayers:e};const t=document.getElementById("import-player-list");t.innerHTML=e.map((r,s)=>`<div class="ac-item" onclick="pickImportPlayer(${s})">${H(r.name||"—")}</div>`).join(""),document.getElementById("import-player-modal").classList.remove("hidden")}const aa=document.getElementById("import-round-input");aa||console.warn("round-import.js: #import-round-input findes ikke i DOM");aa==null||aa.addEventListener("change",async n=>{var t;const e=n.target.files[0];if(n.target.value="",!e){K(g("roundImport.noFileSelected"),"error");return}if(!m.user){K(g("roundImport.loginFirst"),"error");return}try{const r=JSON.parse(await e.text()),s=(r.players||[]).filter(c=>Array.isArray(c.eventresult)&&c.eventresult.length);if(!s.length){K(g("roundImport.noPlayersInFile"),"error");return}const i=(((t=m.profile)==null?void 0:t.email)||"").toLowerCase();let o=s.find(c=>(c.email||"").toLowerCase()===i);if(!o&&s.length===1&&(o=s[0]),!o){GP(r,s);return}await bv(r,o,s)}catch(r){console.warn("Import fejl:",r),K(g("roundImport.readError",{msg:(r==null?void 0:r.message)||r}),"error")}});let ca=null;async function KP(){try{"wakeLock"in navigator&&(ca=await navigator.wakeLock.request("screen"))}catch{}}function cd(){ca&&(ca.release(),ca=null)}function Jf(){if(!m.pendingRound)return;const n=m.rounds.find(t=>t.id===m.pendingRound);if(!n)return;m.pendingRound=null;const e=(n.shooters||[]).map(t=>({...t,scores:Kr(t.scores)}));setTimeout(()=>gc({...n,shooters:e}),300)}function zP(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${H(e)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};var Zf;(Zf=document.getElementById("ruleset-sel"))==null||Zf.addEventListener("change",n=>{const e=document.getElementById("boost-thresh");e&&(e.value=Z0(n.target.value))});window.startRound=async function(){var y,w,A;const n=(document.getElementById("round-name").value.trim()||g("setup.roundNameDefault")).slice(0,80),e=document.getElementById("course-sel").value,t=document.getElementById("target-count"),r=(t.value==="custom"?Number(document.getElementById("target-count-custom").value):Number(t.value))||24,s=Number(document.getElementById("start-target").value)-1,i=document.getElementById("gps-auto-sw").classList.contains("on"),o=document.getElementById("gps-track-sw").classList.contains("on");m.boostThreshold=Number(document.getElementById("boost-thresh").value)||8;const c=((y=document.getElementById("ruleset-sel"))==null?void 0:y.value)||Zn,l=qt(c),u=[{id:m.user.uid,name:m.profile.name,isGuest:!1},...zP().filter(P=>P.id!==m.user.uid)];m.course=e&&m.courses.find(P=>P.id===e)||null;const h=u.map(P=>{const D=rP(P.id,P.name,P.isGuest);return sP(D,r,l),D});let p=s;if(i&&((w=m.course)!=null&&w.targets))try{p=lP(m.course.targets,await mc())}catch{}m.round={id:"r_"+Date.now(),name:n,courseId:e||null,courseName:((A=m.course)==null?void 0:A.name)||null,numTargets:r,startTarget:p+1,ruleset:c,shooters:h,created:Date.now(),traversalOrder:nd(p,r),traversalPos:0},o&&(m.gpsTracking=aP(HP),document.getElementById("gps-bar").classList.toggle("hidden",!m.gpsTracking),KP()),showActivePanel(),es(),on(),wc(),_c()};function Js(){return m.round.traversalOrder[m.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden");const e=document.getElementById("p-list");e&&(e.innerHTML="")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function on(){var h,p;if(!m.round)return;const n=Js(),e=m.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=g("active.ofN",{n:e}),document.getElementById("round-badge").textContent=m.round.name;const t=(p=(h=m.course)==null?void 0:h.targets)==null?void 0:p[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||g("active.targetFallback",{n:n+1});const r=document.getElementById("target-distance"),s=m.showDistances&&(t==null?void 0:t.distance)!=null;r.classList.toggle("hidden",!s),r.textContent=s?g("active.distanceLabel",{m:t.distance}):"";const i=iP(m.round.shooters,e,qt(m.round.ruleset));document.getElementById("pbar").style.width=`${i/e*100}%`;const o=m.round.shooters.flatMap(y=>y.scores.flat().filter(w=>w!=null)),c=o.reduce((y,w)=>y+_e(w),0);document.getElementById("stat-avg").textContent=o.length?(c/o.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=c,document.getElementById("stat-rem").textContent=e-i;const l=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(l.classList.add("hidden"),l.onload=()=>l.classList.remove("hidden"),l.onerror=()=>l.classList.add("hidden"),l.src=t.imageUrl||t.photo):(l.src="",l.classList.add("hidden")),document.getElementById("edit-target-btn").classList.toggle("hidden",!(m.isAdmin&&m.round.courseId)),document.getElementById("next-btn").textContent=m.round.traversalPos===e-1?g("active.finish"):g("active.next");const u=tP(m.round.shooters,n);document.getElementById("target-avg").textContent=u!==null?g("active.targetAvg",{v:u}):""}function es(){if(!m.round)return;const n=Js(),e=document.getElementById("shooters-list");e.innerHTML="";const t=qt(m.round.ruleset),r=er(m.round.ruleset);m.round.shooters.forEach((s,i)=>{const o=dt(s.scores),c=m.boostEnabled&&nP(s.scores,m.boostThreshold),l=s.scores[n]||Array(t).fill(null),u=document.createElement("div");u.className="shooter-card";const h=s.scores.flat().filter(w=>w!=null),p=h.length?(h.reduce((w,A)=>w+_e(A),0)/h.length).toFixed(2):"—";let y=`<div class="sh-mini"><div class="sh-mini-lbl">${g("active.runde")}</div><div class="sh-mini-val">${o}</div></div>`;if(t>=2){const A=Array.from({length:t},(P,D)=>s.scores.map(O=>O[D]).filter(O=>O!=null)).map(P=>P.length?(P.reduce((D,O)=>D+_e(O),0)/P.length).toFixed(2):"—");y+=`<div class="sh-mini"><div class="sh-mini-lbl">${g("active.arrowShort1")}</div><div class="sh-mini-val sh-mini-val-sm">${A[0]}</div></div>`,y+=`<div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">${g("active.snt")}</div><div class="sh-mini-val sh-mini-val-acc">${p}</div></div>`,y+=`<div class="sh-mini"><div class="sh-mini-lbl">${g("active.arrowShort2")}</div><div class="sh-mini-val sh-mini-val-sm">${A[1]}</div></div>`}else y+=`<div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">${g("active.snt")}</div><div class="sh-mini-val sh-mini-val-acc">${p}</div></div>`;u.innerHTML=`
      <div class="sh-head">${c?'<span class="boost-dot"></span>':""}
        <span class="sh-name">${H(s.name)}</span>
        <div class="sh-mini-group">${y}</div>
      </div>
      <div class="arrows-row">${Array.from({length:t},(w,A)=>`
        <div class="arrow-grp">${t>=2?`<div class="arrow-lbl">${g("active.pilLabel",{n:A+1})}</div>`:""}
          <div class="score-btns">${r.map((P,D)=>`
            <button class="sbtn ${P==="M"?"rank-M":`rank-${D}`} ${l[A]===P?`sel-${P}`:""}" data-v="${P}"
              onclick="setScore(${i},${n},${A},'${P}')">${P}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(u)})}window.setScore=function(n,e,t,r){const s=r==="M"?"M":Number(r);m.round.shooters[n].scores[e][t]=s,_c(),es(),on()};function HP({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=tv(r),document.getElementById("gps-dist").textContent=nv(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function _c(){if(!(!m.round||!m.user))try{await pt(te(G,"users",m.user.uid,"active","round"),Zy(m.round))}catch(n){console.warn(n)}}async function WP(){var n;try{const e=await Xn(te(G,"users",m.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(t.id&&m.rounds.some(s=>s.id===t.id)){await Lt(te(G,"users",m.user.uid,"active","round"));return}if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await Lt(te(G,"users",m.user.uid,"active","round"));return}or(g("active.resumeConfirm"),()=>{m.round=oP(t),m.round.traversalOrder=t.traversalOrder||nd(0,m.round.numTargets),m.round.traversalPos=t.traversalPos||0,m.round.courseId&&(m.course=m.courses.find(s=>s.id===m.round.courseId)||null),showActivePanel(),es(),on(),wc()})}catch(e){console.warn(e)}}function wc(){const n=document.getElementById("app-main");n&&(n.scrollTop=0,requestAnimationFrame(()=>{n.scrollTop=0,setTimeout(()=>{n.scrollTop=0},100)}))}function ld(){document.getElementById("edit-panel").classList.add("hidden")}window.prevTarget=function(){!m.round||m.round.traversalPos<=0||(ld(),m.round.traversalPos--,_c(),es(),on(),wc())};window.nextTarget=function(){m.round&&(ld(),m.round.traversalPos<m.round.numTargets-1?(m.round.traversalPos++,_c(),es(),on(),wc()):window.finishRound())};window.skipToTarget=function(){m.round&&(document.getElementById("skip-input").max=m.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!m.round||n<1||n>m.round.numTargets)return;ld();const e=m.round.traversalOrder.indexOf(n-1);e!==-1&&(m.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),es(),on()};window.finishRound=async function(){var o,c,l;m.finishTap++;const n=document.getElementById("finish-btn");if(m.finishTap===1){n.textContent=g("active.finishConfirm"),setTimeout(()=>{m.finishTap=0,n.textContent=g("active.finishNow")},3e3);return}m.finishTap=0,n.textContent=g("active.finishNow");let e={};m.gpsTracking&&(e=rv(),m.gpsTracking=!1),cd();const t=m.round.id||"r_"+Date.now(),r=m.round.shooters.filter(u=>!u.isGuest).map(u=>u.id),s={...Zy(m.round),completed:Date.now(),...e,id:t,shooterIds:r};m.rounds.unshift({...s,created:Date.now()}),Dt(),js(),pt(te(G,"users",m.user.uid,"rounds",t),{...s,created:be()}).catch(()=>K(g("active.networkError"),"error")),pt(te(G,"users",m.user.uid),{roundIndex:ey({id:t,completed:s.completed})},{merge:!0}).catch(()=>{}),m.round.shooters.filter(u=>!u.isGuest&&u.id!==m.user.uid).forEach(u=>{pt(te(G,"users",u.id,"rounds",t),{...s,created:be()}).catch(()=>K(g("active.shareError"),"error"))});const i=m.round;if(i.courseId&&((o=m.profile)!=null&&o.kon)&&((c=m.profile)!=null&&c.bueklasse)){const u=i.shooters.find(h=>{var p;return h.id===((p=m.user)==null?void 0:p.uid)})||((l=i.shooters)==null?void 0:l[0]);if(u){const h=u.scores.flat().filter(p=>p!=null).length;pt(te(G,"bane_stats",i.courseId,"runder",t),{score:dt(u.scores),arrowsShot:h,kon:m.profile.kon,bueklasse:m.profile.bueklasse,numTargets:i.numTargets,ruleset:i.ruleset||Zn,dato:be()}).catch(p=>console.warn("bane_stats fejl:",p))}}window._lastRound=i,m.round=null,await Lt(te(G,"users",m.user.uid,"active","round")).catch(()=>{}),lv(i),showResultsPanel()};window.abortRound=async function(){m.abortTap++;const n=document.getElementById("abort-btn");if(m.abortTap===1){n.textContent=g("active.abortConfirm"),setTimeout(()=>{m.abortTap=0,n.textContent=g("active.abort")},3e3);return}m.abortTap=0,n.textContent=g("active.abort"),m.gpsTracking&&(rv(),m.gpsTracking=!1),cd(),await Lt(te(G,"users",m.user.uid,"active","round")).catch(()=>{}),m.round=null,showSetupPanel()};window.showVisitResults=function(n){const e=m.rounds.find(r=>r.id===n);if(!e){K(g("active.notSavedLocally"),"error");return}const t=(e.shooters||[]).map(r=>({...r,scores:Kr(r.scores)}));window.switchTab("results"),gc({...e,shooters:t})};window.showRouteOnMap=function(n){!m.courseMap||!n.length||(m.courseMapLayer&&m.courseMap.removeLayer(m.courseMapLayer),m.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(m.courseMap),m.courseMap.fitBounds(m.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.openEditTarget=function(){var t,r;const n=Js(),e=(r=(t=m.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=Js();m.round.courseId&&(await sd(m.round.courseId,e,{name:n}),(t=m.course)!=null&&t.targets&&(m.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),on()};window.editGps=async function(){var n;try{const e=await mc(),t=Js();await sd(m.round.courseId,t,{gps:e}),(n=m.course)!=null&&n.targets&&(m.course.targets[t].gps=e),K(g("active.gpsSaved"),"success")}catch(e){K(g("active.gpsError",{msg:e.message}),"error")}};const Oa="2026-08-30";function QP(n){return(n==null?void 0:n.privacyAcceptedVersion)===Oa}function YP(){return Jy()==="da"?"privatliv.html":"privacy.html"}function Sv(){document.querySelectorAll("[data-privacy-link]").forEach(n=>{n.href=YP()})}function Rv(){const n=document.getElementById("newsletter-sw");n&&(n.classList.toggle("on",!!m.profile.newsletterConsent),n.onclick=async()=>{const e=!m.profile.newsletterConsent;n.classList.toggle("on",e);try{await Ke(te(G,"users",m.user.uid),{newsletterConsent:e,newsletterConsentAt:e?be():null}),m.profile.newsletterConsent=e}catch(t){n.classList.toggle("on",!e),K(g("common.errorPrefix")+t.message,"error")}})}const Xf={"auth/user-not-found":"auth.errUserNotFound","auth/wrong-password":"auth.errWrongPassword","auth/invalid-credential":"auth.errInvalidCredential","auth/email-already-in-use":"auth.errEmailInUse","auth/weak-password":"auth.errWeakPassword","auth/invalid-email":"auth.errInvalidEmail","auth/too-many-requests":"auth.errTooManyRequests","auth/network-request-failed":"auth.errNetwork"};function ud(n){return Xf[n]?g(Xf[n]):g("auth.errGeneric")}function Yt(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){Yt(g("auth.errFillAllFields"));return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await bI(yo,n,e)}catch(r){Yt(ud(r.code))}finally{t.disabled=!1,t.textContent=g("auth.loginBtn")}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value,r=document.getElementById("signup-kon").value,s=document.getElementById("signup-bueklasse").value,i=document.getElementById("signup-privacy-accept").checked,o=document.getElementById("signup-newsletter-opt").checked;if(!n||!e||!t||!r||!s){Yt(g("auth.errFillAllFields"));return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){Yt(g("auth.errInvalidEmail"));return}if(t.length<6){Yt(g("auth.errPasswordTooShort"));return}if(!i){Yt(g("auth.errPrivacyRequired"));return}const c=document.querySelector("#signup-form .btn");c.disabled=!0,c.textContent="...";try{const l=await EI(yo,e,t);await pt(te(G,"users",l.user.uid),{name:n,email:e,yam:n,"e-mail":e,kon:r,bueklasse:s,created:be(),privacyAcceptedVersion:Oa,privacyAcceptedAt:be(),newsletterConsent:o,newsletterConsentAt:o?be():null})}catch(l){Yt(ud(l.code))}finally{c.disabled=!1,c.textContent=g("auth.signupBtn")}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){Yt(g("auth.errEnterEmailFirst"));return}try{await TI(yo,n),Yt(g("auth.resetEmailSent"),"ok")}catch(e){Yt(ud(e.code))}};window.doLogout=async function(){try{await PI(yo)}catch{}};window.toggleGpsPause=cP;window.parseRoute=ev;const Pv="archery_push_dismissed";document.addEventListener("DOMContentLoaded",()=>{var c,l,u,h,p,y,w;Y0(),Sv();const n=document.getElementById("boost-enabled-sw");if(n){const A=localStorage.getItem("boostEnabled");m.boostEnabled=A===null?!0:A==="true",n.classList.toggle("on",m.boostEnabled),n.addEventListener("click",()=>{m.boostEnabled=!m.boostEnabled,n.classList.toggle("on",m.boostEnabled),localStorage.setItem("boostEnabled",m.boostEnabled)})}const e=document.getElementById("show-distances-sw");e&&(m.showDistances=localStorage.getItem("archery_showDistances")==="true",e.classList.toggle("on",m.showDistances),e.addEventListener("click",()=>{m.showDistances=!m.showDistances,e.classList.toggle("on",m.showDistances),localStorage.setItem("archery_showDistances",m.showDistances),m.round&&on()})),RI(yo,async A=>{if(A){m.user=A;let P,D;for(let O=0;O<3;O++)try{[P,D]=await Promise.all([Xn(te(G,"users",A.uid)),Xn(te(G,"admins",A.uid))]);break}catch(F){console.error("Profil fejl attempt",O,F.code,F.message),O<2?await new Promise(L=>setTimeout(L,2e3*(O+1))):(m.profile={name:A.email,email:A.email},m.isAdmin=!1)}if(P!=null&&P.exists()){const O=P.data();m.profile={name:O.name||O.yam||A.email,email:O.email||O["e-mail"]||A.email,kon:O.kon||null,bueklasse:O.bueklasse||null,privacyAcceptedVersion:O.privacyAcceptedVersion||null,newsletterConsent:O.newsletterConsent||!1}}else m.profile||(m.profile={name:A.email,email:A.email});m.isAdmin=(D==null?void 0:D.exists())||!1,m.isSuperAdmin=m.isAdmin&&A.email==="bsklausen@proton.me",JP()}else XP()});const t="archery_pwa_dismissed",r=localStorage.getItem(t)==="1";let s=null;window.addEventListener("beforeinstallprompt",A=>{A.preventDefault(),s=A,r||document.getElementById("pwa-banner").classList.remove("hidden")}),(c=document.getElementById("pwa-install-btn"))==null||c.addEventListener("click",async()=>{s&&(s.prompt(),await s.userChoice,s=null,document.getElementById("pwa-banner").classList.add("hidden"))}),(l=document.getElementById("pwa-dismiss-btn"))==null||l.addEventListener("click",()=>{document.getElementById("pwa-banner").classList.add("hidden"),localStorage.setItem(t,"1")}),(u=document.getElementById("push-enable-btn"))==null||u.addEventListener("click",async()=>{document.getElementById("push-banner").classList.add("hidden"),await Tv()&&K(g("banners.push.enabledToast"),"success")}),(h=document.getElementById("push-dismiss-btn"))==null||h.addEventListener("click",()=>{document.getElementById("push-banner").classList.add("hidden"),localStorage.setItem(Pv,"1")});const i=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.MSStream,o=window.navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches;i&&!o&&!r&&((p=document.getElementById("ios-install-banner"))==null||p.classList.remove("hidden")),(y=document.getElementById("ios-dismiss-btn"))==null||y.addEventListener("click",()=>{document.getElementById("ios-install-banner").classList.add("hidden"),localStorage.setItem(t,"1")}),la(24),document.getElementById("target-count").addEventListener("change",A=>{const P=A.target.value,D=document.getElementById("target-count-custom");D.style.display=P==="custom"?"":"none",P!=="custom"&&la(Number(P))}),document.getElementById("target-count-custom").addEventListener("input",A=>{const P=Number(A.target.value);P>0&&la(P)}),(w=document.getElementById("photo-input"))==null||w.addEventListener("change",async A=>{var D;const P=A.target.files[0];if(P)try{const O=await iv(P),F=Js(),L=Iy(Hy,`courses/${m.round.courseId}/target_${F}.jpg`);await _y(L,O,"base64",{contentType:"image/jpeg"});const B=await wy(L);await sd(m.round.courseId,F,{imageUrl:B}),(D=m.course)!=null&&D.targets&&(m.course.targets[F].imageUrl=B),on()}catch(O){K(g("courses.uploadErrorToast",{msg:O.message}),"error")}}),document.querySelectorAll(".modal").forEach(A=>{A.addEventListener("click",P=>{P.target===A&&A.classList.add("hidden")})})});window.saveProfilModal=async function(){const n=document.getElementById("profil-kon").value,e=document.getElementById("profil-bueklasse").value,t=document.getElementById("profil-err");if(!n||!e){t.textContent=g("modals.profil.validationMsg"),t.classList.remove("hidden");return}t.classList.add("hidden");try{await Ke(te(G,"users",m.user.uid),{kon:n,bueklasse:e}),m.profile.kon=n,m.profile.bueklasse=e,document.getElementById("profil-modal").classList.add("hidden")}catch{t.textContent=g("modals.profil.saveError"),t.classList.remove("hidden")}};window.savePrivacyConsent=async function(){const n=document.getElementById("privacy-gate-err");if(!document.getElementById("privacy-gate-accept").checked){n.textContent=g("auth.errPrivacyRequired"),n.classList.remove("hidden");return}n.classList.add("hidden");const e=document.getElementById("privacy-gate-newsletter").checked;try{await Ke(te(G,"users",m.user.uid),{privacyAcceptedVersion:Oa,privacyAcceptedAt:be(),newsletterConsent:e,newsletterConsentAt:e?be():null}),m.profile.privacyAcceptedVersion=Oa,m.profile.newsletterConsent=e,Rv(),document.getElementById("privacy-gate-modal").classList.add("hidden"),(!m.profile.kon||!m.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),300)}catch(t){n.textContent=g("common.errorPrefix")+t.message,n.classList.remove("hidden")}};function JP(){document.getElementById("hdr-name").textContent=m.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),QP(m.profile)?(!m.profile.kon||!m.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),800):setTimeout(()=>document.getElementById("privacy-gate-modal").classList.remove("hidden"),800),Rv(),document.getElementById("admin-badge").classList.toggle("hidden",!m.isAdmin),document.querySelectorAll(".admin-only").forEach(t=>t.classList.toggle("hidden",!m.isAdmin));const n=qf();m.friends=n.friends||[],m.rounds=n.rounds||[],ze(Ge(G,"users",m.user.uid,"friends")).then(t=>{m.friends=t.docs.map(r=>({...r.data(),id:r.id})),Dt(),Wn(),Us()}).catch(t=>console.warn("Hent venner:",t)),Wn(),Us(),js(),m.pendingRound=new URLSearchParams(window.location.search).get("round")||null,m.pendingRound&&Jf();const e=qf().courses||[];m.courses=e,Zr(),dd(),ZP(),ze(Ge(G,"users",m.user.uid,"rounds")).then(t=>{const r=new Set(t.docs.map(c=>c.id)),s=t.docs.map(c=>({...c.data(),id:c.id}));if(s.length){const c=new Set(m.rounds.map(u=>u.id)),l=s.filter(u=>!c.has(u.id));l.length&&(m.rounds=[...m.rounds,...l].sort((u,h)=>{var w,A;const p=u.completed||u.created||0,y=h.completed||h.created||0;return(typeof y=="number"?y:((w=y.toMillis)==null?void 0:w.call(y))??0)-(typeof p=="number"?p:((A=p.toMillis)==null?void 0:A.call(p))??0)}),Dt(),js(),m.pendingRound&&Jf())}const i=m.rounds.filter(c=>c.id&&!r.has(c.id));i.forEach(c=>{const{id:l,...u}=c;pt(te(G,"users",m.user.uid,"rounds",l),{...u,created:be()}).catch(()=>{})});const o=[...s,...i].filter(c=>c.id).map(c=>({id:c.id,completed:c.completed||0}));o.length&&pt(te(G,"users",m.user.uid),{roundIndex:o},{merge:!0}).catch(()=>{})}).catch(t=>console.warn("Hent runder:",t)),hP(),ad().then(()=>{Vt(),wo()}).catch(t=>console.warn("Hent meetups:",t)),vv().then(()=>{ar(),Wn(),vc()}).catch(t=>console.warn("Hent delinger:",t)),Iv().then(t=>{t&&NP()}),DP(),kP()&&localStorage.getItem(Pv)!=="1"&&document.getElementById("pwa-banner").classList.contains("hidden")&&document.getElementById("ios-install-banner").classList.contains("hidden")&&setTimeout(()=>{var t;return(t=document.getElementById("push-banner"))==null?void 0:t.classList.remove("hidden")},1e3),WP()}function XP(){m.user=null,m.profile=null,m.round=null,cd(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){Q0(Jy()==="da"?"en":"da"),Sv();const n=[xa.da.setup.roundNameDefault,xa.en.setup.roundNameDefault],e=document.getElementById("round-name");e&&n.includes(e.value)&&(e.value=g("setup.roundNameDefault")),m.round&&n.includes(m.round.name)&&(m.round.name=g("setup.roundNameDefault")),dd(),m.round&&(on(),es()),document.getElementById("tab-results").classList.contains("active")&&js(),!document.getElementById("results-panel").classList.contains("hidden")&&window._lastRound&&lv(window._lastRound);const t=document.getElementById("round-popup");t&&!t.classList.contains("hidden")&&window._lastRound&&gc(window._lastRound),document.getElementById("tab-courses").classList.contains("active")&&Zr(),document.getElementById("tab-friends").classList.contains("active")&&(Wn(),Us(),ov(),Vt(),ar()),document.getElementById("tab-analyse").classList.contains("active")&&window.renderAnalyse()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&(ov(),Vt(),IP(),ar(),RP()),n==="analyse"&&window.renderAnalyse(),n==="courses"&&m.courseMap&&setTimeout(()=>m.courseMap.invalidateSize(),100)};function ZP(){!navigator.geolocation||!m.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(m.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=rd(e,o);c<t&&(t=c,r=s.id)})}),r&&t<500){const s=document.getElementById("course-sel");s.value=r,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function dd(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML=`<option value="">${g("setup.noCourse")}</option>`,[...m.courses].sort((t,r)=>t.name.localeCompare(r.name,"da")).forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${g("setup.targetsUnit",{n:t.numTargets})})`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=m.courses.find(i=>i.id===n.value),r=document.getElementById("target-count"),s=document.getElementById("target-count-custom");t?(!!r.querySelector(`option[value="${t.numTargets}"]`)?(r.value=String(t.numTargets),s.style.display="none"):(r.value="custom",s.value=t.numTargets,s.style.display=""),r.disabled=!0,s.disabled=!0):(r.disabled=!1,s.disabled=!1,r.value!=="custom"&&(s.style.display="none")),la(t?t.numTargets:r.value==="custom"?Number(s.value):Number(r.value))}}window.populateCourseDropdown=dd;function la(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"}),document.getElementById("qr-url").value=window.location.href};window.copyQrUrl=function(){var e;const n=document.getElementById("qr-url");(e=navigator.clipboard)==null||e.writeText(n.value).then(()=>K(g("common.linkCopied"),"success"),()=>{n.select(),document.execCommand("copy"),K(g("common.linkCopied"),"success")})};window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
