(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Hd={};/**
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
 */const sm=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Zv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,h=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(g=64)),r.push(t[h],t[p],t[g],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new e_;const g=i<<2|c>>4;if(r.push(g),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const E=u<<6&192|p;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class e_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const t_=function(n){const e=sm(n);return im.encodeByteArray(e,!0)},ma=function(n){return t_(n).replace(/\./g,"")},om=function(n){try{return im.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function n_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const r_=()=>n_().__FIREBASE_DEFAULTS__,s_=()=>{if(typeof process>"u"||typeof Hd>"u")return;const n=Hd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},i_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&om(n[1]);return e&&JSON.parse(e)},Ua=()=>{try{return r_()||s_()||i_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},am=n=>{var e,t;return(t=(e=Ua())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},o_=n=>{const e=am(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},cm=()=>{var n;return(n=Ua())===null||n===void 0?void 0:n.config},lm=n=>{var e;return(e=Ua())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class a_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function c_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ma(JSON.stringify(t)),ma(JSON.stringify(o)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function l_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function u_(){var n;const e=(n=Ua())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function d_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function h_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function f_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function m_(){const n=ot();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function um(){return!u_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ul(){try{return typeof indexedDB=="object"}catch{return!1}}function dm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function p_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const g_="FirebaseError";class rn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=g_,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xr.prototype.create)}}class Xr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?y_(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new rn(s,c,r)}}function y_(n,e){return n.replace(v_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const v_=/\{\$([^}]+)}/g;function __(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Wd(i)&&Wd(o)){if(!xs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Wd(n){return n!==null&&typeof n=="object"}/**
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
 */function lo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ri(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Pi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function w_(n,e){const t=new I_(n,e);return t.subscribe.bind(t)}class I_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");T_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Vc),s.error===void 0&&(s.error=Vc),s.complete===void 0&&(s.complete=Vc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vc(){}/**
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
 */function Ne(n){return n&&n._delegate?n._delegate:n}class zt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class E_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new a_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(A_(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:b_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function b_(n){return n===Ar?void 0:n}function A_(n){return n.instantiationMode==="EAGER"}/**
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
 */class S_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new E_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const R_={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},P_=ue.INFO,C_={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},k_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=C_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ql{constructor(e){this.name=e,this._logLevel=P_,this._logHandler=k_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?R_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const D_=(n,e)=>e.some(t=>n instanceof t);let Qd,Yd;function N_(){return Qd||(Qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function x_(){return Yd||(Yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hm=new WeakMap,sl=new WeakMap,fm=new WeakMap,Oc=new WeakMap,jl=new WeakMap;function L_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Sn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&hm.set(t,n)}).catch(()=>{}),jl.set(e,n),e}function V_(n){if(sl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});sl.set(n,e)}let il={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function O_(n){il=n(il)}function M_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Mc(this),e,...t);return fm.set(r,e.sort?e.sort():[e]),Sn(r)}:x_().includes(n)?function(...e){return n.apply(Mc(this),e),Sn(hm.get(this))}:function(...e){return Sn(n.apply(Mc(this),e))}}function B_(n){return typeof n=="function"?M_(n):(n instanceof IDBTransaction&&V_(n),D_(n,N_())?new Proxy(n,il):n)}function Sn(n){if(n instanceof IDBRequest)return L_(n);if(Oc.has(n))return Oc.get(n);const e=B_(n);return e!==n&&(Oc.set(n,e),jl.set(e,n)),e}const Mc=n=>jl.get(n);function qa(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Sn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sn(o.result),l.oldVersion,l.newVersion,Sn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}function Bc(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),Sn(t).then(()=>{})}const F_=["get","getKey","getAll","getAllKeys","count"],$_=["put","add","delete","clear"],Fc=new Map;function Jd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=$_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||F_.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return Fc.set(e,i),i}O_(n=>({...n,get:(e,t,r)=>Jd(e,t)||n.get(e,t,r),has:(e,t)=>!!Jd(e,t)||n.has(e,t)}));/**
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
 */class U_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(q_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function q_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ol="@firebase/app",Xd="0.10.13";/**
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
 */const Pn=new ql("@firebase/app"),j_="@firebase/app-compat",G_="@firebase/analytics-compat",K_="@firebase/analytics",z_="@firebase/app-check-compat",H_="@firebase/app-check",W_="@firebase/auth",Q_="@firebase/auth-compat",Y_="@firebase/database",J_="@firebase/data-connect",X_="@firebase/database-compat",Z_="@firebase/functions",ew="@firebase/functions-compat",tw="@firebase/installations",nw="@firebase/installations-compat",rw="@firebase/messaging",sw="@firebase/messaging-compat",iw="@firebase/performance",ow="@firebase/performance-compat",aw="@firebase/remote-config",cw="@firebase/remote-config-compat",lw="@firebase/storage",uw="@firebase/storage-compat",dw="@firebase/firestore",hw="@firebase/vertexai-preview",fw="@firebase/firestore-compat",mw="firebase",pw="10.14.1";/**
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
 */const al="[DEFAULT]",gw={[ol]:"fire-core",[j_]:"fire-core-compat",[K_]:"fire-analytics",[G_]:"fire-analytics-compat",[H_]:"fire-app-check",[z_]:"fire-app-check-compat",[W_]:"fire-auth",[Q_]:"fire-auth-compat",[Y_]:"fire-rtdb",[J_]:"fire-data-connect",[X_]:"fire-rtdb-compat",[Z_]:"fire-fn",[ew]:"fire-fn-compat",[tw]:"fire-iid",[nw]:"fire-iid-compat",[rw]:"fire-fcm",[sw]:"fire-fcm-compat",[iw]:"fire-perf",[ow]:"fire-perf-compat",[aw]:"fire-rc",[cw]:"fire-rc-compat",[lw]:"fire-gcs",[uw]:"fire-gcs-compat",[dw]:"fire-fst",[fw]:"fire-fst-compat",[hw]:"fire-vertex","fire-js":"fire-js",[mw]:"fire-js-all"};/**
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
 */const pa=new Map,yw=new Map,cl=new Map;function Zd(n,e){try{n.container.addComponent(e)}catch(t){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function en(n){const e=n.name;if(cl.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,n);for(const t of pa.values())Zd(t,n);for(const t of yw.values())Zd(t,n);return!0}function Zr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function un(n){return n.settings!==void 0}/**
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
 */const vw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new Xr("app","Firebase",vw);/**
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
 */class _w{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
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
 */const es=pw;function mm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:al,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw er.create("bad-app-name",{appName:String(s)});if(t||(t=cm()),!t)throw er.create("no-options");const i=pa.get(s);if(i){if(xs(t,i.options)&&xs(r,i.config))return i;throw er.create("duplicate-app",{appName:s})}const o=new S_(s);for(const l of cl.values())o.addComponent(l);const c=new _w(t,r,o);return pa.set(s,c),c}function Gl(n=al){const e=pa.get(n);if(!e&&n===al&&cm())return mm();if(!e)throw er.create("no-app",{appName:n});return e}function Mt(n,e,t){var r;let s=(r=gw[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(c.join(" "));return}en(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ww="firebase-heartbeat-database",Iw=1,zi="firebase-heartbeat-store";let $c=null;function pm(){return $c||($c=qa(ww,Iw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zi)}catch(t){console.warn(t)}}}}).catch(n=>{throw er.create("idb-open",{originalErrorMessage:n.message})})),$c}async function Tw(n){try{const t=(await pm()).transaction(zi),r=await t.objectStore(zi).get(gm(n));return await t.done,r}catch(e){if(e instanceof rn)Pn.warn(e.message);else{const t=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(t.message)}}}async function eh(n,e){try{const r=(await pm()).transaction(zi,"readwrite");await r.objectStore(zi).put(e,gm(n)),await r.done}catch(t){if(t instanceof rn)Pn.warn(t.message);else{const r=er.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pn.warn(r.message)}}}function gm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ew=1024,bw=30*24*60*60*1e3;class Aw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=th();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=bw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=th(),{heartbeatsToSend:r,unsentEntries:s}=Sw(this._heartbeatsCache.heartbeats),i=ma(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Pn.warn(t),""}}}function th(){return new Date().toISOString().substring(0,10)}function Sw(n,e=Ew){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),nh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),nh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Rw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ul()?dm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Tw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return eh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return eh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nh(n){return ma(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Pw(n){en(new zt("platform-logger",e=>new U_(e),"PRIVATE")),en(new zt("heartbeat",e=>new Aw(e),"PRIVATE")),Mt(ol,Xd,n),Mt(ol,Xd,"esm2017"),Mt("fire-js","")}Pw("");var Cw="firebase",kw="10.14.1";/**
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
 */Mt(Cw,kw,"app");function Kl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ym(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dw=ym,vm=new Xr("auth","Firebase",ym());/**
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
 */const ga=new ql("@firebase/auth");function Nw(n,...e){ga.logLevel<=ue.WARN&&ga.warn(`Auth (${es}): ${n}`,...e)}function Qo(n,...e){ga.logLevel<=ue.ERROR&&ga.error(`Auth (${es}): ${n}`,...e)}/**
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
 */function tn(n,...e){throw zl(n,...e)}function fn(n,...e){return zl(n,...e)}function _m(n,e,t){const r=Object.assign(Object.assign({},Dw()),{[e]:t});return new Xr("auth","Firebase",r).create(e,{appName:n.name})}function Rn(n){return _m(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return vm.create(n,...e)}function re(n,e,...t){if(!n)throw zl(e,...t)}function Tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qo(e),new Error(e)}function Cn(n,e){n||Tn(e)}/**
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
 */function ll(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xw(){return rh()==="http:"||rh()==="https:"}function rh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Lw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xw()||h_()||"connection"in navigator)?navigator.onLine:!0}function Vw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class uo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cn(t>e,"Short delay should be less than long delay!"),this.isMobile=l_()||f_()}get(){return Lw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hl(n,e){Cn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ow={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mw=new uo(3e4,6e4);function Dn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nn(n,e,t,r,s={}){return Im(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=lo(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},i);return d_()||(u.referrerPolicy="no-referrer"),wm.fetch()(Tm(n,n.config.apiHost,t,c),u)})}async function Im(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ow),e);try{const s=new Fw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $o(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $o(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw $o(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _m(n,h,u);tn(n,h)}}catch(s){if(s instanceof rn)throw s;tn(n,"network-request-failed",{message:String(s)})}}async function ho(n,e,t,r,s={}){const i=await Nn(n,e,t,r,s);return"mfaPendingCredential"in i&&tn(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Tm(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Hl(n.config,s):`${n.config.apiScheme}://${s}`}function Bw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),Mw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=fn(n,e,r);return s.customData._tokenResponse=t,s}function sh(n){return n!==void 0&&n.enterprise!==void 0}class $w{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Bw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Uw(n,e){return Nn(n,"GET","/v2/recaptchaConfig",Dn(n,e))}/**
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
 */async function qw(n,e){return Nn(n,"POST","/v1/accounts:delete",e)}async function Em(n,e){return Nn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jw(n,e=!1){const t=Ne(n),r=await t.getIdToken(e),s=Wl(r);re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mi(Uc(s.auth_time)),issuedAtTime:Mi(Uc(s.iat)),expirationTime:Mi(Uc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Uc(n){return Number(n)*1e3}function Wl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=om(t);return s?JSON.parse(s):(Qo("Failed to decode base64 JWT payload"),null)}catch(s){return Qo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ih(n){const e=Wl(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof rn&&Gw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Gw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Kw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ul{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ya(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Hi(n,Em(t,{idToken:r}));re(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bm(i.providerUserInfo):[],c=Hw(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ul(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function zw(n){const e=Ne(n);await ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bm(n){return n.map(e=>{var{providerId:t}=e,r=Kl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ww(n,e){const t=await Im(n,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Tm(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Qw(n,e){return Nn(n,"POST","/v2/accounts:revokeToken",Dn(n,e))}/**
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
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ih(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=ih(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ww(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Cs;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function jn(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ul(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jw(this,e)}reload(){return zw(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await Hi(this,qw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,u,h;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,_=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,L=(u=t.createdAt)!==null&&u!==void 0?u:void 0,M=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:B,isAnonymous:z,providerData:Q,stsTokenManager:A}=t;re(x&&A,e,"internal-error");const w=Cs.fromJSON(this.name,A);re(typeof x=="string",e,"internal-error"),jn(p,e.name),jn(g,e.name),re(typeof B=="boolean",e,"internal-error"),re(typeof z=="boolean",e,"internal-error"),jn(_,e.name),jn(E,e.name),jn(P,e.name),jn(C,e.name),jn(L,e.name),jn(M,e.name);const T=new En({uid:x,auth:e,email:g,emailVerified:B,displayName:p,isAnonymous:z,photoURL:E,phoneNumber:_,tenantId:P,stsTokenManager:w,createdAt:L,lastLoginAt:M});return Q&&Array.isArray(Q)&&(T.providerData=Q.map(S=>Object.assign({},S))),C&&(T._redirectEventId=C),T}static async _fromIdTokenResponse(e,t,r=!1){const s=new Cs;s.updateFromServerResponse(t);const i=new En({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ya(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Cs;c.updateFromIdToken(r);const l=new En({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ul(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const oh=new Map;function bn(n){Cn(n instanceof Function,"Expected a class definition");let e=oh.get(n);return e?(Cn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oh.set(n,e),e)}/**
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
 */class Am{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Am.type="NONE";const ah=Am;/**
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
 */function Yo(n,e,t){return`firebase:${n}:${e}:${t}`}class ks{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Yo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ks(bn(ah),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||bn(ah);const o=Yo(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const h=await u._get(o);if(h){const p=En._fromJSON(e,h);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ks(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ks(i,e,r))}}/**
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
 */function ch(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dm(e))return"Blackberry";if(Nm(e))return"Webos";if(Rm(e))return"Safari";if((e.includes("chrome/")||Pm(e))&&!e.includes("edge/"))return"Chrome";if(km(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sm(n=ot()){return/firefox\//i.test(n)}function Rm(n=ot()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pm(n=ot()){return/crios\//i.test(n)}function Cm(n=ot()){return/iemobile/i.test(n)}function km(n=ot()){return/android/i.test(n)}function Dm(n=ot()){return/blackberry/i.test(n)}function Nm(n=ot()){return/webos/i.test(n)}function Ql(n=ot()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Yw(n=ot()){var e;return Ql(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jw(){return m_()&&document.documentMode===10}function xm(n=ot()){return Ql(n)||km(n)||Nm(n)||Dm(n)||/windows phone/i.test(n)||Cm(n)}/**
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
 */function Lm(n,e=[]){let t;switch(n){case"Browser":t=ch(ot());break;case"Worker":t=`${ch(ot())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${es}/${r}`}/**
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
 */class Xw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Zw(n,e={}){return Nn(n,"GET","/v2/passwordPolicy",Dn(n,e))}/**
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
 */const eI=6;class tI{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:eI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class nI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lh(this),this.idTokenSubscription=new lh(this),this.beforeStateQueue=new Xw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Em(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ya(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Rn(this));const t=e?Ne(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zw(this),t=new tI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bn(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[bn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Nw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ur(n){return Ne(n)}class lh{constructor(e){this.auth=e,this.observer=null,this.addObserver=w_(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rI(n){ja=n}function Vm(n){return ja.loadJS(n)}function sI(){return ja.recaptchaEnterpriseScript}function iI(){return ja.gapiScript}function oI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const aI="recaptcha-enterprise",cI="NO_RECAPTCHA";class lI{constructor(e){this.type=aI,this.auth=ur(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Uw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new $w(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;sh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(cI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&sh(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=sI();l.length!==0&&(l+=c),Vm(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function uh(n,e,t,r=!1){const s=new lI(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function va(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await uh(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await uh(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
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
 */function uI(n,e){const t=Zr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(xs(i,e??{}))return s;tn(s,"already-initialized")}return t.initialize({options:e})}function dI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(bn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hI(n,e,t){const r=ur(n);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Om(e),{host:o,port:c}=fI(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),mI()}function Om(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function fI(n){const e=Om(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:dh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:dh(o)}}}function dh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Yl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function pI(n,e){return Nn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function gI(n,e){return ho(n,"POST","/v1/accounts:signInWithPassword",Dn(n,e))}async function yI(n,e){return Nn(n,"POST","/v1/accounts:sendOobCode",Dn(n,e))}async function vI(n,e){return yI(n,e)}/**
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
 */async function _I(n,e){return ho(n,"POST","/v1/accounts:signInWithEmailLink",Dn(n,e))}async function wI(n,e){return ho(n,"POST","/v1/accounts:signInWithEmailLink",Dn(n,e))}/**
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
 */class Wi extends Yl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Wi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Wi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return va(e,t,"signInWithPassword",gI);case"emailLink":return _I(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return va(e,r,"signUpPassword",pI);case"emailLink":return wI(e,{idToken:t,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ds(n,e){return ho(n,"POST","/v1/accounts:signInWithIdp",Dn(n,e))}/**
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
 */const II="http://localhost";class Br extends Yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Kl(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ds(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ds(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ds(e,t)}buildRequest(){const e={requestUri:II,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lo(t)}return e}}/**
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
 */function TI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EI(n){const e=Ri(Pi(n)).link,t=e?Ri(Pi(e)).deep_link_id:null,r=Ri(Pi(n)).deep_link_id;return(r?Ri(Pi(r)).link:null)||r||t||e||n}class Jl{constructor(e){var t,r,s,i,o,c;const l=Ri(Pi(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=TI((s=l.mode)!==null&&s!==void 0?s:null);re(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=EI(e);try{return new Jl(t)}catch{return null}}}/**
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
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,t){return Wi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Jl.parseLink(t);return re(r,"argument-error"),Wi._fromEmailAndCode(e,r.code,r.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fo extends Mm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends fo{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Br._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Wn.credential(t,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class Qn extends fo{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Yn extends fo{constructor(){super("twitter.com")}static credential(e,t){return Br._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yn.credential(t,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function bI(n,e){return ho(n,"POST","/v1/accounts:signUp",Dn(n,e))}/**
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
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await En._fromIdTokenResponse(e,r,s),o=hh(r);return new Fr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=hh(r);return new Fr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function hh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class _a extends rn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_a.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new _a(e,t,r,s)}}function Bm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_a._fromErrorAndOperation(n,i,e,r):i})}async function AI(n,e,t=!1){const r=await Hi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fr._forOperation(n,"link",r)}/**
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
 */async function SI(n,e,t=!1){const{auth:r}=n;if(un(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await Hi(n,Bm(r,s,e,n),t);re(i.idToken,r,"internal-error");const o=Wl(i.idToken);re(o,r,"internal-error");const{sub:c}=o;return re(n.uid===c,r,"user-mismatch"),Fr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
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
 */async function Fm(n,e,t=!1){if(un(n.app))return Promise.reject(Rn(n));const r="signIn",s=await Bm(n,r,e),i=await Fr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function RI(n,e){return Fm(ur(n),e)}/**
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
 */async function $m(n){const e=ur(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PI(n,e,t){const r=ur(n);await va(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",vI)}async function CI(n,e,t){if(un(n.app))return Promise.reject(Rn(n));const r=ur(n),o=await va(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$m(n),l}),c=await Fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function kI(n,e,t){return un(n.app)?Promise.reject(Rn(n)):RI(Ne(n),Qs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$m(n),r})}function DI(n,e,t,r){return Ne(n).onIdTokenChanged(e,t,r)}function NI(n,e,t){return Ne(n).beforeAuthStateChanged(e,t)}function xI(n,e,t,r){return Ne(n).onAuthStateChanged(e,t,r)}function LI(n){return Ne(n).signOut()}const wa="__sak";/**
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
 */class Um{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wa,"1"),this.storage.removeItem(wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VI=1e3,OI=10;class qm extends Um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Jw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qm.type="LOCAL";const MI=qm;/**
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
 */class jm extends Um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jm.type="SESSION";const Gm=jm;/**
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
 */function BI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ga(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await BI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ga.receivers=[];/**
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
 */function Xl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class FI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Xl("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function $I(n){mn().location.href=n}/**
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
 */function Km(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function UI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jI(){return Km()?self:null}/**
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
 */const zm="firebaseLocalStorageDb",GI=1,Ia="firebaseLocalStorage",Hm="fbase_key";class mo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ka(n,e){return n.transaction([Ia],e?"readwrite":"readonly").objectStore(Ia)}function KI(){const n=indexedDB.deleteDatabase(zm);return new mo(n).toPromise()}function dl(){const n=indexedDB.open(zm,GI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ia,{keyPath:Hm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ia)?e(r):(r.close(),await KI(),e(await dl()))})})}async function fh(n,e,t){const r=Ka(n,!0).put({[Hm]:e,value:t});return new mo(r).toPromise()}async function zI(n,e){const t=Ka(n,!1).get(e),r=await new mo(t).toPromise();return r===void 0?null:r.value}function mh(n,e){const t=Ka(n,!0).delete(e);return new mo(t).toPromise()}const HI=800,WI=3;class Wm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>WI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Km()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ga._getInstance(jI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await UI(),!this.activeServiceWorker)return;this.sender=new FI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dl();return await fh(e,wa,"1"),await mh(e,wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ka(s,!1).getAll();return new mo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wm.type="LOCAL";const QI=Wm;new uo(3e4,6e4);/**
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
 */function YI(n,e){return e?bn(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Zl extends Yl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ds(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function JI(n){return Fm(n.auth,new Zl(n),n.bypassAuthState)}function XI(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),SI(t,new Zl(n),n.bypassAuthState)}async function ZI(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),AI(t,new Zl(n),n.bypassAuthState)}/**
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
 */class Qm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JI;case"linkViaPopup":case"linkViaRedirect":return ZI;case"reauthViaPopup":case"reauthViaRedirect":return XI;default:tn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eT=new uo(2e3,1e4);class Rs extends Qm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eT.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const tT="pendingRedirect",Jo=new Map;class nT extends Qm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const r=await rT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rT(n,e){const t=oT(e),r=iT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function sT(n,e){Jo.set(n._key(),e)}function iT(n){return bn(n._redirectPersistence)}function oT(n){return Yo(tT,n.config.apiKey,n.name)}async function aT(n,e,t=!1){if(un(n.app))return Promise.reject(Rn(n));const r=ur(n),s=YI(r,e),o=await new nT(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const cT=10*60*1e3;class lT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ym(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(fn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ph(e))}saveEventToCache(e){this.cachedEventUids.add(ph(e)),this.lastProcessedEventTime=Date.now()}}function ph(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ym({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ym(n);default:return!1}}/**
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
 */async function dT(n,e={}){return Nn(n,"GET","/v1/projects",e)}/**
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
 */const hT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fT=/^https?/;async function mT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dT(n);for(const t of e)try{if(pT(t))return}catch{}tn(n,"unauthorized-domain")}function pT(n){const e=ll(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!fT.test(t))return!1;if(hT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const gT=new uo(3e4,6e4);function gh(){const n=mn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yT(n){return new Promise((e,t)=>{var r,s,i;function o(){gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gh(),t(fn(n,"network-request-failed"))},timeout:gT.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const c=oI("iframefcb");return mn()[c]=()=>{gapi.load?o():t(fn(n,"network-request-failed"))},Vm(`${iI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function vT(n){return Xo=Xo||yT(n),Xo}/**
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
 */const _T=new uo(5e3,15e3),wT="__/auth/iframe",IT="emulator/auth/iframe",TT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ET=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bT(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hl(e,IT):`https://${n.config.authDomain}/${wT}`,r={apiKey:e.apiKey,appName:n.name,v:es},s=ET.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${lo(r).slice(1)}`}async function AT(n){const e=await vT(n),t=mn().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:bT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(n,"network-request-failed"),c=mn().setTimeout(()=>{i(o)},_T.get());function l(){mn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const ST={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RT=500,PT=600,CT="_blank",kT="http://localhost";class yh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DT(n,e,t,r=RT,s=PT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},ST),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ot().toLowerCase();t&&(c=Pm(u)?CT:t),Sm(u)&&(e=e||kT,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[_,E])=>`${g}${_}=${E},`,"");if(Yw(u)&&c!=="_self")return NT(e||"",c),new yh(null);const p=window.open(e||"",c,h);re(p,n,"popup-blocked");try{p.focus()}catch{}return new yh(p)}function NT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const xT="__/auth/handler",LT="emulator/auth/handler",VT=encodeURIComponent("fac");async function vh(n,e,t,r,s,i){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:es,eventId:s};if(e instanceof Mm){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",__(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof fo){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await n._getAppCheckToken(),u=l?`#${VT}=${encodeURIComponent(l)}`:"";return`${OT(n)}?${lo(c).slice(1)}${u}`}function OT({config:n}){return n.emulator?Hl(n,LT):`https://${n.authDomain}/${xT}`}/**
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
 */const qc="webStorageSupport";class MT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gm,this._completeRedirectFn=aT,this._overrideRedirectResult=sT}async _openPopup(e,t,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await vh(e,t,r,ll(),s);return DT(e,o,Xl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await vh(e,t,r,ll(),s);return $I(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await AT(e),r=new lT(e);return t.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qc,{type:qc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qc];o!==void 0&&t(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xm()||Rm()||Ql()}}const BT=MT;var _h="@firebase/auth",wh="1.7.9";/**
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
 */class FT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $T(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UT(n){en(new zt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lm(n)},u=new nI(r,s,i,l);return dI(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),en(new zt("auth-internal",e=>{const t=ur(e.getProvider("auth").getImmediate());return(r=>new FT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(_h,wh,$T(n)),Mt(_h,wh,"esm2017")}/**
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
 */const qT=5*60,jT=lm("authIdTokenMaxAge")||qT;let Ih=null;const GT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>jT)return;const s=t==null?void 0:t.token;Ih!==s&&(Ih=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function KT(n=Gl()){const e=Zr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=uI(n,{popupRedirectResolver:BT,persistence:[QI,MI,Gm]}),r=lm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=GT(i.toString());NI(t,o,()=>o(t.currentUser)),DI(t,c=>o(c))}}const s=am("auth");return s&&hI(t,`http://${s}`),t}function zT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}rI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",zT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UT("Browser");var Th=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xr,Jm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,w){function T(){}T.prototype=w.prototype,A.D=w.prototype,A.prototype=new T,A.prototype.constructor=A,A.C=function(S,b,R){for(var I=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)I[pe-2]=arguments[pe];return w.prototype[b].apply(S,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,w,T){T||(T=0);var S=Array(16);if(typeof w=="string")for(var b=0;16>b;++b)S[b]=w.charCodeAt(T++)|w.charCodeAt(T++)<<8|w.charCodeAt(T++)<<16|w.charCodeAt(T++)<<24;else for(b=0;16>b;++b)S[b]=w[T++]|w[T++]<<8|w[T++]<<16|w[T++]<<24;w=A.g[0],T=A.g[1],b=A.g[2];var R=A.g[3],I=w+(R^T&(b^R))+S[0]+3614090360&4294967295;w=T+(I<<7&4294967295|I>>>25),I=R+(b^w&(T^b))+S[1]+3905402710&4294967295,R=w+(I<<12&4294967295|I>>>20),I=b+(T^R&(w^T))+S[2]+606105819&4294967295,b=R+(I<<17&4294967295|I>>>15),I=T+(w^b&(R^w))+S[3]+3250441966&4294967295,T=b+(I<<22&4294967295|I>>>10),I=w+(R^T&(b^R))+S[4]+4118548399&4294967295,w=T+(I<<7&4294967295|I>>>25),I=R+(b^w&(T^b))+S[5]+1200080426&4294967295,R=w+(I<<12&4294967295|I>>>20),I=b+(T^R&(w^T))+S[6]+2821735955&4294967295,b=R+(I<<17&4294967295|I>>>15),I=T+(w^b&(R^w))+S[7]+4249261313&4294967295,T=b+(I<<22&4294967295|I>>>10),I=w+(R^T&(b^R))+S[8]+1770035416&4294967295,w=T+(I<<7&4294967295|I>>>25),I=R+(b^w&(T^b))+S[9]+2336552879&4294967295,R=w+(I<<12&4294967295|I>>>20),I=b+(T^R&(w^T))+S[10]+4294925233&4294967295,b=R+(I<<17&4294967295|I>>>15),I=T+(w^b&(R^w))+S[11]+2304563134&4294967295,T=b+(I<<22&4294967295|I>>>10),I=w+(R^T&(b^R))+S[12]+1804603682&4294967295,w=T+(I<<7&4294967295|I>>>25),I=R+(b^w&(T^b))+S[13]+4254626195&4294967295,R=w+(I<<12&4294967295|I>>>20),I=b+(T^R&(w^T))+S[14]+2792965006&4294967295,b=R+(I<<17&4294967295|I>>>15),I=T+(w^b&(R^w))+S[15]+1236535329&4294967295,T=b+(I<<22&4294967295|I>>>10),I=w+(b^R&(T^b))+S[1]+4129170786&4294967295,w=T+(I<<5&4294967295|I>>>27),I=R+(T^b&(w^T))+S[6]+3225465664&4294967295,R=w+(I<<9&4294967295|I>>>23),I=b+(w^T&(R^w))+S[11]+643717713&4294967295,b=R+(I<<14&4294967295|I>>>18),I=T+(R^w&(b^R))+S[0]+3921069994&4294967295,T=b+(I<<20&4294967295|I>>>12),I=w+(b^R&(T^b))+S[5]+3593408605&4294967295,w=T+(I<<5&4294967295|I>>>27),I=R+(T^b&(w^T))+S[10]+38016083&4294967295,R=w+(I<<9&4294967295|I>>>23),I=b+(w^T&(R^w))+S[15]+3634488961&4294967295,b=R+(I<<14&4294967295|I>>>18),I=T+(R^w&(b^R))+S[4]+3889429448&4294967295,T=b+(I<<20&4294967295|I>>>12),I=w+(b^R&(T^b))+S[9]+568446438&4294967295,w=T+(I<<5&4294967295|I>>>27),I=R+(T^b&(w^T))+S[14]+3275163606&4294967295,R=w+(I<<9&4294967295|I>>>23),I=b+(w^T&(R^w))+S[3]+4107603335&4294967295,b=R+(I<<14&4294967295|I>>>18),I=T+(R^w&(b^R))+S[8]+1163531501&4294967295,T=b+(I<<20&4294967295|I>>>12),I=w+(b^R&(T^b))+S[13]+2850285829&4294967295,w=T+(I<<5&4294967295|I>>>27),I=R+(T^b&(w^T))+S[2]+4243563512&4294967295,R=w+(I<<9&4294967295|I>>>23),I=b+(w^T&(R^w))+S[7]+1735328473&4294967295,b=R+(I<<14&4294967295|I>>>18),I=T+(R^w&(b^R))+S[12]+2368359562&4294967295,T=b+(I<<20&4294967295|I>>>12),I=w+(T^b^R)+S[5]+4294588738&4294967295,w=T+(I<<4&4294967295|I>>>28),I=R+(w^T^b)+S[8]+2272392833&4294967295,R=w+(I<<11&4294967295|I>>>21),I=b+(R^w^T)+S[11]+1839030562&4294967295,b=R+(I<<16&4294967295|I>>>16),I=T+(b^R^w)+S[14]+4259657740&4294967295,T=b+(I<<23&4294967295|I>>>9),I=w+(T^b^R)+S[1]+2763975236&4294967295,w=T+(I<<4&4294967295|I>>>28),I=R+(w^T^b)+S[4]+1272893353&4294967295,R=w+(I<<11&4294967295|I>>>21),I=b+(R^w^T)+S[7]+4139469664&4294967295,b=R+(I<<16&4294967295|I>>>16),I=T+(b^R^w)+S[10]+3200236656&4294967295,T=b+(I<<23&4294967295|I>>>9),I=w+(T^b^R)+S[13]+681279174&4294967295,w=T+(I<<4&4294967295|I>>>28),I=R+(w^T^b)+S[0]+3936430074&4294967295,R=w+(I<<11&4294967295|I>>>21),I=b+(R^w^T)+S[3]+3572445317&4294967295,b=R+(I<<16&4294967295|I>>>16),I=T+(b^R^w)+S[6]+76029189&4294967295,T=b+(I<<23&4294967295|I>>>9),I=w+(T^b^R)+S[9]+3654602809&4294967295,w=T+(I<<4&4294967295|I>>>28),I=R+(w^T^b)+S[12]+3873151461&4294967295,R=w+(I<<11&4294967295|I>>>21),I=b+(R^w^T)+S[15]+530742520&4294967295,b=R+(I<<16&4294967295|I>>>16),I=T+(b^R^w)+S[2]+3299628645&4294967295,T=b+(I<<23&4294967295|I>>>9),I=w+(b^(T|~R))+S[0]+4096336452&4294967295,w=T+(I<<6&4294967295|I>>>26),I=R+(T^(w|~b))+S[7]+1126891415&4294967295,R=w+(I<<10&4294967295|I>>>22),I=b+(w^(R|~T))+S[14]+2878612391&4294967295,b=R+(I<<15&4294967295|I>>>17),I=T+(R^(b|~w))+S[5]+4237533241&4294967295,T=b+(I<<21&4294967295|I>>>11),I=w+(b^(T|~R))+S[12]+1700485571&4294967295,w=T+(I<<6&4294967295|I>>>26),I=R+(T^(w|~b))+S[3]+2399980690&4294967295,R=w+(I<<10&4294967295|I>>>22),I=b+(w^(R|~T))+S[10]+4293915773&4294967295,b=R+(I<<15&4294967295|I>>>17),I=T+(R^(b|~w))+S[1]+2240044497&4294967295,T=b+(I<<21&4294967295|I>>>11),I=w+(b^(T|~R))+S[8]+1873313359&4294967295,w=T+(I<<6&4294967295|I>>>26),I=R+(T^(w|~b))+S[15]+4264355552&4294967295,R=w+(I<<10&4294967295|I>>>22),I=b+(w^(R|~T))+S[6]+2734768916&4294967295,b=R+(I<<15&4294967295|I>>>17),I=T+(R^(b|~w))+S[13]+1309151649&4294967295,T=b+(I<<21&4294967295|I>>>11),I=w+(b^(T|~R))+S[4]+4149444226&4294967295,w=T+(I<<6&4294967295|I>>>26),I=R+(T^(w|~b))+S[11]+3174756917&4294967295,R=w+(I<<10&4294967295|I>>>22),I=b+(w^(R|~T))+S[2]+718787259&4294967295,b=R+(I<<15&4294967295|I>>>17),I=T+(R^(b|~w))+S[9]+3951481745&4294967295,A.g[0]=A.g[0]+w&4294967295,A.g[1]=A.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,w){w===void 0&&(w=A.length);for(var T=w-this.blockSize,S=this.B,b=this.h,R=0;R<w;){if(b==0)for(;R<=T;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<w;)if(S[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,S),b=0;break}}else for(;R<w;)if(S[b++]=A[R++],b==this.blockSize){s(this,S),b=0;break}}this.h=b,this.o+=w},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var w=1;w<A.length-8;++w)A[w]=0;var T=8*this.o;for(w=A.length-8;w<A.length;++w)A[w]=T&255,T/=256;for(this.u(A),A=Array(16),w=T=0;4>w;++w)for(var S=0;32>S;S+=8)A[T++]=this.g[w]>>>S&255;return A};function i(A,w){var T=c;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=w(A)}function o(A,w){this.h=w;for(var T=[],S=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;S&&R==w||(T[b]=R,S=!1)}this.g=T}var c={};function l(A){return-128<=A&&128>A?i(A,function(w){return new o([w|0],0>w?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return C(u(-A));for(var w=[],T=1,S=0;A>=T;S++)w[S]=A/T|0,T*=4294967296;return new o(w,0)}function h(A,w){if(A.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A.charAt(0)=="-")return C(h(A.substring(1),w));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(w,8)),S=p,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),I=parseInt(A.substring(b,b+R),w);8>R?(R=u(Math.pow(w,R)),S=S.j(R).add(u(I))):(S=S.j(T),S=S.add(u(I)))}return S}var p=l(0),g=l(1),_=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-C(this).m();for(var A=0,w=1,T=0;T<this.g.length;T++){var S=this.i(T);A+=(0<=S?S:4294967296+S)*w,w*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(P(this))return"-"+C(this).toString(A);for(var w=u(Math.pow(A,6)),T=this,S="";;){var b=B(T,w).g;T=L(T,b.j(w));var R=((0<T.g.length?T.g[0]:T.h)>>>0).toString(A);if(T=b,E(T))return R+S;for(;6>R.length;)R="0"+R;S=R+S}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var w=0;w<A.g.length;w++)if(A.g[w]!=0)return!1;return!0}function P(A){return A.h==-1}n.l=function(A){return A=L(this,A),P(A)?-1:E(A)?0:1};function C(A){for(var w=A.g.length,T=[],S=0;S<w;S++)T[S]=~A.g[S];return new o(T,~A.h).add(g)}n.abs=function(){return P(this)?C(this):this},n.add=function(A){for(var w=Math.max(this.g.length,A.g.length),T=[],S=0,b=0;b<=w;b++){var R=S+(this.i(b)&65535)+(A.i(b)&65535),I=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);S=I>>>16,R&=65535,I&=65535,T[b]=I<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function L(A,w){return A.add(C(w))}n.j=function(A){if(E(this)||E(A))return p;if(P(this))return P(A)?C(this).j(C(A)):C(C(this).j(A));if(P(A))return C(this.j(C(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var w=this.g.length+A.g.length,T=[],S=0;S<2*w;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var b=0;b<A.g.length;b++){var R=this.i(S)>>>16,I=this.i(S)&65535,pe=A.i(b)>>>16,Re=A.i(b)&65535;T[2*S+2*b]+=I*Re,M(T,2*S+2*b),T[2*S+2*b+1]+=R*Re,M(T,2*S+2*b+1),T[2*S+2*b+1]+=I*pe,M(T,2*S+2*b+1),T[2*S+2*b+2]+=R*pe,M(T,2*S+2*b+2)}for(S=0;S<w;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=w;S<2*w;S++)T[S]=0;return new o(T,0)};function M(A,w){for(;(A[w]&65535)!=A[w];)A[w+1]+=A[w]>>>16,A[w]&=65535,w++}function x(A,w){this.g=A,this.h=w}function B(A,w){if(E(w))throw Error("division by zero");if(E(A))return new x(p,p);if(P(A))return w=B(C(A),w),new x(C(w.g),C(w.h));if(P(w))return w=B(A,C(w)),new x(C(w.g),w.h);if(30<A.g.length){if(P(A)||P(w))throw Error("slowDivide_ only works with positive integers.");for(var T=g,S=w;0>=S.l(A);)T=z(T),S=z(S);var b=Q(T,1),R=Q(S,1);for(S=Q(S,2),T=Q(T,2);!E(S);){var I=R.add(S);0>=I.l(A)&&(b=b.add(T),R=I),S=Q(S,1),T=Q(T,1)}return w=L(A,b.j(w)),new x(b,w)}for(b=p;0<=A.l(w);){for(T=Math.max(1,Math.floor(A.m()/w.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),R=u(T),I=R.j(w);P(I)||0<I.l(A);)T-=S,R=u(T),I=R.j(w);E(R)&&(R=g),b=b.add(R),A=L(A,I)}return new x(b,A)}n.A=function(A){return B(this,A).h},n.and=function(A){for(var w=Math.max(this.g.length,A.g.length),T=[],S=0;S<w;S++)T[S]=this.i(S)&A.i(S);return new o(T,this.h&A.h)},n.or=function(A){for(var w=Math.max(this.g.length,A.g.length),T=[],S=0;S<w;S++)T[S]=this.i(S)|A.i(S);return new o(T,this.h|A.h)},n.xor=function(A){for(var w=Math.max(this.g.length,A.g.length),T=[],S=0;S<w;S++)T[S]=this.i(S)^A.i(S);return new o(T,this.h^A.h)};function z(A){for(var w=A.g.length+1,T=[],S=0;S<w;S++)T[S]=A.i(S)<<1|A.i(S-1)>>>31;return new o(T,A.h)}function Q(A,w){var T=w>>5;w%=32;for(var S=A.g.length-T,b=[],R=0;R<S;R++)b[R]=0<w?A.i(R+T)>>>w|A.i(R+T+1)<<32-w:A.i(R+T);return new o(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,xr=o}).apply(typeof Th<"u"?Th:typeof self<"u"?self:typeof window<"u"?window:{});var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xm,Ci,Zm,Zo,hl,ep,tp,np;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uo=="object"&&Uo];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var k=a[v];if(!(k in f))break e;f=f[k]}a=a[a.length-1],v=f[a],d=d(v),d!=v&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,v=!1,k={next:function(){if(!v&&f<a.length){var N=f++;return{value:d(N,a[N]),done:!1}}return v=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,v),a.apply(d,k)}}return function(){return a.apply(d,arguments)}}function g(a,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function _(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function E(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,k,N){for(var U=Array(arguments.length-2),be=2;be<arguments.length;be++)U[be-2]=arguments[be];return d.prototype[k].apply(v,U)}}function P(a){const d=a.length;if(0<d){const f=Array(d);for(let v=0;v<d;v++)f[v]=a[v];return f}return[]}function C(a,d){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(l(v)){const k=a.length||0,N=v.length||0;a.length=k+N;for(let U=0;U<N;U++)a[k+U]=v[U]}else a.push(v)}}class L{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function M(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var z=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function Q(a,d,f){for(const v in a)d.call(f,a[v],v,a)}function A(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function w(a){const d={};for(const f in a)d[f]=a[f];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,d){let f,v;for(let k=1;k<arguments.length;k++){v=arguments[k];for(f in v)a[f]=v[f];for(let N=0;N<T.length;N++)f=T[N],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function b(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function R(a){c.setTimeout(()=>{throw a},0)}function I(){var a=et;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class pe{constructor(){this.h=this.g=null}add(d,f){const v=Re.get();v.set(d,f),this.h?this.h.next=v:this.g=v,this.h=v}}var Re=new L(()=>new Ye,a=>a.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,dt=!1,et=new pe,as=()=>{const a=c.Promise.resolve(void 0);qe=()=>{a.then(cs)}};var cs=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){R(f)}var d=Re;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}dt=!1};function Gt(){this.s=this.s,this.C=this.C}Gt.prototype.s=!1,Gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Ln=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,d),c.removeEventListener("test",f,d)}catch{}return a}();function ae(a,d){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(z){e:{try{B(d.nodeName);var k=!0;break e}catch{}k=!1}k||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:je[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ae.aa.h.call(this)}}E(ae,Le);var je={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var St="closure_listenable_"+(1e6*Math.random()|0),Qt=0;function Yt(a,d,f,v,k){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!v,this.ha=k,this.key=++Qt,this.da=this.fa=!1}function he(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pe(a){this.src=a,this.g={},this.h=0}Pe.prototype.add=function(a,d,f,v,k){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var U=we(a,d,v,k);return-1<U?(d=a[U],f||(d.fa=!1)):(d=new Yt(d,this.src,N,!!v,k),d.fa=f,a.push(d)),d};function Ve(a,d){var f=d.type;if(f in a.g){var v=a.g[f],k=Array.prototype.indexOf.call(v,d,void 0),N;(N=0<=k)&&Array.prototype.splice.call(v,k,1),N&&(he(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function we(a,d,f,v){for(var k=0;k<a.length;++k){var N=a[k];if(!N.da&&N.listener==d&&N.capture==!!f&&N.ha==v)return k}return-1}var Oe="closure_lm_"+(1e6*Math.random()|0),ht={};function Ie(a,d,f,v,k){if(Array.isArray(d)){for(var N=0;N<d.length;N++)Ie(a,d[N],f,v,k);return null}return f=us(f),a&&a[St]?a.K(d,f,u(v)?!!v.capture:!1,k):st(a,d,f,!1,v,k)}function st(a,d,f,v,k,N){if(!d)throw Error("Invalid event type");var U=u(k)?!!k.capture:!!k,be=Ae(a);if(be||(a[Oe]=be=new Pe(a)),f=be.add(d,f,v,U,N),f.proxy)return f;if(v=ct(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)Ln||(k=U),k===void 0&&(k=!1),a.addEventListener(d.toString(),v,k);else if(a.attachEvent)a.attachEvent(yr(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ct(){function a(f){return d.call(a.src,a.listener,f)}const d=ls;return a}function si(a,d,f,v,k){if(Array.isArray(d))for(var N=0;N<d.length;N++)si(a,d[N],f,v,k);else v=u(v)?!!v.capture:!!v,f=us(f),a&&a[St]?(a=a.i,d=String(d).toString(),d in a.g&&(N=a.g[d],f=we(N,f,v,k),-1<f&&(he(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[d],a.h--)))):a&&(a=Ae(a))&&(d=a.g[d.toString()],a=-1,d&&(a=we(d,f,v,k)),(f=-1<a?d[a]:null)&&Vn(f))}function Vn(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[St])Ve(d.i,a);else{var f=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(f,v,a.capture):d.detachEvent?d.detachEvent(yr(f),v):d.addListener&&d.removeListener&&d.removeListener(v),(f=Ae(d))?(Ve(f,a),f.h==0&&(f.src=null,d[Oe]=null)):he(a)}}}function yr(a){return a in ht?ht[a]:ht[a]="on"+a}function ls(a,d){if(a.da)a=!0;else{d=new ae(d,this);var f=a.listener,v=a.ha||a.src;a.fa&&Vn(a),a=f.call(v,d)}return a}function Ae(a){return a=a[Oe],a instanceof Pe?a:null}var ii="__closure_events_fn_"+(1e9*Math.random()>>>0);function us(a){return typeof a=="function"?a:(a[ii]||(a[ii]=function(d){return a.handleEvent(d)}),a[ii])}function ve(){Gt.call(this),this.i=new Pe(this),this.M=this,this.F=null}E(ve,Gt),ve.prototype[St]=!0,ve.prototype.removeEventListener=function(a,d,f,v){si(this,a,d,f,v)};function Me(a,d){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new Le(d,a);else if(d instanceof Le)d.target=d.target||a;else{var k=d;d=new Le(v,a),S(d,k)}if(k=!0,f)for(var N=f.length-1;0<=N;N--){var U=d.g=f[N];k=vr(U,v,!0,d)&&k}if(U=d.g=a,k=vr(U,v,!0,d)&&k,k=vr(U,v,!1,d)&&k,f)for(N=0;N<f.length;N++)U=d.g=f[N],k=vr(U,v,!1,d)&&k}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],v=0;v<f.length;v++)he(f[v]);delete a.g[d],a.h--}}this.F=null},ve.prototype.K=function(a,d,f,v){return this.i.add(String(a),d,!1,f,v)},ve.prototype.L=function(a,d,f,v){return this.i.add(String(a),d,!0,f,v)};function vr(a,d,f,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,N=0;N<d.length;++N){var U=d[N];if(U&&!U.da&&U.capture==f){var be=U.listener,mt=U.ha||U.src;U.fa&&Ve(a.i,U),k=be.call(mt,v)!==!1&&k}}return k&&!v.defaultPrevented}function oi(a,d,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function ai(a){a.g=oi(()=>{a.g=null,a.i&&(a.i=!1,ai(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class So extends Gt{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ai(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function On(a){Gt.call(this),this.h=a,this.g={}}E(On,Gt);var ci=[];function li(a){Q(a.g,function(d,f){this.g.hasOwnProperty(f)&&Vn(d)},a),a.g={}}On.prototype.N=function(){On.aa.N.call(this),li(this)},On.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ds=c.JSON.stringify,Ro=c.JSON.parse,Po=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function hs(){}hs.prototype.h=null;function ui(a){return a.h||(a.h=a.i())}function di(){}var Mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fs(){Le.call(this,"d")}E(fs,Le);function ms(){Le.call(this,"c")}E(ms,Le);var O={},$=null;function H(){return $=$||new ve}O.La="serverreachability";function Y(a){Le.call(this,O.La,a)}E(Y,Le);function Z(a){const d=H();Me(d,new Y(d))}O.STAT_EVENT="statevent";function ie(a,d){Le.call(this,O.STAT_EVENT,a),this.stat=d}E(ie,Le);function ce(a){const d=H();Me(d,new ie(d,a))}O.Ma="timingevent";function ye(a,d){Le.call(this,O.Ma,a),this.size=d}E(ye,Le);function Ce(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function oe(){this.g=!0}oe.prototype.xa=function(){this.g=!1};function Be(a,d,f,v,k,N){a.info(function(){if(a.g)if(N)for(var U="",be=N.split("&"),mt=0;mt<be.length;mt++){var me=be[mt].split("=");if(1<me.length){var vt=me[0];me=me[1];var _t=vt.split("_");U=2<=_t.length&&_t[1]=="type"?U+(vt+"="+me+"&"):U+(vt+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+v+") [attempt "+k+"]: "+d+`
`+f+`
`+U})}function on(a,d,f,v,k,N,U){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+k+"]: "+d+`
`+f+`
`+N+" "+U})}function Fe(a,d,f,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+xt(a,f)+(v?" "+v:"")})}function Je(a,d){a.info(function(){return"TIMEOUT: "+d})}oe.prototype.info=function(){};function xt(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var k=v[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<k.length;U++)k[U]=""}}}}return ds(f)}catch{return d}}var Kt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ge={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yt;function Jt(){}E(Jt,hs),Jt.prototype.g=function(){return new XMLHttpRequest},Jt.prototype.i=function(){return{}},yt=new Jt;function lt(a,d,f,v){this.j=a,this.i=d,this.l=f,this.R=v||1,this.U=new On(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _r}function _r(){this.i=null,this.g="",this.h=!1}var Rt={},ft={};function Bn(a,d,f){a.L=1,a.v=Do(_n(d)),a.m=f,a.P=!0,Fn(a,null)}function Fn(a,d){a.F=Date.now(),Ke(a),a.A=_n(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Ad(f.i,"t",v),a.C=0,f=a.j.J,a.h=new _r,a.g=jd(a.j,f?d:null,!a.m),0<a.O&&(a.M=new So(g(a.Y,a,a.g),a.O)),d=a.U,f=a.g,v=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(ci[0]=k.toString()),k=ci);for(var N=0;N<k.length;N++){var U=Ie(f,k[N],v||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Z(),Be(a.i,a.u,a.A,a.l,a.R,a.m)}lt.prototype.ca=function(a){a=a.target;const d=this.M;d&&wn(a)==3?d.j():this.Y(a)},lt.prototype.Y=function(a){try{if(a==this.g)e:{const _t=wn(this.g);var d=this.g.Ba();const ys=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Nd(this.g)))){this.J||_t!=4||d==7||(d==8||0>=ys?Z(3):Z(2)),Sc(this);var f=this.g.Z();this.X=f;t:if(wr(this)){var v=Nd(this.g);a="";var k=v.length,N=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),hi(this);var U="";break t}this.h.i=new c.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(N&&d==k-1)});v.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,on(this.i,this.u,this.A,this.l,this.R,_t,f),this.o){if(this.T&&!this.K){t:{if(this.g){var be,mt=this.g;if((be=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(be)){var me=be;break t}}me=null}if(f=me)Fe(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rc(this,f);else{this.o=!1,this.s=3,ce(12),Ir(this),hi(this);break e}}if(this.P){f=!0;let Xt;for(;!this.J&&this.C<U.length;)if(Xt=Ac(this,U),Xt==ft){_t==4&&(this.s=4,ce(14),f=!1),Fe(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Rt){this.s=4,ce(15),Fe(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else Fe(this.i,this.l,Xt,null),Rc(this,Xt);if(wr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||U.length!=0||this.h.h||(this.s=1,ce(16),f=!1),this.o=this.o&&f,!f)Fe(this.i,this.l,U,"[Invalid Chunked Response]"),Ir(this),hi(this);else if(0<U.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),xc(vt),vt.M=!0,ce(11))}}else Fe(this.i,this.l,U,null),Rc(this,U);_t==4&&Ir(this),this.o&&!this.J&&(_t==4?Fd(this.j,this):(this.o=!1,Ke(this)))}else Jv(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,ce(12)):(this.s=0,ce(13)),Ir(this),hi(this)}}}catch{}finally{}};function wr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ac(a,d){var f=a.C,v=d.indexOf(`
`,f);return v==-1?ft:(f=Number(d.substring(f,v)),isNaN(f)?Rt:(v+=1,v+f>d.length?ft:(d=d.slice(v,v+f),a.C=v+f,d)))}lt.prototype.cancel=function(){this.J=!0,Ir(this)};function Ke(a){a.S=Date.now()+a.I,$n(a,a.I)}function $n(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ce(g(a.ba,a),d)}function Sc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}lt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Je(this.i,this.A),this.L!=2&&(Z(),ce(17)),Ir(this),this.s=2,hi(this)):$n(this,this.S-a)};function hi(a){a.j.G==0||a.J||Fd(a.j,a)}function Ir(a){Sc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,li(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Rc(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Pc(f.h,a))){if(!a.K&&Pc(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var k=v;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Mo(f),Vo(f);else break e;Nc(f),ce(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ce(g(f.Za,f),6e3));if(1>=gd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Er(f,11)}else if((a.K||f.g==a)&&Mo(f),!M(d))for(k=f.Da.g.parse(d),d=0;d<k.length;d++){let me=k[d];if(f.T=me[0],me=me[1],f.G==2)if(me[0]=="c"){f.K=me[1],f.ia=me[2];const vt=me[3];vt!=null&&(f.la=vt,f.j.info("VER="+f.la));const _t=me[4];_t!=null&&(f.Aa=_t,f.j.info("SVER="+f.Aa));const ys=me[5];ys!=null&&typeof ys=="number"&&0<ys&&(v=1.5*ys,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Xt=a.g;if(Xt){const Fo=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fo){var N=v.h;N.g||Fo.indexOf("spdy")==-1&&Fo.indexOf("quic")==-1&&Fo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Cc(N,N.h),N.h=null))}if(v.D){const Lc=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Lc&&(v.ya=Lc,ke(v.I,v.D,Lc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var U=a;if(v.qa=qd(v,v.J?v.ia:null,v.W),U.K){yd(v.h,U);var be=U,mt=v.L;mt&&(be.I=mt),be.B&&(Sc(be),Ke(be)),v.g=U}else Md(v);0<f.i.length&&Oo(f)}else me[0]!="stop"&&me[0]!="close"||Er(f,7);else f.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Er(f,7):Dc(f):me[0]!="noop"&&f.l&&f.l.ta(me),f.v=0)}}Z(4)}catch{}}var Vv=class{constructor(a,d){this.g=a,this.map=d}};function md(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gd(a){return a.h?1:a.g?a.g.size:0}function Pc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Cc(a,d){a.g?a.g.add(d):a.h=d}function yd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}md.prototype.cancel=function(){if(this.i=vd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return P(a.i)}function Ov(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],f=a.length,v=0;v<f;v++)d.push(a[v]);return d}d=[],f=0;for(v in a)d[f++]=a[v];return d}function Mv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const v in a)d[f++]=v;return d}}}function _d(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=Mv(a),v=Ov(a),k=v.length,N=0;N<k;N++)d.call(void 0,v[N],f&&f[N],a)}var wd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bv(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),k=null;if(0<=v){var N=a[f].substring(0,v);k=a[f].substring(v+1)}else N=a[f];d(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Tr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tr){this.h=a.h,Co(this,a.j),this.o=a.o,this.g=a.g,ko(this,a.s),this.l=a.l;var d=a.i,f=new pi;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Id(this,f),this.m=a.m}else a&&(d=String(a).match(wd))?(this.h=!1,Co(this,d[1]||"",!0),this.o=fi(d[2]||""),this.g=fi(d[3]||"",!0),ko(this,d[4]),this.l=fi(d[5]||"",!0),Id(this,d[6]||"",!0),this.m=fi(d[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}Tr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(mi(d,Td,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(mi(d,Td,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(mi(f,f.charAt(0)=="/"?Uv:$v,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",mi(f,jv)),a.join("")};function _n(a){return new Tr(a)}function Co(a,d,f){a.j=f?fi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ko(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Id(a,d,f){d instanceof pi?(a.i=d,Gv(a.i,a.h)):(f||(d=mi(d,qv)),a.i=new pi(d,a.h))}function ke(a,d,f){a.i.set(d,f)}function Do(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mi(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,Fv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Fv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Td=/[#\/\?@]/g,$v=/[#\?:]/g,Uv=/[#\?]/g,qv=/[#\?@]/g,jv=/#/g;function pi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&Bv(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=pi.prototype,n.add=function(a,d){Un(this),this.i=null,a=ps(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Ed(a,d){Un(a),d=ps(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function bd(a,d){return Un(a),d=ps(a,d),a.g.has(d)}n.forEach=function(a,d){Un(this),this.g.forEach(function(f,v){f.forEach(function(k){a.call(d,k,v,this)},this)},this)},n.na=function(){Un(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let v=0;v<d.length;v++){const k=a[v];for(let N=0;N<k.length;N++)f.push(d[v])}return f},n.V=function(a){Un(this);let d=[];if(typeof a=="string")bd(this,a)&&(d=d.concat(this.g.get(ps(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},n.set=function(a,d){return Un(this),this.i=null,a=ps(this,a),bd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Ad(a,d,f){Ed(a,d),0<f.length&&(a.i=null,a.g.set(ps(a,d),P(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var v=d[f];const N=encodeURIComponent(String(v)),U=this.V(v);for(v=0;v<U.length;v++){var k=N;U[v]!==""&&(k+="="+encodeURIComponent(String(U[v]))),a.push(k)}}return this.i=a.join("&")};function ps(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Gv(a,d){d&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(f,v){var k=v.toLowerCase();v!=k&&(Ed(this,v),Ad(this,k,f))},a)),a.j=d}function Kv(a,d){const f=new oe;if(c.Image){const v=new Image;v.onload=_(qn,f,"TestLoadImage: loaded",!0,d,v),v.onerror=_(qn,f,"TestLoadImage: error",!1,d,v),v.onabort=_(qn,f,"TestLoadImage: abort",!1,d,v),v.ontimeout=_(qn,f,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function zv(a,d){const f=new oe,v=new AbortController,k=setTimeout(()=>{v.abort(),qn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(N=>{clearTimeout(k),N.ok?qn(f,"TestPingServer: ok",!0,d):qn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),qn(f,"TestPingServer: error",!1,d)})}function qn(a,d,f,v,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),v(f)}catch{}}function Hv(){this.g=new Po}function Wv(a,d,f){const v=f||"";try{_d(a,function(k,N){let U=k;u(k)&&(U=ds(k)),d.push(v+N+"="+encodeURIComponent(U))})}catch(k){throw d.push(v+"type="+encodeURIComponent("_badmap")),k}}function No(a){this.l=a.Ub||null,this.j=a.eb||!1}E(No,hs),No.prototype.g=function(){return new xo(this.l,this.j)},No.prototype.i=function(a){return function(){return a}}({});function xo(a,d){ve.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(xo,ve),n=xo.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,yi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?gi(this):yi(this),this.readyState==3&&Sd(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,gi(this))},n.Qa=function(a){this.g&&(this.response=a,gi(this))},n.ga=function(){this.g&&gi(this)};function gi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,yi(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rd(a){let d="";return Q(a,function(f,v){d+=v,d+=":",d+=f,d+=`\r
`}),d}function kc(a,d,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=Rd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ke(a,d,f))}function ze(a){ve.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(ze,ve);var Qv=/^https?$/i,Yv=["POST","PUT"];n=ze.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yt.g(),this.v=this.o?ui(this.o):ui(yt),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(N){Pd(this,N);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var k in v)f.set(k,v[k]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const N of v.keys())f.set(N,v.get(N));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Yv,d,void 0))||v||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of f)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dd(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Pd(this,N)}};function Pd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Cd(a),Lo(a)}function Cd(a){a.A||(a.A=!0,Me(a,"complete"),Me(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Me(this,"complete"),Me(this,"abort"),Lo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lo(this,!0)),ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?kd(this):this.bb())},n.bb=function(){kd(this)};function kd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wn(a)!=4||a.Z()!=2)){if(a.u&&wn(a)==4)oi(a.Ea,0,a);else if(Me(a,"readystatechange"),wn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var v;if(v=U===0){var k=String(a.D).match(wd)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),v=!Qv.test(k?k.toLowerCase():"")}f=v}if(f)Me(a,"complete"),Me(a,"success");else{a.m=6;try{var N=2<wn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Cd(a)}}finally{Lo(a)}}}}function Lo(a,d){if(a.g){Dd(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Me(a,"ready");try{f.onreadystatechange=v}catch{}}}function Dd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Ro(d)}};function Nd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Jv(a){const d={};a=(a.g&&2<=wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(M(a[v]))continue;var f=b(a[v]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=d[k]||[];d[k]=N,N.push(f)}A(d,function(v){return v.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function xd(a){this.Aa=0,this.i=[],this.j=new oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vi("baseRetryDelayMs",5e3,a),this.cb=vi("retryDelaySeedMs",1e4,a),this.Wa=vi("forwardChannelMaxRetries",2,a),this.wa=vi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new md(a&&a.concurrentRequestLimit),this.Da=new Hv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xd.prototype,n.la=8,n.G=1,n.connect=function(a,d,f,v){ce(0),this.W=a,this.H=d||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=qd(this,null,this.W),Oo(this)};function Dc(a){if(Ld(a),a.G==3){var d=a.U++,f=_n(a.I);if(ke(f,"SID",a.K),ke(f,"RID",d),ke(f,"TYPE","terminate"),_i(a,f),d=new lt(a,a.j,d),d.L=2,d.v=Do(_n(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=d.v,f=!0),f||(d.g=jd(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ke(d)}Ud(a)}function Vo(a){a.g&&(xc(a),a.g.cancel(),a.g=null)}function Ld(a){Vo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Mo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Oo(a){if(!pd(a.h)&&!a.s){a.s=!0;var d=a.Ga;qe||as(),dt||(qe(),dt=!0),et.add(d,a),a.B=0}}function Xv(a,d){return gd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ce(g(a.Ga,a,d),$d(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new lt(this,this.j,a);let N=this.o;if(this.S&&(N?(N=w(N),S(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Od(this,k,d),f=_n(this.I),ke(f,"RID",a),ke(f,"CVER",22),this.D&&ke(f,"X-HTTP-Session-Id",this.D),_i(this,f),N&&(this.O?d="headers="+encodeURIComponent(String(Rd(N)))+"&"+d:this.m&&kc(f,this.m,N)),Cc(this.h,k),this.Ua&&ke(f,"TYPE","init"),this.P?(ke(f,"$req",d),ke(f,"SID","null"),k.T=!0,Bn(k,f,null)):Bn(k,f,d),this.G=2}}else this.G==3&&(a?Vd(this,a):this.i.length==0||pd(this.h)||Vd(this))};function Vd(a,d){var f;d?f=d.l:f=a.U++;const v=_n(a.I);ke(v,"SID",a.K),ke(v,"RID",f),ke(v,"AID",a.T),_i(a,v),a.m&&a.o&&kc(v,a.m,a.o),f=new lt(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Od(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Cc(a.h,f),Bn(f,v,d)}function _i(a,d){a.H&&Q(a.H,function(f,v){ke(d,v,f)}),a.l&&_d({},function(f,v){ke(d,v,f)})}function Od(a,d,f){f=Math.min(a.i.length,f);var v=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let N=-1;for(;;){const U=["count="+f];N==-1?0<f?(N=k[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let be=!0;for(let mt=0;mt<f;mt++){let me=k[mt].g;const vt=k[mt].map;if(me-=N,0>me)N=Math.max(0,k[mt].g-100),be=!1;else try{Wv(vt,U,"req"+me+"_")}catch{v&&v(vt)}}if(be){v=U.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,v}function Md(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;qe||as(),dt||(qe(),dt=!0),et.add(d,a),a.v=0}}function Nc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ce(g(a.Fa,a),$d(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Bd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ce(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ce(10),Vo(this),Bd(this))};function xc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Bd(a){a.g=new lt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=_n(a.qa);ke(d,"RID","rpc"),ke(d,"SID",a.K),ke(d,"AID",a.T),ke(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(d,"TO",a.ja),ke(d,"TYPE","xmlhttp"),_i(a,d),a.m&&a.o&&kc(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Do(_n(d)),f.m=null,f.P=!0,Fn(f,a)}n.Za=function(){this.C!=null&&(this.C=null,Vo(this),Nc(this),ce(19))};function Mo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Fd(a,d){var f=null;if(a.g==d){Mo(a),xc(a),a.g=null;var v=2}else if(Pc(a.h,d))f=d.D,yd(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var k=a.B;v=H(),Me(v,new ye(v,f)),Oo(a)}else Md(a);else if(k=d.s,k==3||k==0&&0<d.X||!(v==1&&Xv(a,d)||v==2&&Nc(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),k){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function $d(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function Er(a,d){if(a.j.info("Error code "+d),d==2){var f=g(a.fb,a),v=a.Xa;const k=!v;v=new Tr(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Co(v,"https"),Do(v),k?Kv(v.toString(),f):zv(v.toString(),f)}else ce(2);a.G=0,a.l&&a.l.sa(d),Ud(a),Ld(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function Ud(a){if(a.G=0,a.ka=[],a.l){const d=vd(a.h);(d.length!=0||a.i.length!=0)&&(C(a.ka,d),C(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function qd(a,d,f){var v=f instanceof Tr?_n(f):new Tr(f);if(v.g!="")d&&(v.g=d+"."+v.g),ko(v,v.s);else{var k=c.location;v=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var N=new Tr(null);v&&Co(N,v),d&&(N.g=d),k&&ko(N,k),f&&(N.l=f),v=N}return f=a.D,d=a.ya,f&&d&&ke(v,f,d),ke(v,"VER",a.la),_i(a,v),v}function jd(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new ze(new No({eb:f})):new ze(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gd(){}n=Gd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Bo(){}Bo.prototype.g=function(a,d){return new Bt(a,d)};function Bt(a,d){ve.call(this),this.g=new xd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!M(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!M(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new gs(this)}E(Bt,ve),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Dc(this.g)},Bt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ds(a),a=f);d.i.push(new Vv(d.Ya++,a)),d.G==3&&Oo(d)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Dc(this.g),delete this.g,Bt.aa.N.call(this)};function Kd(a){fs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}E(Kd,fs);function zd(){ms.call(this),this.status=1}E(zd,ms);function gs(a){this.g=a}E(gs,Gd),gs.prototype.ua=function(){Me(this.g,"a")},gs.prototype.ta=function(a){Me(this.g,new Kd(a))},gs.prototype.sa=function(a){Me(this.g,new zd)},gs.prototype.ra=function(){Me(this.g,"b")},Bo.prototype.createWebChannel=Bo.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,np=function(){return new Bo},tp=function(){return H()},ep=O,hl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kt.NO_ERROR=0,Kt.TIMEOUT=8,Kt.HTTP_ERROR=6,Zo=Kt,Ge.COMPLETE="complete",Zm=Ge,di.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",ve.prototype.listen=ve.prototype.K,Ci=di,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,Xm=ze}).apply(typeof Uo<"u"?Uo:typeof self<"u"?self:typeof window<"u"?window:{});const Eh="@firebase/firestore";/**
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
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let Ys="10.14.0";/**
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
 */const $r=new ql("@firebase/firestore");function Ts(){return $r.logLevel}function F(n,...e){if($r.logLevel<=ue.DEBUG){const t=e.map(eu);$r.debug(`Firestore (${Ys}): ${n}`,...t)}}function Xe(n,...e){if($r.logLevel<=ue.ERROR){const t=e.map(eu);$r.error(`Firestore (${Ys}): ${n}`,...t)}}function Qi(n,...e){if($r.logLevel<=ue.WARN){const t=e.map(eu);$r.warn(`Firestore (${Ys}): ${n}`,...t)}}function eu(n){if(typeof n=="string")return n;try{/**
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
 */function J(n="Unexpected state"){const e=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: `+n;throw Xe(e),new Error(e)}function ee(n,e){n||J()}function X(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class HT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(It.UNAUTHENTICATED))}shutdown(){}}class QT{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new HT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new It(e)}}class YT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class JT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new YT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ee(this.o===void 0);const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string"),this.R=t.token,new XT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class rp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=eE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function Ls(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function sp(n){return n+"\0"}/**
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
 */class Ue{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ue(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ue(0,0))}static max(){return new te(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Yi{constructor(e,t,r){t===void 0?t=0:t>e.length&&J(),r===void 0?r=e.length-t:r>e.length-t&&J(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Yi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ge extends Yi{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const tE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Yi{construct(e,t,r){return new $e(e,t,r)}static isValidIdentifier(e){return tE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(t)}static emptyPath(){return new $e([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ge.fromString(e))}static fromName(e){return new G(ge.fromString(e).popFirst(5))}static empty(){return new G(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ge(e.slice()))}}/**
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
 */class Ta{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function fl(n){return n.fields.find(e=>e.kind===2)}function Sr(n){return n.fields.filter(e=>e.kind!==2)}Ta.UNKNOWN_ID=-1;class ea{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ji{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ji(0,qt.min())}}function ip(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Ue(t+1,0):new Ue(t,r));return new qt(s,G.empty(),e)}function op(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new qt(te.min(),G.empty(),-1)}static max(){return new qt(te.max(),G.empty(),-1)}}function tu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
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
 */const ap="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function dr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==ap)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
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
 */class za{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new pn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Bi(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=nu(r.target.error);this.V.reject(new Bi(e,s))}}static open(e,t,r,s){try{return new za(t,e.transaction(s,r))}catch(i){throw new Bi(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(F("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new rE(t)}}class tr{constructor(e,t,r){this.name=e,this.version=t,this.p=r,tr.S(ot())===12.2&&Xe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return F("SimpleDb","Removing database:",e),Rr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ul())return!1;if(tr.v())return!0;const e=ot(),t=tr.S(e),r=0<t&&t<10,s=lp(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(F("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Bi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new q(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new q(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Bi(e,o))},s.onupgradeneeded=i=>{F("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{F("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=za.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next(u=>(c.g(),u)).catch(u=>(c.abort(u),D.reject(u))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,u=l.name!=="FirebaseError"&&o<3;if(F("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function lp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class nE{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Rr(this.B.delete())}}class Bi extends q{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function hr(n){return n.name==="IndexedDbTransactionError"}class rE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(F("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(F("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Rr(r)}add(e){return F("SimpleDb","ADD",this.store.name,e,e),Rr(this.store.add(e))}get(e){return Rr(this.store.get(e)).next(t=>(t===void 0&&(t=null),F("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return F("SimpleDb","DELETE",this.store.name,e),Rr(this.store.delete(e))}count(){return F("SimpleDb","COUNT",this.store.name),Rr(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new D((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new D((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){F("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new D((r,s)=>{t.onerror=i=>{const o=nu(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new D((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new nE(c),u=t(c.primaryKey,c.value,l);if(u instanceof D){const h=u.catch(p=>(l.done(),D.reject(p)));r.push(h)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>D.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Rr(n){return new D((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=nu(r.target.error);t(s)}})}let bh=!1;function nu(n){const e=tr.S(ot());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new q("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bh||(bh=!0,setTimeout(()=>{throw r},0)),r}}return n}class sE{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){F("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{F("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){hr(t)?F("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await dr(t)}await this.X(6e4)})}}class iE{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return D.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return F("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(F("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=op(i);tu(o,r)>0&&(r=o)}),new qt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Vt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vt.oe=-1;function Ha(n){return n==null}function Xi(n){return n===0&&1/n==-1/0}function up(n){return typeof n=="number"&&Number.isInteger(n)&&!Xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function kt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ah(e)),e=oE(n.get(t),e);return Ah(e)}function oE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Ah(n){return n+""}function dn(n){const e=n.length;if(ee(e>=2),e===2)return ee(n.charAt(0)===""&&n.charAt(1)===""),ge.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&J(),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:J()}i=o+2}return new ge(r)}/**
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
 */const Sh=["userId","batchId"];/**
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
 */function ta(n,e){return[n,kt(e)]}function dp(n,e,t){return[n,kt(e),t]}const aE={},cE=["prefixPath","collectionGroup","readTime","documentId"],lE=["prefixPath","collectionGroup","documentId"],uE=["collectionGroup","readTime","prefixPath","documentId"],dE=["canonicalId","targetId"],hE=["targetId","path"],fE=["path","targetId"],mE=["collectionId","parent"],pE=["indexId","uid"],gE=["uid","sequenceNumber"],yE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vE=["indexId","uid","orderedDocumentKey"],_E=["userId","collectionPath","documentId"],wE=["userId","collectionPath","largestBatchId"],IE=["userId","collectionGroup","largestBatchId"],hp=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],TE=[...hp,"documentOverlays"],fp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],mp=fp,ru=[...mp,"indexConfiguration","indexState","indexEntries"],EE=ru,bE=[...ru,"globals"];/**
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
 */class ml extends cp{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function at(n,e){const t=X(n);return tr.F(t._e,e)}/**
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
 */function Rh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ts(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function pp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||pt.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qo(this.root,e,this.comparator,!0)}}class qo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new pt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,t,r,s,i){return this}insert(e,t,r){return new pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ph(this.data.getIterator())}getIteratorFrom(e){return new Ph(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class Ph{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function vs(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Ot([])}unionWith(e){let t=new Ee($e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ls(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class gp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gp("Invalid base64 string: "+i):i}}(e);return new Ze(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const AE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(n){if(ee(!!n),typeof n=="string"){let e=0;const t=AE.exec(n);if(ee(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(n.seconds),nanos:xe(n.nanos)}}function xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sr(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */function su(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function iu(n){const e=n.mapValue.fields.__previous_value__;return su(e)?iu(e):e}function Zi(n){const e=kn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class SE{constructor(e,t,r,s,i,o,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Ur{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Zn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},na={nullValue:"NULL_VALUE"};function qr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?su(n)?4:yp(n)?9007199254740991:Wa(n)?10:11:J()}function yn(n,e){if(n===e)return!0;const t=qr(n);if(t!==qr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zi(n).isEqual(Zi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kn(s.timestampValue),c=kn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return sr(s.bytesValue).isEqual(sr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=xe(s.doubleValue),c=xe(i.doubleValue);return o===c?Xi(o)===Xi(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Ls(n.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Rh(o)!==Rh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yn(o[l],c[l])))return!1;return!0}(n,e);default:return J()}}function eo(n,e){return(n.values||[]).find(t=>yn(t,e))!==void 0}function ir(n,e){if(n===e)return 0;const t=qr(n),r=qr(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=xe(i.integerValue||i.doubleValue),l=xe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Ch(n.timestampValue,e.timestampValue);case 4:return Ch(Zi(n),Zi(e));case 5:return se(n.stringValue,e.stringValue);case 6:return function(i,o){const c=sr(i),l=sr(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=se(c[u],l[u]);if(h!==0)return h}return se(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=se(xe(i.latitude),xe(o.latitude));return c!==0?c:se(xe(i.longitude),xe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return kh(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,h;const p=i.fields||{},g=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,E=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=se(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:kh(_,E)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Zn.mapValue&&o===Zn.mapValue)return 0;if(i===Zn.mapValue)return 1;if(o===Zn.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const g=se(l[p],h[p]);if(g!==0)return g;const _=ir(c[l[p]],u[h[p]]);if(_!==0)return _}return se(l.length,h.length)}(n.mapValue,e.mapValue);default:throw J()}}function Ch(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=kn(n),r=kn(e),s=se(t.seconds,r.seconds);return s!==0?s:se(t.nanos,r.nanos)}function kh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ir(t[s],r[s]);if(i)return i}return se(t.length,r.length)}function Vs(n){return pl(n)}function pl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=kn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return sr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return G.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=pl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pl(t.fields[o])}`;return s+"}"}(n.mapValue):J()}function to(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gl(n){return!!n&&"integerValue"in n}function no(n){return!!n&&"arrayValue"in n}function Dh(n){return!!n&&"nullValue"in n}function Nh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ra(n){return!!n&&"mapValue"in n}function Wa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Fi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ts(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Fi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const vp={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function RE(n){return"nullValue"in n?na:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?to(Ur.empty(),G.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Wa(n)?vp:{mapValue:{}}:J()}function PE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?to(Ur.empty(),G.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?vp:"mapValue"in n?Wa(n)?{mapValue:{}}:Zn:J()}function xh(n,e){const t=ir(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Lh(n,e){const t=ir(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ra(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fi(t)}setAll(e){let t=$e.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Fi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ra(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ra(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ts(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(Fi(this.value))}}function _p(n){const e=[];return ts(n.fields,(t,r)=>{const s=new $e([t]);if(ra(r)){const i=_p(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
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
 */class He{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new He(e,0,te.min(),te.min(),te.min(),Tt.empty(),0)}static newFoundDocument(e,t,r,s){return new He(e,1,t,te.min(),r,s,0)}static newNoDocument(e,t){return new He(e,2,t,te.min(),te.min(),Tt.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,te.min(),te.min(),Tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Os{constructor(e,t){this.position=e,this.inclusive=t}}function Vh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),t.key):r=ir(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ea{constructor(e,t="asc"){this.field=e,this.dir=t}}function CE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class wp{}class de extends wp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new kE(e,t,r):t==="array-contains"?new xE(e,r):t==="in"?new Sp(e,r):t==="not-in"?new LE(e,r):t==="array-contains-any"?new VE(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new DE(e,r):new NE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ir(t,this.value)):t!==null&&qr(this.value)===qr(t)&&this.matchesComparison(ir(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _e extends wp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new _e(e,t)}matches(e){return Ms(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ms(n){return n.op==="and"}function yl(n){return n.op==="or"}function ou(n){return Ip(n)&&Ms(n)}function Ip(n){for(const e of n.filters)if(e instanceof _e)return!1;return!0}function vl(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+Vs(n.value);if(ou(n))return n.filters.map(e=>vl(e)).join(",");{const e=n.filters.map(t=>vl(t)).join(",");return`${n.op}(${e})`}}function Tp(n,e){return n instanceof de?function(r,s){return s instanceof de&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(n,e):n instanceof _e?function(r,s){return s instanceof _e&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Tp(o,s.filters[c]),!0):!1}(n,e):void J()}function Ep(n,e){const t=n.filters.concat(e);return _e.create(t,n.op)}function bp(n){return n instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${Vs(t.value)}`}(n):n instanceof _e?function(t){return t.op.toString()+" {"+t.getFilters().map(bp).join(" ,")+"}"}(n):"Filter"}class kE extends de{constructor(e,t,r){super(e,t,r),this.key=G.fromName(r.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class DE extends de{constructor(e,t){super(e,"in",t),this.keys=Ap("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class NE extends de{constructor(e,t){super(e,"not-in",t),this.keys=Ap("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ap(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>G.fromName(r.referenceValue))}class xE extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return no(t)&&eo(t.arrayValue,this.value)}}class Sp extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&eo(this.value.arrayValue,t)}}class LE extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!eo(this.value.arrayValue,t)}}class VE extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!no(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>eo(this.value.arrayValue,r))}}/**
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
 */class OE{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function _l(n,e=null,t=[],r=[],s=null,i=null,o=null){return new OE(n,e,t,r,s,i,o)}function jr(n){const e=X(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ha(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Vs(r)).join(",")),e.ue=t}return e.ue}function po(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Tp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oh(n.startAt,e.startAt)&&Oh(n.endAt,e.endAt)}function ba(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Aa(n,e){return n.filters.filter(t=>t instanceof de&&t.field.isEqual(e))}function Mh(n,e,t){let r=na,s=!0;for(const i of Aa(n,e)){let o=na,c=!0;switch(i.op){case"<":case"<=":o=RE(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=na}xh({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];xh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Bh(n,e,t){let r=Zn,s=!0;for(const i of Aa(n,e)){let o=Zn,c=!0;switch(i.op){case">=":case">":o=PE(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Zn}Lh({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Lh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Js{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Rp(n,e,t,r,s,i,o,c){return new Js(n,e,t,r,s,i,o,c)}function Qa(n){return new Js(n)}function Fh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pp(n){return n.collectionGroup!==null}function $i(n){const e=X(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ee($e.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ea(i,r))}),t.has($e.keyField().canonicalString())||e.ce.push(new Ea($e.keyField(),r))}return e.ce}function Ut(n){const e=X(n);return e.le||(e.le=ME(e,$i(n))),e.le}function ME(n,e){if(n.limitType==="F")return _l(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ea(s.field,i)});const t=n.endAt?new Os(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Os(n.startAt.position,n.startAt.inclusive):null;return _l(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function wl(n,e){const t=n.filters.concat([e]);return new Js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Il(n,e,t){return new Js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ya(n,e){return po(Ut(n),Ut(e))&&n.limitType===e.limitType}function Cp(n){return`${jr(Ut(n))}|lt:${n.limitType}`}function Es(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>bp(s)).join(", ")}]`),Ha(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Vs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Vs(s)).join(",")),`Target(${r})`}(Ut(n))}; limitType=${n.limitType})`}function go(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of $i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Vh(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,$i(r),s)||r.endAt&&!function(o,c,l){const u=Vh(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,$i(r),s))}(n,e)}function kp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dp(n){return(e,t)=>{let r=!1;for(const s of $i(n)){const i=BE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BE(n,e,t){const r=n.field.isKeyField()?G.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ir(l,u):J()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class fr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return pp(this.inner)}size(){return this.innerSize}}/**
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
 */const FE=new Se(G.comparator);function Ft(){return FE}const Np=new Se(G.comparator);function ki(...n){let e=Np;for(const t of n)e=e.insert(t.key,t);return e}function xp(n){let e=Np;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function hn(){return Ui()}function Lp(){return Ui()}function Ui(){return new fr(n=>n.toString(),(n,e)=>n.isEqual(e))}const $E=new Se(G.comparator),UE=new Ee(G.comparator);function le(...n){let e=UE;for(const t of n)e=e.add(t);return e}const qE=new Ee(se);function au(){return qE}/**
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
 */function cu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xi(e)?"-0":e}}function Vp(n){return{integerValue:""+n}}function jE(n,e){return up(e)?Vp(e):cu(n,e)}/**
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
 */class Ja{constructor(){this._=void 0}}function GE(n,e,t){return n instanceof Bs?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&su(i)&&(i=iu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Gr?Mp(n,e):n instanceof Fs?Bp(n,e):function(s,i){const o=Op(s,i),c=$h(o)+$h(s.Pe);return gl(o)&&gl(s.Pe)?Vp(c):cu(s.serializer,c)}(n,e)}function KE(n,e,t){return n instanceof Gr?Mp(n,e):n instanceof Fs?Bp(n,e):t}function Op(n,e){return n instanceof ro?function(r){return gl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Bs extends Ja{}class Gr extends Ja{constructor(e){super(),this.elements=e}}function Mp(n,e){const t=Fp(e);for(const r of n.elements)t.some(s=>yn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Fs extends Ja{constructor(e){super(),this.elements=e}}function Bp(n,e){let t=Fp(e);for(const r of n.elements)t=t.filter(s=>!yn(s,r));return{arrayValue:{values:t}}}class ro extends Ja{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function $h(n){return xe(n.integerValue||n.doubleValue)}function Fp(n){return no(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class lu{constructor(e,t){this.field=e,this.transform=t}}function zE(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Gr&&s instanceof Gr||r instanceof Fs&&s instanceof Fs?Ls(r.elements,s.elements,yn):r instanceof ro&&s instanceof ro?yn(r.Pe,s.Pe):r instanceof Bs&&s instanceof Bs}(n.transform,e.transform)}class HE{constructor(e,t){this.version=e,this.transformResults=t}}class Et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xa{}function $p(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Za(n.key,Et.none()):new Xs(n.key,n.data,Et.none());{const t=n.data,r=Tt.empty();let s=new Ee($e.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new xn(n.key,r,new Ot(s.toArray()),Et.none())}}function WE(n,e,t){n instanceof Xs?function(s,i,o){const c=s.value.clone(),l=qh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof xn?function(s,i,o){if(!sa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=qh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Up(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function qi(n,e,t,r){return n instanceof Xs?function(i,o,c,l){if(!sa(i.precondition,o))return c;const u=i.value.clone(),h=jh(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof xn?function(i,o,c,l){if(!sa(i.precondition,o))return c;const u=jh(i.fieldTransforms,l,o),h=o.data;return h.setAll(Up(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return sa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function QE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Op(r.transform,s||null);i!=null&&(t===null&&(t=Tt.empty()),t.set(r.field,i))}return t||null}function Uh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ls(r,s,(i,o)=>zE(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xs extends Xa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xn extends Xa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Up(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function qh(n,e,t){const r=new Map;ee(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,KE(o,c,t[s]))}return r}function jh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,GE(i,o,e))}return r}class Za extends Xa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qp extends Xa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uu{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&WE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=qi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=qi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Lp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=$p(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),le())}isEqual(e){return this.batchId===e.batchId&&Ls(this.mutations,e.mutations,(t,r)=>Uh(t,r))&&Ls(this.baseMutations,e.baseMutations,(t,r)=>Uh(t,r))}}class du{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ee(e.mutations.length===r.length);let s=function(){return $E}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new du(e,t,r,s)}}/**
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
 */class hu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class YE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var tt,fe;function JE(n){switch(n){default:return J();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function jp(n){if(n===void 0)return Xe("GRPC error has no .code"),V.UNKNOWN;switch(n){case tt.OK:return V.OK;case tt.CANCELLED:return V.CANCELLED;case tt.UNKNOWN:return V.UNKNOWN;case tt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case tt.INTERNAL:return V.INTERNAL;case tt.UNAVAILABLE:return V.UNAVAILABLE;case tt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case tt.NOT_FOUND:return V.NOT_FOUND;case tt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case tt.ABORTED:return V.ABORTED;case tt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case tt.DATA_LOSS:return V.DATA_LOSS;default:return J()}}(fe=tt||(tt={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function XE(){return new TextEncoder}/**
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
 */const ZE=new xr([4294967295,4294967295],0);function Gh(n){const e=XE().encode(n),t=new Jm;return t.update(e),new Uint8Array(t.digest())}function Kh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xr([t,r],0),new xr([s,i],0)]}class fu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Di(`Invalid padding: ${t}`);if(r<0)throw new Di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Di(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Di(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=xr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(xr.fromNumber(r)));return s.compare(ZE)===1&&(s=new xr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Gh(e),[r,s]=Kh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fu(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Gh(e),[r,s]=Kh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,vo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yo(te.min(),s,new Se(se),Ft(),le())}}class vo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new vo(r,t,le(),le(),le())}}/**
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
 */class ia{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Gp{constructor(e,t){this.targetId=e,this.me=t}}class Kp{constructor(e,t,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class zh{constructor(){this.fe=0,this.ge=Wh(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),t=le(),r=le();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:J()}}),new vo(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Wh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class eb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ft(),this.qe=Hh(),this.Qe=new Se(se)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(ba(i))if(r===0){const o=new G(i.path);this.Ue(t,o,He.newNoDocument(o,te.min()))}else ee(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=sr(r).toUint8Array()}catch(l){if(l instanceof gp)return Qi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fu(o,s,i)}catch(l){return Qi(l instanceof Di?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&ba(c.target)){const l=new G(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,He.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=le();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new yo(e,t,this.Qe,this.ke,r);return this.ke=Ft(),this.qe=Hh(),this.Qe=new Se(se),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new zh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ee(se),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Hh(){return new Se(G.comparator)}function Wh(){return new Se(G.comparator)}const tb={asc:"ASCENDING",desc:"DESCENDING"},nb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rb={and:"AND",or:"OR"};class sb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tl(n,e){return n.useProto3Json||Ha(e)?e:{value:e}}function $s(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ib(n,e){return $s(n,e.toTimestamp())}function Dt(n){return ee(!!n),te.fromTimestamp(function(t){const r=kn(t);return new Ue(r.seconds,r.nanos)}(n))}function mu(n,e){return El(n,e).canonicalString()}function El(n,e){const t=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Hp(n){const e=ge.fromString(n);return ee(ng(e)),e}function Sa(n,e){return mu(n.databaseId,e.path)}function Lr(n,e){const t=Hp(e);if(t.get(1)!==n.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(Yp(t))}function Wp(n,e){return mu(n.databaseId,e)}function Qp(n){const e=Hp(n);return e.length===4?ge.emptyPath():Yp(e)}function bl(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yp(n){return ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Qh(n,e,t){return{name:Sa(n,e),fields:t.value.mapValue.fields}}function ob(n,e,t){const r=Lr(n,e.name),s=Dt(e.updateTime),i=e.createTime?Dt(e.createTime):te.min(),o=new Tt({mapValue:{fields:e.fields}}),c=He.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function ab(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ee(h===void 0||typeof h=="string"),Ze.fromBase64String(h||"")):(ee(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ze.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?V.UNKNOWN:jp(u.code);return new q(h,u.message||"")}(o);t=new Kp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lr(n,r.document.name),i=Dt(r.document.updateTime),o=r.document.createTime?Dt(r.document.createTime):te.min(),c=new Tt({mapValue:{fields:r.document.fields}}),l=He.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];t=new ia(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Lr(n,r.document),i=r.readTime?Dt(r.readTime):te.min(),o=He.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ia([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Lr(n,r.document),i=r.removedTargetIds||[];t=new ia([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new YE(s,i),c=r.targetId;t=new Gp(c,o)}}return t}function Ra(n,e){let t;if(e instanceof Xs)t={update:Qh(n,e.key,e.value)};else if(e instanceof Za)t={delete:Sa(n,e.key)};else if(e instanceof xn)t={update:Qh(n,e.key,e.data),updateMask:fb(e.fieldMask)};else{if(!(e instanceof qp))return J();t={verify:Sa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Bs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Gr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ro)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw J()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ib(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(n,e.precondition)),t}function Al(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Et.updateTime(Dt(i.updateTime)):i.exists!==void 0?Et.exists(i.exists):Et.none()}(e.currentDocument):Et.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)ee(c.setToServerValue==="REQUEST_TIME"),l=new Bs;else if("appendMissingElements"in c){const h=c.appendMissingElements.values||[];l=new Gr(h)}else if("removeAllFromArray"in c){const h=c.removeAllFromArray.values||[];l=new Fs(h)}else"increment"in c?l=new ro(o,c.increment):J();const u=$e.fromServerFormat(c.fieldPath);return new lu(u,l)}(n,s)):[];if(e.update){e.update.name;const s=Lr(n,e.update.name),i=new Tt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Ot(u.map(h=>$e.fromServerFormat(h)))}(e.updateMask);return new xn(s,i,o,t,r)}return new Xs(s,i,t,r)}if(e.delete){const s=Lr(n,e.delete);return new Za(s,t)}if(e.verify){const s=Lr(n,e.verify);return new qp(s,t)}return J()}function cb(n,e){return n&&n.length>0?(ee(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Dt(s.updateTime):Dt(i);return o.isEqual(te.min())&&(o=Dt(i)),new HE(o,s.transformResults||[])}(t,e))):[]}function Jp(n,e){return{documents:[Wp(n,e.path)]}}function Xp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Wp(n,s);const i=function(u){if(u.length!==0)return tg(_e.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:bs(g.field),direction:ub(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Tl(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:s}}function Zp(n){let e=Qp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ee(r===1);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(p){const g=eg(p);return g instanceof _e&&ou(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(E){return new Ea(As(E.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Ha(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new Os(_,g)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new Os(_,g)}(t.endAt)),Rp(e,s,o,i,c,"F",l,u)}function lb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function eg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=As(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=As(t.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=As(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(t.unaryFilter.field);return de.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(n):n.fieldFilter!==void 0?function(t){return de.create(As(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return _e.create(t.compositeFilter.filters.map(r=>eg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(t.compositeFilter.op))}(n):J()}function ub(n){return tb[n]}function db(n){return nb[n]}function hb(n){return rb[n]}function bs(n){return{fieldPath:n.canonicalString()}}function As(n){return $e.fromServerFormat(n.fieldPath)}function tg(n){return n instanceof de?function(t){if(t.op==="=="){if(Nh(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NAN"}};if(Dh(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nh(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NOT_NAN"}};if(Dh(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(t.field),op:db(t.op),value:t.value}}}(n):n instanceof _e?function(t){const r=t.getFilters().map(s=>tg(s));return r.length===1?r[0]:{compositeFilter:{op:hb(t.op),filters:r}}}(n):J()}function fb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ng(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class An{constructor(e,t,r,s,i=te.min(),o=te.min(),c=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new An(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rg{constructor(e){this.ct=e}}function mb(n,e){let t;if(e.document)t=ob(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),s=zr(e.noDocument.readTime);t=He.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return J();{const r=G.fromSegments(e.unknownDocument.path),s=zr(e.unknownDocument.version);t=He.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Ue(s[0],s[1]);return te.fromTimestamp(i)}(e.readTime)),t}function Yh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Pa(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Sa(i,o.key),fields:o.data.value.mapValue.fields,updateTime:$s(i,o.version.toTimestamp()),createTime:$s(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Kr(e.version)};else{if(!e.isUnknownDocument())return J();r.unknownDocument={path:t.path.toArray(),version:Kr(e.version)}}return r}function Pa(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Kr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function zr(n){const e=new Ue(n.seconds,n.nanoseconds);return te.fromTimestamp(e)}function Pr(n,e){const t=(e.baseMutations||[]).map(i=>Al(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Al(n.ct,i)),s=Ue.fromMillis(e.localWriteTimeMs);return new uu(e.batchId,s,t,r)}function Ni(n){const e=zr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?zr(n.lastLimboFreeSnapshotVersion):te.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return ee(i.documents.length===1),Ut(Qa(Qp(i.documents[0])))}(n.query):function(i){return Ut(Zp(i))}(n.query),new An(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ze.fromBase64String(n.resumeToken))}function sg(n,e){const t=Kr(e.snapshotVersion),r=Kr(e.lastLimboFreeSnapshotVersion);let s;s=ba(e.target)?Jp(n.ct,e.target):Xp(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:jr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function ig(n){const e=Zp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Il(e,e.limit,"L"):e}function jc(n,e){return new hu(e.largestBatchId,Al(n.ct,e.overlayMutation))}function Jh(n,e){const t=e.path.lastSegment();return[n,kt(e.path.popLast()),t]}function Xh(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Kr(r.readTime),documentKey:kt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class pb{getBundleMetadata(e,t){return Zh(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:zr(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Zh(e).put(function(s){return{bundleId:s.id,createTime:Kr(Dt(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return ef(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:ig(i.bundledQuery),readTime:zr(i.readTime)}}(r)})}saveNamedQuery(e,t){return ef(e).put(function(s){return{name:s.name,readTime:Kr(Dt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Zh(n){return at(n,"bundles")}function ef(n){return at(n,"namedQueries")}/**
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
 */class ec{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new ec(e,r)}getOverlay(e,t){return wi(e).get(Jh(this.userId,t)).next(r=>r?jc(this.serializer,r):null)}getOverlays(e,t){const r=hn();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new hu(t,o);s.push(this.ht(e,c))}),D.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(kt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(wi(e).j("collectionPathOverlayIndex",c))}),D.waitFor(i)}getOverlaysForCollection(e,t,r){const s=hn(),i=kt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return wi(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const u=jc(this.serializer,l);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=hn();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return wi(e).J({index:"collectionGroupOverlayIndex",range:c},(l,u,h)=>{const p=jc(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>i)}ht(e,t){return wi(e).put(function(s,i,o){const[c,l,u]=Jh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ra(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function wi(n){return at(n,"documentOverlays")}/**
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
 */class gb{Pt(e){return at(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ze.fromUint8Array(r):Ze.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Cr{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(xe(e.integerValue));else if("doubleValue"in e){const r=xe(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Xi(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=kn(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(sr(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?yp(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Wa(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):J()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(xe(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),G.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Cr.vt=new Cr;function yb(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function tf(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=yb(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class vb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=tf(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=tf(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class _b{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class wb{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Ii{constructor(){this.jt=new vb,this.Ht=new _b(this.jt),this.Jt=new wb(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class kr{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new kr(this.indexId,this.documentKey,this.arrayValue,r)}}function Gn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=nf(n.arrayValue,e.arrayValue),t!==0?t:(t=nf(n.directionalValue,e.directionalValue),t!==0?t:G.comparator(n.documentKey,e.documentKey)))}function nf(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class rf{constructor(e){this.Xt=new Ee((t,r)=>$e.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(ee(e.collectionGroup===this.collectionId),this.nn)return!1;const t=fl(e);if(t!==void 0&&!this.sn(t))return!1;const r=Sr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new Ee($e.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new ea(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new ea(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new ea(r.field,r.dir==="asc"?0:1)));return new Ta(Ta.UNKNOWN_ID,this.collectionId,t,Ji.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function og(n){var e,t;if(ee(n instanceof de||n instanceof _e),n instanceof de){if(n instanceof Sp){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>de.create(n.field,"==",i)))||[];return _e.create(s,"or")}return n}const r=n.filters.map(s=>og(s));return _e.create(r,n.op)}function Ib(n){if(n.getFilters().length===0)return[];const e=Pl(og(n));return ee(ag(e)),Sl(e)||Rl(e)?[e]:e.getFilters()}function Sl(n){return n instanceof de}function Rl(n){return n instanceof _e&&ou(n)}function ag(n){return Sl(n)||Rl(n)||function(t){if(t instanceof _e&&yl(t)){for(const r of t.getFilters())if(!Sl(r)&&!Rl(r))return!1;return!0}return!1}(n)}function Pl(n){if(ee(n instanceof de||n instanceof _e),n instanceof de)return n;if(n.filters.length===1)return Pl(n.filters[0]);const e=n.filters.map(r=>Pl(r));let t=_e.create(e,n.op);return t=Ca(t),ag(t)?t:(ee(t instanceof _e),ee(Ms(t)),ee(t.filters.length>1),t.filters.reduce((r,s)=>pu(r,s)))}function pu(n,e){let t;return ee(n instanceof de||n instanceof _e),ee(e instanceof de||e instanceof _e),t=n instanceof de?e instanceof de?function(s,i){return _e.create([s,i],"and")}(n,e):sf(n,e):e instanceof de?sf(e,n):function(s,i){if(ee(s.filters.length>0&&i.filters.length>0),Ms(s)&&Ms(i))return Ep(s,i.getFilters());const o=yl(s)?s:i,c=yl(s)?i:s,l=o.filters.map(u=>pu(u,c));return _e.create(l,"or")}(n,e),Ca(t)}function sf(n,e){if(Ms(e))return Ep(e,n.getFilters());{const t=e.filters.map(r=>pu(n,r));return _e.create(t,"or")}}function Ca(n){if(ee(n instanceof de||n instanceof _e),n instanceof de)return n;const e=n.getFilters();if(e.length===1)return Ca(e[0]);if(Ip(n))return n;const t=e.map(s=>Ca(s)),r=[];return t.forEach(s=>{s instanceof de?r.push(s):s instanceof _e&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:_e.create(r,n.op)}/**
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
 */class Tb{constructor(){this.un=new gu}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(qt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class gu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ee(ge.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ee(ge.comparator)).toArray()}}/**
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
 */const jo=new Uint8Array(0);class Eb{constructor(e,t){this.databaseId=t,this.cn=new gu,this.ln=new fr(r=>jr(r),(r,s)=>po(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:kt(s)};return of(e).put(i)}return D.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[sp(t),""],!1,!0);return of(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(dn(o.parent))}return r})}addFieldIndex(e,t){const r=Ti(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=ws(e);return i.next(c=>{o.put(Xh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Ti(e),s=ws(e),i=_s(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ti(e),r=_s(e),s=ws(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return D.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new rf(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=_s(e);let s=!0;const i=new Map;return D.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=le();const c=[];return D.forEach(i,(l,u)=>{F("IndexedDbIndexManager",`Using index ${function(x){return`id=${x.indexId}|cg=${x.collectionGroup}|f=${x.fields.map(B=>`${B.fieldPath}:${B.kind}`).join(",")}`}(l)} to execute ${jr(t)}`);const h=function(x,B){const z=fl(B);if(z===void 0)return null;for(const Q of Aa(x,z.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(u,l),p=function(x,B){const z=new Map;for(const Q of Sr(B))for(const A of Aa(x,Q.fieldPath))switch(A.op){case"==":case"in":z.set(Q.fieldPath.canonicalString(),A.value);break;case"not-in":case"!=":return z.set(Q.fieldPath.canonicalString(),A.value),Array.from(z.values())}return null}(u,l),g=function(x,B){const z=[];let Q=!0;for(const A of Sr(B)){const w=A.kind===0?Mh(x,A.fieldPath,x.startAt):Bh(x,A.fieldPath,x.startAt);z.push(w.value),Q&&(Q=w.inclusive)}return new Os(z,Q)}(u,l),_=function(x,B){const z=[];let Q=!0;for(const A of Sr(B)){const w=A.kind===0?Bh(x,A.fieldPath,x.endAt):Mh(x,A.fieldPath,x.endAt);z.push(w.value),Q&&(Q=w.inclusive)}return new Os(z,Q)}(u,l),E=this.In(l,u,g),P=this.In(l,u,_),C=this.Tn(l,u,p),L=this.En(l.indexId,h,E,g.inclusive,P,_.inclusive,C);return D.forEach(L,M=>r.G(M,t.limit).next(x=>{x.forEach(B=>{const z=G.fromSegments(B.documentKey);o.has(z)||(o=o.add(z),c.push(z))})}))}).next(()=>c)}return D.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=Ib(_e.create(e.filters,"and")).map(r=>_l(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),h=[];for(let p=0;p<l;++p){const g=t?this.dn(t[p/u]):jo,_=this.An(e,g,r[p%u],s),E=this.Rn(e,g,i[p%u],o),P=c.map(C=>this.An(e,g,C,!0));h.push(...this.createRange(_,E,P))}return h}An(e,t,r,s){const i=new kr(e,G.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new kr(e,G.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new rf(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return D.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new Ee($e.comparator),h=!1;for(const p of l.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?h=!0:u=u.add(g.field));for(const p of l.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(h?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new Ii;for(const s of Sr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);Cr.vt.It(i,o)}return r.zt()}dn(e){const t=new Ii;return Cr.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new Ii;return Cr.vt.It(to(this.databaseId,t),r.Yt(function(i){const o=Sr(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new Ii);let i=0;for(const o of Sr(e)){const c=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&no(c))s=this.gn(s,o,c);else{const u=l.Yt(o.kind);Cr.vt.It(c,u)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new Ii;l.seed(c.zt()),Cr.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof de&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ti(e),s=ws(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return D.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(h,p){const g=p?new Ji(p.sequenceNumber,new qt(zr(p.readTime),new G(dn(p.documentKey)),p.largestBatchId)):Ji.empty(),_=h.fields.map(([E,P])=>new ea($e.fromServerFormat(E),P));return new Ta(h.indexId,h.collectionGroup,_,g)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:se(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Ti(e),i=ws(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>D.forEach(c,l=>i.put(Xh(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return D.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),D.forEach(c,l=>this.wn(e,s,l).next(u=>{const h=this.Sn(i,l);return u.isEqual(h)?D.resolve():this.bn(e,i,l,u,h)}))))})}Dn(e,t,r,s){return _s(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return _s(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=_s(e);let i=new Ee(Gn);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{i=i.add(new kr(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let r=new Ee(Gn);const s=this.Vn(t,e);if(s==null)return r;const i=fl(t);if(i!=null){const o=e.data.field(i.fieldPath);if(no(o))for(const c of o.arrayValue.values||[])r=r.add(new kr(t.indexId,e.key,this.dn(c),s))}else r=r.add(new kr(t.indexId,e.key,jo,s));return r}bn(e,t,r,s,i){F("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,u,h,p,g){const _=l.getIterator(),E=u.getIterator();let P=vs(_),C=vs(E);for(;P||C;){let L=!1,M=!1;if(P&&C){const x=h(P,C);x<0?M=!0:x>0&&(L=!0)}else P!=null?M=!0:L=!0;L?(p(C),C=vs(E)):M?(g(P),P=vs(_)):(P=vs(_),C=vs(E))}}(s,i,Gn,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),D.waitFor(o)}yn(e){let t=1;return ws(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Gn(o,c)).filter((o,c,l)=>!c||Gn(o,l[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=Gn(o,e),l=Gn(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,jo,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,jo,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return Gn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(af)}getMinOffset(e,t){return D.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||J())).next(af)}}function of(n){return at(n,"collectionParents")}function _s(n){return at(n,"indexEntries")}function Ti(n){return at(n,"indexConfiguration")}function ws(n){return at(n,"indexState")}function af(n){ee(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;tu(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new qt(e.readTime,e.documentKey,t)}/**
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
 */const cf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function cg(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.J({range:o},(h,p,g)=>(c++,g.delete()));i.push(l.next(()=>{ee(c===1)}));const u=[];for(const h of t.mutations){const p=dp(e,h.key.path,t.batchId);i.push(s.delete(p)),u.push(h.key)}return D.waitFor(i).next(()=>u)}function ka(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw J();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(41943040,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);class tc{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){ee(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new tc(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kn(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Ss(e),o=Kn(e);return o.add({}).next(c=>{ee(typeof c=="number");const l=new uu(c,t,r,s),u=function(_,E,P){const C=P.baseMutations.map(M=>Ra(_.ct,M)),L=P.mutations.map(M=>Ra(_.ct,M));return{userId:E,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:C,mutations:L}}(this.serializer,this.userId,l),h=[];let p=new Ee((g,_)=>se(g.canonicalString(),_.canonicalString()));for(const g of s){const _=dp(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),h.push(o.put(u)),h.push(i.put(_,aE))}return p.forEach(g=>{h.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),D.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return Kn(e).get(t).next(r=>r?(ee(r.userId===this.userId),Pr(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?D.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Kn(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(ee(c.batchId>=r),i=Pr(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Kn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Kn(e).U("userMutationsIndex",t).next(r=>r.map(s=>Pr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ta(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Ss(e).J({range:s},(o,c,l)=>{const[u,h,p]=o,g=dn(h);if(u===this.userId&&t.path.isEqual(g))return Kn(e).get(p).next(_=>{if(!_)throw J();ee(_.userId===this.userId),i.push(Pr(this.serializer,_))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(se);const s=[];return t.forEach(i=>{const o=ta(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=Ss(e).J({range:c},(u,h,p)=>{const[g,_,E]=u,P=dn(_);g===this.userId&&i.path.isEqual(P)?r=r.add(E):p.done()});s.push(l)}),D.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=ta(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new Ee(se);return Ss(e).J({range:o},(l,u,h)=>{const[p,g,_]=l,E=dn(g);p===this.userId&&r.isPrefixOf(E)?E.length===s&&(c=c.add(_)):h.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Kn(e).get(i).next(o=>{if(o===null)throw J();ee(o.userId===this.userId),r.push(Pr(this.serializer,o))}))}),D.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return cg(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),D.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Ss(e).J({range:r},(i,o,c)=>{if(i[0]===this.userId){const l=dn(i[1]);s.push(l)}else c.done()}).next(()=>{ee(s.length===0)})})}containsKey(e,t){return lg(e,this.userId,t)}Nn(e){return ug(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function lg(n,e,t){const r=ta(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Ss(n).J({range:i,H:!0},(c,l,u)=>{const[h,p,g]=c;h===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Kn(n){return at(n,"mutations")}function Ss(n){return at(n,"documentMutations")}function ug(n){return at(n,"mutationQueues")}/**
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
 */class Hr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Hr(0)}static kn(){return new Hr(-1)}}/**
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
 */class bb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Hr(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>te.fromTimestamp(new Ue(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Is(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(ee(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Is(e).J((o,c)=>{const l=Ni(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>D.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Is(e).J((r,s)=>{const i=Ni(s);t(i)})}qn(e){return lf(e).get("targetGlobalKey").next(t=>(ee(t!==null),t))}Qn(e,t){return lf(e).put("targetGlobalKey",t)}Kn(e,t){return Is(e).put(sg(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=jr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Is(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const u=Ni(c);po(t,u.target)&&(i=u,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Jn(e);return t.forEach(o=>{const c=kt(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(s)}removeMatchingKeys(e,t,r){const s=Jn(e);return D.forEach(t,i=>{const o=kt(i.path);return D.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Jn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Jn(e);let i=le();return s.J({range:r,H:!0},(o,c,l)=>{const u=dn(o[1]),h=new G(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const r=kt(t.path),s=IDBKeyRange.bound([r],[sp(r)],!1,!0);let i=0;return Jn(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ot(e,t){return Is(e).get(t).next(r=>r?Ni(r):null)}}function Is(n){return at(n,"targets")}function lf(n){return at(n,"targetGlobal")}function Jn(n){return at(n,"targetDocuments")}/**
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
 */function uf([n,e],[t,r]){const s=se(n,t);return s===0?se(e,r):s}class Ab{constructor(e){this.Un=e,this.buffer=new Ee(uf),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();uf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){F("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hr(t)?F("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await dr(t)}await this.Hn(3e5)})}}class Rb{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Vt.oe);const r=new Ab(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(cf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cf):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Ts()<=ue.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Pb(n,e){return new Rb(n,e)}/**
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
 */class Cb{constructor(e,t){this.db=e,this.garbageCollector=Pb(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return Go(e,r)}removeReference(e,t,r){return Go(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Go(e,t)}nr(e,t){return function(s,i){let o=!1;return ug(s).Y(c=>lg(s,c,i).next(l=>(l&&(o=!0),D.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,te.min()),Jn(e).delete(function(p){return[0,kt(p.path)]}(o))))});s.push(l)}}).next(()=>D.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Go(e,t)}tr(e,t){const r=Jn(e);let s,i=Vt.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:u})=>{o===0?(i!==Vt.oe&&t(new G(dn(s)),i),i=u,s=l):i=Vt.oe}).next(()=>{i!==Vt.oe&&t(new G(dn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Go(n,e){return Jn(n).put(function(r,s){return{targetId:0,path:kt(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class dg{constructor(){this.changes=new fr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return br(e).put(r)}removeEntry(e,t,r){return br(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Pa(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=He.newInvalidDocument(t);return br(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ei(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:He.newInvalidDocument(t)};return br(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ei(t))},(s,i)=>{r={document:this.ir(t,i),size:ka(i)}}).next(()=>r)}getEntries(e,t){let r=Ft();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=Ft(),s=new Se(G.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);r=r.insert(i,c),s=s.insert(i,ka(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return D.resolve();let s=new Ee(ff);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Ei(s.first()),Ei(s.last())),o=s.getIterator();let c=o.getNext();return br(e).J({index:"documentKeyIndex",range:i},(l,u,h)=>{const p=G.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&ff(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,u),c=o.hasNext()?o.getNext():null),c?h.$(Ei(c)):h.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Pa(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return br(e).U(IDBKeyRange.bound(c,l,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let h=Ft();for(const p of u){const g=this.ir(G.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(go(t,g)||s.has(g.key))&&(h=h.insert(g.key,g))}return h})}getAllFromCollectionGroup(e,t,r,s){let i=Ft();const o=hf(t,r),c=hf(t,qt.max());return br(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,u,h)=>{const p=this.ir(G.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&h.done()}).next(()=>i)}newChangeBuffer(e){return new Db(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return df(e).get("remoteDocumentGlobalKey").next(t=>(ee(!!t),t))}rr(e,t){return df(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=mb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(te.min())))return r}return He.newInvalidDocument(e)}}function hg(n){return new kb(n)}class Db extends dg{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new fr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new Ee((i,o)=>se(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Yh(this.cr.serializer,o);s=s.add(i.path.popLast());const u=ka(l);r+=u-c.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=Yh(this.cr.serializer,o.convertToNoDocument(te.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),D.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function df(n){return at(n,"remoteDocumentGlobal")}function br(n){return at(n,"remoteDocumentsV14")}function Ei(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function hf(n,e){const t=e.documentKey.path.toArray();return[n,Pa(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ff(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=se(t[i],r[i]),s)return s;return s=se(t.length,r.length),s||(s=se(t[t.length-2],r[r.length-2]),s||se(t[t.length-1],r[r.length-1]))}/**
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
 */class Nb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class fg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&qi(r.mutation,s,Ot.empty(),Ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,t,r=le()){const s=hn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=ki();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=hn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,le()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=Ft();const o=Ui(),c=function(){return Ui()}();return t.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof xn)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),qi(h.mutation,u,h.mutation.getFieldMask(),Ue.now())):o.set(u.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var p;return c.set(u,new Nb(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Ui();let s=new Se((o,c)=>o-c),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let h=r.get(l)||Ot.empty();h=c.applyToLocalView(u,h),r.set(l,h);const p=(s.get(c.batchId)||le()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,p=Lp();h.forEach(g=>{if(!i.has(g)){const _=$p(t.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(hn());let c=-1,l=i;return o.next(u=>D.forEach(u,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(h)?D.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,le())).next(h=>({batchId:c,changes:xp(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(r=>{let s=ki();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=ki();return this.indexManager.getCollectionParents(e,i).next(c=>D.forEach(c,l=>{const u=function(p,g){return new Js(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,He.newInvalidDocument(h)))});let c=ki();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&qi(h.mutation,u,Ot.empty(),Ue.now()),go(t,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class xb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Dt(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:ig(s.bundledQuery),readTime:Dt(s.readTime)}}(t)),D.resolve()}}/**
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
 */class Lb{constructor(){this.overlays=new Se(G.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hn();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=hn(),i=t.length+1,o=new G(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Se((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=hn(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=hn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return D.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hu(t,r));let i=this.Ir.get(t);i===void 0&&(i=le(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Vb{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class yu{constructor(){this.Tr=new Ee(ut.Er),this.dr=new Ee(ut.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ut(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ut(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new G(new ge([])),r=new ut(t,e),s=new ut(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new G(new ge([])),r=new ut(t,e),s=new ut(t,e+1);let i=le();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ut(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return G.comparator(e.key,t.key)||se(e.wr,t.wr)}static Ar(e,t){return se(e.wr,t.wr)||G.comparator(e.key,t.key)}}/**
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
 */class Ob{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ee(ut.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uu(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new ut(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ut(t,0),s=new ut(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(se);return t.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new ut(new G(i),0);let c=new Ee(se);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),D.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ee(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,s=>{const i=new ut(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ut(t,0),s=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Mb{constructor(e){this.Mr=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let r=Ft();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():He.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ft();const o=t.path,c=new G(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||tu(op(h),r)<=0||(s.has(h.key)||go(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){J()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Bb(this)}getSize(e){return D.resolve(this.size)}}class Bb extends dg{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Fb{constructor(e){this.persistence=e,this.Nr=new fr(t=>jr(t),po),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new yu,this.targetCount=0,this.kr=Hr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Hr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
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
 */class mg{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Vt(0),this.Kr=!1,this.Kr=!0,this.$r=new Vb,this.referenceDelegate=e(this),this.Ur=new Fb(this),this.indexManager=new Tb,this.remoteDocumentCache=function(s){return new Mb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new rg(t),this.Gr=new xb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Lb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Ob(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const s=new $b(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class $b extends cp{constructor(e){super(),this.currentSequenceNumber=e}}class nc{constructor(e){this.persistence=e,this.Jr=new yu,this.Yr=null}static Zr(e){return new nc(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const s=G.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,te.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Ub{constructor(e){this.serializer=e}O(e,t,r,s){const i=new za("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sh,{unique:!0}),l.createObjectStore("documentMutations")}(e),mf(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),mf(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:te.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",h)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sh,{unique:!0});const p=u.store("mutations"),g=h.map(_=>p.put(_));return D.waitFor(g)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:_E});u.createIndex("collectionPathOverlayIndex",wE,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",IE,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:cE});u.createIndex("documentKeyIndex",lE),u.createIndex("collectionGroupIndex",uE)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:pE}).createIndex("sequenceNumberIndex",gE,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:yE}).createIndex("documentKeyIndex",vE,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=ka(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>D.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>D.forEach(c,l=>{ee(l.userId===i.userId);const u=Pr(this.serializer,l);return cg(e,i.userId,u).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,c)=>{const l=new ge(o),u=function(p){return[0,kt(p)]}(l);i.push(t.get(u).next(h=>h?D.resolve():(p=>t.put({targetId:0,path:kt(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>D.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:mE});const r=t.store("collectionParents"),s=new gu,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:kt(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new ge(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],u)=>{const h=dn(c);return i(h.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=Ni(s),o=sg(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new G(ge.fromString(p.document.name).popFirst(5)):p.noDocument?G.fromSegments(p.noDocument.path):p.unknownDocument?G.fromSegments(p.unknownDocument.path):J()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(u))}).next(()=>D.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=hg(this.serializer),i=new mg(nc.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(l=>{var u;let h=(u=c.get(l.userId))!==null&&u!==void 0?u:le();Pr(this.serializer,l).keys().forEach(p=>h=h.add(p)),c.set(l.userId,h)}),D.forEach(c,(l,u)=>{const h=new It(u),p=ec.lt(this.serializer,h),g=i.getIndexManager(h),_=tc.lt(h,this.serializer,g,i.referenceDelegate);return new fg(s,_,p,g).recalculateAndSaveOverlaysForDocumentKeys(new ml(t,Vt.oe),l).next()})})}}function mf(n){n.createObjectStore("targetDocuments",{keyPath:hE}).createIndex("documentTargetsIndex",fE,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",dE,{unique:!0}),n.createObjectStore("targetGlobal")}const Gc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class vu{constructor(e,t,r,s,i,o,c,l,u,h,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=c,this.ci=u,this.li=h,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!vu.D())throw new q(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Cb(this,s),this.Ai=t+"main",this.serializer=new rg(l),this.Ri=new tr(this.Ai,this.hi,new Ub(this.serializer)),this.$r=new gb,this.Ur=new bb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=hg(this.serializer),this.Gr=new pb,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&Xe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new q(V.FAILED_PRECONDITION,Gc);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Vt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ko(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(hr(e))return F("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return F("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return bi(e).get("owner").next(t=>D.resolve(this.vi(t)))}Ci(e){return Ko(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=at(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return D.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?D.resolve(!0):bi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new q(V.FAILED_PRECONDITION,Gc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ko(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&F("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ml(e,Vt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Ko(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return tc.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Eb(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ec.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){F("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?bE:l===16?EE:l===15?ru:l===14?mp:l===13?fp:l===12?TE:l===11?hp:void J()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new ml(c,this.Qr?this.Qr.next():Vt.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Xe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new q(V.FAILED_PRECONDITION,ap);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return bi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new q(V.FAILED_PRECONDITION,Gc)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return bi(e).put("owner",t)}static D(){return tr.D()}bi(e){const t=bi(e);return t.get("owner").next(r=>this.vi(r)?(F("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):D.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Xe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;um()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return F("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Xe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Xe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function bi(n){return at(n,"owner")}function Ko(n){return at(n,"clientMetadata")}function pg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class _u{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=le(),s=le();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _u(e,t.fromCache,r,s)}}/**
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
 */class qb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gg{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return um()?8:lp(ot())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new qb;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Ts()<=ue.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Es(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(Ts()<=ue.DEBUG&&F("QueryEngine","Query:",Es(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ts()<=ue.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Es(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ut(t))):D.resolve())}Yi(e,t){if(Fh(t))return D.resolve(null);let r=Ut(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Il(t,null,"F"),r=Ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(t,c);return this.ns(t,u,o,l.readTime)?this.Yi(e,Il(t,null,"F")):this.rs(e,u,t,l)}))})))}Zi(e,t,r,s){return Fh(t)||s.isEqual(te.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?D.resolve(null):(Ts()<=ue.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Es(t)),this.rs(e,o,t,ip(s,-1)).next(c=>c))})}ts(e,t){let r=new Ee(Dp(e));return t.forEach((s,i)=>{go(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Ts()<=ue.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Es(t)),this.Ji.getDocumentsMatchingQuery(e,t,qt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class jb{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Se(se),this._s=new fr(i=>jr(i),po),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function yg(n,e,t,r){return new jb(n,e,t,r)}async function vg(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=le();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function Gb(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const p=u.batch,g=p.keys();let _=D.resolve();return g.forEach(E=>{_=_.next(()=>h.getEntry(l,E)).next(P=>{const C=u.docVersions.get(E);ee(C!==null),P.version.compareTo(C)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),h.addEntry(P)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=le();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function _g(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Kb(n,e){const t=X(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((h,p)=>{const g=s.get(p);if(!g)return;c.push(t.Ur.removeMatchingKeys(i,h.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,h.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Ze.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(p,_),function(P,C,L){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(g,_,h)&&c.push(t.Ur.updateTargetData(i,_))});let l=Ft(),u=le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(zb(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(te.min())){const h=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return D.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.os=s,i))}function zb(n,e,t){let r=le(),s=le();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Ft();return t.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function Hb(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Da(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new An(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Us(n,e,t){const r=X(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!hr(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Cl(n,e,t){const r=X(n);let s=te.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const p=X(l),g=p._s.get(h);return g!==void 0?D.resolve(p.os.get(g)):p.Ur.getTargetData(u,h)}(r,o,Ut(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:te.min(),t?i:le())).next(c=>(Tg(r,kp(e),c),{documents:c,Ts:i})))}function wg(n,e){const t=X(n),r=X(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function Ig(n,e){const t=X(n),r=t.us.get(e)||te.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,ip(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Tg(t,e,s),s))}function Tg(n,e,t){let r=n.us.get(e)||te.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function pf(n,e){return`firestore_clients_${n}_${e}`}function gf(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Kc(n,e){return`firestore_targets_${n}_${e}`}class Na{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new q(s.error.code,s.error.message))),o?new Na(e,t,s.state,i):(Xe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ji{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new q(r.error.code,r.error.message))),i?new ji(e,r.state,s):(Xe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xa{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=au();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=up(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new xa(e,i):(Xe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class wu{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new wu(t.clientId,t.onlineState):(Xe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class kl{constructor(){this.activeTargetIds=au()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zc{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Se(se),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=pf(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new kl),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(pf(this.persistenceKey,r));if(s){const i=xa.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Kc(this.persistenceKey,e));if(s){const i=ji.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Kc(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return F("SharedClientState","READ",e,t),t}setItem(e,t){F("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){F("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(F("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Xe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=Vt.oe;if(i!=null)try{const c=JSON.parse(i);ee(typeof c=="number"),o=c}catch(c){Xe("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==Vt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new Na(this.currentUser,e,t,r),i=gf(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=gf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=Kc(this.persistenceKey,e),i=new ji(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return xa.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Na.Rs(new It(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return ji.Rs(s,t)}Ls(e){return wu.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);F("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=au();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Eg{constructor(){this.so=new kl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new kl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Wb{_o(e){}shutdown(){}}/**
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
 */class yf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zo=null;function Hc(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}/**
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
 */const Qb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Yb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const wt="WebChannelConnection";class Jb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=Hc(),l=this.xo(t,r.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(t,l,u,s).then(h=>(F("RestConnection",`Received RPC '${t}' ${c}: `,h),h),h=>{throw Qi("RestConnection",`RPC '${t}' ${c} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ys}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=Qb[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Hc();return new Promise((o,c)=>{const l=new Xm;l.setWithCredentials(!0),l.listenOnce(Zm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Zo.NO_ERROR:const h=l.getResponseJson();F(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Zo.TIMEOUT:F(wt,`RPC '${e}' ${i} timed out`),c(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case Zo.HTTP_ERROR:const p=l.getStatus();if(F(wt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const E=function(C){const L=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(L)>=0?L:V.UNKNOWN}(_.status);c(new q(E,_.message))}else c(new q(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new q(V.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{F(wt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);F(wt,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",u,r,15)})}Bo(e,t,r){const s=Hc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=np(),c=tp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");F(wt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);let g=!1,_=!1;const E=new Yb({Io:C=>{_?F(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(F(wt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),F(wt,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},To:()=>p.close()}),P=(C,L,M)=>{C.listen(L,x=>{try{M(x)}catch(B){setTimeout(()=>{throw B},0)}})};return P(p,Ci.EventType.OPEN,()=>{_||(F(wt,`RPC '${e}' stream ${s} transport opened.`),E.yo())}),P(p,Ci.EventType.CLOSE,()=>{_||(_=!0,F(wt,`RPC '${e}' stream ${s} transport closed`),E.So())}),P(p,Ci.EventType.ERROR,C=>{_||(_=!0,Qi(wt,`RPC '${e}' stream ${s} transport errored:`,C),E.So(new q(V.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ci.EventType.MESSAGE,C=>{var L;if(!_){const M=C.data[0];ee(!!M);const x=M,B=x.error||((L=x[0])===null||L===void 0?void 0:L.error);if(B){F(wt,`RPC '${e}' stream ${s} received error:`,B);const z=B.status;let Q=function(T){const S=tt[T];if(S!==void 0)return jp(S)}(z),A=B.message;Q===void 0&&(Q=V.INTERNAL,A="Unknown error status: "+z+" with message "+B.message),_=!0,E.So(new q(Q,A)),p.close()}else F(wt,`RPC '${e}' stream ${s} received:`,M),E.bo(M)}}),P(c,ep.STAT_EVENT,C=>{C.stat===hl.PROXY?F(wt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===hl.NOPROXY&&F(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}/**
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
 */function bg(){return typeof window<"u"?window:null}function oa(){return typeof document<"u"?document:null}/**
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
 */function rc(n){return new sb(n,!0)}/**
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
 */class Ag{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Sg{constructor(e,t,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ag(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Xe(t.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xb extends Sg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=ab(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Dt(o.readTime):te.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=bl(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=ba(l)?{documents:Jp(i,l)}:{query:Xp(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=zp(i,o.resumeToken);const u=Tl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(te.min())>0){c.readTime=$s(i,o.snapshotVersion.toTimestamp());const u=Tl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=lb(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=bl(this.serializer),t.removeTarget=e,this.a_(t)}}class Zb extends Sg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ee(!!e.streamToken),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=cb(e.writeResults,e.commitTime),r=Dt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=bl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ra(this.serializer,r))};this.a_(t)}}/**
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
 */class eA extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,El(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(V.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,El(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class tA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Xe(t),this.D_=!1):F("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class nA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ns(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=X(l);u.L_.add(4),await _o(u),u.q_.set("Unknown"),u.L_.delete(4),await sc(u)}(this))})}),this.q_=new tA(r,s)}}async function sc(n){if(ns(n))for(const e of n.B_)await e(!0)}async function _o(n){for(const e of n.B_)await e(!1)}function ic(n,e){const t=X(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Eu(t)?Tu(t):ei(t).r_()&&Iu(t,e))}function qs(n,e){const t=X(n),r=ei(t);t.N_.delete(e),r.r_()&&Rg(t,e),t.N_.size===0&&(r.r_()?r.o_():ns(t)&&t.q_.set("Unknown"))}function Iu(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ei(n).A_(e)}function Rg(n,e){n.Q_.xe(e),ei(n).R_(e)}function Tu(n){n.Q_=new eb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ei(n).start(),n.q_.v_()}function Eu(n){return ns(n)&&!ei(n).n_()&&n.N_.size>0}function ns(n){return X(n).L_.size===0}function Pg(n){n.Q_=void 0}async function rA(n){n.q_.set("Online")}async function sA(n){n.N_.forEach((e,t)=>{Iu(n,e)})}async function iA(n,e){Pg(n),Eu(n)?(n.q_.M_(e),Tu(n)):n.q_.set("Unknown")}async function oA(n,e,t){if(n.q_.set("Online"),e instanceof Kp&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await La(n,r)}else if(e instanceof ia?n.Q_.Ke(e):e instanceof Gp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(te.min()))try{const r=await _g(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(Ze.EMPTY_BYTE_STRING,h.snapshotVersion)),Rg(i,l);const p=new An(h.target,l,u,h.sequenceNumber);Iu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await La(n,r)}}async function La(n,e,t){if(!hr(e))throw e;n.L_.add(1),await _o(n),n.q_.set("Offline"),t||(t=()=>_g(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await sc(n)})}function Cg(n,e){return e().catch(t=>La(n,t,e))}async function Zs(n){const e=X(n),t=or(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;aA(e);)try{const s=await Hb(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,cA(e,s)}catch(s){await La(e,s)}kg(e)&&Dg(e)}function aA(n){return ns(n)&&n.O_.length<10}function cA(n,e){n.O_.push(e);const t=or(n);t.r_()&&t.V_&&t.m_(e.mutations)}function kg(n){return ns(n)&&!or(n).n_()&&n.O_.length>0}function Dg(n){or(n).start()}async function lA(n){or(n).p_()}async function uA(n){const e=or(n);for(const t of n.O_)e.m_(t.mutations)}async function dA(n,e,t){const r=n.O_.shift(),s=du.from(r,e,t);await Cg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Zs(n)}async function hA(n,e){e&&or(n).V_&&await async function(r,s){if(function(o){return JE(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();or(r).s_(),await Cg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zs(r)}}(n,e),kg(n)&&Dg(n)}async function vf(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=ns(t);t.L_.add(3),await _o(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await sc(t)}async function Dl(n,e){const t=X(n);e?(t.L_.delete(2),await sc(t)):e||(t.L_.add(2),await _o(t),t.q_.set("Unknown"))}function ei(n){return n.K_||(n.K_=function(t,r,s){const i=X(t);return i.w_(),new Xb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:rA.bind(null,n),Ro:sA.bind(null,n),mo:iA.bind(null,n),d_:oA.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Eu(n)?Tu(n):n.q_.set("Unknown")):(await n.K_.stop(),Pg(n))})),n.K_}function or(n){return n.U_||(n.U_=function(t,r,s){const i=X(t);return i.w_(),new Zb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:lA.bind(null,n),mo:hA.bind(null,n),f_:uA.bind(null,n),g_:dA.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Zs(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class bu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new bu(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Au(n,e){if(Xe("AsyncQueue",`${e}: ${n}`),hr(n))return new q(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ns{constructor(e){this.comparator=e?(t,r)=>e(t,r)||G.comparator(t.key,r.key):(t,r)=>G.comparator(t.key,r.key),this.keyedMap=ki(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ns)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class _f{constructor(){this.W_=new Se(G.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class js{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new js(e,t,Ns.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class mA{constructor(){this.queries=wf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=X(t),i=s.queries;s.queries=wf(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new q(V.ABORTED,"Firestore shutting down"))}}function wf(){return new fr(n=>Cp(n),Ya)}async function Ng(n,e){const t=X(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new fA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Au(o,`Initialization of query '${Es(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Su(t)}async function xg(n,e){const t=X(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function pA(n,e){const t=X(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Su(t)}function gA(n,e,t){const r=X(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Su(n){n.Y_.forEach(e=>{e.next()})}var Nl,If;(If=Nl||(Nl={})).ea="default",If.Cache="cache";class Lg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Nl.Cache}}/**
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
 */class Vg{constructor(e){this.key=e}}class Og{constructor(e){this.key=e}}class yA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=Dp(e),this.Ra=new Ns(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new _f,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const g=s.get(h),_=go(this.query,p)?p:null,E=!!g&&this.mutatedKeys.has(g.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;g&&_?g.data.isEqual(_.data)?E!==P&&(r.track({type:3,doc:_}),C=!0):this.ga(g,_)||(r.track({type:2,doc:_}),C=!0,(l&&this.Aa(_,l)>0||u&&this.Aa(_,u)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),C=!0):g&&!_&&(r.track({type:1,doc:g}),C=!0,(l||u)&&(c=!0)),C&&(_?(o=o.add(_),i=P?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(_,E){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return P(_)-P(E)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new js(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _f,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Og(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Vg(r))}),t}ba(e){this.Ta=e.Ts,this.da=le();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return js.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class vA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class _A{constructor(e){this.key=e,this.va=!1}}class wA{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fr(c=>Cp(c),Ya),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(G.comparator),this.Na=new Map,this.La=new yu,this.Ba={},this.ka=new Map,this.qa=Hr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function IA(n,e,t=!0){const r=oc(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Mg(r,e,t,!0),s}async function TA(n,e){const t=oc(n);await Mg(t,e,!0,!1)}async function Mg(n,e,t,r){const s=await Da(n.localStore,Ut(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Ru(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&ic(n.remoteStore,s),c}async function Ru(n,e,t,r,s){n.Ka=(p,g,_)=>async function(P,C,L,M){let x=C.view.ma(L);x.ns&&(x=await Cl(P.localStore,C.query,!1).then(({documents:A})=>C.view.ma(A,x)));const B=M&&M.targetChanges.get(C.targetId),z=M&&M.targetMismatches.get(C.targetId)!=null,Q=C.view.applyChanges(x,P.isPrimaryClient,B,z);return xl(P,C.targetId,Q.wa),Q.snapshot}(n,p,g,_);const i=await Cl(n.localStore,e,!0),o=new yA(e,i.Ts),c=o.ma(i.documents),l=vo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);xl(n,t,u.wa);const h=new vA(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),u.snapshot}async function EA(n,e,t){const r=X(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ya(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Us(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&qs(r.remoteStore,s.targetId),Gs(r,s.targetId)}).catch(dr)):(Gs(r,s.targetId),await Us(r.localStore,s.targetId,!0))}async function bA(n,e){const t=X(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),qs(t.remoteStore,r.targetId))}async function AA(n,e,t){const r=Du(n);try{const s=await function(o,c){const l=X(o),u=Ue.now(),h=c.reduce((_,E)=>_.add(E.key),le());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=Ft(),P=le();return l.cs.getEntries(_,h).next(C=>{E=C,E.forEach((L,M)=>{M.isValidDocument()||(P=P.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,E)).next(C=>{p=C;const L=[];for(const M of c){const x=QE(M,p.get(M.key).overlayedDocument);x!=null&&L.push(new xn(M.key,x,_p(x.value.mapValue),Et.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,L,c)}).next(C=>{g=C;const L=C.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(_,C.batchId,L)})}).then(()=>({batchId:g.batchId,changes:xp(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Se(se)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,t),await mr(r,s.changes),await Zs(r.remoteStore)}catch(s){const i=Au(s,"Failed to persist write");t.reject(i)}}async function Bg(n,e){const t=X(n);try{const r=await Kb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ee(o.va):s.removedDocuments.size>0&&(ee(o.va),o.va=!1))}),await mr(t,r,e)}catch(r){await dr(r)}}function Tf(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=X(o);l.onlineState=c;let u=!1;l.queries.forEach((h,p)=>{for(const g of p.j_)g.Z_(c)&&(u=!0)}),u&&Su(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SA(n,e,t){const r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Se(G.comparator);o=o.insert(i,He.newNoDocument(i,te.min()));const c=le().add(i),l=new yo(te.min(),new Map,new Se(se),o,c);await Bg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),ku(r)}else await Us(r.localStore,e,!1).then(()=>Gs(r,e,t)).catch(dr)}async function RA(n,e){const t=X(n),r=e.batch.batchId;try{const s=await Gb(t.localStore,e);Cu(t,r,null),Pu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mr(t,s)}catch(s){await dr(s)}}async function PA(n,e,t){const r=X(n);try{const s=await function(o,c){const l=X(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(ee(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Cu(r,e,t),Pu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mr(r,s)}catch(s){await dr(s)}}function Pu(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Cu(n,e,t){const r=X(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Gs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Fg(n,r)})}function Fg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(qs(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ku(n))}function xl(n,e,t){for(const r of t)r instanceof Vg?(n.La.addReference(r.key,e),CA(n,r)):r instanceof Og?(F("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Fg(n,r.key)):J()}function CA(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(F("SyncEngine","New document in limbo: "+t),n.xa.add(r),ku(n))}function ku(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new G(ge.fromString(e)),r=n.qa.next();n.Na.set(r,new _A(t)),n.Oa=n.Oa.insert(t,r),ic(n.remoteStore,new An(Ut(Qa(t.path)),r,"TargetPurposeLimboResolution",Vt.oe))}}async function mr(n,e,t){const r=X(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(u=>{var h;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=_u.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=X(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>D.forEach(u,g=>D.forEach(g.$i,_=>h.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>D.forEach(g.Ui,_=>h.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!hr(p))throw p;F("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=h.os.get(g),E=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(E);h.os=h.os.insert(g,P)}}}(r.localStore,i))}async function kA(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await vg(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new q(V.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mr(t,r.hs)}}function DA(n,e){const t=X(n),r=t.Na.get(e);if(r&&r.va)return le().add(r.key);{let s=le();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function NA(n,e){const t=X(n),r=await Cl(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&xl(t,e.targetId,s.wa),s}async function xA(n,e){const t=X(n);return Ig(t.localStore,e).then(r=>mr(t,r))}async function LA(n,e,t,r){const s=X(n),i=await function(c,l){const u=X(c),h=X(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",p=>h.Mn(p,l).next(g=>g?u.localDocuments.getDocuments(p,g):D.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Zs(s.remoteStore):t==="acknowledged"||t==="rejected"?(Cu(s,e,r||null),Pu(s,e),function(c,l){X(X(c).mutationQueue).On(l)}(s.localStore,e)):J(),await mr(s,i)):F("SyncEngine","Cannot apply mutation batch with id: "+e)}async function VA(n,e){const t=X(n);if(oc(t),Du(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Ef(t,r.toArray());t.Qa=!0,await Dl(t.remoteStore,!0);for(const i of s)ic(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Gs(t,o),Us(t.localStore,o,!0))),qs(t.remoteStore,o)}),await s,await Ef(t,r),function(o){const c=X(o);c.Na.forEach((l,u)=>{qs(c.remoteStore,u)}),c.La.pr(),c.Na=new Map,c.Oa=new Se(G.comparator)}(t),t.Qa=!1,await Dl(t.remoteStore,!1)}}async function Ef(n,e,t){const r=X(n),s=[],i=[];for(const o of e){let c;const l=r.Ma.get(o);if(l&&l.length!==0){c=await Da(r.localStore,Ut(l[0]));for(const u of l){const h=r.Fa.get(u),p=await NA(r,h);p.snapshot&&i.push(p.snapshot)}}else{const u=await wg(r.localStore,o);c=await Da(r.localStore,u),await Ru(r,$g(u),o,!1,c.resumeToken)}s.push(c)}return r.Ca.d_(i),s}function $g(n){return Rp(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function OA(n){return function(t){return X(X(t).persistence).Qi()}(X(n).localStore)}async function MA(n,e,t,r){const s=X(n);if(s.Qa)return void F("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Ig(s.localStore,kp(i[0])),c=yo.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ze.EMPTY_BYTE_STRING);await mr(s,o,c);break}case"rejected":await Us(s.localStore,e,!0),Gs(s,e,r);break;default:J()}}async function BA(n,e,t){const r=oc(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){F("SyncEngine","Adding an already active target "+s);continue}const i=await wg(r.localStore,s),o=await Da(r.localStore,i);await Ru(r,$g(i),o.targetId,!1,o.resumeToken),ic(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await Us(r.localStore,s,!1).then(()=>{qs(r.remoteStore,s),Gs(r,s)}).catch(dr)}}function oc(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SA.bind(null,e),e.Ca.d_=pA.bind(null,e.eventManager),e.Ca.$a=gA.bind(null,e.eventManager),e}function Du(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PA.bind(null,e),e}class so{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return yg(this.persistence,new gg,e.initialUser,this.serializer)}Ga(e){return new mg(nc.Zr,this.serializer)}Wa(e){return new Eg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}so.provider={build:()=>new so};class Ug extends so{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Du(this.Ja.syncEngine),await Zs(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return yg(this.persistence,new gg,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Sb(r,e.asyncQueue,t)}Ha(e,t){const r=new iE(t,this.persistence);return new sE(e.asyncQueue,r)}Ga(e){const t=pg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new vu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,bg(),oa(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Eg}}class FA extends Ug{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof zc&&(this.sharedClientState.syncEngine={no:LA.bind(null,t),ro:MA.bind(null,t),io:BA.bind(null,t),Qi:OA.bind(null,t),eo:xA.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await VA(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=bg();if(!zc.D(t))throw new q(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=pg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new zc(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class io{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kA.bind(null,this.syncEngine),await Dl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mA}()}createDatastore(e){const t=rc(e.databaseInfo.databaseId),r=function(i){return new Jb(i)}(e.databaseInfo);return function(i,o,c,l){return new eA(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new nA(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Tf(this.syncEngine,t,0),function(){return yf.D()?new yf:new Wb}())}createSyncEngine(e,t){return function(s,i,o,c,l,u,h){const p=new wA(s,i,o,c,l,u);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=X(s);F("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await _o(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}io.provider={build:()=>new io};/**
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
 */class qg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Xe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class $A{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=rp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{F("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(F("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Au(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wc(n,e){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function bf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await UA(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>vf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>vf(e.remoteStore,s)),n._onlineComponents=e}async function UA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Qi("Error using user provided cache. Falling back to memory cache: "+t),await Wc(n,new so)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Wc(n,new so);return n._offlineComponents}async function jg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await bf(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await bf(n,new io))),n._onlineComponents}function qA(n){return jg(n).then(e=>e.syncEngine)}async function Gg(n){const e=await jg(n),t=e.eventManager;return t.onListen=IA.bind(null,e.syncEngine),t.onUnlisten=EA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=TA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bA.bind(null,e.syncEngine),t}function jA(n,e,t={}){const r=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new qg({next:g=>{h.Za(),o.enqueueAndForget(()=>xg(i,p));const _=g.docs.has(c);!_&&g.fromCache?u.reject(new q(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&l&&l.source==="server"?u.reject(new q(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Lg(Qa(c.path),h,{includeMetadataChanges:!0,_a:!0});return Ng(i,p)}(await Gg(n),n.asyncQueue,e,t,r)),r.promise}function GA(n,e,t={}){const r=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new qg({next:g=>{h.Za(),o.enqueueAndForget(()=>xg(i,p)),g.fromCache&&l.source==="server"?u.reject(new q(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Lg(c,h,{includeMetadataChanges:!0,_a:!0});return Ng(i,p)}(await Gg(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Kg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Af=new Map;/**
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
 */function Nu(n,e,t){if(!t)throw new q(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function KA(n,e,t,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sf(n){if(!G.isDocumentKey(n))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rf(n){if(G.isDocumentKey(n))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ac(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J()}function nn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ac(n);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Pf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WT;switch(r.type){case"firstParty":return new JT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Af.get(t);r&&(F("ComponentProvider","Removing Datastore"),Af.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class rs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rs(this.firestore,e,this._query)}}class Nt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class nr extends rs{constructor(e,t,r){super(e,t,Qa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new G(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function nt(n,e,...t){if(n=Ne(n),Nu("collection","path",e),n instanceof cc){const r=ge.fromString(e,...t);return Rf(r),new nr(n,null,r)}{if(!(n instanceof Nt||n instanceof nr))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Rf(r),new nr(n.firestore,null,r)}}function zA(n,e){if(n=nn(n,cc),Nu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new rs(n,null,function(r){return new Js(ge.emptyPath(),r)}(e))}function ne(n,e,...t){if(n=Ne(n),arguments.length===1&&(e=rp.newId()),Nu("doc","path",e),n instanceof cc){const r=ge.fromString(e,...t);return Sf(r),new Nt(n,null,new G(r))}{if(!(n instanceof Nt||n instanceof nr))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Sf(r),new Nt(n.firestore,n instanceof nr?n.converter:null,new G(r))}}/**
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
 */class Cf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ag(this,"async_queue_retry"),this.Vu=()=>{const r=oa();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=oa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=oa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new pn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!hr(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Xe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=bu.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class ss extends cc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Cf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cf(e),this._firestoreClient=void 0,await e}}}function HA(n,e,t){t||(t="(default)");const r=Zr(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(xs(i,e))return s;throw new q(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new q(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function xu(n){if(n._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||WA(n),n._firestoreClient}function WA(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,u,h){return new SE(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Kg(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $A(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(Ze.fromBase64String(e))}catch(t){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ks(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class lc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wo{constructor(e){this._methodName=e}}/**
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
 */class Lu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */class Vu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const QA=/^__.*__$/;class YA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xs(e,this.data,t,this.fieldTransforms)}}class zg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new xn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class uc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new uc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Va(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Hg(this.Cu)&&QA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class JA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||rc(e)}Qu(e,t,r,s=!1){return new uc({Cu:e,methodName:t,qu:r,path:$e.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dc(n){const e=n._freezeSettings(),t=rc(n._databaseId);return new JA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Wg(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Bu("Data must be an object, but it was:",o,r);const c=Qg(r,o);let l,u;if(i.merge)l=new Ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const g=Ll(e,p,t);if(!o.contains(g))throw new q(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Jg(h,g)||h.push(g)}l=new Ot(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new YA(new Tt(c),l,u)}class hc extends wo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hc}}function XA(n,e,t){return new uc({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ou extends wo{_toFieldTransform(e){return new lu(e.path,new Bs)}isEqual(e){return e instanceof Ou}}class Mu extends wo{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=XA(this,e,!0),r=this.Ku.map(i=>ti(i,t)),s=new Gr(r);return new lu(e.path,s)}isEqual(e){return e instanceof Mu&&xs(this.Ku,e.Ku)}}function ZA(n,e,t,r){const s=n.Qu(1,e,t);Bu("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();ts(r,(l,u)=>{const h=Fu(e,l,t);u=Ne(u);const p=s.Nu(h);if(u instanceof hc)i.push(h);else{const g=ti(u,p);g!=null&&(i.push(h),o.set(h,g))}});const c=new Ot(i);return new zg(o,c,s.fieldTransforms)}function e0(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[Ll(e,r,t)],l=[s];if(i.length%2!=0)throw new q(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Ll(e,i[g])),l.push(i[g+1]);const u=[],h=Tt.empty();for(let g=c.length-1;g>=0;--g)if(!Jg(u,c[g])){const _=c[g];let E=l[g];E=Ne(E);const P=o.Nu(_);if(E instanceof hc)u.push(_);else{const C=ti(E,P);C!=null&&(u.push(_),h.set(_,C))}}const p=new Ot(u);return new zg(h,p,o.fieldTransforms)}function t0(n,e,t,r=!1){return ti(t,n.Qu(r?4:3,e))}function ti(n,e){if(Yg(n=Ne(n)))return Bu("Unsupported field value:",e,n),Qg(n,e);if(n instanceof wo)return function(r,s){if(!Hg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ti(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:$s(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$s(s.serializer,i)}}if(r instanceof Lu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ks)return{bytesValue:zp(s.serializer,r._byteString)};if(r instanceof Nt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Vu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return cu(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ac(r)}`)}(n,e)}function Qg(n,e){const t={};return pp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(n,(r,s)=>{const i=ti(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Yg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ue||n instanceof Lu||n instanceof Ks||n instanceof Nt||n instanceof wo||n instanceof Vu)}function Bu(n,e,t){if(!Yg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ac(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ll(n,e,t){if((e=Ne(e))instanceof lc)return e._internalPath;if(typeof e=="string")return Fu(n,e);throw Va("Field path arguments must be of type string or ",n,!1,void 0,t)}const n0=new RegExp("[~\\*/\\[\\]]");function Fu(n,e,t){if(e.search(n0)>=0)throw Va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new lc(...e.split("."))._internalPath}catch{throw Va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Va(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new q(V.INVALID_ARGUMENT,c+n+l)}function Jg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Xg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new r0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($u("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class r0 extends Xg{data(){return super.data()}}function $u(n,e){return typeof e=="string"?Fu(n,e):e instanceof lc?e._internalPath:e._delegate._internalPath}/**
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
 */function s0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}class i0 extends Uu{}function zs(n,e,...t){let r=[];e instanceof Uu&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof qu).length,c=i.filter(l=>l instanceof fc).length;if(o>1||o>0&&c>0)throw new q(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class fc extends i0{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new fc(e,t,r)}_apply(e){const t=this._parse(e);return Zg(e._query,t),new rs(e.firestore,e.converter,wl(e._query,t))}_parse(e){const t=dc(e.firestore);return function(i,o,c,l,u,h,p){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Df(p,h);const _=[];for(const E of p)_.push(kf(l,i,E));g={arrayValue:{values:_}}}else g=kf(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Df(p,h),g=t0(c,o,p,h==="in"||h==="not-in");return de.create(u,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Vr(n,e,t){const r=e,s=$u("where",n);return fc._create(s,r,t)}class qu extends Uu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:_e.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Zg(o,l),o=wl(o,l)}(e._query,t),new rs(e.firestore,e.converter,wl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function kf(n,e,t){if(typeof(t=Ne(t))=="string"){if(t==="")throw new q(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pp(e)&&t.indexOf("/")!==-1)throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!G.isDocumentKey(r))throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return to(n,new G(r))}if(t instanceof Nt)return to(n,t._key);throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(t)}.`)}function Df(n,e){if(!Array.isArray(n)||n.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zg(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class o0{convertValue(e,t="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ts(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>xe(o.doubleValue));return new Vu(i)}convertGeoPoint(e){return new Lu(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=iu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zi(e));default:return null}}convertTimestamp(e){const t=kn(e);return new Ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);ee(ng(r));const s=new Ur(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(t)||Xe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function ey(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class xi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ty extends Xg{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($u("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class aa extends ty{data(e={}){return super.data(e)}}class a0{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new xi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new aa(this._firestore,this._userDataWriter,r.key,r,new xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new aa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new xi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new aa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new xi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:c0(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function c0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function ar(n){n=nn(n,Nt);const e=nn(n.firestore,ss);return jA(xu(e),n._key).then(t=>l0(e,n,t))}class ny extends o0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ks(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,t)}}function it(n){n=nn(n,rs);const e=nn(n.firestore,ss),t=xu(e),r=new ny(e);return s0(n._query),GA(t,n._query).then(s=>new a0(e,r,n,s))}function Ct(n,e,t){n=nn(n,Nt);const r=nn(n.firestore,ss),s=ey(n.converter,e,t);return mc(r,[Wg(dc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Et.none())])}function rt(n,e,t,...r){n=nn(n,Nt);const s=nn(n.firestore,ss),i=dc(s);let o;return o=typeof(e=Ne(e))=="string"||e instanceof lc?e0(i,"updateDoc",n._key,e,t,r):ZA(i,"updateDoc",n._key,e),mc(s,[o.toMutation(n._key,Et.exists(!0))])}function Ht(n){return mc(nn(n.firestore,ss),[new Za(n._key,Et.none())])}function ry(n,e){const t=nn(n.firestore,ss),r=ne(n),s=ey(n.converter,e);return mc(t,[Wg(dc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Et.exists(!1))]).then(()=>r)}function mc(n,e){return function(r,s){const i=new pn;return r.asyncQueue.enqueueAndForget(async()=>AA(await qA(r),s,i)),i.promise}(xu(n),e)}function l0(n,e,t){const r=t.docs.get(e._key),s=new ny(n);return new ty(n,s,e._key,r,new xi(t.hasPendingWrites,t.fromCache),e.converter)}class u0{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=m0(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function d0(n){return new u0(n)}class h0{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=io.provider,this._offlineComponentProvider={build:t=>new Ug(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class f0{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=io.provider,this._offlineComponentProvider={build:t=>new FA(t,e==null?void 0:e.cacheSizeBytes)}}}function m0(n){return new h0(void 0)}function p0(){return new f0}function De(){return new Ou("serverTimestamp")}function sy(...n){return new Mu("arrayUnion",n)}(function(e,t=!0){(function(s){Ys=s})(es),en(new zt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ss(new QT(r.getProvider("auth-internal")),new ZT(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Mt(Eh,"4.7.3",e),Mt(Eh,"4.7.3","esm2017")})();/**
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
 */const iy="firebasestorage.googleapis.com",oy="storageBucket",g0=2*60*1e3,y0=10*60*1e3;/**
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
 */class Qe extends rn{constructor(e,t,r=0){super(Qc(e),`Firebase Storage: ${t} (${Qc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function Qc(n){return"storage/"+n}function ju(){const n="An unknown error occurred, please check the error payload for server response.";return new Qe(We.UNKNOWN,n)}function v0(n){return new Qe(We.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function _0(n){return new Qe(We.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function w0(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(We.UNAUTHENTICATED,n)}function I0(){return new Qe(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function T0(n){return new Qe(We.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function E0(){return new Qe(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function b0(){return new Qe(We.CANCELED,"User canceled the upload/download.")}function A0(n){return new Qe(We.INVALID_URL,"Invalid URL '"+n+"'.")}function S0(n){return new Qe(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function R0(){return new Qe(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+oy+"' property when initializing the app?")}function P0(){return new Qe(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function C0(){return new Qe(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function k0(n){return new Qe(We.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Vl(n){return new Qe(We.INVALID_ARGUMENT,n)}function ay(){return new Qe(We.APP_DELETED,"The Firebase app was deleted.")}function D0(n){return new Qe(We.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gi(n,e){return new Qe(We.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ai(n){throw new Qe(We.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class $t{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=$t.makeFromUrl(e,t)}catch{return new $t(e,"")}if(r.path==="")return r;throw S0(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(B){B.path_=decodeURIComponent(B.path)}const h="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${h}/b/${s}/o${g}`,"i"),E={bucket:1,path:3},P=t===iy?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",L=new RegExp(`^https?://${P}/${s}/${C}`,"i"),x=[{regex:c,indices:l,postModify:i},{regex:_,indices:E,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let B=0;B<x.length;B++){const z=x[B],Q=z.regex.exec(e);if(Q){const A=Q[z.indices.bucket];let w=Q[z.indices.path];w||(w=""),r=new $t(A,w),z.postModify(r);break}}if(r==null)throw A0(e);return r}}class N0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function x0(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function h(...C){u||(u=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,n(_,l())},C)}function g(){i&&clearTimeout(i)}function _(C,...L){if(u){g();return}if(C){g(),h.call(null,C,...L);return}if(l()||o){g(),h.call(null,C,...L);return}r<64&&(r*=2);let x;c===1?(c=2,x=0):x=(r+Math.random())*1e3,p(x)}let E=!1;function P(C){E||(E=!0,g(),!u&&(s!==null?(C||(c=2),clearTimeout(s),p(0)):C||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,P(!0)},t),P}function L0(n){n(!1)}/**
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
 */function V0(n){return n!==void 0}function O0(n){return typeof n=="object"&&!Array.isArray(n)}function Gu(n){return typeof n=="string"||n instanceof String}function Nf(n){return Ku()&&n instanceof Blob}function Ku(){return typeof Blob<"u"}function xf(n,e,t,r){if(r<e)throw Vl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Vl(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function zu(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function cy(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Or;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Or||(Or={}));/**
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
 */function M0(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class B0{constructor(e,t,r,s,i,o,c,l,u,h,p,g=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,E)=>{this.resolve_=_,this.reject_=E,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ho(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Or.NO_ERROR,l=i.getStatus();if(!c||M0(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Or.ABORT;r(!1,new Ho(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ho(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());V0(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=ju();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?ay():b0();o(l)}else{const l=E0();o(l)}};this.canceled_?t(!1,new Ho(!1,null,!0)):this.backoffId_=x0(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&L0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ho{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function F0(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function $0(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function U0(n,e){e&&(n["X-Firebase-GMPID"]=e)}function q0(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function j0(n,e,t,r,s,i,o=!0){const c=cy(n.urlParams),l=n.url+c,u=Object.assign({},n.headers);return U0(u,e),F0(u,t),$0(u,i),q0(u,r),new B0(l,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
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
 */function G0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function K0(...n){const e=G0();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Ku())return new Blob(n);throw new Qe(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function z0(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function H0(n){if(typeof atob>"u")throw k0("base-64");return atob(n)}/**
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
 */const Zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yc{constructor(e,t){this.data=e,this.contentType=t||null}}function ly(n,e){switch(n){case Zt.RAW:return new Yc(uy(e));case Zt.BASE64:case Zt.BASE64URL:return new Yc(dy(n,e));case Zt.DATA_URL:return new Yc(Q0(e),Y0(e))}throw ju()}function uy(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function W0(n){let e;try{e=decodeURIComponent(n)}catch{throw Gi(Zt.DATA_URL,"Malformed data URL.")}return uy(e)}function dy(n,e){switch(n){case Zt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Gi(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Zt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Gi(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=H0(e)}catch(s){throw s.message.includes("polyfill")?s:Gi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class hy{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Gi(Zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=J0(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Q0(n){const e=new hy(n);return e.base64?dy(Zt.BASE64,e.rest):W0(e.rest)}function Y0(n){return new hy(n).contentType}function J0(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Xn{constructor(e,t){let r=0,s="";Nf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Nf(this.data_)){const r=this.data_,s=z0(r,e,t);return s===null?null:new Xn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Xn(r,!0)}}static getBlob(...e){if(Ku()){const t=e.map(r=>r instanceof Xn?r.data_:r);return new Xn(K0.apply(null,t))}else{const t=e.map(o=>Gu(o)?ly(Zt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Xn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function fy(n){let e;try{e=JSON.parse(n)}catch{return null}return O0(e)?e:null}/**
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
 */function X0(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Z0(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function my(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function eS(n,e){return e}class Pt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||eS}}let Wo=null;function tS(n){return!Gu(n)||n.length<2?n:my(n)}function py(){if(Wo)return Wo;const n=[];n.push(new Pt("bucket")),n.push(new Pt("generation")),n.push(new Pt("metageneration")),n.push(new Pt("name","fullPath",!0));function e(i,o){return tS(o)}const t=new Pt("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new Pt("size");return s.xform=r,n.push(s),n.push(new Pt("timeCreated")),n.push(new Pt("updated")),n.push(new Pt("md5Hash",null,!0)),n.push(new Pt("cacheControl",null,!0)),n.push(new Pt("contentDisposition",null,!0)),n.push(new Pt("contentEncoding",null,!0)),n.push(new Pt("contentLanguage",null,!0)),n.push(new Pt("contentType",null,!0)),n.push(new Pt("metadata","customMetadata",!0)),Wo=n,Wo}function nS(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new $t(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function rS(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return nS(r,n),r}function gy(n,e,t){const r=fy(e);return r===null?null:rS(n,r,t)}function sS(n,e,t,r){const s=fy(e);if(s===null||!Gu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=n.bucket,p=n.fullPath,g="/b/"+o(h)+"/o/"+o(p),_=zu(g,t,r),E=cy({alt:"media",token:u});return _+E})[0]}function iS(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class yy{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function vy(n){if(!n)throw ju()}function oS(n,e){function t(r,s){const i=gy(n,s,e);return vy(i!==null),i}return t}function aS(n,e){function t(r,s){const i=gy(n,s,e);return vy(i!==null),sS(i,s,n.host,n._protocol)}return t}function _y(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=I0():s=w0():t.getStatus()===402?s=_0(n.bucket):t.getStatus()===403?s=T0(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function cS(n){const e=_y(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=v0(n.path)),i.serverResponse=s.serverResponse,i}return t}function lS(n,e,t){const r=e.fullServerUrl(),s=zu(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new yy(s,i,aS(n,t),o);return c.errorHandler=cS(e),c}function uS(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function dS(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=uS(null,e)),r}function hS(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let x="";for(let B=0;B<2;B++)x=x+Math.random().toString().slice(2);return x}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=dS(e,r,s),h=iS(u,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+l+"--",_=Xn.getBlob(p,r,g);if(_===null)throw P0();const E={name:u.fullPath},P=zu(i,n.host,n._protocol),C="POST",L=n.maxUploadRetryTime,M=new yy(P,C,oS(n,t),L);return M.urlParams=E,M.headers=o,M.body=_.uploadData(),M.errorHandler=_y(e),M}class fS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Or.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Or.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Or.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw Ai("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ai("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ai("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ai("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ai("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mS extends fS{initXhr(){this.xhr_.responseType="text"}}function wy(){return new mS}/**
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
 */class Wr{constructor(e,t){this._service=e,t instanceof $t?this._location=t:this._location=$t.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Wr(e,t)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return my(this._location.path)}get storage(){return this._service}get parent(){const e=X0(this._location.path);if(e===null)return null;const t=new $t(this._location.bucket,e);return new Wr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw D0(e)}}function pS(n,e,t){n._throwIfRoot("uploadBytes");const r=hS(n.storage,n._location,py(),new Xn(e,!0),t);return n.storage.makeRequestWithTokens(r,wy).then(s=>({metadata:s,ref:n}))}function gS(n,e,t=Zt.RAW,r){n._throwIfRoot("uploadString");const s=ly(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),pS(n,s.data,i)}function yS(n){n._throwIfRoot("getDownloadURL");const e=lS(n.storage,n._location,py());return n.storage.makeRequestWithTokens(e,wy).then(t=>{if(t===null)throw C0();return t})}function vS(n,e){const t=Z0(n._location.path,e),r=new $t(n._location.bucket,t);return new Wr(n.storage,r)}/**
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
 */function _S(n){return/^[A-Za-z]+:\/\//.test(n)}function wS(n,e){return new Wr(n,e)}function Iy(n,e){if(n instanceof Hu){const t=n;if(t._bucket==null)throw R0();const r=new Wr(t,t._bucket);return e!=null?Iy(r,e):r}else return e!==void 0?vS(n,e):n}function IS(n,e){if(e&&_S(e)){if(n instanceof Hu)return wS(n,e);throw Vl("To use ref(service, url), the first argument must be a Storage instance.")}else return Iy(n,e)}function Lf(n,e){const t=e==null?void 0:e[oy];return t==null?null:$t.makeFromBucketSpec(t,n)}function TS(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:c_(s,n.app.options.projectId))}class Hu{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=iy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=g0,this._maxUploadRetryTime=y0,this._requests=new Set,s!=null?this._bucket=$t.makeFromBucketSpec(s,this._host):this._bucket=Lf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=Lf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new N0(ay());{const o=j0(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Vf="@firebase/storage",Of="0.13.2";/**
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
 */const Ty="storage";function Ey(n,e,t,r){return n=Ne(n),gS(n,e,t,r)}function by(n){return n=Ne(n),yS(n)}function Ay(n,e){return n=Ne(n),IS(n,e)}function ES(n=Gl(),e){n=Ne(n);const r=Zr(n,Ty).getImmediate({identifier:e}),s=o_("storage");return s&&bS(r,...s),r}function bS(n,e,t,r={}){TS(n,e,t,r)}function AS(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Hu(t,r,s,e,es)}function SS(){en(new zt(Ty,AS,"PUBLIC").setMultipleInstances(!0)),Mt(Vf,Of,""),Mt(Vf,Of,"esm2017")}SS();const Sy="@firebase/installations",Wu="0.6.9";/**
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
 */const Ry=1e4,Py=`w:${Wu}`,Cy="FIS_v2",RS="https://firebaseinstallations.googleapis.com/v1",PS=60*60*1e3,CS="installations",kS="Installations";/**
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
 */const DS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qr=new Xr(CS,kS,DS);function ky(n){return n instanceof rn&&n.code.includes("request-failed")}/**
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
 */function Dy({projectId:n}){return`${RS}/projects/${n}/installations`}function Ny(n){return{token:n.token,requestStatus:2,expiresIn:xS(n.expiresIn),creationTime:Date.now()}}async function xy(n,e){const r=(await e.json()).error;return Qr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ly({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function NS(n,{refreshToken:e}){const t=Ly(n);return t.append("Authorization",LS(e)),t}async function Vy(n){const e=await n();return e.status>=500&&e.status<600?n():e}function xS(n){return Number(n.replace("s","000"))}function LS(n){return`${Cy} ${n}`}/**
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
 */async function VS({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Dy(n),s=Ly(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:Cy,appId:n.appId,sdkVersion:Py},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Vy(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ny(u.authToken)}}else throw await xy("Create Installation",l)}/**
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
 */function Oy(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function OS(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const MS=/^[cdef][\w-]{21}$/,Ol="";function BS(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=FS(n);return MS.test(t)?t:Ol}catch{return Ol}}function FS(n){return OS(n).substr(0,22)}/**
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
 */function pc(n){return`${n.appName}!${n.appId}`}/**
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
 */const My=new Map;function By(n,e){const t=pc(n);Fy(t,e),$S(t,e)}function Fy(n,e){const t=My.get(n);if(t)for(const r of t)r(e)}function $S(n,e){const t=US();t&&t.postMessage({key:n,fid:e}),qS()}let Dr=null;function US(){return!Dr&&"BroadcastChannel"in self&&(Dr=new BroadcastChannel("[Firebase] FID Change"),Dr.onmessage=n=>{Fy(n.data.key,n.data.fid)}),Dr}function qS(){My.size===0&&Dr&&(Dr.close(),Dr=null)}/**
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
 */const jS="firebase-installations-database",GS=1,Yr="firebase-installations-store";let Jc=null;function Qu(){return Jc||(Jc=qa(jS,GS,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Yr)}}})),Jc}async function Oa(n,e){const t=pc(n),s=(await Qu()).transaction(Yr,"readwrite"),i=s.objectStore(Yr),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&By(n,e.fid),e}async function $y(n){const e=pc(n),r=(await Qu()).transaction(Yr,"readwrite");await r.objectStore(Yr).delete(e),await r.done}async function gc(n,e){const t=pc(n),s=(await Qu()).transaction(Yr,"readwrite"),i=s.objectStore(Yr),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&By(n,c.fid),c}/**
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
 */async function Yu(n){let e;const t=await gc(n.appConfig,r=>{const s=KS(r),i=zS(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Ol?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function KS(n){const e=n||{fid:BS(),registrationStatus:0};return Uy(e)}function zS(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Qr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=HS(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WS(n)}:{installationEntry:e}}async function HS(n,e){try{const t=await VS(n,e);return Oa(n.appConfig,t)}catch(t){throw ky(t)&&t.customData.serverCode===409?await $y(n.appConfig):await Oa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function WS(n){let e=await Mf(n.appConfig);for(;e.registrationStatus===1;)await Oy(100),e=await Mf(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Yu(n);return r||t}return e}function Mf(n){return gc(n,e=>{if(!e)throw Qr.create("installation-not-found");return Uy(e)})}function Uy(n){return QS(n)?{fid:n.fid,registrationStatus:0}:n}function QS(n){return n.registrationStatus===1&&n.registrationTime+Ry<Date.now()}/**
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
 */async function YS({appConfig:n,heartbeatServiceProvider:e},t){const r=JS(n,t),s=NS(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Py,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Vy(()=>fetch(r,c));if(l.ok){const u=await l.json();return Ny(u)}else throw await xy("Generate Auth Token",l)}function JS(n,{fid:e}){return`${Dy(n)}/${e}/authTokens:generate`}/**
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
 */async function Ju(n,e=!1){let t;const r=await gc(n.appConfig,i=>{if(!qy(i))throw Qr.create("not-registered");const o=i.authToken;if(!e&&eR(o))return i;if(o.requestStatus===1)return t=XS(n,e),i;{if(!navigator.onLine)throw Qr.create("app-offline");const c=nR(i);return t=ZS(n,c),c}});return t?await t:r.authToken}async function XS(n,e){let t=await Bf(n.appConfig);for(;t.authToken.requestStatus===1;)await Oy(100),t=await Bf(n.appConfig);const r=t.authToken;return r.requestStatus===0?Ju(n,e):r}function Bf(n){return gc(n,e=>{if(!qy(e))throw Qr.create("not-registered");const t=e.authToken;return rR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ZS(n,e){try{const t=await YS(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Oa(n.appConfig,r),t}catch(t){if(ky(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await $y(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Oa(n.appConfig,r)}throw t}}function qy(n){return n!==void 0&&n.registrationStatus===2}function eR(n){return n.requestStatus===2&&!tR(n)}function tR(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+PS}function nR(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function rR(n){return n.requestStatus===1&&n.requestTime+Ry<Date.now()}/**
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
 */async function sR(n){const e=n,{installationEntry:t,registrationPromise:r}=await Yu(e);return r?r.catch(console.error):Ju(e).catch(console.error),t.fid}/**
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
 */async function iR(n,e=!1){const t=n;return await oR(t),(await Ju(t,e)).token}async function oR(n){const{registrationPromise:e}=await Yu(n);e&&await e}/**
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
 */function aR(n){if(!n||!n.options)throw Xc("App Configuration");if(!n.name)throw Xc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Xc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Xc(n){return Qr.create("missing-app-config-values",{valueName:n})}/**
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
 */const jy="installations",cR="installations-internal",lR=n=>{const e=n.getProvider("app").getImmediate(),t=aR(e),r=Zr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uR=n=>{const e=n.getProvider("app").getImmediate(),t=Zr(e,jy).getImmediate();return{getId:()=>sR(t),getToken:s=>iR(t,s)}};function dR(){en(new zt(jy,lR,"PUBLIC")),en(new zt(cR,uR,"PRIVATE"))}dR();Mt(Sy,Wu);Mt(Sy,Wu,"esm2017");/**
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
 */const hR="/firebase-messaging-sw.js",fR="/firebase-cloud-messaging-push-scope",Gy="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",mR="https://fcmregistrations.googleapis.com/v1",Ky="google.c.a.c_id",pR="google.c.a.c_l",gR="google.c.a.ts",yR="google.c.a.e";var Ff;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ff||(Ff={}));/**
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
 */var oo;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(oo||(oo={}));/**
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
 */function In(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function vR(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Zc="fcm_token_details_db",_R=5,$f="fcm_token_object_Store";async function wR(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Zc))return null;let e=null;return(await qa(Zc,_R,{upgrade:async(r,s,i,o)=>{var c;if(s<2||!r.objectStoreNames.contains($f))return;const l=o.objectStore($f),u=await l.index("fcmSenderId").get(n);if(await l.clear(),!!u){if(s===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(c=h.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:In(h.vapidKey)}}}else if(s===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:In(h.auth),p256dh:In(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:In(h.vapidKey)}}}else if(s===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:In(h.auth),p256dh:In(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:In(h.vapidKey)}}}}}})).close(),await Bc(Zc),await Bc("fcm_vapid_details_db"),await Bc("undefined"),IR(e)?e:null}function IR(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const TR="firebase-messaging-database",ER=1,ao="firebase-messaging-store";let el=null;function zy(){return el||(el=qa(TR,ER,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ao)}}})),el}async function bR(n){const e=Hy(n),r=await(await zy()).transaction(ao).objectStore(ao).get(e);if(r)return r;{const s=await wR(n.appConfig.senderId);if(s)return await Xu(n,s),s}}async function Xu(n,e){const t=Hy(n),s=(await zy()).transaction(ao,"readwrite");return await s.objectStore(ao).put(e,t),await s.done,e}function Hy({appConfig:n}){return n.appId}/**
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
 */const AR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},At=new Xr("messaging","Messaging",AR);/**
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
 */async function SR(n,e){const t=await ed(n),r=Wy(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(Zu(n.appConfig),s)).json()}catch(o){throw At.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw At.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw At.create("token-subscribe-no-token");return i.token}async function RR(n,e){const t=await ed(n),r=Wy(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Zu(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw At.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw At.create("token-update-failed",{errorInfo:o})}if(!i.token)throw At.create("token-update-no-token");return i.token}async function PR(n,e){const r={method:"DELETE",headers:await ed(n)};try{const i=await(await fetch(`${Zu(n.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw At.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw At.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Zu({projectId:n}){return`${mR}/projects/${n}/registrations`}async function ed({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Wy({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==Gy&&(s.web.applicationPubKey=r),s}/**
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
 */const CR=7*24*60*60*1e3;async function kR(n){const e=await NR(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:In(e.getKey("auth")),p256dh:In(e.getKey("p256dh"))},r=await bR(n.firebaseDependencies);if(r){if(xR(r.subscriptionOptions,t))return Date.now()>=r.createTime+CR?DR(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await PR(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Uf(n.firebaseDependencies,t)}else return Uf(n.firebaseDependencies,t)}async function DR(n,e){try{const t=await RR(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Xu(n.firebaseDependencies,r),t}catch(t){throw t}}async function Uf(n,e){const r={token:await SR(n,e),createTime:Date.now(),subscriptionOptions:e};return await Xu(n,r),r.token}async function NR(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:vR(e)})}function xR(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
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
 */function qf(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return LR(e,n),VR(e,n),OR(e,n),e}function LR(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function VR(n,e){e.data&&(n.data=e.data)}function OR(n,e){var t,r,s,i,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;c&&(n.fcmOptions.link=c);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(n.fcmOptions.analyticsLabel=l)}/**
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
 */function MR(n){return typeof n=="object"&&!!n&&Ky in n}/**
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
 */function BR(n){if(!n||!n.options)throw tl("App Configuration Object");if(!n.name)throw tl("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw tl(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function tl(n){return At.create("missing-app-config-values",{valueName:n})}/**
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
 */class FR{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=BR(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function $R(n){try{n.swRegistration=await navigator.serviceWorker.register(hR,{scope:fR}),n.swRegistration.update().catch(()=>{})}catch(e){throw At.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function UR(n,e){if(!e&&!n.swRegistration&&await $R(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw At.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function qR(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Gy)}/**
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
 */async function Qy(n,e){if(!navigator)throw At.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw At.create("permission-blocked");return await qR(n,e==null?void 0:e.vapidKey),await UR(n,e==null?void 0:e.serviceWorkerRegistration),kR(n)}/**
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
 */async function jR(n,e,t){const r=GR(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[Ky],message_name:t[pR],message_time:t[gR],message_device_time:Math.floor(Date.now()/1e3)})}function GR(n){switch(n){case oo.NOTIFICATION_CLICKED:return"notification_open";case oo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function KR(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===oo.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(qf(t)):n.onMessageHandler.next(qf(t)));const r=t.data;MR(r)&&r[yR]==="1"&&await jR(n,t.messageType,r)}const jf="@firebase/messaging",Gf="0.12.12";/**
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
 */const zR=n=>{const e=new FR(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>KR(e,t)),e},HR=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Qy(e,r)}};function WR(){en(new zt("messaging",zR,"PUBLIC")),en(new zt("messaging-internal",HR,"PRIVATE")),Mt(jf,Gf),Mt(jf,Gf,"esm2017")}/**
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
 */async function Yy(){try{await dm()}catch{return!1}return typeof window<"u"&&Ul()&&p_()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function QR(n,e){if(!navigator)throw At.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function YR(n=Gl()){return Yy().then(e=>{if(!e)throw At.create("unsupported-browser")},e=>{throw At.create("indexed-db-unsupported")}),Zr(Ne(n),"messaging").getImmediate()}async function JR(n,e){return n=Ne(n),Qy(n,e)}function XR(n,e){return n=Ne(n),QR(n,e)}WR();const ZR={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},yc=mm(ZR),Io=KT(yc),K=HA(yc,{localCache:d0({tabManager:p0()})}),Jy=ES(yc);let co=null;const Xy=Yy().then(n=>(n&&(co=YR(yc)),n)),m={user:null,profile:null,isAdmin:!1,isSuperAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,meetups:[],currentCourse:null,courseMap:null,courseMapLayer:null,approvedDraft:{new:[],edit:[]},gpsTracking:!1,boostThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0,shareRequests:[],viewingUid:null,viewingName:null,viewedRounds:{},compareUid1:void 0,compareUid2:void 0};function W(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function j(n,e="info"){const t=document.createElement("div");t.className=`toast toast-${e}`,t.textContent=n,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("toast-show")),setTimeout(()=>{t.classList.remove("toast-show"),setTimeout(()=>t.remove(),300)},3500)}function pr(n,e){const t=document.getElementById("confirm-modal");document.getElementById("confirm-msg").textContent=n,t.classList.remove("hidden");const r=()=>{t.classList.add("hidden"),window._confirmAccept=null,window._confirmReject=null};window._confirmAccept=()=>{r(),e()},window._confirmReject=()=>{r()}}const Zy="archery_v5",eP="archery_v4";function Kf(){try{const n=JSON.parse(localStorage.getItem(Zy)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(eP)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function jt(){try{localStorage.setItem(Zy,JSON.stringify({friends:m.friends,rounds:m.rounds.slice(0,200),courses:m.courses}))}catch(n){(n==null?void 0:n.name)==="QuotaExceededError"&&j("Lokalt lager er fuldt — nogle data blev ikke gemt","error")}}const ev="archery_lang",Ma={da:{nav:{scoring:"POINT",results:"RESULTATER",analyse:"ANALYSE",courses:"BANER",friends:"VENNER"},common:{cancel:"Annuller",confirm:"Bekræft",save:"Gem",add:"Tilføj",errorPrefix:"Fejl: ",linkCopied:"Link kopieret",unknown:"Ukendt",gender:{herre:"Herre",dame:"Dame"},bowClass:{langbue:"Langbue",trad:"Traditionel",recurve:"Recurve (olympisk)",compound:"Compound",barbue:"Barbue",buejaeger:"Buejæger",tradBuejaeger:"Traditionel buejæger",rytterbue:"Rytterbue"},bowClassShort:{langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejaeger:"Buejæger",tradBuejaeger:"Trad. buejæger",rytterbue:"Rytterbue"}},setup:{newRoundTitle:"🌲 Ny Runde",roundName:"Rundenavn",roundNameDefault:"Min Skydning",courseLabel:"Bane (valgfri)",noCourse:"-- Ingen bane --",targetCountLabel:"Antal mål",targets24:"24 Mål",targets30:"30 Mål",other:"Andet...",targetsUnit:"{n} mål",targetCountPlaceholder:"Antal mål",rulesetLabel:"Forbund",rulesetDgs1:"DGS (1 pil)",rulesetDgs2:"DGS (2 pile)",participantsTitle:"👥 Deltagere",searchFriend:"Søg ven...",addGuest:"+ Tilføj gæst",boostTitle:"🟢 Positiv forstærkning",enableBoost:"Aktiver positiv forstærkning",boostThreshPre:"Grøn prik hvis gns. mindst",boostThreshPost:"point/pil",gpsTitle:"📍 GPS",startTarget:"Startmål",autoFindTitle:"Auto-find nærmeste mål",autoFindSub:"Brug GPS automatisk",trackRouteTitle:"Spor rute og tid",trackRouteSub:"Registrer rute og afstand",showDistancesTitle:"Vis afstande på mål",showDistancesSub:"Kun visning — ikke redigering",startRoundBtn:"START RUNDE →"},active:{targetPrefix:"MÅL ",ofN:" af {n}",targetFallback:"Mål {n}",statAvg:"GNS.",statPoint:"POINT",statRemaining:"Tilbage",statRemainingSub:"mål",editTitle:"Rediger mål",editNamePlaceholder:"Navn på dyr",takePhoto:"📷 Tag billede",saveGps:"📍 Gem GPS",save:"Gem",cancel:"Annuller",back:"← TILBAGE",next:"NÆSTE →",finish:"AFSLUT →",skip:"⤵ SPRING",finishNow:"✓ AFSLUT NU",finishConfirm:"✓ BEKRÆFT",abort:"🗑 AFBRYD",abortConfirm:"🗑 BEKRÆFT",editBtn:"✏️ RET",runde:"RUNDE",snt:"SNT",pilLabel:"🎯 PIL {n}",arrowShort1:"P1",arrowShort2:"P2",distanceLabel:"{m} m",targetAvg:"Gns. dette mål: {v}",resumeConfirm:"Genoptag den igangværende runde?",networkError:"Runde gemt lokalt (netværksfejl)",shareError:"Kunne ikke dele runde med medskytte",notSavedLocally:"Runden er ikke gemt lokalt",gpsSaved:"GPS gemt!",gpsError:"GPS fejl: {msg}"},results:{title:"Mine runder",import:"⬆ Importér",empty:"Ingen runder endnu",roundFallback:"Runde",targetsUnit:"{n} mål",deleteConfirm:"Slet?",pointWord:"point",tableTargetHeader:"Mål",totalLabel:"Total",tableAvgHeader:"Ø/pil",distArrow1:"Snit pil 1",distArrow2:"Snit pil 2",overallAvg:"Samlet snit",summaryArrow1:"SNIT PIL 1",summaryArrow2:"SNIT PIL 2",summaryPoints:"POINT",summaryArrows:"PILE",summaryAvgPerArrow:"SNT/PIL",actualTitle:"Kun skudte mål",actualSub:"{shot} af {total} mål",actualAvgPerArrow:"SNT/PIL",actualAvgPerTarget:"SNT/MÅL",popupDistance:"DISTANCE",popupTime:"TID",sendResultsBtn:"📧 Send resultater",doneBtn:"Afslut",noRoundToSend:"Ingen runde at sende",burnBtn:"🔥 Afbrænd",burnConfirm:"Sikker? 🔥",burned:"Resultatet er brændt til aske 🔥"},email:{header:"3D Bueskydning - Resultater",subjectPrefix:"3D Bueskydning - ",dateLabel:"Dato: ",courseLabel:"Bane: ",resultsHeader:"--- RESULTATER ---",pointWord:" point",detailHeader:"--- DETALJERET ---",targetLabel:"  Mål ",totalLabel:"  Total: ",arrow1Label:"Snit pil 1",arrow2Label:"Snit pil 2",overallAvgLabel:"Samlet snit",distributionLabel:"  Fordeling: ",seeInApp:"Se resultater i appen:",loginRequired:"(Kræver login med din bruger)"},auth:{loginTab:"Log ind",signupTab:"Opret konto",emailPlaceholder:"Email",passwordPlaceholder:"Kodeord",loginBtn:"LOG IND",forgotPassword:"Glemt kodeord?",namePlaceholder:"Navn",signupPasswordPlaceholder:"Kodeord (min. 6 tegn)",selectGender:"Vælg køn",selectBowClass:"Vælg bueklasse",signupBtn:"OPRET KONTO",errUserNotFound:"Bruger ikke fundet.",errWrongPassword:"Forkert kodeord.",errInvalidCredential:"Ugyldig email eller kodeord.",errEmailInUse:"Email er allerede i brug.",errWeakPassword:"Kodeordet er for svagt (min. 6 tegn).",errInvalidEmail:"Ugyldig email-adresse.",errTooManyRequests:"For mange forsøg. Prøv igen senere.",errNetwork:"Netværksfejl. Tjek din forbindelse.",errGeneric:"Der opstod en fejl. Prøv igen.",errFillAllFields:"Udfyld alle felter.",errPasswordTooShort:"Adgangskoden skal være mindst 6 tegn.",errEnterEmailFirst:"Indtast din email først.",resetEmailSent:"Nulstillingsmail sendt!",privacyAcceptLabel:"Jeg accepterer privatlivspolitikken",newsletterOptLabel:"Jeg vil gerne modtage nyhedsbreve",errPrivacyRequired:"Du skal acceptere privatlivspolitikken for at oprette en konto."},roundImport:{importedToast:"Runde importeret: {name}",importError:"Fejl ved import: {msg}",noFileSelected:"Ingen fil valgt",loginFirst:"Log ind først",noPlayersInFile:"Filen indeholder ingen spillere med resultater",readError:"Kunne ikke læse filen: {msg}",guestFallback:"Gæst {n}",importedRoundFallback:"Importeret runde"},modals:{profil:{title:"Fuldfør din profil",desc:"Vælg køn og bueklasse for at aktivere sammenligning med andre skytter.",laterBtn:"Senere",validationMsg:"Vælg både køn og bueklasse.",saveError:"Fejl ved gem. Prøv igen."},privacy:{title:"Opdateret privatlivspolitik",desc:"Vi har opdateret vores privatlivspolitik. Læs den, og bekræft at du accepterer den, for at fortsætte.",readLink:"Læs privatlivspolitikken",continueBtn:"Fortsæt"},qr:{closeBtn:"Luk"},skip:{title:"Hop til mål",placeholder:"Målnummer",goBtn:"Hop"},guest:{title:"Tilføj gæst",placeholder:"Gæstens navn",addBtn:"Tilføj"},importPlayer:{title:"Hvem er du?"}},banners:{pwa:{text:"Installer 3D Bueskydning på din hjemmeskærm for hurtig adgang",installBtn:"INSTALLER APP"},iosInstall:{line1:"Installer 3D Bueskydning på din hjemmeskærm:",shareStepPre:"Tryk på ",shareStepPost:' Del-ikonet nederst i Safari, og vælg "Føj til hjemmeskærm".'},push:{text:"Få besked med det samme når nogen inviterer dig til en skydning – også når appen er lukket.",enableBtn:"AKTIVÉR NOTIFIKATIONER",enabledToast:"Notifikationer aktiveret"}},push:{permissionError:"Kunne ikke bede om tilladelse: {msg}",blocked:"Notifikationer blokeret i browseren — skal ændres i browserens side-indstillinger",unsupported:"Push-notifikationer understøttes ikke i denne browser",swError:"Kunne ikke registrere service worker",tokenError:"Kunne ikke hente push-token",genericError:"Push-fejl: {msg}",newMessageFallback:"Ny besked"},friends:{title:"Venner",addFriendBtn:"+ Tilføj ven",newsletterTitle:"Nyhedsbrev",requestAccessBtn:"🔎 Må jeg kigge med?",statusPending:"Afventer",cancelRequestTitle:"Fortryd anmodning",statusApproved:"Kan se resultater ✅",statusRejected:"Afvist",retryBtn:"Prøv igen",empty:"Ingen venner endnu",editTitle:"Rediger ven",addTitle:"Tilføj ven",deleteConfirm:"Slet {name}?",namePlaceholder:"Navn",phonePlaceholder:"Telefon",clubPlaceholder:"Klub",bowTypeDefault:"Buetype...",bowTypeRecurve:"Recurve",bowTypeCompound:"Compound",bowTypeLongbow:"Longbow",bowTypeBarebow:"Barebow"},admin:{loading:"Henter admins…",empty:"Ingen admins fundet",currentAdminsTitle:"NUVÆRENDE ADMINISTRATORER",youTag:"(dig)",removeBtn:"Fjern",period7:"Sidste 7 dage",period30:"Sidste 30 dage",period365:"Sidste 365 dage",loadingStats:"Henter…",totalRegistered:"I alt registreret",userNotFound:"Bruger ikke fundet",nowAdmin:"{name} er nu admin",removeConfirm:"Fjern {email} som administrator?",removedAdmin:"{email} er fjernet som admin",title:"Administrator",addAdminPlaceholder:"Email til ny admin",usageTitle:"BRUG AF APPEN",updateBtn:"Opdater",statsHint:'Klik "Opdater" for at hente statistik',allUsersTitle:"ALLE BRUGERE",searchUserPlaceholder:"Søg navn eller email…",usersCount:"{n} brugere",exportNewsletterBtn:"⬇ Eksportér nyhedsbrevs-liste",newsletterBadgeTitle:"Tilmeldt nyhedsbrev",noNewsletterSubscribers:"Ingen har tilmeldt sig nyhedsbrevet endnu",csvNameHeader:"Navn",csvEmailHeader:"Email"},meetups:{header:"Skal vi skyde sammen?",sectionSuggestBtn:"+ Foreslå",statusPending:"Afventer",statusAccepted:"Tilmeldt ✅",statusProposing:"Foreslår andet tidspunkt 🕓",statusDeclined:"Afbud ❌",empty:"Ingen planlagte skydninger endnu",joinBtn:"Tilmeld",proposeOtherBtn:"Foreslå andet tidspunkt",declineBtn:"Afbud",acceptProposalBtn:"Accepter {date} {time} ({name})",editTimeBtn:"Rediger tidspunkt",cancelMeetupBtn:"Aflys",deleteBtn:"Slet",cancelledBanner:"❌ Aflyst",notInvitedBanner:"👁 Du er ikke inviteret — vises kun for superadmin",dateTimeLine:"{date} kl. {time}",createdBy:"Oprettet af {name}",commentPlaceholder:"Skriv en kommentar…",sendBtn:"Send",noCoursesToast:"Ingen baner tilgængelige",noFriendsYet:"Du har ingen venner endnu",noOtherUsers:"Ingen andre registrerede brugere",notRegisteredNote:"ikke registreret i appen",noRecipientsSelected:"Ingen modtagere valgt endnu",selectCourseToast:"Vælg en bane",selectDateTimeToast:"Vælg dato og tid",selectRecipientToast:"Vælg mindst én modtager",invalidNamesToast:"{names} er ikke registreret i appen og blev ikke inviteret",proposalSentToast:"Forslag sendt",newTimeAcceptedToast:"Nyt tidspunkt accepteret",timeUpdatedToast:"Tidspunkt opdateret",cancelConfirm:"Aflys denne skydning?",deleteConfirm:"Slet denne skydning permanent? Det kan ikke fortrydes.",modalTitle:"Foreslå fælles skydning",proposeAnotherTitle:"Foreslå andet tidspunkt",editTimeTitle:"Rediger tidspunkt",courseLabel:"Bane",selectCoursePlaceholder:"-- Vælg bane --",dateLabel:"Dato",timeLabel:"Tidspunkt",noteLabel:"Bemærkning (valgfrit)",notePlaceholder:"Skriv en bemærkning om skydningen…",myFriendsTab:"Mine venner",allRegisteredTab:"Alle registrerede",selectAllBtn:"Vælg alle",sendProposalBtn:"Send forslag"},sharing:{title:"Må jeg kigge med?",emptyState:'Anmod om at se en vens resultater ved at trykke "🔎 Må jeg kigge med?" på personen i din venneliste ovenfor.',incomingRequestsTitle:"Anmodninger om at se dine resultater",acceptBtn:"Accepter",rejectBtn:"Afvis",sharingWithTitle:"Du deler resultater med",stopSharingBtn:"Afslut deling",viewableTitle:"Du kan se resultater for",viewInAnalyseBtn:"Se i Analyse",ownRequestError:"Du kan ikke anmode om at se dine egne resultater",notRegisteredError:"{name} er ikke registreret i appen",requestSentToast:"Anmodning sendt",acceptedToast:"Deling accepteret",rejectConfirm:"Afvis denne anmodning?",stopConfirm:"Afslut denne deling? Personen mister med det samme adgang til dine resultater.",stoppedToast:"Deling afsluttet"},courses:{title:"Baner",createBtn:"+ Opret bane",backBtn:"← Tilbage",mapTab:"Kort",visitsTab:"Besøg",editTab:"Rediger",showMyPosition:"📍 Vis min position",deleteCourseBtn:"🗑 Slet bane",createModalTitle:"Opret bane",namePlaceholder:"Banenavn",searchPlaceholder:"Søg bane...",targets24:"24 mål",targets30:"30 mål",locationPlaceholder:"Lokation (fx by)",visibilityPublic:"Offentlig",visibilityPrivate:"Privat",visibilityHidden:"Skjult (kun godkendte)",visibilityHint:'Privat: banen er stadig synlig for alle, men vises med "(Banen er kun for medlemmer)". Skjult: kun skytter du selv godkender (nedenfor) kan se banen.',membersOnlySuffix:"(Banen er kun for medlemmer)",searchUserPlaceholder:"Søg registreret bruger…",manualEmailPlaceholder:"…eller indtast email direkte",createBtnModal:"Opret",empty:"Ingen baner endnu",targetNameFallback:"Mål",emptyVisits:"Ingen besøg endnu",viewResultTitle:"Se resultat",infoTitle:"Baneinfo",nameLabel:"Banenavn",locationLabel:"Lokation",visibilityLabel:"Synlighed",saveInfoBtn:"Gem baneinfo",targetsHeader:"Mål ({n})",targetTitle:"Mål {n}",setGpsTitle:"Sæt GPS",nameLabelTarget:"Navn",emojiLabel:"Emoji",distanceLabel:"Afstand (m)",gpsInfo:"📍 GPS: {coords}",gpsMissing:"Ingen GPS",uploadPhotoBtn:"📷 Upload foto",saveAllTargetsBtn:"💾 Gem alle mål",noApprovedYet:"Ingen godkendt endnu",savedToast:"Gemt!",targetAddedToast:"Mål {n} tilføjet!",deleteTargetConfirm:"Slet mål {n}?",deleteTargetError:"Fejl: Kunne ikke slette mål",gpsSetToast:"GPS sat for mål {n}!",gpsErrorToast:"GPS fejl: {msg}",photoSavedToast:"Foto gemt!",uploadErrorToast:"Upload fejl: {msg}",allTargetsSavedToast:"Alle mål gemt!",gpsUnavailableToast:"GPS ikke tilgængeligt",deleteCourseConfirm:'Slet banen "{name}"?',courseDeletedToast:"Bane slettet",deleteCourseError:"Fejl: Kunne ikke slette bane",courseCreatedToast:"Bane oprettet!",createCourseError:"Fejl: Kunne ikke oprette bane"},analyse:{title:"Analyse",myselfOption:"Mig selv",filterAll:"Alle runder",filterLatest:"Seneste runde",filterLast10:"Seneste 10",filterLast20:"Seneste 20",filterSpecific:"Specifik runde",filterCompare:"Sammenlign runder",allCourses:"Alle baner",allRulesets:"Alle forbund",numRoundsPlaceholder:"Antal runder",onlyCompletedLabel:"Kun gennemførte runder (alle mål skudt)",onlyStartedAt1Label:"Kun runder startet ved mål 1",round1Label:"RUNDE 1",round2Label:"RUNDE 2",selectRoundPlaceholder:"Vælg runde...",selectRound2Placeholder:"Vælg runde 2...",arrow1:"PIL 1",arrow2:"PIL 2",singleArrowNote:"{ruleset} skydes med 1 pil pr. mål — PIL 1/PIL 2 er derfor ikke relevant",singleArrowNoteCompare:"{ruleset} skydes med 1 pil pr. mål — PIL 1/PIL 2-sammenligning er derfor ikke relevant",notRelevant:"Ikke relevant",best:"BEDSTE",worst:"SVÆRESTE",comparisonTitle:"SAMMENLIGNING",vs:"VS",wonBy:"{name} vandt med {diff} point",tie:"Uafgjort!",arrowStatsTitle:"PIL STATISTIK",bestWorstTargetTitle:"BEDSTE OG SVÆRESTE MÅL",zoneDistTitle:"FORDELING PR. SCOREZONE",selectTwoRounds:"Vælg to runder ovenfor",roundsNotFound:"Kunne ikke finde runderne",meFallback:"Mig",viewingResultsFor:"Viser resultater for {name}",statRounds:"RUNDER",statAvgPerRound:"SNIT/RUNDE",statBest:"BEDSTE",statLowest:"LAVESTE",roundsIncludedTitle:"RUNDER I DENNE ANALYSE ({n})",selectRulesetNote:"Vælg et specifikt forbund i filteret ovenfor for at se pil-fordeling (runderne i dette udvalg bruger forskellige regelsæt)",bestWithArrow1:"Bedst med PIL 1 🏹",bestWithArrow2:"Bedst med PIL 2 🏹",bothArrowsEqual:"Begge pile er lige gode 🎯",shotOrdinal:"Skud nr. {n}",developmentTitle:"UDVIKLING (RUNDER)",oldest:"ældst",newest:"nyest",perTargetGraphTitle:"GENNEMSNIT PR. SKUDRÆKKEFØLGE",perTargetCaption:"Skudrækkefølge — 1 = første mål skudt · stiplet linje = trend",consistencyTitle:"KONSISTENS (SPREDNING)",consistencyNote:"Standardafvigelse i point (samme skala som scoren, 0-11) — ikke et 0-1-tal. Tæt på 0 = meget ensartet gennem runden; jo højere tal, jo større udsving mellem de bedste og sværeste mål.",fullscreenGraphTitle:"GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset",consistencyOverTimeTitle:"KONSISTENS OVER TID · denne bane",consistencyOverTimeCaption:"Spredning pr. runde (samme point-skala som ovenfor) — faldende kurve = mere ensartet skydning over tid",comparisonSectionTitle:"SAMMENLIGNING · {gender} {bowClass}",loadingComparison:"Henter...",noOtherShootersYet:"Ingen andre {gender} {bowClass}-skytter har skudt denne bane endnu.",yourAvgPerArrow:"DIT SNT/PIL",difference:"DIFFERENCE",othersAvgPerArrow:"ANDRES SNT/PIL",basedOnRoundsSingular:"Baseret på {n} runde fra andre skytter",basedOnRoundsPlural:"Baseret på {n} runder fra andre skytter",distanceInsightsTitle:"AFSTANDS-ANALYSE",distanceInsightsSubtitle:"Andel skud der rammer {label} pr. afstandsgruppe",distanceInsightsCoverage:"Baseret på {used} af {total} runder — kun runder gået på baner med kendte mål-afstande tæller med",distBucket5to15:"5-15 m",distBucket16to25:"16-25 m",distBucket26to30:"26-30 m",killZoneLabel:"kill-zonen",trendUp:"📈 Din score er steget {pct}% de seneste {weeks} uger",trendDown:"📉 Din score er faldet {pct}% de seneste {weeks} uger",trendFlat:"Din score har ligget stabilt de seneste {weeks} uger",trendNotEnoughData:"Ikke nok runder de seneste {weeks} uger til at vise en udvikling endnu",weakestZone:"Din største svaghed, målt på pilegennemsnit, er mål på {range}",pointPotential:"Hvis dit snit pr. pil på {range} kom op på dit samlede snit, svarer det til ca. +{n} point pr. runde"}},en:{nav:{scoring:"SCORING",results:"RESULTS",analyse:"ANALYSIS",courses:"COURSES",friends:"FRIENDS"},common:{cancel:"Cancel",confirm:"Confirm",save:"Save",add:"Add",errorPrefix:"Error: ",linkCopied:"Link copied",unknown:"Unknown",gender:{herre:"Male",dame:"Female"},bowClass:{langbue:"Longbow",trad:"Traditional",recurve:"Recurve (Olympic)",compound:"Compound",barbue:"Barebow",buejaeger:"Bowhunter",tradBuejaeger:"Traditional bowhunter",rytterbue:"Horsebow"},bowClassShort:{langbue:"Longbow",trad:"Traditional",recurve:"Recurve",compound:"Compound",barbue:"Barebow",buejaeger:"Bowhunter",tradBuejaeger:"Trad. bowhunter",rytterbue:"Horsebow"}},setup:{newRoundTitle:"🌲 New Round",roundName:"Round name",roundNameDefault:"My Shoot",courseLabel:"Course (optional)",noCourse:"-- No course --",targetCountLabel:"Number of targets",targets24:"24 Targets",targets30:"30 Targets",other:"Other...",targetsUnit:"{n} targets",targetCountPlaceholder:"Number of targets",rulesetLabel:"Ruleset",rulesetDgs1:"DGS (1 arrow)",rulesetDgs2:"DGS (2 arrows)",participantsTitle:"👥 Participants",searchFriend:"Search friend...",addGuest:"+ Add guest",boostTitle:"🟢 Positive reinforcement",enableBoost:"Enable positive reinforcement",boostThreshPre:"Green dot if avg. at least",boostThreshPost:"points/arrow",gpsTitle:"📍 GPS",startTarget:"Start target",autoFindTitle:"Auto-find nearest target",autoFindSub:"Use GPS automatically",trackRouteTitle:"Track route and time",trackRouteSub:"Record route and distance",showDistancesTitle:"Show target distances",showDistancesSub:"View only — not editable",startRoundBtn:"START ROUND →"},active:{targetPrefix:"TARGET ",ofN:" of {n}",targetFallback:"Target {n}",statAvg:"AVG.",statPoint:"POINTS",statRemaining:"Remaining",statRemainingSub:"targets",editTitle:"Edit target",editNamePlaceholder:"Animal name",takePhoto:"📷 Take photo",saveGps:"📍 Save GPS",save:"Save",cancel:"Cancel",back:"← BACK",next:"NEXT →",finish:"FINISH →",skip:"⤵ SKIP",finishNow:"✓ FINISH NOW",finishConfirm:"✓ CONFIRM",abort:"🗑 ABORT",abortConfirm:"🗑 CONFIRM",editBtn:"✏️ EDIT",runde:"ROUND",snt:"AVG",pilLabel:"🎯 ARROW {n}",arrowShort1:"A1",arrowShort2:"A2",distanceLabel:"{m} m",targetAvg:"Avg. this target: {v}",resumeConfirm:"Resume the round in progress?",networkError:"Round saved locally (network error)",shareError:"Could not share round with co-shooter",notSavedLocally:"The round is not saved locally",gpsSaved:"GPS saved!",gpsError:"GPS error: {msg}"},results:{title:"My rounds",import:"⬆ Import",empty:"No rounds yet",roundFallback:"Round",targetsUnit:"{n} targets",deleteConfirm:"Delete?",pointWord:"points",tableTargetHeader:"Target",totalLabel:"Total",tableAvgHeader:"Avg/arrow",distArrow1:"Avg. arrow 1",distArrow2:"Avg. arrow 2",overallAvg:"Overall avg.",summaryArrow1:"AVG ARROW 1",summaryArrow2:"AVG ARROW 2",summaryPoints:"POINTS",summaryArrows:"ARROWS",summaryAvgPerArrow:"AVG/ARROW",actualTitle:"Targets shot only",actualSub:"{shot} of {total} targets",actualAvgPerArrow:"AVG/ARROW",actualAvgPerTarget:"AVG/TARGET",popupDistance:"DISTANCE",popupTime:"TIME",sendResultsBtn:"📧 Send results",doneBtn:"Done",noRoundToSend:"No round to send",burnBtn:"🔥 Burn",burnConfirm:"Sure? 🔥",burned:"The result has been burned to ashes 🔥"},email:{header:"3D Archery - Results",subjectPrefix:"3D Archery - ",dateLabel:"Date: ",courseLabel:"Course: ",resultsHeader:"--- RESULTS ---",pointWord:" points",detailHeader:"--- DETAILED ---",targetLabel:"  Target ",totalLabel:"  Total: ",arrow1Label:"Avg. arrow 1",arrow2Label:"Avg. arrow 2",overallAvgLabel:"Overall avg.",distributionLabel:"  Distribution: ",seeInApp:"See results in the app:",loginRequired:"(Requires login with your account)"},auth:{loginTab:"Log in",signupTab:"Create account",emailPlaceholder:"Email",passwordPlaceholder:"Password",loginBtn:"LOG IN",forgotPassword:"Forgot password?",namePlaceholder:"Name",signupPasswordPlaceholder:"Password (min. 6 characters)",selectGender:"Select gender",selectBowClass:"Select bow class",signupBtn:"CREATE ACCOUNT",errUserNotFound:"User not found.",errWrongPassword:"Incorrect password.",errInvalidCredential:"Invalid email or password.",errEmailInUse:"Email is already in use.",errWeakPassword:"The password is too weak (min. 6 characters).",errInvalidEmail:"Invalid email address.",errTooManyRequests:"Too many attempts. Try again later.",errNetwork:"Network error. Check your connection.",errGeneric:"An error occurred. Try again.",errFillAllFields:"Fill in all fields.",errPasswordTooShort:"The password must be at least 6 characters.",errEnterEmailFirst:"Enter your email first.",resetEmailSent:"Reset email sent!",privacyAcceptLabel:"I accept the privacy policy",newsletterOptLabel:"I would like to receive newsletters",errPrivacyRequired:"You must accept the privacy policy to create an account."},roundImport:{importedToast:"Round imported: {name}",importError:"Import error: {msg}",noFileSelected:"No file selected",loginFirst:"Log in first",noPlayersInFile:"The file contains no players with results",readError:"Could not read the file: {msg}",guestFallback:"Guest {n}",importedRoundFallback:"Imported round"},modals:{profil:{title:"Complete your profile",desc:"Select gender and bow class to enable comparison with other archers.",laterBtn:"Later",validationMsg:"Select both gender and bow class.",saveError:"Error saving. Try again."},privacy:{title:"Updated privacy policy",desc:"We have updated our privacy policy. Please read it and confirm you accept it to continue.",readLink:"Read the privacy policy",continueBtn:"Continue"},qr:{closeBtn:"Close"},skip:{title:"Jump to target",placeholder:"Target number",goBtn:"Go"},guest:{title:"Add guest",placeholder:"Guest's name",addBtn:"Add"},importPlayer:{title:"Who are you?"}},banners:{pwa:{text:"Install 3D Bueskydning on your home screen for quick access",installBtn:"INSTALL APP"},iosInstall:{line1:"Install 3D Bueskydning on your home screen:",shareStepPre:"Tap the ",shareStepPost:' Share icon at the bottom of Safari, and choose "Add to Home Screen".'},push:{text:"Get notified instantly when someone invites you to a shoot – even when the app is closed.",enableBtn:"ENABLE NOTIFICATIONS",enabledToast:"Notifications enabled"}},push:{permissionError:"Could not request permission: {msg}",blocked:"Notifications blocked in the browser — must be changed in the browser's site settings",unsupported:"Push notifications are not supported in this browser",swError:"Could not register service worker",tokenError:"Could not get push token",genericError:"Push error: {msg}",newMessageFallback:"New message"},friends:{title:"Friends",addFriendBtn:"+ Add friend",newsletterTitle:"Newsletter",requestAccessBtn:"🔎 May I follow along?",statusPending:"Pending",cancelRequestTitle:"Cancel request",statusApproved:"Can see results ✅",statusRejected:"Rejected",retryBtn:"Try again",empty:"No friends yet",editTitle:"Edit friend",addTitle:"Add friend",deleteConfirm:"Delete {name}?",namePlaceholder:"Name",phonePlaceholder:"Phone",clubPlaceholder:"Club",bowTypeDefault:"Bow type...",bowTypeRecurve:"Recurve",bowTypeCompound:"Compound",bowTypeLongbow:"Longbow",bowTypeBarebow:"Barebow"},admin:{loading:"Loading admins…",empty:"No admins found",currentAdminsTitle:"CURRENT ADMINISTRATORS",youTag:"(you)",removeBtn:"Remove",period7:"Last 7 days",period30:"Last 30 days",period365:"Last 365 days",loadingStats:"Loading…",totalRegistered:"Total registered",userNotFound:"User not found",nowAdmin:"{name} is now an admin",removeConfirm:"Remove {email} as administrator?",removedAdmin:"{email} has been removed as admin",title:"Administrator",addAdminPlaceholder:"Email for new admin",usageTitle:"APP USAGE",updateBtn:"Update",statsHint:'Click "Update" to fetch statistics',allUsersTitle:"ALL USERS",searchUserPlaceholder:"Search name or email…",usersCount:"{n} users",exportNewsletterBtn:"⬇ Export newsletter list",newsletterBadgeTitle:"Subscribed to newsletter",noNewsletterSubscribers:"No one has subscribed to the newsletter yet",csvNameHeader:"Name",csvEmailHeader:"Email"},meetups:{header:"Shall we shoot together?",sectionSuggestBtn:"+ Suggest",statusPending:"Pending",statusAccepted:"Joined ✅",statusProposing:"Suggesting a different time 🕓",statusDeclined:"Declined ❌",empty:"No planned shoots yet",joinBtn:"Join",proposeOtherBtn:"Suggest a different time",declineBtn:"Decline",acceptProposalBtn:"Accept {date} {time} ({name})",editTimeBtn:"Edit time",cancelMeetupBtn:"Cancel",deleteBtn:"Delete",cancelledBanner:"❌ Cancelled",notInvitedBanner:"👁 You are not invited — shown only to superadmin",dateTimeLine:"{date} at {time}",createdBy:"Created by {name}",commentPlaceholder:"Write a comment…",sendBtn:"Send",noCoursesToast:"No courses available",noFriendsYet:"You have no friends yet",noOtherUsers:"No other registered users",notRegisteredNote:"not registered in the app",noRecipientsSelected:"No recipients selected yet",selectCourseToast:"Select a course",selectDateTimeToast:"Select date and time",selectRecipientToast:"Select at least one recipient",invalidNamesToast:"{names} are not registered in the app and were not invited",proposalSentToast:"Proposal sent",newTimeAcceptedToast:"New time accepted",timeUpdatedToast:"Time updated",cancelConfirm:"Cancel this shoot?",deleteConfirm:"Delete this shoot permanently? This cannot be undone.",modalTitle:"Suggest a joint shoot",proposeAnotherTitle:"Suggest a different time",editTimeTitle:"Edit time",courseLabel:"Course",selectCoursePlaceholder:"-- Select course --",dateLabel:"Date",timeLabel:"Time",noteLabel:"Note (optional)",notePlaceholder:"Write a note about the shoot…",myFriendsTab:"My friends",allRegisteredTab:"All registered",selectAllBtn:"Select all",sendProposalBtn:"Send proposal"},sharing:{title:"May I follow along?",emptyState:`Ask to see a friend's results by tapping "🔎 May I follow along?" on the person in your friends list above.`,incomingRequestsTitle:"Requests to see your results",acceptBtn:"Accept",rejectBtn:"Reject",sharingWithTitle:"You are sharing results with",stopSharingBtn:"Stop sharing",viewableTitle:"You can see results for",viewInAnalyseBtn:"View in Analysis",ownRequestError:"You cannot request to see your own results",notRegisteredError:"{name} is not registered in the app",requestSentToast:"Request sent",acceptedToast:"Sharing accepted",rejectConfirm:"Reject this request?",stopConfirm:"Stop this sharing? The person will immediately lose access to your results.",stoppedToast:"Sharing stopped"},courses:{title:"Courses",createBtn:"+ Create course",backBtn:"← Back",mapTab:"Map",visitsTab:"Visits",editTab:"Edit",showMyPosition:"📍 Show my position",deleteCourseBtn:"🗑 Delete course",createModalTitle:"Create course",namePlaceholder:"Course name",searchPlaceholder:"Search course...",targets24:"24 targets",targets30:"30 targets",locationPlaceholder:"Location (e.g. city)",visibilityPublic:"Public",visibilityPrivate:"Private",visibilityHidden:"Hidden (approved only)",visibilityHint:'Private: the course is still visible to everyone, but shown with "(Members only)". Hidden: only archers you approve (below) can see the course.',membersOnlySuffix:"(Members only)",searchUserPlaceholder:"Search registered user…",manualEmailPlaceholder:"…or enter email directly",createBtnModal:"Create",empty:"No courses yet",targetNameFallback:"Target",emptyVisits:"No visits yet",viewResultTitle:"View result",infoTitle:"Course info",nameLabel:"Course name",locationLabel:"Location",visibilityLabel:"Visibility",saveInfoBtn:"Save course info",targetsHeader:"Targets ({n})",targetTitle:"Target {n}",setGpsTitle:"Set GPS",nameLabelTarget:"Name",emojiLabel:"Emoji",distanceLabel:"Distance (m)",gpsInfo:"📍 GPS: {coords}",gpsMissing:"No GPS",uploadPhotoBtn:"📷 Upload photo",saveAllTargetsBtn:"💾 Save all targets",noApprovedYet:"None approved yet",savedToast:"Saved!",targetAddedToast:"Target {n} added!",deleteTargetConfirm:"Delete target {n}?",deleteTargetError:"Error: Could not delete target",gpsSetToast:"GPS set for target {n}!",gpsErrorToast:"GPS error: {msg}",photoSavedToast:"Photo saved!",uploadErrorToast:"Upload error: {msg}",allTargetsSavedToast:"All targets saved!",gpsUnavailableToast:"GPS not available",deleteCourseConfirm:'Delete course "{name}"?',courseDeletedToast:"Course deleted",deleteCourseError:"Error: Could not delete course",courseCreatedToast:"Course created!",createCourseError:"Error: Could not create course"},analyse:{title:"Analysis",myselfOption:"Myself",filterAll:"All rounds",filterLatest:"Latest round",filterLast10:"Last 10",filterLast20:"Last 20",filterSpecific:"Specific round",filterCompare:"Compare rounds",allCourses:"All courses",allRulesets:"All rulesets",numRoundsPlaceholder:"Number of rounds",onlyCompletedLabel:"Only completed rounds (all targets shot)",onlyStartedAt1Label:"Only rounds started at target 1",round1Label:"ROUND 1",round2Label:"ROUND 2",selectRoundPlaceholder:"Select round...",selectRound2Placeholder:"Select round 2...",arrow1:"ARROW 1",arrow2:"ARROW 2",singleArrowNote:"{ruleset} is shot with 1 arrow per target — ARROW 1/ARROW 2 is therefore not relevant",singleArrowNoteCompare:"{ruleset} is shot with 1 arrow per target — the ARROW 1/ARROW 2 comparison is therefore not relevant",notRelevant:"Not relevant",best:"BEST",worst:"HARDEST",comparisonTitle:"COMPARISON",vs:"VS",wonBy:"{name} won by {diff} points",tie:"Tie!",arrowStatsTitle:"ARROW STATISTICS",bestWorstTargetTitle:"BEST AND HARDEST TARGET",zoneDistTitle:"DISTRIBUTION PER SCORE ZONE",selectTwoRounds:"Select two rounds above",roundsNotFound:"Could not find the rounds",meFallback:"Me",viewingResultsFor:"Showing results for {name}",statRounds:"ROUNDS",statAvgPerRound:"AVG/ROUND",statBest:"BEST",statLowest:"LOWEST",roundsIncludedTitle:"ROUNDS IN THIS ANALYSIS ({n})",selectRulesetNote:"Select a specific ruleset in the filter above to see arrow distribution (the rounds in this selection use different rulesets)",bestWithArrow1:"Best with ARROW 1 🏹",bestWithArrow2:"Best with ARROW 2 🏹",bothArrowsEqual:"Both arrows are equally good 🎯",shotOrdinal:"Shot no. {n}",developmentTitle:"DEVELOPMENT (ROUNDS)",oldest:"oldest",newest:"newest",perTargetGraphTitle:"AVERAGE PER SHOT ORDER",perTargetCaption:"Shot order — 1 = first target shot · dashed line = trend",consistencyTitle:"CONSISTENCY (SPREAD)",consistencyNote:"Standard deviation in points (same scale as the score, 0-11) — not a 0-1 number. Close to 0 = very consistent through the round; the higher the number, the bigger the swing between the best and hardest targets.",fullscreenGraphTitle:"AVERAGE PER SHOT ORDER · pinch to zoom · double-tap to reset",consistencyOverTimeTitle:"CONSISTENCY OVER TIME · this course",consistencyOverTimeCaption:"Spread per round (same point scale as above) — declining curve = more consistent shooting over time",comparisonSectionTitle:"COMPARISON · {gender} {bowClass}",loadingComparison:"Loading...",noOtherShootersYet:"No other {gender} {bowClass} archers have shot this course yet.",yourAvgPerArrow:"YOUR AVG/ARROW",difference:"DIFFERENCE",othersAvgPerArrow:"OTHERS' AVG/ARROW",basedOnRoundsSingular:"Based on {n} round from other archers",basedOnRoundsPlural:"Based on {n} rounds from other archers",distanceInsightsTitle:"DISTANCE ANALYSIS",distanceInsightsSubtitle:"Share of shots hitting {label} per distance group",distanceInsightsCoverage:"Based on {used} of {total} rounds — only rounds played on courses with known target distances are included",distBucket5to15:"5-15 m",distBucket16to25:"16-25 m",distBucket26to30:"26-30 m",killZoneLabel:"the kill zone",trendUp:"📈 Your score has risen {pct}% over the last {weeks} weeks",trendDown:"📉 Your score has dropped {pct}% over the last {weeks} weeks",trendFlat:"Your score has been stable over the last {weeks} weeks",trendNotEnoughData:"Not enough rounds in the last {weeks} weeks to show a trend yet",weakestZone:"Your biggest weakness, measured by average score per arrow, is targets at {range}",pointPotential:"If your average per arrow at {range} matched your overall average, that would be roughly +{n} points per round"}}};let ni=localStorage.getItem(ev)||"da";function tv(){return ni}function gn(){return ni==="da"?"da-DK":"en-US"}function y(n,e){const t=n.split(".");let r=Ma[ni];for(const s of t)r=r==null?void 0:r[s];if(r==null){r=Ma.da;for(const s of t)r=r==null?void 0:r[s]}if(r==null)return n;if(e)for(const[s,i]of Object.entries(e))r=r.replace(`{${s}}`,i);return r}function nv(n=document){n.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=y(t.dataset.i18n)}),n.querySelectorAll("[data-i18n-placeholder]").forEach(t=>{t.placeholder=y(t.dataset.i18nPlaceholder)});const e=document.getElementById("lang-btn");e&&(e.textContent=ni.toUpperCase())}function tP(n){ni=n,localStorage.setItem(ev,n),document.documentElement.lang=n,nv()}function nP(){document.documentElement.lang=ni,nv()}function rP(n){const e=m.shareRequests.find(t=>{var r;return t.viewerUid===((r=m.user)==null?void 0:r.uid)&&t.ownerUid===n});return e?e.status==="afventer"?`<span class="share-badge share-badge-afventer">${y("friends.statusPending")}</span><button class="btn-icon" onclick="window.cancelShareRequest('${e.id}')" title="${y("friends.cancelRequestTitle")}">✕</button>`:e.status==="accepteret"?`<span class="share-badge share-badge-accepteret">${y("friends.statusApproved")}</span>`:`<span class="share-badge share-badge-afvist">${y("friends.statusRejected")}</span><button class="btn-share-req" data-share-friend="${n}">${y("friends.retryBtn")}</button>`:`<button class="btn-share-req" data-share-friend="${n}">${y("friends.requestAccessBtn")}</button>`}function rr(){const n=document.getElementById("friends-list");if(!m.friends.length){n.innerHTML=`<div class="empty"><div class="empty-icon">👥</div>${y("friends.empty")}</div>`;return}n.innerHTML="",m.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${W(e.name)}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).map(W).join(" · ")}</div><div class="fshare-row">${rP(e.id)}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del">🗑</button></div>`,t.querySelector(".frd-edit").addEventListener("click",()=>openFriendModal(e)),t.querySelector(".frd-del").addEventListener("click",()=>doDeleteFriend(e.id,e.name));const r=t.querySelector("[data-share-friend]");r&&r.addEventListener("click",()=>window.requestViewAccess(e.id,e.name)),n.appendChild(t)})}window.renderFriendsList=rr;function Hs(){const n=document.getElementById("qfriends");n.innerHTML="",m.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=m.friends.filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await it(nt(K,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=m.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...r];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" data-id="${W(i.id)}" data-name="${W(i.name||"")}" data-email="${W(i.email||"")}">${W(i.name)}${i.email?` <span style='font-size:11px;opacity:.6'>${W(i.email)}</span>`:""}</div>`).join(""),e.querySelectorAll(".ac-item").forEach(i=>i.addEventListener("click",()=>{selectFriend(i.dataset.id,i.dataset.name,i.dataset.email),document.getElementById("friend-search").value="",document.getElementById("ac-list").classList.add("hidden")})),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){if(!m.friends.find(r=>r.id===n)){const r={id:n,name:e,email:t};m.friends.push(r),jt(),rr(),Hs(),m.user&&Ct(ne(K,"users",m.user.uid,"friends",n),r).catch(s=>console.warn(s))}window.addParticipant(n,e)};window.openFriendModal=function(n){m.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=y(n?"friends.editTitle":"friends.addTitle"),document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim().slice(0,80),email:document.getElementById("f-email").value.trim().slice(0,100),phone:document.getElementById("f-phone").value.trim().slice(0,30),club:document.getElementById("f-club").value.trim().slice(0,80),bowType:document.getElementById("f-bow").value};if(!n.name)return;if(m.editFriendId){const r=m.friends.findIndex(s=>s.id===m.editFriendId);r!==-1?m.friends[r]={...n,id:m.editFriendId}:m.friends.push({...n,id:m.editFriendId})}else m.friends.push({...n,id:"f_"+Date.now()});const e=m.editFriendId||"f_"+Date.now();m.editFriendId||(m.friends[m.friends.length-1].id=e);const t=m.friends.find(r=>r.id===(m.editFriendId||e));t&&m.user&&Ct(ne(K,"users",m.user.uid,"friends",t.id),t).catch(r=>console.warn(r)),jt(),document.getElementById("friend-modal").classList.add("hidden"),rr(),Hs()};window.doDeleteFriend=function(n,e){pr(y("friends.deleteConfirm",{name:e}),()=>{m.friends=m.friends.filter(t=>t.id!==n),jt(),rr(),Hs(),m.user&&Ht(ne(K,"users",m.user.uid,"friends",n)).catch(t=>console.warn(t))})};const sP=[11,10,8,5,"M"],td={WA:{label:"WA",arrowsPerTarget:2,scoreValues:[11,10,8,5,"M"],boostThreshold:8},"HDH-IAA":{label:"HDH-IAA",arrowsPerTarget:1,scoreValues:[11,10,8,5,"M"],boostThreshold:8},DGS:{label:"DGS",arrowsPerTarget:2,scoreValues:[5,3,-1,"M"],boostThreshold:4},"DGS-1":{label:"DGS-1",arrowsPerTarget:1,scoreValues:[5,3,-1,"M"],boostThreshold:4}},cr="WA";function sn(n){var e;return((e=td[n])==null?void 0:e.arrowsPerTarget)??2}function lr(n){var e;return((e=td[n])==null?void 0:e.scoreValues)??sP}function iP(n){var e;return((e=td[n])==null?void 0:e.boostThreshold)??8}function oP(n){return lr(n).slice(0,2)}function Te(n){return n==="M"||n==null?0:Number(n)}function Jr(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":t==="-"?null:Number(t))):[]}function Ml(n){return n.map(e=>e.map(t=>t??"-").join(",")).join(";")}function bt(n){return n.flat().reduce((e,t)=>e+Te(t),0)}function aP(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(s=>s!=null).map(Te));return t.length?(t.reduce((r,s)=>r+s,0)/t.length).toFixed(1):null}function nd(n,e){const t={};return lr(e).forEach(r=>{t[r]=0}),n.flat().forEach(r=>{r!=null&&t[r]!==void 0&&t[r]++}),t}function rd(n){return n.length?n.reduce((e,t)=>bt(t.scores)>bt(e.scores)?t:e,n[0]):null}function cP(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,s)=>r+Te(s),0)/t.length>=e:!1}function lP(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function uP(n,e,t=2){for(;n.scores.length<e;)n.scores.push(Array(t).fill(null))}function dP(n,e,t=2){let r=0;for(let s=0;s<e;s++)n.every(i=>{const o=i.scores[s]||[];return o.length>=t&&o.slice(0,t).every(c=>c!=null)})&&r++;return r}function rv(n){return{id:n.id||null,name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,ruleset:n.ruleset||cr,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:Ml(e.scores)}))}}function hP(n){return{...n,ruleset:n.ruleset||cr,shooters:(n.shooters||[]).map(e=>({...e,scores:Jr(e.scores)}))}}function sd(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}let ca=null,la=!1,Mr=!1,Bl=[],Ki=null,Li=0,an=null,Fl=null,Si=null;function sv(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function id(n,e){const r=(e.lat-n.lat)*Math.PI/180,s=(e.lng-n.lng)*Math.PI/180,i=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function iv(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function ov(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function fP(n){return navigator.geolocation?(Si=n,Bl=[],Li=0,an=null,Ki=Date.now(),Mr=!1,la=!0,ca=navigator.geolocation.watchPosition(e=>{if(!la||Mr)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};an&&(Li+=id(an,t)),an=t,Bl.push(t),Si&&Si({lat:t.lat,lng:t.lng,distance:Li,elapsed:Math.round((Date.now()-Ki)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),Fl=setInterval(()=>{la&&!Mr&&Si&&Si({lat:an==null?void 0:an.lat,lng:an==null?void 0:an.lng,distance:Li,elapsed:Math.round((Date.now()-Ki)/1e3)})},1e3),!0):!1}function mP(){return Mr=!Mr,Mr}function av(){return la=!1,Mr=!1,ca!==null&&(navigator.geolocation.clearWatch(ca),ca=null),clearInterval(Fl),Fl=null,{route:Bl.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round(Li),duration:Ki?Math.round((Date.now()-Ki)/1e3):0}}function vc(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function pP(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((s,i)=>{if(!s.gps)return;const o=id(e,s.gps);o<t&&(t=o,r=i)}),r}function gP(n){const e=n.data();return{id:n.id,name:e.name||e.yam||"—",numTargets:e.numTargets||e.antalMål||24,location:e.location||e.beliggenhed||"",targets:e.targets||e.mål||[],visits:e.visits||e.besøg||[],private:e.private??e.privat??!1,hidden:e.hidden??e.skjult??!1,approvedUsers:e.approvedUsers||e.godkendteBrugere||[],ownerId:e.ownerId||null}}function yP(n){var e;return m.isAdmin||!!n.ownerId&&n.ownerId===((e=m.user)==null?void 0:e.uid)}async function vP(){var n;try{const e=(((n=m.user)==null?void 0:n.email)||"").toLowerCase();let t;if(m.isAdmin)t=[await it(nt(K,"courses"))];else{const i=[it(zs(nt(K,"courses"),Vr("hidden","==",!1)))];e&&i.push(it(zs(nt(K,"courses"),Vr("hidden","==",!0),Vr("approvedUsers","array-contains",e)))),t=await Promise.all(i)}const r=new Map;t.forEach(i=>i.docs.forEach(o=>r.set(o.id,o)));const s=[...r.values()].map(gP);s.length&&(m.courses=s,jt(),is(),window.populateCourseDropdown())}catch(e){console.warn("courses:",e)}}function is(n=""){const e=document.getElementById("courses-list");if(!m.courses.length){e.innerHTML=`<div class="empty"><div class="empty-icon">🗺️</div>${y("courses.empty")}</div>`;return}const t=n.trim().toLowerCase(),r=[...m.courses].filter(s=>!t||s.name.toLowerCase().includes(t)).sort((s,i)=>s.name.localeCompare(i.name,"da"));if(!r.length){e.innerHTML=`<div class="empty"><div class="empty-icon">🗺️</div>${y("courses.empty")}</div>`;return}e.innerHTML="",r.forEach(s=>{const i=document.createElement("div");i.className="ccard",i.innerHTML=`<div class="ccard-name">${W(s.name)}${s.private?` <span class="ccard-private-note">${y("courses.membersOnlySuffix")}</span>`:""}</div><div class="ccard-meta">${y("setup.targetsUnit",{n:s.numTargets})} · ${W(s.location||"—")}</div>`,i.onclick=()=>_P(s),e.appendChild(i)})}window.filterCourses=function(n){is(n)};function _P(n){m.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name+(n.private?" "+y("courses.membersOnlySuffix"):""),document.getElementById("course-edit-stab-btn").classList.toggle("hidden",!yP(n)),window.switchSubtab("map"),wP(n),IP(n),To(n)}function wP(n){const e=document.getElementById("course-map");m.courseMap&&(m.courseMap.remove(),m.courseMap=null),m.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(m.courseMap);const t=[];(n.targets||[]).forEach((r,s)=>{const i=r.gps||r.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div class="map-marker-num">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(m.courseMap).bindPopup(`<b>${s+1}. ${r.name||y("courses.targetNameFallback")}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" class="popup-target-img"/>`:""}`))}),t.length?m.courseMap.fitBounds(t,{padding:[20,20]}):m.courseMap.setView([55.7,12.5],10)}function IP(n){const e=document.getElementById("visits-list"),t=m.rounds.filter(r=>r.courseId===n.id).map(r=>{const s=(r.shooters||[]).map(o=>({...o,scores:Jr(o.scores)})),i=rd(s);return{roundId:r.id,date:r.completed?new Date(r.completed).toLocaleDateString(gn()):r.created?new Date(r.created).toLocaleDateString(gn()):"—",participants:s.map(o=>o.name),winner:i==null?void 0:i.name,winnerScore:i?bt(i.scores):0}});if(!t.length){e.innerHTML=`<div class="empty"><div class="empty-icon">📍</div>${y("courses.emptyVisits")}</div>`;return}e.innerHTML="",t.forEach(r=>{const s=document.createElement("div");s.className="visit-card",s.onclick=i=>{i.target.closest(".btn-icon")||window.showVisitResults(r.roundId)},s.innerHTML=`<div class="visit-card-head"><span class="visit-card-date">${W(r.date)}</span><button class="btn-icon" onclick="window.showVisitResults('${W(r.roundId)}')" title="${y("courses.viewResultTitle")}">📊</button></div><div class="visit-card-participants">${(r.participants||[]).map(W).join(", ")}</div>${r.winner?`<div class="visit-card-winner">🏆 ${W(r.winner)} (${r.winnerScore} pt)</div>`:""}`,e.appendChild(s)})}function To(n){const e=n.targets||[];let t=`
    <div class="card edit-info-card">
      <div class="card-title">${y("courses.infoTitle")}</div>
      <div class="fg"><label class="lbl">${y("courses.nameLabel")}</label><input type="text" id="edit-cname" value="${n.name}" /></div>
      <div class="fg"><label class="lbl">${y("courses.locationLabel")}</label><input type="text" id="edit-cloc" value="${n.location||""}" /></div>
      <div class="fg"><label class="lbl">${y("courses.visibilityLabel")}</label>
        <select id="edit-cvisibility" onchange="document.getElementById('edit-capproved-wrap').style.display=this.value==='hidden'?'':'none'">
          <option value="public" ${n.private?"":"selected"}>${y("courses.visibilityPublic")}</option>
          <option value="private" ${n.private&&!n.hidden?"selected":""}>${y("courses.visibilityPrivate")}</option>
          <option value="hidden" ${n.hidden?"selected":""}>${y("courses.visibilityHidden")}</option>
        </select>
      </div>
      <div class="trow-sub edit-visibility-hint">${y("courses.visibilityHint")}</div>
      <div id="edit-capproved-wrap" style="display:${n.hidden?"":"none"};">
        <div class="ac-wrap fg">
          <input type="text" id="edit-capproved-search" placeholder="${y("courses.searchUserPlaceholder")}" autocomplete="off" oninput="searchApprovedUsers('edit',this.value)" />
          <div id="edit-capproved-ac" class="ac-list hidden"></div>
        </div>
        <div id="edit-capproved-chips" class="edit-approved-chips-wrap"></div>
        <input type="text" id="edit-capproved-manual" placeholder="${y("courses.manualEmailPlaceholder")}" />
        <button type="button" class="btn btn-dark edit-approved-add-btn" onclick="addApprovedEmailManual('edit')">${y("common.add")}</button>
      </div>
      <button class="btn btn-gold edit-save-btn" onclick="saveCourseEdit()">${y("courses.saveInfoBtn")}</button>
    </div>
    <div class="card">
      <div class="card-title targets-card-title">
        <span>${y("courses.targetsHeader",{n:e.length})}</span>
        <button class="btn-icon add-target-btn" onclick="addTargetToCurrentCourse()">＋</button>
      </div>
      <div id="targets-edit-list">`;e.forEach((r,s)=>{t+=`<div class="fg target-edit-block">
      <div class="target-edit-head">
        <span class="target-edit-title">${y("courses.targetTitle",{n:s+1})}</span>
        <div class="target-edit-actions">
          <button class="btn-icon" onclick="setTargetGps(${s})" title="${y("courses.setGpsTitle")}">📍</button>
          <button class="btn-icon target-delete-btn" onclick="deleteTargetFromCourse(${s})">🗑</button>
        </div>
      </div>
      <div class="fg"><label class="lbl">${y("courses.nameLabelTarget")}</label>
        <input type="text" value="${r.name||""}" onchange="updateTargetField(${s},'name',this.value)" class="target-edit-input" /></div>
      <div class="target-edit-row">
        <div class="fg target-edit-col"><label class="lbl">${y("courses.emojiLabel")}</label>
          <input type="text" value="${r.emoji||""}" onchange="updateTargetField(${s},'emoji',this.value)" class="target-edit-input" /></div>
        <div class="fg target-edit-col"><label class="lbl">${y("courses.distanceLabel")}</label>
          <input type="number" value="${r.distance||""}" onchange="updateTargetField(${s},'distance',this.value)" class="target-edit-input" /></div>
      </div>
      ${r.gps||r.GPS?`<div class="target-gps-info">${y("courses.gpsInfo",{coords:`${(r.gps||r.GPS).lat.toFixed(5)}, ${(r.gps||r.GPS).lng.toFixed(5)}`})}</div>`:`<div class="target-gps-missing">${y("courses.gpsMissing")}</div>`}
      ${r.imageUrl||r.photo?`<img src="${r.imageUrl||r.photo}" class="target-photo-preview" />`:""}
      <label class="btn btn-dark target-upload-label">
        ${y("courses.uploadPhotoBtn")}
        <input type="file" accept="image/*" class="target-file-input" onchange="uploadTargetPhoto(${s},this)" />
      </label>
      <button class="btn btn-gold target-save-btn" onclick="saveAllTargets()">${y("courses.saveAllTargetsBtn")}</button>
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t,m.approvedDraft.edit=[...n.approvedUsers||[]],_c("edit")}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim().slice(0,100),e=document.getElementById("edit-cloc").value.trim().slice(0,100),t=document.getElementById("edit-cvisibility").value,r=t!=="public",s=t==="hidden",i=s?[...m.approvedDraft.edit]:[];if(!n)return;await rt(ne(K,"courses",m.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i}),m.currentCourse.name=n,m.currentCourse.location=e,m.currentCourse.private=r,m.currentCourse.hidden=s,m.currentCourse.approvedUsers=i;const o=m.courses.findIndex(c=>c.id===m.currentCourse.id);o>-1&&(m.courses[o]={...m.courses[o],name:n,location:e,private:r,hidden:s,approvedUsers:i}),jt(),is(),document.getElementById("course-detail-title").textContent=n+(r?" "+y("courses.membersOnlySuffix"):""),j(y("courses.savedToast"),"success")};window.updateTargetField=function(n,e,t){var r;(r=m.currentCourse)!=null&&r.targets&&(m.currentCourse.targets[n][e]=e==="distance"?t===""?null:Number(t):t)};window.addTargetToCurrentCourse=async function(){if(!m.currentCourse)return;const n=[...m.currentCourse.targets||[]];n.push({number:n.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await rt(ne(K,"courses",m.currentCourse.id),{targets:n}),m.currentCourse.targets=n,To(m.currentCourse),j(y("courses.targetAddedToast",{n:n.length}),"success")};window.deleteTargetFromCourse=function(n){var e;(e=m.currentCourse)!=null&&e.targets&&pr(y("courses.deleteTargetConfirm",{n:n+1}),async()=>{try{const t=[...m.currentCourse.targets];t.splice(n,1),t.forEach((r,s)=>r.number=s+1),await rt(ne(K,"courses",m.currentCourse.id),{targets:t,numTargets:t.length}),m.currentCourse.targets=t,m.currentCourse.numTargets=t.length,To(m.currentCourse)}catch{j(y("courses.deleteTargetError"),"error")}})};window.setTargetGps=async function(n){var e;if((e=m.currentCourse)!=null&&e.targets)try{const t=await vc();m.currentCourse.targets[n].gps=t,await rt(ne(K,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),To(m.currentCourse),j(y("courses.gpsSetToast",{n:n+1}),"success")}catch(t){j(y("courses.gpsErrorToast",{msg:t.message}),"error")}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await lv(t),s=Ay(Jy,`courses/${m.currentCourse.id}/target_${n}.jpg`);await Ey(s,r,"base64",{contentType:"image/jpeg"});const i=await by(s);m.currentCourse.targets[n].imageUrl=i,await rt(ne(K,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),To(m.currentCourse),j(y("courses.photoSavedToast"),"success")}catch(r){j(y("courses.uploadErrorToast",{msg:r.message}),"error")}};window.saveAllTargets=async function(){var n;(n=m.currentCourse)!=null&&n.targets&&(await rt(ne(K,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),j(y("courses.allTargetsSavedToast"),"success"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&m.courseMap&&setTimeout(()=>m.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await vc();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(m.courseMap),m.courseMap.panTo([e.lat,e.lng])}catch{j(y("courses.gpsUnavailableToast"),"error"),n.classList.remove("on")}};window.doDeleteCourse=function(){if(!m.currentCourse)return;const n=m.currentCourse.id,e=m.currentCourse.name;pr(y("courses.deleteCourseConfirm",{name:e}),async()=>{try{await Ht(ne(K,"courses",n)),m.courses=m.courses.filter(t=>t.id!==n),m.currentCourse=null,jt(),is(),window.populateCourseDropdown(),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"),j(y("courses.courseDeletedToast"),"success")}catch{j(y("courses.deleteCourseError"),"error")}})};const Ba={new:"new-course-approved",edit:"edit-capproved"};function _c(n){const e=m.approvedDraft[n];document.getElementById(`${Ba[n]}-chips`).innerHTML=e.length?e.map(t=>`<span class="approved-chip">${W(t)}<span class="approved-chip-remove" onclick="removeApprovedEmail('${n}','${W(t)}')">✕</span></span>`).join(""):`<span class="approved-empty">${y("courses.noApprovedYet")}</span>`}function cv(n,e){const t=e.trim().toLowerCase();!t||!t.includes("@")||(m.approvedDraft[n].includes(t)||m.approvedDraft[n].push(t),_c(n))}window.removeApprovedEmail=function(n,e){m.approvedDraft[n]=m.approvedDraft[n].filter(t=>t!==e),_c(n)};window.addApprovedEmailManual=function(n){const e=document.getElementById(`${Ba[n]}-manual`);cv(n,e.value),e.value=""};window.searchApprovedUsers=async function(n,e){const t=document.getElementById(`${Ba[n]}-ac`);if(!e.trim()){t.classList.add("hidden");return}let r=[];try{r=(await it(nt(K,"users"))).docs.map(i=>i.data()).map(i=>({name:i.name||i.yam||i.email||"—",email:(i.email||i["e-mail"]||"").toLowerCase()})).filter(i=>i.email&&(i.name.toLowerCase().includes(e.toLowerCase())||i.email.includes(e.toLowerCase())))}catch(s){console.warn(s)}if(!r.length){t.classList.add("hidden");return}t.innerHTML=r.map(s=>`<div class="ac-item" data-email="${W(s.email)}">${W(s.name)} <span style='font-size:11px;opacity:.6'>${W(s.email)}</span></div>`).join(""),t.querySelectorAll(".ac-item").forEach(s=>s.addEventListener("click",()=>{cv(n,s.dataset.email),document.getElementById(`${Ba[n]}-search`).value="",t.classList.add("hidden")})),t.classList.remove("hidden")};window.openCreateCourseModal=function(){m.approvedDraft.new=[],_c("new"),document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",document.getElementById("create-course-modal").classList.remove("hidden")};window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim().slice(0,100),e=document.getElementById("new-course-loc").value.trim().slice(0,100),t=document.getElementById("new-course-visibility").value,r=t!=="public",s=t==="hidden",i=s?[...m.approvedDraft.new]:[],o=document.getElementById("new-course-targets"),c=(o.value==="custom"?Number(document.getElementById("new-course-targets-custom").value):Number(o.value))||24;if(!n)return;const l=Array.from({length:c},(u,h)=>({number:h+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));try{const u=m.user.uid,h=await ry(nt(K,"courses"),{name:n,yam:n,numTargets:c,antalMål:c,location:e,beliggenhed:e,targets:l,mål:l,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i,ownerId:u,created:De(),visits:[],besøg:[]});m.courses.unshift({id:h.id,name:n,numTargets:c,location:e,targets:l,visits:[],private:r,hidden:s,approvedUsers:i,ownerId:u}),jt(),is(),window.populateCourseDropdown(),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value="",document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",j(y("courses.courseCreatedToast"),"success")}catch{j(y("courses.createCourseError"),"error")}};async function od(n,e,t){const r=ne(K,"courses",n),s=await ar(r);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await rt(r,{targets:o,mål:o})}function lv(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,l=i.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const u=document.createElement("canvas");u.width=c,u.height=l,u.getContext("2d").drawImage(i,0,0,c,l),e(u.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},r.onerror=t,r.readAsDataURL(n)})}async function TP(n,e){const t=ne(K,"courses",n),r=await ar(t);if(!r.exists())return;const s=(r.data().visits||[]).filter(o=>o.roundId!==e);await rt(t,{visits:s});const i=m.courses.find(o=>o.id===n);i&&(i.visits=s)}let Ps=[];async function uv(){if(m.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{await ad()}catch(n){console.warn(n)}if(m.isSuperAdmin){document.getElementById("users-section").classList.remove("hidden");try{Ps=(await it(nt(K,"users"))).docs.map(e=>({uid:e.id,...e.data()})).sort((e,t)=>(e.name||e.yam||"").localeCompare(t.name||t.yam||"","da")),dv()}catch(n){console.warn(n)}}}}async function ad(){const n=document.getElementById("admins-list");if(!n)return;n.innerHTML=`<div class="admin-hint">${y("admin.loading")}</div>`;const e=await it(nt(K,"admins"));if(e.empty){n.innerHTML=`<div class="admin-hint">${y("admin.empty")}</div>`;return}n.innerHTML=`<div class="admin-list-label">${y("admin.currentAdminsTitle")}</div>`,e.docs.forEach(t=>{var o;const r=document.createElement("div");r.className="admin-row";const s=t.data().email||t.id,i=t.id===((o=m.user)==null?void 0:o.uid);if(r.innerHTML=`<span class="admin-row-email">${W(s)}${i?` <span class="admin-you-tag">${y("admin.youTag")}</span>`:""}</span>`,m.isSuperAdmin&&!i){const c=document.createElement("button");c.className="btn btn-dark btn-sm admin-remove-btn",c.textContent=y("admin.removeBtn"),c.onclick=()=>doRemoveAdmin(t.id,s),r.appendChild(c)}n.appendChild(r)})}const nl=[{key:"period7",ms:7*864e5},{key:"period30",ms:30*864e5},{key:"period365",ms:365*864e5}];window.loadUsageStats=async function(){const n=document.getElementById("usage-stats-result");if(n){n.textContent=y("admin.loadingStats");try{const e=await it(zA(K,"runder")),t=Date.now(),r=nl.map(()=>0);let s=0;e.forEach(o=>{var u,h;s++;const c=(h=(u=o.data().dato)==null?void 0:u.toDate)==null?void 0:h.call(u);if(!c)return;const l=t-c.getTime();nl.forEach((p,g)=>{l<=p.ms&&r[g]++})});const i=nl.map((o,c)=>`<div class="usage-stat-row"><span>${W(y("admin."+o.key))}</span><b>${r[c]}</b></div>`).join("");n.innerHTML=`${i}<div class="usage-stat-row usage-stat-total"><span>${y("admin.totalRegistered")}</span><b>${s}</b></div>`}catch(e){n.textContent=y("common.errorPrefix")+e.message}}};const zf={langbue:"langbue",trad:"trad",recurve:"recurve",compound:"compound",barbue:"barbue",buejæger:"buejaeger","trad-buejæger":"tradBuejaeger",rytterbue:"rytterbue"};function dv(n=""){const e=document.getElementById("users-list");e.innerHTML="";const t=n.toLowerCase(),r=t?Ps.filter(c=>(c.name||c.yam||"").toLowerCase().includes(t)||(c.email||c["e-mail"]||"").toLowerCase().includes(t)):Ps;document.getElementById("users-count").textContent=y("admin.usersCount",{n:Ps.length});const s=document.getElementById("users-summary"),i={};Ps.forEach(c=>{const l=c.bueklasse||y("common.unknown");i[l]=(i[l]||0)+1});const o=Object.entries(i).sort((c,l)=>l[1]-c[1]).map(([c,l])=>`<span class="bow-chip"><b>${l}</b> ${W(zf[c]?y("common.bowClassShort."+zf[c]):c)}</span>`).join("");s.innerHTML=`<div class="bow-chips-wrap">${o}</div>`,r.forEach(c=>{var _;const l=document.createElement("div");l.className="urow";const u=(_=c.created)!=null&&_.toDate?c.created.toDate().toLocaleDateString(gn()):"—",h=c.bueklasse||"",p=c.kon==="m"?"♂":c.kon==="k"?"♀":"",g=c.newsletterConsent?`<span class="unl" title="${y("admin.newsletterBadgeTitle")}">✉️</span>`:"";l.innerHTML=`<span class="un">${W(c.name||c.yam||"—")}${g}</span><span class="ue">${W(c.email||c["e-mail"]||"")}</span><span class="ubow">${W(h)}${p?` ${W(p)}`:""}</span><span class="ud">${W(u)}</span>`,e.appendChild(l)})}window.filterUsers=function(n){dv(n)};window.exportNewsletterList=function(){const n=Ps.filter(c=>c.newsletterConsent);if(!n.length){j(y("admin.noNewsletterSubscribers"),"error");return}const e=c=>`"${String(c||"").replace(/"/g,'""')}"`,r=[[y("admin.csvNameHeader"),y("admin.csvEmailHeader")],...n.map(c=>[c.name||c.yam||"",c.email||c["e-mail"]||""])].map(c=>c.map(e).join(",")).join(`\r
`),s=new Blob(["\uFEFF"+r],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.download="nyhedsbrev-tilmeldinger.csv",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i)};window.doAddAdmin=async function(){if(!m.isSuperAdmin)return;const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await it(nt(K,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){j(y("admin.userNotFound"),"error");return}await Ct(ne(K,"admins",t.id),{email:n,created:De()}),j(y("admin.nowAdmin",{name:t.data().name||n}),"success"),document.getElementById("admin-email").value="",await ad()}catch(e){j(y("common.errorPrefix")+e.message,"error")}};window.doRemoveAdmin=async function(n,e){if(m.isSuperAdmin&&confirm(y("admin.removeConfirm",{email:e})))try{await Ht(ne(K,"admins",n)),j(y("admin.removedAdmin",{email:e}),"success"),await ad()}catch(t){j(y("common.errorPrefix")+t.message,"error")}};function EP(n,e,{start:t=0,peakAt:r=2.9,fadeAt:s=3.6,fadeDur:i=1.3}={}){const o=n.createDynamicsCompressor();o.threshold.value=-16,o.knee.value=6,o.ratio.value=8,o.attack.value=.003,o.release.value=.2;const c=n.createGain();c.gain.value=.95,c.connect(o),o.connect(e);const l=hv(n,2),u=t,h=u+r,p=u+s,g=p+i;{const _=ua(n,l),E=n.createBiquadFilter();E.type="bandpass",E.Q.value=1.2,E.frequency.setValueAtTime(150,u),E.frequency.exponentialRampToValueAtTime(2200,u+.7);const P=n.createGain();P.gain.setValueAtTime(0,u),P.gain.linearRampToValueAtTime(.9,u+.25),P.gain.exponentialRampToValueAtTime(.001,u+1.1),_.connect(E),E.connect(P),P.connect(c),_.start(u),_.stop(u+1.2)}{const _=ua(n,l),E=n.createBiquadFilter();E.type="lowpass",E.Q.value=.7,E.frequency.setValueAtTime(350,u),E.frequency.linearRampToValueAtTime(1800,h),E.frequency.linearRampToValueAtTime(500,g);const P=n.createGain();Hf(P.gain,u,h,p,g,.55);const C=n.createGain();C.gain.value=1;const L=n.createOscillator();L.frequency.value=6.5;const M=n.createGain();M.gain.value=.35,L.connect(M),M.connect(C.gain),_.connect(E),E.connect(C),C.connect(P),P.connect(c),_.start(u),_.stop(g+.1),L.start(u),L.stop(g+.1);const x=ua(n,l,.7),B=n.createBiquadFilter();B.type="lowpass",B.frequency.value=140,B.Q.value=1;const z=n.createGain();Hf(z.gain,u,h,p,g,1.4),x.connect(B),B.connect(z),z.connect(c),x.start(u),x.stop(g+.1)}{let _=u+.15;for(;_<g;){const E=Math.min(1,(_-u)/r),P=_>p?Math.max(0,1-(_-p)/i):1,C=n.createBufferSource();C.buffer=l;const L=n.createBiquadFilter();L.type="highpass",L.frequency.value=1200+Math.random()*3500;const M=n.createGain(),x=.004+Math.random()*.03,B=(.25+Math.random()*.75)*P*(.5+.5*E);M.gain.setValueAtTime(B,_),M.gain.exponentialRampToValueAtTime(5e-4,_+x),C.connect(L),L.connect(M),M.connect(c),C.start(_,Math.random()*1.5,x+.01),_+=-Math.log(1-Math.random())/(6+39*E)}}RP(n,c,h-.35)}function bP(n){var r;const e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t;try{t=new e}catch{return}try{(r=t.resume)==null||r.call(t)}catch{}EP(t,t.destination,{...n,start:t.currentTime+.03}),setTimeout(()=>{try{t.close()}catch{}},(((n==null?void 0:n.fadeAt)??3.6)+5)*1e3)}function hv(n,e){const t=n.createBuffer(1,Math.round(n.sampleRate*e),n.sampleRate),r=t.getChannelData(0);for(let s=0;s<r.length;s++)r[s]=Math.random()*2-1;return t}function ua(n,e,t=1){const r=n.createBufferSource();return r.buffer=e,r.loop=!0,r.playbackRate.value=t,r}function Hf(n,e,t,r,s,i){n.setValueAtTime(1e-4,e),n.linearRampToValueAtTime(i*.35,e+.4),n.linearRampToValueAtTime(i,t),n.setValueAtTime(i,r),n.linearRampToValueAtTime(1e-4,s)}function AP(n){const t=new Float32Array(1024);for(let r=0;r<1024;r++){const s=r*2/1024-1;t[r]=(1+n)*s/(1+n*Math.abs(s))}return t}const SP={u:[260,700,2100],a:[620,930,2100],o:[480,720,2050]};function RP(n,e,t){const r=n.createGain();r.gain.value=2.2;const s=n.createWaveShaper();s.curve=AP(6),s.oversample="2x";const i=n.createGain();i.gain.value=.9;const o=n.createDelay(1);o.delayTime.value=.26;const c=n.createGain();c.gain.value=.42;const l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=1800;const u=n.createGain();u.gain.value=.55,r.connect(s),s.connect(i),i.connect(e),i.connect(o),o.connect(l),l.connect(c),c.connect(o),l.connect(u),u.connect(e);const h=[0,1,2].map(T=>{const S=n.createBiquadFilter();S.type="bandpass",S.Q.value=[7,9,11][T];const b=n.createGain();return b.gain.value=[3.2,2,.9][T],S.connect(b),b.connect(r),S}),p=(T,S,b=.05)=>h.forEach((R,I)=>{R.frequency.setTargetAtTime(SP[T][I],S,b)}),g=n.createGain();g.gain.value=0;const _=n.createGain();_.gain.value=1;const E=[["sawtooth",1,0],["sawtooth",1,14],["square",.5,0]].map(([T,S,b])=>{const R=n.createOscillator();R.type=T,R.detune.value=b;const I=n.createGain();return I.gain.value=T==="square"?.45:.5,R.connect(I),I.connect(_),R._mul=S,R});_.connect(g),h.forEach(T=>g.connect(T));const P=n.createOscillator();P.frequency.value=31;const C=n.createGain();C.gain.value=.45,P.connect(C),C.connect(_.gain);const L=ua(n,hv(n,1)),M=n.createGain();M.gain.value=0,L.connect(M),h.forEach(T=>M.connect(T));const x=(T,S,b,R)=>E.forEach(I=>{I.frequency.setValueAtTime(T*I._mul,S),I.frequency.exponentialRampToValueAtTime(b*I._mul,S+R)}),B=[["a","u",.55,.1,92,84,!1],["a","a",.17,.06,118,104,!0],["a","a",.17,.06,114,100,!0],["a","a",.17,.06,108,95,!0],["a","a",.17,.06,102,90,!0],["a","a",.17,.07,96,84,!0],["o","a",1.1,0,90,58,!0]];let z=t;p("u",z,.001);for(const[T,S,b,R,I,pe,Re]of B){const Ye=Re?.05:.02;Re&&(M.gain.setValueAtTime(0,z),M.gain.linearRampToValueAtTime(.5,z+.012),M.gain.linearRampToValueAtTime(0,z+Ye+.02)),p(S,z,.005),p(T,z+Ye,b*.25),x(I,z+Ye,pe,b),g.gain.setValueAtTime(0,z+Ye*.6),g.gain.linearRampToValueAtTime(1,z+Ye+.03),g.gain.setValueAtTime(1,z+Ye+b*.55),g.gain.exponentialRampToValueAtTime(.001,z+Ye+b),z+=Ye+b+R}const Q=n.createOscillator();Q.frequency.value=5.5;const A=n.createGain();A.gain.setValueAtTime(0,t),A.gain.setValueAtTime(40,z-1),Q.connect(A),E.forEach(T=>A.connect(T.detune));const w=z+.1;[...E,P,Q].forEach(T=>{T.start(t),T.stop(w)}),L.start(t),L.stop(w)}const zn=5;function PP(){const n=new Uint32Array(256),e=[[0,0,0,0,0],[.12,60,0,0,90],[.3,170,20,0,210],[.5,235,80,5,245],[.7,255,150,20,255],[.88,255,215,90,255],[1,255,250,220,255]];for(let t=0;t<256;t++){const r=t/255;let s=0;for(;s<e.length-2&&r>e[s+1][0];)s++;const i=e[s],o=e[s+1],c=(r-i[0])/(o[0]-i[0]),l=u=>Math.round(i[u]+(o[u]-i[u])*c);n[t]=(l(4)<<24|l(3)<<16|l(2)<<8|l(1))>>>0}return n}function CP(){const n=document.createElement("canvas");n.width=n.height=32;const e=n.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,240,180,1)"),t.addColorStop(.3,"rgba(255,160,40,0.8)"),t.addColorStop(1,"rgba(255,80,0,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),n}function kP(n,{shakeEl:e=null,onPeak:t=null}={}){return new Promise(r=>{var Le,Ln;const s=(Le=window.matchMedia)==null?void 0:Le.call(window,"(prefers-reduced-motion: reduce)").matches,i=s?1200:3600,o=s?400:1300,c=document.createElement("div");c.className="burn-ov";const l=document.createElement("div");l.className="burn-glow";const u=document.createElement("canvas");u.className="burn-canvas";const h=document.createElement("div");h.className="burn-flash",c.append(l,u,h),document.body.appendChild(c);try{bP({peakAt:i*.8/1e3,fadeAt:i/1e3,fadeDur:o/1e3})}catch(ae){console.warn(ae)}n==null||n.classList.add("burning"),s||e==null||e.classList.add("burn-shake");try{(Ln=navigator.vibrate)==null||Ln.call(navigator,[80,40,160,60,300,80,500])}catch{}const p=u.width=window.innerWidth,g=u.height=window.innerHeight,_=u.getContext("2d"),E=Math.ceil(p/zn),P=Math.ceil(g/zn)+2,C=new Uint8Array(E*P),L=document.createElement("canvas");L.width=E,L.height=P;const M=L.getContext("2d"),x=M.createImageData(E,P),B=new Uint32Array(x.data.buffer),z=PP(),Q=CP(),A=[],w=new Float32Array(E).fill(1);let T=0;const S=n==null?void 0:n.getBoundingClientRect(),b=S&&{x0:Math.max(0,S.left/zn|0),x1:Math.min(E-1,S.right/zn|0),y0:Math.max(0,S.top/zn|0),y1:Math.min(P-1,S.bottom/zn|0)},R=performance.now();let I=!1,pe=!1,Re=R,Ye=0,qe=255;function dt(){if(!pe){if(pe=!0,!I){I=!0;try{t==null||t()}catch(ae){console.warn(ae)}}qe=0,c.classList.add("out"),setTimeout(()=>{c.remove(),n==null||n.classList.remove("burning"),e==null||e.classList.remove("burn-shake"),r()},o)}}setTimeout(dt,i+500);function et(ae,je){const St=(P-1)*E;for(let he=0;he<E;he++)C[St+he]=qe?Math.max(0,qe-(Math.random()*40|0)):0;if(b&&!pe&&je>.1){const he=Math.min(255,(je-.1)*900),Pe=b.y1*E;for(let Ve=b.x0;Ve<=b.x1;Ve++){const we=Math.max(0,he-(Math.random()*60|0));we>C[Pe+Ve]&&(C[Pe+Ve]=we)}}for(let he=0;he<E;he++){let Pe=w[he]+(Math.random()-.5)*.18;w[he]=Pe<.3?.3:Pe>1.5?1.5:Pe}for(let he=1;he<E-1;he++)w[he]=(w[he-1]+w[he]*2+w[he+1])*.25;if(!pe&&je>.25&&Math.random()<.12+je*.2){const he=Math.random()*E|0,Pe=P*(.35+Math.random()*.6)|0,Ve=3+(Math.random()*5|0);for(let we=-Ve;we<=Ve;we++)for(let Oe=-Ve;Oe<=Ve;Oe++){if(Oe*Oe+we*we>Ve*Ve)continue;const ht=he+Oe,Ie=Pe+we;if(ht<0||ht>=E||Ie<0||Ie>=P)continue;const st=Ie*E+ht;C[st]=Math.max(C[st],230+(Math.random()*25|0))}}const Qt=Math.abs(T),Yt=T<0?-1:1;for(let he=1;he<P;he++){const Pe=he*E,Ve=Pe-E;for(let we=0;we<E;we++){const Oe=C[Pe+we];if(!Oe){const ct=Ve+we;C[ct]&&(C[ct]=C[ct]>8?C[ct]-8:0);continue}const ht=Math.random();let Ie=we+((ht*3|0)-1);Math.random()<Qt&&(Ie+=Yt),Ie<0?Ie=0:Ie>=E&&(Ie=E-1);const st=ht*ae*w[we]|0;C[Ve+Ie]=Oe>st?Oe-st:0}}}function as(){for(let ae=0;ae<B.length;ae++)B[ae]=z[C[ae]];M.putImageData(x,0,0),_.clearRect(0,0,p,g),_.imageSmoothingEnabled=!0,_.globalCompositeOperation="source-over",_.drawImage(L,0,0,E,P,0,0,E*zn,P*zn),_.globalCompositeOperation="lighter";for(const ae of A)_.globalAlpha=Math.max(0,1-ae.life/ae.max),_.drawImage(Q,ae.x-ae.size/2,ae.y-ae.size/2,ae.size,ae.size);_.globalAlpha=1}function cs(ae){try{Gt(ae)}catch(je){console.warn(je),dt();return}c.isConnected&&requestAnimationFrame(cs)}function Gt(ae){var ht;ae=Math.max(ae,R,Re);const je=(ae-R)/i,St=Math.min(50,ae-Re);if(Re=ae,!I&&je>=.8){I=!0,h.classList.add("on");try{(ht=navigator.vibrate)==null||ht.call(navigator,[250,60,500])}catch{}try{t==null||t()}catch(Ie){console.warn(Ie)}}je>=1&&dt(),T=Math.sin(ae/380)*.45+Math.sin(ae/137)*.25;const Qt=Math.min(1,je/.55),Yt=Qt*Qt*(3-2*Qt),he=300/P,Pe=Math.max(he,40),Ve=Pe-(Pe-he)*Yt;Ye+=St;let we=0;for(;Ye>=8&&we<6;)et(Ve,je),Ye-=8,we++;if(we===6&&(Ye=0),!pe&&je<1)for(let Ie=0;Ie<4+je*10;Ie++)A.push({x:Math.random()*p,y:g*(.3+Math.random()*.7),vx:(Math.random()-.5)*4+T*4,vy:-(5+Math.random()*12),life:0,max:40+Math.random()*60,size:3+Math.random()*7});const Oe=St/16.7;for(let Ie=A.length-1;Ie>=0;Ie--){const st=A[Ie];st.life+=Oe,st.x+=st.vx*Oe,st.y+=st.vy*Oe,st.vx+=(Math.random()-.5)*.8*Oe,(st.life>=st.max||st.y<-20)&&A.splice(Ie,1)}as()}requestAnimationFrame(cs)})}function fv(n,e,t){const r=nd(n.scores,e.ruleset),s=bt(n.scores),i=n.scores.flat().filter(l=>l!=null),o=i.length?(i.reduce((l,u)=>l+Te(u),0)/i.length).toFixed(2):"—";let c="";if(t>=2){const l=n.scores.map(g=>(g||[])[0]).filter(g=>g!=null),u=n.scores.map(g=>(g||[])[1]).filter(g=>g!=null),h=l.length?(l.reduce((g,_)=>g+Te(_),0)/l.length).toFixed(2):"—",p=u.length?(u.reduce((g,_)=>g+Te(_),0)/u.length).toFixed(2):"—";c=`<div class="dist-row"><span>${y("results.distArrow1")}</span><span>${h}</span></div><div class="dist-row"><span>${y("results.distArrow2")}</span><span>${p}</span></div>`}return`<div class="dist-name">${W(n.name)}</div><div class="dist-row dist-row-total"><span>${y("results.totalLabel")}</span><span>${s} pt</span></div>${c}<div class="dist-row dist-row-border"><span>${y("results.overallAvg")}</span><span>${o}</span></div>${Object.entries(r).map(([l,u])=>`<div class="dist-row"><span>${l}</span><span>${u}x</span></div>`).join("")}`}let Vi=null;function DP(n){Vi=n;const e=sn(n.ruleset);return'<div class="dist-grid">'+n.shooters.map((t,r)=>`<div class="dist-card" onclick="window.showDistCardEnlarged(${r})">${fv(t,n,e)}</div>`).join("")+"</div>"}window.showDistCardEnlarged=function(n){if(!Vi)return;const e=Vi.shooters[n];if(!e)return;const t=document.getElementById("dist-enlarge-body");t&&(t.innerHTML=fv(e,Vi,sn(Vi.ruleset)),document.getElementById("dist-enlarge-ov").classList.remove("hidden"))};function mv(n){const e=rd(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${W((e==null?void 0:e.name)||"—")}</div><div class="win-score">${e?bt(e.scores):0} ${y("results.pointWord")}</div>`,document.getElementById("res-table").innerHTML=pv(n),document.getElementById("res-dist").innerHTML=DP(n)}function pv(n){const e=(n.startTarget||1)-1,t=sn(n.ruleset),r=n.shooters.map(()=>0),s=n.shooters.map(()=>0);let i=`<div class="tbl-wrap"><table class="rtbl"><tr><th>${y("results.tableTargetHeader")}</th>${n.shooters.map(o=>`<th>${o.name}</th><th>${y("results.tableAvgHeader")}</th>`).join("")}</tr>`;for(let o=0;o<n.numTargets;o++)i+=`<tr><td class="tc">${o===e?'<span class="start-target-dot"></span>':""}${o+1}</td>`,n.shooters.forEach((l,u)=>{const h=l.scores[o]||Array(t).fill(null),p=h.reduce((_,E)=>_+(E!=null&&E!=="M"?Number(E):0),0);h.forEach(_=>{_!=null&&(r[u]+=Te(_),s[u]++)});const g=s[u]?(r[u]/s[u]).toFixed(2):"—";i+=`<td>${h.map(_=>_??"—").join("/")}<br><small>${p}</small></td><td class="tc-avg">${g}</td>`}),i+="</tr>";return i+=`<tr class="tr-tot"><td class="tc">${y("results.totalLabel")}</td>${n.shooters.map(o=>`<td colspan="2">${bt(o.scores)}</td>`).join("")}</tr></table></div>`,i}function NP(n){const e=lr(n.ruleset),t=sn(n.ruleset);return n.shooters.map(r=>{const s=bt(r.scores),i=r.scores.flat().filter(h=>h!=null),o=i.length,c=o?(i.reduce((h,p)=>h+Te(p),0)/o).toFixed(2):"—",l=nd(r.scores,n.ruleset);let u="";if(t>=2){const h=r.scores.map(E=>(E||[])[0]).filter(E=>E!=null),p=r.scores.map(E=>(E||[])[1]).filter(E=>E!=null),g=h.length?(h.reduce((E,P)=>E+Te(P),0)/h.length).toFixed(2):"—",_=p.length?(p.reduce((E,P)=>E+Te(P),0)/p.length).toFixed(2):"—";u=`<div class="summary-stats-row2">
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${g}</div>
          <div class="summary-stat-lbl">${y("results.summaryArrow1")}</div>
        </div>
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${_}</div>
          <div class="summary-stat-lbl">${y("results.summaryArrow2")}</div>
        </div>
      </div>`}return`<div class="summary-card">
      <div class="summary-card-name">${W(r.name)}</div>
      <div class="summary-stats-row3">
        <div class="summary-stat-box">
          <div class="summary-stat-val">${s}</div>
          <div class="summary-stat-lbl">${y("results.summaryPoints")}</div>
        </div>
        <div class="summary-stat-box">
          <div class="summary-stat-val">${o}</div>
          <div class="summary-stat-lbl">${y("results.summaryArrows")}</div>
        </div>
        <div class="summary-stat-box">
          <div class="summary-stat-val">${c}</div>
          <div class="summary-stat-lbl">${y("results.summaryAvgPerArrow")}</div>
        </div>
      </div>
      ${u}
      <div class="summary-zones-row">
        ${e.map(h=>`<div><div class="summary-zone-key">${h}</div><div class="summary-zone-val">${l[h]||0}</div></div>`).join("")}
      </div>
    </div>`}).join("")}function xP(n){const e=sn(n.ruleset),t=n.shooters.map(s=>{const i=s.scores.filter(p=>{const g=p||Array(e).fill(null);return g.length>=e&&g.slice(0,e).every(_=>_!==null)});if(!i.length||i.length===n.numTargets)return null;const o=i.flat().filter(p=>p!==null),c=o.reduce((p,g)=>p+Te(g),0),l=o.length,u=l?(c/l).toFixed(2):0,h=i.length?(c/i.length).toFixed(1):0;return{name:s.name,shot:i.length,total:c,avgPil:u,avgMaal:h}}).filter(Boolean);if(!t.length)return"";const r=t.map(s=>`<div class="actual-card"><div class="actual-card-name">${s.name}</div><div class="actual-card-sub">${y("results.actualSub",{shot:s.shot,total:n.numTargets})}</div><div class="actual-card-total">${s.total}</div><div class="actual-card-total-lbl">${y("results.summaryPoints")}</div><div class="actual-card-avgs"><div><div class="actual-avg-val">${s.avgPil}</div><div class="actual-avg-lbl">${y("results.actualAvgPerArrow")}</div></div><div><div class="actual-avg-val">${s.avgMaal}</div><div class="actual-avg-lbl">${y("results.actualAvgPerTarget")}</div></div></div></div>`).join("");return`<div class="actual-results-wrap"><div class="actual-results-title">${y("results.actualTitle")}</div><div class="actual-results-cards">${r}</div></div>`}function gv(n){m.rounds=m.rounds.filter(e=>e.id!==n.id),jt(),Ws(),m.user&&Ht(ne(K,"users",m.user.uid,"rounds",n.id)).catch(e=>console.warn(e)),m.user&&n.courseId&&Ht(ne(K,"bane_stats",n.courseId,"runder",n.id)).catch(e=>console.warn(e)),n.courseId&&TP(n.courseId,n.id).catch(e=>console.warn(e))}function Ws(){const n=document.getElementById("rounds-list");if(!m.rounds.length){n.innerHTML=`<div class="empty"><div class="empty-icon">📊</div>${y("results.empty")}</div>`;return}n.innerHTML="",m.rounds.forEach(e=>{const t=(e.shooters||[]).map(l=>({...l,scores:Jr(l.scores)})),r=t.length?rd(t):null,s=e.created,i=s!=null&&s.toDate?s.toDate().toLocaleDateString(gn()):s!=null&&s.seconds?new Date(s.seconds*1e3).toLocaleDateString(gn()):typeof s=="number"?new Date(s).toLocaleDateString(gn()):"—",o=document.createElement("div");o.className="rcard";const c=e.ruleset&&e.ruleset!=="WA"?` · <span class="rcard-ruleset-tag">${W(e.ruleset)}</span>`:"";o.innerHTML=`<div class="rcard-info"><div class="rcard-name">${W(e.name||y("results.roundFallback"))}</div><div class="rcard-meta"><span class="rcard-date">${W(i)}</span> · ${W(e.courseName||y("results.targetsUnit",{n:e.numTargets}))}${c}</div><div class="rcard-win">🏆 ${W((r==null?void 0:r.name)||"—")} (${r?bt(r.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser">📈</button><button class="del-btn" data-id="${W(e.id)}">✕</button>`,o.querySelector(".rcard-info").onclick=()=>wc({...e,shooters:t}),o.querySelector(".rcard-analyse").onclick=()=>window.analyseRound(e.id),o.querySelector(".del-btn").onclick=l=>{const u=l.currentTarget,h=`r-${e.id}`;m.deleteConfirm[h]?(delete m.deleteConfirm[h],gv(e)):(m.deleteConfirm[h]=!0,u.classList.add("conf"),u.textContent=y("results.deleteConfirm"),setTimeout(()=>{delete m.deleteConfirm[h],u.classList.remove("conf"),u.textContent="✕"},3e3))},n.appendChild(o)})}function wc(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),m.rpopMap&&(m.rpopMap.remove(),m.rpopMap=null);const t=n.gpsRoute||n.route||null,r=n.gpsDuration||n.duration||null,s=n.gpsDistance||n.distance||null,i=r?iv(r):null,o=s?ov(s):null,c=o||i?`<div class="rpop-gps-row">${o?`<div class="rpop-gps-box"><div class="rpop-gps-val">${o}</div><div class="rpop-gps-lbl">${y("results.popupDistance")}</div></div>`:""}${i?`<div class="rpop-gps-box"><div class="rpop-gps-val">${i}</div><div class="rpop-gps-lbl">${y("results.popupTime")}</div></div>`:""}</div>${t?'<div id="rpop-map"></div>':""}`:"",l=!!n.id&&m.rounds.some(u=>u.id===n.id);if(document.getElementById("rpop-body").innerHTML=`<h3 class="rpop-title">${W(n.name)}</h3>${c}`+NP(n)+pv(n)+xP(n)+`<div class="rpop-actions"><button class="btn btn-gold rpop-send-btn" onclick="window.sendResults(window._lastRound)">${y("results.sendResultsBtn")}</button>${l?`<button class="btn btn-red rpop-burn-btn" onclick="window.burnRound(this)">${y("results.burnBtn")}</button>`:""}</div>`,t){const u=sv(t);u.length&&setTimeout(()=>{const h=document.getElementById("rpop-map");if(!h)return;m.rpopMap=window.L.map(h),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(m.rpopMap);const p=window.L.polyline(u.map(g=>[g.lat,g.lng]),{color:"#e8a020",weight:3}).addTo(m.rpopMap);m.rpopMap.fitBounds(p.getBounds(),{padding:[20,20]})},50)}}window.burnRound=function(n){const e=window._lastRound,t=(e==null?void 0:e.id)&&m.rounds.find(s=>s.id===e.id);if(!t||n.disabled)return;if(!n.classList.contains("conf")){n.classList.add("conf"),n.textContent=y("results.burnConfirm"),clearTimeout(n._burnT),n._burnT=setTimeout(()=>{n.classList.remove("conf"),n.textContent=y("results.burnBtn")},3e3);return}clearTimeout(n._burnT),n.disabled=!0;const r=document.getElementById("round-popup");kP(r==null?void 0:r.querySelector(".rpop-box"),{shakeEl:r,onPeak:()=>{r==null||r.classList.add("hidden"),gv(t)}}).then(()=>j(y("results.burned")))};window.sendResults=async function(n){if(!n){j(y("results.noRoundToSend"),"error");return}const e=new Date().toLocaleDateString(gn());let t=y("email.header")+`
`;t+=y("email.dateLabel")+e+`
`,n.courseName&&(t+=y("email.courseLabel")+n.courseName+`
`),t+=`
`+y("email.resultsHeader")+`
`,[...n.shooters].sort((l,u)=>bt(u.scores)-bt(l.scores)).forEach((l,u)=>{t+=`
`+(u+1)+". "+l.name+": "+bt(l.scores)+y("email.pointWord")}),t+=`

`+y("email.detailHeader")+`
`;const s=sn(n.ruleset);n.shooters.forEach(l=>{t+=`
`+l.name+`:
`;for(let g=0;g<n.numTargets;g++){const _=l.scores[g]||Array(s).fill(null),E=_.reduce((P,C)=>P+(C!=null&&C!=="M"?Number(C):0),0);t+=y("email.targetLabel")+(g+1)+": "+_.map(P=>P??"-").join("+")+" = "+E+`
`}const u=l.scores.flat().filter(g=>g!=null),h=u.length?(u.reduce((g,_)=>g+Te(_),0)/u.length).toFixed(2):"—",p=nd(l.scores,n.ruleset);if(t+=y("email.totalLabel")+bt(l.scores)+y("email.pointWord")+`
`,s>=2){const g=l.scores.map(C=>(C||[])[0]).filter(C=>C!=null),_=l.scores.map(C=>(C||[])[1]).filter(C=>C!=null),E=g.length?(g.reduce((C,L)=>C+Te(L),0)/g.length).toFixed(2):"—",P=_.length?(_.reduce((C,L)=>C+Te(L),0)/_.length).toFixed(2):"—";t+="  "+y("email.arrow1Label")+": "+E+" | "+y("email.arrow2Label")+": "+P+" | "+y("email.overallAvgLabel")+": "+h+`
`}else t+="  "+y("email.overallAvgLabel")+": "+h+`
`;t+=y("email.distributionLabel")+Object.entries(p).map(([g,_])=>g+":"+_+"x").join("  ")+`
`}),n.id&&(t+=`

${y("email.seeInApp")}
https://bsk65.github.io/3D/?round=${n.id}
${y("email.loginRequired")}`);const i=n.shooters.map(l=>{var u;return(u=m.friends.find(h=>h.id===l.id))==null?void 0:u.email}).filter(Boolean),o=y("email.subjectPrefix")+n.name,c="mailto:"+i.join(",")+"?subject="+encodeURIComponent(o)+"&body="+encodeURIComponent(t);window.location.href=c};const yv="archery_meetups_seen",Wf={afventer:"statusPending",tilmeldt:"statusAccepted",foreslået:"statusProposing",afvist:"statusDeclined"};function rl(n){if(!n)return"";const[e,t,r]=n.split("-");return e&&t&&r?`${r}-${t}-${e}`:n}let gt=new Map,Eo="venner",Oi=null,vv=null,cd=null,_v=null;async function ld(){if(m.user)try{const n=[it(zs(nt(K,"meetups"),Vr("creatorUid","==",m.user.uid))),it(zs(nt(K,"meetups"),Vr("invitedUids","array-contains",m.user.uid)))];m.isSuperAdmin&&n.push(it(nt(K,"meetups")));const e=await Promise.all(n),t=new Map;e.forEach(r=>r.docs.forEach(s=>t.set(s.id,{id:s.id,...s.data()}))),m.meetups=[...t.values()].sort((r,s)=>`${r.date}${r.time}`.localeCompare(`${s.date}${s.time}`))}catch(n){console.warn("Hent meetups:",n)}}function LP(n,e){return n.filter(t=>{var s,i;return(((i=(s=t.updatedAt)==null?void 0:s.toMillis)==null?void 0:i.call(s))??(typeof t.updatedAt=="number"?t.updatedAt:0))>e}).length}function bo(){const n=document.getElementById("meetup-badge");if(!n)return;const e=Number(localStorage.getItem(yv)||0),t=LP(m.meetups,e);n.classList.toggle("hidden",t===0),n.textContent=t}function VP(){localStorage.setItem(yv,String(Date.now())),bo()}function Wt(){const n=document.getElementById("meetups-list");if(!n)return;const e=new Date().toISOString().slice(0,10),t=m.meetups.filter(r=>r.date>=e);if(!t.length){n.innerHTML=`<div class="empty"><div class="empty-icon">🏹</div>${y("meetups.empty")}</div>`;return}n.innerHTML="",t.forEach(r=>n.appendChild(OP(r)))}function OP(n){var u;const e=document.createElement("div");e.className="meetup-card"+(n.status==="aflyst"?" meetup-cancelled":"");const t=n.creatorUid===((u=m.user)==null?void 0:u.uid),r=(n.participants||[]).find(h=>{var p;return h.uid===((p=m.user)==null?void 0:p.uid)}),s=m.isSuperAdmin&&!t&&!r,i=(n.participants||[]).map(h=>{const p=h.status==="foreslået"&&h.proposedDate?` → ${W(rl(h.proposedDate))} ${W(h.proposedTime||"")}`:"";return`<div class="meetup-partrow"><span>${W(h.name)}</span><span class="meetup-status meetup-status-${W(h.status)}">${W(Wf[h.status]?y("meetups."+Wf[h.status]):h.status)}${p}</span></div>`}).join(""),o=(n.comments||[]).map(h=>`<div class="meetup-comment"><b>${W(h.name)}:</b> ${W(h.text)}</div>`).join("");let c="";n.status!=="aflyst"&&(r&&(r.status!=="tilmeldt"&&(c+=`<button class="btn btn-gold btn-sm" onclick="joinMeetup('${n.id}')">${y("meetups.joinBtn")}</button>`),c+=`<button class="btn btn-dark btn-sm" onclick="openProposeTimeModal('${n.id}')">${y("meetups.proposeOtherBtn")}</button>`,r.status!=="afvist"&&(c+=`<button class="btn btn-dark btn-sm" onclick="declineMeetup('${n.id}')">${y("meetups.declineBtn")}</button>`)),t&&((n.participants||[]).filter(h=>h.status==="foreslået"&&h.proposedDate).forEach(h=>{c+=`<button class="btn btn-gold btn-sm" onclick="acceptProposedTime('${n.id}','${h.uid}')">${y("meetups.acceptProposalBtn",{date:W(rl(h.proposedDate)),time:W(h.proposedTime||""),name:W(h.name)})}</button>`}),c+=`<button class="btn btn-dark btn-sm" onclick="openEditMeetupModal('${n.id}')">${y("meetups.editTimeBtn")}</button>`,c+=`<button class="btn btn-dark btn-sm" onclick="cancelMeetup('${n.id}')">${y("meetups.cancelMeetupBtn")}</button>`,c+=`<button class="btn btn-red btn-sm" onclick="deleteMeetup('${n.id}')">${y("meetups.deleteBtn")}</button>`)),e.innerHTML=`
    ${n.status==="aflyst"?`<div class="meetup-cancelled-banner">${y("meetups.cancelledBanner")}</div>`:""}
    ${s?`<div class="meetup-notinvited-banner">${y("meetups.notInvitedBanner")}</div>`:""}
    <div class="meetup-head">
      <div class="meetup-title">${W(n.courseName)}</div>
      <div class="meetup-when">${y("meetups.dateTimeLine",{date:W(rl(n.date)),time:W(n.time)})}</div>
      <div class="meetup-creator">${y("meetups.createdBy",{name:W(n.creatorName)})}</div>
    </div>
    <div class="meetup-participants">${i}</div>
    <div class="meetup-actions">${c}</div>
    <div class="meetup-comments">${o}</div>
    <div class="meetup-comment-add">
      <input type="text" placeholder="${y("meetups.commentPlaceholder")}" class="meetup-comment-input" maxlength="300" />
      <button class="btn btn-dark btn-sm meetup-comment-send">${y("meetups.sendBtn")}</button>
    </div>
  `;const l=e.querySelector(".meetup-comment-input");return e.querySelector(".meetup-comment-send").addEventListener("click",()=>{BP(n.id,l.value),l.value=""}),e}window.openMeetupModal=function(){if(!m.courses.length){j(y("meetups.noCoursesToast"),"error");return}gt=new Map,Eo="venner",Oi=null,cd=null,document.getElementById("mu-course-display").value="",document.getElementById("mu-course-list").classList.add("hidden"),MP(),document.getElementById("mu-date").value="",document.getElementById("mu-time").value="",document.getElementById("mu-comment").value="",document.querySelectorAll(".mu-pool-tab").forEach(n=>n.classList.toggle("active",n.dataset.pool==="venner")),Ao(),Ic(),document.getElementById("meetup-modal").classList.remove("hidden")};window.toggleMeetupCourseList=function(){document.getElementById("mu-course-list").classList.toggle("hidden")};function MP(){const n=document.getElementById("mu-course-list");n.innerHTML="",m.courses.forEach(e=>{const t=document.createElement("div");t.className="ac-item",t.textContent=e.name||e.yam||"",t.addEventListener("click",()=>{cd=e.id,document.getElementById("mu-course-display").value=e.name||e.yam||"",n.classList.add("hidden")}),n.appendChild(t)})}window.toggleMeetupPool=function(n){Eo=n,document.querySelectorAll(".mu-pool-tab").forEach(e=>e.classList.toggle("active",e.dataset.pool===n)),Ao()};async function $l(){if(!Oi)try{Oi=(await it(nt(K,"users"))).docs.map(e=>({uid:e.id,name:e.data().name||e.data().yam||e.data().email||"—"}))}catch(n){console.warn(n),Oi=[]}return Oi}async function wv(){if(Eo==="venner"){const e=new Set((await $l()).map(t=>t.uid));return m.friends.map(t=>({uid:t.id,name:t.name,registered:e.has(t.id)})).sort((t,r)=>t.name.localeCompare(r.name,"da"))}return(await $l()).filter(e=>{var t;return e.uid!==((t=m.user)==null?void 0:t.uid)}).map(e=>({...e,registered:!0})).sort((e,t)=>e.name.localeCompare(t.name,"da"))}async function Ao(){const n=document.getElementById("mu-invitee-list");if(!n)return;const e=await wv();if(n.innerHTML="",!e.length){n.innerHTML=`<div class="empty"><div class="empty-icon">👤</div>${y(Eo==="venner"?"meetups.noFriendsYet":"meetups.noOtherUsers")}</div>`;return}e.forEach(t=>{const r=document.createElement("label");r.className="mu-invitee-row"+(t.registered===!1?" mu-invitee-unregistered":"");const s=document.createElement("input");s.type="checkbox",s.checked=gt.has(t.uid);const i=document.createElement("span");if(i.textContent=t.name,r.appendChild(s),r.appendChild(i),t.registered===!1){s.disabled=!0;const o=document.createElement("span");o.className="mu-invitee-note",o.textContent=y("meetups.notRegisteredNote"),r.appendChild(o)}else s.addEventListener("change",()=>Iv(t.uid,t.name));n.appendChild(r)})}function Iv(n,e){gt.has(n)?gt.delete(n):gt.set(n,{uid:n,name:e}),Ic(),Ao()}window.toggleSelectAllMeetup=async function(){const n=(await wv()).filter(t=>t.registered!==!1);if(!n.length)return;n.every(t=>gt.has(t.uid))?n.forEach(t=>gt.delete(t.uid)):n.forEach(t=>gt.set(t.uid,t)),Ic(),Ao()};function Ic(){const n=document.getElementById("mu-selected-chips");if(n){if(n.innerHTML="",!gt.size){n.innerHTML=`<div class="mu-chips-empty">${y("meetups.noRecipientsSelected")}</div>`;return}[...gt.values()].forEach(e=>{const t=document.createElement("div");t.className="pchip";const r=document.createElement("span");r.className="pchip-name",r.textContent=e.name;const s=document.createElement("button");s.className="pchip-rm",s.textContent="✕",s.addEventListener("click",()=>Iv(e.uid,e.name)),t.appendChild(r),t.appendChild(s),n.appendChild(t)})}}window.saveMeetup=async function(){var p,g;const n=m.courses.find(_=>_.id===cd),e=document.getElementById("mu-date").value,t=document.getElementById("mu-time").value;if(!n){j(y("meetups.selectCourseToast"),"error");return}if(!e||!t){j(y("meetups.selectDateTimeToast"),"error");return}if(!gt.size){j(y("meetups.selectRecipientToast"),"error");return}const r=new Set((await $l()).map(_=>_.uid)),s=[...gt.values()].filter(_=>!r.has(_.uid)).map(_=>_.name);if(s.length&&(s.forEach(_=>{const E=[...gt.entries()].find(([,P])=>P.name===_);E&&gt.delete(E[0])}),j(y("meetups.invalidNamesToast",{names:s.join(", ")}),"error"),Ic(),Ao(),!gt.size))return;const i=document.getElementById("mu-comment").value.trim().slice(0,300),o=[...gt.keys()],c=[...gt.values()].map(_=>({uid:_.uid,name:_.name,status:"afventer",proposedDate:null,proposedTime:null})),l=i?[{uid:m.user.uid,name:((p=m.profile)==null?void 0:p.name)||"—",text:i,createdAt:new Date}]:[],u=new Date(`${e}T${t}`);u.setDate(u.getDate()+1);const h={courseId:n.id,courseName:n.name||n.yam||"",date:e,time:t,creatorUid:m.user.uid,creatorName:((g=m.profile)==null?void 0:g.name)||"—",pool:Eo,invitedUids:o,participants:c,comments:l,status:"åben",createdAt:De(),updatedAt:De(),expireAt:u};try{await ry(nt(K,"meetups"),h),document.getElementById("meetup-modal").classList.add("hidden"),j(y("meetups.proposalSentToast"),"success"),await ld(),Wt(),bo()}catch(_){j(y("common.errorPrefix")+_.message,"error")}};async function Tv(n,e){const t=m.meetups.find(s=>s.id===n);if(!t||!m.user)return;const r=(t.participants||[]).map(s=>s.uid===m.user.uid?{...s,status:e,proposedDate:null,proposedTime:null}:s);try{await rt(ne(K,"meetups",t.id),{participants:r,updatedAt:De()}),t.participants=r,t.updatedAt=Date.now(),Wt()}catch(s){j(y("common.errorPrefix")+s.message,"error")}}window.joinMeetup=function(n){Tv(n,"tilmeldt")};window.declineMeetup=function(n){Tv(n,"afvist")};window.openProposeTimeModal=function(n){vv=n,document.getElementById("mu-propose-date").value="",document.getElementById("mu-propose-time").value="",document.getElementById("meetup-propose-modal").classList.remove("hidden")};window.saveProposeTime=async function(){const n=document.getElementById("mu-propose-date").value,e=document.getElementById("mu-propose-time").value;if(!n||!e){j(y("meetups.selectDateTimeToast"),"error");return}const t=m.meetups.find(s=>s.id===vv);if(!t||!m.user)return;const r=(t.participants||[]).map(s=>s.uid===m.user.uid?{...s,status:"foreslået",proposedDate:n,proposedTime:e}:s);try{await rt(ne(K,"meetups",t.id),{participants:r,updatedAt:De()}),t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-propose-modal").classList.add("hidden"),Wt()}catch(s){j(y("common.errorPrefix")+s.message,"error")}};window.acceptProposedTime=async function(n,e){var c;const t=m.meetups.find(l=>l.id===n);if(!t||t.creatorUid!==((c=m.user)==null?void 0:c.uid))return;const r=(t.participants||[]).find(l=>l.uid===e);if(!(r!=null&&r.proposedDate)||!(r!=null&&r.proposedTime))return;const s=r.proposedDate,i=r.proposedTime,o=t.participants.map(l=>l.uid===e?{...l,status:"tilmeldt",proposedDate:null,proposedTime:null}:{...l,status:"afventer",proposedDate:null,proposedTime:null});try{await rt(ne(K,"meetups",t.id),{date:s,time:i,participants:o,updatedAt:De()}),t.date=s,t.time=i,t.participants=o,t.updatedAt=Date.now(),Wt(),j(y("meetups.newTimeAcceptedToast"),"success")}catch(l){j(y("common.errorPrefix")+l.message,"error")}};window.openEditMeetupModal=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||(_v=n,document.getElementById("mu-edit-date").value=e.date,document.getElementById("mu-edit-time").value=e.time,document.getElementById("meetup-edit-modal").classList.remove("hidden"))};window.saveEditMeetup=async function(){var s;const n=document.getElementById("mu-edit-date").value,e=document.getElementById("mu-edit-time").value;if(!n||!e){j(y("meetups.selectDateTimeToast"),"error");return}const t=m.meetups.find(i=>i.id===_v);if(!t||t.creatorUid!==((s=m.user)==null?void 0:s.uid))return;const r=(t.participants||[]).map(i=>({...i,status:"afventer",proposedDate:null,proposedTime:null}));try{await rt(ne(K,"meetups",t.id),{date:n,time:e,participants:r,updatedAt:De()}),t.date=n,t.time=e,t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-edit-modal").classList.add("hidden"),Wt(),j(y("meetups.timeUpdatedToast"),"success")}catch(i){j(y("common.errorPrefix")+i.message,"error")}};window.cancelMeetup=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||pr(y("meetups.cancelConfirm"),async()=>{try{await rt(ne(K,"meetups",e.id),{status:"aflyst",updatedAt:De()}),e.status="aflyst",e.updatedAt=Date.now(),Wt()}catch(r){j(y("common.errorPrefix")+r.message,"error")}})};window.deleteMeetup=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||pr(y("meetups.deleteConfirm"),async()=>{try{await Ht(ne(K,"meetups",e.id)),m.meetups=m.meetups.filter(r=>r.id!==n),Wt(),bo()}catch(r){j(y("common.errorPrefix")+r.message,"error")}})};async function BP(n,e){var i;if(e=(e||"").trim().slice(0,300),!e||!m.user)return;const t=m.meetups.find(o=>o.id===n);if(!t)return;const r={uid:m.user.uid,name:((i=m.profile)==null?void 0:i.name)||"—",text:e,createdAt:new Date},s=[...t.comments||[],r];try{await rt(ne(K,"meetups",t.id),{comments:s,updatedAt:De()}),t.comments=s,t.updatedAt=Date.now(),Wt()}catch(o){j(y("common.errorPrefix")+o.message,"error")}}const Ev="archery_share_requests_seen";function FP(n,e){return`${n}_${e}`}async function bv(){if(m.user)try{const[n,e]=await Promise.all([it(zs(nt(K,"shareRequests"),Vr("ownerUid","==",m.user.uid))),it(zs(nt(K,"shareRequests"),Vr("viewerUid","==",m.user.uid)))]),t=new Map;n.docs.forEach(r=>t.set(r.id,{id:r.id,...r.data()})),e.docs.forEach(r=>t.set(r.id,{id:r.id,...r.data()})),m.shareRequests=[...t.values()]}catch(n){console.warn("Hent delingsanmodninger:",n)}}function $P(n,e,t){return n.filter(r=>{var i,o;return r.ownerUid!==e||r.status!=="afventer"?!1:(((o=(i=r.createdAt)==null?void 0:i.toMillis)==null?void 0:o.call(i))??(typeof r.createdAt=="number"?r.createdAt:0))>t}).length}function Tc(){var r;const n=document.getElementById("share-badge");if(!n)return;const e=Number(localStorage.getItem(Ev)||0),t=$P(m.shareRequests,(r=m.user)==null?void 0:r.uid,e);n.classList.toggle("hidden",t===0),n.textContent=t}function UP(){localStorage.setItem(Ev,String(Date.now())),Tc()}function Av(){return m.user?m.shareRequests.filter(n=>n.viewerUid===m.user.uid&&n.status==="accepteret").map(n=>({uid:n.ownerUid,name:n.ownerName})).sort((n,e)=>n.name.localeCompare(e.name,"da")):[]}async function Sv(n){var e,t,r;try{const s=m.shareRequests.find(p=>{var g;return p.ownerUid===n&&p.viewerUid===((g=m.user)==null?void 0:g.uid)&&p.status==="accepteret"}),i=((t=(e=(s==null?void 0:s.acceptedAt)||(s==null?void 0:s.updatedAt))==null?void 0:e.toMillis)==null?void 0:t.call(e))??0,l=(((r=(await ar(ne(K,"users",n))).data())==null?void 0:r.roundIndex)||[]).filter(p=>(p.completed||0)>i).map(p=>p.id),h=(await Promise.all(l.map(p=>ar(ne(K,"users",n,"rounds",p)).catch(()=>null)))).filter(p=>p==null?void 0:p.exists()).map(p=>({...p.data(),id:p.id})).sort((p,g)=>{var P,C;const _=p.completed||p.created||0,E=g.completed||g.created||0;return(typeof E=="number"?E:((P=E.toMillis)==null?void 0:P.call(E))??0)-(typeof _=="number"?_:((C=_.toMillis)==null?void 0:C.call(_))??0)});return m.viewedRounds[n]=h,h}catch(s){return console.warn("Hent delte runder:",s),m.viewedRounds[n]=[],[]}}function gr(){var o;const n=document.getElementById("sharing-list");if(!n)return;const e=(o=m.user)==null?void 0:o.uid,t=m.shareRequests.filter(c=>c.ownerUid===e&&c.status==="afventer"),r=m.shareRequests.filter(c=>c.ownerUid===e&&c.status==="accepteret"),s=m.shareRequests.filter(c=>c.viewerUid===e&&c.status==="accepteret");if(!t.length&&!r.length&&!s.length){n.innerHTML=`<div class="share-empty">${y("sharing.emptyState")}</div>`;return}let i="";t.length&&(i+=`<div class="share-group-title">${y("sharing.incomingRequestsTitle")}</div>`,t.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${W(c.viewerName)}</div>
        <div class="share-actions">
          <button class="btn btn-gold btn-sm" onclick="acceptShareRequest('${c.id}')">${y("sharing.acceptBtn")}</button>
          <button class="btn btn-dark btn-sm" onclick="declineShareRequest('${c.id}')">${y("sharing.rejectBtn")}</button>
        </div>
      </div>`})),r.length&&(i+=`<div class="share-group-title">${y("sharing.sharingWithTitle")}</div>`,r.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${W(c.viewerName)}</div>
        <div class="share-actions">
          <button class="btn btn-red btn-sm" onclick="endSharing('${c.id}')">${y("sharing.stopSharingBtn")}</button>
        </div>
      </div>`})),s.length&&(i+=`<div class="share-group-title">${y("sharing.viewableTitle")}</div>`,s.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${W(c.ownerName)}</div>
        <div class="share-actions">
          <button class="btn btn-dark btn-sm" onclick="window.switchTab('analyse');window.setAnalyseViewer('${c.ownerUid}')">${y("sharing.viewInAnalyseBtn")}</button>
        </div>
      </div>`})),n.innerHTML=i}window.requestViewAccess=async function(n,e){var t,r;if(m.user){if(n===m.user.uid){j(y("sharing.ownRequestError"),"error");return}try{let s=(await ar(ne(K,"users",n))).exists();if(!s){const i=m.friends.find(o=>o.id===n);if(i!=null&&i.email){const c=(await it(nt(K,"users"))).docs.find(l=>{const u=l.data(),h=(u.email||u["e-mail"]||"").toLowerCase();return h&&h===i.email.toLowerCase()});c&&(n=c.id,s=!0,i.id=n,jt(),Ct(ne(K,"users",m.user.uid,"friends",n),i).catch(l=>console.warn(l)))}}if(!s){j(y("sharing.notRegisteredError",{name:e}),"error");return}await Ct(ne(K,"shareRequests",FP(n,m.user.uid)),{ownerUid:n,ownerName:e,viewerUid:m.user.uid,viewerName:((t=m.profile)==null?void 0:t.name)||"—",status:"afventer",createdAt:De(),updatedAt:De()}),j(y("sharing.requestSentToast"),"success"),await bv(),gr(),(r=window.renderFriendsList)==null||r.call(window)}catch(s){j(y("common.errorPrefix")+s.message,"error")}}};window.cancelShareRequest=async function(n){var e;try{await Ht(ne(K,"shareRequests",n)),m.shareRequests=m.shareRequests.filter(t=>t.id!==n),gr(),(e=window.renderFriendsList)==null||e.call(window)}catch(t){j(y("common.errorPrefix")+t.message,"error")}};window.acceptShareRequest=async function(n){try{await rt(ne(K,"shareRequests",n),{status:"accepteret",acceptedAt:De(),updatedAt:De()});const e=m.shareRequests.find(t=>t.id===n);e&&(e.status="accepteret"),gr(),Tc(),j(y("sharing.acceptedToast"),"success")}catch(e){j(y("common.errorPrefix")+e.message,"error")}};window.declineShareRequest=function(n){pr(y("sharing.rejectConfirm"),async()=>{try{await rt(ne(K,"shareRequests",n),{status:"afvist",updatedAt:De()});const e=m.shareRequests.find(t=>t.id===n);e&&(e.status="afvist"),gr(),Tc()}catch(e){j(y("common.errorPrefix")+e.message,"error")}})};window.endSharing=function(n){pr(y("sharing.stopConfirm"),async()=>{try{await Ht(ne(K,"shareRequests",n)),m.shareRequests=m.shareRequests.filter(e=>e.id!==n),gr(),j(y("sharing.stoppedToast"),"success")}catch(e){j(y("common.errorPrefix")+e.message,"error")}})};const qP="BOJHqC2HeXd9Ru6EjuL7HEuAZuZ2MM86LPqPfVbeQsm8M8-wgT_u3QPWYFs0XN0vfMz_FS3rDgjXgCXXm0GkmZs",jP="/3D/sw.js";async function Rv(){if(!("serviceWorker"in navigator))return null;try{return await navigator.serviceWorker.register(jP,{scope:"/3D/3D-dev/"})}catch(n){return console.warn("SW-registrering fejlede",n),null}}function GP(){return"Notification"in window&&Notification.permission==="default"}async function Pv(){let n;try{n=await Notification.requestPermission()}catch(e){return console.warn("Notification.requestPermission fejlede",e),j(y("push.permissionError",{msg:e.message}),"error"),!1}if(n==="denied")return j(y("push.blocked"),"error"),!1;if(n!=="granted")return!1;try{if(!await Xy||!co)return j(y("push.unsupported"),"error"),!1;const t=await Rv();if(!t)return j(y("push.swError"),"error"),!1;const r=await JR(co,{vapidKey:qP,serviceWorkerRegistration:t});return r?(await rt(ne(K,"users",m.user.uid),{fcmToken:r}),!0):(j(y("push.tokenError"),"error"),!1)}catch(e){return console.warn("Push-opsætning fejlede",e),j(y("push.genericError",{msg:e.message}),"error"),!1}}function KP(){"Notification"in window&&Notification.permission==="granted"&&Pv()}function zP(){Xy.then(n=>{!n||!co||XR(co,e=>{const t=e.data||{};j(t.body||y("push.newMessageFallback"),"info"),ld().then(()=>{Wt(),bo()}).catch(()=>{})})})}function Qf(n,e){var S;const t=b=>{var R;return b.shooters.find(I=>I.id===e)||((R=b.shooters)==null?void 0:R[0])},r=n.map(b=>{const R=t(b);return R?bt(R.scores):null}).filter(b=>b!==null),s=new Set(n.map(b=>b.ruleset||cr)),i=s.size===1?[...s][0]:null,o=!!i&&sn(i)>=2;let c=0,l=0,u=0,h=0;const p=o?lr(i):[],g={},_={};p.forEach(b=>{g[b]=0,_[b]=0});const E={};let P=0,C=0;n.forEach(b=>{const R=t(b);R&&(R.scores.forEach(I=>{I.forEach(pe=>{pe!=null&&(E[pe]=(E[pe]||0)+1,P+=Te(pe),C++)})}),o&&R.scores.forEach(I=>{I[0]!=null&&(g[I[0]]!==void 0&&g[I[0]]++,c+=Te(I[0]),l++),I[1]!=null&&(_[I[1]]!==void 0&&_[I[1]]++,u+=Te(I[1]),h++)}))});const L=l?(c/l).toFixed(2):0,M=h?(u/h).toFixed(2):0,x=l+h?((c+u)/(l+h)).toFixed(2):0,B=C?(P/C).toFixed(2):0,z=((S=n[0])==null?void 0:S.numTargets)||24,A=Array.from({length:z},(b,R)=>{let I=0,pe=0;return n.forEach(Re=>{const Ye=t(Re);if(!Ye)return;(Ye.scores[R]||[null,null]).forEach(dt=>{dt!=null&&(I+=Te(dt),pe++)})}),pe?I/pe:null}).map((b,R)=>({v:b,i:R})).filter(b=>b.v!==null),w=A.length?A.reduce((b,R)=>b.v>R.v?b:R):null,T=A.length?A.reduce((b,R)=>b.v<R.v?b:R):null;return{myScores:r,p1avg:L,p2avg:M,pilAvg:x,overallPilAvg:B,distP1:g,distP2:_,distAll:E,bestTarget:w,worstTarget:T,pilRuleset:i,pilEligible:o}}function Yf(n){if(!n.length)return 0;const e=n.reduce((t,r)=>t+r,0)/n.length;return Math.sqrt(n.reduce((t,r)=>t+(r-e)**2,0)/n.length)}function HP(n){var l;const e=n.length;if(e<2)return{slope:0,intercept:((l=n[0])==null?void 0:l.y)||0};const t=n.reduce((u,h)=>u+h.x,0),r=n.reduce((u,h)=>u+h.y,0),s=n.reduce((u,h)=>u+h.x*h.y,0),i=n.reduce((u,h)=>u+h.x*h.x,0),o=e*i-t*t,c=o?(e*s-t*r)/o:0;return{slope:c,intercept:(r-c*t)/e}}function WP(n,e){var o,c;const t=((o=n.shooters)==null?void 0:o.find(l=>l.id===e))||((c=n.shooters)==null?void 0:c[0]);if(!t)return[];const r=n.numTargets||24,s=n.traversalOrder||Array.from({length:r},(l,u)=>u),i=[];for(let l=0;l<r;l++){const u=s[l];if(u===void 0)continue;const h=t.scores[u]||[null,null];let p=0,g=0;h.forEach(_=>{_!=null&&(p+=Te(_),g++)}),g&&i.push(p/g)}return i}const Cv=[{key:"5to15",min:5,max:15},{key:"16to25",min:16,max:25},{key:"26to30",min:26,max:30}];function QP(n){return Cv.find(e=>(e.min==null||n>=e.min)&&(e.max==null||n<=e.max))}function Jf(n){return n!=null&&n.toDate?n.toDate().getTime():n!=null&&n.seconds?n.seconds*1e3:typeof n=="number"?n:null}const YP=10,Xf=56,JP=4;function XP(n,e,t){const r=x=>{var B;return x.shooters.find(z=>z.id===e)||((B=x.shooters)==null?void 0:B[0])},s={};Cv.forEach(x=>{s[x.key]={...x,shots:0,kills:0,scoreSum:0}});const i=new Set,o=new Set;n.forEach(x=>{var A;const B=t.find(w=>w.id===x.courseId);if(!B||!((A=B.targets)!=null&&A.length))return;const z=r(x);if(!z)return;const Q=oP(x.ruleset||cr);z.scores.forEach((w,T)=>{var R;const S=(R=B.targets[T])==null?void 0:R.distance;if(S==null||S==="")return;const b=QP(S);b&&w.forEach(I=>{I!=null&&(s[b.key].shots++,s[b.key].scoreSum+=Te(I),Q.includes(I)&&s[b.key].kills++,i.add(x.id),o.add(Q.join("/")))})})});const c=o.size===1?[...o][0]:null,l=Object.values(s).filter(x=>x.shots>0).map(x=>({...x,killPct:x.kills/x.shots*100,avgPerArrow:x.scoreSum/x.shots})),u=l.reduce((x,B)=>x+B.shots,0),h=l.reduce((x,B)=>x+B.kills,0),p=l.reduce((x,B)=>x+B.scoreSum,0),g=u?{killPct:h/u*100,avgPerArrow:p/u}:null,_=l.filter(x=>x.shots>=YP),E=_.length>=2?_.reduce((x,B)=>B.avgPerArrow<x.avgPerArrow?B:x):null;let P=null;if(E&&g&&E.avgPerArrow<g.avgPerArrow&&i.size){const x=E.shots/i.size,B=(g.avgPerArrow-E.avgPerArrow)*x;B>=.5&&(P=Math.round(B))}const C=Date.now()-Xf*864e5,L=n.map(x=>{const B=Jf(x.completed)??Jf(x.created),z=r(x);if(!z||B==null||B<C)return null;const Q=z.scores.flat().filter(A=>A!=null);return Q.length?{ms:B,avgPerArrow:Q.reduce((A,w)=>A+Te(w),0)/Q.length}:null}).filter(Boolean).sort((x,B)=>x.ms-B.ms);let M=null;if(L.length>=JP){const x=Math.ceil(L.length/2),B=L.slice(0,x),z=L.slice(x),Q=T=>T.reduce((S,b)=>S+b.avgPerArrow,0)/T.length,A=Q(B),w=Q(z);A>0&&(M={pctChange:(w-A)/A*100,weeks:Xf/7,rounds:L.length})}return{buckets:l,overall:g,weakest:E,pointPotential:P,trend:M,killLabel:c,roundsUsed:i.size,roundsTotal:n.length,hasData:l.length>0}}function ZP(n,e){let t=1,r=0,s=0,i=0,o=1,c=0,l=0,u=0,h=0,p=0,g=0,_=0,E=0;const P=()=>{e.style.transformOrigin="0 0",e.style.transform=t>1?`translate(${r}px,${s}px) scale(${t})`:""};n.addEventListener("touchstart",L=>{if(L.preventDefault(),L.touches.length===2){const M=L.touches,x=n.getBoundingClientRect();i=Math.hypot(M[0].clientX-M[1].clientX,M[0].clientY-M[1].clientY),o=t,c=r,l=s,u=(M[0].clientX+M[1].clientX)/2-x.left,h=(M[0].clientY+M[1].clientY)/2-x.top}else L.touches.length===1&&(p=L.touches[0].clientX,g=L.touches[0].clientY,_=r,E=s)},{passive:!1}),n.addEventListener("touchmove",L=>{if(L.preventDefault(),L.touches.length===2){const M=L.touches,x=Math.hypot(M[0].clientX-M[1].clientX,M[0].clientY-M[1].clientY),B=Math.min(8,Math.max(1,o*x/i)),z=(u-c)/o,Q=(h-l)/o;r=u-z*B,s=h-Q*B,t=B,P()}else L.touches.length===1&&t>1&&(r=_+L.touches[0].clientX-p,s=E+L.touches[0].clientY-g,P())},{passive:!1}),n.addEventListener("touchend",()=>{t<1.05&&(t=1,r=0,s=0,P())},{passive:!0});let C=0;n.addEventListener("touchend",()=>{const L=Date.now();L-C<300&&(t=1,r=0,s=0,P()),C=L},{passive:!0})}let cn=null,Nr=null;function eC(){const n=document.getElementById("graph-fs");n&&n.classList.add("hidden"),cn&&(window.removeEventListener("resize",cn),window.removeEventListener("orientationchange",cn),cn=null),Nr&&(document.removeEventListener("gesturestart",Nr),Nr=null)}window.closeGraphFs=eC;function tC(n){m.pendingAnalyseRound=n,m.viewingUid=null,m.viewingName=null,document.getElementById("analyse-filter").value="specific",window.switchTab("analyse")}window.setAnalyseViewer=async function(n){m.viewingUid=n||null;const e=n?Av().find(t=>t.uid===n):null;m.viewingName=(e==null?void 0:e.name)||null,n&&!m.viewedRounds[n]&&await Sv(n),window.renderAnalyse()};window.analyseRound=tC;window.setCompareKilde=async function(n,e){e=e||null,n===1?m.compareUid1=e:m.compareUid2=e,e&&!m.viewedRounds[e]&&await Sv(e),window.renderAnalyse()};const nC={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333",3:"#0a8a8a","-1":"#5a5a6a"};function rC(n,e,t,r){const s=n.myScores[0]||0,i=t.myScores[0]||0,o=Math.abs(s-i),c='<div class="cmp-sep"></div>',l=(g,_,E)=>`<div style="font-size:11px;color:${E};margin-bottom:4px;">${W(_)}</div>
    ${g.pilEligible?`<div class="cmp-pil-grid">
      <div><div class="cmp-pil-lbl">${y("analyse.arrow1")}</div><div class="cmp-pil-val">${g.p1avg}</div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">${y("results.summaryAvgPerArrow")}</div><div class="cmp-pil-val-mid">${g.pilAvg}</div>
      </div>
      <div><div class="cmp-pil-lbl">${y("analyse.arrow2")}</div><div class="cmp-pil-val">${g.p2avg}</div></div>
    </div>`:`<div class="cmp-pil-grid">
      <div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">${y("results.summaryAvgPerArrow")}</div><div class="cmp-pil-val-mid">${g.overallPilAvg}</div>
      </div>
      <div></div>
    </div>
    <div class="pil-best-note">${g.pilRuleset?y("analyse.singleArrowNoteCompare",{ruleset:g.pilRuleset}):y("analyse.notRelevant")}</div>`}`,u=(g,_,E)=>g.bestTarget&&g.worstTarget?`<div style="font-size:11px;color:${E};margin-bottom:6px;">${W(_)}</div>
    <div class="cmp-target-grid">
      <div class="cmp-target-best">
        <div class="cmp-pil-lbl">${y("analyse.best")}</div>
        <div class="cmp-target-best-val">${y("active.targetFallback",{n:g.bestTarget.i+1})}</div>
        <div class="cmp-target-sub">⌀ ${g.bestTarget.v.toFixed(2)}</div>
      </div>
      <div class="cmp-target-worst">
        <div class="cmp-pil-lbl">${y("analyse.worst")}</div>
        <div class="cmp-target-worst-val">${y("active.targetFallback",{n:g.worstTarget.i+1})}</div>
        <div class="cmp-target-sub">⌀ ${g.worstTarget.v.toFixed(2)}</div>
      </div>
    </div>`:"";let h="";h+=`<div class="card card-mb16">
    <div class="cmp-section-title">${y("analyse.comparisonTitle")}</div>
    <div class="cmp-score-grid">
      <div>
        <div class="cmp-score-lbl-a">${W(e)}</div>
        <div class="cmp-score-val-a">${s}</div>
        <div class="cmp-score-unit">${y("results.summaryPoints")}</div>
      </div>
      <div class="cmp-vs">${y("analyse.vs")}</div>
      <div>
        <div class="cmp-score-lbl-b">${W(r)}</div>
        <div class="cmp-score-val-b">${i}</div>
        <div class="cmp-score-unit">${y("results.summaryPoints")}</div>
      </div>
    </div>
    <div class="cmp-winner-line">${s>i?y("analyse.wonBy",{name:W(e),diff:o}):i>s?y("analyse.wonBy",{name:W(r),diff:o}):y("analyse.tie")}</div>
  </div>`,h+=`<div class="card card-mb16">
    <div class="cmp-section-title">${y("analyse.arrowStatsTitle")}</div>
    ${l(n,e,"var(--acc)")}${c}${l(t,r,"#f0c030")}
  </div>`,(n.bestTarget||t.bestTarget)&&(h+=`<div class="card card-mb16">
      <div class="cmp-section-title">${y("analyse.bestWorstTargetTitle")}</div>
      ${u(n,e,"var(--acc)")}${c}${u(t,r,"#f0c030")}
    </div>`);const p=[...new Set([...n.pilRuleset?lr(n.pilRuleset):Object.keys(n.distAll),...t.pilRuleset?lr(t.pilRuleset):Object.keys(t.distAll)])];return h+=`<div class="card card-mb16">
    <div class="cmp-section-title">${y("analyse.zoneDistTitle")}</div>
    <div class="cmp-dist-grid">
      <div></div>
      ${p.map(g=>`<div style="text-align:center;font-weight:700;color:${nC[g]||"var(--muted)"};">${g}</div>`).join("")}
      <div class="cmp-dist-lbl-a">${W(e)}</div>
      ${p.map(g=>`<div class="cmp-dist-val">${n.distAll[g]||0}</div>`).join("")}
      <div class="cmp-dist-lbl-b">${W(r)}</div>
      ${p.map(g=>`<div class="cmp-dist-val">${t.distAll[g]||0}</div>`).join("")}
    </div>
  </div>`,h}window.renderAnalyse=function(){var vr,oi,ai,So,On,ci,li,ds,Ro,Po,hs,ui,di,Mn,fs,ms;const n=document.getElementById("analyse-content");if(!n)return;const e=m.viewingUid||((vr=m.user)==null?void 0:vr.uid),t=m.viewingUid?m.viewedRounds[m.viewingUid]||[]:m.rounds,r=Av(),s=((oi=document.getElementById("analyse-filter"))==null?void 0:oi.value)||"all",i=s==="compare",o=m.compareUid1!==void 0?m.compareUid1:m.viewingUid,c=m.compareUid2!==void 0?m.compareUid2:m.viewingUid,l=o?m.viewedRounds[o]||[]:m.rounds,u=c?m.viewedRounds[c]||[]:m.rounds,h=document.getElementById("analyse-viewer-wrap"),p=document.getElementById("analyse-viewer");if(p){for(;p.options.length>1;)p.remove(1);r.forEach(O=>{const $=document.createElement("option");$.value=O.uid,$.textContent=O.name,p.appendChild($)}),p.value=m.viewingUid&&r.some(O=>O.uid===m.viewingUid)?m.viewingUid:"",h&&h.classList.toggle("hidden",!r.length)}const g=(O,$)=>{if(O){for(;O.options.length>1;)O.remove(1);r.forEach(H=>{const Y=document.createElement("option");Y.value=H.uid,Y.textContent=H.name,O.appendChild(Y)}),O.value=$&&r.some(H=>H.uid===$)?$:"",O.classList.toggle("hidden",!i||!r.length)}};g(document.getElementById("analyse-kilde-1"),o),g(document.getElementById("analyse-kilde-2"),c);const _=document.getElementById("analyse-bane");if(_){const O=_.value;for(;_.options.length>1;)_.remove(1);const $=i?[...l,...u]:t,H=[...new Set($.map(Y=>Y.courseId).filter(Boolean))];H.forEach(Y=>{const Z=m.courses.find(ie=>ie.id===Y);if(Z){const ie=document.createElement("option");ie.value=Y,ie.textContent=Z.name,_.appendChild(ie)}}),H.includes(O)&&(_.value=O)}if(m.pendingAnalyseRound&&_&&!m.viewingUid){const O=m.rounds.find($=>$.id===m.pendingAnalyseRound);O!=null&&O.courseId&&Array.from(_.options).some($=>$.value===O.courseId)&&(_.value=O.courseId)}const E=s==="all"?0:s==="lastround"?1:s==="specific"?0:Number(s),P=((ai=document.getElementById("analyse-bane"))==null?void 0:ai.value)||"all",C=Number((So=document.getElementById("analyse-antal"))==null?void 0:So.value)||0,L=document.getElementById("analyse-runde-wrap"),M=document.getElementById("analyse-runde"),x=document.getElementById("analyse-runde-wrap-2"),B=document.getElementById("analyse-runde-2"),z=document.getElementById("analyse-runde-lbl");L&&(L.style.display=s==="specific"||i?"":"none"),x&&(x.style.display=i?"":"none"),z&&(z.style.display=i?"":"none");const Q=O=>{const $=O.created;return $!=null&&$.toDate?$.toDate().toLocaleDateString(gn()):$!=null&&$.seconds?new Date($.seconds*1e3).toLocaleDateString(gn()):typeof $=="number"?new Date($).toLocaleDateString(gn()):"—"},A=((On=document.getElementById("analyse-ruleset"))==null?void 0:On.value)||"all",w=(O,$,H)=>{let Y=P==="all"?H:H.filter(ie=>ie.courseId===P);A!=="all"&&(Y=Y.filter(ie=>(ie.ruleset||"WA")===A));const Z=O.value;O.innerHTML=`<option value="">${$}</option>`,Y.forEach(ie=>{const ce=document.createElement("option");ce.value=ie.id,ce.textContent=`${Q(ie)} — ${ie.name||y("results.roundFallback")}`,O.appendChild(ce)}),Y.some(ie=>ie.id===Z)&&(O.value=Z)};if((s==="specific"||i)&&M&&(w(M,y("analyse.selectRoundPlaceholder"),i?l:t),m.pendingAnalyseRound&&(M.value=m.pendingAnalyseRound,m.pendingAnalyseRound=null)),i&&B&&w(B,y("analyse.selectRound2Placeholder"),u),i){const O=M==null?void 0:M.value,$=B==null?void 0:B.value;if(!O||!$){n.innerHTML=`<div class="empty"><div class="empty-icon">📊</div>${y("analyse.selectTwoRounds")}</div>`;return}const H=oe=>({...oe,shooters:(oe.shooters||[]).map(Be=>({...Be,scores:Jr(Be.scores)}))}),Y=l.map(H).find(oe=>oe.id===O),Z=u.map(H).find(oe=>oe.id===$);if(!Y||!Z){n.innerHTML=`<div class="empty">${y("analyse.roundsNotFound")}</div>`;return}const ie=o?((ci=r.find(oe=>oe.uid===o))==null?void 0:ci.name)||"—":((li=m.profile)==null?void 0:li.name)||y("analyse.meFallback"),ce=c?((ds=r.find(oe=>oe.uid===c))==null?void 0:ds.name)||"—":((Ro=m.profile)==null?void 0:Ro.name)||y("analyse.meFallback"),ye=`${ie}: ${Y.name||y("results.roundFallback")} (${Q(Y)})`,Ce=`${ce}: ${Z.name||y("results.roundFallback")} (${Q(Z)})`;n.innerHTML=rC(Qf([Y],o||((Po=m.user)==null?void 0:Po.uid)),ye,Qf([Z],c||((hs=m.user)==null?void 0:hs.uid)),Ce);return}const T=t.map(O=>({...O,shooters:(O.shooters||[]).map($=>({...$,scores:Jr($.scores)}))})),S=((ui=document.getElementById("analyse-completed-only"))==null?void 0:ui.checked)||!1,b=((di=document.getElementById("analyse-startat1-only"))==null?void 0:di.checked)||!1,R=O=>{var Y,Z;const $=((Y=O.shooters)==null?void 0:Y.find(ie=>ie.id===e))||((Z=O.shooters)==null?void 0:Z[0]);if(!$)return!1;const H=O.numTargets||24;for(let ie=0;ie<H;ie++){const ce=$.scores[ie]||[null,null];if(ce[0]==null&&ce[1]==null)return!1}return!0},I=O=>O.startTarget===1,pe=A;let Re=P==="all"?T:T.filter(O=>O.courseId===P);if(pe!=="all"&&(Re=Re.filter(O=>(O.ruleset||"WA")===pe)),S&&(Re=Re.filter(R)),b&&(Re=Re.filter(I)),s==="specific"){const O=M==null?void 0:M.value;Re=O?Re.filter($=>$.id===O):[]}const Ye=C||E,qe=Ye&&s!=="specific"?Re.slice(0,Ye):Re;if(!qe.length){n.innerHTML=`<div class="empty"><div class="empty-icon">📈</div>${y("results.empty")}</div>`;return}const dt=O=>{var $;return O.shooters.find(H=>H.id===e)||(($=O.shooters)==null?void 0:$[0])},et=qe.map(O=>{const $=dt(O);return $?bt($.scores):null}).filter(O=>O!==null),as=et.length?(et.reduce((O,$)=>O+$,0)/et.length).toFixed(1):0,cs=et.length?Math.max(...et):0,Gt=et.length?Math.min(...et):0,Le=qe.flatMap(O=>{const $=dt(O);return $?$.scores.flat().filter(H=>H!=null):[]}),Ln=Le.length?(Le.reduce((O,$)=>O+Te($),0)/Le.length).toFixed(2):0,ae=new Set(qe.map(O=>O.ruleset||cr)),je=ae.size===1?[...ae][0]:null,St=!!je&&sn(je)>=2;let Qt=0,Yt=0,he=0,Pe=0;const Ve=St?lr(je):[],we={},Oe={};Ve.forEach(O=>{we[O]=0,Oe[O]=0}),qe.forEach(O=>{const $=dt(O);$&&St&&$.scores.forEach(H=>{H[0]!=null&&(we[H[0]]!==void 0&&we[H[0]]++,Qt+=Te(H[0]),Yt++),H[1]!=null&&(Oe[H[1]]!==void 0&&Oe[H[1]]++,he+=Te(H[1]),Pe++)})});const ht=Yt?(Qt/Yt).toFixed(2):0,Ie=Pe?(he/Pe).toFixed(2):0,st=Yt+Pe?((Qt+he)/(Yt+Pe)).toFixed(2):0,ct=((Mn=qe[0])==null?void 0:Mn.numTargets)||24,si=Array.from({length:ct},(O,$)=>{let H=0,Y=0;return qe.forEach(Z=>{const ie=dt(Z);if(!ie)return;const ye=(Z.traversalOrder||Array.from({length:Z.numTargets||ct},(oe,Be)=>Be))[$];if(ye===void 0)return;(ie.scores[ye]||[null,null]).forEach(oe=>{oe!=null&&(H+=Te(oe),Y++)})}),Y?H/Y:null}),Vn=si.map((O,$)=>({v:O,i:$})).filter(O=>O.v!==null),yr=Vn.length?Vn.reduce((O,$)=>O.v>$.v?O:$):null,ls=Vn.length?Vn.reduce((O,$)=>O.v<$.v?O:$):null;let Ae="";m.viewingUid&&(Ae+=`<div class="viewing-banner">👁 ${y("analyse.viewingResultsFor",{name:W(m.viewingName||"—")})}</div>`),Ae+=`<div class="stats-grid2">
    <div class="card stat-card"><div class="stat-lbl">${y("analyse.statRounds")}</div><div class="stat-val-28">${qe.length}</div></div>
    <div class="card stat-card"><div class="stat-lbl">${y("analyse.statAvgPerRound")}</div><div class="stat-val-28">${as}</div></div>
    <div class="card stat-card"><div class="stat-lbl">${y("analyse.statBest")}</div><div class="stat-val-28-good">${cs}</div></div>
    <div class="card stat-card"><div class="stat-lbl">${y("analyse.statLowest")}</div><div class="stat-val-28-bad">${Gt}</div></div>
  </div>`,Ae+=`<details class="card card-mb16 rounds-included-card">
    <summary class="section-title-mb8 rounds-included-summary">${y("analyse.roundsIncludedTitle",{n:qe.length})}</summary>
    <div class="rounds-included-list">
      ${qe.map(O=>`<div class="rounds-included-row"><span class="rounds-included-date">${Q(O)}</span><span class="rounds-included-name">${W(O.name||y("results.roundFallback"))}${P==="all"?` · ${W(O.courseName||"")}`:""}${O.ruleset&&O.ruleset!=="WA"?` · <span class="rcard-ruleset-tag">${W(O.ruleset)}</span>`:""}</span></div>`).join("")}
    </div>
  </details>`;const ii=je&&!St,us=je?y("analyse.singleArrowNote",{ruleset:je}):y("analyse.selectRulesetNote");Ae+=`<div class="card card-mb16">
    <div class="section-title-mb8">${y("analyse.arrowStatsTitle")}</div>
    ${St?`<div class="cmp-pil-grid">
      <div><div class="stat-lbl">${y("analyse.arrow1")}</div><div class="stat-val-22">${ht}</div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">${y("results.summaryAvgPerArrow")}</div>
        <div class="stat-val-22-mid">${st}</div>
      </div>
      <div><div class="stat-lbl">${y("analyse.arrow2")}</div><div class="stat-val-22">${Ie}</div></div>
    </div>
    <div class="pil-best-note">
      ${Number(ht)>Number(Ie)?y("analyse.bestWithArrow1"):Number(Ie)>Number(ht)?y("analyse.bestWithArrow2"):y("analyse.bothArrowsEqual")}
    </div>`:ii?`<div class="cmp-pil-grid">
      <div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">${y("results.summaryAvgPerArrow")}</div>
        <div class="stat-val-22-mid">${Ln}</div>
      </div>
      <div></div>
    </div>
    <div class="pil-best-note">${us}</div>`:`<div class="pil-best-note">${us}</div>`}
  </div>`,yr&&ls&&yr.i!==ls.i&&(Ae+=`<div class="card card-mb16">
      <div class="section-title-mb8">${y("analyse.bestWorstTargetTitle")}</div>
      <div class="cmp-target-grid">
        <div class="target-best-box">
          <div class="stat-lbl">${y("analyse.best")}</div>
          <div class="target-best-val">${y("analyse.shotOrdinal",{n:yr.i+1})}</div>
          <div class="target-sub-13">⌀ ${yr.v.toFixed(2)}</div>
        </div>
        <div class="target-worst-box">
          <div class="stat-lbl">${y("analyse.worst")}</div>
          <div class="target-worst-val">${y("analyse.shotOrdinal",{n:ls.i+1})}</div>
          <div class="target-sub-13">⌀ ${ls.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`);const ve=XP(qe,e,m.courses);if(ve.hasData){const O={"5to15":"distBucket5to15","16to25":"distBucket16to25","26to30":"distBucket26to30"},$=ve.killLabel||y("analyse.killZoneLabel");if(Ae+=`<div class="card card-mb16">
      <div class="section-title-mb8">${y("analyse.distanceInsightsTitle")}</div>
      <div class="dist-subtitle">${y("analyse.distanceInsightsSubtitle",{label:$})}</div>
      <div class="dist-subtitle">${y("analyse.distanceInsightsCoverage",{used:ve.roundsUsed,total:ve.roundsTotal})}</div>`,ve.trend){const H=ve.trend.pctChange,Y=ve.trend.weeks,Z=Math.abs(H)<.5?y("analyse.trendFlat",{weeks:Y}):H>0?y("analyse.trendUp",{pct:H.toFixed(1),weeks:Y}):y("analyse.trendDown",{pct:Math.abs(H).toFixed(1),weeks:Y});Ae+=`<div class="dist-trend-line">${Z}</div>`}else Ae+=`<div class="dist-trend-line dist-trend-muted">${y("analyse.trendNotEnoughData",{weeks:8})}</div>`;if(Ae+=`<div class="dist-bucket-grid">${ve.buckets.map(H=>`
      <div class="dist-bucket-cell">
        <div class="stat-lbl">${y("analyse."+O[H.key])}</div>
        <div class="dist-bucket-pct">${H.killPct.toFixed(0)}%</div>
        <div class="target-sub-13">⌀ ${H.avgPerArrow.toFixed(2)}</div>
      </div>`).join("")}</div>`,ve.weakest){const H=y("analyse."+O[ve.weakest.key]);Ae+=`<div class="dist-weakest-note">${y("analyse.weakestZone",{range:H})}</div>`,ve.pointPotential!=null&&(Ae+=`<div class="dist-weakest-note">${y("analyse.pointPotential",{range:H,n:ve.pointPotential})}</div>`)}Ae+="</div>"}if(Ae+=`<div class="card card-mb16">
    <div class="section-title-mb12">${y("analyse.zoneDistTitle")}</div>`,St?(Ae+='<div class="pie-grid">',Ve.forEach(O=>{const $=we[O]||0,H=Oe[O]||0,Y=$+H,Z=30;let ie="";if(Y===0)ie=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="var(--surface2)"/>`;else if(H===0)ie=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="#ffd700"/>`;else if($===0)ie=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="#00cc44"/>`;else{const ce=$/Y,ye=ce*2*Math.PI,Ce=Z,oe=0,Be=Z-Z*Math.sin(ye),on=Z-Z*Math.cos(ye),Fe=ye>Math.PI?1:0;ie=`<path d="M${Z},${Z} L${Ce},${oe} A${Z},${Z} 0 ${Fe},0 ${Be},${on} Z" fill="#ffd700"/>
             <path d="M${Z},${Z} L${Be},${on} A${Z},${Z} 0 ${1-Fe},0 ${Ce},${oe} Z" fill="#00cc44"/>`}Ae+=`<div class="pie-cell">
        <div class="pie-zone-label">${O}</div>
        <svg viewBox="0 0 ${Z*2} ${Z*2}" class="pie-svg">${ie}</svg>
        <div class="pie-count">${$}/${H}</div>
        <div class="pie-total">${Y}</div>
      </div>`}),Ae+=`</div>
      <div class="pie-legend">
        <span><span class="pie-legend-dot-1"></span>${y("analyse.arrow1")}</span>
        <span><span class="pie-legend-dot-2"></span>${y("analyse.arrow2")}</span>
      </div>`):Ae+=`<div class="pil-best-note">${us}</div>`,Ae+="</div>",et.length>1){const Y=Math.min(...et)-5,Z=Math.max(...et)+5,ie=et.slice().reverse().map((ce,ye)=>{const Ce=30+ye/(et.length-1)*280,oe=90-(ce-Y)/(Z-Y)*(120-2*30);return`${Ce},${oe}`}).join(" ");Ae+=`<div class="card card-mb16">
      <div class="section-title-mb8">${y("analyse.developmentTitle")}</div>
      <svg viewBox="0 0 340 120" class="graph-svg">
        <polyline points="${ie}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${et.slice().reverse().map((ce,ye)=>{const Ce=30+ye/(et.length-1)*280,oe=90-(ce-Y)/(Z-Y)*(120-2*30);return`<circle cx="${Ce}" cy="${oe}" r="4" fill="var(--acc)"/><text x="${Ce}" y="${oe-8}" text-anchor="middle" font-size="10" fill="var(--text)">${ce}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">${y("analyse.oldest")}</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">${y("analyse.newest")}</text>
      </svg>
    </div>`}const Me=si.map((O,$)=>({v:O,i:$})).filter(O=>O.v!==null);if(Me.length>1){const{slope:ce,intercept:ye}=HP(Me.map(({v:Ge,i:yt})=>({x:yt,y:Ge}))),Ce=[ye,ye+ce*(ct-1)],oe=Math.floor(Math.min(...Me.map(Ge=>Ge.v),...Ce)),Be=Math.ceil(Math.max(...Me.map(Ge=>Ge.v),...Ce)),on=Be-oe||1,Fe=[];for(let Ge=oe;Ge<=Be;Ge++)(Be-oe<=6||Ge%Math.ceil((Be-oe)/5)===0)&&Fe.push(Ge);const Je=Yf(Me.map(Ge=>Ge.v)),xt=(Ge,yt,{dotR:Jt=3,valFont:lt=9,showVals:_r=!1}={})=>{const Rt=Ke=>42+(ct>1?Ke/(ct-1)*(Ge-42-15):0),ft=Ke=>15+(yt-15-25)*(1-(Ke-oe)/on),Bn=Me.map(({v:Ke,i:$n})=>Rt($n)+","+ft(Ke)).join(" "),Fn=Fe.map(Ke=>`<line x1="38" y1="${ft(Ke)}" x2="42" y2="${ft(Ke)}" stroke="var(--muted)" stroke-width="1" pointer-events="none"/><text x="36" y="${ft(Ke)+4}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${Ke}</text><line x1="42" y1="${ft(Ke)}" x2="${Ge-15}" y2="${ft(Ke)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3" pointer-events="none"/>`).join(""),wr=Me.map(({v:Ke,i:$n})=>_r?`<circle cx="${Rt($n)}" cy="${ft(Ke)}" r="${Jt}" fill="var(--acc)" pointer-events="none"/><text x="${Rt($n)}" y="${ft(Ke)-Jt-5}" text-anchor="middle" font-size="${lt}" fill="#fff" pointer-events="none">${Ke.toFixed(1)}</text>`:`<circle cx="${Rt($n)}" cy="${ft(Ke)}" r="${Jt}" fill="var(--acc)" pointer-events="none"/>`).join(""),Ac=`<line x1="${Rt(0)}" y1="${ft(ye)}" x2="${Rt(ct-1)}" y2="${ft(ye+ce*(ct-1))}" stroke="#f0c030" stroke-width="1.5" stroke-dasharray="6,4" pointer-events="none"/>`;return`<line x1="42" y1="15" x2="42" y2="${yt-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        <line x1="42" y1="${yt-25}" x2="${Ge-15}" y2="${yt-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        ${Fn}
        <polyline points="${Bn}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round" pointer-events="none"/>
        ${Ac}
        ${wr}
        <text x="42" y="${yt-5}" font-size="9" fill="var(--muted)" pointer-events="none">1</text>
        <text x="${Rt(ct-1)}" y="${yt-5}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${ct}</text>`},Kt=Math.max(340,ct*30);Ae+=`<div class="card card-mb16">
      <div class="graph-header-row">
        <span>${y("analyse.perTargetGraphTitle")}</span>
        <button class="btn-icon graph-fs-btn" onclick="window.openGraphFs()">⤢</button>
      </div>
      <svg viewBox="0 0 340 160" class="graph-svg">${xt(340,160,{dotR:3})}</svg>
      <div class="graph-caption">${y("analyse.perTargetCaption")}</div>
    </div>
    <div class="card card-mb16">
      <div class="section-title-mb8">${y("analyse.consistencyTitle")}</div>
      <div class="spredning-row">
        <div class="stat-val-28">${Je.toFixed(2)}</div>
        <div class="spredning-note">${y("analyse.consistencyNote")}</div>
      </div>
    </div>
    <div id="graph-fs" class="fs-ov hidden graph-fs-overlay" onclick="window.closeGraphFs()">
      <div class="graph-fs-box" id="graph-fs-box" onclick="event.stopPropagation()">
        <div class="graph-fs-title">${y("analyse.fullscreenGraphTitle")}</div>
        <div id="graph-fs-viewport" class="graph-fs-viewport">
          <svg id="graph-fs-svg" viewBox="0 0 ${Kt} 160" class="graph-fs-svg">${xt(Kt,160,{dotR:5,valFont:10,showVals:!0})}</svg>
        </div>
        <button class="btn btn-dark graph-fs-close-btn" onclick="window.closeGraphFs()">${y("modals.qr.closeBtn")}</button>
      </div>
    </div>`,window.openGraphFs=function(){const Ge=document.getElementById("graph-fs");if(!Ge)return;Ge.classList.remove("hidden");const yt=document.getElementById("graph-fs-svg"),Jt=document.getElementById("graph-fs-box"),lt=document.getElementById("graph-fs-viewport"),_r=()=>{const Rt=Math.min(window.innerWidth*.96,900),ft=Math.min(window.innerHeight*.9,700),Bn=Math.max(200,Rt-32),Fn=Math.max(140,ft-90),wr=Math.max(Bn,ct*30);yt.setAttribute("viewBox",`0 0 ${wr} ${Fn}`),yt.innerHTML=xt(wr,Fn,{dotR:5,valFont:10,showVals:!0}),Jt&&(Jt.style.width=Rt+"px"),lt&&(lt.style.width=Bn+"px",lt.style.height=Fn+"px")};_r(),cn&&(window.removeEventListener("resize",cn),window.removeEventListener("orientationchange",cn)),cn=_r,window.addEventListener("resize",cn),window.addEventListener("orientationchange",cn),Nr&&document.removeEventListener("gesturestart",Nr),Nr=Rt=>Rt.preventDefault(),document.addEventListener("gesturestart",Nr,{passive:!1}),lt&&!lt.dataset.pinchInit&&(ZP(lt,yt),lt.dataset.pinchInit="1")}}if(P!=="all"){const O=H=>{const Y=H.created;return Y!=null&&Y.toDate?Y.toDate().getTime():Y!=null&&Y.seconds?Y.seconds*1e3:typeof Y=="number"?Y:0},$=T.filter(H=>H.courseId===P).filter(H=>!S||R(H)).filter(H=>!b||I(H)).map(H=>{const Y=WP(H,e);return Y.length>1?{t:O(H),cv:Yf(Y)}:null}).filter(Boolean).sort((H,Y)=>H.t-Y.t);if($.length>1){const ie=$.map(Fe=>Fe.cv),ce=Math.min(...ie),ye=Math.max(...ie),Ce=ye-ce||1,oe=(Fe,Je)=>({x:30+Je/($.length-1)*(340-2*30),y:90-(Fe.cv-ce)/Ce*(120-2*30)}),Be=$.map((Fe,Je)=>{const{x:xt,y:Kt}=oe(Fe,Je);return`${xt},${Kt}`}).join(" "),on=$.map((Fe,Je)=>{const{x:xt,y:Kt}=oe(Fe,Je);return`<circle cx="${xt}" cy="${Kt}" r="4" fill="#f0c030"/><text x="${xt}" y="${Kt-8}" text-anchor="middle" font-size="10" fill="var(--text)">${Fe.cv.toFixed(2)}</text>`}).join("");Ae+=`<div class="card card-mb16">
        <div class="section-title-mb8">${y("analyse.consistencyOverTimeTitle")}</div>
        <svg viewBox="0 0 340 120" class="graph-svg">
          <polyline points="${Be}" fill="none" stroke="#f0c030" stroke-width="2.5" stroke-linejoin="round"/>
          ${on}
          <text x="30" y="115" font-size="10" fill="var(--muted)">${y("analyse.oldest")}</text>
          <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">${y("analyse.newest")}</text>
        </svg>
        <div class="graph-caption">${y("analyse.consistencyOverTimeCaption")}</div>
      </div>`}}if(n.innerHTML=Ae,!m.viewingUid&&P!=="all"&&((fs=m.profile)!=null&&fs.kon)&&((ms=m.profile)!=null&&ms.bueklasse)){const O=m.profile.kon==="herre"?y("common.gender.herre"):y("common.gender.dame"),H={langbue:"langbue",trad:"trad",recurve:"recurve",compound:"compound",barbue:"barbue",buejæger:"buejaeger","trad-buejæger":"tradBuejaeger",rytterbue:"rytterbue"}[m.profile.bueklasse],Y=H?y("common.bowClassShort."+H):m.profile.bueklasse,Z=document.createElement("div");Z.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">${y("analyse.comparisonSectionTitle",{gender:O,bowClass:Y})}</div><div class="comp-loading-msg">${y("analyse.loadingComparison")}</div></div>`,n.appendChild(Z),it(nt(K,"bane_stats",P,"runder")).then(ie=>{let ye=ie.docs.map(Je=>Je.data()).filter(Je=>Je.kon===m.profile.kon&&Je.bueklasse===m.profile.bueklasse);if(pe!=="all"&&(ye=ye.filter(Je=>(Je.ruleset||cr)===pe)),!ye.length){Z.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">${y("analyse.comparisonSectionTitle",{gender:O,bowClass:Y})}</div><div class="comp-loading-msg">${y("analyse.noOtherShootersYet",{gender:O,bowClass:Y})}</div></div>`;return}const Ce=ye.filter(Je=>(Je.arrowsShot||Je.numTargets*2)>0),oe=Ce.length?(Ce.reduce((Je,xt)=>Je+xt.score/(xt.arrowsShot||xt.numTargets*2),0)/Ce.length).toFixed(2):"—",Be=oe!=="—"?Number(Ln)-Number(oe):null,on=Be!==null?(Be>0?"+":"")+Be.toFixed(2):"—",Fe=Be===null?"var(--muted)":Be>0?"#2aaa5a":Be<0?"var(--danger)":"var(--muted)";Z.innerHTML=`<div class="card card-mb16">
        <div class="section-title-mb12">${y("analyse.comparisonSectionTitle",{gender:O,bowClass:Y})}</div>
        <div class="cmp-pil-grid">
          <div><div class="stat-lbl">${y("analyse.yourAvgPerArrow")}</div><div class="stat-val-22">${Ln}</div></div>
          <div class="cmp-pil-mid">
            <div class="stat-lbl">${y("analyse.difference")}</div>
            <div style="font-size:22px;font-weight:700;color:${Fe};">${on}</div>
          </div>
          <div><div class="stat-lbl">${y("analyse.othersAvgPerArrow")}</div><div class="stat-val-22-txt">${oe}</div></div>
        </div>
        <div class="pil-best-note">${ye.length===1?y("analyse.basedOnRoundsSingular",{n:ye.length}):y("analyse.basedOnRoundsPlural",{n:ye.length})}</div>
      </div>`}).catch(()=>{Z.remove()})}};function Zf(n,e,t){const r=Array.from({length:e},()=>Array(t).fill(null));for(const s of n.eventresult)r[s.targetid-1][s.arrownr-1]=s.points===0?"M":s.points;return r}async function kv(n,e,t){var p;const r=Math.max(...t.flatMap(g=>g.eventresult.map(_=>_.targetid))),s=Math.max(...t.flatMap(g=>g.eventresult.map(_=>_.arrownr)));let i=null,o=n.name||n.eventname||null;if(o){const g=o.split(" - ")[0].trim().toLowerCase(),_=m.courses.filter(E=>(E.name||"").toLowerCase().includes(g));_.length===1&&(i=_[0].id,o=_[0].name)}const c=t.filter(g=>g!==e).map((g,_)=>({id:`guest-import-${Date.now()}-${_}`,name:g.name||y("roundImport.guestFallback",{n:_+1}),isGuest:!0,scores:Ml(Zf(g,r,s))})),l=n.eventinsstmp||Date.parse(n.eventdate)||Date.now(),u="imp_"+(e.objectId||n.eventobjectId||Date.now()),h={id:u,name:o||y("roundImport.importedRoundFallback"),courseId:i,courseName:o,numTargets:r,startTarget:1,ruleset:"WA",completed:l,gpsRoute:null,gpsDuration:null,gpsDistance:null,traversalOrder:sd(0,r),traversalPos:r,shooters:[{id:m.user.uid,name:((p=m.profile)==null?void 0:p.name)||y("analyse.meFallback"),isGuest:!1,scores:Ml(Zf(e,r,s))},...c],shooterIds:[m.user.uid]};await Ct(ne(K,"users",m.user.uid,"rounds",u),{...h,created:l}),Ct(ne(K,"users",m.user.uid),{roundIndex:sy({id:u,completed:l})},{merge:!0}).catch(()=>{}),m.rounds=m.rounds.filter(g=>g.id!==u),m.rounds.unshift({...h,created:l}),m.rounds.sort((g,_)=>{var C,L;const E=g.completed||g.created||0,P=_.completed||_.created||0;return(typeof P=="number"?P:((C=P.toMillis)==null?void 0:C.call(P))??0)-(typeof E=="number"?E:((L=E.toMillis)==null?void 0:L.call(E))??0)}),jt(),Ws(),j(y("roundImport.importedToast",{name:h.name}),"success")}let Fa=null;function Dv(){var n;(n=document.getElementById("import-player-modal"))==null||n.classList.add("hidden"),Fa=null}window.cancelImportPlayer=Dv;window.pickImportPlayer=async function(n){if(!Fa)return;const{raw:e,validPlayers:t}=Fa,r=t[n];Dv();try{await kv(e,r,t)}catch(s){console.warn("Import fejl:",s),j(y("roundImport.importError",{msg:s.message}),"error")}};function sC(n,e){Fa={raw:n,validPlayers:e};const t=document.getElementById("import-player-list");t.innerHTML=e.map((r,s)=>`<div class="ac-item" onclick="pickImportPlayer(${s})">${W(r.name||"—")}</div>`).join(""),document.getElementById("import-player-modal").classList.remove("hidden")}const da=document.getElementById("import-round-input");da||console.warn("round-import.js: #import-round-input findes ikke i DOM");da==null||da.addEventListener("change",async n=>{var t;const e=n.target.files[0];if(n.target.value="",!e){j(y("roundImport.noFileSelected"),"error");return}if(!m.user){j(y("roundImport.loginFirst"),"error");return}try{const r=JSON.parse(await e.text()),s=(r.players||[]).filter(c=>Array.isArray(c.eventresult)&&c.eventresult.length);if(!s.length){j(y("roundImport.noPlayersInFile"),"error");return}const i=(((t=m.profile)==null?void 0:t.email)||"").toLowerCase();let o=s.find(c=>(c.email||"").toLowerCase()===i);if(!o&&s.length===1&&(o=s[0]),!o){sC(r,s);return}await kv(r,o,s)}catch(r){console.warn("Import fejl:",r),j(y("roundImport.readError",{msg:(r==null?void 0:r.message)||r}),"error")}});let ha=null;async function iC(){try{"wakeLock"in navigator&&(ha=await navigator.wakeLock.request("screen"))}catch{}}function ud(){ha&&(ha.release(),ha=null)}function em(){if(!m.pendingRound)return;const n=m.rounds.find(t=>t.id===m.pendingRound);if(!n)return;m.pendingRound=null;const e=(n.shooters||[]).map(t=>({...t,scores:Jr(t.scores)}));setTimeout(()=>wc({...n,shooters:e}),300)}function oC(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${W(e)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};var rm;(rm=document.getElementById("ruleset-sel"))==null||rm.addEventListener("change",n=>{const e=document.getElementById("boost-thresh");e&&(e.value=iP(n.target.value))});window.startRound=async function(){var g,_,E;const n=(document.getElementById("round-name").value.trim()||y("setup.roundNameDefault")).slice(0,80),e=document.getElementById("course-sel").value,t=document.getElementById("target-count"),r=(t.value==="custom"?Number(document.getElementById("target-count-custom").value):Number(t.value))||24,s=Number(document.getElementById("start-target").value)-1,i=document.getElementById("gps-auto-sw").classList.contains("on"),o=document.getElementById("gps-track-sw").classList.contains("on");m.boostThreshold=Number(document.getElementById("boost-thresh").value)||8;const c=((g=document.getElementById("ruleset-sel"))==null?void 0:g.value)||cr,l=sn(c),u=[{id:m.user.uid,name:m.profile.name,isGuest:!1},...oC().filter(P=>P.id!==m.user.uid)];m.course=e&&m.courses.find(P=>P.id===e)||null;const h=u.map(P=>{const C=lP(P.id,P.name,P.isGuest);return uP(C,r,l),C});let p=s;if(i&&((_=m.course)!=null&&_.targets))try{p=pP(m.course.targets,await vc())}catch{}m.round={id:"r_"+Date.now(),name:n,courseId:e||null,courseName:((E=m.course)==null?void 0:E.name)||null,numTargets:r,startTarget:p+1,ruleset:c,shooters:h,created:Date.now(),traversalOrder:sd(p,r),traversalPos:0},o&&(m.gpsTracking=fP(aC),document.getElementById("gps-bar").classList.toggle("hidden",!m.gpsTracking),iC()),showActivePanel(),os(),vn(),bc(),Ec()};function ri(){return m.round.traversalOrder[m.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden");const e=document.getElementById("p-list");e&&(e.innerHTML="")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function vn(){var h,p;if(!m.round)return;const n=ri(),e=m.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=y("active.ofN",{n:e}),document.getElementById("round-badge").textContent=m.round.name;const t=(p=(h=m.course)==null?void 0:h.targets)==null?void 0:p[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||y("active.targetFallback",{n:n+1});const r=document.getElementById("target-distance"),s=m.showDistances&&(t==null?void 0:t.distance)!=null;r.classList.toggle("hidden",!s),r.textContent=s?y("active.distanceLabel",{m:t.distance}):"";const i=dP(m.round.shooters,e,sn(m.round.ruleset));document.getElementById("pbar").style.width=`${i/e*100}%`;const o=m.round.shooters.flatMap(g=>g.scores.flat().filter(_=>_!=null)),c=o.reduce((g,_)=>g+Te(_),0);document.getElementById("stat-avg").textContent=o.length?(c/o.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=c,document.getElementById("stat-rem").textContent=e-i;const l=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(l.classList.add("hidden"),l.onload=()=>l.classList.remove("hidden"),l.onerror=()=>l.classList.add("hidden"),l.src=t.imageUrl||t.photo):(l.src="",l.classList.add("hidden")),document.getElementById("edit-target-btn").classList.toggle("hidden",!(m.isAdmin&&m.round.courseId)),document.getElementById("next-btn").textContent=m.round.traversalPos===e-1?y("active.finish"):y("active.next");const u=aP(m.round.shooters,n);document.getElementById("target-avg").textContent=u!==null?y("active.targetAvg",{v:u}):""}function os(){if(!m.round)return;const n=ri(),e=document.getElementById("shooters-list");e.innerHTML="";const t=sn(m.round.ruleset),r=lr(m.round.ruleset);m.round.shooters.forEach((s,i)=>{const o=bt(s.scores),c=m.boostEnabled&&cP(s.scores,m.boostThreshold),l=s.scores[n]||Array(t).fill(null),u=document.createElement("div");u.className="shooter-card";const h=s.scores.flat().filter(_=>_!=null),p=h.length?(h.reduce((_,E)=>_+Te(E),0)/h.length).toFixed(2):"—";let g=`<div class="sh-mini"><div class="sh-mini-lbl">${y("active.runde")}</div><div class="sh-mini-val">${o}</div></div>`;if(t>=2){const E=Array.from({length:t},(P,C)=>s.scores.map(L=>L[C]).filter(L=>L!=null)).map(P=>P.length?(P.reduce((C,L)=>C+Te(L),0)/P.length).toFixed(2):"—");g+=`<div class="sh-mini"><div class="sh-mini-lbl">${y("active.arrowShort1")}</div><div class="sh-mini-val sh-mini-val-sm">${E[0]}</div></div>`,g+=`<div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">${y("active.snt")}</div><div class="sh-mini-val sh-mini-val-acc">${p}</div></div>`,g+=`<div class="sh-mini"><div class="sh-mini-lbl">${y("active.arrowShort2")}</div><div class="sh-mini-val sh-mini-val-sm">${E[1]}</div></div>`}else g+=`<div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">${y("active.snt")}</div><div class="sh-mini-val sh-mini-val-acc">${p}</div></div>`;u.innerHTML=`
      <div class="sh-head">${c?'<span class="boost-dot"></span>':""}
        <span class="sh-name">${W(s.name)}</span>
        <div class="sh-mini-group">${g}</div>
      </div>
      <div class="arrows-row">${Array.from({length:t},(_,E)=>`
        <div class="arrow-grp">${t>=2?`<div class="arrow-lbl">${y("active.pilLabel",{n:E+1})}</div>`:""}
          <div class="score-btns">${r.map((P,C)=>`
            <button class="sbtn ${P==="M"?"rank-M":`rank-${C}`} ${l[E]===P?`sel-${P}`:""}" data-v="${P}"
              onclick="setScore(${i},${n},${E},'${P}')">${P}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(u)})}window.setScore=function(n,e,t,r){const s=r==="M"?"M":Number(r);m.round.shooters[n].scores[e][t]=s,Ec(),os(),vn()};function aC({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=iv(r),document.getElementById("gps-dist").textContent=ov(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function Ec(){if(!(!m.round||!m.user))try{await Ct(ne(K,"users",m.user.uid,"active","round"),rv(m.round))}catch(n){console.warn(n)}}async function cC(){var n;try{const e=await ar(ne(K,"users",m.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(t.id&&m.rounds.some(s=>s.id===t.id)){await Ht(ne(K,"users",m.user.uid,"active","round"));return}if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await Ht(ne(K,"users",m.user.uid,"active","round"));return}pr(y("active.resumeConfirm"),()=>{m.round=hP(t),m.round.traversalOrder=t.traversalOrder||sd(0,m.round.numTargets),m.round.traversalPos=t.traversalPos||0,m.round.courseId&&(m.course=m.courses.find(s=>s.id===m.round.courseId)||null),showActivePanel(),os(),vn(),bc()})}catch(e){console.warn(e)}}function bc(){const n=document.getElementById("app-main");n&&(n.scrollTop=0,requestAnimationFrame(()=>{n.scrollTop=0,setTimeout(()=>{n.scrollTop=0},100)}))}function dd(){document.getElementById("edit-panel").classList.add("hidden")}window.prevTarget=function(){!m.round||m.round.traversalPos<=0||(dd(),m.round.traversalPos--,Ec(),os(),vn(),bc())};window.nextTarget=function(){m.round&&(dd(),m.round.traversalPos<m.round.numTargets-1?(m.round.traversalPos++,Ec(),os(),vn(),bc()):window.finishRound())};window.skipToTarget=function(){m.round&&(document.getElementById("skip-input").max=m.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!m.round||n<1||n>m.round.numTargets)return;dd();const e=m.round.traversalOrder.indexOf(n-1);e!==-1&&(m.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),os(),vn()};window.finishRound=async function(){var o,c,l;m.finishTap++;const n=document.getElementById("finish-btn");if(m.finishTap===1){n.textContent=y("active.finishConfirm"),setTimeout(()=>{m.finishTap=0,n.textContent=y("active.finishNow")},3e3);return}m.finishTap=0,n.textContent=y("active.finishNow");let e={};m.gpsTracking&&(e=av(),m.gpsTracking=!1),ud();const t=m.round.id||"r_"+Date.now(),r=m.round.shooters.filter(u=>!u.isGuest).map(u=>u.id),s={...rv(m.round),completed:Date.now(),...e,id:t,shooterIds:r};m.rounds.unshift({...s,created:Date.now()}),jt(),Ws(),Ct(ne(K,"users",m.user.uid,"rounds",t),{...s,created:De()}).catch(()=>j(y("active.networkError"),"error")),Ct(ne(K,"users",m.user.uid),{roundIndex:sy({id:t,completed:s.completed})},{merge:!0}).catch(()=>{}),m.round.shooters.filter(u=>!u.isGuest&&u.id!==m.user.uid).forEach(u=>{Ct(ne(K,"users",u.id,"rounds",t),{...s,created:De()}).catch(()=>j(y("active.shareError"),"error"))});const i=m.round;if(i.courseId&&((o=m.profile)!=null&&o.kon)&&((c=m.profile)!=null&&c.bueklasse)){const u=i.shooters.find(h=>{var p;return h.id===((p=m.user)==null?void 0:p.uid)})||((l=i.shooters)==null?void 0:l[0]);if(u){const h=u.scores.flat().filter(p=>p!=null).length;Ct(ne(K,"bane_stats",i.courseId,"runder",t),{score:bt(u.scores),arrowsShot:h,kon:m.profile.kon,bueklasse:m.profile.bueklasse,numTargets:i.numTargets,ruleset:i.ruleset||cr,dato:De()}).catch(p=>console.warn("bane_stats fejl:",p))}}window._lastRound=i,m.round=null,await Ht(ne(K,"users",m.user.uid,"active","round")).catch(()=>{}),mv(i),showResultsPanel()};window.abortRound=async function(){m.abortTap++;const n=document.getElementById("abort-btn");if(m.abortTap===1){n.textContent=y("active.abortConfirm"),setTimeout(()=>{m.abortTap=0,n.textContent=y("active.abort")},3e3);return}m.abortTap=0,n.textContent=y("active.abort"),m.gpsTracking&&(av(),m.gpsTracking=!1),ud(),await Ht(ne(K,"users",m.user.uid,"active","round")).catch(()=>{}),m.round=null,showSetupPanel()};window.showVisitResults=function(n){const e=m.rounds.find(r=>r.id===n);if(!e){j(y("active.notSavedLocally"),"error");return}const t=(e.shooters||[]).map(r=>({...r,scores:Jr(r.scores)}));window.switchTab("results"),wc({...e,shooters:t})};window.showRouteOnMap=function(n){!m.courseMap||!n.length||(m.courseMapLayer&&m.courseMap.removeLayer(m.courseMapLayer),m.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(m.courseMap),m.courseMap.fitBounds(m.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.openEditTarget=function(){var t,r;const n=ri(),e=(r=(t=m.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=ri();m.round.courseId&&(await od(m.round.courseId,e,{name:n}),(t=m.course)!=null&&t.targets&&(m.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),vn()};window.editGps=async function(){var n;try{const e=await vc(),t=ri();await od(m.round.courseId,t,{gps:e}),(n=m.course)!=null&&n.targets&&(m.course.targets[t].gps=e),j(y("active.gpsSaved"),"success")}catch(e){j(y("active.gpsError",{msg:e.message}),"error")}};const $a="2026-08-30";function lC(n){return(n==null?void 0:n.privacyAcceptedVersion)===$a}function uC(){return tv()==="da"?"privatliv.html":"privacy.html"}function Nv(){document.querySelectorAll("[data-privacy-link]").forEach(n=>{n.href=uC()})}function xv(){const n=document.getElementById("newsletter-sw");n&&(n.classList.toggle("on",!!m.profile.newsletterConsent),n.onclick=async()=>{const e=!m.profile.newsletterConsent;n.classList.toggle("on",e);try{await rt(ne(K,"users",m.user.uid),{newsletterConsent:e,newsletterConsentAt:e?De():null}),m.profile.newsletterConsent=e}catch(t){n.classList.toggle("on",!e),j(y("common.errorPrefix")+t.message,"error")}})}const tm={"auth/user-not-found":"auth.errUserNotFound","auth/wrong-password":"auth.errWrongPassword","auth/invalid-credential":"auth.errInvalidCredential","auth/email-already-in-use":"auth.errEmailInUse","auth/weak-password":"auth.errWeakPassword","auth/invalid-email":"auth.errInvalidEmail","auth/too-many-requests":"auth.errTooManyRequests","auth/network-request-failed":"auth.errNetwork"};function hd(n){return tm[n]?y(tm[n]):y("auth.errGeneric")}function ln(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){ln(y("auth.errFillAllFields"));return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await kI(Io,n,e)}catch(r){ln(hd(r.code))}finally{t.disabled=!1,t.textContent=y("auth.loginBtn")}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value,r=document.getElementById("signup-kon").value,s=document.getElementById("signup-bueklasse").value,i=document.getElementById("signup-privacy-accept").checked,o=document.getElementById("signup-newsletter-opt").checked;if(!n||!e||!t||!r||!s){ln(y("auth.errFillAllFields"));return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){ln(y("auth.errInvalidEmail"));return}if(t.length<6){ln(y("auth.errPasswordTooShort"));return}if(!i){ln(y("auth.errPrivacyRequired"));return}const c=document.querySelector("#signup-form .btn");c.disabled=!0,c.textContent="...";try{const l=await CI(Io,e,t);await Ct(ne(K,"users",l.user.uid),{name:n,email:e,yam:n,"e-mail":e,kon:r,bueklasse:s,created:De(),privacyAcceptedVersion:$a,privacyAcceptedAt:De(),newsletterConsent:o,newsletterConsentAt:o?De():null})}catch(l){ln(hd(l.code))}finally{c.disabled=!1,c.textContent=y("auth.signupBtn")}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){ln(y("auth.errEnterEmailFirst"));return}try{await PI(Io,n),ln(y("auth.resetEmailSent"),"ok")}catch(e){ln(hd(e.code))}};window.doLogout=async function(){try{await LI(Io)}catch{}};window.toggleGpsPause=mP;window.parseRoute=sv;const Lv="archery_push_dismissed";document.addEventListener("DOMContentLoaded",()=>{var c,l,u,h,p,g,_;nP(),Nv();const n=document.getElementById("boost-enabled-sw");if(n){const E=localStorage.getItem("boostEnabled");m.boostEnabled=E===null?!0:E==="true",n.classList.toggle("on",m.boostEnabled),n.addEventListener("click",()=>{m.boostEnabled=!m.boostEnabled,n.classList.toggle("on",m.boostEnabled),localStorage.setItem("boostEnabled",m.boostEnabled)})}const e=document.getElementById("show-distances-sw");e&&(m.showDistances=localStorage.getItem("archery_showDistances")==="true",e.classList.toggle("on",m.showDistances),e.addEventListener("click",()=>{m.showDistances=!m.showDistances,e.classList.toggle("on",m.showDistances),localStorage.setItem("archery_showDistances",m.showDistances),m.round&&vn()})),xI(Io,async E=>{if(E){m.user=E;let P,C;for(let L=0;L<3;L++)try{[P,C]=await Promise.all([ar(ne(K,"users",E.uid)),ar(ne(K,"admins",E.uid))]);break}catch(M){console.error("Profil fejl attempt",L,M.code,M.message),L<2?await new Promise(x=>setTimeout(x,2e3*(L+1))):(m.profile={name:E.email,email:E.email},m.isAdmin=!1)}if(P!=null&&P.exists()){const L=P.data();m.profile={name:L.name||L.yam||E.email,email:L.email||L["e-mail"]||E.email,kon:L.kon||null,bueklasse:L.bueklasse||null,privacyAcceptedVersion:L.privacyAcceptedVersion||null,newsletterConsent:L.newsletterConsent||!1}}else m.profile||(m.profile={name:E.email,email:E.email});m.isAdmin=(C==null?void 0:C.exists())||!1,m.isSuperAdmin=m.isAdmin&&E.email==="bsklausen@proton.me",dC()}else hC()});const t="archery_pwa_dismissed",r=localStorage.getItem(t)==="1";let s=null;window.addEventListener("beforeinstallprompt",E=>{E.preventDefault(),s=E,r||document.getElementById("pwa-banner").classList.remove("hidden")}),(c=document.getElementById("pwa-install-btn"))==null||c.addEventListener("click",async()=>{s&&(s.prompt(),await s.userChoice,s=null,document.getElementById("pwa-banner").classList.add("hidden"))}),(l=document.getElementById("pwa-dismiss-btn"))==null||l.addEventListener("click",()=>{document.getElementById("pwa-banner").classList.add("hidden"),localStorage.setItem(t,"1")}),(u=document.getElementById("push-enable-btn"))==null||u.addEventListener("click",async()=>{document.getElementById("push-banner").classList.add("hidden"),await Pv()&&j(y("banners.push.enabledToast"),"success")}),(h=document.getElementById("push-dismiss-btn"))==null||h.addEventListener("click",()=>{document.getElementById("push-banner").classList.add("hidden"),localStorage.setItem(Lv,"1")});const i=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.MSStream,o=window.navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches;i&&!o&&!r&&((p=document.getElementById("ios-install-banner"))==null||p.classList.remove("hidden")),(g=document.getElementById("ios-dismiss-btn"))==null||g.addEventListener("click",()=>{document.getElementById("ios-install-banner").classList.add("hidden"),localStorage.setItem(t,"1")}),fa(24),document.getElementById("target-count").addEventListener("change",E=>{const P=E.target.value,C=document.getElementById("target-count-custom");C.style.display=P==="custom"?"":"none",P!=="custom"&&fa(Number(P))}),document.getElementById("target-count-custom").addEventListener("input",E=>{const P=Number(E.target.value);P>0&&fa(P)}),(_=document.getElementById("photo-input"))==null||_.addEventListener("change",async E=>{var C;const P=E.target.files[0];if(P)try{const L=await lv(P),M=ri(),x=Ay(Jy,`courses/${m.round.courseId}/target_${M}.jpg`);await Ey(x,L,"base64",{contentType:"image/jpeg"});const B=await by(x);await od(m.round.courseId,M,{imageUrl:B}),(C=m.course)!=null&&C.targets&&(m.course.targets[M].imageUrl=B),vn()}catch(L){j(y("courses.uploadErrorToast",{msg:L.message}),"error")}}),document.querySelectorAll(".modal").forEach(E=>{E.addEventListener("click",P=>{P.target===E&&E.classList.add("hidden")})})});window.saveProfilModal=async function(){const n=document.getElementById("profil-kon").value,e=document.getElementById("profil-bueklasse").value,t=document.getElementById("profil-err");if(!n||!e){t.textContent=y("modals.profil.validationMsg"),t.classList.remove("hidden");return}t.classList.add("hidden");try{await rt(ne(K,"users",m.user.uid),{kon:n,bueklasse:e}),m.profile.kon=n,m.profile.bueklasse=e,document.getElementById("profil-modal").classList.add("hidden")}catch{t.textContent=y("modals.profil.saveError"),t.classList.remove("hidden")}};window.savePrivacyConsent=async function(){const n=document.getElementById("privacy-gate-err");if(!document.getElementById("privacy-gate-accept").checked){n.textContent=y("auth.errPrivacyRequired"),n.classList.remove("hidden");return}n.classList.add("hidden");const e=document.getElementById("privacy-gate-newsletter").checked;try{await rt(ne(K,"users",m.user.uid),{privacyAcceptedVersion:$a,privacyAcceptedAt:De(),newsletterConsent:e,newsletterConsentAt:e?De():null}),m.profile.privacyAcceptedVersion=$a,m.profile.newsletterConsent=e,xv(),document.getElementById("privacy-gate-modal").classList.add("hidden"),(!m.profile.kon||!m.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),300)}catch(t){n.textContent=y("common.errorPrefix")+t.message,n.classList.remove("hidden")}};function dC(){document.getElementById("hdr-name").textContent=m.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),lC(m.profile)?(!m.profile.kon||!m.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),800):setTimeout(()=>document.getElementById("privacy-gate-modal").classList.remove("hidden"),800),xv(),document.getElementById("admin-badge").classList.toggle("hidden",!m.isAdmin),document.querySelectorAll(".admin-only").forEach(t=>t.classList.toggle("hidden",!m.isAdmin));const n=Kf();m.friends=n.friends||[],m.rounds=n.rounds||[],it(nt(K,"users",m.user.uid,"friends")).then(t=>{m.friends=t.docs.map(r=>({...r.data(),id:r.id})),jt(),rr(),Hs()}).catch(t=>console.warn("Hent venner:",t)),rr(),Hs(),Ws(),m.pendingRound=new URLSearchParams(window.location.search).get("round")||null,m.pendingRound&&em();const e=Kf().courses||[];m.courses=e,is(),fd(),fC(),it(nt(K,"users",m.user.uid,"rounds")).then(t=>{const r=new Set(t.docs.map(c=>c.id)),s=t.docs.map(c=>({...c.data(),id:c.id}));if(s.length){const c=new Set(m.rounds.map(u=>u.id)),l=s.filter(u=>!c.has(u.id));l.length&&(m.rounds=[...m.rounds,...l].sort((u,h)=>{var _,E;const p=u.completed||u.created||0,g=h.completed||h.created||0;return(typeof g=="number"?g:((_=g.toMillis)==null?void 0:_.call(g))??0)-(typeof p=="number"?p:((E=p.toMillis)==null?void 0:E.call(p))??0)}),jt(),Ws(),m.pendingRound&&em())}const i=m.rounds.filter(c=>c.id&&!r.has(c.id));i.forEach(c=>{const{id:l,...u}=c;Ct(ne(K,"users",m.user.uid,"rounds",l),{...u,created:De()}).catch(()=>{})});const o=[...s,...i].filter(c=>c.id).map(c=>({id:c.id,completed:c.completed||0}));o.length&&Ct(ne(K,"users",m.user.uid),{roundIndex:o},{merge:!0}).catch(()=>{})}).catch(t=>console.warn("Hent runder:",t)),vP(),ld().then(()=>{Wt(),bo()}).catch(t=>console.warn("Hent meetups:",t)),bv().then(()=>{gr(),rr(),Tc()}).catch(t=>console.warn("Hent delinger:",t)),Rv().then(t=>{t&&zP()}),KP(),GP()&&localStorage.getItem(Lv)!=="1"&&document.getElementById("pwa-banner").classList.contains("hidden")&&document.getElementById("ios-install-banner").classList.contains("hidden")&&setTimeout(()=>{var t;return(t=document.getElementById("push-banner"))==null?void 0:t.classList.remove("hidden")},1e3),cC()}function hC(){m.user=null,m.profile=null,m.round=null,ud(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){tP(tv()==="da"?"en":"da"),Nv();const n=[Ma.da.setup.roundNameDefault,Ma.en.setup.roundNameDefault],e=document.getElementById("round-name");e&&n.includes(e.value)&&(e.value=y("setup.roundNameDefault")),m.round&&n.includes(m.round.name)&&(m.round.name=y("setup.roundNameDefault")),fd(),m.round&&(vn(),os()),document.getElementById("tab-results").classList.contains("active")&&Ws(),!document.getElementById("results-panel").classList.contains("hidden")&&window._lastRound&&mv(window._lastRound);const t=document.getElementById("round-popup");t&&!t.classList.contains("hidden")&&window._lastRound&&wc(window._lastRound),document.getElementById("tab-courses").classList.contains("active")&&is(),document.getElementById("tab-friends").classList.contains("active")&&(rr(),Hs(),uv(),Wt(),gr()),document.getElementById("tab-analyse").classList.contains("active")&&window.renderAnalyse()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&(uv(),Wt(),VP(),gr(),UP()),n==="analyse"&&window.renderAnalyse(),n==="courses"&&m.courseMap&&setTimeout(()=>m.courseMap.invalidateSize(),100)};function fC(){!navigator.geolocation||!m.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(m.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=id(e,o);c<t&&(t=c,r=s.id)})}),r&&t<500){const s=document.getElementById("course-sel");s.value=r,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function fd(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML=`<option value="">${y("setup.noCourse")}</option>`,[...m.courses].sort((t,r)=>t.name.localeCompare(r.name,"da")).forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${y("setup.targetsUnit",{n:t.numTargets})})`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=m.courses.find(i=>i.id===n.value),r=document.getElementById("target-count"),s=document.getElementById("target-count-custom");t?(!!r.querySelector(`option[value="${t.numTargets}"]`)?(r.value=String(t.numTargets),s.style.display="none"):(r.value="custom",s.value=t.numTargets,s.style.display=""),r.disabled=!0,s.disabled=!0):(r.disabled=!1,s.disabled=!1,r.value!=="custom"&&(s.style.display="none")),fa(t?t.numTargets:r.value==="custom"?Number(s.value):Number(r.value))}}window.populateCourseDropdown=fd;function fa(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}const nm="https://bsk65.github.io/video/";window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:160,height:160,colorDark:"#1a3a1a",colorLight:"#fff"}),document.getElementById("qr-url").value=window.location.href;const e=document.getElementById("qr-canvas-other");e.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(e,{text:nm,width:160,height:160,colorDark:"#1a3a1a",colorLight:"#fff"}),document.getElementById("qr-url-other").value=nm};window.copyQrUrl=function(){var e;const n=document.getElementById("qr-url");(e=navigator.clipboard)==null||e.writeText(n.value).then(()=>j(y("common.linkCopied"),"success"),()=>{n.select(),document.execCommand("copy"),j(y("common.linkCopied"),"success")})};window.copyQrUrlOther=function(){var e;const n=document.getElementById("qr-url-other");(e=navigator.clipboard)==null||e.writeText(n.value).then(()=>j(y("common.linkCopied"),"success"),()=>{n.select(),document.execCommand("copy"),j(y("common.linkCopied"),"success")})};window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
