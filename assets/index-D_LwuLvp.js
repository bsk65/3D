(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Bd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Cy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,h=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(t[h],t[p],t[g],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new ky;const g=i<<2|c>>4;if(r.push(g),u!==64){const y=c<<4&240|u>>2;if(r.push(y),p!==64){const A=u<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ky extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dy=function(n){const e=qf(n);return Kf.encodeByteArray(e,!0)},aa=function(n){return Dy(n).replace(/\./g,"")},Gf=function(n){try{return Kf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ny=()=>xy().__FIREBASE_DEFAULTS__,Vy=()=>{if(typeof process>"u"||typeof Bd>"u")return;const n=Bd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ly=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gf(n[1]);return e&&JSON.parse(e)},xa=()=>{try{return Ny()||Vy()||Ly()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zf=n=>{var e,t;return(t=(e=xa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},My=n=>{const e=zf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Hf=()=>{var n;return(n=xa())===null||n===void 0?void 0:n.config},Wf=n=>{var e;return(e=xa())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Fy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[aa(JSON.stringify(t)),aa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function By(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Uy(){var n;const e=(n=xa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $y(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ky(){const n=Ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Qf(){return!Uy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xl(){try{return typeof indexedDB=="object"}catch{return!1}}function Jf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Gy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zy,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qr.prototype.create)}}class qr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Hy(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Bt(s,c,r)}}function Hy(n,e){return n.replace(Wy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Wy=/\{\$([^}]+)}/g;function Qy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Is(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Ud(i)&&Ud(o)){if(!Is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ud(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jy(n,e){const t=new Yy(n,e);return t.subscribe.bind(t)}class Yy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Sc(){}/**
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
 */function Ie(n){return n&&n._delegate?n._delegate:n}class xt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class Zy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Oy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tv(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ev(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ev(n){return n===fr?void 0:n}function tv(n){return n.instantiationMode==="EAGER"}/**
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
 */class nv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const rv={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},sv=ce.INFO,iv={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},ov=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=iv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=sv,this._logHandler=ov,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const av=(n,e)=>e.some(t=>n instanceof t);let $d,jd;function cv(){return $d||($d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lv(){return jd||(jd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yf=new WeakMap,Qc=new WeakMap,Xf=new WeakMap,Rc=new WeakMap,Vl=new WeakMap;function uv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(mn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Yf.set(t,n)}).catch(()=>{}),Vl.set(e,n),e}function dv(n){if(Qc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Qc.set(n,e)}let Jc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Xf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hv(n){Jc=n(Jc)}function fv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pc(this),e,...t);return Xf.set(r,e.sort?e.sort():[e]),mn(r)}:lv().includes(n)?function(...e){return n.apply(Pc(this),e),mn(Yf.get(this))}:function(...e){return mn(n.apply(Pc(this),e))}}function mv(n){return typeof n=="function"?fv(n):(n instanceof IDBTransaction&&dv(n),av(n,cv())?new Proxy(n,Jc):n)}function mn(n){if(n instanceof IDBRequest)return uv(n);if(Rc.has(n))return Rc.get(n);const e=mv(n);return e!==n&&(Rc.set(n,e),Vl.set(e,n)),e}const Pc=n=>Vl.get(n);function Na(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}function Cc(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),mn(t).then(()=>{})}const pv=["get","getKey","getAll","getAllKeys","count"],gv=["put","add","delete","clear"],kc=new Map;function qd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=gv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pv.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return kc.set(e,i),i}hv(n=>({...n,get:(e,t,r)=>qd(e,t)||n.get(e,t,r),has:(e,t)=>!!qd(e,t)||n.has(e,t)}));/**
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
 */class _v{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function yv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yc="@firebase/app",Kd="0.10.13";/**
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
 */const gn=new Nl("@firebase/app"),vv="@firebase/app-compat",wv="@firebase/analytics-compat",Iv="@firebase/analytics",Ev="@firebase/app-check-compat",Tv="@firebase/app-check",bv="@firebase/auth",Av="@firebase/auth-compat",Sv="@firebase/database",Rv="@firebase/data-connect",Pv="@firebase/database-compat",Cv="@firebase/functions",kv="@firebase/functions-compat",Dv="@firebase/installations",xv="@firebase/installations-compat",Nv="@firebase/messaging",Vv="@firebase/messaging-compat",Lv="@firebase/performance",Mv="@firebase/performance-compat",Ov="@firebase/remote-config",Fv="@firebase/remote-config-compat",Bv="@firebase/storage",Uv="@firebase/storage-compat",$v="@firebase/firestore",jv="@firebase/vertexai-preview",qv="@firebase/firestore-compat",Kv="firebase",Gv="10.14.1";/**
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
 */const Xc="[DEFAULT]",zv={[Yc]:"fire-core",[vv]:"fire-core-compat",[Iv]:"fire-analytics",[wv]:"fire-analytics-compat",[Tv]:"fire-app-check",[Ev]:"fire-app-check-compat",[bv]:"fire-auth",[Av]:"fire-auth-compat",[Sv]:"fire-rtdb",[Rv]:"fire-data-connect",[Pv]:"fire-rtdb-compat",[Cv]:"fire-fn",[kv]:"fire-fn-compat",[Dv]:"fire-iid",[xv]:"fire-iid-compat",[Nv]:"fire-fcm",[Vv]:"fire-fcm-compat",[Lv]:"fire-perf",[Mv]:"fire-perf-compat",[Ov]:"fire-rc",[Fv]:"fire-rc-compat",[Bv]:"fire-gcs",[Uv]:"fire-gcs-compat",[$v]:"fire-fst",[qv]:"fire-fst-compat",[jv]:"fire-vertex","fire-js":"fire-js",[Kv]:"fire-js-all"};/**
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
 */const ca=new Map,Hv=new Map,Zc=new Map;function Gd(n,e){try{n.container.addComponent(e)}catch(t){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Mt(n){const e=n.name;if(Zc.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;Zc.set(e,n);for(const t of ca.values())Gd(t,n);for(const t of Hv.values())Gd(t,n);return!0}function Kr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Jt(n){return n.settings!==void 0}/**
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
 */const Wv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new qr("app","Firebase",Wv);/**
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
 */class Qv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Gr=Gv;function Zf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(t||(t=Hf()),!t)throw qn.create("no-options");const i=ca.get(s);if(i){if(Is(t,i.options)&&Is(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const o=new nv(s);for(const l of Zc.values())o.addComponent(l);const c=new Qv(t,r,o);return ca.set(s,c),c}function Ll(n=Xc){const e=ca.get(n);if(!e&&n===Xc&&Hf())return Zf();if(!e)throw qn.create("no-app",{appName:n});return e}function Et(n,e,t){var r;let s=(r=zv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(c.join(" "));return}Mt(new xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Jv="firebase-heartbeat-database",Yv=1,Li="firebase-heartbeat-store";let Dc=null;function em(){return Dc||(Dc=Na(Jv,Yv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Li)}catch(t){console.warn(t)}}}}).catch(n=>{throw qn.create("idb-open",{originalErrorMessage:n.message})})),Dc}async function Xv(n){try{const t=(await em()).transaction(Li),r=await t.objectStore(Li).get(tm(n));return await t.done,r}catch(e){if(e instanceof Bt)gn.warn(e.message);else{const t=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(t.message)}}}async function zd(n,e){try{const r=(await em()).transaction(Li,"readwrite");await r.objectStore(Li).put(e,tm(n)),await r.done}catch(t){if(t instanceof Bt)gn.warn(t.message);else{const r=qn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gn.warn(r.message)}}}function tm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Zv=1024,ew=30*24*60*60*1e3;class tw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=ew}),this._storage.overwrite(this._heartbeatsCache))}catch(r){gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hd(),{heartbeatsToSend:r,unsentEntries:s}=nw(this._heartbeatsCache.heartbeats),i=aa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gn.warn(t),""}}}function Hd(){return new Date().toISOString().substring(0,10)}function nw(n,e=Zv){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wd(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Wd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class rw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xl()?Jf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Xv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return zd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return zd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wd(n){return aa(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function sw(n){Mt(new xt("platform-logger",e=>new _v(e),"PRIVATE")),Mt(new xt("heartbeat",e=>new tw(e),"PRIVATE")),Et(Yc,Kd,n),Et(Yc,Kd,"esm2017"),Et("fire-js","")}sw("");var iw="firebase",ow="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et(iw,ow,"app");function Ml(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function nm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aw=nm,rm=new qr("auth","Firebase",nm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Nl("@firebase/auth");function cw(n,...e){la.logLevel<=ce.WARN&&la.warn(`Auth (${Gr}): ${n}`,...e)}function qo(n,...e){la.logLevel<=ce.ERROR&&la.error(`Auth (${Gr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n,...e){throw Ol(n,...e)}function Zt(n,...e){return Ol(n,...e)}function sm(n,e,t){const r=Object.assign(Object.assign({},aw()),{[e]:t});return new qr("auth","Firebase",r).create(e,{appName:n.name})}function pn(n){return sm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ol(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return rm.create(n,...e)}function ne(n,e,...t){if(!n)throw Ol(e,...t)}function ln(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qo(e),new Error(e)}function _n(n,e){n||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function lw(){return Qd()==="http:"||Qd()==="https:"}function Qd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lw()||jy()||"connection"in navigator)?navigator.onLine:!0}function dw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t){this.shortDelay=e,this.longDelay=t,_n(t>e,"Short delay should be less than long delay!"),this.isMobile=By()||qy()}get(){return uw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n,e){_n(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new to(3e4,6e4);function vn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function wn(n,e,t,r,s={}){return om(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=eo(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},i);return $y()||(u.referrerPolicy="no-referrer"),im.fetch()(am(n,n.config.apiHost,t,c),u)})}async function om(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},hw),e);try{const s=new pw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Vo(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vo(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vo(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vo(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw sm(n,h,u);Ot(n,h)}}catch(s){if(s instanceof Bt)throw s;Ot(n,"network-request-failed",{message:String(s)})}}async function no(n,e,t,r,s={}){const i=await wn(n,e,t,r,s);return"mfaPendingCredential"in i&&Ot(n,"multi-factor-auth-required",{_serverResponse:i}),i}function am(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Fl(n.config,s):`${n.config.apiScheme}://${s}`}function mw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),fw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Zt(n,e,r);return s.customData._tokenResponse=t,s}function Jd(n){return n!==void 0&&n.enterprise!==void 0}class gw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _w(n,e){return wn(n,"GET","/v2/recaptchaConfig",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(n,e){return wn(n,"POST","/v1/accounts:delete",e)}async function cm(n,e){return wn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vw(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),s=Bl(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Si(xc(s.auth_time)),issuedAtTime:Si(xc(s.iat)),expirationTime:Si(xc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xc(n){return Number(n)*1e3}function Bl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gf(t);return s?JSON.parse(s):(qo("Failed to decode base64 JWT payload"),null)}catch(s){return qo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Yd(n){const e=Bl(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&ww(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ww({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ua(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Mi(n,cm(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lm(i.providerUserInfo):[],c=Tw(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new tl(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function Ew(n){const e=Ie(n);await ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lm(n){return n.map(e=>{var{providerId:t}=e,r=Ml(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(n,e){const t=await om(n,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=am(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",im.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Aw(n,e){return wn(n,"POST","/v2/accounts:revokeToken",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Yd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await bw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new _s;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ml(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Iw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Mi(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vw(this,e)}reload(){return Ew(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await Mi(this,yw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,u,h;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,y=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,M=(u=t.createdAt)!==null&&u!==void 0?u:void 0,O=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:U,emailVerified:H,isAnonymous:se,providerData:te,stsTokenManager:T}=t;ne(U&&T,e,"internal-error");const v=_s.fromJSON(this.name,T);ne(typeof U=="string",e,"internal-error"),Nn(p,e.name),Nn(g,e.name),ne(typeof H=="boolean",e,"internal-error"),ne(typeof se=="boolean",e,"internal-error"),Nn(y,e.name),Nn(A,e.name),Nn(k,e.name),Nn(P,e.name),Nn(M,e.name),Nn(O,e.name);const I=new un({uid:U,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:se,photoURL:A,phoneNumber:y,tenantId:k,stsTokenManager:v,createdAt:M,lastLoginAt:O});return te&&Array.isArray(te)&&(I.providerData=te.map(b=>Object.assign({},b))),P&&(I._redirectEventId=P),I}static async _fromIdTokenResponse(e,t,r=!1){const s=new _s;s.updateFromServerResponse(t);const i=new un({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ua(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new _s;c.updateFromIdToken(r);const l=new un({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new tl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new Map;function dn(n){_n(n instanceof Function,"Expected a class definition");let e=Xd.get(n);return e?(_n(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Xd.set(n,e),e)}/**
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
 */class um{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}um.type="NONE";const Zd=um;/**
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
 */function Ko(n,e,t){return`firebase:${n}:${e}:${t}`}class ys{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ko("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ys(dn(Zd),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||dn(Zd);const o=Ko(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const h=await u._get(o);if(h){const p=un._fromJSON(e,h);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ys(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ys(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gm(e))return"Blackberry";if(_m(e))return"Webos";if(hm(e))return"Safari";if((e.includes("chrome/")||fm(e))&&!e.includes("edge/"))return"Chrome";if(pm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dm(n=Ke()){return/firefox\//i.test(n)}function hm(n=Ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fm(n=Ke()){return/crios\//i.test(n)}function mm(n=Ke()){return/iemobile/i.test(n)}function pm(n=Ke()){return/android/i.test(n)}function gm(n=Ke()){return/blackberry/i.test(n)}function _m(n=Ke()){return/webos/i.test(n)}function Ul(n=Ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Sw(n=Ke()){var e;return Ul(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rw(){return Ky()&&document.documentMode===10}function ym(n=Ke()){return Ul(n)||pm(n)||_m(n)||gm(n)||/windows phone/i.test(n)||mm(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n,e=[]){let t;switch(n){case"Browser":t=eh(Ke());break;case"Worker":t=`${eh(Ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gr}/${r}`}/**
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
 */class Pw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Cw(n,e={}){return wn(n,"GET","/v2/passwordPolicy",vn(n,e))}/**
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
 */const kw=6;class Dw{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:kw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new th(this),this.idTokenSubscription=new th(this),this.beforeStateQueue=new Pw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cm(this,{idToken:e}),r=await un._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ua(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(pn(this));const t=e?Ie(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cw(this),t=new Dw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Aw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[dn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&cw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Jn(n){return Ie(n)}class th{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jy(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nw(n){Va=n}function wm(n){return Va.loadJS(n)}function Vw(){return Va.recaptchaEnterpriseScript}function Lw(){return Va.gapiScript}function Mw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Ow="recaptcha-enterprise",Fw="NO_RECAPTCHA";class Bw{constructor(e){this.type=Ow,this.auth=Jn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{_w(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new gw(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Jd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Fw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&Jd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Vw();l.length!==0&&(l+=c),wm(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function nh(n,e,t,r=!1){const s=new Bw(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function da(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await nh(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await nh(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(n,e){const t=Kr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Is(i,e??{}))return s;Ot(s,"already-initialized")}return t.initialize({options:e})}function $w(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(dn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jw(n,e,t){const r=Jn(n);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Im(e),{host:o,port:c}=qw(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Kw()}function Im(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qw(n){const e=Im(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:rh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:rh(o)}}}function rh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,t){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function Gw(n,e){return wn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(n,e){return no(n,"POST","/v1/accounts:signInWithPassword",vn(n,e))}async function Hw(n,e){return wn(n,"POST","/v1/accounts:sendOobCode",vn(n,e))}async function Ww(n,e){return Hw(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(n,e){return no(n,"POST","/v1/accounts:signInWithEmailLink",vn(n,e))}async function Jw(n,e){return no(n,"POST","/v1/accounts:signInWithEmailLink",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends $l{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Oi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Oi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return da(e,t,"signInWithPassword",zw);case"emailLink":return Qw(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return da(e,r,"signUpPassword",Gw);case"emailLink":return Jw(e,{idToken:t,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(n,e){return no(n,"POST","/v1/accounts:signInWithIdp",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="http://localhost";class Rr extends $l{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Ml(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vs(e,t)}buildRequest(){const e={requestUri:Yw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=eo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zw(n){const e=pi(gi(n)).link,t=e?pi(gi(e)).deep_link_id:null,r=pi(gi(n)).deep_link_id;return(r?pi(gi(r)).link:null)||r||t||e||n}class jl{constructor(e){var t,r,s,i,o,c;const l=pi(gi(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Xw((s=l.mode)!==null&&s!==void 0?s:null);ne(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Zw(e);try{return new jl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,t){return Oi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=jl.parseLink(t);return ne(r,"argument-error"),Oi._fromEmailAndCode(e,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ro extends Em{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ro{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return On.credential(t,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ro{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ro{constructor(){super("twitter.com")}static credential(e,t){return Rr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(n,e){return no(n,"POST","/v1/accounts:signUp",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await un._fromIdTokenResponse(e,r,s),o=sh(r);return new Pr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=sh(r);return new Pr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function sh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Bt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ha.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ha(e,t,r,s)}}function Tm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ha._fromErrorAndOperation(n,i,e,r):i})}async function tI(n,e,t=!1){const r=await Mi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Pr._forOperation(n,"link",r)}/**
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
 */async function nI(n,e,t=!1){const{auth:r}=n;if(Jt(r.app))return Promise.reject(pn(r));const s="reauthenticate";try{const i=await Mi(n,Tm(r,s,e,n),t);ne(i.idToken,r,"internal-error");const o=Bl(i.idToken);ne(o,r,"internal-error");const{sub:c}=o;return ne(n.uid===c,r,"user-mismatch"),Pr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(n,e,t=!1){if(Jt(n.app))return Promise.reject(pn(n));const r="signIn",s=await Tm(n,r,e),i=await Pr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function rI(n,e){return bm(Jn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(n){const e=Jn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sI(n,e,t){const r=Jn(n);await da(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ww)}async function iI(n,e,t){if(Jt(n.app))return Promise.reject(pn(n));const r=Jn(n),o=await da(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Am(n),l}),c=await Pr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function oI(n,e,t){return Jt(n.app)?Promise.reject(pn(n)):rI(Ie(n),Ls.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Am(n),r})}function aI(n,e,t,r){return Ie(n).onIdTokenChanged(e,t,r)}function cI(n,e,t){return Ie(n).beforeAuthStateChanged(e,t)}function lI(n,e,t,r){return Ie(n).onAuthStateChanged(e,t,r)}function uI(n){return Ie(n).signOut()}const fa="__sak";/**
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
 */class Sm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fa,"1"),this.storage.removeItem(fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=1e3,hI=10;class Rm extends Sm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ym(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Rw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rm.type="LOCAL";const fI=Rm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends Sm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pm.type="SESSION";const Cm=Pm;/**
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
 */function mI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class La{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new La(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await mI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}La.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class pI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=ql("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function gI(n){en().location.href=n}/**
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
 */function km(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function _I(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function vI(){return km()?self:null}/**
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
 */const Dm="firebaseLocalStorageDb",wI=1,ma="firebaseLocalStorage",xm="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ma(n,e){return n.transaction([ma],e?"readwrite":"readonly").objectStore(ma)}function II(){const n=indexedDB.deleteDatabase(Dm);return new so(n).toPromise()}function nl(){const n=indexedDB.open(Dm,wI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ma,{keyPath:xm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ma)?e(r):(r.close(),await II(),e(await nl()))})})}async function ih(n,e,t){const r=Ma(n,!0).put({[xm]:e,value:t});return new so(r).toPromise()}async function EI(n,e){const t=Ma(n,!1).get(e),r=await new so(t).toPromise();return r===void 0?null:r.value}function oh(n,e){const t=Ma(n,!0).delete(e);return new so(t).toPromise()}const TI=800,bI=3;class Nm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return km()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=La._getInstance(vI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _I(),!this.activeServiceWorker)return;this.sender=new pI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nl();return await ih(e,fa,"1"),await oh(e,fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ih(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>EI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>oh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ma(s,!1).getAll();return new so(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nm.type="LOCAL";const AI=Nm;new to(3e4,6e4);/**
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
 */function SI(n,e){return e?dn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Kl extends $l{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function RI(n){return bm(n.auth,new Kl(n),n.bypassAuthState)}function PI(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),nI(t,new Kl(n),n.bypassAuthState)}async function CI(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),tI(t,new Kl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RI;case"linkViaPopup":case"linkViaRedirect":return CI;case"reauthViaPopup":case"reauthViaRedirect":return PI;default:Ot(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new to(2e3,1e4);class gs extends Vm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kI.get())};e()}}gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="pendingRedirect",Go=new Map;class xI extends Vm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Go.get(this.auth._key());if(!e){try{const r=await NI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Go.set(this.auth._key(),e)}return this.bypassAuthState||Go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NI(n,e){const t=MI(e),r=LI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function VI(n,e){Go.set(n._key(),e)}function LI(n){return dn(n._redirectPersistence)}function MI(n){return Ko(DI,n.config.apiKey,n.name)}async function OI(n,e,t=!1){if(Jt(n.app))return Promise.reject(pn(n));const r=Jn(n),s=SI(r,e),o=await new xI(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=10*60*1e3;class BI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Lm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Zt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ah(e))}saveEventToCache(e){this.cachedEventUids.add(ah(e)),this.lastProcessedEventTime=Date.now()}}function ah(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(n,e={}){return wn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qI=/^https?/;async function KI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $I(n);for(const t of e)try{if(GI(t))return}catch{}Ot(n,"unauthorized-domain")}function GI(n){const e=el(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!qI.test(t))return!1;if(jI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zI=new to(3e4,6e4);function ch(){const n=en().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function HI(n){return new Promise((e,t)=>{var r,s,i;function o(){ch(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ch(),t(Zt(n,"network-request-failed"))},timeout:zI.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const c=Mw("iframefcb");return en()[c]=()=>{gapi.load?o():t(Zt(n,"network-request-failed"))},wm(`${Lw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw zo=null,e})}let zo=null;function WI(n){return zo=zo||HI(n),zo}/**
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
 */const QI=new to(5e3,15e3),JI="__/auth/iframe",YI="emulator/auth/iframe",XI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eE(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fl(e,YI):`https://${n.config.authDomain}/${JI}`,r={apiKey:e.apiKey,appName:n.name,v:Gr},s=ZI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${eo(r).slice(1)}`}async function tE(n){const e=await WI(n),t=en().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:eE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(n,"network-request-failed"),c=en().setTimeout(()=>{i(o)},QI.get());function l(){en().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const nE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rE=500,sE=600,iE="_blank",oE="http://localhost";class lh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aE(n,e,t,r=rE,s=sE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},nE),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ke().toLowerCase();t&&(c=fm(u)?iE:t),dm(u)&&(e=e||oE,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[y,A])=>`${g}${y}=${A},`,"");if(Sw(u)&&c!=="_self")return cE(e||"",c),new lh(null);const p=window.open(e||"",c,h);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new lh(p)}function cE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const lE="__/auth/handler",uE="emulator/auth/handler",dE=encodeURIComponent("fac");async function uh(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Gr,eventId:s};if(e instanceof Em){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Qy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof ro){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await n._getAppCheckToken(),u=l?`#${dE}=${encodeURIComponent(l)}`:"";return`${hE(n)}?${eo(c).slice(1)}${u}`}function hE({config:n}){return n.emulator?Fl(n,uE):`https://${n.authDomain}/${lE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="webStorageSupport";class fE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cm,this._completeRedirectFn=OI,this._overrideRedirectResult=VI}async _openPopup(e,t,r,s){var i;_n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await uh(e,t,r,el(),s);return aE(e,o,ql())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await uh(e,t,r,el(),s);return gI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(_n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await tE(e),r=new BI(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Nc,{type:Nc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Nc];o!==void 0&&t(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ym()||hm()||Ul()}}const mE=fE;var dh="@firebase/auth",hh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _E(n){Mt(new xt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vm(n)},u=new xw(r,s,i,l);return $w(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Mt(new xt("auth-internal",e=>{const t=Jn(e.getProvider("auth").getImmediate());return(r=>new pE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(dh,hh,gE(n)),Et(dh,hh,"esm2017")}/**
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
 */const yE=5*60,vE=Wf("authIdTokenMaxAge")||yE;let fh=null;const wE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>vE)return;const s=t==null?void 0:t.token;fh!==s&&(fh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function IE(n=Ll()){const e=Kr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Uw(n,{popupRedirectResolver:mE,persistence:[AI,fI,Cm]}),r=Wf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wE(i.toString());cI(t,o,()=>o(t.currentUser)),aI(t,c=>o(c))}}const s=zf("auth");return s&&jw(t,`http://${s}`),t}function EE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Nw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",EE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_E("Browser");var mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,Mm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function I(){}I.prototype=v.prototype,T.D=v.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(b,E,S){for(var w=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)w[Ae-2]=arguments[Ae];return v.prototype[E].apply(b,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,I){I||(I=0);var b=Array(16);if(typeof v=="string")for(var E=0;16>E;++E)b[E]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(E=0;16>E;++E)b[E]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=T.g[0],I=T.g[1],E=T.g[2];var S=T.g[3],w=v+(S^I&(E^S))+b[0]+3614090360&4294967295;v=I+(w<<7&4294967295|w>>>25),w=S+(E^v&(I^E))+b[1]+3905402710&4294967295,S=v+(w<<12&4294967295|w>>>20),w=E+(I^S&(v^I))+b[2]+606105819&4294967295,E=S+(w<<17&4294967295|w>>>15),w=I+(v^E&(S^v))+b[3]+3250441966&4294967295,I=E+(w<<22&4294967295|w>>>10),w=v+(S^I&(E^S))+b[4]+4118548399&4294967295,v=I+(w<<7&4294967295|w>>>25),w=S+(E^v&(I^E))+b[5]+1200080426&4294967295,S=v+(w<<12&4294967295|w>>>20),w=E+(I^S&(v^I))+b[6]+2821735955&4294967295,E=S+(w<<17&4294967295|w>>>15),w=I+(v^E&(S^v))+b[7]+4249261313&4294967295,I=E+(w<<22&4294967295|w>>>10),w=v+(S^I&(E^S))+b[8]+1770035416&4294967295,v=I+(w<<7&4294967295|w>>>25),w=S+(E^v&(I^E))+b[9]+2336552879&4294967295,S=v+(w<<12&4294967295|w>>>20),w=E+(I^S&(v^I))+b[10]+4294925233&4294967295,E=S+(w<<17&4294967295|w>>>15),w=I+(v^E&(S^v))+b[11]+2304563134&4294967295,I=E+(w<<22&4294967295|w>>>10),w=v+(S^I&(E^S))+b[12]+1804603682&4294967295,v=I+(w<<7&4294967295|w>>>25),w=S+(E^v&(I^E))+b[13]+4254626195&4294967295,S=v+(w<<12&4294967295|w>>>20),w=E+(I^S&(v^I))+b[14]+2792965006&4294967295,E=S+(w<<17&4294967295|w>>>15),w=I+(v^E&(S^v))+b[15]+1236535329&4294967295,I=E+(w<<22&4294967295|w>>>10),w=v+(E^S&(I^E))+b[1]+4129170786&4294967295,v=I+(w<<5&4294967295|w>>>27),w=S+(I^E&(v^I))+b[6]+3225465664&4294967295,S=v+(w<<9&4294967295|w>>>23),w=E+(v^I&(S^v))+b[11]+643717713&4294967295,E=S+(w<<14&4294967295|w>>>18),w=I+(S^v&(E^S))+b[0]+3921069994&4294967295,I=E+(w<<20&4294967295|w>>>12),w=v+(E^S&(I^E))+b[5]+3593408605&4294967295,v=I+(w<<5&4294967295|w>>>27),w=S+(I^E&(v^I))+b[10]+38016083&4294967295,S=v+(w<<9&4294967295|w>>>23),w=E+(v^I&(S^v))+b[15]+3634488961&4294967295,E=S+(w<<14&4294967295|w>>>18),w=I+(S^v&(E^S))+b[4]+3889429448&4294967295,I=E+(w<<20&4294967295|w>>>12),w=v+(E^S&(I^E))+b[9]+568446438&4294967295,v=I+(w<<5&4294967295|w>>>27),w=S+(I^E&(v^I))+b[14]+3275163606&4294967295,S=v+(w<<9&4294967295|w>>>23),w=E+(v^I&(S^v))+b[3]+4107603335&4294967295,E=S+(w<<14&4294967295|w>>>18),w=I+(S^v&(E^S))+b[8]+1163531501&4294967295,I=E+(w<<20&4294967295|w>>>12),w=v+(E^S&(I^E))+b[13]+2850285829&4294967295,v=I+(w<<5&4294967295|w>>>27),w=S+(I^E&(v^I))+b[2]+4243563512&4294967295,S=v+(w<<9&4294967295|w>>>23),w=E+(v^I&(S^v))+b[7]+1735328473&4294967295,E=S+(w<<14&4294967295|w>>>18),w=I+(S^v&(E^S))+b[12]+2368359562&4294967295,I=E+(w<<20&4294967295|w>>>12),w=v+(I^E^S)+b[5]+4294588738&4294967295,v=I+(w<<4&4294967295|w>>>28),w=S+(v^I^E)+b[8]+2272392833&4294967295,S=v+(w<<11&4294967295|w>>>21),w=E+(S^v^I)+b[11]+1839030562&4294967295,E=S+(w<<16&4294967295|w>>>16),w=I+(E^S^v)+b[14]+4259657740&4294967295,I=E+(w<<23&4294967295|w>>>9),w=v+(I^E^S)+b[1]+2763975236&4294967295,v=I+(w<<4&4294967295|w>>>28),w=S+(v^I^E)+b[4]+1272893353&4294967295,S=v+(w<<11&4294967295|w>>>21),w=E+(S^v^I)+b[7]+4139469664&4294967295,E=S+(w<<16&4294967295|w>>>16),w=I+(E^S^v)+b[10]+3200236656&4294967295,I=E+(w<<23&4294967295|w>>>9),w=v+(I^E^S)+b[13]+681279174&4294967295,v=I+(w<<4&4294967295|w>>>28),w=S+(v^I^E)+b[0]+3936430074&4294967295,S=v+(w<<11&4294967295|w>>>21),w=E+(S^v^I)+b[3]+3572445317&4294967295,E=S+(w<<16&4294967295|w>>>16),w=I+(E^S^v)+b[6]+76029189&4294967295,I=E+(w<<23&4294967295|w>>>9),w=v+(I^E^S)+b[9]+3654602809&4294967295,v=I+(w<<4&4294967295|w>>>28),w=S+(v^I^E)+b[12]+3873151461&4294967295,S=v+(w<<11&4294967295|w>>>21),w=E+(S^v^I)+b[15]+530742520&4294967295,E=S+(w<<16&4294967295|w>>>16),w=I+(E^S^v)+b[2]+3299628645&4294967295,I=E+(w<<23&4294967295|w>>>9),w=v+(E^(I|~S))+b[0]+4096336452&4294967295,v=I+(w<<6&4294967295|w>>>26),w=S+(I^(v|~E))+b[7]+1126891415&4294967295,S=v+(w<<10&4294967295|w>>>22),w=E+(v^(S|~I))+b[14]+2878612391&4294967295,E=S+(w<<15&4294967295|w>>>17),w=I+(S^(E|~v))+b[5]+4237533241&4294967295,I=E+(w<<21&4294967295|w>>>11),w=v+(E^(I|~S))+b[12]+1700485571&4294967295,v=I+(w<<6&4294967295|w>>>26),w=S+(I^(v|~E))+b[3]+2399980690&4294967295,S=v+(w<<10&4294967295|w>>>22),w=E+(v^(S|~I))+b[10]+4293915773&4294967295,E=S+(w<<15&4294967295|w>>>17),w=I+(S^(E|~v))+b[1]+2240044497&4294967295,I=E+(w<<21&4294967295|w>>>11),w=v+(E^(I|~S))+b[8]+1873313359&4294967295,v=I+(w<<6&4294967295|w>>>26),w=S+(I^(v|~E))+b[15]+4264355552&4294967295,S=v+(w<<10&4294967295|w>>>22),w=E+(v^(S|~I))+b[6]+2734768916&4294967295,E=S+(w<<15&4294967295|w>>>17),w=I+(S^(E|~v))+b[13]+1309151649&4294967295,I=E+(w<<21&4294967295|w>>>11),w=v+(E^(I|~S))+b[4]+4149444226&4294967295,v=I+(w<<6&4294967295|w>>>26),w=S+(I^(v|~E))+b[11]+3174756917&4294967295,S=v+(w<<10&4294967295|w>>>22),w=E+(v^(S|~I))+b[2]+718787259&4294967295,E=S+(w<<15&4294967295|w>>>17),w=I+(S^(E|~v))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var I=v-this.blockSize,b=this.B,E=this.h,S=0;S<v;){if(E==0)for(;S<=I;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<v;)if(b[E++]=T.charCodeAt(S++),E==this.blockSize){s(this,b),E=0;break}}else for(;S<v;)if(b[E++]=T[S++],E==this.blockSize){s(this,b),E=0;break}}this.h=E,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var I=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=I&255,I/=256;for(this.u(T),T=Array(16),v=I=0;4>v;++v)for(var b=0;32>b;b+=8)T[I++]=this.g[v]>>>b&255;return T};function i(T,v){var I=c;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=v(T)}function o(T,v){this.h=v;for(var I=[],b=!0,E=T.length-1;0<=E;E--){var S=T[E]|0;b&&S==v||(I[E]=S,b=!1)}this.g=I}var c={};function l(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return P(u(-T));for(var v=[],I=1,b=0;T>=I;b++)v[b]=T/I|0,I*=4294967296;return new o(v,0)}function h(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return P(h(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(v,8)),b=p,E=0;E<T.length;E+=8){var S=Math.min(8,T.length-E),w=parseInt(T.substring(E,E+S),v);8>S?(S=u(Math.pow(v,S)),b=b.j(S).add(u(w))):(b=b.j(I),b=b.add(u(w)))}return b}var p=l(0),g=l(1),y=l(16777216);n=o.prototype,n.m=function(){if(k(this))return-P(this).m();for(var T=0,v=1,I=0;I<this.g.length;I++){var b=this.i(I);T+=(0<=b?b:4294967296+b)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(k(this))return"-"+P(this).toString(T);for(var v=u(Math.pow(T,6)),I=this,b="";;){var E=H(I,v).g;I=M(I,E.j(v));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=E,A(I))return S+b;for(;6>S.length;)S="0"+S;b=S+b}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=M(this,T),k(T)?-1:A(T)?0:1};function P(T){for(var v=T.g.length,I=[],b=0;b<v;b++)I[b]=~T.g[b];return new o(I,~T.h).add(g)}n.abs=function(){return k(this)?P(this):this},n.add=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],b=0,E=0;E<=v;E++){var S=b+(this.i(E)&65535)+(T.i(E)&65535),w=(S>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);b=w>>>16,S&=65535,w&=65535,I[E]=w<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function M(T,v){return T.add(P(v))}n.j=function(T){if(A(this)||A(T))return p;if(k(this))return k(T)?P(this).j(P(T)):P(P(this).j(T));if(k(T))return P(this.j(P(T)));if(0>this.l(y)&&0>T.l(y))return u(this.m()*T.m());for(var v=this.g.length+T.g.length,I=[],b=0;b<2*v;b++)I[b]=0;for(b=0;b<this.g.length;b++)for(var E=0;E<T.g.length;E++){var S=this.i(b)>>>16,w=this.i(b)&65535,Ae=T.i(E)>>>16,ze=T.i(E)&65535;I[2*b+2*E]+=w*ze,O(I,2*b+2*E),I[2*b+2*E+1]+=S*ze,O(I,2*b+2*E+1),I[2*b+2*E+1]+=w*Ae,O(I,2*b+2*E+1),I[2*b+2*E+2]+=S*Ae,O(I,2*b+2*E+2)}for(b=0;b<v;b++)I[b]=I[2*b+1]<<16|I[2*b];for(b=v;b<2*v;b++)I[b]=0;return new o(I,0)};function O(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function U(T,v){this.g=T,this.h=v}function H(T,v){if(A(v))throw Error("division by zero");if(A(T))return new U(p,p);if(k(T))return v=H(P(T),v),new U(P(v.g),P(v.h));if(k(v))return v=H(T,P(v)),new U(P(v.g),v.h);if(30<T.g.length){if(k(T)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var I=g,b=v;0>=b.l(T);)I=se(I),b=se(b);var E=te(I,1),S=te(b,1);for(b=te(b,2),I=te(I,2);!A(b);){var w=S.add(b);0>=w.l(T)&&(E=E.add(I),S=w),b=te(b,1),I=te(I,1)}return v=M(T,E.j(v)),new U(E,v)}for(E=p;0<=T.l(v);){for(I=Math.max(1,Math.floor(T.m()/v.m())),b=Math.ceil(Math.log(I)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),S=u(I),w=S.j(v);k(w)||0<w.l(T);)I-=b,S=u(I),w=S.j(v);A(S)&&(S=g),E=E.add(S),T=M(T,w)}return new U(E,T)}n.A=function(T){return H(this,T).h},n.and=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],b=0;b<v;b++)I[b]=this.i(b)&T.i(b);return new o(I,this.h&T.h)},n.or=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],b=0;b<v;b++)I[b]=this.i(b)|T.i(b);return new o(I,this.h|T.h)},n.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],b=0;b<v;b++)I[b]=this.i(b)^T.i(b);return new o(I,this.h^T.h)};function se(T){for(var v=T.g.length+1,I=[],b=0;b<v;b++)I[b]=T.i(b)<<1|T.i(b-1)>>>31;return new o(I,T.h)}function te(T,v){var I=v>>5;v%=32;for(var b=T.g.length-I,E=[],S=0;S<b;S++)E[S]=0<v?T.i(S+I)>>>v|T.i(S+I+1)<<32-v:T.i(S+I);return new o(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ir=o}).apply(typeof mh<"u"?mh:typeof self<"u"?self:typeof window<"u"?window:{});var Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Om,_i,Fm,Ho,rl,Bm,Um,$m;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lo=="object"&&Lo];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var R=a[_];if(!(R in f))break e;f=f[R]}a=a[a.length-1],_=f[a],d=d(_),d!=_&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,_=!1,R={next:function(){if(!_&&f<a.length){var D=f++;return{value:d(D,a[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,_),a.apply(d,R)}}return function(){return a.apply(d,arguments)}}function g(a,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function y(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,R,D){for(var F=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)F[ge-2]=arguments[ge];return d.prototype[R].apply(_,F)}}function k(a){const d=a.length;if(0<d){const f=Array(d);for(let _=0;_<d;_++)f[_]=a[_];return f}return[]}function P(a,d){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(l(_)){const R=a.length||0,D=_.length||0;a.length=R+D;for(let F=0;F<D;F++)a[R+F]=_[F]}else a.push(_)}}class M{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var se=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function te(a,d,f){for(const _ in a)d.call(f,a[_],_,a)}function T(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function v(a){const d={};for(const f in a)d[f]=a[f];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,d){let f,_;for(let R=1;R<arguments.length;R++){_=arguments[R];for(f in _)a[f]=_[f];for(let D=0;D<I.length;D++)f=I[D],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function E(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function S(a){c.setTimeout(()=>{throw a},0)}function w(){var a=He;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ae{constructor(){this.h=this.g=null}add(d,f){const _=ze.get();_.set(d,f),this.h?this.h.next=_:this.g=_,this.h=_}}var ze=new M(()=>new rr,a=>a.reset());class rr{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ye,Tt=!1,He=new Ae,yo=()=>{const a=c.Promise.resolve(void 0);Ye=()=>{a.then(pc)}};var pc=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){S(f)}var d=ze;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Tt=!1};function jt(){this.s=this.s,this.C=this.C}jt.prototype.s=!1,jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Ks=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,d),c.removeEventListener("test",f,d)}catch{}return a}();function En(a,d){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(se){e:{try{H(d.nodeName);var R=!0;break e}catch{}R=!1}R||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Tn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&En.aa.h.call(this)}}A(En,Le);var Tn={2:"touch",3:"pen",4:"mouse"};En.prototype.h=function(){En.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var qt="closure_listenable_"+(1e6*Math.random()|0),Gs=0;function sr(a,d,f,_,R){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!_,this.ha=R,this.key=++Gs,this.da=this.fa=!1}function bn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Kt(a){this.src=a,this.g={},this.h=0}Kt.prototype.add=function(a,d,f,_,R){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var F=An(a,d,_,R);return-1<F?(d=a[F],f||(d.fa=!1)):(d=new sr(d,this.src,D,!!_,R),d.fa=f,a.push(d)),d};function Yr(a,d){var f=d.type;if(f in a.g){var _=a.g[f],R=Array.prototype.indexOf.call(_,d,void 0),D;(D=0<=R)&&Array.prototype.splice.call(_,R,1),D&&(bn(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function An(a,d,f,_){for(var R=0;R<a.length;++R){var D=a[R];if(!D.da&&D.listener==d&&D.capture==!!f&&D.ha==_)return R}return-1}var Sn="closure_lm_"+(1e6*Math.random()|0),ir={};function Xr(a,d,f,_,R){if(Array.isArray(d)){for(var D=0;D<d.length;D++)Xr(a,d[D],f,_,R);return null}return f=es(f),a&&a[qt]?a.K(d,f,u(_)?!!_.capture:!1,R):gc(a,d,f,!1,_,R)}function gc(a,d,f,_,R,D){if(!d)throw Error("Invalid event type");var F=u(R)?!!R.capture:!!R,ge=$e(a);if(ge||(a[Sn]=ge=new Kt(a)),f=ge.add(d,f,_,F,D),f.proxy)return f;if(_=bt(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Ks||(R=F),R===void 0&&(R=!1),a.addEventListener(d.toString(),_,R);else if(a.attachEvent)a.attachEvent(or(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function bt(){function a(f){return d.call(a.src,a.listener,f)}const d=Zr;return a}function zs(a,d,f,_,R){if(Array.isArray(d))for(var D=0;D<d.length;D++)zs(a,d[D],f,_,R);else _=u(_)?!!_.capture:!!_,f=es(f),a&&a[qt]?(a=a.i,d=String(d).toString(),d in a.g&&(D=a.g[d],f=An(D,f,_,R),-1<f&&(bn(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[d],a.h--)))):a&&(a=$e(a))&&(d=a.g[d.toString()],a=-1,d&&(a=An(d,f,_,R)),(f=-1<a?d[a]:null)&&Rn(f))}function Rn(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[qt])Yr(d.i,a);else{var f=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(f,_,a.capture):d.detachEvent?d.detachEvent(or(f),_):d.addListener&&d.removeListener&&d.removeListener(_),(f=$e(d))?(Yr(f,a),f.h==0&&(f.src=null,d[Sn]=null)):bn(a)}}}function or(a){return a in ir?ir[a]:ir[a]="on"+a}function Zr(a,d){if(a.da)a=!0;else{d=new En(d,this);var f=a.listener,_=a.ha||a.src;a.fa&&Rn(a),a=f.call(_,d)}return a}function $e(a){return a=a[Sn],a instanceof Kt?a:null}var Hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(a){return typeof a=="function"?a:(a[Hs]||(a[Hs]=function(d){return a.handleEvent(d)}),a[Hs])}function Ee(){jt.call(this),this.i=new Kt(this),this.M=this,this.F=null}A(Ee,jt),Ee.prototype[qt]=!0,Ee.prototype.removeEventListener=function(a,d,f,_){zs(this,a,d,f,_)};function We(a,d){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new Le(d,a);else if(d instanceof Le)d.target=d.target||a;else{var R=d;d=new Le(_,a),b(d,R)}if(R=!0,f)for(var D=f.length-1;0<=D;D--){var F=d.g=f[D];R=ar(F,_,!0,d)&&R}if(F=d.g=a,R=ar(F,_,!0,d)&&R,R=ar(F,_,!1,d)&&R,f)for(D=0;D<f.length;D++)F=d.g=f[D],R=ar(F,_,!1,d)&&R}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],_=0;_<f.length;_++)bn(f[_]);delete a.g[d],a.h--}}this.F=null},Ee.prototype.K=function(a,d,f,_){return this.i.add(String(a),d,!1,f,_)},Ee.prototype.L=function(a,d,f,_){return this.i.add(String(a),d,!0,f,_)};function ar(a,d,f,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var R=!0,D=0;D<d.length;++D){var F=d[D];if(F&&!F.da&&F.capture==f){var ge=F.listener,Xe=F.ha||F.src;F.fa&&Yr(a.i,F),R=ge.call(Xe,_)!==!1&&R}}return R&&!_.defaultPrevented}function Ws(a,d,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function Qs(a){a.g=Ws(()=>{a.g=null,a.i&&(a.i=!1,Qs(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class vo extends jt{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Qs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(a){jt.call(this),this.h=a,this.g={}}A(Pn,jt);var Js=[];function Ys(a){te(a.g,function(d,f){this.g.hasOwnProperty(f)&&Rn(d)},a),a.g={}}Pn.prototype.N=function(){Pn.aa.N.call(this),Ys(this)},Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ts=c.JSON.stringify,wo=c.JSON.parse,Io=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ns(){}ns.prototype.h=null;function Xs(a){return a.h||(a.h=a.i())}function Zs(){}var Cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rs(){Le.call(this,"d")}A(rs,Le);function N(){Le.call(this,"c")}A(N,Le);var L={},W=null;function Q(){return W=W||new Ee}L.La="serverreachability";function Z(a){Le.call(this,L.La,a)}A(Z,Le);function ee(a){const d=Q();We(d,new Z(d))}L.STAT_EVENT="statevent";function fe(a,d){Le.call(this,L.STAT_EVENT,a),this.stat=d}A(fe,Le);function ie(a){const d=Q();We(d,new fe(d,a))}L.Ma="timingevent";function ye(a,d){Le.call(this,L.Ma,a),this.size=d}A(ye,Le);function oe(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function Pe(){this.g=!0}Pe.prototype.xa=function(){this.g=!1};function Me(a,d,f,_,R,D){a.info(function(){if(a.g)if(D)for(var F="",ge=D.split("&"),Xe=0;Xe<ge.length;Xe++){var de=ge[Xe].split("=");if(1<de.length){var nt=de[0];de=de[1];var rt=nt.split("_");F=2<=rt.length&&rt[1]=="type"?F+(nt+"="+de+"&"):F+(nt+"=redacted&")}}else F=null;else F=D;return"XMLHTTP REQ ("+_+") [attempt "+R+"]: "+d+`
`+f+`
`+F})}function Oe(a,d,f,_,R,D,F){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+R+"]: "+d+`
`+f+`
`+D+" "+F})}function _t(a,d,f,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+rn(a,f)+(_?" "+_:"")})}function Gt(a,d){a.info(function(){return"TIMEOUT: "+d})}Pe.prototype.info=function(){};function rn(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var R=_[1];if(Array.isArray(R)&&!(1>R.length)){var D=R[0];if(D!="noop"&&D!="stop"&&D!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return ts(f)}catch{return d}}var Te={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ut={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zt;function yt(){}A(yt,ns),yt.prototype.g=function(){return new XMLHttpRequest},yt.prototype.i=function(){return{}},zt=new yt;function At(a,d,f,_){this.j=a,this.i=d,this.l=f,this.R=_||1,this.U=new Pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dt}function dt(){this.i=null,this.g="",this.h=!1}var tt={},kn={};function sn(a,d,f){a.L=1,a.v=Ao(on(d)),a.m=f,a.P=!0,cr(a,null)}function cr(a,d){a.F=Date.now(),Ht(a),a.A=on(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),_d(f.i,"t",_),a.C=0,f=a.j.J,a.h=new dt,a.g=Ld(a.j,f?d:null,!a.m),0<a.O&&(a.M=new vo(g(a.Y,a,a.g),a.O)),d=a.U,f=a.g,_=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Js[0]=R.toString()),R=Js);for(var D=0;D<R.length;D++){var F=Xr(f,R[D],_||d.handleEvent,!1,d.h||d);if(!F)break;d.g[F.key]=F}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),ee(),Me(a.i,a.u,a.A,a.l,a.R,a.m)}At.prototype.ca=function(a){a=a.target;const d=this.M;d&&an(a)==3?d.j():this.Y(a)},At.prototype.Y=function(a){try{if(a==this.g)e:{const rt=an(this.g);var d=this.g.Ba();const os=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||bd(this.g)))){this.J||rt!=4||d==7||(d==8||0>=os?ee(3):ee(2)),_c(this);var f=this.g.Z();this.X=f;t:if(Eo(this)){var _=bd(this.g);a="";var R=_.length,D=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lr(this),ei(this);var F="";break t}this.h.i=new c.TextDecoder}for(d=0;d<R;d++)this.h.h=!0,a+=this.h.i.decode(_[d],{stream:!(D&&d==R-1)});_.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=f==200,Oe(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,Xe=this.g;if((ge=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(ge)){var de=ge;break t}}de=null}if(f=de)_t(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yc(this,f);else{this.o=!1,this.s=3,ie(12),lr(this),ei(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<F.length;)if(Vt=je(this,F),Vt==kn){rt==4&&(this.s=4,ie(14),f=!1),_t(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==tt){this.s=4,ie(15),_t(this.i,this.l,F,"[Invalid Chunk]"),f=!1;break}else _t(this.i,this.l,Vt,null),yc(this,Vt);if(Eo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||F.length!=0||this.h.h||(this.s=1,ie(16),f=!1),this.o=this.o&&f,!f)_t(this.i,this.l,F,"[Invalid Chunked Response]"),lr(this),ei(this);else if(0<F.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),bc(nt),nt.M=!0,ie(11))}}else _t(this.i,this.l,F,null),yc(this,F);rt==4&&lr(this),this.o&&!this.J&&(rt==4?Dd(this.j,this):(this.o=!1,Ht(this)))}else Ry(this.g),f==400&&0<F.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),lr(this),ei(this)}}}catch{}finally{}};function Eo(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function je(a,d){var f=a.C,_=d.indexOf(`
`,f);return _==-1?kn:(f=Number(d.substring(f,_)),isNaN(f)?tt:(_+=1,_+f>d.length?kn:(d=d.slice(_,_+f),a.C=_+f,d)))}At.prototype.cancel=function(){this.J=!0,lr(this)};function Ht(a){a.S=Date.now()+a.I,id(a,a.I)}function id(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=oe(g(a.ba,a),d)}function _c(a){a.B&&(c.clearTimeout(a.B),a.B=null)}At.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Gt(this.i,this.A),this.L!=2&&(ee(),ie(17)),lr(this),this.s=2,ei(this)):id(this,this.S-a)};function ei(a){a.j.G==0||a.J||Dd(a.j,a)}function lr(a){_c(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Ys(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function yc(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||vc(f.h,a))){if(!a.K&&vc(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var R=_;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Do(f),Co(f);else break e;Tc(f),ie(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=oe(g(f.Za,f),6e3));if(1>=cd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else dr(f,11)}else if((a.K||f.g==a)&&Do(f),!O(d))for(R=f.Da.g.parse(d),d=0;d<R.length;d++){let de=R[d];if(f.T=de[0],de=de[1],f.G==2)if(de[0]=="c"){f.K=de[1],f.ia=de[2];const nt=de[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=de[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const os=de[5];os!=null&&typeof os=="number"&&0<os&&(_=1.5*os,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const Vt=a.g;if(Vt){const No=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(No){var D=_.h;D.g||No.indexOf("spdy")==-1&&No.indexOf("quic")==-1&&No.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(wc(D,D.h),D.h=null))}if(_.D){const Ac=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(_.ya=Ac,ve(_.I,_.D,Ac))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var F=a;if(_.qa=Vd(_,_.J?_.ia:null,_.W),F.K){ld(_.h,F);var ge=F,Xe=_.L;Xe&&(ge.I=Xe),ge.B&&(_c(ge),Ht(ge)),_.g=F}else Cd(_);0<f.i.length&&ko(f)}else de[0]!="stop"&&de[0]!="close"||dr(f,7);else f.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?dr(f,7):Ec(f):de[0]!="noop"&&f.l&&f.l.ta(de),f.v=0)}}ee(4)}catch{}}var dy=class{constructor(a,d){this.g=a,this.map=d}};function od(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ad(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function cd(a){return a.h?1:a.g?a.g.size:0}function vc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function wc(a,d){a.g?a.g.add(d):a.h=d}function ld(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}od.prototype.cancel=function(){if(this.i=ud(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ud(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return k(a.i)}function hy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],f=a.length,_=0;_<f;_++)d.push(a[_]);return d}d=[],f=0;for(_ in a)d[f++]=a[_];return d}function fy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const _ in a)d[f++]=_;return d}}}function dd(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=fy(a),_=hy(a),R=_.length,D=0;D<R;D++)d.call(void 0,_[D],f&&f[D],a)}var hd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function my(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),R=null;if(0<=_){var D=a[f].substring(0,_);R=a[f].substring(_+1)}else D=a[f];d(D,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ur){this.h=a.h,To(this,a.j),this.o=a.o,this.g=a.g,bo(this,a.s),this.l=a.l;var d=a.i,f=new ri;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),fd(this,f),this.m=a.m}else a&&(d=String(a).match(hd))?(this.h=!1,To(this,d[1]||"",!0),this.o=ti(d[2]||""),this.g=ti(d[3]||"",!0),bo(this,d[4]),this.l=ti(d[5]||"",!0),fd(this,d[6]||"",!0),this.m=ti(d[7]||"")):(this.h=!1,this.i=new ri(null,this.h))}ur.prototype.toString=function(){var a=[],d=this.j;d&&a.push(ni(d,md,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(ni(d,md,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ni(f,f.charAt(0)=="/"?_y:gy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ni(f,vy)),a.join("")};function on(a){return new ur(a)}function To(a,d,f){a.j=f?ti(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function bo(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function fd(a,d,f){d instanceof ri?(a.i=d,wy(a.i,a.h)):(f||(d=ni(d,yy)),a.i=new ri(d,a.h))}function ve(a,d,f){a.i.set(d,f)}function Ao(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ti(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ni(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,py),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function py(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var md=/[#\/\?@]/g,gy=/[#\?:]/g,_y=/[#\?]/g,yy=/[#\?@]/g,vy=/#/g;function ri(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&my(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=ri.prototype,n.add=function(a,d){Dn(this),this.i=null,a=ss(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function pd(a,d){Dn(a),d=ss(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function gd(a,d){return Dn(a),d=ss(a,d),a.g.has(d)}n.forEach=function(a,d){Dn(this),this.g.forEach(function(f,_){f.forEach(function(R){a.call(d,R,_,this)},this)},this)},n.na=function(){Dn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let _=0;_<d.length;_++){const R=a[_];for(let D=0;D<R.length;D++)f.push(d[_])}return f},n.V=function(a){Dn(this);let d=[];if(typeof a=="string")gd(this,a)&&(d=d.concat(this.g.get(ss(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},n.set=function(a,d){return Dn(this),this.i=null,a=ss(this,a),gd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function _d(a,d,f){pd(a,d),0<f.length&&(a.i=null,a.g.set(ss(a,d),k(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var _=d[f];const D=encodeURIComponent(String(_)),F=this.V(_);for(_=0;_<F.length;_++){var R=D;F[_]!==""&&(R+="="+encodeURIComponent(String(F[_]))),a.push(R)}}return this.i=a.join("&")};function ss(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function wy(a,d){d&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(f,_){var R=_.toLowerCase();_!=R&&(pd(this,_),_d(this,R,f))},a)),a.j=d}function Iy(a,d){const f=new Pe;if(c.Image){const _=new Image;_.onload=y(xn,f,"TestLoadImage: loaded",!0,d,_),_.onerror=y(xn,f,"TestLoadImage: error",!1,d,_),_.onabort=y(xn,f,"TestLoadImage: abort",!1,d,_),_.ontimeout=y(xn,f,"TestLoadImage: timeout",!1,d,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function Ey(a,d){const f=new Pe,_=new AbortController,R=setTimeout(()=>{_.abort(),xn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(R),D.ok?xn(f,"TestPingServer: ok",!0,d):xn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),xn(f,"TestPingServer: error",!1,d)})}function xn(a,d,f,_,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),_(f)}catch{}}function Ty(){this.g=new Io}function by(a,d,f){const _=f||"";try{dd(a,function(R,D){let F=R;u(R)&&(F=ts(R)),d.push(_+D+"="+encodeURIComponent(F))})}catch(R){throw d.push(_+"type="+encodeURIComponent("_badmap")),R}}function So(a){this.l=a.Ub||null,this.j=a.eb||!1}A(So,ns),So.prototype.g=function(){return new Ro(this.l,this.j)},So.prototype.i=function(a){return function(){return a}}({});function Ro(a,d){Ee.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ro,Ee),n=Ro.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,ii(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function yd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?si(this):ii(this),this.readyState==3&&yd(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,si(this))},n.Qa=function(a){this.g&&(this.response=a,si(this))},n.ga=function(){this.g&&si(this)};function si(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ii(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function ii(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function vd(a){let d="";return te(a,function(f,_){d+=_,d+=":",d+=f,d+=`\r
`}),d}function Ic(a,d,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=vd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ve(a,d,f))}function Ce(a){Ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ce,Ee);var Ay=/^https?$/i,Sy=["POST","PUT"];n=Ce.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zt.g(),this.v=this.o?Xs(this.o):Xs(zt),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(D){wd(this,D);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var R in _)f.set(R,_[R]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())f.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),R=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Sy,d,void 0))||_||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,F]of f)this.g.setRequestHeader(D,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Td(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){wd(this,D)}};function wd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Id(a),Po(a)}function Id(a){a.A||(a.A=!0,We(a,"complete"),We(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,We(this,"complete"),We(this,"abort"),Po(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Po(this,!0)),Ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ed(this):this.bb())},n.bb=function(){Ed(this)};function Ed(a){if(a.h&&typeof o<"u"&&(!a.v[1]||an(a)!=4||a.Z()!=2)){if(a.u&&an(a)==4)Ws(a.Ea,0,a);else if(We(a,"readystatechange"),an(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var _;if(_=F===0){var R=String(a.D).match(hd)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),_=!Ay.test(R?R.toLowerCase():"")}f=_}if(f)We(a,"complete"),We(a,"success");else{a.m=6;try{var D=2<an(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Id(a)}}finally{Po(a)}}}}function Po(a,d){if(a.g){Td(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||We(a,"ready");try{f.onreadystatechange=_}catch{}}}function Td(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),wo(d)}};function bd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ry(a){const d={};a=(a.g&&2<=an(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(O(a[_]))continue;var f=E(a[_]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=d[R]||[];d[R]=D,D.push(f)}T(d,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oi(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Ad(a){this.Aa=0,this.i=[],this.j=new Pe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oi("baseRetryDelayMs",5e3,a),this.cb=oi("retryDelaySeedMs",1e4,a),this.Wa=oi("forwardChannelMaxRetries",2,a),this.wa=oi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new od(a&&a.concurrentRequestLimit),this.Da=new Ty,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ad.prototype,n.la=8,n.G=1,n.connect=function(a,d,f,_){ie(0),this.W=a,this.H=d||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=Vd(this,null,this.W),ko(this)};function Ec(a){if(Sd(a),a.G==3){var d=a.U++,f=on(a.I);if(ve(f,"SID",a.K),ve(f,"RID",d),ve(f,"TYPE","terminate"),ai(a,f),d=new At(a,a.j,d),d.L=2,d.v=Ao(on(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=d.v,f=!0),f||(d.g=Ld(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ht(d)}Nd(a)}function Co(a){a.g&&(bc(a),a.g.cancel(),a.g=null)}function Sd(a){Co(a),a.u&&(c.clearTimeout(a.u),a.u=null),Do(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ko(a){if(!ad(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ye||yo(),Tt||(Ye(),Tt=!0),He.add(d,a),a.B=0}}function Py(a,d){return cd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=oe(g(a.Ga,a,d),xd(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new At(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),b(D,this.S)):D=this.S),this.m!==null||this.O||(R.H=D,D=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Pd(this,R,d),f=on(this.I),ve(f,"RID",a),ve(f,"CVER",22),this.D&&ve(f,"X-HTTP-Session-Id",this.D),ai(this,f),D&&(this.O?d="headers="+encodeURIComponent(String(vd(D)))+"&"+d:this.m&&Ic(f,this.m,D)),wc(this.h,R),this.Ua&&ve(f,"TYPE","init"),this.P?(ve(f,"$req",d),ve(f,"SID","null"),R.T=!0,sn(R,f,null)):sn(R,f,d),this.G=2}}else this.G==3&&(a?Rd(this,a):this.i.length==0||ad(this.h)||Rd(this))};function Rd(a,d){var f;d?f=d.l:f=a.U++;const _=on(a.I);ve(_,"SID",a.K),ve(_,"RID",f),ve(_,"AID",a.T),ai(a,_),a.m&&a.o&&Ic(_,a.m,a.o),f=new At(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Pd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),wc(a.h,f),sn(f,_,d)}function ai(a,d){a.H&&te(a.H,function(f,_){ve(d,_,f)}),a.l&&dd({},function(f,_){ve(d,_,f)})}function Pd(a,d,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var R=a.i;let D=-1;for(;;){const F=["count="+f];D==-1?0<f?(D=R[0].g,F.push("ofs="+D)):D=0:F.push("ofs="+D);let ge=!0;for(let Xe=0;Xe<f;Xe++){let de=R[Xe].g;const nt=R[Xe].map;if(de-=D,0>de)D=Math.max(0,R[Xe].g-100),ge=!1;else try{by(nt,F,"req"+de+"_")}catch{_&&_(nt)}}if(ge){_=F.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,_}function Cd(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ye||yo(),Tt||(Ye(),Tt=!0),He.add(d,a),a.v=0}}function Tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=oe(g(a.Fa,a),xd(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,kd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=oe(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ie(10),Co(this),kd(this))};function bc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function kd(a){a.g=new At(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=on(a.qa);ve(d,"RID","rpc"),ve(d,"SID",a.K),ve(d,"AID",a.T),ve(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(d,"TO",a.ja),ve(d,"TYPE","xmlhttp"),ai(a,d),a.m&&a.o&&Ic(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ao(on(d)),f.m=null,f.P=!0,cr(f,a)}n.Za=function(){this.C!=null&&(this.C=null,Co(this),Tc(this),ie(19))};function Do(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Dd(a,d){var f=null;if(a.g==d){Do(a),bc(a),a.g=null;var _=2}else if(vc(a.h,d))f=d.D,ld(a.h,d),_=1;else return;if(a.G!=0){if(d.o)if(_==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var R=a.B;_=Q(),We(_,new ye(_,f)),ko(a)}else Cd(a);else if(R=d.s,R==3||R==0&&0<d.X||!(_==1&&Py(a,d)||_==2&&Tc(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),R){case 1:dr(a,5);break;case 4:dr(a,10);break;case 3:dr(a,6);break;default:dr(a,2)}}}function xd(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function dr(a,d){if(a.j.info("Error code "+d),d==2){var f=g(a.fb,a),_=a.Xa;const R=!_;_=new ur(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||To(_,"https"),Ao(_),R?Iy(_.toString(),f):Ey(_.toString(),f)}else ie(2);a.G=0,a.l&&a.l.sa(d),Nd(a),Sd(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function Nd(a){if(a.G=0,a.ka=[],a.l){const d=ud(a.h);(d.length!=0||a.i.length!=0)&&(P(a.ka,d),P(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Vd(a,d,f){var _=f instanceof ur?on(f):new ur(f);if(_.g!="")d&&(_.g=d+"."+_.g),bo(_,_.s);else{var R=c.location;_=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;var D=new ur(null);_&&To(D,_),d&&(D.g=d),R&&bo(D,R),f&&(D.l=f),_=D}return f=a.D,d=a.ya,f&&d&&ve(_,f,d),ve(_,"VER",a.la),ai(a,_),_}function Ld(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ce(new So({eb:f})):new Ce(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Md(){}n=Md.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xo(){}xo.prototype.g=function(a,d){return new St(a,d)};function St(a,d){Ee.call(this),this.g=new Ad(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!O(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new is(this)}A(St,Ee),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Ec(this.g)},St.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ts(a),a=f);d.i.push(new dy(d.Ya++,a)),d.G==3&&ko(d)},St.prototype.N=function(){this.g.l=null,delete this.j,Ec(this.g),delete this.g,St.aa.N.call(this)};function Od(a){rs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}A(Od,rs);function Fd(){N.call(this),this.status=1}A(Fd,N);function is(a){this.g=a}A(is,Md),is.prototype.ua=function(){We(this.g,"a")},is.prototype.ta=function(a){We(this.g,new Od(a))},is.prototype.sa=function(a){We(this.g,new Fd)},is.prototype.ra=function(){We(this.g,"b")},xo.prototype.createWebChannel=xo.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,$m=function(){return new xo},Um=function(){return Q()},Bm=L,rl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Te.NO_ERROR=0,Te.TIMEOUT=8,Te.HTTP_ERROR=6,Ho=Te,ut.COMPLETE="complete",Fm=ut,Zs.EventType=Cn,Cn.OPEN="a",Cn.CLOSE="b",Cn.ERROR="c",Cn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,_i=Zs,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,Om=Ce}).apply(typeof Lo<"u"?Lo:typeof self<"u"?self:typeof window<"u"?window:{});const ph="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Nl("@firebase/firestore");function ds(){return Cr.logLevel}function V(n,...e){if(Cr.logLevel<=ce.DEBUG){const t=e.map(Gl);Cr.debug(`Firestore (${Ms}): ${n}`,...t)}}function Ne(n,...e){if(Cr.logLevel<=ce.ERROR){const t=e.map(Gl);Cr.error(`Firestore (${Ms}): ${n}`,...t)}}function Fi(n,...e){if(Cr.logLevel<=ce.WARN){const t=e.map(Gl);Cr.warn(`Firestore (${Ms}): ${n}`,...t)}}function Gl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function G(n="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+n;throw Ne(e),new Error(e)}function J(n,e){n||G()}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(it.UNAUTHENTICATED))}shutdown(){}}class AE{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new TE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new it(e)}}class SE{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RE{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new SE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){J(this.o===void 0);const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new PE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=kE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function Es(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function qm(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Re(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Re(0,0))}static max(){return new Y(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class he extends Bi{construct(e,t,r){return new he(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new he(t)}static emptyPath(){return new he([])}}const DE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends Bi{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return DE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new B(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(he.fromString(e))}static fromName(e){return new $(he.fromString(e).popFirst(5))}static empty(){return new $(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new he(e.slice()))}}/**
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
 */class pa{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function sl(n){return n.fields.find(e=>e.kind===2)}function mr(n){return n.fields.filter(e=>e.kind!==2)}pa.UNKNOWN_ID=-1;class Wo{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ui{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ui(0,kt.min())}}function Km(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Re(t+1,0):new Re(t,r));return new kt(s,$.empty(),e)}function Gm(n){return new kt(n.readTime,n.key,-1)}class kt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new kt(Y.min(),$.empty(),-1)}static max(){return new kt(Y.max(),$.empty(),-1)}}function zl(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==zm)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(s=>s?C.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new C((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new C((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new tn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Ri(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Hl(r.target.error);this.V.reject(new Ri(e,s))}}static open(e,t,r,s){try{return new Oa(t,e.transaction(s,r))}catch(i){throw new Ri(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new NE(t)}}class Kn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Kn.S(Ke())===12.2&&Ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),pr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xl())return!1;if(Kn.v())return!0;const e=Ke(),t=Kn.S(e),r=0<t&&t<10,s=Wm(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Ri(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new B(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ri(e,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=Oa.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next(u=>(c.g(),u)).catch(u=>(c.abort(u),C.reject(u))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,u=l.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Wm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class xE{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return pr(this.B.delete())}}class Ri extends B{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Xn(n){return n.name==="IndexedDbTransactionError"}class NE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(V("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),pr(r)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),pr(this.store.add(e))}get(e){return pr(this.store.get(e)).next(t=>(t===void 0&&(t=null),V("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),pr(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),pr(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new C((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new C((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){V("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new C((r,s)=>{t.onerror=i=>{const o=Hl(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new C((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new xE(c),u=t(c.primaryKey,c.value,l);if(u instanceof C){const h=u.catch(p=>(l.done(),C.reject(p)));r.push(h)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>C.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function pr(n){return new C((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Hl(r.target.error);t(s)}})}let gh=!1;function Hl(n){const e=Kn.S(Ke());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return gh||(gh=!0,setTimeout(()=>{throw r},0)),r}}return n}class VE{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){V("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{V("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Xn(t)?V("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Yn(t)}await this.X(6e4)})}}class LE{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return C.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return V("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(V("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=Gm(i);zl(o,r)>0&&(r=o)}),new kt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class wt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wt.oe=-1;function Fa(n){return n==null}function $i(n){return n===0&&1/n==-1/0}function Qm(n){return typeof n=="number"&&Number.isInteger(n)&&!$i(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_h(e)),e=ME(n.get(t),e);return _h(e)}function ME(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function _h(n){return n+""}function Yt(n){const e=n.length;if(J(e>=2),e===2)return J(n.charAt(0)===""&&n.charAt(1)===""),he.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&G(),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:G()}i=o+2}return new he(r)}/**
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
 */const yh=["userId","batchId"];/**
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
 */function Qo(n,e){return[n,mt(e)]}function Jm(n,e,t){return[n,mt(e),t]}const OE={},FE=["prefixPath","collectionGroup","readTime","documentId"],BE=["prefixPath","collectionGroup","documentId"],UE=["collectionGroup","readTime","prefixPath","documentId"],$E=["canonicalId","targetId"],jE=["targetId","path"],qE=["path","targetId"],KE=["collectionId","parent"],GE=["indexId","uid"],zE=["uid","sequenceNumber"],HE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],WE=["indexId","uid","orderedDocumentKey"],QE=["userId","collectionPath","documentId"],JE=["userId","collectionPath","largestBatchId"],YE=["userId","collectionGroup","largestBatchId"],Ym=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],XE=[...Ym,"documentOverlays"],Xm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Zm=Xm,Wl=[...Zm,"indexConfiguration","indexState","indexEntries"],ZE=Wl,eT=[...Wl,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Hm{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Ge(n,e){const t=z(n);return Kn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ep(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ze(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wh(this.data.getIterator())}getIteratorFrom(e){return new wh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class wh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function as(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new It([])}unionWith(e){let t=new pe(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new It(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class tp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tp("Invalid base64 string: "+i):i}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const tT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(n){if(J(!!n),typeof n=="string"){let e=0;const t=tT.exec(n);if(J(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(n.seconds),nanos:be(n.nanos)}}function be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zn(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Jl(n){const e=n.mapValue.fields.__previous_value__;return Ql(e)?Jl(e):e}function ji(n){const e=yn(n.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t,r,s,i,o,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class kr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new kr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Jo={nullValue:"NULL_VALUE"};function Dr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ql(n)?4:np(n)?9007199254740991:Ba(n)?10:11:G()}function nn(n,e){if(n===e)return!0;const t=Dr(n);if(t!==Dr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ji(n).isEqual(ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yn(s.timestampValue),c=yn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return zn(s.bytesValue).isEqual(zn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),c=be(i.doubleValue);return o===c?$i(o)===$i(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Es(n.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(vh(o)!==vh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!nn(o[l],c[l])))return!1;return!0}(n,e);default:return G()}}function qi(n,e){return(n.values||[]).find(t=>nn(t,e))!==void 0}function Hn(n,e){if(n===e)return 0;const t=Dr(n),r=Dr(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=be(i.integerValue||i.doubleValue),l=be(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Ih(n.timestampValue,e.timestampValue);case 4:return Ih(ji(n),ji(e));case 5:return re(n.stringValue,e.stringValue);case 6:return function(i,o){const c=zn(i),l=zn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=re(c[u],l[u]);if(h!==0)return h}return re(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=re(be(i.latitude),be(o.latitude));return c!==0?c:re(be(i.longitude),be(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Eh(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,h;const p=i.fields||{},g=o.fields||{},y=(c=p.value)===null||c===void 0?void 0:c.arrayValue,A=(l=g.value)===null||l===void 0?void 0:l.arrayValue,k=re(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:Eh(y,A)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===jn.mapValue&&o===jn.mapValue)return 0;if(i===jn.mapValue)return 1;if(o===jn.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const g=re(l[p],h[p]);if(g!==0)return g;const y=Hn(c[l[p]],u[h[p]]);if(y!==0)return y}return re(l.length,h.length)}(n.mapValue,e.mapValue);default:throw G()}}function Ih(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=yn(n),r=yn(e),s=re(t.seconds,r.seconds);return s!==0?s:re(t.nanos,r.nanos)}function Eh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Hn(t[s],r[s]);if(i)return i}return re(t.length,r.length)}function Ts(n){return ol(n)}function ol(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=yn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return zn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ol(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ol(t.fields[o])}`;return s+"}"}(n.mapValue):G()}function Ki(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function al(n){return!!n&&"integerValue"in n}function Gi(n){return!!n&&"arrayValue"in n}function Th(n){return!!n&&"nullValue"in n}function bh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yo(n){return!!n&&"mapValue"in n}function Ba(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Pi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Pi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function np(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const rp={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function rT(n){return"nullValue"in n?Jo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ki(kr.empty(),$.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Ba(n)?rp:{mapValue:{}}:G()}function sT(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ki(kr.empty(),$.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?rp:"mapValue"in n?Ba(n)?{mapValue:{}}:jn:G()}function Ah(n,e){const t=Hn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Sh(n,e){const t=Hn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Yo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pi(t)}setAll(e){let t=Se.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Pi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Yo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){zr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ot(Pi(this.value))}}function sp(n){const e=[];return zr(n.fields,(t,r)=>{const s=new Se([t]);if(Yo(r)){const i=sp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ke(e,0,Y.min(),Y.min(),Y.min(),ot.empty(),0)}static newFoundDocument(e,t,r,s){return new ke(e,1,t,Y.min(),r,s,0)}static newNoDocument(e,t){return new ke(e,2,t,Y.min(),Y.min(),ot.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,Y.min(),Y.min(),ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bs{constructor(e,t){this.position=e,this.inclusive=t}}function Rh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),t.key):r=Hn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ph(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ga{constructor(e,t="asc"){this.field=e,this.dir=t}}function iT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ip{}class le extends ip{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new oT(e,t,r):t==="array-contains"?new lT(e,r):t==="in"?new dp(e,r):t==="not-in"?new uT(e,r):t==="array-contains-any"?new dT(e,r):new le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new aT(e,r):new cT(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Hn(t,this.value)):t!==null&&Dr(this.value)===Dr(t)&&this.matchesComparison(Hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class me extends ip{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new me(e,t)}matches(e){return As(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function As(n){return n.op==="and"}function cl(n){return n.op==="or"}function Yl(n){return op(n)&&As(n)}function op(n){for(const e of n.filters)if(e instanceof me)return!1;return!0}function ll(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+Ts(n.value);if(Yl(n))return n.filters.map(e=>ll(e)).join(",");{const e=n.filters.map(t=>ll(t)).join(",");return`${n.op}(${e})`}}function ap(n,e){return n instanceof le?function(r,s){return s instanceof le&&r.op===s.op&&r.field.isEqual(s.field)&&nn(r.value,s.value)}(n,e):n instanceof me?function(r,s){return s instanceof me&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&ap(o,s.filters[c]),!0):!1}(n,e):void G()}function cp(n,e){const t=n.filters.concat(e);return me.create(t,n.op)}function lp(n){return n instanceof le?function(t){return`${t.field.canonicalString()} ${t.op} ${Ts(t.value)}`}(n):n instanceof me?function(t){return t.op.toString()+" {"+t.getFilters().map(lp).join(" ,")+"}"}(n):"Filter"}class oT extends le{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class aT extends le{constructor(e,t){super(e,"in",t),this.keys=up("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cT extends le{constructor(e,t){super(e,"not-in",t),this.keys=up("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function up(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class lT extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gi(t)&&qi(t.arrayValue,this.value)}}class dp extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qi(this.value.arrayValue,t)}}class uT extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qi(this.value.arrayValue,t)}}class dT extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qi(this.value.arrayValue,r))}}/**
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
 */class hT{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function ul(n,e=null,t=[],r=[],s=null,i=null,o=null){return new hT(n,e,t,r,s,i,o)}function xr(n){const e=z(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ll(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ts(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ts(r)).join(",")),e.ue=t}return e.ue}function io(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ap(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ph(n.startAt,e.startAt)&&Ph(n.endAt,e.endAt)}function _a(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ya(n,e){return n.filters.filter(t=>t instanceof le&&t.field.isEqual(e))}function Ch(n,e,t){let r=Jo,s=!0;for(const i of ya(n,e)){let o=Jo,c=!0;switch(i.op){case"<":case"<=":o=rT(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Jo}Ah({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Ah({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function kh(n,e,t){let r=jn,s=!0;for(const i of ya(n,e)){let o=jn,c=!0;switch(i.op){case">=":case">":o=sT(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=jn}Sh({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Sh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function hp(n,e,t,r,s,i,o,c){return new Os(n,e,t,r,s,i,o,c)}function Ua(n){return new Os(n)}function Dh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fp(n){return n.collectionGroup!==null}function Ci(n){const e=z(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new pe(Se.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ga(i,r))}),t.has(Se.keyField().canonicalString())||e.ce.push(new ga(Se.keyField(),r))}return e.ce}function Ct(n){const e=z(n);return e.le||(e.le=fT(e,Ci(n))),e.le}function fT(n,e){if(n.limitType==="F")return ul(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ga(s.field,i)});const t=n.endAt?new bs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new bs(n.startAt.position,n.startAt.inclusive):null;return ul(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function dl(n,e){const t=n.filters.concat([e]);return new Os(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function hl(n,e,t){return new Os(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $a(n,e){return io(Ct(n),Ct(e))&&n.limitType===e.limitType}function mp(n){return`${xr(Ct(n))}|lt:${n.limitType}`}function hs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>lp(s)).join(", ")}]`),Fa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ts(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ts(s)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function oo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Rh(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Ci(r),s)||r.endAt&&!function(o,c,l){const u=Rh(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Ci(r),s))}(n,e)}function pp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gp(n){return(e,t)=>{let r=!1;for(const s of Ci(n)){const i=mT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mT(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Hn(l,u):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ep(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=new _e($.comparator);function Rt(){return pT}const _p=new _e($.comparator);function yi(...n){let e=_p;for(const t of n)e=e.insert(t.key,t);return e}function yp(n){let e=_p;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xt(){return ki()}function vp(){return ki()}function ki(){return new Zn(n=>n.toString(),(n,e)=>n.isEqual(e))}const gT=new _e($.comparator),_T=new pe($.comparator);function ae(...n){let e=_T;for(const t of n)e=e.add(t);return e}const yT=new pe(re);function Xl(){return yT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(e)?"-0":e}}function wp(n){return{integerValue:""+n}}function vT(n,e){return Qm(e)?wp(e):Zl(n,e)}/**
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
 */class ja{constructor(){this._=void 0}}function wT(n,e,t){return n instanceof Ss?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ql(i)&&(i=Jl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Nr?Ep(n,e):n instanceof Rs?Tp(n,e):function(s,i){const o=Ip(s,i),c=xh(o)+xh(s.Pe);return al(o)&&al(s.Pe)?wp(c):Zl(s.serializer,c)}(n,e)}function IT(n,e,t){return n instanceof Nr?Ep(n,e):n instanceof Rs?Tp(n,e):t}function Ip(n,e){return n instanceof zi?function(r){return al(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ss extends ja{}class Nr extends ja{constructor(e){super(),this.elements=e}}function Ep(n,e){const t=bp(e);for(const r of n.elements)t.some(s=>nn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Rs extends ja{constructor(e){super(),this.elements=e}}function Tp(n,e){let t=bp(e);for(const r of n.elements)t=t.filter(s=>!nn(s,r));return{arrayValue:{values:t}}}class zi extends ja{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function xh(n){return be(n.integerValue||n.doubleValue)}function bp(n){return Gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.field=e,this.transform=t}}function ET(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Nr&&s instanceof Nr||r instanceof Rs&&s instanceof Rs?Es(r.elements,s.elements,nn):r instanceof zi&&s instanceof zi?nn(r.Pe,s.Pe):r instanceof Ss&&s instanceof Ss}(n.transform,e.transform)}class TT{constructor(e,t){this.version=e,this.transformResults=t}}class at{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qa{}function Ap(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ka(n.key,at.none()):new Fs(n.key,n.data,at.none());{const t=n.data,r=ot.empty();let s=new pe(Se.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new In(n.key,r,new It(s.toArray()),at.none())}}function bT(n,e,t){n instanceof Fs?function(s,i,o){const c=s.value.clone(),l=Vh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof In?function(s,i,o){if(!Xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Vh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Sp(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Di(n,e,t,r){return n instanceof Fs?function(i,o,c,l){if(!Xo(i.precondition,o))return c;const u=i.value.clone(),h=Lh(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof In?function(i,o,c,l){if(!Xo(i.precondition,o))return c;const u=Lh(i.fieldTransforms,l,o),h=o.data;return h.setAll(Sp(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return Xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function AT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ip(r.transform,s||null);i!=null&&(t===null&&(t=ot.empty()),t.set(r.field,i))}return t||null}function Nh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Es(r,s,(i,o)=>ET(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fs extends qa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class In extends qa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Vh(n,e,t){const r=new Map;J(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,IT(o,c,t[s]))}return r}function Lh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,wT(i,o,e))}return r}class Ka extends qa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rp extends qa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&bT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Di(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Di(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=vp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Ap(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ae())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(t,r)=>Nh(t,r))&&Es(this.baseMutations,e.baseMutations,(t,r)=>Nh(t,r))}}class nu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length);let s=function(){return gT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new nu(e,t,r,s)}}/**
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
 */class ru{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ST{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,ue;function RT(n){switch(n){default:return G();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Pp(n){if(n===void 0)return Ne("GRPC error has no .code"),x.UNKNOWN;switch(n){case Fe.OK:return x.OK;case Fe.CANCELLED:return x.CANCELLED;case Fe.UNKNOWN:return x.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return x.INTERNAL;case Fe.UNAVAILABLE:return x.UNAVAILABLE;case Fe.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Fe.NOT_FOUND:return x.NOT_FOUND;case Fe.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Fe.ABORTED:return x.ABORTED;case Fe.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Fe.DATA_LOSS:return x.DATA_LOSS;default:return G()}}(ue=Fe||(Fe={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function PT(){return new TextEncoder}/**
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
 */const CT=new Ir([4294967295,4294967295],0);function Mh(n){const e=PT().encode(n),t=new Mm;return t.update(e),new Uint8Array(t.digest())}function Oh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ir([t,r],0),new Ir([s,i],0)]}class su{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new vi(`Invalid padding: ${t}`);if(r<0)throw new vi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new vi(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ir.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Ir.fromNumber(r)));return s.compare(CT)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Mh(e),[r,s]=Oh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new su(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Mh(e),[r,s]=Oh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ao(Y.min(),s,new _e(re),Rt(),ae())}}class co{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new co(r,t,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Cp{constructor(e,t){this.targetId=e,this.me=t}}class kp{constructor(e,t,r=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Fh{constructor(){this.fe=0,this.ge=Uh(),this.pe=Ve.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ae(),t=ae(),r=ae();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:G()}}),new co(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Uh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rt(),this.qe=Bh(),this.Qe=new _e(re)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(_a(i))if(r===0){const o=new $(i.path);this.Ue(t,o,ke.newNoDocument(o,Y.min()))}else J(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=zn(r).toUint8Array()}catch(l){if(l instanceof tp)return Fi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new su(o,s,i)}catch(l){return Fi(l instanceof vi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&_a(c.target)){const l=new $(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ke.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=ae();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ao(e,t,this.Qe,this.ke,r);return this.ke=Rt(),this.qe=Bh(),this.Qe=new _e(re),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Fh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pe(re),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Fh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Bh(){return new _e($.comparator)}function Uh(){return new _e($.comparator)}const DT={asc:"ASCENDING",desc:"DESCENDING"},xT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NT={and:"AND",or:"OR"};class VT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fl(n,e){return n.useProto3Json||Fa(e)?e:{value:e}}function Ps(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function LT(n,e){return Ps(n,e.toTimestamp())}function pt(n){return J(!!n),Y.fromTimestamp(function(t){const r=yn(t);return new Re(r.seconds,r.nanos)}(n))}function iu(n,e){return ml(n,e).canonicalString()}function ml(n,e){const t=function(s){return new he(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xp(n){const e=he.fromString(n);return J($p(e)),e}function va(n,e){return iu(n.databaseId,e.path)}function Er(n,e){const t=xp(e);if(t.get(1)!==n.databaseId.projectId)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(Lp(t))}function Np(n,e){return iu(n.databaseId,e)}function Vp(n){const e=xp(n);return e.length===4?he.emptyPath():Lp(e)}function pl(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lp(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $h(n,e,t){return{name:va(n,e),fields:t.value.mapValue.fields}}function MT(n,e,t){const r=Er(n,e.name),s=pt(e.updateTime),i=e.createTime?pt(e.createTime):Y.min(),o=new ot({mapValue:{fields:e.fields}}),c=ke.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function OT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(J(h===void 0||typeof h=="string"),Ve.fromBase64String(h||"")):(J(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ve.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?x.UNKNOWN:Pp(u.code);return new B(h,u.message||"")}(o);t=new kp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Er(n,r.document.name),i=pt(r.document.updateTime),o=r.document.createTime?pt(r.document.createTime):Y.min(),c=new ot({mapValue:{fields:r.document.fields}}),l=ke.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];t=new Zo(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Er(n,r.document),i=r.readTime?pt(r.readTime):Y.min(),o=ke.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Zo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Er(n,r.document),i=r.removedTargetIds||[];t=new Zo([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ST(s,i),c=r.targetId;t=new Cp(c,o)}}return t}function wa(n,e){let t;if(e instanceof Fs)t={update:$h(n,e.key,e.value)};else if(e instanceof Ka)t={delete:va(n,e.key)};else if(e instanceof In)t={update:$h(n,e.key,e.data),updateMask:qT(e.fieldMask)};else{if(!(e instanceof Rp))return G();t={verify:va(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ss)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Nr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Rs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zi)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw G()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:LT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(n,e.precondition)),t}function gl(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?at.updateTime(pt(i.updateTime)):i.exists!==void 0?at.exists(i.exists):at.none()}(e.currentDocument):at.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)J(c.setToServerValue==="REQUEST_TIME"),l=new Ss;else if("appendMissingElements"in c){const h=c.appendMissingElements.values||[];l=new Nr(h)}else if("removeAllFromArray"in c){const h=c.removeAllFromArray.values||[];l=new Rs(h)}else"increment"in c?l=new zi(o,c.increment):G();const u=Se.fromServerFormat(c.fieldPath);return new eu(u,l)}(n,s)):[];if(e.update){e.update.name;const s=Er(n,e.update.name),i=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new It(u.map(h=>Se.fromServerFormat(h)))}(e.updateMask);return new In(s,i,o,t,r)}return new Fs(s,i,t,r)}if(e.delete){const s=Er(n,e.delete);return new Ka(s,t)}if(e.verify){const s=Er(n,e.verify);return new Rp(s,t)}return G()}function FT(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?pt(s.updateTime):pt(i);return o.isEqual(Y.min())&&(o=pt(i)),new TT(o,s.transformResults||[])}(t,e))):[]}function Mp(n,e){return{documents:[Np(n,e.path)]}}function Op(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Np(n,s);const i=function(u){if(u.length!==0)return Up(me.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:fs(g.field),direction:UT(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=fl(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:s}}function Fp(n){let e=Vp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(p){const g=Bp(p);return g instanceof me&&Yl(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(A){return new ga(ms(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Fa(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,y=p.values||[];return new bs(y,g)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const g=!p.before,y=p.values||[];return new bs(y,g)}(t.endAt)),hp(e,s,o,i,c,"F",l,u)}function BT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ms(t.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ms(t.unaryFilter.field);return le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ms(t.unaryFilter.field);return le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(t.unaryFilter.field);return le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(t){return le.create(ms(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return me.create(t.compositeFilter.filters.map(r=>Bp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(n):G()}function UT(n){return DT[n]}function $T(n){return xT[n]}function jT(n){return NT[n]}function fs(n){return{fieldPath:n.canonicalString()}}function ms(n){return Se.fromServerFormat(n.fieldPath)}function Up(n){return n instanceof le?function(t){if(t.op==="=="){if(bh(t.value))return{unaryFilter:{field:fs(t.field),op:"IS_NAN"}};if(Th(t.value))return{unaryFilter:{field:fs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bh(t.value))return{unaryFilter:{field:fs(t.field),op:"IS_NOT_NAN"}};if(Th(t.value))return{unaryFilter:{field:fs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(t.field),op:$T(t.op),value:t.value}}}(n):n instanceof me?function(t){const r=t.getFilters().map(s=>Up(s));return r.length===1?r[0]:{compositeFilter:{op:jT(t.op),filters:r}}}(n):G()}function qT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $p(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,r,s,i=Y.min(),o=Y.min(),c=Ve.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.ct=e}}function KT(n,e){let t;if(e.document)t=MT(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=$.fromSegments(e.noDocument.path),s=Lr(e.noDocument.readTime);t=ke.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const r=$.fromSegments(e.unknownDocument.path),s=Lr(e.unknownDocument.version);t=ke.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Re(s[0],s[1]);return Y.fromTimestamp(i)}(e.readTime)),t}function jh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ia(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:va(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Ps(i,o.version.toTimestamp()),createTime:Ps(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Vr(e.version)};else{if(!e.isUnknownDocument())return G();r.unknownDocument={path:t.path.toArray(),version:Vr(e.version)}}return r}function Ia(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Vr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Lr(n){const e=new Re(n.seconds,n.nanoseconds);return Y.fromTimestamp(e)}function gr(n,e){const t=(e.baseMutations||[]).map(i=>gl(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>gl(n.ct,i)),s=Re.fromMillis(e.localWriteTimeMs);return new tu(e.batchId,s,t,r)}function wi(n){const e=Lr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Lr(n.lastLimboFreeSnapshotVersion):Y.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return J(i.documents.length===1),Ct(Ua(Vp(i.documents[0])))}(n.query):function(i){return Ct(Fp(i))}(n.query),new hn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ve.fromBase64String(n.resumeToken))}function qp(n,e){const t=Vr(e.snapshotVersion),r=Vr(e.lastLimboFreeSnapshotVersion);let s;s=_a(e.target)?Mp(n.ct,e.target):Op(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:xr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Kp(n){const e=Fp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hl(e,e.limit,"L"):e}function Vc(n,e){return new ru(e.largestBatchId,gl(n.ct,e.overlayMutation))}function qh(n,e){const t=e.path.lastSegment();return[n,mt(e.path.popLast()),t]}function Kh(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Vr(r.readTime),documentKey:mt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{getBundleMetadata(e,t){return Gh(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Lr(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Gh(e).put(function(s){return{bundleId:s.id,createTime:Vr(pt(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return zh(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Kp(i.bundledQuery),readTime:Lr(i.readTime)}}(r)})}saveNamedQuery(e,t){return zh(e).put(function(s){return{name:s.name,readTime:Vr(pt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Gh(n){return Ge(n,"bundles")}function zh(n){return Ge(n,"namedQueries")}/**
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
 */class Ga{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Ga(e,r)}getOverlay(e,t){return ci(e).get(qh(this.userId,t)).next(r=>r?Vc(this.serializer,r):null)}getOverlays(e,t){const r=Xt();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new ru(t,o);s.push(this.ht(e,c))}),C.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(mt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(ci(e).j("collectionPathOverlayIndex",c))}),C.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Xt(),i=mt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ci(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const u=Vc(this.serializer,l);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=Xt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ci(e).J({index:"collectionGroupOverlayIndex",range:c},(l,u,h)=>{const p=Vc(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>i)}ht(e,t){return ci(e).put(function(s,i,o){const[c,l,u]=qh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:wa(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function ci(n){return Ge(n,"documentOverlays")}/**
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
 */class zT{Pt(e){return Ge(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ve.fromUint8Array(r):Ve.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class _r{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(be(e.integerValue));else if("doubleValue"in e){const r=be(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),$i(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=yn(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(zn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?np(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Ba(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):G()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(be(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),$.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}_r.vt=new _r;function HT(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Hh(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=HT(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class WT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Hh(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Hh(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class QT{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class JT{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class li{constructor(){this.jt=new WT,this.Ht=new QT(this.jt),this.Jt=new JT(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class yr{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new yr(this.indexId,this.documentKey,this.arrayValue,r)}}function Vn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Wh(n.arrayValue,e.arrayValue),t!==0?t:(t=Wh(n.directionalValue,e.directionalValue),t!==0?t:$.comparator(n.documentKey,e.documentKey)))}function Wh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Qh{constructor(e){this.Xt=new pe((t,r)=>Se.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(J(e.collectionGroup===this.collectionId),this.nn)return!1;const t=sl(e);if(t!==void 0&&!this.sn(t))return!1;const r=mr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new pe(Se.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Wo(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Wo(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Wo(r.field,r.dir==="asc"?0:1)));return new pa(pa.UNKNOWN_ID,this.collectionId,t,Ui.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Gp(n){var e,t;if(J(n instanceof le||n instanceof me),n instanceof le){if(n instanceof dp){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>le.create(n.field,"==",i)))||[];return me.create(s,"or")}return n}const r=n.filters.map(s=>Gp(s));return me.create(r,n.op)}function YT(n){if(n.getFilters().length===0)return[];const e=vl(Gp(n));return J(zp(e)),_l(e)||yl(e)?[e]:e.getFilters()}function _l(n){return n instanceof le}function yl(n){return n instanceof me&&Yl(n)}function zp(n){return _l(n)||yl(n)||function(t){if(t instanceof me&&cl(t)){for(const r of t.getFilters())if(!_l(r)&&!yl(r))return!1;return!0}return!1}(n)}function vl(n){if(J(n instanceof le||n instanceof me),n instanceof le)return n;if(n.filters.length===1)return vl(n.filters[0]);const e=n.filters.map(r=>vl(r));let t=me.create(e,n.op);return t=Ea(t),zp(t)?t:(J(t instanceof me),J(As(t)),J(t.filters.length>1),t.filters.reduce((r,s)=>ou(r,s)))}function ou(n,e){let t;return J(n instanceof le||n instanceof me),J(e instanceof le||e instanceof me),t=n instanceof le?e instanceof le?function(s,i){return me.create([s,i],"and")}(n,e):Jh(n,e):e instanceof le?Jh(e,n):function(s,i){if(J(s.filters.length>0&&i.filters.length>0),As(s)&&As(i))return cp(s,i.getFilters());const o=cl(s)?s:i,c=cl(s)?i:s,l=o.filters.map(u=>ou(u,c));return me.create(l,"or")}(n,e),Ea(t)}function Jh(n,e){if(As(e))return cp(e,n.getFilters());{const t=e.filters.map(r=>ou(n,r));return me.create(t,"or")}}function Ea(n){if(J(n instanceof le||n instanceof me),n instanceof le)return n;const e=n.getFilters();if(e.length===1)return Ea(e[0]);if(op(n))return n;const t=e.map(s=>Ea(s)),r=[];return t.forEach(s=>{s instanceof le?r.push(s):s instanceof me&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:me.create(r,n.op)}/**
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
 */class XT{constructor(){this.un=new au}addToCollectionParentIndex(e,t){return this.un.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(kt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(kt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class au{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new pe(he.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pe(he.comparator)).toArray()}}/**
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
 */const Oo=new Uint8Array(0);class ZT{constructor(e,t){this.databaseId=t,this.cn=new au,this.ln=new Zn(r=>xr(r),(r,s)=>io(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:mt(s)};return Yh(e).put(i)}return C.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[qm(t),""],!1,!0);return Yh(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Yt(o.parent))}return r})}addFieldIndex(e,t){const r=ui(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=ls(e);return i.next(c=>{o.put(Kh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=ui(e),s=ls(e),i=cs(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ui(e),r=cs(e),s=ls(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return C.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Qh(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=cs(e);let s=!0;const i=new Map;return C.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=ae();const c=[];return C.forEach(i,(l,u)=>{V("IndexedDbIndexManager",`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(l)} to execute ${xr(t)}`);const h=function(U,H){const se=sl(H);if(se===void 0)return null;for(const te of ya(U,se.fieldPath))switch(te.op){case"array-contains-any":return te.value.arrayValue.values||[];case"array-contains":return[te.value]}return null}(u,l),p=function(U,H){const se=new Map;for(const te of mr(H))for(const T of ya(U,te.fieldPath))switch(T.op){case"==":case"in":se.set(te.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return se.set(te.fieldPath.canonicalString(),T.value),Array.from(se.values())}return null}(u,l),g=function(U,H){const se=[];let te=!0;for(const T of mr(H)){const v=T.kind===0?Ch(U,T.fieldPath,U.startAt):kh(U,T.fieldPath,U.startAt);se.push(v.value),te&&(te=v.inclusive)}return new bs(se,te)}(u,l),y=function(U,H){const se=[];let te=!0;for(const T of mr(H)){const v=T.kind===0?kh(U,T.fieldPath,U.endAt):Ch(U,T.fieldPath,U.endAt);se.push(v.value),te&&(te=v.inclusive)}return new bs(se,te)}(u,l),A=this.In(l,u,g),k=this.In(l,u,y),P=this.Tn(l,u,p),M=this.En(l.indexId,h,A,g.inclusive,k,y.inclusive,P);return C.forEach(M,O=>r.G(O,t.limit).next(U=>{U.forEach(H=>{const se=$.fromSegments(H.documentKey);o.has(se)||(o=o.add(se),c.push(se))})}))}).next(()=>c)}return C.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=YT(me.create(e.filters,"and")).map(r=>ul(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),h=[];for(let p=0;p<l;++p){const g=t?this.dn(t[p/u]):Oo,y=this.An(e,g,r[p%u],s),A=this.Rn(e,g,i[p%u],o),k=c.map(P=>this.An(e,g,P,!0));h.push(...this.createRange(y,A,k))}return h}An(e,t,r,s){const i=new yr(e,$.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new yr(e,$.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new Qh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return C.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new pe(Se.comparator),h=!1;for(const p of l.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?h=!0:u=u.add(g.field));for(const p of l.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(h?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new li;for(const s of mr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);_r.vt.It(i,o)}return r.zt()}dn(e){const t=new li;return _r.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new li;return _r.vt.It(Ki(this.databaseId,t),r.Yt(function(i){const o=mr(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new li);let i=0;for(const o of mr(e)){const c=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&Gi(c))s=this.gn(s,o,c);else{const u=l.Yt(o.kind);_r.vt.It(c,u)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new li;l.seed(c.zt()),_r.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof le&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ui(e),s=ls(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return C.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(h,p){const g=p?new Ui(p.sequenceNumber,new kt(Lr(p.readTime),new $(Yt(p.documentKey)),p.largestBatchId)):Ui.empty(),y=h.fields.map(([A,k])=>new Wo(Se.fromServerFormat(A),k));return new pa(h.indexId,h.collectionGroup,y,g)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:re(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=ui(e),i=ls(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>C.forEach(c,l=>i.put(Kh(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return C.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?C.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),C.forEach(c,l=>this.wn(e,s,l).next(u=>{const h=this.Sn(i,l);return u.isEqual(h)?C.resolve():this.bn(e,i,l,u,h)}))))})}Dn(e,t,r,s){return cs(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return cs(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=cs(e);let i=new pe(Vn);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{i=i.add(new yr(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let r=new pe(Vn);const s=this.Vn(t,e);if(s==null)return r;const i=sl(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Gi(o))for(const c of o.arrayValue.values||[])r=r.add(new yr(t.indexId,e.key,this.dn(c),s))}else r=r.add(new yr(t.indexId,e.key,Oo,s));return r}bn(e,t,r,s,i){V("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,u,h,p,g){const y=l.getIterator(),A=u.getIterator();let k=as(y),P=as(A);for(;k||P;){let M=!1,O=!1;if(k&&P){const U=h(k,P);U<0?O=!0:U>0&&(M=!0)}else k!=null?O=!0:M=!0;M?(p(P),P=as(A)):O?(g(k),k=as(y)):(k=as(y),P=as(A))}}(s,i,Vn,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),C.waitFor(o)}yn(e){let t=1;return ls(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Vn(o,c)).filter((o,c,l)=>!c||Vn(o,l[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=Vn(o,e),l=Vn(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Oo,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Oo,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return Vn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Xh)}getMinOffset(e,t){return C.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||G())).next(Xh)}}function Yh(n){return Ge(n,"collectionParents")}function cs(n){return Ge(n,"indexEntries")}function ui(n){return Ge(n,"indexConfiguration")}function ls(n){return Ge(n,"indexState")}function Xh(n){J(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;zl(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new kt(e.readTime,e.documentKey,t)}/**
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
 */const Zh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.J({range:o},(h,p,g)=>(c++,g.delete()));i.push(l.next(()=>{J(c===1)}));const u=[];for(const h of t.mutations){const p=Jm(e,h.key.path,t.batchId);i.push(s.delete(p)),u.push(h.key)}return C.waitFor(i).next(()=>u)}function Ta(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw G();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(41943040,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);class za{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){J(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new za(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ln(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=ps(e),o=Ln(e);return o.add({}).next(c=>{J(typeof c=="number");const l=new tu(c,t,r,s),u=function(y,A,k){const P=k.baseMutations.map(O=>wa(y.ct,O)),M=k.mutations.map(O=>wa(y.ct,O));return{userId:A,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:P,mutations:M}}(this.serializer,this.userId,l),h=[];let p=new pe((g,y)=>re(g.canonicalString(),y.canonicalString()));for(const g of s){const y=Jm(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),h.push(o.put(u)),h.push(i.put(y,OE))}return p.forEach(g=>{h.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),C.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return Ln(e).get(t).next(r=>r?(J(r.userId===this.userId),gr(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?C.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Ln(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(J(c.batchId>=r),i=gr(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ln(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ln(e).U("userMutationsIndex",t).next(r=>r.map(s=>gr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Qo(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return ps(e).J({range:s},(o,c,l)=>{const[u,h,p]=o,g=Yt(h);if(u===this.userId&&t.path.isEqual(g))return Ln(e).get(p).next(y=>{if(!y)throw G();J(y.userId===this.userId),i.push(gr(this.serializer,y))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(re);const s=[];return t.forEach(i=>{const o=Qo(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=ps(e).J({range:c},(u,h,p)=>{const[g,y,A]=u,k=Yt(y);g===this.userId&&i.path.isEqual(k)?r=r.add(A):p.done()});s.push(l)}),C.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Qo(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new pe(re);return ps(e).J({range:o},(l,u,h)=>{const[p,g,y]=l,A=Yt(g);p===this.userId&&r.isPrefixOf(A)?A.length===s&&(c=c.add(y)):h.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Ln(e).get(i).next(o=>{if(o===null)throw G();J(o.userId===this.userId),r.push(gr(this.serializer,o))}))}),C.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Hp(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),C.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return C.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return ps(e).J({range:r},(i,o,c)=>{if(i[0]===this.userId){const l=Yt(i[1]);s.push(l)}else c.done()}).next(()=>{J(s.length===0)})})}containsKey(e,t){return Wp(e,this.userId,t)}Nn(e){return Qp(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Wp(n,e,t){const r=Qo(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ps(n).J({range:i,H:!0},(c,l,u)=>{const[h,p,g]=c;h===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Ln(n){return Ge(n,"mutations")}function ps(n){return Ge(n,"documentMutations")}function Qp(n){return Ge(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Mr(0)}static kn(){return new Mr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Mr(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Y.fromTimestamp(new Re(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>us(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return us(e).J((o,c)=>{const l=wi(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>C.waitFor(i)).next(()=>s)}forEachTarget(e,t){return us(e).J((r,s)=>{const i=wi(s);t(i)})}qn(e){return ef(e).get("targetGlobalKey").next(t=>(J(t!==null),t))}Qn(e,t){return ef(e).put("targetGlobalKey",t)}Kn(e,t){return us(e).put(qp(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=xr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return us(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const u=wi(c);io(t,u.target)&&(i=u,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Un(e);return t.forEach(o=>{const c=mt(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),C.waitFor(s)}removeMatchingKeys(e,t,r){const s=Un(e);return C.forEach(t,i=>{const o=mt(i.path);return C.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Un(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Un(e);let i=ae();return s.J({range:r,H:!0},(o,c,l)=>{const u=Yt(o[1]),h=new $(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const r=mt(t.path),s=IDBKeyRange.bound([r],[qm(r)],!1,!0);let i=0;return Un(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ot(e,t){return us(e).get(t).next(r=>r?wi(r):null)}}function us(n){return Ge(n,"targets")}function ef(n){return Ge(n,"targetGlobal")}function Un(n){return Ge(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf([n,e],[t,r]){const s=re(n,t);return s===0?re(e,r):s}class tb{constructor(e){this.Un=e,this.buffer=new pe(tf),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();tf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xn(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Yn(t)}await this.Hn(3e5)})}}class rb{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(wt.oe);const r=new tb(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Zh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ds()<=ce.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function sb(n,e){return new rb(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t){this.db=e,this.garbageCollector=sb(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return Fo(e,r)}removeReference(e,t,r){return Fo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Fo(e,t)}nr(e,t){return function(s,i){let o=!1;return Qp(s).Y(c=>Wp(s,c,i).next(l=>(l&&(o=!0),C.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Y.min()),Un(e).delete(function(p){return[0,mt(p.path)]}(o))))});s.push(l)}}).next(()=>C.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Fo(e,t)}tr(e,t){const r=Un(e);let s,i=wt.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:u})=>{o===0?(i!==wt.oe&&t(new $(Yt(s)),i),i=u,s=l):i=wt.oe}).next(()=>{i!==wt.oe&&t(new $(Yt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Fo(n,e){return Un(n).put(function(r,s){return{targetId:0,path:mt(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.changes=new Zn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return hr(e).put(r)}removeEntry(e,t,r){return hr(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Ia(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=ke.newInvalidDocument(t);return hr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(di(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:ke.newInvalidDocument(t)};return hr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(di(t))},(s,i)=>{r={document:this.ir(t,i),size:Ta(i)}}).next(()=>r)}getEntries(e,t){let r=Rt();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=Rt(),s=new _e($.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);r=r.insert(i,c),s=s.insert(i,Ta(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return C.resolve();let s=new pe(sf);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(di(s.first()),di(s.last())),o=s.getIterator();let c=o.getNext();return hr(e).J({index:"documentKeyIndex",range:i},(l,u,h)=>{const p=$.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&sf(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,u),c=o.hasNext()?o.getNext():null),c?h.$(di(c)):h.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Ia(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return hr(e).U(IDBKeyRange.bound(c,l,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let h=Rt();for(const p of u){const g=this.ir($.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(oo(t,g)||s.has(g.key))&&(h=h.insert(g.key,g))}return h})}getAllFromCollectionGroup(e,t,r,s){let i=Rt();const o=rf(t,r),c=rf(t,kt.max());return hr(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,u,h)=>{const p=this.ir($.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&h.done()}).next(()=>i)}newChangeBuffer(e){return new ab(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return nf(e).get("remoteDocumentGlobalKey").next(t=>(J(!!t),t))}rr(e,t){return nf(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=KT(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Y.min())))return r}return ke.newInvalidDocument(e)}}function Yp(n){return new ob(n)}class ab extends Jp{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Zn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new pe((i,o)=>re(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=jh(this.cr.serializer,o);s=s.add(i.path.popLast());const u=Ta(l);r+=u-c.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=jh(this.cr.serializer,o.convertToNoDocument(Y.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),C.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function nf(n){return Ge(n,"remoteDocumentGlobal")}function hr(n){return Ge(n,"remoteDocumentsV14")}function di(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function rf(n,e){const t=e.documentKey.path.toArray();return[n,Ia(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function sf(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=re(t[i],r[i]),s)return s;return s=re(t.length,r.length),s||(s=re(t[t.length-2],r[r.length-2]),s||re(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Di(r.mutation,s,It.empty(),Re.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ae()){const s=Xt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=yi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Xt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ae()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=Rt();const o=ki(),c=function(){return ki()}();return t.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof In)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Di(h.mutation,u,h.mutation.getFieldMask(),Re.now())):o.set(u.key,It.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var p;return c.set(u,new cb(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ki();let s=new _e((o,c)=>o-c),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let h=r.get(l)||It.empty();h=c.applyToLocalView(u,h),r.set(l,h);const p=(s.get(c.batchId)||ae()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,p=vp();h.forEach(g=>{if(!i.has(g)){const y=Ap(t.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(Xt());let c=-1,l=i;return o.next(u=>C.forEach(u,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(h)?C.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ae())).next(h=>({batchId:c,changes:yp(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=yi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=yi();return this.indexManager.getCollectionParents(e,i).next(c=>C.forEach(c,l=>{const u=function(p,g){return new Os(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,ke.newInvalidDocument(h)))});let c=yi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Di(h.mutation,u,It.empty(),Re.now()),oo(t,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return C.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:pt(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Kp(s.bundledQuery),readTime:pt(s.readTime)}}(t)),C.resolve()}}/**
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
 */class ub{constructor(){this.overlays=new _e($.comparator),this.Ir=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xt();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=Xt(),i=t.length+1,o=new $(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new _e((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Xt(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=Xt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return C.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ru(t,r));let i=this.Ir.get(t);i===void 0&&(i=ae(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class db{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.Tr=new pe(Qe.Er),this.dr=new pe(Qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Qe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Qe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new he([])),r=new Qe(t,e),s=new Qe(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new he([])),r=new Qe(t,e),s=new Qe(t,e+1);let i=ae();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Qe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||re(e.wr,t.wr)}static Ar(e,t){return re(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new pe(Qe.Er)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tu(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Qe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,t){return C.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Qe(t,0),s=new Qe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(re);return t.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new $(i),0);let c=new pe(re);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),C.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(t.mutations,s=>{const i=new Qe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Qe(t,0),s=this.br.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.Mr=e,this.docs=function(){return new _e($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=Rt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ke.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Rt();const o=t.path,c=new $(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zl(Gm(h),r)<=0||(s.has(h.key)||oo(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){G()}Or(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new mb(this)}getSize(e){return C.resolve(this.size)}}class mb extends Jp{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.persistence=e,this.Nr=new Zn(t=>xr(t),io),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new cu,this.targetCount=0,this.kr=Mr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),C.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Mr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Kn(t),C.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){this.qr={},this.overlays={},this.Qr=new wt(0),this.Kr=!1,this.Kr=!0,this.$r=new db,this.referenceDelegate=e(this),this.Ur=new pb(this),this.indexManager=new XT,this.remoteDocumentCache=function(s){return new fb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new jp(t),this.Gr=new lb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ub,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new hb(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new gb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class gb extends Hm{constructor(e){super(),this.currentSequenceNumber=e}}class Ha{constructor(e){this.persistence=e,this.Jr=new cu,this.Yr=null}static Zr(e){return new Ha(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),C.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const s=$.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Y.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return C.or([()=>C.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.serializer=e}O(e,t,r,s){const i=new Oa("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yh,{unique:!0}),l.createObjectStore("documentMutations")}(e),of(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=C.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),of(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",h)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yh,{unique:!0});const p=u.store("mutations"),g=h.map(y=>p.put(y));return C.waitFor(g)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:QE});u.createIndex("collectionPathOverlayIndex",JE,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",YE,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:FE});u.createIndex("documentKeyIndex",BE),u.createIndex("collectionGroupIndex",UE)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:GE}).createIndex("sequenceNumberIndex",zE,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:HE}).createIndex("documentKeyIndex",WE,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=Ta(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>C.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>C.forEach(c,l=>{J(l.userId===i.userId);const u=gr(this.serializer,l);return Hp(e,i.userId,u).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,c)=>{const l=new he(o),u=function(p){return[0,mt(p)]}(l);i.push(t.get(u).next(h=>h?C.resolve():(p=>t.put({targetId:0,path:mt(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>C.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:KE});const r=t.store("collectionParents"),s=new au,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:mt(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new he(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],u)=>{const h=Yt(c);return i(h.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=wi(s),o=qp(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new $(he.fromString(p.document.name).popFirst(5)):p.noDocument?$.fromSegments(p.noDocument.path):p.unknownDocument?$.fromSegments(p.unknownDocument.path):G()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(u))}).next(()=>C.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=Yp(this.serializer),i=new Zp(Ha.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(l=>{var u;let h=(u=c.get(l.userId))!==null&&u!==void 0?u:ae();gr(this.serializer,l).keys().forEach(p=>h=h.add(p)),c.set(l.userId,h)}),C.forEach(c,(l,u)=>{const h=new it(u),p=Ga.lt(this.serializer,h),g=i.getIndexManager(h),y=za.lt(h,this.serializer,g,i.referenceDelegate);return new Xp(s,y,p,g).recalculateAndSaveOverlaysForDocumentKeys(new il(t,wt.oe),l).next()})})}}function of(n){n.createObjectStore("targetDocuments",{keyPath:jE}).createIndex("documentTargetsIndex",qE,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",$E,{unique:!0}),n.createObjectStore("targetGlobal")}const Lc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class lu{constructor(e,t,r,s,i,o,c,l,u,h,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=c,this.ci=u,this.li=h,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!lu.D())throw new B(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ib(this,s),this.Ai=t+"main",this.serializer=new jp(l),this.Ri=new Kn(this.Ai,this.hi,new _b(this.serializer)),this.$r=new zT,this.Ur=new eb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Yp(this.serializer),this.Gr=new GT,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&Ne("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(x.FAILED_PRECONDITION,Lc);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new wt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Bo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Xn(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return hi(e).get("owner").next(t=>C.resolve(this.vi(t)))}Ci(e){return Bo(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ge(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return C.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?C.resolve(!0):hi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new B(x.FAILED_PRECONDITION,Lc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Bo(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new il(e,wt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Bo(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return za.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ZT(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ga.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?eT:l===16?ZE:l===15?Wl:l===14?Zm:l===13?Xm:l===12?XE:l===11?Ym:void G()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new il(c,this.Qr?this.Qr.next():wt.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new B(x.FAILED_PRECONDITION,zm);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return hi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new B(x.FAILED_PRECONDITION,Lc)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return hi(e).put("owner",t)}static D(){return Kn.D()}bi(e){const t=hi(e);return t.get("owner").next(r=>this.vi(r)?(V("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):C.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ne(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Qf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ne("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Ne("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function hi(n){return Ge(n,"owner")}function Bo(n){return Ge(n,"clientMetadata")}function eg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ae(),s=ae();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uu(e,t.fromCache,r,s)}}/**
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
 */class yb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tg{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Qf()?8:Wm(Ke())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new yb;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ds()<=ce.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",hs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(ds()<=ce.DEBUG&&V("QueryEngine","Query:",hs(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ds()<=ce.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",hs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):C.resolve())}Yi(e,t){if(Dh(t))return C.resolve(null);let r=Ct(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=hl(t,null,"F"),r=Ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ae(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(t,c);return this.ns(t,u,o,l.readTime)?this.Yi(e,hl(t,null,"F")):this.rs(e,u,t,l)}))})))}Zi(e,t,r,s){return Dh(t)||s.isEqual(Y.min())?C.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?C.resolve(null):(ds()<=ce.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hs(t)),this.rs(e,o,t,Km(s,-1)).next(c=>c))})}ts(e,t){let r=new pe(gp(e));return t.forEach((s,i)=>{oo(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ds()<=ce.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",hs(t)),this.Ji.getDocumentsMatchingQuery(e,t,kt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new _e(re),this._s=new Zn(i=>xr(i),io),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ng(n,e,t,r){return new vb(n,e,t,r)}async function rg(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ae();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function wb(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const p=u.batch,g=p.keys();let y=C.resolve();return g.forEach(A=>{y=y.next(()=>h.getEntry(l,A)).next(k=>{const P=u.docVersions.get(A);J(P!==null),k.version.compareTo(P)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ae();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function sg(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Ib(n,e){const t=z(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((h,p)=>{const g=s.get(p);if(!g)return;c.push(t.Ur.removeMatchingKeys(i,h.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,h.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(Ve.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(p,y),function(k,P,M){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(g,y,h)&&c.push(t.Ur.updateTargetData(i,y))});let l=Rt(),u=ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(Eb(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(Y.min())){const h=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return C.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.os=s,i))}function Eb(n,e,t){let r=ae(),s=ae();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Rt();return t.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function Tb(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ba(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Cs(n,e,t){const r=z(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xn(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function wl(n,e,t){const r=z(n);let s=Y.min(),i=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const p=z(l),g=p._s.get(h);return g!==void 0?C.resolve(p.os.get(g)):p.Ur.getTargetData(u,h)}(r,o,Ct(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:Y.min(),t?i:ae())).next(c=>(ag(r,pp(e),c),{documents:c,Ts:i})))}function ig(n,e){const t=z(n),r=z(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function og(n,e){const t=z(n),r=t.us.get(e)||Y.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,Km(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(ag(t,e,s),s))}function ag(n,e,t){let r=n.us.get(e)||Y.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function af(n,e){return`firestore_clients_${n}_${e}`}function cf(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Mc(n,e){return`firestore_targets_${n}_${e}`}class Aa{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new B(s.error.code,s.error.message))),o?new Aa(e,t,s.state,i):(Ne("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new B(r.error.code,r.error.message))),i?new xi(e,r.state,s):(Ne("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Sa{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Xl();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Qm(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Sa(e,i):(Ne("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class du{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new du(t.clientId,t.onlineState):(Ne("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Il{constructor(){this.activeTargetIds=Xl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Oc{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new _e(re),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=af(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Il),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(af(this.persistenceKey,r));if(s){const i=Sa.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Mc(this.persistenceKey,e));if(s){const i=xi.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Mc(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V("SharedClientState","READ",e,t),t}setItem(e,t){V("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(V("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Ne("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=wt.oe;if(i!=null)try{const c=JSON.parse(i);J(typeof c=="number"),o=c}catch(c){Ne("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==wt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new Aa(this.currentUser,e,t,r),i=cf(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=cf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=Mc(this.persistenceKey,e),i=new xi(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Sa.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Aa.Rs(new it(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return xi.Rs(s,t)}Ls(e){return du.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Xl();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class cg{constructor(){this.so=new Il,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Il,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bb{_o(e){}shutdown(){}}/**
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
 */class lf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Uo=null;function Fc(){return Uo===null?Uo=function(){return 268435456+Math.round(2147483648*Math.random())}():Uo++,"0x"+Uo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class Rb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=Fc(),l=this.xo(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(t,l,u,s).then(h=>(V("RestConnection",`Received RPC '${t}' ${c}: `,h),h),h=>{throw Fi("RestConnection",`RPC '${t}' ${c} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=Ab[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Fc();return new Promise((o,c)=>{const l=new Om;l.setWithCredentials(!0),l.listenOnce(Fm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ho.NO_ERROR:const h=l.getResponseJson();V(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Ho.TIMEOUT:V(st,`RPC '${e}' ${i} timed out`),c(new B(x.DEADLINE_EXCEEDED,"Request time out"));break;case Ho.HTTP_ERROR:const p=l.getStatus();if(V(st,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const A=function(P){const M=P.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(M)>=0?M:x.UNKNOWN}(y.status);c(new B(A,y.message))}else c(new B(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new B(x.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{V(st,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);V(st,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",u,r,15)})}Bo(e,t,r){const s=Fc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$m(),c=Um(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");V(st,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);let g=!1,y=!1;const A=new Sb({Io:P=>{y?V(st,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(V(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),V(st,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},To:()=>p.close()}),k=(P,M,O)=>{P.listen(M,U=>{try{O(U)}catch(H){setTimeout(()=>{throw H},0)}})};return k(p,_i.EventType.OPEN,()=>{y||(V(st,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),k(p,_i.EventType.CLOSE,()=>{y||(y=!0,V(st,`RPC '${e}' stream ${s} transport closed`),A.So())}),k(p,_i.EventType.ERROR,P=>{y||(y=!0,Fi(st,`RPC '${e}' stream ${s} transport errored:`,P),A.So(new B(x.UNAVAILABLE,"The operation could not be completed")))}),k(p,_i.EventType.MESSAGE,P=>{var M;if(!y){const O=P.data[0];J(!!O);const U=O,H=U.error||((M=U[0])===null||M===void 0?void 0:M.error);if(H){V(st,`RPC '${e}' stream ${s} received error:`,H);const se=H.status;let te=function(I){const b=Fe[I];if(b!==void 0)return Pp(b)}(se),T=H.message;te===void 0&&(te=x.INTERNAL,T="Unknown error status: "+se+" with message "+H.message),y=!0,A.So(new B(te,T)),p.close()}else V(st,`RPC '${e}' stream ${s} received:`,O),A.bo(O)}}),k(c,Bm.STAT_EVENT,P=>{P.stat===rl.PROXY?V(st,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===rl.NOPROXY&&V(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function lg(){return typeof window<"u"?window:null}function ea(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){return new VT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ug(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Ne(t.toString()),Ne("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new B(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pb extends dg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=OT(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?pt(o.readTime):Y.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=pl(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=_a(l)?{documents:Mp(i,l)}:{query:Op(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Dp(i,o.resumeToken);const u=fl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){c.readTime=Ps(i,o.snapshotVersion.toTimestamp());const u=fl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=BT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=pl(this.serializer),t.removeTarget=e,this.a_(t)}}class Cb extends dg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=FT(e.writeResults,e.commitTime),r=pt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=pl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>wa(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,ml(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(x.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,ml(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(x.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Db{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ne(t),this.D_=!1):V("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Hr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=z(l);u.L_.add(4),await lo(u),u.q_.set("Unknown"),u.L_.delete(4),await Qa(u)}(this))})}),this.q_=new Db(r,s)}}async function Qa(n){if(Hr(n))for(const e of n.B_)await e(!0)}async function lo(n){for(const e of n.B_)await e(!1)}function Ja(n,e){const t=z(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),mu(t)?fu(t):Us(t).r_()&&hu(t,e))}function ks(n,e){const t=z(n),r=Us(t);t.N_.delete(e),r.r_()&&hg(t,e),t.N_.size===0&&(r.r_()?r.o_():Hr(t)&&t.q_.set("Unknown"))}function hu(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Us(n).A_(e)}function hg(n,e){n.Q_.xe(e),Us(n).R_(e)}function fu(n){n.Q_=new kT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Us(n).start(),n.q_.v_()}function mu(n){return Hr(n)&&!Us(n).n_()&&n.N_.size>0}function Hr(n){return z(n).L_.size===0}function fg(n){n.Q_=void 0}async function Nb(n){n.q_.set("Online")}async function Vb(n){n.N_.forEach((e,t)=>{hu(n,e)})}async function Lb(n,e){fg(n),mu(n)?(n.q_.M_(e),fu(n)):n.q_.set("Unknown")}async function Mb(n,e,t){if(n.q_.set("Online"),e instanceof kp&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ra(n,r)}else if(e instanceof Zo?n.Q_.Ke(e):e instanceof Cp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Y.min()))try{const r=await sg(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(Ve.EMPTY_BYTE_STRING,h.snapshotVersion)),hg(i,l);const p=new hn(h.target,l,u,h.sequenceNumber);hu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Ra(n,r)}}async function Ra(n,e,t){if(!Xn(e))throw e;n.L_.add(1),await lo(n),n.q_.set("Offline"),t||(t=()=>sg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Qa(n)})}function mg(n,e){return e().catch(t=>Ra(n,t,e))}async function Bs(n){const e=z(n),t=Wn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Ob(e);)try{const s=await Tb(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Fb(e,s)}catch(s){await Ra(e,s)}pg(e)&&gg(e)}function Ob(n){return Hr(n)&&n.O_.length<10}function Fb(n,e){n.O_.push(e);const t=Wn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function pg(n){return Hr(n)&&!Wn(n).n_()&&n.O_.length>0}function gg(n){Wn(n).start()}async function Bb(n){Wn(n).p_()}async function Ub(n){const e=Wn(n);for(const t of n.O_)e.m_(t.mutations)}async function $b(n,e,t){const r=n.O_.shift(),s=nu.from(r,e,t);await mg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Bs(n)}async function jb(n,e){e&&Wn(n).V_&&await async function(r,s){if(function(o){return RT(o)&&o!==x.ABORTED}(s.code)){const i=r.O_.shift();Wn(r).s_(),await mg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Bs(r)}}(n,e),pg(n)&&gg(n)}async function uf(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Hr(t);t.L_.add(3),await lo(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qa(t)}async function El(n,e){const t=z(n);e?(t.L_.delete(2),await Qa(t)):e||(t.L_.add(2),await lo(t),t.q_.set("Unknown"))}function Us(n){return n.K_||(n.K_=function(t,r,s){const i=z(t);return i.w_(),new Pb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Nb.bind(null,n),Ro:Vb.bind(null,n),mo:Lb.bind(null,n),d_:Mb.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),mu(n)?fu(n):n.q_.set("Unknown")):(await n.K_.stop(),fg(n))})),n.K_}function Wn(n){return n.U_||(n.U_=function(t,r,s){const i=z(t);return i.w_(),new Cb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Bb.bind(null,n),mo:jb.bind(null,n),f_:Ub.bind(null,n),g_:$b.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Bs(n)):(await n.U_.stop(),n.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new pu(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gu(n,e){if(Ne("AsyncQueue",`${e}: ${n}`),Xn(n))return new B(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=yi(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.W_=new _e($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ds{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Ds(e,t,ws.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Kb{constructor(){this.queries=hf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=z(t),i=s.queries;s.queries=hf(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new B(x.ABORTED,"Firestore shutting down"))}}function hf(){return new Zn(n=>mp(n),$a)}async function _g(n,e){const t=z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new qb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=gu(o,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&_u(t)}async function yg(n,e){const t=z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Gb(n,e){const t=z(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&_u(t)}function zb(n,e,t){const r=z(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function _u(n){n.Y_.forEach(e=>{e.next()})}var Tl,ff;(ff=Tl||(Tl={})).ea="default",ff.Cache="cache";class vg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Tl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.key=e}}class Ig{constructor(e){this.key=e}}class Hb{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ae(),this.mutatedKeys=ae(),this.Aa=gp(e),this.Ra=new ws(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new df,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const g=s.get(h),y=oo(this.query,p)?p:null,A=!!g&&this.mutatedKeys.has(g.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;g&&y?g.data.isEqual(y.data)?A!==k&&(r.track({type:3,doc:y}),P=!0):this.ga(g,y)||(r.track({type:2,doc:y}),P=!0,(l&&this.Aa(y,l)>0||u&&this.Aa(y,u)<0)&&(c=!0)):!g&&y?(r.track({type:0,doc:y}),P=!0):g&&!y&&(r.track({type:1,doc:g}),P=!0,(l||u)&&(c=!0)),P&&(y?(o=o.add(y),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(y,A){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return k(y)-k(A)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Ds(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new df,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ae(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Ig(r))}),this.da.forEach(r=>{e.has(r)||t.push(new wg(r))}),t}ba(e){this.Ta=e.Ts,this.da=ae();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ds.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Wb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Qb{constructor(e){this.key=e,this.va=!1}}class Jb{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Zn(c=>mp(c),$a),this.Ma=new Map,this.xa=new Set,this.Oa=new _e($.comparator),this.Na=new Map,this.La=new cu,this.Ba={},this.ka=new Map,this.qa=Mr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Yb(n,e,t=!0){const r=Ya(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Eg(r,e,t,!0),s}async function Xb(n,e){const t=Ya(n);await Eg(t,e,!0,!1)}async function Eg(n,e,t,r){const s=await ba(n.localStore,Ct(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await yu(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ja(n.remoteStore,s),c}async function yu(n,e,t,r,s){n.Ka=(p,g,y)=>async function(k,P,M,O){let U=P.view.ma(M);U.ns&&(U=await wl(k.localStore,P.query,!1).then(({documents:T})=>P.view.ma(T,U)));const H=O&&O.targetChanges.get(P.targetId),se=O&&O.targetMismatches.get(P.targetId)!=null,te=P.view.applyChanges(U,k.isPrimaryClient,H,se);return bl(k,P.targetId,te.wa),te.snapshot}(n,p,g,y);const i=await wl(n.localStore,e,!0),o=new Hb(e,i.Ts),c=o.ma(i.documents),l=co.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);bl(n,t,u.wa);const h=new Wb(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),u.snapshot}async function Zb(n,e,t){const r=z(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!$a(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ks(r.remoteStore,s.targetId),xs(r,s.targetId)}).catch(Yn)):(xs(r,s.targetId),await Cs(r.localStore,s.targetId,!0))}async function eA(n,e){const t=z(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ks(t.remoteStore,r.targetId))}async function tA(n,e,t){const r=Eu(n);try{const s=await function(o,c){const l=z(o),u=Re.now(),h=c.reduce((y,A)=>y.add(A.key),ae());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let A=Rt(),k=ae();return l.cs.getEntries(y,h).next(P=>{A=P,A.forEach((M,O)=>{O.isValidDocument()||(k=k.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,A)).next(P=>{p=P;const M=[];for(const O of c){const U=AT(O,p.get(O.key).overlayedDocument);U!=null&&M.push(new In(O.key,U,sp(U.value.mapValue),at.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,M,c)}).next(P=>{g=P;const M=P.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(y,P.batchId,M)})}).then(()=>({batchId:g.batchId,changes:yp(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new _e(re)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,t),await er(r,s.changes),await Bs(r.remoteStore)}catch(s){const i=gu(s,"Failed to persist write");t.reject(i)}}async function Tg(n,e){const t=z(n);try{const r=await Ib(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?J(o.va):s.removedDocuments.size>0&&(J(o.va),o.va=!1))}),await er(t,r,e)}catch(r){await Yn(r)}}function mf(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=z(o);l.onlineState=c;let u=!1;l.queries.forEach((h,p)=>{for(const g of p.j_)g.Z_(c)&&(u=!0)}),u&&_u(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nA(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new _e($.comparator);o=o.insert(i,ke.newNoDocument(i,Y.min()));const c=ae().add(i),l=new ao(Y.min(),new Map,new _e(re),o,c);await Tg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Iu(r)}else await Cs(r.localStore,e,!1).then(()=>xs(r,e,t)).catch(Yn)}async function rA(n,e){const t=z(n),r=e.batch.batchId;try{const s=await wb(t.localStore,e);wu(t,r,null),vu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await er(t,s)}catch(s){await Yn(s)}}async function sA(n,e,t){const r=z(n);try{const s=await function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(J(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);wu(r,e,t),vu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await er(r,s)}catch(s){await Yn(s)}}function vu(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function wu(n,e,t){const r=z(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function xs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||bg(n,r)})}function bg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(ks(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Iu(n))}function bl(n,e,t){for(const r of t)r instanceof wg?(n.La.addReference(r.key,e),iA(n,r)):r instanceof Ig?(V("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||bg(n,r.key)):G()}function iA(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(V("SyncEngine","New document in limbo: "+t),n.xa.add(r),Iu(n))}function Iu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(he.fromString(e)),r=n.qa.next();n.Na.set(r,new Qb(t)),n.Oa=n.Oa.insert(t,r),Ja(n.remoteStore,new hn(Ct(Ua(t.path)),r,"TargetPurposeLimboResolution",wt.oe))}}async function er(n,e,t){const r=z(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(u=>{var h;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=uu.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=z(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(u,g=>C.forEach(g.$i,y=>h.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>C.forEach(g.Ui,y=>h.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!Xn(p))throw p;V("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const y=h.os.get(g),A=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(A);h.os=h.os.insert(g,k)}}}(r.localStore,i))}async function oA(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await rg(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new B(x.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await er(t,r.hs)}}function aA(n,e){const t=z(n),r=t.Na.get(e);if(r&&r.va)return ae().add(r.key);{let s=ae();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function cA(n,e){const t=z(n),r=await wl(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&bl(t,e.targetId,s.wa),s}async function lA(n,e){const t=z(n);return og(t.localStore,e).then(r=>er(t,r))}async function uA(n,e,t,r){const s=z(n),i=await function(c,l){const u=z(c),h=z(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",p=>h.Mn(p,l).next(g=>g?u.localDocuments.getDocuments(p,g):C.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Bs(s.remoteStore):t==="acknowledged"||t==="rejected"?(wu(s,e,r||null),vu(s,e),function(c,l){z(z(c).mutationQueue).On(l)}(s.localStore,e)):G(),await er(s,i)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function dA(n,e){const t=z(n);if(Ya(t),Eu(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await pf(t,r.toArray());t.Qa=!0,await El(t.remoteStore,!0);for(const i of s)Ja(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(xs(t,o),Cs(t.localStore,o,!0))),ks(t.remoteStore,o)}),await s,await pf(t,r),function(o){const c=z(o);c.Na.forEach((l,u)=>{ks(c.remoteStore,u)}),c.La.pr(),c.Na=new Map,c.Oa=new _e($.comparator)}(t),t.Qa=!1,await El(t.remoteStore,!1)}}async function pf(n,e,t){const r=z(n),s=[],i=[];for(const o of e){let c;const l=r.Ma.get(o);if(l&&l.length!==0){c=await ba(r.localStore,Ct(l[0]));for(const u of l){const h=r.Fa.get(u),p=await cA(r,h);p.snapshot&&i.push(p.snapshot)}}else{const u=await ig(r.localStore,o);c=await ba(r.localStore,u),await yu(r,Ag(u),o,!1,c.resumeToken)}s.push(c)}return r.Ca.d_(i),s}function Ag(n){return hp(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function hA(n){return function(t){return z(z(t).persistence).Qi()}(z(n).localStore)}async function fA(n,e,t,r){const s=z(n);if(s.Qa)return void V("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await og(s.localStore,pp(i[0])),c=ao.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ve.EMPTY_BYTE_STRING);await er(s,o,c);break}case"rejected":await Cs(s.localStore,e,!0),xs(s,e,r);break;default:G()}}async function mA(n,e,t){const r=Ya(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){V("SyncEngine","Adding an already active target "+s);continue}const i=await ig(r.localStore,s),o=await ba(r.localStore,i);await yu(r,Ag(i),o.targetId,!1,o.resumeToken),Ja(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await Cs(r.localStore,s,!1).then(()=>{ks(r.remoteStore,s),xs(r,s)}).catch(Yn)}}function Ya(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nA.bind(null,e),e.Ca.d_=Gb.bind(null,e.eventManager),e.Ca.$a=zb.bind(null,e.eventManager),e}function Eu(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sA.bind(null,e),e}class Hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ng(this.persistence,new tg,e.initialUser,this.serializer)}Ga(e){return new Zp(Ha.Zr,this.serializer)}Wa(e){return new cg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hi.provider={build:()=>new Hi};class Sg extends Hi{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Eu(this.Ja.syncEngine),await Bs(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return ng(this.persistence,new tg,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new nb(r,e.asyncQueue,t)}Ha(e,t){const r=new LE(t,this.persistence);return new VE(e.asyncQueue,r)}Ga(e){const t=eg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new lu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,lg(),ea(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new cg}}class pA extends Sg{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Oc&&(this.sharedClientState.syncEngine={no:uA.bind(null,t),ro:fA.bind(null,t),io:mA.bind(null,t),Qi:hA.bind(null,t),eo:lA.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await dA(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=lg();if(!Oc.D(t))throw new B(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=eg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Oc(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Wi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oA.bind(null,this.syncEngine),await El(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Kb}()}createDatastore(e){const t=Wa(e.databaseInfo.databaseId),r=function(i){return new Rb(i)}(e.databaseInfo);return function(i,o,c,l){return new kb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new xb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>mf(this.syncEngine,t,0),function(){return lf.D()?new lf:new bb}())}createSyncEngine(e,t){return function(s,i,o,c,l,u,h){const p=new Jb(s,i,o,c,l,u);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=z(s);V("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await lo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wi.provider={build:()=>new Wi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ne("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=jm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=gu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function gf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _A(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>uf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>uf(e.remoteStore,s)),n._onlineComponents=e}async function _A(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Fi("Error using user provided cache. Falling back to memory cache: "+t),await Bc(n,new Hi)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Bc(n,new Hi);return n._offlineComponents}async function Pg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await gf(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await gf(n,new Wi))),n._onlineComponents}function yA(n){return Pg(n).then(e=>e.syncEngine)}async function Cg(n){const e=await Pg(n),t=e.eventManager;return t.onListen=Yb.bind(null,e.syncEngine),t.onUnlisten=Zb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Xb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eA.bind(null,e.syncEngine),t}function vA(n,e,t={}){const r=new tn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new Rg({next:g=>{h.Za(),o.enqueueAndForget(()=>yg(i,p));const y=g.docs.has(c);!y&&g.fromCache?u.reject(new B(x.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&l&&l.source==="server"?u.reject(new B(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new vg(Ua(c.path),h,{includeMetadataChanges:!0,_a:!0});return _g(i,p)}(await Cg(n),n.asyncQueue,e,t,r)),r.promise}function wA(n,e,t={}){const r=new tn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new Rg({next:g=>{h.Za(),o.enqueueAndForget(()=>yg(i,p)),g.fromCache&&l.source==="server"?u.reject(new B(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new vg(c,h,{includeMetadataChanges:!0,_a:!0});return _g(i,p)}(await Cg(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function kg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n,e,t){if(!t)throw new B(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function IA(n,e,t,r){if(e===!0&&r===!0)throw new B(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yf(n){if(!$.isDocumentKey(n))throw new B(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vf(n){if($.isDocumentKey(n))throw new B(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function Ft(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xa(n);throw new B(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Za{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bE;switch(r.type){case"firstParty":return new RE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=_f.get(t);r&&(V("ComponentProvider","Removing Datastore"),_f.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wr(this.firestore,e,this._query)}}class gt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Gn extends Wr{constructor(e,t,r){super(e,t,Ua(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new $(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function Be(n,e,...t){if(n=Ie(n),Tu("collection","path",e),n instanceof Za){const r=he.fromString(e,...t);return vf(r),new Gn(n,null,r)}{if(!(n instanceof gt||n instanceof Gn))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return vf(r),new Gn(n.firestore,null,r)}}function EA(n,e){if(n=Ft(n,Za),Tu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new B(x.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Wr(n,null,function(r){return new Os(he.emptyPath(),r)}(e))}function X(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=jm.newId()),Tu("doc","path",e),n instanceof Za){const r=he.fromString(e,...t);return yf(r),new gt(n,null,new $(r))}{if(!(n instanceof gt||n instanceof Gn))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return yf(r),new gt(n.firestore,n instanceof Gn?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ug(this,"async_queue_retry"),this.Vu=()=>{const r=ea();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ea();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ea();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xn(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Ne("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=pu.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Qr extends Za{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new If,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new If(e),this._firestoreClient=void 0,await e}}}function TA(n,e,t){t||(t="(default)");const r=Kr(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Is(i,e))return s;throw new B(x.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new B(x.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function bu(n){if(n._terminated)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bA(n),n._firestoreClient}function bA(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,u,h){return new nT(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,kg(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new gA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ns(Ve.fromBase64String(e))}catch(t){throw new B(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ns(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
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
 */class Su{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=/^__.*__$/;class SA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new In(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fs(e,this.data,t,this.fieldTransforms)}}class Dg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new In(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class tc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Pa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(xg(this.Cu)&&AA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class RA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Wa(e)}Qu(e,t,r,s=!1){return new tc({Cu:e,methodName:t,qu:r,path:Se.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nc(n){const e=n._freezeSettings(),t=Wa(n._databaseId);return new RA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ng(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Cu("Data must be an object, but it was:",o,r);const c=Vg(r,o);let l,u;if(i.merge)l=new It(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const g=Al(e,p,t);if(!o.contains(g))throw new B(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Mg(h,g)||h.push(g)}l=new It(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new SA(new ot(c),l,u)}class rc extends uo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rc}}function PA(n,e,t){return new tc({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ru extends uo{_toFieldTransform(e){return new eu(e.path,new Ss)}isEqual(e){return e instanceof Ru}}class Pu extends uo{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=PA(this,e,!0),r=this.Ku.map(i=>$s(i,t)),s=new Nr(r);return new eu(e.path,s)}isEqual(e){return e instanceof Pu&&Is(this.Ku,e.Ku)}}function CA(n,e,t,r){const s=n.Qu(1,e,t);Cu("Data must be an object, but it was:",s,r);const i=[],o=ot.empty();zr(r,(l,u)=>{const h=ku(e,l,t);u=Ie(u);const p=s.Nu(h);if(u instanceof rc)i.push(h);else{const g=$s(u,p);g!=null&&(i.push(h),o.set(h,g))}});const c=new It(i);return new Dg(o,c,s.fieldTransforms)}function kA(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[Al(e,r,t)],l=[s];if(i.length%2!=0)throw new B(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Al(e,i[g])),l.push(i[g+1]);const u=[],h=ot.empty();for(let g=c.length-1;g>=0;--g)if(!Mg(u,c[g])){const y=c[g];let A=l[g];A=Ie(A);const k=o.Nu(y);if(A instanceof rc)u.push(y);else{const P=$s(A,k);P!=null&&(u.push(y),h.set(y,P))}}const p=new It(u);return new Dg(h,p,o.fieldTransforms)}function DA(n,e,t,r=!1){return $s(t,n.Qu(r?4:3,e))}function $s(n,e){if(Lg(n=Ie(n)))return Cu("Unsupported field value:",e,n),Vg(n,e);if(n instanceof uo)return function(r,s){if(!xg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=$s(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Re.fromDate(r);return{timestampValue:Ps(s.serializer,i)}}if(r instanceof Re){const i=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ps(s.serializer,i)}}if(r instanceof Au)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ns)return{bytesValue:Dp(s.serializer,r._byteString)};if(r instanceof gt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:iu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Su)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Zl(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Xa(r)}`)}(n,e)}function Vg(n,e){const t={};return ep(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(n,(r,s)=>{const i=$s(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Lg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof Au||n instanceof Ns||n instanceof gt||n instanceof uo||n instanceof Su)}function Cu(n,e,t){if(!Lg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Xa(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Al(n,e,t){if((e=Ie(e))instanceof ec)return e._internalPath;if(typeof e=="string")return ku(n,e);throw Pa("Field path arguments must be of type string or ",n,!1,void 0,t)}const xA=new RegExp("[~\\*/\\[\\]]");function ku(n,e,t){if(e.search(xA)>=0)throw Pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ec(...e.split("."))._internalPath}catch{throw Pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Pa(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(x.INVALID_ARGUMENT,c+n+l)}function Mg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Du("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NA extends Og{data(){return super.data()}}function Du(n,e){return typeof e=="string"?ku(n,e):e instanceof ec?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xu{}class LA extends xu{}function Vs(n,e,...t){let r=[];e instanceof xu&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof Nu).length,c=i.filter(l=>l instanceof sc).length;if(o>1||o>0&&c>0)throw new B(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class sc extends LA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sc(e,t,r)}_apply(e){const t=this._parse(e);return Fg(e._query,t),new Wr(e.firestore,e.converter,dl(e._query,t))}_parse(e){const t=nc(e.firestore);return function(i,o,c,l,u,h,p){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Tf(p,h);const y=[];for(const A of p)y.push(Ef(l,i,A));g={arrayValue:{values:y}}}else g=Ef(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Tf(p,h),g=DA(c,o,p,h==="in"||h==="not-in");return le.create(u,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tr(n,e,t){const r=e,s=Du("where",n);return sc._create(s,r,t)}class Nu extends xu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Nu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:me.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Fg(o,l),o=dl(o,l)}(e._query,t),new Wr(e.firestore,e.converter,dl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ef(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new B(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fp(e)&&t.indexOf("/")!==-1)throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(he.fromString(t));if(!$.isDocumentKey(r))throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ki(n,new $(r))}if(t instanceof gt)return Ki(n,t._key);throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xa(t)}.`)}function Tf(n,e){if(!Array.isArray(n)||n.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fg(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new B(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class MA{convertValue(e,t="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>be(o.doubleValue));return new Su(i)}convertGeoPoint(e){return new Au(be(e.latitude),be(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Jl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const t=yn(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=he.fromString(e);J($p(r));const s=new kr(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||Ne(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ug extends Og{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Du("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ta extends Ug{data(e={}){return super.data(e)}}class OA{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ii(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ta(this._firestore,this._userDataWriter,r.key,r,new Ii(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new ta(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ii(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ta(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ii(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:FA(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function FA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n){n=Ft(n,gt);const e=Ft(n.firestore,Qr);return vA(bu(e),n._key).then(t=>BA(e,n,t))}class $g extends MA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ns(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function qe(n){n=Ft(n,Wr);const e=Ft(n.firestore,Qr),t=bu(e),r=new $g(e);return VA(n._query),wA(t,n._query).then(s=>new OA(e,r,n,s))}function ft(n,e,t){n=Ft(n,gt);const r=Ft(n.firestore,Qr),s=Bg(n.converter,e,t);return ic(r,[Ng(nc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,at.none())])}function Je(n,e,t,...r){n=Ft(n,gt);const s=Ft(n.firestore,Qr),i=nc(s);let o;return o=typeof(e=Ie(e))=="string"||e instanceof ec?kA(i,"updateDoc",n._key,e,t,r):CA(i,"updateDoc",n._key,e),ic(s,[o.toMutation(n._key,at.exists(!0))])}function Nt(n){return ic(Ft(n.firestore,Qr),[new Ka(n._key,at.none())])}function jg(n,e){const t=Ft(n.firestore,Qr),r=X(n),s=Bg(n.converter,e);return ic(t,[Ng(nc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,at.exists(!1))]).then(()=>r)}function ic(n,e){return function(r,s){const i=new tn;return r.asyncQueue.enqueueAndForget(async()=>tA(await yA(r),s,i)),i.promise}(bu(n),e)}function BA(n,e,t){const r=t.docs.get(e._key),s=new $g(n);return new Ug(n,s,e._key,r,new Ii(t.hasPendingWrites,t.fromCache),e.converter)}class UA{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=KA(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function $A(n){return new UA(n)}class jA{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Wi.provider,this._offlineComponentProvider={build:t=>new Sg(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class qA{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Wi.provider,this._offlineComponentProvider={build:t=>new pA(t,e==null?void 0:e.cacheSizeBytes)}}}function KA(n){return new jA(void 0)}function GA(){return new qA}function Ue(){return new Ru("serverTimestamp")}function qg(...n){return new Pu("arrayUnion",n)}(function(e,t=!0){(function(s){Ms=s})(Gr),Mt(new xt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Qr(new AE(r.getProvider("auth-internal")),new CE(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new B(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kr(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Et(ph,"4.7.3",e),Et(ph,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="firebasestorage.googleapis.com",Gg="storageBucket",zA=2*60*1e3,HA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Bt{constructor(e,t,r=0){super(Uc(e),`Firebase Storage: ${t} (${Uc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Uc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var De;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(De||(De={}));function Uc(n){return"storage/"+n}function Vu(){const n="An unknown error occurred, please check the error payload for server response.";return new xe(De.UNKNOWN,n)}function WA(n){return new xe(De.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function QA(n){return new xe(De.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function JA(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(De.UNAUTHENTICATED,n)}function YA(){return new xe(De.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function XA(n){return new xe(De.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function ZA(){return new xe(De.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eS(){return new xe(De.CANCELED,"User canceled the upload/download.")}function tS(n){return new xe(De.INVALID_URL,"Invalid URL '"+n+"'.")}function nS(n){return new xe(De.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function rS(){return new xe(De.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gg+"' property when initializing the app?")}function sS(){return new xe(De.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function iS(){return new xe(De.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oS(n){return new xe(De.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sl(n){return new xe(De.INVALID_ARGUMENT,n)}function zg(){return new xe(De.APP_DELETED,"The Firebase app was deleted.")}function aS(n){return new xe(De.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ni(n,e){return new xe(De.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function fi(n){throw new xe(De.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Pt.makeFromUrl(e,t)}catch{return new Pt(e,"")}if(r.path==="")return r;throw nS(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(H){H.path_=decodeURIComponent(H.path)}const h="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${h}/b/${s}/o${g}`,"i"),A={bucket:1,path:3},k=t===Kg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",M=new RegExp(`^https?://${k}/${s}/${P}`,"i"),U=[{regex:c,indices:l,postModify:i},{regex:y,indices:A,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let H=0;H<U.length;H++){const se=U[H],te=se.regex.exec(e);if(te){const T=te[se.indices.bucket];let v=te[se.indices.path];v||(v=""),r=new Pt(T,v),se.postModify(r);break}}if(r==null)throw tS(e);return r}}class cS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function p(P){s=setTimeout(()=>{s=null,n(y,l())},P)}function g(){i&&clearTimeout(i)}function y(P,...M){if(u){g();return}if(P){g(),h.call(null,P,...M);return}if(l()||o){g(),h.call(null,P,...M);return}r<64&&(r*=2);let U;c===1?(c=2,U=0):U=(r+Math.random())*1e3,p(U)}let A=!1;function k(P){A||(A=!0,g(),!u&&(s!==null?(P||(c=2),clearTimeout(s),p(0)):P||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,k(!0)},t),k}function uS(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(n){return n!==void 0}function hS(n){return typeof n=="object"&&!Array.isArray(n)}function Lu(n){return typeof n=="string"||n instanceof String}function bf(n){return Mu()&&n instanceof Blob}function Mu(){return typeof Blob<"u"}function Af(n,e,t,r){if(r<e)throw Sl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Sl(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Hg(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var br;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(br||(br={}));/**
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
 */function fS(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,t,r,s,i,o,c,l,u,h,p,g=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,A)=>{this.resolve_=y,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new $o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===br.NO_ERROR,l=i.getStatus();if(!c||fS(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===br.ABORT;r(!1,new $o(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new $o(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());dS(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Vu();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?zg():eS();o(l)}else{const l=ZA();o(l)}};this.canceled_?t(!1,new $o(!1,null,!0)):this.backoffId_=lS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $o{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function pS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function gS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _S(n,e){e&&(n["X-Firebase-GMPID"]=e)}function yS(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function vS(n,e,t,r,s,i,o=!0){const c=Hg(n.urlParams),l=n.url+c,u=Object.assign({},n.headers);return _S(u,e),pS(u,t),gS(u,i),yS(u,r),new mS(l,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function IS(...n){const e=wS();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Mu())return new Blob(n);throw new xe(De.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ES(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function TS(n){if(typeof atob>"u")throw oS("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $c{constructor(e,t){this.data=e,this.contentType=t||null}}function Wg(n,e){switch(n){case Lt.RAW:return new $c(Qg(e));case Lt.BASE64:case Lt.BASE64URL:return new $c(Jg(n,e));case Lt.DATA_URL:return new $c(AS(e),SS(e))}throw Vu()}function Qg(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bS(n){let e;try{e=decodeURIComponent(n)}catch{throw Ni(Lt.DATA_URL,"Malformed data URL.")}return Qg(e)}function Jg(n,e){switch(n){case Lt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ni(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Lt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ni(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=TS(e)}catch(s){throw s.message.includes("polyfill")?s:Ni(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Yg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ni(Lt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=RS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function AS(n){const e=new Yg(n);return e.base64?Jg(Lt.BASE64,e.rest):bS(e.rest)}function SS(n){return new Yg(n).contentType}function RS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){let r=0,s="";bf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(bf(this.data_)){const r=this.data_,s=ES(r,e,t);return s===null?null:new $n(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new $n(r,!0)}}static getBlob(...e){if(Mu()){const t=e.map(r=>r instanceof $n?r.data_:r);return new $n(IS.apply(null,t))}else{const t=e.map(o=>Lu(o)?Wg(Lt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new $n(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n){let e;try{e=JSON.parse(n)}catch{return null}return hS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function CS(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Zg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(n,e){return e}class ht{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||kS}}let jo=null;function DS(n){return!Lu(n)||n.length<2?n:Zg(n)}function e_(){if(jo)return jo;const n=[];n.push(new ht("bucket")),n.push(new ht("generation")),n.push(new ht("metageneration")),n.push(new ht("name","fullPath",!0));function e(i,o){return DS(o)}const t=new ht("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new ht("size");return s.xform=r,n.push(s),n.push(new ht("timeCreated")),n.push(new ht("updated")),n.push(new ht("md5Hash",null,!0)),n.push(new ht("cacheControl",null,!0)),n.push(new ht("contentDisposition",null,!0)),n.push(new ht("contentEncoding",null,!0)),n.push(new ht("contentLanguage",null,!0)),n.push(new ht("contentType",null,!0)),n.push(new ht("metadata","customMetadata",!0)),jo=n,jo}function xS(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Pt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function NS(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return xS(r,n),r}function t_(n,e,t){const r=Xg(e);return r===null?null:NS(n,r,t)}function VS(n,e,t,r){const s=Xg(e);if(s===null||!Lu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=n.bucket,p=n.fullPath,g="/b/"+o(h)+"/o/"+o(p),y=Ou(g,t,r),A=Hg({alt:"media",token:u});return y+A})[0]}function LS(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class n_{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n){if(!n)throw Vu()}function MS(n,e){function t(r,s){const i=t_(n,s,e);return r_(i!==null),i}return t}function OS(n,e){function t(r,s){const i=t_(n,s,e);return r_(i!==null),VS(i,s,n.host,n._protocol)}return t}function s_(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=YA():s=JA():t.getStatus()===402?s=QA(n.bucket):t.getStatus()===403?s=XA(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function FS(n){const e=s_(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=WA(n.path)),i.serverResponse=s.serverResponse,i}return t}function BS(n,e,t){const r=e.fullServerUrl(),s=Ou(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new n_(s,i,OS(n,t),o);return c.errorHandler=FS(e),c}function US(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function $S(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=US(null,e)),r}function jS(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let U="";for(let H=0;H<2;H++)U=U+Math.random().toString().slice(2);return U}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=$S(e,r,s),h=LS(u,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+l+"--",y=$n.getBlob(p,r,g);if(y===null)throw sS();const A={name:u.fullPath},k=Ou(i,n.host,n._protocol),P="POST",M=n.maxUploadRetryTime,O=new n_(k,P,MS(n,t),M);return O.urlParams=A,O.headers=o,O.body=y.uploadData(),O.errorHandler=s_(e),O}class qS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw fi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class KS extends qS{initXhr(){this.xhr_.responseType="text"}}function i_(){return new KS}/**
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
 */class Or{constructor(e,t){this._service=e,t instanceof Pt?this._location=t:this._location=Pt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Or(e,t)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zg(this._location.path)}get storage(){return this._service}get parent(){const e=PS(this._location.path);if(e===null)return null;const t=new Pt(this._location.bucket,e);return new Or(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw aS(e)}}function GS(n,e,t){n._throwIfRoot("uploadBytes");const r=jS(n.storage,n._location,e_(),new $n(e,!0),t);return n.storage.makeRequestWithTokens(r,i_).then(s=>({metadata:s,ref:n}))}function zS(n,e,t=Lt.RAW,r){n._throwIfRoot("uploadString");const s=Wg(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),GS(n,s.data,i)}function HS(n){n._throwIfRoot("getDownloadURL");const e=BS(n.storage,n._location,e_());return n.storage.makeRequestWithTokens(e,i_).then(t=>{if(t===null)throw iS();return t})}function WS(n,e){const t=CS(n._location.path,e),r=new Pt(n._location.bucket,t);return new Or(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(n){return/^[A-Za-z]+:\/\//.test(n)}function JS(n,e){return new Or(n,e)}function o_(n,e){if(n instanceof Fu){const t=n;if(t._bucket==null)throw rS();const r=new Or(t,t._bucket);return e!=null?o_(r,e):r}else return e!==void 0?WS(n,e):n}function YS(n,e){if(e&&QS(e)){if(n instanceof Fu)return JS(n,e);throw Sl("To use ref(service, url), the first argument must be a Storage instance.")}else return o_(n,e)}function Sf(n,e){const t=e==null?void 0:e[Gg];return t==null?null:Pt.makeFromBucketSpec(t,n)}function XS(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Fy(s,n.app.options.projectId))}class Fu{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Kg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zA,this._maxUploadRetryTime=HA,this._requests=new Set,s!=null?this._bucket=Pt.makeFromBucketSpec(s,this._host):this._bucket=Sf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=Sf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Af("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Af("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Or(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new cS(zg());{const o=vS(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Rf="@firebase/storage",Pf="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="storage";function c_(n,e,t,r){return n=Ie(n),zS(n,e,t,r)}function l_(n){return n=Ie(n),HS(n)}function u_(n,e){return n=Ie(n),YS(n,e)}function ZS(n=Ll(),e){n=Ie(n);const r=Kr(n,a_).getImmediate({identifier:e}),s=My("storage");return s&&eR(r,...s),r}function eR(n,e,t,r={}){XS(n,e,t,r)}function tR(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Fu(t,r,s,e,Gr)}function nR(){Mt(new xt(a_,tR,"PUBLIC").setMultipleInstances(!0)),Et(Rf,Pf,""),Et(Rf,Pf,"esm2017")}nR();const d_="@firebase/installations",Bu="0.6.9";/**
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
 */const h_=1e4,f_=`w:${Bu}`,m_="FIS_v2",rR="https://firebaseinstallations.googleapis.com/v1",sR=60*60*1e3,iR="installations",oR="Installations";/**
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
 */const aR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fr=new qr(iR,oR,aR);function p_(n){return n instanceof Bt&&n.code.includes("request-failed")}/**
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
 */function g_({projectId:n}){return`${rR}/projects/${n}/installations`}function __(n){return{token:n.token,requestStatus:2,expiresIn:lR(n.expiresIn),creationTime:Date.now()}}async function y_(n,e){const r=(await e.json()).error;return Fr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function v_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function cR(n,{refreshToken:e}){const t=v_(n);return t.append("Authorization",uR(e)),t}async function w_(n){const e=await n();return e.status>=500&&e.status<600?n():e}function lR(n){return Number(n.replace("s","000"))}function uR(n){return`${m_} ${n}`}/**
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
 */async function dR({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=g_(n),s=v_(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:m_,appId:n.appId,sdkVersion:f_},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await w_(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:__(u.authToken)}}else throw await y_("Create Installation",l)}/**
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
 */function I_(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function hR(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fR=/^[cdef][\w-]{21}$/,Rl="";function mR(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=pR(n);return fR.test(t)?t:Rl}catch{return Rl}}function pR(n){return hR(n).substr(0,22)}/**
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
 */function oc(n){return`${n.appName}!${n.appId}`}/**
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
 */const E_=new Map;function T_(n,e){const t=oc(n);b_(t,e),gR(t,e)}function b_(n,e){const t=E_.get(n);if(t)for(const r of t)r(e)}function gR(n,e){const t=_R();t&&t.postMessage({key:n,fid:e}),yR()}let vr=null;function _R(){return!vr&&"BroadcastChannel"in self&&(vr=new BroadcastChannel("[Firebase] FID Change"),vr.onmessage=n=>{b_(n.data.key,n.data.fid)}),vr}function yR(){E_.size===0&&vr&&(vr.close(),vr=null)}/**
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
 */const vR="firebase-installations-database",wR=1,Br="firebase-installations-store";let jc=null;function Uu(){return jc||(jc=Na(vR,wR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Br)}}})),jc}async function Ca(n,e){const t=oc(n),s=(await Uu()).transaction(Br,"readwrite"),i=s.objectStore(Br),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&T_(n,e.fid),e}async function A_(n){const e=oc(n),r=(await Uu()).transaction(Br,"readwrite");await r.objectStore(Br).delete(e),await r.done}async function ac(n,e){const t=oc(n),s=(await Uu()).transaction(Br,"readwrite"),i=s.objectStore(Br),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&T_(n,c.fid),c}/**
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
 */async function $u(n){let e;const t=await ac(n.appConfig,r=>{const s=IR(r),i=ER(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Rl?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function IR(n){const e=n||{fid:mR(),registrationStatus:0};return S_(e)}function ER(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Fr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=TR(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bR(n)}:{installationEntry:e}}async function TR(n,e){try{const t=await dR(n,e);return Ca(n.appConfig,t)}catch(t){throw p_(t)&&t.customData.serverCode===409?await A_(n.appConfig):await Ca(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function bR(n){let e=await Cf(n.appConfig);for(;e.registrationStatus===1;)await I_(100),e=await Cf(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await $u(n);return r||t}return e}function Cf(n){return ac(n,e=>{if(!e)throw Fr.create("installation-not-found");return S_(e)})}function S_(n){return AR(n)?{fid:n.fid,registrationStatus:0}:n}function AR(n){return n.registrationStatus===1&&n.registrationTime+h_<Date.now()}/**
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
 */async function SR({appConfig:n,heartbeatServiceProvider:e},t){const r=RR(n,t),s=cR(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:f_,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await w_(()=>fetch(r,c));if(l.ok){const u=await l.json();return __(u)}else throw await y_("Generate Auth Token",l)}function RR(n,{fid:e}){return`${g_(n)}/${e}/authTokens:generate`}/**
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
 */async function ju(n,e=!1){let t;const r=await ac(n.appConfig,i=>{if(!R_(i))throw Fr.create("not-registered");const o=i.authToken;if(!e&&kR(o))return i;if(o.requestStatus===1)return t=PR(n,e),i;{if(!navigator.onLine)throw Fr.create("app-offline");const c=xR(i);return t=CR(n,c),c}});return t?await t:r.authToken}async function PR(n,e){let t=await kf(n.appConfig);for(;t.authToken.requestStatus===1;)await I_(100),t=await kf(n.appConfig);const r=t.authToken;return r.requestStatus===0?ju(n,e):r}function kf(n){return ac(n,e=>{if(!R_(e))throw Fr.create("not-registered");const t=e.authToken;return NR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function CR(n,e){try{const t=await SR(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ca(n.appConfig,r),t}catch(t){if(p_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await A_(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ca(n.appConfig,r)}throw t}}function R_(n){return n!==void 0&&n.registrationStatus===2}function kR(n){return n.requestStatus===2&&!DR(n)}function DR(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+sR}function xR(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function NR(n){return n.requestStatus===1&&n.requestTime+h_<Date.now()}/**
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
 */async function VR(n){const e=n,{installationEntry:t,registrationPromise:r}=await $u(e);return r?r.catch(console.error):ju(e).catch(console.error),t.fid}/**
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
 */async function LR(n,e=!1){const t=n;return await MR(t),(await ju(t,e)).token}async function MR(n){const{registrationPromise:e}=await $u(n);e&&await e}/**
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
 */function OR(n){if(!n||!n.options)throw qc("App Configuration");if(!n.name)throw qc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw qc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function qc(n){return Fr.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="installations",FR="installations-internal",BR=n=>{const e=n.getProvider("app").getImmediate(),t=OR(e),r=Kr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},UR=n=>{const e=n.getProvider("app").getImmediate(),t=Kr(e,P_).getImmediate();return{getId:()=>VR(t),getToken:s=>LR(t,s)}};function $R(){Mt(new xt(P_,BR,"PUBLIC")),Mt(new xt(FR,UR,"PRIVATE"))}$R();Et(d_,Bu);Et(d_,Bu,"esm2017");/**
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
 */const jR="/firebase-messaging-sw.js",qR="/firebase-cloud-messaging-push-scope",C_="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",KR="https://fcmregistrations.googleapis.com/v1",k_="google.c.a.c_id",GR="google.c.a.c_l",zR="google.c.a.ts",HR="google.c.a.e";var Df;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Df||(Df={}));/**
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
 */var Qi;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Qi||(Qi={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function WR(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Kc="fcm_token_details_db",QR=5,xf="fcm_token_object_Store";async function JR(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Kc))return null;let e=null;return(await Na(Kc,QR,{upgrade:async(r,s,i,o)=>{var c;if(s<2||!r.objectStoreNames.contains(xf))return;const l=o.objectStore(xf),u=await l.index("fcmSenderId").get(n);if(await l.clear(),!!u){if(s===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(c=h.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:cn(h.vapidKey)}}}else if(s===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:cn(h.auth),p256dh:cn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:cn(h.vapidKey)}}}else if(s===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:cn(h.auth),p256dh:cn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:cn(h.vapidKey)}}}}}})).close(),await Cc(Kc),await Cc("fcm_vapid_details_db"),await Cc("undefined"),YR(e)?e:null}function YR(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const XR="firebase-messaging-database",ZR=1,Ji="firebase-messaging-store";let Gc=null;function D_(){return Gc||(Gc=Na(XR,ZR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ji)}}})),Gc}async function e0(n){const e=x_(n),r=await(await D_()).transaction(Ji).objectStore(Ji).get(e);if(r)return r;{const s=await JR(n.appConfig.senderId);if(s)return await qu(n,s),s}}async function qu(n,e){const t=x_(n),s=(await D_()).transaction(Ji,"readwrite");return await s.objectStore(Ji).put(e,t),await s.done,e}function x_({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},lt=new qr("messaging","Messaging",t0);/**
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
 */async function n0(n,e){const t=await Gu(n),r=N_(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(Ku(n.appConfig),s)).json()}catch(o){throw lt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw lt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw lt.create("token-subscribe-no-token");return i.token}async function r0(n,e){const t=await Gu(n),r=N_(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Ku(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw lt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw lt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw lt.create("token-update-no-token");return i.token}async function s0(n,e){const r={method:"DELETE",headers:await Gu(n)};try{const i=await(await fetch(`${Ku(n.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw lt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw lt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Ku({projectId:n}){return`${KR}/projects/${n}/registrations`}async function Gu({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function N_({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==C_&&(s.web.applicationPubKey=r),s}/**
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
 */const i0=7*24*60*60*1e3;async function o0(n){const e=await c0(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:cn(e.getKey("auth")),p256dh:cn(e.getKey("p256dh"))},r=await e0(n.firebaseDependencies);if(r){if(l0(r.subscriptionOptions,t))return Date.now()>=r.createTime+i0?a0(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await s0(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Nf(n.firebaseDependencies,t)}else return Nf(n.firebaseDependencies,t)}async function a0(n,e){try{const t=await r0(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await qu(n.firebaseDependencies,r),t}catch(t){throw t}}async function Nf(n,e){const r={token:await n0(n,e),createTime:Date.now(),subscriptionOptions:e};return await qu(n,r),r.token}async function c0(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:WR(e)})}function l0(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return u0(e,n),d0(e,n),h0(e,n),e}function u0(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function d0(n,e){e.data&&(n.data=e.data)}function h0(n,e){var t,r,s,i,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;c&&(n.fcmOptions.link=c);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(n.fcmOptions.analyticsLabel=l)}/**
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
 */function f0(n){return typeof n=="object"&&!!n&&k_ in n}/**
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
 */function m0(n){if(!n||!n.options)throw zc("App Configuration Object");if(!n.name)throw zc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw zc(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function zc(n){return lt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=m0(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(n){try{n.swRegistration=await navigator.serviceWorker.register(jR,{scope:qR}),n.swRegistration.update().catch(()=>{})}catch(e){throw lt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(n,e){if(!e&&!n.swRegistration&&await g0(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw lt.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=C_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(n,e){if(!navigator)throw lt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw lt.create("permission-blocked");return await y0(n,e==null?void 0:e.vapidKey),await _0(n,e==null?void 0:e.serviceWorkerRegistration),o0(n)}/**
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
 */async function v0(n,e,t){const r=w0(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[k_],message_name:t[GR],message_time:t[zR],message_device_time:Math.floor(Date.now()/1e3)})}function w0(n){switch(n){case Qi.NOTIFICATION_CLICKED:return"notification_open";case Qi.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Qi.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Vf(t)):n.onMessageHandler.next(Vf(t)));const r=t.data;f0(r)&&r[HR]==="1"&&await v0(n,t.messageType,r)}const Lf="@firebase/messaging",Mf="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=n=>{const e=new p0(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>I0(e,t)),e},T0=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>V_(e,r)}};function b0(){Mt(new xt("messaging",E0,"PUBLIC")),Mt(new xt("messaging-internal",T0,"PRIVATE")),Et(Lf,Mf),Et(Lf,Mf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(){try{await Jf()}catch{return!1}return typeof window<"u"&&xl()&&Gy()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(n,e){if(!navigator)throw lt.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(n=Ll()){return L_().then(e=>{if(!e)throw lt.create("unsupported-browser")},e=>{throw lt.create("indexed-db-unsupported")}),Kr(Ie(n),"messaging").getImmediate()}async function R0(n,e){return n=Ie(n),V_(n,e)}function P0(n,e){return n=Ie(n),A0(n,e)}b0();const C0={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},cc=Zf(C0),ho=IE(cc),j=TA(cc,{localCache:$A({tabManager:GA()})}),M_=ZS(cc);let Yi=null;const O_=L_().then(n=>(n&&(Yi=S0(cc)),n)),m={user:null,profile:null,isAdmin:!1,isSuperAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,meetups:[],currentCourse:null,courseMap:null,courseMapLayer:null,approvedDraft:{new:[],edit:[]},gpsTracking:!1,warnThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0,shareRequests:[],viewingUid:null,viewingName:null,viewedRounds:{},compareUid1:void 0,compareUid2:void 0};function K(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function q(n,e="info"){const t=document.createElement("div");t.className=`toast toast-${e}`,t.textContent=n,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("toast-show")),setTimeout(()=>{t.classList.remove("toast-show"),setTimeout(()=>t.remove(),300)},3500)}function tr(n,e){const t=document.getElementById("confirm-modal");document.getElementById("confirm-msg").textContent=n,t.classList.remove("hidden");const r=()=>{t.classList.add("hidden"),window._confirmAccept=null,window._confirmReject=null};window._confirmAccept=()=>{r(),e()},window._confirmReject=()=>{r()}}const F_="archery_v5",k0="archery_v4";function Of(){try{const n=JSON.parse(localStorage.getItem(F_)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(k0)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function Dt(){try{localStorage.setItem(F_,JSON.stringify({friends:m.friends,rounds:m.rounds.slice(0,200),courses:m.courses}))}catch(n){(n==null?void 0:n.name)==="QuotaExceededError"&&q("Lokalt lager er fuldt — nogle data blev ikke gemt","error")}}function D0(n){const e=m.shareRequests.find(t=>{var r;return t.viewerUid===((r=m.user)==null?void 0:r.uid)&&t.ownerUid===n});return e?e.status==="afventer"?`<span class="share-badge share-badge-afventer">Afventer</span><button class="btn-icon" onclick="window.cancelShareRequest('${e.id}')" title="Fortryd anmodning">✕</button>`:e.status==="accepteret"?'<span class="share-badge share-badge-accepteret">Kan se resultater ✅</span>':`<span class="share-badge share-badge-afvist">Afvist</span><button class="btn-share-req" data-share-friend="${n}">Prøv igen</button>`:`<button class="btn-share-req" data-share-friend="${n}">🔎 Må jeg kigge med?</button>`}function Ar(){const n=document.getElementById("friends-list");if(!m.friends.length){n.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}n.innerHTML="",m.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${K(e.name)}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).map(K).join(" · ")}</div><div class="fshare-row">${D0(e.id)}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del">🗑</button></div>`,t.querySelector(".frd-edit").addEventListener("click",()=>openFriendModal(e)),t.querySelector(".frd-del").addEventListener("click",()=>doDeleteFriend(e.id,e.name));const r=t.querySelector("[data-share-friend]");r&&r.addEventListener("click",()=>window.requestViewAccess(e.id,e.name)),n.appendChild(t)})}window.renderFriendsList=Ar;function Xi(){const n=document.getElementById("qfriends");n.innerHTML="",m.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=m.friends.filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await qe(Be(j,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=m.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...r];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" data-id="${K(i.id)}" data-name="${K(i.name||"")}" data-email="${K(i.email||"")}">${K(i.name)}${i.email?` <span style='font-size:11px;opacity:.6'>${K(i.email)}</span>`:""}</div>`).join(""),e.querySelectorAll(".ac-item").forEach(i=>i.addEventListener("click",()=>{selectFriend(i.dataset.id,i.dataset.name,i.dataset.email),document.getElementById("friend-search").value="",document.getElementById("ac-list").classList.add("hidden")})),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){if(!m.friends.find(r=>r.id===n)){const r={id:n,name:e,email:t};m.friends.push(r),Dt(),Ar(),Xi(),m.user&&ft(X(j,"users",m.user.uid,"friends",n),r).catch(s=>console.warn(s))}window.addParticipant(n,e)};window.openFriendModal=function(n){m.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=n?"Rediger ven":"Tilføj ven",document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim().slice(0,80),email:document.getElementById("f-email").value.trim().slice(0,100),phone:document.getElementById("f-phone").value.trim().slice(0,30),club:document.getElementById("f-club").value.trim().slice(0,80),bowType:document.getElementById("f-bow").value};if(!n.name)return;if(m.editFriendId){const r=m.friends.findIndex(s=>s.id===m.editFriendId);r!==-1?m.friends[r]={...n,id:m.editFriendId}:m.friends.push({...n,id:m.editFriendId})}else m.friends.push({...n,id:"f_"+Date.now()});const e=m.editFriendId||"f_"+Date.now();m.editFriendId||(m.friends[m.friends.length-1].id=e);const t=m.friends.find(r=>r.id===(m.editFriendId||e));t&&m.user&&ft(X(j,"users",m.user.uid,"friends",t.id),t).catch(r=>console.warn(r)),Dt(),document.getElementById("friend-modal").classList.add("hidden"),Ar(),Xi()};window.doDeleteFriend=function(n,e){tr(`Slet ${e}?`,()=>{m.friends=m.friends.filter(t=>t.id!==n),Dt(),Ar(),Xi(),m.user&&Nt(X(j,"users",m.user.uid,"friends",n)).catch(t=>console.warn(t))})};const x0=[11,10,8,5,"M"],zu={WA:{label:"WA",arrowsPerTarget:2,scoreValues:[11,10,8,5,"M"],warnThreshold:8},"HDH-IAA":{label:"HDH-IAA",arrowsPerTarget:1,scoreValues:[11,10,8,5,"M"],warnThreshold:8},DGS:{label:"DGS",arrowsPerTarget:2,scoreValues:[5,3,-1,"M"],warnThreshold:4}},Ur="WA";function Ut(n){var e;return((e=zu[n])==null?void 0:e.arrowsPerTarget)??2}function $r(n){var e;return((e=zu[n])==null?void 0:e.scoreValues)??x0}function N0(n){var e;return((e=zu[n])==null?void 0:e.warnThreshold)??8}function we(n){return n==="M"||n==null?0:Number(n)}function jr(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":t==="-"?null:Number(t))):[]}function Pl(n){return n.map(e=>e.map(t=>t??"-").join(",")).join(";")}function ct(n){return n.flat().reduce((e,t)=>e+we(t),0)}function V0(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(s=>s!=null).map(we));return t.length?(t.reduce((r,s)=>r+s,0)/t.length).toFixed(1):null}function Hu(n,e){const t={};return $r(e).forEach(r=>{t[r]=0}),n.flat().forEach(r=>{r!=null&&t[r]!==void 0&&t[r]++}),t}function Wu(n){return n.length?n.reduce((e,t)=>ct(t.scores)>ct(e.scores)?t:e,n[0]):null}function L0(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,s)=>r+we(s),0)/t.length<e:!1}function M0(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function O0(n,e,t=2){for(;n.scores.length<e;)n.scores.push(Array(t).fill(null))}function F0(n,e,t=2){let r=0;for(let s=0;s<e;s++)n.every(i=>{const o=i.scores[s]||[];return o.length>=t&&o.slice(0,t).every(c=>c!=null)})&&r++;return r}function B_(n){return{id:n.id||null,name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,ruleset:n.ruleset||Ur,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:Pl(e.scores)}))}}function B0(n){return{...n,ruleset:n.ruleset||Ur,shooters:(n.shooters||[]).map(e=>({...e,scores:jr(e.scores)}))}}function Qu(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}let na=null,ra=!1,Sr=!1,Cl=[],Vi=null,Ei=0,Wt=null,kl=null,mi=null;function U_(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function Ju(n,e){const r=(e.lat-n.lat)*Math.PI/180,s=(e.lng-n.lng)*Math.PI/180,i=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function $_(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function j_(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function U0(n){return navigator.geolocation?(mi=n,Cl=[],Ei=0,Wt=null,Vi=Date.now(),Sr=!1,ra=!0,na=navigator.geolocation.watchPosition(e=>{if(!ra||Sr)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};Wt&&(Ei+=Ju(Wt,t)),Wt=t,Cl.push(t),mi&&mi({lat:t.lat,lng:t.lng,distance:Ei,elapsed:Math.round((Date.now()-Vi)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),kl=setInterval(()=>{ra&&!Sr&&mi&&mi({lat:Wt==null?void 0:Wt.lat,lng:Wt==null?void 0:Wt.lng,distance:Ei,elapsed:Math.round((Date.now()-Vi)/1e3)})},1e3),!0):!1}function $0(){return Sr=!Sr,Sr}function q_(){return ra=!1,Sr=!1,na!==null&&(navigator.geolocation.clearWatch(na),na=null),clearInterval(kl),kl=null,{route:Cl.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round(Ei),duration:Vi?Math.round((Date.now()-Vi)/1e3):0}}function lc(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function j0(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((s,i)=>{if(!s.gps)return;const o=Ju(e,s.gps);o<t&&(t=o,r=i)}),r}function q0(n){const e=n.data();return{id:n.id,name:e.name||e.yam||"—",numTargets:e.numTargets||e.antalMål||24,location:e.location||e.beliggenhed||"",targets:e.targets||e.mål||[],visits:e.visits||e.besøg||[],private:e.private??e.privat??!1,hidden:e.hidden??e.skjult??!1,approvedUsers:e.approvedUsers||e.godkendteBrugere||[],ownerId:e.ownerId||null}}function K0(n){var e;return m.isAdmin||!!n.ownerId&&n.ownerId===((e=m.user)==null?void 0:e.uid)}async function G0(){var n;try{const e=(((n=m.user)==null?void 0:n.email)||"").toLowerCase();let t;if(m.isAdmin)t=[await qe(Be(j,"courses"))];else{const i=[qe(Vs(Be(j,"courses"),Tr("hidden","==",!1)))];e&&i.push(qe(Vs(Be(j,"courses"),Tr("hidden","==",!0),Tr("approvedUsers","array-contains",e)))),t=await Promise.all(i)}const r=new Map;t.forEach(i=>i.docs.forEach(o=>r.set(o.id,o)));const s=[...r.values()].map(q0);s.length&&(m.courses=s,Dt(),fo(),window.populateCourseDropdown())}catch(e){console.warn("courses:",e)}}function fo(){const n=document.getElementById("courses-list");if(!m.courses.length){n.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}n.innerHTML="",m.courses.forEach(e=>{const t=document.createElement("div");t.className="ccard",t.innerHTML=`<div class="ccard-name">${K(e.name)}${e.private?' <span class="ccard-private-note">(Banen er kun for medlemmer)</span>':""}</div><div class="ccard-meta">${e.numTargets} mål · ${K(e.location||"—")}</div>`,t.onclick=()=>z0(e),n.appendChild(t)})}function z0(n){m.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name+(n.private?" (Banen er kun for medlemmer)":""),document.getElementById("course-edit-stab-btn").classList.toggle("hidden",!K0(n)),window.switchSubtab("map"),H0(n),W0(n),mo(n)}function H0(n){const e=document.getElementById("course-map");m.courseMap&&(m.courseMap.remove(),m.courseMap=null),m.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(m.courseMap);const t=[];(n.targets||[]).forEach((r,s)=>{const i=r.gps||r.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div class="map-marker-num">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(m.courseMap).bindPopup(`<b>${s+1}. ${r.name||"Mål"}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" class="popup-target-img"/>`:""}`))}),t.length?m.courseMap.fitBounds(t,{padding:[20,20]}):m.courseMap.setView([55.7,12.5],10)}function W0(n){const e=document.getElementById("visits-list"),t=m.rounds.filter(r=>r.courseId===n.id).map(r=>{const s=(r.shooters||[]).map(o=>({...o,scores:jr(o.scores)})),i=Wu(s);return{roundId:r.id,date:r.completed?new Date(r.completed).toLocaleDateString("da-DK"):r.created?new Date(r.created).toLocaleDateString("da-DK"):"—",participants:s.map(o=>o.name),winner:i==null?void 0:i.name,winnerScore:i?ct(i.scores):0}});if(!t.length){e.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}e.innerHTML="",t.forEach(r=>{const s=document.createElement("div");s.className="visit-card",s.onclick=i=>{i.target.closest(".btn-icon")||window.showVisitResults(r.roundId)},s.innerHTML=`<div class="visit-card-head"><span class="visit-card-date">${K(r.date)}</span><button class="btn-icon" onclick="window.showVisitResults('${K(r.roundId)}')" title="Se resultat">📊</button></div><div class="visit-card-participants">${(r.participants||[]).map(K).join(", ")}</div>${r.winner?`<div class="visit-card-winner">🏆 ${K(r.winner)} (${r.winnerScore} pt)</div>`:""}`,e.appendChild(s)})}function mo(n){const e=n.targets||[];let t=`
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
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t,m.approvedDraft.edit=[...n.approvedUsers||[]],uc("edit")}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim().slice(0,100),e=document.getElementById("edit-cloc").value.trim().slice(0,100),t=document.getElementById("edit-cvisibility").value,r=t!=="public",s=t==="hidden",i=s?[...m.approvedDraft.edit]:[];if(!n)return;await Je(X(j,"courses",m.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i}),m.currentCourse.name=n,m.currentCourse.location=e,m.currentCourse.private=r,m.currentCourse.hidden=s,m.currentCourse.approvedUsers=i;const o=m.courses.findIndex(c=>c.id===m.currentCourse.id);o>-1&&(m.courses[o]={...m.courses[o],name:n,location:e,private:r,hidden:s,approvedUsers:i}),Dt(),fo(),document.getElementById("course-detail-title").textContent=n+(r?" (Banen er kun for medlemmer)":""),q("Gemt!","success")};window.updateTargetField=function(n,e,t){var r;(r=m.currentCourse)!=null&&r.targets&&(m.currentCourse.targets[n][e]=t)};window.addTargetToCurrentCourse=async function(){if(!m.currentCourse)return;const n=[...m.currentCourse.targets||[]];n.push({number:n.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await Je(X(j,"courses",m.currentCourse.id),{targets:n}),m.currentCourse.targets=n,mo(m.currentCourse),q(`Mål ${n.length} tilføjet!`,"success")};window.deleteTargetFromCourse=function(n){var e;(e=m.currentCourse)!=null&&e.targets&&tr(`Slet mål ${n+1}?`,async()=>{try{const t=[...m.currentCourse.targets];t.splice(n,1),t.forEach((r,s)=>r.number=s+1),await Je(X(j,"courses",m.currentCourse.id),{targets:t,numTargets:t.length}),m.currentCourse.targets=t,m.currentCourse.numTargets=t.length,mo(m.currentCourse)}catch{q("Fejl: Kunne ikke slette mål","error")}})};window.setTargetGps=async function(n){var e;if((e=m.currentCourse)!=null&&e.targets)try{const t=await lc();m.currentCourse.targets[n].gps=t,await Je(X(j,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),mo(m.currentCourse),q(`GPS sat for mål ${n+1}!`,"success")}catch(t){q("GPS fejl: "+t.message,"error")}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await G_(t),s=u_(M_,`courses/${m.currentCourse.id}/target_${n}.jpg`);await c_(s,r,"base64",{contentType:"image/jpeg"});const i=await l_(s);m.currentCourse.targets[n].imageUrl=i,await Je(X(j,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),mo(m.currentCourse),q("Foto gemt!","success")}catch(r){q("Upload fejl: "+r.message,"error")}};window.saveAllTargets=async function(){var n;(n=m.currentCourse)!=null&&n.targets&&(await Je(X(j,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),q("Alle mål gemt!","success"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&m.courseMap&&setTimeout(()=>m.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await lc();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(m.courseMap),m.courseMap.panTo([e.lat,e.lng])}catch{q("GPS ikke tilgængeligt","error"),n.classList.remove("on")}};window.doDeleteCourse=function(){if(!m.currentCourse)return;const n=m.currentCourse.id,e=m.currentCourse.name;tr(`Slet banen "${e}"?`,async()=>{try{await Nt(X(j,"courses",n)),m.courses=m.courses.filter(t=>t.id!==n),m.currentCourse=null,Dt(),fo(),window.populateCourseDropdown(),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"),q("Bane slettet","success")}catch{q("Fejl: Kunne ikke slette bane","error")}})};const ka={new:"new-course-approved",edit:"edit-capproved"};function uc(n){const e=m.approvedDraft[n];document.getElementById(`${ka[n]}-chips`).innerHTML=e.length?e.map(t=>`<span class="approved-chip">${K(t)}<span class="approved-chip-remove" onclick="removeApprovedEmail('${n}','${K(t)}')">✕</span></span>`).join(""):'<span class="approved-empty">Ingen godkendt endnu</span>'}function K_(n,e){const t=e.trim().toLowerCase();!t||!t.includes("@")||(m.approvedDraft[n].includes(t)||m.approvedDraft[n].push(t),uc(n))}window.removeApprovedEmail=function(n,e){m.approvedDraft[n]=m.approvedDraft[n].filter(t=>t!==e),uc(n)};window.addApprovedEmailManual=function(n){const e=document.getElementById(`${ka[n]}-manual`);K_(n,e.value),e.value=""};window.searchApprovedUsers=async function(n,e){const t=document.getElementById(`${ka[n]}-ac`);if(!e.trim()){t.classList.add("hidden");return}let r=[];try{r=(await qe(Be(j,"users"))).docs.map(i=>i.data()).map(i=>({name:i.name||i.yam||i.email||"—",email:(i.email||i["e-mail"]||"").toLowerCase()})).filter(i=>i.email&&(i.name.toLowerCase().includes(e.toLowerCase())||i.email.includes(e.toLowerCase())))}catch(s){console.warn(s)}if(!r.length){t.classList.add("hidden");return}t.innerHTML=r.map(s=>`<div class="ac-item" data-email="${K(s.email)}">${K(s.name)} <span style='font-size:11px;opacity:.6'>${K(s.email)}</span></div>`).join(""),t.querySelectorAll(".ac-item").forEach(s=>s.addEventListener("click",()=>{K_(n,s.dataset.email),document.getElementById(`${ka[n]}-search`).value="",t.classList.add("hidden")})),t.classList.remove("hidden")};window.openCreateCourseModal=function(){m.approvedDraft.new=[],uc("new"),document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",document.getElementById("create-course-modal").classList.remove("hidden")};window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim().slice(0,100),e=document.getElementById("new-course-loc").value.trim().slice(0,100),t=document.getElementById("new-course-visibility").value,r=t!=="public",s=t==="hidden",i=s?[...m.approvedDraft.new]:[],o=document.getElementById("new-course-targets"),c=(o.value==="custom"?Number(document.getElementById("new-course-targets-custom").value):Number(o.value))||24;if(!n)return;const l=Array.from({length:c},(u,h)=>({number:h+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));try{const u=m.user.uid,h=await jg(Be(j,"courses"),{name:n,yam:n,numTargets:c,antalMål:c,location:e,beliggenhed:e,targets:l,mål:l,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i,ownerId:u,created:Ue(),visits:[],besøg:[]});m.courses.unshift({id:h.id,name:n,numTargets:c,location:e,targets:l,visits:[],private:r,hidden:s,approvedUsers:i,ownerId:u}),Dt(),fo(),window.populateCourseDropdown(),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value="",document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",q("Bane oprettet!","success")}catch{q("Fejl: Kunne ikke oprette bane","error")}};async function Yu(n,e,t){const r=X(j,"courses",n),s=await Qn(r);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await Je(r,{targets:o,mål:o})}function G_(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,l=i.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const u=document.createElement("canvas");u.width=c,u.height=l,u.getContext("2d").drawImage(i,0,0,c,l),e(u.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},r.onerror=t,r.readAsDataURL(n)})}async function Q0(n,e){const t=X(j,"courses",n),r=await Qn(t);if(!r.exists())return;const s=(r.data().visits||[]).filter(o=>o.roundId!==e);await Je(t,{visits:s});const i=m.courses.find(o=>o.id===n);i&&(i.visits=s)}let Ti=[];async function J0(){if(m.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{await Xu()}catch(n){console.warn(n)}if(m.isSuperAdmin){document.getElementById("users-section").classList.remove("hidden");try{Ti=(await qe(Be(j,"users"))).docs.map(e=>({uid:e.id,...e.data()})).sort((e,t)=>(e.name||e.yam||"").localeCompare(t.name||t.yam||"","da")),z_()}catch(n){console.warn(n)}}}}async function Xu(){const n=document.getElementById("admins-list");if(!n)return;n.innerHTML='<div class="admin-hint">Henter admins…</div>';const e=await qe(Be(j,"admins"));if(e.empty){n.innerHTML='<div class="admin-hint">Ingen admins fundet</div>';return}n.innerHTML='<div class="admin-list-label">NUVÆRENDE ADMINISTRATORER</div>',e.docs.forEach(t=>{var o;const r=document.createElement("div");r.className="admin-row";const s=t.data().email||t.id,i=t.id===((o=m.user)==null?void 0:o.uid);if(r.innerHTML=`<span class="admin-row-email">${K(s)}${i?' <span class="admin-you-tag">(dig)</span>':""}</span>`,m.isSuperAdmin&&!i){const c=document.createElement("button");c.className="btn btn-dark btn-sm admin-remove-btn",c.textContent="Fjern",c.onclick=()=>doRemoveAdmin(t.id,s),r.appendChild(c)}n.appendChild(r)})}const Hc=[{label:"Sidste 7 dage",ms:7*864e5},{label:"Sidste 30 dage",ms:30*864e5},{label:"Sidste 365 dage",ms:365*864e5}];window.loadUsageStats=async function(){const n=document.getElementById("usage-stats-result");if(n){n.textContent="Henter…";try{const e=await qe(EA(j,"runder")),t=Date.now(),r=Hc.map(()=>0);let s=0;e.forEach(o=>{var u,h;s++;const c=(h=(u=o.data().dato)==null?void 0:u.toDate)==null?void 0:h.call(u);if(!c)return;const l=t-c.getTime();Hc.forEach((p,g)=>{l<=p.ms&&r[g]++})});const i=Hc.map((o,c)=>`<div class="usage-stat-row"><span>${K(o.label)}</span><b>${r[c]}</b></div>`).join("");n.innerHTML=`${i}<div class="usage-stat-row usage-stat-total"><span>I alt registreret</span><b>${s}</b></div>`}catch(e){n.textContent="Fejl: "+e.message}}};const Y0={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"};function z_(n=""){const e=document.getElementById("users-list");e.innerHTML="";const t=n.toLowerCase(),r=t?Ti.filter(c=>(c.name||c.yam||"").toLowerCase().includes(t)||(c.email||c["e-mail"]||"").toLowerCase().includes(t)):Ti;document.getElementById("users-count").textContent=`${Ti.length} brugere`;const s=document.getElementById("users-summary"),i={};Ti.forEach(c=>{const l=c.bueklasse||"Ukendt";i[l]=(i[l]||0)+1});const o=Object.entries(i).sort((c,l)=>l[1]-c[1]).map(([c,l])=>`<span class="bow-chip"><b>${l}</b> ${K(Y0[c]||c)}</span>`).join("");s.innerHTML=`<div class="bow-chips-wrap">${o}</div>`,r.forEach(c=>{var g;const l=document.createElement("div");l.className="urow";const u=(g=c.created)!=null&&g.toDate?c.created.toDate().toLocaleDateString("da-DK"):"—",h=c.bueklasse||"",p=c.kon==="m"?"♂":c.kon==="k"?"♀":"";l.innerHTML=`<span class="un">${K(c.name||c.yam||"—")}</span><span class="ue">${K(c.email||c["e-mail"]||"")}</span><span class="ubow">${K(h)}${p?` ${K(p)}`:""}</span><span class="ud">${K(u)}</span>`,e.appendChild(l)})}window.filterUsers=function(n){z_(n)};window.doAddAdmin=async function(){if(!m.isSuperAdmin)return;const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await qe(Be(j,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){q("Bruger ikke fundet","error");return}await ft(X(j,"admins",t.id),{email:n,created:Ue()}),q(`${t.data().name||n} er nu admin`,"success"),document.getElementById("admin-email").value="",await Xu()}catch(e){q("Fejl: "+e.message,"error")}};window.doRemoveAdmin=async function(n,e){if(m.isSuperAdmin&&confirm(`Fjern ${e} som administrator?`))try{await Nt(X(j,"admins",n)),q(`${e} er fjernet som admin`,"success"),await Xu()}catch(t){q("Fejl: "+t.message,"error")}};function H_(n,e,t){const r=Hu(n.scores,e.ruleset),s=ct(n.scores),i=n.scores.flat().filter(l=>l!=null),o=i.length?(i.reduce((l,u)=>l+we(u),0)/i.length).toFixed(2):"—";let c="";if(t>=2){const l=n.scores.map(g=>(g||[])[0]).filter(g=>g!=null),u=n.scores.map(g=>(g||[])[1]).filter(g=>g!=null),h=l.length?(l.reduce((g,y)=>g+we(y),0)/l.length).toFixed(2):"—",p=u.length?(u.reduce((g,y)=>g+we(y),0)/u.length).toFixed(2):"—";c=`<div class="dist-row"><span>Snit pil 1</span><span>${h}</span></div><div class="dist-row"><span>Snit pil 2</span><span>${p}</span></div>`}return`<div class="dist-name">${K(n.name)}</div><div class="dist-row dist-row-total"><span>Total</span><span>${s} pt</span></div>${c}<div class="dist-row dist-row-border"><span>Samlet snit</span><span>${o}</span></div>${Object.entries(r).map(([l,u])=>`<div class="dist-row"><span>${l}</span><span>${u}x</span></div>`).join("")}`}let bi=null;function X0(n){bi=n;const e=Ut(n.ruleset);return'<div class="dist-grid">'+n.shooters.map((t,r)=>`<div class="dist-card" onclick="window.showDistCardEnlarged(${r})">${H_(t,n,e)}</div>`).join("")+"</div>"}window.showDistCardEnlarged=function(n){if(!bi)return;const e=bi.shooters[n];if(!e)return;const t=document.getElementById("dist-enlarge-body");t&&(t.innerHTML=H_(e,bi,Ut(bi.ruleset)),document.getElementById("dist-enlarge-ov").classList.remove("hidden"))};function Z0(n){const e=Wu(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${K((e==null?void 0:e.name)||"—")}</div><div class="win-score">${e?ct(e.scores):0} point</div>`,document.getElementById("res-table").innerHTML=W_(n),document.getElementById("res-dist").innerHTML=X0(n)}function W_(n){const e=(n.startTarget||1)-1,t=Ut(n.ruleset);let r=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${n.shooters.map(s=>`<th>${s.name}</th>`).join("")}</tr>`;for(let s=0;s<n.numTargets;s++)r+=`<tr><td class="tc">${s===e?'<span class="start-target-dot"></span>':""}${s+1}</td>`,n.shooters.forEach(o=>{const c=o.scores[s]||Array(t).fill(null),l=c.reduce((u,h)=>u+(h!=null&&h!=="M"?Number(h):0),0);r+=`<td>${c.map(u=>u??"—").join("/")}<br><small>${l}</small></td>`}),r+="</tr>";return r+=`<tr class="tr-tot"><td class="tc">Total</td>${n.shooters.map(s=>`<td>${ct(s.scores)}</td>`).join("")}</tr></table></div>`,r}function eP(n){const e=$r(n.ruleset),t=Ut(n.ruleset);return n.shooters.map(r=>{const s=ct(r.scores),i=r.scores.flat().filter(h=>h!=null),o=i.length,c=o?(i.reduce((h,p)=>h+we(p),0)/o).toFixed(2):"—",l=Hu(r.scores,n.ruleset);let u="";if(t>=2){const h=r.scores.map(A=>(A||[])[0]).filter(A=>A!=null),p=r.scores.map(A=>(A||[])[1]).filter(A=>A!=null),g=h.length?(h.reduce((A,k)=>A+we(k),0)/h.length).toFixed(2):"—",y=p.length?(p.reduce((A,k)=>A+we(k),0)/p.length).toFixed(2):"—";u=`<div class="summary-stats-row2">
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${g}</div>
          <div class="summary-stat-lbl">SNIT PIL 1</div>
        </div>
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${y}</div>
          <div class="summary-stat-lbl">SNIT PIL 2</div>
        </div>
      </div>`}return`<div class="summary-card">
      <div class="summary-card-name">${K(r.name)}</div>
      <div class="summary-stats-row3">
        <div class="summary-stat-box">
          <div class="summary-stat-val">${s}</div>
          <div class="summary-stat-lbl">POINT</div>
        </div>
        <div class="summary-stat-box">
          <div class="summary-stat-val">${o}</div>
          <div class="summary-stat-lbl">PILE</div>
        </div>
        <div class="summary-stat-box">
          <div class="summary-stat-val">${c}</div>
          <div class="summary-stat-lbl">SNT/PIL</div>
        </div>
      </div>
      ${u}
      <div class="summary-zones-row">
        ${e.map(h=>`<div><div class="summary-zone-key">${h}</div><div class="summary-zone-val">${l[h]||0}</div></div>`).join("")}
      </div>
    </div>`}).join("")}function tP(n){const e=Ut(n.ruleset),t=n.shooters.map(s=>{const i=s.scores.filter(p=>{const g=p||Array(e).fill(null);return g.length>=e&&g.slice(0,e).every(y=>y!==null)});if(!i.length||i.length===n.numTargets)return null;const o=i.flat().filter(p=>p!==null),c=o.reduce((p,g)=>p+we(g),0),l=o.length,u=l?(c/l).toFixed(2):0,h=i.length?(c/i.length).toFixed(1):0;return{name:s.name,shot:i.length,total:c,avgPil:u,avgMaal:h}}).filter(Boolean);return t.length?`<div class="actual-results-wrap"><div class="actual-results-title">Kun skudte mål</div><div class="actual-results-cards">${t.map(s=>`<div class="actual-card"><div class="actual-card-name">${s.name}</div><div class="actual-card-sub">${s.shot} af ${n.numTargets} mål</div><div class="actual-card-total">${s.total}</div><div class="actual-card-total-lbl">POINT</div><div class="actual-card-avgs"><div><div class="actual-avg-val">${s.avgPil}</div><div class="actual-avg-lbl">SNT/PIL</div></div><div><div class="actual-avg-val">${s.avgMaal}</div><div class="actual-avg-lbl">SNT/MÅL</div></div></div></div>`).join("")}</div></div>`:""}function Zi(){const n=document.getElementById("rounds-list");if(!m.rounds.length){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}n.innerHTML="",m.rounds.forEach(e=>{const t=(e.shooters||[]).map(l=>({...l,scores:jr(l.scores)})),r=t.length?Wu(t):null,s=e.created,i=s!=null&&s.toDate?s.toDate().toLocaleDateString("da-DK"):s!=null&&s.seconds?new Date(s.seconds*1e3).toLocaleDateString("da-DK"):typeof s=="number"?new Date(s).toLocaleDateString("da-DK"):"—",o=document.createElement("div");o.className="rcard";const c=e.ruleset&&e.ruleset!=="WA"?` · <span class="rcard-ruleset-tag">${K(e.ruleset)}</span>`:"";o.innerHTML=`<div class="rcard-info"><div class="rcard-name">${K(e.name||"Runde")}</div><div class="rcard-meta"><span class="rcard-date">${K(i)}</span> · ${K(e.courseName||e.numTargets+" mål")}${c}</div><div class="rcard-win">🏆 ${K((r==null?void 0:r.name)||"—")} (${r?ct(r.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser">📈</button><button class="del-btn" data-id="${K(e.id)}">✕</button>`,o.querySelector(".rcard-info").onclick=()=>Zu({...e,shooters:t}),o.querySelector(".rcard-analyse").onclick=()=>window.analyseRound(e.id),o.querySelector(".del-btn").onclick=l=>{const u=l.currentTarget,h=`r-${e.id}`;m.deleteConfirm[h]?(delete m.deleteConfirm[h],m.rounds=m.rounds.filter(p=>p.id!==e.id),Dt(),Zi(),m.user&&Nt(X(j,"users",m.user.uid,"rounds",e.id)).catch(p=>console.warn(p)),m.user&&e.courseId&&Nt(X(j,"bane_stats",e.courseId,"runder",e.id)).catch(p=>console.warn(p)),e.courseId&&Q0(e.courseId,e.id).catch(p=>console.warn(p))):(m.deleteConfirm[h]=!0,u.classList.add("conf"),u.textContent="Slet?",setTimeout(()=>{delete m.deleteConfirm[h],u.classList.remove("conf"),u.textContent="✕"},3e3))},n.appendChild(o)})}function Zu(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),m.rpopMap&&(m.rpopMap.remove(),m.rpopMap=null);const t=n.gpsRoute||n.route||null,r=n.gpsDuration||n.duration||null,s=n.gpsDistance||n.distance||null,i=r?$_(r):null,o=s?j_(s):null,c=o||i?`<div class="rpop-gps-row">${o?`<div class="rpop-gps-box"><div class="rpop-gps-val">${o}</div><div class="rpop-gps-lbl">DISTANCE</div></div>`:""}${i?`<div class="rpop-gps-box"><div class="rpop-gps-val">${i}</div><div class="rpop-gps-lbl">TID</div></div>`:""}</div>${t?'<div id="rpop-map"></div>':""}`:"";if(document.getElementById("rpop-body").innerHTML=`<h3 class="rpop-title">${K(n.name)}</h3>${c}`+eP(n)+W_(n)+tP(n)+'<button class="btn btn-gold rpop-send-btn" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>',t){const l=U_(t);l.length&&setTimeout(()=>{const u=document.getElementById("rpop-map");if(!u)return;m.rpopMap=window.L.map(u),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(m.rpopMap);const h=window.L.polyline(l.map(p=>[p.lat,p.lng]),{color:"#e8a020",weight:3}).addTo(m.rpopMap);m.rpopMap.fitBounds(h.getBounds(),{padding:[20,20]})},50)}}window.sendResults=async function(n){if(!n){q("Ingen runde at sende","error");return}const e=new Date().toLocaleDateString("da-DK");let t=`3D Bueskydning - Resultater
`;t+="Dato: "+e+`
`,n.courseName&&(t+="Bane: "+n.courseName+`
`),t+=`
--- RESULTATER ---
`,[...n.shooters].sort((l,u)=>ct(u.scores)-ct(l.scores)).forEach((l,u)=>{t+=`
`+(u+1)+". "+l.name+": "+ct(l.scores)+" point"}),t+=`

--- DETALJERET ---
`;const s=Ut(n.ruleset);n.shooters.forEach(l=>{t+=`
`+l.name+`:
`;for(let g=0;g<n.numTargets;g++){const y=l.scores[g]||Array(s).fill(null),A=y.reduce((k,P)=>k+(P!=null&&P!=="M"?Number(P):0),0);t+="  Mål "+(g+1)+": "+y.map(k=>k??"-").join("+")+" = "+A+`
`}const u=l.scores.flat().filter(g=>g!=null),h=u.length?(u.reduce((g,y)=>g+we(y),0)/u.length).toFixed(2):"—",p=Hu(l.scores,n.ruleset);if(t+="  Total: "+ct(l.scores)+` point
`,s>=2){const g=l.scores.map(P=>(P||[])[0]).filter(P=>P!=null),y=l.scores.map(P=>(P||[])[1]).filter(P=>P!=null),A=g.length?(g.reduce((P,M)=>P+we(M),0)/g.length).toFixed(2):"—",k=y.length?(y.reduce((P,M)=>P+we(M),0)/y.length).toFixed(2):"—";t+="  Snit pil 1: "+A+" | Snit pil 2: "+k+" | Samlet snit: "+h+`
`}else t+="  Samlet snit: "+h+`
`;t+="  Fordeling: "+Object.entries(p).map(([g,y])=>g+":"+y+"x").join("  ")+`
`}),n.id&&(t+=`

Se resultater i appen:
https://bsk65.github.io/3D/?round=${n.id}
(Kræver login med din bruger)`);const i=n.shooters.map(l=>{var u;return(u=m.friends.find(h=>h.id===l.id))==null?void 0:u.email}).filter(Boolean),o="3D Bueskydning - "+n.name,c="mailto:"+i.join(",")+"?subject="+encodeURIComponent(o)+"&body="+encodeURIComponent(t);window.location.href=c};const Q_="archery_meetups_seen",nP={afventer:"Afventer",tilmeldt:"Tilmeldt ✅",foreslået:"Foreslår andet tidspunkt 🕓",afvist:"Afbud ❌"};function Wc(n){if(!n)return"";const[e,t,r]=n.split("-");return e&&t&&r?`${r}-${t}-${e}`:n}let et=new Map,po="venner",Ai=null,J_=null,ed=null,Y_=null;async function td(){if(m.user)try{const n=[qe(Vs(Be(j,"meetups"),Tr("creatorUid","==",m.user.uid))),qe(Vs(Be(j,"meetups"),Tr("invitedUids","array-contains",m.user.uid)))];m.isSuperAdmin&&n.push(qe(Be(j,"meetups")));const e=await Promise.all(n),t=new Map;e.forEach(r=>r.docs.forEach(s=>t.set(s.id,{id:s.id,...s.data()}))),m.meetups=[...t.values()].sort((r,s)=>`${r.date}${r.time}`.localeCompare(`${s.date}${s.time}`))}catch(n){console.warn("Hent meetups:",n)}}function rP(n,e){return n.filter(t=>{var s,i;return(((i=(s=t.updatedAt)==null?void 0:s.toMillis)==null?void 0:i.call(s))??(typeof t.updatedAt=="number"?t.updatedAt:0))>e}).length}function go(){const n=document.getElementById("meetup-badge");if(!n)return;const e=Number(localStorage.getItem(Q_)||0),t=rP(m.meetups,e);n.classList.toggle("hidden",t===0),n.textContent=t}function sP(){localStorage.setItem(Q_,String(Date.now())),go()}function $t(){const n=document.getElementById("meetups-list");if(!n)return;const e=new Date().toISOString().slice(0,10),t=m.meetups.filter(r=>r.date>=e);if(!t.length){n.innerHTML='<div class="empty"><div class="empty-icon">🏹</div>Ingen planlagte skydninger endnu</div>';return}n.innerHTML="",t.forEach(r=>n.appendChild(iP(r)))}function iP(n){var u;const e=document.createElement("div");e.className="meetup-card"+(n.status==="aflyst"?" meetup-cancelled":"");const t=n.creatorUid===((u=m.user)==null?void 0:u.uid),r=(n.participants||[]).find(h=>{var p;return h.uid===((p=m.user)==null?void 0:p.uid)}),s=m.isSuperAdmin&&!t&&!r,i=(n.participants||[]).map(h=>{const p=h.status==="foreslået"&&h.proposedDate?` → ${K(Wc(h.proposedDate))} ${K(h.proposedTime||"")}`:"";return`<div class="meetup-partrow"><span>${K(h.name)}</span><span class="meetup-status meetup-status-${K(h.status)}">${K(nP[h.status]||h.status)}${p}</span></div>`}).join(""),o=(n.comments||[]).map(h=>`<div class="meetup-comment"><b>${K(h.name)}:</b> ${K(h.text)}</div>`).join("");let c="";n.status!=="aflyst"&&(r&&(r.status!=="tilmeldt"&&(c+=`<button class="btn btn-gold btn-sm" onclick="joinMeetup('${n.id}')">Tilmeld</button>`),c+=`<button class="btn btn-dark btn-sm" onclick="openProposeTimeModal('${n.id}')">Foreslå andet tidspunkt</button>`,r.status!=="afvist"&&(c+=`<button class="btn btn-dark btn-sm" onclick="declineMeetup('${n.id}')">Afbud</button>`)),t&&((n.participants||[]).filter(h=>h.status==="foreslået"&&h.proposedDate).forEach(h=>{c+=`<button class="btn btn-gold btn-sm" onclick="acceptProposedTime('${n.id}','${h.uid}')">Accepter ${K(Wc(h.proposedDate))} ${K(h.proposedTime||"")} (${K(h.name)})</button>`}),c+=`<button class="btn btn-dark btn-sm" onclick="openEditMeetupModal('${n.id}')">Rediger tidspunkt</button>`,c+=`<button class="btn btn-dark btn-sm" onclick="cancelMeetup('${n.id}')">Aflys</button>`,c+=`<button class="btn btn-red btn-sm" onclick="deleteMeetup('${n.id}')">Slet</button>`)),e.innerHTML=`
    ${n.status==="aflyst"?'<div class="meetup-cancelled-banner">❌ Aflyst</div>':""}
    ${s?'<div class="meetup-notinvited-banner">👁 Du er ikke inviteret — vises kun for superadmin</div>':""}
    <div class="meetup-head">
      <div class="meetup-title">${K(n.courseName)}</div>
      <div class="meetup-when">${K(Wc(n.date))} kl. ${K(n.time)}</div>
      <div class="meetup-creator">Oprettet af ${K(n.creatorName)}</div>
    </div>
    <div class="meetup-participants">${i}</div>
    <div class="meetup-actions">${c}</div>
    <div class="meetup-comments">${o}</div>
    <div class="meetup-comment-add">
      <input type="text" placeholder="Skriv en kommentar…" class="meetup-comment-input" maxlength="300" />
      <button class="btn btn-dark btn-sm meetup-comment-send">Send</button>
    </div>
  `;const l=e.querySelector(".meetup-comment-input");return e.querySelector(".meetup-comment-send").addEventListener("click",()=>{aP(n.id,l.value),l.value=""}),e}window.openMeetupModal=function(){if(!m.courses.length){q("Ingen baner tilgængelige","error");return}et=new Map,po="venner",Ai=null,ed=null,document.getElementById("mu-course-display").value="",document.getElementById("mu-course-list").classList.add("hidden"),oP(),document.getElementById("mu-date").value="",document.getElementById("mu-time").value="",document.getElementById("mu-comment").value="",document.querySelectorAll(".mu-pool-tab").forEach(n=>n.classList.toggle("active",n.dataset.pool==="venner")),_o(),dc(),document.getElementById("meetup-modal").classList.remove("hidden")};window.toggleMeetupCourseList=function(){document.getElementById("mu-course-list").classList.toggle("hidden")};function oP(){const n=document.getElementById("mu-course-list");n.innerHTML="",m.courses.forEach(e=>{const t=document.createElement("div");t.className="ac-item",t.textContent=e.name||e.yam||"",t.addEventListener("click",()=>{ed=e.id,document.getElementById("mu-course-display").value=e.name||e.yam||"",n.classList.add("hidden")}),n.appendChild(t)})}window.toggleMeetupPool=function(n){po=n,document.querySelectorAll(".mu-pool-tab").forEach(e=>e.classList.toggle("active",e.dataset.pool===n)),_o()};async function Dl(){if(!Ai)try{Ai=(await qe(Be(j,"users"))).docs.map(e=>({uid:e.id,name:e.data().name||e.data().yam||e.data().email||"—"}))}catch(n){console.warn(n),Ai=[]}return Ai}async function X_(){if(po==="venner"){const e=new Set((await Dl()).map(t=>t.uid));return m.friends.map(t=>({uid:t.id,name:t.name,registered:e.has(t.id)})).sort((t,r)=>t.name.localeCompare(r.name,"da"))}return(await Dl()).filter(e=>{var t;return e.uid!==((t=m.user)==null?void 0:t.uid)}).map(e=>({...e,registered:!0})).sort((e,t)=>e.name.localeCompare(t.name,"da"))}async function _o(){const n=document.getElementById("mu-invitee-list");if(!n)return;const e=await X_();if(n.innerHTML="",!e.length){n.innerHTML=`<div class="empty"><div class="empty-icon">👤</div>${po==="venner"?"Du har ingen venner endnu":"Ingen andre registrerede brugere"}</div>`;return}e.forEach(t=>{const r=document.createElement("label");r.className="mu-invitee-row"+(t.registered===!1?" mu-invitee-unregistered":"");const s=document.createElement("input");s.type="checkbox",s.checked=et.has(t.uid);const i=document.createElement("span");if(i.textContent=t.name,r.appendChild(s),r.appendChild(i),t.registered===!1){s.disabled=!0;const o=document.createElement("span");o.className="mu-invitee-note",o.textContent="ikke registreret i appen",r.appendChild(o)}else s.addEventListener("change",()=>Z_(t.uid,t.name));n.appendChild(r)})}function Z_(n,e){et.has(n)?et.delete(n):et.set(n,{uid:n,name:e}),dc(),_o()}window.toggleSelectAllMeetup=async function(){const n=(await X_()).filter(t=>t.registered!==!1);if(!n.length)return;n.every(t=>et.has(t.uid))?n.forEach(t=>et.delete(t.uid)):n.forEach(t=>et.set(t.uid,t)),dc(),_o()};function dc(){const n=document.getElementById("mu-selected-chips");if(n){if(n.innerHTML="",!et.size){n.innerHTML='<div class="mu-chips-empty">Ingen modtagere valgt endnu</div>';return}[...et.values()].forEach(e=>{const t=document.createElement("div");t.className="pchip";const r=document.createElement("span");r.className="pchip-name",r.textContent=e.name;const s=document.createElement("button");s.className="pchip-rm",s.textContent="✕",s.addEventListener("click",()=>Z_(e.uid,e.name)),t.appendChild(r),t.appendChild(s),n.appendChild(t)})}}window.saveMeetup=async function(){var p,g;const n=m.courses.find(y=>y.id===ed),e=document.getElementById("mu-date").value,t=document.getElementById("mu-time").value;if(!n){q("Vælg en bane","error");return}if(!e||!t){q("Vælg dato og tid","error");return}if(!et.size){q("Vælg mindst én modtager","error");return}const r=new Set((await Dl()).map(y=>y.uid)),s=[...et.values()].filter(y=>!r.has(y.uid)).map(y=>y.name);if(s.length&&(s.forEach(y=>{const A=[...et.entries()].find(([,k])=>k.name===y);A&&et.delete(A[0])}),q(`${s.join(", ")} er ikke registreret i appen og blev ikke inviteret`,"error"),dc(),_o(),!et.size))return;const i=document.getElementById("mu-comment").value.trim().slice(0,300),o=[...et.keys()],c=[...et.values()].map(y=>({uid:y.uid,name:y.name,status:"afventer",proposedDate:null,proposedTime:null})),l=i?[{uid:m.user.uid,name:((p=m.profile)==null?void 0:p.name)||"—",text:i,createdAt:new Date}]:[],u=new Date(`${e}T${t}`);u.setDate(u.getDate()+1);const h={courseId:n.id,courseName:n.name||n.yam||"",date:e,time:t,creatorUid:m.user.uid,creatorName:((g=m.profile)==null?void 0:g.name)||"—",pool:po,invitedUids:o,participants:c,comments:l,status:"åben",createdAt:Ue(),updatedAt:Ue(),expireAt:u};try{await jg(Be(j,"meetups"),h),document.getElementById("meetup-modal").classList.add("hidden"),q("Forslag sendt","success"),await td(),$t(),go()}catch(y){q("Fejl: "+y.message,"error")}};async function ey(n,e){const t=m.meetups.find(s=>s.id===n);if(!t||!m.user)return;const r=(t.participants||[]).map(s=>s.uid===m.user.uid?{...s,status:e,proposedDate:null,proposedTime:null}:s);try{await Je(X(j,"meetups",t.id),{participants:r,updatedAt:Ue()}),t.participants=r,t.updatedAt=Date.now(),$t()}catch(s){q("Fejl: "+s.message,"error")}}window.joinMeetup=function(n){ey(n,"tilmeldt")};window.declineMeetup=function(n){ey(n,"afvist")};window.openProposeTimeModal=function(n){J_=n,document.getElementById("mu-propose-date").value="",document.getElementById("mu-propose-time").value="",document.getElementById("meetup-propose-modal").classList.remove("hidden")};window.saveProposeTime=async function(){const n=document.getElementById("mu-propose-date").value,e=document.getElementById("mu-propose-time").value;if(!n||!e){q("Vælg dato og tid","error");return}const t=m.meetups.find(s=>s.id===J_);if(!t||!m.user)return;const r=(t.participants||[]).map(s=>s.uid===m.user.uid?{...s,status:"foreslået",proposedDate:n,proposedTime:e}:s);try{await Je(X(j,"meetups",t.id),{participants:r,updatedAt:Ue()}),t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-propose-modal").classList.add("hidden"),$t()}catch(s){q("Fejl: "+s.message,"error")}};window.acceptProposedTime=async function(n,e){var c;const t=m.meetups.find(l=>l.id===n);if(!t||t.creatorUid!==((c=m.user)==null?void 0:c.uid))return;const r=(t.participants||[]).find(l=>l.uid===e);if(!(r!=null&&r.proposedDate)||!(r!=null&&r.proposedTime))return;const s=r.proposedDate,i=r.proposedTime,o=t.participants.map(l=>l.uid===e?{...l,status:"tilmeldt",proposedDate:null,proposedTime:null}:{...l,status:"afventer",proposedDate:null,proposedTime:null});try{await Je(X(j,"meetups",t.id),{date:s,time:i,participants:o,updatedAt:Ue()}),t.date=s,t.time=i,t.participants=o,t.updatedAt=Date.now(),$t(),q("Nyt tidspunkt accepteret","success")}catch(l){q("Fejl: "+l.message,"error")}};window.openEditMeetupModal=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||(Y_=n,document.getElementById("mu-edit-date").value=e.date,document.getElementById("mu-edit-time").value=e.time,document.getElementById("meetup-edit-modal").classList.remove("hidden"))};window.saveEditMeetup=async function(){var s;const n=document.getElementById("mu-edit-date").value,e=document.getElementById("mu-edit-time").value;if(!n||!e){q("Vælg dato og tid","error");return}const t=m.meetups.find(i=>i.id===Y_);if(!t||t.creatorUid!==((s=m.user)==null?void 0:s.uid))return;const r=(t.participants||[]).map(i=>({...i,status:"afventer",proposedDate:null,proposedTime:null}));try{await Je(X(j,"meetups",t.id),{date:n,time:e,participants:r,updatedAt:Ue()}),t.date=n,t.time=e,t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-edit-modal").classList.add("hidden"),$t(),q("Tidspunkt opdateret","success")}catch(i){q("Fejl: "+i.message,"error")}};window.cancelMeetup=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||tr("Aflys denne skydning?",async()=>{try{await Je(X(j,"meetups",e.id),{status:"aflyst",updatedAt:Ue()}),e.status="aflyst",e.updatedAt=Date.now(),$t()}catch(r){q("Fejl: "+r.message,"error")}})};window.deleteMeetup=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||tr("Slet denne skydning permanent? Det kan ikke fortrydes.",async()=>{try{await Nt(X(j,"meetups",e.id)),m.meetups=m.meetups.filter(r=>r.id!==n),$t(),go()}catch(r){q("Fejl: "+r.message,"error")}})};async function aP(n,e){var i;if(e=(e||"").trim().slice(0,300),!e||!m.user)return;const t=m.meetups.find(o=>o.id===n);if(!t)return;const r={uid:m.user.uid,name:((i=m.profile)==null?void 0:i.name)||"—",text:e,createdAt:new Date},s=[...t.comments||[],r];try{await Je(X(j,"meetups",t.id),{comments:s,updatedAt:Ue()}),t.comments=s,t.updatedAt=Date.now(),$t()}catch(o){q("Fejl: "+o.message,"error")}}const ty="archery_share_requests_seen";function cP(n,e){return`${n}_${e}`}async function ny(){if(m.user)try{const[n,e]=await Promise.all([qe(Vs(Be(j,"shareRequests"),Tr("ownerUid","==",m.user.uid))),qe(Vs(Be(j,"shareRequests"),Tr("viewerUid","==",m.user.uid)))]),t=new Map;n.docs.forEach(r=>t.set(r.id,{id:r.id,...r.data()})),e.docs.forEach(r=>t.set(r.id,{id:r.id,...r.data()})),m.shareRequests=[...t.values()]}catch(n){console.warn("Hent delingsanmodninger:",n)}}function lP(n,e,t){return n.filter(r=>{var i,o;return r.ownerUid!==e||r.status!=="afventer"?!1:(((o=(i=r.createdAt)==null?void 0:i.toMillis)==null?void 0:o.call(i))??(typeof r.createdAt=="number"?r.createdAt:0))>t}).length}function hc(){var r;const n=document.getElementById("share-badge");if(!n)return;const e=Number(localStorage.getItem(ty)||0),t=lP(m.shareRequests,(r=m.user)==null?void 0:r.uid,e);n.classList.toggle("hidden",t===0),n.textContent=t}function uP(){localStorage.setItem(ty,String(Date.now())),hc()}function ry(){return m.user?m.shareRequests.filter(n=>n.viewerUid===m.user.uid&&n.status==="accepteret").map(n=>({uid:n.ownerUid,name:n.ownerName})).sort((n,e)=>n.name.localeCompare(e.name,"da")):[]}async function sy(n){var e,t,r;try{const s=m.shareRequests.find(p=>{var g;return p.ownerUid===n&&p.viewerUid===((g=m.user)==null?void 0:g.uid)&&p.status==="accepteret"}),i=((t=(e=(s==null?void 0:s.acceptedAt)||(s==null?void 0:s.updatedAt))==null?void 0:e.toMillis)==null?void 0:t.call(e))??0,l=(((r=(await Qn(X(j,"users",n))).data())==null?void 0:r.roundIndex)||[]).filter(p=>(p.completed||0)>i).map(p=>p.id),h=(await Promise.all(l.map(p=>Qn(X(j,"users",n,"rounds",p)).catch(()=>null)))).filter(p=>p==null?void 0:p.exists()).map(p=>({...p.data(),id:p.id})).sort((p,g)=>{var k,P;const y=p.completed||p.created||0,A=g.completed||g.created||0;return(typeof A=="number"?A:((k=A.toMillis)==null?void 0:k.call(A))??0)-(typeof y=="number"?y:((P=y.toMillis)==null?void 0:P.call(y))??0)});return m.viewedRounds[n]=h,h}catch(s){return console.warn("Hent delte runder:",s),m.viewedRounds[n]=[],[]}}function Jr(){var o;const n=document.getElementById("sharing-list");if(!n)return;const e=(o=m.user)==null?void 0:o.uid,t=m.shareRequests.filter(c=>c.ownerUid===e&&c.status==="afventer"),r=m.shareRequests.filter(c=>c.ownerUid===e&&c.status==="accepteret"),s=m.shareRequests.filter(c=>c.viewerUid===e&&c.status==="accepteret");if(!t.length&&!r.length&&!s.length){n.innerHTML='<div class="share-empty">Anmod om at se en vens resultater ved at trykke "🔎 Må jeg kigge med?" på personen i din venneliste ovenfor.</div>';return}let i="";t.length&&(i+='<div class="share-group-title">Anmodninger om at se dine resultater</div>',t.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${K(c.viewerName)}</div>
        <div class="share-actions">
          <button class="btn btn-gold btn-sm" onclick="acceptShareRequest('${c.id}')">Accepter</button>
          <button class="btn btn-dark btn-sm" onclick="declineShareRequest('${c.id}')">Afvis</button>
        </div>
      </div>`})),r.length&&(i+='<div class="share-group-title">Du deler resultater med</div>',r.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${K(c.viewerName)}</div>
        <div class="share-actions">
          <button class="btn btn-red btn-sm" onclick="endSharing('${c.id}')">Afslut deling</button>
        </div>
      </div>`})),s.length&&(i+='<div class="share-group-title">Du kan se resultater for</div>',s.forEach(c=>{i+=`<div class="share-card">
        <div class="share-name">${K(c.ownerName)}</div>
        <div class="share-actions">
          <button class="btn btn-dark btn-sm" onclick="window.switchTab('analyse');window.setAnalyseViewer('${c.ownerUid}')">Se i Analyse</button>
        </div>
      </div>`})),n.innerHTML=i}window.requestViewAccess=async function(n,e){var t,r;if(m.user){if(n===m.user.uid){q("Du kan ikke anmode om at se dine egne resultater","error");return}try{let s=(await Qn(X(j,"users",n))).exists();if(!s){const i=m.friends.find(o=>o.id===n);if(i!=null&&i.email){const c=(await qe(Be(j,"users"))).docs.find(l=>{const u=l.data(),h=(u.email||u["e-mail"]||"").toLowerCase();return h&&h===i.email.toLowerCase()});c&&(n=c.id,s=!0,i.id=n,Dt(),ft(X(j,"users",m.user.uid,"friends",n),i).catch(l=>console.warn(l)))}}if(!s){q(`${e} er ikke registreret i appen`,"error");return}await ft(X(j,"shareRequests",cP(n,m.user.uid)),{ownerUid:n,ownerName:e,viewerUid:m.user.uid,viewerName:((t=m.profile)==null?void 0:t.name)||"—",status:"afventer",createdAt:Ue(),updatedAt:Ue()}),q("Anmodning sendt","success"),await ny(),Jr(),(r=window.renderFriendsList)==null||r.call(window)}catch(s){q("Fejl: "+s.message,"error")}}};window.cancelShareRequest=async function(n){var e;try{await Nt(X(j,"shareRequests",n)),m.shareRequests=m.shareRequests.filter(t=>t.id!==n),Jr(),(e=window.renderFriendsList)==null||e.call(window)}catch(t){q("Fejl: "+t.message,"error")}};window.acceptShareRequest=async function(n){try{await Je(X(j,"shareRequests",n),{status:"accepteret",acceptedAt:Ue(),updatedAt:Ue()});const e=m.shareRequests.find(t=>t.id===n);e&&(e.status="accepteret"),Jr(),hc(),q("Deling accepteret","success")}catch(e){q("Fejl: "+e.message,"error")}};window.declineShareRequest=function(n){tr("Afvis denne anmodning?",async()=>{try{await Je(X(j,"shareRequests",n),{status:"afvist",updatedAt:Ue()});const e=m.shareRequests.find(t=>t.id===n);e&&(e.status="afvist"),Jr(),hc()}catch(e){q("Fejl: "+e.message,"error")}})};window.endSharing=function(n){tr("Afslut denne deling? Personen mister med det samme adgang til dine resultater.",async()=>{try{await Nt(X(j,"shareRequests",n)),m.shareRequests=m.shareRequests.filter(e=>e.id!==n),Jr(),q("Deling afsluttet","success")}catch(e){q("Fejl: "+e.message,"error")}})};const dP="BOJHqC2HeXd9Ru6EjuL7HEuAZuZ2MM86LPqPfVbeQsm8M8-wgT_u3QPWYFs0XN0vfMz_FS3rDgjXgCXXm0GkmZs",hP="/3D/sw.js";async function iy(){if(!("serviceWorker"in navigator))return null;try{return await navigator.serviceWorker.register(hP,{scope:"/3D/"})}catch(n){return console.warn("SW-registrering fejlede",n),null}}function fP(){return"Notification"in window&&Notification.permission==="default"}async function oy(){let n;try{n=await Notification.requestPermission()}catch(e){return console.warn("Notification.requestPermission fejlede",e),q("Kunne ikke bede om tilladelse: "+e.message,"error"),!1}if(n==="denied")return q("Notifikationer blokeret i browseren — skal ændres i browserens side-indstillinger","error"),!1;if(n!=="granted")return!1;try{if(!await O_||!Yi)return q("Push-notifikationer understøttes ikke i denne browser","error"),!1;const t=await iy();if(!t)return q("Kunne ikke registrere service worker","error"),!1;const r=await R0(Yi,{vapidKey:dP,serviceWorkerRegistration:t});return r?(await Je(X(j,"users",m.user.uid),{fcmToken:r}),!0):(q("Kunne ikke hente push-token","error"),!1)}catch(e){return console.warn("Push-opsætning fejlede",e),q("Push-fejl: "+e.message,"error"),!1}}function mP(){"Notification"in window&&Notification.permission==="granted"&&oy()}function pP(){O_.then(n=>{!n||!Yi||P0(Yi,e=>{const t=e.data||{};q(t.body||"Ny besked","info"),td().then(()=>{$t(),go()}).catch(()=>{})})})}function Ff(n,e){var b;const t=E=>{var S;return E.shooters.find(w=>w.id===e)||((S=E.shooters)==null?void 0:S[0])},r=n.map(E=>{const S=t(E);return S?ct(S.scores):null}).filter(E=>E!==null),s=new Set(n.map(E=>E.ruleset||Ur)),i=s.size===1?[...s][0]:null,o=!!i&&Ut(i)>=2;let c=0,l=0,u=0,h=0;const p=o?$r(i):[],g={},y={};p.forEach(E=>{g[E]=0,y[E]=0});const A={};let k=0,P=0;n.forEach(E=>{const S=t(E);S&&(S.scores.forEach(w=>{w.forEach(Ae=>{Ae!=null&&(A[Ae]=(A[Ae]||0)+1,k+=we(Ae),P++)})}),o&&S.scores.forEach(w=>{w[0]!=null&&(g[w[0]]!==void 0&&g[w[0]]++,c+=we(w[0]),l++),w[1]!=null&&(y[w[1]]!==void 0&&y[w[1]]++,u+=we(w[1]),h++)}))});const M=l?(c/l).toFixed(2):0,O=h?(u/h).toFixed(2):0,U=l+h?((c+u)/(l+h)).toFixed(2):0,H=P?(k/P).toFixed(2):0,se=((b=n[0])==null?void 0:b.numTargets)||24,T=Array.from({length:se},(E,S)=>{let w=0,Ae=0;return n.forEach(ze=>{const rr=t(ze);if(!rr)return;(rr.scores[S]||[null,null]).forEach(Tt=>{Tt!=null&&(w+=we(Tt),Ae++)})}),Ae?w/Ae:null}).map((E,S)=>({v:E,i:S})).filter(E=>E.v!==null),v=T.length?T.reduce((E,S)=>E.v>S.v?E:S):null,I=T.length?T.reduce((E,S)=>E.v<S.v?E:S):null;return{myScores:r,p1avg:M,p2avg:O,pilAvg:U,overallPilAvg:H,distP1:g,distP2:y,distAll:A,bestTarget:v,worstTarget:I,pilRuleset:i,pilEligible:o}}function Bf(n){if(!n.length)return 0;const e=n.reduce((t,r)=>t+r,0)/n.length;return Math.sqrt(n.reduce((t,r)=>t+(r-e)**2,0)/n.length)}function gP(n){var l;const e=n.length;if(e<2)return{slope:0,intercept:((l=n[0])==null?void 0:l.y)||0};const t=n.reduce((u,h)=>u+h.x,0),r=n.reduce((u,h)=>u+h.y,0),s=n.reduce((u,h)=>u+h.x*h.y,0),i=n.reduce((u,h)=>u+h.x*h.x,0),o=e*i-t*t,c=o?(e*s-t*r)/o:0;return{slope:c,intercept:(r-c*t)/e}}function _P(n,e){var o,c;const t=((o=n.shooters)==null?void 0:o.find(l=>l.id===e))||((c=n.shooters)==null?void 0:c[0]);if(!t)return[];const r=n.numTargets||24,s=n.traversalOrder||Array.from({length:r},(l,u)=>u),i=[];for(let l=0;l<r;l++){const u=s[l];if(u===void 0)continue;const h=t.scores[u]||[null,null];let p=0,g=0;h.forEach(y=>{y!=null&&(p+=we(y),g++)}),g&&i.push(p/g)}return i}function yP(n,e){let t=1,r=0,s=0,i=0,o=1,c=0,l=0,u=0,h=0,p=0,g=0,y=0,A=0;const k=()=>{e.style.transformOrigin="0 0",e.style.transform=t>1?`translate(${r}px,${s}px) scale(${t})`:""};n.addEventListener("touchstart",M=>{if(M.preventDefault(),M.touches.length===2){const O=M.touches,U=n.getBoundingClientRect();i=Math.hypot(O[0].clientX-O[1].clientX,O[0].clientY-O[1].clientY),o=t,c=r,l=s,u=(O[0].clientX+O[1].clientX)/2-U.left,h=(O[0].clientY+O[1].clientY)/2-U.top}else M.touches.length===1&&(p=M.touches[0].clientX,g=M.touches[0].clientY,y=r,A=s)},{passive:!1}),n.addEventListener("touchmove",M=>{if(M.preventDefault(),M.touches.length===2){const O=M.touches,U=Math.hypot(O[0].clientX-O[1].clientX,O[0].clientY-O[1].clientY),H=Math.min(8,Math.max(1,o*U/i)),se=(u-c)/o,te=(h-l)/o;r=u-se*H,s=h-te*H,t=H,k()}else M.touches.length===1&&t>1&&(r=y+M.touches[0].clientX-p,s=A+M.touches[0].clientY-g,k())},{passive:!1}),n.addEventListener("touchend",()=>{t<1.05&&(t=1,r=0,s=0,k())},{passive:!0});let P=0;n.addEventListener("touchend",()=>{const M=Date.now();M-P<300&&(t=1,r=0,s=0,k()),P=M},{passive:!0})}let Qt=null,wr=null;function vP(){const n=document.getElementById("graph-fs");n&&n.classList.add("hidden"),Qt&&(window.removeEventListener("resize",Qt),window.removeEventListener("orientationchange",Qt),Qt=null),wr&&(document.removeEventListener("gesturestart",wr),wr=null)}window.closeGraphFs=vP;function wP(n){m.pendingAnalyseRound=n,m.viewingUid=null,m.viewingName=null,document.getElementById("analyse-filter").value="specific",window.switchTab("analyse")}window.setAnalyseViewer=async function(n){m.viewingUid=n||null;const e=n?ry().find(t=>t.uid===n):null;m.viewingName=(e==null?void 0:e.name)||null,n&&!m.viewedRounds[n]&&await sy(n),window.renderAnalyse()};window.analyseRound=wP;window.setCompareKilde=async function(n,e){e=e||null,n===1?m.compareUid1=e:m.compareUid2=e,e&&!m.viewedRounds[e]&&await sy(e),window.renderAnalyse()};const IP={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333",3:"#0a8a8a","-1":"#5a5a6a"};function EP(n,e,t,r){const s=n.myScores[0]||0,i=t.myScores[0]||0,o=Math.abs(s-i),c='<div class="cmp-sep"></div>',l=(g,y,A)=>`<div style="font-size:11px;color:${A};margin-bottom:4px;">${K(y)}</div>
    ${g.pilEligible?`<div class="cmp-pil-grid">
      <div><div class="cmp-pil-lbl">PIL 1</div><div class="cmp-pil-val">${g.p1avg}</div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">SNT/PIL</div><div class="cmp-pil-val-mid">${g.pilAvg}</div>
      </div>
      <div><div class="cmp-pil-lbl">PIL 2</div><div class="cmp-pil-val">${g.p2avg}</div></div>
    </div>`:`<div class="cmp-pil-grid">
      <div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">SNT/PIL</div><div class="cmp-pil-val-mid">${g.overallPilAvg}</div>
      </div>
      <div></div>
    </div>
    <div class="pil-best-note">${g.pilRuleset?`${g.pilRuleset} skydes med 1 pil pr. mål — PIL 1/PIL 2 er derfor ikke relevant`:"Ikke relevant"}</div>`}`,u=(g,y,A)=>g.bestTarget&&g.worstTarget?`<div style="font-size:11px;color:${A};margin-bottom:6px;">${K(y)}</div>
    <div class="cmp-target-grid">
      <div class="cmp-target-best">
        <div class="cmp-pil-lbl">BEDSTE</div>
        <div class="cmp-target-best-val">Mål ${g.bestTarget.i+1}</div>
        <div class="cmp-target-sub">⌀ ${g.bestTarget.v.toFixed(2)}</div>
      </div>
      <div class="cmp-target-worst">
        <div class="cmp-pil-lbl">SVÆRESTE</div>
        <div class="cmp-target-worst-val">Mål ${g.worstTarget.i+1}</div>
        <div class="cmp-target-sub">⌀ ${g.worstTarget.v.toFixed(2)}</div>
      </div>
    </div>`:"";let h="";h+=`<div class="card card-mb16">
    <div class="cmp-section-title">SAMMENLIGNING</div>
    <div class="cmp-score-grid">
      <div>
        <div class="cmp-score-lbl-a">${K(e)}</div>
        <div class="cmp-score-val-a">${s}</div>
        <div class="cmp-score-unit">POINT</div>
      </div>
      <div class="cmp-vs">VS</div>
      <div>
        <div class="cmp-score-lbl-b">${K(r)}</div>
        <div class="cmp-score-val-b">${i}</div>
        <div class="cmp-score-unit">POINT</div>
      </div>
    </div>
    <div class="cmp-winner-line">${s>i?`${K(e)} vandt med ${o} point`:i>s?`${K(r)} vandt med ${o} point`:"Uafgjort!"}</div>
  </div>`,h+=`<div class="card card-mb16">
    <div class="cmp-section-title">PIL STATISTIK</div>
    ${l(n,e,"var(--acc)")}${c}${l(t,r,"#f0c030")}
  </div>`,(n.bestTarget||t.bestTarget)&&(h+=`<div class="card card-mb16">
      <div class="cmp-section-title">BEDSTE OG SVÆRESTE MÅL</div>
      ${u(n,e,"var(--acc)")}${c}${u(t,r,"#f0c030")}
    </div>`);const p=[...new Set([...n.pilRuleset?$r(n.pilRuleset):Object.keys(n.distAll),...t.pilRuleset?$r(t.pilRuleset):Object.keys(t.distAll)])];return h+=`<div class="card card-mb16">
    <div class="cmp-section-title">FORDELING PR. SCOREZONE</div>
    <div class="cmp-dist-grid">
      <div></div>
      ${p.map(g=>`<div style="text-align:center;font-weight:700;color:${IP[g]||"var(--muted)"};">${g}</div>`).join("")}
      <div class="cmp-dist-lbl-a">${K(e)}</div>
      ${p.map(g=>`<div class="cmp-dist-val">${n.distAll[g]||0}</div>`).join("")}
      <div class="cmp-dist-lbl-b">${K(r)}</div>
      ${p.map(g=>`<div class="cmp-dist-val">${t.distAll[g]||0}</div>`).join("")}
    </div>
  </div>`,h}window.renderAnalyse=function(){var We,ar,Ws,Qs,vo,Pn,Js,Ys,ts,wo,Io,ns,Xs,Zs,Cn,rs;const n=document.getElementById("analyse-content");if(!n)return;const e=m.viewingUid||((We=m.user)==null?void 0:We.uid),t=m.viewingUid?m.viewedRounds[m.viewingUid]||[]:m.rounds,r=ry(),s=((ar=document.getElementById("analyse-filter"))==null?void 0:ar.value)||"all",i=s==="compare",o=m.compareUid1!==void 0?m.compareUid1:m.viewingUid,c=m.compareUid2!==void 0?m.compareUid2:m.viewingUid,l=o?m.viewedRounds[o]||[]:m.rounds,u=c?m.viewedRounds[c]||[]:m.rounds,h=document.getElementById("analyse-viewer-wrap"),p=document.getElementById("analyse-viewer");if(p){for(;p.options.length>1;)p.remove(1);r.forEach(N=>{const L=document.createElement("option");L.value=N.uid,L.textContent=N.name,p.appendChild(L)}),p.value=m.viewingUid&&r.some(N=>N.uid===m.viewingUid)?m.viewingUid:"",h&&h.classList.toggle("hidden",!r.length)}const g=(N,L)=>{if(N){for(;N.options.length>1;)N.remove(1);r.forEach(W=>{const Q=document.createElement("option");Q.value=W.uid,Q.textContent=W.name,N.appendChild(Q)}),N.value=L&&r.some(W=>W.uid===L)?L:"",N.classList.toggle("hidden",!i||!r.length)}};g(document.getElementById("analyse-kilde-1"),o),g(document.getElementById("analyse-kilde-2"),c);const y=document.getElementById("analyse-bane");if(y){const N=y.value;for(;y.options.length>1;)y.remove(1);const L=i?[...l,...u]:t,W=[...new Set(L.map(Q=>Q.courseId).filter(Boolean))];W.forEach(Q=>{const Z=m.courses.find(ee=>ee.id===Q);if(Z){const ee=document.createElement("option");ee.value=Q,ee.textContent=Z.name,y.appendChild(ee)}}),W.includes(N)&&(y.value=N)}if(m.pendingAnalyseRound&&y&&!m.viewingUid){const N=m.rounds.find(L=>L.id===m.pendingAnalyseRound);N!=null&&N.courseId&&Array.from(y.options).some(L=>L.value===N.courseId)&&(y.value=N.courseId)}const A=s==="all"?0:s==="lastround"?1:s==="specific"?0:Number(s),k=((Ws=document.getElementById("analyse-bane"))==null?void 0:Ws.value)||"all",P=Number((Qs=document.getElementById("analyse-antal"))==null?void 0:Qs.value)||0,M=document.getElementById("analyse-runde-wrap"),O=document.getElementById("analyse-runde"),U=document.getElementById("analyse-runde-wrap-2"),H=document.getElementById("analyse-runde-2"),se=document.getElementById("analyse-runde-lbl");M&&(M.style.display=s==="specific"||i?"":"none"),U&&(U.style.display=i?"":"none"),se&&(se.style.display=i?"":"none");const te=N=>{const L=N.created;return L!=null&&L.toDate?L.toDate().toLocaleDateString("da-DK"):L!=null&&L.seconds?new Date(L.seconds*1e3).toLocaleDateString("da-DK"):typeof L=="number"?new Date(L).toLocaleDateString("da-DK"):"—"},T=((vo=document.getElementById("analyse-ruleset"))==null?void 0:vo.value)||"all",v=(N,L,W)=>{let Q=k==="all"?W:W.filter(ee=>ee.courseId===k);T!=="all"&&(Q=Q.filter(ee=>(ee.ruleset||"WA")===T));const Z=N.value;N.innerHTML=`<option value="">${L}</option>`,Q.forEach(ee=>{const fe=document.createElement("option");fe.value=ee.id,fe.textContent=`${te(ee)} — ${ee.name||"Runde"}`,N.appendChild(fe)}),Q.some(ee=>ee.id===Z)&&(N.value=Z)};if((s==="specific"||i)&&O&&(v(O,"Vælg runde...",i?l:t),m.pendingAnalyseRound&&(O.value=m.pendingAnalyseRound,m.pendingAnalyseRound=null)),i&&H&&v(H,"Vælg runde 2...",u),i){const N=O==null?void 0:O.value,L=H==null?void 0:H.value;if(!N||!L){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Vælg to runder ovenfor</div>';return}const W=oe=>({...oe,shooters:(oe.shooters||[]).map(Pe=>({...Pe,scores:jr(Pe.scores)}))}),Q=l.map(W).find(oe=>oe.id===N),Z=u.map(W).find(oe=>oe.id===L);if(!Q||!Z){n.innerHTML='<div class="empty">Kunne ikke finde runderne</div>';return}const ee=o?((Pn=r.find(oe=>oe.uid===o))==null?void 0:Pn.name)||"—":((Js=m.profile)==null?void 0:Js.name)||"Mig",fe=c?((Ys=r.find(oe=>oe.uid===c))==null?void 0:Ys.name)||"—":((ts=m.profile)==null?void 0:ts.name)||"Mig",ie=`${ee}: ${Q.name||"Runde"} (${te(Q)})`,ye=`${fe}: ${Z.name||"Runde"} (${te(Z)})`;n.innerHTML=EP(Ff([Q],o||((wo=m.user)==null?void 0:wo.uid)),ie,Ff([Z],c||((Io=m.user)==null?void 0:Io.uid)),ye);return}const I=t.map(N=>({...N,shooters:(N.shooters||[]).map(L=>({...L,scores:jr(L.scores)}))})),b=((ns=document.getElementById("analyse-completed-only"))==null?void 0:ns.checked)||!1,E=((Xs=document.getElementById("analyse-startat1-only"))==null?void 0:Xs.checked)||!1,S=N=>{var Q,Z;const L=((Q=N.shooters)==null?void 0:Q.find(ee=>ee.id===e))||((Z=N.shooters)==null?void 0:Z[0]);if(!L)return!1;const W=N.numTargets||24;for(let ee=0;ee<W;ee++){const fe=L.scores[ee]||[null,null];if(fe[0]==null&&fe[1]==null)return!1}return!0},w=N=>N.startTarget===1,Ae=T;let ze=k==="all"?I:I.filter(N=>N.courseId===k);if(Ae!=="all"&&(ze=ze.filter(N=>(N.ruleset||"WA")===Ae)),b&&(ze=ze.filter(S)),E&&(ze=ze.filter(w)),s==="specific"){const N=O==null?void 0:O.value;ze=N?ze.filter(L=>L.id===N):[]}const rr=P||A,Ye=rr&&s!=="specific"?ze.slice(0,rr):ze;if(!Ye.length){n.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}const Tt=N=>{var L;return N.shooters.find(W=>W.id===e)||((L=N.shooters)==null?void 0:L[0])},He=Ye.map(N=>{const L=Tt(N);return L?ct(L.scores):null}).filter(N=>N!==null),yo=He.length?(He.reduce((N,L)=>N+L,0)/He.length).toFixed(1):0,pc=He.length?Math.max(...He):0,jt=He.length?Math.min(...He):0,Le=Ye.flatMap(N=>{const L=Tt(N);return L?L.scores.flat().filter(W=>W!=null):[]}),Ks=Le.length?(Le.reduce((N,L)=>N+we(L),0)/Le.length).toFixed(2):0,En=new Set(Ye.map(N=>N.ruleset||Ur)),Tn=En.size===1?[...En][0]:null,qt=!!Tn&&Ut(Tn)>=2;let Gs=0,sr=0,bn=0,Kt=0;const Yr=qt?$r(Tn):[],An={},Sn={};Yr.forEach(N=>{An[N]=0,Sn[N]=0}),Ye.forEach(N=>{const L=Tt(N);L&&qt&&L.scores.forEach(W=>{W[0]!=null&&(An[W[0]]!==void 0&&An[W[0]]++,Gs+=we(W[0]),sr++),W[1]!=null&&(Sn[W[1]]!==void 0&&Sn[W[1]]++,bn+=we(W[1]),Kt++)})});const ir=sr?(Gs/sr).toFixed(2):0,Xr=Kt?(bn/Kt).toFixed(2):0,gc=sr+Kt?((Gs+bn)/(sr+Kt)).toFixed(2):0,bt=((Zs=Ye[0])==null?void 0:Zs.numTargets)||24,zs=Array.from({length:bt},(N,L)=>{let W=0,Q=0;return Ye.forEach(Z=>{const ee=Tt(Z);if(!ee)return;const ie=(Z.traversalOrder||Array.from({length:Z.numTargets||bt},(oe,Pe)=>Pe))[L];if(ie===void 0)return;(ee.scores[ie]||[null,null]).forEach(oe=>{oe!=null&&(W+=we(oe),Q++)})}),Q?W/Q:null}),Rn=zs.map((N,L)=>({v:N,i:L})).filter(N=>N.v!==null),or=Rn.length?Rn.reduce((N,L)=>N.v>L.v?N:L):null,Zr=Rn.length?Rn.reduce((N,L)=>N.v<L.v?N:L):null;let $e="";m.viewingUid&&($e+=`<div class="viewing-banner">👁 Viser resultater for ${K(m.viewingName||"—")}</div>`),$e+=`<div class="stats-grid2">
    <div class="card stat-card"><div class="stat-lbl">RUNDER</div><div class="stat-val-28">${Ye.length}</div></div>
    <div class="card stat-card"><div class="stat-lbl">SNIT/RUNDE</div><div class="stat-val-28">${yo}</div></div>
    <div class="card stat-card"><div class="stat-lbl">BEDSTE</div><div class="stat-val-28-good">${pc}</div></div>
    <div class="card stat-card"><div class="stat-lbl">LAVESTE</div><div class="stat-val-28-bad">${jt}</div></div>
  </div>`,$e+=`<details class="card card-mb16 rounds-included-card">
    <summary class="section-title-mb8 rounds-included-summary">RUNDER I DENNE ANALYSE (${Ye.length})</summary>
    <div class="rounds-included-list">
      ${Ye.map(N=>`<div class="rounds-included-row"><span class="rounds-included-date">${te(N)}</span><span class="rounds-included-name">${K(N.name||"Runde")}${k==="all"?` · ${K(N.courseName||"")}`:""}${N.ruleset&&N.ruleset!=="WA"?` · <span class="rcard-ruleset-tag">${K(N.ruleset)}</span>`:""}</span></div>`).join("")}
    </div>
  </details>`;const Hs=Tn&&!qt,es=Tn?`${Tn} skydes med 1 pil pr. mål — PIL 1/PIL 2-sammenligning er derfor ikke relevant`:"Vælg et specifikt forbund i filteret ovenfor for at se pil-fordeling (runderne i dette udvalg bruger forskellige regelsæt)";if($e+=`<div class="card card-mb16">
    <div class="section-title-mb8">PIL STATISTIK</div>
    ${qt?`<div class="cmp-pil-grid">
      <div><div class="stat-lbl">PIL 1</div><div class="stat-val-22">${ir}</div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">SNT/PIL</div>
        <div class="stat-val-22-mid">${gc}</div>
      </div>
      <div><div class="stat-lbl">PIL 2</div><div class="stat-val-22">${Xr}</div></div>
    </div>
    <div class="pil-best-note">
      ${Number(ir)>Number(Xr)?"Bedst med PIL 1 🏹":Number(Xr)>Number(ir)?"Bedst med PIL 2 🏹":"Begge pile er lige gode 🎯"}
    </div>`:Hs?`<div class="cmp-pil-grid">
      <div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">SNT/PIL</div>
        <div class="stat-val-22-mid">${Ks}</div>
      </div>
      <div></div>
    </div>
    <div class="pil-best-note">${es}</div>`:`<div class="pil-best-note">${es}</div>`}
  </div>`,or&&Zr&&or.i!==Zr.i&&($e+=`<div class="card card-mb16">
      <div class="section-title-mb8">BEDSTE OG SVÆRESTE MÅL</div>
      <div class="cmp-target-grid">
        <div class="target-best-box">
          <div class="stat-lbl">BEDSTE</div>
          <div class="target-best-val">Skud nr. ${or.i+1}</div>
          <div class="target-sub-13">⌀ ${or.v.toFixed(2)}</div>
        </div>
        <div class="target-worst-box">
          <div class="stat-lbl">SVÆRESTE</div>
          <div class="target-worst-val">Skud nr. ${Zr.i+1}</div>
          <div class="target-sub-13">⌀ ${Zr.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`),$e+=`<div class="card card-mb16">
    <div class="section-title-mb12">FORDELING PR. SCOREZONE</div>`,qt?($e+='<div class="pie-grid">',Yr.forEach(N=>{const L=An[N]||0,W=Sn[N]||0,Q=L+W,Z=30;let ee="";if(Q===0)ee=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="var(--surface2)"/>`;else if(W===0)ee=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="#ffd700"/>`;else if(L===0)ee=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="#00cc44"/>`;else{const fe=L/Q,ie=fe*2*Math.PI,ye=Z,oe=0,Pe=Z-Z*Math.sin(ie),Me=Z-Z*Math.cos(ie),Oe=ie>Math.PI?1:0;ee=`<path d="M${Z},${Z} L${ye},${oe} A${Z},${Z} 0 ${Oe},0 ${Pe},${Me} Z" fill="#ffd700"/>
             <path d="M${Z},${Z} L${Pe},${Me} A${Z},${Z} 0 ${1-Oe},0 ${ye},${oe} Z" fill="#00cc44"/>`}$e+=`<div class="pie-cell">
        <div class="pie-zone-label">${N}</div>
        <svg viewBox="0 0 ${Z*2} ${Z*2}" class="pie-svg">${ee}</svg>
        <div class="pie-count">${L}/${W}</div>
        <div class="pie-total">${Q}</div>
      </div>`}),$e+=`</div>
      <div class="pie-legend">
        <span><span class="pie-legend-dot-1"></span>PIL 1</span>
        <span><span class="pie-legend-dot-2"></span>PIL 2</span>
      </div>`):$e+=`<div class="pil-best-note">${es}</div>`,$e+="</div>",He.length>1){const Q=Math.min(...He)-5,Z=Math.max(...He)+5,ee=He.slice().reverse().map((fe,ie)=>{const ye=30+ie/(He.length-1)*280,oe=90-(fe-Q)/(Z-Q)*(120-2*30);return`${ye},${oe}`}).join(" ");$e+=`<div class="card card-mb16">
      <div class="section-title-mb8">UDVIKLING (RUNDER)</div>
      <svg viewBox="0 0 340 120" class="graph-svg">
        <polyline points="${ee}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${He.slice().reverse().map((fe,ie)=>{const ye=30+ie/(He.length-1)*280,oe=90-(fe-Q)/(Z-Q)*(120-2*30);return`<circle cx="${ye}" cy="${oe}" r="4" fill="var(--acc)"/><text x="${ye}" y="${oe-8}" text-anchor="middle" font-size="10" fill="var(--text)">${fe}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg>
    </div>`}const Ee=zs.map((N,L)=>({v:N,i:L})).filter(N=>N.v!==null);if(Ee.length>1){const{slope:fe,intercept:ie}=gP(Ee.map(({v:Te,i:ut})=>({x:ut,y:Te}))),ye=[ie,ie+fe*(bt-1)],oe=Math.floor(Math.min(...Ee.map(Te=>Te.v),...ye)),Pe=Math.ceil(Math.max(...Ee.map(Te=>Te.v),...ye)),Me=Pe-oe||1,Oe=[];for(let Te=oe;Te<=Pe;Te++)(Pe-oe<=6||Te%Math.ceil((Pe-oe)/5)===0)&&Oe.push(Te);const _t=Bf(Ee.map(Te=>Te.v)),Gt=(Te,ut,{dotR:zt=3,valFont:yt=9,showVals:At=!1}={})=>{const dt=je=>42+(bt>1?je/(bt-1)*(Te-42-15):0),tt=je=>15+(ut-15-25)*(1-(je-oe)/Me),kn=Ee.map(({v:je,i:Ht})=>dt(Ht)+","+tt(je)).join(" "),sn=Oe.map(je=>`<line x1="38" y1="${tt(je)}" x2="42" y2="${tt(je)}" stroke="var(--muted)" stroke-width="1" pointer-events="none"/><text x="36" y="${tt(je)+4}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${je}</text><line x1="42" y1="${tt(je)}" x2="${Te-15}" y2="${tt(je)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3" pointer-events="none"/>`).join(""),cr=Ee.map(({v:je,i:Ht})=>At?`<circle cx="${dt(Ht)}" cy="${tt(je)}" r="${zt}" fill="var(--acc)" pointer-events="none"/><text x="${dt(Ht)}" y="${tt(je)-zt-5}" text-anchor="middle" font-size="${yt}" fill="#fff" pointer-events="none">${je.toFixed(1)}</text>`:`<circle cx="${dt(Ht)}" cy="${tt(je)}" r="${zt}" fill="var(--acc)" pointer-events="none"/>`).join(""),Eo=`<line x1="${dt(0)}" y1="${tt(ie)}" x2="${dt(bt-1)}" y2="${tt(ie+fe*(bt-1))}" stroke="#f0c030" stroke-width="1.5" stroke-dasharray="6,4" pointer-events="none"/>`;return`<line x1="42" y1="15" x2="42" y2="${ut-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        <line x1="42" y1="${ut-25}" x2="${Te-15}" y2="${ut-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        ${sn}
        <polyline points="${kn}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round" pointer-events="none"/>
        ${Eo}
        ${cr}
        <text x="42" y="${ut-5}" font-size="9" fill="var(--muted)" pointer-events="none">1</text>
        <text x="${dt(bt-1)}" y="${ut-5}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${bt}</text>`},rn=Math.max(340,bt*30);$e+=`<div class="card card-mb16">
      <div class="graph-header-row">
        <span>GENNEMSNIT PR. SKUDRÆKKEFØLGE</span>
        <button class="btn-icon graph-fs-btn" onclick="window.openGraphFs()">⤢</button>
      </div>
      <svg viewBox="0 0 340 160" class="graph-svg">${Gt(340,160,{dotR:3})}</svg>
      <div class="graph-caption">Skudrækkefølge — 1 = første mål skudt · stiplet linje = trend</div>
    </div>
    <div class="card card-mb16">
      <div class="section-title-mb8">KONSISTENS (SPREDNING)</div>
      <div class="spredning-row">
        <div class="stat-val-28">${_t.toFixed(2)}</div>
        <div class="spredning-note">Standardafvigelse i point (samme skala som scoren, 0-11) — ikke et 0-1-tal. Tæt på 0 = meget ensartet gennem runden; jo højere tal, jo større udsving mellem de bedste og sværeste mål.</div>
      </div>
    </div>
    <div id="graph-fs" class="fs-ov hidden graph-fs-overlay" onclick="window.closeGraphFs()">
      <div class="graph-fs-box" id="graph-fs-box" onclick="event.stopPropagation()">
        <div class="graph-fs-title">GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset</div>
        <div id="graph-fs-viewport" class="graph-fs-viewport">
          <svg id="graph-fs-svg" viewBox="0 0 ${rn} 160" class="graph-fs-svg">${Gt(rn,160,{dotR:5,valFont:10,showVals:!0})}</svg>
        </div>
        <button class="btn btn-dark graph-fs-close-btn" onclick="window.closeGraphFs()">Luk</button>
      </div>
    </div>`,window.openGraphFs=function(){const Te=document.getElementById("graph-fs");if(!Te)return;Te.classList.remove("hidden");const ut=document.getElementById("graph-fs-svg"),zt=document.getElementById("graph-fs-box"),yt=document.getElementById("graph-fs-viewport"),At=()=>{const dt=Math.min(window.innerWidth*.96,900),tt=Math.min(window.innerHeight*.9,700),kn=Math.max(200,dt-32),sn=Math.max(140,tt-90),cr=Math.max(kn,bt*30);ut.setAttribute("viewBox",`0 0 ${cr} ${sn}`),ut.innerHTML=Gt(cr,sn,{dotR:5,valFont:10,showVals:!0}),zt&&(zt.style.width=dt+"px"),yt&&(yt.style.width=kn+"px",yt.style.height=sn+"px")};At(),Qt&&(window.removeEventListener("resize",Qt),window.removeEventListener("orientationchange",Qt)),Qt=At,window.addEventListener("resize",Qt),window.addEventListener("orientationchange",Qt),wr&&document.removeEventListener("gesturestart",wr),wr=dt=>dt.preventDefault(),document.addEventListener("gesturestart",wr,{passive:!1}),yt&&!yt.dataset.pinchInit&&(yP(yt,ut),yt.dataset.pinchInit="1")}}if(k!=="all"){const N=W=>{const Q=W.created;return Q!=null&&Q.toDate?Q.toDate().getTime():Q!=null&&Q.seconds?Q.seconds*1e3:typeof Q=="number"?Q:0},L=I.filter(W=>W.courseId===k).filter(W=>!b||S(W)).filter(W=>!E||w(W)).map(W=>{const Q=_P(W,e);return Q.length>1?{t:N(W),cv:Bf(Q)}:null}).filter(Boolean).sort((W,Q)=>W.t-Q.t);if(L.length>1){const ee=L.map(Oe=>Oe.cv),fe=Math.min(...ee),ie=Math.max(...ee),ye=ie-fe||1,oe=(Oe,_t)=>({x:30+_t/(L.length-1)*(340-2*30),y:90-(Oe.cv-fe)/ye*(120-2*30)}),Pe=L.map((Oe,_t)=>{const{x:Gt,y:rn}=oe(Oe,_t);return`${Gt},${rn}`}).join(" "),Me=L.map((Oe,_t)=>{const{x:Gt,y:rn}=oe(Oe,_t);return`<circle cx="${Gt}" cy="${rn}" r="4" fill="#f0c030"/><text x="${Gt}" y="${rn-8}" text-anchor="middle" font-size="10" fill="var(--text)">${Oe.cv.toFixed(2)}</text>`}).join("");$e+=`<div class="card card-mb16">
        <div class="section-title-mb8">KONSISTENS OVER TID · denne bane</div>
        <svg viewBox="0 0 340 120" class="graph-svg">
          <polyline points="${Pe}" fill="none" stroke="#f0c030" stroke-width="2.5" stroke-linejoin="round"/>
          ${Me}
          <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
          <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
        </svg>
        <div class="graph-caption">Spredning pr. runde (samme point-skala som ovenfor) — faldende kurve = mere ensartet skydning over tid</div>
      </div>`}}if(n.innerHTML=$e,!m.viewingUid&&k!=="all"&&((Cn=m.profile)!=null&&Cn.kon)&&((rs=m.profile)!=null&&rs.bueklasse)){const N=m.profile.kon==="herre"?"Herre":"Dame",L={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"}[m.profile.bueklasse]||m.profile.bueklasse,W=document.createElement("div");W.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">SAMMENLIGNING · ${N} ${L}</div><div class="comp-loading-msg">Henter...</div></div>`,n.appendChild(W),qe(Be(j,"bane_stats",k,"runder")).then(Q=>{let ee=Q.docs.map(Me=>Me.data()).filter(Me=>Me.kon===m.profile.kon&&Me.bueklasse===m.profile.bueklasse);if(Ae!=="all"&&(ee=ee.filter(Me=>(Me.ruleset||Ur)===Ae)),!ee.length){W.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">SAMMENLIGNING · ${N} ${L}</div><div class="comp-loading-msg">Ingen andre ${N} ${L}-skytter har skudt denne bane endnu.</div></div>`;return}const fe=ee.filter(Me=>(Me.arrowsShot||Me.numTargets*2)>0),ie=fe.length?(fe.reduce((Me,Oe)=>Me+Oe.score/(Oe.arrowsShot||Oe.numTargets*2),0)/fe.length).toFixed(2):"—",ye=ie!=="—"?Number(Ks)-Number(ie):null,oe=ye!==null?(ye>0?"+":"")+ye.toFixed(2):"—",Pe=ye===null?"var(--muted)":ye>0?"#2aaa5a":ye<0?"var(--danger)":"var(--muted)";W.innerHTML=`<div class="card card-mb16">
        <div class="section-title-mb12">SAMMENLIGNING · ${N} ${L}</div>
        <div class="cmp-pil-grid">
          <div><div class="stat-lbl">DIT SNT/PIL</div><div class="stat-val-22">${Ks}</div></div>
          <div class="cmp-pil-mid">
            <div class="stat-lbl">DIFFERENCE</div>
            <div style="font-size:22px;font-weight:700;color:${Pe};">${oe}</div>
          </div>
          <div><div class="stat-lbl">ANDRES SNT/PIL</div><div class="stat-val-22-txt">${ie}</div></div>
        </div>
        <div class="pil-best-note">Baseret på ${ee.length} runde${ee.length!==1?"r":""} fra andre skytter</div>
      </div>`}).catch(()=>{W.remove()})}};function Uf(n,e,t){const r=Array.from({length:e},()=>Array(t).fill(null));for(const s of n.eventresult)r[s.targetid-1][s.arrownr-1]=s.points===0?"M":s.points;return r}async function ay(n,e,t){var p;const r=Math.max(...t.flatMap(g=>g.eventresult.map(y=>y.targetid))),s=Math.max(...t.flatMap(g=>g.eventresult.map(y=>y.arrownr)));let i=null,o=n.name||n.eventname||null;if(o){const g=o.split(" - ")[0].trim().toLowerCase(),y=m.courses.filter(A=>(A.name||"").toLowerCase().includes(g));y.length===1&&(i=y[0].id,o=y[0].name)}const c=t.filter(g=>g!==e).map((g,y)=>({id:`guest-import-${Date.now()}-${y}`,name:g.name||`Gæst ${y+1}`,isGuest:!0,scores:Pl(Uf(g,r,s))})),l=n.eventinsstmp||Date.parse(n.eventdate)||Date.now(),u="imp_"+(e.objectId||n.eventobjectId||Date.now()),h={id:u,name:o||"Importeret runde",courseId:i,courseName:o,numTargets:r,startTarget:1,ruleset:"WA",completed:l,gpsRoute:null,gpsDuration:null,gpsDistance:null,traversalOrder:Qu(0,r),traversalPos:r,shooters:[{id:m.user.uid,name:((p=m.profile)==null?void 0:p.name)||"Mig",isGuest:!1,scores:Pl(Uf(e,r,s))},...c],shooterIds:[m.user.uid]};await ft(X(j,"users",m.user.uid,"rounds",u),{...h,created:l}),ft(X(j,"users",m.user.uid),{roundIndex:qg({id:u,completed:l})},{merge:!0}).catch(()=>{}),m.rounds=m.rounds.filter(g=>g.id!==u),m.rounds.unshift({...h,created:l}),m.rounds.sort((g,y)=>{var P,M;const A=g.completed||g.created||0,k=y.completed||y.created||0;return(typeof k=="number"?k:((P=k.toMillis)==null?void 0:P.call(k))??0)-(typeof A=="number"?A:((M=A.toMillis)==null?void 0:M.call(A))??0)}),Dt(),Zi(),q(`Runde importeret: ${h.name}`,"success")}let Da=null;function cy(){var n;(n=document.getElementById("import-player-modal"))==null||n.classList.add("hidden"),Da=null}window.cancelImportPlayer=cy;window.pickImportPlayer=async function(n){if(!Da)return;const{raw:e,validPlayers:t}=Da,r=t[n];cy();try{await ay(e,r,t)}catch(s){console.warn("Import fejl:",s),q("Fejl ved import: "+s.message,"error")}};function TP(n,e){Da={raw:n,validPlayers:e};const t=document.getElementById("import-player-list");t.innerHTML=e.map((r,s)=>`<div class="ac-item" onclick="pickImportPlayer(${s})">${K(r.name||"—")}</div>`).join(""),document.getElementById("import-player-modal").classList.remove("hidden")}const sa=document.getElementById("import-round-input");sa||console.warn("round-import.js: #import-round-input findes ikke i DOM");sa==null||sa.addEventListener("change",async n=>{var t;const e=n.target.files[0];if(n.target.value="",!e){q("Ingen fil valgt","error");return}if(!m.user){q("Log ind først","error");return}try{const r=JSON.parse(await e.text()),s=(r.players||[]).filter(c=>Array.isArray(c.eventresult)&&c.eventresult.length);if(!s.length){q("Filen indeholder ingen spillere med resultater","error");return}const i=(((t=m.profile)==null?void 0:t.email)||"").toLowerCase();let o=s.find(c=>(c.email||"").toLowerCase()===i);if(!o&&s.length===1&&(o=s[0]),!o){TP(r,s);return}await ay(r,o,s)}catch(r){console.warn("Import fejl:",r),q("Kunne ikke læse filen: "+((r==null?void 0:r.message)||r),"error")}});let ia=null;async function bP(){try{"wakeLock"in navigator&&(ia=await navigator.wakeLock.request("screen"))}catch{}}function nd(){ia&&(ia.release(),ia=null)}function $f(){if(!m.pendingRound)return;const n=m.rounds.find(t=>t.id===m.pendingRound);if(!n)return;m.pendingRound=null;const e=(n.shooters||[]).map(t=>({...t,scores:jr(t.scores)}));setTimeout(()=>Zu({...n,shooters:e}),300)}function AP(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${K(e)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};var jf;(jf=document.getElementById("ruleset-sel"))==null||jf.addEventListener("change",n=>{const e=document.getElementById("warn-thresh");e&&(e.value=N0(n.target.value))});window.startRound=async function(){var g,y,A;const n=(document.getElementById("round-name").value.trim()||"Min Skydning").slice(0,80),e=document.getElementById("course-sel").value,t=document.getElementById("target-count"),r=(t.value==="custom"?Number(document.getElementById("target-count-custom").value):Number(t.value))||24,s=Number(document.getElementById("start-target").value)-1,i=document.getElementById("gps-auto-sw").classList.contains("on"),o=document.getElementById("gps-track-sw").classList.contains("on");m.warnThreshold=Number(document.getElementById("warn-thresh").value)||8;const c=((g=document.getElementById("ruleset-sel"))==null?void 0:g.value)||Ur,l=Ut(c),u=[{id:m.user.uid,name:m.profile.name,isGuest:!1},...AP().filter(k=>k.id!==m.user.uid)];m.course=e&&m.courses.find(k=>k.id===e)||null;const h=u.map(k=>{const P=M0(k.id,k.name,k.isGuest);return O0(P,r,l),P});let p=s;if(i&&((y=m.course)!=null&&y.targets))try{p=j0(m.course.targets,await lc())}catch{}m.round={id:"r_"+Date.now(),name:n,courseId:e||null,courseName:((A=m.course)==null?void 0:A.name)||null,numTargets:r,startTarget:p+1,ruleset:c,shooters:h,created:Date.now(),traversalOrder:Qu(p,r),traversalPos:0},o&&(m.gpsTracking=U0(SP),document.getElementById("gps-bar").classList.toggle("hidden",!m.gpsTracking),bP()),showActivePanel(),qs(),nr(),mc(),fc()};function js(){return m.round.traversalOrder[m.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden");const e=document.getElementById("p-list");e&&(e.innerHTML="")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function nr(){var l,u;if(!m.round)return;const n=js(),e=m.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=" af "+e,document.getElementById("round-badge").textContent=m.round.name;const t=(u=(l=m.course)==null?void 0:l.targets)==null?void 0:u[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||`Mål ${n+1}`;const r=F0(m.round.shooters,e,Ut(m.round.ruleset));document.getElementById("pbar").style.width=`${r/e*100}%`;const s=m.round.shooters.flatMap(h=>h.scores.flat().filter(p=>p!=null)),i=s.reduce((h,p)=>h+we(p),0);document.getElementById("stat-avg").textContent=s.length?(i/s.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=i,document.getElementById("stat-rem").textContent=e-r;const o=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(o.classList.add("hidden"),o.onload=()=>o.classList.remove("hidden"),o.onerror=()=>o.classList.add("hidden"),o.src=t.imageUrl||t.photo):(o.src="",o.classList.add("hidden")),document.getElementById("edit-target-btn").classList.toggle("hidden",!(m.isAdmin&&m.round.courseId)),document.getElementById("next-btn").textContent=m.round.traversalPos===e-1?"AFSLUT →":"NÆSTE →";const c=V0(m.round.shooters,n);document.getElementById("target-avg").textContent=c!==null?`Gns. dette mål: ${c}`:""}function qs(){if(!m.round)return;const n=js(),e=document.getElementById("shooters-list");e.innerHTML="";const t=Ut(m.round.ruleset),r=$r(m.round.ruleset);m.round.shooters.forEach((s,i)=>{const o=ct(s.scores),c=L0(s.scores,m.warnThreshold),l=s.scores[n]||Array(t).fill(null),u=document.createElement("div");u.className="shooter-card";const h=s.scores.flat().filter(y=>y!=null),p=h.length?(h.reduce((y,A)=>y+we(A),0)/h.length).toFixed(2):"—";let g=`<div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${o}</div></div>`;if(t>=2){const A=Array.from({length:t},(k,P)=>s.scores.map(M=>M[P]).filter(M=>M!=null)).map(k=>k.length?(k.reduce((P,M)=>P+we(M),0)/k.length).toFixed(2):"—");g+=`<div class="sh-mini"><div class="sh-mini-lbl">P1</div><div class="sh-mini-val sh-mini-val-sm">${A[0]}</div></div>`,g+=`<div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">SNT</div><div class="sh-mini-val sh-mini-val-acc">${p}</div></div>`,g+=`<div class="sh-mini"><div class="sh-mini-lbl">P2</div><div class="sh-mini-val sh-mini-val-sm">${A[1]}</div></div>`}else g+=`<div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">SNT</div><div class="sh-mini-val sh-mini-val-acc">${p}</div></div>`;u.innerHTML=`
      <div class="sh-head"><span class="sh-target-emoji">🎯</span>${c?'<span class="warn-dot"></span>':""}
        <span class="sh-name">${K(s.name)}</span>
        <div class="sh-mini-group">${g}</div>
      </div>
      <div class="arrows-row">${Array.from({length:t},(y,A)=>`
        <div class="arrow-grp">${t>=2?`<div class="arrow-lbl">🎯 PIL ${A+1}</div>`:""}
          <div class="score-btns">${r.map((k,P)=>`
            <button class="sbtn ${k==="M"?"rank-M":`rank-${P}`} ${l[A]===k?`sel-${k}`:""}" data-v="${k}"
              onclick="setScore(${i},${n},${A},'${k}')">${k}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(u)})}window.setScore=function(n,e,t,r){const s=r==="M"?"M":Number(r);m.round.shooters[n].scores[e][t]=s,fc(),qs(),nr()};function SP({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=$_(r),document.getElementById("gps-dist").textContent=j_(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function fc(){if(!(!m.round||!m.user))try{await ft(X(j,"users",m.user.uid,"active","round"),B_(m.round))}catch(n){console.warn(n)}}async function RP(){var n;try{const e=await Qn(X(j,"users",m.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(t.id&&m.rounds.some(s=>s.id===t.id)){await Nt(X(j,"users",m.user.uid,"active","round"));return}if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await Nt(X(j,"users",m.user.uid,"active","round"));return}tr("Genoptag den igangværende runde?",()=>{m.round=B0(t),m.round.traversalOrder=t.traversalOrder||Qu(0,m.round.numTargets),m.round.traversalPos=t.traversalPos||0,m.round.courseId&&(m.course=m.courses.find(s=>s.id===m.round.courseId)||null),showActivePanel(),qs(),nr(),mc()})}catch(e){console.warn(e)}}function mc(){const n=document.getElementById("app-main");n&&(n.scrollTop=0,requestAnimationFrame(()=>{n.scrollTop=0,setTimeout(()=>{n.scrollTop=0},100)}))}function rd(){document.getElementById("edit-panel").classList.add("hidden")}window.prevTarget=function(){!m.round||m.round.traversalPos<=0||(rd(),m.round.traversalPos--,fc(),qs(),nr(),mc())};window.nextTarget=function(){m.round&&(rd(),m.round.traversalPos<m.round.numTargets-1?(m.round.traversalPos++,fc(),qs(),nr(),mc()):window.finishRound())};window.skipToTarget=function(){m.round&&(document.getElementById("skip-input").max=m.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!m.round||n<1||n>m.round.numTargets)return;rd();const e=m.round.traversalOrder.indexOf(n-1);e!==-1&&(m.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),qs(),nr()};window.finishRound=async function(){var o,c,l;m.finishTap++;const n=document.getElementById("finish-btn");if(m.finishTap===1){n.textContent="✓ BEKRÆFT",setTimeout(()=>{m.finishTap=0,n.textContent="✓ AFSLUT NU"},3e3);return}m.finishTap=0,n.textContent="✓ AFSLUT NU";let e={};m.gpsTracking&&(e=q_(),m.gpsTracking=!1),nd();const t=m.round.id||"r_"+Date.now(),r=m.round.shooters.filter(u=>!u.isGuest).map(u=>u.id),s={...B_(m.round),completed:Date.now(),...e,id:t,shooterIds:r};m.rounds.unshift({...s,created:Date.now()}),Dt(),Zi(),ft(X(j,"users",m.user.uid,"rounds",t),{...s,created:Ue()}).catch(()=>q("Runde gemt lokalt (netværksfejl)","error")),ft(X(j,"users",m.user.uid),{roundIndex:qg({id:t,completed:s.completed})},{merge:!0}).catch(()=>{}),m.round.shooters.filter(u=>!u.isGuest&&u.id!==m.user.uid).forEach(u=>{ft(X(j,"users",u.id,"rounds",t),{...s,created:Ue()}).catch(()=>q("Kunne ikke dele runde med medskytte","error"))});const i=m.round;if(i.courseId&&((o=m.profile)!=null&&o.kon)&&((c=m.profile)!=null&&c.bueklasse)){const u=i.shooters.find(h=>{var p;return h.id===((p=m.user)==null?void 0:p.uid)})||((l=i.shooters)==null?void 0:l[0]);if(u){const h=u.scores.flat().filter(p=>p!=null).length;ft(X(j,"bane_stats",i.courseId,"runder",t),{score:ct(u.scores),arrowsShot:h,kon:m.profile.kon,bueklasse:m.profile.bueklasse,numTargets:i.numTargets,ruleset:i.ruleset||Ur,dato:Ue()}).catch(p=>console.warn("bane_stats fejl:",p))}}window._lastRound=i,m.round=null,await Nt(X(j,"users",m.user.uid,"active","round")).catch(()=>{}),Z0(i),showResultsPanel()};window.abortRound=async function(){m.abortTap++;const n=document.getElementById("abort-btn");if(m.abortTap===1){n.textContent="🗑 BEKRÆFT",setTimeout(()=>{m.abortTap=0,n.textContent="🗑 AFBRYD"},3e3);return}m.abortTap=0,n.textContent="🗑 AFBRYD",m.gpsTracking&&(q_(),m.gpsTracking=!1),nd(),await Nt(X(j,"users",m.user.uid,"active","round")).catch(()=>{}),m.round=null,showSetupPanel()};window.showVisitResults=function(n){const e=m.rounds.find(r=>r.id===n);if(!e){q("Runden er ikke gemt lokalt","error");return}const t=(e.shooters||[]).map(r=>({...r,scores:jr(r.scores)}));window.switchTab("results"),Zu({...e,shooters:t})};window.showRouteOnMap=function(n){!m.courseMap||!n.length||(m.courseMapLayer&&m.courseMap.removeLayer(m.courseMapLayer),m.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(m.courseMap),m.courseMap.fitBounds(m.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.openEditTarget=function(){var t,r;const n=js(),e=(r=(t=m.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=js();m.round.courseId&&(await Yu(m.round.courseId,e,{name:n}),(t=m.course)!=null&&t.targets&&(m.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),nr()};window.editGps=async function(){var n;try{const e=await lc(),t=js();await Yu(m.round.courseId,t,{gps:e}),(n=m.course)!=null&&n.targets&&(m.course.targets[t].gps=e),q("GPS gemt!","success")}catch(e){q("GPS fejl: "+e.message,"error")}};const PP={"auth/user-not-found":"Bruger ikke fundet.","auth/wrong-password":"Forkert kodeord.","auth/invalid-credential":"Ugyldig email eller kodeord.","auth/email-already-in-use":"Email er allerede i brug.","auth/weak-password":"Kodeordet er for svagt (min. 6 tegn).","auth/invalid-email":"Ugyldig email-adresse.","auth/too-many-requests":"For mange forsøg. Prøv igen senere.","auth/network-request-failed":"Netværksfejl. Tjek din forbindelse."};function sd(n){return PP[n]||"Der opstod en fejl. Prøv igen."}function fn(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){fn("Udfyld alle felter.");return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await oI(ho,n,e)}catch(r){fn(sd(r.code))}finally{t.disabled=!1,t.textContent="LOG IND"}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value,r=document.getElementById("signup-kon").value,s=document.getElementById("signup-bueklasse").value;if(!n||!e||!t||!r||!s){fn("Udfyld alle felter.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){fn("Ugyldig email-adresse.");return}if(t.length<6){fn("Adgangskoden skal være mindst 6 tegn.");return}const i=document.querySelector("#signup-form .btn");i.disabled=!0,i.textContent="...";try{const o=await iI(ho,e,t);await ft(X(j,"users",o.user.uid),{name:n,email:e,yam:n,"e-mail":e,kon:r,bueklasse:s,created:Ue()})}catch(o){fn(sd(o.code))}finally{i.disabled=!1,i.textContent="OPRET KONTO"}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){fn("Indtast din email først.");return}try{await sI(ho,n),fn("Nulstillingsmail sendt!","ok")}catch(e){fn(sd(e.code))}};window.doLogout=async function(){try{await uI(ho)}catch{}};window.toggleGpsPause=$0;window.parseRoute=U_;const ly="archery_push_dismissed";document.addEventListener("DOMContentLoaded",()=>{var o,c,l,u,h,p,g;const n=document.getElementById("warn-enabled-sw");if(n){const y=localStorage.getItem("warnEnabled");m.warnEnabled=y===null?!0:y==="true",n.classList.toggle("on",m.warnEnabled),n.addEventListener("click",()=>{m.warnEnabled=!m.warnEnabled,n.classList.toggle("on",m.warnEnabled),localStorage.setItem("warnEnabled",m.warnEnabled)})}lI(ho,async y=>{if(y){m.user=y;let A,k;for(let P=0;P<3;P++)try{[A,k]=await Promise.all([Qn(X(j,"users",y.uid)),Qn(X(j,"admins",y.uid))]);break}catch(M){console.error("Profil fejl attempt",P,M.code,M.message),P<2?await new Promise(O=>setTimeout(O,2e3*(P+1))):(m.profile={name:y.email,email:y.email},m.isAdmin=!1)}if(A!=null&&A.exists()){const P=A.data();m.profile={name:P.name||P.yam||y.email,email:P.email||P["e-mail"]||y.email,kon:P.kon||null,bueklasse:P.bueklasse||null}}else m.profile||(m.profile={name:y.email,email:y.email});m.isAdmin=(k==null?void 0:k.exists())||!1,m.isSuperAdmin=m.isAdmin&&y.email==="bsklausen@proton.me",CP()}else kP()});const e="archery_pwa_dismissed",t=localStorage.getItem(e)==="1";let r=null;window.addEventListener("beforeinstallprompt",y=>{y.preventDefault(),r=y,t||document.getElementById("pwa-banner").classList.remove("hidden")}),(o=document.getElementById("pwa-install-btn"))==null||o.addEventListener("click",async()=>{r&&(r.prompt(),await r.userChoice,r=null,document.getElementById("pwa-banner").classList.add("hidden"))}),(c=document.getElementById("pwa-dismiss-btn"))==null||c.addEventListener("click",()=>{document.getElementById("pwa-banner").classList.add("hidden"),localStorage.setItem(e,"1")}),(l=document.getElementById("push-enable-btn"))==null||l.addEventListener("click",async()=>{document.getElementById("push-banner").classList.add("hidden"),await oy()&&q("Notifikationer aktiveret","success")}),(u=document.getElementById("push-dismiss-btn"))==null||u.addEventListener("click",()=>{document.getElementById("push-banner").classList.add("hidden"),localStorage.setItem(ly,"1")});const s=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.MSStream,i=window.navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches;s&&!i&&!t&&((h=document.getElementById("ios-install-banner"))==null||h.classList.remove("hidden")),(p=document.getElementById("ios-dismiss-btn"))==null||p.addEventListener("click",()=>{document.getElementById("ios-install-banner").classList.add("hidden"),localStorage.setItem(e,"1")}),oa(24),document.getElementById("target-count").addEventListener("change",y=>{const A=y.target.value,k=document.getElementById("target-count-custom");k.style.display=A==="custom"?"":"none",A!=="custom"&&oa(Number(A))}),document.getElementById("target-count-custom").addEventListener("input",y=>{const A=Number(y.target.value);A>0&&oa(A)}),(g=document.getElementById("photo-input"))==null||g.addEventListener("change",async y=>{var k;const A=y.target.files[0];if(A)try{const P=await G_(A),M=js(),O=u_(M_,`courses/${m.round.courseId}/target_${M}.jpg`);await c_(O,P,"base64",{contentType:"image/jpeg"});const U=await l_(O);await Yu(m.round.courseId,M,{imageUrl:U}),(k=m.course)!=null&&k.targets&&(m.course.targets[M].imageUrl=U),nr()}catch(P){q("Upload fejl: "+P.message,"error")}}),document.querySelectorAll(".modal").forEach(y=>{y.addEventListener("click",A=>{A.target===y&&y.classList.add("hidden")})})});window.saveProfilModal=async function(){const n=document.getElementById("profil-kon").value,e=document.getElementById("profil-bueklasse").value,t=document.getElementById("profil-err");if(!n||!e){t.textContent="Vælg både køn og bueklasse.",t.classList.remove("hidden");return}t.classList.add("hidden");try{await Je(X(j,"users",m.user.uid),{kon:n,bueklasse:e}),m.profile.kon=n,m.profile.bueklasse=e,document.getElementById("profil-modal").classList.add("hidden")}catch{t.textContent="Fejl ved gem. Prøv igen.",t.classList.remove("hidden")}};function CP(){document.getElementById("hdr-name").textContent=m.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),(!m.profile.kon||!m.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),800),document.getElementById("admin-badge").classList.toggle("hidden",!m.isAdmin),document.querySelectorAll(".admin-only").forEach(t=>t.classList.toggle("hidden",!m.isAdmin));const n=Of();m.friends=n.friends||[],m.rounds=n.rounds||[],qe(Be(j,"users",m.user.uid,"friends")).then(t=>{m.friends=t.docs.map(r=>({...r.data(),id:r.id})),Dt(),Ar(),Xi()}).catch(t=>console.warn("Hent venner:",t)),Ar(),Xi(),Zi(),m.pendingRound=new URLSearchParams(window.location.search).get("round")||null,m.pendingRound&&$f();const e=Of().courses||[];m.courses=e,fo(),uy(),DP(),qe(Be(j,"users",m.user.uid,"rounds")).then(t=>{const r=new Set(t.docs.map(c=>c.id)),s=t.docs.map(c=>({...c.data(),id:c.id}));if(s.length){const c=new Set(m.rounds.map(u=>u.id)),l=s.filter(u=>!c.has(u.id));l.length&&(m.rounds=[...m.rounds,...l].sort((u,h)=>{var y,A;const p=u.completed||u.created||0,g=h.completed||h.created||0;return(typeof g=="number"?g:((y=g.toMillis)==null?void 0:y.call(g))??0)-(typeof p=="number"?p:((A=p.toMillis)==null?void 0:A.call(p))??0)}),Dt(),Zi(),m.pendingRound&&$f())}const i=m.rounds.filter(c=>c.id&&!r.has(c.id));i.forEach(c=>{const{id:l,...u}=c;ft(X(j,"users",m.user.uid,"rounds",l),{...u,created:Ue()}).catch(()=>{})});const o=[...s,...i].filter(c=>c.id).map(c=>({id:c.id,completed:c.completed||0}));o.length&&ft(X(j,"users",m.user.uid),{roundIndex:o},{merge:!0}).catch(()=>{})}).catch(t=>console.warn("Hent runder:",t)),G0(),td().then(()=>{$t(),go()}).catch(t=>console.warn("Hent meetups:",t)),ny().then(()=>{Jr(),Ar(),hc()}).catch(t=>console.warn("Hent delinger:",t)),iy().then(t=>{t&&pP()}),mP(),fP()&&localStorage.getItem(ly)!=="1"&&document.getElementById("pwa-banner").classList.contains("hidden")&&document.getElementById("ios-install-banner").classList.contains("hidden")&&setTimeout(()=>{var t;return(t=document.getElementById("push-banner"))==null?void 0:t.classList.remove("hidden")},1e3),RP()}function kP(){m.user=null,m.profile=null,m.round=null,nd(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){window.appLang=window.appLang==="da"?"en":"da",document.getElementById("lang-btn").textContent=window.appLang.toUpperCase()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&(J0(),$t(),sP(),Jr(),uP()),n==="analyse"&&window.renderAnalyse(),n==="courses"&&m.courseMap&&setTimeout(()=>m.courseMap.invalidateSize(),100)};function DP(){!navigator.geolocation||!m.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(m.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=Ju(e,o);c<t&&(t=c,r=s.id)})}),r&&t<500){const s=document.getElementById("course-sel");s.value=r,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function uy(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML='<option value="">-- Ingen bane --</option>',m.courses.forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${t.numTargets} mål)`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=m.courses.find(i=>i.id===n.value),r=document.getElementById("target-count"),s=document.getElementById("target-count-custom");t?(!!r.querySelector(`option[value="${t.numTargets}"]`)?(r.value=String(t.numTargets),s.style.display="none"):(r.value="custom",s.value=t.numTargets,s.style.display=""),r.disabled=!0,s.disabled=!0):(r.disabled=!1,s.disabled=!1,r.value!=="custom"&&(s.style.display="none")),oa(t?t.numTargets:r.value==="custom"?Number(s.value):Number(r.value))}}window.populateCourseDropdown=uy;function oa(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"}),document.getElementById("qr-url").value=window.location.href};window.copyQrUrl=function(){var e;const n=document.getElementById("qr-url");(e=navigator.clipboard)==null||e.writeText(n.value).then(()=>q("Link kopieret","success"),()=>{n.select(),document.execCommand("copy"),q("Link kopieret","success")})};window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
