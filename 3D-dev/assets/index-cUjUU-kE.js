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
 */const sm=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,h=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(g=64)),r.push(t[h],t[p],t[g],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Zv;const g=i<<2|c>>4;if(r.push(g),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const T=u<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const e_=function(n){const e=sm(n);return im.encodeByteArray(e,!0)},fa=function(n){return e_(n).replace(/\./g,"")},om=function(n){try{return im.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function t_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const n_=()=>t_().__FIREBASE_DEFAULTS__,r_=()=>{if(typeof process>"u"||typeof Hd>"u")return;const n=Hd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},s_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&om(n[1]);return e&&JSON.parse(e)},$a=()=>{try{return n_()||r_()||s_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},am=n=>{var e,t;return(t=(e=$a())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},i_=n=>{const e=am(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},cm=()=>{var n;return(n=$a())===null||n===void 0?void 0:n.config},lm=n=>{var e;return(e=$a())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function a_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fa(JSON.stringify(t)),fa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function l_(){var n;const e=(n=$a())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function u_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function h_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f_(){const n=it();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function um(){return!l_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ul(){try{return typeof indexedDB=="object"}catch{return!1}}function dm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function m_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="FirebaseError";class rn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=p_,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xr.prototype.create)}}class Xr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?g_(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new rn(s,c,r)}}function g_(n,e){return n.replace(y_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const y_=/\{\$([^}]+)}/g;function v_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Wd(i)&&Wd(o)){if(!xs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Wd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ri(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Pi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function __(n,e){const t=new w_(n,e);return t.subscribe.bind(t)}class w_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");I_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Lc),s.error===void 0&&(s.error=Lc),s.complete===void 0&&(s.complete=Lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Lc(){}/**
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
 */function De(n){return n&&n._delegate?n._delegate:n}class zt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class T_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new o_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(b_(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:E_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E_(n){return n===Ar?void 0:n}function b_(n){return n.instantiationMode==="EAGER"}/**
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
 */class A_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new T_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const S_={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},R_=ue.INFO,P_={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},C_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=P_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jl{constructor(e){this.name=e,this._logLevel=R_,this._logHandler=C_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?S_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const k_=(n,e)=>e.some(t=>n instanceof t);let Qd,Yd;function D_(){return Qd||(Qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N_(){return Yd||(Yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hm=new WeakMap,sl=new WeakMap,fm=new WeakMap,Vc=new WeakMap,ql=new WeakMap;function x_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Sn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&hm.set(t,n)}).catch(()=>{}),ql.set(e,n),e}function L_(n){if(sl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});sl.set(n,e)}let il={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function V_(n){il=n(il)}function O_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Oc(this),e,...t);return fm.set(r,e.sort?e.sort():[e]),Sn(r)}:N_().includes(n)?function(...e){return n.apply(Oc(this),e),Sn(hm.get(this))}:function(...e){return Sn(n.apply(Oc(this),e))}}function M_(n){return typeof n=="function"?O_(n):(n instanceof IDBTransaction&&L_(n),k_(n,D_())?new Proxy(n,il):n)}function Sn(n){if(n instanceof IDBRequest)return x_(n);if(Vc.has(n))return Vc.get(n);const e=M_(n);return e!==n&&(Vc.set(n,e),ql.set(e,n)),e}const Oc=n=>ql.get(n);function Ua(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Sn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sn(o.result),l.oldVersion,l.newVersion,Sn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}function Mc(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),Sn(t).then(()=>{})}const B_=["get","getKey","getAll","getAllKeys","count"],F_=["put","add","delete","clear"],Bc=new Map;function Jd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bc.get(e))return Bc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=F_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||B_.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return Bc.set(e,i),i}V_(n=>({...n,get:(e,t,r)=>Jd(e,t)||n.get(e,t,r),has:(e,t)=>!!Jd(e,t)||n.has(e,t)}));/**
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
 */class $_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(U_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function U_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ol="@firebase/app",Xd="0.10.13";/**
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
 */const Pn=new jl("@firebase/app"),j_="@firebase/app-compat",q_="@firebase/analytics-compat",G_="@firebase/analytics",K_="@firebase/app-check-compat",z_="@firebase/app-check",H_="@firebase/auth",W_="@firebase/auth-compat",Q_="@firebase/database",Y_="@firebase/data-connect",J_="@firebase/database-compat",X_="@firebase/functions",Z_="@firebase/functions-compat",ew="@firebase/installations",tw="@firebase/installations-compat",nw="@firebase/messaging",rw="@firebase/messaging-compat",sw="@firebase/performance",iw="@firebase/performance-compat",ow="@firebase/remote-config",aw="@firebase/remote-config-compat",cw="@firebase/storage",lw="@firebase/storage-compat",uw="@firebase/firestore",dw="@firebase/vertexai-preview",hw="@firebase/firestore-compat",fw="firebase",mw="10.14.1";/**
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
 */const al="[DEFAULT]",pw={[ol]:"fire-core",[j_]:"fire-core-compat",[G_]:"fire-analytics",[q_]:"fire-analytics-compat",[z_]:"fire-app-check",[K_]:"fire-app-check-compat",[H_]:"fire-auth",[W_]:"fire-auth-compat",[Q_]:"fire-rtdb",[Y_]:"fire-data-connect",[J_]:"fire-rtdb-compat",[X_]:"fire-fn",[Z_]:"fire-fn-compat",[ew]:"fire-iid",[tw]:"fire-iid-compat",[nw]:"fire-fcm",[rw]:"fire-fcm-compat",[sw]:"fire-perf",[iw]:"fire-perf-compat",[ow]:"fire-rc",[aw]:"fire-rc-compat",[cw]:"fire-gcs",[lw]:"fire-gcs-compat",[uw]:"fire-fst",[hw]:"fire-fst-compat",[dw]:"fire-vertex","fire-js":"fire-js",[fw]:"fire-js-all"};/**
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
 */const ma=new Map,gw=new Map,cl=new Map;function Zd(n,e){try{n.container.addComponent(e)}catch(t){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function en(n){const e=n.name;if(cl.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,n);for(const t of ma.values())Zd(t,n);for(const t of gw.values())Zd(t,n);return!0}function Zr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function un(n){return n.settings!==void 0}/**
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
 */const yw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new Xr("app","Firebase",yw);/**
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
 */class vw{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
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
 */const es=mw;function mm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:al,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw er.create("bad-app-name",{appName:String(s)});if(t||(t=cm()),!t)throw er.create("no-options");const i=ma.get(s);if(i){if(xs(t,i.options)&&xs(r,i.config))return i;throw er.create("duplicate-app",{appName:s})}const o=new A_(s);for(const l of cl.values())o.addComponent(l);const c=new vw(t,r,o);return ma.set(s,c),c}function Gl(n=al){const e=ma.get(n);if(!e&&n===al&&cm())return mm();if(!e)throw er.create("no-app",{appName:n});return e}function Ot(n,e,t){var r;let s=(r=pw[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(c.join(" "));return}en(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _w="firebase-heartbeat-database",ww=1,zi="firebase-heartbeat-store";let Fc=null;function pm(){return Fc||(Fc=Ua(_w,ww,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zi)}catch(t){console.warn(t)}}}}).catch(n=>{throw er.create("idb-open",{originalErrorMessage:n.message})})),Fc}async function Iw(n){try{const t=(await pm()).transaction(zi),r=await t.objectStore(zi).get(gm(n));return await t.done,r}catch(e){if(e instanceof rn)Pn.warn(e.message);else{const t=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(t.message)}}}async function eh(n,e){try{const r=(await pm()).transaction(zi,"readwrite");await r.objectStore(zi).put(e,gm(n)),await r.done}catch(t){if(t instanceof rn)Pn.warn(t.message);else{const r=er.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pn.warn(r.message)}}}function gm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Tw=1024,Ew=30*24*60*60*1e3;class bw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=th();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Ew}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=th(),{heartbeatsToSend:r,unsentEntries:s}=Aw(this._heartbeatsCache.heartbeats),i=fa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Pn.warn(t),""}}}function th(){return new Date().toISOString().substring(0,10)}function Aw(n,e=Tw){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),nh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),nh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Sw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ul()?dm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Iw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return eh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return eh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nh(n){return fa(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Rw(n){en(new zt("platform-logger",e=>new $_(e),"PRIVATE")),en(new zt("heartbeat",e=>new bw(e),"PRIVATE")),Ot(ol,Xd,n),Ot(ol,Xd,"esm2017"),Ot("fire-js","")}Rw("");var Pw="firebase",Cw="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(Pw,Cw,"app");function Kl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ym(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kw=ym,vm=new Xr("auth","Firebase",ym());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new jl("@firebase/auth");function Dw(n,...e){pa.logLevel<=ue.WARN&&pa.warn(`Auth (${es}): ${n}`,...e)}function Qo(n,...e){pa.logLevel<=ue.ERROR&&pa.error(`Auth (${es}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n,...e){throw zl(n,...e)}function fn(n,...e){return zl(n,...e)}function _m(n,e,t){const r=Object.assign(Object.assign({},kw()),{[e]:t});return new Xr("auth","Firebase",r).create(e,{appName:n.name})}function Rn(n){return _m(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return vm.create(n,...e)}function re(n,e,...t){if(!n)throw zl(e,...t)}function Tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qo(e),new Error(e)}function Cn(n,e){n||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Nw(){return rh()==="http:"||rh()==="https:"}function rh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nw()||d_()||"connection"in navigator)?navigator.onLine:!0}function Lw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cn(t>e,"Short delay should be less than long delay!"),this.isMobile=c_()||h_()}get(){return xw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Vw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=new uo(3e4,6e4);function Dn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nn(n,e,t,r,s={}){return Im(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=lo(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},i);return u_()||(u.referrerPolicy="no-referrer"),wm.fetch()(Tm(n,n.config.apiHost,t,c),u)})}async function Im(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vw),e);try{const s=new Bw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $o(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $o(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw $o(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _m(n,h,u);tn(n,h)}}catch(s){if(s instanceof rn)throw s;tn(n,"network-request-failed",{message:String(s)})}}async function ho(n,e,t,r,s={}){const i=await Nn(n,e,t,r,s);return"mfaPendingCredential"in i&&tn(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Tm(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Hl(n.config,s):`${n.config.apiScheme}://${s}`}function Mw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),Ow.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=fn(n,e,r);return s.customData._tokenResponse=t,s}function sh(n){return n!==void 0&&n.enterprise!==void 0}class Fw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Mw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $w(n,e){return Nn(n,"GET","/v2/recaptchaConfig",Dn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw(n,e){return Nn(n,"POST","/v1/accounts:delete",e)}async function Em(n,e){return Nn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jw(n,e=!1){const t=De(n),r=await t.getIdToken(e),s=Wl(r);re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mi($c(s.auth_time)),issuedAtTime:Mi($c(s.iat)),expirationTime:Mi($c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $c(n){return Number(n)*1e3}function Wl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=om(t);return s?JSON.parse(s):(Qo("Failed to decode base64 JWT payload"),null)}catch(s){return Qo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ih(n){const e=Wl(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof rn&&qw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function ga(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Hi(n,Em(t,{idToken:r}));re(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bm(i.providerUserInfo):[],c=zw(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ul(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function Kw(n){const e=De(n);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bm(n){return n.map(e=>{var{providerId:t}=e,r=Kl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(n,e){const t=await Im(n,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Tm(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ww(n,e){return Nn(n,"POST","/v2/accounts:revokeToken",Dn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ih(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=ih(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Hw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Cs;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ul(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jw(this,e)}reload(){return Kw(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ga(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await Hi(this,Uw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,u,h;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,_=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,L=(u=t.createdAt)!==null&&u!==void 0?u:void 0,M=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:B,isAnonymous:ee,providerData:J,stsTokenManager:b}=t;re(x&&b,e,"internal-error");const w=Cs.fromJSON(this.name,b);re(typeof x=="string",e,"internal-error"),qn(p,e.name),qn(g,e.name),re(typeof B=="boolean",e,"internal-error"),re(typeof ee=="boolean",e,"internal-error"),qn(_,e.name),qn(T,e.name),qn(R,e.name),qn(C,e.name),qn(L,e.name),qn(M,e.name);const E=new En({uid:x,auth:e,email:g,emailVerified:B,displayName:p,isAnonymous:ee,photoURL:T,phoneNumber:_,tenantId:R,stsTokenManager:w,createdAt:L,lastLoginAt:M});return J&&Array.isArray(J)&&(E.providerData=J.map(S=>Object.assign({},S))),C&&(E._redirectEventId=C),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new Cs;s.updateFromServerResponse(t);const i=new En({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ga(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Cs;c.updateFromIdToken(r);const l=new En({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ul(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ch(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dm(e))return"Blackberry";if(Nm(e))return"Webos";if(Rm(e))return"Safari";if((e.includes("chrome/")||Pm(e))&&!e.includes("edge/"))return"Chrome";if(km(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sm(n=it()){return/firefox\//i.test(n)}function Rm(n=it()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pm(n=it()){return/crios\//i.test(n)}function Cm(n=it()){return/iemobile/i.test(n)}function km(n=it()){return/android/i.test(n)}function Dm(n=it()){return/blackberry/i.test(n)}function Nm(n=it()){return/webos/i.test(n)}function Ql(n=it()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Qw(n=it()){var e;return Ql(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yw(){return f_()&&document.documentMode===10}function xm(n=it()){return Ql(n)||km(n)||Nm(n)||Dm(n)||/windows phone/i.test(n)||Cm(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n,e=[]){let t;switch(n){case"Browser":t=ch(it());break;case"Worker":t=`${ch(it())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${es}/${r}`}/**
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
 */class Jw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Xw(n,e={}){return Nn(n,"GET","/v2/passwordPolicy",Dn(n,e))}/**
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
 */const Zw=6;class eI{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Zw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lh(this),this.idTokenSubscription=new lh(this),this.beforeStateQueue=new Jw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Em(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ga(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Rn(this));const t=e?De(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xw(this),t=new eI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ww(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bn(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[bn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Dw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ur(n){return De(n)}class lh{constructor(e){this.auth=e,this.observer=null,this.addObserver=__(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nI(n){ja=n}function Vm(n){return ja.loadJS(n)}function rI(){return ja.recaptchaEnterpriseScript}function sI(){return ja.gapiScript}function iI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const oI="recaptcha-enterprise",aI="NO_RECAPTCHA";class cI{constructor(e){this.type=oI,this.auth=ur(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{$w(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Fw(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;sh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(aI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&sh(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=rI();l.length!==0&&(l+=c),Vm(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function uh(n,e,t,r=!1){const s=new cI(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ya(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await uh(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await uh(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(n,e){const t=Zr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(xs(i,e??{}))return s;tn(s,"already-initialized")}return t.initialize({options:e})}function uI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(bn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dI(n,e,t){const r=ur(n);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Om(e),{host:o,port:c}=hI(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),fI()}function Om(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hI(n){const e=Om(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:dh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:dh(o)}}}function dh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function mI(n,e){return Nn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(n,e){return ho(n,"POST","/v1/accounts:signInWithPassword",Dn(n,e))}async function gI(n,e){return Nn(n,"POST","/v1/accounts:sendOobCode",Dn(n,e))}async function yI(n,e){return gI(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(n,e){return ho(n,"POST","/v1/accounts:signInWithEmailLink",Dn(n,e))}async function _I(n,e){return ho(n,"POST","/v1/accounts:signInWithEmailLink",Dn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Yl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Wi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Wi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ya(e,t,"signInWithPassword",pI);case"emailLink":return vI(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ya(e,r,"signUpPassword",mI);case"emailLink":return _I(e,{idToken:t,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const wI="http://localhost";class Br extends Yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Kl(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ds(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ds(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ds(e,t)}buildRequest(){const e={requestUri:wI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TI(n){const e=Ri(Pi(n)).link,t=e?Ri(Pi(e)).deep_link_id:null,r=Ri(Pi(n)).deep_link_id;return(r?Ri(Pi(r)).link:null)||r||t||e||n}class Jl{constructor(e){var t,r,s,i,o,c;const l=Ri(Pi(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=II((s=l.mode)!==null&&s!==void 0?s:null);re(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=TI(e);try{return new Jl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function EI(n,e){return ho(n,"POST","/v1/accounts:signUp",Dn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class va extends rn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,va.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new va(e,t,r,s)}}function Bm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?va._fromErrorAndOperation(n,i,e,r):i})}async function bI(n,e,t=!1){const r=await Hi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fr._forOperation(n,"link",r)}/**
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
 */async function AI(n,e,t=!1){const{auth:r}=n;if(un(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await Hi(n,Bm(r,s,e,n),t);re(i.idToken,r,"internal-error");const o=Wl(i.idToken);re(o,r,"internal-error");const{sub:c}=o;return re(n.uid===c,r,"user-mismatch"),Fr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(n,e,t=!1){if(un(n.app))return Promise.reject(Rn(n));const r="signIn",s=await Bm(n,r,e),i=await Fr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function SI(n,e){return Fm(ur(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(n){const e=ur(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RI(n,e,t){const r=ur(n);await ya(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",yI)}async function PI(n,e,t){if(un(n.app))return Promise.reject(Rn(n));const r=ur(n),o=await ya(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",EI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$m(n),l}),c=await Fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function CI(n,e,t){return un(n.app)?Promise.reject(Rn(n)):SI(De(n),Qs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$m(n),r})}function kI(n,e,t,r){return De(n).onIdTokenChanged(e,t,r)}function DI(n,e,t){return De(n).beforeAuthStateChanged(e,t)}function NI(n,e,t,r){return De(n).onAuthStateChanged(e,t,r)}function xI(n){return De(n).signOut()}const _a="__sak";/**
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
 */class Um{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_a,"1"),this.storage.removeItem(_a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=1e3,VI=10;class jm extends Um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Yw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},LI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jm.type="LOCAL";const OI=jm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends Um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qm.type="SESSION";const Gm=qm;/**
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
 */function MI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await MI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Xl("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function FI(n){mn().location.href=n}/**
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
 */function Km(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function $I(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jI(){return Km()?self:null}/**
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
 */const zm="firebaseLocalStorageDb",qI=1,wa="firebaseLocalStorage",Hm="fbase_key";class mo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ga(n,e){return n.transaction([wa],e?"readwrite":"readonly").objectStore(wa)}function GI(){const n=indexedDB.deleteDatabase(zm);return new mo(n).toPromise()}function dl(){const n=indexedDB.open(zm,qI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(wa,{keyPath:Hm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(wa)?e(r):(r.close(),await GI(),e(await dl()))})})}async function fh(n,e,t){const r=Ga(n,!0).put({[Hm]:e,value:t});return new mo(r).toPromise()}async function KI(n,e){const t=Ga(n,!1).get(e),r=await new mo(t).toPromise();return r===void 0?null:r.value}function mh(n,e){const t=Ga(n,!0).delete(e);return new mo(t).toPromise()}const zI=800,HI=3;class Wm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>HI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Km()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(jI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $I(),!this.activeServiceWorker)return;this.sender=new BI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dl();return await fh(e,_a,"1"),await mh(e,_a),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>KI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ga(s,!1).getAll();return new mo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wm.type="LOCAL";const WI=Wm;new uo(3e4,6e4);/**
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
 */function QI(n,e){return e?bn(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Zl extends Yl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ds(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function YI(n){return Fm(n.auth,new Zl(n),n.bypassAuthState)}function JI(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),AI(t,new Zl(n),n.bypassAuthState)}async function XI(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),bI(t,new Zl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YI;case"linkViaPopup":case"linkViaRedirect":return XI;case"reauthViaPopup":case"reauthViaRedirect":return JI;default:tn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new uo(2e3,1e4);class Rs extends Qm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZI.get())};e()}}Rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="pendingRedirect",Jo=new Map;class tT extends Qm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const r=await nT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nT(n,e){const t=iT(e),r=sT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function rT(n,e){Jo.set(n._key(),e)}function sT(n){return bn(n._redirectPersistence)}function iT(n){return Yo(eT,n.config.apiKey,n.name)}async function oT(n,e,t=!1){if(un(n.app))return Promise.reject(Rn(n));const r=ur(n),s=QI(r,e),o=await new tT(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=10*60*1e3;class cT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ym(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(fn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ph(e))}saveEventToCache(e){this.cachedEventUids.add(ph(e)),this.lastProcessedEventTime=Date.now()}}function ph(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ym({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ym(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(n,e={}){return Nn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hT=/^https?/;async function fT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uT(n);for(const t of e)try{if(mT(t))return}catch{}tn(n,"unauthorized-domain")}function mT(n){const e=ll(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!hT.test(t))return!1;if(dT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const pT=new uo(3e4,6e4);function gh(){const n=mn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function gT(n){return new Promise((e,t)=>{var r,s,i;function o(){gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gh(),t(fn(n,"network-request-failed"))},timeout:pT.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const c=iI("iframefcb");return mn()[c]=()=>{gapi.load?o():t(fn(n,"network-request-failed"))},Vm(`${sI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function yT(n){return Xo=Xo||gT(n),Xo}/**
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
 */const vT=new uo(5e3,15e3),_T="__/auth/iframe",wT="emulator/auth/iframe",IT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ET(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hl(e,wT):`https://${n.config.authDomain}/${_T}`,r={apiKey:e.apiKey,appName:n.name,v:es},s=TT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${lo(r).slice(1)}`}async function bT(n){const e=await yT(n),t=mn().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:ET(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(n,"network-request-failed"),c=mn().setTimeout(()=>{i(o)},vT.get());function l(){mn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const AT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ST=500,RT=600,PT="_blank",CT="http://localhost";class yh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kT(n,e,t,r=ST,s=RT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},AT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=it().toLowerCase();t&&(c=Pm(u)?PT:t),Sm(u)&&(e=e||CT,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[_,T])=>`${g}${_}=${T},`,"");if(Qw(u)&&c!=="_self")return DT(e||"",c),new yh(null);const p=window.open(e||"",c,h);re(p,n,"popup-blocked");try{p.focus()}catch{}return new yh(p)}function DT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const NT="__/auth/handler",xT="emulator/auth/handler",LT=encodeURIComponent("fac");async function vh(n,e,t,r,s,i){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:es,eventId:s};if(e instanceof Mm){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",v_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof fo){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await n._getAppCheckToken(),u=l?`#${LT}=${encodeURIComponent(l)}`:"";return`${VT(n)}?${lo(c).slice(1)}${u}`}function VT({config:n}){return n.emulator?Hl(n,xT):`https://${n.authDomain}/${NT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="webStorageSupport";class OT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gm,this._completeRedirectFn=oT,this._overrideRedirectResult=rT}async _openPopup(e,t,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await vh(e,t,r,ll(),s);return kT(e,o,Xl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await vh(e,t,r,ll(),s);return FI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await bT(e),r=new cT(e);return t.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uc,{type:Uc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Uc];o!==void 0&&t(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xm()||Rm()||Ql()}}const MT=OT;var _h="@firebase/auth",wh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $T(n){en(new zt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lm(n)},u=new tI(r,s,i,l);return uI(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),en(new zt("auth-internal",e=>{const t=ur(e.getProvider("auth").getImmediate());return(r=>new BT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(_h,wh,FT(n)),Ot(_h,wh,"esm2017")}/**
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
 */const UT=5*60,jT=lm("authIdTokenMaxAge")||UT;let Ih=null;const qT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>jT)return;const s=t==null?void 0:t.token;Ih!==s&&(Ih=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GT(n=Gl()){const e=Zr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=lI(n,{popupRedirectResolver:MT,persistence:[WI,OI,Gm]}),r=lm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qT(i.toString());DI(t,o,()=>o(t.currentUser)),kI(t,c=>o(c))}}const s=am("auth");return s&&dI(t,`http://${s}`),t}function KT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}nI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",KT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$T("Browser");var Th=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xr,Jm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,w){function E(){}E.prototype=w.prototype,b.D=w.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(S,A,P){for(var I=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)I[ye-2]=arguments[ye];return w.prototype[A].apply(S,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,w,E){E||(E=0);var S=Array(16);if(typeof w=="string")for(var A=0;16>A;++A)S[A]=w.charCodeAt(E++)|w.charCodeAt(E++)<<8|w.charCodeAt(E++)<<16|w.charCodeAt(E++)<<24;else for(A=0;16>A;++A)S[A]=w[E++]|w[E++]<<8|w[E++]<<16|w[E++]<<24;w=b.g[0],E=b.g[1],A=b.g[2];var P=b.g[3],I=w+(P^E&(A^P))+S[0]+3614090360&4294967295;w=E+(I<<7&4294967295|I>>>25),I=P+(A^w&(E^A))+S[1]+3905402710&4294967295,P=w+(I<<12&4294967295|I>>>20),I=A+(E^P&(w^E))+S[2]+606105819&4294967295,A=P+(I<<17&4294967295|I>>>15),I=E+(w^A&(P^w))+S[3]+3250441966&4294967295,E=A+(I<<22&4294967295|I>>>10),I=w+(P^E&(A^P))+S[4]+4118548399&4294967295,w=E+(I<<7&4294967295|I>>>25),I=P+(A^w&(E^A))+S[5]+1200080426&4294967295,P=w+(I<<12&4294967295|I>>>20),I=A+(E^P&(w^E))+S[6]+2821735955&4294967295,A=P+(I<<17&4294967295|I>>>15),I=E+(w^A&(P^w))+S[7]+4249261313&4294967295,E=A+(I<<22&4294967295|I>>>10),I=w+(P^E&(A^P))+S[8]+1770035416&4294967295,w=E+(I<<7&4294967295|I>>>25),I=P+(A^w&(E^A))+S[9]+2336552879&4294967295,P=w+(I<<12&4294967295|I>>>20),I=A+(E^P&(w^E))+S[10]+4294925233&4294967295,A=P+(I<<17&4294967295|I>>>15),I=E+(w^A&(P^w))+S[11]+2304563134&4294967295,E=A+(I<<22&4294967295|I>>>10),I=w+(P^E&(A^P))+S[12]+1804603682&4294967295,w=E+(I<<7&4294967295|I>>>25),I=P+(A^w&(E^A))+S[13]+4254626195&4294967295,P=w+(I<<12&4294967295|I>>>20),I=A+(E^P&(w^E))+S[14]+2792965006&4294967295,A=P+(I<<17&4294967295|I>>>15),I=E+(w^A&(P^w))+S[15]+1236535329&4294967295,E=A+(I<<22&4294967295|I>>>10),I=w+(A^P&(E^A))+S[1]+4129170786&4294967295,w=E+(I<<5&4294967295|I>>>27),I=P+(E^A&(w^E))+S[6]+3225465664&4294967295,P=w+(I<<9&4294967295|I>>>23),I=A+(w^E&(P^w))+S[11]+643717713&4294967295,A=P+(I<<14&4294967295|I>>>18),I=E+(P^w&(A^P))+S[0]+3921069994&4294967295,E=A+(I<<20&4294967295|I>>>12),I=w+(A^P&(E^A))+S[5]+3593408605&4294967295,w=E+(I<<5&4294967295|I>>>27),I=P+(E^A&(w^E))+S[10]+38016083&4294967295,P=w+(I<<9&4294967295|I>>>23),I=A+(w^E&(P^w))+S[15]+3634488961&4294967295,A=P+(I<<14&4294967295|I>>>18),I=E+(P^w&(A^P))+S[4]+3889429448&4294967295,E=A+(I<<20&4294967295|I>>>12),I=w+(A^P&(E^A))+S[9]+568446438&4294967295,w=E+(I<<5&4294967295|I>>>27),I=P+(E^A&(w^E))+S[14]+3275163606&4294967295,P=w+(I<<9&4294967295|I>>>23),I=A+(w^E&(P^w))+S[3]+4107603335&4294967295,A=P+(I<<14&4294967295|I>>>18),I=E+(P^w&(A^P))+S[8]+1163531501&4294967295,E=A+(I<<20&4294967295|I>>>12),I=w+(A^P&(E^A))+S[13]+2850285829&4294967295,w=E+(I<<5&4294967295|I>>>27),I=P+(E^A&(w^E))+S[2]+4243563512&4294967295,P=w+(I<<9&4294967295|I>>>23),I=A+(w^E&(P^w))+S[7]+1735328473&4294967295,A=P+(I<<14&4294967295|I>>>18),I=E+(P^w&(A^P))+S[12]+2368359562&4294967295,E=A+(I<<20&4294967295|I>>>12),I=w+(E^A^P)+S[5]+4294588738&4294967295,w=E+(I<<4&4294967295|I>>>28),I=P+(w^E^A)+S[8]+2272392833&4294967295,P=w+(I<<11&4294967295|I>>>21),I=A+(P^w^E)+S[11]+1839030562&4294967295,A=P+(I<<16&4294967295|I>>>16),I=E+(A^P^w)+S[14]+4259657740&4294967295,E=A+(I<<23&4294967295|I>>>9),I=w+(E^A^P)+S[1]+2763975236&4294967295,w=E+(I<<4&4294967295|I>>>28),I=P+(w^E^A)+S[4]+1272893353&4294967295,P=w+(I<<11&4294967295|I>>>21),I=A+(P^w^E)+S[7]+4139469664&4294967295,A=P+(I<<16&4294967295|I>>>16),I=E+(A^P^w)+S[10]+3200236656&4294967295,E=A+(I<<23&4294967295|I>>>9),I=w+(E^A^P)+S[13]+681279174&4294967295,w=E+(I<<4&4294967295|I>>>28),I=P+(w^E^A)+S[0]+3936430074&4294967295,P=w+(I<<11&4294967295|I>>>21),I=A+(P^w^E)+S[3]+3572445317&4294967295,A=P+(I<<16&4294967295|I>>>16),I=E+(A^P^w)+S[6]+76029189&4294967295,E=A+(I<<23&4294967295|I>>>9),I=w+(E^A^P)+S[9]+3654602809&4294967295,w=E+(I<<4&4294967295|I>>>28),I=P+(w^E^A)+S[12]+3873151461&4294967295,P=w+(I<<11&4294967295|I>>>21),I=A+(P^w^E)+S[15]+530742520&4294967295,A=P+(I<<16&4294967295|I>>>16),I=E+(A^P^w)+S[2]+3299628645&4294967295,E=A+(I<<23&4294967295|I>>>9),I=w+(A^(E|~P))+S[0]+4096336452&4294967295,w=E+(I<<6&4294967295|I>>>26),I=P+(E^(w|~A))+S[7]+1126891415&4294967295,P=w+(I<<10&4294967295|I>>>22),I=A+(w^(P|~E))+S[14]+2878612391&4294967295,A=P+(I<<15&4294967295|I>>>17),I=E+(P^(A|~w))+S[5]+4237533241&4294967295,E=A+(I<<21&4294967295|I>>>11),I=w+(A^(E|~P))+S[12]+1700485571&4294967295,w=E+(I<<6&4294967295|I>>>26),I=P+(E^(w|~A))+S[3]+2399980690&4294967295,P=w+(I<<10&4294967295|I>>>22),I=A+(w^(P|~E))+S[10]+4293915773&4294967295,A=P+(I<<15&4294967295|I>>>17),I=E+(P^(A|~w))+S[1]+2240044497&4294967295,E=A+(I<<21&4294967295|I>>>11),I=w+(A^(E|~P))+S[8]+1873313359&4294967295,w=E+(I<<6&4294967295|I>>>26),I=P+(E^(w|~A))+S[15]+4264355552&4294967295,P=w+(I<<10&4294967295|I>>>22),I=A+(w^(P|~E))+S[6]+2734768916&4294967295,A=P+(I<<15&4294967295|I>>>17),I=E+(P^(A|~w))+S[13]+1309151649&4294967295,E=A+(I<<21&4294967295|I>>>11),I=w+(A^(E|~P))+S[4]+4149444226&4294967295,w=E+(I<<6&4294967295|I>>>26),I=P+(E^(w|~A))+S[11]+3174756917&4294967295,P=w+(I<<10&4294967295|I>>>22),I=A+(w^(P|~E))+S[2]+718787259&4294967295,A=P+(I<<15&4294967295|I>>>17),I=E+(P^(A|~w))+S[9]+3951481745&4294967295,b.g[0]=b.g[0]+w&4294967295,b.g[1]=b.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+P&4294967295}r.prototype.u=function(b,w){w===void 0&&(w=b.length);for(var E=w-this.blockSize,S=this.B,A=this.h,P=0;P<w;){if(A==0)for(;P<=E;)s(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<w;)if(S[A++]=b.charCodeAt(P++),A==this.blockSize){s(this,S),A=0;break}}else for(;P<w;)if(S[A++]=b[P++],A==this.blockSize){s(this,S),A=0;break}}this.h=A,this.o+=w},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var w=1;w<b.length-8;++w)b[w]=0;var E=8*this.o;for(w=b.length-8;w<b.length;++w)b[w]=E&255,E/=256;for(this.u(b),b=Array(16),w=E=0;4>w;++w)for(var S=0;32>S;S+=8)b[E++]=this.g[w]>>>S&255;return b};function i(b,w){var E=c;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=w(b)}function o(b,w){this.h=w;for(var E=[],S=!0,A=b.length-1;0<=A;A--){var P=b[A]|0;S&&P==w||(E[A]=P,S=!1)}this.g=E}var c={};function l(b){return-128<=b&&128>b?i(b,function(w){return new o([w|0],0>w?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return C(u(-b));for(var w=[],E=1,S=0;b>=E;S++)w[S]=b/E|0,E*=4294967296;return new o(w,0)}function h(b,w){if(b.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b.charAt(0)=="-")return C(h(b.substring(1),w));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(w,8)),S=p,A=0;A<b.length;A+=8){var P=Math.min(8,b.length-A),I=parseInt(b.substring(A,A+P),w);8>P?(P=u(Math.pow(w,P)),S=S.j(P).add(u(I))):(S=S.j(E),S=S.add(u(I)))}return S}var p=l(0),g=l(1),_=l(16777216);n=o.prototype,n.m=function(){if(R(this))return-C(this).m();for(var b=0,w=1,E=0;E<this.g.length;E++){var S=this.i(E);b+=(0<=S?S:4294967296+S)*w,w*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(T(this))return"0";if(R(this))return"-"+C(this).toString(b);for(var w=u(Math.pow(b,6)),E=this,S="";;){var A=B(E,w).g;E=L(E,A.j(w));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=A,T(E))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function T(b){if(b.h!=0)return!1;for(var w=0;w<b.g.length;w++)if(b.g[w]!=0)return!1;return!0}function R(b){return b.h==-1}n.l=function(b){return b=L(this,b),R(b)?-1:T(b)?0:1};function C(b){for(var w=b.g.length,E=[],S=0;S<w;S++)E[S]=~b.g[S];return new o(E,~b.h).add(g)}n.abs=function(){return R(this)?C(this):this},n.add=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],S=0,A=0;A<=w;A++){var P=S+(this.i(A)&65535)+(b.i(A)&65535),I=(P>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);S=I>>>16,P&=65535,I&=65535,E[A]=I<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function L(b,w){return b.add(C(w))}n.j=function(b){if(T(this)||T(b))return p;if(R(this))return R(b)?C(this).j(C(b)):C(C(this).j(b));if(R(b))return C(this.j(C(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var w=this.g.length+b.g.length,E=[],S=0;S<2*w;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var A=0;A<b.g.length;A++){var P=this.i(S)>>>16,I=this.i(S)&65535,ye=b.i(A)>>>16,Ue=b.i(A)&65535;E[2*S+2*A]+=I*Ue,M(E,2*S+2*A),E[2*S+2*A+1]+=P*Ue,M(E,2*S+2*A+1),E[2*S+2*A+1]+=I*ye,M(E,2*S+2*A+1),E[2*S+2*A+2]+=P*ye,M(E,2*S+2*A+2)}for(S=0;S<w;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=w;S<2*w;S++)E[S]=0;return new o(E,0)};function M(b,w){for(;(b[w]&65535)!=b[w];)b[w+1]+=b[w]>>>16,b[w]&=65535,w++}function x(b,w){this.g=b,this.h=w}function B(b,w){if(T(w))throw Error("division by zero");if(T(b))return new x(p,p);if(R(b))return w=B(C(b),w),new x(C(w.g),C(w.h));if(R(w))return w=B(b,C(w)),new x(C(w.g),w.h);if(30<b.g.length){if(R(b)||R(w))throw Error("slowDivide_ only works with positive integers.");for(var E=g,S=w;0>=S.l(b);)E=ee(E),S=ee(S);var A=J(E,1),P=J(S,1);for(S=J(S,2),E=J(E,2);!T(S);){var I=P.add(S);0>=I.l(b)&&(A=A.add(E),P=I),S=J(S,1),E=J(E,1)}return w=L(b,A.j(w)),new x(A,w)}for(A=p;0<=b.l(w);){for(E=Math.max(1,Math.floor(b.m()/w.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=u(E),I=P.j(w);R(I)||0<I.l(b);)E-=S,P=u(E),I=P.j(w);T(P)&&(P=g),A=A.add(P),b=L(b,I)}return new x(A,b)}n.A=function(b){return B(this,b).h},n.and=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],S=0;S<w;S++)E[S]=this.i(S)&b.i(S);return new o(E,this.h&b.h)},n.or=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],S=0;S<w;S++)E[S]=this.i(S)|b.i(S);return new o(E,this.h|b.h)},n.xor=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],S=0;S<w;S++)E[S]=this.i(S)^b.i(S);return new o(E,this.h^b.h)};function ee(b){for(var w=b.g.length+1,E=[],S=0;S<w;S++)E[S]=b.i(S)<<1|b.i(S-1)>>>31;return new o(E,b.h)}function J(b,w){var E=w>>5;w%=32;for(var S=b.g.length-E,A=[],P=0;P<S;P++)A[P]=0<w?b.i(P+E)>>>w|b.i(P+E+1)<<32-w:b.i(P+E);return new o(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,xr=o}).apply(typeof Th<"u"?Th:typeof self<"u"?self:typeof window<"u"?window:{});var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xm,Ci,Zm,Zo,hl,ep,tp,np;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uo=="object"&&Uo];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var k=a[v];if(!(k in f))break e;f=f[k]}a=a[a.length-1],v=f[a],d=d(v),d!=v&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,v=!1,k={next:function(){if(!v&&f<a.length){var N=f++;return{value:d(N,a[N]),done:!1}}return v=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,v),a.apply(d,k)}}return function(){return a.apply(d,arguments)}}function g(a,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function _(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function T(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,k,N){for(var U=Array(arguments.length-2),be=2;be<arguments.length;be++)U[be-2]=arguments[be];return d.prototype[k].apply(v,U)}}function R(a){const d=a.length;if(0<d){const f=Array(d);for(let v=0;v<d;v++)f[v]=a[v];return f}return[]}function C(a,d){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(l(v)){const k=a.length||0,N=v.length||0;a.length=k+N;for(let U=0;U<N;U++)a[k+U]=v[U]}else a.push(v)}}class L{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function M(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var ee=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function J(a,d,f){for(const v in a)d.call(f,a[v],v,a)}function b(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function w(a){const d={};for(const f in a)d[f]=a[f];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,d){let f,v;for(let k=1;k<arguments.length;k++){v=arguments[k];for(f in v)a[f]=v[f];for(let N=0;N<E.length;N++)f=E[N],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function A(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function P(a){c.setTimeout(()=>{throw a},0)}function I(){var a=Ze;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class ye{constructor(){this.h=this.g=null}add(d,f){const v=Ue.get();v.set(d,f),this.h?this.h.next=v:this.g=v,this.h=v}}var Ue=new L(()=>new qt,a=>a.reset());class qt{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let je,ut=!1,Ze=new ye,as=()=>{const a=c.Promise.resolve(void 0);je=()=>{a.then(cs)}};var cs=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){P(f)}var d=Ue;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}ut=!1};function Gt(){this.s=this.s,this.C=this.C}Gt.prototype.s=!1,Gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Ln=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,d),c.removeEventListener("test",f,d)}catch{}return a}();function ae(a,d){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(ee){e:{try{B(d.nodeName);var k=!0;break e}catch{}k=!1}k||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:qe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ae.aa.h.call(this)}}T(ae,xe);var qe={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),Qt=0;function Yt(a,d,f,v,k){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!v,this.ha=k,this.key=++Qt,this.da=this.fa=!1}function he(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,d,f,v,k){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var U=we(a,d,v,k);return-1<U?(d=a[U],f||(d.fa=!1)):(d=new Yt(d,this.src,N,!!v,k),d.fa=f,a.push(d)),d};function Le(a,d){var f=d.type;if(f in a.g){var v=a.g[f],k=Array.prototype.indexOf.call(v,d,void 0),N;(N=0<=k)&&Array.prototype.splice.call(v,k,1),N&&(he(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function we(a,d,f,v){for(var k=0;k<a.length;++k){var N=a[k];if(!N.da&&N.listener==d&&N.capture==!!f&&N.ha==v)return k}return-1}var Ve="closure_lm_"+(1e6*Math.random()|0),dt={};function Ie(a,d,f,v,k){if(Array.isArray(d)){for(var N=0;N<d.length;N++)Ie(a,d[N],f,v,k);return null}return f=us(f),a&&a[At]?a.K(d,f,u(v)?!!v.capture:!1,k):rt(a,d,f,!1,v,k)}function rt(a,d,f,v,k,N){if(!d)throw Error("Invalid event type");var U=u(k)?!!k.capture:!!k,be=Ae(a);if(be||(a[Ve]=be=new Re(a)),f=be.add(d,f,v,U,N),f.proxy)return f;if(v=at(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)Ln||(k=U),k===void 0&&(k=!1),a.addEventListener(d.toString(),v,k);else if(a.attachEvent)a.attachEvent(yr(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function at(){function a(f){return d.call(a.src,a.listener,f)}const d=ls;return a}function si(a,d,f,v,k){if(Array.isArray(d))for(var N=0;N<d.length;N++)si(a,d[N],f,v,k);else v=u(v)?!!v.capture:!!v,f=us(f),a&&a[At]?(a=a.i,d=String(d).toString(),d in a.g&&(N=a.g[d],f=we(N,f,v,k),-1<f&&(he(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[d],a.h--)))):a&&(a=Ae(a))&&(d=a.g[d.toString()],a=-1,d&&(a=we(d,f,v,k)),(f=-1<a?d[a]:null)&&Vn(f))}function Vn(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[At])Le(d.i,a);else{var f=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(f,v,a.capture):d.detachEvent?d.detachEvent(yr(f),v):d.addListener&&d.removeListener&&d.removeListener(v),(f=Ae(d))?(Le(f,a),f.h==0&&(f.src=null,d[Ve]=null)):he(a)}}}function yr(a){return a in dt?dt[a]:dt[a]="on"+a}function ls(a,d){if(a.da)a=!0;else{d=new ae(d,this);var f=a.listener,v=a.ha||a.src;a.fa&&Vn(a),a=f.call(v,d)}return a}function Ae(a){return a=a[Ve],a instanceof Re?a:null}var ii="__closure_events_fn_"+(1e9*Math.random()>>>0);function us(a){return typeof a=="function"?a:(a[ii]||(a[ii]=function(d){return a.handleEvent(d)}),a[ii])}function ve(){Gt.call(this),this.i=new Re(this),this.M=this,this.F=null}T(ve,Gt),ve.prototype[At]=!0,ve.prototype.removeEventListener=function(a,d,f,v){si(this,a,d,f,v)};function Oe(a,d){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new xe(d,a);else if(d instanceof xe)d.target=d.target||a;else{var k=d;d=new xe(v,a),S(d,k)}if(k=!0,f)for(var N=f.length-1;0<=N;N--){var U=d.g=f[N];k=vr(U,v,!0,d)&&k}if(U=d.g=a,k=vr(U,v,!0,d)&&k,k=vr(U,v,!1,d)&&k,f)for(N=0;N<f.length;N++)U=d.g=f[N],k=vr(U,v,!1,d)&&k}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],v=0;v<f.length;v++)he(f[v]);delete a.g[d],a.h--}}this.F=null},ve.prototype.K=function(a,d,f,v){return this.i.add(String(a),d,!1,f,v)},ve.prototype.L=function(a,d,f,v){return this.i.add(String(a),d,!0,f,v)};function vr(a,d,f,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,N=0;N<d.length;++N){var U=d[N];if(U&&!U.da&&U.capture==f){var be=U.listener,ft=U.ha||U.src;U.fa&&Le(a.i,U),k=be.call(ft,v)!==!1&&k}}return k&&!v.defaultPrevented}function oi(a,d,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function ai(a){a.g=oi(()=>{a.g=null,a.i&&(a.i=!1,ai(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class So extends Gt{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ai(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function On(a){Gt.call(this),this.h=a,this.g={}}T(On,Gt);var ci=[];function li(a){J(a.g,function(d,f){this.g.hasOwnProperty(f)&&Vn(d)},a),a.g={}}On.prototype.N=function(){On.aa.N.call(this),li(this)},On.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ds=c.JSON.stringify,Ro=c.JSON.parse,Po=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function hs(){}hs.prototype.h=null;function ui(a){return a.h||(a.h=a.i())}function di(){}var Mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fs(){xe.call(this,"d")}T(fs,xe);function ms(){xe.call(this,"c")}T(ms,xe);var O={},$=null;function z(){return $=$||new ve}O.La="serverreachability";function W(a){xe.call(this,O.La,a)}T(W,xe);function X(a){const d=z();Oe(d,new W(d))}O.STAT_EVENT="statevent";function ie(a,d){xe.call(this,O.STAT_EVENT,a),this.stat=d}T(ie,xe);function ce(a){const d=z();Oe(d,new ie(d,a))}O.Ma="timingevent";function ge(a,d){xe.call(this,O.Ma,a),this.size=d}T(ge,xe);function Pe(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function oe(){this.g=!0}oe.prototype.xa=function(){this.g=!1};function Me(a,d,f,v,k,N){a.info(function(){if(a.g)if(N)for(var U="",be=N.split("&"),ft=0;ft<be.length;ft++){var me=be[ft].split("=");if(1<me.length){var yt=me[0];me=me[1];var vt=yt.split("_");U=2<=vt.length&&vt[1]=="type"?U+(yt+"="+me+"&"):U+(yt+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+v+") [attempt "+k+"]: "+d+`
`+f+`
`+U})}function on(a,d,f,v,k,N,U){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+k+"]: "+d+`
`+f+`
`+N+" "+U})}function Be(a,d,f,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Nt(a,f)+(v?" "+v:"")})}function Ye(a,d){a.info(function(){return"TIMEOUT: "+d})}oe.prototype.info=function(){};function Nt(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var k=v[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<k.length;U++)k[U]=""}}}}return ds(f)}catch{return d}}var Kt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ge={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gt;function Jt(){}T(Jt,hs),Jt.prototype.g=function(){return new XMLHttpRequest},Jt.prototype.i=function(){return{}},gt=new Jt;function ct(a,d,f,v){this.j=a,this.i=d,this.l=f,this.R=v||1,this.U=new On(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _r}function _r(){this.i=null,this.g="",this.h=!1}var St={},ht={};function Bn(a,d,f){a.L=1,a.v=Do(_n(d)),a.m=f,a.P=!0,Fn(a,null)}function Fn(a,d){a.F=Date.now(),Ke(a),a.A=_n(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Ad(f.i,"t",v),a.C=0,f=a.j.J,a.h=new _r,a.g=qd(a.j,f?d:null,!a.m),0<a.O&&(a.M=new So(g(a.Y,a,a.g),a.O)),d=a.U,f=a.g,v=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(ci[0]=k.toString()),k=ci);for(var N=0;N<k.length;N++){var U=Ie(f,k[N],v||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),X(),Me(a.i,a.u,a.A,a.l,a.R,a.m)}ct.prototype.ca=function(a){a=a.target;const d=this.M;d&&wn(a)==3?d.j():this.Y(a)},ct.prototype.Y=function(a){try{if(a==this.g)e:{const vt=wn(this.g);var d=this.g.Ba();const ys=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Nd(this.g)))){this.J||vt!=4||d==7||(d==8||0>=ys?X(3):X(2)),Ac(this);var f=this.g.Z();this.X=f;t:if(wr(this)){var v=Nd(this.g);a="";var k=v.length,N=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),hi(this);var U="";break t}this.h.i=new c.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(N&&d==k-1)});v.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,on(this.i,this.u,this.A,this.l,this.R,vt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var be,ft=this.g;if((be=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(be)){var me=be;break t}}me=null}if(f=me)Be(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sc(this,f);else{this.o=!1,this.s=3,ce(12),Ir(this),hi(this);break e}}if(this.P){f=!0;let Xt;for(;!this.J&&this.C<U.length;)if(Xt=bc(this,U),Xt==ht){vt==4&&(this.s=4,ce(14),f=!1),Be(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==St){this.s=4,ce(15),Be(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else Be(this.i,this.l,Xt,null),Sc(this,Xt);if(wr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||U.length!=0||this.h.h||(this.s=1,ce(16),f=!1),this.o=this.o&&f,!f)Be(this.i,this.l,U,"[Invalid Chunked Response]"),Ir(this),hi(this);else if(0<U.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Nc(yt),yt.M=!0,ce(11))}}else Be(this.i,this.l,U,null),Sc(this,U);vt==4&&Ir(this),this.o&&!this.J&&(vt==4?Fd(this.j,this):(this.o=!1,Ke(this)))}else Yv(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,ce(12)):(this.s=0,ce(13)),Ir(this),hi(this)}}}catch{}finally{}};function wr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function bc(a,d){var f=a.C,v=d.indexOf(`
`,f);return v==-1?ht:(f=Number(d.substring(f,v)),isNaN(f)?St:(v+=1,v+f>d.length?ht:(d=d.slice(v,v+f),a.C=v+f,d)))}ct.prototype.cancel=function(){this.J=!0,Ir(this)};function Ke(a){a.S=Date.now()+a.I,$n(a,a.I)}function $n(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Pe(g(a.ba,a),d)}function Ac(a){a.B&&(c.clearTimeout(a.B),a.B=null)}ct.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ye(this.i,this.A),this.L!=2&&(X(),ce(17)),Ir(this),this.s=2,hi(this)):$n(this,this.S-a)};function hi(a){a.j.G==0||a.J||Fd(a.j,a)}function Ir(a){Ac(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,li(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Sc(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Rc(f.h,a))){if(!a.K&&Rc(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var k=v;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Mo(f),Vo(f);else break e;Dc(f),ce(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Pe(g(f.Za,f),6e3));if(1>=gd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Er(f,11)}else if((a.K||f.g==a)&&Mo(f),!M(d))for(k=f.Da.g.parse(d),d=0;d<k.length;d++){let me=k[d];if(f.T=me[0],me=me[1],f.G==2)if(me[0]=="c"){f.K=me[1],f.ia=me[2];const yt=me[3];yt!=null&&(f.la=yt,f.j.info("VER="+f.la));const vt=me[4];vt!=null&&(f.Aa=vt,f.j.info("SVER="+f.Aa));const ys=me[5];ys!=null&&typeof ys=="number"&&0<ys&&(v=1.5*ys,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Xt=a.g;if(Xt){const Fo=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fo){var N=v.h;N.g||Fo.indexOf("spdy")==-1&&Fo.indexOf("quic")==-1&&Fo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Pc(N,N.h),N.h=null))}if(v.D){const xc=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;xc&&(v.ya=xc,Ce(v.I,v.D,xc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var U=a;if(v.qa=jd(v,v.J?v.ia:null,v.W),U.K){yd(v.h,U);var be=U,ft=v.L;ft&&(be.I=ft),be.B&&(Ac(be),Ke(be)),v.g=U}else Md(v);0<f.i.length&&Oo(f)}else me[0]!="stop"&&me[0]!="close"||Er(f,7);else f.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Er(f,7):kc(f):me[0]!="noop"&&f.l&&f.l.ta(me),f.v=0)}}X(4)}catch{}}var Lv=class{constructor(a,d){this.g=a,this.map=d}};function md(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gd(a){return a.h?1:a.g?a.g.size:0}function Rc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Pc(a,d){a.g?a.g.add(d):a.h=d}function yd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}md.prototype.cancel=function(){if(this.i=vd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return R(a.i)}function Vv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],f=a.length,v=0;v<f;v++)d.push(a[v]);return d}d=[],f=0;for(v in a)d[f++]=a[v];return d}function Ov(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const v in a)d[f++]=v;return d}}}function _d(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=Ov(a),v=Vv(a),k=v.length,N=0;N<k;N++)d.call(void 0,v[N],f&&f[N],a)}var wd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mv(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),k=null;if(0<=v){var N=a[f].substring(0,v);k=a[f].substring(v+1)}else N=a[f];d(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Tr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tr){this.h=a.h,Co(this,a.j),this.o=a.o,this.g=a.g,ko(this,a.s),this.l=a.l;var d=a.i,f=new pi;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Id(this,f),this.m=a.m}else a&&(d=String(a).match(wd))?(this.h=!1,Co(this,d[1]||"",!0),this.o=fi(d[2]||""),this.g=fi(d[3]||"",!0),ko(this,d[4]),this.l=fi(d[5]||"",!0),Id(this,d[6]||"",!0),this.m=fi(d[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}Tr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(mi(d,Td,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(mi(d,Td,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(mi(f,f.charAt(0)=="/"?$v:Fv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",mi(f,jv)),a.join("")};function _n(a){return new Tr(a)}function Co(a,d,f){a.j=f?fi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ko(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Id(a,d,f){d instanceof pi?(a.i=d,qv(a.i,a.h)):(f||(d=mi(d,Uv)),a.i=new pi(d,a.h))}function Ce(a,d,f){a.i.set(d,f)}function Do(a){return Ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mi(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,Bv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Bv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Td=/[#\/\?@]/g,Fv=/[#\?:]/g,$v=/[#\?]/g,Uv=/[#\?@]/g,jv=/#/g;function pi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&Mv(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=pi.prototype,n.add=function(a,d){Un(this),this.i=null,a=ps(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Ed(a,d){Un(a),d=ps(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function bd(a,d){return Un(a),d=ps(a,d),a.g.has(d)}n.forEach=function(a,d){Un(this),this.g.forEach(function(f,v){f.forEach(function(k){a.call(d,k,v,this)},this)},this)},n.na=function(){Un(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let v=0;v<d.length;v++){const k=a[v];for(let N=0;N<k.length;N++)f.push(d[v])}return f},n.V=function(a){Un(this);let d=[];if(typeof a=="string")bd(this,a)&&(d=d.concat(this.g.get(ps(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},n.set=function(a,d){return Un(this),this.i=null,a=ps(this,a),bd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Ad(a,d,f){Ed(a,d),0<f.length&&(a.i=null,a.g.set(ps(a,d),R(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var v=d[f];const N=encodeURIComponent(String(v)),U=this.V(v);for(v=0;v<U.length;v++){var k=N;U[v]!==""&&(k+="="+encodeURIComponent(String(U[v]))),a.push(k)}}return this.i=a.join("&")};function ps(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function qv(a,d){d&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(f,v){var k=v.toLowerCase();v!=k&&(Ed(this,v),Ad(this,k,f))},a)),a.j=d}function Gv(a,d){const f=new oe;if(c.Image){const v=new Image;v.onload=_(jn,f,"TestLoadImage: loaded",!0,d,v),v.onerror=_(jn,f,"TestLoadImage: error",!1,d,v),v.onabort=_(jn,f,"TestLoadImage: abort",!1,d,v),v.ontimeout=_(jn,f,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function Kv(a,d){const f=new oe,v=new AbortController,k=setTimeout(()=>{v.abort(),jn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(N=>{clearTimeout(k),N.ok?jn(f,"TestPingServer: ok",!0,d):jn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),jn(f,"TestPingServer: error",!1,d)})}function jn(a,d,f,v,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),v(f)}catch{}}function zv(){this.g=new Po}function Hv(a,d,f){const v=f||"";try{_d(a,function(k,N){let U=k;u(k)&&(U=ds(k)),d.push(v+N+"="+encodeURIComponent(U))})}catch(k){throw d.push(v+"type="+encodeURIComponent("_badmap")),k}}function No(a){this.l=a.Ub||null,this.j=a.eb||!1}T(No,hs),No.prototype.g=function(){return new xo(this.l,this.j)},No.prototype.i=function(a){return function(){return a}}({});function xo(a,d){ve.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(xo,ve),n=xo.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,yi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?gi(this):yi(this),this.readyState==3&&Sd(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,gi(this))},n.Qa=function(a){this.g&&(this.response=a,gi(this))},n.ga=function(){this.g&&gi(this)};function gi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,yi(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rd(a){let d="";return J(a,function(f,v){d+=v,d+=":",d+=f,d+=`\r
`}),d}function Cc(a,d,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=Rd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ce(a,d,f))}function ze(a){ve.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(ze,ve);var Wv=/^https?$/i,Qv=["POST","PUT"];n=ze.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gt.g(),this.v=this.o?ui(this.o):ui(gt),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(N){Pd(this,N);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var k in v)f.set(k,v[k]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const N of v.keys())f.set(N,v.get(N));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Qv,d,void 0))||v||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of f)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dd(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Pd(this,N)}};function Pd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Cd(a),Lo(a)}function Cd(a){a.A||(a.A=!0,Oe(a,"complete"),Oe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Oe(this,"complete"),Oe(this,"abort"),Lo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lo(this,!0)),ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?kd(this):this.bb())},n.bb=function(){kd(this)};function kd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wn(a)!=4||a.Z()!=2)){if(a.u&&wn(a)==4)oi(a.Ea,0,a);else if(Oe(a,"readystatechange"),wn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var v;if(v=U===0){var k=String(a.D).match(wd)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),v=!Wv.test(k?k.toLowerCase():"")}f=v}if(f)Oe(a,"complete"),Oe(a,"success");else{a.m=6;try{var N=2<wn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Cd(a)}}finally{Lo(a)}}}}function Lo(a,d){if(a.g){Dd(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Oe(a,"ready");try{f.onreadystatechange=v}catch{}}}function Dd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Ro(d)}};function Nd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Yv(a){const d={};a=(a.g&&2<=wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(M(a[v]))continue;var f=A(a[v]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=d[k]||[];d[k]=N,N.push(f)}b(d,function(v){return v.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function xd(a){this.Aa=0,this.i=[],this.j=new oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vi("baseRetryDelayMs",5e3,a),this.cb=vi("retryDelaySeedMs",1e4,a),this.Wa=vi("forwardChannelMaxRetries",2,a),this.wa=vi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new md(a&&a.concurrentRequestLimit),this.Da=new zv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xd.prototype,n.la=8,n.G=1,n.connect=function(a,d,f,v){ce(0),this.W=a,this.H=d||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=jd(this,null,this.W),Oo(this)};function kc(a){if(Ld(a),a.G==3){var d=a.U++,f=_n(a.I);if(Ce(f,"SID",a.K),Ce(f,"RID",d),Ce(f,"TYPE","terminate"),_i(a,f),d=new ct(a,a.j,d),d.L=2,d.v=Do(_n(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=d.v,f=!0),f||(d.g=qd(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ke(d)}Ud(a)}function Vo(a){a.g&&(Nc(a),a.g.cancel(),a.g=null)}function Ld(a){Vo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Mo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Oo(a){if(!pd(a.h)&&!a.s){a.s=!0;var d=a.Ga;je||as(),ut||(je(),ut=!0),Ze.add(d,a),a.B=0}}function Jv(a,d){return gd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Pe(g(a.Ga,a,d),$d(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new ct(this,this.j,a);let N=this.o;if(this.S&&(N?(N=w(N),S(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Od(this,k,d),f=_n(this.I),Ce(f,"RID",a),Ce(f,"CVER",22),this.D&&Ce(f,"X-HTTP-Session-Id",this.D),_i(this,f),N&&(this.O?d="headers="+encodeURIComponent(String(Rd(N)))+"&"+d:this.m&&Cc(f,this.m,N)),Pc(this.h,k),this.Ua&&Ce(f,"TYPE","init"),this.P?(Ce(f,"$req",d),Ce(f,"SID","null"),k.T=!0,Bn(k,f,null)):Bn(k,f,d),this.G=2}}else this.G==3&&(a?Vd(this,a):this.i.length==0||pd(this.h)||Vd(this))};function Vd(a,d){var f;d?f=d.l:f=a.U++;const v=_n(a.I);Ce(v,"SID",a.K),Ce(v,"RID",f),Ce(v,"AID",a.T),_i(a,v),a.m&&a.o&&Cc(v,a.m,a.o),f=new ct(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Od(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Pc(a.h,f),Bn(f,v,d)}function _i(a,d){a.H&&J(a.H,function(f,v){Ce(d,v,f)}),a.l&&_d({},function(f,v){Ce(d,v,f)})}function Od(a,d,f){f=Math.min(a.i.length,f);var v=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let N=-1;for(;;){const U=["count="+f];N==-1?0<f?(N=k[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let be=!0;for(let ft=0;ft<f;ft++){let me=k[ft].g;const yt=k[ft].map;if(me-=N,0>me)N=Math.max(0,k[ft].g-100),be=!1;else try{Hv(yt,U,"req"+me+"_")}catch{v&&v(yt)}}if(be){v=U.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,v}function Md(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;je||as(),ut||(je(),ut=!0),Ze.add(d,a),a.v=0}}function Dc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Pe(g(a.Fa,a),$d(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Bd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Pe(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ce(10),Vo(this),Bd(this))};function Nc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Bd(a){a.g=new ct(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=_n(a.qa);Ce(d,"RID","rpc"),Ce(d,"SID",a.K),Ce(d,"AID",a.T),Ce(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ce(d,"TO",a.ja),Ce(d,"TYPE","xmlhttp"),_i(a,d),a.m&&a.o&&Cc(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Do(_n(d)),f.m=null,f.P=!0,Fn(f,a)}n.Za=function(){this.C!=null&&(this.C=null,Vo(this),Dc(this),ce(19))};function Mo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Fd(a,d){var f=null;if(a.g==d){Mo(a),Nc(a),a.g=null;var v=2}else if(Rc(a.h,d))f=d.D,yd(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var k=a.B;v=z(),Oe(v,new ge(v,f)),Oo(a)}else Md(a);else if(k=d.s,k==3||k==0&&0<d.X||!(v==1&&Jv(a,d)||v==2&&Dc(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),k){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function $d(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function Er(a,d){if(a.j.info("Error code "+d),d==2){var f=g(a.fb,a),v=a.Xa;const k=!v;v=new Tr(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Co(v,"https"),Do(v),k?Gv(v.toString(),f):Kv(v.toString(),f)}else ce(2);a.G=0,a.l&&a.l.sa(d),Ud(a),Ld(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function Ud(a){if(a.G=0,a.ka=[],a.l){const d=vd(a.h);(d.length!=0||a.i.length!=0)&&(C(a.ka,d),C(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function jd(a,d,f){var v=f instanceof Tr?_n(f):new Tr(f);if(v.g!="")d&&(v.g=d+"."+v.g),ko(v,v.s);else{var k=c.location;v=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var N=new Tr(null);v&&Co(N,v),d&&(N.g=d),k&&ko(N,k),f&&(N.l=f),v=N}return f=a.D,d=a.ya,f&&d&&Ce(v,f,d),Ce(v,"VER",a.la),_i(a,v),v}function qd(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new ze(new No({eb:f})):new ze(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gd(){}n=Gd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Bo(){}Bo.prototype.g=function(a,d){return new Mt(a,d)};function Mt(a,d){ve.call(this),this.g=new xd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!M(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!M(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new gs(this)}T(Mt,ve),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){kc(this.g)},Mt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ds(a),a=f);d.i.push(new Lv(d.Ya++,a)),d.G==3&&Oo(d)},Mt.prototype.N=function(){this.g.l=null,delete this.j,kc(this.g),delete this.g,Mt.aa.N.call(this)};function Kd(a){fs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}T(Kd,fs);function zd(){ms.call(this),this.status=1}T(zd,ms);function gs(a){this.g=a}T(gs,Gd),gs.prototype.ua=function(){Oe(this.g,"a")},gs.prototype.ta=function(a){Oe(this.g,new Kd(a))},gs.prototype.sa=function(a){Oe(this.g,new zd)},gs.prototype.ra=function(){Oe(this.g,"b")},Bo.prototype.createWebChannel=Bo.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,np=function(){return new Bo},tp=function(){return z()},ep=O,hl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kt.NO_ERROR=0,Kt.TIMEOUT=8,Kt.HTTP_ERROR=6,Zo=Kt,Ge.COMPLETE="complete",Zm=Ge,di.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",ve.prototype.listen=ve.prototype.K,Ci=di,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,Xm=ze}).apply(typeof Uo<"u"?Uo:typeof self<"u"?self:typeof window<"u"?window:{});const Eh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $r=new jl("@firebase/firestore");function Ts(){return $r.logLevel}function F(n,...e){if($r.logLevel<=ue.DEBUG){const t=e.map(eu);$r.debug(`Firestore (${Ys}): ${n}`,...t)}}function Je(n,...e){if($r.logLevel<=ue.ERROR){const t=e.map(eu);$r.error(`Firestore (${Ys}): ${n}`,...t)}}function Qi(n,...e){if($r.logLevel<=ue.WARN){const t=e.map(eu);$r.warn(`Firestore (${Ys}): ${n}`,...t)}}function eu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Q(n="Unexpected state"){const e=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: `+n;throw Je(e),new Error(e)}function Z(n,e){n||Q()}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(wt.UNAUTHENTICATED))}shutdown(){}}class WT{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new zT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new wt(e)}}class QT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class YT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new QT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Z(this.o===void 0);const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string"),this.R=t.token,new JT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ZT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function Ls(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function sp(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new $e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new $e(0,0))}static max(){return new te(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,r){t===void 0?t=0:t>e.length&&Q(),r===void 0?r=e.length-t:r>e.length-t&&Q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Yi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pe extends Yi{construct(e,t,r){return new pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const eE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Yi{construct(e,t,r){return new Fe(e,t,r)}static isValidIdentifier(e){return eE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(pe.fromString(e))}static fromName(e){return new G(pe.fromString(e).popFirst(5))}static empty(){return new G(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new pe(e.slice()))}}/**
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
 */class Ia{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function fl(n){return n.fields.find(e=>e.kind===2)}function Sr(n){return n.fields.filter(e=>e.kind!==2)}Ia.UNKNOWN_ID=-1;class ea{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ji{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ji(0,Ut.min())}}function ip(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new $e(t+1,0):new $e(t,r));return new Ut(s,G.empty(),e)}function op(n){return new Ut(n.readTime,n.key,-1)}class Ut{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ut(te.min(),G.empty(),-1)}static max(){return new Ut(te.max(),G.empty(),-1)}}function tu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new pn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Bi(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=nu(r.target.error);this.V.reject(new Bi(e,s))}}static open(e,t,r,s){try{return new Ka(t,e.transaction(s,r))}catch(i){throw new Bi(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(F("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new nE(t)}}class tr{constructor(e,t,r){this.name=e,this.version=t,this.p=r,tr.S(it())===12.2&&Je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return F("SimpleDb","Removing database:",e),Rr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ul())return!1;if(tr.v())return!0;const e=it(),t=tr.S(e),r=0<t&&t<10,s=lp(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(F("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Bi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new j(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Bi(e,o))},s.onupgradeneeded=i=>{F("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{F("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=Ka.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next(u=>(c.g(),u)).catch(u=>(c.abort(u),D.reject(u))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,u=l.name!=="FirebaseError"&&o<3;if(F("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function lp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class tE{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Rr(this.B.delete())}}class Bi extends j{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function hr(n){return n.name==="IndexedDbTransactionError"}class nE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(F("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(F("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Rr(r)}add(e){return F("SimpleDb","ADD",this.store.name,e,e),Rr(this.store.add(e))}get(e){return Rr(this.store.get(e)).next(t=>(t===void 0&&(t=null),F("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return F("SimpleDb","DELETE",this.store.name,e),Rr(this.store.delete(e))}count(){return F("SimpleDb","COUNT",this.store.name),Rr(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new D((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new D((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){F("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new D((r,s)=>{t.onerror=i=>{const o=nu(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new D((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new tE(c),u=t(c.primaryKey,c.value,l);if(u instanceof D){const h=u.catch(p=>(l.done(),D.reject(p)));r.push(h)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>D.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Rr(n){return new D((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=nu(r.target.error);t(s)}})}let bh=!1;function nu(n){const e=tr.S(it());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bh||(bh=!0,setTimeout(()=>{throw r},0)),r}}return n}class rE{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){F("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{F("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){hr(t)?F("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await dr(t)}await this.X(6e4)})}}class sE{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return D.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return F("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(F("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=op(i);tu(o,r)>0&&(r=o)}),new Ut(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Lt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Lt.oe=-1;function za(n){return n==null}function Xi(n){return n===0&&1/n==-1/0}function up(n){return typeof n=="number"&&Number.isInteger(n)&&!Xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ah(e)),e=iE(n.get(t),e);return Ah(e)}function iE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Ah(n){return n+""}function dn(n){const e=n.length;if(Z(e>=2),e===2)return Z(n.charAt(0)===""&&n.charAt(1)===""),pe.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&Q(),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:Q()}i=o+2}return new pe(r)}/**
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
 */function ta(n,e){return[n,Ct(e)]}function dp(n,e,t){return[n,Ct(e),t]}const oE={},aE=["prefixPath","collectionGroup","readTime","documentId"],cE=["prefixPath","collectionGroup","documentId"],lE=["collectionGroup","readTime","prefixPath","documentId"],uE=["canonicalId","targetId"],dE=["targetId","path"],hE=["path","targetId"],fE=["collectionId","parent"],mE=["indexId","uid"],pE=["uid","sequenceNumber"],gE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],yE=["indexId","uid","orderedDocumentKey"],vE=["userId","collectionPath","documentId"],_E=["userId","collectionPath","largestBatchId"],wE=["userId","collectionGroup","largestBatchId"],hp=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],IE=[...hp,"documentOverlays"],fp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],mp=fp,ru=[...mp,"indexConfiguration","indexState","indexEntries"],TE=ru,EE=[...ru,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends cp{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ot(n,e){const t=Y(n);return tr.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||mt.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??mt.RED,this.left=s??mt.EMPTY,this.right=i??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new mt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,t,r,s,i){return this}insert(e,t,r){return new mt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Vt([])}unionWith(e){let t=new Ee(Fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ls(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gp("Invalid base64 string: "+i):i}}(e);return new Xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const bE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(n){if(Z(!!n),typeof n=="string"){let e=0;const t=bE.exec(n);if(Z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(n.seconds),nanos:Ne(n.nanos)}}function Ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sr(n){return typeof n=="string"?Xe.fromBase64String(n):Xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function iu(n){const e=n.mapValue.fields.__previous_value__;return su(e)?iu(e):e}function Zi(n){const e=kn(n.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,t,r,s,i,o,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Ur{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},na={nullValue:"NULL_VALUE"};function jr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?su(n)?4:yp(n)?9007199254740991:Ha(n)?10:11:Q()}function yn(n,e){if(n===e)return!0;const t=jr(n);if(t!==jr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zi(n).isEqual(Zi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kn(s.timestampValue),c=kn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return sr(s.bytesValue).isEqual(sr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ne(s.doubleValue),c=Ne(i.doubleValue);return o===c?Xi(o)===Xi(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Ls(n.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Rh(o)!==Rh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yn(o[l],c[l])))return!1;return!0}(n,e);default:return Q()}}function eo(n,e){return(n.values||[]).find(t=>yn(t,e))!==void 0}function ir(n,e){if(n===e)return 0;const t=jr(n),r=jr(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ne(i.integerValue||i.doubleValue),l=Ne(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Ch(n.timestampValue,e.timestampValue);case 4:return Ch(Zi(n),Zi(e));case 5:return se(n.stringValue,e.stringValue);case 6:return function(i,o){const c=sr(i),l=sr(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=se(c[u],l[u]);if(h!==0)return h}return se(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=se(Ne(i.latitude),Ne(o.latitude));return c!==0?c:se(Ne(i.longitude),Ne(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return kh(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,h;const p=i.fields||{},g=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,T=(l=g.value)===null||l===void 0?void 0:l.arrayValue,R=se(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:kh(_,T)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Zn.mapValue&&o===Zn.mapValue)return 0;if(i===Zn.mapValue)return 1;if(o===Zn.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const g=se(l[p],h[p]);if(g!==0)return g;const _=ir(c[l[p]],u[h[p]]);if(_!==0)return _}return se(l.length,h.length)}(n.mapValue,e.mapValue);default:throw Q()}}function Ch(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=kn(n),r=kn(e),s=se(t.seconds,r.seconds);return s!==0?s:se(t.nanos,r.nanos)}function kh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ir(t[s],r[s]);if(i)return i}return se(t.length,r.length)}function Vs(n){return pl(n)}function pl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=kn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return sr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return G.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=pl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pl(t.fields[o])}`;return s+"}"}(n.mapValue):Q()}function to(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gl(n){return!!n&&"integerValue"in n}function no(n){return!!n&&"arrayValue"in n}function Dh(n){return!!n&&"nullValue"in n}function Nh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ra(n){return!!n&&"mapValue"in n}function Ha(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Fi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ts(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Fi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const vp={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function SE(n){return"nullValue"in n?na:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?to(Ur.empty(),G.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Ha(n)?vp:{mapValue:{}}:Q()}function RE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?to(Ur.empty(),G.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?vp:"mapValue"in n?Ha(n)?{mapValue:{}}:Zn:Q()}function xh(n,e){const t=ir(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Lh(n,e){const t=ir(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ra(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fi(t)}setAll(e){let t=Fe.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Fi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ra(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ra(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ts(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Fi(this.value))}}function _p(n){const e=[];return ts(n.fields,(t,r)=>{const s=new Fe([t]);if(ra(r)){const i=_p(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new He(e,0,te.min(),te.min(),te.min(),It.empty(),0)}static newFoundDocument(e,t,r,s){return new He(e,1,t,te.min(),r,s,0)}static newNoDocument(e,t){return new He(e,2,t,te.min(),te.min(),It.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,te.min(),te.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ta{constructor(e,t="asc"){this.field=e,this.dir=t}}function PE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class wp{}class de extends wp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new CE(e,t,r):t==="array-contains"?new NE(e,r):t==="in"?new Sp(e,r):t==="not-in"?new xE(e,r):t==="array-contains-any"?new LE(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new kE(e,r):new DE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ir(t,this.value)):t!==null&&jr(this.value)===jr(t)&&this.matchesComparison(ir(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _e extends wp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new _e(e,t)}matches(e){return Ms(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ms(n){return n.op==="and"}function yl(n){return n.op==="or"}function ou(n){return Ip(n)&&Ms(n)}function Ip(n){for(const e of n.filters)if(e instanceof _e)return!1;return!0}function vl(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+Vs(n.value);if(ou(n))return n.filters.map(e=>vl(e)).join(",");{const e=n.filters.map(t=>vl(t)).join(",");return`${n.op}(${e})`}}function Tp(n,e){return n instanceof de?function(r,s){return s instanceof de&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(n,e):n instanceof _e?function(r,s){return s instanceof _e&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Tp(o,s.filters[c]),!0):!1}(n,e):void Q()}function Ep(n,e){const t=n.filters.concat(e);return _e.create(t,n.op)}function bp(n){return n instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${Vs(t.value)}`}(n):n instanceof _e?function(t){return t.op.toString()+" {"+t.getFilters().map(bp).join(" ,")+"}"}(n):"Filter"}class CE extends de{constructor(e,t,r){super(e,t,r),this.key=G.fromName(r.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class kE extends de{constructor(e,t){super(e,"in",t),this.keys=Ap("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class DE extends de{constructor(e,t){super(e,"not-in",t),this.keys=Ap("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ap(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>G.fromName(r.referenceValue))}class NE extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return no(t)&&eo(t.arrayValue,this.value)}}class Sp extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&eo(this.value.arrayValue,t)}}class xE extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!eo(this.value.arrayValue,t)}}class LE extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!no(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>eo(this.value.arrayValue,r))}}/**
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
 */class VE{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function _l(n,e=null,t=[],r=[],s=null,i=null,o=null){return new VE(n,e,t,r,s,i,o)}function qr(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),za(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Vs(r)).join(",")),e.ue=t}return e.ue}function po(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!PE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Tp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oh(n.startAt,e.startAt)&&Oh(n.endAt,e.endAt)}function Ea(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ba(n,e){return n.filters.filter(t=>t instanceof de&&t.field.isEqual(e))}function Mh(n,e,t){let r=na,s=!0;for(const i of ba(n,e)){let o=na,c=!0;switch(i.op){case"<":case"<=":o=SE(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=na}xh({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];xh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Bh(n,e,t){let r=Zn,s=!0;for(const i of ba(n,e)){let o=Zn,c=!0;switch(i.op){case">=":case">":o=RE(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Zn}Lh({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Lh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Rp(n,e,t,r,s,i,o,c){return new Js(n,e,t,r,s,i,o,c)}function Wa(n){return new Js(n)}function Fh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pp(n){return n.collectionGroup!==null}function $i(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ee(Fe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ta(i,r))}),t.has(Fe.keyField().canonicalString())||e.ce.push(new Ta(Fe.keyField(),r))}return e.ce}function $t(n){const e=Y(n);return e.le||(e.le=OE(e,$i(n))),e.le}function OE(n,e){if(n.limitType==="F")return _l(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ta(s.field,i)});const t=n.endAt?new Os(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Os(n.startAt.position,n.startAt.inclusive):null;return _l(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function wl(n,e){const t=n.filters.concat([e]);return new Js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Il(n,e,t){return new Js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qa(n,e){return po($t(n),$t(e))&&n.limitType===e.limitType}function Cp(n){return`${qr($t(n))}|lt:${n.limitType}`}function Es(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>bp(s)).join(", ")}]`),za(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Vs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Vs(s)).join(",")),`Target(${r})`}($t(n))}; limitType=${n.limitType})`}function go(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of $i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Vh(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,$i(r),s)||r.endAt&&!function(o,c,l){const u=Vh(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,$i(r),s))}(n,e)}function kp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dp(n){return(e,t)=>{let r=!1;for(const s of $i(n)){const i=ME(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ME(n,e,t){const r=n.field.isKeyField()?G.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ir(l,u):Q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const BE=new Se(G.comparator);function Bt(){return BE}const Np=new Se(G.comparator);function ki(...n){let e=Np;for(const t of n)e=e.insert(t.key,t);return e}function xp(n){let e=Np;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function hn(){return Ui()}function Lp(){return Ui()}function Ui(){return new fr(n=>n.toString(),(n,e)=>n.isEqual(e))}const FE=new Se(G.comparator),$E=new Ee(G.comparator);function le(...n){let e=$E;for(const t of n)e=e.add(t);return e}const UE=new Ee(se);function au(){return UE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ya{constructor(){this._=void 0}}function qE(n,e,t){return n instanceof Bs?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&su(i)&&(i=iu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Gr?Mp(n,e):n instanceof Fs?Bp(n,e):function(s,i){const o=Op(s,i),c=$h(o)+$h(s.Pe);return gl(o)&&gl(s.Pe)?Vp(c):cu(s.serializer,c)}(n,e)}function GE(n,e,t){return n instanceof Gr?Mp(n,e):n instanceof Fs?Bp(n,e):t}function Op(n,e){return n instanceof ro?function(r){return gl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Bs extends Ya{}class Gr extends Ya{constructor(e){super(),this.elements=e}}function Mp(n,e){const t=Fp(e);for(const r of n.elements)t.some(s=>yn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Fs extends Ya{constructor(e){super(),this.elements=e}}function Bp(n,e){let t=Fp(e);for(const r of n.elements)t=t.filter(s=>!yn(s,r));return{arrayValue:{values:t}}}class ro extends Ya{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function $h(n){return Ne(n.integerValue||n.doubleValue)}function Fp(n){return no(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t){this.field=e,this.transform=t}}function KE(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Gr&&s instanceof Gr||r instanceof Fs&&s instanceof Fs?Ls(r.elements,s.elements,yn):r instanceof ro&&s instanceof ro?yn(r.Pe,s.Pe):r instanceof Bs&&s instanceof Bs}(n.transform,e.transform)}class zE{constructor(e,t){this.version=e,this.transformResults=t}}class Tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ja{}function $p(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Xa(n.key,Tt.none()):new Xs(n.key,n.data,Tt.none());{const t=n.data,r=It.empty();let s=new Ee(Fe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new xn(n.key,r,new Vt(s.toArray()),Tt.none())}}function HE(n,e,t){n instanceof Xs?function(s,i,o){const c=s.value.clone(),l=jh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof xn?function(s,i,o){if(!sa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=jh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Up(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ji(n,e,t,r){return n instanceof Xs?function(i,o,c,l){if(!sa(i.precondition,o))return c;const u=i.value.clone(),h=qh(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof xn?function(i,o,c,l){if(!sa(i.precondition,o))return c;const u=qh(i.fieldTransforms,l,o),h=o.data;return h.setAll(Up(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return sa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function WE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Op(r.transform,s||null);i!=null&&(t===null&&(t=It.empty()),t.set(r.field,i))}return t||null}function Uh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ls(r,s,(i,o)=>KE(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xs extends Ja{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xn extends Ja{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Up(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function jh(n,e,t){const r=new Map;Z(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,GE(o,c,t[s]))}return r}function qh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,qE(i,o,e))}return r}class Xa extends Ja{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jp extends Ja{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&HE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ji(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ji(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Lp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=$p(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),le())}isEqual(e){return this.batchId===e.batchId&&Ls(this.mutations,e.mutations,(t,r)=>Uh(t,r))&&Ls(this.baseMutations,e.baseMutations,(t,r)=>Uh(t,r))}}class du{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length);let s=function(){return FE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new du(e,t,r,s)}}/**
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
 */class QE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,fe;function YE(n){switch(n){default:return Q();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function qp(n){if(n===void 0)return Je("GRPC error has no .code"),V.UNKNOWN;switch(n){case et.OK:return V.OK;case et.CANCELLED:return V.CANCELLED;case et.UNKNOWN:return V.UNKNOWN;case et.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case et.INTERNAL:return V.INTERNAL;case et.UNAVAILABLE:return V.UNAVAILABLE;case et.UNAUTHENTICATED:return V.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case et.NOT_FOUND:return V.NOT_FOUND;case et.ALREADY_EXISTS:return V.ALREADY_EXISTS;case et.PERMISSION_DENIED:return V.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case et.ABORTED:return V.ABORTED;case et.OUT_OF_RANGE:return V.OUT_OF_RANGE;case et.UNIMPLEMENTED:return V.UNIMPLEMENTED;case et.DATA_LOSS:return V.DATA_LOSS;default:return Q()}}(fe=et||(et={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JE(){return new TextEncoder}/**
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
 */const XE=new xr([4294967295,4294967295],0);function Gh(n){const e=JE().encode(n),t=new Jm;return t.update(e),new Uint8Array(t.digest())}function Kh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xr([t,r],0),new xr([s,i],0)]}class fu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Di(`Invalid padding: ${t}`);if(r<0)throw new Di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Di(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Di(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=xr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(xr.fromNumber(r)));return s.compare(XE)===1&&(s=new xr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Gh(e),[r,s]=Kh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fu(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Gh(e),[r,s]=Kh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,vo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yo(te.min(),s,new Se(se),Bt(),le())}}class vo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new vo(r,t,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Gp{constructor(e,t){this.targetId=e,this.me=t}}class Kp{constructor(e,t,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class zh{constructor(){this.fe=0,this.ge=Wh(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),t=le(),r=le();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new vo(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Wh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ZE{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bt(),this.qe=Hh(),this.Qe=new Se(se)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Ea(i))if(r===0){const o=new G(i.path);this.Ue(t,o,He.newNoDocument(o,te.min()))}else Z(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=sr(r).toUint8Array()}catch(l){if(l instanceof gp)return Qi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fu(o,s,i)}catch(l){return Qi(l instanceof Di?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Ea(c.target)){const l=new G(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,He.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=le();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new yo(e,t,this.Qe,this.ke,r);return this.ke=Bt(),this.qe=Hh(),this.Qe=new Se(se),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new zh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ee(se),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Hh(){return new Se(G.comparator)}function Wh(){return new Se(G.comparator)}const eb={asc:"ASCENDING",desc:"DESCENDING"},tb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nb={and:"AND",or:"OR"};class rb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tl(n,e){return n.useProto3Json||za(e)?e:{value:e}}function $s(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function sb(n,e){return $s(n,e.toTimestamp())}function kt(n){return Z(!!n),te.fromTimestamp(function(t){const r=kn(t);return new $e(r.seconds,r.nanos)}(n))}function mu(n,e){return El(n,e).canonicalString()}function El(n,e){const t=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Hp(n){const e=pe.fromString(n);return Z(ng(e)),e}function Aa(n,e){return mu(n.databaseId,e.path)}function Lr(n,e){const t=Hp(e);if(t.get(1)!==n.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(Yp(t))}function Wp(n,e){return mu(n.databaseId,e)}function Qp(n){const e=Hp(n);return e.length===4?pe.emptyPath():Yp(e)}function bl(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yp(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Qh(n,e,t){return{name:Aa(n,e),fields:t.value.mapValue.fields}}function ib(n,e,t){const r=Lr(n,e.name),s=kt(e.updateTime),i=e.createTime?kt(e.createTime):te.min(),o=new It({mapValue:{fields:e.fields}}),c=He.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function ob(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Z(h===void 0||typeof h=="string"),Xe.fromBase64String(h||"")):(Z(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Xe.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?V.UNKNOWN:qp(u.code);return new j(h,u.message||"")}(o);t=new Kp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lr(n,r.document.name),i=kt(r.document.updateTime),o=r.document.createTime?kt(r.document.createTime):te.min(),c=new It({mapValue:{fields:r.document.fields}}),l=He.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];t=new ia(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Lr(n,r.document),i=r.readTime?kt(r.readTime):te.min(),o=He.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ia([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Lr(n,r.document),i=r.removedTargetIds||[];t=new ia([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new QE(s,i),c=r.targetId;t=new Gp(c,o)}}return t}function Sa(n,e){let t;if(e instanceof Xs)t={update:Qh(n,e.key,e.value)};else if(e instanceof Xa)t={delete:Aa(n,e.key)};else if(e instanceof xn)t={update:Qh(n,e.key,e.data),updateMask:hb(e.fieldMask)};else{if(!(e instanceof jp))return Q();t={verify:Aa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Bs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Gr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ro)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw Q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(n,e.precondition)),t}function Al(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Tt.updateTime(kt(i.updateTime)):i.exists!==void 0?Tt.exists(i.exists):Tt.none()}(e.currentDocument):Tt.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)Z(c.setToServerValue==="REQUEST_TIME"),l=new Bs;else if("appendMissingElements"in c){const h=c.appendMissingElements.values||[];l=new Gr(h)}else if("removeAllFromArray"in c){const h=c.removeAllFromArray.values||[];l=new Fs(h)}else"increment"in c?l=new ro(o,c.increment):Q();const u=Fe.fromServerFormat(c.fieldPath);return new lu(u,l)}(n,s)):[];if(e.update){e.update.name;const s=Lr(n,e.update.name),i=new It({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Vt(u.map(h=>Fe.fromServerFormat(h)))}(e.updateMask);return new xn(s,i,o,t,r)}return new Xs(s,i,t,r)}if(e.delete){const s=Lr(n,e.delete);return new Xa(s,t)}if(e.verify){const s=Lr(n,e.verify);return new jp(s,t)}return Q()}function ab(n,e){return n&&n.length>0?(Z(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?kt(s.updateTime):kt(i);return o.isEqual(te.min())&&(o=kt(i)),new zE(o,s.transformResults||[])}(t,e))):[]}function Jp(n,e){return{documents:[Wp(n,e.path)]}}function Xp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Wp(n,s);const i=function(u){if(u.length!==0)return tg(_e.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:bs(g.field),direction:lb(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Tl(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:s}}function Zp(n){let e=Qp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(p){const g=eg(p);return g instanceof _e&&ou(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(T){return new Ta(As(T.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,za(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new Os(_,g)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new Os(_,g)}(t.endAt)),Rp(e,s,o,i,c,"F",l,u)}function cb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function eg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=As(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=As(t.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=As(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(t.unaryFilter.field);return de.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(n):n.fieldFilter!==void 0?function(t){return de.create(As(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return _e.create(t.compositeFilter.filters.map(r=>eg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(t.compositeFilter.op))}(n):Q()}function lb(n){return eb[n]}function ub(n){return tb[n]}function db(n){return nb[n]}function bs(n){return{fieldPath:n.canonicalString()}}function As(n){return Fe.fromServerFormat(n.fieldPath)}function tg(n){return n instanceof de?function(t){if(t.op==="=="){if(Nh(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NAN"}};if(Dh(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nh(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NOT_NAN"}};if(Dh(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(t.field),op:ub(t.op),value:t.value}}}(n):n instanceof _e?function(t){const r=t.getFilters().map(s=>tg(s));return r.length===1?r[0]:{compositeFilter:{op:db(t.op),filters:r}}}(n):Q()}function hb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ng(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,r,s,i=te.min(),o=te.min(),c=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new An(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.ct=e}}function fb(n,e){let t;if(e.document)t=ib(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),s=zr(e.noDocument.readTime);t=He.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Q();{const r=G.fromSegments(e.unknownDocument.path),s=zr(e.unknownDocument.version);t=He.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new $e(s[0],s[1]);return te.fromTimestamp(i)}(e.readTime)),t}function Yh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ra(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Aa(i,o.key),fields:o.data.value.mapValue.fields,updateTime:$s(i,o.version.toTimestamp()),createTime:$s(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Kr(e.version)};else{if(!e.isUnknownDocument())return Q();r.unknownDocument={path:t.path.toArray(),version:Kr(e.version)}}return r}function Ra(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Kr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function zr(n){const e=new $e(n.seconds,n.nanoseconds);return te.fromTimestamp(e)}function Pr(n,e){const t=(e.baseMutations||[]).map(i=>Al(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Al(n.ct,i)),s=$e.fromMillis(e.localWriteTimeMs);return new uu(e.batchId,s,t,r)}function Ni(n){const e=zr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?zr(n.lastLimboFreeSnapshotVersion):te.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return Z(i.documents.length===1),$t(Wa(Qp(i.documents[0])))}(n.query):function(i){return $t(Zp(i))}(n.query),new An(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Xe.fromBase64String(n.resumeToken))}function sg(n,e){const t=Kr(e.snapshotVersion),r=Kr(e.lastLimboFreeSnapshotVersion);let s;s=Ea(e.target)?Jp(n.ct,e.target):Xp(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:qr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function ig(n){const e=Zp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Il(e,e.limit,"L"):e}function jc(n,e){return new hu(e.largestBatchId,Al(n.ct,e.overlayMutation))}function Jh(n,e){const t=e.path.lastSegment();return[n,Ct(e.path.popLast()),t]}function Xh(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Kr(r.readTime),documentKey:Ct(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{getBundleMetadata(e,t){return Zh(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:zr(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Zh(e).put(function(s){return{bundleId:s.id,createTime:Kr(kt(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return ef(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:ig(i.bundledQuery),readTime:zr(i.readTime)}}(r)})}saveNamedQuery(e,t){return ef(e).put(function(s){return{name:s.name,readTime:Kr(kt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Zh(n){return ot(n,"bundles")}function ef(n){return ot(n,"namedQueries")}/**
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
 */class Za{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Za(e,r)}getOverlay(e,t){return wi(e).get(Jh(this.userId,t)).next(r=>r?jc(this.serializer,r):null)}getOverlays(e,t){const r=hn();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new hu(t,o);s.push(this.ht(e,c))}),D.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Ct(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(wi(e).j("collectionPathOverlayIndex",c))}),D.waitFor(i)}getOverlaysForCollection(e,t,r){const s=hn(),i=Ct(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return wi(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const u=jc(this.serializer,l);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=hn();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return wi(e).J({index:"collectionGroupOverlayIndex",range:c},(l,u,h)=>{const p=jc(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>i)}ht(e,t){return wi(e).put(function(s,i,o){const[c,l,u]=Jh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Sa(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function wi(n){return ot(n,"documentOverlays")}/**
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
 */class pb{Pt(e){return ot(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Xe.fromUint8Array(r):Xe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Cr{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Ne(e.integerValue));else if("doubleValue"in e){const r=Ne(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Xi(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=kn(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(sr(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?yp(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Ha(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):Q()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(Ne(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),G.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Cr.vt=new Cr;function gb(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function tf(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=gb(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class yb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=tf(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=tf(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class vb{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class _b{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Ii{constructor(){this.jt=new yb,this.Ht=new vb(this.jt),this.Jt=new _b(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class rf{constructor(e){this.Xt=new Ee((t,r)=>Fe.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Z(e.collectionGroup===this.collectionId),this.nn)return!1;const t=fl(e);if(t!==void 0&&!this.sn(t))return!1;const r=Sr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new Ee(Fe.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new ea(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new ea(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new ea(r.field,r.dir==="asc"?0:1)));return new Ia(Ia.UNKNOWN_ID,this.collectionId,t,Ji.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function og(n){var e,t;if(Z(n instanceof de||n instanceof _e),n instanceof de){if(n instanceof Sp){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>de.create(n.field,"==",i)))||[];return _e.create(s,"or")}return n}const r=n.filters.map(s=>og(s));return _e.create(r,n.op)}function wb(n){if(n.getFilters().length===0)return[];const e=Pl(og(n));return Z(ag(e)),Sl(e)||Rl(e)?[e]:e.getFilters()}function Sl(n){return n instanceof de}function Rl(n){return n instanceof _e&&ou(n)}function ag(n){return Sl(n)||Rl(n)||function(t){if(t instanceof _e&&yl(t)){for(const r of t.getFilters())if(!Sl(r)&&!Rl(r))return!1;return!0}return!1}(n)}function Pl(n){if(Z(n instanceof de||n instanceof _e),n instanceof de)return n;if(n.filters.length===1)return Pl(n.filters[0]);const e=n.filters.map(r=>Pl(r));let t=_e.create(e,n.op);return t=Pa(t),ag(t)?t:(Z(t instanceof _e),Z(Ms(t)),Z(t.filters.length>1),t.filters.reduce((r,s)=>pu(r,s)))}function pu(n,e){let t;return Z(n instanceof de||n instanceof _e),Z(e instanceof de||e instanceof _e),t=n instanceof de?e instanceof de?function(s,i){return _e.create([s,i],"and")}(n,e):sf(n,e):e instanceof de?sf(e,n):function(s,i){if(Z(s.filters.length>0&&i.filters.length>0),Ms(s)&&Ms(i))return Ep(s,i.getFilters());const o=yl(s)?s:i,c=yl(s)?i:s,l=o.filters.map(u=>pu(u,c));return _e.create(l,"or")}(n,e),Pa(t)}function sf(n,e){if(Ms(e))return Ep(e,n.getFilters());{const t=e.filters.map(r=>pu(n,r));return _e.create(t,"or")}}function Pa(n){if(Z(n instanceof de||n instanceof _e),n instanceof de)return n;const e=n.getFilters();if(e.length===1)return Pa(e[0]);if(Ip(n))return n;const t=e.map(s=>Pa(s)),r=[];return t.forEach(s=>{s instanceof de?r.push(s):s instanceof _e&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:_e.create(r,n.op)}/**
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
 */class Ib{constructor(){this.un=new gu}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Ut.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class gu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ee(pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ee(pe.comparator)).toArray()}}/**
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
 */const qo=new Uint8Array(0);class Tb{constructor(e,t){this.databaseId=t,this.cn=new gu,this.ln=new fr(r=>qr(r),(r,s)=>po(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:Ct(s)};return of(e).put(i)}return D.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[sp(t),""],!1,!0);return of(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(dn(o.parent))}return r})}addFieldIndex(e,t){const r=Ti(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=ws(e);return i.next(c=>{o.put(Xh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Ti(e),s=ws(e),i=_s(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ti(e),r=_s(e),s=ws(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return D.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new rf(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=_s(e);let s=!0;const i=new Map;return D.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=le();const c=[];return D.forEach(i,(l,u)=>{F("IndexedDbIndexManager",`Using index ${function(x){return`id=${x.indexId}|cg=${x.collectionGroup}|f=${x.fields.map(B=>`${B.fieldPath}:${B.kind}`).join(",")}`}(l)} to execute ${qr(t)}`);const h=function(x,B){const ee=fl(B);if(ee===void 0)return null;for(const J of ba(x,ee.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null}(u,l),p=function(x,B){const ee=new Map;for(const J of Sr(B))for(const b of ba(x,J.fieldPath))switch(b.op){case"==":case"in":ee.set(J.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return ee.set(J.fieldPath.canonicalString(),b.value),Array.from(ee.values())}return null}(u,l),g=function(x,B){const ee=[];let J=!0;for(const b of Sr(B)){const w=b.kind===0?Mh(x,b.fieldPath,x.startAt):Bh(x,b.fieldPath,x.startAt);ee.push(w.value),J&&(J=w.inclusive)}return new Os(ee,J)}(u,l),_=function(x,B){const ee=[];let J=!0;for(const b of Sr(B)){const w=b.kind===0?Bh(x,b.fieldPath,x.endAt):Mh(x,b.fieldPath,x.endAt);ee.push(w.value),J&&(J=w.inclusive)}return new Os(ee,J)}(u,l),T=this.In(l,u,g),R=this.In(l,u,_),C=this.Tn(l,u,p),L=this.En(l.indexId,h,T,g.inclusive,R,_.inclusive,C);return D.forEach(L,M=>r.G(M,t.limit).next(x=>{x.forEach(B=>{const ee=G.fromSegments(B.documentKey);o.has(ee)||(o=o.add(ee),c.push(ee))})}))}).next(()=>c)}return D.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=wb(_e.create(e.filters,"and")).map(r=>_l(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),h=[];for(let p=0;p<l;++p){const g=t?this.dn(t[p/u]):qo,_=this.An(e,g,r[p%u],s),T=this.Rn(e,g,i[p%u],o),R=c.map(C=>this.An(e,g,C,!0));h.push(...this.createRange(_,T,R))}return h}An(e,t,r,s){const i=new kr(e,G.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new kr(e,G.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new rf(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return D.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new Ee(Fe.comparator),h=!1;for(const p of l.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?h=!0:u=u.add(g.field));for(const p of l.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(h?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new Ii;for(const s of Sr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);Cr.vt.It(i,o)}return r.zt()}dn(e){const t=new Ii;return Cr.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new Ii;return Cr.vt.It(to(this.databaseId,t),r.Yt(function(i){const o=Sr(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new Ii);let i=0;for(const o of Sr(e)){const c=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&no(c))s=this.gn(s,o,c);else{const u=l.Yt(o.kind);Cr.vt.It(c,u)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new Ii;l.seed(c.zt()),Cr.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof de&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ti(e),s=ws(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return D.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(h,p){const g=p?new Ji(p.sequenceNumber,new Ut(zr(p.readTime),new G(dn(p.documentKey)),p.largestBatchId)):Ji.empty(),_=h.fields.map(([T,R])=>new ea(Fe.fromServerFormat(T),R));return new Ia(h.indexId,h.collectionGroup,_,g)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:se(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Ti(e),i=ws(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>D.forEach(c,l=>i.put(Xh(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return D.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),D.forEach(c,l=>this.wn(e,s,l).next(u=>{const h=this.Sn(i,l);return u.isEqual(h)?D.resolve():this.bn(e,i,l,u,h)}))))})}Dn(e,t,r,s){return _s(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return _s(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=_s(e);let i=new Ee(Gn);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{i=i.add(new kr(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let r=new Ee(Gn);const s=this.Vn(t,e);if(s==null)return r;const i=fl(t);if(i!=null){const o=e.data.field(i.fieldPath);if(no(o))for(const c of o.arrayValue.values||[])r=r.add(new kr(t.indexId,e.key,this.dn(c),s))}else r=r.add(new kr(t.indexId,e.key,qo,s));return r}bn(e,t,r,s,i){F("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,u,h,p,g){const _=l.getIterator(),T=u.getIterator();let R=vs(_),C=vs(T);for(;R||C;){let L=!1,M=!1;if(R&&C){const x=h(R,C);x<0?M=!0:x>0&&(L=!0)}else R!=null?M=!0:L=!0;L?(p(C),C=vs(T)):M?(g(R),R=vs(_)):(R=vs(_),C=vs(T))}}(s,i,Gn,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),D.waitFor(o)}yn(e){let t=1;return ws(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Gn(o,c)).filter((o,c,l)=>!c||Gn(o,l[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=Gn(o,e),l=Gn(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,qo,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,qo,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return Gn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(af)}getMinOffset(e,t){return D.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||Q())).next(af)}}function of(n){return ot(n,"collectionParents")}function _s(n){return ot(n,"indexEntries")}function Ti(n){return ot(n,"indexConfiguration")}function ws(n){return ot(n,"indexState")}function af(n){Z(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;tu(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ut(e.readTime,e.documentKey,t)}/**
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
 */const cf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class xt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new xt(e,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.J({range:o},(h,p,g)=>(c++,g.delete()));i.push(l.next(()=>{Z(c===1)}));const u=[];for(const h of t.mutations){const p=dp(e,h.key.path,t.batchId);i.push(s.delete(p)),u.push(h.key)}return D.waitFor(i).next(()=>u)}function Ca(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw Q();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(41943040,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);class ec{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){Z(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new ec(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kn(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Ss(e),o=Kn(e);return o.add({}).next(c=>{Z(typeof c=="number");const l=new uu(c,t,r,s),u=function(_,T,R){const C=R.baseMutations.map(M=>Sa(_.ct,M)),L=R.mutations.map(M=>Sa(_.ct,M));return{userId:T,batchId:R.batchId,localWriteTimeMs:R.localWriteTime.toMillis(),baseMutations:C,mutations:L}}(this.serializer,this.userId,l),h=[];let p=new Ee((g,_)=>se(g.canonicalString(),_.canonicalString()));for(const g of s){const _=dp(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),h.push(o.put(u)),h.push(i.put(_,oE))}return p.forEach(g=>{h.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),D.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return Kn(e).get(t).next(r=>r?(Z(r.userId===this.userId),Pr(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?D.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Kn(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(Z(c.batchId>=r),i=Pr(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Kn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Kn(e).U("userMutationsIndex",t).next(r=>r.map(s=>Pr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ta(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Ss(e).J({range:s},(o,c,l)=>{const[u,h,p]=o,g=dn(h);if(u===this.userId&&t.path.isEqual(g))return Kn(e).get(p).next(_=>{if(!_)throw Q();Z(_.userId===this.userId),i.push(Pr(this.serializer,_))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(se);const s=[];return t.forEach(i=>{const o=ta(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=Ss(e).J({range:c},(u,h,p)=>{const[g,_,T]=u,R=dn(_);g===this.userId&&i.path.isEqual(R)?r=r.add(T):p.done()});s.push(l)}),D.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=ta(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new Ee(se);return Ss(e).J({range:o},(l,u,h)=>{const[p,g,_]=l,T=dn(g);p===this.userId&&r.isPrefixOf(T)?T.length===s&&(c=c.add(_)):h.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Kn(e).get(i).next(o=>{if(o===null)throw Q();Z(o.userId===this.userId),r.push(Pr(this.serializer,o))}))}),D.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return cg(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),D.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Ss(e).J({range:r},(i,o,c)=>{if(i[0]===this.userId){const l=dn(i[1]);s.push(l)}else c.done()}).next(()=>{Z(s.length===0)})})}containsKey(e,t){return lg(e,this.userId,t)}Nn(e){return ug(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function lg(n,e,t){const r=ta(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Ss(n).J({range:i,H:!0},(c,l,u)=>{const[h,p,g]=c;h===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Kn(n){return ot(n,"mutations")}function Ss(n){return ot(n,"documentMutations")}function ug(n){return ot(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Eb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Hr(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>te.fromTimestamp(new $e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Is(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(Z(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Is(e).J((o,c)=>{const l=Ni(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>D.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Is(e).J((r,s)=>{const i=Ni(s);t(i)})}qn(e){return lf(e).get("targetGlobalKey").next(t=>(Z(t!==null),t))}Qn(e,t){return lf(e).put("targetGlobalKey",t)}Kn(e,t){return Is(e).put(sg(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=qr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Is(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const u=Ni(c);po(t,u.target)&&(i=u,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Jn(e);return t.forEach(o=>{const c=Ct(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(s)}removeMatchingKeys(e,t,r){const s=Jn(e);return D.forEach(t,i=>{const o=Ct(i.path);return D.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Jn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Jn(e);let i=le();return s.J({range:r,H:!0},(o,c,l)=>{const u=dn(o[1]),h=new G(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const r=Ct(t.path),s=IDBKeyRange.bound([r],[sp(r)],!1,!0);let i=0;return Jn(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ot(e,t){return Is(e).get(t).next(r=>r?Ni(r):null)}}function Is(n){return ot(n,"targets")}function lf(n){return ot(n,"targetGlobal")}function Jn(n){return ot(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf([n,e],[t,r]){const s=se(n,t);return s===0?se(e,r):s}class bb{constructor(e){this.Un=e,this.buffer=new Ee(uf),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();uf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ab{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){F("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hr(t)?F("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await dr(t)}await this.Hn(3e5)})}}class Sb{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Lt.oe);const r=new bb(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(cf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cf):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Ts()<=ue.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Rb(n,e){return new Sb(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,t){this.db=e,this.garbageCollector=Rb(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return Go(e,r)}removeReference(e,t,r){return Go(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Go(e,t)}nr(e,t){return function(s,i){let o=!1;return ug(s).Y(c=>lg(s,c,i).next(l=>(l&&(o=!0),D.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,te.min()),Jn(e).delete(function(p){return[0,Ct(p.path)]}(o))))});s.push(l)}}).next(()=>D.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Go(e,t)}tr(e,t){const r=Jn(e);let s,i=Lt.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:u})=>{o===0?(i!==Lt.oe&&t(new G(dn(s)),i),i=u,s=l):i=Lt.oe}).next(()=>{i!==Lt.oe&&t(new G(dn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Go(n,e){return Jn(n).put(function(r,s){return{targetId:0,path:Ct(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return br(e).put(r)}removeEntry(e,t,r){return br(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Ra(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=He.newInvalidDocument(t);return br(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ei(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:He.newInvalidDocument(t)};return br(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ei(t))},(s,i)=>{r={document:this.ir(t,i),size:Ca(i)}}).next(()=>r)}getEntries(e,t){let r=Bt();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=Bt(),s=new Se(G.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);r=r.insert(i,c),s=s.insert(i,Ca(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return D.resolve();let s=new Ee(ff);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Ei(s.first()),Ei(s.last())),o=s.getIterator();let c=o.getNext();return br(e).J({index:"documentKeyIndex",range:i},(l,u,h)=>{const p=G.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&ff(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,u),c=o.hasNext()?o.getNext():null),c?h.$(Ei(c)):h.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Ra(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return br(e).U(IDBKeyRange.bound(c,l,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let h=Bt();for(const p of u){const g=this.ir(G.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(go(t,g)||s.has(g.key))&&(h=h.insert(g.key,g))}return h})}getAllFromCollectionGroup(e,t,r,s){let i=Bt();const o=hf(t,r),c=hf(t,Ut.max());return br(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,u,h)=>{const p=this.ir(G.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&h.done()}).next(()=>i)}newChangeBuffer(e){return new kb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return df(e).get("remoteDocumentGlobalKey").next(t=>(Z(!!t),t))}rr(e,t){return df(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=fb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(te.min())))return r}return He.newInvalidDocument(e)}}function hg(n){return new Cb(n)}class kb extends dg{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new fr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new Ee((i,o)=>se(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Yh(this.cr.serializer,o);s=s.add(i.path.popLast());const u=Ca(l);r+=u-c.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=Yh(this.cr.serializer,o.convertToNoDocument(te.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),D.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function df(n){return ot(n,"remoteDocumentGlobal")}function br(n){return ot(n,"remoteDocumentsV14")}function Ei(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function hf(n,e){const t=e.documentKey.path.toArray();return[n,Ra(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ff(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=se(t[i],r[i]),s)return s;return s=se(t.length,r.length),s||(s=se(t[t.length-2],r[r.length-2]),s||se(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Db{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ji(r.mutation,s,Vt.empty(),$e.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,t,r=le()){const s=hn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=ki();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=hn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,le()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=Bt();const o=Ui(),c=function(){return Ui()}();return t.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof xn)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ji(h.mutation,u,h.mutation.getFieldMask(),$e.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var p;return c.set(u,new Db(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Ui();let s=new Se((o,c)=>o-c),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let h=r.get(l)||Vt.empty();h=c.applyToLocalView(u,h),r.set(l,h);const p=(s.get(c.batchId)||le()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,p=Lp();h.forEach(g=>{if(!i.has(g)){const _=$p(t.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(hn());let c=-1,l=i;return o.next(u=>D.forEach(u,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(h)?D.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,le())).next(h=>({batchId:c,changes:xp(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(r=>{let s=ki();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=ki();return this.indexManager.getCollectionParents(e,i).next(c=>D.forEach(c,l=>{const u=function(p,g){return new Js(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,He.newInvalidDocument(h)))});let c=ki();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&ji(h.mutation,u,Vt.empty(),$e.now()),go(t,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:kt(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:ig(s.bundledQuery),readTime:kt(s.readTime)}}(t)),D.resolve()}}/**
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
 */class xb{constructor(){this.overlays=new Se(G.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hn();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=hn(),i=t.length+1,o=new G(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Se((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=hn(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=hn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return D.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hu(t,r));let i=this.Ir.get(t);i===void 0&&(i=le(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Lb{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.Tr=new Ee(lt.Er),this.dr=new Ee(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new lt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new lt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new G(new pe([])),r=new lt(t,e),s=new lt(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new G(new pe([])),r=new lt(t,e),s=new lt(t,e+1);let i=le();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new lt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return G.comparator(e.key,t.key)||se(e.wr,t.wr)}static Ar(e,t){return se(e.wr,t.wr)||G.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ee(lt.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uu(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new lt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new lt(t,0),s=new lt(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(se);return t.forEach(s=>{const i=new lt(s,0),o=new lt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new lt(new G(i),0);let c=new Ee(se);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),D.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,s=>{const i=new lt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new lt(t,0),s=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.Mr=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let r=Bt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():He.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Bt();const o=t.path,c=new G(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||tu(op(h),r)<=0||(s.has(h.key)||go(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){Q()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Mb(this)}getSize(e){return D.resolve(this.size)}}class Mb extends dg{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.persistence=e,this.Nr=new fr(t=>qr(t),po),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new yu,this.targetCount=0,this.kr=Hr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Hr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Lt(0),this.Kr=!1,this.Kr=!0,this.$r=new Lb,this.referenceDelegate=e(this),this.Ur=new Bb(this),this.indexManager=new Ib,this.remoteDocumentCache=function(s){return new Ob(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new rg(t),this.Gr=new Nb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Vb(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const s=new Fb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Fb extends cp{constructor(e){super(),this.currentSequenceNumber=e}}class tc{constructor(e){this.persistence=e,this.Jr=new yu,this.Yr=null}static Zr(e){return new tc(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const s=G.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,te.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.serializer=e}O(e,t,r,s){const i=new Ka("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sh,{unique:!0}),l.createObjectStore("documentMutations")}(e),mf(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),mf(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:te.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",h)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sh,{unique:!0});const p=u.store("mutations"),g=h.map(_=>p.put(_));return D.waitFor(g)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:vE});u.createIndex("collectionPathOverlayIndex",_E,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",wE,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:aE});u.createIndex("documentKeyIndex",cE),u.createIndex("collectionGroupIndex",lE)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:mE}).createIndex("sequenceNumberIndex",pE,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:gE}).createIndex("documentKeyIndex",yE,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=Ca(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>D.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>D.forEach(c,l=>{Z(l.userId===i.userId);const u=Pr(this.serializer,l);return cg(e,i.userId,u).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,c)=>{const l=new pe(o),u=function(p){return[0,Ct(p)]}(l);i.push(t.get(u).next(h=>h?D.resolve():(p=>t.put({targetId:0,path:Ct(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>D.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:fE});const r=t.store("collectionParents"),s=new gu,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:Ct(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new pe(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],u)=>{const h=dn(c);return i(h.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=Ni(s),o=sg(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new G(pe.fromString(p.document.name).popFirst(5)):p.noDocument?G.fromSegments(p.noDocument.path):p.unknownDocument?G.fromSegments(p.unknownDocument.path):Q()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(u))}).next(()=>D.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=hg(this.serializer),i=new mg(tc.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(l=>{var u;let h=(u=c.get(l.userId))!==null&&u!==void 0?u:le();Pr(this.serializer,l).keys().forEach(p=>h=h.add(p)),c.set(l.userId,h)}),D.forEach(c,(l,u)=>{const h=new wt(u),p=Za.lt(this.serializer,h),g=i.getIndexManager(h),_=ec.lt(h,this.serializer,g,i.referenceDelegate);return new fg(s,_,p,g).recalculateAndSaveOverlaysForDocumentKeys(new ml(t,Lt.oe),l).next()})})}}function mf(n){n.createObjectStore("targetDocuments",{keyPath:dE}).createIndex("documentTargetsIndex",hE,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",uE,{unique:!0}),n.createObjectStore("targetGlobal")}const qc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class vu{constructor(e,t,r,s,i,o,c,l,u,h,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=c,this.ci=u,this.li=h,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!vu.D())throw new j(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Pb(this,s),this.Ai=t+"main",this.serializer=new rg(l),this.Ri=new tr(this.Ai,this.hi,new $b(this.serializer)),this.$r=new pb,this.Ur=new Eb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=hg(this.serializer),this.Gr=new mb,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&Je("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(V.FAILED_PRECONDITION,qc);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Lt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ko(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(hr(e))return F("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return F("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return bi(e).get("owner").next(t=>D.resolve(this.vi(t)))}Ci(e){return Ko(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ot(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return D.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?D.resolve(!0):bi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new j(V.FAILED_PRECONDITION,qc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ko(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&F("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ml(e,Lt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Ko(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return ec.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Tb(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Za.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){F("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?EE:l===16?TE:l===15?ru:l===14?mp:l===13?fp:l===12?IE:l===11?hp:void Q()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new ml(c,this.Qr?this.Qr.next():Lt.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new j(V.FAILED_PRECONDITION,ap);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return bi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new j(V.FAILED_PRECONDITION,qc)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return bi(e).put("owner",t)}static D(){return tr.D()}bi(e){const t=bi(e);return t.get("owner").next(r=>this.vi(r)?(F("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):D.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Je(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;um()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return F("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Je("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Je("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function bi(n){return ot(n,"owner")}function Ko(n){return ot(n,"clientMetadata")}function pg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ub{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gg{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return um()?8:lp(it())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ub;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Ts()<=ue.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Es(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(Ts()<=ue.DEBUG&&F("QueryEngine","Query:",Es(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ts()<=ue.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Es(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(t))):D.resolve())}Yi(e,t){if(Fh(t))return D.resolve(null);let r=$t(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Il(t,null,"F"),r=$t(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(t,c);return this.ns(t,u,o,l.readTime)?this.Yi(e,Il(t,null,"F")):this.rs(e,u,t,l)}))})))}Zi(e,t,r,s){return Fh(t)||s.isEqual(te.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?D.resolve(null):(Ts()<=ue.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Es(t)),this.rs(e,o,t,ip(s,-1)).next(c=>c))})}ts(e,t){let r=new Ee(Dp(e));return t.forEach((s,i)=>{go(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Ts()<=ue.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Es(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ut.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Se(se),this._s=new fr(i=>qr(i),po),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function yg(n,e,t,r){return new jb(n,e,t,r)}async function vg(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=le();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function qb(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const p=u.batch,g=p.keys();let _=D.resolve();return g.forEach(T=>{_=_.next(()=>h.getEntry(l,T)).next(R=>{const C=u.docVersions.get(T);Z(C!==null),R.version.compareTo(C)<0&&(p.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=le();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function _g(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Gb(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((h,p)=>{const g=s.get(p);if(!g)return;c.push(t.Ur.removeMatchingKeys(i,h.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,h.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Xe.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(p,_),function(R,C,L){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(g,_,h)&&c.push(t.Ur.updateTargetData(i,_))});let l=Bt(),u=le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(Kb(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(te.min())){const h=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return D.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.os=s,i))}function Kb(n,e,t){let r=le(),s=le();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Bt();return t.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function zb(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ka(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new An(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Us(n,e,t){const r=Y(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!hr(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Cl(n,e,t){const r=Y(n);let s=te.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const p=Y(l),g=p._s.get(h);return g!==void 0?D.resolve(p.os.get(g)):p.Ur.getTargetData(u,h)}(r,o,$t(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:te.min(),t?i:le())).next(c=>(Tg(r,kp(e),c),{documents:c,Ts:i})))}function wg(n,e){const t=Y(n),r=Y(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function Ig(n,e){const t=Y(n),r=t.us.get(e)||te.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,ip(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Tg(t,e,s),s))}function Tg(n,e,t){let r=n.us.get(e)||te.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function pf(n,e){return`firestore_clients_${n}_${e}`}function gf(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Gc(n,e){return`firestore_targets_${n}_${e}`}class Da{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new j(s.error.code,s.error.message))),o?new Da(e,t,s.state,i):(Je("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class qi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new j(r.error.code,r.error.message))),i?new qi(e,r.state,s):(Je("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Na{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=au();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=up(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Na(e,i):(Je("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class wu{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new wu(t.clientId,t.onlineState):(Je("SharedClientState",`Failed to parse online state: ${e}`),null)}}class kl{constructor(){this.activeTargetIds=au()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kc{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Se(se),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=pf(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new kl),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(pf(this.persistenceKey,r));if(s){const i=Na.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Gc(this.persistenceKey,e));if(s){const i=qi.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Gc(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return F("SharedClientState","READ",e,t),t}setItem(e,t){F("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){F("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(F("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=Lt.oe;if(i!=null)try{const c=JSON.parse(i);Z(typeof c=="number"),o=c}catch(c){Je("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==Lt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new Da(this.currentUser,e,t,r),i=gf(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=gf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=Gc(this.persistenceKey,e),i=new qi(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Na.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Da.Rs(new wt(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return qi.Rs(s,t)}Ls(e){return wu.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);F("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=au();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Eg{constructor(){this.so=new kl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new kl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Hb{_o(e){}shutdown(){}}/**
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
 */let zo=null;function zc(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class Yb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=zc(),l=this.xo(t,r.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(t,l,u,s).then(h=>(F("RestConnection",`Received RPC '${t}' ${c}: `,h),h),h=>{throw Qi("RestConnection",`RPC '${t}' ${c} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ys}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=Wb[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=zc();return new Promise((o,c)=>{const l=new Xm;l.setWithCredentials(!0),l.listenOnce(Zm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Zo.NO_ERROR:const h=l.getResponseJson();F(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Zo.TIMEOUT:F(_t,`RPC '${e}' ${i} timed out`),c(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case Zo.HTTP_ERROR:const p=l.getStatus();if(F(_t,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const T=function(C){const L=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(L)>=0?L:V.UNKNOWN}(_.status);c(new j(T,_.message))}else c(new j(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new j(V.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{F(_t,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);F(_t,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",u,r,15)})}Bo(e,t,r){const s=zc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=np(),c=tp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");F(_t,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);let g=!1,_=!1;const T=new Qb({Io:C=>{_?F(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(F(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),F(_t,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},To:()=>p.close()}),R=(C,L,M)=>{C.listen(L,x=>{try{M(x)}catch(B){setTimeout(()=>{throw B},0)}})};return R(p,Ci.EventType.OPEN,()=>{_||(F(_t,`RPC '${e}' stream ${s} transport opened.`),T.yo())}),R(p,Ci.EventType.CLOSE,()=>{_||(_=!0,F(_t,`RPC '${e}' stream ${s} transport closed`),T.So())}),R(p,Ci.EventType.ERROR,C=>{_||(_=!0,Qi(_t,`RPC '${e}' stream ${s} transport errored:`,C),T.So(new j(V.UNAVAILABLE,"The operation could not be completed")))}),R(p,Ci.EventType.MESSAGE,C=>{var L;if(!_){const M=C.data[0];Z(!!M);const x=M,B=x.error||((L=x[0])===null||L===void 0?void 0:L.error);if(B){F(_t,`RPC '${e}' stream ${s} received error:`,B);const ee=B.status;let J=function(E){const S=et[E];if(S!==void 0)return qp(S)}(ee),b=B.message;J===void 0&&(J=V.INTERNAL,b="Unknown error status: "+ee+" with message "+B.message),_=!0,T.So(new j(J,b)),p.close()}else F(_t,`RPC '${e}' stream ${s} received:`,M),T.bo(M)}}),R(c,ep.STAT_EVENT,C=>{C.stat===hl.PROXY?F(_t,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===hl.NOPROXY&&F(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function nc(n){return new rb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sg{constructor(e,t,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ag(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new j(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jb extends Sg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=ob(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?kt(o.readTime):te.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=bl(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=Ea(l)?{documents:Jp(i,l)}:{query:Xp(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=zp(i,o.resumeToken);const u=Tl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(te.min())>0){c.readTime=$s(i,o.snapshotVersion.toTimestamp());const u=Tl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=cb(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=bl(this.serializer),t.removeTarget=e,this.a_(t)}}class Xb extends Sg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=ab(e.writeResults,e.commitTime),r=kt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=bl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Sa(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,El(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(V.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,El(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class eA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Je(t),this.D_=!1):F("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ns(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Y(l);u.L_.add(4),await _o(u),u.q_.set("Unknown"),u.L_.delete(4),await rc(u)}(this))})}),this.q_=new eA(r,s)}}async function rc(n){if(ns(n))for(const e of n.B_)await e(!0)}async function _o(n){for(const e of n.B_)await e(!1)}function sc(n,e){const t=Y(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Eu(t)?Tu(t):ei(t).r_()&&Iu(t,e))}function js(n,e){const t=Y(n),r=ei(t);t.N_.delete(e),r.r_()&&Rg(t,e),t.N_.size===0&&(r.r_()?r.o_():ns(t)&&t.q_.set("Unknown"))}function Iu(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ei(n).A_(e)}function Rg(n,e){n.Q_.xe(e),ei(n).R_(e)}function Tu(n){n.Q_=new ZE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ei(n).start(),n.q_.v_()}function Eu(n){return ns(n)&&!ei(n).n_()&&n.N_.size>0}function ns(n){return Y(n).L_.size===0}function Pg(n){n.Q_=void 0}async function nA(n){n.q_.set("Online")}async function rA(n){n.N_.forEach((e,t)=>{Iu(n,e)})}async function sA(n,e){Pg(n),Eu(n)?(n.q_.M_(e),Tu(n)):n.q_.set("Unknown")}async function iA(n,e,t){if(n.q_.set("Online"),e instanceof Kp&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xa(n,r)}else if(e instanceof ia?n.Q_.Ke(e):e instanceof Gp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(te.min()))try{const r=await _g(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(Xe.EMPTY_BYTE_STRING,h.snapshotVersion)),Rg(i,l);const p=new An(h.target,l,u,h.sequenceNumber);Iu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await xa(n,r)}}async function xa(n,e,t){if(!hr(e))throw e;n.L_.add(1),await _o(n),n.q_.set("Offline"),t||(t=()=>_g(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await rc(n)})}function Cg(n,e){return e().catch(t=>xa(n,t,e))}async function Zs(n){const e=Y(n),t=or(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;oA(e);)try{const s=await zb(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,aA(e,s)}catch(s){await xa(e,s)}kg(e)&&Dg(e)}function oA(n){return ns(n)&&n.O_.length<10}function aA(n,e){n.O_.push(e);const t=or(n);t.r_()&&t.V_&&t.m_(e.mutations)}function kg(n){return ns(n)&&!or(n).n_()&&n.O_.length>0}function Dg(n){or(n).start()}async function cA(n){or(n).p_()}async function lA(n){const e=or(n);for(const t of n.O_)e.m_(t.mutations)}async function uA(n,e,t){const r=n.O_.shift(),s=du.from(r,e,t);await Cg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Zs(n)}async function dA(n,e){e&&or(n).V_&&await async function(r,s){if(function(o){return YE(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();or(r).s_(),await Cg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zs(r)}}(n,e),kg(n)&&Dg(n)}async function vf(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=ns(t);t.L_.add(3),await _o(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await rc(t)}async function Dl(n,e){const t=Y(n);e?(t.L_.delete(2),await rc(t)):e||(t.L_.add(2),await _o(t),t.q_.set("Unknown"))}function ei(n){return n.K_||(n.K_=function(t,r,s){const i=Y(t);return i.w_(),new Jb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:nA.bind(null,n),Ro:rA.bind(null,n),mo:sA.bind(null,n),d_:iA.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Eu(n)?Tu(n):n.q_.set("Unknown")):(await n.K_.stop(),Pg(n))})),n.K_}function or(n){return n.U_||(n.U_=function(t,r,s){const i=Y(t);return i.w_(),new Xb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cA.bind(null,n),mo:dA.bind(null,n),f_:lA.bind(null,n),g_:uA.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Zs(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new bu(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Au(n,e){if(Je("AsyncQueue",`${e}: ${n}`),hr(n))return new j(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _f{constructor(){this.W_=new Se(G.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class qs{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new qs(e,t,Ns.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class fA{constructor(){this.queries=wf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=wf(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new j(V.ABORTED,"Firestore shutting down"))}}function wf(){return new fr(n=>Cp(n),Qa)}async function Ng(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new hA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Au(o,`Initialization of query '${Es(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Su(t)}async function xg(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function mA(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Su(t)}function pA(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Su(n){n.Y_.forEach(e=>{e.next()})}var Nl,If;(If=Nl||(Nl={})).ea="default",If.Cache="cache";class Lg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Nl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.key=e}}class Og{constructor(e){this.key=e}}class gA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=Dp(e),this.Ra=new Ns(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new _f,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const g=s.get(h),_=go(this.query,p)?p:null,T=!!g&&this.mutatedKeys.has(g.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;g&&_?g.data.isEqual(_.data)?T!==R&&(r.track({type:3,doc:_}),C=!0):this.ga(g,_)||(r.track({type:2,doc:_}),C=!0,(l&&this.Aa(_,l)>0||u&&this.Aa(_,u)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),C=!0):g&&!_&&(r.track({type:1,doc:g}),C=!0,(l||u)&&(c=!0)),C&&(_?(o=o.add(_),i=R?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(_,T){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return R(_)-R(T)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new qs(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _f,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Og(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Vg(r))}),t}ba(e){this.Ta=e.Ts,this.da=le();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return qs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class yA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class vA{constructor(e){this.key=e,this.va=!1}}class _A{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fr(c=>Cp(c),Qa),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(G.comparator),this.Na=new Map,this.La=new yu,this.Ba={},this.ka=new Map,this.qa=Hr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function wA(n,e,t=!0){const r=ic(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Mg(r,e,t,!0),s}async function IA(n,e){const t=ic(n);await Mg(t,e,!0,!1)}async function Mg(n,e,t,r){const s=await ka(n.localStore,$t(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Ru(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&sc(n.remoteStore,s),c}async function Ru(n,e,t,r,s){n.Ka=(p,g,_)=>async function(R,C,L,M){let x=C.view.ma(L);x.ns&&(x=await Cl(R.localStore,C.query,!1).then(({documents:b})=>C.view.ma(b,x)));const B=M&&M.targetChanges.get(C.targetId),ee=M&&M.targetMismatches.get(C.targetId)!=null,J=C.view.applyChanges(x,R.isPrimaryClient,B,ee);return xl(R,C.targetId,J.wa),J.snapshot}(n,p,g,_);const i=await Cl(n.localStore,e,!0),o=new gA(e,i.Ts),c=o.ma(i.documents),l=vo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);xl(n,t,u.wa);const h=new yA(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),u.snapshot}async function TA(n,e,t){const r=Y(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Qa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Us(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&js(r.remoteStore,s.targetId),Gs(r,s.targetId)}).catch(dr)):(Gs(r,s.targetId),await Us(r.localStore,s.targetId,!0))}async function EA(n,e){const t=Y(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),js(t.remoteStore,r.targetId))}async function bA(n,e,t){const r=Du(n);try{const s=await function(o,c){const l=Y(o),u=$e.now(),h=c.reduce((_,T)=>_.add(T.key),le());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=Bt(),R=le();return l.cs.getEntries(_,h).next(C=>{T=C,T.forEach((L,M)=>{M.isValidDocument()||(R=R.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,T)).next(C=>{p=C;const L=[];for(const M of c){const x=WE(M,p.get(M.key).overlayedDocument);x!=null&&L.push(new xn(M.key,x,_p(x.value.mapValue),Tt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,L,c)}).next(C=>{g=C;const L=C.applyToLocalDocumentSet(p,R);return l.documentOverlayCache.saveOverlays(_,C.batchId,L)})}).then(()=>({batchId:g.batchId,changes:xp(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Se(se)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,t),await mr(r,s.changes),await Zs(r.remoteStore)}catch(s){const i=Au(s,"Failed to persist write");t.reject(i)}}async function Bg(n,e){const t=Y(n);try{const r=await Gb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Z(o.va):s.removedDocuments.size>0&&(Z(o.va),o.va=!1))}),await mr(t,r,e)}catch(r){await dr(r)}}function Tf(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Y(o);l.onlineState=c;let u=!1;l.queries.forEach((h,p)=>{for(const g of p.j_)g.Z_(c)&&(u=!0)}),u&&Su(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AA(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Se(G.comparator);o=o.insert(i,He.newNoDocument(i,te.min()));const c=le().add(i),l=new yo(te.min(),new Map,new Se(se),o,c);await Bg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),ku(r)}else await Us(r.localStore,e,!1).then(()=>Gs(r,e,t)).catch(dr)}async function SA(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await qb(t.localStore,e);Cu(t,r,null),Pu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mr(t,s)}catch(s){await dr(s)}}async function RA(n,e,t){const r=Y(n);try{const s=await function(o,c){const l=Y(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Z(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Cu(r,e,t),Pu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mr(r,s)}catch(s){await dr(s)}}function Pu(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Cu(n,e,t){const r=Y(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Gs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Fg(n,r)})}function Fg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(js(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ku(n))}function xl(n,e,t){for(const r of t)r instanceof Vg?(n.La.addReference(r.key,e),PA(n,r)):r instanceof Og?(F("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Fg(n,r.key)):Q()}function PA(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(F("SyncEngine","New document in limbo: "+t),n.xa.add(r),ku(n))}function ku(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new G(pe.fromString(e)),r=n.qa.next();n.Na.set(r,new vA(t)),n.Oa=n.Oa.insert(t,r),sc(n.remoteStore,new An($t(Wa(t.path)),r,"TargetPurposeLimboResolution",Lt.oe))}}async function mr(n,e,t){const r=Y(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(u=>{var h;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=_u.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=Y(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>D.forEach(u,g=>D.forEach(g.$i,_=>h.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>D.forEach(g.Ui,_=>h.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!hr(p))throw p;F("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=h.os.get(g),T=_.snapshotVersion,R=_.withLastLimboFreeSnapshotVersion(T);h.os=h.os.insert(g,R)}}}(r.localStore,i))}async function CA(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await vg(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new j(V.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mr(t,r.hs)}}function kA(n,e){const t=Y(n),r=t.Na.get(e);if(r&&r.va)return le().add(r.key);{let s=le();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function DA(n,e){const t=Y(n),r=await Cl(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&xl(t,e.targetId,s.wa),s}async function NA(n,e){const t=Y(n);return Ig(t.localStore,e).then(r=>mr(t,r))}async function xA(n,e,t,r){const s=Y(n),i=await function(c,l){const u=Y(c),h=Y(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",p=>h.Mn(p,l).next(g=>g?u.localDocuments.getDocuments(p,g):D.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Zs(s.remoteStore):t==="acknowledged"||t==="rejected"?(Cu(s,e,r||null),Pu(s,e),function(c,l){Y(Y(c).mutationQueue).On(l)}(s.localStore,e)):Q(),await mr(s,i)):F("SyncEngine","Cannot apply mutation batch with id: "+e)}async function LA(n,e){const t=Y(n);if(ic(t),Du(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Ef(t,r.toArray());t.Qa=!0,await Dl(t.remoteStore,!0);for(const i of s)sc(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Gs(t,o),Us(t.localStore,o,!0))),js(t.remoteStore,o)}),await s,await Ef(t,r),function(o){const c=Y(o);c.Na.forEach((l,u)=>{js(c.remoteStore,u)}),c.La.pr(),c.Na=new Map,c.Oa=new Se(G.comparator)}(t),t.Qa=!1,await Dl(t.remoteStore,!1)}}async function Ef(n,e,t){const r=Y(n),s=[],i=[];for(const o of e){let c;const l=r.Ma.get(o);if(l&&l.length!==0){c=await ka(r.localStore,$t(l[0]));for(const u of l){const h=r.Fa.get(u),p=await DA(r,h);p.snapshot&&i.push(p.snapshot)}}else{const u=await wg(r.localStore,o);c=await ka(r.localStore,u),await Ru(r,$g(u),o,!1,c.resumeToken)}s.push(c)}return r.Ca.d_(i),s}function $g(n){return Rp(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function VA(n){return function(t){return Y(Y(t).persistence).Qi()}(Y(n).localStore)}async function OA(n,e,t,r){const s=Y(n);if(s.Qa)return void F("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Ig(s.localStore,kp(i[0])),c=yo.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Xe.EMPTY_BYTE_STRING);await mr(s,o,c);break}case"rejected":await Us(s.localStore,e,!0),Gs(s,e,r);break;default:Q()}}async function MA(n,e,t){const r=ic(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){F("SyncEngine","Adding an already active target "+s);continue}const i=await wg(r.localStore,s),o=await ka(r.localStore,i);await Ru(r,$g(i),o.targetId,!1,o.resumeToken),sc(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await Us(r.localStore,s,!1).then(()=>{js(r.remoteStore,s),Gs(r,s)}).catch(dr)}}function ic(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AA.bind(null,e),e.Ca.d_=mA.bind(null,e.eventManager),e.Ca.$a=pA.bind(null,e.eventManager),e}function Du(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RA.bind(null,e),e}class so{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return yg(this.persistence,new gg,e.initialUser,this.serializer)}Ga(e){return new mg(tc.Zr,this.serializer)}Wa(e){return new Eg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}so.provider={build:()=>new so};class Ug extends so{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Du(this.Ja.syncEngine),await Zs(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return yg(this.persistence,new gg,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Ab(r,e.asyncQueue,t)}Ha(e,t){const r=new sE(t,this.persistence);return new rE(e.asyncQueue,r)}Ga(e){const t=pg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new vu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,bg(),oa(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Eg}}class BA extends Ug{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Kc&&(this.sharedClientState.syncEngine={no:xA.bind(null,t),ro:OA.bind(null,t),io:MA.bind(null,t),Qi:VA.bind(null,t),eo:NA.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await LA(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=bg();if(!Kc.D(t))throw new j(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=pg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Kc(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class io{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CA.bind(null,this.syncEngine),await Dl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fA}()}createDatastore(e){const t=nc(e.databaseInfo.databaseId),r=function(i){return new Yb(i)}(e.databaseInfo);return function(i,o,c,l){return new Zb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new tA(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Tf(this.syncEngine,t,0),function(){return yf.D()?new yf:new Hb}())}createSyncEngine(e,t){return function(s,i,o,c,l,u,h){const p=new _A(s,i,o,c,l,u);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Y(s);F("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await _o(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}io.provider={build:()=>new io};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=rp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{F("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(F("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Au(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hc(n,e){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function bf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $A(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>vf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>vf(e.remoteStore,s)),n._onlineComponents=e}async function $A(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Qi("Error using user provided cache. Falling back to memory cache: "+t),await Hc(n,new so)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Hc(n,new so);return n._offlineComponents}async function qg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await bf(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await bf(n,new io))),n._onlineComponents}function UA(n){return qg(n).then(e=>e.syncEngine)}async function Gg(n){const e=await qg(n),t=e.eventManager;return t.onListen=wA.bind(null,e.syncEngine),t.onUnlisten=TA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=IA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=EA.bind(null,e.syncEngine),t}function jA(n,e,t={}){const r=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new jg({next:g=>{h.Za(),o.enqueueAndForget(()=>xg(i,p));const _=g.docs.has(c);!_&&g.fromCache?u.reject(new j(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&l&&l.source==="server"?u.reject(new j(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Lg(Wa(c.path),h,{includeMetadataChanges:!0,_a:!0});return Ng(i,p)}(await Gg(n),n.asyncQueue,e,t,r)),r.promise}function qA(n,e,t={}){const r=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new jg({next:g=>{h.Za(),o.enqueueAndForget(()=>xg(i,p)),g.fromCache&&l.source==="server"?u.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Lg(c,h,{includeMetadataChanges:!0,_a:!0});return Ng(i,p)}(await Gg(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Nu(n,e,t){if(!t)throw new j(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function GA(n,e,t,r){if(e===!0&&r===!0)throw new j(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sf(n){if(!G.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rf(n){if(G.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q()}function nn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oc(n);throw new j(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ac{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HT;switch(r.type){case"firstParty":return new YT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Af.get(t);r&&(F("ComponentProvider","Removing Datastore"),Af.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rs(this.firestore,e,this._query)}}class Dt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class nr extends rs{constructor(e,t,r){super(e,t,Wa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new G(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function tt(n,e,...t){if(n=De(n),Nu("collection","path",e),n instanceof ac){const r=pe.fromString(e,...t);return Rf(r),new nr(n,null,r)}{if(!(n instanceof Dt||n instanceof nr))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return Rf(r),new nr(n.firestore,null,r)}}function KA(n,e){if(n=nn(n,ac),Nu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new rs(n,null,function(r){return new Js(pe.emptyPath(),r)}(e))}function ne(n,e,...t){if(n=De(n),arguments.length===1&&(e=rp.newId()),Nu("doc","path",e),n instanceof ac){const r=pe.fromString(e,...t);return Sf(r),new Dt(n,null,new G(r))}{if(!(n instanceof Dt||n instanceof nr))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return Sf(r),new Dt(n.firestore,n instanceof nr?n.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
`+o.stack),c}(r);throw Je("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=bu.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class ss extends ac{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Cf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cf(e),this._firestoreClient=void 0,await e}}}function zA(n,e,t){t||(t="(default)");const r=Zr(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(xs(i,e))return s;throw new j(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new j(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function xu(n){if(n._terminated)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||HA(n),n._firestoreClient}function HA(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,u,h){return new AE(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Kg(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new FA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(Xe.fromBase64String(e))}catch(t){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ks(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */const WA=/^__.*__$/;class QA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xs(e,this.data,t,this.fieldTransforms)}}class zg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new xn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class lc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new lc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return La(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Hg(this.Cu)&&WA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class YA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||nc(e)}Qu(e,t,r,s=!1){return new lc({Cu:e,methodName:t,qu:r,path:Fe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uc(n){const e=n._freezeSettings(),t=nc(n._databaseId);return new YA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Wg(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Bu("Data must be an object, but it was:",o,r);const c=Qg(r,o);let l,u;if(i.merge)l=new Vt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const g=Ll(e,p,t);if(!o.contains(g))throw new j(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Jg(h,g)||h.push(g)}l=new Vt(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new QA(new It(c),l,u)}class dc extends wo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dc}}function JA(n,e,t){return new lc({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ou extends wo{_toFieldTransform(e){return new lu(e.path,new Bs)}isEqual(e){return e instanceof Ou}}class Mu extends wo{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=JA(this,e,!0),r=this.Ku.map(i=>ti(i,t)),s=new Gr(r);return new lu(e.path,s)}isEqual(e){return e instanceof Mu&&xs(this.Ku,e.Ku)}}function XA(n,e,t,r){const s=n.Qu(1,e,t);Bu("Data must be an object, but it was:",s,r);const i=[],o=It.empty();ts(r,(l,u)=>{const h=Fu(e,l,t);u=De(u);const p=s.Nu(h);if(u instanceof dc)i.push(h);else{const g=ti(u,p);g!=null&&(i.push(h),o.set(h,g))}});const c=new Vt(i);return new zg(o,c,s.fieldTransforms)}function ZA(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[Ll(e,r,t)],l=[s];if(i.length%2!=0)throw new j(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Ll(e,i[g])),l.push(i[g+1]);const u=[],h=It.empty();for(let g=c.length-1;g>=0;--g)if(!Jg(u,c[g])){const _=c[g];let T=l[g];T=De(T);const R=o.Nu(_);if(T instanceof dc)u.push(_);else{const C=ti(T,R);C!=null&&(u.push(_),h.set(_,C))}}const p=new Vt(u);return new zg(h,p,o.fieldTransforms)}function eS(n,e,t,r=!1){return ti(t,n.Qu(r?4:3,e))}function ti(n,e){if(Yg(n=De(n)))return Bu("Unsupported field value:",e,n),Qg(n,e);if(n instanceof wo)return function(r,s){if(!Hg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ti(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:$s(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$s(s.serializer,i)}}if(r instanceof Lu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ks)return{bytesValue:zp(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Vu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return cu(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${oc(r)}`)}(n,e)}function Qg(n,e){const t={};return pp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(n,(r,s)=>{const i=ti(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Yg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $e||n instanceof Lu||n instanceof Ks||n instanceof Dt||n instanceof wo||n instanceof Vu)}function Bu(n,e,t){if(!Yg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=oc(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ll(n,e,t){if((e=De(e))instanceof cc)return e._internalPath;if(typeof e=="string")return Fu(n,e);throw La("Field path arguments must be of type string or ",n,!1,void 0,t)}const tS=new RegExp("[~\\*/\\[\\]]");function Fu(n,e,t){if(e.search(tS)>=0)throw La(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new cc(...e.split("."))._internalPath}catch{throw La(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function La(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new j(V.INVALID_ARGUMENT,c+n+l)}function Jg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($u("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nS extends Xg{data(){return super.data()}}function $u(n,e){return typeof e=="string"?Fu(n,e):e instanceof cc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}class sS extends Uu{}function zs(n,e,...t){let r=[];e instanceof Uu&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof ju).length,c=i.filter(l=>l instanceof hc).length;if(o>1||o>0&&c>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class hc extends sS{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new hc(e,t,r)}_apply(e){const t=this._parse(e);return Zg(e._query,t),new rs(e.firestore,e.converter,wl(e._query,t))}_parse(e){const t=uc(e.firestore);return function(i,o,c,l,u,h,p){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Df(p,h);const _=[];for(const T of p)_.push(kf(l,i,T));g={arrayValue:{values:_}}}else g=kf(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Df(p,h),g=eS(c,o,p,h==="in"||h==="not-in");return de.create(u,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Vr(n,e,t){const r=e,s=$u("where",n);return hc._create(s,r,t)}class ju extends Uu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ju(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:_e.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Zg(o,l),o=wl(o,l)}(e._query,t),new rs(e.firestore,e.converter,wl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function kf(n,e,t){if(typeof(t=De(t))=="string"){if(t==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pp(e)&&t.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(pe.fromString(t));if(!G.isDocumentKey(r))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return to(n,new G(r))}if(t instanceof Dt)return to(n,t._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oc(t)}.`)}function Df(n,e){if(!Array.isArray(n)||n.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zg(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class iS{convertValue(e,t="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ts(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ne(o.doubleValue));return new Vu(i)}convertGeoPoint(e){return new Lu(Ne(e.latitude),Ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=iu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zi(e));default:return null}}convertTimestamp(e){const t=kn(e);return new $e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=pe.fromString(e);Z(ng(r));const s=new Ur(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(t)||Je(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ty extends Xg{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($u("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class aa extends ty{data(e={}){return super.data(e)}}class oS{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new xi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new aa(this._firestore,this._userDataWriter,r.key,r,new xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new aa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new xi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new aa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new xi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:aS(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function aS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n){n=nn(n,Dt);const e=nn(n.firestore,ss);return jA(xu(e),n._key).then(t=>cS(e,n,t))}class ny extends iS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ks(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,t)}}function st(n){n=nn(n,rs);const e=nn(n.firestore,ss),t=xu(e),r=new ny(e);return rS(n._query),qA(t,n._query).then(s=>new oS(e,r,n,s))}function Pt(n,e,t){n=nn(n,Dt);const r=nn(n.firestore,ss),s=ey(n.converter,e,t);return fc(r,[Wg(uc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Tt.none())])}function nt(n,e,t,...r){n=nn(n,Dt);const s=nn(n.firestore,ss),i=uc(s);let o;return o=typeof(e=De(e))=="string"||e instanceof cc?ZA(i,"updateDoc",n._key,e,t,r):XA(i,"updateDoc",n._key,e),fc(s,[o.toMutation(n._key,Tt.exists(!0))])}function Ht(n){return fc(nn(n.firestore,ss),[new Xa(n._key,Tt.none())])}function ry(n,e){const t=nn(n.firestore,ss),r=ne(n),s=ey(n.converter,e);return fc(t,[Wg(uc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Tt.exists(!1))]).then(()=>r)}function fc(n,e){return function(r,s){const i=new pn;return r.asyncQueue.enqueueAndForget(async()=>bA(await UA(r),s,i)),i.promise}(xu(n),e)}function cS(n,e,t){const r=t.docs.get(e._key),s=new ny(n);return new ty(n,s,e._key,r,new xi(t.hasPendingWrites,t.fromCache),e.converter)}class lS{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=fS(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function uS(n){return new lS(n)}class dS{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=io.provider,this._offlineComponentProvider={build:t=>new Ug(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class hS{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=io.provider,this._offlineComponentProvider={build:t=>new BA(t,e==null?void 0:e.cacheSizeBytes)}}}function fS(n){return new dS(void 0)}function mS(){return new hS}function ke(){return new Ou("serverTimestamp")}function sy(...n){return new Mu("arrayUnion",n)}(function(e,t=!0){(function(s){Ys=s})(es),en(new zt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ss(new WT(r.getProvider("auth-internal")),new XT(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ot(Eh,"4.7.3",e),Ot(Eh,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="firebasestorage.googleapis.com",oy="storageBucket",pS=2*60*1e3,gS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends rn{constructor(e,t,r=0){super(Wc(e),`Firebase Storage: ${t} (${Wc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function Wc(n){return"storage/"+n}function qu(){const n="An unknown error occurred, please check the error payload for server response.";return new Qe(We.UNKNOWN,n)}function yS(n){return new Qe(We.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function vS(n){return new Qe(We.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _S(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(We.UNAUTHENTICATED,n)}function wS(){return new Qe(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function IS(n){return new Qe(We.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function TS(){return new Qe(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ES(){return new Qe(We.CANCELED,"User canceled the upload/download.")}function bS(n){return new Qe(We.INVALID_URL,"Invalid URL '"+n+"'.")}function AS(n){return new Qe(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function SS(){return new Qe(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+oy+"' property when initializing the app?")}function RS(){return new Qe(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PS(){return new Qe(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CS(n){return new Qe(We.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Vl(n){return new Qe(We.INVALID_ARGUMENT,n)}function ay(){return new Qe(We.APP_DELETED,"The Firebase app was deleted.")}function kS(n){return new Qe(We.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gi(n,e){return new Qe(We.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ai(n){throw new Qe(We.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ft.makeFromUrl(e,t)}catch{return new Ft(e,"")}if(r.path==="")return r;throw AS(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(B){B.path_=decodeURIComponent(B.path)}const h="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${h}/b/${s}/o${g}`,"i"),T={bucket:1,path:3},R=t===iy?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",L=new RegExp(`^https?://${R}/${s}/${C}`,"i"),x=[{regex:c,indices:l,postModify:i},{regex:_,indices:T,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let B=0;B<x.length;B++){const ee=x[B],J=ee.regex.exec(e);if(J){const b=J[ee.indices.bucket];let w=J[ee.indices.path];w||(w=""),r=new Ft(b,w),ee.postModify(r);break}}if(r==null)throw bS(e);return r}}class DS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function h(...C){u||(u=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,n(_,l())},C)}function g(){i&&clearTimeout(i)}function _(C,...L){if(u){g();return}if(C){g(),h.call(null,C,...L);return}if(l()||o){g(),h.call(null,C,...L);return}r<64&&(r*=2);let x;c===1?(c=2,x=0):x=(r+Math.random())*1e3,p(x)}let T=!1;function R(C){T||(T=!0,g(),!u&&(s!==null?(C||(c=2),clearTimeout(s),p(0)):C||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,R(!0)},t),R}function xS(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(n){return n!==void 0}function VS(n){return typeof n=="object"&&!Array.isArray(n)}function Gu(n){return typeof n=="string"||n instanceof String}function Nf(n){return Ku()&&n instanceof Blob}function Ku(){return typeof Blob<"u"}function xf(n,e,t,r){if(r<e)throw Vl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Vl(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function OS(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,t,r,s,i,o,c,l,u,h,p,g=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ho(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Or.NO_ERROR,l=i.getStatus();if(!c||OS(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Or.ABORT;r(!1,new Ho(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ho(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());LS(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=qu();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?ay():ES();o(l)}else{const l=TS();o(l)}};this.canceled_?t(!1,new Ho(!1,null,!0)):this.backoffId_=NS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ho{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function BS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function FS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $S(n,e){e&&(n["X-Firebase-GMPID"]=e)}function US(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function jS(n,e,t,r,s,i,o=!0){const c=cy(n.urlParams),l=n.url+c,u=Object.assign({},n.headers);return $S(u,e),BS(u,t),FS(u,i),US(u,r),new MS(l,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GS(...n){const e=qS();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Ku())return new Blob(n);throw new Qe(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KS(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function zS(n){if(typeof atob>"u")throw CS("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qc{constructor(e,t){this.data=e,this.contentType=t||null}}function ly(n,e){switch(n){case Zt.RAW:return new Qc(uy(e));case Zt.BASE64:case Zt.BASE64URL:return new Qc(dy(n,e));case Zt.DATA_URL:return new Qc(WS(e),QS(e))}throw qu()}function uy(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function HS(n){let e;try{e=decodeURIComponent(n)}catch{throw Gi(Zt.DATA_URL,"Malformed data URL.")}return uy(e)}function dy(n,e){switch(n){case Zt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Gi(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Zt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Gi(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=zS(e)}catch(s){throw s.message.includes("polyfill")?s:Gi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class hy{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Gi(Zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=YS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function WS(n){const e=new hy(n);return e.base64?dy(Zt.BASE64,e.rest):HS(e.rest)}function QS(n){return new hy(n).contentType}function YS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){let r=0,s="";Nf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Nf(this.data_)){const r=this.data_,s=KS(r,e,t);return s===null?null:new Xn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Xn(r,!0)}}static getBlob(...e){if(Ku()){const t=e.map(r=>r instanceof Xn?r.data_:r);return new Xn(GS.apply(null,t))}else{const t=e.map(o=>Gu(o)?ly(Zt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Xn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(n){let e;try{e=JSON.parse(n)}catch{return null}return VS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function XS(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function my(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(n,e){return e}class Rt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||ZS}}let Wo=null;function e0(n){return!Gu(n)||n.length<2?n:my(n)}function py(){if(Wo)return Wo;const n=[];n.push(new Rt("bucket")),n.push(new Rt("generation")),n.push(new Rt("metageneration")),n.push(new Rt("name","fullPath",!0));function e(i,o){return e0(o)}const t=new Rt("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new Rt("size");return s.xform=r,n.push(s),n.push(new Rt("timeCreated")),n.push(new Rt("updated")),n.push(new Rt("md5Hash",null,!0)),n.push(new Rt("cacheControl",null,!0)),n.push(new Rt("contentDisposition",null,!0)),n.push(new Rt("contentEncoding",null,!0)),n.push(new Rt("contentLanguage",null,!0)),n.push(new Rt("contentType",null,!0)),n.push(new Rt("metadata","customMetadata",!0)),Wo=n,Wo}function t0(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function n0(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return t0(r,n),r}function gy(n,e,t){const r=fy(e);return r===null?null:n0(n,r,t)}function r0(n,e,t,r){const s=fy(e);if(s===null||!Gu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=n.bucket,p=n.fullPath,g="/b/"+o(h)+"/o/"+o(p),_=zu(g,t,r),T=cy({alt:"media",token:u});return _+T})[0]}function s0(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class yy{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n){if(!n)throw qu()}function i0(n,e){function t(r,s){const i=gy(n,s,e);return vy(i!==null),i}return t}function o0(n,e){function t(r,s){const i=gy(n,s,e);return vy(i!==null),r0(i,s,n.host,n._protocol)}return t}function _y(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=wS():s=_S():t.getStatus()===402?s=vS(n.bucket):t.getStatus()===403?s=IS(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function a0(n){const e=_y(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=yS(n.path)),i.serverResponse=s.serverResponse,i}return t}function c0(n,e,t){const r=e.fullServerUrl(),s=zu(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new yy(s,i,o0(n,t),o);return c.errorHandler=a0(e),c}function l0(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function u0(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=l0(null,e)),r}function d0(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let x="";for(let B=0;B<2;B++)x=x+Math.random().toString().slice(2);return x}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=u0(e,r,s),h=s0(u,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+l+"--",_=Xn.getBlob(p,r,g);if(_===null)throw RS();const T={name:u.fullPath},R=zu(i,n.host,n._protocol),C="POST",L=n.maxUploadRetryTime,M=new yy(R,C,i0(n,t),L);return M.urlParams=T,M.headers=o,M.body=_.uploadData(),M.errorHandler=_y(e),M}class h0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Or.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Or.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Or.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw Ai("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ai("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ai("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ai("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ai("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class f0 extends h0{initXhr(){this.xhr_.responseType="text"}}function wy(){return new f0}/**
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
 */class Wr{constructor(e,t){this._service=e,t instanceof Ft?this._location=t:this._location=Ft.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Wr(e,t)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return my(this._location.path)}get storage(){return this._service}get parent(){const e=JS(this._location.path);if(e===null)return null;const t=new Ft(this._location.bucket,e);return new Wr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw kS(e)}}function m0(n,e,t){n._throwIfRoot("uploadBytes");const r=d0(n.storage,n._location,py(),new Xn(e,!0),t);return n.storage.makeRequestWithTokens(r,wy).then(s=>({metadata:s,ref:n}))}function p0(n,e,t=Zt.RAW,r){n._throwIfRoot("uploadString");const s=ly(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),m0(n,s.data,i)}function g0(n){n._throwIfRoot("getDownloadURL");const e=c0(n.storage,n._location,py());return n.storage.makeRequestWithTokens(e,wy).then(t=>{if(t===null)throw PS();return t})}function y0(n,e){const t=XS(n._location.path,e),r=new Ft(n._location.bucket,t);return new Wr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(n){return/^[A-Za-z]+:\/\//.test(n)}function _0(n,e){return new Wr(n,e)}function Iy(n,e){if(n instanceof Hu){const t=n;if(t._bucket==null)throw SS();const r=new Wr(t,t._bucket);return e!=null?Iy(r,e):r}else return e!==void 0?y0(n,e):n}function w0(n,e){if(e&&v0(e)){if(n instanceof Hu)return _0(n,e);throw Vl("To use ref(service, url), the first argument must be a Storage instance.")}else return Iy(n,e)}function Lf(n,e){const t=e==null?void 0:e[oy];return t==null?null:Ft.makeFromBucketSpec(t,n)}function I0(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:a_(s,n.app.options.projectId))}class Hu{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=iy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pS,this._maxUploadRetryTime=gS,this._requests=new Set,s!=null?this._bucket=Ft.makeFromBucketSpec(s,this._host):this._bucket=Lf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=Lf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new DS(ay());{const o=jS(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Vf="@firebase/storage",Of="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="storage";function Ey(n,e,t,r){return n=De(n),p0(n,e,t,r)}function by(n){return n=De(n),g0(n)}function Ay(n,e){return n=De(n),w0(n,e)}function T0(n=Gl(),e){n=De(n);const r=Zr(n,Ty).getImmediate({identifier:e}),s=i_("storage");return s&&E0(r,...s),r}function E0(n,e,t,r={}){I0(n,e,t,r)}function b0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Hu(t,r,s,e,es)}function A0(){en(new zt(Ty,b0,"PUBLIC").setMultipleInstances(!0)),Ot(Vf,Of,""),Ot(Vf,Of,"esm2017")}A0();const Sy="@firebase/installations",Wu="0.6.9";/**
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
 */const Ry=1e4,Py=`w:${Wu}`,Cy="FIS_v2",S0="https://firebaseinstallations.googleapis.com/v1",R0=60*60*1e3,P0="installations",C0="Installations";/**
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
 */const k0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qr=new Xr(P0,C0,k0);function ky(n){return n instanceof rn&&n.code.includes("request-failed")}/**
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
 */function Dy({projectId:n}){return`${S0}/projects/${n}/installations`}function Ny(n){return{token:n.token,requestStatus:2,expiresIn:N0(n.expiresIn),creationTime:Date.now()}}async function xy(n,e){const r=(await e.json()).error;return Qr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ly({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function D0(n,{refreshToken:e}){const t=Ly(n);return t.append("Authorization",x0(e)),t}async function Vy(n){const e=await n();return e.status>=500&&e.status<600?n():e}function N0(n){return Number(n.replace("s","000"))}function x0(n){return`${Cy} ${n}`}/**
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
 */async function L0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Dy(n),s=Ly(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:Cy,appId:n.appId,sdkVersion:Py},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Vy(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ny(u.authToken)}}else throw await xy("Create Installation",l)}/**
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
 */function V0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const O0=/^[cdef][\w-]{21}$/,Ol="";function M0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=B0(n);return O0.test(t)?t:Ol}catch{return Ol}}function B0(n){return V0(n).substr(0,22)}/**
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
 */function mc(n){return`${n.appName}!${n.appId}`}/**
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
 */const My=new Map;function By(n,e){const t=mc(n);Fy(t,e),F0(t,e)}function Fy(n,e){const t=My.get(n);if(t)for(const r of t)r(e)}function F0(n,e){const t=$0();t&&t.postMessage({key:n,fid:e}),U0()}let Dr=null;function $0(){return!Dr&&"BroadcastChannel"in self&&(Dr=new BroadcastChannel("[Firebase] FID Change"),Dr.onmessage=n=>{Fy(n.data.key,n.data.fid)}),Dr}function U0(){My.size===0&&Dr&&(Dr.close(),Dr=null)}/**
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
 */const j0="firebase-installations-database",q0=1,Yr="firebase-installations-store";let Yc=null;function Qu(){return Yc||(Yc=Ua(j0,q0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Yr)}}})),Yc}async function Va(n,e){const t=mc(n),s=(await Qu()).transaction(Yr,"readwrite"),i=s.objectStore(Yr),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&By(n,e.fid),e}async function $y(n){const e=mc(n),r=(await Qu()).transaction(Yr,"readwrite");await r.objectStore(Yr).delete(e),await r.done}async function pc(n,e){const t=mc(n),s=(await Qu()).transaction(Yr,"readwrite"),i=s.objectStore(Yr),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&By(n,c.fid),c}/**
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
 */async function Yu(n){let e;const t=await pc(n.appConfig,r=>{const s=G0(r),i=K0(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Ol?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function G0(n){const e=n||{fid:M0(),registrationStatus:0};return Uy(e)}function K0(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Qr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=z0(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:H0(n)}:{installationEntry:e}}async function z0(n,e){try{const t=await L0(n,e);return Va(n.appConfig,t)}catch(t){throw ky(t)&&t.customData.serverCode===409?await $y(n.appConfig):await Va(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function H0(n){let e=await Mf(n.appConfig);for(;e.registrationStatus===1;)await Oy(100),e=await Mf(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Yu(n);return r||t}return e}function Mf(n){return pc(n,e=>{if(!e)throw Qr.create("installation-not-found");return Uy(e)})}function Uy(n){return W0(n)?{fid:n.fid,registrationStatus:0}:n}function W0(n){return n.registrationStatus===1&&n.registrationTime+Ry<Date.now()}/**
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
 */async function Q0({appConfig:n,heartbeatServiceProvider:e},t){const r=Y0(n,t),s=D0(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Py,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Vy(()=>fetch(r,c));if(l.ok){const u=await l.json();return Ny(u)}else throw await xy("Generate Auth Token",l)}function Y0(n,{fid:e}){return`${Dy(n)}/${e}/authTokens:generate`}/**
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
 */async function Ju(n,e=!1){let t;const r=await pc(n.appConfig,i=>{if(!jy(i))throw Qr.create("not-registered");const o=i.authToken;if(!e&&Z0(o))return i;if(o.requestStatus===1)return t=J0(n,e),i;{if(!navigator.onLine)throw Qr.create("app-offline");const c=tR(i);return t=X0(n,c),c}});return t?await t:r.authToken}async function J0(n,e){let t=await Bf(n.appConfig);for(;t.authToken.requestStatus===1;)await Oy(100),t=await Bf(n.appConfig);const r=t.authToken;return r.requestStatus===0?Ju(n,e):r}function Bf(n){return pc(n,e=>{if(!jy(e))throw Qr.create("not-registered");const t=e.authToken;return nR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function X0(n,e){try{const t=await Q0(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Va(n.appConfig,r),t}catch(t){if(ky(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await $y(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Va(n.appConfig,r)}throw t}}function jy(n){return n!==void 0&&n.registrationStatus===2}function Z0(n){return n.requestStatus===2&&!eR(n)}function eR(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+R0}function tR(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function nR(n){return n.requestStatus===1&&n.requestTime+Ry<Date.now()}/**
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
 */async function rR(n){const e=n,{installationEntry:t,registrationPromise:r}=await Yu(e);return r?r.catch(console.error):Ju(e).catch(console.error),t.fid}/**
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
 */async function sR(n,e=!1){const t=n;return await iR(t),(await Ju(t,e)).token}async function iR(n){const{registrationPromise:e}=await Yu(n);e&&await e}/**
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
 */function oR(n){if(!n||!n.options)throw Jc("App Configuration");if(!n.name)throw Jc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Jc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Jc(n){return Qr.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="installations",aR="installations-internal",cR=n=>{const e=n.getProvider("app").getImmediate(),t=oR(e),r=Zr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},lR=n=>{const e=n.getProvider("app").getImmediate(),t=Zr(e,qy).getImmediate();return{getId:()=>rR(t),getToken:s=>sR(t,s)}};function uR(){en(new zt(qy,cR,"PUBLIC")),en(new zt(aR,lR,"PRIVATE"))}uR();Ot(Sy,Wu);Ot(Sy,Wu,"esm2017");/**
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
 */const dR="/firebase-messaging-sw.js",hR="/firebase-cloud-messaging-push-scope",Gy="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",fR="https://fcmregistrations.googleapis.com/v1",Ky="google.c.a.c_id",mR="google.c.a.c_l",pR="google.c.a.ts",gR="google.c.a.e";var Ff;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ff||(Ff={}));/**
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
 */function In(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function yR(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Xc="fcm_token_details_db",vR=5,$f="fcm_token_object_Store";async function _R(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Xc))return null;let e=null;return(await Ua(Xc,vR,{upgrade:async(r,s,i,o)=>{var c;if(s<2||!r.objectStoreNames.contains($f))return;const l=o.objectStore($f),u=await l.index("fcmSenderId").get(n);if(await l.clear(),!!u){if(s===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(c=h.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:In(h.vapidKey)}}}else if(s===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:In(h.auth),p256dh:In(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:In(h.vapidKey)}}}else if(s===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:In(h.auth),p256dh:In(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:In(h.vapidKey)}}}}}})).close(),await Mc(Xc),await Mc("fcm_vapid_details_db"),await Mc("undefined"),wR(e)?e:null}function wR(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const IR="firebase-messaging-database",TR=1,ao="firebase-messaging-store";let Zc=null;function zy(){return Zc||(Zc=Ua(IR,TR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ao)}}})),Zc}async function ER(n){const e=Hy(n),r=await(await zy()).transaction(ao).objectStore(ao).get(e);if(r)return r;{const s=await _R(n.appConfig.senderId);if(s)return await Xu(n,s),s}}async function Xu(n,e){const t=Hy(n),s=(await zy()).transaction(ao,"readwrite");return await s.objectStore(ao).put(e,t),await s.done,e}function Hy({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},bt=new Xr("messaging","Messaging",bR);/**
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
 */async function AR(n,e){const t=await ed(n),r=Wy(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(Zu(n.appConfig),s)).json()}catch(o){throw bt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw bt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw bt.create("token-subscribe-no-token");return i.token}async function SR(n,e){const t=await ed(n),r=Wy(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Zu(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw bt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw bt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw bt.create("token-update-no-token");return i.token}async function RR(n,e){const r={method:"DELETE",headers:await ed(n)};try{const i=await(await fetch(`${Zu(n.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw bt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw bt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Zu({projectId:n}){return`${fR}/projects/${n}/registrations`}async function ed({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Wy({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==Gy&&(s.web.applicationPubKey=r),s}/**
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
 */const PR=7*24*60*60*1e3;async function CR(n){const e=await DR(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:In(e.getKey("auth")),p256dh:In(e.getKey("p256dh"))},r=await ER(n.firebaseDependencies);if(r){if(NR(r.subscriptionOptions,t))return Date.now()>=r.createTime+PR?kR(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await RR(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Uf(n.firebaseDependencies,t)}else return Uf(n.firebaseDependencies,t)}async function kR(n,e){try{const t=await SR(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Xu(n.firebaseDependencies,r),t}catch(t){throw t}}async function Uf(n,e){const r={token:await AR(n,e),createTime:Date.now(),subscriptionOptions:e};return await Xu(n,r),r.token}async function DR(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:yR(e)})}function NR(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return xR(e,n),LR(e,n),VR(e,n),e}function xR(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function LR(n,e){e.data&&(n.data=e.data)}function VR(n,e){var t,r,s,i,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;c&&(n.fcmOptions.link=c);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(n.fcmOptions.analyticsLabel=l)}/**
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
 */function OR(n){return typeof n=="object"&&!!n&&Ky in n}/**
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
 */function MR(n){if(!n||!n.options)throw el("App Configuration Object");if(!n.name)throw el("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw el(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function el(n){return bt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=MR(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(n){try{n.swRegistration=await navigator.serviceWorker.register(dR,{scope:hR}),n.swRegistration.update().catch(()=>{})}catch(e){throw bt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(n,e){if(!e&&!n.swRegistration&&await FR(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw bt.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Gy)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(n,e){if(!navigator)throw bt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw bt.create("permission-blocked");return await UR(n,e==null?void 0:e.vapidKey),await $R(n,e==null?void 0:e.serviceWorkerRegistration),CR(n)}/**
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
 */async function jR(n,e,t){const r=qR(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[Ky],message_name:t[mR],message_time:t[pR],message_device_time:Math.floor(Date.now()/1e3)})}function qR(n){switch(n){case oo.NOTIFICATION_CLICKED:return"notification_open";case oo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===oo.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(jf(t)):n.onMessageHandler.next(jf(t)));const r=t.data;OR(r)&&r[gR]==="1"&&await jR(n,t.messageType,r)}const qf="@firebase/messaging",Gf="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=n=>{const e=new BR(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>GR(e,t)),e},zR=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Qy(e,r)}};function HR(){en(new zt("messaging",KR,"PUBLIC")),en(new zt("messaging-internal",zR,"PRIVATE")),Ot(qf,Gf),Ot(qf,Gf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(){try{await dm()}catch{return!1}return typeof window<"u"&&Ul()&&m_()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(n,e){if(!navigator)throw bt.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(n=Gl()){return Yy().then(e=>{if(!e)throw bt.create("unsupported-browser")},e=>{throw bt.create("indexed-db-unsupported")}),Zr(De(n),"messaging").getImmediate()}async function YR(n,e){return n=De(n),Qy(n,e)}function JR(n,e){return n=De(n),WR(n,e)}HR();const XR={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},gc=mm(XR),Io=GT(gc),K=zA(gc,{localCache:uS({tabManager:mS()})}),Jy=T0(gc);let co=null;const Xy=Yy().then(n=>(n&&(co=QR(gc)),n)),m={user:null,profile:null,isAdmin:!1,isSuperAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,meetups:[],currentCourse:null,courseMap:null,courseMapLayer:null,approvedDraft:{new:[],edit:[]},gpsTracking:!1,boostThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0,shareRequests:[],viewingUid:null,viewingName:null,viewedRounds:{},compareUid1:void 0,compareUid2:void 0};function H(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function q(n,e="info"){const t=document.createElement("div");t.className=`toast toast-${e}`,t.textContent=n,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("toast-show")),setTimeout(()=>{t.classList.remove("toast-show"),setTimeout(()=>t.remove(),300)},3500)}function pr(n,e){const t=document.getElementById("confirm-modal");document.getElementById("confirm-msg").textContent=n,t.classList.remove("hidden");const r=()=>{t.classList.add("hidden"),window._confirmAccept=null,window._confirmReject=null};window._confirmAccept=()=>{r(),e()},window._confirmReject=()=>{r()}}const Zy="archery_v5",ZR="archery_v4";function Kf(){try{const n=JSON.parse(localStorage.getItem(Zy)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(ZR)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function jt(){try{localStorage.setItem(Zy,JSON.stringify({friends:m.friends,rounds:m.rounds.slice(0,200),courses:m.courses}))}catch(n){(n==null?void 0:n.name)==="QuotaExceededError"&&q("Lokalt lager er fuldt — nogle data blev ikke gemt","error")}}const ev="archery_lang",Oa={da:{nav:{scoring:"POINT",results:"RESULTATER",analyse:"ANALYSE",courses:"BANER",friends:"VENNER"},common:{cancel:"Annuller",confirm:"Bekræft",save:"Gem",add:"Tilføj",errorPrefix:"Fejl: ",linkCopied:"Link kopieret",unknown:"Ukendt",gender:{herre:"Herre",dame:"Dame"},bowClass:{langbue:"Langbue",trad:"Traditionel",recurve:"Recurve (olympisk)",compound:"Compound",barbue:"Barbue",buejaeger:"Buejæger",tradBuejaeger:"Traditionel buejæger",rytterbue:"Rytterbue"},bowClassShort:{langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejaeger:"Buejæger",tradBuejaeger:"Trad. buejæger",rytterbue:"Rytterbue"}},setup:{newRoundTitle:"🌲 Ny Runde",roundName:"Rundenavn",roundNameDefault:"Min Skydning",courseLabel:"Bane (valgfri)",noCourse:"-- Ingen bane --",targetCountLabel:"Antal mål",targets24:"24 Mål",targets30:"30 Mål",other:"Andet...",targetsUnit:"{n} mål",targetCountPlaceholder:"Antal mål",rulesetLabel:"Forbund",rulesetDgs1:"DGS (1 pil)",rulesetDgs2:"DGS (2 pile)",participantsTitle:"👥 Deltagere",searchFriend:"Søg ven...",addGuest:"+ Tilføj gæst",boostTitle:"🟢 Positiv forstærkning",enableBoost:"Aktiver positiv forstærkning",boostThreshPre:"Grøn prik hvis gns. mindst",boostThreshPost:"point/pil",gpsTitle:"📍 GPS",startTarget:"Startmål",autoFindTitle:"Auto-find nærmeste mål",autoFindSub:"Brug GPS automatisk",trackRouteTitle:"Spor rute og tid",trackRouteSub:"Registrer rute og afstand",showDistancesTitle:"Vis afstande på mål",showDistancesSub:"Kun visning — ikke redigering",startRoundBtn:"START RUNDE →"},active:{targetPrefix:"MÅL ",ofN:" af {n}",targetFallback:"Mål {n}",statAvg:"GNS.",statPoint:"POINT",statRemaining:"Tilbage",statRemainingSub:"mål",editTitle:"Rediger mål",editNamePlaceholder:"Navn på dyr",takePhoto:"📷 Tag billede",saveGps:"📍 Gem GPS",save:"Gem",cancel:"Annuller",back:"← TILBAGE",next:"NÆSTE →",finish:"AFSLUT →",skip:"⤵ SPRING",finishNow:"✓ AFSLUT NU",finishConfirm:"✓ BEKRÆFT",abort:"🗑 AFBRYD",abortConfirm:"🗑 BEKRÆFT",editBtn:"✏️ RET",runde:"RUNDE",snt:"SNT",pilLabel:"🎯 PIL {n}",arrowShort1:"P1",arrowShort2:"P2",distanceLabel:"{m} m",targetAvg:"Gns. dette mål: {v}",resumeConfirm:"Genoptag den igangværende runde?",networkError:"Runde gemt lokalt (netværksfejl)",shareError:"Kunne ikke dele runde med medskytte",notSavedLocally:"Runden er ikke gemt lokalt",gpsSaved:"GPS gemt!",gpsError:"GPS fejl: {msg}"},results:{title:"Mine runder",import:"⬆ Importér",empty:"Ingen runder endnu",roundFallback:"Runde",targetsUnit:"{n} mål",deleteConfirm:"Slet?",pointWord:"point",tableTargetHeader:"Mål",totalLabel:"Total",tableAvgHeader:"Ø/pil",distArrow1:"Snit pil 1",distArrow2:"Snit pil 2",overallAvg:"Samlet snit",summaryArrow1:"SNIT PIL 1",summaryArrow2:"SNIT PIL 2",summaryPoints:"POINT",summaryArrows:"PILE",summaryAvgPerArrow:"SNT/PIL",actualTitle:"Kun skudte mål",actualSub:"{shot} af {total} mål",actualAvgPerArrow:"SNT/PIL",actualAvgPerTarget:"SNT/MÅL",popupDistance:"DISTANCE",popupTime:"TID",sendResultsBtn:"📧 Send resultater",doneBtn:"Afslut",noRoundToSend:"Ingen runde at sende",burnBtn:"🔥 Afbrænd",burnConfirm:"Sikker? 🔥",burned:"Resultatet er brændt til aske 🔥"},email:{header:"3D Bueskydning - Resultater",subjectPrefix:"3D Bueskydning - ",dateLabel:"Dato: ",courseLabel:"Bane: ",resultsHeader:"--- RESULTATER ---",pointWord:" point",detailHeader:"--- DETALJERET ---",targetLabel:"  Mål ",totalLabel:"  Total: ",arrow1Label:"Snit pil 1",arrow2Label:"Snit pil 2",overallAvgLabel:"Samlet snit",distributionLabel:"  Fordeling: ",seeInApp:"Se resultater i appen:",loginRequired:"(Kræver login med din bruger)"},auth:{loginTab:"Log ind",signupTab:"Opret konto",emailPlaceholder:"Email",passwordPlaceholder:"Kodeord",loginBtn:"LOG IND",forgotPassword:"Glemt kodeord?",namePlaceholder:"Navn",signupPasswordPlaceholder:"Kodeord (min. 6 tegn)",selectGender:"Vælg køn",selectBowClass:"Vælg bueklasse",signupBtn:"OPRET KONTO",errUserNotFound:"Bruger ikke fundet.",errWrongPassword:"Forkert kodeord.",errInvalidCredential:"Ugyldig email eller kodeord.",errEmailInUse:"Email er allerede i brug.",errWeakPassword:"Kodeordet er for svagt (min. 6 tegn).",errInvalidEmail:"Ugyldig email-adresse.",errTooManyRequests:"For mange forsøg. Prøv igen senere.",errNetwork:"Netværksfejl. Tjek din forbindelse.",errGeneric:"Der opstod en fejl. Prøv igen.",errFillAllFields:"Udfyld alle felter.",errPasswordTooShort:"Adgangskoden skal være mindst 6 tegn.",errEnterEmailFirst:"Indtast din email først.",resetEmailSent:"Nulstillingsmail sendt!",privacyAcceptLabel:"Jeg accepterer privatlivspolitikken",newsletterOptLabel:"Jeg vil gerne modtage nyhedsbreve",errPrivacyRequired:"Du skal acceptere privatlivspolitikken for at oprette en konto."},roundImport:{importedToast:"Runde importeret: {name}",importError:"Fejl ved import: {msg}",noFileSelected:"Ingen fil valgt",loginFirst:"Log ind først",noPlayersInFile:"Filen indeholder ingen spillere med resultater",readError:"Kunne ikke læse filen: {msg}",guestFallback:"Gæst {n}",importedRoundFallback:"Importeret runde"},modals:{profil:{title:"Fuldfør din profil",desc:"Vælg køn og bueklasse for at aktivere sammenligning med andre skytter.",laterBtn:"Senere",validationMsg:"Vælg både køn og bueklasse.",saveError:"Fejl ved gem. Prøv igen."},privacy:{title:"Opdateret privatlivspolitik",desc:"Vi har opdateret vores privatlivspolitik. Læs den, og bekræft at du accepterer den, for at fortsætte.",readLink:"Læs privatlivspolitikken",continueBtn:"Fortsæt"},qr:{closeBtn:"Luk"},skip:{title:"Hop til mål",placeholder:"Målnummer",goBtn:"Hop"},guest:{title:"Tilføj gæst",placeholder:"Gæstens navn",addBtn:"Tilføj"},importPlayer:{title:"Hvem er du?"}},banners:{pwa:{text:"Installer 3D Bueskydning på din hjemmeskærm for hurtig adgang",installBtn:"INSTALLER APP"},iosInstall:{line1:"Installer 3D Bueskydning på din hjemmeskærm:",shareStepPre:"Tryk på ",shareStepPost:' Del-ikonet nederst i Safari, og vælg "Føj til hjemmeskærm".'},push:{text:"Få besked med det samme når nogen inviterer dig til en skydning – også når appen er lukket.",enableBtn:"AKTIVÉR NOTIFIKATIONER",enabledToast:"Notifikationer aktiveret"}},push:{permissionError:"Kunne ikke bede om tilladelse: {msg}",blocked:"Notifikationer blokeret i browseren — skal ændres i browserens side-indstillinger",unsupported:"Push-notifikationer understøttes ikke i denne browser",swError:"Kunne ikke registrere service worker",tokenError:"Kunne ikke hente push-token",genericError:"Push-fejl: {msg}",newMessageFallback:"Ny besked"},friends:{title:"Venner",addFriendBtn:"+ Tilføj ven",newsletterTitle:"Nyhedsbrev",requestAccessBtn:"🔎 Må jeg kigge med?",statusPending:"Afventer",cancelRequestTitle:"Fortryd anmodning",statusApproved:"Kan se resultater ✅",statusRejected:"Afvist",retryBtn:"Prøv igen",empty:"Ingen venner endnu",editTitle:"Rediger ven",addTitle:"Tilføj ven",deleteConfirm:"Slet {name}?",namePlaceholder:"Navn",phonePlaceholder:"Telefon",clubPlaceholder:"Klub",bowTypeDefault:"Buetype...",bowTypeRecurve:"Recurve",bowTypeCompound:"Compound",bowTypeLongbow:"Longbow",bowTypeBarebow:"Barebow"},admin:{loading:"Henter admins…",empty:"Ingen admins fundet",currentAdminsTitle:"NUVÆRENDE ADMINISTRATORER",youTag:"(dig)",removeBtn:"Fjern",period7:"Sidste 7 dage",period30:"Sidste 30 dage",period365:"Sidste 365 dage",loadingStats:"Henter…",totalRegistered:"I alt registreret",userNotFound:"Bruger ikke fundet",nowAdmin:"{name} er nu admin",removeConfirm:"Fjern {email} som administrator?",removedAdmin:"{email} er fjernet som admin",title:"Administrator",addAdminPlaceholder:"Email til ny admin",usageTitle:"BRUG AF APPEN",updateBtn:"Opdater",statsHint:'Klik "Opdater" for at hente statistik',allUsersTitle:"ALLE BRUGERE",searchUserPlaceholder:"Søg navn eller email…",usersCount:"{n} brugere",exportNewsletterBtn:"⬇ Eksportér nyhedsbrevs-liste",newsletterBadgeTitle:"Tilmeldt nyhedsbrev",noNewsletterSubscribers:"Ingen har tilmeldt sig nyhedsbrevet endnu",csvNameHeader:"Navn",csvEmailHeader:"Email"},meetups:{header:"Skal vi skyde sammen?",sectionSuggestBtn:"+ Foreslå",statusPending:"Afventer",statusAccepted:"Tilmeldt ✅",statusProposing:"Foreslår andet tidspunkt 🕓",statusDeclined:"Afbud ❌",empty:"Ingen planlagte skydninger endnu",joinBtn:"Tilmeld",proposeOtherBtn:"Foreslå andet tidspunkt",declineBtn:"Afbud",acceptProposalBtn:"Accepter {date} {time} ({name})",editTimeBtn:"Rediger tidspunkt",cancelMeetupBtn:"Aflys",deleteBtn:"Slet",cancelledBanner:"❌ Aflyst",notInvitedBanner:"👁 Du er ikke inviteret — vises kun for superadmin",dateTimeLine:"{date} kl. {time}",createdBy:"Oprettet af {name}",commentPlaceholder:"Skriv en kommentar…",sendBtn:"Send",noCoursesToast:"Ingen baner tilgængelige",noFriendsYet:"Du har ingen venner endnu",noOtherUsers:"Ingen andre registrerede brugere",notRegisteredNote:"ikke registreret i appen",noRecipientsSelected:"Ingen modtagere valgt endnu",selectCourseToast:"Vælg en bane",selectDateTimeToast:"Vælg dato og tid",selectRecipientToast:"Vælg mindst én modtager",invalidNamesToast:"{names} er ikke registreret i appen og blev ikke inviteret",proposalSentToast:"Forslag sendt",newTimeAcceptedToast:"Nyt tidspunkt accepteret",timeUpdatedToast:"Tidspunkt opdateret",cancelConfirm:"Aflys denne skydning?",deleteConfirm:"Slet denne skydning permanent? Det kan ikke fortrydes.",modalTitle:"Foreslå fælles skydning",proposeAnotherTitle:"Foreslå andet tidspunkt",editTimeTitle:"Rediger tidspunkt",courseLabel:"Bane",selectCoursePlaceholder:"-- Vælg bane --",dateLabel:"Dato",timeLabel:"Tidspunkt",noteLabel:"Bemærkning (valgfrit)",notePlaceholder:"Skriv en bemærkning om skydningen…",myFriendsTab:"Mine venner",allRegisteredTab:"Alle registrerede",selectAllBtn:"Vælg alle",sendProposalBtn:"Send forslag"},sharing:{title:"Må jeg kigge med?",emptyState:'Anmod om at se en vens resultater ved at trykke "🔎 Må jeg kigge med?" på personen i din venneliste ovenfor.',incomingRequestsTitle:"Anmodninger om at se dine resultater",acceptBtn:"Accepter",rejectBtn:"Afvis",sharingWithTitle:"Du deler resultater med",stopSharingBtn:"Afslut deling",viewableTitle:"Du kan se resultater for",viewInAnalyseBtn:"Se i Analyse",ownRequestError:"Du kan ikke anmode om at se dine egne resultater",notRegisteredError:"{name} er ikke registreret i appen",requestSentToast:"Anmodning sendt",acceptedToast:"Deling accepteret",rejectConfirm:"Afvis denne anmodning?",stopConfirm:"Afslut denne deling? Personen mister med det samme adgang til dine resultater.",stoppedToast:"Deling afsluttet"},courses:{title:"Baner",createBtn:"+ Opret bane",backBtn:"← Tilbage",mapTab:"Kort",visitsTab:"Besøg",editTab:"Rediger",showMyPosition:"📍 Vis min position",deleteCourseBtn:"🗑 Slet bane",createModalTitle:"Opret bane",namePlaceholder:"Banenavn",searchPlaceholder:"Søg bane...",targets24:"24 mål",targets30:"30 mål",locationPlaceholder:"Lokation (fx by)",visibilityPublic:"Offentlig",visibilityPrivate:"Privat",visibilityHidden:"Skjult (kun godkendte)",visibilityHint:'Privat: banen er stadig synlig for alle, men vises med "(Banen er kun for medlemmer)". Skjult: kun skytter du selv godkender (nedenfor) kan se banen.',membersOnlySuffix:"(Banen er kun for medlemmer)",searchUserPlaceholder:"Søg registreret bruger…",manualEmailPlaceholder:"…eller indtast email direkte",createBtnModal:"Opret",empty:"Ingen baner endnu",targetNameFallback:"Mål",emptyVisits:"Ingen besøg endnu",viewResultTitle:"Se resultat",infoTitle:"Baneinfo",nameLabel:"Banenavn",locationLabel:"Lokation",visibilityLabel:"Synlighed",saveInfoBtn:"Gem baneinfo",targetsHeader:"Mål ({n})",targetTitle:"Mål {n}",setGpsTitle:"Sæt GPS",nameLabelTarget:"Navn",emojiLabel:"Emoji",distanceLabel:"Afstand (m)",gpsInfo:"📍 GPS: {coords}",gpsMissing:"Ingen GPS",uploadPhotoBtn:"📷 Upload foto",saveAllTargetsBtn:"💾 Gem alle mål",noApprovedYet:"Ingen godkendt endnu",savedToast:"Gemt!",targetAddedToast:"Mål {n} tilføjet!",deleteTargetConfirm:"Slet mål {n}?",deleteTargetError:"Fejl: Kunne ikke slette mål",gpsSetToast:"GPS sat for mål {n}!",gpsErrorToast:"GPS fejl: {msg}",photoSavedToast:"Foto gemt!",uploadErrorToast:"Upload fejl: {msg}",allTargetsSavedToast:"Alle mål gemt!",gpsUnavailableToast:"GPS ikke tilgængeligt",deleteCourseConfirm:'Slet banen "{name}"?',courseDeletedToast:"Bane slettet",deleteCourseError:"Fejl: Kunne ikke slette bane",courseCreatedToast:"Bane oprettet!",createCourseError:"Fejl: Kunne ikke oprette bane"},analyse:{title:"Analyse",myselfOption:"Mig selv",filterAll:"Alle runder",filterLatest:"Seneste runde",filterLast10:"Seneste 10",filterLast20:"Seneste 20",filterSpecific:"Specifik runde",filterCompare:"Sammenlign runder",allCourses:"Alle baner",allRulesets:"Alle forbund",numRoundsPlaceholder:"Antal runder",onlyCompletedLabel:"Kun gennemførte runder (alle mål skudt)",onlyStartedAt1Label:"Kun runder startet ved mål 1",round1Label:"RUNDE 1",round2Label:"RUNDE 2",selectRoundPlaceholder:"Vælg runde...",selectRound2Placeholder:"Vælg runde 2...",arrow1:"PIL 1",arrow2:"PIL 2",singleArrowNote:"{ruleset} skydes med 1 pil pr. mål — PIL 1/PIL 2 er derfor ikke relevant",singleArrowNoteCompare:"{ruleset} skydes med 1 pil pr. mål — PIL 1/PIL 2-sammenligning er derfor ikke relevant",notRelevant:"Ikke relevant",best:"BEDSTE",worst:"SVÆRESTE",comparisonTitle:"SAMMENLIGNING",vs:"VS",wonBy:"{name} vandt med {diff} point",tie:"Uafgjort!",arrowStatsTitle:"PIL STATISTIK",bestWorstTargetTitle:"BEDSTE OG SVÆRESTE MÅL",zoneDistTitle:"FORDELING PR. SCOREZONE",selectTwoRounds:"Vælg to runder ovenfor",roundsNotFound:"Kunne ikke finde runderne",meFallback:"Mig",viewingResultsFor:"Viser resultater for {name}",statRounds:"RUNDER",statAvgPerRound:"SNIT/RUNDE",statBest:"BEDSTE",statLowest:"LAVESTE",roundsIncludedTitle:"RUNDER I DENNE ANALYSE ({n})",selectRulesetNote:"Vælg et specifikt forbund i filteret ovenfor for at se pil-fordeling (runderne i dette udvalg bruger forskellige regelsæt)",bestWithArrow1:"Bedst med PIL 1 🏹",bestWithArrow2:"Bedst med PIL 2 🏹",bothArrowsEqual:"Begge pile er lige gode 🎯",shotOrdinal:"Skud nr. {n}",developmentTitle:"UDVIKLING (RUNDER)",oldest:"ældst",newest:"nyest",perTargetGraphTitle:"GENNEMSNIT PR. SKUDRÆKKEFØLGE",perTargetCaption:"Skudrækkefølge — 1 = første mål skudt · stiplet linje = trend",consistencyTitle:"KONSISTENS (SPREDNING)",consistencyNote:"Standardafvigelse i point (samme skala som scoren, 0-11) — ikke et 0-1-tal. Tæt på 0 = meget ensartet gennem runden; jo højere tal, jo større udsving mellem de bedste og sværeste mål.",fullscreenGraphTitle:"GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset",consistencyOverTimeTitle:"KONSISTENS OVER TID · denne bane",consistencyOverTimeCaption:"Spredning pr. runde (samme point-skala som ovenfor) — faldende kurve = mere ensartet skydning over tid",comparisonSectionTitle:"SAMMENLIGNING · {gender} {bowClass}",loadingComparison:"Henter...",noOtherShootersYet:"Ingen andre {gender} {bowClass}-skytter har skudt denne bane endnu.",yourAvgPerArrow:"DIT SNT/PIL",difference:"DIFFERENCE",othersAvgPerArrow:"ANDRES SNT/PIL",basedOnRoundsSingular:"Baseret på {n} runde fra andre skytter",basedOnRoundsPlural:"Baseret på {n} runder fra andre skytter",distanceInsightsTitle:"AFSTANDS-ANALYSE",distanceInsightsSubtitle:"Andel skud der rammer {label} pr. afstandsgruppe",distanceInsightsCoverage:"Baseret på {used} af {total} runder — kun runder gået på baner med kendte mål-afstande tæller med",distBucket5to15:"5-15 m",distBucket16to25:"16-25 m",distBucket26to30:"26-30 m",killZoneLabel:"kill-zonen",trendUp:"📈 Din score er steget {pct}% de seneste {weeks} uger",trendDown:"📉 Din score er faldet {pct}% de seneste {weeks} uger",trendFlat:"Din score har ligget stabilt de seneste {weeks} uger",trendNotEnoughData:"Ikke nok runder de seneste {weeks} uger til at vise en udvikling endnu",weakestZone:"Din største svaghed, målt på pilegennemsnit, er mål på {range}",pointPotential:"Hvis dit snit pr. pil på {range} kom op på dit samlede snit, svarer det til ca. +{n} point pr. runde"}},en:{nav:{scoring:"SCORING",results:"RESULTS",analyse:"ANALYSIS",courses:"COURSES",friends:"FRIENDS"},common:{cancel:"Cancel",confirm:"Confirm",save:"Save",add:"Add",errorPrefix:"Error: ",linkCopied:"Link copied",unknown:"Unknown",gender:{herre:"Male",dame:"Female"},bowClass:{langbue:"Longbow",trad:"Traditional",recurve:"Recurve (Olympic)",compound:"Compound",barbue:"Barebow",buejaeger:"Bowhunter",tradBuejaeger:"Traditional bowhunter",rytterbue:"Horsebow"},bowClassShort:{langbue:"Longbow",trad:"Traditional",recurve:"Recurve",compound:"Compound",barbue:"Barebow",buejaeger:"Bowhunter",tradBuejaeger:"Trad. bowhunter",rytterbue:"Horsebow"}},setup:{newRoundTitle:"🌲 New Round",roundName:"Round name",roundNameDefault:"My Shoot",courseLabel:"Course (optional)",noCourse:"-- No course --",targetCountLabel:"Number of targets",targets24:"24 Targets",targets30:"30 Targets",other:"Other...",targetsUnit:"{n} targets",targetCountPlaceholder:"Number of targets",rulesetLabel:"Ruleset",rulesetDgs1:"DGS (1 arrow)",rulesetDgs2:"DGS (2 arrows)",participantsTitle:"👥 Participants",searchFriend:"Search friend...",addGuest:"+ Add guest",boostTitle:"🟢 Positive reinforcement",enableBoost:"Enable positive reinforcement",boostThreshPre:"Green dot if avg. at least",boostThreshPost:"points/arrow",gpsTitle:"📍 GPS",startTarget:"Start target",autoFindTitle:"Auto-find nearest target",autoFindSub:"Use GPS automatically",trackRouteTitle:"Track route and time",trackRouteSub:"Record route and distance",showDistancesTitle:"Show target distances",showDistancesSub:"View only — not editable",startRoundBtn:"START ROUND →"},active:{targetPrefix:"TARGET ",ofN:" of {n}",targetFallback:"Target {n}",statAvg:"AVG.",statPoint:"POINTS",statRemaining:"Remaining",statRemainingSub:"targets",editTitle:"Edit target",editNamePlaceholder:"Animal name",takePhoto:"📷 Take photo",saveGps:"📍 Save GPS",save:"Save",cancel:"Cancel",back:"← BACK",next:"NEXT →",finish:"FINISH →",skip:"⤵ SKIP",finishNow:"✓ FINISH NOW",finishConfirm:"✓ CONFIRM",abort:"🗑 ABORT",abortConfirm:"🗑 CONFIRM",editBtn:"✏️ EDIT",runde:"ROUND",snt:"AVG",pilLabel:"🎯 ARROW {n}",arrowShort1:"A1",arrowShort2:"A2",distanceLabel:"{m} m",targetAvg:"Avg. this target: {v}",resumeConfirm:"Resume the round in progress?",networkError:"Round saved locally (network error)",shareError:"Could not share round with co-shooter",notSavedLocally:"The round is not saved locally",gpsSaved:"GPS saved!",gpsError:"GPS error: {msg}"},results:{title:"My rounds",import:"⬆ Import",empty:"No rounds yet",roundFallback:"Round",targetsUnit:"{n} targets",deleteConfirm:"Delete?",pointWord:"points",tableTargetHeader:"Target",totalLabel:"Total",tableAvgHeader:"Avg/arrow",distArrow1:"Avg. arrow 1",distArrow2:"Avg. arrow 2",overallAvg:"Overall avg.",summaryArrow1:"AVG ARROW 1",summaryArrow2:"AVG ARROW 2",summaryPoints:"POINTS",summaryArrows:"ARROWS",summaryAvgPerArrow:"AVG/ARROW",actualTitle:"Targets shot only",actualSub:"{shot} of {total} targets",actualAvgPerArrow:"AVG/ARROW",actualAvgPerTarget:"AVG/TARGET",popupDistance:"DISTANCE",popupTime:"TIME",sendResultsBtn:"📧 Send results",doneBtn:"Done",noRoundToSend:"No round to send",burnBtn:"🔥 Burn",burnConfirm:"Sure? 🔥",burned:"The result has been burned to ashes 🔥"},email:{header:"3D Archery - Results",subjectPrefix:"3D Archery - ",dateLabel:"Date: ",courseLabel:"Course: ",resultsHeader:"--- RESULTS ---",pointWord:" points",detailHeader:"--- DETAILED ---",targetLabel:"  Target ",totalLabel:"  Total: ",arrow1Label:"Avg. arrow 1",arrow2Label:"Avg. arrow 2",overallAvgLabel:"Overall avg.",distributionLabel:"  Distribution: ",seeInApp:"See results in the app:",loginRequired:"(Requires login with your account)"},auth:{loginTab:"Log in",signupTab:"Create account",emailPlaceholder:"Email",passwordPlaceholder:"Password",loginBtn:"LOG IN",forgotPassword:"Forgot password?",namePlaceholder:"Name",signupPasswordPlaceholder:"Password (min. 6 characters)",selectGender:"Select gender",selectBowClass:"Select bow class",signupBtn:"CREATE ACCOUNT",errUserNotFound:"User not found.",errWrongPassword:"Incorrect password.",errInvalidCredential:"Invalid email or password.",errEmailInUse:"Email is already in use.",errWeakPassword:"The password is too weak (min. 6 characters).",errInvalidEmail:"Invalid email address.",errTooManyRequests:"Too many attempts. Try again later.",errNetwork:"Network error. Check your connection.",errGeneric:"An error occurred. Try again.",errFillAllFields:"Fill in all fields.",errPasswordTooShort:"The password must be at least 6 characters.",errEnterEmailFirst:"Enter your email first.",resetEmailSent:"Reset email sent!",privacyAcceptLabel:"I accept the privacy policy",newsletterOptLabel:"I would like to receive newsletters",errPrivacyRequired:"You must accept the privacy policy to create an account."},roundImport:{importedToast:"Round imported: {name}",importError:"Import error: {msg}",noFileSelected:"No file selected",loginFirst:"Log in first",noPlayersInFile:"The file contains no players with results",readError:"Could not read the file: {msg}",guestFallback:"Guest {n}",importedRoundFallback:"Imported round"},modals:{profil:{title:"Complete your profile",desc:"Select gender and bow class to enable comparison with other archers.",laterBtn:"Later",validationMsg:"Select both gender and bow class.",saveError:"Error saving. Try again."},privacy:{title:"Updated privacy policy",desc:"We have updated our privacy policy. Please read it and confirm you accept it to continue.",readLink:"Read the privacy policy",continueBtn:"Continue"},qr:{closeBtn:"Close"},skip:{title:"Jump to target",placeholder:"Target number",goBtn:"Go"},guest:{title:"Add guest",placeholder:"Guest's name",addBtn:"Add"},importPlayer:{title:"Who are you?"}},banners:{pwa:{text:"Install 3D Bueskydning on your home screen for quick access",installBtn:"INSTALL APP"},iosInstall:{line1:"Install 3D Bueskydning on your home screen:",shareStepPre:"Tap the ",shareStepPost:' Share icon at the bottom of Safari, and choose "Add to Home Screen".'},push:{text:"Get notified instantly when someone invites you to a shoot – even when the app is closed.",enableBtn:"ENABLE NOTIFICATIONS",enabledToast:"Notifications enabled"}},push:{permissionError:"Could not request permission: {msg}",blocked:"Notifications blocked in the browser — must be changed in the browser's site settings",unsupported:"Push notifications are not supported in this browser",swError:"Could not register service worker",tokenError:"Could not get push token",genericError:"Push error: {msg}",newMessageFallback:"New message"},friends:{title:"Friends",addFriendBtn:"+ Add friend",newsletterTitle:"Newsletter",requestAccessBtn:"🔎 May I follow along?",statusPending:"Pending",cancelRequestTitle:"Cancel request",statusApproved:"Can see results ✅",statusRejected:"Rejected",retryBtn:"Try again",empty:"No friends yet",editTitle:"Edit friend",addTitle:"Add friend",deleteConfirm:"Delete {name}?",namePlaceholder:"Name",phonePlaceholder:"Phone",clubPlaceholder:"Club",bowTypeDefault:"Bow type...",bowTypeRecurve:"Recurve",bowTypeCompound:"Compound",bowTypeLongbow:"Longbow",bowTypeBarebow:"Barebow"},admin:{loading:"Loading admins…",empty:"No admins found",currentAdminsTitle:"CURRENT ADMINISTRATORS",youTag:"(you)",removeBtn:"Remove",period7:"Last 7 days",period30:"Last 30 days",period365:"Last 365 days",loadingStats:"Loading…",totalRegistered:"Total registered",userNotFound:"User not found",nowAdmin:"{name} is now an admin",removeConfirm:"Remove {email} as administrator?",removedAdmin:"{email} has been removed as admin",title:"Administrator",addAdminPlaceholder:"Email for new admin",usageTitle:"APP USAGE",updateBtn:"Update",statsHint:'Click "Update" to fetch statistics',allUsersTitle:"ALL USERS",searchUserPlaceholder:"Search name or email…",usersCount:"{n} users",exportNewsletterBtn:"⬇ Export newsletter list",newsletterBadgeTitle:"Subscribed to newsletter",noNewsletterSubscribers:"No one has subscribed to the newsletter yet",csvNameHeader:"Name",csvEmailHeader:"Email"},meetups:{header:"Shall we shoot together?",sectionSuggestBtn:"+ Suggest",statusPending:"Pending",statusAccepted:"Joined ✅",statusProposing:"Suggesting a different time 🕓",statusDeclined:"Declined ❌",empty:"No planned shoots yet",joinBtn:"Join",proposeOtherBtn:"Suggest a different time",declineBtn:"Decline",acceptProposalBtn:"Accept {date} {time} ({name})",editTimeBtn:"Edit time",cancelMeetupBtn:"Cancel",deleteBtn:"Delete",cancelledBanner:"❌ Cancelled",notInvitedBanner:"👁 You are not invited — shown only to superadmin",dateTimeLine:"{date} at {time}",createdBy:"Created by {name}",commentPlaceholder:"Write a comment…",sendBtn:"Send",noCoursesToast:"No courses available",noFriendsYet:"You have no friends yet",noOtherUsers:"No other registered users",notRegisteredNote:"not registered in the app",noRecipientsSelected:"No recipients selected yet",selectCourseToast:"Select a course",selectDateTimeToast:"Select date and time",selectRecipientToast:"Select at least one recipient",invalidNamesToast:"{names} are not registered in the app and were not invited",proposalSentToast:"Proposal sent",newTimeAcceptedToast:"New time accepted",timeUpdatedToast:"Time updated",cancelConfirm:"Cancel this shoot?",deleteConfirm:"Delete this shoot permanently? This cannot be undone.",modalTitle:"Suggest a joint shoot",proposeAnotherTitle:"Suggest a different time",editTimeTitle:"Edit time",courseLabel:"Course",selectCoursePlaceholder:"-- Select course --",dateLabel:"Date",timeLabel:"Time",noteLabel:"Note (optional)",notePlaceholder:"Write a note about the shoot…",myFriendsTab:"My friends",allRegisteredTab:"All registered",selectAllBtn:"Select all",sendProposalBtn:"Send proposal"},sharing:{title:"May I follow along?",emptyState:`Ask to see a friend's results by tapping "🔎 May I follow along?" on the person in your friends list above.`,incomingRequestsTitle:"Requests to see your results",acceptBtn:"Accept",rejectBtn:"Reject",sharingWithTitle:"You are sharing results with",stopSharingBtn:"Stop sharing",viewableTitle:"You can see results for",viewInAnalyseBtn:"View in Analysis",ownRequestError:"You cannot request to see your own results",notRegisteredError:"{name} is not registered in the app",requestSentToast:"Request sent",acceptedToast:"Sharing accepted",rejectConfirm:"Reject this request?",stopConfirm:"Stop this sharing? The person will immediately lose access to your results.",stoppedToast:"Sharing stopped"},courses:{title:"Courses",createBtn:"+ Create course",backBtn:"← Back",mapTab:"Map",visitsTab:"Visits",editTab:"Edit",showMyPosition:"📍 Show my position",deleteCourseBtn:"🗑 Delete course",createModalTitle:"Create course",namePlaceholder:"Course name",searchPlaceholder:"Search course...",targets24:"24 targets",targets30:"30 targets",locationPlaceholder:"Location (e.g. city)",visibilityPublic:"Public",visibilityPrivate:"Private",visibilityHidden:"Hidden (approved only)",visibilityHint:'Private: the course is still visible to everyone, but shown with "(Members only)". Hidden: only archers you approve (below) can see the course.',membersOnlySuffix:"(Members only)",searchUserPlaceholder:"Search registered user…",manualEmailPlaceholder:"…or enter email directly",createBtnModal:"Create",empty:"No courses yet",targetNameFallback:"Target",emptyVisits:"No visits yet",viewResultTitle:"View result",infoTitle:"Course info",nameLabel:"Course name",locationLabel:"Location",visibilityLabel:"Visibility",saveInfoBtn:"Save course info",targetsHeader:"Targets ({n})",targetTitle:"Target {n}",setGpsTitle:"Set GPS",nameLabelTarget:"Name",emojiLabel:"Emoji",distanceLabel:"Distance (m)",gpsInfo:"📍 GPS: {coords}",gpsMissing:"No GPS",uploadPhotoBtn:"📷 Upload photo",saveAllTargetsBtn:"💾 Save all targets",noApprovedYet:"None approved yet",savedToast:"Saved!",targetAddedToast:"Target {n} added!",deleteTargetConfirm:"Delete target {n}?",deleteTargetError:"Error: Could not delete target",gpsSetToast:"GPS set for target {n}!",gpsErrorToast:"GPS error: {msg}",photoSavedToast:"Photo saved!",uploadErrorToast:"Upload error: {msg}",allTargetsSavedToast:"All targets saved!",gpsUnavailableToast:"GPS not available",deleteCourseConfirm:'Delete course "{name}"?',courseDeletedToast:"Course deleted",deleteCourseError:"Error: Could not delete course",courseCreatedToast:"Course created!",createCourseError:"Error: Could not create course"},analyse:{title:"Analysis",myselfOption:"Myself",filterAll:"All rounds",filterLatest:"Latest round",filterLast10:"Last 10",filterLast20:"Last 20",filterSpecific:"Specific round",filterCompare:"Compare rounds",allCourses:"All courses",allRulesets:"All rulesets",numRoundsPlaceholder:"Number of rounds",onlyCompletedLabel:"Only completed rounds (all targets shot)",onlyStartedAt1Label:"Only rounds started at target 1",round1Label:"ROUND 1",round2Label:"ROUND 2",selectRoundPlaceholder:"Select round...",selectRound2Placeholder:"Select round 2...",arrow1:"ARROW 1",arrow2:"ARROW 2",singleArrowNote:"{ruleset} is shot with 1 arrow per target — ARROW 1/ARROW 2 is therefore not relevant",singleArrowNoteCompare:"{ruleset} is shot with 1 arrow per target — the ARROW 1/ARROW 2 comparison is therefore not relevant",notRelevant:"Not relevant",best:"BEST",worst:"HARDEST",comparisonTitle:"COMPARISON",vs:"VS",wonBy:"{name} won by {diff} points",tie:"Tie!",arrowStatsTitle:"ARROW STATISTICS",bestWorstTargetTitle:"BEST AND HARDEST TARGET",zoneDistTitle:"DISTRIBUTION PER SCORE ZONE",selectTwoRounds:"Select two rounds above",roundsNotFound:"Could not find the rounds",meFallback:"Me",viewingResultsFor:"Showing results for {name}",statRounds:"ROUNDS",statAvgPerRound:"AVG/ROUND",statBest:"BEST",statLowest:"LOWEST",roundsIncludedTitle:"ROUNDS IN THIS ANALYSIS ({n})",selectRulesetNote:"Select a specific ruleset in the filter above to see arrow distribution (the rounds in this selection use different rulesets)",bestWithArrow1:"Best with ARROW 1 🏹",bestWithArrow2:"Best with ARROW 2 🏹",bothArrowsEqual:"Both arrows are equally good 🎯",shotOrdinal:"Shot no. {n}",developmentTitle:"DEVELOPMENT (ROUNDS)",oldest:"oldest",newest:"newest",perTargetGraphTitle:"AVERAGE PER SHOT ORDER",perTargetCaption:"Shot order — 1 = first target shot · dashed line = trend",consistencyTitle:"CONSISTENCY (SPREAD)",consistencyNote:"Standard deviation in points (same scale as the score, 0-11) — not a 0-1 number. Close to 0 = very consistent through the round; the higher the number, the bigger the swing between the best and hardest targets.",fullscreenGraphTitle:"AVERAGE PER SHOT ORDER · pinch to zoom · double-tap to reset",consistencyOverTimeTitle:"CONSISTENCY OVER TIME · this course",consistencyOverTimeCaption:"Spread per round (same point scale as above) — declining curve = more consistent shooting over time",comparisonSectionTitle:"COMPARISON · {gender} {bowClass}",loadingComparison:"Loading...",noOtherShootersYet:"No other {gender} {bowClass} archers have shot this course yet.",yourAvgPerArrow:"YOUR AVG/ARROW",difference:"DIFFERENCE",othersAvgPerArrow:"OTHERS' AVG/ARROW",basedOnRoundsSingular:"Based on {n} round from other archers",basedOnRoundsPlural:"Based on {n} rounds from other archers",distanceInsightsTitle:"DISTANCE ANALYSIS",distanceInsightsSubtitle:"Share of shots hitting {label} per distance group",distanceInsightsCoverage:"Based on {used} of {total} rounds — only rounds played on courses with known target distances are included",distBucket5to15:"5-15 m",distBucket16to25:"16-25 m",distBucket26to30:"26-30 m",killZoneLabel:"the kill zone",trendUp:"📈 Your score has risen {pct}% over the last {weeks} weeks",trendDown:"📉 Your score has dropped {pct}% over the last {weeks} weeks",trendFlat:"Your score has been stable over the last {weeks} weeks",trendNotEnoughData:"Not enough rounds in the last {weeks} weeks to show a trend yet",weakestZone:"Your biggest weakness, measured by average score per arrow, is targets at {range}",pointPotential:"If your average per arrow at {range} matched your overall average, that would be roughly +{n} points per round"}}};let ni=localStorage.getItem(ev)||"da";function tv(){return ni}function gn(){return ni==="da"?"da-DK":"en-US"}function y(n,e){const t=n.split(".");let r=Oa[ni];for(const s of t)r=r==null?void 0:r[s];if(r==null){r=Oa.da;for(const s of t)r=r==null?void 0:r[s]}if(r==null)return n;if(e)for(const[s,i]of Object.entries(e))r=r.replace(`{${s}}`,i);return r}function nv(n=document){n.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=y(t.dataset.i18n)}),n.querySelectorAll("[data-i18n-placeholder]").forEach(t=>{t.placeholder=y(t.dataset.i18nPlaceholder)});const e=document.getElementById("lang-btn");e&&(e.textContent=ni.toUpperCase())}function eP(n){ni=n,localStorage.setItem(ev,n),document.documentElement.lang=n,nv()}function tP(){document.documentElement.lang=ni,nv()}function nP(n){const e=m.shareRequests.find(t=>{var r;return t.viewerUid===((r=m.user)==null?void 0:r.uid)&&t.ownerUid===n});return e?e.status==="afventer"?`<span class="share-badge share-badge-afventer">${y("friends.statusPending")}</span><button class="btn-icon" onclick="window.cancelShareRequest('${e.id}')" title="${y("friends.cancelRequestTitle")}">✕</button>`:e.status==="accepteret"?`<span class="share-badge share-badge-accepteret">${y("friends.statusApproved")}</span>`:`<span class="share-badge share-badge-afvist">${y("friends.statusRejected")}</span><button class="btn-share-req" data-share-friend="${n}">${y("friends.retryBtn")}</button>`:`<button class="btn-share-req" data-share-friend="${n}">${y("friends.requestAccessBtn")}</button>`}function rr(){const n=document.getElementById("friends-list");if(!m.friends.length){n.innerHTML=`<div class="empty"><div class="empty-icon">👥</div>${y("friends.empty")}</div>`;return}n.innerHTML="",m.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${H(e.name)}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).map(H).join(" · ")}</div><div class="fshare-row">${nP(e.id)}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del">🗑</button></div>`,t.querySelector(".frd-edit").addEventListener("click",()=>openFriendModal(e)),t.querySelector(".frd-del").addEventListener("click",()=>doDeleteFriend(e.id,e.name));const r=t.querySelector("[data-share-friend]");r&&r.addEventListener("click",()=>window.requestViewAccess(e.id,e.name)),n.appendChild(t)})}window.renderFriendsList=rr;function Hs(){const n=document.getElementById("qfriends");n.innerHTML="",m.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=m.friends.filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await st(tt(K,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=m.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...r];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" data-id="${H(i.id)}" data-name="${H(i.name||"")}" data-email="${H(i.email||"")}">${H(i.name)}${i.email?` <span style='font-size:11px;opacity:.6'>${H(i.email)}</span>`:""}</div>`).join(""),e.querySelectorAll(".ac-item").forEach(i=>i.addEventListener("click",()=>{selectFriend(i.dataset.id,i.dataset.name,i.dataset.email),document.getElementById("friend-search").value="",document.getElementById("ac-list").classList.add("hidden")})),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){if(!m.friends.find(r=>r.id===n)){const r={id:n,name:e,email:t};m.friends.push(r),jt(),rr(),Hs(),m.user&&Pt(ne(K,"users",m.user.uid,"friends",n),r).catch(s=>console.warn(s))}window.addParticipant(n,e)};window.openFriendModal=function(n){m.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=y(n?"friends.editTitle":"friends.addTitle"),document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim().slice(0,80),email:document.getElementById("f-email").value.trim().slice(0,100),phone:document.getElementById("f-phone").value.trim().slice(0,30),club:document.getElementById("f-club").value.trim().slice(0,80),bowType:document.getElementById("f-bow").value};if(!n.name)return;if(m.editFriendId){const r=m.friends.findIndex(s=>s.id===m.editFriendId);r!==-1?m.friends[r]={...n,id:m.editFriendId}:m.friends.push({...n,id:m.editFriendId})}else m.friends.push({...n,id:"f_"+Date.now()});const e=m.editFriendId||"f_"+Date.now();m.editFriendId||(m.friends[m.friends.length-1].id=e);const t=m.friends.find(r=>r.id===(m.editFriendId||e));t&&m.user&&Pt(ne(K,"users",m.user.uid,"friends",t.id),t).catch(r=>console.warn(r)),jt(),document.getElementById("friend-modal").classList.add("hidden"),rr(),Hs()};window.doDeleteFriend=function(n,e){pr(y("friends.deleteConfirm",{name:e}),()=>{m.friends=m.friends.filter(t=>t.id!==n),jt(),rr(),Hs(),m.user&&Ht(ne(K,"users",m.user.uid,"friends",n)).catch(t=>console.warn(t))})};const rP=[11,10,8,5,"M"],td={WA:{label:"WA",arrowsPerTarget:2,scoreValues:[11,10,8,5,"M"],boostThreshold:8},"HDH-IAA":{label:"HDH-IAA",arrowsPerTarget:1,scoreValues:[11,10,8,5,"M"],boostThreshold:8},DGS:{label:"DGS",arrowsPerTarget:2,scoreValues:[5,3,-1,"M"],boostThreshold:4},"DGS-1":{label:"DGS-1",arrowsPerTarget:1,scoreValues:[5,3,-1,"M"],boostThreshold:4}},cr="WA";function sn(n){var e;return((e=td[n])==null?void 0:e.arrowsPerTarget)??2}function lr(n){var e;return((e=td[n])==null?void 0:e.scoreValues)??rP}function sP(n){var e;return((e=td[n])==null?void 0:e.boostThreshold)??8}function iP(n){return lr(n).slice(0,2)}function Te(n){return n==="M"||n==null?0:Number(n)}function Jr(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":t==="-"?null:Number(t))):[]}function Ml(n){return n.map(e=>e.map(t=>t??"-").join(",")).join(";")}function Et(n){return n.flat().reduce((e,t)=>e+Te(t),0)}function oP(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(s=>s!=null).map(Te));return t.length?(t.reduce((r,s)=>r+s,0)/t.length).toFixed(1):null}function nd(n,e){const t={};return lr(e).forEach(r=>{t[r]=0}),n.flat().forEach(r=>{r!=null&&t[r]!==void 0&&t[r]++}),t}function rd(n){return n.length?n.reduce((e,t)=>Et(t.scores)>Et(e.scores)?t:e,n[0]):null}function aP(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,s)=>r+Te(s),0)/t.length>=e:!1}function cP(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function lP(n,e,t=2){for(;n.scores.length<e;)n.scores.push(Array(t).fill(null))}function uP(n,e,t=2){let r=0;for(let s=0;s<e;s++)n.every(i=>{const o=i.scores[s]||[];return o.length>=t&&o.slice(0,t).every(c=>c!=null)})&&r++;return r}function rv(n){return{id:n.id||null,name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,ruleset:n.ruleset||cr,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:Ml(e.scores)}))}}function dP(n){return{...n,ruleset:n.ruleset||cr,shooters:(n.shooters||[]).map(e=>({...e,scores:Jr(e.scores)}))}}function sd(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}let ca=null,la=!1,Mr=!1,Bl=[],Ki=null,Li=0,an=null,Fl=null,Si=null;function sv(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function id(n,e){const r=(e.lat-n.lat)*Math.PI/180,s=(e.lng-n.lng)*Math.PI/180,i=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function iv(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function ov(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function hP(n){return navigator.geolocation?(Si=n,Bl=[],Li=0,an=null,Ki=Date.now(),Mr=!1,la=!0,ca=navigator.geolocation.watchPosition(e=>{if(!la||Mr)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};an&&(Li+=id(an,t)),an=t,Bl.push(t),Si&&Si({lat:t.lat,lng:t.lng,distance:Li,elapsed:Math.round((Date.now()-Ki)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),Fl=setInterval(()=>{la&&!Mr&&Si&&Si({lat:an==null?void 0:an.lat,lng:an==null?void 0:an.lng,distance:Li,elapsed:Math.round((Date.now()-Ki)/1e3)})},1e3),!0):!1}function fP(){return Mr=!Mr,Mr}function av(){return la=!1,Mr=!1,ca!==null&&(navigator.geolocation.clearWatch(ca),ca=null),clearInterval(Fl),Fl=null,{route:Bl.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round(Li),duration:Ki?Math.round((Date.now()-Ki)/1e3):0}}function yc(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function mP(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((s,i)=>{if(!s.gps)return;const o=id(e,s.gps);o<t&&(t=o,r=i)}),r}function pP(n){const e=n.data();return{id:n.id,name:e.name||e.yam||"—",numTargets:e.numTargets||e.antalMål||24,location:e.location||e.beliggenhed||"",targets:e.targets||e.mål||[],visits:e.visits||e.besøg||[],private:e.private??e.privat??!1,hidden:e.hidden??e.skjult??!1,approvedUsers:e.approvedUsers||e.godkendteBrugere||[],ownerId:e.ownerId||null}}function gP(n){var e;return m.isAdmin||!!n.ownerId&&n.ownerId===((e=m.user)==null?void 0:e.uid)}async function yP(){var n;try{const e=(((n=m.user)==null?void 0:n.email)||"").toLowerCase();let t;if(m.isAdmin)t=[await st(tt(K,"courses"))];else{const i=[st(zs(tt(K,"courses"),Vr("hidden","==",!1)))];e&&i.push(st(zs(tt(K,"courses"),Vr("hidden","==",!0),Vr("approvedUsers","array-contains",e)))),t=await Promise.all(i)}const r=new Map;t.forEach(i=>i.docs.forEach(o=>r.set(o.id,o)));const s=[...r.values()].map(pP);s.length&&(m.courses=s,jt(),is(),window.populateCourseDropdown())}catch(e){console.warn("courses:",e)}}function is(n=""){const e=document.getElementById("courses-list");if(!m.courses.length){e.innerHTML=`<div class="empty"><div class="empty-icon">🗺️</div>${y("courses.empty")}</div>`;return}const t=n.trim().toLowerCase(),r=[...m.courses].filter(s=>!t||s.name.toLowerCase().includes(t)).sort((s,i)=>s.name.localeCompare(i.name,"da"));if(!r.length){e.innerHTML=`<div class="empty"><div class="empty-icon">🗺️</div>${y("courses.empty")}</div>`;return}e.innerHTML="",r.forEach(s=>{const i=document.createElement("div");i.className="ccard",i.innerHTML=`<div class="ccard-name">${H(s.name)}${s.private?` <span class="ccard-private-note">${y("courses.membersOnlySuffix")}</span>`:""}</div><div class="ccard-meta">${y("setup.targetsUnit",{n:s.numTargets})} · ${H(s.location||"—")}</div>`,i.onclick=()=>vP(s),e.appendChild(i)})}window.filterCourses=function(n){is(n)};function vP(n){m.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name+(n.private?" "+y("courses.membersOnlySuffix"):""),document.getElementById("course-edit-stab-btn").classList.toggle("hidden",!gP(n)),window.switchSubtab("map"),_P(n),wP(n),To(n)}function _P(n){const e=document.getElementById("course-map");m.courseMap&&(m.courseMap.remove(),m.courseMap=null),m.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(m.courseMap);const t=[];(n.targets||[]).forEach((r,s)=>{const i=r.gps||r.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div class="map-marker-num">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(m.courseMap).bindPopup(`<b>${s+1}. ${r.name||y("courses.targetNameFallback")}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" class="popup-target-img"/>`:""}`))}),t.length?m.courseMap.fitBounds(t,{padding:[20,20]}):m.courseMap.setView([55.7,12.5],10)}function wP(n){const e=document.getElementById("visits-list"),t=m.rounds.filter(r=>r.courseId===n.id).map(r=>{const s=(r.shooters||[]).map(o=>({...o,scores:Jr(o.scores)})),i=rd(s);return{roundId:r.id,date:r.completed?new Date(r.completed).toLocaleDateString(gn()):r.created?new Date(r.created).toLocaleDateString(gn()):"—",participants:s.map(o=>o.name),winner:i==null?void 0:i.name,winnerScore:i?Et(i.scores):0}});if(!t.length){e.innerHTML=`<div class="empty"><div class="empty-icon">📍</div>${y("courses.emptyVisits")}</div>`;return}e.innerHTML="",t.forEach(r=>{const s=document.createElement("div");s.className="visit-card",s.onclick=i=>{i.target.closest(".btn-icon")||window.showVisitResults(r.roundId)},s.innerHTML=`<div class="visit-card-head"><span class="visit-card-date">${H(r.date)}</span><button class="btn-icon" onclick="window.showVisitResults('${H(r.roundId)}')" title="${y("courses.viewResultTitle")}">📊</button></div><div class="visit-card-participants">${(r.participants||[]).map(H).join(", ")}</div>${r.winner?`<div class="visit-card-winner">🏆 ${H(r.winner)} (${r.winnerScore} pt)</div>`:""}`,e.appendChild(s)})}function To(n){const e=n.targets||[];let t=`
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
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t,m.approvedDraft.edit=[...n.approvedUsers||[]],vc("edit")}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim().slice(0,100),e=document.getElementById("edit-cloc").value.trim().slice(0,100),t=document.getElementById("edit-cvisibility").value,r=t!=="public",s=t==="hidden",i=s?[...m.approvedDraft.edit]:[];if(!n)return;await nt(ne(K,"courses",m.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i}),m.currentCourse.name=n,m.currentCourse.location=e,m.currentCourse.private=r,m.currentCourse.hidden=s,m.currentCourse.approvedUsers=i;const o=m.courses.findIndex(c=>c.id===m.currentCourse.id);o>-1&&(m.courses[o]={...m.courses[o],name:n,location:e,private:r,hidden:s,approvedUsers:i}),jt(),is(),document.getElementById("course-detail-title").textContent=n+(r?" "+y("courses.membersOnlySuffix"):""),q(y("courses.savedToast"),"success")};window.updateTargetField=function(n,e,t){var r;(r=m.currentCourse)!=null&&r.targets&&(m.currentCourse.targets[n][e]=e==="distance"?t===""?null:Number(t):t)};window.addTargetToCurrentCourse=async function(){if(!m.currentCourse)return;const n=[...m.currentCourse.targets||[]];n.push({number:n.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await nt(ne(K,"courses",m.currentCourse.id),{targets:n}),m.currentCourse.targets=n,To(m.currentCourse),q(y("courses.targetAddedToast",{n:n.length}),"success")};window.deleteTargetFromCourse=function(n){var e;(e=m.currentCourse)!=null&&e.targets&&pr(y("courses.deleteTargetConfirm",{n:n+1}),async()=>{try{const t=[...m.currentCourse.targets];t.splice(n,1),t.forEach((r,s)=>r.number=s+1),await nt(ne(K,"courses",m.currentCourse.id),{targets:t,numTargets:t.length}),m.currentCourse.targets=t,m.currentCourse.numTargets=t.length,To(m.currentCourse)}catch{q(y("courses.deleteTargetError"),"error")}})};window.setTargetGps=async function(n){var e;if((e=m.currentCourse)!=null&&e.targets)try{const t=await yc();m.currentCourse.targets[n].gps=t,await nt(ne(K,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),To(m.currentCourse),q(y("courses.gpsSetToast",{n:n+1}),"success")}catch(t){q(y("courses.gpsErrorToast",{msg:t.message}),"error")}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await lv(t),s=Ay(Jy,`courses/${m.currentCourse.id}/target_${n}.jpg`);await Ey(s,r,"base64",{contentType:"image/jpeg"});const i=await by(s);m.currentCourse.targets[n].imageUrl=i,await nt(ne(K,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),To(m.currentCourse),q(y("courses.photoSavedToast"),"success")}catch(r){q(y("courses.uploadErrorToast",{msg:r.message}),"error")}};window.saveAllTargets=async function(){var n;(n=m.currentCourse)!=null&&n.targets&&(await nt(ne(K,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),q(y("courses.allTargetsSavedToast"),"success"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&m.courseMap&&setTimeout(()=>m.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await yc();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(m.courseMap),m.courseMap.panTo([e.lat,e.lng])}catch{q(y("courses.gpsUnavailableToast"),"error"),n.classList.remove("on")}};window.doDeleteCourse=function(){if(!m.currentCourse)return;const n=m.currentCourse.id,e=m.currentCourse.name;pr(y("courses.deleteCourseConfirm",{name:e}),async()=>{try{await Ht(ne(K,"courses",n)),m.courses=m.courses.filter(t=>t.id!==n),m.currentCourse=null,jt(),is(),window.populateCourseDropdown(),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"),q(y("courses.courseDeletedToast"),"success")}catch{q(y("courses.deleteCourseError"),"error")}})};const Ma={new:"new-course-approved",edit:"edit-capproved"};function vc(n){const e=m.approvedDraft[n];document.getElementById(`${Ma[n]}-chips`).innerHTML=e.length?e.map(t=>`<span class="approved-chip">${H(t)}<span class="approved-chip-remove" onclick="removeApprovedEmail('${n}','${H(t)}')">✕</span></span>`).join(""):`<span class="approved-empty">${y("courses.noApprovedYet")}</span>`}function cv(n,e){const t=e.trim().toLowerCase();!t||!t.includes("@")||(m.approvedDraft[n].includes(t)||m.approvedDraft[n].push(t),vc(n))}window.removeApprovedEmail=function(n,e){m.approvedDraft[n]=m.approvedDraft[n].filter(t=>t!==e),vc(n)};window.addApprovedEmailManual=function(n){const e=document.getElementById(`${Ma[n]}-manual`);cv(n,e.value),e.value=""};window.searchApprovedUsers=async function(n,e){const t=document.getElementById(`${Ma[n]}-ac`);if(!e.trim()){t.classList.add("hidden");return}let r=[];try{r=(await st(tt(K,"users"))).docs.map(i=>i.data()).map(i=>({name:i.name||i.yam||i.email||"—",email:(i.email||i["e-mail"]||"").toLowerCase()})).filter(i=>i.email&&(i.name.toLowerCase().includes(e.toLowerCase())||i.email.includes(e.toLowerCase())))}catch(s){console.warn(s)}if(!r.length){t.classList.add("hidden");return}t.innerHTML=r.map(s=>`<div class="ac-item" data-email="${H(s.email)}">${H(s.name)} <span style='font-size:11px;opacity:.6'>${H(s.email)}</span></div>`).join(""),t.querySelectorAll(".ac-item").forEach(s=>s.addEventListener("click",()=>{cv(n,s.dataset.email),document.getElementById(`${Ma[n]}-search`).value="",t.classList.add("hidden")})),t.classList.remove("hidden")};window.openCreateCourseModal=function(){m.approvedDraft.new=[],vc("new"),document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",document.getElementById("create-course-modal").classList.remove("hidden")};window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim().slice(0,100),e=document.getElementById("new-course-loc").value.trim().slice(0,100),t=document.getElementById("new-course-visibility").value,r=t!=="public",s=t==="hidden",i=s?[...m.approvedDraft.new]:[],o=document.getElementById("new-course-targets"),c=(o.value==="custom"?Number(document.getElementById("new-course-targets-custom").value):Number(o.value))||24;if(!n)return;const l=Array.from({length:c},(u,h)=>({number:h+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));try{const u=m.user.uid,h=await ry(tt(K,"courses"),{name:n,yam:n,numTargets:c,antalMål:c,location:e,beliggenhed:e,targets:l,mål:l,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i,ownerId:u,created:ke(),visits:[],besøg:[]});m.courses.unshift({id:h.id,name:n,numTargets:c,location:e,targets:l,visits:[],private:r,hidden:s,approvedUsers:i,ownerId:u}),jt(),is(),window.populateCourseDropdown(),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value="",document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",q(y("courses.courseCreatedToast"),"success")}catch{q(y("courses.createCourseError"),"error")}};async function od(n,e,t){const r=ne(K,"courses",n),s=await ar(r);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await nt(r,{targets:o,mål:o})}function lv(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,l=i.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const u=document.createElement("canvas");u.width=c,u.height=l,u.getContext("2d").drawImage(i,0,0,c,l),e(u.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},r.onerror=t,r.readAsDataURL(n)})}async function IP(n,e){const t=ne(K,"courses",n),r=await ar(t);if(!r.exists())return;const s=(r.data().visits||[]).filter(o=>o.roundId!==e);await nt(t,{visits:s});const i=m.courses.find(o=>o.id===n);i&&(i.visits=s)}let Ps=[];async function uv(){if(m.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{await ad()}catch(n){console.warn(n)}if(m.isSuperAdmin){document.getElementById("users-section").classList.remove("hidden");try{Ps=(await st(tt(K,"users"))).docs.map(e=>({uid:e.id,...e.data()})).sort((e,t)=>(e.name||e.yam||"").localeCompare(t.name||t.yam||"","da")),dv()}catch(n){console.warn(n)}}}}async function ad(){const n=document.getElementById("admins-list");if(!n)return;n.innerHTML=`<div class="admin-hint">${y("admin.loading")}</div>`;const e=await st(tt(K,"admins"));if(e.empty){n.innerHTML=`<div class="admin-hint">${y("admin.empty")}</div>`;return}n.innerHTML=`<div class="admin-list-label">${y("admin.currentAdminsTitle")}</div>`,e.docs.forEach(t=>{var o;const r=document.createElement("div");r.className="admin-row";const s=t.data().email||t.id,i=t.id===((o=m.user)==null?void 0:o.uid);if(r.innerHTML=`<span class="admin-row-email">${H(s)}${i?` <span class="admin-you-tag">${y("admin.youTag")}</span>`:""}</span>`,m.isSuperAdmin&&!i){const c=document.createElement("button");c.className="btn btn-dark btn-sm admin-remove-btn",c.textContent=y("admin.removeBtn"),c.onclick=()=>doRemoveAdmin(t.id,s),r.appendChild(c)}n.appendChild(r)})}const tl=[{key:"period7",ms:7*864e5},{key:"period30",ms:30*864e5},{key:"period365",ms:365*864e5}];window.loadUsageStats=async function(){const n=document.getElementById("usage-stats-result");if(n){n.textContent=y("admin.loadingStats");try{const e=await st(KA(K,"runder")),t=Date.now(),r=tl.map(()=>0);let s=0;e.forEach(o=>{var u,h;s++;const c=(h=(u=o.data().dato)==null?void 0:u.toDate)==null?void 0:h.call(u);if(!c)return;const l=t-c.getTime();tl.forEach((p,g)=>{l<=p.ms&&r[g]++})});const i=tl.map((o,c)=>`<div class="usage-stat-row"><span>${H(y("admin."+o.key))}</span><b>${r[c]}</b></div>`).join("");n.innerHTML=`${i}<div class="usage-stat-row usage-stat-total"><span>${y("admin.totalRegistered")}</span><b>${s}</b></div>`}catch(e){n.textContent=y("common.errorPrefix")+e.message}}};const zf={langbue:"langbue",trad:"trad",recurve:"recurve",compound:"compound",barbue:"barbue",buejæger:"buejaeger","trad-buejæger":"tradBuejaeger",rytterbue:"rytterbue"};function dv(n=""){const e=document.getElementById("users-list");e.innerHTML="";const t=n.toLowerCase(),r=t?Ps.filter(c=>(c.name||c.yam||"").toLowerCase().includes(t)||(c.email||c["e-mail"]||"").toLowerCase().includes(t)):Ps;document.getElementById("users-count").textContent=y("admin.usersCount",{n:Ps.length});const s=document.getElementById("users-summary"),i={};Ps.forEach(c=>{const l=c.bueklasse||y("common.unknown");i[l]=(i[l]||0)+1});const o=Object.entries(i).sort((c,l)=>l[1]-c[1]).map(([c,l])=>`<span class="bow-chip"><b>${l}</b> ${H(zf[c]?y("common.bowClassShort."+zf[c]):c)}</span>`).join("");s.innerHTML=`<div class="bow-chips-wrap">${o}</div>`,r.forEach(c=>{var _;const l=document.createElement("div");l.className="urow";const u=(_=c.created)!=null&&_.toDate?c.created.toDate().toLocaleDateString(gn()):"—",h=c.bueklasse||"",p=c.kon==="m"?"♂":c.kon==="k"?"♀":"",g=c.newsletterConsent?`<span class="unl" title="${y("admin.newsletterBadgeTitle")}">✉️</span>`:"";l.innerHTML=`<span class="un">${H(c.name||c.yam||"—")}${g}</span><span class="ue">${H(c.email||c["e-mail"]||"")}</span><span class="ubow">${H(h)}${p?` ${H(p)}`:""}</span><span class="ud">${H(u)}</span>`,e.appendChild(l)})}window.filterUsers=function(n){dv(n)};window.exportNewsletterList=function(){const n=Ps.filter(c=>c.newsletterConsent);if(!n.length){q(y("admin.noNewsletterSubscribers"),"error");return}const e=c=>`"${String(c||"").replace(/"/g,'""')}"`,r=[[y("admin.csvNameHeader"),y("admin.csvEmailHeader")],...n.map(c=>[c.name||c.yam||"",c.email||c["e-mail"]||""])].map(c=>c.map(e).join(",")).join(`\r
`),s=new Blob(["\uFEFF"+r],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.download="nyhedsbrev-tilmeldinger.csv",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i)};window.doAddAdmin=async function(){if(!m.isSuperAdmin)return;const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await st(tt(K,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){q(y("admin.userNotFound"),"error");return}await Pt(ne(K,"admins",t.id),{email:n,created:ke()}),q(y("admin.nowAdmin",{name:t.data().name||n}),"success"),document.getElementById("admin-email").value="",await ad()}catch(e){q(y("common.errorPrefix")+e.message,"error")}};window.doRemoveAdmin=async function(n,e){if(m.isSuperAdmin&&confirm(y("admin.removeConfirm",{email:e})))try{await Ht(ne(K,"admins",n)),q(y("admin.removedAdmin",{email:e}),"success"),await ad()}catch(t){q(y("common.errorPrefix")+t.message,"error")}};function TP(n,e,{start:t=0,peakAt:r=2.9,fadeAt:s=3.6,fadeDur:i=1.3}={}){const o=n.createDynamicsCompressor();o.threshold.value=-16,o.knee.value=6,o.ratio.value=8,o.attack.value=.003,o.release.value=.2;const c=n.createGain();c.gain.value=.95,c.connect(o),o.connect(e);const l=bP(n,2),u=t,h=u+r,p=u+s,g=p+i;{const _=nl(n,l),T=n.createBiquadFilter();T.type="bandpass",T.Q.value=1.2,T.frequency.setValueAtTime(150,u),T.frequency.exponentialRampToValueAtTime(2200,u+.7);const R=n.createGain();R.gain.setValueAtTime(0,u),R.gain.linearRampToValueAtTime(.9,u+.25),R.gain.exponentialRampToValueAtTime(.001,u+1.1),_.connect(T),T.connect(R),R.connect(c),_.start(u),_.stop(u+1.2)}{const _=nl(n,l),T=n.createBiquadFilter();T.type="lowpass",T.Q.value=.7,T.frequency.setValueAtTime(350,u),T.frequency.linearRampToValueAtTime(1800,h),T.frequency.linearRampToValueAtTime(500,g);const R=n.createGain();Hf(R.gain,u,h,p,g,.55);const C=n.createGain();C.gain.value=1;const L=n.createOscillator();L.frequency.value=6.5;const M=n.createGain();M.gain.value=.35,L.connect(M),M.connect(C.gain),_.connect(T),T.connect(C),C.connect(R),R.connect(c),_.start(u),_.stop(g+.1),L.start(u),L.stop(g+.1);const x=nl(n,l,.7),B=n.createBiquadFilter();B.type="lowpass",B.frequency.value=140,B.Q.value=1;const ee=n.createGain();Hf(ee.gain,u,h,p,g,1.4),x.connect(B),B.connect(ee),ee.connect(c),x.start(u),x.stop(g+.1)}{let _=u+.15;for(;_<g;){const T=Math.min(1,(_-u)/r),R=_>p?Math.max(0,1-(_-p)/i):1,C=n.createBufferSource();C.buffer=l;const L=n.createBiquadFilter();L.type="highpass",L.frequency.value=1200+Math.random()*3500;const M=n.createGain(),x=.004+Math.random()*.03,B=(.25+Math.random()*.75)*R*(.5+.5*T);M.gain.setValueAtTime(B,_),M.gain.exponentialRampToValueAtTime(5e-4,_+x),C.connect(L),L.connect(M),M.connect(c),C.start(_,Math.random()*1.5,x+.01),_+=-Math.log(1-Math.random())/(6+39*T)}}}function EP(n){var r;const e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t;try{t=new e}catch{return}try{(r=t.resume)==null||r.call(t)}catch{}TP(t,t.destination,{...n,start:t.currentTime+.03}),setTimeout(()=>{try{t.close()}catch{}},(((n==null?void 0:n.fadeAt)??3.6)+((n==null?void 0:n.fadeDur)??1.3)+1)*1e3)}function bP(n,e){const t=n.createBuffer(1,Math.round(n.sampleRate*e),n.sampleRate),r=t.getChannelData(0);for(let s=0;s<r.length;s++)r[s]=Math.random()*2-1;return t}function nl(n,e,t=1){const r=n.createBufferSource();return r.buffer=e,r.loop=!0,r.playbackRate.value=t,r}function Hf(n,e,t,r,s,i){n.setValueAtTime(1e-4,e),n.linearRampToValueAtTime(i*.35,e+.4),n.linearRampToValueAtTime(i,t),n.setValueAtTime(i,r),n.linearRampToValueAtTime(1e-4,s)}const zn=5;function AP(){const n=new Uint32Array(256),e=[[0,0,0,0,0],[.12,60,0,0,90],[.3,170,20,0,210],[.5,235,80,5,245],[.7,255,150,20,255],[.88,255,215,90,255],[1,255,250,220,255]];for(let t=0;t<256;t++){const r=t/255;let s=0;for(;s<e.length-2&&r>e[s+1][0];)s++;const i=e[s],o=e[s+1],c=(r-i[0])/(o[0]-i[0]),l=u=>Math.round(i[u]+(o[u]-i[u])*c);n[t]=(l(4)<<24|l(3)<<16|l(2)<<8|l(1))>>>0}return n}function SP(){const n=document.createElement("canvas");n.width=n.height=32;const e=n.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,240,180,1)"),t.addColorStop(.3,"rgba(255,160,40,0.8)"),t.addColorStop(1,"rgba(255,80,0,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),n}function RP(n,{shakeEl:e=null,onPeak:t=null}={}){return new Promise(r=>{var xe,Ln;const s=(xe=window.matchMedia)==null?void 0:xe.call(window,"(prefers-reduced-motion: reduce)").matches,i=s?1200:3600,o=s?400:1300,c=document.createElement("div");c.className="burn-ov";const l=document.createElement("div");l.className="burn-glow";const u=document.createElement("canvas");u.className="burn-canvas";const h=document.createElement("div");h.className="burn-flash",c.append(l,u,h),document.body.appendChild(c);try{EP({peakAt:i*.8/1e3,fadeAt:i/1e3,fadeDur:o/1e3})}catch(ae){console.warn(ae)}n==null||n.classList.add("burning"),s||e==null||e.classList.add("burn-shake");try{(Ln=navigator.vibrate)==null||Ln.call(navigator,[80,40,160,60,300,80,500])}catch{}const p=u.width=window.innerWidth,g=u.height=window.innerHeight,_=u.getContext("2d"),T=Math.ceil(p/zn),R=Math.ceil(g/zn)+2,C=new Uint8Array(T*R),L=document.createElement("canvas");L.width=T,L.height=R;const M=L.getContext("2d"),x=M.createImageData(T,R),B=new Uint32Array(x.data.buffer),ee=AP(),J=SP(),b=[],w=new Float32Array(T).fill(1);let E=0;const S=n==null?void 0:n.getBoundingClientRect(),A=S&&{x0:Math.max(0,S.left/zn|0),x1:Math.min(T-1,S.right/zn|0),y0:Math.max(0,S.top/zn|0),y1:Math.min(R-1,S.bottom/zn|0)},P=performance.now();let I=!1,ye=!1,Ue=P,qt=0,je=255;function ut(){if(!ye){if(ye=!0,!I){I=!0;try{t==null||t()}catch(ae){console.warn(ae)}}je=0,c.classList.add("out"),setTimeout(()=>{c.remove(),n==null||n.classList.remove("burning"),e==null||e.classList.remove("burn-shake"),r()},o)}}setTimeout(ut,i+500);function Ze(ae,qe){const At=(R-1)*T;for(let he=0;he<T;he++)C[At+he]=je?Math.max(0,je-(Math.random()*40|0)):0;if(A&&!ye&&qe>.1){const he=Math.min(255,(qe-.1)*900),Re=A.y1*T;for(let Le=A.x0;Le<=A.x1;Le++){const we=Math.max(0,he-(Math.random()*60|0));we>C[Re+Le]&&(C[Re+Le]=we)}}for(let he=0;he<T;he++){let Re=w[he]+(Math.random()-.5)*.18;w[he]=Re<.3?.3:Re>1.5?1.5:Re}for(let he=1;he<T-1;he++)w[he]=(w[he-1]+w[he]*2+w[he+1])*.25;if(!ye&&qe>.25&&Math.random()<.12+qe*.2){const he=Math.random()*T|0,Re=R*(.35+Math.random()*.6)|0,Le=3+(Math.random()*5|0);for(let we=-Le;we<=Le;we++)for(let Ve=-Le;Ve<=Le;Ve++){if(Ve*Ve+we*we>Le*Le)continue;const dt=he+Ve,Ie=Re+we;if(dt<0||dt>=T||Ie<0||Ie>=R)continue;const rt=Ie*T+dt;C[rt]=Math.max(C[rt],230+(Math.random()*25|0))}}const Qt=Math.abs(E),Yt=E<0?-1:1;for(let he=1;he<R;he++){const Re=he*T,Le=Re-T;for(let we=0;we<T;we++){const Ve=C[Re+we];if(!Ve){const at=Le+we;C[at]&&(C[at]=C[at]>8?C[at]-8:0);continue}const dt=Math.random();let Ie=we+((dt*3|0)-1);Math.random()<Qt&&(Ie+=Yt),Ie<0?Ie=0:Ie>=T&&(Ie=T-1);const rt=dt*ae*w[we]|0;C[Le+Ie]=Ve>rt?Ve-rt:0}}}function as(){for(let ae=0;ae<B.length;ae++)B[ae]=ee[C[ae]];M.putImageData(x,0,0),_.clearRect(0,0,p,g),_.imageSmoothingEnabled=!0,_.globalCompositeOperation="source-over",_.drawImage(L,0,0,T,R,0,0,T*zn,R*zn),_.globalCompositeOperation="lighter";for(const ae of b)_.globalAlpha=Math.max(0,1-ae.life/ae.max),_.drawImage(J,ae.x-ae.size/2,ae.y-ae.size/2,ae.size,ae.size);_.globalAlpha=1}function cs(ae){try{Gt(ae)}catch(qe){console.warn(qe),ut();return}c.isConnected&&requestAnimationFrame(cs)}function Gt(ae){var dt;ae=Math.max(ae,P,Ue);const qe=(ae-P)/i,At=Math.min(50,ae-Ue);if(Ue=ae,!I&&qe>=.8){I=!0,h.classList.add("on");try{(dt=navigator.vibrate)==null||dt.call(navigator,[250,60,500])}catch{}try{t==null||t()}catch(Ie){console.warn(Ie)}}qe>=1&&ut(),E=Math.sin(ae/380)*.45+Math.sin(ae/137)*.25;const Qt=Math.min(1,qe/.55),Yt=Qt*Qt*(3-2*Qt),he=300/R,Re=Math.max(he,40),Le=Re-(Re-he)*Yt;qt+=At;let we=0;for(;qt>=8&&we<6;)Ze(Le,qe),qt-=8,we++;if(we===6&&(qt=0),!ye&&qe<1)for(let Ie=0;Ie<4+qe*10;Ie++)b.push({x:Math.random()*p,y:g*(.3+Math.random()*.7),vx:(Math.random()-.5)*4+E*4,vy:-(5+Math.random()*12),life:0,max:40+Math.random()*60,size:3+Math.random()*7});const Ve=At/16.7;for(let Ie=b.length-1;Ie>=0;Ie--){const rt=b[Ie];rt.life+=Ve,rt.x+=rt.vx*Ve,rt.y+=rt.vy*Ve,rt.vx+=(Math.random()-.5)*.8*Ve,(rt.life>=rt.max||rt.y<-20)&&b.splice(Ie,1)}as()}requestAnimationFrame(cs)})}function hv(n,e,t){const r=nd(n.scores,e.ruleset),s=Et(n.scores),i=n.scores.flat().filter(l=>l!=null),o=i.length?(i.reduce((l,u)=>l+Te(u),0)/i.length).toFixed(2):"—";let c="";if(t>=2){const l=n.scores.map(g=>(g||[])[0]).filter(g=>g!=null),u=n.scores.map(g=>(g||[])[1]).filter(g=>g!=null),h=l.length?(l.reduce((g,_)=>g+Te(_),0)/l.length).toFixed(2):"—",p=u.length?(u.reduce((g,_)=>g+Te(_),0)/u.length).toFixed(2):"—";c=`<div class="dist-row"><span>${y("results.distArrow1")}</span><span>${h}</span></div><div class="dist-row"><span>${y("results.distArrow2")}</span><span>${p}</span></div>`}return`<div class="dist-name">${H(n.name)}</div><div class="dist-row dist-row-total"><span>${y("results.totalLabel")}</span><span>${s} pt</span></div>${c}<div class="dist-row dist-row-border"><span>${y("results.overallAvg")}</span><span>${o}</span></div>${Object.entries(r).map(([l,u])=>`<div class="dist-row"><span>${l}</span><span>${u}x</span></div>`).join("")}`}let Vi=null;function PP(n){Vi=n;const e=sn(n.ruleset);return'<div class="dist-grid">'+n.shooters.map((t,r)=>`<div class="dist-card" onclick="window.showDistCardEnlarged(${r})">${hv(t,n,e)}</div>`).join("")+"</div>"}window.showDistCardEnlarged=function(n){if(!Vi)return;const e=Vi.shooters[n];if(!e)return;const t=document.getElementById("dist-enlarge-body");t&&(t.innerHTML=hv(e,Vi,sn(Vi.ruleset)),document.getElementById("dist-enlarge-ov").classList.remove("hidden"))};function fv(n){const e=rd(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${H((e==null?void 0:e.name)||"—")}</div><div class="win-score">${e?Et(e.scores):0} ${y("results.pointWord")}</div>`,document.getElementById("res-table").innerHTML=mv(n),document.getElementById("res-dist").innerHTML=PP(n)}function mv(n){const e=(n.startTarget||1)-1,t=sn(n.ruleset),r=n.shooters.map(()=>0),s=n.shooters.map(()=>0);let i=`<div class="tbl-wrap"><table class="rtbl"><tr><th>${y("results.tableTargetHeader")}</th>${n.shooters.map(o=>`<th>${o.name}</th><th>${y("results.tableAvgHeader")}</th>`).join("")}</tr>`;for(let o=0;o<n.numTargets;o++)i+=`<tr><td class="tc">${o===e?'<span class="start-target-dot"></span>':""}${o+1}</td>`,n.shooters.forEach((l,u)=>{const h=l.scores[o]||Array(t).fill(null),p=h.reduce((_,T)=>_+(T!=null&&T!=="M"?Number(T):0),0);h.forEach(_=>{_!=null&&(r[u]+=Te(_),s[u]++)});const g=s[u]?(r[u]/s[u]).toFixed(2):"—";i+=`<td>${h.map(_=>_??"—").join("/")}<br><small>${p}</small></td><td class="tc-avg">${g}</td>`}),i+="</tr>";return i+=`<tr class="tr-tot"><td class="tc">${y("results.totalLabel")}</td>${n.shooters.map(o=>`<td colspan="2">${Et(o.scores)}</td>`).join("")}</tr></table></div>`,i}function CP(n){const e=lr(n.ruleset),t=sn(n.ruleset);return n.shooters.map(r=>{const s=Et(r.scores),i=r.scores.flat().filter(h=>h!=null),o=i.length,c=o?(i.reduce((h,p)=>h+Te(p),0)/o).toFixed(2):"—",l=nd(r.scores,n.ruleset);let u="";if(t>=2){const h=r.scores.map(T=>(T||[])[0]).filter(T=>T!=null),p=r.scores.map(T=>(T||[])[1]).filter(T=>T!=null),g=h.length?(h.reduce((T,R)=>T+Te(R),0)/h.length).toFixed(2):"—",_=p.length?(p.reduce((T,R)=>T+Te(R),0)/p.length).toFixed(2):"—";u=`<div class="summary-stats-row2">
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${g}</div>
          <div class="summary-stat-lbl">${y("results.summaryArrow1")}</div>
        </div>
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${_}</div>
          <div class="summary-stat-lbl">${y("results.summaryArrow2")}</div>
        </div>
      </div>`}return`<div class="summary-card">
      <div class="summary-card-name">${H(r.name)}</div>
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
    </div>`}).join("")}function kP(n){const e=sn(n.ruleset),t=n.shooters.map(s=>{const i=s.scores.filter(p=>{const g=p||Array(e).fill(null);return g.length>=e&&g.slice(0,e).every(_=>_!==null)});if(!i.length||i.length===n.numTargets)return null;const o=i.flat().filter(p=>p!==null),c=o.reduce((p,g)=>p+Te(g),0),l=o.length,u=l?(c/l).toFixed(2):0,h=i.length?(c/i.length).toFixed(1):0;return{name:s.name,shot:i.length,total:c,avgPil:u,avgMaal:h}}).filter(Boolean);if(!t.length)return"";const r=t.map(s=>`<div class="actual-card"><div class="actual-card-name">${s.name}</div><div class="actual-card-sub">${y("results.actualSub",{shot:s.shot,total:n.numTargets})}</div><div class="actual-card-total">${s.total}</div><div class="actual-card-total-lbl">${y("results.summaryPoints")}</div><div class="actual-card-avgs"><div><div class="actual-avg-val">${s.avgPil}</div><div class="actual-avg-lbl">${y("results.actualAvgPerArrow")}</div></div><div><div class="actual-avg-val">${s.avgMaal}</div><div class="actual-avg-lbl">${y("results.actualAvgPerTarget")}</div></div></div></div>`).join("");return`<div class="actual-results-wrap"><div class="actual-results-title">${y("results.actualTitle")}</div><div class="actual-results-cards">${r}</div></div>`}function pv(n){m.rounds=m.rounds.filter(e=>e.id!==n.id),jt(),Ws(),m.user&&Ht(ne(K,"users",m.user.uid,"rounds",n.id)).catch(e=>console.warn(e)),m.user&&n.courseId&&Ht(ne(K,"bane_stats",n.courseId,"runder",n.id)).catch(e=>console.warn(e)),n.courseId&&IP(n.courseId,n.id).catch(e=>console.warn(e))}function Ws(){const n=document.getElementById("rounds-list");if(!m.rounds.length){n.innerHTML=`<div class="empty"><div class="empty-icon">📊</div>${y("results.empty")}</div>`;return}n.innerHTML="",m.rounds.forEach(e=>{const t=(e.shooters||[]).map(l=>({...l,scores:Jr(l.scores)})),r=t.length?rd(t):null,s=e.created,i=s!=null&&s.toDate?s.toDate().toLocaleDateString(gn()):s!=null&&s.seconds?new Date(s.seconds*1e3).toLocaleDateString(gn()):typeof s=="number"?new Date(s).toLocaleDateString(gn()):"—",o=document.createElement("div");o.className="rcard";const c=e.ruleset&&e.ruleset!=="WA"?` · <span class="rcard-ruleset-tag">${H(e.ruleset)}</span>`:"";o.innerHTML=`<div class="rcard-info"><div class="rcard-name">${H(e.name||y("results.roundFallback"))}</div><div class="rcard-meta"><span class="rcard-date">${H(i)}</span> · ${H(e.courseName||y("results.targetsUnit",{n:e.numTargets}))}${c}</div><div class="rcard-win">🏆 ${H((r==null?void 0:r.name)||"—")} (${r?Et(r.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser">📈</button><button class="del-btn" data-id="${H(e.id)}">✕</button>`,o.querySelector(".rcard-info").onclick=()=>_c({...e,shooters:t}),o.querySelector(".rcard-analyse").onclick=()=>window.analyseRound(e.id),o.querySelector(".del-btn").onclick=l=>{const u=l.currentTarget,h=`r-${e.id}`;m.deleteConfirm[h]?(delete m.deleteConfirm[h],pv(e)):(m.deleteConfirm[h]=!0,u.classList.add("conf"),u.textContent=y("results.deleteConfirm"),setTimeout(()=>{delete m.deleteConfirm[h],u.classList.remove("conf"),u.textContent="✕"},3e3))},n.appendChild(o)})}function _c(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),m.rpopMap&&(m.rpopMap.remove(),m.rpopMap=null);const t=n.gpsRoute||n.route||null,r=n.gpsDuration||n.duration||null,s=n.gpsDistance||n.distance||null,i=r?iv(r):null,o=s?ov(s):null,c=o||i?`<div class="rpop-gps-row">${o?`<div class="rpop-gps-box"><div class="rpop-gps-val">${o}</div><div class="rpop-gps-lbl">${y("results.popupDistance")}</div></div>`:""}${i?`<div class="rpop-gps-box"><div class="rpop-gps-val">${i}</div><div class="rpop-gps-lbl">${y("results.popupTime")}</div></div>`:""}</div>${t?'<div id="rpop-map"></div>':""}`:"",l=!!n.id&&m.rounds.some(u=>u.id===n.id);if(document.getElementById("rpop-body").innerHTML=`<h3 class="rpop-title">${H(n.name)}</h3>${c}`+CP(n)+mv(n)+kP(n)+`<div class="rpop-actions"><button class="btn btn-gold rpop-send-btn" onclick="window.sendResults(window._lastRound)">${y("results.sendResultsBtn")}</button>${l?`<button class="btn btn-red rpop-burn-btn" onclick="window.burnRound(this)">${y("results.burnBtn")}</button>`:""}</div>`,t){const u=sv(t);u.length&&setTimeout(()=>{const h=document.getElementById("rpop-map");if(!h)return;m.rpopMap=window.L.map(h),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(m.rpopMap);const p=window.L.polyline(u.map(g=>[g.lat,g.lng]),{color:"#e8a020",weight:3}).addTo(m.rpopMap);m.rpopMap.fitBounds(p.getBounds(),{padding:[20,20]})},50)}}window.burnRound=function(n){const e=window._lastRound,t=(e==null?void 0:e.id)&&m.rounds.find(s=>s.id===e.id);if(!t||n.disabled)return;if(!n.classList.contains("conf")){n.classList.add("conf"),n.textContent=y("results.burnConfirm"),clearTimeout(n._burnT),n._burnT=setTimeout(()=>{n.classList.remove("conf"),n.textContent=y("results.burnBtn")},3e3);return}clearTimeout(n._burnT),n.disabled=!0;const r=document.getElementById("round-popup");RP(r==null?void 0:r.querySelector(".rpop-box"),{shakeEl:r,onPeak:()=>{r==null||r.classList.add("hidden"),pv(t)}}).then(()=>q(y("results.burned")))};window.sendResults=async function(n){if(!n){q(y("results.noRoundToSend"),"error");return}const e=new Date().toLocaleDateString(gn());let t=y("email.header")+`
`;t+=y("email.dateLabel")+e+`
`,n.courseName&&(t+=y("email.courseLabel")+n.courseName+`
`),t+=`
`+y("email.resultsHeader")+`
`,[...n.shooters].sort((l,u)=>Et(u.scores)-Et(l.scores)).forEach((l,u)=>{t+=`
`+(u+1)+". "+l.name+": "+Et(l.scores)+y("email.pointWord")}),t+=`

`+y("email.detailHeader")+`
`;const s=sn(n.ruleset);n.shooters.forEach(l=>{t+=`
`+l.name+`:
`;for(let g=0;g<n.numTargets;g++){const _=l.scores[g]||Array(s).fill(null),T=_.reduce((R,C)=>R+(C!=null&&C!=="M"?Number(C):0),0);t+=y("email.targetLabel")+(g+1)+": "+_.map(R=>R??"-").join("+")+" = "+T+`
`}const u=l.scores.flat().filter(g=>g!=null),h=u.length?(u.reduce((g,_)=>g+Te(_),0)/u.length).toFixed(2):"—",p=nd(l.scores,n.ruleset);if(t+=y("email.totalLabel")+Et(l.scores)+y("email.pointWord")+`
`,s>=2){const g=l.scores.map(C=>(C||[])[0]).filter(C=>C!=null),_=l.scores.map(C=>(C||[])[1]).filter(C=>C!=null),T=g.length?(g.reduce((C,L)=>C+Te(L),0)/g.length).toFixed(2):"—",R=_.length?(_.reduce((C,L)=>C+Te(L),0)/_.length).toFixed(2):"—";t+="  "+y("email.arrow1Label")+": "+T+" | "+y("email.arrow2Label")+": "+R+" | "+y("email.overallAvgLabel")+": "+h+`
`}else t+="  "+y("email.overallAvgLabel")+": "+h+`
`;t+=y("email.distributionLabel")+Object.entries(p).map(([g,_])=>g+":"+_+"x").join("  ")+`
`}),n.id&&(t+=`

${y("email.seeInApp")}
https://bsk65.github.io/3D/?round=${n.id}
${y("email.loginRequired")}`);const i=n.shooters.map(l=>{var u;return(u=m.friends.find(h=>h.id===l.id))==null?void 0:u.email}).filter(Boolean),o=y("email.subjectPrefix")+n.name,c="mailto:"+i.join(",")+"?subject="+encodeURIComponent(o)+"&body="+encodeURIComponent(t);window.location.href=c};const gv="archery_meetups_seen",Wf={afventer:"statusPending",tilmeldt:"statusAccepted",foreslået:"statusProposing",afvist:"statusDeclined"};function rl(n){if(!n)return"";const[e,t,r]=n.split("-");return e&&t&&r?`${r}-${t}-${e}`:n}let pt=new Map,Eo="venner",Oi=null,yv=null,cd=null,vv=null;async function ld(){if(m.user)try{const n=[st(zs(tt(K,"meetups"),Vr("creatorUid","==",m.user.uid))),st(zs(tt(K,"meetups"),Vr("invitedUids","array-contains",m.user.uid)))];m.isSuperAdmin&&n.push(st(tt(K,"meetups")));const e=await Promise.all(n),t=new Map;e.forEach(r=>r.docs.forEach(s=>t.set(s.id,{id:s.id,...s.data()}))),m.meetups=[...t.values()].sort((r,s)=>`${r.date}${r.time}`.localeCompare(`${s.date}${s.time}`))}catch(n){console.warn("Hent meetups:",n)}}function DP(n,e){return n.filter(t=>{var s,i;return(((i=(s=t.updatedAt)==null?void 0:s.toMillis)==null?void 0:i.call(s))??(typeof t.updatedAt=="number"?t.updatedAt:0))>e}).length}function bo(){const n=document.getElementById("meetup-badge");if(!n)return;const e=Number(localStorage.getItem(gv)||0),t=DP(m.meetups,e);n.classList.toggle("hidden",t===0),n.textContent=t}function NP(){localStorage.setItem(gv,String(Date.now())),bo()}function Wt(){const n=document.getElementById("meetups-list");if(!n)return;const e=new Date().toISOString().slice(0,10),t=m.meetups.filter(r=>r.date>=e);if(!t.length){n.innerHTML=`<div class="empty"><div class="empty-icon">🏹</div>${y("meetups.empty")}</div>`;return}n.innerHTML="",t.forEach(r=>n.appendChild(xP(r)))}function xP(n){var u;const e=document.createElement("div");e.className="meetup-card"+(n.status==="aflyst"?" meetup-cancelled":"");const t=n.creatorUid===((u=m.user)==null?void 0:u.uid),r=(n.participants||[]).find(h=>{var p;return h.uid===((p=m.user)==null?void 0:p.uid)}),s=m.isSuperAdmin&&!t&&!r,i=(n.participants||[]).map(h=>{const p=h.status==="foreslået"&&h.proposedDate?` → ${H(rl(h.proposedDate))} ${H(h.proposedTime||"")}`:"";return`<div class="meetup-partrow"><span>${H(h.name)}</span><span class="meetup-status meetup-status-${H(h.status)}">${H(Wf[h.status]?y("meetups."+Wf[h.status]):h.status)}${p}</span></div>`}).join(""),o=(n.comments||[]).map(h=>`<div class="meetup-comment"><b>${H(h.name)}:</b> ${H(h.text)}</div>`).join("");let c="";n.status!=="aflyst"&&(r&&(r.status!=="tilmeldt"&&(c+=`<button class="btn btn-gold btn-sm" onclick="joinMeetup('${n.id}')">${y("meetups.joinBtn")}</button>`),c+=`<button class="btn btn-dark btn-sm" onclick="openProposeTimeModal('${n.id}')">${y("meetups.proposeOtherBtn")}</button>`,r.status!=="afvist"&&(c+=`<button class="btn btn-dark btn-sm" onclick="declineMeetup('${n.id}')">${y("meetups.declineBtn")}</button>`)),t&&((n.participants||[]).filter(h=>h.status==="foreslået"&&h.proposedDate).forEach(h=>{c+=`<button class="btn btn-gold btn-sm" onclick="acceptProposedTime('${n.id}','${h.uid}')">${y("meetups.acceptProposalBtn",{date:H(rl(h.proposedDate)),time:H(h.proposedTime||""),name:H(h.name)})}</button>`}),c+=`<button class="btn btn-dark btn-sm" onclick="openEditMeetupModal('${n.id}')">${y("meetups.editTimeBtn")}</button>`,c+=`<button class="btn btn-dark btn-sm" onclick="cancelMeetup('${n.id}')">${y("meetups.cancelMeetupBtn")}</button>`,c+=`<button class="btn btn-red btn-sm" onclick="deleteMeetup('${n.id}')">${y("meetups.deleteBtn")}</button>`)),e.innerHTML=`
    ${n.status==="aflyst"?`<div class="meetup-cancelled-banner">${y("meetups.cancelledBanner")}</div>`:""}
    ${s?`<div class="meetup-notinvited-banner">${y("meetups.notInvitedBanner")}</div>`:""}
    <div class="meetup-head">
      <div class="meetup-title">${H(n.courseName)}</div>
      <div class="meetup-when">${y("meetups.dateTimeLine",{date:H(rl(n.date)),time:H(n.time)})}</div>
      <div class="meetup-creator">${y("meetups.createdBy",{name:H(n.creatorName)})}</div>
    </div>
    <div class="meetup-participants">${i}</div>
    <div class="meetup-actions">${c}</div>
    <div class="meetup-comments">${o}</div>
    <div class="meetup-comment-add">
      <input type="text" placeholder="${y("meetups.commentPlaceholder")}" class="meetup-comment-input" maxlength="300" />
      <button class="btn btn-dark btn-sm meetup-comment-send">${y("meetups.sendBtn")}</button>
    </div>
  `;const l=e.querySelector(".meetup-comment-input");return e.querySelector(".meetup-comment-send").addEventListener("click",()=>{VP(n.id,l.value),l.value=""}),e}window.openMeetupModal=function(){if(!m.courses.length){q(y("meetups.noCoursesToast"),"error");return}pt=new Map,Eo="venner",Oi=null,cd=null,document.getElementById("mu-course-display").value="",document.getElementById("mu-course-list").classList.add("hidden"),LP(),document.getElementById("mu-date").value="",document.getElementById("mu-time").value="",document.getElementById("mu-comment").value="",document.querySelectorAll(".mu-pool-tab").forEach(n=>n.classList.toggle("active",n.dataset.pool==="venner")),Ao(),wc(),document.getElementById("meetup-modal").classList.remove("hidden")};window.toggleMeetupCourseList=function(){document.getElementById("mu-course-list").classList.toggle("hidden")};function LP(){const n=document.getElementById("mu-course-list");n.innerHTML="",m.courses.forEach(e=>{const t=document.createElement("div");t.className="ac-item",t.textContent=e.name||e.yam||"",t.addEventListener("click",()=>{cd=e.id,document.getElementById("mu-course-display").value=e.name||e.yam||"",n.classList.add("hidden")}),n.appendChild(t)})}window.toggleMeetupPool=function(n){Eo=n,document.querySelectorAll(".mu-pool-tab").forEach(e=>e.classList.toggle("active",e.dataset.pool===n)),Ao()};async function $l(){if(!Oi)try{Oi=(await st(tt(K,"users"))).docs.map(e=>({uid:e.id,name:e.data().name||e.data().yam||e.data().email||"—"}))}catch(n){console.warn(n),Oi=[]}return Oi}async function _v(){if(Eo==="venner"){const e=new Set((await $l()).map(t=>t.uid));return m.friends.map(t=>({uid:t.id,name:t.name,registered:e.has(t.id)})).sort((t,r)=>t.name.localeCompare(r.name,"da"))}return(await $l()).filter(e=>{var t;return e.uid!==((t=m.user)==null?void 0:t.uid)}).map(e=>({...e,registered:!0})).sort((e,t)=>e.name.localeCompare(t.name,"da"))}async function Ao(){const n=document.getElementById("mu-invitee-list");if(!n)return;const e=await _v();if(n.innerHTML="",!e.length){n.innerHTML=`<div class="empty"><div class="empty-icon">👤</div>${y(Eo==="venner"?"meetups.noFriendsYet":"meetups.noOtherUsers")}</div>`;return}e.forEach(t=>{const r=document.createElement("label");r.className="mu-invitee-row"+(t.registered===!1?" mu-invitee-unregistered":"");const s=document.createElement("input");s.type="checkbox",s.checked=pt.has(t.uid);const i=document.createElement("span");if(i.textContent=t.name,r.appendChild(s),r.appendChild(i),t.registered===!1){s.disabled=!0;const o=document.createElement("span");o.className="mu-invitee-note",o.textContent=y("meetups.notRegisteredNote"),r.appendChild(o)}else s.addEventListener("change",()=>wv(t.uid,t.name));n.appendChild(r)})}function wv(n,e){pt.has(n)?pt.delete(n):pt.set(n,{uid:n,name:e}),wc(),Ao()}window.toggleSelectAllMeetup=async function(){const n=(await _v()).filter(t=>t.registered!==!1);if(!n.length)return;n.every(t=>pt.has(t.uid))?n.forEach(t=>pt.delete(t.uid)):n.forEach(t=>pt.set(t.uid,t)),wc(),Ao()};function wc(){const n=document.getElementById("mu-selected-chips");if(n){if(n.innerHTML="",!pt.size){n.innerHTML=`<div class="mu-chips-empty">${y("meetups.noRecipientsSelected")}</div>`;return}[...pt.values()].forEach(e=>{const t=document.createElement("div");t.className="pchip";const r=document.createElement("span");r.className="pchip-name",r.textContent=e.name;const s=document.createElement("button");s.className="pchip-rm",s.textContent="✕",s.addEventListener("click",()=>wv(e.uid,e.name)),t.appendChild(r),t.appendChild(s),n.appendChild(t)})}}window.saveMeetup=async function(){var p,g;const n=m.courses.find(_=>_.id===cd),e=document.getElementById("mu-date").value,t=document.getElementById("mu-time").value;if(!n){q(y("meetups.selectCourseToast"),"error");return}if(!e||!t){q(y("meetups.selectDateTimeToast"),"error");return}if(!pt.size){q(y("meetups.selectRecipientToast"),"error");return}const r=new Set((await $l()).map(_=>_.uid)),s=[...pt.values()].filter(_=>!r.has(_.uid)).map(_=>_.name);if(s.length&&(s.forEach(_=>{const T=[...pt.entries()].find(([,R])=>R.name===_);T&&pt.delete(T[0])}),q(y("meetups.invalidNamesToast",{names:s.join(", ")}),"error"),wc(),Ao(),!pt.size))return;const i=document.getElementById("mu-comment").value.trim().slice(0,300),o=[...pt.keys()],c=[...pt.values()].map(_=>({uid:_.uid,name:_.name,status:"afventer",proposedDate:null,proposedTime:null})),l=i?[{uid:m.user.uid,name:((p=m.profile)==null?void 0:p.name)||"—",text:i,createdAt:new Date}]:[],u=new Date(`${e}T${t}`);u.setDate(u.getDate()+1);const h={courseId:n.id,courseName:n.name||n.yam||"",date:e,time:t,creatorUid:m.user.uid,creatorName:((g=m.profile)==null?void 0:g.name)||"—",pool:Eo,invitedUids:o,participants:c,comments:l,status:"åben",createdAt:ke(),updatedAt:ke(),expireAt:u};try{await ry(tt(K,"meetups"),h),document.getElementById("meetup-modal").classList.add("hidden"),q(y("meetups.proposalSentToast"),"success"),await ld(),Wt(),bo()}catch(_){q(y("common.errorPrefix")+_.message,"error")}};async function Iv(n,e){const t=m.meetups.find(s=>s.id===n);if(!t||!m.user)return;const r=(t.participants||[]).map(s=>s.uid===m.user.uid?{...s,status:e,proposedDate:null,proposedTime:null}:s);try{await nt(ne(K,"meetups",t.id),{participants:r,updatedAt:ke()}),t.participants=r,t.updatedAt=Date.now(),Wt()}catch(s){q(y("common.errorPrefix")+s.message,"error")}}window.joinMeetup=function(n){Iv(n,"tilmeldt")};window.declineMeetup=function(n){Iv(n,"afvist")};window.openProposeTimeModal=function(n){yv=n,document.getElementById("mu-propose-date").value="",document.getElementById("mu-propose-time").value="",document.getElementById("meetup-propose-modal").classList.remove("hidden")};window.saveProposeTime=async function(){const n=document.getElementById("mu-propose-date").value,e=document.getElementById("mu-propose-time").value;if(!n||!e){q(y("meetups.selectDateTimeToast"),"error");return}const t=m.meetups.find(s=>s.id===yv);if(!t||!m.user)return;const r=(t.participants||[]).map(s=>s.uid===m.user.uid?{...s,status:"foreslået",proposedDate:n,proposedTime:e}:s);try{await nt(ne(K,"meetups",t.id),{participants:r,updatedAt:ke()}),t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-propose-modal").classList.add("hidden"),Wt()}catch(s){q(y("common.errorPrefix")+s.message,"error")}};window.acceptProposedTime=async function(n,e){var c;const t=m.meetups.find(l=>l.id===n);if(!t||t.creatorUid!==((c=m.user)==null?void 0:c.uid))return;const r=(t.participants||[]).find(l=>l.uid===e);if(!(r!=null&&r.proposedDate)||!(r!=null&&r.proposedTime))return;const s=r.proposedDate,i=r.proposedTime,o=t.participants.map(l=>l.uid===e?{...l,status:"tilmeldt",proposedDate:null,proposedTime:null}:{...l,status:"afventer",proposedDate:null,proposedTime:null});try{await nt(ne(K,"meetups",t.id),{date:s,time:i,participants:o,updatedAt:ke()}),t.date=s,t.time=i,t.participants=o,t.updatedAt=Date.now(),Wt(),q(y("meetups.newTimeAcceptedToast"),"success")}catch(l){q(y("common.errorPrefix")+l.message,"error")}};window.openEditMeetupModal=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||(vv=n,document.getElementById("mu-edit-date").value=e.date,document.getElementById("mu-edit-time").value=e.time,document.getElementById("meetup-edit-modal").classList.remove("hidden"))};window.saveEditMeetup=async function(){var s;const n=document.getElementById("mu-edit-date").value,e=document.getElementById("mu-edit-time").value;if(!n||!e){q(y("meetups.selectDateTimeToast"),"error");return}const t=m.meetups.find(i=>i.id===vv);if(!t||t.creatorUid!==((s=m.user)==null?void 0:s.uid))return;const r=(t.participants||[]).map(i=>({...i,status:"afventer",proposedDate:null,proposedTime:null}));try{await nt(ne(K,"meetups",t.id),{date:n,time:e,participants:r,updatedAt:ke()}),t.date=n,t.time=e,t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-edit-modal").classList.add("hidden"),Wt(),q(y("meetups.timeUpdatedToast"),"success")}catch(i){q(y("common.errorPrefix")+i.message,"error")}};window.cancelMeetup=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||pr(y("meetups.cancelConfirm"),async()=>{try{await nt(ne(K,"meetups",e.id),{status:"aflyst",updatedAt:ke()}),e.status="aflyst",e.updatedAt=Date.now(),Wt()}catch(r){q(y("common.errorPrefix")+r.message,"error")}})};window.deleteMeetup=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||pr(y("meetups.deleteConfirm"),async()=>{try{await Ht(ne(K,"meetups",e.id)),m.meetups=m.meetups.filter(r=>r.id!==n),Wt(),bo()}catch(r){q(y("common.errorPrefix")+r.message,"error")}})};async function VP(n,e){var i;if(e=(e||"").trim().slice(0,300),!e||!m.user)return;const t=m.meetups.find(o=>o.id===n);if(!t)return;const r={uid:m.user.uid,name:((i=m.profile)==null?void 0:i.name)||"—",text:e,createdAt:new Date},s=[...t.comments||[],r];try{await nt(ne(K,"meetups",t.id),{comments:s,updatedAt:ke()}),t.comments=s,t.updatedAt=Date.now(),Wt()}catch(o){q(y("common.errorPrefix")+o.message,"error")}}const Tv="archery_share_requests_seen";function OP(n,e){return`${n}_${e}`}async function Ev(){if(m.user)try{const[n,e]=await Promise.all([st(zs(tt(K,"shareRequests"),Vr("ownerUid","==",m.user.uid))),st(zs(tt(K,"shareRequests"),Vr("viewerUid","==",m.user.uid)))]),t=new Map;n.docs.forEach(r=>t.set(r.id,{id:r.id,...r.data()})),e.docs.forEach(r=>t.set(r.id,{id:r.id,...r.data()})),m.shareRequests=[...t.values()]}catch(n){console.warn("Hent delingsanmodninger:",n)}}function MP(n,e,t){return n.filter(r=>{var i,o;return r.ownerUid!==e||r.status!=="afventer"?!1:(((o=(i=r.createdAt)==null?void 0:i.toMillis)==null?void 0:o.call(i))??(typeof r.createdAt=="number"?r.createdAt:0))>t}).length}function Ic(){var r;const n=document.getElementById("share-badge");if(!n)return;const e=Number(localStorage.getItem(Tv)||0),t=MP(m.shareRequests,(r=m.user)==null?void 0:r.uid,e);n.classList.toggle("hidden",t===0),n.textContent=t}function BP(){localStorage.setItem(Tv,String(Date.now())),Ic()}function bv(){return m.user?m.shareRequests.filter(n=>n.viewerUid===m.user.uid&&n.status==="accepteret").map(n=>({uid:n.ownerUid,name:n.ownerName})).sort((n,e)=>n.name.localeCompare(e.name,"da")):[]}async function Av(n){var e,t,r;try{const s=m.shareRequests.find(p=>{var g;return p.ownerUid===n&&p.viewerUid===((g=m.user)==null?void 0:g.uid)&&p.status==="accepteret"}),i=((t=(e=(s==null?void 0:s.acceptedAt)||(s==null?void 0:s.updatedAt))==null?void 0:e.toMillis)==null?void 0:t.call(e))??0,l=(((r=(await ar(ne(K,"users",n))).data())==null?void 0:r.roundIndex)||[]).filter(p=>(p.completed||0)>i).map(p=>p.id),h=(await Promise.all(l.map(p=>ar(ne(K,"users",n,"rounds",p)).catch(()=>null)))).filter(p=>p==null?void 0:p.exists()).map(p=>({...p.data(),id:p.id})).sort((p,g)=>{var R,C;const _=p.completed||p.created||0,T=g.completed||g.created||0;return(typeof T=="number"?T:((R=T.toMillis)==null?void 0:R.call(T))??0)-(typeof _=="number"?_:((C=_.toMillis)==null?void 0:C.call(_))??0)});return m.viewedRounds[n]=h,h}catch(s){return console.warn("Hent delte runder:",s),m.viewedRounds[n]=[],[]}}function gr(){var o;const n=document.getElementById("sharing-list");if(!n)return;const e=(o=m.user)==null?void 0:o.uid,t=m.shareRequests.filter(c=>c.ownerUid===e&&c.status==="afventer"),r=m.shareRequests.filter(c=>c.ownerUid===e&&c.status==="accepteret"),s=m.shareRequests.filter(c=>c.viewerUid===e&&c.status==="accepteret");if(!t.length&&!r.length&&!s.length){n.innerHTML=`<div class="share-empty">${y("sharing.emptyState")}</div>`;return}let i="";t.length&&(i+=`<div class="share-group-title">${y("sharing.incomingRequestsTitle")}</div>`,t.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${H(c.viewerName)}</div>
        <div class="share-actions">
          <button class="btn btn-gold btn-sm" onclick="acceptShareRequest('${c.id}')">${y("sharing.acceptBtn")}</button>
          <button class="btn btn-dark btn-sm" onclick="declineShareRequest('${c.id}')">${y("sharing.rejectBtn")}</button>
        </div>
      </div>`})),r.length&&(i+=`<div class="share-group-title">${y("sharing.sharingWithTitle")}</div>`,r.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${H(c.viewerName)}</div>
        <div class="share-actions">
          <button class="btn btn-red btn-sm" onclick="endSharing('${c.id}')">${y("sharing.stopSharingBtn")}</button>
        </div>
      </div>`})),s.length&&(i+=`<div class="share-group-title">${y("sharing.viewableTitle")}</div>`,s.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${H(c.ownerName)}</div>
        <div class="share-actions">
          <button class="btn btn-dark btn-sm" onclick="window.switchTab('analyse');window.setAnalyseViewer('${c.ownerUid}')">${y("sharing.viewInAnalyseBtn")}</button>
        </div>
      </div>`})),n.innerHTML=i}window.requestViewAccess=async function(n,e){var t,r;if(m.user){if(n===m.user.uid){q(y("sharing.ownRequestError"),"error");return}try{let s=(await ar(ne(K,"users",n))).exists();if(!s){const i=m.friends.find(o=>o.id===n);if(i!=null&&i.email){const c=(await st(tt(K,"users"))).docs.find(l=>{const u=l.data(),h=(u.email||u["e-mail"]||"").toLowerCase();return h&&h===i.email.toLowerCase()});c&&(n=c.id,s=!0,i.id=n,jt(),Pt(ne(K,"users",m.user.uid,"friends",n),i).catch(l=>console.warn(l)))}}if(!s){q(y("sharing.notRegisteredError",{name:e}),"error");return}await Pt(ne(K,"shareRequests",OP(n,m.user.uid)),{ownerUid:n,ownerName:e,viewerUid:m.user.uid,viewerName:((t=m.profile)==null?void 0:t.name)||"—",status:"afventer",createdAt:ke(),updatedAt:ke()}),q(y("sharing.requestSentToast"),"success"),await Ev(),gr(),(r=window.renderFriendsList)==null||r.call(window)}catch(s){q(y("common.errorPrefix")+s.message,"error")}}};window.cancelShareRequest=async function(n){var e;try{await Ht(ne(K,"shareRequests",n)),m.shareRequests=m.shareRequests.filter(t=>t.id!==n),gr(),(e=window.renderFriendsList)==null||e.call(window)}catch(t){q(y("common.errorPrefix")+t.message,"error")}};window.acceptShareRequest=async function(n){try{await nt(ne(K,"shareRequests",n),{status:"accepteret",acceptedAt:ke(),updatedAt:ke()});const e=m.shareRequests.find(t=>t.id===n);e&&(e.status="accepteret"),gr(),Ic(),q(y("sharing.acceptedToast"),"success")}catch(e){q(y("common.errorPrefix")+e.message,"error")}};window.declineShareRequest=function(n){pr(y("sharing.rejectConfirm"),async()=>{try{await nt(ne(K,"shareRequests",n),{status:"afvist",updatedAt:ke()});const e=m.shareRequests.find(t=>t.id===n);e&&(e.status="afvist"),gr(),Ic()}catch(e){q(y("common.errorPrefix")+e.message,"error")}})};window.endSharing=function(n){pr(y("sharing.stopConfirm"),async()=>{try{await Ht(ne(K,"shareRequests",n)),m.shareRequests=m.shareRequests.filter(e=>e.id!==n),gr(),q(y("sharing.stoppedToast"),"success")}catch(e){q(y("common.errorPrefix")+e.message,"error")}})};const FP="BOJHqC2HeXd9Ru6EjuL7HEuAZuZ2MM86LPqPfVbeQsm8M8-wgT_u3QPWYFs0XN0vfMz_FS3rDgjXgCXXm0GkmZs",$P="/3D/sw.js";async function Sv(){if(!("serviceWorker"in navigator))return null;try{return await navigator.serviceWorker.register($P,{scope:"/3D/3D-dev/"})}catch(n){return console.warn("SW-registrering fejlede",n),null}}function UP(){return"Notification"in window&&Notification.permission==="default"}async function Rv(){let n;try{n=await Notification.requestPermission()}catch(e){return console.warn("Notification.requestPermission fejlede",e),q(y("push.permissionError",{msg:e.message}),"error"),!1}if(n==="denied")return q(y("push.blocked"),"error"),!1;if(n!=="granted")return!1;try{if(!await Xy||!co)return q(y("push.unsupported"),"error"),!1;const t=await Sv();if(!t)return q(y("push.swError"),"error"),!1;const r=await YR(co,{vapidKey:FP,serviceWorkerRegistration:t});return r?(await nt(ne(K,"users",m.user.uid),{fcmToken:r}),!0):(q(y("push.tokenError"),"error"),!1)}catch(e){return console.warn("Push-opsætning fejlede",e),q(y("push.genericError",{msg:e.message}),"error"),!1}}function jP(){"Notification"in window&&Notification.permission==="granted"&&Rv()}function qP(){Xy.then(n=>{!n||!co||JR(co,e=>{const t=e.data||{};q(t.body||y("push.newMessageFallback"),"info"),ld().then(()=>{Wt(),bo()}).catch(()=>{})})})}function Qf(n,e){var S;const t=A=>{var P;return A.shooters.find(I=>I.id===e)||((P=A.shooters)==null?void 0:P[0])},r=n.map(A=>{const P=t(A);return P?Et(P.scores):null}).filter(A=>A!==null),s=new Set(n.map(A=>A.ruleset||cr)),i=s.size===1?[...s][0]:null,o=!!i&&sn(i)>=2;let c=0,l=0,u=0,h=0;const p=o?lr(i):[],g={},_={};p.forEach(A=>{g[A]=0,_[A]=0});const T={};let R=0,C=0;n.forEach(A=>{const P=t(A);P&&(P.scores.forEach(I=>{I.forEach(ye=>{ye!=null&&(T[ye]=(T[ye]||0)+1,R+=Te(ye),C++)})}),o&&P.scores.forEach(I=>{I[0]!=null&&(g[I[0]]!==void 0&&g[I[0]]++,c+=Te(I[0]),l++),I[1]!=null&&(_[I[1]]!==void 0&&_[I[1]]++,u+=Te(I[1]),h++)}))});const L=l?(c/l).toFixed(2):0,M=h?(u/h).toFixed(2):0,x=l+h?((c+u)/(l+h)).toFixed(2):0,B=C?(R/C).toFixed(2):0,ee=((S=n[0])==null?void 0:S.numTargets)||24,b=Array.from({length:ee},(A,P)=>{let I=0,ye=0;return n.forEach(Ue=>{const qt=t(Ue);if(!qt)return;(qt.scores[P]||[null,null]).forEach(ut=>{ut!=null&&(I+=Te(ut),ye++)})}),ye?I/ye:null}).map((A,P)=>({v:A,i:P})).filter(A=>A.v!==null),w=b.length?b.reduce((A,P)=>A.v>P.v?A:P):null,E=b.length?b.reduce((A,P)=>A.v<P.v?A:P):null;return{myScores:r,p1avg:L,p2avg:M,pilAvg:x,overallPilAvg:B,distP1:g,distP2:_,distAll:T,bestTarget:w,worstTarget:E,pilRuleset:i,pilEligible:o}}function Yf(n){if(!n.length)return 0;const e=n.reduce((t,r)=>t+r,0)/n.length;return Math.sqrt(n.reduce((t,r)=>t+(r-e)**2,0)/n.length)}function GP(n){var l;const e=n.length;if(e<2)return{slope:0,intercept:((l=n[0])==null?void 0:l.y)||0};const t=n.reduce((u,h)=>u+h.x,0),r=n.reduce((u,h)=>u+h.y,0),s=n.reduce((u,h)=>u+h.x*h.y,0),i=n.reduce((u,h)=>u+h.x*h.x,0),o=e*i-t*t,c=o?(e*s-t*r)/o:0;return{slope:c,intercept:(r-c*t)/e}}function KP(n,e){var o,c;const t=((o=n.shooters)==null?void 0:o.find(l=>l.id===e))||((c=n.shooters)==null?void 0:c[0]);if(!t)return[];const r=n.numTargets||24,s=n.traversalOrder||Array.from({length:r},(l,u)=>u),i=[];for(let l=0;l<r;l++){const u=s[l];if(u===void 0)continue;const h=t.scores[u]||[null,null];let p=0,g=0;h.forEach(_=>{_!=null&&(p+=Te(_),g++)}),g&&i.push(p/g)}return i}const Pv=[{key:"5to15",min:5,max:15},{key:"16to25",min:16,max:25},{key:"26to30",min:26,max:30}];function zP(n){return Pv.find(e=>(e.min==null||n>=e.min)&&(e.max==null||n<=e.max))}function Jf(n){return n!=null&&n.toDate?n.toDate().getTime():n!=null&&n.seconds?n.seconds*1e3:typeof n=="number"?n:null}const HP=10,Xf=56,WP=4;function QP(n,e,t){const r=x=>{var B;return x.shooters.find(ee=>ee.id===e)||((B=x.shooters)==null?void 0:B[0])},s={};Pv.forEach(x=>{s[x.key]={...x,shots:0,kills:0,scoreSum:0}});const i=new Set,o=new Set;n.forEach(x=>{var b;const B=t.find(w=>w.id===x.courseId);if(!B||!((b=B.targets)!=null&&b.length))return;const ee=r(x);if(!ee)return;const J=iP(x.ruleset||cr);ee.scores.forEach((w,E)=>{var P;const S=(P=B.targets[E])==null?void 0:P.distance;if(S==null||S==="")return;const A=zP(S);A&&w.forEach(I=>{I!=null&&(s[A.key].shots++,s[A.key].scoreSum+=Te(I),J.includes(I)&&s[A.key].kills++,i.add(x.id),o.add(J.join("/")))})})});const c=o.size===1?[...o][0]:null,l=Object.values(s).filter(x=>x.shots>0).map(x=>({...x,killPct:x.kills/x.shots*100,avgPerArrow:x.scoreSum/x.shots})),u=l.reduce((x,B)=>x+B.shots,0),h=l.reduce((x,B)=>x+B.kills,0),p=l.reduce((x,B)=>x+B.scoreSum,0),g=u?{killPct:h/u*100,avgPerArrow:p/u}:null,_=l.filter(x=>x.shots>=HP),T=_.length>=2?_.reduce((x,B)=>B.avgPerArrow<x.avgPerArrow?B:x):null;let R=null;if(T&&g&&T.avgPerArrow<g.avgPerArrow&&i.size){const x=T.shots/i.size,B=(g.avgPerArrow-T.avgPerArrow)*x;B>=.5&&(R=Math.round(B))}const C=Date.now()-Xf*864e5,L=n.map(x=>{const B=Jf(x.completed)??Jf(x.created),ee=r(x);if(!ee||B==null||B<C)return null;const J=ee.scores.flat().filter(b=>b!=null);return J.length?{ms:B,avgPerArrow:J.reduce((b,w)=>b+Te(w),0)/J.length}:null}).filter(Boolean).sort((x,B)=>x.ms-B.ms);let M=null;if(L.length>=WP){const x=Math.ceil(L.length/2),B=L.slice(0,x),ee=L.slice(x),J=E=>E.reduce((S,A)=>S+A.avgPerArrow,0)/E.length,b=J(B),w=J(ee);b>0&&(M={pctChange:(w-b)/b*100,weeks:Xf/7,rounds:L.length})}return{buckets:l,overall:g,weakest:T,pointPotential:R,trend:M,killLabel:c,roundsUsed:i.size,roundsTotal:n.length,hasData:l.length>0}}function YP(n,e){let t=1,r=0,s=0,i=0,o=1,c=0,l=0,u=0,h=0,p=0,g=0,_=0,T=0;const R=()=>{e.style.transformOrigin="0 0",e.style.transform=t>1?`translate(${r}px,${s}px) scale(${t})`:""};n.addEventListener("touchstart",L=>{if(L.preventDefault(),L.touches.length===2){const M=L.touches,x=n.getBoundingClientRect();i=Math.hypot(M[0].clientX-M[1].clientX,M[0].clientY-M[1].clientY),o=t,c=r,l=s,u=(M[0].clientX+M[1].clientX)/2-x.left,h=(M[0].clientY+M[1].clientY)/2-x.top}else L.touches.length===1&&(p=L.touches[0].clientX,g=L.touches[0].clientY,_=r,T=s)},{passive:!1}),n.addEventListener("touchmove",L=>{if(L.preventDefault(),L.touches.length===2){const M=L.touches,x=Math.hypot(M[0].clientX-M[1].clientX,M[0].clientY-M[1].clientY),B=Math.min(8,Math.max(1,o*x/i)),ee=(u-c)/o,J=(h-l)/o;r=u-ee*B,s=h-J*B,t=B,R()}else L.touches.length===1&&t>1&&(r=_+L.touches[0].clientX-p,s=T+L.touches[0].clientY-g,R())},{passive:!1}),n.addEventListener("touchend",()=>{t<1.05&&(t=1,r=0,s=0,R())},{passive:!0});let C=0;n.addEventListener("touchend",()=>{const L=Date.now();L-C<300&&(t=1,r=0,s=0,R()),C=L},{passive:!0})}let cn=null,Nr=null;function JP(){const n=document.getElementById("graph-fs");n&&n.classList.add("hidden"),cn&&(window.removeEventListener("resize",cn),window.removeEventListener("orientationchange",cn),cn=null),Nr&&(document.removeEventListener("gesturestart",Nr),Nr=null)}window.closeGraphFs=JP;function XP(n){m.pendingAnalyseRound=n,m.viewingUid=null,m.viewingName=null,document.getElementById("analyse-filter").value="specific",window.switchTab("analyse")}window.setAnalyseViewer=async function(n){m.viewingUid=n||null;const e=n?bv().find(t=>t.uid===n):null;m.viewingName=(e==null?void 0:e.name)||null,n&&!m.viewedRounds[n]&&await Av(n),window.renderAnalyse()};window.analyseRound=XP;window.setCompareKilde=async function(n,e){e=e||null,n===1?m.compareUid1=e:m.compareUid2=e,e&&!m.viewedRounds[e]&&await Av(e),window.renderAnalyse()};const ZP={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333",3:"#0a8a8a","-1":"#5a5a6a"};function eC(n,e,t,r){const s=n.myScores[0]||0,i=t.myScores[0]||0,o=Math.abs(s-i),c='<div class="cmp-sep"></div>',l=(g,_,T)=>`<div style="font-size:11px;color:${T};margin-bottom:4px;">${H(_)}</div>
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
    <div class="pil-best-note">${g.pilRuleset?y("analyse.singleArrowNoteCompare",{ruleset:g.pilRuleset}):y("analyse.notRelevant")}</div>`}`,u=(g,_,T)=>g.bestTarget&&g.worstTarget?`<div style="font-size:11px;color:${T};margin-bottom:6px;">${H(_)}</div>
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
        <div class="cmp-score-lbl-a">${H(e)}</div>
        <div class="cmp-score-val-a">${s}</div>
        <div class="cmp-score-unit">${y("results.summaryPoints")}</div>
      </div>
      <div class="cmp-vs">${y("analyse.vs")}</div>
      <div>
        <div class="cmp-score-lbl-b">${H(r)}</div>
        <div class="cmp-score-val-b">${i}</div>
        <div class="cmp-score-unit">${y("results.summaryPoints")}</div>
      </div>
    </div>
    <div class="cmp-winner-line">${s>i?y("analyse.wonBy",{name:H(e),diff:o}):i>s?y("analyse.wonBy",{name:H(r),diff:o}):y("analyse.tie")}</div>
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
      ${p.map(g=>`<div style="text-align:center;font-weight:700;color:${ZP[g]||"var(--muted)"};">${g}</div>`).join("")}
      <div class="cmp-dist-lbl-a">${H(e)}</div>
      ${p.map(g=>`<div class="cmp-dist-val">${n.distAll[g]||0}</div>`).join("")}
      <div class="cmp-dist-lbl-b">${H(r)}</div>
      ${p.map(g=>`<div class="cmp-dist-val">${t.distAll[g]||0}</div>`).join("")}
    </div>
  </div>`,h}window.renderAnalyse=function(){var vr,oi,ai,So,On,ci,li,ds,Ro,Po,hs,ui,di,Mn,fs,ms;const n=document.getElementById("analyse-content");if(!n)return;const e=m.viewingUid||((vr=m.user)==null?void 0:vr.uid),t=m.viewingUid?m.viewedRounds[m.viewingUid]||[]:m.rounds,r=bv(),s=((oi=document.getElementById("analyse-filter"))==null?void 0:oi.value)||"all",i=s==="compare",o=m.compareUid1!==void 0?m.compareUid1:m.viewingUid,c=m.compareUid2!==void 0?m.compareUid2:m.viewingUid,l=o?m.viewedRounds[o]||[]:m.rounds,u=c?m.viewedRounds[c]||[]:m.rounds,h=document.getElementById("analyse-viewer-wrap"),p=document.getElementById("analyse-viewer");if(p){for(;p.options.length>1;)p.remove(1);r.forEach(O=>{const $=document.createElement("option");$.value=O.uid,$.textContent=O.name,p.appendChild($)}),p.value=m.viewingUid&&r.some(O=>O.uid===m.viewingUid)?m.viewingUid:"",h&&h.classList.toggle("hidden",!r.length)}const g=(O,$)=>{if(O){for(;O.options.length>1;)O.remove(1);r.forEach(z=>{const W=document.createElement("option");W.value=z.uid,W.textContent=z.name,O.appendChild(W)}),O.value=$&&r.some(z=>z.uid===$)?$:"",O.classList.toggle("hidden",!i||!r.length)}};g(document.getElementById("analyse-kilde-1"),o),g(document.getElementById("analyse-kilde-2"),c);const _=document.getElementById("analyse-bane");if(_){const O=_.value;for(;_.options.length>1;)_.remove(1);const $=i?[...l,...u]:t,z=[...new Set($.map(W=>W.courseId).filter(Boolean))];z.forEach(W=>{const X=m.courses.find(ie=>ie.id===W);if(X){const ie=document.createElement("option");ie.value=W,ie.textContent=X.name,_.appendChild(ie)}}),z.includes(O)&&(_.value=O)}if(m.pendingAnalyseRound&&_&&!m.viewingUid){const O=m.rounds.find($=>$.id===m.pendingAnalyseRound);O!=null&&O.courseId&&Array.from(_.options).some($=>$.value===O.courseId)&&(_.value=O.courseId)}const T=s==="all"?0:s==="lastround"?1:s==="specific"?0:Number(s),R=((ai=document.getElementById("analyse-bane"))==null?void 0:ai.value)||"all",C=Number((So=document.getElementById("analyse-antal"))==null?void 0:So.value)||0,L=document.getElementById("analyse-runde-wrap"),M=document.getElementById("analyse-runde"),x=document.getElementById("analyse-runde-wrap-2"),B=document.getElementById("analyse-runde-2"),ee=document.getElementById("analyse-runde-lbl");L&&(L.style.display=s==="specific"||i?"":"none"),x&&(x.style.display=i?"":"none"),ee&&(ee.style.display=i?"":"none");const J=O=>{const $=O.created;return $!=null&&$.toDate?$.toDate().toLocaleDateString(gn()):$!=null&&$.seconds?new Date($.seconds*1e3).toLocaleDateString(gn()):typeof $=="number"?new Date($).toLocaleDateString(gn()):"—"},b=((On=document.getElementById("analyse-ruleset"))==null?void 0:On.value)||"all",w=(O,$,z)=>{let W=R==="all"?z:z.filter(ie=>ie.courseId===R);b!=="all"&&(W=W.filter(ie=>(ie.ruleset||"WA")===b));const X=O.value;O.innerHTML=`<option value="">${$}</option>`,W.forEach(ie=>{const ce=document.createElement("option");ce.value=ie.id,ce.textContent=`${J(ie)} — ${ie.name||y("results.roundFallback")}`,O.appendChild(ce)}),W.some(ie=>ie.id===X)&&(O.value=X)};if((s==="specific"||i)&&M&&(w(M,y("analyse.selectRoundPlaceholder"),i?l:t),m.pendingAnalyseRound&&(M.value=m.pendingAnalyseRound,m.pendingAnalyseRound=null)),i&&B&&w(B,y("analyse.selectRound2Placeholder"),u),i){const O=M==null?void 0:M.value,$=B==null?void 0:B.value;if(!O||!$){n.innerHTML=`<div class="empty"><div class="empty-icon">📊</div>${y("analyse.selectTwoRounds")}</div>`;return}const z=oe=>({...oe,shooters:(oe.shooters||[]).map(Me=>({...Me,scores:Jr(Me.scores)}))}),W=l.map(z).find(oe=>oe.id===O),X=u.map(z).find(oe=>oe.id===$);if(!W||!X){n.innerHTML=`<div class="empty">${y("analyse.roundsNotFound")}</div>`;return}const ie=o?((ci=r.find(oe=>oe.uid===o))==null?void 0:ci.name)||"—":((li=m.profile)==null?void 0:li.name)||y("analyse.meFallback"),ce=c?((ds=r.find(oe=>oe.uid===c))==null?void 0:ds.name)||"—":((Ro=m.profile)==null?void 0:Ro.name)||y("analyse.meFallback"),ge=`${ie}: ${W.name||y("results.roundFallback")} (${J(W)})`,Pe=`${ce}: ${X.name||y("results.roundFallback")} (${J(X)})`;n.innerHTML=eC(Qf([W],o||((Po=m.user)==null?void 0:Po.uid)),ge,Qf([X],c||((hs=m.user)==null?void 0:hs.uid)),Pe);return}const E=t.map(O=>({...O,shooters:(O.shooters||[]).map($=>({...$,scores:Jr($.scores)}))})),S=((ui=document.getElementById("analyse-completed-only"))==null?void 0:ui.checked)||!1,A=((di=document.getElementById("analyse-startat1-only"))==null?void 0:di.checked)||!1,P=O=>{var W,X;const $=((W=O.shooters)==null?void 0:W.find(ie=>ie.id===e))||((X=O.shooters)==null?void 0:X[0]);if(!$)return!1;const z=O.numTargets||24;for(let ie=0;ie<z;ie++){const ce=$.scores[ie]||[null,null];if(ce[0]==null&&ce[1]==null)return!1}return!0},I=O=>O.startTarget===1,ye=b;let Ue=R==="all"?E:E.filter(O=>O.courseId===R);if(ye!=="all"&&(Ue=Ue.filter(O=>(O.ruleset||"WA")===ye)),S&&(Ue=Ue.filter(P)),A&&(Ue=Ue.filter(I)),s==="specific"){const O=M==null?void 0:M.value;Ue=O?Ue.filter($=>$.id===O):[]}const qt=C||T,je=qt&&s!=="specific"?Ue.slice(0,qt):Ue;if(!je.length){n.innerHTML=`<div class="empty"><div class="empty-icon">📈</div>${y("results.empty")}</div>`;return}const ut=O=>{var $;return O.shooters.find(z=>z.id===e)||(($=O.shooters)==null?void 0:$[0])},Ze=je.map(O=>{const $=ut(O);return $?Et($.scores):null}).filter(O=>O!==null),as=Ze.length?(Ze.reduce((O,$)=>O+$,0)/Ze.length).toFixed(1):0,cs=Ze.length?Math.max(...Ze):0,Gt=Ze.length?Math.min(...Ze):0,xe=je.flatMap(O=>{const $=ut(O);return $?$.scores.flat().filter(z=>z!=null):[]}),Ln=xe.length?(xe.reduce((O,$)=>O+Te($),0)/xe.length).toFixed(2):0,ae=new Set(je.map(O=>O.ruleset||cr)),qe=ae.size===1?[...ae][0]:null,At=!!qe&&sn(qe)>=2;let Qt=0,Yt=0,he=0,Re=0;const Le=At?lr(qe):[],we={},Ve={};Le.forEach(O=>{we[O]=0,Ve[O]=0}),je.forEach(O=>{const $=ut(O);$&&At&&$.scores.forEach(z=>{z[0]!=null&&(we[z[0]]!==void 0&&we[z[0]]++,Qt+=Te(z[0]),Yt++),z[1]!=null&&(Ve[z[1]]!==void 0&&Ve[z[1]]++,he+=Te(z[1]),Re++)})});const dt=Yt?(Qt/Yt).toFixed(2):0,Ie=Re?(he/Re).toFixed(2):0,rt=Yt+Re?((Qt+he)/(Yt+Re)).toFixed(2):0,at=((Mn=je[0])==null?void 0:Mn.numTargets)||24,si=Array.from({length:at},(O,$)=>{let z=0,W=0;return je.forEach(X=>{const ie=ut(X);if(!ie)return;const ge=(X.traversalOrder||Array.from({length:X.numTargets||at},(oe,Me)=>Me))[$];if(ge===void 0)return;(ie.scores[ge]||[null,null]).forEach(oe=>{oe!=null&&(z+=Te(oe),W++)})}),W?z/W:null}),Vn=si.map((O,$)=>({v:O,i:$})).filter(O=>O.v!==null),yr=Vn.length?Vn.reduce((O,$)=>O.v>$.v?O:$):null,ls=Vn.length?Vn.reduce((O,$)=>O.v<$.v?O:$):null;let Ae="";m.viewingUid&&(Ae+=`<div class="viewing-banner">👁 ${y("analyse.viewingResultsFor",{name:H(m.viewingName||"—")})}</div>`),Ae+=`<div class="stats-grid2">
    <div class="card stat-card"><div class="stat-lbl">${y("analyse.statRounds")}</div><div class="stat-val-28">${je.length}</div></div>
    <div class="card stat-card"><div class="stat-lbl">${y("analyse.statAvgPerRound")}</div><div class="stat-val-28">${as}</div></div>
    <div class="card stat-card"><div class="stat-lbl">${y("analyse.statBest")}</div><div class="stat-val-28-good">${cs}</div></div>
    <div class="card stat-card"><div class="stat-lbl">${y("analyse.statLowest")}</div><div class="stat-val-28-bad">${Gt}</div></div>
  </div>`,Ae+=`<details class="card card-mb16 rounds-included-card">
    <summary class="section-title-mb8 rounds-included-summary">${y("analyse.roundsIncludedTitle",{n:je.length})}</summary>
    <div class="rounds-included-list">
      ${je.map(O=>`<div class="rounds-included-row"><span class="rounds-included-date">${J(O)}</span><span class="rounds-included-name">${H(O.name||y("results.roundFallback"))}${R==="all"?` · ${H(O.courseName||"")}`:""}${O.ruleset&&O.ruleset!=="WA"?` · <span class="rcard-ruleset-tag">${H(O.ruleset)}</span>`:""}</span></div>`).join("")}
    </div>
  </details>`;const ii=qe&&!At,us=qe?y("analyse.singleArrowNote",{ruleset:qe}):y("analyse.selectRulesetNote");Ae+=`<div class="card card-mb16">
    <div class="section-title-mb8">${y("analyse.arrowStatsTitle")}</div>
    ${At?`<div class="cmp-pil-grid">
      <div><div class="stat-lbl">${y("analyse.arrow1")}</div><div class="stat-val-22">${dt}</div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">${y("results.summaryAvgPerArrow")}</div>
        <div class="stat-val-22-mid">${rt}</div>
      </div>
      <div><div class="stat-lbl">${y("analyse.arrow2")}</div><div class="stat-val-22">${Ie}</div></div>
    </div>
    <div class="pil-best-note">
      ${Number(dt)>Number(Ie)?y("analyse.bestWithArrow1"):Number(Ie)>Number(dt)?y("analyse.bestWithArrow2"):y("analyse.bothArrowsEqual")}
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
    </div>`);const ve=QP(je,e,m.courses);if(ve.hasData){const O={"5to15":"distBucket5to15","16to25":"distBucket16to25","26to30":"distBucket26to30"},$=ve.killLabel||y("analyse.killZoneLabel");if(Ae+=`<div class="card card-mb16">
      <div class="section-title-mb8">${y("analyse.distanceInsightsTitle")}</div>
      <div class="dist-subtitle">${y("analyse.distanceInsightsSubtitle",{label:$})}</div>
      <div class="dist-subtitle">${y("analyse.distanceInsightsCoverage",{used:ve.roundsUsed,total:ve.roundsTotal})}</div>`,ve.trend){const z=ve.trend.pctChange,W=ve.trend.weeks,X=Math.abs(z)<.5?y("analyse.trendFlat",{weeks:W}):z>0?y("analyse.trendUp",{pct:z.toFixed(1),weeks:W}):y("analyse.trendDown",{pct:Math.abs(z).toFixed(1),weeks:W});Ae+=`<div class="dist-trend-line">${X}</div>`}else Ae+=`<div class="dist-trend-line dist-trend-muted">${y("analyse.trendNotEnoughData",{weeks:8})}</div>`;if(Ae+=`<div class="dist-bucket-grid">${ve.buckets.map(z=>`
      <div class="dist-bucket-cell">
        <div class="stat-lbl">${y("analyse."+O[z.key])}</div>
        <div class="dist-bucket-pct">${z.killPct.toFixed(0)}%</div>
        <div class="target-sub-13">⌀ ${z.avgPerArrow.toFixed(2)}</div>
      </div>`).join("")}</div>`,ve.weakest){const z=y("analyse."+O[ve.weakest.key]);Ae+=`<div class="dist-weakest-note">${y("analyse.weakestZone",{range:z})}</div>`,ve.pointPotential!=null&&(Ae+=`<div class="dist-weakest-note">${y("analyse.pointPotential",{range:z,n:ve.pointPotential})}</div>`)}Ae+="</div>"}if(Ae+=`<div class="card card-mb16">
    <div class="section-title-mb12">${y("analyse.zoneDistTitle")}</div>`,At?(Ae+='<div class="pie-grid">',Le.forEach(O=>{const $=we[O]||0,z=Ve[O]||0,W=$+z,X=30;let ie="";if(W===0)ie=`<circle cx="${X}" cy="${X}" r="${X}" fill="var(--surface2)"/>`;else if(z===0)ie=`<circle cx="${X}" cy="${X}" r="${X}" fill="#ffd700"/>`;else if($===0)ie=`<circle cx="${X}" cy="${X}" r="${X}" fill="#00cc44"/>`;else{const ce=$/W,ge=ce*2*Math.PI,Pe=X,oe=0,Me=X-X*Math.sin(ge),on=X-X*Math.cos(ge),Be=ge>Math.PI?1:0;ie=`<path d="M${X},${X} L${Pe},${oe} A${X},${X} 0 ${Be},0 ${Me},${on} Z" fill="#ffd700"/>
             <path d="M${X},${X} L${Me},${on} A${X},${X} 0 ${1-Be},0 ${Pe},${oe} Z" fill="#00cc44"/>`}Ae+=`<div class="pie-cell">
        <div class="pie-zone-label">${O}</div>
        <svg viewBox="0 0 ${X*2} ${X*2}" class="pie-svg">${ie}</svg>
        <div class="pie-count">${$}/${z}</div>
        <div class="pie-total">${W}</div>
      </div>`}),Ae+=`</div>
      <div class="pie-legend">
        <span><span class="pie-legend-dot-1"></span>${y("analyse.arrow1")}</span>
        <span><span class="pie-legend-dot-2"></span>${y("analyse.arrow2")}</span>
      </div>`):Ae+=`<div class="pil-best-note">${us}</div>`,Ae+="</div>",Ze.length>1){const W=Math.min(...Ze)-5,X=Math.max(...Ze)+5,ie=Ze.slice().reverse().map((ce,ge)=>{const Pe=30+ge/(Ze.length-1)*280,oe=90-(ce-W)/(X-W)*(120-2*30);return`${Pe},${oe}`}).join(" ");Ae+=`<div class="card card-mb16">
      <div class="section-title-mb8">${y("analyse.developmentTitle")}</div>
      <svg viewBox="0 0 340 120" class="graph-svg">
        <polyline points="${ie}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${Ze.slice().reverse().map((ce,ge)=>{const Pe=30+ge/(Ze.length-1)*280,oe=90-(ce-W)/(X-W)*(120-2*30);return`<circle cx="${Pe}" cy="${oe}" r="4" fill="var(--acc)"/><text x="${Pe}" y="${oe-8}" text-anchor="middle" font-size="10" fill="var(--text)">${ce}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">${y("analyse.oldest")}</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">${y("analyse.newest")}</text>
      </svg>
    </div>`}const Oe=si.map((O,$)=>({v:O,i:$})).filter(O=>O.v!==null);if(Oe.length>1){const{slope:ce,intercept:ge}=GP(Oe.map(({v:Ge,i:gt})=>({x:gt,y:Ge}))),Pe=[ge,ge+ce*(at-1)],oe=Math.floor(Math.min(...Oe.map(Ge=>Ge.v),...Pe)),Me=Math.ceil(Math.max(...Oe.map(Ge=>Ge.v),...Pe)),on=Me-oe||1,Be=[];for(let Ge=oe;Ge<=Me;Ge++)(Me-oe<=6||Ge%Math.ceil((Me-oe)/5)===0)&&Be.push(Ge);const Ye=Yf(Oe.map(Ge=>Ge.v)),Nt=(Ge,gt,{dotR:Jt=3,valFont:ct=9,showVals:_r=!1}={})=>{const St=Ke=>42+(at>1?Ke/(at-1)*(Ge-42-15):0),ht=Ke=>15+(gt-15-25)*(1-(Ke-oe)/on),Bn=Oe.map(({v:Ke,i:$n})=>St($n)+","+ht(Ke)).join(" "),Fn=Be.map(Ke=>`<line x1="38" y1="${ht(Ke)}" x2="42" y2="${ht(Ke)}" stroke="var(--muted)" stroke-width="1" pointer-events="none"/><text x="36" y="${ht(Ke)+4}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${Ke}</text><line x1="42" y1="${ht(Ke)}" x2="${Ge-15}" y2="${ht(Ke)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3" pointer-events="none"/>`).join(""),wr=Oe.map(({v:Ke,i:$n})=>_r?`<circle cx="${St($n)}" cy="${ht(Ke)}" r="${Jt}" fill="var(--acc)" pointer-events="none"/><text x="${St($n)}" y="${ht(Ke)-Jt-5}" text-anchor="middle" font-size="${ct}" fill="#fff" pointer-events="none">${Ke.toFixed(1)}</text>`:`<circle cx="${St($n)}" cy="${ht(Ke)}" r="${Jt}" fill="var(--acc)" pointer-events="none"/>`).join(""),bc=`<line x1="${St(0)}" y1="${ht(ge)}" x2="${St(at-1)}" y2="${ht(ge+ce*(at-1))}" stroke="#f0c030" stroke-width="1.5" stroke-dasharray="6,4" pointer-events="none"/>`;return`<line x1="42" y1="15" x2="42" y2="${gt-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        <line x1="42" y1="${gt-25}" x2="${Ge-15}" y2="${gt-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        ${Fn}
        <polyline points="${Bn}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round" pointer-events="none"/>
        ${bc}
        ${wr}
        <text x="42" y="${gt-5}" font-size="9" fill="var(--muted)" pointer-events="none">1</text>
        <text x="${St(at-1)}" y="${gt-5}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${at}</text>`},Kt=Math.max(340,at*30);Ae+=`<div class="card card-mb16">
      <div class="graph-header-row">
        <span>${y("analyse.perTargetGraphTitle")}</span>
        <button class="btn-icon graph-fs-btn" onclick="window.openGraphFs()">⤢</button>
      </div>
      <svg viewBox="0 0 340 160" class="graph-svg">${Nt(340,160,{dotR:3})}</svg>
      <div class="graph-caption">${y("analyse.perTargetCaption")}</div>
    </div>
    <div class="card card-mb16">
      <div class="section-title-mb8">${y("analyse.consistencyTitle")}</div>
      <div class="spredning-row">
        <div class="stat-val-28">${Ye.toFixed(2)}</div>
        <div class="spredning-note">${y("analyse.consistencyNote")}</div>
      </div>
    </div>
    <div id="graph-fs" class="fs-ov hidden graph-fs-overlay" onclick="window.closeGraphFs()">
      <div class="graph-fs-box" id="graph-fs-box" onclick="event.stopPropagation()">
        <div class="graph-fs-title">${y("analyse.fullscreenGraphTitle")}</div>
        <div id="graph-fs-viewport" class="graph-fs-viewport">
          <svg id="graph-fs-svg" viewBox="0 0 ${Kt} 160" class="graph-fs-svg">${Nt(Kt,160,{dotR:5,valFont:10,showVals:!0})}</svg>
        </div>
        <button class="btn btn-dark graph-fs-close-btn" onclick="window.closeGraphFs()">${y("modals.qr.closeBtn")}</button>
      </div>
    </div>`,window.openGraphFs=function(){const Ge=document.getElementById("graph-fs");if(!Ge)return;Ge.classList.remove("hidden");const gt=document.getElementById("graph-fs-svg"),Jt=document.getElementById("graph-fs-box"),ct=document.getElementById("graph-fs-viewport"),_r=()=>{const St=Math.min(window.innerWidth*.96,900),ht=Math.min(window.innerHeight*.9,700),Bn=Math.max(200,St-32),Fn=Math.max(140,ht-90),wr=Math.max(Bn,at*30);gt.setAttribute("viewBox",`0 0 ${wr} ${Fn}`),gt.innerHTML=Nt(wr,Fn,{dotR:5,valFont:10,showVals:!0}),Jt&&(Jt.style.width=St+"px"),ct&&(ct.style.width=Bn+"px",ct.style.height=Fn+"px")};_r(),cn&&(window.removeEventListener("resize",cn),window.removeEventListener("orientationchange",cn)),cn=_r,window.addEventListener("resize",cn),window.addEventListener("orientationchange",cn),Nr&&document.removeEventListener("gesturestart",Nr),Nr=St=>St.preventDefault(),document.addEventListener("gesturestart",Nr,{passive:!1}),ct&&!ct.dataset.pinchInit&&(YP(ct,gt),ct.dataset.pinchInit="1")}}if(R!=="all"){const O=z=>{const W=z.created;return W!=null&&W.toDate?W.toDate().getTime():W!=null&&W.seconds?W.seconds*1e3:typeof W=="number"?W:0},$=E.filter(z=>z.courseId===R).filter(z=>!S||P(z)).filter(z=>!A||I(z)).map(z=>{const W=KP(z,e);return W.length>1?{t:O(z),cv:Yf(W)}:null}).filter(Boolean).sort((z,W)=>z.t-W.t);if($.length>1){const ie=$.map(Be=>Be.cv),ce=Math.min(...ie),ge=Math.max(...ie),Pe=ge-ce||1,oe=(Be,Ye)=>({x:30+Ye/($.length-1)*(340-2*30),y:90-(Be.cv-ce)/Pe*(120-2*30)}),Me=$.map((Be,Ye)=>{const{x:Nt,y:Kt}=oe(Be,Ye);return`${Nt},${Kt}`}).join(" "),on=$.map((Be,Ye)=>{const{x:Nt,y:Kt}=oe(Be,Ye);return`<circle cx="${Nt}" cy="${Kt}" r="4" fill="#f0c030"/><text x="${Nt}" y="${Kt-8}" text-anchor="middle" font-size="10" fill="var(--text)">${Be.cv.toFixed(2)}</text>`}).join("");Ae+=`<div class="card card-mb16">
        <div class="section-title-mb8">${y("analyse.consistencyOverTimeTitle")}</div>
        <svg viewBox="0 0 340 120" class="graph-svg">
          <polyline points="${Me}" fill="none" stroke="#f0c030" stroke-width="2.5" stroke-linejoin="round"/>
          ${on}
          <text x="30" y="115" font-size="10" fill="var(--muted)">${y("analyse.oldest")}</text>
          <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">${y("analyse.newest")}</text>
        </svg>
        <div class="graph-caption">${y("analyse.consistencyOverTimeCaption")}</div>
      </div>`}}if(n.innerHTML=Ae,!m.viewingUid&&R!=="all"&&((fs=m.profile)!=null&&fs.kon)&&((ms=m.profile)!=null&&ms.bueklasse)){const O=m.profile.kon==="herre"?y("common.gender.herre"):y("common.gender.dame"),z={langbue:"langbue",trad:"trad",recurve:"recurve",compound:"compound",barbue:"barbue",buejæger:"buejaeger","trad-buejæger":"tradBuejaeger",rytterbue:"rytterbue"}[m.profile.bueklasse],W=z?y("common.bowClassShort."+z):m.profile.bueklasse,X=document.createElement("div");X.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">${y("analyse.comparisonSectionTitle",{gender:O,bowClass:W})}</div><div class="comp-loading-msg">${y("analyse.loadingComparison")}</div></div>`,n.appendChild(X),st(tt(K,"bane_stats",R,"runder")).then(ie=>{let ge=ie.docs.map(Ye=>Ye.data()).filter(Ye=>Ye.kon===m.profile.kon&&Ye.bueklasse===m.profile.bueklasse);if(ye!=="all"&&(ge=ge.filter(Ye=>(Ye.ruleset||cr)===ye)),!ge.length){X.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">${y("analyse.comparisonSectionTitle",{gender:O,bowClass:W})}</div><div class="comp-loading-msg">${y("analyse.noOtherShootersYet",{gender:O,bowClass:W})}</div></div>`;return}const Pe=ge.filter(Ye=>(Ye.arrowsShot||Ye.numTargets*2)>0),oe=Pe.length?(Pe.reduce((Ye,Nt)=>Ye+Nt.score/(Nt.arrowsShot||Nt.numTargets*2),0)/Pe.length).toFixed(2):"—",Me=oe!=="—"?Number(Ln)-Number(oe):null,on=Me!==null?(Me>0?"+":"")+Me.toFixed(2):"—",Be=Me===null?"var(--muted)":Me>0?"#2aaa5a":Me<0?"var(--danger)":"var(--muted)";X.innerHTML=`<div class="card card-mb16">
        <div class="section-title-mb12">${y("analyse.comparisonSectionTitle",{gender:O,bowClass:W})}</div>
        <div class="cmp-pil-grid">
          <div><div class="stat-lbl">${y("analyse.yourAvgPerArrow")}</div><div class="stat-val-22">${Ln}</div></div>
          <div class="cmp-pil-mid">
            <div class="stat-lbl">${y("analyse.difference")}</div>
            <div style="font-size:22px;font-weight:700;color:${Be};">${on}</div>
          </div>
          <div><div class="stat-lbl">${y("analyse.othersAvgPerArrow")}</div><div class="stat-val-22-txt">${oe}</div></div>
        </div>
        <div class="pil-best-note">${ge.length===1?y("analyse.basedOnRoundsSingular",{n:ge.length}):y("analyse.basedOnRoundsPlural",{n:ge.length})}</div>
      </div>`}).catch(()=>{X.remove()})}};function Zf(n,e,t){const r=Array.from({length:e},()=>Array(t).fill(null));for(const s of n.eventresult)r[s.targetid-1][s.arrownr-1]=s.points===0?"M":s.points;return r}async function Cv(n,e,t){var p;const r=Math.max(...t.flatMap(g=>g.eventresult.map(_=>_.targetid))),s=Math.max(...t.flatMap(g=>g.eventresult.map(_=>_.arrownr)));let i=null,o=n.name||n.eventname||null;if(o){const g=o.split(" - ")[0].trim().toLowerCase(),_=m.courses.filter(T=>(T.name||"").toLowerCase().includes(g));_.length===1&&(i=_[0].id,o=_[0].name)}const c=t.filter(g=>g!==e).map((g,_)=>({id:`guest-import-${Date.now()}-${_}`,name:g.name||y("roundImport.guestFallback",{n:_+1}),isGuest:!0,scores:Ml(Zf(g,r,s))})),l=n.eventinsstmp||Date.parse(n.eventdate)||Date.now(),u="imp_"+(e.objectId||n.eventobjectId||Date.now()),h={id:u,name:o||y("roundImport.importedRoundFallback"),courseId:i,courseName:o,numTargets:r,startTarget:1,ruleset:"WA",completed:l,gpsRoute:null,gpsDuration:null,gpsDistance:null,traversalOrder:sd(0,r),traversalPos:r,shooters:[{id:m.user.uid,name:((p=m.profile)==null?void 0:p.name)||y("analyse.meFallback"),isGuest:!1,scores:Ml(Zf(e,r,s))},...c],shooterIds:[m.user.uid]};await Pt(ne(K,"users",m.user.uid,"rounds",u),{...h,created:l}),Pt(ne(K,"users",m.user.uid),{roundIndex:sy({id:u,completed:l})},{merge:!0}).catch(()=>{}),m.rounds=m.rounds.filter(g=>g.id!==u),m.rounds.unshift({...h,created:l}),m.rounds.sort((g,_)=>{var C,L;const T=g.completed||g.created||0,R=_.completed||_.created||0;return(typeof R=="number"?R:((C=R.toMillis)==null?void 0:C.call(R))??0)-(typeof T=="number"?T:((L=T.toMillis)==null?void 0:L.call(T))??0)}),jt(),Ws(),q(y("roundImport.importedToast",{name:h.name}),"success")}let Ba=null;function kv(){var n;(n=document.getElementById("import-player-modal"))==null||n.classList.add("hidden"),Ba=null}window.cancelImportPlayer=kv;window.pickImportPlayer=async function(n){if(!Ba)return;const{raw:e,validPlayers:t}=Ba,r=t[n];kv();try{await Cv(e,r,t)}catch(s){console.warn("Import fejl:",s),q(y("roundImport.importError",{msg:s.message}),"error")}};function tC(n,e){Ba={raw:n,validPlayers:e};const t=document.getElementById("import-player-list");t.innerHTML=e.map((r,s)=>`<div class="ac-item" onclick="pickImportPlayer(${s})">${H(r.name||"—")}</div>`).join(""),document.getElementById("import-player-modal").classList.remove("hidden")}const ua=document.getElementById("import-round-input");ua||console.warn("round-import.js: #import-round-input findes ikke i DOM");ua==null||ua.addEventListener("change",async n=>{var t;const e=n.target.files[0];if(n.target.value="",!e){q(y("roundImport.noFileSelected"),"error");return}if(!m.user){q(y("roundImport.loginFirst"),"error");return}try{const r=JSON.parse(await e.text()),s=(r.players||[]).filter(c=>Array.isArray(c.eventresult)&&c.eventresult.length);if(!s.length){q(y("roundImport.noPlayersInFile"),"error");return}const i=(((t=m.profile)==null?void 0:t.email)||"").toLowerCase();let o=s.find(c=>(c.email||"").toLowerCase()===i);if(!o&&s.length===1&&(o=s[0]),!o){tC(r,s);return}await Cv(r,o,s)}catch(r){console.warn("Import fejl:",r),q(y("roundImport.readError",{msg:(r==null?void 0:r.message)||r}),"error")}});let da=null;async function nC(){try{"wakeLock"in navigator&&(da=await navigator.wakeLock.request("screen"))}catch{}}function ud(){da&&(da.release(),da=null)}function em(){if(!m.pendingRound)return;const n=m.rounds.find(t=>t.id===m.pendingRound);if(!n)return;m.pendingRound=null;const e=(n.shooters||[]).map(t=>({...t,scores:Jr(t.scores)}));setTimeout(()=>_c({...n,shooters:e}),300)}function rC(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${H(e)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};var rm;(rm=document.getElementById("ruleset-sel"))==null||rm.addEventListener("change",n=>{const e=document.getElementById("boost-thresh");e&&(e.value=sP(n.target.value))});window.startRound=async function(){var g,_,T;const n=(document.getElementById("round-name").value.trim()||y("setup.roundNameDefault")).slice(0,80),e=document.getElementById("course-sel").value,t=document.getElementById("target-count"),r=(t.value==="custom"?Number(document.getElementById("target-count-custom").value):Number(t.value))||24,s=Number(document.getElementById("start-target").value)-1,i=document.getElementById("gps-auto-sw").classList.contains("on"),o=document.getElementById("gps-track-sw").classList.contains("on");m.boostThreshold=Number(document.getElementById("boost-thresh").value)||8;const c=((g=document.getElementById("ruleset-sel"))==null?void 0:g.value)||cr,l=sn(c),u=[{id:m.user.uid,name:m.profile.name,isGuest:!1},...rC().filter(R=>R.id!==m.user.uid)];m.course=e&&m.courses.find(R=>R.id===e)||null;const h=u.map(R=>{const C=cP(R.id,R.name,R.isGuest);return lP(C,r,l),C});let p=s;if(i&&((_=m.course)!=null&&_.targets))try{p=mP(m.course.targets,await yc())}catch{}m.round={id:"r_"+Date.now(),name:n,courseId:e||null,courseName:((T=m.course)==null?void 0:T.name)||null,numTargets:r,startTarget:p+1,ruleset:c,shooters:h,created:Date.now(),traversalOrder:sd(p,r),traversalPos:0},o&&(m.gpsTracking=hP(sC),document.getElementById("gps-bar").classList.toggle("hidden",!m.gpsTracking),nC()),showActivePanel(),os(),vn(),Ec(),Tc()};function ri(){return m.round.traversalOrder[m.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden");const e=document.getElementById("p-list");e&&(e.innerHTML="")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function vn(){var h,p;if(!m.round)return;const n=ri(),e=m.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=y("active.ofN",{n:e}),document.getElementById("round-badge").textContent=m.round.name;const t=(p=(h=m.course)==null?void 0:h.targets)==null?void 0:p[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||y("active.targetFallback",{n:n+1});const r=document.getElementById("target-distance"),s=m.showDistances&&(t==null?void 0:t.distance)!=null;r.classList.toggle("hidden",!s),r.textContent=s?y("active.distanceLabel",{m:t.distance}):"";const i=uP(m.round.shooters,e,sn(m.round.ruleset));document.getElementById("pbar").style.width=`${i/e*100}%`;const o=m.round.shooters.flatMap(g=>g.scores.flat().filter(_=>_!=null)),c=o.reduce((g,_)=>g+Te(_),0);document.getElementById("stat-avg").textContent=o.length?(c/o.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=c,document.getElementById("stat-rem").textContent=e-i;const l=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(l.classList.add("hidden"),l.onload=()=>l.classList.remove("hidden"),l.onerror=()=>l.classList.add("hidden"),l.src=t.imageUrl||t.photo):(l.src="",l.classList.add("hidden")),document.getElementById("edit-target-btn").classList.toggle("hidden",!(m.isAdmin&&m.round.courseId)),document.getElementById("next-btn").textContent=m.round.traversalPos===e-1?y("active.finish"):y("active.next");const u=oP(m.round.shooters,n);document.getElementById("target-avg").textContent=u!==null?y("active.targetAvg",{v:u}):""}function os(){if(!m.round)return;const n=ri(),e=document.getElementById("shooters-list");e.innerHTML="";const t=sn(m.round.ruleset),r=lr(m.round.ruleset);m.round.shooters.forEach((s,i)=>{const o=Et(s.scores),c=m.boostEnabled&&aP(s.scores,m.boostThreshold),l=s.scores[n]||Array(t).fill(null),u=document.createElement("div");u.className="shooter-card";const h=s.scores.flat().filter(_=>_!=null),p=h.length?(h.reduce((_,T)=>_+Te(T),0)/h.length).toFixed(2):"—";let g=`<div class="sh-mini"><div class="sh-mini-lbl">${y("active.runde")}</div><div class="sh-mini-val">${o}</div></div>`;if(t>=2){const T=Array.from({length:t},(R,C)=>s.scores.map(L=>L[C]).filter(L=>L!=null)).map(R=>R.length?(R.reduce((C,L)=>C+Te(L),0)/R.length).toFixed(2):"—");g+=`<div class="sh-mini"><div class="sh-mini-lbl">${y("active.arrowShort1")}</div><div class="sh-mini-val sh-mini-val-sm">${T[0]}</div></div>`,g+=`<div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">${y("active.snt")}</div><div class="sh-mini-val sh-mini-val-acc">${p}</div></div>`,g+=`<div class="sh-mini"><div class="sh-mini-lbl">${y("active.arrowShort2")}</div><div class="sh-mini-val sh-mini-val-sm">${T[1]}</div></div>`}else g+=`<div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">${y("active.snt")}</div><div class="sh-mini-val sh-mini-val-acc">${p}</div></div>`;u.innerHTML=`
      <div class="sh-head">${c?'<span class="boost-dot"></span>':""}
        <span class="sh-name">${H(s.name)}</span>
        <div class="sh-mini-group">${g}</div>
      </div>
      <div class="arrows-row">${Array.from({length:t},(_,T)=>`
        <div class="arrow-grp">${t>=2?`<div class="arrow-lbl">${y("active.pilLabel",{n:T+1})}</div>`:""}
          <div class="score-btns">${r.map((R,C)=>`
            <button class="sbtn ${R==="M"?"rank-M":`rank-${C}`} ${l[T]===R?`sel-${R}`:""}" data-v="${R}"
              onclick="setScore(${i},${n},${T},'${R}')">${R}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(u)})}window.setScore=function(n,e,t,r){const s=r==="M"?"M":Number(r);m.round.shooters[n].scores[e][t]=s,Tc(),os(),vn()};function sC({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=iv(r),document.getElementById("gps-dist").textContent=ov(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function Tc(){if(!(!m.round||!m.user))try{await Pt(ne(K,"users",m.user.uid,"active","round"),rv(m.round))}catch(n){console.warn(n)}}async function iC(){var n;try{const e=await ar(ne(K,"users",m.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(t.id&&m.rounds.some(s=>s.id===t.id)){await Ht(ne(K,"users",m.user.uid,"active","round"));return}if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await Ht(ne(K,"users",m.user.uid,"active","round"));return}pr(y("active.resumeConfirm"),()=>{m.round=dP(t),m.round.traversalOrder=t.traversalOrder||sd(0,m.round.numTargets),m.round.traversalPos=t.traversalPos||0,m.round.courseId&&(m.course=m.courses.find(s=>s.id===m.round.courseId)||null),showActivePanel(),os(),vn(),Ec()})}catch(e){console.warn(e)}}function Ec(){const n=document.getElementById("app-main");n&&(n.scrollTop=0,requestAnimationFrame(()=>{n.scrollTop=0,setTimeout(()=>{n.scrollTop=0},100)}))}function dd(){document.getElementById("edit-panel").classList.add("hidden")}window.prevTarget=function(){!m.round||m.round.traversalPos<=0||(dd(),m.round.traversalPos--,Tc(),os(),vn(),Ec())};window.nextTarget=function(){m.round&&(dd(),m.round.traversalPos<m.round.numTargets-1?(m.round.traversalPos++,Tc(),os(),vn(),Ec()):window.finishRound())};window.skipToTarget=function(){m.round&&(document.getElementById("skip-input").max=m.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!m.round||n<1||n>m.round.numTargets)return;dd();const e=m.round.traversalOrder.indexOf(n-1);e!==-1&&(m.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),os(),vn()};window.finishRound=async function(){var o,c,l;m.finishTap++;const n=document.getElementById("finish-btn");if(m.finishTap===1){n.textContent=y("active.finishConfirm"),setTimeout(()=>{m.finishTap=0,n.textContent=y("active.finishNow")},3e3);return}m.finishTap=0,n.textContent=y("active.finishNow");let e={};m.gpsTracking&&(e=av(),m.gpsTracking=!1),ud();const t=m.round.id||"r_"+Date.now(),r=m.round.shooters.filter(u=>!u.isGuest).map(u=>u.id),s={...rv(m.round),completed:Date.now(),...e,id:t,shooterIds:r};m.rounds.unshift({...s,created:Date.now()}),jt(),Ws(),Pt(ne(K,"users",m.user.uid,"rounds",t),{...s,created:ke()}).catch(()=>q(y("active.networkError"),"error")),Pt(ne(K,"users",m.user.uid),{roundIndex:sy({id:t,completed:s.completed})},{merge:!0}).catch(()=>{}),m.round.shooters.filter(u=>!u.isGuest&&u.id!==m.user.uid).forEach(u=>{Pt(ne(K,"users",u.id,"rounds",t),{...s,created:ke()}).catch(()=>q(y("active.shareError"),"error"))});const i=m.round;if(i.courseId&&((o=m.profile)!=null&&o.kon)&&((c=m.profile)!=null&&c.bueklasse)){const u=i.shooters.find(h=>{var p;return h.id===((p=m.user)==null?void 0:p.uid)})||((l=i.shooters)==null?void 0:l[0]);if(u){const h=u.scores.flat().filter(p=>p!=null).length;Pt(ne(K,"bane_stats",i.courseId,"runder",t),{score:Et(u.scores),arrowsShot:h,kon:m.profile.kon,bueklasse:m.profile.bueklasse,numTargets:i.numTargets,ruleset:i.ruleset||cr,dato:ke()}).catch(p=>console.warn("bane_stats fejl:",p))}}window._lastRound=i,m.round=null,await Ht(ne(K,"users",m.user.uid,"active","round")).catch(()=>{}),fv(i),showResultsPanel()};window.abortRound=async function(){m.abortTap++;const n=document.getElementById("abort-btn");if(m.abortTap===1){n.textContent=y("active.abortConfirm"),setTimeout(()=>{m.abortTap=0,n.textContent=y("active.abort")},3e3);return}m.abortTap=0,n.textContent=y("active.abort"),m.gpsTracking&&(av(),m.gpsTracking=!1),ud(),await Ht(ne(K,"users",m.user.uid,"active","round")).catch(()=>{}),m.round=null,showSetupPanel()};window.showVisitResults=function(n){const e=m.rounds.find(r=>r.id===n);if(!e){q(y("active.notSavedLocally"),"error");return}const t=(e.shooters||[]).map(r=>({...r,scores:Jr(r.scores)}));window.switchTab("results"),_c({...e,shooters:t})};window.showRouteOnMap=function(n){!m.courseMap||!n.length||(m.courseMapLayer&&m.courseMap.removeLayer(m.courseMapLayer),m.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(m.courseMap),m.courseMap.fitBounds(m.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.openEditTarget=function(){var t,r;const n=ri(),e=(r=(t=m.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=ri();m.round.courseId&&(await od(m.round.courseId,e,{name:n}),(t=m.course)!=null&&t.targets&&(m.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),vn()};window.editGps=async function(){var n;try{const e=await yc(),t=ri();await od(m.round.courseId,t,{gps:e}),(n=m.course)!=null&&n.targets&&(m.course.targets[t].gps=e),q(y("active.gpsSaved"),"success")}catch(e){q(y("active.gpsError",{msg:e.message}),"error")}};const Fa="2026-08-30";function oC(n){return(n==null?void 0:n.privacyAcceptedVersion)===Fa}function aC(){return tv()==="da"?"privatliv.html":"privacy.html"}function Dv(){document.querySelectorAll("[data-privacy-link]").forEach(n=>{n.href=aC()})}function Nv(){const n=document.getElementById("newsletter-sw");n&&(n.classList.toggle("on",!!m.profile.newsletterConsent),n.onclick=async()=>{const e=!m.profile.newsletterConsent;n.classList.toggle("on",e);try{await nt(ne(K,"users",m.user.uid),{newsletterConsent:e,newsletterConsentAt:e?ke():null}),m.profile.newsletterConsent=e}catch(t){n.classList.toggle("on",!e),q(y("common.errorPrefix")+t.message,"error")}})}const tm={"auth/user-not-found":"auth.errUserNotFound","auth/wrong-password":"auth.errWrongPassword","auth/invalid-credential":"auth.errInvalidCredential","auth/email-already-in-use":"auth.errEmailInUse","auth/weak-password":"auth.errWeakPassword","auth/invalid-email":"auth.errInvalidEmail","auth/too-many-requests":"auth.errTooManyRequests","auth/network-request-failed":"auth.errNetwork"};function hd(n){return tm[n]?y(tm[n]):y("auth.errGeneric")}function ln(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){ln(y("auth.errFillAllFields"));return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await CI(Io,n,e)}catch(r){ln(hd(r.code))}finally{t.disabled=!1,t.textContent=y("auth.loginBtn")}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value,r=document.getElementById("signup-kon").value,s=document.getElementById("signup-bueklasse").value,i=document.getElementById("signup-privacy-accept").checked,o=document.getElementById("signup-newsletter-opt").checked;if(!n||!e||!t||!r||!s){ln(y("auth.errFillAllFields"));return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){ln(y("auth.errInvalidEmail"));return}if(t.length<6){ln(y("auth.errPasswordTooShort"));return}if(!i){ln(y("auth.errPrivacyRequired"));return}const c=document.querySelector("#signup-form .btn");c.disabled=!0,c.textContent="...";try{const l=await PI(Io,e,t);await Pt(ne(K,"users",l.user.uid),{name:n,email:e,yam:n,"e-mail":e,kon:r,bueklasse:s,created:ke(),privacyAcceptedVersion:Fa,privacyAcceptedAt:ke(),newsletterConsent:o,newsletterConsentAt:o?ke():null})}catch(l){ln(hd(l.code))}finally{c.disabled=!1,c.textContent=y("auth.signupBtn")}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){ln(y("auth.errEnterEmailFirst"));return}try{await RI(Io,n),ln(y("auth.resetEmailSent"),"ok")}catch(e){ln(hd(e.code))}};window.doLogout=async function(){try{await xI(Io)}catch{}};window.toggleGpsPause=fP;window.parseRoute=sv;const xv="archery_push_dismissed";document.addEventListener("DOMContentLoaded",()=>{var c,l,u,h,p,g,_;tP(),Dv();const n=document.getElementById("boost-enabled-sw");if(n){const T=localStorage.getItem("boostEnabled");m.boostEnabled=T===null?!0:T==="true",n.classList.toggle("on",m.boostEnabled),n.addEventListener("click",()=>{m.boostEnabled=!m.boostEnabled,n.classList.toggle("on",m.boostEnabled),localStorage.setItem("boostEnabled",m.boostEnabled)})}const e=document.getElementById("show-distances-sw");e&&(m.showDistances=localStorage.getItem("archery_showDistances")==="true",e.classList.toggle("on",m.showDistances),e.addEventListener("click",()=>{m.showDistances=!m.showDistances,e.classList.toggle("on",m.showDistances),localStorage.setItem("archery_showDistances",m.showDistances),m.round&&vn()})),NI(Io,async T=>{if(T){m.user=T;let R,C;for(let L=0;L<3;L++)try{[R,C]=await Promise.all([ar(ne(K,"users",T.uid)),ar(ne(K,"admins",T.uid))]);break}catch(M){console.error("Profil fejl attempt",L,M.code,M.message),L<2?await new Promise(x=>setTimeout(x,2e3*(L+1))):(m.profile={name:T.email,email:T.email},m.isAdmin=!1)}if(R!=null&&R.exists()){const L=R.data();m.profile={name:L.name||L.yam||T.email,email:L.email||L["e-mail"]||T.email,kon:L.kon||null,bueklasse:L.bueklasse||null,privacyAcceptedVersion:L.privacyAcceptedVersion||null,newsletterConsent:L.newsletterConsent||!1}}else m.profile||(m.profile={name:T.email,email:T.email});m.isAdmin=(C==null?void 0:C.exists())||!1,m.isSuperAdmin=m.isAdmin&&T.email==="bsklausen@proton.me",cC()}else lC()});const t="archery_pwa_dismissed",r=localStorage.getItem(t)==="1";let s=null;window.addEventListener("beforeinstallprompt",T=>{T.preventDefault(),s=T,r||document.getElementById("pwa-banner").classList.remove("hidden")}),(c=document.getElementById("pwa-install-btn"))==null||c.addEventListener("click",async()=>{s&&(s.prompt(),await s.userChoice,s=null,document.getElementById("pwa-banner").classList.add("hidden"))}),(l=document.getElementById("pwa-dismiss-btn"))==null||l.addEventListener("click",()=>{document.getElementById("pwa-banner").classList.add("hidden"),localStorage.setItem(t,"1")}),(u=document.getElementById("push-enable-btn"))==null||u.addEventListener("click",async()=>{document.getElementById("push-banner").classList.add("hidden"),await Rv()&&q(y("banners.push.enabledToast"),"success")}),(h=document.getElementById("push-dismiss-btn"))==null||h.addEventListener("click",()=>{document.getElementById("push-banner").classList.add("hidden"),localStorage.setItem(xv,"1")});const i=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.MSStream,o=window.navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches;i&&!o&&!r&&((p=document.getElementById("ios-install-banner"))==null||p.classList.remove("hidden")),(g=document.getElementById("ios-dismiss-btn"))==null||g.addEventListener("click",()=>{document.getElementById("ios-install-banner").classList.add("hidden"),localStorage.setItem(t,"1")}),ha(24),document.getElementById("target-count").addEventListener("change",T=>{const R=T.target.value,C=document.getElementById("target-count-custom");C.style.display=R==="custom"?"":"none",R!=="custom"&&ha(Number(R))}),document.getElementById("target-count-custom").addEventListener("input",T=>{const R=Number(T.target.value);R>0&&ha(R)}),(_=document.getElementById("photo-input"))==null||_.addEventListener("change",async T=>{var C;const R=T.target.files[0];if(R)try{const L=await lv(R),M=ri(),x=Ay(Jy,`courses/${m.round.courseId}/target_${M}.jpg`);await Ey(x,L,"base64",{contentType:"image/jpeg"});const B=await by(x);await od(m.round.courseId,M,{imageUrl:B}),(C=m.course)!=null&&C.targets&&(m.course.targets[M].imageUrl=B),vn()}catch(L){q(y("courses.uploadErrorToast",{msg:L.message}),"error")}}),document.querySelectorAll(".modal").forEach(T=>{T.addEventListener("click",R=>{R.target===T&&T.classList.add("hidden")})})});window.saveProfilModal=async function(){const n=document.getElementById("profil-kon").value,e=document.getElementById("profil-bueklasse").value,t=document.getElementById("profil-err");if(!n||!e){t.textContent=y("modals.profil.validationMsg"),t.classList.remove("hidden");return}t.classList.add("hidden");try{await nt(ne(K,"users",m.user.uid),{kon:n,bueklasse:e}),m.profile.kon=n,m.profile.bueklasse=e,document.getElementById("profil-modal").classList.add("hidden")}catch{t.textContent=y("modals.profil.saveError"),t.classList.remove("hidden")}};window.savePrivacyConsent=async function(){const n=document.getElementById("privacy-gate-err");if(!document.getElementById("privacy-gate-accept").checked){n.textContent=y("auth.errPrivacyRequired"),n.classList.remove("hidden");return}n.classList.add("hidden");const e=document.getElementById("privacy-gate-newsletter").checked;try{await nt(ne(K,"users",m.user.uid),{privacyAcceptedVersion:Fa,privacyAcceptedAt:ke(),newsletterConsent:e,newsletterConsentAt:e?ke():null}),m.profile.privacyAcceptedVersion=Fa,m.profile.newsletterConsent=e,Nv(),document.getElementById("privacy-gate-modal").classList.add("hidden"),(!m.profile.kon||!m.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),300)}catch(t){n.textContent=y("common.errorPrefix")+t.message,n.classList.remove("hidden")}};function cC(){document.getElementById("hdr-name").textContent=m.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),oC(m.profile)?(!m.profile.kon||!m.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),800):setTimeout(()=>document.getElementById("privacy-gate-modal").classList.remove("hidden"),800),Nv(),document.getElementById("admin-badge").classList.toggle("hidden",!m.isAdmin),document.querySelectorAll(".admin-only").forEach(t=>t.classList.toggle("hidden",!m.isAdmin));const n=Kf();m.friends=n.friends||[],m.rounds=n.rounds||[],st(tt(K,"users",m.user.uid,"friends")).then(t=>{m.friends=t.docs.map(r=>({...r.data(),id:r.id})),jt(),rr(),Hs()}).catch(t=>console.warn("Hent venner:",t)),rr(),Hs(),Ws(),m.pendingRound=new URLSearchParams(window.location.search).get("round")||null,m.pendingRound&&em();const e=Kf().courses||[];m.courses=e,is(),fd(),uC(),st(tt(K,"users",m.user.uid,"rounds")).then(t=>{const r=new Set(t.docs.map(c=>c.id)),s=t.docs.map(c=>({...c.data(),id:c.id}));if(s.length){const c=new Set(m.rounds.map(u=>u.id)),l=s.filter(u=>!c.has(u.id));l.length&&(m.rounds=[...m.rounds,...l].sort((u,h)=>{var _,T;const p=u.completed||u.created||0,g=h.completed||h.created||0;return(typeof g=="number"?g:((_=g.toMillis)==null?void 0:_.call(g))??0)-(typeof p=="number"?p:((T=p.toMillis)==null?void 0:T.call(p))??0)}),jt(),Ws(),m.pendingRound&&em())}const i=m.rounds.filter(c=>c.id&&!r.has(c.id));i.forEach(c=>{const{id:l,...u}=c;Pt(ne(K,"users",m.user.uid,"rounds",l),{...u,created:ke()}).catch(()=>{})});const o=[...s,...i].filter(c=>c.id).map(c=>({id:c.id,completed:c.completed||0}));o.length&&Pt(ne(K,"users",m.user.uid),{roundIndex:o},{merge:!0}).catch(()=>{})}).catch(t=>console.warn("Hent runder:",t)),yP(),ld().then(()=>{Wt(),bo()}).catch(t=>console.warn("Hent meetups:",t)),Ev().then(()=>{gr(),rr(),Ic()}).catch(t=>console.warn("Hent delinger:",t)),Sv().then(t=>{t&&qP()}),jP(),UP()&&localStorage.getItem(xv)!=="1"&&document.getElementById("pwa-banner").classList.contains("hidden")&&document.getElementById("ios-install-banner").classList.contains("hidden")&&setTimeout(()=>{var t;return(t=document.getElementById("push-banner"))==null?void 0:t.classList.remove("hidden")},1e3),iC()}function lC(){m.user=null,m.profile=null,m.round=null,ud(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){eP(tv()==="da"?"en":"da"),Dv();const n=[Oa.da.setup.roundNameDefault,Oa.en.setup.roundNameDefault],e=document.getElementById("round-name");e&&n.includes(e.value)&&(e.value=y("setup.roundNameDefault")),m.round&&n.includes(m.round.name)&&(m.round.name=y("setup.roundNameDefault")),fd(),m.round&&(vn(),os()),document.getElementById("tab-results").classList.contains("active")&&Ws(),!document.getElementById("results-panel").classList.contains("hidden")&&window._lastRound&&fv(window._lastRound);const t=document.getElementById("round-popup");t&&!t.classList.contains("hidden")&&window._lastRound&&_c(window._lastRound),document.getElementById("tab-courses").classList.contains("active")&&is(),document.getElementById("tab-friends").classList.contains("active")&&(rr(),Hs(),uv(),Wt(),gr()),document.getElementById("tab-analyse").classList.contains("active")&&window.renderAnalyse()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&(uv(),Wt(),NP(),gr(),BP()),n==="analyse"&&window.renderAnalyse(),n==="courses"&&m.courseMap&&setTimeout(()=>m.courseMap.invalidateSize(),100)};function uC(){!navigator.geolocation||!m.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(m.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=id(e,o);c<t&&(t=c,r=s.id)})}),r&&t<500){const s=document.getElementById("course-sel");s.value=r,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function fd(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML=`<option value="">${y("setup.noCourse")}</option>`,[...m.courses].sort((t,r)=>t.name.localeCompare(r.name,"da")).forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${y("setup.targetsUnit",{n:t.numTargets})})`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=m.courses.find(i=>i.id===n.value),r=document.getElementById("target-count"),s=document.getElementById("target-count-custom");t?(!!r.querySelector(`option[value="${t.numTargets}"]`)?(r.value=String(t.numTargets),s.style.display="none"):(r.value="custom",s.value=t.numTargets,s.style.display=""),r.disabled=!0,s.disabled=!0):(r.disabled=!1,s.disabled=!1,r.value!=="custom"&&(s.style.display="none")),ha(t?t.numTargets:r.value==="custom"?Number(s.value):Number(r.value))}}window.populateCourseDropdown=fd;function ha(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}const nm="https://bsk65.github.io/video/";window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:160,height:160,colorDark:"#1a3a1a",colorLight:"#fff"}),document.getElementById("qr-url").value=window.location.href;const e=document.getElementById("qr-canvas-other");e.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(e,{text:nm,width:160,height:160,colorDark:"#1a3a1a",colorLight:"#fff"}),document.getElementById("qr-url-other").value=nm};window.copyQrUrl=function(){var e;const n=document.getElementById("qr-url");(e=navigator.clipboard)==null||e.writeText(n.value).then(()=>q(y("common.linkCopied"),"success"),()=>{n.select(),document.execCommand("copy"),q(y("common.linkCopied"),"success")})};window.copyQrUrlOther=function(){var e;const n=document.getElementById("qr-url-other");(e=navigator.clipboard)==null||e.writeText(n.value).then(()=>q(y("common.linkCopied"),"success"),()=>{n.select(),document.execCommand("copy"),q(y("common.linkCopied"),"success")})};window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
