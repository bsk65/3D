(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var xu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,f=s>>2,p=(s&3)<<4|c>>4;let _=(c&15)<<2|d>>6,T=d&63;l||(T=64,o||(_=64)),r.push(t[f],t[p],t[_],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Eh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||p==null)throw new Cg;const _=s<<2|c>>4;if(r.push(_),d!==64){const T=c<<4&240|d>>2;if(r.push(T),p!==64){const x=d<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kg=function(n){const e=Eh(n);return Th.encodeByteArray(e,!0)},co=function(n){return kg(n).replace(/\./g,"")},bh=function(n){try{return Th.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vg=()=>Dg().__FIREBASE_DEFAULTS__,Ng=()=>{if(typeof process>"u"||typeof xu>"u")return;const n=xu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Lg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bh(n[1]);return e&&JSON.parse(e)},Vo=()=>{try{return Vg()||Ng()||Lg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ah=n=>{var e,t;return(t=(e=Vo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Og=n=>{const e=Ah(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Rh=()=>{var n;return(n=Vo())===null||n===void 0?void 0:n.config},Sh=n=>{var e;return(e=Vo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Fg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[co(JSON.stringify(t)),co(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Ug(){var n;const e=(n=Vo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $g(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qg(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ph(){return!Ug()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xh(){try{return typeof indexedDB=="object"}catch{return!1}}function Gg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="FirebaseError";class Vt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Kg,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Hg(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Vt(i,c,r)}}function Hg(n,e){return n.replace(Wg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Wg=/\{\$([^}]+)}/g;function Qg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ni(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Cu(s)&&Cu(o)){if(!Ni(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Cu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function _i(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jg(n,e){const t=new Xg(n,e);return t.subscribe.bind(t)}class Xg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=xa),i.error===void 0&&(i.error=xa),i.complete===void 0&&(i.complete=xa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xa(){}/**
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
 */function Re(n){return n&&n._delegate?n._delegate:n}class _n{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mn="[DEFAULT]";/**
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
 */class Zg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Mg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(t_(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e_(n){return n===Mn?void 0:n}function t_(n){return n.instantiationMode==="EAGER"}/**
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
 */class n_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const r_={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},i_=re.INFO,s_={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},o_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=s_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ac{constructor(e){this.name=e,this._logLevel=i_,this._logHandler=o_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?r_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const a_=(n,e)=>e.some(t=>n instanceof t);let ku,Du;function c_(){return ku||(ku=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l_(){return Du||(Du=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ch=new WeakMap,Ga=new WeakMap,kh=new WeakMap,Ca=new WeakMap,Rc=new WeakMap;function u_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(fn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ch.set(t,n)}).catch(()=>{}),Rc.set(e,n),e}function d_(n){if(Ga.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ga.set(n,e)}let Ka={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ga.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function h_(n){Ka=n(Ka)}function f_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ka(this),e,...t);return kh.set(r,e.sort?e.sort():[e]),fn(r)}:l_().includes(n)?function(...e){return n.apply(ka(this),e),fn(Ch.get(this))}:function(...e){return fn(n.apply(ka(this),e))}}function p_(n){return typeof n=="function"?f_(n):(n instanceof IDBTransaction&&d_(n),a_(n,c_())?new Proxy(n,Ka):n)}function fn(n){if(n instanceof IDBRequest)return u_(n);if(Ca.has(n))return Ca.get(n);const e=p_(n);return e!==n&&(Ca.set(n,e),Rc.set(e,n)),e}const ka=n=>Rc.get(n);function m_(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=fn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fn(o.result),l.oldVersion,l.newVersion,fn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const g_=["get","getKey","getAll","getAllKeys","count"],__=["put","add","delete","clear"],Da=new Map;function Vu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Da.get(e))return Da.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=__.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||g_.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return Da.set(e,s),s}h_(n=>({...n,get:(e,t,r)=>Vu(e,t)||n.get(e,t,r),has:(e,t)=>!!Vu(e,t)||n.has(e,t)}));/**
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
 */class y_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(v_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function v_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ha="@firebase/app",Nu="0.10.13";/**
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
 */const zt=new Ac("@firebase/app"),I_="@firebase/app-compat",w_="@firebase/analytics-compat",E_="@firebase/analytics",T_="@firebase/app-check-compat",b_="@firebase/app-check",A_="@firebase/auth",R_="@firebase/auth-compat",S_="@firebase/database",P_="@firebase/data-connect",x_="@firebase/database-compat",C_="@firebase/functions",k_="@firebase/functions-compat",D_="@firebase/installations",V_="@firebase/installations-compat",N_="@firebase/messaging",L_="@firebase/messaging-compat",O_="@firebase/performance",M_="@firebase/performance-compat",F_="@firebase/remote-config",B_="@firebase/remote-config-compat",U_="@firebase/storage",$_="@firebase/storage-compat",j_="@firebase/firestore",z_="@firebase/vertexai-preview",q_="@firebase/firestore-compat",G_="firebase",K_="10.14.1";/**
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
 */const Wa="[DEFAULT]",H_={[Ha]:"fire-core",[I_]:"fire-core-compat",[E_]:"fire-analytics",[w_]:"fire-analytics-compat",[b_]:"fire-app-check",[T_]:"fire-app-check-compat",[A_]:"fire-auth",[R_]:"fire-auth-compat",[S_]:"fire-rtdb",[P_]:"fire-data-connect",[x_]:"fire-rtdb-compat",[C_]:"fire-fn",[k_]:"fire-fn-compat",[D_]:"fire-iid",[V_]:"fire-iid-compat",[N_]:"fire-fcm",[L_]:"fire-fcm-compat",[O_]:"fire-perf",[M_]:"fire-perf-compat",[F_]:"fire-rc",[B_]:"fire-rc-compat",[U_]:"fire-gcs",[$_]:"fire-gcs-compat",[j_]:"fire-fst",[q_]:"fire-fst-compat",[z_]:"fire-vertex","fire-js":"fire-js",[G_]:"fire-js-all"};/**
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
 */const lo=new Map,W_=new Map,Qa=new Map;function Lu(n,e){try{n.container.addComponent(e)}catch(t){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wn(n){const e=n.name;if(Qa.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;Qa.set(e,n);for(const t of lo.values())Lu(t,n);for(const t of W_.values())Lu(t,n);return!0}function No(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function bt(n){return n.settings!==void 0}/**
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
 */const Q_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pn=new Yi("app","Firebase",Q_);/**
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
 */class J_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
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
 */const or=K_;function Dh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(t||(t=Rh()),!t)throw pn.create("no-options");const s=lo.get(i);if(s){if(Ni(t,s.options)&&Ni(r,s.config))return s;throw pn.create("duplicate-app",{appName:i})}const o=new n_(i);for(const l of Qa.values())o.addComponent(l);const c=new J_(t,r,o);return lo.set(i,c),c}function Vh(n=Wa){const e=lo.get(n);if(!e&&n===Wa&&Rh())return Dh();if(!e)throw pn.create("no-app",{appName:n});return e}function St(n,e,t){var r;let i=(r=H_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(c.join(" "));return}Wn(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const X_="firebase-heartbeat-database",Y_=1,Li="firebase-heartbeat-store";let Va=null;function Nh(){return Va||(Va=m_(X_,Y_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Li)}catch(t){console.warn(t)}}}}).catch(n=>{throw pn.create("idb-open",{originalErrorMessage:n.message})})),Va}async function Z_(n){try{const t=(await Nh()).transaction(Li),r=await t.objectStore(Li).get(Lh(n));return await t.done,r}catch(e){if(e instanceof Vt)zt.warn(e.message);else{const t=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(t.message)}}}async function Ou(n,e){try{const r=(await Nh()).transaction(Li,"readwrite");await r.objectStore(Li).put(e,Lh(n)),await r.done}catch(t){if(t instanceof Vt)zt.warn(t.message);else{const r=pn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});zt.warn(r.message)}}}function Lh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ey=1024,ty=30*24*60*60*1e3;class ny{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=ty}),this._storage.overwrite(this._heartbeatsCache))}catch(r){zt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mu(),{heartbeatsToSend:r,unsentEntries:i}=ry(this._heartbeatsCache.heartbeats),s=co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return zt.warn(t),""}}}function Mu(){return new Date().toISOString().substring(0,10)}function ry(n,e=ey){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class iy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xh()?Gg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Z_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fu(n){return co(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function sy(n){Wn(new _n("platform-logger",e=>new y_(e),"PRIVATE")),Wn(new _n("heartbeat",e=>new ny(e),"PRIVATE")),St(Ha,Nu,n),St(Ha,Nu,"esm2017"),St("fire-js","")}sy("");var oy="firebase",ay="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(oy,ay,"app");function Sc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Oh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cy=Oh,Mh=new Yi("auth","Firebase",Oh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Ac("@firebase/auth");function ly(n,...e){uo.logLevel<=re.WARN&&uo.warn(`Auth (${or}): ${n}`,...e)}function Gs(n,...e){uo.logLevel<=re.ERROR&&uo.error(`Auth (${or}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,...e){throw Pc(n,...e)}function Pt(n,...e){return Pc(n,...e)}function Fh(n,e,t){const r=Object.assign(Object.assign({},cy()),{[e]:t});return new Yi("auth","Firebase",r).create(e,{appName:n.name})}function jt(n){return Fh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Mh.create(n,...e)}function Q(n,e,...t){if(!n)throw Pc(e,...t)}function Mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gs(e),new Error(e)}function qt(n,e){n||Mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function uy(){return Bu()==="http:"||Bu()==="https:"}function Bu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uy()||jg()||"connection"in navigator)?navigator.onLine:!0}function hy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.shortDelay=e,this.longDelay=t,qt(t>e,"Short delay should be less than long delay!"),this.isMobile=Bg()||zg()}get(){return dy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n,e){qt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new es(3e4,6e4);function Ht(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Wt(n,e,t,r,i={}){return Uh(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=Zi(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},s);return $g()||(d.referrerPolicy="no-referrer"),Bh.fetch()($h(n,n.config.apiHost,t,c),d)})}async function Uh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},fy),e);try{const i=new gy(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Os(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Os(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Os(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Os(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Fh(n,f,d);yt(n,f)}}catch(i){if(i instanceof Vt)throw i;yt(n,"network-request-failed",{message:String(i)})}}async function ts(n,e,t,r,i={}){const s=await Wt(n,e,t,r,i);return"mfaPendingCredential"in s&&yt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function $h(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?xc(n.config,i):`${n.config.apiScheme}://${i}`}function my(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),py.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Os(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Pt(n,e,r);return i.customData._tokenResponse=t,i}function Uu(n){return n!==void 0&&n.enterprise!==void 0}class _y{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return my(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yy(n,e){return Wt(n,"GET","/v2/recaptchaConfig",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(n,e){return Wt(n,"POST","/v1/accounts:delete",e)}async function jh(n,e){return Wt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Iy(n,e=!1){const t=Re(n),r=await t.getIdToken(e),i=Cc(r);Q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ai(Na(i.auth_time)),issuedAtTime:Ai(Na(i.iat)),expirationTime:Ai(Na(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Na(n){return Number(n)*1e3}function Cc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Gs("JWT malformed, contained fewer than 3 sections"),null;try{const i=bh(t);return i?JSON.parse(i):(Gs("Failed to decode base64 JWT payload"),null)}catch(i){return Gs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $u(n){const e=Cc(n);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Vt&&wy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ho(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Oi(n,jh(t,{idToken:r}));Q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?zh(s.providerUserInfo):[],c=by(n.providerData,o),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Xa(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function Ty(n){const e=Re(n);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function by(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zh(n){return n.map(e=>{var{providerId:t}=e,r=Sc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(n,e){const t=await Uh(n,{},async()=>{const r=Zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=$h(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Bh.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ry(n,e){return Wt(n,"POST","/v2/accounts:revokeToken",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$u(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=$u(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ay(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ar;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(n,e){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ey(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Iy(this,e)}reload(){return Ty(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await Oi(this,vy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,l,d,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,T=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,$=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:U,isAnonymous:K,providerData:W,stsTokenManager:w}=t;Q(N&&w,e,"internal-error");const y=Ar.fromJSON(this.name,w);Q(typeof N=="string",e,"internal-error"),nn(p,e.name),nn(_,e.name),Q(typeof U=="boolean",e,"internal-error"),Q(typeof K=="boolean",e,"internal-error"),nn(T,e.name),nn(x,e.name),nn(C,e.name),nn(P,e.name),nn($,e.name),nn(M,e.name);const v=new Ft({uid:N,auth:e,email:_,emailVerified:U,displayName:p,isAnonymous:K,photoURL:x,phoneNumber:T,tenantId:C,stsTokenManager:y,createdAt:$,lastLoginAt:M});return W&&Array.isArray(W)&&(v.providerData=W.map(E=>Object.assign({},E))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ar;i.updateFromServerResponse(t);const s=new Ft({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ho(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?zh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Ar;c.updateFromIdToken(r);const l=new Ft({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map;function Bt(n){qt(n instanceof Function,"Expected a class definition");let e=ju.get(n);return e?(qt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ju.set(n,e),e)}/**
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
 */class qh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qh.type="NONE";const zu=qh;/**
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
 */function Ks(n,e,t){return`firebase:${n}:${e}:${t}`}class Rr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ks(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ks("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Rr(Bt(zu),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Bt(zu);const o=Ks(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(o);if(f){const p=Ft._fromJSON(e,f);d!==s&&(c=p),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Rr(s,e,r):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Rr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jh(e))return"Blackberry";if(Xh(e))return"Webos";if(Kh(e))return"Safari";if((e.includes("chrome/")||Hh(e))&&!e.includes("edge/"))return"Chrome";if(Qh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gh(n=Le()){return/firefox\//i.test(n)}function Kh(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hh(n=Le()){return/crios\//i.test(n)}function Wh(n=Le()){return/iemobile/i.test(n)}function Qh(n=Le()){return/android/i.test(n)}function Jh(n=Le()){return/blackberry/i.test(n)}function Xh(n=Le()){return/webos/i.test(n)}function kc(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Sy(n=Le()){var e;return kc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Py(){return qg()&&document.documentMode===10}function Yh(n=Le()){return kc(n)||Qh(n)||Xh(n)||Jh(n)||/windows phone/i.test(n)||Wh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n,e=[]){let t;switch(n){case"Browser":t=qu(Le());break;case"Worker":t=`${qu(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${or}/${r}`}/**
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
 */class xy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Cy(n,e={}){return Wt(n,"GET","/v2/passwordPolicy",Ht(n,e))}/**
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
 */const ky=6;class Dy{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ky,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gu(this),this.idTokenSubscription=new Gu(this),this.beforeStateQueue=new xy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await jh(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(jt(this));const t=e?Re(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cy(this),t=new Dy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ry(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ly(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wn(n){return Re(n)}class Gu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jg(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ny(n){Lo=n}function ef(n){return Lo.loadJS(n)}function Ly(){return Lo.recaptchaEnterpriseScript}function Oy(){return Lo.gapiScript}function My(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Fy="recaptcha-enterprise",By="NO_RECAPTCHA";class Uy{constructor(e){this.type=Fy,this.auth=wn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{yy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new _y(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){const l=window.grecaptcha;Uu(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(By)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&Uu(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ly();l.length!==0&&(l+=c),ef(l).then(()=>{i(c,s,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Ku(n,e,t,r=!1){const i=new Uy(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fo(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ku(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ku(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(n,e){const t=No(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ni(s,e??{}))return i;yt(i,"already-initialized")}return t.initialize({options:e})}function jy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zy(n,e,t){const r=wn(n);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=tf(e),{host:o,port:c}=qy(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Gy()}function tf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qy(n){const e=tf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hu(o)}}}function Hu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Gy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,t){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}async function Ky(n,e){return Wt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(n,e){return ts(n,"POST","/v1/accounts:signInWithPassword",Ht(n,e))}async function Wy(n,e){return Wt(n,"POST","/v1/accounts:sendOobCode",Ht(n,e))}async function Qy(n,e){return Wy(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(n,e){return ts(n,"POST","/v1/accounts:signInWithEmailLink",Ht(n,e))}async function Xy(n,e){return ts(n,"POST","/v1/accounts:signInWithEmailLink",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Dc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Mi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Mi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,t,"signInWithPassword",Hy);case"emailLink":return Jy(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,r,"signUpPassword",Ky);case"emailLink":return Xy(e,{idToken:t,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(n,e){return ts(n,"POST","/v1/accounts:signInWithIdp",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="http://localhost";class Qn extends Dc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Sc(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Sr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Sr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sr(e,t)}buildRequest(){const e={requestUri:Yy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ev(n){const e=gi(_i(n)).link,t=e?gi(_i(e)).deep_link_id:null,r=gi(_i(n)).deep_link_id;return(r?gi(_i(r)).link:null)||r||t||e||n}class Vc{constructor(e){var t,r,i,s,o,c;const l=gi(_i(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Zy((i=l.mode)!==null&&i!==void 0?i:null);Q(d&&f&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=ev(e);try{return new Vc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,t){return Mi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Vc.parseLink(t);return Q(r,"argument-error"),Mi._fromEmailAndCode(e,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ns extends nf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends ns{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return an.credential(t,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends ns{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends ns{constructor(){super("twitter.com")}static credential(e,t){return Qn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ln.credential(t,r)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(n,e){return ts(n,"POST","/v1/accounts:signUp",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ft._fromIdTokenResponse(e,r,i),o=Wu(r);return new Jn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Wu(r);return new Jn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Wu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Vt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,po.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new po(e,t,r,i)}}function rf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?po._fromErrorAndOperation(n,s,e,r):s})}async function nv(n,e,t=!1){const r=await Oi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Jn._forOperation(n,"link",r)}/**
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
 */async function rv(n,e,t=!1){const{auth:r}=n;if(bt(r.app))return Promise.reject(jt(r));const i="reauthenticate";try{const s=await Oi(n,rf(r,i,e,n),t);Q(s.idToken,r,"internal-error");const o=Cc(s.idToken);Q(o,r,"internal-error");const{sub:c}=o;return Q(n.uid===c,r,"user-mismatch"),Jn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sf(n,e,t=!1){if(bt(n.app))return Promise.reject(jt(n));const r="signIn",i=await rf(n,r,e),s=await Jn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function iv(n,e){return sf(wn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(n){const e=wn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sv(n,e,t){const r=wn(n);await fo(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Qy)}async function ov(n,e,t){if(bt(n.app))return Promise.reject(jt(n));const r=wn(n),o=await fo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&of(n),l}),c=await Jn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function av(n,e,t){return bt(n.app)?Promise.reject(jt(n)):iv(Re(n),zr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&of(n),r})}function cv(n,e,t,r){return Re(n).onIdTokenChanged(e,t,r)}function lv(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function uv(n,e,t,r){return Re(n).onAuthStateChanged(e,t,r)}function dv(n){return Re(n).signOut()}const mo="__sak";/**
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
 */class af{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=1e3,fv=10;class cf extends af{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Py()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cf.type="LOCAL";const pv=cf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends af{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lf.type="SESSION";const uf=lf;/**
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
 */function mv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Oo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async d=>d(t.origin,s)),l=await mv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class gv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const d=Nc("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const _=p;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function _v(n){xt().location.href=n}/**
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
 */function df(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function yv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Iv(){return df()?self:null}/**
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
 */const hf="firebaseLocalStorageDb",wv=1,go="firebaseLocalStorage",ff="fbase_key";class rs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mo(n,e){return n.transaction([go],e?"readwrite":"readonly").objectStore(go)}function Ev(){const n=indexedDB.deleteDatabase(hf);return new rs(n).toPromise()}function Ya(){const n=indexedDB.open(hf,wv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(go,{keyPath:ff})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(go)?e(r):(r.close(),await Ev(),e(await Ya()))})})}async function Qu(n,e,t){const r=Mo(n,!0).put({[ff]:e,value:t});return new rs(r).toPromise()}async function Tv(n,e){const t=Mo(n,!1).get(e),r=await new rs(t).toPromise();return r===void 0?null:r.value}function Ju(n,e){const t=Mo(n,!0).delete(e);return new rs(t).toPromise()}const bv=800,Av=3;class pf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ya(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Av)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return df()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oo._getInstance(Iv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yv(),!this.activeServiceWorker)return;this.sender=new gv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ya();return await Qu(e,mo,"1"),await Ju(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Tv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ju(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Mo(i,!1).getAll();return new rs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pf.type="LOCAL";const Rv=pf;new es(3e4,6e4);/**
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
 */function Sv(n,e){return e?Bt(e):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Lc extends Dc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pv(n){return sf(n.auth,new Lc(n),n.bypassAuthState)}function xv(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),rv(t,new Lc(n),n.bypassAuthState)}async function Cv(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),nv(t,new Lc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pv;case"linkViaPopup":case"linkViaRedirect":return Cv;case"reauthViaPopup":case"reauthViaRedirect":return xv;default:yt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=new es(2e3,1e4);class br extends mf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kv.get())};e()}}br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="pendingRedirect",Hs=new Map;class Vv extends mf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hs.get(this.auth._key());if(!e){try{const r=await Nv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hs.set(this.auth._key(),e)}return this.bypassAuthState||Hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nv(n,e){const t=Mv(e),r=Ov(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Lv(n,e){Hs.set(n._key(),e)}function Ov(n){return Bt(n._redirectPersistence)}function Mv(n){return Ks(Dv,n.config.apiKey,n.name)}async function Fv(n,e,t=!1){if(bt(n.app))return Promise.reject(jt(n));const r=wn(n),i=Sv(r,e),o=await new Vv(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=10*60*1e3;class Uv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$v(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Pt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xu(e))}saveEventToCache(e){this.cachedEventUids.add(Xu(e)),this.lastProcessedEventTime=Date.now()}}function Xu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $v(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(n,e={}){return Wt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qv=/^https?/;async function Gv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await jv(n);for(const t of e)try{if(Kv(t))return}catch{}yt(n,"unauthorized-domain")}function Kv(n){const e=Ja(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!qv.test(t))return!1;if(zv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Hv=new es(3e4,6e4);function Yu(){const n=xt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Wv(n){return new Promise((e,t)=>{var r,i,s;function o(){Yu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yu(),t(Pt(n,"network-request-failed"))},timeout:Hv.get()})}if(!((i=(r=xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xt().gapi)===null||s===void 0)&&s.load)o();else{const c=My("iframefcb");return xt()[c]=()=>{gapi.load?o():t(Pt(n,"network-request-failed"))},ef(`${Oy()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ws=null,e})}let Ws=null;function Qv(n){return Ws=Ws||Wv(n),Ws}/**
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
 */const Jv=new es(5e3,15e3),Xv="__/auth/iframe",Yv="emulator/auth/iframe",Zv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tI(n){const e=n.config;Q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xc(e,Yv):`https://${n.config.authDomain}/${Xv}`,r={apiKey:e.apiKey,appName:n.name,v:or},i=eI.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Zi(r).slice(1)}`}async function nI(n){const e=await Qv(n),t=xt().gapi;return Q(t,n,"internal-error"),e.open({where:document.body,url:tI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pt(n,"network-request-failed"),c=xt().setTimeout(()=>{s(o)},Jv.get());function l(){xt().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const rI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iI=500,sI=600,oI="_blank",aI="http://localhost";class Zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cI(n,e,t,r=iI,i=sI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},rI),{width:r.toString(),height:i.toString(),top:s,left:o}),d=Le().toLowerCase();t&&(c=Hh(d)?oI:t),Gh(d)&&(e=e||aI,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[T,x])=>`${_}${T}=${x},`,"");if(Sy(d)&&c!=="_self")return lI(e||"",c),new Zu(null);const p=window.open(e||"",c,f);Q(p,n,"popup-blocked");try{p.focus()}catch{}return new Zu(p)}function lI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const uI="__/auth/handler",dI="emulator/auth/handler",hI=encodeURIComponent("fac");async function ed(n,e,t,r,i,s){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:or,eventId:i};if(e instanceof nf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Qg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ns){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${hI}=${encodeURIComponent(l)}`:"";return`${fI(n)}?${Zi(c).slice(1)}${d}`}function fI({config:n}){return n.emulator?xc(n,dI):`https://${n.authDomain}/${uI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="webStorageSupport";class pI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uf,this._completeRedirectFn=Fv,this._overrideRedirectResult=Lv}async _openPopup(e,t,r,i){var s;qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ed(e,t,r,Ja(),i);return cI(e,o,Nc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await ed(e,t,r,Ja(),i);return _v(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await nI(e),r=new Uv(e);return t.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(La,{type:La},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[La];o!==void 0&&t(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yh()||Kh()||kc()}}const mI=pI;var td="@firebase/auth",nd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yI(n){Wn(new _n("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zh(n)},d=new Vy(r,i,s,l);return jy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new _n("auth-internal",e=>{const t=wn(e.getProvider("auth").getImmediate());return(r=>new gI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(td,nd,_I(n)),St(td,nd,"esm2017")}/**
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
 */const vI=5*60,II=Sh("authIdTokenMaxAge")||vI;let rd=null;const wI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>II)return;const i=t==null?void 0:t.token;rd!==i&&(rd=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function EI(n=Vh()){const e=No(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$y(n,{popupRedirectResolver:mI,persistence:[Rv,pv,uf]}),r=Sh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wI(s.toString());lv(t,o,()=>o(t.currentUser)),cv(t,c=>o(c))}}const i=Ah("auth");return i&&zy(t,`http://${i}`),t}function TI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ny({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Pt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",TI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yI("Browser");var id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,_f;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.D=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(E,b,R){for(var I=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)I[ot-2]=arguments[ot];return y.prototype[b].apply(E,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,v){v||(v=0);var E=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)E[b]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(b=0;16>b;++b)E[b]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],b=w.g[2];var R=w.g[3],I=y+(R^v&(b^R))+E[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=R+(b^y&(v^b))+E[1]+3905402710&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(v^R&(y^v))+E[2]+606105819&4294967295,b=R+(I<<17&4294967295|I>>>15),I=v+(y^b&(R^y))+E[3]+3250441966&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(R^v&(b^R))+E[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=R+(b^y&(v^b))+E[5]+1200080426&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(v^R&(y^v))+E[6]+2821735955&4294967295,b=R+(I<<17&4294967295|I>>>15),I=v+(y^b&(R^y))+E[7]+4249261313&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(R^v&(b^R))+E[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=R+(b^y&(v^b))+E[9]+2336552879&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(v^R&(y^v))+E[10]+4294925233&4294967295,b=R+(I<<17&4294967295|I>>>15),I=v+(y^b&(R^y))+E[11]+2304563134&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(R^v&(b^R))+E[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=R+(b^y&(v^b))+E[13]+4254626195&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(v^R&(y^v))+E[14]+2792965006&4294967295,b=R+(I<<17&4294967295|I>>>15),I=v+(y^b&(R^y))+E[15]+1236535329&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(b^R&(v^b))+E[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^b&(y^v))+E[6]+3225465664&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(R^y))+E[11]+643717713&4294967295,b=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(b^R))+E[0]+3921069994&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(v^b))+E[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^b&(y^v))+E[10]+38016083&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(R^y))+E[15]+3634488961&4294967295,b=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(b^R))+E[4]+3889429448&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(v^b))+E[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^b&(y^v))+E[14]+3275163606&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(R^y))+E[3]+4107603335&4294967295,b=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(b^R))+E[8]+1163531501&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(v^b))+E[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^b&(y^v))+E[2]+4243563512&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(R^y))+E[7]+1735328473&4294967295,b=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(b^R))+E[12]+2368359562&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(v^b^R)+E[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^b)+E[8]+2272392833&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^v)+E[11]+1839030562&4294967295,b=R+(I<<16&4294967295|I>>>16),I=v+(b^R^y)+E[14]+4259657740&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(v^b^R)+E[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^b)+E[4]+1272893353&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^v)+E[7]+4139469664&4294967295,b=R+(I<<16&4294967295|I>>>16),I=v+(b^R^y)+E[10]+3200236656&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(v^b^R)+E[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^b)+E[0]+3936430074&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^v)+E[3]+3572445317&4294967295,b=R+(I<<16&4294967295|I>>>16),I=v+(b^R^y)+E[6]+76029189&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(v^b^R)+E[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^b)+E[12]+3873151461&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^v)+E[15]+530742520&4294967295,b=R+(I<<16&4294967295|I>>>16),I=v+(b^R^y)+E[2]+3299628645&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(b^(v|~R))+E[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~b))+E[7]+1126891415&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~v))+E[14]+2878612391&4294967295,b=R+(I<<15&4294967295|I>>>17),I=v+(R^(b|~y))+E[5]+4237533241&4294967295,v=b+(I<<21&4294967295|I>>>11),I=y+(b^(v|~R))+E[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~b))+E[3]+2399980690&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~v))+E[10]+4293915773&4294967295,b=R+(I<<15&4294967295|I>>>17),I=v+(R^(b|~y))+E[1]+2240044497&4294967295,v=b+(I<<21&4294967295|I>>>11),I=y+(b^(v|~R))+E[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~b))+E[15]+4264355552&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~v))+E[6]+2734768916&4294967295,b=R+(I<<15&4294967295|I>>>17),I=v+(R^(b|~y))+E[13]+1309151649&4294967295,v=b+(I<<21&4294967295|I>>>11),I=y+(b^(v|~R))+E[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~b))+E[11]+3174756917&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~v))+E[2]+718787259&4294967295,b=R+(I<<15&4294967295|I>>>17),I=v+(R^(b|~y))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var v=y-this.blockSize,E=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=v;)i(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(E[b++]=w.charCodeAt(R++),b==this.blockSize){i(this,E),b=0;break}}else for(;R<y;)if(E[b++]=w[R++],b==this.blockSize){i(this,E),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var v=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=v&255,v/=256;for(this.u(w),w=Array(16),y=v=0;4>y;++y)for(var E=0;32>E;E+=8)w[v++]=this.g[y]>>>E&255;return w};function s(w,y){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function o(w,y){this.h=y;for(var v=[],E=!0,b=w.length-1;0<=b;b--){var R=w[b]|0;E&&R==y||(v[b]=R,E=!1)}this.g=v}var c={};function l(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return P(d(-w));for(var y=[],v=1,E=0;w>=v;E++)y[E]=w/v|0,v*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return P(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(y,8)),E=p,b=0;b<w.length;b+=8){var R=Math.min(8,w.length-b),I=parseInt(w.substring(b,b+R),y);8>R?(R=d(Math.pow(y,R)),E=E.j(R).add(d(I))):(E=E.j(v),E=E.add(d(I)))}return E}var p=l(0),_=l(1),T=l(16777216);n=o.prototype,n.m=function(){if(C(this))return-P(this).m();for(var w=0,y=1,v=0;v<this.g.length;v++){var E=this.i(v);w+=(0<=E?E:4294967296+E)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(C(this))return"-"+P(this).toString(w);for(var y=d(Math.pow(w,6)),v=this,E="";;){var b=U(v,y).g;v=$(v,b.j(y));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=b,x(v))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function C(w){return w.h==-1}n.l=function(w){return w=$(this,w),C(w)?-1:x(w)?0:1};function P(w){for(var y=w.g.length,v=[],E=0;E<y;E++)v[E]=~w.g[E];return new o(v,~w.h).add(_)}n.abs=function(){return C(this)?P(this):this},n.add=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0,b=0;b<=y;b++){var R=E+(this.i(b)&65535)+(w.i(b)&65535),I=(R>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);E=I>>>16,R&=65535,I&=65535,v[b]=I<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function $(w,y){return w.add(P(y))}n.j=function(w){if(x(this)||x(w))return p;if(C(this))return C(w)?P(this).j(P(w)):P(P(this).j(w));if(C(w))return P(this.j(P(w)));if(0>this.l(T)&&0>w.l(T))return d(this.m()*w.m());for(var y=this.g.length+w.g.length,v=[],E=0;E<2*y;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var b=0;b<w.g.length;b++){var R=this.i(E)>>>16,I=this.i(E)&65535,ot=w.i(b)>>>16,ze=w.i(b)&65535;v[2*E+2*b]+=I*ze,M(v,2*E+2*b),v[2*E+2*b+1]+=R*ze,M(v,2*E+2*b+1),v[2*E+2*b+1]+=I*ot,M(v,2*E+2*b+1),v[2*E+2*b+2]+=R*ot,M(v,2*E+2*b+2)}for(E=0;E<y;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=y;E<2*y;E++)v[E]=0;return new o(v,0)};function M(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function N(w,y){this.g=w,this.h=y}function U(w,y){if(x(y))throw Error("division by zero");if(x(w))return new N(p,p);if(C(w))return y=U(P(w),y),new N(P(y.g),P(y.h));if(C(y))return y=U(w,P(y)),new N(P(y.g),y.h);if(30<w.g.length){if(C(w)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var v=_,E=y;0>=E.l(w);)v=K(v),E=K(E);var b=W(v,1),R=W(E,1);for(E=W(E,2),v=W(v,2);!x(E);){var I=R.add(E);0>=I.l(w)&&(b=b.add(v),R=I),E=W(E,1),v=W(v,1)}return y=$(w,b.j(y)),new N(b,y)}for(b=p;0<=w.l(y);){for(v=Math.max(1,Math.floor(w.m()/y.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(v),I=R.j(y);C(I)||0<I.l(w);)v-=E,R=d(v),I=R.j(y);x(R)&&(R=_),b=b.add(R),w=$(w,I)}return new N(b,w)}n.A=function(w){return U(this,w).h},n.and=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)&w.i(E);return new o(v,this.h&w.h)},n.or=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)|w.i(E);return new o(v,this.h|w.h)},n.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)^w.i(E);return new o(v,this.h^w.h)};function K(w){for(var y=w.g.length+1,v=[],E=0;E<y;E++)v[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(v,w.h)}function W(w,y){var v=y>>5;y%=32;for(var E=w.g.length-v,b=[],R=0;R<E;R++)b[R]=0<y?w.i(R+v)>>>y|w.i(R+v+1)<<32-y:w.i(R+v);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_f=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,zn=o}).apply(typeof id<"u"?id:typeof self<"u"?self:typeof window<"u"?window:{});var Ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yf,yi,vf,Qs,Za,If,wf,Ef;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,h){return a==Array.prototype||a==Object.prototype||(a[u]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ms=="object"&&Ms];for(var u=0;u<a.length;++u){var h=a[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(a,u){if(u)e:{var h=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in h))break e;h=h[A]}a=a[a.length-1],m=h[a],u=u(m),u!=m&&u!=null&&e(h,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var h=0,m=!1,A={next:function(){if(!m&&h<a.length){var k=h++;return{value:u(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function d(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,h){return a.call.apply(a.bind,arguments)}function p(a,u,h){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function _(a,u,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function T(a,u){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function x(a,u){function h(){}h.prototype=u.prototype,a.aa=u.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(m,A,k){for(var L=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)L[pe-2]=arguments[pe];return u.prototype[A].apply(m,L)}}function C(a){const u=a.length;if(0<u){const h=Array(u);for(let m=0;m<u;m++)h[m]=a[m];return h}return[]}function P(a,u){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(l(m)){const A=a.length||0,k=m.length||0;a.length=A+k;for(let L=0;L<k;L++)a[A+L]=m[L]}else a.push(m)}}class ${constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var K=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function W(a,u,h){for(const m in a)u.call(h,a[m],m,a)}function w(a,u){for(const h in a)u.call(void 0,a[h],h,a)}function y(a){const u={};for(const h in a)u[h]=a[h];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let h,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(h in m)a[h]=m[h];for(let k=0;k<v.length;k++)h=v[k],Object.prototype.hasOwnProperty.call(m,h)&&(a[h]=m[h])}}function b(a){var u=1;a=a.split(":");const h=[];for(;0<u&&a.length;)h.push(a.shift()),u--;return a.length&&h.push(a.join(":")),h}function R(a){c.setTimeout(()=>{throw a},0)}function I(){var a=Xt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ot{constructor(){this.h=this.g=null}add(u,h){const m=ze.get();m.set(u,h),this.h?this.h.next=m:this.g=m,this.h=m}}var ze=new $(()=>new ps,a=>a.reset());class ps{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let It,wt=!1,Xt=new ot,ms=()=>{const a=c.Promise.resolve(void 0);It=()=>{a.then(pt)}};var pt=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(h){R(h)}var u=ze;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}wt=!1};function Et(){this.s=this.s,this.C=this.C}Et.prototype.s=!1,Et.prototype.ma=function(){this.s||(this.s=!0,this.N())},Et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var gs=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return a}();function Yt(a,u){if(ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(K){e:{try{U(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else h=="mouseover"?u=a.fromElement:h=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_s[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Yt.aa.h.call(this)}}x(Yt,ge);var _s={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Sn="closure_listenable_"+(1e6*Math.random()|0),ys=0;function vs(a,u,h,m,A){this.listener=a,this.proxy=null,this.src=u,this.type=h,this.capture=!!m,this.ha=A,this.key=++ys,this.da=this.fa=!1}function Pn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xn(a){this.src=a,this.g={},this.h=0}xn.prototype.add=function(a,u,h,m,A){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var L=q(a,u,m,A);return-1<L?(u=a[L],h||(u.fa=!1)):(u=new vs(u,this.src,k,!!m,A),u.fa=h,a.push(u)),u};function ur(a,u){var h=u.type;if(h in a.g){var m=a.g[h],A=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=A)&&Array.prototype.splice.call(m,A,1),k&&(Pn(u),a.g[h].length==0&&(delete a.g[h],a.h--))}}function q(a,u,h,m){for(var A=0;A<a.length;++A){var k=a[A];if(!k.da&&k.listener==u&&k.capture==!!h&&k.ha==m)return A}return-1}var F="closure_lm_"+(1e6*Math.random()|0),J={};function se(a,u,h,m,A){if(Array.isArray(u)){for(var k=0;k<u.length;k++)se(a,u[k],h,m,A);return null}return h=ht(h),a&&a[Sn]?a.K(u,h,d(m)?!!m.capture:!1,A):ee(a,u,h,!1,m,A)}function ee(a,u,h,m,A,k){if(!u)throw Error("Invalid event type");var L=d(A)?!!A.capture:!!A,pe=he(a);if(pe||(a[F]=pe=new xn(a)),h=pe.add(u,h,m,L,k),h.proxy)return h;if(m=ke(),h.proxy=m,m.src=a,m.listener=h,a.addEventListener)gs||(A=L),A===void 0&&(A=!1),a.addEventListener(u.toString(),m,A);else if(a.attachEvent)a.attachEvent(Ie(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ke(){function a(h){return u.call(a.src,a.listener,h)}const u=De;return a}function Te(a,u,h,m,A){if(Array.isArray(u))for(var k=0;k<u.length;k++)Te(a,u[k],h,m,A);else m=d(m)?!!m.capture:!!m,h=ht(h),a&&a[Sn]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],h=q(k,h,m,A),-1<h&&(Pn(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=he(a))&&(u=a.g[u.toString()],a=-1,u&&(a=q(u,h,m,A)),(h=-1<a?u[a]:null)&&ce(h))}function ce(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Sn])ur(u.i,a);else{var h=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(h,m,a.capture):u.detachEvent?u.detachEvent(Ie(h),m):u.addListener&&u.removeListener&&u.removeListener(m),(h=he(u))?(ur(h,a),h.h==0&&(h.src=null,u[F]=null)):Pn(a)}}}function Ie(a){return a in J?J[a]:J[a]="on"+a}function De(a,u){if(a.da)a=!0;else{u=new Yt(u,this);var h=a.listener,m=a.ha||a.src;a.fa&&ce(a),a=h.call(m,u)}return a}function he(a){return a=a[F],a instanceof xn?a:null}var Be="__closure_events_fn_"+(1e9*Math.random()>>>0);function ht(a){return typeof a=="function"?a:(a[Be]||(a[Be]=function(u){return a.handleEvent(u)}),a[Be])}function Me(){Et.call(this),this.i=new xn(this),this.M=this,this.F=null}x(Me,Et),Me.prototype[Sn]=!0,Me.prototype.removeEventListener=function(a,u,h,m){Te(this,a,u,h,m)};function Ue(a,u){var h,m=a.F;if(m)for(h=[];m;m=m.F)h.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new ge(u,a);else if(u instanceof ge)u.target=u.target||a;else{var A=u;u=new ge(m,a),E(u,A)}if(A=!0,h)for(var k=h.length-1;0<=k;k--){var L=u.g=h[k];A=Nt(L,m,!0,u)&&A}if(L=u.g=a,A=Nt(L,m,!0,u)&&A,A=Nt(L,m,!1,u)&&A,h)for(k=0;k<h.length;k++)L=u.g=h[k],A=Nt(L,m,!1,u)&&A}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var h=a.g[u],m=0;m<h.length;m++)Pn(h[m]);delete a.g[u],a.h--}}this.F=null},Me.prototype.K=function(a,u,h,m){return this.i.add(String(a),u,!1,h,m)},Me.prototype.L=function(a,u,h,m){return this.i.add(String(a),u,!0,h,m)};function Nt(a,u,h,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,k=0;k<u.length;++k){var L=u[k];if(L&&!L.da&&L.capture==h){var pe=L.listener,$e=L.ha||L.src;L.fa&&ur(a.i,L),A=pe.call($e,m)!==!1&&A}}return A&&!m.defaultPrevented}function Cn(a,u,h){if(typeof a=="function")h&&(a=_(a,h));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Is(a){a.g=Cn(()=>{a.g=null,a.i&&(a.i=!1,Is(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class ha extends Et{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Is(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kn(a){Et.call(this),this.h=a,this.g={}}x(kn,Et);var X=[];function nt(a){W(a.g,function(u,h){this.g.hasOwnProperty(h)&&ce(u)},a),a.g={}}kn.prototype.N=function(){kn.aa.N.call(this),nt(this)},kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fa=c.JSON.stringify,ig=c.JSON.parse,sg=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function pa(){}pa.prototype.h=null;function Fl(a){return a.h||(a.h=a.i())}function Bl(){}var Xr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ma(){ge.call(this,"d")}x(ma,ge);function ga(){ge.call(this,"c")}x(ga,ge);var Dn={},Ul=null;function ws(){return Ul=Ul||new Me}Dn.La="serverreachability";function $l(a){ge.call(this,Dn.La,a)}x($l,ge);function Yr(a){const u=ws();Ue(u,new $l(u))}Dn.STAT_EVENT="statevent";function jl(a,u){ge.call(this,Dn.STAT_EVENT,a),this.stat=u}x(jl,ge);function Xe(a){const u=ws();Ue(u,new jl(u,a))}Dn.Ma="timingevent";function zl(a,u){ge.call(this,Dn.Ma,a),this.size=u}x(zl,ge);function Zr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function ei(){this.g=!0}ei.prototype.xa=function(){this.g=!1};function og(a,u,h,m,A,k){a.info(function(){if(a.g)if(k)for(var L="",pe=k.split("&"),$e=0;$e<pe.length;$e++){var ae=pe[$e].split("=");if(1<ae.length){var qe=ae[0];ae=ae[1];var Ge=qe.split("_");L=2<=Ge.length&&Ge[1]=="type"?L+(qe+"="+ae+"&"):L+(qe+"=redacted&")}}else L=null;else L=k;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+h+`
`+L})}function ag(a,u,h,m,A,k,L){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+h+`
`+k+" "+L})}function dr(a,u,h,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+lg(a,h)+(m?" "+m:"")})}function cg(a,u){a.info(function(){return"TIMEOUT: "+u})}ei.prototype.info=function(){};function lg(a,u){if(!a.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var m=h[a];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var k=A[0];if(k!="noop"&&k!="stop"&&k!="close")for(var L=1;L<A.length;L++)A[L]=""}}}}return fa(h)}catch{return u}}var Es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ql={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_a;function Ts(){}x(Ts,pa),Ts.prototype.g=function(){return new XMLHttpRequest},Ts.prototype.i=function(){return{}},_a=new Ts;function Zt(a,u,h,m){this.j=a,this.i=u,this.l=h,this.R=m||1,this.U=new kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gl}function Gl(){this.i=null,this.g="",this.h=!1}var Kl={},ya={};function va(a,u,h){a.L=1,a.v=Ss(Lt(u)),a.m=h,a.P=!0,Hl(a,null)}function Hl(a,u){a.F=Date.now(),bs(a),a.A=Lt(a.v);var h=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),au(h.i,"t",m),a.C=0,h=a.j.J,a.h=new Gl,a.g=Au(a.j,h?u:null,!a.m),0<a.O&&(a.M=new ha(_(a.Y,a,a.g),a.O)),u=a.U,h=a.g,m=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(X[0]=A.toString()),A=X);for(var k=0;k<A.length;k++){var L=se(h,A[k],m||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Yr(),og(a.i,a.u,a.A,a.l,a.R,a.m)}Zt.prototype.ca=function(a){a=a.target;const u=this.M;u&&Ot(a)==3?u.j():this.Y(a)},Zt.prototype.Y=function(a){try{if(a==this.g)e:{const Ge=Ot(this.g);var u=this.g.Ba();const pr=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||Ge!=4||u==7||(u==8||0>=pr?Yr(3):Yr(2)),Ia(this);var h=this.g.Z();this.X=h;t:if(Wl(this)){var m=pu(this.g);a="";var A=m.length,k=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),ti(this);var L="";break t}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(k&&u==A-1)});m.length=0,this.h.g+=a,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,ag(this.i,this.u,this.A,this.l,this.R,Ge,h),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,$e=this.g;if((pe=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(pe)){var ae=pe;break t}}ae=null}if(h=ae)dr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wa(this,h);else{this.o=!1,this.s=3,Xe(12),Vn(this),ti(this);break e}}if(this.P){h=!0;let mt;for(;!this.J&&this.C<L.length;)if(mt=ug(this,L),mt==ya){Ge==4&&(this.s=4,Xe(14),h=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==Kl){this.s=4,Xe(15),dr(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else dr(this.i,this.l,mt,null),wa(this,mt);if(Wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||L.length!=0||this.h.h||(this.s=1,Xe(16),h=!1),this.o=this.o&&h,!h)dr(this.i,this.l,L,"[Invalid Chunked Response]"),Vn(this),ti(this);else if(0<L.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Sa(qe),qe.M=!0,Xe(11))}}else dr(this.i,this.l,L,null),wa(this,L);Ge==4&&Vn(this),this.o&&!this.J&&(Ge==4?wu(this.j,this):(this.o=!1,bs(this)))}else Sg(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,Xe(12)):(this.s=0,Xe(13)),Vn(this),ti(this)}}}catch{}finally{}};function Wl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ug(a,u){var h=a.C,m=u.indexOf(`
`,h);return m==-1?ya:(h=Number(u.substring(h,m)),isNaN(h)?Kl:(m+=1,m+h>u.length?ya:(u=u.slice(m,m+h),a.C=m+h,u)))}Zt.prototype.cancel=function(){this.J=!0,Vn(this)};function bs(a){a.S=Date.now()+a.I,Ql(a,a.I)}function Ql(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zr(_(a.ba,a),u)}function Ia(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Zt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(cg(this.i,this.A),this.L!=2&&(Yr(),Xe(17)),Vn(this),this.s=2,ti(this)):Ql(this,this.S-a)};function ti(a){a.j.G==0||a.J||wu(a.j,a)}function Vn(a){Ia(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,nt(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function wa(a,u){try{var h=a.j;if(h.G!=0&&(h.g==a||Ea(h.h,a))){if(!a.K&&Ea(h.h,a)&&h.G==3){try{var m=h.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Vs(h),ks(h);else break e;Ra(h),Xe(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Zr(_(h.Za,h),6e3));if(1>=Yl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ln(h,11)}else if((a.K||h.g==a)&&Vs(h),!M(u))for(A=h.Da.g.parse(u),u=0;u<A.length;u++){let ae=A[u];if(h.T=ae[0],ae=ae[1],h.G==2)if(ae[0]=="c"){h.K=ae[1],h.ia=ae[2];const qe=ae[3];qe!=null&&(h.la=qe,h.j.info("VER="+h.la));const Ge=ae[4];Ge!=null&&(h.Aa=Ge,h.j.info("SVER="+h.Aa));const pr=ae[5];pr!=null&&typeof pr=="number"&&0<pr&&(m=1.5*pr,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const mt=a.g;if(mt){const Ls=mt.g?mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ls){var k=m.h;k.g||Ls.indexOf("spdy")==-1&&Ls.indexOf("quic")==-1&&Ls.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ta(k,k.h),k.h=null))}if(m.D){const Pa=mt.g?mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pa&&(m.ya=Pa,_e(m.I,m.D,Pa))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var L=a;if(m.qa=bu(m,m.J?m.ia:null,m.W),L.K){Zl(m.h,L);var pe=L,$e=m.L;$e&&(pe.I=$e),pe.B&&(Ia(pe),bs(pe)),m.g=L}else vu(m);0<h.i.length&&Ds(h)}else ae[0]!="stop"&&ae[0]!="close"||Ln(h,7);else h.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Ln(h,7):Aa(h):ae[0]!="noop"&&h.l&&h.l.ta(ae),h.v=0)}}Yr(4)}catch{}}var dg=class{constructor(a,u){this.g=a,this.map=u}};function Jl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yl(a){return a.h?1:a.g?a.g.size:0}function Ea(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ta(a,u){a.g?a.g.add(u):a.h=u}function Zl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Jl.prototype.cancel=function(){if(this.i=eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function eu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const h of a.g.values())u=u.concat(h.D);return u}return C(a.i)}function hg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],h=a.length,m=0;m<h;m++)u.push(a[m]);return u}u=[],h=0;for(m in a)u[h++]=a[m];return u}function fg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var h=0;h<a;h++)u.push(h);return u}u=[],h=0;for(const m in a)u[h++]=m;return u}}}function tu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var h=fg(a),m=hg(a),A=m.length,k=0;k<A;k++)u.call(void 0,m[k],h&&h[k],a)}var nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pg(a,u){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var m=a[h].indexOf("="),A=null;if(0<=m){var k=a[h].substring(0,m);A=a[h].substring(m+1)}else k=a[h];u(k,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Nn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nn){this.h=a.h,As(this,a.j),this.o=a.o,this.g=a.g,Rs(this,a.s),this.l=a.l;var u=a.i,h=new ii;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),ru(this,h),this.m=a.m}else a&&(u=String(a).match(nu))?(this.h=!1,As(this,u[1]||"",!0),this.o=ni(u[2]||""),this.g=ni(u[3]||"",!0),Rs(this,u[4]),this.l=ni(u[5]||"",!0),ru(this,u[6]||"",!0),this.m=ni(u[7]||"")):(this.h=!1,this.i=new ii(null,this.h))}Nn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ri(u,iu,!0),":");var h=this.g;return(h||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ri(u,iu,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(ri(h,h.charAt(0)=="/"?_g:gg,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",ri(h,vg)),a.join("")};function Lt(a){return new Nn(a)}function As(a,u,h){a.j=h?ni(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Rs(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ru(a,u,h){u instanceof ii?(a.i=u,Ig(a.i,a.h)):(h||(u=ri(u,yg)),a.i=new ii(u,a.h))}function _e(a,u,h){a.i.set(u,h)}function Ss(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ni(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ri(a,u,h){return typeof a=="string"?(a=encodeURI(a).replace(u,mg),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function mg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var iu=/[#\/\?@]/g,gg=/[#\?:]/g,_g=/[#\?]/g,yg=/[#\?@]/g,vg=/#/g;function ii(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function en(a){a.g||(a.g=new Map,a.h=0,a.i&&pg(a.i,function(u,h){a.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=ii.prototype,n.add=function(a,u){en(this),this.i=null,a=hr(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(u),this.h+=1,this};function su(a,u){en(a),u=hr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ou(a,u){return en(a),u=hr(a,u),a.g.has(u)}n.forEach=function(a,u){en(this),this.g.forEach(function(h,m){h.forEach(function(A){a.call(u,A,m,this)},this)},this)},n.na=function(){en(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let m=0;m<u.length;m++){const A=a[m];for(let k=0;k<A.length;k++)h.push(u[m])}return h},n.V=function(a){en(this);let u=[];if(typeof a=="string")ou(this,a)&&(u=u.concat(this.g.get(hr(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)u=u.concat(a[h])}return u},n.set=function(a,u){return en(this),this.i=null,a=hr(this,a),ou(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function au(a,u,h){su(a,u),0<h.length&&(a.i=null,a.g.set(hr(a,u),C(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var m=u[h];const k=encodeURIComponent(String(m)),L=this.V(m);for(m=0;m<L.length;m++){var A=k;L[m]!==""&&(A+="="+encodeURIComponent(String(L[m]))),a.push(A)}}return this.i=a.join("&")};function hr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Ig(a,u){u&&!a.j&&(en(a),a.i=null,a.g.forEach(function(h,m){var A=m.toLowerCase();m!=A&&(su(this,m),au(this,A,h))},a)),a.j=u}function wg(a,u){const h=new ei;if(c.Image){const m=new Image;m.onload=T(tn,h,"TestLoadImage: loaded",!0,u,m),m.onerror=T(tn,h,"TestLoadImage: error",!1,u,m),m.onabort=T(tn,h,"TestLoadImage: abort",!1,u,m),m.ontimeout=T(tn,h,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Eg(a,u){const h=new ei,m=new AbortController,A=setTimeout(()=>{m.abort(),tn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(A),k.ok?tn(h,"TestPingServer: ok",!0,u):tn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),tn(h,"TestPingServer: error",!1,u)})}function tn(a,u,h,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(h)}catch{}}function Tg(){this.g=new sg}function bg(a,u,h){const m=h||"";try{tu(a,function(A,k){let L=A;d(A)&&(L=fa(A)),u.push(m+k+"="+encodeURIComponent(L))})}catch(A){throw u.push(m+"type="+encodeURIComponent("_badmap")),A}}function Ps(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Ps,pa),Ps.prototype.g=function(){return new xs(this.l,this.j)},Ps.prototype.i=function(a){return function(){return a}}({});function xs(a,u){Me.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(xs,Me),n=xs.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,oi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function cu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?si(this):oi(this),this.readyState==3&&cu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,si(this))},n.Qa=function(a){this.g&&(this.response=a,si(this))},n.ga=function(){this.g&&si(this)};function si(a){a.readyState=4,a.l=null,a.j=null,a.v=null,oi(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=u.next();return a.join(`\r
`)};function oi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lu(a){let u="";return W(a,function(h,m){u+=m,u+=":",u+=h,u+=`\r
`}),u}function ba(a,u,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=lu(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):_e(a,u,h))}function be(a){Me.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(be,Me);var Ag=/^https?$/i,Rg=["POST","PUT"];n=be.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_a.g(),this.v=this.o?Fl(this.o):Fl(_a),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){uu(this,k);return}if(a=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)h.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())h.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Rg,u,void 0))||m||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,L]of h)this.g.setRequestHeader(k,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fu(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){uu(this,k)}};function uu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,du(a),Cs(a)}function du(a){a.A||(a.A=!0,Ue(a,"complete"),Ue(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ue(this,"complete"),Ue(this,"abort"),Cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cs(this,!0)),be.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?hu(this):this.bb())},n.bb=function(){hu(this)};function hu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ot(a)!=4||a.Z()!=2)){if(a.u&&Ot(a)==4)Cn(a.Ea,0,a);else if(Ue(a,"readystatechange"),Ot(a)==4){a.h=!1;try{const L=a.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var m;if(m=L===0){var A=String(a.D).match(nu)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!Ag.test(A?A.toLowerCase():"")}h=m}if(h)Ue(a,"complete"),Ue(a,"success");else{a.m=6;try{var k=2<Ot(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",du(a)}}finally{Cs(a)}}}}function Cs(a,u){if(a.g){fu(a);const h=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Ue(a,"ready");try{h.onreadystatechange=m}catch{}}}function fu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Ot(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),ig(u)}};function pu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Sg(a){const u={};a=(a.g&&2<=Ot(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(M(a[m]))continue;var h=b(a[m]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=u[A]||[];u[A]=k,k.push(h)}w(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ai(a,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||u}function mu(a){this.Aa=0,this.i=[],this.j=new ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ai("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ai("baseRetryDelayMs",5e3,a),this.cb=ai("retryDelaySeedMs",1e4,a),this.Wa=ai("forwardChannelMaxRetries",2,a),this.wa=ai("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Jl(a&&a.concurrentRequestLimit),this.Da=new Tg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=mu.prototype,n.la=8,n.G=1,n.connect=function(a,u,h,m){Xe(0),this.W=a,this.H=u||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=bu(this,null,this.W),Ds(this)};function Aa(a){if(gu(a),a.G==3){var u=a.U++,h=Lt(a.I);if(_e(h,"SID",a.K),_e(h,"RID",u),_e(h,"TYPE","terminate"),ci(a,h),u=new Zt(a,a.j,u),u.L=2,u.v=Ss(Lt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Au(u.j,null),u.g.ea(u.v)),u.F=Date.now(),bs(u)}Tu(a)}function ks(a){a.g&&(Sa(a),a.g.cancel(),a.g=null)}function gu(a){ks(a),a.u&&(c.clearTimeout(a.u),a.u=null),Vs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ds(a){if(!Xl(a.h)&&!a.s){a.s=!0;var u=a.Ga;It||ms(),wt||(It(),wt=!0),Xt.add(u,a),a.B=0}}function Pg(a,u){return Yl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zr(_(a.Ga,a,u),Eu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new Zt(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),E(k,this.S)):k=this.S),this.m!==null||this.O||(A.H=k,k=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=yu(this,A,u),h=Lt(this.I),_e(h,"RID",a),_e(h,"CVER",22),this.D&&_e(h,"X-HTTP-Session-Id",this.D),ci(this,h),k&&(this.O?u="headers="+encodeURIComponent(String(lu(k)))+"&"+u:this.m&&ba(h,this.m,k)),Ta(this.h,A),this.Ua&&_e(h,"TYPE","init"),this.P?(_e(h,"$req",u),_e(h,"SID","null"),A.T=!0,va(A,h,null)):va(A,h,u),this.G=2}}else this.G==3&&(a?_u(this,a):this.i.length==0||Xl(this.h)||_u(this))};function _u(a,u){var h;u?h=u.l:h=a.U++;const m=Lt(a.I);_e(m,"SID",a.K),_e(m,"RID",h),_e(m,"AID",a.T),ci(a,m),a.m&&a.o&&ba(m,a.m,a.o),h=new Zt(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),u&&(a.i=u.D.concat(a.i)),u=yu(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ta(a.h,h),va(h,m,u)}function ci(a,u){a.H&&W(a.H,function(h,m){_e(u,m,h)}),a.l&&tu({},function(h,m){_e(u,m,h)})}function yu(a,u,h){h=Math.min(a.i.length,h);var m=a.l?_(a.l.Na,a.l,a):null;e:{var A=a.i;let k=-1;for(;;){const L=["count="+h];k==-1?0<h?(k=A[0].g,L.push("ofs="+k)):k=0:L.push("ofs="+k);let pe=!0;for(let $e=0;$e<h;$e++){let ae=A[$e].g;const qe=A[$e].map;if(ae-=k,0>ae)k=Math.max(0,A[$e].g-100),pe=!1;else try{bg(qe,L,"req"+ae+"_")}catch{m&&m(qe)}}if(pe){m=L.join("&");break e}}}return a=a.i.splice(0,h),u.D=a,m}function vu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;It||ms(),wt||(It(),wt=!0),Xt.add(u,a),a.v=0}}function Ra(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zr(_(a.Fa,a),Eu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zr(_(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xe(10),ks(this),Iu(this))};function Sa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Iu(a){a.g=new Zt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Lt(a.qa);_e(u,"RID","rpc"),_e(u,"SID",a.K),_e(u,"AID",a.T),_e(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(u,"TO",a.ja),_e(u,"TYPE","xmlhttp"),ci(a,u),a.m&&a.o&&ba(u,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Ss(Lt(u)),h.m=null,h.P=!0,Hl(h,a)}n.Za=function(){this.C!=null&&(this.C=null,ks(this),Ra(this),Xe(19))};function Vs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function wu(a,u){var h=null;if(a.g==u){Vs(a),Sa(a),a.g=null;var m=2}else if(Ea(a.h,u))h=u.D,Zl(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;m=ws(),Ue(m,new zl(m,h)),Ds(a)}else vu(a);else if(A=u.s,A==3||A==0&&0<u.X||!(m==1&&Pg(a,u)||m==2&&Ra(a)))switch(h&&0<h.length&&(u=a.h,u.i=u.i.concat(h)),A){case 1:Ln(a,5);break;case 4:Ln(a,10);break;case 3:Ln(a,6);break;default:Ln(a,2)}}}function Eu(a,u){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*u}function Ln(a,u){if(a.j.info("Error code "+u),u==2){var h=_(a.fb,a),m=a.Xa;const A=!m;m=new Nn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||As(m,"https"),Ss(m),A?wg(m.toString(),h):Eg(m.toString(),h)}else Xe(2);a.G=0,a.l&&a.l.sa(u),Tu(a),gu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function Tu(a){if(a.G=0,a.ka=[],a.l){const u=eu(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ka,u),P(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function bu(a,u,h){var m=h instanceof Nn?Lt(h):new Nn(h);if(m.g!="")u&&(m.g=u+"."+m.g),Rs(m,m.s);else{var A=c.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var k=new Nn(null);m&&As(k,m),u&&(k.g=u),A&&Rs(k,A),h&&(k.l=h),m=k}return h=a.D,u=a.ya,h&&u&&_e(m,h,u),_e(m,"VER",a.la),ci(a,m),m}function Au(a,u,h){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new be(new Ps({eb:h})):new be(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ru(){}n=Ru.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ns(){}Ns.prototype.g=function(a,u){return new at(a,u)};function at(a,u){Me.call(this),this.g=new mu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!M(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new fr(this)}x(at,Me),at.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){Aa(this.g)},at.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=fa(a),a=h);u.i.push(new dg(u.Ya++,a)),u.G==3&&Ds(u)},at.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,at.aa.N.call(this)};function Su(a){ma.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const h in u){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}x(Su,ma);function Pu(){ga.call(this),this.status=1}x(Pu,ga);function fr(a){this.g=a}x(fr,Ru),fr.prototype.ua=function(){Ue(this.g,"a")},fr.prototype.ta=function(a){Ue(this.g,new Su(a))},fr.prototype.sa=function(a){Ue(this.g,new Pu)},fr.prototype.ra=function(){Ue(this.g,"b")},Ns.prototype.createWebChannel=Ns.prototype.g,at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,Ef=function(){return new Ns},wf=function(){return ws()},If=Dn,Za={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Es.NO_ERROR=0,Es.TIMEOUT=8,Es.HTTP_ERROR=6,Qs=Es,ql.COMPLETE="complete",vf=ql,Bl.EventType=Xr,Xr.OPEN="a",Xr.CLOSE="b",Xr.ERROR="c",Xr.MESSAGE="d",Me.prototype.listen=Me.prototype.K,yi=Bl,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,yf=be}).apply(typeof Ms<"u"?Ms:typeof self<"u"?self:typeof window<"u"?window:{});const sd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Ac("@firebase/firestore");function vr(){return Xn.logLevel}function V(n,...e){if(Xn.logLevel<=re.DEBUG){const t=e.map(Oc);Xn.debug(`Firestore (${qr}): ${n}`,...t)}}function xe(n,...e){if(Xn.logLevel<=re.ERROR){const t=e.map(Oc);Xn.error(`Firestore (${qr}): ${n}`,...t)}}function Fi(n,...e){if(Xn.logLevel<=re.WARN){const t=e.map(Oc);Xn.warn(`Firestore (${qr}): ${n}`,...t)}}function Oc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function j(n="Unexpected state"){const e=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+n;throw xe(e),new Error(e)}function G(n,e){n||j()}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(He.UNAUTHENTICATED))}shutdown(){}}class RI{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ct,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ct)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new bI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new He(e)}}class SI{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class PI{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new SI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){G(this.o===void 0);const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new xI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function Cr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function bf(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ee(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new Ee(0,0))}static max(){return new H(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(),r===void 0?r=e.length-t:r>e.length-t&&j(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends Bi{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new le(t)}static emptyPath(){return new le([])}}const DI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends Bi{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return DI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new we(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new O(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new O(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(le.fromString(e))}static fromName(e){return new B(le.fromString(e).popFirst(5))}static empty(){return new B(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new le(e.slice()))}}/**
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
 */class _o{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function ec(n){return n.fields.find(e=>e.kind===2)}function Fn(n){return n.fields.filter(e=>e.kind!==2)}_o.UNKNOWN_ID=-1;class Js{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ui{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ui(0,dt.min())}}function Af(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new Ee(t+1,0):new Ee(t,r));return new dt(i,B.empty(),e)}function Rf(n){return new dt(n.readTime,n.key,-1)}class dt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new dt(H.min(),B.empty(),-1)}static max(){return new dt(H.max(),B.empty(),-1)}}function Mc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Sf)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const d=l;t(e[d]).next(f=>{o[d]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new S((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Ct,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Ri(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Fc(r.target.error);this.V.reject(new Ri(e,i))}}static open(e,t,r,i){try{return new Fo(t,e.transaction(i,r))}catch(s){throw new Ri(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new NI(t)}}class mn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,mn.S(Le())===12.2&&xe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),Bn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xh())return!1;if(mn.v())return!0;const e=Le(),t=mn.S(e),r=0<t&&t<10,i=xf(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Ri(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new O(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ri(e,o))},i.onupgradeneeded=s=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=Fo.open(this.db,e,s?"readonly":"readwrite",r),l=i(c).next(d=>(c.g(),d)).catch(d=>(c.abort(d),S.reject(d))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,d=l.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function xf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class VI{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Bn(this.B.delete())}}class Ri extends O{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Tn(n){return n.name==="IndexedDbTransactionError"}class NI{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(V("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Bn(r)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),Bn(this.store.add(e))}get(e){return Bn(this.store.get(e)).next(t=>(t===void 0&&(t=null),V("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),Bn(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),Bn(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new S((o,c)=>{s.onerror=l=>{c(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new S((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){V("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new S((r,i)=>{t.onerror=s=>{const o=Fc(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new S((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const l=new VI(c),d=t(c.primaryKey,c.value,l);if(d instanceof S){const f=d.catch(p=>(l.done(),S.reject(p)));r.push(f)}l.isDone?i():l.K===null?c.continue():c.continue(l.K)}}).next(()=>S.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Bn(n){return new S((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Fc(r.target.error);t(i)}})}let od=!1;function Fc(n){const e=mn.S(Le());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return od||(od=!0,setTimeout(()=>{throw r},0)),r}}return n}class LI{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){V("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{V("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Tn(t)?V("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await En(t)}await this.X(6e4)})}}class OI{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return S.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return V("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(c=>(V("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Rf(s);Mc(o,r)>0&&(r=o)}),new dt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class it{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}it.oe=-1;function Bo(n){return n==null}function $i(n){return n===0&&1/n==-1/0}function Cf(n){return typeof n=="number"&&Number.isInteger(n)&&!$i(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ad(e)),e=MI(n.get(t),e);return ad(e)}function MI(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function ad(n){return n+""}function At(n){const e=n.length;if(G(e>=2),e===2)return G(n.charAt(0)===""&&n.charAt(1)===""),le.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&j(),n.charAt(o+1)){case"":const c=n.substring(s,o);let l;i.length===0?l=c:(i+=c,l=i,i=""),r.push(l);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:j()}s=o+2}return new le(r)}/**
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
 */const cd=["userId","batchId"];/**
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
 */function Xs(n,e){return[n,Ze(e)]}function kf(n,e,t){return[n,Ze(e),t]}const FI={},BI=["prefixPath","collectionGroup","readTime","documentId"],UI=["prefixPath","collectionGroup","documentId"],$I=["collectionGroup","readTime","prefixPath","documentId"],jI=["canonicalId","targetId"],zI=["targetId","path"],qI=["path","targetId"],GI=["collectionId","parent"],KI=["indexId","uid"],HI=["uid","sequenceNumber"],WI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],QI=["indexId","uid","orderedDocumentKey"],JI=["userId","collectionPath","documentId"],XI=["userId","collectionPath","largestBatchId"],YI=["userId","collectionGroup","largestBatchId"],Df=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ZI=[...Df,"documentOverlays"],Vf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Nf=Vf,Bc=[...Nf,"indexConfiguration","indexState","indexEntries"],ew=Bc,tw=[...Bc,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends Pf{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Oe(n,e){const t=z(n);return mn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ar(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Lf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fs(this.root,e,this.comparator,!0)}}class Fs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new je(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(e,t,r,i,s){return this}insert(e,t,r){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ud(this.data.getIterator())}getIteratorFrom(e){return new ud(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class ud{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function mr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new st([])}unionWith(e){let t=new fe(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Cr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Of extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Of("Invalid base64 string: "+s):s}}(e);return new Ce(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const nw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(n){if(G(!!n),typeof n=="string"){let e=0;const t=nw.exec(n);if(G(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yn(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function $c(n){const e=n.mapValue.fields.__previous_value__;return Uc(e)?$c(e):e}function ji(n){const e=Gt(n.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,r,i,s,o,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class Yn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ys={nullValue:"NULL_VALUE"};function Zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Uc(n)?4:Mf(n)?9007199254740991:Uo(n)?10:11:j()}function kt(n,e){if(n===e)return!0;const t=Zn(n);if(t!==Zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ji(n).isEqual(ji(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Gt(i.timestampValue),c=Gt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return yn(i.bytesValue).isEqual(yn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ve(i.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ve(i.integerValue)===ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ve(i.doubleValue),c=ve(s.doubleValue);return o===c?$i(o)===$i(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Cr(n.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(ld(o)!==ld(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!kt(o[l],c[l])))return!1;return!0}(n,e);default:return j()}}function zi(n,e){return(n.values||[]).find(t=>kt(t,e))!==void 0}function vn(n,e){if(n===e)return 0;const t=Zn(n),r=Zn(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=ve(s.integerValue||s.doubleValue),l=ve(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return dd(n.timestampValue,e.timestampValue);case 4:return dd(ji(n),ji(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(s,o){const c=yn(s),l=yn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=Y(c[d],l[d]);if(f!==0)return f}return Y(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=Y(ve(s.latitude),ve(o.latitude));return c!==0?c:Y(ve(s.longitude),ve(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return hd(n.arrayValue,e.arrayValue);case 10:return function(s,o){var c,l,d,f;const p=s.fields||{},_=o.fields||{},T=(c=p.value)===null||c===void 0?void 0:c.arrayValue,x=(l=_.value)===null||l===void 0?void 0:l.arrayValue,C=Y(((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:hd(T,x)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===hn.mapValue&&o===hn.mapValue)return 0;if(s===hn.mapValue)return 1;if(o===hn.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),d=o.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const _=Y(l[p],f[p]);if(_!==0)return _;const T=vn(c[l[p]],d[f[p]]);if(T!==0)return T}return Y(l.length,f.length)}(n.mapValue,e.mapValue);default:throw j()}}function dd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Gt(n),r=Gt(e),i=Y(t.seconds,r.seconds);return i!==0?i:Y(t.nanos,r.nanos)}function hd(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=vn(t[i],r[i]);if(s)return s}return Y(t.length,r.length)}function kr(n){return nc(n)}function nc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Gt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return yn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=nc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${nc(t.fields[o])}`;return i+"}"}(n.mapValue):j()}function qi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function rc(n){return!!n&&"integerValue"in n}function Gi(n){return!!n&&"arrayValue"in n}function fd(n){return!!n&&"nullValue"in n}function pd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zs(n){return!!n&&"mapValue"in n}function Uo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Si(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ar(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Si(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Si(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Mf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Ff={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function iw(n){return"nullValue"in n?Ys:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?qi(Yn.empty(),B.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Uo(n)?Ff:{mapValue:{}}:j()}function sw(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?qi(Yn.empty(),B.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Ff:"mapValue"in n?Uo(n)?{mapValue:{}}:hn:j()}function md(n,e){const t=vn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function gd(n,e){const t=vn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Zs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Si(t)}setAll(e){let t=we.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Si(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Zs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Zs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ar(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new We(Si(this.value))}}function Bf(n){const e=[];return ar(n.fields,(t,r)=>{const i=new we([t]);if(Zs(r)){const s=Bf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new st(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ae(e,0,H.min(),H.min(),H.min(),We.empty(),0)}static newFoundDocument(e,t,r,i){return new Ae(e,1,t,H.min(),r,i,0)}static newNoDocument(e,t){return new Ae(e,2,t,H.min(),H.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,H.min(),H.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dr{constructor(e,t){this.position=e,this.inclusive=t}}function _d(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),t.key):r=vn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function yd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!kt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class yo{constructor(e,t="asc"){this.field=e,this.dir=t}}function ow(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Uf{}class ie extends Uf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new aw(e,t,r):t==="array-contains"?new uw(e,r):t==="in"?new Kf(e,r):t==="not-in"?new dw(e,r):t==="array-contains-any"?new hw(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cw(e,r):new lw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(vn(t,this.value)):t!==null&&Zn(this.value)===Zn(t)&&this.matchesComparison(vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends Uf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ue(e,t)}matches(e){return Vr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vr(n){return n.op==="and"}function ic(n){return n.op==="or"}function jc(n){return $f(n)&&Vr(n)}function $f(n){for(const e of n.filters)if(e instanceof ue)return!1;return!0}function sc(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+kr(n.value);if(jc(n))return n.filters.map(e=>sc(e)).join(",");{const e=n.filters.map(t=>sc(t)).join(",");return`${n.op}(${e})`}}function jf(n,e){return n instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&kt(r.value,i.value)}(n,e):n instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&jf(o,i.filters[c]),!0):!1}(n,e):void j()}function zf(n,e){const t=n.filters.concat(e);return ue.create(t,n.op)}function qf(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${kr(t.value)}`}(n):n instanceof ue?function(t){return t.op.toString()+" {"+t.getFilters().map(qf).join(" ,")+"}"}(n):"Filter"}class aw extends ie{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class cw extends ie{constructor(e,t){super(e,"in",t),this.keys=Gf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lw extends ie{constructor(e,t){super(e,"not-in",t),this.keys=Gf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Gf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class uw extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gi(t)&&zi(t.arrayValue,this.value)}}class Kf extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zi(this.value.arrayValue,t)}}class dw extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zi(this.value.arrayValue,t)}}class hw extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zi(this.value.arrayValue,r))}}/**
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
 */class fw{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.ue=null}}function oc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new fw(n,e,t,r,i,s,o)}function er(n){const e=z(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>sc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>kr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>kr(r)).join(",")),e.ue=t}return e.ue}function is(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ow(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!jf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yd(n.startAt,e.startAt)&&yd(n.endAt,e.endAt)}function vo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Io(n,e){return n.filters.filter(t=>t instanceof ie&&t.field.isEqual(e))}function vd(n,e,t){let r=Ys,i=!0;for(const s of Io(n,e)){let o=Ys,c=!0;switch(s.op){case"<":case"<=":o=iw(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Ys}md({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];md({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Id(n,e,t){let r=hn,i=!0;for(const s of Io(n,e)){let o=hn,c=!0;switch(s.op){case">=":case">":o=sw(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=hn}gd({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];gd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hf(n,e,t,r,i,s,o,c){return new ss(n,e,t,r,i,s,o,c)}function $o(n){return new ss(n)}function wd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wf(n){return n.collectionGroup!==null}function Pi(n){const e=z(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new fe(we.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new yo(s,r))}),t.has(we.keyField().canonicalString())||e.ce.push(new yo(we.keyField(),r))}return e.ce}function ut(n){const e=z(n);return e.le||(e.le=pw(e,Pi(n))),e.le}function pw(n,e){if(n.limitType==="F")return oc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yo(i.field,s)});const t=n.endAt?new Dr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Dr(n.startAt.position,n.startAt.inclusive):null;return oc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ac(n,e){const t=n.filters.concat([e]);return new ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function cc(n,e,t){return new ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function jo(n,e){return is(ut(n),ut(e))&&n.limitType===e.limitType}function Qf(n){return`${er(ut(n))}|lt:${n.limitType}`}function Ir(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>qf(i)).join(", ")}]`),Bo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>kr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>kr(i)).join(",")),`Target(${r})`}(ut(n))}; limitType=${n.limitType})`}function os(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Pi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,l){const d=_d(o,c,l);return o.inclusive?d<=0:d<0}(r.startAt,Pi(r),i)||r.endAt&&!function(o,c,l){const d=_d(o,c,l);return o.inclusive?d>=0:d>0}(r.endAt,Pi(r),i))}(n,e)}function Jf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xf(n){return(e,t)=>{let r=!1;for(const i of Pi(n)){const s=mw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function mw(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(s,o,c){const l=o.data.field(s),d=c.data.field(s);return l!==null&&d!==null?vn(l,d):j()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Lf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new me(B.comparator);function ct(){return gw}const Yf=new me(B.comparator);function vi(...n){let e=Yf;for(const t of n)e=e.insert(t.key,t);return e}function Zf(n){let e=Yf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rt(){return xi()}function ep(){return xi()}function xi(){return new bn(n=>n.toString(),(n,e)=>n.isEqual(e))}const _w=new me(B.comparator),yw=new fe(B.comparator);function ne(...n){let e=yw;for(const t of n)e=e.add(t);return e}const vw=new fe(Y);function zc(){return vw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(e)?"-0":e}}function tp(n){return{integerValue:""+n}}function Iw(n,e){return Cf(e)?tp(e):qc(n,e)}/**
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
 */class zo{constructor(){this._=void 0}}function ww(n,e,t){return n instanceof Nr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Uc(s)&&(s=$c(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Lr?rp(n,e):n instanceof Or?ip(n,e):function(i,s){const o=np(i,s),c=Ed(o)+Ed(i.Pe);return rc(o)&&rc(i.Pe)?tp(c):qc(i.serializer,c)}(n,e)}function Ew(n,e,t){return n instanceof Lr?rp(n,e):n instanceof Or?ip(n,e):t}function np(n,e){return n instanceof Ki?function(r){return rc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Nr extends zo{}class Lr extends zo{constructor(e){super(),this.elements=e}}function rp(n,e){const t=sp(e);for(const r of n.elements)t.some(i=>kt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Or extends zo{constructor(e){super(),this.elements=e}}function ip(n,e){let t=sp(e);for(const r of n.elements)t=t.filter(i=>!kt(i,r));return{arrayValue:{values:t}}}class Ki extends zo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ed(n){return ve(n.integerValue||n.doubleValue)}function sp(n){return Gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t){this.field=e,this.transform=t}}function Tw(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Lr&&i instanceof Lr||r instanceof Or&&i instanceof Or?Cr(r.elements,i.elements,kt):r instanceof Ki&&i instanceof Ki?kt(r.Pe,i.Pe):r instanceof Nr&&i instanceof Nr}(n.transform,e.transform)}class bw{constructor(e,t){this.version=e,this.transformResults=t}}class Qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qo{}function ap(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Go(n.key,Qe.none()):new Gr(n.key,n.data,Qe.none());{const t=n.data,r=We.empty();let i=new fe(we.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qt(n.key,r,new st(i.toArray()),Qe.none())}}function Aw(n,e,t){n instanceof Gr?function(i,s,o){const c=i.value.clone(),l=bd(i.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Qt?function(i,s,o){if(!eo(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=bd(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(cp(i)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ci(n,e,t,r){return n instanceof Gr?function(s,o,c,l){if(!eo(s.precondition,o))return c;const d=s.value.clone(),f=Ad(s.fieldTransforms,l,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qt?function(s,o,c,l){if(!eo(s.precondition,o))return c;const d=Ad(s.fieldTransforms,l,o),f=o.data;return f.setAll(cp(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,c){return eo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function Rw(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=np(r.transform,i||null);s!=null&&(t===null&&(t=We.empty()),t.set(r.field,s))}return t||null}function Td(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Cr(r,i,(s,o)=>Tw(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gr extends qo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qt extends qo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function bd(n,e,t){const r=new Map;G(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,Ew(o,c,t[i]))}return r}function Ad(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,ww(s,o,e))}return r}class Go extends qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lp extends qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Aw(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ci(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ci(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ep();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const l=ap(o,c);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&Cr(this.mutations,e.mutations,(t,r)=>Td(t,r))&&Cr(this.baseMutations,e.baseMutations,(t,r)=>Td(t,r))}}class Kc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){G(e.mutations.length===r.length);let i=function(){return _w}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kc(e,t,r,i)}}/**
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
 */class Hc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Sw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,oe;function Pw(n){switch(n){default:return j();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function up(n){if(n===void 0)return xe("GRPC error has no .code"),D.UNKNOWN;switch(n){case Ve.OK:return D.OK;case Ve.CANCELLED:return D.CANCELLED;case Ve.UNKNOWN:return D.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return D.INTERNAL;case Ve.UNAVAILABLE:return D.UNAVAILABLE;case Ve.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ve.NOT_FOUND:return D.NOT_FOUND;case Ve.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ve.ABORTED:return D.ABORTED;case Ve.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ve.DATA_LOSS:return D.DATA_LOSS;default:return j()}}(oe=Ve||(Ve={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xw(){return new TextEncoder}/**
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
 */const Cw=new zn([4294967295,4294967295],0);function Rd(n){const e=xw().encode(n),t=new _f;return t.update(e),new Uint8Array(t.digest())}function Sd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zn([t,r],0),new zn([i,s],0)]}class Wc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ii(`Invalid padding: ${t}`);if(r<0)throw new Ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ii(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ii(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=zn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(zn.fromNumber(r)));return i.compare(Cw)===1&&(i=new zn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Rd(e),[r,i]=Sd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wc(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Rd(e),[r,i]=Sd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,cs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new as(H.min(),i,new me(Y),ct(),ne())}}class cs{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new cs(r,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class dp{constructor(e,t){this.targetId=e,this.me=t}}class hp{constructor(e,t,r=Ce.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Pd{constructor(){this.fe=0,this.ge=Cd(),this.pe=Ce.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),t=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:j()}}),new cs(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Cd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kw{constructor(e){this.Le=e,this.Be=new Map,this.ke=ct(),this.qe=xd(),this.Qe=new me(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:j()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(vo(s))if(r===0){const o=new B(s.path);this.Ue(t,o,Ae.newNoDocument(o,H.min()))}else G(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=yn(r).toUint8Array()}catch(l){if(l instanceof Of)return Fi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Wc(o,i,s)}catch(l){return Fi(l instanceof Ii?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const c=this.Je(o);if(c){if(s.current&&vo(c.target)){const l=new B(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ae.newNoDocument(l,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new as(e,t,this.Qe,this.ke,r);return this.ke=ct(),this.qe=xd(),this.Qe=new me(Y),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Pd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new fe(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Pd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function xd(){return new me(B.comparator)}function Cd(){return new me(B.comparator)}const Dw={asc:"ASCENDING",desc:"DESCENDING"},Vw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nw={and:"AND",or:"OR"};class Lw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lc(n,e){return n.useProto3Json||Bo(e)?e:{value:e}}function Mr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ow(n,e){return Mr(n,e.toTimestamp())}function et(n){return G(!!n),H.fromTimestamp(function(t){const r=Gt(t);return new Ee(r.seconds,r.nanos)}(n))}function Qc(n,e){return uc(n,e).canonicalString()}function uc(n,e){const t=function(i){return new le(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function pp(n){const e=le.fromString(n);return G(Tp(e)),e}function wo(n,e){return Qc(n.databaseId,e.path)}function qn(n,e){const t=pp(e);if(t.get(1)!==n.databaseId.projectId)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(_p(t))}function mp(n,e){return Qc(n.databaseId,e)}function gp(n){const e=pp(n);return e.length===4?le.emptyPath():_p(e)}function dc(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _p(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kd(n,e,t){return{name:wo(n,e),fields:t.value.mapValue.fields}}function Mw(n,e,t){const r=qn(n,e.name),i=et(e.updateTime),s=e.createTime?et(e.createTime):H.min(),o=new We({mapValue:{fields:e.fields}}),c=Ae.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Fw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(G(f===void 0||typeof f=="string"),Ce.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ce.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const f=d.code===void 0?D.UNKNOWN:up(d.code);return new O(f,d.message||"")}(o);t=new hp(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qn(n,r.document.name),s=et(r.document.updateTime),o=r.document.createTime?et(r.document.createTime):H.min(),c=new We({mapValue:{fields:r.document.fields}}),l=Ae.newFoundDocument(i,s,o,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new to(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qn(n,r.document),s=r.readTime?et(r.readTime):H.min(),o=Ae.newNoDocument(i,s),c=r.removedTargetIds||[];t=new to([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qn(n,r.document),s=r.removedTargetIds||[];t=new to([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Sw(i,s),c=r.targetId;t=new dp(c,o)}}return t}function Eo(n,e){let t;if(e instanceof Gr)t={update:kd(n,e.key,e.value)};else if(e instanceof Go)t={delete:wo(n,e.key)};else if(e instanceof Qt)t={update:kd(n,e.key,e.data),updateMask:qw(e.fieldMask)};else{if(!(e instanceof lp))return j();t={verify:wo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof Nr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Lr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Or)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ki)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw j()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ow(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:j()}(n,e.precondition)),t}function hc(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Qe.updateTime(et(s.updateTime)):s.exists!==void 0?Qe.exists(s.exists):Qe.none()}(e.currentDocument):Qe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let l=null;if("setToServerValue"in c)G(c.setToServerValue==="REQUEST_TIME"),l=new Nr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new Lr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Or(f)}else"increment"in c?l=new Ki(o,c.increment):j();const d=we.fromServerFormat(c.fieldPath);return new op(d,l)}(n,i)):[];if(e.update){e.update.name;const i=qn(n,e.update.name),s=new We({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const d=l.fieldPaths||[];return new st(d.map(f=>we.fromServerFormat(f)))}(e.updateMask);return new Qt(i,s,o,t,r)}return new Gr(i,s,t,r)}if(e.delete){const i=qn(n,e.delete);return new Go(i,t)}if(e.verify){const i=qn(n,e.verify);return new lp(i,t)}return j()}function Bw(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?et(i.updateTime):et(s);return o.isEqual(H.min())&&(o=et(s)),new bw(o,i.transformResults||[])}(t,e))):[]}function yp(n,e){return{documents:[mp(n,e.path)]}}function vp(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=mp(n,i);const s=function(d){if(d.length!==0)return Ep(ue.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:wr(_.field),direction:$w(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=lc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Ip(n){let e=gp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){G(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const _=wp(p);return _ instanceof ue&&jc(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(x){return new yo(Er(x.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,Bo(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(p){const _=!!p.before,T=p.values||[];return new Dr(T,_)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const _=!p.before,T=p.values||[];return new Dr(T,_)}(t.endAt)),Hf(e,i,o,s,c,"F",l,d)}function Uw(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Er(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Er(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Er(t.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Er(t.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(t){return ie.create(Er(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ue.create(t.compositeFilter.filters.map(r=>wp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j()}}(t.compositeFilter.op))}(n):j()}function $w(n){return Dw[n]}function jw(n){return Vw[n]}function zw(n){return Nw[n]}function wr(n){return{fieldPath:n.canonicalString()}}function Er(n){return we.fromServerFormat(n.fieldPath)}function Ep(n){return n instanceof ie?function(t){if(t.op==="=="){if(pd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NAN"}};if(fd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NAN"}};if(fd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(t.field),op:jw(t.op),value:t.value}}}(n):n instanceof ue?function(t){const r=t.getFilters().map(i=>Ep(i));return r.length===1?r[0]:{compositeFilter:{op:zw(t.op),filters:r}}}(n):j()}function qw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Tp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,r,i,s=H.min(),o=H.min(),c=Ce.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.ct=e}}function Gw(n,e){let t;if(e.document)t=Mw(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=B.fromSegments(e.noDocument.path),i=nr(e.noDocument.readTime);t=Ae.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return j();{const r=B.fromSegments(e.unknownDocument.path),i=nr(e.unknownDocument.version);t=Ae.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Ee(i[0],i[1]);return H.fromTimestamp(s)}(e.readTime)),t}function Dd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:To(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:wo(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Mr(s,o.version.toTimestamp()),createTime:Mr(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:tr(e.version)};else{if(!e.isUnknownDocument())return j();r.unknownDocument={path:t.path.toArray(),version:tr(e.version)}}return r}function To(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function tr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function nr(n){const e=new Ee(n.seconds,n.nanoseconds);return H.fromTimestamp(e)}function Un(n,e){const t=(e.baseMutations||[]).map(s=>hc(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>hc(n.ct,s)),i=Ee.fromMillis(e.localWriteTimeMs);return new Gc(e.batchId,i,t,r)}function wi(n){const e=nr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?nr(n.lastLimboFreeSnapshotVersion):H.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return G(s.documents.length===1),ut($o(gp(s.documents[0])))}(n.query):function(s){return ut(Ip(s))}(n.query),new Ut(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ce.fromBase64String(n.resumeToken))}function Ap(n,e){const t=tr(e.snapshotVersion),r=tr(e.lastLimboFreeSnapshotVersion);let i;i=vo(e.target)?yp(n.ct,e.target):vp(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:er(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Rp(n){const e=Ip({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cc(e,e.limit,"L"):e}function Oa(n,e){return new Hc(e.largestBatchId,hc(n.ct,e.overlayMutation))}function Vd(n,e){const t=e.path.lastSegment();return[n,Ze(e.path.popLast()),t]}function Nd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:tr(r.readTime),documentKey:Ze(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{getBundleMetadata(e,t){return Ld(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:nr(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Ld(e).put(function(i){return{bundleId:i.id,createTime:tr(et(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Od(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Rp(s.bundledQuery),readTime:nr(s.readTime)}}(r)})}saveNamedQuery(e,t){return Od(e).put(function(i){return{name:i.name,readTime:tr(et(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Ld(n){return Oe(n,"bundles")}function Od(n){return Oe(n,"namedQueries")}/**
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
 */class Ko{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Ko(e,r)}getOverlay(e,t){return li(e).get(Vd(this.userId,t)).next(r=>r?Oa(this.serializer,r):null)}getOverlays(e,t){const r=Rt();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const c=new Hc(t,o);i.push(this.ht(e,c))}),S.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Ze(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(li(e).j("collectionPathOverlayIndex",c))}),S.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Rt(),s=Ze(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return li(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const d=Oa(this.serializer,l);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Rt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return li(e).J({index:"collectionGroupOverlayIndex",range:c},(l,d,f)=>{const p=Oa(this.serializer,d);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return li(e).put(function(i,s,o){const[c,l,d]=Vd(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Eo(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function li(n){return Oe(n,"documentOverlays")}/**
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
 */class Hw{Pt(e){return Oe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ce.fromUint8Array(r):Ce.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class $n{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ve(e.integerValue));else if("doubleValue"in e){const r=ve(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),$i(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Gt(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(yn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?Mf(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Uo(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):j()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",c=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(ve(c)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),B.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}$n.vt=new $n;function Ww(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Md(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Ww(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class Qw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=Md(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=Md(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Jw{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class Xw{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ui{constructor(){this.jt=new Qw,this.Ht=new Jw(this.jt),this.Jt=new Xw(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class jn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new jn(this.indexId,this.documentKey,this.arrayValue,r)}}function rn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Fd(n.arrayValue,e.arrayValue),t!==0?t:(t=Fd(n.directionalValue,e.directionalValue),t!==0?t:B.comparator(n.documentKey,e.documentKey)))}function Fd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Bd{constructor(e){this.Xt=new fe((t,r)=>we.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(G(e.collectionGroup===this.collectionId),this.nn)return!1;const t=ec(e);if(t!==void 0&&!this.sn(t))return!1;const r=Fn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!i.has(c.field.canonicalString())){const l=r[s];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const c=r[s];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new fe(we.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Js(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Js(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Js(r.field,r.dir==="asc"?0:1)));return new _o(_o.UNKNOWN_ID,this.collectionId,t,Ui.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Sp(n){var e,t;if(G(n instanceof ie||n instanceof ue),n instanceof ie){if(n instanceof Kf){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ie.create(n.field,"==",s)))||[];return ue.create(i,"or")}return n}const r=n.filters.map(i=>Sp(i));return ue.create(r,n.op)}function Yw(n){if(n.getFilters().length===0)return[];const e=mc(Sp(n));return G(Pp(e)),fc(e)||pc(e)?[e]:e.getFilters()}function fc(n){return n instanceof ie}function pc(n){return n instanceof ue&&jc(n)}function Pp(n){return fc(n)||pc(n)||function(t){if(t instanceof ue&&ic(t)){for(const r of t.getFilters())if(!fc(r)&&!pc(r))return!1;return!0}return!1}(n)}function mc(n){if(G(n instanceof ie||n instanceof ue),n instanceof ie)return n;if(n.filters.length===1)return mc(n.filters[0]);const e=n.filters.map(r=>mc(r));let t=ue.create(e,n.op);return t=bo(t),Pp(t)?t:(G(t instanceof ue),G(Vr(t)),G(t.filters.length>1),t.filters.reduce((r,i)=>Jc(r,i)))}function Jc(n,e){let t;return G(n instanceof ie||n instanceof ue),G(e instanceof ie||e instanceof ue),t=n instanceof ie?e instanceof ie?function(i,s){return ue.create([i,s],"and")}(n,e):Ud(n,e):e instanceof ie?Ud(e,n):function(i,s){if(G(i.filters.length>0&&s.filters.length>0),Vr(i)&&Vr(s))return zf(i,s.getFilters());const o=ic(i)?i:s,c=ic(i)?s:i,l=o.filters.map(d=>Jc(d,c));return ue.create(l,"or")}(n,e),bo(t)}function Ud(n,e){if(Vr(e))return zf(e,n.getFilters());{const t=e.filters.map(r=>Jc(n,r));return ue.create(t,"or")}}function bo(n){if(G(n instanceof ie||n instanceof ue),n instanceof ie)return n;const e=n.getFilters();if(e.length===1)return bo(e[0]);if($f(n))return n;const t=e.map(i=>bo(i)),r=[];return t.forEach(i=>{i instanceof ie?r.push(i):i instanceof ue&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ue.create(r,n.op)}/**
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
 */class Zw{constructor(){this.un=new Xc}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(dt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(dt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Xc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new fe(le.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fe(le.comparator)).toArray()}}/**
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
 */const Bs=new Uint8Array(0);class eE{constructor(e,t){this.databaseId=t,this.cn=new Xc,this.ln=new bn(r=>er(r),(r,i)=>is(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:Ze(i)};return $d(e).put(s)}return S.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[bf(t),""],!1,!0);return $d(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(At(o.parent))}return r})}addFieldIndex(e,t){const r=di(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=_r(e);return s.next(c=>{o.put(Nd(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=di(e),i=_r(e),s=gr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=di(e),r=gr(e),i=_r(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return S.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Bd(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=gr(e);let i=!0;const s=new Map;return S.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=ne();const c=[];return S.forEach(s,(l,d)=>{V("IndexedDbIndexManager",`Using index ${function(N){return`id=${N.indexId}|cg=${N.collectionGroup}|f=${N.fields.map(U=>`${U.fieldPath}:${U.kind}`).join(",")}`}(l)} to execute ${er(t)}`);const f=function(N,U){const K=ec(U);if(K===void 0)return null;for(const W of Io(N,K.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(d,l),p=function(N,U){const K=new Map;for(const W of Fn(U))for(const w of Io(N,W.fieldPath))switch(w.op){case"==":case"in":K.set(W.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return K.set(W.fieldPath.canonicalString(),w.value),Array.from(K.values())}return null}(d,l),_=function(N,U){const K=[];let W=!0;for(const w of Fn(U)){const y=w.kind===0?vd(N,w.fieldPath,N.startAt):Id(N,w.fieldPath,N.startAt);K.push(y.value),W&&(W=y.inclusive)}return new Dr(K,W)}(d,l),T=function(N,U){const K=[];let W=!0;for(const w of Fn(U)){const y=w.kind===0?Id(N,w.fieldPath,N.endAt):vd(N,w.fieldPath,N.endAt);K.push(y.value),W&&(W=y.inclusive)}return new Dr(K,W)}(d,l),x=this.In(l,d,_),C=this.In(l,d,T),P=this.Tn(l,d,p),$=this.En(l.indexId,f,x,_.inclusive,C,T.inclusive,P);return S.forEach($,M=>r.G(M,t.limit).next(N=>{N.forEach(U=>{const K=B.fromSegments(U.documentKey);o.has(K)||(o=o.add(K),c.push(K))})}))}).next(()=>c)}return S.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=Yw(ue.create(e.filters,"and")).map(r=>oc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,s.length),d=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const _=t?this.dn(t[p/d]):Bs,T=this.An(e,_,r[p%d],i),x=this.Rn(e,_,s[p%d],o),C=c.map(P=>this.An(e,_,P,!0));f.push(...this.createRange(T,x,C))}return f}An(e,t,r,i){const s=new jn(e,B.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new jn(e,B.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new Bd(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return S.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let d=new fe(we.comparator),f=!1;for(const p of l.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:d=d.add(_.field));for(const p of l.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new ui;for(const i of Fn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);$n.vt.It(s,o)}return r.zt()}dn(e){const t=new ui;return $n.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new ui;return $n.vt.It(qi(this.databaseId,t),r.Yt(function(s){const o=Fn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new ui);let s=0;for(const o of Fn(e)){const c=r[s++];for(const l of i)if(this.fn(t,o.fieldPath)&&Gi(c))i=this.gn(i,o,c);else{const d=l.Yt(o.kind);$n.vt.It(c,d)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const c of i){const l=new ui;l.seed(c.zt()),$n.vt.It(o,l.Yt(t.kind)),s.push(l)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=di(e),i=_r(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return S.forEach(s,c=>i.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const _=p?new Ui(p.sequenceNumber,new dt(nr(p.readTime),new B(At(p.documentKey)),p.largestBatchId)):Ui.empty(),T=f.fields.map(([x,C])=>new Js(we.fromServerFormat(x),C));return new _o(f.indexId,f.collectionGroup,T,_)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Y(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=di(e),s=_r(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>S.forEach(c,l=>s.put(Nd(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return S.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),S.forEach(c,l=>this.wn(e,i,l).next(d=>{const f=this.Sn(s,l);return d.isEqual(f)?S.resolve():this.bn(e,s,l,d,f)}))))})}Dn(e,t,r,i){return gr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return gr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=gr(e);let s=new fe(rn);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{s=s.add(new jn(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}Sn(e,t){let r=new fe(rn);const i=this.Vn(t,e);if(i==null)return r;const s=ec(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Gi(o))for(const c of o.arrayValue.values||[])r=r.add(new jn(t.indexId,e.key,this.dn(c),i))}else r=r.add(new jn(t.indexId,e.key,Bs,i));return r}bn(e,t,r,i,s){V("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,d,f,p,_){const T=l.getIterator(),x=d.getIterator();let C=mr(T),P=mr(x);for(;C||P;){let $=!1,M=!1;if(C&&P){const N=f(C,P);N<0?M=!0:N>0&&($=!0)}else C!=null?M=!0:$=!0;$?(p(P),P=mr(x)):M?(_(C),C=mr(T)):(C=mr(T),P=mr(x))}}(i,s,rn,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),S.waitFor(o)}yn(e){let t=1;return _r(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>rn(o,c)).filter((o,c,l)=>!c||rn(o,l[c-1])!==0);const i=[];i.push(e);for(const o of r){const c=rn(o,e),l=rn(o,t);if(c===0)i[0]=e.Zt();else if(c>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const c=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Bs,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Bs,[]];s.push(IDBKeyRange.bound(c,l))}return s}Cn(e,t){return rn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(jd)}getMinOffset(e,t){return S.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||j())).next(jd)}}function $d(n){return Oe(n,"collectionParents")}function gr(n){return Oe(n,"indexEntries")}function di(n){return Oe(n,"indexConfiguration")}function _r(n){return Oe(n,"indexState")}function jd(n){G(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Mc(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new dt(e.readTime,e.documentKey,t)}/**
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
 */const zd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.J({range:o},(f,p,_)=>(c++,_.delete()));s.push(l.next(()=>{G(c===1)}));const d=[];for(const f of t.mutations){const p=kf(e,f.key.path,t.batchId);s.push(i.delete(p)),d.push(f.key)}return S.waitFor(s).next(()=>d)}function Ao(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw j();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(41943040,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);class Ho{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){G(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ho(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return sn(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Tr(e),o=sn(e);return o.add({}).next(c=>{G(typeof c=="number");const l=new Gc(c,t,r,i),d=function(T,x,C){const P=C.baseMutations.map(M=>Eo(T.ct,M)),$=C.mutations.map(M=>Eo(T.ct,M));return{userId:x,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:P,mutations:$}}(this.serializer,this.userId,l),f=[];let p=new fe((_,T)=>Y(_.canonicalString(),T.canonicalString()));for(const _ of i){const T=kf(this.userId,_.key.path,c);p=p.add(_.key.path.popLast()),f.push(o.put(d)),f.push(s.put(T,FI))}return p.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),S.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return sn(e).get(t).next(r=>r?(G(r.userId===this.userId),Un(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?S.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return sn(e).J({index:"userMutationsIndex",range:i},(o,c,l)=>{c.userId===this.userId&&(G(c.batchId>=r),s=Un(this.serializer,c)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return sn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return sn(e).U("userMutationsIndex",t).next(r=>r.map(i=>Un(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Xs(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Tr(e).J({range:i},(o,c,l)=>{const[d,f,p]=o,_=At(f);if(d===this.userId&&t.path.isEqual(_))return sn(e).get(p).next(T=>{if(!T)throw j();G(T.userId===this.userId),s.push(Un(this.serializer,T))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(Y);const i=[];return t.forEach(s=>{const o=Xs(this.userId,s.path),c=IDBKeyRange.lowerBound(o),l=Tr(e).J({range:c},(d,f,p)=>{const[_,T,x]=d,C=At(T);_===this.userId&&s.path.isEqual(C)?r=r.add(x):p.done()});i.push(l)}),S.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Xs(this.userId,r),o=IDBKeyRange.lowerBound(s);let c=new fe(Y);return Tr(e).J({range:o},(l,d,f)=>{const[p,_,T]=l,x=At(_);p===this.userId&&r.isPrefixOf(x)?x.length===i&&(c=c.add(T)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(sn(e).get(s).next(o=>{if(o===null)throw j();G(o.userId===this.userId),r.push(Un(this.serializer,o))}))}),S.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return xp(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),S.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Tr(e).J({range:r},(s,o,c)=>{if(s[0]===this.userId){const l=At(s[1]);i.push(l)}else c.done()}).next(()=>{G(i.length===0)})})}containsKey(e,t){return Cp(e,this.userId,t)}Nn(e){return kp(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Cp(n,e,t){const r=Xs(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Tr(n).J({range:s,H:!0},(c,l,d)=>{const[f,p,_]=c;f===e&&p===i&&(o=!0),d.done()}).next(()=>o)}function sn(n){return Oe(n,"mutations")}function Tr(n){return Oe(n,"documentMutations")}function kp(n){return Oe(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new rr(0)}static kn(){return new rr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new rr(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>H.fromTimestamp(new Ee(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>yr(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return yr(e).J((o,c)=>{const l=wi(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>S.waitFor(s)).next(()=>i)}forEachTarget(e,t){return yr(e).J((r,i)=>{const s=wi(i);t(s)})}qn(e){return qd(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Qn(e,t){return qd(e).put("targetGlobalKey",t)}Kn(e,t){return yr(e).put(Ap(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=er(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return yr(e).J({range:i,index:"queryTargetsIndex"},(o,c,l)=>{const d=wi(c);is(t,d.target)&&(s=d,l.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=un(e);return t.forEach(o=>{const c=Ze(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),S.waitFor(i)}removeMatchingKeys(e,t,r){const i=un(e);return S.forEach(t,s=>{const o=Ze(s.path);return S.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=un(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=un(e);let s=ne();return i.J({range:r,H:!0},(o,c,l)=>{const d=At(o[1]),f=new B(d);s=s.add(f)}).next(()=>s)}containsKey(e,t){const r=Ze(t.path),i=IDBKeyRange.bound([r],[bf(r)],!1,!0);let s=0;return un(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,c],l,d)=>{o!==0&&(s++,d.done())}).next(()=>s>0)}ot(e,t){return yr(e).get(t).next(r=>r?wi(r):null)}}function yr(n){return Oe(n,"targets")}function qd(n){return Oe(n,"targetGlobal")}function un(n){return Oe(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd([n,e],[t,r]){const i=Y(n,t);return i===0?Y(e,r):i}class nE{constructor(e){this.Un=e,this.buffer=new fe(Gd),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Gd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Tn(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await En(t)}await this.Hn(3e5)})}}class iE{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(it.oe);const r=new nE(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(zd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zd):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,c,l,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),vr()<=re.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function sE(n,e){return new iE(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t){this.db=e,this.garbageCollector=sE(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return Us(e,r)}removeReference(e,t,r){return Us(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Us(e,t)}nr(e,t){return function(i,s){let o=!1;return kp(i).Y(c=>Cp(i,c,s).next(l=>(l&&(o=!0),S.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(d=>{if(!d)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,H.min()),un(e).delete(function(p){return[0,Ze(p.path)]}(o))))});i.push(l)}}).next(()=>S.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Us(e,t)}tr(e,t){const r=un(e);let i,s=it.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:d})=>{o===0?(s!==it.oe&&t(new B(At(i)),s),s=d,i=l):s=it.oe}).next(()=>{s!==it.oe&&t(new B(At(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Us(n,e){return un(n).put(function(r,i){return{targetId:0,path:Ze(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.changes=new bn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return On(e).put(r)}removeEntry(e,t,r){return On(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],To(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Ae.newInvalidDocument(t);return On(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(hi(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:Ae.newInvalidDocument(t)};return On(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(hi(t))},(i,s)=>{r={document:this.ir(t,s),size:Ao(s)}}).next(()=>r)}getEntries(e,t){let r=ct();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=ct(),i=new me(B.comparator);return this._r(e,t,(s,o)=>{const c=this.ir(s,o);r=r.insert(s,c),i=i.insert(s,Ao(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return S.resolve();let i=new fe(Wd);t.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(hi(i.first()),hi(i.last())),o=i.getIterator();let c=o.getNext();return On(e).J({index:"documentKeyIndex",range:s},(l,d,f)=>{const p=B.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&Wd(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,d),c=o.hasNext()?o.getNext():null),c?f.$(hi(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),To(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return On(e).U(IDBKeyRange.bound(c,l,!0)).next(d=>{s==null||s.incrementDocumentReadCount(d.length);let f=ct();for(const p of d){const _=this.ir(B.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(os(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=ct();const o=Hd(t,r),c=Hd(t,dt.max());return On(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,d,f)=>{const p=this.ir(B.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new cE(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Kd(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}rr(e,t){return Kd(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=Gw(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(H.min())))return r}return Ae.newInvalidDocument(e)}}function Vp(n){return new aE(n)}class cE extends Dp{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new bn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new fe((s,o)=>Y(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,c.readTime)),o.isValidDocument()){const l=Dd(this.cr.serializer,o);i=i.add(s.path.popLast());const d=Ao(l);r+=d-c.size,t.push(this.cr.addEntry(e,s,l))}else if(r-=c.size,this.trackRemovals){const l=Dd(this.cr.serializer,o.convertToNoDocument(H.min()));t.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),S.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Kd(n){return Oe(n,"remoteDocumentGlobal")}function On(n){return Oe(n,"remoteDocumentsV14")}function hi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Hd(n,e){const t=e.documentKey.path.toArray();return[n,To(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Wd(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=Y(t[s],r[s]),i)return i;return i=Y(t.length,r.length),i||(i=Y(t[t.length-2],r[r.length-2]),i||Y(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ci(r.mutation,i,st.empty(),Ee.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const i=Rt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=vi();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Rt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=ct();const o=xi(),c=function(){return xi()}();return t.forEach((l,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Qt)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Ci(f.mutation,d,f.mutation.getFieldMask(),Ee.now())):o.set(d.key,st.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,f)=>o.set(d,f)),t.forEach((d,f)=>{var p;return c.set(d,new lE(f,(p=o.get(d))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=xi();let i=new me((o,c)=>o-c),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||st.empty();f=c.applyToLocalView(d,f),r.set(l,f);const p=(i.get(c.batchId)||ne()).add(l);i=i.insert(c.batchId,p)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,p=ep();f.forEach(_=>{if(!s.has(_)){const T=ap(t.get(_),r.get(_));T!==null&&p.set(_,T),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):S.resolve(Rt());let c=-1,l=s;return o.next(d=>S.forEach(d,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),s.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,ne())).next(f=>({batchId:c,changes:Zf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let i=vi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=vi();return this.indexManager.getCollectionParents(e,s).next(c=>S.forEach(c,l=>{const d=function(p,_){return new ss(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((l,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,Ae.newInvalidDocument(f)))});let c=vi();return o.forEach((l,d)=>{const f=s.get(l);f!==void 0&&Ci(f.mutation,d,st.empty(),Ee.now()),os(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:et(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Rp(i.bundledQuery),readTime:et(i.readTime)}}(t)),S.resolve()}}/**
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
 */class dE{constructor(){this.overlays=new me(B.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rt();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=Rt(),s=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new me((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Rt(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Rt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=i)););return S.resolve(c)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hc(t,r));let s=this.Ir.get(t);s===void 0&&(s=ne(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class hE{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.Tr=new fe(Fe.Er),this.dr=new fe(Fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Fe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Fe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new B(new le([])),r=new Fe(t,e),i=new Fe(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new le([])),r=new Fe(t,e),i=new Fe(t,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Fe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new fe(Fe.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gc(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.br=this.br.add(new Fe(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Fe(t,0),i=new Fe(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const c=this.Dr(o.wr);s.push(c)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(Y);return t.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],c=>{r=r.add(c.wr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new B(s),0);let c=new fe(Y);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.wr)),!0)},o),S.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){G(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(t.mutations,i=>{const s=new Fe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Fe(t,0),i=this.br.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.Mr=e,this.docs=function(){return new me(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ae.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ct();const o=t.path,c=new B(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Mc(Rf(f),r)<=0||(i.has(f.key)||os(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,t,r,i){j()}Or(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new mE(this)}getSize(e){return S.resolve(this.size)}}class mE extends Dp{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.persistence=e,this.Nr=new bn(t=>er(t),is),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Yc,this.targetCount=0,this.kr=rr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new rr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t){this.qr={},this.overlays={},this.Qr=new it(0),this.Kr=!1,this.Kr=!0,this.$r=new hE,this.referenceDelegate=e(this),this.Ur=new gE(this),this.indexManager=new Zw,this.remoteDocumentCache=function(i){return new pE(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new bp(t),this.Gr=new uE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new dE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new fE(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const i=new _E(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return S.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class _E extends Pf{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Jr=new Yc,this.Yr=null}static Zr(e){return new Wo(e)}get Xr(){if(this.Yr)return this.Yr;throw j()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,r=>{const i=B.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Fo("createOrUpgrade",t);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cd,{unique:!0}),l.createObjectStore("documentMutations")}(e),Qd(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=S.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Qd(e)),o=o.next(()=>function(l){const d=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,d){return d.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cd,{unique:!0});const p=d.store("mutations"),_=f.map(T=>p.put(T));return S.waitFor(_)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const d=l.createObjectStore("documentOverlays",{keyPath:JI});d.createIndex("collectionPathOverlayIndex",XI,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",YI,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const d=l.createObjectStore("remoteDocumentsV14",{keyPath:BI});d.createIndex("documentKeyIndex",UI),d.createIndex("collectionGroupIndex",$I)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:KI}).createIndex("sequenceNumberIndex",HI,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:WI}).createIndex("documentKeyIndex",QI,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=Ao(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>S.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>S.forEach(c,l=>{G(l.userId===s.userId);const d=Un(this.serializer,l);return xp(e,s.userId,d).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,c)=>{const l=new le(o),d=function(p){return[0,Ze(p)]}(l);s.push(t.get(d).next(f=>f?S.resolve():(p=>t.put({targetId:0,path:Ze(p),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>S.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:GI});const r=t.store("collectionParents"),i=new Xc,s=o=>{if(i.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:Ze(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new le(o);return s(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],d)=>{const f=At(c);return s(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=wi(i),o=Ap(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new B(le.fromString(p.document.name).popFirst(5)):p.noDocument?B.fromSegments(p.noDocument.path):p.unknownDocument?B.fromSegments(p.unknownDocument.path):j()}(o).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(d))}).next(()=>S.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=Vp(this.serializer),s=new Lp(Wo.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(l=>{var d;let f=(d=c.get(l.userId))!==null&&d!==void 0?d:ne();Un(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),S.forEach(c,(l,d)=>{const f=new He(d),p=Ko.lt(this.serializer,f),_=s.getIndexManager(f),T=Ho.lt(f,this.serializer,_,s.referenceDelegate);return new Np(i,T,p,_).recalculateAndSaveOverlaysForDocumentKeys(new tc(t,it.oe),l).next()})})}}function Qd(n){n.createObjectStore("targetDocuments",{keyPath:zI}).createIndex("documentTargetsIndex",qI,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",jI,{unique:!0}),n.createObjectStore("targetGlobal")}const Ma="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Zc{constructor(e,t,r,i,s,o,c,l,d,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=c,this.ci=d,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!Zc.D())throw new O(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new oE(this,i),this.Ai=t+"main",this.serializer=new bp(l),this.Ri=new mn(this.Ai,this.hi,new yE(this.serializer)),this.$r=new Hw,this.Ur=new tE(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Vp(this.serializer),this.Gr=new Kw,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&xe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(D.FAILED_PRECONDITION,Ma);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new it(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>$s(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Tn(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return fi(e).get("owner").next(t=>S.resolve(this.vi(t)))}Ci(e){return $s(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Oe(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(c=>s.indexOf(c)===-1);return S.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?S.resolve(!0):fi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new O(D.FAILED_PRECONDITION,Ma);return!1}}return!(!this.networkEnabled||!this.inForeground)||$s(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new tc(e,it.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>$s(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Ho.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new eE(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ko.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(l){return l===17?tw:l===16?ew:l===15?Bc:l===14?Nf:l===13?Vf:l===12?ZI:l===11?Df:void j()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,c=>(o=new tc(c,this.Qr?this.Qr.next():it.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw xe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new O(D.FAILED_PRECONDITION,Sf);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return fi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(D.FAILED_PRECONDITION,Ma)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return fi(e).put("owner",t)}static D(){return mn.D()}bi(e){const t=fi(e);return t.get("owner").next(r=>this.vi(r)?(V("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):S.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(xe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Ph()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return xe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){xe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function fi(n){return Oe(n,"owner")}function $s(n){return Oe(n,"clientMetadata")}function Op(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ne(),i=ne();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new el(e,t.fromCache,r,i)}}/**
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
 */class vE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Mp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ph()?8:xf(Le())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new vE;return this.Xi(e,t,o).next(c=>{if(s.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(vr()<=re.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ir(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(vr()<=re.DEBUG&&V("QueryEngine","Query:",Ir(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(vr()<=re.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ir(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ut(t))):S.resolve())}Yi(e,t){if(wd(t))return S.resolve(null);let r=ut(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=cc(t,null,"F"),r=ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(t,c);return this.ns(t,d,o,l.readTime)?this.Yi(e,cc(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,i){return wd(t)||i.isEqual(H.min())?S.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?S.resolve(null):(vr()<=re.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ir(t)),this.rs(e,o,t,Af(i,-1)).next(c=>c))})}ts(e,t){let r=new fe(Xf(e));return t.forEach((i,s)=>{os(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return vr()<=re.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ir(t)),this.Ji.getDocumentsMatchingQuery(e,t,dt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new me(Y),this._s=new bn(s=>er(s),is),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Np(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Fp(n,e,t,r){return new IE(n,e,t,r)}async function Bp(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let l=ne();for(const d of i){o.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of s){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:c}))})})}function wE(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){const p=d.batch,_=p.keys();let T=S.resolve();return _.forEach(x=>{T=T.next(()=>f.getEntry(l,x)).next(C=>{const P=d.docVersions.get(x);G(P!==null),C.version.compareTo(P)<0&&(p.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),f.addEntry(C)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ne();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Up(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function EE(n,e){const t=z(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const _=i.get(p);if(!_)return;c.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,p)));let T=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Ce.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(p,T),function(C,P,$){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,T,f)&&c.push(t.Ur.updateTargetData(s,T))});let l=ct(),d=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(TE(s,o,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(H.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(p=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return S.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.os=i,s))}function TE(n,e,t){let r=ne(),i=ne();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=ct();return t.forEach((c,l)=>{const d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function bE(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ro(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new Ut(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Fr(n,e,t){const r=z(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Tn(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function gc(n,e,t){const r=z(n);let i=H.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,f){const p=z(l),_=p._s.get(f);return _!==void 0?S.resolve(p.os.get(_)):p.Ur.getTargetData(d,f)}(r,o,ut(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:H.min(),t?s:ne())).next(c=>(zp(r,Jf(e),c),{documents:c,Ts:s})))}function $p(n,e){const t=z(n),r=z(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function jp(n,e){const t=z(n),r=t.us.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Af(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(zp(t,e,i),i))}function zp(n,e,t){let r=n.us.get(e)||H.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}function Jd(n,e){return`firestore_clients_${n}_${e}`}function Xd(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Fa(n,e){return`firestore_targets_${n}_${e}`}class So{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new O(i.error.code,i.error.message))),o?new So(e,t,i.state,s):(xe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ki{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new O(r.error.code,r.error.message))),s?new ki(e,r.state,i):(xe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Po{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=zc();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Cf(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Po(e,s):(xe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class tl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new tl(t.clientId,t.onlineState):(xe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class _c{constructor(){this.activeTargetIds=zc()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ba{constructor(e,t,r,i,s){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new me(Y),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=Jd(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new _c),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(Jd(this.persistenceKey,r));if(i){const s=Po.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Fa(this.persistenceKey,e));if(i){const s=ki.Rs(e,i);s&&(r=s.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Fa(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V("SharedClientState","READ",e,t),t}setItem(e,t){V("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(V("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void xe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(s){let o=it.oe;if(s!=null)try{const c=JSON.parse(s);G(typeof c=="number"),o=c}catch(c){xe("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==it.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new So(this.currentUser,e,t,r),s=Xd(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=Xd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=Fa(this.persistenceKey,e),s=new ki(e,t,r);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Po.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return So.Rs(new He(s),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return ki.Rs(i,t)}Ls(e){return tl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],c=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=zc();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class qp{constructor(){this.so=new _c,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _c,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class AE{_o(e){}shutdown(){}}/**
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
 */class Yd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let js=null;function Ua(){return js===null?js=function(){return 268435456+Math.round(2147483648*Math.random())}():js++,"0x"+js.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class PE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const c=Ua(),l=this.xo(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(t,l,d,i).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Fi("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(t,r,i,s,o,c){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=RE[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=Ua();return new Promise((o,c)=>{const l=new yf;l.setWithCredentials(!0),l.listenOnce(vf.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qs.NO_ERROR:const f=l.getResponseJson();V(Ke,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Qs.TIMEOUT:V(Ke,`RPC '${e}' ${s} timed out`),c(new O(D.DEADLINE_EXCEEDED,"Request time out"));break;case Qs.HTTP_ERROR:const p=l.getStatus();if(V(Ke,`RPC '${e}' ${s} failed with status:`,p,"response text:",l.getResponseText()),p>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const T=_==null?void 0:_.error;if(T&&T.status&&T.message){const x=function(P){const $=P.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf($)>=0?$:D.UNKNOWN}(T.status);c(new O(x,T.message))}else c(new O(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new O(D.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{V(Ke,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);V(Ke,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=Ua(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ef(),c=wf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=s.join("");V(Ke,`Creating RPC '${e}' stream ${i}: ${f}`,l);const p=o.createWebChannel(f,l);let _=!1,T=!1;const x=new SE({Io:P=>{T?V(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(_||(V(Ke,`Opening RPC '${e}' stream ${i} transport.`),p.open(),_=!0),V(Ke,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},To:()=>p.close()}),C=(P,$,M)=>{P.listen($,N=>{try{M(N)}catch(U){setTimeout(()=>{throw U},0)}})};return C(p,yi.EventType.OPEN,()=>{T||(V(Ke,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),C(p,yi.EventType.CLOSE,()=>{T||(T=!0,V(Ke,`RPC '${e}' stream ${i} transport closed`),x.So())}),C(p,yi.EventType.ERROR,P=>{T||(T=!0,Fi(Ke,`RPC '${e}' stream ${i} transport errored:`,P),x.So(new O(D.UNAVAILABLE,"The operation could not be completed")))}),C(p,yi.EventType.MESSAGE,P=>{var $;if(!T){const M=P.data[0];G(!!M);const N=M,U=N.error||(($=N[0])===null||$===void 0?void 0:$.error);if(U){V(Ke,`RPC '${e}' stream ${i} received error:`,U);const K=U.status;let W=function(v){const E=Ve[v];if(E!==void 0)return up(E)}(K),w=U.message;W===void 0&&(W=D.INTERNAL,w="Unknown error status: "+K+" with message "+U.message),T=!0,x.So(new O(W,w)),p.close()}else V(Ke,`RPC '${e}' stream ${i} received:`,M),x.bo(M)}}),C(c,If.STAT_EVENT,P=>{P.stat===Za.PROXY?V(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Za.NOPROXY&&V(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Gp(){return typeof window<"u"?window:null}function no(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n){return new Lw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t,r,i,s,o,c,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Kp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(xe(t.toString()),xe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new O(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xE extends Hp{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Fw(this.serializer,e),r=function(s){if(!("targetChange"in s))return H.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?et(o.readTime):H.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=dc(this.serializer),t.addTarget=function(s,o){let c;const l=o.target;if(c=vo(l)?{documents:yp(s,l)}:{query:vp(s,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=fp(s,o.resumeToken);const d=lc(s,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=Mr(s,o.snapshotVersion.toTimestamp());const d=lc(s,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Uw(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=dc(this.serializer),t.removeTarget=e,this.a_(t)}}class CE extends Hp{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return G(!!e.streamToken),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Bw(e.writeResults,e.commitTime),r=et(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=dc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Eo(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,uc(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(D.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,uc(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(D.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class DE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xe(t),this.D_=!1):V("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{cr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=z(l);d.L_.add(4),await ls(d),d.q_.set("Unknown"),d.L_.delete(4),await Jo(d)}(this))})}),this.q_=new DE(r,i)}}async function Jo(n){if(cr(n))for(const e of n.B_)await e(!0)}async function ls(n){for(const e of n.B_)await e(!1)}function Xo(n,e){const t=z(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),il(t)?rl(t):Hr(t).r_()&&nl(t,e))}function Br(n,e){const t=z(n),r=Hr(t);t.N_.delete(e),r.r_()&&Wp(t,e),t.N_.size===0&&(r.r_()?r.o_():cr(t)&&t.q_.set("Unknown"))}function nl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hr(n).A_(e)}function Wp(n,e){n.Q_.xe(e),Hr(n).R_(e)}function rl(n){n.Q_=new kw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Hr(n).start(),n.q_.v_()}function il(n){return cr(n)&&!Hr(n).n_()&&n.N_.size>0}function cr(n){return z(n).L_.size===0}function Qp(n){n.Q_=void 0}async function NE(n){n.q_.set("Online")}async function LE(n){n.N_.forEach((e,t)=>{nl(n,e)})}async function OE(n,e){Qp(n),il(n)?(n.q_.M_(e),rl(n)):n.q_.set("Unknown")}async function ME(n,e,t){if(n.q_.set("Online"),e instanceof hp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.N_.delete(c),i.Q_.removeTarget(c))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xo(n,r)}else if(e instanceof to?n.Q_.Ke(e):e instanceof dp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(H.min()))try{const r=await Up(n.localStore);t.compareTo(r)>=0&&await function(s,o){const c=s.Q_.rt(o);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,d)=>{const f=s.N_.get(l);if(!f)return;s.N_.set(l,f.withResumeToken(Ce.EMPTY_BYTE_STRING,f.snapshotVersion)),Wp(s,l);const p=new Ut(f.target,l,d,f.sequenceNumber);nl(s,p)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await xo(n,r)}}async function xo(n,e,t){if(!Tn(e))throw e;n.L_.add(1),await ls(n),n.q_.set("Offline"),t||(t=()=>Up(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Jo(n)})}function Jp(n,e){return e().catch(t=>xo(n,t,e))}async function Kr(n){const e=z(n),t=In(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;FE(e);)try{const i=await bE(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,BE(e,i)}catch(i){await xo(e,i)}Xp(e)&&Yp(e)}function FE(n){return cr(n)&&n.O_.length<10}function BE(n,e){n.O_.push(e);const t=In(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Xp(n){return cr(n)&&!In(n).n_()&&n.O_.length>0}function Yp(n){In(n).start()}async function UE(n){In(n).p_()}async function $E(n){const e=In(n);for(const t of n.O_)e.m_(t.mutations)}async function jE(n,e,t){const r=n.O_.shift(),i=Kc.from(r,e,t);await Jp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Kr(n)}async function zE(n,e){e&&In(n).V_&&await async function(r,i){if(function(o){return Pw(o)&&o!==D.ABORTED}(i.code)){const s=r.O_.shift();In(r).s_(),await Jp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Kr(r)}}(n,e),Xp(n)&&Yp(n)}async function Zd(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=cr(t);t.L_.add(3),await ls(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Jo(t)}async function yc(n,e){const t=z(n);e?(t.L_.delete(2),await Jo(t)):e||(t.L_.add(2),await ls(t),t.q_.set("Unknown"))}function Hr(n){return n.K_||(n.K_=function(t,r,i){const s=z(t);return s.w_(),new xE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:NE.bind(null,n),Ro:LE.bind(null,n),mo:OE.bind(null,n),d_:ME.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),il(n)?rl(n):n.q_.set("Unknown")):(await n.K_.stop(),Qp(n))})),n.K_}function In(n){return n.U_||(n.U_=function(t,r,i){const s=z(t);return s.w_(),new CE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:UE.bind(null,n),mo:zE.bind(null,n),f_:$E.bind(null,n),g_:jE.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Kr(n)):(await n.U_.stop(),n.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new sl(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ol(n,e){if(xe("AsyncQueue",`${e}: ${n}`),Tn(n))return new O(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=vi(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new Pr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Pr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.W_=new me(B.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):j():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ur{constructor(e,t,r,i,s,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Ur(e,t,Pr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class GE{constructor(){this.queries=th(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=z(t),s=i.queries;i.queries=th(),s.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new O(D.ABORTED,"Firestore shutting down"))}}function th(){return new bn(n=>Qf(n),jo)}async function Zp(n,e){const t=z(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new qE,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=ol(o,`Initialization of query '${Ir(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&al(t)}async function em(n,e){const t=z(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function KE(n,e){const t=z(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.j_)c.X_(i)&&(r=!0);o.z_=i}}r&&al(t)}function HE(n,e,t){const r=z(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function al(n){n.Y_.forEach(e=>{e.next()})}var vc,nh;(nh=vc||(vc={})).ea="default",nh.Cache="cache";class tm{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ur(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==vc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.key=e}}class rm{constructor(e){this.key=e}}class WE{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=Xf(e),this.Ra=new Pr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new eh,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const _=i.get(f),T=os(this.query,p)?p:null,x=!!_&&this.mutatedKeys.has(_.key),C=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;_&&T?_.data.isEqual(T.data)?x!==C&&(r.track({type:3,doc:T}),P=!0):this.ga(_,T)||(r.track({type:2,doc:T}),P=!0,(l&&this.Aa(T,l)>0||d&&this.Aa(T,d)<0)&&(c=!0)):!_&&T?(r.track({type:0,doc:T}),P=!0):_&&!T&&(r.track({type:1,doc:_}),P=!0,(l||d)&&(c=!0)),P&&(T?(o=o.add(T),s=C?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(T,x){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return C(T)-C(x)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const c=t&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,o.length!==0||d?{snapshot:new Ur(this.query,e.Ra,s,o,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new eh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new rm(r))}),this.da.forEach(r=>{e.has(r)||t.push(new nm(r))}),t}ba(e){this.Ta=e.Ts,this.da=ne();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ur.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class QE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class JE{constructor(e){this.key=e,this.va=!1}}class XE{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new bn(c=>Qf(c),jo),this.Ma=new Map,this.xa=new Set,this.Oa=new me(B.comparator),this.Na=new Map,this.La=new Yc,this.Ba={},this.ka=new Map,this.qa=rr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function YE(n,e,t=!0){const r=Yo(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await im(r,e,t,!0),i}async function ZE(n,e){const t=Yo(n);await im(t,e,!0,!1)}async function im(n,e,t,r){const i=await Ro(n.localStore,ut(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await cl(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Xo(n.remoteStore,i),c}async function cl(n,e,t,r,i){n.Ka=(p,_,T)=>async function(C,P,$,M){let N=P.view.ma($);N.ns&&(N=await gc(C.localStore,P.query,!1).then(({documents:w})=>P.view.ma(w,N)));const U=M&&M.targetChanges.get(P.targetId),K=M&&M.targetMismatches.get(P.targetId)!=null,W=P.view.applyChanges(N,C.isPrimaryClient,U,K);return Ic(C,P.targetId,W.wa),W.snapshot}(n,p,_,T);const s=await gc(n.localStore,e,!0),o=new WE(e,s.Ts),c=o.ma(s.documents),l=cs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=o.applyChanges(c,n.isPrimaryClient,l);Ic(n,t,d.wa);const f=new QE(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function eT(n,e,t){const r=z(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!jo(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fr(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Br(r.remoteStore,i.targetId),$r(r,i.targetId)}).catch(En)):($r(r,i.targetId),await Fr(r.localStore,i.targetId,!0))}async function tT(n,e){const t=z(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Br(t.remoteStore,r.targetId))}async function nT(n,e,t){const r=hl(n);try{const i=await function(o,c){const l=z(o),d=Ee.now(),f=c.reduce((T,x)=>T.add(x.key),ne());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let x=ct(),C=ne();return l.cs.getEntries(T,f).next(P=>{x=P,x.forEach(($,M)=>{M.isValidDocument()||(C=C.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,x)).next(P=>{p=P;const $=[];for(const M of c){const N=Rw(M,p.get(M.key).overlayedDocument);N!=null&&$.push(new Qt(M.key,N,Bf(N.value.mapValue),Qe.exists(!0)))}return l.mutationQueue.addMutationBatch(T,d,$,c)}).next(P=>{_=P;const $=P.applyToLocalDocumentSet(p,C);return l.documentOverlayCache.saveOverlays(T,P.batchId,$)})}).then(()=>({batchId:_.batchId,changes:Zf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let d=o.Ba[o.currentUser.toKey()];d||(d=new me(Y)),d=d.insert(c,l),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,t),await An(r,i.changes),await Kr(r.remoteStore)}catch(i){const s=ol(i,"Failed to persist write");t.reject(s)}}async function sm(n,e){const t=z(n);try{const r=await EE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?G(o.va):i.removedDocuments.size>0&&(G(o.va),o.va=!1))}),await An(t,r,e)}catch(r){await En(r)}}function rh(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const c=o.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const l=z(o);l.onlineState=c;let d=!1;l.queries.forEach((f,p)=>{for(const _ of p.j_)_.Z_(c)&&(d=!0)}),d&&al(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rT(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new me(B.comparator);o=o.insert(s,Ae.newNoDocument(s,H.min()));const c=ne().add(s),l=new as(H.min(),new Map,new me(Y),o,c);await sm(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),dl(r)}else await Fr(r.localStore,e,!1).then(()=>$r(r,e,t)).catch(En)}async function iT(n,e){const t=z(n),r=e.batch.batchId;try{const i=await wE(t.localStore,e);ul(t,r,null),ll(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await An(t,i)}catch(i){await En(i)}}async function sT(n,e,t){const r=z(n);try{const i=await function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(p=>(G(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(d,p))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);ul(r,e,t),ll(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await An(r,i)}catch(i){await En(i)}}function ll(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function ul(n,e,t){const r=z(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function $r(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||om(n,r)})}function om(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Br(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),dl(n))}function Ic(n,e,t){for(const r of t)r instanceof nm?(n.La.addReference(r.key,e),oT(n,r)):r instanceof rm?(V("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||om(n,r.key)):j()}function oT(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(V("SyncEngine","New document in limbo: "+t),n.xa.add(r),dl(n))}function dl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new B(le.fromString(e)),r=n.qa.next();n.Na.set(r,new JE(t)),n.Oa=n.Oa.insert(t,r),Xo(n.remoteStore,new Ut(ut($o(t.path)),r,"TargetPurposeLimboResolution",it.oe))}}async function An(n,e,t){const r=z(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const p=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){i.push(d);const p=el.Wi(l.targetId,d);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,d){const f=z(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>S.forEach(d,_=>S.forEach(_.$i,T=>f.persistence.referenceDelegate.addReference(p,_.targetId,T)).next(()=>S.forEach(_.Ui,T=>f.persistence.referenceDelegate.removeReference(p,_.targetId,T)))))}catch(p){if(!Tn(p))throw p;V("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const _=p.targetId;if(!p.fromCache){const T=f.os.get(_),x=T.snapshotVersion,C=T.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(_,C)}}}(r.localStore,s))}async function aT(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Bp(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(c=>{c.forEach(l=>{l.reject(new O(D.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await An(t,r.hs)}}function cT(n,e){const t=z(n),r=t.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const c=t.Fa.get(o);i=i.unionWith(c.view.Va)}return i}}async function lT(n,e){const t=z(n),r=await gc(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&Ic(t,e.targetId,i.wa),i}async function uT(n,e){const t=z(n);return jp(t.localStore,e).then(r=>An(t,r))}async function dT(n,e,t,r){const i=z(n),s=await function(c,l){const d=z(c),f=z(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,l).next(_=>_?d.localDocuments.getDocuments(p,_):S.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Kr(i.remoteStore):t==="acknowledged"||t==="rejected"?(ul(i,e,r||null),ll(i,e),function(c,l){z(z(c).mutationQueue).On(l)}(i.localStore,e)):j(),await An(i,s)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function hT(n,e){const t=z(n);if(Yo(t),hl(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await ih(t,r.toArray());t.Qa=!0,await yc(t.remoteStore,!0);for(const s of i)Xo(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>($r(t,o),Fr(t.localStore,o,!0))),Br(t.remoteStore,o)}),await i,await ih(t,r),function(o){const c=z(o);c.Na.forEach((l,d)=>{Br(c.remoteStore,d)}),c.La.pr(),c.Na=new Map,c.Oa=new me(B.comparator)}(t),t.Qa=!1,await yc(t.remoteStore,!1)}}async function ih(n,e,t){const r=z(n),i=[],s=[];for(const o of e){let c;const l=r.Ma.get(o);if(l&&l.length!==0){c=await Ro(r.localStore,ut(l[0]));for(const d of l){const f=r.Fa.get(d),p=await lT(r,f);p.snapshot&&s.push(p.snapshot)}}else{const d=await $p(r.localStore,o);c=await Ro(r.localStore,d),await cl(r,am(d),o,!1,c.resumeToken)}i.push(c)}return r.Ca.d_(s),i}function am(n){return Hf(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function fT(n){return function(t){return z(z(t).persistence).Qi()}(z(n).localStore)}async function pT(n,e,t,r){const i=z(n);if(i.Qa)return void V("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await jp(i.localStore,Jf(s[0])),c=as.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ce.EMPTY_BYTE_STRING);await An(i,o,c);break}case"rejected":await Fr(i.localStore,e,!0),$r(i,e,r);break;default:j()}}async function mT(n,e,t){const r=Yo(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){V("SyncEngine","Adding an already active target "+i);continue}const s=await $p(r.localStore,i),o=await Ro(r.localStore,s);await cl(r,am(s),o.targetId,!1,o.resumeToken),Xo(r.remoteStore,o)}for(const i of t)r.Ma.has(i)&&await Fr(r.localStore,i,!1).then(()=>{Br(r.remoteStore,i),$r(r,i)}).catch(En)}}function Yo(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rT.bind(null,e),e.Ca.d_=KE.bind(null,e.eventManager),e.Ca.$a=HE.bind(null,e.eventManager),e}function hl(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sT.bind(null,e),e}class Hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Fp(this.persistence,new Mp,e.initialUser,this.serializer)}Ga(e){return new Lp(Wo.Zr,this.serializer)}Wa(e){return new qp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hi.provider={build:()=>new Hi};class cm extends Hi{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await hl(this.Ja.syncEngine),await Kr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Fp(this.persistence,new Mp,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new rE(r,e.asyncQueue,t)}Ha(e,t){const r=new OI(t,this.persistence);return new LI(e.asyncQueue,r)}Ga(e){const t=Op(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new Zc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Gp(),no(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new qp}}class gT extends cm{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Ba&&(this.sharedClientState.syncEngine={no:dT.bind(null,t),ro:pT.bind(null,t),io:mT.bind(null,t),Qi:fT.bind(null,t),eo:uT.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await hT(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Gp();if(!Ba.D(t))throw new O(D.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Op(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ba(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Wi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aT.bind(null,this.syncEngine),await yc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GE}()}createDatastore(e){const t=Qo(e.databaseInfo.databaseId),r=function(s){return new PE(s)}(e.databaseInfo);return function(s,o,c,l){return new kE(s,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new VE(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>rh(this.syncEngine,t,0),function(){return Yd.D()?new Yd:new AE}())}createSyncEngine(e,t){return function(i,s,o,c,l,d,f){const p=new XE(i,s,o,c,l,d);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=z(i);V("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ls(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wi.provider={build:()=>new Wi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=Tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ol(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $a(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function sh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yT(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Zd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Zd(e.remoteStore,i)),n._onlineComponents=e}async function yT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await $a(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Fi("Error using user provided cache. Falling back to memory cache: "+t),await $a(n,new Hi)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await $a(n,new Hi);return n._offlineComponents}async function um(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await sh(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await sh(n,new Wi))),n._onlineComponents}function vT(n){return um(n).then(e=>e.syncEngine)}async function dm(n){const e=await um(n),t=e.eventManager;return t.onListen=YE.bind(null,e.syncEngine),t.onUnlisten=eT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tT.bind(null,e.syncEngine),t}function IT(n,e,t={}){const r=new Ct;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,d){const f=new lm({next:_=>{f.Za(),o.enqueueAndForget(()=>em(s,p));const T=_.docs.has(c);!T&&_.fromCache?d.reject(new O(D.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&_.fromCache&&l&&l.source==="server"?d.reject(new O(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),p=new tm($o(c.path),f,{includeMetadataChanges:!0,_a:!0});return Zp(s,p)}(await dm(n),n.asyncQueue,e,t,r)),r.promise}function wT(n,e,t={}){const r=new Ct;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,d){const f=new lm({next:_=>{f.Za(),o.enqueueAndForget(()=>em(s,p)),_.fromCache&&l.source==="server"?d.reject(new O(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),p=new tm(c,f,{includeMetadataChanges:!0,_a:!0});return Zp(s,p)}(await dm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function hm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(n,e,t){if(!t)throw new O(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ET(n,e,t,r){if(e===!0&&r===!0)throw new O(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ah(n){if(!B.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ch(n){if(B.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j()}function Dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zo(n);throw new O(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ET("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new AI;switch(r.type){case"firstParty":return new PI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=oh.get(t);r&&(V("ComponentProvider","Removing Datastore"),oh.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wr(this.firestore,e,this._query)}}class tt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class gn extends Wr{constructor(e,t,r){super(e,t,$o(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new B(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function ft(n,e,...t){if(n=Re(n),fm("collection","path",e),n instanceof fl){const r=le.fromString(e,...t);return ch(r),new gn(n,null,r)}{if(!(n instanceof tt||n instanceof gn))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return ch(r),new gn(n.firestore,null,r)}}function de(n,e,...t){if(n=Re(n),arguments.length===1&&(e=Tf.newId()),fm("doc","path",e),n instanceof fl){const r=le.fromString(e,...t);return ah(r),new tt(n,null,new B(r))}{if(!(n instanceof tt||n instanceof gn))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return ah(r),new tt(n.firestore,n instanceof gn?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Kp(this,"async_queue_retry"),this.Vu=()=>{const r=no();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=no();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=no();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ct;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Tn(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw xe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=sl.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&j()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class lr extends fl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new uh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uh(e),this._firestoreClient=void 0,await e}}}function TT(n,e,t){t||(t="(default)");const r=No(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Ni(s,e))return i;throw new O(D.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(D.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function pl(n){if(n._terminated)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bT(n),n._firestoreClient}function bT(n){var e,t,r;const i=n._freezeSettings(),s=function(c,l,d,f){return new rw(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,hm(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new _T(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jr(Ce.fromBase64String(e))}catch(t){throw new O(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jr(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class gl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=/^__.*__$/;class RT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gr(e,this.data,t,this.fieldTransforms)}}class pm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class _l{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new _l(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Co(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(mm(this.Cu)&&AT.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ST{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Qo(e)}Qu(e,t,r,i=!1){return new _l({Cu:e,methodName:t,qu:r,path:we.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function na(n){const e=n._freezeSettings(),t=Qo(n._databaseId);return new ST(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gm(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);vl("Data must be an object, but it was:",o,r);const c=_m(r,o);let l,d;if(s.merge)l=new st(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const _=wc(e,p,t);if(!o.contains(_))throw new O(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);vm(f,_)||f.push(_)}l=new st(f),d=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,d=o.fieldTransforms;return new RT(new We(c),l,d)}class ra extends ta{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ra}}class yl extends ta{_toFieldTransform(e){return new op(e.path,new Nr)}isEqual(e){return e instanceof yl}}function PT(n,e,t,r){const i=n.Qu(1,e,t);vl("Data must be an object, but it was:",i,r);const s=[],o=We.empty();ar(r,(l,d)=>{const f=Il(e,l,t);d=Re(d);const p=i.Nu(f);if(d instanceof ra)s.push(f);else{const _=us(d,p);_!=null&&(s.push(f),o.set(f,_))}});const c=new st(s);return new pm(o,c,i.fieldTransforms)}function xT(n,e,t,r,i,s){const o=n.Qu(1,e,t),c=[wc(e,r,t)],l=[i];if(s.length%2!=0)throw new O(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)c.push(wc(e,s[_])),l.push(s[_+1]);const d=[],f=We.empty();for(let _=c.length-1;_>=0;--_)if(!vm(d,c[_])){const T=c[_];let x=l[_];x=Re(x);const C=o.Nu(T);if(x instanceof ra)d.push(T);else{const P=us(x,C);P!=null&&(d.push(T),f.set(T,P))}}const p=new st(d);return new pm(f,p,o.fieldTransforms)}function CT(n,e,t,r=!1){return us(t,n.Qu(r?4:3,e))}function us(n,e){if(ym(n=Re(n)))return vl("Unsupported field value:",e,n),_m(n,e);if(n instanceof ta)return function(r,i){if(!mm(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let l=us(c,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Iw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ee.fromDate(r);return{timestampValue:Mr(i.serializer,s)}}if(r instanceof Ee){const s=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mr(i.serializer,s)}}if(r instanceof ml)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jr)return{bytesValue:fp(i.serializer,r._byteString)};if(r instanceof tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gl)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return qc(c.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Zo(r)}`)}(n,e)}function _m(n,e){const t={};return Lf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(n,(r,i)=>{const s=us(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function ym(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ee||n instanceof ml||n instanceof jr||n instanceof tt||n instanceof ta||n instanceof gl)}function vl(n,e,t){if(!ym(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Zo(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function wc(n,e,t){if((e=Re(e))instanceof ea)return e._internalPath;if(typeof e=="string")return Il(n,e);throw Co("Field path arguments must be of type string or ",n,!1,void 0,t)}const kT=new RegExp("[~\\*/\\[\\]]");function Il(n,e,t){if(e.search(kT)>=0)throw Co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ea(...e.split("."))._internalPath}catch{throw Co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Co(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(D.INVALID_ARGUMENT,c+n+l)}function vm(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DT extends Im{data(){return super.data()}}function wl(n,e){return typeof e=="string"?Il(n,e):e instanceof ea?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class El{}class NT extends El{}function dh(n,e,...t){let r=[];e instanceof El&&r.push(e),r=r.concat(t),function(s){const o=s.filter(l=>l instanceof Tl).length,c=s.filter(l=>l instanceof ia).length;if(o>1||o>0&&c>0)throw new O(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ia extends NT{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ia(e,t,r)}_apply(e){const t=this._parse(e);return wm(e._query,t),new Wr(e.firestore,e.converter,ac(e._query,t))}_parse(e){const t=na(e.firestore);return function(s,o,c,l,d,f,p){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){fh(p,f);const T=[];for(const x of p)T.push(hh(l,s,x));_={arrayValue:{values:T}}}else _=hh(l,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||fh(p,f),_=CT(c,o,p,f==="in"||f==="not-in");return ie.create(d,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ja(n,e,t){const r=e,i=wl("where",n);return ia._create(i,r,t)}class Tl extends El{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Tl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ue.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const l of c)wm(o,l),o=ac(o,l)}(e._query,t),new Wr(e.firestore,e.converter,ac(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hh(n,e,t){if(typeof(t=Re(t))=="string"){if(t==="")throw new O(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wf(e)&&t.indexOf("/")!==-1)throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(le.fromString(t));if(!B.isDocumentKey(r))throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qi(n,new B(r))}if(t instanceof tt)return qi(n,t._key);throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zo(t)}.`)}function fh(n,e){if(!Array.isArray(n)||n.length===0)throw new O(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wm(n,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class LT{convertValue(e,t="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ar(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ve(o.doubleValue));return new gl(s)}convertGeoPoint(e){return new ml(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=$c(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const t=Gt(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);G(Tp(r));const i=new Yn(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(t)||xe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tm extends Im{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(wl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ro extends Tm{data(e={}){return super.data(e)}}class OT{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ei(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ro(this._firestore,this._userDataWriter,r.key,r,new Ei(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const l=new ro(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ei(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new ro(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ei(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:MT(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function MT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n){n=Dt(n,tt);const e=Dt(n.firestore,lr);return IT(pl(e),n._key).then(t=>BT(e,n,t))}class bm extends LT{constructor(e){super(),this.firestore=e}convertBytes(e){return new jr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,t)}}function _t(n){n=Dt(n,Wr);const e=Dt(n.firestore,lr),t=pl(e),r=new bm(e);return VT(n._query),wT(t,n._query).then(i=>new OT(e,r,n,i))}function Gn(n,e,t){n=Dt(n,tt);const r=Dt(n.firestore,lr),i=Em(n.converter,e);return sa(r,[gm(na(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Qe.none())])}function Jt(n,e,t,...r){n=Dt(n,tt);const i=Dt(n.firestore,lr),s=na(i);let o;return o=typeof(e=Re(e))=="string"||e instanceof ea?xT(s,"updateDoc",n._key,e,t,r):PT(s,"updateDoc",n._key,e),sa(i,[o.toMutation(n._key,Qe.exists(!0))])}function Kt(n){return sa(Dt(n.firestore,lr),[new Go(n._key,Qe.none())])}function FT(n,e){const t=Dt(n.firestore,lr),r=de(n),i=Em(n.converter,e);return sa(t,[gm(na(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Qe.exists(!1))]).then(()=>r)}function sa(n,e){return function(r,i){const s=new Ct;return r.asyncQueue.enqueueAndForget(async()=>nT(await vT(r),i,s)),s.promise}(pl(n),e)}function BT(n,e,t){const r=t.docs.get(e._key),i=new bm(n);return new Tm(n,i,e._key,r,new Ei(t.hasPendingWrites,t.fromCache),e.converter)}class UT{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=qT(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function $T(n){return new UT(n)}class jT{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Wi.provider,this._offlineComponentProvider={build:t=>new cm(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class zT{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Wi.provider,this._offlineComponentProvider={build:t=>new gT(t,e==null?void 0:e.cacheSizeBytes)}}}function qT(n){return new jT(void 0)}function GT(){return new zT}function xr(){return new yl("serverTimestamp")}(function(e,t=!0){(function(i){qr=i})(or),Wn(new _n("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new lr(new RI(r.getProvider("auth-internal")),new CI(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yn(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),St(sd,"4.7.3",e),St(sd,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="firebasestorage.googleapis.com",Rm="storageBucket",KT=2*60*1e3,HT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Vt{constructor(e,t,r=0){super(za(e),`Firebase Storage: ${t} (${za(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return za(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function za(n){return"storage/"+n}function bl(){const n="An unknown error occurred, please check the error payload for server response.";return new Pe(Se.UNKNOWN,n)}function WT(n){return new Pe(Se.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function QT(n){return new Pe(Se.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function JT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe(Se.UNAUTHENTICATED,n)}function XT(){return new Pe(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function YT(n){return new Pe(Se.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function ZT(){return new Pe(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eb(){return new Pe(Se.CANCELED,"User canceled the upload/download.")}function tb(n){return new Pe(Se.INVALID_URL,"Invalid URL '"+n+"'.")}function nb(n){return new Pe(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function rb(){return new Pe(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rm+"' property when initializing the app?")}function ib(){return new Pe(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sb(){return new Pe(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ob(n){return new Pe(Se.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ec(n){return new Pe(Se.INVALID_ARGUMENT,n)}function Sm(){return new Pe(Se.APP_DELETED,"The Firebase app was deleted.")}function ab(n){return new Pe(Se.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Di(n,e){return new Pe(Se.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function pi(n){throw new Pe(Se.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=lt.makeFromUrl(e,t)}catch{return new lt(e,"")}if(r.path==="")return r;throw nb(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function d(U){U.path_=decodeURIComponent(U.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${f}/b/${i}/o${_}`,"i"),x={bucket:1,path:3},C=t===Am?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",$=new RegExp(`^https?://${C}/${i}/${P}`,"i"),N=[{regex:c,indices:l,postModify:s},{regex:T,indices:x,postModify:d},{regex:$,indices:{bucket:1,path:2},postModify:d}];for(let U=0;U<N.length;U++){const K=N[U],W=K.regex.exec(e);if(W){const w=W[K.indices.bucket];let y=W[K.indices.path];y||(y=""),r=new lt(w,y),K.postModify(r);break}}if(r==null)throw tb(e);return r}}class cb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(n,e,t){let r=1,i=null,s=null,o=!1,c=0;function l(){return c===2}let d=!1;function f(...P){d||(d=!0,e.apply(null,P))}function p(P){i=setTimeout(()=>{i=null,n(T,l())},P)}function _(){s&&clearTimeout(s)}function T(P,...$){if(d){_();return}if(P){_(),f.call(null,P,...$);return}if(l()||o){_(),f.call(null,P,...$);return}r<64&&(r*=2);let N;c===1?(c=2,N=0):N=(r+Math.random())*1e3,p(N)}let x=!1;function C(P){x||(x=!0,_(),!d&&(i!==null?(P||(c=2),clearTimeout(i),p(0)):P||(c=1)))}return p(0),s=setTimeout(()=>{o=!0,C(!0)},t),C}function ub(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(n){return n!==void 0}function hb(n){return typeof n=="object"&&!Array.isArray(n)}function Al(n){return typeof n=="string"||n instanceof String}function ph(n){return Rl()&&n instanceof Blob}function Rl(){return typeof Blob<"u"}function mh(n,e,t,r){if(r<e)throw Ec(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ec(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Pm(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Kn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Kn||(Kn={}));/**
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
 */function fb(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t,r,i,s,o,c,l,d,f,p,_=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=p,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,x)=>{this.resolve_=T,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new zs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===Kn.NO_ERROR,l=s.getStatus();if(!c||fb(l,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Kn.ABORT;r(!1,new zs(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new zs(d,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());db(l)?s(l):s()}catch(l){o(l)}else if(c!==null){const l=bl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Sm():eb();o(l)}else{const l=ZT();o(l)}};this.canceled_?t(!1,new zs(!1,null,!0)):this.backoffId_=lb(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ub(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zs{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function mb(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function gb(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _b(n,e){e&&(n["X-Firebase-GMPID"]=e)}function yb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function vb(n,e,t,r,i,s,o=!0){const c=Pm(n.urlParams),l=n.url+c,d=Object.assign({},n.headers);return _b(d,e),mb(d,t),gb(d,s),yb(d,r),new pb(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wb(...n){const e=Ib();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Rl())return new Blob(n);throw new Pe(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Eb(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function Tb(n){if(typeof atob>"u")throw ob("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qa{constructor(e,t){this.data=e,this.contentType=t||null}}function xm(n,e){switch(n){case gt.RAW:return new qa(Cm(e));case gt.BASE64:case gt.BASE64URL:return new qa(km(n,e));case gt.DATA_URL:return new qa(Ab(e),Rb(e))}throw bl()}function Cm(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bb(n){let e;try{e=decodeURIComponent(n)}catch{throw Di(gt.DATA_URL,"Malformed data URL.")}return Cm(e)}function km(n,e){switch(n){case gt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Di(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case gt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Di(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Tb(e)}catch(i){throw i.message.includes("polyfill")?i:Di(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class Dm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Di(gt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Sb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Ab(n){const e=new Dm(n);return e.base64?km(gt.BASE64,e.rest):bb(e.rest)}function Rb(n){return new Dm(n).contentType}function Sb(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){let r=0,i="";ph(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(ph(this.data_)){const r=this.data_,i=Eb(r,e,t);return i===null?null:new dn(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new dn(r,!0)}}static getBlob(...e){if(Rl()){const t=e.map(r=>r instanceof dn?r.data_:r);return new dn(wb.apply(null,t))}else{const t=e.map(o=>Al(o)?xm(gt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)i[s++]=o[c]}),new dn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n){let e;try{e=JSON.parse(n)}catch{return null}return hb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function xb(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Nm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(n,e){return e}class Ye{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||Cb}}let qs=null;function kb(n){return!Al(n)||n.length<2?n:Nm(n)}function Lm(){if(qs)return qs;const n=[];n.push(new Ye("bucket")),n.push(new Ye("generation")),n.push(new Ye("metageneration")),n.push(new Ye("name","fullPath",!0));function e(s,o){return kb(o)}const t=new Ye("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new Ye("size");return i.xform=r,n.push(i),n.push(new Ye("timeCreated")),n.push(new Ye("updated")),n.push(new Ye("md5Hash",null,!0)),n.push(new Ye("cacheControl",null,!0)),n.push(new Ye("contentDisposition",null,!0)),n.push(new Ye("contentEncoding",null,!0)),n.push(new Ye("contentLanguage",null,!0)),n.push(new Ye("contentType",null,!0)),n.push(new Ye("metadata","customMetadata",!0)),qs=n,qs}function Db(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new lt(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function Vb(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return Db(r,n),r}function Om(n,e,t){const r=Vm(e);return r===null?null:Vb(n,r,t)}function Nb(n,e,t,r){const i=Vm(e);if(i===null||!Al(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(d=>{const f=n.bucket,p=n.fullPath,_="/b/"+o(f)+"/o/"+o(p),T=Sl(_,t,r),x=Pm({alt:"media",token:d});return T+x})[0]}function Lb(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class Mm{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(n){if(!n)throw bl()}function Ob(n,e){function t(r,i){const s=Om(n,i,e);return Fm(s!==null),s}return t}function Mb(n,e){function t(r,i){const s=Om(n,i,e);return Fm(s!==null),Nb(s,i,n.host,n._protocol)}return t}function Bm(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=XT():i=JT():t.getStatus()===402?i=QT(n.bucket):t.getStatus()===403?i=YT(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Fb(n){const e=Bm(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=WT(n.path)),s.serverResponse=i.serverResponse,s}return t}function Bb(n,e,t){const r=e.fullServerUrl(),i=Sl(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,c=new Mm(i,s,Mb(n,t),o);return c.errorHandler=Fb(e),c}function Ub(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function $b(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=Ub(null,e)),r}function jb(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let N="";for(let U=0;U<2;U++)N=N+Math.random().toString().slice(2);return N}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=$b(e,r,i),f=Lb(d,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,_=`\r
--`+l+"--",T=dn.getBlob(p,r,_);if(T===null)throw ib();const x={name:d.fullPath},C=Sl(s,n.host,n._protocol),P="POST",$=n.maxUploadRetryTime,M=new Mm(C,P,Ob(n,t),$);return M.urlParams=x,M.headers=o,M.body=T.uploadData(),M.errorHandler=Bm(e),M}class zb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Kn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Kn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw pi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class qb extends zb{initXhr(){this.xhr_.responseType="text"}}function Um(){return new qb}/**
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
 */class ir{constructor(e,t){this._service=e,t instanceof lt?this._location=t:this._location=lt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ir(e,t)}get root(){const e=new lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Nm(this._location.path)}get storage(){return this._service}get parent(){const e=Pb(this._location.path);if(e===null)return null;const t=new lt(this._location.bucket,e);return new ir(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ab(e)}}function Gb(n,e,t){n._throwIfRoot("uploadBytes");const r=jb(n.storage,n._location,Lm(),new dn(e,!0),t);return n.storage.makeRequestWithTokens(r,Um).then(i=>({metadata:i,ref:n}))}function Kb(n,e,t=gt.RAW,r){n._throwIfRoot("uploadString");const i=xm(t,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),Gb(n,i.data,s)}function Hb(n){n._throwIfRoot("getDownloadURL");const e=Bb(n.storage,n._location,Lm());return n.storage.makeRequestWithTokens(e,Um).then(t=>{if(t===null)throw sb();return t})}function Wb(n,e){const t=xb(n._location.path,e),r=new lt(n._location.bucket,t);return new ir(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(n){return/^[A-Za-z]+:\/\//.test(n)}function Jb(n,e){return new ir(n,e)}function $m(n,e){if(n instanceof Pl){const t=n;if(t._bucket==null)throw rb();const r=new ir(t,t._bucket);return e!=null?$m(r,e):r}else return e!==void 0?Wb(n,e):n}function Xb(n,e){if(e&&Qb(e)){if(n instanceof Pl)return Jb(n,e);throw Ec("To use ref(service, url), the first argument must be a Storage instance.")}else return $m(n,e)}function gh(n,e){const t=e==null?void 0:e[Rm];return t==null?null:lt.makeFromBucketSpec(t,n)}function Yb(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Fg(i,n.app.options.projectId))}class Pl{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Am,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KT,this._maxUploadRetryTime=HT,this._requests=new Set,i!=null?this._bucket=lt.makeFromBucketSpec(i,this._host):this._bucket=gh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=lt.makeFromBucketSpec(this._url,e):this._bucket=gh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){mh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){mh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ir(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new cb(Sm());{const o=vb(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const _h="@firebase/storage",yh="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="storage";function zm(n,e,t,r){return n=Re(n),Kb(n,e,t,r)}function qm(n){return n=Re(n),Hb(n)}function Gm(n,e){return n=Re(n),Xb(n,e)}function Zb(n=Vh(),e){n=Re(n);const r=No(n,jm).getImmediate({identifier:e}),i=Og("storage");return i&&eA(r,...i),r}function eA(n,e,t,r={}){Yb(n,e,t,r)}function tA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Pl(t,r,i,e,or)}function nA(){Wn(new _n(jm,tA,"PUBLIC").setMultipleInstances(!0)),St(_h,yh,""),St(_h,yh,"esm2017")}nA();const rA={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},xl=Dh(rA),ds=EI(xl),te=TT(xl,{localCache:$T({tabManager:GT()})}),Km=Zb(xl);function Z(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ye(n,e="info"){const t=document.createElement("div");t.className=`toast toast-${e}`,t.textContent=n,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("toast-show")),setTimeout(()=>{t.classList.remove("toast-show"),setTimeout(()=>t.remove(),300)},3500)}function oa(n,e){const t=document.getElementById("confirm-modal");document.getElementById("confirm-msg").textContent=n,t.classList.remove("hidden");const r=()=>{t.classList.add("hidden"),window._confirmAccept=null,window._confirmReject=null};window._confirmAccept=()=>{r(),e()},window._confirmReject=()=>{r()}}const Hm="archery_v5",iA="archery_v4";function vh(){try{const n=JSON.parse(localStorage.getItem(Hm)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(iA)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function vt(){try{localStorage.setItem(Hm,JSON.stringify({friends:g.friends,rounds:g.rounds.slice(0,200),courses:g.courses}))}catch(n){(n==null?void 0:n.name)==="QuotaExceededError"&&ye("Lokalt lager er fuldt — nogle data blev ikke gemt","error")}}const sA=[11,10,8,5,"M"];function Ne(n){return n==="M"||n==null?0:Number(n)}function sr(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":t==="-"?null:Number(t))):[]}function oA(n){return n.map(e=>e.map(t=>t??"-").join(",")).join(";")}function Je(n){return n.flat().reduce((e,t)=>e+Ne(t),0)}function aA(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(i=>i!=null).map(Ne));return t.length?(t.reduce((r,i)=>r+i,0)/t.length).toFixed(1):null}function Cl(n){const e={11:0,10:0,8:0,5:0,M:0};return n.flat().forEach(t=>{t==="M"?e.M++:t!=null&&e[Number(t)]!==void 0&&e[Number(t)]++}),e}function kl(n){return n.length?n.reduce((e,t)=>Je(t.scores)>Je(e.scores)?t:e,n[0]):null}function cA(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,i)=>r+Ne(i),0)/t.length<e:!1}function lA(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function uA(n,e){for(;n.scores.length<e;)n.scores.push([null,null])}function dA(n,e){let t=0;for(let r=0;r<e;r++)n.every(i=>{const s=i.scores[r]||[null,null];return s[0]!=null&&s[1]!=null})&&t++;return t}function Wm(n){return{id:n.id||null,name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:oA(e.scores)}))}}function hA(n){return{...n,shooters:(n.shooters||[]).map(e=>({...e,scores:sr(e.scores)}))}}let io=null,so=!1,Hn=!1,Tc=[],Vi=null,Ti=0,Tt=null,bc=null,mi=null;function Qm(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function Dl(n,e){const r=(e.lat-n.lat)*Math.PI/180,i=(e.lng-n.lng)*Math.PI/180,s=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(i/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))}function Jm(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function Xm(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function fA(n){return navigator.geolocation?(mi=n,Tc=[],Ti=0,Tt=null,Vi=Date.now(),Hn=!1,so=!0,io=navigator.geolocation.watchPosition(e=>{if(!so||Hn)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};Tt&&(Ti+=Dl(Tt,t)),Tt=t,Tc.push(t),mi&&mi({lat:t.lat,lng:t.lng,distance:Ti,elapsed:Math.round((Date.now()-Vi)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),bc=setInterval(()=>{so&&!Hn&&mi&&mi({lat:Tt==null?void 0:Tt.lat,lng:Tt==null?void 0:Tt.lng,distance:Ti,elapsed:Math.round((Date.now()-Vi)/1e3)})},1e3),!0):!1}window.toggleGpsPause=function(){return Hn=!Hn,Hn};function Ym(){return so=!1,Hn=!1,io!==null&&(navigator.geolocation.clearWatch(io),io=null),clearInterval(bc),bc=null,{route:Tc.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round(Ti),duration:Vi?Math.round((Date.now()-Vi)/1e3):0}}function aa(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function pA(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((i,s)=>{if(!i.gps)return;const o=Dl(e,i.gps);o<t&&(t=o,r=s)}),r}const g={user:null,profile:null,isAdmin:!1,isSuperAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,currentCourse:null,courseMap:null,courseMapLayer:null,approvedDraft:{new:[],edit:[]},gpsTracking:!1,warnThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0};let oo=null;async function mA(){try{"wakeLock"in navigator&&(oo=await navigator.wakeLock.request("screen"))}catch{}}function Vl(){oo&&(oo.release(),oo=null)}const gA={"auth/user-not-found":"Bruger ikke fundet.","auth/wrong-password":"Forkert kodeord.","auth/invalid-credential":"Ugyldig email eller kodeord.","auth/email-already-in-use":"Email er allerede i brug.","auth/weak-password":"Kodeordet er for svagt (min. 6 tegn).","auth/invalid-email":"Ugyldig email-adresse.","auth/too-many-requests":"For mange forsøg. Prøv igen senere.","auth/network-request-failed":"Netværksfejl. Tjek din forbindelse."};function Nl(n){return gA[n]||"Der opstod en fejl. Prøv igen."}function $t(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){$t("Udfyld alle felter.");return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await av(ds,n,e)}catch(r){$t(Nl(r.code))}finally{t.disabled=!1,t.textContent="LOG IND"}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value,r=document.getElementById("signup-kon").value,i=document.getElementById("signup-bueklasse").value;if(!n||!e||!t||!r||!i){$t("Udfyld alle felter.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){$t("Ugyldig email-adresse.");return}if(t.length<6){$t("Adgangskoden skal være mindst 6 tegn.");return}const s=document.querySelector("#signup-form .btn");s.disabled=!0,s.textContent="...";try{const o=await ov(ds,e,t);await Gn(de(te,"users",o.user.uid),{name:n,email:e,yam:n,"e-mail":e,kon:r,bueklasse:i,created:xr()})}catch(o){$t(Nl(o.code))}finally{s.disabled=!1,s.textContent="OPRET KONTO"}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){$t("Indtast din email først.");return}try{await sv(ds,n),$t("Nulstillingsmail sendt!","ok")}catch(e){$t(Nl(e.code))}};window.doLogout=async function(){try{await dv(ds)}catch{}};document.addEventListener("DOMContentLoaded",()=>{var t,r,i;const n=document.getElementById("warn-enabled-sw");if(n){const s=localStorage.getItem("warnEnabled");g.warnEnabled=s===null?!0:s==="true",n.classList.toggle("on",g.warnEnabled),n.addEventListener("click",()=>{g.warnEnabled=!g.warnEnabled,n.classList.toggle("on",g.warnEnabled),localStorage.setItem("warnEnabled",g.warnEnabled)})}uv(ds,async s=>{if(s){g.user=s;let o,c;for(let l=0;l<3;l++)try{[o,c]=await Promise.all([Qi(de(te,"users",s.uid)),Qi(de(te,"admins",s.uid))]);break}catch(d){console.error("Profil fejl attempt",l,d.code,d.message),l<2?await new Promise(f=>setTimeout(f,2e3*(l+1))):(g.profile={name:s.email,email:s.email},g.isAdmin=!1)}if(o!=null&&o.exists()){const l=o.data();g.profile={name:l.name||l.yam||s.email,email:l.email||l["e-mail"]||s.email,kon:l.kon||null,bueklasse:l.bueklasse||null}}else g.profile||(g.profile={name:s.email,email:s.email});g.isAdmin=(c==null?void 0:c.exists())||!1,g.isSuperAdmin=g.isAdmin&&s.email==="bsklausen@proton.me",vA()}else IA()});let e=null;window.addEventListener("beforeinstallprompt",s=>{s.preventDefault(),e=s,document.getElementById("pwa-banner").style.display="flex"}),(t=document.getElementById("pwa-install-btn"))==null||t.addEventListener("click",async()=>{e&&(e.prompt(),await e.userChoice,e=null,document.getElementById("pwa-banner").style.display="none")}),(r=document.getElementById("pwa-dismiss-btn"))==null||r.addEventListener("click",()=>{document.getElementById("pwa-banner").style.display="none"}),ao(24),document.getElementById("target-count").addEventListener("change",s=>{const o=s.target.value,c=document.getElementById("target-count-custom");c.style.display=o==="custom"?"":"none",o!=="custom"&&ao(Number(o))}),document.getElementById("target-count-custom").addEventListener("input",s=>{const o=Number(s.target.value);o>0&&ao(o)}),(i=document.getElementById("photo-input"))==null||i.addEventListener("change",async s=>{var c;const o=s.target.files[0];if(o)try{const l=await ng(o),d=Qr(),f=Gm(Km,`courses/${g.round.courseId}/target_${d}.jpg`);await zm(f,l,"base64",{contentType:"image/jpeg"});const p=await qm(f);await Ol(g.round.courseId,d,{imageUrl:p}),(c=g.course)!=null&&c.targets&&(g.course.targets[d].imageUrl=p),Rn()}catch(l){ye("Upload fejl: "+l.message,"error")}}),document.querySelectorAll(".modal").forEach(s=>{s.addEventListener("click",o=>{o.target===s&&s.classList.add("hidden")})})});window.saveProfilModal=async function(){const n=document.getElementById("profil-kon").value,e=document.getElementById("profil-bueklasse").value,t=document.getElementById("profil-err");if(!n||!e){t.textContent="Vælg både køn og bueklasse.",t.classList.remove("hidden");return}t.classList.add("hidden");try{await Jt(de(te,"users",g.user.uid),{kon:n,bueklasse:e}),g.profile.kon=n,g.profile.bueklasse=e,document.getElementById("profil-modal").classList.add("hidden")}catch{t.textContent="Fejl ved gem. Prøv igen.",t.classList.remove("hidden")}};function _A(n){let e=1,t=0,r=0,i=0,s=1,o=0,c=0,l=0,d=0,f=0,p=0,_=0,T=0;const x=()=>{n.style.transformOrigin="0 0",n.style.transform=e>1?`translate(${t}px,${r}px) scale(${e})`:""};n.addEventListener("touchstart",P=>{if(P.preventDefault(),P.touches.length===2){const $=P.touches,M=n.getBoundingClientRect();i=Math.hypot($[0].clientX-$[1].clientX,$[0].clientY-$[1].clientY),s=e,o=t,c=r,l=($[0].clientX+$[1].clientX)/2-M.left,d=($[0].clientY+$[1].clientY)/2-M.top}else P.touches.length===1&&(f=P.touches[0].clientX,p=P.touches[0].clientY,_=t,T=r)},{passive:!1}),n.addEventListener("touchmove",P=>{if(P.preventDefault(),P.touches.length===2){const $=P.touches,M=Math.hypot($[0].clientX-$[1].clientX,$[0].clientY-$[1].clientY),N=Math.min(8,Math.max(1,s*M/i)),U=(l-o)/s,K=(d-c)/s;t=l-U*N,r=d-K*N,e=N,x()}else P.touches.length===1&&e>1&&(t=_+P.touches[0].clientX-f,r=T+P.touches[0].clientY-p,x())},{passive:!1}),n.addEventListener("touchend",()=>{e<1.05&&(e=1,t=0,r=0,x())},{passive:!0});let C=0;n.addEventListener("touchend",()=>{const P=Date.now();P-C<300&&(e=1,t=0,r=0,x()),C=P},{passive:!0})}function yA(n){g.pendingAnalyseRound=n,document.getElementById("analyse-filter").value="specific",window.switchTab("analyse")}function Ih(){if(!g.pendingRound)return;const n=g.rounds.find(t=>t.id===g.pendingRound);if(!n)return;g.pendingRound=null;const e=(n.shooters||[]).map(t=>({...t,scores:sr(t.scores)}));setTimeout(()=>Ll({...n,shooters:e}),300)}function vA(){document.getElementById("hdr-name").textContent=g.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),(!g.profile.kon||!g.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),800),document.getElementById("admin-badge").classList.toggle("hidden",!g.isAdmin),document.querySelectorAll(".admin-only").forEach(t=>t.classList.toggle("hidden",!g.isAdmin));const n=vh();g.friends=n.friends||[],g.rounds=n.rounds||[],_t(ft(te,"users",g.user.uid,"friends")).then(t=>{if(!t.docs.length)return;const r=t.docs.map(o=>({...o.data(),id:o.id})),i=new Set(g.friends.map(o=>o.id)),s=r.filter(o=>!i.has(o.id));s.length&&(g.friends=[...g.friends,...s],vt(),Xi(),Ji())}).catch(t=>console.warn("Hent venner:",t)),Xi(),Ji(),ko(),g.pendingRound=new URLSearchParams(window.location.search).get("round")||null,g.pendingRound&&Ih();const e=vh().courses||[];g.courses=e,hs(),ca(),wA(),_t(ft(te,"users",g.user.uid,"rounds")).then(t=>{if(!t.docs.length)return;const r=t.docs.map(o=>({...o.data(),id:o.id})),i=new Set(g.rounds.map(o=>o.id)),s=r.filter(o=>!i.has(o.id));s.length&&(g.rounds=[...g.rounds,...s].sort((o,c)=>{var f,p;const l=o.completed||o.created||0,d=c.completed||c.created||0;return(typeof d=="number"?d:((f=d.toMillis)==null?void 0:f.call(d))??0)-(typeof l=="number"?l:((p=l.toMillis)==null?void 0:p.call(l))??0)}),vt(),ko(),g.pendingRound&&Ih())}).catch(t=>console.warn("Hent runder:",t)),CA(),bA()}function IA(){g.user=null,g.profile=null,g.round=null,Vl(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){window.appLang=window.appLang==="da"?"en":"da",document.getElementById("lang-btn").textContent=window.appLang.toUpperCase()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&NA(),n==="analyse"&&window.renderAnalyse(),n==="courses"&&g.courseMap&&setTimeout(()=>g.courseMap.invalidateSize(),100)};function wA(){!navigator.geolocation||!g.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(g.courses.forEach(i=>{(i.targets||[]).forEach(s=>{const o=s.gps||s.GPS;if(!o||!o.lat)return;const c=Dl(e,o);c<t&&(t=c,r=i.id)})}),r&&t<500){const i=document.getElementById("course-sel");i.value=r,i.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function ca(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML='<option value="">-- Ingen bane --</option>',g.courses.forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${t.numTargets} mål)`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=g.courses.find(s=>s.id===n.value),r=document.getElementById("target-count"),i=document.getElementById("target-count-custom");t?(!!r.querySelector(`option[value="${t.numTargets}"]`)?(r.value=String(t.numTargets),i.style.display="none"):(r.value="custom",i.value=t.numTargets,i.style.display=""),r.disabled=!0,i.disabled=!0):(r.disabled=!1,i.disabled=!1,r.value!=="custom"&&(i.style.display="none")),ao(t?t.numTargets:r.value==="custom"?Number(i.value):Number(r.value))}}function ao(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${Z(e)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};function EA(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}function Ji(){const n=document.getElementById("qfriends");n.innerHTML="",g.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=g.friends.filter(s=>s.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await _t(ft(te,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=g.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(s){console.warn(s)}const i=[...t,...r];if(!i.length){e.classList.add("hidden");return}e.innerHTML=i.map(s=>`<div class="ac-item" data-id="${Z(s.id)}" data-name="${Z(s.name||"")}" data-email="${Z(s.email||"")}">${Z(s.name)}${s.email?` <span style='font-size:11px;opacity:.6'>${Z(s.email)}</span>`:""}</div>`).join(""),e.querySelectorAll(".ac-item").forEach(s=>s.addEventListener("click",()=>{selectFriend(s.dataset.id,s.dataset.name,s.dataset.email),document.getElementById("friend-search").value="",document.getElementById("ac-list").classList.add("hidden")})),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){g.friends.find(r=>r.id===n)||(g.friends.push({id:n,name:e,email:t}),vt(),Xi(),Ji()),window.addParticipant(n,e)};window.startRound=async function(){var f,p;const n=(document.getElementById("round-name").value.trim()||"Min Skydning").slice(0,80),e=document.getElementById("course-sel").value,t=document.getElementById("target-count"),r=(t.value==="custom"?Number(document.getElementById("target-count-custom").value):Number(t.value))||24,i=Number(document.getElementById("start-target").value)-1,s=document.getElementById("gps-auto-sw").classList.contains("on"),o=document.getElementById("gps-track-sw").classList.contains("on");g.warnThreshold=Number(document.getElementById("warn-thresh").value)||8;const c=[{id:g.user.uid,name:g.profile.name,isGuest:!1},...EA().filter(_=>_.id!==g.user.uid)];g.course=e&&g.courses.find(_=>_.id===e)||null;const l=c.map(_=>{const T=lA(_.id,_.name,_.isGuest);return uA(T,r),T});let d=i;if(s&&((f=g.course)!=null&&f.targets))try{d=pA(g.course.targets,await aa())}catch{}g.round={id:"r_"+Date.now(),name:n,courseId:e||null,courseName:((p=g.course)==null?void 0:p.name)||null,numTargets:r,startTarget:d+1,shooters:l,created:Date.now(),traversalOrder:Zm(d,r),traversalPos:0},o&&(g.gpsTracking=fA(TA),document.getElementById("gps-bar").classList.toggle("hidden",!g.gpsTracking),mA()),showActivePanel(),Jr(),Rn(),ua(),la()};function Zm(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}function Qr(){return g.round.traversalOrder[g.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function Rn(){var l,d;if(!g.round)return;const n=Qr(),e=g.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=" af "+e,document.getElementById("round-badge").textContent=g.round.name;const t=(d=(l=g.course)==null?void 0:l.targets)==null?void 0:d[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||`Mål ${n+1}`;const r=dA(g.round.shooters,e);document.getElementById("pbar").style.width=`${r/e*100}%`;const i=g.round.shooters.flatMap(f=>f.scores.flat().filter(p=>p!=null)),s=i.reduce((f,p)=>f+Ne(p),0);document.getElementById("stat-avg").textContent=i.length?(s/i.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=s,document.getElementById("stat-rem").textContent=e-r;const o=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(o.classList.add("hidden"),o.onload=()=>o.classList.remove("hidden"),o.onerror=()=>o.classList.add("hidden"),o.src=t.imageUrl||t.photo):(o.src="",o.classList.add("hidden")),document.getElementById("edit-target-btn").classList.toggle("hidden",!(g.isAdmin&&g.round.courseId)),document.getElementById("next-btn").textContent=g.round.traversalPos===e-1?"AFSLUT →":"NÆSTE →";const c=aA(g.round.shooters,n);document.getElementById("target-avg").textContent=c!==null?`Gns. dette mål: ${c}`:""}function Jr(){if(!g.round)return;const n=Qr(),e=document.getElementById("shooters-list");e.innerHTML="",g.round.shooters.forEach((t,r)=>{const i=Je(t.scores),s=cA(t.scores,g.warnThreshold),o=t.scores[n]||[null,null],c=document.createElement("div");c.className="shooter-card";const l=t.scores.map(x=>x[0]).filter(x=>x!=null),d=t.scores.map(x=>x[1]).filter(x=>x!=null),f=[...l,...d],p=l.length?(l.reduce((x,C)=>x+Ne(C),0)/l.length).toFixed(2):"—",_=d.length?(d.reduce((x,C)=>x+Ne(C),0)/d.length).toFixed(2):"—",T=f.length?(f.reduce((x,C)=>x+Ne(C),0)/f.length).toFixed(2):"—";c.innerHTML=`
      <div class="sh-head"><span style="font-size:18px;">🎯</span>${s?'<span class="warn-dot"></span>':""}
        <span class="sh-name">${t.name}</span>
        <div style="display:flex;gap:4px;">
          <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${i}</div></div>
          <div class="sh-mini"><div class="sh-mini-lbl">P1</div><div class="sh-mini-val" style="font-size:12px;">${p}</div></div>
          <div class="sh-mini" style="border:1px solid var(--acc);"><div class="sh-mini-lbl">SNT</div><div class="sh-mini-val" style="font-size:12px;color:var(--acc);">${T}</div></div>
          <div class="sh-mini"><div class="sh-mini-lbl">P2</div><div class="sh-mini-val" style="font-size:12px;">${_}</div></div>
        </div>
      </div>
      <div class="arrows-row">${[0,1].map(x=>`
        <div class="arrow-grp"><div class="arrow-lbl">🎯 PIL ${x+1}</div>
          <div class="score-btns">${sA.map(C=>`
            <button class="sbtn ${o[x]===C?`sel-${C}`:""}" data-v="${C}"
              onclick="setScore(${r},${n},${x},'${C}')">${C}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(c)})}window.setScore=function(n,e,t,r){const i=r==="M"?"M":Number(r);g.round.shooters[n].scores[e][t]=i,la(),Jr(),Rn()};function TA({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=Jm(r),document.getElementById("gps-dist").textContent=Xm(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function la(){if(!(!g.round||!g.user))try{await Gn(de(te,"users",g.user.uid,"active","round"),Wm(g.round))}catch(n){console.warn(n)}}async function bA(){var n;try{const e=await Qi(de(te,"users",g.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(t.id&&g.rounds.some(i=>i.id===t.id)){await Kt(de(te,"users",g.user.uid,"active","round"));return}if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await Kt(de(te,"users",g.user.uid,"active","round"));return}oa("Genoptag den igangværende runde?",()=>{g.round=hA(t),g.round.traversalOrder=t.traversalOrder||Zm(0,g.round.numTargets),g.round.traversalPos=t.traversalPos||0,g.round.courseId&&(g.course=g.courses.find(i=>i.id===g.round.courseId)||null),showActivePanel(),Jr(),Rn(),ua()})}catch(e){console.warn(e)}}function ua(){const n=document.getElementById("app-main");n&&(n.scrollTop=0,requestAnimationFrame(()=>{n.scrollTop=0,setTimeout(()=>{n.scrollTop=0},100)}))}window.prevTarget=function(){!g.round||g.round.traversalPos<=0||(g.round.traversalPos--,la(),Jr(),Rn(),ua())};window.nextTarget=function(){g.round&&(g.round.traversalPos<g.round.numTargets-1?(g.round.traversalPos++,la(),Jr(),Rn(),ua()):window.finishRound())};window.skipToTarget=function(){g.round&&(document.getElementById("skip-input").max=g.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!g.round||n<1||n>g.round.numTargets)return;const e=g.round.traversalOrder.indexOf(n-1);e!==-1&&(g.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),Jr(),Rn()};window.finishRound=async function(){var s,o,c;g.finishTap++;const n=document.getElementById("finish-btn");if(g.finishTap===1){n.textContent="✓ BEKRÆFT",setTimeout(()=>{g.finishTap=0,n.textContent="✓ AFSLUT NU"},3e3);return}g.finishTap=0,n.textContent="✓ AFSLUT NU";let e={};g.gpsTracking&&(e=Ym(),g.gpsTracking=!1),Vl();const t=g.round.id||"r_"+Date.now(),r={...Wm(g.round),completed:Date.now(),...e,id:t};g.rounds.unshift({...r,created:Date.now()}),vt(),ko(),Gn(de(te,"users",g.user.uid,"rounds",t),{...r,created:xr()}).catch(()=>ye("Runde gemt lokalt (netværksfejl)","error")),g.round.shooters.filter(l=>!l.isGuest&&l.id!==g.user.uid).forEach(l=>{Gn(de(te,"users",l.id,"rounds",t),{...r,created:xr()}).catch(()=>{})});const i=g.round;if(i.courseId&&((s=g.profile)!=null&&s.kon)&&((o=g.profile)!=null&&o.bueklasse)){const l=i.shooters.find(d=>{var f;return d.id===((f=g.user)==null?void 0:f.uid)})||((c=i.shooters)==null?void 0:c[0]);l&&Gn(de(te,"bane_stats",i.courseId,"runder",t),{score:Je(l.scores),kon:g.profile.kon,bueklasse:g.profile.bueklasse,numTargets:i.numTargets,dato:xr()}).catch(d=>console.warn("bane_stats fejl:",d))}window._lastRound=i,g.round=null,await Kt(de(te,"users",g.user.uid,"active","round")).catch(()=>{}),RA(i),showResultsPanel()};window.abortRound=async function(){g.abortTap++;const n=document.getElementById("abort-btn");if(g.abortTap===1){n.textContent="🗑 BEKRÆFT",setTimeout(()=>{g.abortTap=0,n.textContent="🗑 AFBRYD"},3e3);return}g.abortTap=0,n.textContent="🗑 AFBRYD",g.gpsTracking&&(Ym(),g.gpsTracking=!1),Vl(),await Kt(de(te,"users",g.user.uid,"active","round")).catch(()=>{}),g.round=null,showSetupPanel()};function AA(n){return'<div class="dist-grid">'+n.shooters.map(e=>{const t=Cl(e.scores),r=Je(e.scores),i=e.scores.map(f=>(f||[null,null])[0]).filter(f=>f!=null),s=e.scores.map(f=>(f||[null,null])[1]).filter(f=>f!=null),o=e.scores.flat().filter(f=>f!=null),c=i.length?(i.reduce((f,p)=>f+Ne(p),0)/i.length).toFixed(2):"—",l=s.length?(s.reduce((f,p)=>f+Ne(p),0)/s.length).toFixed(2):"—",d=o.length?(o.reduce((f,p)=>f+Ne(p),0)/o.length).toFixed(2):"—";return`<div class="dist-card"><div class="dist-name">${Z(e.name)}</div><div class="dist-row" style="font-weight:700;border-bottom:1px solid var(--surface2);padding-bottom:4px;margin-bottom:4px;"><span>Total</span><span>${r} pt</span></div><div class="dist-row"><span>Snit pil 1</span><span>${c}</span></div><div class="dist-row"><span>Snit pil 2</span><span>${l}</span></div><div class="dist-row" style="border-bottom:1px solid var(--surface2);padding-bottom:4px;margin-bottom:4px;"><span>Samlet snit</span><span>${d}</span></div>${Object.entries(t).map(([f,p])=>`<div class="dist-row"><span>${f}</span><span>${p}x</span></div>`).join("")}</div>`}).join("")+"</div>"}function RA(n){const e=kl(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${Z((e==null?void 0:e.name)||"—")}</div><div class="win-score">${e?Je(e.scores):0} point</div>`,document.getElementById("res-table").innerHTML=eg(n),document.getElementById("res-dist").innerHTML=AA(n)}function eg(n){const e=(n.startTarget||1)-1;let t=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${n.shooters.map(r=>`<th>${r.name}</th>`).join("")}</tr>`;for(let r=0;r<n.numTargets;r++)t+=`<tr><td class="tc">${r===e?'<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--acc);margin-right:4px;vertical-align:middle;"></span>':""}${r+1}</td>`,n.shooters.forEach(s=>{const o=s.scores[r]||[null,null],c=(o[0]!=null&&o[0]!=="M"?Number(o[0]):0)+(o[1]!=null&&o[1]!=="M"?Number(o[1]):0);t+=`<td>${o.map(l=>l??"—").join("/")}<br><small>${c}</small></td>`}),t+="</tr>";return t+=`<tr class="tr-tot"><td class="tc">Total</td>${n.shooters.map(r=>`<td>${Je(r.scores)}</td>`).join("")}</tr></table></div>`,t}function SA(n){const e=["11","10","8","5","M"];return n.shooters.map(t=>{const r=Je(t.scores),i=t.scores.map(_=>(_||[null,null])[0]).filter(_=>_!=null),s=t.scores.map(_=>(_||[null,null])[1]).filter(_=>_!=null),o=t.scores.flat().filter(_=>_!=null),c=o.length,l=i.length?(i.reduce((_,T)=>_+Ne(T),0)/i.length).toFixed(2):"—",d=s.length?(s.reduce((_,T)=>_+Ne(T),0)/s.length).toFixed(2):"—",f=c?(o.reduce((_,T)=>_+Ne(T),0)/c).toFixed(2):"—",p=Cl(t.scores);return`<div style="background:var(--surface2);border-radius:10px;padding:12px;margin-bottom:10px;">
      <div style="font-size:15px;font-weight:700;margin-bottom:10px;">${Z(t.name)}</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center;margin-bottom:8px;">
        <div style="background:var(--card);border-radius:8px;padding:8px;">
          <div style="font-size:28px;font-weight:700;color:var(--acc);line-height:1.1;">${r}</div>
          <div style="font-size:10px;color:var(--muted);">POINT</div>
        </div>
        <div style="background:var(--card);border-radius:8px;padding:8px;">
          <div style="font-size:28px;font-weight:700;color:var(--acc);line-height:1.1;">${c}</div>
          <div style="font-size:10px;color:var(--muted);">PILE</div>
        </div>
        <div style="background:var(--card);border-radius:8px;padding:8px;">
          <div style="font-size:28px;font-weight:700;color:var(--acc);line-height:1.1;">${f}</div>
          <div style="font-size:10px;color:var(--muted);">SNT/PIL</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;text-align:center;margin-bottom:10px;">
        <div style="background:var(--card);border-radius:8px;padding:6px;">
          <div style="font-size:18px;font-weight:700;color:var(--acc);">${l}</div>
          <div style="font-size:10px;color:var(--muted);">SNIT PIL 1</div>
        </div>
        <div style="background:var(--card);border-radius:8px;padding:6px;">
          <div style="font-size:18px;font-weight:700;color:var(--acc);">${d}</div>
          <div style="font-size:10px;color:var(--muted);">SNIT PIL 2</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;text-align:center;border-top:1px solid var(--card);padding-top:8px;">
        ${e.map(_=>`<div><div style="font-size:20px;font-weight:700;color:var(--text);">${_}</div><div style="font-size:20px;font-weight:700;color:var(--acc);">${p[_]||0}</div></div>`).join("")}
      </div>
    </div>`}).join("")}function PA(n){const e=n.shooters.map(r=>{const i=r.scores.filter(f=>{const p=f||[null,null];return p[0]!==null&&p[1]!==null});if(!i.length||i.length===n.numTargets)return null;const s=i.flat().filter(f=>f!==null),o=s.reduce((f,p)=>f+Ne(p),0),c=s.length,l=c?(o/c).toFixed(2):0,d=i.length?(o/i.length).toFixed(1):0;return{name:r.name,shot:i.length,total:o,avgPil:l,avgMaal:d}}).filter(Boolean);return e.length?`<div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--surface2);"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Kun skudte mål</div><div style="display:flex;gap:8px;flex-wrap:wrap;">${e.map(r=>`<div style="flex:1;min-width:130px;background:var(--surface2);border-radius:10px;padding:12px 10px;text-align:center;"><div style="font-size:13px;font-weight:700;color:var(--txt);margin-bottom:2px;">${r.name}</div><div style="font-size:11px;color:var(--muted);margin-bottom:6px;">${r.shot} af ${n.numTargets} mål</div><div style="font-size:30px;font-weight:700;color:var(--acc);line-height:1.1;">${r.total}</div><div style="font-size:12px;color:var(--muted);margin-bottom:8px;">POINT</div><div style="display:flex;justify-content:center;gap:12px;"><div><div style="font-size:16px;font-weight:700;color:var(--acc);">${r.avgPil}</div><div style="font-size:11px;color:var(--muted);">SNT/PIL</div></div><div><div style="font-size:16px;font-weight:700;color:var(--acc);">${r.avgMaal}</div><div style="font-size:11px;color:var(--muted);">SNT/MÅL</div></div></div></div>`).join("")}</div></div>`:""}function ko(){const n=document.getElementById("rounds-list");if(!g.rounds.length){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}n.innerHTML="",g.rounds.forEach(e=>{const t=(e.shooters||[]).map(c=>({...c,scores:sr(c.scores)})),r=t.length?kl(t):null,i=e.created,s=i!=null&&i.toDate?i.toDate().toLocaleDateString("da-DK"):i!=null&&i.seconds?new Date(i.seconds*1e3).toLocaleDateString("da-DK"):typeof i=="number"?new Date(i).toLocaleDateString("da-DK"):"—",o=document.createElement("div");o.className="rcard",o.innerHTML=`<div class="rcard-info"><div class="rcard-name">${Z(e.name||"Runde")}</div><div class="rcard-meta"><span class="rcard-date">${Z(s)}</span> · ${Z(e.courseName||e.numTargets+" mål")}</div><div class="rcard-win">🏆 ${Z((r==null?void 0:r.name)||"—")} (${r?Je(r.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser" style="font-size:16px;">📈</button><button class="del-btn" data-id="${Z(e.id)}">✕</button>`,o.querySelector(".rcard-info").onclick=()=>Ll({...e,shooters:t}),o.querySelector(".rcard-analyse").onclick=()=>yA(e.id),o.querySelector(".del-btn").onclick=c=>{const l=c.currentTarget,d=`r-${e.id}`;g.deleteConfirm[d]?(delete g.deleteConfirm[d],g.rounds=g.rounds.filter(f=>f.id!==e.id),vt(),ko(),g.user&&Kt(de(te,"users",g.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),g.user&&e.courseId&&Kt(de(te,"bane_stats",e.courseId,"runder",e.id)).catch(f=>console.warn(f)),e.courseId&&MA(e.courseId,e.id).catch(f=>console.warn(f))):(g.deleteConfirm[d]=!0,l.classList.add("conf"),l.textContent="Slet?",setTimeout(()=>{delete g.deleteConfirm[d],l.classList.remove("conf"),l.textContent="✕"},3e3))},n.appendChild(o)})}function Ll(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),g.rpopMap&&(g.rpopMap.remove(),g.rpopMap=null);const t=n.gpsRoute||n.route||null,r=n.gpsDuration||n.duration||null,i=n.gpsDistance||n.distance||null,s=r?Jm(r):null,o=i?Xm(i):null,c=o||s?`<div style="display:flex;gap:8px;margin-bottom:12px;">${o?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${o}</div><div style="font-size:11px;color:var(--muted);">DISTANCE</div></div>`:""}${s?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${s}</div><div style="font-size:11px;color:var(--muted);">TID</div></div>`:""}</div>${t?'<div id="rpop-map" style="height:200px;border-radius:8px;margin-bottom:12px;overflow:hidden;"></div>':""}`:"";if(document.getElementById("rpop-body").innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${Z(n.name)}</h3>${c}`+SA(n)+eg(n)+PA(n)+'<button class="btn btn-gold" style="width:100%;margin-top:12px;" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>',t){const l=Qm(t);l.length&&setTimeout(()=>{const d=document.getElementById("rpop-map");if(!d)return;g.rpopMap=window.L.map(d),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(g.rpopMap);const f=window.L.polyline(l.map(p=>[p.lat,p.lng]),{color:"#e8a020",weight:3}).addTo(g.rpopMap);g.rpopMap.fitBounds(f.getBounds(),{padding:[20,20]})},50)}}function xA(n){const e=n.data();return{id:n.id,name:e.name||e.yam||"—",numTargets:e.numTargets||e.antalMål||24,location:e.location||e.beliggenhed||"",targets:e.targets||e.mål||[],visits:e.visits||e.besøg||[],private:e.private??e.privat??!1,hidden:e.hidden??e.skjult??!1,approvedUsers:e.approvedUsers||e.godkendteBrugere||[]}}async function CA(){var n;try{const e=(((n=g.user)==null?void 0:n.email)||"").toLowerCase();let t;if(g.isAdmin)t=[await _t(ft(te,"courses"))];else{const s=[_t(dh(ft(te,"courses"),ja("hidden","==",!1)))];e&&s.push(_t(dh(ft(te,"courses"),ja("hidden","==",!0),ja("approvedUsers","array-contains",e)))),t=await Promise.all(s)}const r=new Map;t.forEach(s=>s.docs.forEach(o=>r.set(o.id,o)));const i=[...r.values()].map(xA);i.length&&(g.courses=i,vt(),hs(),ca())}catch(e){console.warn("courses:",e)}}function hs(){const n=document.getElementById("courses-list");if(!g.courses.length){n.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}n.innerHTML="",g.courses.forEach(e=>{const t=document.createElement("div");t.className="ccard",t.innerHTML=`<div class="ccard-name">${Z(e.name)}${e.private?' <span style="font-weight:400;color:var(--muted);">(Banen er kun for medlemmer)</span>':""}</div><div class="ccard-meta">${e.numTargets} mål · ${Z(e.location||"—")}</div>`,t.onclick=()=>kA(e),n.appendChild(t)})}function kA(n){g.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name+(n.private?" (Banen er kun for medlemmer)":""),window.switchSubtab("map"),DA(n),VA(n),fs(n)}function DA(n){const e=document.getElementById("course-map");g.courseMap&&(g.courseMap.remove(),g.courseMap=null),g.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(g.courseMap);const t=[];(n.targets||[]).forEach((r,i)=>{const s=r.gps||r.GPS;!s||!s.lat||!s.lng||(t.push([s.lat,s.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${i+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(g.courseMap).bindPopup(`<b>${i+1}. ${r.name||"Mål"}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" style="max-width:140px;border-radius:4px;"/>`:""}`))}),t.length?g.courseMap.fitBounds(t,{padding:[20,20]}):g.courseMap.setView([55.7,12.5],10)}function VA(n){const e=document.getElementById("visits-list"),t=g.rounds.filter(r=>r.courseId===n.id).map(r=>{const i=(r.shooters||[]).map(o=>({...o,scores:sr(o.scores)})),s=kl(i);return{roundId:r.id,date:r.completed?new Date(r.completed).toLocaleDateString("da-DK"):r.created?new Date(r.created).toLocaleDateString("da-DK"):"—",participants:i.map(o=>o.name),winner:s==null?void 0:s.name,winnerScore:s?Je(s.scores):0}});if(!t.length){e.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}e.innerHTML="",t.forEach(r=>{const i=document.createElement("div");i.className="visit-card",i.style.cursor="pointer",i.onclick=s=>{s.target.closest(".btn-icon")||window.showVisitResults(r.roundId)},i.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;"><span style="font-weight:700;font-size:13px;">${Z(r.date)}</span><button class="btn-icon" onclick="window.showVisitResults('${Z(r.roundId)}')" title="Se resultat">📊</button></div><div style="font-size:12px;color:var(--muted);">${(r.participants||[]).map(Z).join(", ")}</div>${r.winner?`<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${Z(r.winner)} (${r.winnerScore} pt)</div>`:""}`,e.appendChild(i)})}window.showVisitResults=function(n){const e=g.rounds.find(r=>r.id===n);if(!e){ye("Runden er ikke gemt lokalt","error");return}const t=(e.shooters||[]).map(r=>({...r,scores:sr(r.scores)}));window.switchTab("results"),Ll({...e,shooters:t})};window.showRouteOnMap=function(n){!g.courseMap||!n.length||(g.courseMapLayer&&g.courseMap.removeLayer(g.courseMapLayer),g.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(g.courseMap),g.courseMap.fitBounds(g.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.parseRoute=Qm;function fs(n){const e=n.targets||[];let t=`
    <div class="card" style="margin-bottom:12px;">
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
      <div class="trow-sub" style="margin-top:-6px;">Privat: banen er stadig synlig for alle, men vises med "(Banen er kun for medlemmer)". Skjult: kun skytter du selv godkender (nedenfor) kan se banen.</div>
      <div id="edit-capproved-wrap" style="display:${n.hidden?"":"none"};">
        <div class="ac-wrap fg">
          <input type="text" id="edit-capproved-search" placeholder="Søg registreret bruger…" autocomplete="off" oninput="searchApprovedUsers('edit',this.value)" />
          <div id="edit-capproved-ac" class="ac-list hidden"></div>
        </div>
        <div id="edit-capproved-chips" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;"></div>
        <input type="text" id="edit-capproved-manual" placeholder="…eller indtast email direkte" />
        <button type="button" class="btn btn-dark" style="width:100%;margin-top:6px;" onclick="addApprovedEmailManual('edit')">Tilføj</button>
      </div>
      <button class="btn btn-gold" style="width:100%" onclick="saveCourseEdit()">Gem baneinfo</button>
    </div>
    <div class="card">
      <div class="card-title" style="display:flex;justify-content:space-between;align-items:center;">
        <span>Mål (${e.length})</span>
        <button class="btn-icon" onclick="addTargetToCurrentCourse()" style="font-size:20px;">＋</button>
      </div>
      <div id="targets-edit-list">`;e.forEach((r,i)=>{t+=`<div class="fg" style="border-bottom:1px solid var(--surface2);padding-bottom:12px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;color:var(--acc);">Mål ${i+1}</span>
        <div style="display:flex;gap:6px;">
          <button class="btn-icon" onclick="setTargetGps(${i})" title="Sæt GPS">📍</button>
          <button class="btn-icon" onclick="deleteTargetFromCourse(${i})" style="color:var(--danger)">🗑</button>
        </div>
      </div>
      <div class="fg"><label class="lbl">Navn</label>
        <input type="text" value="${r.name||""}" onchange="updateTargetField(${i},'name',this.value)" style="padding:6px 10px;" /></div>
      <div style="display:flex;gap:8px;">
        <div class="fg" style="flex:1"><label class="lbl">Emoji</label>
          <input type="text" value="${r.emoji||""}" onchange="updateTargetField(${i},'emoji',this.value)" style="padding:6px 10px;" /></div>
        <div class="fg" style="flex:1"><label class="lbl">Afstand (m)</label>
          <input type="number" value="${r.distance||""}" onchange="updateTargetField(${i},'distance',this.value)" style="padding:6px 10px;" /></div>
      </div>
      ${r.gps||r.GPS?`<div style="font-size:12px;color:var(--muted);">📍 GPS: ${(r.gps||r.GPS).lat.toFixed(5)}, ${(r.gps||r.GPS).lng.toFixed(5)}</div>`:'<div style="font-size:12px;color:var(--danger);">Ingen GPS</div>'}
      ${r.imageUrl||r.photo?`<img src="${r.imageUrl||r.photo}" style="max-width:100%;max-height:100px;border-radius:8px;margin-top:6px;object-fit:cover;" />`:""}
      <label class="btn btn-dark" style="margin-top:6px;display:inline-block;font-size:12px;padding:4px 10px;cursor:pointer;">
        📷 Upload foto
        <input type="file" accept="image/*" style="display:none;" onchange="uploadTargetPhoto(${i},this)" />
      </label>
      <button class="btn btn-gold" style="margin-top:6px;font-size:12px;padding:4px 10px;" onclick="saveAllTargets()">💾 Gem alle mål</button>
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t,g.approvedDraft.edit=[...n.approvedUsers||[]],da("edit")}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim().slice(0,100),e=document.getElementById("edit-cloc").value.trim().slice(0,100),t=document.getElementById("edit-cvisibility").value,r=t!=="public",i=t==="hidden",s=i?[...g.approvedDraft.edit]:[];if(!n)return;await Jt(de(te,"courses",g.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e,private:r,privat:r,hidden:i,skjult:i,approvedUsers:s,godkendteBrugere:s}),g.currentCourse.name=n,g.currentCourse.location=e,g.currentCourse.private=r,g.currentCourse.hidden=i,g.currentCourse.approvedUsers=s;const o=g.courses.findIndex(c=>c.id===g.currentCourse.id);o>-1&&(g.courses[o]={...g.courses[o],name:n,location:e,private:r,hidden:i,approvedUsers:s}),vt(),hs(),document.getElementById("course-detail-title").textContent=n+(r?" (Banen er kun for medlemmer)":""),ye("Gemt!","success")};window.updateTargetField=function(n,e,t){var r;(r=g.currentCourse)!=null&&r.targets&&(g.currentCourse.targets[n][e]=t)};window.addTargetToCurrentCourse=async function(){if(!g.currentCourse)return;const n=[...g.currentCourse.targets||[]];n.push({number:n.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await Jt(de(te,"courses",g.currentCourse.id),{targets:n}),g.currentCourse.targets=n,fs(g.currentCourse),ye(`Mål ${n.length} tilføjet!`,"success")};window.deleteTargetFromCourse=function(n){var e;(e=g.currentCourse)!=null&&e.targets&&oa(`Slet mål ${n+1}?`,async()=>{try{const t=[...g.currentCourse.targets];t.splice(n,1),t.forEach((r,i)=>r.number=i+1),await Jt(de(te,"courses",g.currentCourse.id),{targets:t,numTargets:t.length}),g.currentCourse.targets=t,g.currentCourse.numTargets=t.length,fs(g.currentCourse)}catch{ye("Fejl: Kunne ikke slette mål","error")}})};window.setTargetGps=async function(n){var e;if((e=g.currentCourse)!=null&&e.targets)try{const t=await aa();g.currentCourse.targets[n].gps=t,await Jt(de(te,"courses",g.currentCourse.id),{targets:g.currentCourse.targets}),fs(g.currentCourse),ye(`GPS sat for mål ${n+1}!`,"success")}catch(t){ye("GPS fejl: "+t.message,"error")}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await ng(t),i=Gm(Km,`courses/${g.currentCourse.id}/target_${n}.jpg`);await zm(i,r,"base64",{contentType:"image/jpeg"});const s=await qm(i);g.currentCourse.targets[n].imageUrl=s,await Jt(de(te,"courses",g.currentCourse.id),{targets:g.currentCourse.targets}),fs(g.currentCourse),ye("Foto gemt!","success")}catch(r){ye("Upload fejl: "+r.message,"error")}};window.saveAllTargets=async function(){var n;(n=g.currentCourse)!=null&&n.targets&&(await Jt(de(te,"courses",g.currentCourse.id),{targets:g.currentCourse.targets}),ye("Alle mål gemt!","success"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&g.courseMap&&setTimeout(()=>g.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await aa();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(g.courseMap),g.courseMap.panTo([e.lat,e.lng])}catch{ye("GPS ikke tilgængeligt","error"),n.classList.remove("on")}};window.doDeleteCourse=function(){if(!g.currentCourse)return;const n=g.currentCourse.id,e=g.currentCourse.name;oa(`Slet banen "${e}"?`,async()=>{try{await Kt(de(te,"courses",n)),g.courses=g.courses.filter(t=>t.id!==n),g.currentCourse=null,vt(),hs(),ca(),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"),ye("Bane slettet","success")}catch{ye("Fejl: Kunne ikke slette bane","error")}})};const Do={new:"new-course-approved",edit:"edit-capproved"};function da(n){const e=g.approvedDraft[n];document.getElementById(`${Do[n]}-chips`).innerHTML=e.length?e.map(t=>`<span style="display:inline-flex;align-items:center;gap:6px;padding:5px 10px;background:var(--surface2);border:1px solid var(--bord);border-radius:16px;font-size:12px;">${Z(t)}<span style="cursor:pointer;color:var(--danger);font-weight:700;" onclick="removeApprovedEmail('${n}','${Z(t)}')">✕</span></span>`).join(""):'<span style="font-size:12px;color:var(--muted);">Ingen godkendt endnu</span>'}function tg(n,e){const t=e.trim().toLowerCase();!t||!t.includes("@")||(g.approvedDraft[n].includes(t)||g.approvedDraft[n].push(t),da(n))}window.removeApprovedEmail=function(n,e){g.approvedDraft[n]=g.approvedDraft[n].filter(t=>t!==e),da(n)};window.addApprovedEmailManual=function(n){const e=document.getElementById(`${Do[n]}-manual`);tg(n,e.value),e.value=""};window.searchApprovedUsers=async function(n,e){const t=document.getElementById(`${Do[n]}-ac`);if(!e.trim()){t.classList.add("hidden");return}let r=[];try{r=(await _t(ft(te,"users"))).docs.map(s=>s.data()).map(s=>({name:s.name||s.yam||s.email||"—",email:(s.email||s["e-mail"]||"").toLowerCase()})).filter(s=>s.email&&(s.name.toLowerCase().includes(e.toLowerCase())||s.email.includes(e.toLowerCase())))}catch(i){console.warn(i)}if(!r.length){t.classList.add("hidden");return}t.innerHTML=r.map(i=>`<div class="ac-item" data-email="${Z(i.email)}">${Z(i.name)} <span style='font-size:11px;opacity:.6'>${Z(i.email)}</span></div>`).join(""),t.querySelectorAll(".ac-item").forEach(i=>i.addEventListener("click",()=>{tg(n,i.dataset.email),document.getElementById(`${Do[n]}-search`).value="",t.classList.add("hidden")})),t.classList.remove("hidden")};window.openCreateCourseModal=function(){g.approvedDraft.new=[],da("new"),document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",document.getElementById("create-course-modal").classList.remove("hidden")};window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim().slice(0,100),e=document.getElementById("new-course-loc").value.trim().slice(0,100),t=document.getElementById("new-course-visibility").value,r=t!=="public",i=t==="hidden",s=i?[...g.approvedDraft.new]:[],o=document.getElementById("new-course-targets"),c=(o.value==="custom"?Number(document.getElementById("new-course-targets-custom").value):Number(o.value))||24;if(!n)return;const l=Array.from({length:c},(d,f)=>({number:f+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));try{const d=await FT(ft(te,"courses"),{name:n,yam:n,numTargets:c,antalMål:c,location:e,beliggenhed:e,targets:l,mål:l,private:r,privat:r,hidden:i,skjult:i,approvedUsers:s,godkendteBrugere:s,created:xr(),visits:[],besøg:[]});g.courses.unshift({id:d.id,name:n,numTargets:c,location:e,targets:l,visits:[],private:r,hidden:i,approvedUsers:s}),vt(),hs(),ca(),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value="",document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",ye("Bane oprettet!","success")}catch{ye("Fejl: Kunne ikke oprette bane","error")}};async function Ol(n,e,t){const r=de(te,"courses",n),i=await Qi(r);if(!i.exists())return;const s=i.data(),o=[...s.targets||s.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await Jt(r,{targets:o,mål:o})}function ng(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=i=>{const s=new Image;s.onload=()=>{let c=s.width,l=s.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const d=document.createElement("canvas");d.width=c,d.height=l,d.getContext("2d").drawImage(s,0,0,c,l),e(d.toDataURL("image/jpeg",.65).split(",")[1])},s.onerror=t,s.src=i.target.result},r.onerror=t,r.readAsDataURL(n)})}window.openEditTarget=function(){var t,r;const n=Qr(),e=(r=(t=g.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=Qr();g.round.courseId&&(await Ol(g.round.courseId,e,{name:n}),(t=g.course)!=null&&t.targets&&(g.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),Rn()};window.editGps=async function(){var n;try{const e=await aa(),t=Qr();await Ol(g.round.courseId,t,{gps:e}),(n=g.course)!=null&&n.targets&&(g.course.targets[t].gps=e),ye("GPS gemt!","success")}catch(e){ye("GPS fejl: "+e.message,"error")}};function Xi(){const n=document.getElementById("friends-list");if(!g.friends.length){n.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}n.innerHTML="",g.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${Z(e.name)}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).map(Z).join(" · ")}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del" style="color:var(--danger);">🗑</button></div>`,t.querySelector(".frd-edit").addEventListener("click",()=>openFriendModal(e)),t.querySelector(".frd-del").addEventListener("click",()=>doDeleteFriend(e.id,e.name)),n.appendChild(t)})}window.openFriendModal=function(n){g.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=n?"Rediger ven":"Tilføj ven",document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim().slice(0,80),email:document.getElementById("f-email").value.trim().slice(0,100),phone:document.getElementById("f-phone").value.trim().slice(0,30),club:document.getElementById("f-club").value.trim().slice(0,80),bowType:document.getElementById("f-bow").value};if(!n.name)return;if(g.editFriendId){const r=g.friends.findIndex(i=>i.id===g.editFriendId);r!==-1?g.friends[r]={...n,id:g.editFriendId}:g.friends.push({...n,id:g.editFriendId})}else g.friends.push({...n,id:"f_"+Date.now()});const e=g.editFriendId||"f_"+Date.now();g.editFriendId||(g.friends[g.friends.length-1].id=e);const t=g.friends.find(r=>r.id===(g.editFriendId||e));t&&g.user&&Gn(de(te,"users",g.user.uid,"friends",t.id),t).catch(r=>console.warn(r)),vt(),document.getElementById("friend-modal").classList.add("hidden"),Xi(),Ji()};window.doDeleteFriend=function(n,e){oa(`Slet ${e}?`,()=>{g.friends=g.friends.filter(t=>t.id!==n),vt(),Xi(),Ji(),g.user&&Kt(de(te,"users",g.user.uid,"friends",n)).catch(t=>console.warn(t))})};let bi=[];async function NA(){if(g.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{await Ml()}catch(n){console.warn(n)}if(g.isSuperAdmin){document.getElementById("users-section").classList.remove("hidden");try{bi=(await _t(ft(te,"users"))).docs.map(e=>({uid:e.id,...e.data()})).sort((e,t)=>(e.name||e.yam||"").localeCompare(t.name||t.yam||"","da")),rg()}catch(n){console.warn(n)}}}}async function Ml(){const n=document.getElementById("admins-list");if(!n)return;n.innerHTML='<div style="font-size:12px;color:var(--text-muted);">Henter admins…</div>';const e=await _t(ft(te,"admins"));if(e.empty){n.innerHTML='<div style="font-size:12px;color:var(--text-muted);">Ingen admins fundet</div>';return}n.innerHTML='<div style="font-size:12px;color:var(--text-muted);margin-bottom:6px;font-family:var(--font-display);">NUVÆRENDE ADMINISTRATORER</div>',e.docs.forEach(t=>{var o;const r=document.createElement("div");r.style.cssText="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border,#333);";const i=t.data().email||t.id,s=t.id===((o=g.user)==null?void 0:o.uid);if(r.innerHTML=`<span style="font-size:13px;">${Z(i)}${s?' <span style="font-size:11px;color:var(--text-muted);">(dig)</span>':""}</span>`,g.isSuperAdmin&&!s){const c=document.createElement("button");c.className="btn btn-dark btn-sm",c.style.cssText="padding:2px 8px;font-size:11px;",c.textContent="Fjern",c.onclick=()=>doRemoveAdmin(t.id,i),r.appendChild(c)}n.appendChild(r)})}const LA={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"};function rg(n=""){const e=document.getElementById("users-list");e.innerHTML="";const t=n.toLowerCase(),r=t?bi.filter(c=>(c.name||c.yam||"").toLowerCase().includes(t)||(c.email||c["e-mail"]||"").toLowerCase().includes(t)):bi;document.getElementById("users-count").textContent=`${bi.length} brugere`;const i=document.getElementById("users-summary"),s={};bi.forEach(c=>{const l=c.bueklasse||"Ukendt";s[l]=(s[l]||0)+1});const o=Object.entries(s).sort((c,l)=>l[1]-c[1]).map(([c,l])=>`<span style="display:inline-block;background:var(--card-bg,#222);border:1px solid var(--border,#444);border-radius:12px;padding:2px 8px;font-size:11px;margin:2px 2px 2px 0;white-space:nowrap;"><b>${l}</b> ${Z(LA[c]||c)}</span>`).join("");i.innerHTML=`<div style="margin-bottom:8px;">${o}</div>`,r.forEach(c=>{var _;const l=document.createElement("div");l.className="urow";const d=(_=c.created)!=null&&_.toDate?c.created.toDate().toLocaleDateString("da-DK"):"—",f=c.bueklasse||"",p=c.kon==="m"?"♂":c.kon==="k"?"♀":"";l.innerHTML=`<span class="un">${Z(c.name||c.yam||"—")}</span><span class="ue">${Z(c.email||c["e-mail"]||"")}</span><span class="ubow">${Z(f)}${p?` ${Z(p)}`:""}</span><span class="ud">${Z(d)}</span>`,e.appendChild(l)})}window.filterUsers=function(n){rg(n)};window.doAddAdmin=async function(){const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await _t(ft(te,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){ye("Bruger ikke fundet","error");return}await Gn(de(te,"admins",t.id),{email:n,created:xr()}),ye(`${t.data().name||n} er nu admin`,"success"),document.getElementById("admin-email").value="",await Ml()}catch(e){ye("Fejl: "+e.message,"error")}};window.doRemoveAdmin=async function(n,e){if(g.isSuperAdmin&&confirm(`Fjern ${e} som administrator?`))try{await Kt(de(te,"admins",n)),ye(`${e} er fjernet som admin`,"success"),await Ml()}catch(t){ye("Fejl: "+t.message,"error")}};window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"})};function wh(n,e){var M;const t=N=>{var U;return N.shooters.find(K=>K.id===e)||((U=N.shooters)==null?void 0:U[0])},r=n.map(N=>{const U=t(N);return U?Je(U.scores):null}).filter(N=>N!==null);let i=0,s=0,o=0,c=0;const l={11:0,10:0,8:0,5:0,M:0},d={11:0,10:0,8:0,5:0,M:0};n.forEach(N=>{const U=t(N);U&&U.scores.forEach(K=>{K[0]!=null&&(K[0]==="M"?(l.M++,s++):(l[Number(K[0])]=(l[Number(K[0])]||0)+1,i+=Number(K[0]),s++)),K[1]!=null&&(K[1]==="M"?(d.M++,c++):(d[Number(K[1])]=(d[Number(K[1])]||0)+1,o+=Number(K[1]),c++))})});const f=s?(i/s).toFixed(2):0,p=c?(o/c).toFixed(2):0,_=s+c?((i+o)/(s+c)).toFixed(2):0,T=((M=n[0])==null?void 0:M.numTargets)||24,C=Array.from({length:T},(N,U)=>{let K=0,W=0;return n.forEach(w=>{const y=t(w);if(!y)return;(y.scores[U]||[null,null]).forEach(E=>{E!=null&&(K+=Ne(E),W++)})}),W?K/W:null}).map((N,U)=>({v:N,i:U})).filter(N=>N.v!==null),P=C.length?C.reduce((N,U)=>N.v>U.v?N:U):null,$=C.length?C.reduce((N,U)=>N.v<U.v?N:U):null;return{myScores:r,p1avg:f,p2avg:p,pilAvg:_,distP1:l,distP2:d,bestTarget:P,worstTarget:$}}function OA(n,e,t,r){const i=["11","10","8","5","M"],s={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333"},o=n.myScores[0]||0,c=t.myScores[0]||0,l=Math.abs(o-c),d='<div style="border-top:1px solid var(--surface2);margin:10px 0;"></div>',f=(T,x,C)=>`<div style="font-size:11px;color:${C};margin-bottom:4px;">${Z(x)}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
      <div><div style="font-size:10px;color:var(--muted);">PIL 1</div><div style="font-size:20px;font-weight:700;color:var(--acc);">${T.p1avg}</div></div>
      <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
        <div style="font-size:10px;color:var(--muted);">SNT/PIL</div><div style="font-size:20px;font-weight:700;color:#f0c030;">${T.pilAvg}</div>
      </div>
      <div><div style="font-size:10px;color:var(--muted);">PIL 2</div><div style="font-size:20px;font-weight:700;color:var(--acc);">${T.p2avg}</div></div>
    </div>`,p=(T,x,C)=>T.bestTarget&&T.worstTarget?`<div style="font-size:11px;color:${C};margin-bottom:6px;">${Z(x)}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:center;">
      <div style="background:rgba(42,170,90,0.15);border-radius:8px;padding:8px;">
        <div style="font-size:10px;color:var(--muted);">BEDSTE</div>
        <div style="font-size:22px;font-weight:700;color:#2aaa5a;">Mål ${T.bestTarget.i+1}</div>
        <div style="font-size:12px;color:var(--muted);">⌀ ${T.bestTarget.v.toFixed(2)}</div>
      </div>
      <div style="background:rgba(204,51,51,0.15);border-radius:8px;padding:8px;">
        <div style="font-size:10px;color:var(--muted);">SVÆRESTE</div>
        <div style="font-size:22px;font-weight:700;color:var(--danger);">Mål ${T.worstTarget.i+1}</div>
        <div style="font-size:12px;color:var(--muted);">⌀ ${T.worstTarget.v.toFixed(2)}</div>
      </div>
    </div>`:"";let _="";return _+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:10px;">SAMMENLIGNING</div>
    <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;text-align:center;">
      <div>
        <div style="font-size:11px;color:var(--acc);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Z(e)}</div>
        <div style="font-size:36px;font-weight:700;color:var(--acc);">${o}</div>
        <div style="font-size:11px;color:var(--muted);">POINT</div>
      </div>
      <div style="font-size:18px;color:var(--muted);font-weight:700;">VS</div>
      <div>
        <div style="font-size:11px;color:#f0c030;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Z(r)}</div>
        <div style="font-size:36px;font-weight:700;color:#f0c030;">${c}</div>
        <div style="font-size:11px;color:var(--muted);">POINT</div>
      </div>
    </div>
    <div style="text-align:center;margin-top:10px;font-size:13px;color:var(--muted);">${o>c?`${Z(e)} vandt med ${l} point`:c>o?`${Z(r)} vandt med ${l} point`:"Uafgjort!"}</div>
  </div>`,_+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:10px;">PIL STATISTIK</div>
    ${f(n,e,"var(--acc)")}${d}${f(t,r,"#f0c030")}
  </div>`,(n.bestTarget||t.bestTarget)&&(_+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:10px;">BEDSTE OG SVÆRESTE MÅL</div>
      ${p(n,e,"var(--acc)")}${d}${p(t,r,"#f0c030")}
    </div>`),_+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:10px;">FORDELING PR. SCOREZONE</div>
    <div style="display:grid;grid-template-columns:minmax(0,1fr) repeat(5,minmax(0,1fr));gap:4px 6px;align-items:center;font-size:13px;">
      <div></div>
      ${i.map(T=>`<div style="text-align:center;font-weight:700;color:${s[T]};">${T}</div>`).join("")}
      <div style="font-size:11px;color:var(--acc);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Z(e)}</div>
      ${i.map(T=>`<div style="text-align:center;font-weight:700;">${(n.distP1[T]||0)+(n.distP2[T]||0)}</div>`).join("")}
      <div style="font-size:11px;color:#f0c030;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Z(r)}</div>
      ${i.map(T=>`<div style="text-align:center;font-weight:700;">${(t.distP1[T]||0)+(t.distP2[T]||0)}</div>`).join("")}
    </div>
  </div>`,_}window.renderAnalyse=function(){var Yt,_s,Sn,ys,vs,Pn,xn,ur;const n=document.getElementById("analyse-content");if(!n)return;const e=document.getElementById("analyse-bane");e&&e.options.length<=1&&[...new Set(g.rounds.map(F=>F.courseId).filter(Boolean))].forEach(F=>{const J=g.courses.find(se=>se.id===F);if(J&&!Array.from(e.options).find(se=>se.value===F)){const se=document.createElement("option");se.value=F,se.textContent=J.name,e.appendChild(se)}});const t=((Yt=document.getElementById("analyse-filter"))==null?void 0:Yt.value)||"all",r=t==="all"?0:t==="lastround"?1:t==="specific"?0:Number(t),i=((_s=document.getElementById("analyse-bane"))==null?void 0:_s.value)||"all",s=Number((Sn=document.getElementById("analyse-antal"))==null?void 0:Sn.value)||0,o=document.getElementById("analyse-runde-wrap"),c=document.getElementById("analyse-runde"),l=document.getElementById("analyse-runde-wrap-2"),d=document.getElementById("analyse-runde-2"),f=document.getElementById("analyse-runde-lbl"),p=t==="compare";o&&(o.style.display=t==="specific"||p?"":"none"),l&&(l.style.display=p?"":"none"),f&&(f.style.display=p?"":"none");const _=q=>{const F=q.created;return F!=null&&F.toDate?F.toDate().toLocaleDateString("da-DK"):F!=null&&F.seconds?new Date(F.seconds*1e3).toLocaleDateString("da-DK"):typeof F=="number"?new Date(F).toLocaleDateString("da-DK"):"—"};if((t==="specific"||p)&&c){const q=new Set(Array.from(c.options).map(F=>F.value).filter(Boolean));g.rounds.forEach(F=>{if(!q.has(F.id)){const J=document.createElement("option");J.value=F.id,J.textContent=`${_(F)} — ${F.name||"Runde"}`,c.appendChild(J)}}),g.pendingAnalyseRound&&(c.value=g.pendingAnalyseRound,g.pendingAnalyseRound=null)}if(p&&d){const q=new Set(Array.from(d.options).map(F=>F.value).filter(Boolean));g.rounds.forEach(F=>{if(!q.has(F.id)){const J=document.createElement("option");J.value=F.id,J.textContent=`${_(F)} — ${F.name||"Runde"}`,d.appendChild(J)}})}if(p){const q=c==null?void 0:c.value,F=d==null?void 0:d.value;if(!q||!F){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Vælg to runder ovenfor</div>';return}const J=g.rounds.map(ce=>({...ce,shooters:(ce.shooters||[]).map(Ie=>({...Ie,scores:sr(Ie.scores)}))})),se=J.find(ce=>ce.id===q),ee=J.find(ce=>ce.id===F);if(!se||!ee){n.innerHTML='<div class="empty">Kunne ikke finde runderne</div>';return}const ke=`${se.name||"Runde"} (${_(se)})`,Te=`${ee.name||"Runde"} (${_(ee)})`;n.innerHTML=OA(wh([se],(ys=g.user)==null?void 0:ys.uid),ke,wh([ee],(vs=g.user)==null?void 0:vs.uid),Te);return}const T=g.rounds.map(q=>({...q,shooters:(q.shooters||[]).map(F=>({...F,scores:sr(F.scores)}))}));let x=i==="all"?T:T.filter(q=>q.courseId===i);if(t==="specific"){const q=c==null?void 0:c.value;x=q?x.filter(F=>F.id===q):[]}const C=s||r,P=C&&t!=="specific"?x.slice(0,C):x;if(!P.length){n.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}const $=q=>{var F;return q.shooters.find(J=>{var se;return J.id===((se=g.user)==null?void 0:se.uid)})||((F=q.shooters)==null?void 0:F[0])},M=P.map(q=>{const F=$(q);return F?Je(F.scores):null}).filter(q=>q!==null),N=M.length?(M.reduce((q,F)=>q+F,0)/M.length).toFixed(1):0,U=M.length?Math.max(...M):0,K=M.length?Math.min(...M):0;let W=0,w=0,y=0,v=0;const E={11:0,10:0,8:0,5:0,M:0},b={11:0,10:0,8:0,5:0,M:0};P.forEach(q=>{const F=$(q);F&&F.scores.forEach(J=>{J[0]!=null&&(J[0]==="M"?(E.M++,w++):(E[Number(J[0])]=(E[Number(J[0])]||0)+1,W+=Number(J[0]),w++)),J[1]!=null&&(J[1]==="M"?(b.M++,v++):(b[Number(J[1])]=(b[Number(J[1])]||0)+1,y+=Number(J[1]),v++))})});const R=w?(W/w).toFixed(2):0,I=v?(y/v).toFixed(2):0,ot=w+v?((W+y)/(w+v)).toFixed(2):0,ze=((Pn=P[0])==null?void 0:Pn.numTargets)||24,ps=Array.from({length:ze},(q,F)=>{let J=0,se=0;return P.forEach(ee=>{const ke=$(ee);if(!ke)return;const ce=(ee.traversalOrder||Array.from({length:ee.numTargets||ze},(De,he)=>he))[F];if(ce===void 0)return;(ke.scores[ce]||[null,null]).forEach(De=>{De!=null&&(J+=Ne(De),se++)})}),se?J/se:null}),It=ps.map((q,F)=>({v:q,i:F})).filter(q=>q.v!==null),wt=It.length?It.reduce((q,F)=>q.v>F.v?q:F):null,Xt=It.length?It.reduce((q,F)=>q.v<F.v?q:F):null,ms=["11","10","8","5","M"];let pt="";if(pt+=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">RUNDER</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${P.length}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">SNIT/RUNDE</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${N}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">BEDSTE</div><div style="font-size:28px;font-weight:700;color:#2aaa5a;">${U}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">LAVESTE</div><div style="font-size:28px;font-weight:700;color:var(--danger);">${K}</div></div>
  </div>`,pt+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">PIL STATISTIK</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
      <div><div style="font-size:11px;color:var(--muted);">PIL 1</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${R}</div></div>
      <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
        <div style="font-size:11px;color:var(--muted);">SNT/PIL</div>
        <div style="font-size:22px;font-weight:700;color:#f0c030;">${ot}</div>
      </div>
      <div><div style="font-size:11px;color:var(--muted);">PIL 2</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${I}</div></div>
    </div>
    <div style="margin-top:8px;font-size:12px;color:var(--muted);text-align:center;">
      ${Number(R)>Number(I)?"Bedst med PIL 1 🏹":Number(I)>Number(R)?"Bedst med PIL 2 🏹":"Begge pile er lige gode 🎯"}
    </div>
  </div>`,wt&&Xt&&wt.i!==Xt.i&&(pt+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">BEDSTE OG SVÆRESTE MÅL</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:center;">
        <div style="background:rgba(42,170,90,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">BEDSTE</div>
          <div style="font-size:24px;font-weight:700;color:#2aaa5a;">Skud nr. ${wt.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${wt.v.toFixed(2)}</div>
        </div>
        <div style="background:rgba(204,51,51,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">SVÆRESTE</div>
          <div style="font-size:24px;font-weight:700;color:var(--danger);">Skud nr. ${Xt.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${Xt.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`),pt+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:12px;">FORDELING PR. SCOREZONE</div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;">`,ms.forEach(q=>{const F=E[q]||0,J=b[q]||0,se=F+J,ee=30;let ke="";if(se===0)ke=`<circle cx="${ee}" cy="${ee}" r="${ee}" fill="var(--surface2)"/>`;else if(J===0)ke=`<circle cx="${ee}" cy="${ee}" r="${ee}" fill="#ffd700"/>`;else if(F===0)ke=`<circle cx="${ee}" cy="${ee}" r="${ee}" fill="#00cc44"/>`;else{const Te=F/se,ce=Te*2*Math.PI,Ie=ee,De=0,he=ee-ee*Math.sin(ce),Be=ee-ee*Math.cos(ce),ht=ce>Math.PI?1:0;ke=`<path d="M${ee},${ee} L${Ie},${De} A${ee},${ee} 0 ${ht},0 ${he},${Be} Z" fill="#ffd700"/>
           <path d="M${ee},${ee} L${he},${Be} A${ee},${ee} 0 ${1-ht},0 ${Ie},${De} Z" fill="#00cc44"/>`}pt+=`<div style="text-align:center;">
      <div style="font-weight:700;font-size:20px;color:#ffd700;margin-bottom:2px;">${q}</div>
      <svg viewBox="0 0 ${ee*2} ${ee*2}" style="width:56px;height:56px;">${ke}</svg>
      <div style="font-size:14px;color:var(--muted);margin-top:2px;">${F}/${J}</div>
      <div style="font-size:15px;font-weight:700;color:var(--text);">${se}</div>
    </div>`}),pt+=`</div>
    <div style="display:flex;gap:16px;justify-content:center;margin-top:8px;font-size:11px;color:var(--muted);">
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#ffd700;margin-right:4px;vertical-align:middle;"></span>PIL 1</span>
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#00cc44;margin-right:4px;vertical-align:middle;"></span>PIL 2</span>
    </div>
  </div>`,M.length>1){const se=Math.min(...M)-5,ee=Math.max(...M)+5,ke=M.slice().reverse().map((Te,ce)=>{const Ie=30+ce/(M.length-1)*280,De=90-(Te-se)/(ee-se)*(120-2*30);return`${Ie},${De}`}).join(" ");pt+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">UDVIKLING (RUNDER)</div>
      <svg viewBox="0 0 340 120" style="width:100%;overflow:visible;">
        <polyline points="${ke}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${M.slice().reverse().map((Te,ce)=>{const Ie=30+ce/(M.length-1)*280,De=90-(Te-se)/(ee-se)*(120-2*30);return`<circle cx="${Ie}" cy="${De}" r="4" fill="var(--acc)"/><text x="${Ie}" y="${De-8}" text-anchor="middle" font-size="10" fill="var(--text)">${Te}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg>
    </div>`}const Et=i!=="all"||t==="lastround"||t==="specific",ge=ps.map((q,F)=>({v:q,i:F})).filter(q=>q.v!==null);if(ge.length>1&&Et){const Te=Math.floor(Math.min(...ge.map(X=>X.v))),ce=Math.ceil(Math.max(...ge.map(X=>X.v))),Ie=ce-Te||1,De=X=>42+(ze>1?X/(ze-1)*283:0),he=X=>15+120*(1-(X-Te)/Ie),Be=ge.map(({v:X,i:nt})=>De(nt)+","+he(X)).join(" "),ht=[];for(let X=Te;X<=ce;X++)(ce-Te<=6||X%Math.ceil((ce-Te)/5)===0)&&ht.push(X);const Me=ht.map(X=>`<line x1="38" y1="${he(X)}" x2="42" y2="${he(X)}" stroke="var(--muted)" stroke-width="1"/><text x="36" y="${he(X)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${X}</text><line x1="42" y1="${he(X)}" x2="325" y2="${he(X)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join(""),Ue=ge.map(({v:X,i:nt})=>`<circle cx="${De(nt)}" cy="${he(X)}" r="3" fill="var(--acc)"/>`).join("");ge.map(({v:X,i:nt})=>`<circle cx="${De(nt)}" cy="${he(X)}" r="4" fill="var(--acc)"/><text x="${De(nt)}" y="${he(X)-8}" text-anchor="middle" font-size="9" fill="#fff">${X.toFixed(1)}</text>`).join("");const Nt=Math.max(340,ze*30),Cn=X=>42+(ze>1?X/(ze-1)*(Nt-42-15):0),Is=ge.map(({v:X,i:nt})=>Cn(nt)+","+he(X)).join(" "),ha=ht.map(X=>`<line x1="38" y1="${he(X)}" x2="42" y2="${he(X)}" stroke="var(--muted)" stroke-width="1"/><text x="36" y="${he(X)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${X}</text><line x1="42" y1="${he(X)}" x2="${Nt-15}" y2="${he(X)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join(""),kn=ge.map(({v:X,i:nt})=>`<circle cx="${Cn(nt)}" cy="${he(X)}" r="5" fill="var(--acc)"/><text x="${Cn(nt)}" y="${he(X)-10}" text-anchor="middle" font-size="10" fill="#fff">${X.toFixed(1)}</text>`).join("");pt+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
        <span>GENNEMSNIT PR. SKUDRÆKKEFØLGE</span>
        <button class="btn-icon" onclick="document.getElementById('graph-fs').classList.remove('hidden')" style="font-size:16px;">⤢</button>
      </div>
      <svg viewBox="0 0 340 160" style="width:100%;overflow:visible;">
        <line x1="42" y1="15" x2="42" y2="135" stroke="var(--surface2)" stroke-width="1"/>
        <line x1="42" y1="135" x2="325" y2="135" stroke="var(--surface2)" stroke-width="1"/>
        ${Me}
        <polyline points="${Be}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round"/>
        ${Ue}
        <text x="42" y="155" font-size="9" fill="var(--muted)">1</text>
        <text x="325" y="155" text-anchor="end" font-size="9" fill="var(--muted)">${ze}</text>
      </svg>
      <div style="font-size:10px;color:var(--muted);text-align:center;margin-top:2px;">Skudrækkefølge — 1 = første mål skudt</div>
    </div>
    <div id="graph-fs" class="fs-ov hidden" onclick="this.classList.add('hidden')" style="align-items:center;justify-content:center;padding:16px;">
      <div style="background:var(--card);border-radius:16px;padding:16px;width:100%;max-width:90vw;overflow:hidden;" onclick="event.stopPropagation()">
        <div style="font-family:var(--fd);font-size:14px;color:var(--muted);margin-bottom:8px;">GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset</div>
        <svg id="graph-fs-svg" viewBox="0 0 ${Nt} 160" style="width:100%;display:block;touch-action:none;overflow:visible;">
          <line x1="42" y1="15" x2="42" y2="135" stroke="var(--surface2)" stroke-width="1"/>
          <line x1="42" y1="135" x2="${Nt-15}" y2="135" stroke="var(--surface2)" stroke-width="1"/>
          ${ha}
          <polyline points="${Is}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
          ${kn}
          <text x="42" y="155" font-size="9" fill="var(--muted)">1</text>
          <text x="${Cn(ze-1)}" y="155" text-anchor="end" font-size="9" fill="var(--muted)">${ze}</text>
        </svg>
        <button class="btn btn-dark" style="width:100%;margin-top:12px;" onclick="document.getElementById('graph-fs').classList.add('hidden')">Luk</button>
      </div>
    </div>`}n.innerHTML=pt;const gs=document.getElementById("graph-fs-svg");if(gs&&_A(gs),i!=="all"&&((xn=g.profile)!=null&&xn.kon)&&((ur=g.profile)!=null&&ur.bueklasse)){const q=g.profile.kon==="herre"?"Herre":"Dame",F={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"}[g.profile.bueklasse]||g.profile.bueklasse,J=document.createElement("div");J.innerHTML=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">SAMMENLIGNING · ${q} ${F}</div><div style="color:var(--muted);font-size:13px;text-align:center;padding:8px;">Henter...</div></div>`,n.appendChild(J),_t(ft(te,"bane_stats",i,"runder")).then(se=>{const ke=se.docs.map(Be=>Be.data()).filter(Be=>Be.kon===g.profile.kon&&Be.bueklasse===g.profile.bueklasse);if(!ke.length){J.innerHTML=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">SAMMENLIGNING · ${q} ${F}</div><div style="color:var(--muted);font-size:13px;text-align:center;padding:8px;">Ingen andre ${q} ${F}-skytter har skudt denne bane endnu.</div></div>`;return}const Te=ke.filter(Be=>Be.numTargets>0),ce=Te.length?(Te.reduce((Be,ht)=>Be+ht.score/(ht.numTargets*2),0)/Te.length).toFixed(2):"—",Ie=ce!=="—"?Number(ot)-Number(ce):null,De=Ie!==null?(Ie>0?"+":"")+Ie.toFixed(2):"—",he=Ie===null?"var(--muted)":Ie>0?"#2aaa5a":Ie<0?"var(--danger)":"var(--muted)";J.innerHTML=`<div class="card" style="margin-bottom:16px;">
        <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:12px;">SAMMENLIGNING · ${q} ${F}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
          <div><div style="font-size:11px;color:var(--muted);">DIT SNT/PIL</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${ot}</div></div>
          <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
            <div style="font-size:11px;color:var(--muted);">DIFFERENCE</div>
            <div style="font-size:22px;font-weight:700;color:${he};">${De}</div>
          </div>
          <div><div style="font-size:11px;color:var(--muted);">ANDRES SNT/PIL</div><div style="font-size:22px;font-weight:700;color:var(--txt);">${ce}</div></div>
        </div>
        <div style="margin-top:8px;font-size:12px;color:var(--muted);text-align:center;">Baseret på ${ke.length} runde${ke.length!==1?"r":""} fra andre skytter</div>
      </div>`}).catch(()=>{J.remove()})}};window.sendResults=async function(n){if(!n){ye("Ingen runde at sende","error");return}const e=new Date().toLocaleDateString("da-DK");let t=`3D Bueskydning - Resultater
`;t+="Dato: "+e+`
`,n.courseName&&(t+="Bane: "+n.courseName+`
`),t+=`
--- RESULTATER ---
`,[...n.shooters].sort((c,l)=>Je(l.scores)-Je(c.scores)).forEach((c,l)=>{t+=`
`+(l+1)+". "+c.name+": "+Je(c.scores)+" point"}),t+=`

--- DETALJERET ---
`,n.shooters.forEach(c=>{t+=`
`+c.name+`:
`;for(let C=0;C<n.numTargets;C++){const P=c.scores[C]||[null,null],$=(P[0]!=null&&P[0]!=="M"?Number(P[0]):0)+(P[1]!=null&&P[1]!=="M"?Number(P[1]):0);t+="  Mål "+(C+1)+": "+P.map(M=>M??"-").join("+")+" = "+$+`
`}const l=c.scores.map(C=>(C||[null,null])[0]).filter(C=>C!=null),d=c.scores.map(C=>(C||[null,null])[1]).filter(C=>C!=null),f=c.scores.flat().filter(C=>C!=null),p=l.length?(l.reduce((C,P)=>C+Ne(P),0)/l.length).toFixed(2):"—",_=d.length?(d.reduce((C,P)=>C+Ne(P),0)/d.length).toFixed(2):"—",T=f.length?(f.reduce((C,P)=>C+Ne(P),0)/f.length).toFixed(2):"—",x=Cl(c.scores);t+="  Total: "+Je(c.scores)+` point
`,t+="  Snit pil 1: "+p+" | Snit pil 2: "+_+" | Samlet snit: "+T+`
`,t+="  Fordeling: "+Object.entries(x).map(([C,P])=>C+":"+P+"x").join("  ")+`
`}),n.id&&(t+=`

Se resultater i appen:
https://bsk65.github.io/3D/?round=${n.id}
(Kræver login med din bruger)`);const i=n.shooters.map(c=>{var l;return(l=g.friends.find(d=>d.id===c.id))==null?void 0:l.email}).filter(Boolean),s="3D Bueskydning - "+n.name,o="mailto:"+i.join(",")+"?subject="+encodeURIComponent(s)+"&body="+encodeURIComponent(t);window.location.href=o};async function MA(n,e){const t=de(te,"courses",n),r=await Qi(t);if(!r.exists())return;const i=(r.data().visits||[]).filter(o=>o.roundId!==e);await Jt(t,{visits:i});const s=g.courses.find(o=>o.id===n);s&&(s.visits=i)}window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
