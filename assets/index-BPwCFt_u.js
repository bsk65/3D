(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Td={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},uy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,h=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|u>>6,v=u&63;l||(v=64,o||(_=64)),r.push(t[h],t[p],t[_],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Af(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):uy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new dy;const _=i<<2|c>>4;if(r.push(_),u!==64){const v=c<<4&240|u>>2;if(r.push(v),p!==64){const A=u<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hy=function(n){const e=Af(n);return Sf.encodeByteArray(e,!0)},$o=function(n){return hy(n).replace(/\./g,"")},Rf=function(n){try{return Sf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const py=()=>fy().__FIREBASE_DEFAULTS__,my=()=>{if(typeof process>"u"||typeof Td>"u")return;const n=Td.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rf(n[1]);return e&&JSON.parse(e)},fa=()=>{try{return py()||my()||gy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pf=n=>{var e,t;return(t=(e=fa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_y=n=>{const e=Pf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Cf=()=>{var n;return(n=fa())===null||n===void 0?void 0:n.config},kf=n=>{var e;return(e=fa())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function vy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$o(JSON.stringify(t)),$o(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function Iy(){var n;const e=(n=fa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ey(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ty(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function by(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ay(){const n=Fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Df(){return!Iy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fl(){try{return typeof indexedDB=="object"}catch{return!1}}function Nf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Sy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="FirebaseError";class xt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ry,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Py(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new xt(s,c,r)}}function Py(n,e){return n.replace(Cy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cy=/\{\$([^}]+)}/g;function ky(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function di(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(bd(i)&&bd(o)){if(!di(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function bd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Dy(n,e){const t=new Ny(n,e);return t.subscribe.bind(t)}class Ny{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=cc),s.error===void 0&&(s.error=cc),s.complete===void 0&&(s.complete=cc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function cc(){}/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class At{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new yy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(My(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ly(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ly(n){return n===Zn?void 0:n}function My(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(oe||(oe={}));const Fy={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},By=oe.INFO,Uy={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},$y=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Uy[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pl{constructor(e){this.name=e,this._logLevel=By,this._logHandler=$y,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const jy=(n,e)=>e.some(t=>n instanceof t);let Ad,Sd;function qy(){return Ad||(Ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ky(){return Sd||(Sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xf=new WeakMap,Dc=new WeakMap,Vf=new WeakMap,lc=new WeakMap,ml=new WeakMap;function Gy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(ln(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xf.set(t,n)}).catch(()=>{}),ml.set(e,n),e}function zy(n){if(Dc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Dc.set(n,e)}let Nc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Dc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ln(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Hy(n){Nc=n(Nc)}function Wy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(uc(this),e,...t);return Vf.set(r,e.sort?e.sort():[e]),ln(r)}:Ky().includes(n)?function(...e){return n.apply(uc(this),e),ln(xf.get(this))}:function(...e){return ln(n.apply(uc(this),e))}}function Qy(n){return typeof n=="function"?Wy(n):(n instanceof IDBTransaction&&zy(n),jy(n,qy())?new Proxy(n,Nc):n)}function ln(n){if(n instanceof IDBRequest)return Gy(n);if(lc.has(n))return lc.get(n);const e=Qy(n);return e!==n&&(lc.set(n,e),ml.set(e,n)),e}const uc=n=>ml.get(n);function pa(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ln(o.result),l.oldVersion,l.newVersion,ln(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}function dc(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),ln(t).then(()=>{})}const Jy=["get","getKey","getAll","getAllKeys","count"],Yy=["put","add","delete","clear"],hc=new Map;function Rd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(hc.get(e))return hc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Yy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jy.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return hc.set(e,i),i}Hy(n=>({...n,get:(e,t,r)=>Rd(e,t)||n.get(e,t,r),has:(e,t)=>!!Rd(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Zy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Zy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xc="@firebase/app",Pd="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new pl("@firebase/app"),ev="@firebase/app-compat",tv="@firebase/analytics-compat",nv="@firebase/analytics",rv="@firebase/app-check-compat",sv="@firebase/app-check",iv="@firebase/auth",ov="@firebase/auth-compat",av="@firebase/database",cv="@firebase/data-connect",lv="@firebase/database-compat",uv="@firebase/functions",dv="@firebase/functions-compat",hv="@firebase/installations",fv="@firebase/installations-compat",pv="@firebase/messaging",mv="@firebase/messaging-compat",gv="@firebase/performance",_v="@firebase/performance-compat",yv="@firebase/remote-config",vv="@firebase/remote-config-compat",wv="@firebase/storage",Iv="@firebase/storage-compat",Ev="@firebase/firestore",Tv="@firebase/vertexai-preview",bv="@firebase/firestore-compat",Av="firebase",Sv="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="[DEFAULT]",Rv={[xc]:"fire-core",[ev]:"fire-core-compat",[nv]:"fire-analytics",[tv]:"fire-analytics-compat",[sv]:"fire-app-check",[rv]:"fire-app-check-compat",[iv]:"fire-auth",[ov]:"fire-auth-compat",[av]:"fire-rtdb",[cv]:"fire-data-connect",[lv]:"fire-rtdb-compat",[uv]:"fire-fn",[dv]:"fire-fn-compat",[hv]:"fire-iid",[fv]:"fire-iid-compat",[pv]:"fire-fcm",[mv]:"fire-fcm-compat",[gv]:"fire-perf",[_v]:"fire-perf-compat",[yv]:"fire-rc",[vv]:"fire-rc-compat",[wv]:"fire-gcs",[Iv]:"fire-gcs-compat",[Ev]:"fire-fst",[bv]:"fire-fst-compat",[Tv]:"fire-vertex","fire-js":"fire-js",[Av]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Map,Pv=new Map,Lc=new Map;function Cd(n,e){try{n.container.addComponent(e)}catch(t){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ct(n){const e=n.name;if(Lc.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;Lc.set(e,n);for(const t of jo.values())Cd(t,n);for(const t of Pv.values())Cd(t,n);return!0}function Ar(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $t(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new br("app","Firebase",Cv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new At("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=Sv;function Lf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ln.create("bad-app-name",{appName:String(s)});if(t||(t=Cf()),!t)throw Ln.create("no-options");const i=jo.get(s);if(i){if(di(t,i.options)&&di(r,i.config))return i;throw Ln.create("duplicate-app",{appName:s})}const o=new Oy(s);for(const l of Lc.values())o.addComponent(l);const c=new kv(t,r,o);return jo.set(s,c),c}function gl(n=Vc){const e=jo.get(n);if(!e&&n===Vc&&Cf())return Lf();if(!e)throw Ln.create("no-app",{appName:n});return e}function ft(n,e,t){var r;let s=(r=Rv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(c.join(" "));return}Ct(new At(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Dv="firebase-heartbeat-database",Nv=1,hi="firebase-heartbeat-store";let fc=null;function Mf(){return fc||(fc=pa(Dv,Nv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ln.create("idb-open",{originalErrorMessage:n.message})})),fc}async function xv(n){try{const t=(await Mf()).transaction(hi),r=await t.objectStore(hi).get(Of(n));return await t.done,r}catch(e){if(e instanceof xt)dn.warn(e.message);else{const t=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(t.message)}}}async function kd(n,e){try{const r=(await Mf()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,Of(n)),await r.done}catch(t){if(t instanceof xt)dn.warn(t.message);else{const r=Ln.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dn.warn(r.message)}}}function Of(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Vv=1024,Lv=30*24*60*60*1e3;class Mv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Lv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dd(),{heartbeatsToSend:r,unsentEntries:s}=Ov(this._heartbeatsCache.heartbeats),i=$o(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return dn.warn(t),""}}}function Dd(){return new Date().toISOString().substring(0,10)}function Ov(n,e=Vv){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Nd(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Fv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fl()?Nf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return kd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return kd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nd(n){return $o(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(n){Ct(new At("platform-logger",e=>new Xy(e),"PRIVATE")),Ct(new At("heartbeat",e=>new Mv(e),"PRIVATE")),ft(xc,Pd,n),ft(xc,Pd,"esm2017"),ft("fire-js","")}Bv("");var Uv="firebase",$v="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(Uv,$v,"app");function _l(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Ff(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jv=Ff,Bf=new br("auth","Firebase",Ff());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new pl("@firebase/auth");function qv(n,...e){qo.logLevel<=oe.WARN&&qo.warn(`Auth (${Sr}): ${n}`,...e)}function bo(n,...e){qo.logLevel<=oe.ERROR&&qo.error(`Auth (${Sr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n,...e){throw yl(n,...e)}function Kt(n,...e){return yl(n,...e)}function Uf(n,e,t){const r=Object.assign(Object.assign({},jv()),{[e]:t});return new br("auth","Firebase",r).create(e,{appName:n.name})}function un(n){return Uf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Bf.create(n,...e)}function te(n,e,...t){if(!n)throw yl(e,...t)}function rn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bo(e),new Error(e)}function hn(n,e){n||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Kv(){return xd()==="http:"||xd()==="https:"}function xd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kv()||Ty()||"connection"in navigator)?navigator.onLine:!0}function zv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t){this.shortDelay=e,this.longDelay=t,hn(t>e,"Short delay should be less than long delay!"),this.isMobile=wy()||by()}get(){return Gv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n,e){hn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=new xi(3e4,6e4);function pn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function mn(n,e,t,r,s={}){return jf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ni(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},i);return Ey()||(u.referrerPolicy="no-referrer"),$f.fetch()(qf(n,n.config.apiHost,t,c),u)})}async function jf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hv),e);try{const s=new Jv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mo(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mo(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw mo(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Uf(n,h,u);kt(n,h)}}catch(s){if(s instanceof xt)throw s;kt(n,"network-request-failed",{message:String(s)})}}async function Vi(n,e,t,r,s={}){const i=await mn(n,e,t,r,s);return"mfaPendingCredential"in i&&kt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function qf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?vl(n.config,s):`${n.config.apiScheme}://${s}`}function Qv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),Wv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Kt(n,e,r);return s.customData._tokenResponse=t,s}function Vd(n){return n!==void 0&&n.enterprise!==void 0}class Yv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Qv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Xv(n,e){return mn(n,"GET","/v2/recaptchaConfig",pn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(n,e){return mn(n,"POST","/v1/accounts:delete",e)}async function Kf(n,e){return mn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ew(n,e=!1){const t=Ee(n),r=await t.getIdToken(e),s=wl(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ti(pc(s.auth_time)),issuedAtTime:ti(pc(s.iat)),expirationTime:ti(pc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pc(n){return Number(n)*1e3}function wl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return bo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rf(t);return s?JSON.parse(s):(bo("Failed to decode base64 JWT payload"),null)}catch(s){return bo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ld(n){const e=wl(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof xt&&tw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function tw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(n){var e;const t=n.auth,r=await n.getIdToken(),s=await fi(n,Kf(t,{idToken:r}));te(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gf(i.providerUserInfo):[],c=sw(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Oc(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function rw(n){const e=Ee(n);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gf(n){return n.map(e=>{var{providerId:t}=e,r=_l(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(n,e){const t=await jf(n,{},async()=>{const r=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=qf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",$f.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ow(n,e){return mn(n,"POST","/v2/accounts:revokeToken",pn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Ld(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await iw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Xr;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=_l(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await fi(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ew(this,e)}reload(){return rw(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await fi(this,Zv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,u,h;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,v=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,L=(u=t.createdAt)!==null&&u!==void 0?u:void 0,F=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:U,emailVerified:Q,isAnonymous:K,providerData:G,stsTokenManager:E}=t;te(U&&E,e,"internal-error");const y=Xr.fromJSON(this.name,E);te(typeof U=="string",e,"internal-error"),An(p,e.name),An(_,e.name),te(typeof Q=="boolean",e,"internal-error"),te(typeof K=="boolean",e,"internal-error"),An(v,e.name),An(A,e.name),An(k,e.name),An(C,e.name),An(L,e.name),An(F,e.name);const w=new sn({uid:U,auth:e,email:_,emailVerified:Q,displayName:p,isAnonymous:K,photoURL:A,phoneNumber:v,tenantId:k,stsTokenManager:y,createdAt:L,lastLoginAt:F});return G&&Array.isArray(G)&&(w.providerData=G.map(T=>Object.assign({},T))),C&&(w._redirectEventId=C),w}static async _fromIdTokenResponse(e,t,r=!1){const s=new Xr;s.updateFromServerResponse(t);const i=new sn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ko(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Xr;c.updateFromIdToken(r);const l=new sn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Oc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=new Map;function on(n){hn(n instanceof Function,"Expected a class definition");let e=Md.get(n);return e?(hn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Md.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zf.type="NONE";const Od=zf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n,e,t){return`firebase:${n}:${e}:${t}`}class Zr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ao(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ao("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Zr(on(Od),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||on(Od);const o=Ao(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const h=await u._get(o);if(h){const p=sn._fromJSON(e,h);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Zr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xf(e))return"Blackberry";if(Zf(e))return"Webos";if(Wf(e))return"Safari";if((e.includes("chrome/")||Qf(e))&&!e.includes("edge/"))return"Chrome";if(Yf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hf(n=Fe()){return/firefox\//i.test(n)}function Wf(n=Fe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qf(n=Fe()){return/crios\//i.test(n)}function Jf(n=Fe()){return/iemobile/i.test(n)}function Yf(n=Fe()){return/android/i.test(n)}function Xf(n=Fe()){return/blackberry/i.test(n)}function Zf(n=Fe()){return/webos/i.test(n)}function Il(n=Fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function aw(n=Fe()){var e;return Il(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cw(){return Ay()&&document.documentMode===10}function ep(n=Fe()){return Il(n)||Yf(n)||Zf(n)||Xf(n)||/windows phone/i.test(n)||Jf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n,e=[]){let t;switch(n){case"Browser":t=Fd(Fe());break;case"Worker":t=`${Fd(Fe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sr}/${r}`}/**
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
 */class lw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function uw(n,e={}){return mn(n,"GET","/v2/passwordPolicy",pn(n,e))}/**
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
 */const dw=6;class hw{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:dw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bd(this),this.idTokenSubscription=new Bd(this),this.beforeStateQueue=new lw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=on(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Kf(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if($t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(un(this));const t=e?Ee(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uw(this),t=new hw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new br("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ow(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&on(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[on(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&qv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function jn(n){return Ee(n)}class Bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dy(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pw(n){ma=n}function np(n){return ma.loadJS(n)}function mw(){return ma.recaptchaEnterpriseScript}function gw(){return ma.gapiScript}function _w(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const yw="recaptcha-enterprise",vw="NO_RECAPTCHA";class ww{constructor(e){this.type=yw,this.auth=jn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Xv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Yv(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Vd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(vw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&Vd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=mw();l.length!==0&&(l+=c),np(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Ud(n,e,t,r=!1){const s=new ww(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Go(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ud(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ud(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(n,e){const t=Ar(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(di(i,e??{}))return s;kt(s,"already-initialized")}return t.initialize({options:e})}function Ew(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(on);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tw(n,e,t){const r=jn(n);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=rp(e),{host:o,port:c}=bw(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Aw()}function rp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bw(n){const e=rp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$d(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$d(o)}}}function $d(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Aw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,t){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function Sw(n,e){return mn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(n,e){return Vi(n,"POST","/v1/accounts:signInWithPassword",pn(n,e))}async function Pw(n,e){return mn(n,"POST","/v1/accounts:sendOobCode",pn(n,e))}async function Cw(n,e){return Pw(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(n,e){return Vi(n,"POST","/v1/accounts:signInWithEmailLink",pn(n,e))}async function Dw(n,e){return Vi(n,"POST","/v1/accounts:signInWithEmailLink",pn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends El{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new pi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new pi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Go(e,t,"signInWithPassword",Rw);case"emailLink":return kw(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Go(e,r,"signUpPassword",Sw);case"emailLink":return Dw(e,{idToken:t,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n,e){return Vi(n,"POST","/v1/accounts:signInWithIdp",pn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="http://localhost";class dr extends El{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=_l(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new dr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return es(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,es(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,es(e,t)}buildRequest(){const e={requestUri:Nw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ni(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vw(n){const e=Gs(zs(n)).link,t=e?Gs(zs(e)).deep_link_id:null,r=Gs(zs(n)).deep_link_id;return(r?Gs(zs(r)).link:null)||r||t||e||n}class Tl{constructor(e){var t,r,s,i,o,c;const l=Gs(zs(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=xw((s=l.mode)!==null&&s!==void 0?s:null);te(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Vw(e);try{return new Tl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,t){return pi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Tl.parseLink(t);return te(r,"argument-error"),pi._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends sp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Li{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Cn.credential(t,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Li{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Li{constructor(){super("twitter.com")}static credential(e,t){return dr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Dn.credential(t,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(n,e){return Vi(n,"POST","/v1/accounts:signUp",pn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=jd(r);return new hr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=jd(r);return new hr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function jd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends xt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new zo(e,t,r,s)}}function ip(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(n,i,e,r):i})}async function Mw(n,e,t=!1){const r=await fi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(n,e,t=!1){const{auth:r}=n;if($t(r.app))return Promise.reject(un(r));const s="reauthenticate";try{const i=await fi(n,ip(r,s,e,n),t);te(i.idToken,r,"internal-error");const o=wl(i.idToken);te(o,r,"internal-error");const{sub:c}=o;return te(n.uid===c,r,"user-mismatch"),hr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(n,e,t=!1){if($t(n.app))return Promise.reject(un(n));const r="signIn",s=await ip(n,r,e),i=await hr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Fw(n,e){return op(jn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(n){const e=jn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Bw(n,e,t){const r=jn(n);await Go(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Cw)}async function Uw(n,e,t){if($t(n.app))return Promise.reject(un(n));const r=jn(n),o=await Go(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Lw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ap(n),l}),c=await hr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function $w(n,e,t){return $t(n.app)?Promise.reject(un(n)):Fw(Ee(n),ms.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ap(n),r})}function jw(n,e,t,r){return Ee(n).onIdTokenChanged(e,t,r)}function qw(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function Kw(n,e,t,r){return Ee(n).onAuthStateChanged(e,t,r)}function Gw(n){return Ee(n).signOut()}const Ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=1e3,Hw=10;class lp extends cp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ep(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Hw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},zw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lp.type="LOCAL";const Ww=lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends cp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}up.type="SESSION";const dp=up;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ga(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await Qw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ga.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=bl("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===u)switch(_.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function Yw(n){Gt().location.href=n}/**
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
 */function hp(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function Xw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function eI(){return hp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="firebaseLocalStorageDb",tI=1,Wo="firebaseLocalStorage",pp="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _a(n,e){return n.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function nI(){const n=indexedDB.deleteDatabase(fp);return new Mi(n).toPromise()}function Fc(){const n=indexedDB.open(fp,tI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Wo,{keyPath:pp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await nI(),e(await Fc()))})})}async function qd(n,e,t){const r=_a(n,!0).put({[pp]:e,value:t});return new Mi(r).toPromise()}async function rI(n,e){const t=_a(n,!1).get(e),r=await new Mi(t).toPromise();return r===void 0?null:r.value}function Kd(n,e){const t=_a(n,!0).delete(e);return new Mi(t).toPromise()}const sI=800,iI=3;class mp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>iI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ga._getInstance(eI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Xw(),!this.activeServiceWorker)return;this.sender=new Jw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fc();return await qd(e,Ho,"1"),await Kd(e,Ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>qd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>rI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_a(s,!1).getAll();return new Mi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mp.type="LOCAL";const oI=mp;new xi(3e4,6e4);/**
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
 */function aI(n,e){return e?on(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends El{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,t){return es(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cI(n){return op(n.auth,new Al(n),n.bypassAuthState)}function lI(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),Ow(t,new Al(n),n.bypassAuthState)}async function uI(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),Mw(t,new Al(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cI;case"linkViaPopup":case"linkViaRedirect":return uI;case"reauthViaPopup":case"reauthViaRedirect":return lI;default:kt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=new xi(2e3,1e4);class Yr extends gp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dI.get())};e()}}Yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="pendingRedirect",So=new Map;class fI extends gp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await pI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pI(n,e){const t=_I(e),r=gI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function mI(n,e){So.set(n._key(),e)}function gI(n){return on(n._redirectPersistence)}function _I(n){return Ao(hI,n.config.apiKey,n.name)}async function yI(n,e,t=!1){if($t(n.app))return Promise.reject(un(n));const r=jn(n),s=aI(r,e),o=await new fI(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=10*60*1e3;class wI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!II(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!_p(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Kt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gd(e))}saveEventToCache(e){this.cachedEventUids.add(Gd(e)),this.lastProcessedEventTime=Date.now()}}function Gd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _p({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function II(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _p(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(n,e={}){return mn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bI=/^https?/;async function AI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await EI(n);for(const t of e)try{if(SI(t))return}catch{}kt(n,"unauthorized-domain")}function SI(n){const e=Mc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!bI.test(t))return!1;if(TI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const RI=new xi(3e4,6e4);function zd(){const n=Gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PI(n){return new Promise((e,t)=>{var r,s,i;function o(){zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zd(),t(Kt(n,"network-request-failed"))},timeout:RI.get()})}if(!((s=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Gt().gapi)===null||i===void 0)&&i.load)o();else{const c=_w("iframefcb");return Gt()[c]=()=>{gapi.load?o():t(Kt(n,"network-request-failed"))},np(`${gw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ro=null,e})}let Ro=null;function CI(n){return Ro=Ro||PI(n),Ro}/**
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
 */const kI=new xi(5e3,15e3),DI="__/auth/iframe",NI="emulator/auth/iframe",xI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LI(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vl(e,NI):`https://${n.config.authDomain}/${DI}`,r={apiKey:e.apiKey,appName:n.name,v:Sr},s=VI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ni(r).slice(1)}`}async function MI(n){const e=await CI(n),t=Gt().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:LI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(n,"network-request-failed"),c=Gt().setTimeout(()=>{i(o)},kI.get());function l(){Gt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FI=500,BI=600,UI="_blank",$I="http://localhost";class Hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jI(n,e,t,r=FI,s=BI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},OI),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Fe().toLowerCase();t&&(c=Qf(u)?UI:t),Hf(u)&&(e=e||$I,l.scrollbars="yes");const h=Object.entries(l).reduce((_,[v,A])=>`${_}${v}=${A},`,"");if(aw(u)&&c!=="_self")return qI(e||"",c),new Hd(null);const p=window.open(e||"",c,h);te(p,n,"popup-blocked");try{p.focus()}catch{}return new Hd(p)}function qI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const KI="__/auth/handler",GI="emulator/auth/handler",zI=encodeURIComponent("fac");async function Wd(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Sr,eventId:s};if(e instanceof sp){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ky(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof Li){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await n._getAppCheckToken(),u=l?`#${zI}=${encodeURIComponent(l)}`:"";return`${HI(n)}?${Ni(c).slice(1)}${u}`}function HI({config:n}){return n.emulator?vl(n,GI):`https://${n.authDomain}/${KI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class WI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dp,this._completeRedirectFn=yI,this._overrideRedirectResult=mI}async _openPopup(e,t,r,s){var i;hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Wd(e,t,r,Mc(),s);return jI(e,o,bl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Wd(e,t,r,Mc(),s);return Yw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await MI(e),r=new wI(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mc,{type:mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mc];o!==void 0&&t(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ep()||Wf()||Il()}}const QI=WI;var Qd="@firebase/auth",Jd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XI(n){Ct(new At("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tp(n)},u=new fw(r,s,i,l);return Ew(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ct(new At("auth-internal",e=>{const t=jn(e.getProvider("auth").getImmediate());return(r=>new JI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Qd,Jd,YI(n)),ft(Qd,Jd,"esm2017")}/**
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
 */const ZI=5*60,eE=kf("authIdTokenMaxAge")||ZI;let Yd=null;const tE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>eE)return;const s=t==null?void 0:t.token;Yd!==s&&(Yd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nE(n=gl()){const e=Ar(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Iw(n,{popupRedirectResolver:QI,persistence:[oI,Ww,dp]}),r=kf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tE(i.toString());qw(t,o,()=>o(t.currentUser)),jw(t,c=>o(c))}}const s=Pf("auth");return s&&Tw(t,`http://${s}`),t}function rE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}pw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Kt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",rE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XI("Browser");var Xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ar,yp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.D=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(T,b,R){for(var I=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)I[Ge-2]=arguments[Ge];return y.prototype[b].apply(T,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,w){w||(w=0);var T=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)T[b]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(b=0;16>b;++b)T[b]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],b=E.g[2];var R=E.g[3],I=y+(R^w&(b^R))+T[0]+3614090360&4294967295;y=w+(I<<7&4294967295|I>>>25),I=R+(b^y&(w^b))+T[1]+3905402710&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(w^R&(y^w))+T[2]+606105819&4294967295,b=R+(I<<17&4294967295|I>>>15),I=w+(y^b&(R^y))+T[3]+3250441966&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(R^w&(b^R))+T[4]+4118548399&4294967295,y=w+(I<<7&4294967295|I>>>25),I=R+(b^y&(w^b))+T[5]+1200080426&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(w^R&(y^w))+T[6]+2821735955&4294967295,b=R+(I<<17&4294967295|I>>>15),I=w+(y^b&(R^y))+T[7]+4249261313&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(R^w&(b^R))+T[8]+1770035416&4294967295,y=w+(I<<7&4294967295|I>>>25),I=R+(b^y&(w^b))+T[9]+2336552879&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(w^R&(y^w))+T[10]+4294925233&4294967295,b=R+(I<<17&4294967295|I>>>15),I=w+(y^b&(R^y))+T[11]+2304563134&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(R^w&(b^R))+T[12]+1804603682&4294967295,y=w+(I<<7&4294967295|I>>>25),I=R+(b^y&(w^b))+T[13]+4254626195&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(w^R&(y^w))+T[14]+2792965006&4294967295,b=R+(I<<17&4294967295|I>>>15),I=w+(y^b&(R^y))+T[15]+1236535329&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(b^R&(w^b))+T[1]+4129170786&4294967295,y=w+(I<<5&4294967295|I>>>27),I=R+(w^b&(y^w))+T[6]+3225465664&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(R^y))+T[11]+643717713&4294967295,b=R+(I<<14&4294967295|I>>>18),I=w+(R^y&(b^R))+T[0]+3921069994&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(w^b))+T[5]+3593408605&4294967295,y=w+(I<<5&4294967295|I>>>27),I=R+(w^b&(y^w))+T[10]+38016083&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(R^y))+T[15]+3634488961&4294967295,b=R+(I<<14&4294967295|I>>>18),I=w+(R^y&(b^R))+T[4]+3889429448&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(w^b))+T[9]+568446438&4294967295,y=w+(I<<5&4294967295|I>>>27),I=R+(w^b&(y^w))+T[14]+3275163606&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(R^y))+T[3]+4107603335&4294967295,b=R+(I<<14&4294967295|I>>>18),I=w+(R^y&(b^R))+T[8]+1163531501&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(w^b))+T[13]+2850285829&4294967295,y=w+(I<<5&4294967295|I>>>27),I=R+(w^b&(y^w))+T[2]+4243563512&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(R^y))+T[7]+1735328473&4294967295,b=R+(I<<14&4294967295|I>>>18),I=w+(R^y&(b^R))+T[12]+2368359562&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(w^b^R)+T[5]+4294588738&4294967295,y=w+(I<<4&4294967295|I>>>28),I=R+(y^w^b)+T[8]+2272392833&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^w)+T[11]+1839030562&4294967295,b=R+(I<<16&4294967295|I>>>16),I=w+(b^R^y)+T[14]+4259657740&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(w^b^R)+T[1]+2763975236&4294967295,y=w+(I<<4&4294967295|I>>>28),I=R+(y^w^b)+T[4]+1272893353&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^w)+T[7]+4139469664&4294967295,b=R+(I<<16&4294967295|I>>>16),I=w+(b^R^y)+T[10]+3200236656&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(w^b^R)+T[13]+681279174&4294967295,y=w+(I<<4&4294967295|I>>>28),I=R+(y^w^b)+T[0]+3936430074&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^w)+T[3]+3572445317&4294967295,b=R+(I<<16&4294967295|I>>>16),I=w+(b^R^y)+T[6]+76029189&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(w^b^R)+T[9]+3654602809&4294967295,y=w+(I<<4&4294967295|I>>>28),I=R+(y^w^b)+T[12]+3873151461&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^w)+T[15]+530742520&4294967295,b=R+(I<<16&4294967295|I>>>16),I=w+(b^R^y)+T[2]+3299628645&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(b^(w|~R))+T[0]+4096336452&4294967295,y=w+(I<<6&4294967295|I>>>26),I=R+(w^(y|~b))+T[7]+1126891415&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~w))+T[14]+2878612391&4294967295,b=R+(I<<15&4294967295|I>>>17),I=w+(R^(b|~y))+T[5]+4237533241&4294967295,w=b+(I<<21&4294967295|I>>>11),I=y+(b^(w|~R))+T[12]+1700485571&4294967295,y=w+(I<<6&4294967295|I>>>26),I=R+(w^(y|~b))+T[3]+2399980690&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~w))+T[10]+4293915773&4294967295,b=R+(I<<15&4294967295|I>>>17),I=w+(R^(b|~y))+T[1]+2240044497&4294967295,w=b+(I<<21&4294967295|I>>>11),I=y+(b^(w|~R))+T[8]+1873313359&4294967295,y=w+(I<<6&4294967295|I>>>26),I=R+(w^(y|~b))+T[15]+4264355552&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~w))+T[6]+2734768916&4294967295,b=R+(I<<15&4294967295|I>>>17),I=w+(R^(b|~y))+T[13]+1309151649&4294967295,w=b+(I<<21&4294967295|I>>>11),I=y+(b^(w|~R))+T[4]+4149444226&4294967295,y=w+(I<<6&4294967295|I>>>26),I=R+(w^(y|~b))+T[11]+3174756917&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~w))+T[2]+718787259&4294967295,b=R+(I<<15&4294967295|I>>>17),I=w+(R^(b|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var w=y-this.blockSize,T=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=w;)s(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<y;)if(T[b++]=E.charCodeAt(R++),b==this.blockSize){s(this,T),b=0;break}}else for(;R<y;)if(T[b++]=E[R++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var w=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=w&255,w/=256;for(this.u(E),E=Array(16),y=w=0;4>y;++y)for(var T=0;32>T;T+=8)E[w++]=this.g[y]>>>T&255;return E};function i(E,y){var w=c;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;for(var w=[],T=!0,b=E.length-1;0<=b;b--){var R=E[b]|0;T&&R==y||(w[b]=R,T=!1)}this.g=w}var c={};function l(E){return-128<=E&&128>E?i(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return C(u(-E));for(var y=[],w=1,T=0;E>=w;T++)y[T]=E/w|0,w*=4294967296;return new o(y,0)}function h(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return C(h(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),T=p,b=0;b<E.length;b+=8){var R=Math.min(8,E.length-b),I=parseInt(E.substring(b,b+R),y);8>R?(R=u(Math.pow(y,R)),T=T.j(R).add(u(I))):(T=T.j(w),T=T.add(u(I)))}return T}var p=l(0),_=l(1),v=l(16777216);n=o.prototype,n.m=function(){if(k(this))return-C(this).m();for(var E=0,y=1,w=0;w<this.g.length;w++){var T=this.i(w);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(k(this))return"-"+C(this).toString(E);for(var y=u(Math.pow(E,6)),w=this,T="";;){var b=Q(w,y).g;w=L(w,b.j(y));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=b,A(w))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=L(this,E),k(E)?-1:A(E)?0:1};function C(E){for(var y=E.g.length,w=[],T=0;T<y;T++)w[T]=~E.g[T];return new o(w,~E.h).add(_)}n.abs=function(){return k(this)?C(this):this},n.add=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0,b=0;b<=y;b++){var R=T+(this.i(b)&65535)+(E.i(b)&65535),I=(R>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);T=I>>>16,R&=65535,I&=65535,w[b]=I<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function L(E,y){return E.add(C(y))}n.j=function(E){if(A(this)||A(E))return p;if(k(this))return k(E)?C(this).j(C(E)):C(C(this).j(E));if(k(E))return C(this.j(C(E)));if(0>this.l(v)&&0>E.l(v))return u(this.m()*E.m());for(var y=this.g.length+E.g.length,w=[],T=0;T<2*y;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<E.g.length;b++){var R=this.i(T)>>>16,I=this.i(T)&65535,Ge=E.i(b)>>>16,Jt=E.i(b)&65535;w[2*T+2*b]+=I*Jt,F(w,2*T+2*b),w[2*T+2*b+1]+=R*Jt,F(w,2*T+2*b+1),w[2*T+2*b+1]+=I*Ge,F(w,2*T+2*b+1),w[2*T+2*b+2]+=R*Ge,F(w,2*T+2*b+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new o(w,0)};function F(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function U(E,y){this.g=E,this.h=y}function Q(E,y){if(A(y))throw Error("division by zero");if(A(E))return new U(p,p);if(k(E))return y=Q(C(E),y),new U(C(y.g),C(y.h));if(k(y))return y=Q(E,C(y)),new U(C(y.g),y.h);if(30<E.g.length){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var w=_,T=y;0>=T.l(E);)w=K(w),T=K(T);var b=G(w,1),R=G(T,1);for(T=G(T,2),w=G(w,2);!A(T);){var I=R.add(T);0>=I.l(E)&&(b=b.add(w),R=I),T=G(T,1),w=G(w,1)}return y=L(E,b.j(y)),new U(b,y)}for(b=p;0<=E.l(y);){for(w=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=u(w),I=R.j(y);k(I)||0<I.l(E);)w-=T,R=u(w),I=R.j(y);A(R)&&(R=_),b=b.add(R),E=L(E,I)}return new U(b,E)}n.A=function(E){return Q(this,E).h},n.and=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)&E.i(T);return new o(w,this.h&E.h)},n.or=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)|E.i(T);return new o(w,this.h|E.h)},n.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)^E.i(T);return new o(w,this.h^E.h)};function K(E){for(var y=E.g.length+1,w=[],T=0;T<y;T++)w[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(w,E.h)}function G(E,y){var w=y>>5;y%=32;for(var T=E.g.length-w,b=[],R=0;R<T;R++)b[R]=0<y?E.i(R+w)>>>y|E.i(R+w+1)<<32-y:E.i(R+w);return new o(b,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ar=o}).apply(typeof Xd<"u"?Xd:typeof self<"u"?self:typeof window<"u"?window:{});var go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vp,Hs,wp,Po,Bc,Ip,Ep,Tp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof go=="object"&&go];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],d=d(g),d!=g&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var D=f++;return{value:d(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(d,S)}}return function(){return a.apply(d,arguments)}}function _(a,d,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,_.apply(null,arguments)}function v(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,D){for(var M=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)M[ye-2]=arguments[ye];return d.prototype[S].apply(g,M)}}function k(a){const d=a.length;if(0<d){const f=Array(d);for(let g=0;g<d;g++)f[g]=a[g];return f}return[]}function C(a,d){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const S=a.length||0,D=g.length||0;a.length=S+D;for(let M=0;M<D;M++)a[S+M]=g[M]}else a.push(g)}}class L{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function F(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var K=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function G(a,d,f){for(const g in a)d.call(f,a[g],g,a)}function E(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function y(a){const d={};for(const f in a)d[f]=a[f];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,d){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let D=0;D<w.length;D++)f=w[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function b(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function R(a){c.setTimeout(()=>{throw a},0)}function I(){var a=yn;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ge{constructor(){this.h=this.g=null}add(d,f){const g=Jt.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Jt=new L(()=>new _n,a=>a.reset());class _n{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let It,Lt=!1,yn=new Ge,Dr=()=>{const a=c.Promise.resolve(void 0);It=()=>{a.then(bs)}};var bs=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){R(f)}var d=Jt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Lt=!1};function Et(){this.s=this.s,this.C=this.C}Et.prototype.s=!1,Et.prototype.ma=function(){this.s||(this.s=!0,this.N())},Et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Qi=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,d),c.removeEventListener("test",f,d)}catch{}return a}();function Mt(a,d){if(pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(K){e:{try{Q(d.nodeName);var S=!0;break e}catch{}S=!1}S||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Nr[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Mt.aa.h.call(this)}}A(Mt,pe);var Nr={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Yt="closure_listenable_"+(1e6*Math.random()|0),Qa=0;function ze(a,d,f,g,S){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=S,this.key=++Qa,this.da=this.fa=!1}function Wn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Tt(a){this.src=a,this.g={},this.h=0}Tt.prototype.add=function(a,d,f,g,S){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var M=Vr(a,d,g,S);return-1<M?(d=a[M],f||(d.fa=!1)):(d=new ze(d,this.src,D,!!g,S),d.fa=f,a.push(d)),d};function xr(a,d){var f=d.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,d,void 0),D;(D=0<=S)&&Array.prototype.splice.call(g,S,1),D&&(Wn(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Vr(a,d,f,g){for(var S=0;S<a.length;++S){var D=a[S];if(!D.da&&D.listener==d&&D.capture==!!f&&D.ha==g)return S}return-1}var Lr="closure_lm_"+(1e6*Math.random()|0),Mr={};function As(a,d,f,g,S){if(Array.isArray(d)){for(var D=0;D<d.length;D++)As(a,d[D],f,g,S);return null}return f=Y(f),a&&a[Yt]?a.K(d,f,u(g)?!!g.capture:!1,S):Ji(a,d,f,!1,g,S)}function Ji(a,d,f,g,S,D){if(!d)throw Error("Invalid event type");var M=u(S)?!!S.capture:!!S,ye=V(a);if(ye||(a[Lr]=ye=new Tt(a)),f=ye.add(d,f,g,M,D),f.proxy)return f;if(g=Yi(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Qi||(S=M),S===void 0&&(S=!1),a.addEventListener(d.toString(),g,S);else if(a.attachEvent)a.attachEvent(Rs(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Yi(){function a(f){return d.call(a.src,a.listener,f)}const d=Xi;return a}function Ss(a,d,f,g,S){if(Array.isArray(d))for(var D=0;D<d.length;D++)Ss(a,d[D],f,g,S);else g=u(g)?!!g.capture:!!g,f=Y(f),a&&a[Yt]?(a=a.i,d=String(d).toString(),d in a.g&&(D=a.g[d],f=Vr(D,f,g,S),-1<f&&(Wn(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[d],a.h--)))):a&&(a=V(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Vr(d,f,g,S)),(f=-1<a?d[a]:null)&&Or(f))}function Or(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Yt])xr(d.i,a);else{var f=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(f,g,a.capture):d.detachEvent?d.detachEvent(Rs(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=V(d))?(xr(f,a),f.h==0&&(f.src=null,d[Lr]=null)):Wn(a)}}}function Rs(a){return a in Mr?Mr[a]:Mr[a]="on"+a}function Xi(a,d){if(a.da)a=!0;else{d=new Mt(d,this);var f=a.listener,g=a.ha||a.src;a.fa&&Or(a),a=f.call(g,d)}return a}function V(a){return a=a[Lr],a instanceof Tt?a:null}var B="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(a){return typeof a=="function"?a:(a[B]||(a[B]=function(d){return a.handleEvent(d)}),a[B])}function j(){Et.call(this),this.i=new Tt(this),this.M=this,this.F=null}A(j,Et),j.prototype[Yt]=!0,j.prototype.removeEventListener=function(a,d,f,g){Ss(this,a,d,f,g)};function q(a,d){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new pe(d,a);else if(d instanceof pe)d.target=d.target||a;else{var S=d;d=new pe(g,a),T(d,S)}if(S=!0,f)for(var D=f.length-1;0<=D;D--){var M=d.g=f[D];S=ie(M,g,!0,d)&&S}if(M=d.g=a,S=ie(M,g,!0,d)&&S,S=ie(M,g,!1,d)&&S,f)for(D=0;D<f.length;D++)M=d.g=f[D],S=ie(M,g,!1,d)&&S}j.prototype.N=function(){if(j.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],g=0;g<f.length;g++)Wn(f[g]);delete a.g[d],a.h--}}this.F=null},j.prototype.K=function(a,d,f,g){return this.i.add(String(a),d,!1,f,g)},j.prototype.L=function(a,d,f,g){return this.i.add(String(a),d,!0,f,g)};function ie(a,d,f,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var S=!0,D=0;D<d.length;++D){var M=d[D];if(M&&!M.da&&M.capture==f){var ye=M.listener,$e=M.ha||M.src;M.fa&&xr(a.i,M),S=ye.call($e,g)!==!1&&S}}return S&&!g.defaultPrevented}function me(a,d,f){if(typeof a=="function")f&&(a=_(a,f));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function de(a){a.g=me(()=>{a.g=null,a.i&&(a.i=!1,de(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class we extends Et{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:de(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ge(a){Et.call(this),this.h=a,this.g={}}A(ge,Et);var He=[];function Me(a){G(a.g,function(d,f){this.g.hasOwnProperty(f)&&Or(d)},a),a.g={}}ge.prototype.N=function(){ge.aa.N.call(this),Me(this)},ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Se=c.JSON.stringify,Xt=c.JSON.parse,Ot=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function St(){}St.prototype.h=null;function Re(a){return a.h||(a.h=a.i())}function it(){}var bt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mt(){pe.call(this,"d")}A(mt,pe);function vn(){pe.call(this,"c")}A(vn,pe);var Ve={},We=null;function Zt(){return We=We||new j}Ve.La="serverreachability";function wn(a){pe.call(this,Ve.La,a)}A(wn,pe);function Ft(a){const d=Zt();q(d,new wn(d))}Ve.STAT_EVENT="statevent";function Zi(a,d){pe.call(this,Ve.STAT_EVENT,a),this.stat=d}A(Zi,pe);function le(a){const d=Zt();q(d,new Zi(d,a))}Ve.Ma="timingevent";function In(a,d){pe.call(this,Ve.Ma,a),this.size=d}A(In,pe);function Ps(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function Cs(){this.g=!0}Cs.prototype.xa=function(){this.g=!1};function $_(a,d,f,g,S,D){a.info(function(){if(a.g)if(D)for(var M="",ye=D.split("&"),$e=0;$e<ye.length;$e++){var ue=ye[$e].split("=");if(1<ue.length){var Qe=ue[0];ue=ue[1];var Je=Qe.split("_");M=2<=Je.length&&Je[1]=="type"?M+(Qe+"="+ue+"&"):M+(Qe+"=redacted&")}}else M=null;else M=D;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+d+`
`+f+`
`+M})}function j_(a,d,f,g,S,D,M){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+d+`
`+f+`
`+D+" "+M})}function Fr(a,d,f,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+K_(a,f)+(g?" "+g:"")})}function q_(a,d){a.info(function(){return"TIMEOUT: "+d})}Cs.prototype.info=function(){};function K_(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var D=S[0];if(D!="noop"&&D!="stop"&&D!="close")for(var M=1;M<S.length;M++)S[M]=""}}}}return Se(f)}catch{return d}}var eo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ja;function to(){}A(to,St),to.prototype.g=function(){return new XMLHttpRequest},to.prototype.i=function(){return{}},Ja=new to;function En(a,d,f,g){this.j=a,this.i=d,this.l=f,this.R=g||1,this.U=new ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bu}function Bu(){this.i=null,this.g="",this.h=!1}var Uu={},Ya={};function Xa(a,d,f){a.L=1,a.v=io(en(d)),a.m=f,a.P=!0,$u(a,null)}function $u(a,d){a.F=Date.now(),no(a),a.A=en(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),td(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Bu,a.g=vd(a.j,f?d:null,!a.m),0<a.O&&(a.M=new we(_(a.Y,a,a.g),a.O)),d=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(He[0]=S.toString()),S=He);for(var D=0;D<S.length;D++){var M=As(f,S[D],g||d.handleEvent,!1,d.h||d);if(!M)break;d.g[M.key]=M}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ft(),$_(a.i,a.u,a.A,a.l,a.R,a.m)}En.prototype.ca=function(a){a=a.target;const d=this.M;d&&tn(a)==3?d.j():this.Y(a)},En.prototype.Y=function(a){try{if(a==this.g)e:{const Je=tn(this.g);var d=this.g.Ba();const $r=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||cd(this.g)))){this.J||Je!=4||d==7||(d==8||0>=$r?Ft(3):Ft(2)),Za(this);var f=this.g.Z();this.X=f;t:if(ju(this)){var g=cd(this.g);a="";var S=g.length,D=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),ks(this);var M="";break t}this.h.i=new c.TextDecoder}for(d=0;d<S;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(D&&d==S-1)});g.length=0,this.h.g+=a,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=f==200,j_(this.i,this.u,this.A,this.l,this.R,Je,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,$e=this.g;if((ye=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ye)){var ue=ye;break t}}ue=null}if(f=ue)Fr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ec(this,f);else{this.o=!1,this.s=3,le(12),Qn(this),ks(this);break e}}if(this.P){f=!0;let Rt;for(;!this.J&&this.C<M.length;)if(Rt=G_(this,M),Rt==Ya){Je==4&&(this.s=4,le(14),f=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==Uu){this.s=4,le(15),Fr(this.i,this.l,M,"[Invalid Chunk]"),f=!1;break}else Fr(this.i,this.l,Rt,null),ec(this,Rt);if(ju(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||M.length!=0||this.h.h||(this.s=1,le(16),f=!1),this.o=this.o&&f,!f)Fr(this.i,this.l,M,"[Invalid Chunked Response]"),Qn(this),ks(this);else if(0<M.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),oc(Qe),Qe.M=!0,le(11))}}else Fr(this.i,this.l,M,null),ec(this,M);Je==4&&Qn(this),this.o&&!this.J&&(Je==4?md(this.j,this):(this.o=!1,no(this)))}else cy(this.g),f==400&&0<M.indexOf("Unknown SID")?(this.s=3,le(12)):(this.s=0,le(13)),Qn(this),ks(this)}}}catch{}finally{}};function ju(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function G_(a,d){var f=a.C,g=d.indexOf(`
`,f);return g==-1?Ya:(f=Number(d.substring(f,g)),isNaN(f)?Uu:(g+=1,g+f>d.length?Ya:(d=d.slice(g,g+f),a.C=g+f,d)))}En.prototype.cancel=function(){this.J=!0,Qn(this)};function no(a){a.S=Date.now()+a.I,qu(a,a.I)}function qu(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ps(_(a.ba,a),d)}function Za(a){a.B&&(c.clearTimeout(a.B),a.B=null)}En.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(q_(this.i,this.A),this.L!=2&&(Ft(),le(17)),Qn(this),this.s=2,ks(this)):qu(this,this.S-a)};function ks(a){a.j.G==0||a.J||md(a.j,a)}function Qn(a){Za(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Me(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function ec(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||tc(f.h,a))){if(!a.K&&tc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ho(f),lo(f);else break e;ic(f),le(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ps(_(f.Za,f),6e3));if(1>=zu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Yn(f,11)}else if((a.K||f.g==a)&&ho(f),!F(d))for(S=f.Da.g.parse(d),d=0;d<S.length;d++){let ue=S[d];if(f.T=ue[0],ue=ue[1],f.G==2)if(ue[0]=="c"){f.K=ue[1],f.ia=ue[2];const Qe=ue[3];Qe!=null&&(f.la=Qe,f.j.info("VER="+f.la));const Je=ue[4];Je!=null&&(f.Aa=Je,f.j.info("SVER="+f.Aa));const $r=ue[5];$r!=null&&typeof $r=="number"&&0<$r&&(g=1.5*$r,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Rt=a.g;if(Rt){const po=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(po){var D=g.h;D.g||po.indexOf("spdy")==-1&&po.indexOf("quic")==-1&&po.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(nc(D,D.h),D.h=null))}if(g.D){const ac=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;ac&&(g.ya=ac,Ie(g.I,g.D,ac))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var M=a;if(g.qa=yd(g,g.J?g.ia:null,g.W),M.K){Hu(g.h,M);var ye=M,$e=g.L;$e&&(ye.I=$e),ye.B&&(Za(ye),no(ye)),g.g=M}else fd(g);0<f.i.length&&uo(f)}else ue[0]!="stop"&&ue[0]!="close"||Yn(f,7);else f.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Yn(f,7):sc(f):ue[0]!="noop"&&f.l&&f.l.ta(ue),f.v=0)}}Ft(4)}catch{}}var z_=class{constructor(a,d){this.g=a,this.map=d}};function Ku(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zu(a){return a.h?1:a.g?a.g.size:0}function tc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function nc(a,d){a.g?a.g.add(d):a.h=d}function Hu(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Ku.prototype.cancel=function(){if(this.i=Wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Wu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return k(a.i)}function H_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],f=a.length,g=0;g<f;g++)d.push(a[g]);return d}d=[],f=0;for(g in a)d[f++]=a[g];return d}function W_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const g in a)d[f++]=g;return d}}}function Qu(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=W_(a),g=H_(a),S=g.length,D=0;D<S;D++)d.call(void 0,g[D],f&&f[D],a)}var Ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Q_(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var D=a[f].substring(0,g);S=a[f].substring(g+1)}else D=a[f];d(D,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Jn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Jn){this.h=a.h,ro(this,a.j),this.o=a.o,this.g=a.g,so(this,a.s),this.l=a.l;var d=a.i,f=new xs;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Yu(this,f),this.m=a.m}else a&&(d=String(a).match(Ju))?(this.h=!1,ro(this,d[1]||"",!0),this.o=Ds(d[2]||""),this.g=Ds(d[3]||"",!0),so(this,d[4]),this.l=Ds(d[5]||"",!0),Yu(this,d[6]||"",!0),this.m=Ds(d[7]||"")):(this.h=!1,this.i=new xs(null,this.h))}Jn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Ns(d,Xu,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Ns(d,Xu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ns(f,f.charAt(0)=="/"?X_:Y_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ns(f,ey)),a.join("")};function en(a){return new Jn(a)}function ro(a,d,f){a.j=f?Ds(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function so(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Yu(a,d,f){d instanceof xs?(a.i=d,ty(a.i,a.h)):(f||(d=Ns(d,Z_)),a.i=new xs(d,a.h))}function Ie(a,d,f){a.i.set(d,f)}function io(a){return Ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ds(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,J_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function J_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xu=/[#\/\?@]/g,Y_=/[#\?:]/g,X_=/[#\?]/g,Z_=/[#\?@]/g,ey=/#/g;function xs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Tn(a){a.g||(a.g=new Map,a.h=0,a.i&&Q_(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=xs.prototype,n.add=function(a,d){Tn(this),this.i=null,a=Br(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Zu(a,d){Tn(a),d=Br(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function ed(a,d){return Tn(a),d=Br(a,d),a.g.has(d)}n.forEach=function(a,d){Tn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(d,S,g,this)},this)},this)},n.na=function(){Tn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){const S=a[g];for(let D=0;D<S.length;D++)f.push(d[g])}return f},n.V=function(a){Tn(this);let d=[];if(typeof a=="string")ed(this,a)&&(d=d.concat(this.g.get(Br(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},n.set=function(a,d){return Tn(this),this.i=null,a=Br(this,a),ed(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function td(a,d,f){Zu(a,d),0<f.length&&(a.i=null,a.g.set(Br(a,d),k(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];const D=encodeURIComponent(String(g)),M=this.V(g);for(g=0;g<M.length;g++){var S=D;M[g]!==""&&(S+="="+encodeURIComponent(String(M[g]))),a.push(S)}}return this.i=a.join("&")};function Br(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function ty(a,d){d&&!a.j&&(Tn(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(Zu(this,g),td(this,S,f))},a)),a.j=d}function ny(a,d){const f=new Cs;if(c.Image){const g=new Image;g.onload=v(bn,f,"TestLoadImage: loaded",!0,d,g),g.onerror=v(bn,f,"TestLoadImage: error",!1,d,g),g.onabort=v(bn,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=v(bn,f,"TestLoadImage: timeout",!1,d,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function ry(a,d){const f=new Cs,g=new AbortController,S=setTimeout(()=>{g.abort(),bn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(S),D.ok?bn(f,"TestPingServer: ok",!0,d):bn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(S),bn(f,"TestPingServer: error",!1,d)})}function bn(a,d,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function sy(){this.g=new Ot}function iy(a,d,f){const g=f||"";try{Qu(a,function(S,D){let M=S;u(S)&&(M=Se(S)),d.push(g+D+"="+encodeURIComponent(M))})}catch(S){throw d.push(g+"type="+encodeURIComponent("_badmap")),S}}function oo(a){this.l=a.Ub||null,this.j=a.eb||!1}A(oo,St),oo.prototype.g=function(){return new ao(this.l,this.j)},oo.prototype.i=function(a){return function(){return a}}({});function ao(a,d){j.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ao,j),n=ao.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ls(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function nd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Vs(this):Ls(this),this.readyState==3&&nd(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Vs(this))},n.Qa=function(a){this.g&&(this.response=a,Vs(this))},n.ga=function(){this.g&&Vs(this)};function Vs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ls(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rd(a){let d="";return G(a,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function rc(a,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=rd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ie(a,d,f))}function Pe(a){j.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Pe,j);var oy=/^https?$/i,ay=["POST","PUT"];n=Pe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ja.g(),this.v=this.o?Re(this.o):Re(Ja),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(D){sd(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ay,d,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,M]of f)this.g.setRequestHeader(D,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ad(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){sd(this,D)}};function sd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,id(a),co(a)}function id(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,q(this,"complete"),q(this,"abort"),co(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),co(this,!0)),Pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?od(this):this.bb())},n.bb=function(){od(this)};function od(a){if(a.h&&typeof o<"u"&&(!a.v[1]||tn(a)!=4||a.Z()!=2)){if(a.u&&tn(a)==4)me(a.Ea,0,a);else if(q(a,"readystatechange"),tn(a)==4){a.h=!1;try{const M=a.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=M===0){var S=String(a.D).match(Ju)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!oy.test(S?S.toLowerCase():"")}f=g}if(f)q(a,"complete"),q(a,"success");else{a.m=6;try{var D=2<tn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",id(a)}}finally{co(a)}}}}function co(a,d){if(a.g){ad(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||q(a,"ready");try{f.onreadystatechange=g}catch{}}}function ad(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function tn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Xt(d)}};function cd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cy(a){const d={};a=(a.g&&2<=tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var f=b(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=d[S]||[];d[S]=D,D.push(f)}E(d,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function ld(a){this.Aa=0,this.i=[],this.j=new Cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,a),this.cb=Ms("retryDelaySeedMs",1e4,a),this.Wa=Ms("forwardChannelMaxRetries",2,a),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ku(a&&a.concurrentRequestLimit),this.Da=new sy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ld.prototype,n.la=8,n.G=1,n.connect=function(a,d,f,g){le(0),this.W=a,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=yd(this,null,this.W),uo(this)};function sc(a){if(ud(a),a.G==3){var d=a.U++,f=en(a.I);if(Ie(f,"SID",a.K),Ie(f,"RID",d),Ie(f,"TYPE","terminate"),Os(a,f),d=new En(a,a.j,d),d.L=2,d.v=io(en(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=d.v,f=!0),f||(d.g=vd(d.j,null),d.g.ea(d.v)),d.F=Date.now(),no(d)}_d(a)}function lo(a){a.g&&(oc(a),a.g.cancel(),a.g=null)}function ud(a){lo(a),a.u&&(c.clearTimeout(a.u),a.u=null),ho(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function uo(a){if(!Gu(a.h)&&!a.s){a.s=!0;var d=a.Ga;It||Dr(),Lt||(It(),Lt=!0),yn.add(d,a),a.B=0}}function ly(a,d){return zu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ps(_(a.Ga,a,d),gd(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new En(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(S.H=D,D=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=hd(this,S,d),f=en(this.I),Ie(f,"RID",a),Ie(f,"CVER",22),this.D&&Ie(f,"X-HTTP-Session-Id",this.D),Os(this,f),D&&(this.O?d="headers="+encodeURIComponent(String(rd(D)))+"&"+d:this.m&&rc(f,this.m,D)),nc(this.h,S),this.Ua&&Ie(f,"TYPE","init"),this.P?(Ie(f,"$req",d),Ie(f,"SID","null"),S.T=!0,Xa(S,f,null)):Xa(S,f,d),this.G=2}}else this.G==3&&(a?dd(this,a):this.i.length==0||Gu(this.h)||dd(this))};function dd(a,d){var f;d?f=d.l:f=a.U++;const g=en(a.I);Ie(g,"SID",a.K),Ie(g,"RID",f),Ie(g,"AID",a.T),Os(a,g),a.m&&a.o&&rc(g,a.m,a.o),f=new En(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=hd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),nc(a.h,f),Xa(f,g,d)}function Os(a,d){a.H&&G(a.H,function(f,g){Ie(d,g,f)}),a.l&&Qu({},function(f,g){Ie(d,g,f)})}function hd(a,d,f){f=Math.min(a.i.length,f);var g=a.l?_(a.l.Na,a.l,a):null;e:{var S=a.i;let D=-1;for(;;){const M=["count="+f];D==-1?0<f?(D=S[0].g,M.push("ofs="+D)):D=0:M.push("ofs="+D);let ye=!0;for(let $e=0;$e<f;$e++){let ue=S[$e].g;const Qe=S[$e].map;if(ue-=D,0>ue)D=Math.max(0,S[$e].g-100),ye=!1;else try{iy(Qe,M,"req"+ue+"_")}catch{g&&g(Qe)}}if(ye){g=M.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,g}function fd(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;It||Dr(),Lt||(It(),Lt=!0),yn.add(d,a),a.v=0}}function ic(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ps(_(a.Fa,a),gd(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,pd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ps(_(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,le(10),lo(this),pd(this))};function oc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function pd(a){a.g=new En(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=en(a.qa);Ie(d,"RID","rpc"),Ie(d,"SID",a.K),Ie(d,"AID",a.T),Ie(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ie(d,"TO",a.ja),Ie(d,"TYPE","xmlhttp"),Os(a,d),a.m&&a.o&&rc(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=io(en(d)),f.m=null,f.P=!0,$u(f,a)}n.Za=function(){this.C!=null&&(this.C=null,lo(this),ic(this),le(19))};function ho(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function md(a,d){var f=null;if(a.g==d){ho(a),oc(a),a.g=null;var g=2}else if(tc(a.h,d))f=d.D,Hu(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var S=a.B;g=Zt(),q(g,new In(g,f)),uo(a)}else fd(a);else if(S=d.s,S==3||S==0&&0<d.X||!(g==1&&ly(a,d)||g==2&&ic(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),S){case 1:Yn(a,5);break;case 4:Yn(a,10);break;case 3:Yn(a,6);break;default:Yn(a,2)}}}function gd(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function Yn(a,d){if(a.j.info("Error code "+d),d==2){var f=_(a.fb,a),g=a.Xa;const S=!g;g=new Jn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ro(g,"https"),io(g),S?ny(g.toString(),f):ry(g.toString(),f)}else le(2);a.G=0,a.l&&a.l.sa(d),_d(a),ud(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),le(2)):(this.j.info("Failed to ping google.com"),le(1))};function _d(a){if(a.G=0,a.ka=[],a.l){const d=Wu(a.h);(d.length!=0||a.i.length!=0)&&(C(a.ka,d),C(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function yd(a,d,f){var g=f instanceof Jn?en(f):new Jn(f);if(g.g!="")d&&(g.g=d+"."+g.g),so(g,g.s);else{var S=c.location;g=S.protocol,d=d?d+"."+S.hostname:S.hostname,S=+S.port;var D=new Jn(null);g&&ro(D,g),d&&(D.g=d),S&&so(D,S),f&&(D.l=f),g=D}return f=a.D,d=a.ya,f&&d&&Ie(g,f,d),Ie(g,"VER",a.la),Os(a,g),g}function vd(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Pe(new oo({eb:f})):new Pe(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wd(){}n=wd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fo(){}fo.prototype.g=function(a,d){return new gt(a,d)};function gt(a,d){j.call(this),this.g=new ld(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!F(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!F(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ur(this)}A(gt,j),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){sc(this.g)},gt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Se(a),a=f);d.i.push(new z_(d.Ya++,a)),d.G==3&&uo(d)},gt.prototype.N=function(){this.g.l=null,delete this.j,sc(this.g),delete this.g,gt.aa.N.call(this)};function Id(a){mt.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}A(Id,mt);function Ed(){vn.call(this),this.status=1}A(Ed,vn);function Ur(a){this.g=a}A(Ur,wd),Ur.prototype.ua=function(){q(this.g,"a")},Ur.prototype.ta=function(a){q(this.g,new Id(a))},Ur.prototype.sa=function(a){q(this.g,new Ed)},Ur.prototype.ra=function(){q(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Tp=function(){return new fo},Ep=function(){return Zt()},Ip=Ve,Bc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eo.NO_ERROR=0,eo.TIMEOUT=8,eo.HTTP_ERROR=6,Po=eo,Fu.COMPLETE="complete",wp=Fu,it.EventType=bt,bt.OPEN="a",bt.CLOSE="b",bt.ERROR="c",bt.MESSAGE="d",j.prototype.listen=j.prototype.K,Hs=it,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,vp=Pe}).apply(typeof go<"u"?go:typeof self<"u"?self:typeof window<"u"?window:{});const Zd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new pl("@firebase/firestore");function zr(){return fr.logLevel}function x(n,...e){if(fr.logLevel<=oe.DEBUG){const t=e.map(Sl);fr.debug(`Firestore (${gs}): ${n}`,...t)}}function Ne(n,...e){if(fr.logLevel<=oe.ERROR){const t=e.map(Sl);fr.error(`Firestore (${gs}): ${n}`,...t)}}function mi(n,...e){if(fr.logLevel<=oe.WARN){const t=e.map(Sl);fr.warn(`Firestore (${gs}): ${n}`,...t)}}function Sl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(n="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+n;throw Ne(e),new Error(e)}function J(n,e){n||H()}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xe.UNAUTHENTICATED))}shutdown(){}}class oE{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new sE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Xe(e)}}class aE{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cE{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new aE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){J(this.o===void 0);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new lE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=dE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function ns(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Ap(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ae(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ae(0,0))}static max(){return new Z(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(),r===void 0?r=e.length-t:r>e.length-t&&H(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return gi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class he extends gi{construct(e,t,r){return new he(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new he(t)}static emptyPath(){return new he([])}}const hE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends gi{construct(e,t,r){return new be(e,t,r)}static isValidIdentifier(e){return hE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new O(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(t)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qo{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Uc(n){return n.fields.find(e=>e.kind===2)}function er(n){return n.fields.filter(e=>e.kind!==2)}Qo.UNKNOWN_ID=-1;class Co{constructor(e,t){this.fieldPath=e,this.kind=t}}class _i{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new _i(0,wt.min())}}function Sp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Ae(t+1,0):new Ae(t,r));return new wt(s,$.empty(),e)}function Rp(n){return new wt(n.readTime,n.key,-1)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(Z.min(),$.empty(),-1)}static max(){return new wt(Z.max(),$.empty(),-1)}}function Rl(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Pp)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new zt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ni(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Pl(r.target.error);this.V.reject(new ni(e,s))}}static open(e,t,r,s){try{return new ya(t,e.transaction(s,r))}catch(i){throw new ni(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new pE(t)}}class Mn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Mn.S(Fe())===12.2&&Ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),tr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!fl())return!1;if(Mn.v())return!0;const e=Fe(),t=Mn.S(e),r=0<t&&t<10,s=kp(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new ni(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new O(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ni(e,o))},s.onupgradeneeded=i=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=ya.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next(u=>(c.g(),u)).catch(u=>(c.abort(u),P.reject(u))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,u=l.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function kp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class fE{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return tr(this.B.delete())}}class ni extends O{constructor(e,t){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Kn(n){return n.name==="IndexedDbTransactionError"}class pE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(x("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),tr(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),tr(this.store.add(e))}get(e){return tr(this.store.get(e)).next(t=>(t===void 0&&(t=null),x("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),tr(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),tr(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new P((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new P((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new P((r,s)=>{t.onerror=i=>{const o=Pl(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new fE(c),u=t(c.primaryKey,c.value,l);if(u instanceof P){const h=u.catch(p=>(l.done(),P.reject(p)));r.push(h)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>P.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function tr(n){return new P((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Pl(r.target.error);t(s)}})}let eh=!1;function Pl(n){const e=Mn.S(Fe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eh||(eh=!0,setTimeout(()=>{throw r},0)),r}}return n}class mE{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){x("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Kn(t)?x("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await qn(t)}await this.X(6e4)})}}class gE{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return P.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(x("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=Rp(i);Rl(o,r)>0&&(r=o)}),new wt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class dt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}dt.oe=-1;function va(n){return n==null}function yi(n){return n===0&&1/n==-1/0}function Dp(n){return typeof n=="number"&&Number.isInteger(n)&&!yi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=th(e)),e=_E(n.get(t),e);return th(e)}function _E(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function th(n){return n+""}function jt(n){const e=n.length;if(J(e>=2),e===2)return J(n.charAt(0)===""&&n.charAt(1)===""),he.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&H(),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:H()}i=o+2}return new he(r)}/**
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
 */const nh=["userId","batchId"];/**
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
 */function ko(n,e){return[n,at(e)]}function Np(n,e,t){return[n,at(e),t]}const yE={},vE=["prefixPath","collectionGroup","readTime","documentId"],wE=["prefixPath","collectionGroup","documentId"],IE=["collectionGroup","readTime","prefixPath","documentId"],EE=["canonicalId","targetId"],TE=["targetId","path"],bE=["path","targetId"],AE=["collectionId","parent"],SE=["indexId","uid"],RE=["uid","sequenceNumber"],PE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],CE=["indexId","uid","orderedDocumentKey"],kE=["userId","collectionPath","documentId"],DE=["userId","collectionPath","largestBatchId"],NE=["userId","collectionGroup","largestBatchId"],xp=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xE=[...xp,"documentOverlays"],Vp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Lp=Vp,Cl=[...Lp,"indexConfiguration","indexState","indexEntries"],VE=Cl,LE=[...Cl,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends Cp{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Be(n,e){const t=W(n);return Mn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Mp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _o(this.root,e,this.comparator,!1)}getReverseIterator(){return new _o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _o(this.root,e,this.comparator,!0)}}class _o{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,t,r,s,i){return this}insert(e,t,r){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sh(this.data.getIterator())}getIteratorFrom(e){return new sh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class sh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function jr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new ht([])}unionWith(e){let t=new _e(be.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Op extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Op("Invalid base64 string: "+i):i}}(e);return new xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const ME=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(n){if(J(!!n),typeof n=="string"){let e=0;const t=ME.exec(n);if(J(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(n.seconds),nanos:Te(n.nanos)}}function Te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bn(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Dl(n){const e=n.mapValue.fields.__previous_value__;return kl(e)?Dl(e):e}function vi(n){const e=fn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t,r,s,i,o,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class pr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new pr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Do={nullValue:"NULL_VALUE"};function mr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?kl(n)?4:Fp(n)?9007199254740991:wa(n)?10:11:H()}function Ht(n,e){if(n===e)return!0;const t=mr(n);if(t!==mr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return vi(n).isEqual(vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fn(s.timestampValue),c=fn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Bn(s.bytesValue).isEqual(Bn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Te(s.geoPointValue.latitude)===Te(i.geoPointValue.latitude)&&Te(s.geoPointValue.longitude)===Te(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Te(s.integerValue)===Te(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Te(s.doubleValue),c=Te(i.doubleValue);return o===c?yi(o)===yi(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return ns(n.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(rh(o)!==rh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Ht(o[l],c[l])))return!1;return!0}(n,e);default:return H()}}function wi(n,e){return(n.values||[]).find(t=>Ht(t,e))!==void 0}function Un(n,e){if(n===e)return 0;const t=mr(n),r=mr(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Te(i.integerValue||i.doubleValue),l=Te(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return ih(n.timestampValue,e.timestampValue);case 4:return ih(vi(n),vi(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(i,o){const c=Bn(i),l=Bn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=ne(c[u],l[u]);if(h!==0)return h}return ne(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ne(Te(i.latitude),Te(o.latitude));return c!==0?c:ne(Te(i.longitude),Te(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return oh(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,h;const p=i.fields||{},_=o.fields||{},v=(c=p.value)===null||c===void 0?void 0:c.arrayValue,A=(l=_.value)===null||l===void 0?void 0:l.arrayValue,k=ne(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:oh(v,A)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Vn.mapValue&&o===Vn.mapValue)return 0;if(i===Vn.mapValue)return 1;if(o===Vn.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const _=ne(l[p],h[p]);if(_!==0)return _;const v=Un(c[l[p]],u[h[p]]);if(v!==0)return v}return ne(l.length,h.length)}(n.mapValue,e.mapValue);default:throw H()}}function ih(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=fn(n),r=fn(e),s=ne(t.seconds,r.seconds);return s!==0?s:ne(t.nanos,r.nanos)}function oh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Un(t[s],r[s]);if(i)return i}return ne(t.length,r.length)}function rs(n){return jc(n)}function jc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=fn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Bn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=jc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${jc(t.fields[o])}`;return s+"}"}(n.mapValue):H()}function Ii(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qc(n){return!!n&&"integerValue"in n}function Ei(n){return!!n&&"arrayValue"in n}function ah(n){return!!n&&"nullValue"in n}function ch(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function No(n){return!!n&&"mapValue"in n}function wa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ri(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Rr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ri(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ri(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Fp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Bp={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function FE(n){return"nullValue"in n?Do:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ii(pr.empty(),$.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?wa(n)?Bp:{mapValue:{}}:H()}function BE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ii(pr.empty(),$.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Bp:"mapValue"in n?wa(n)?{mapValue:{}}:Vn:H()}function lh(n,e){const t=Un(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function uh(n,e){const t=Un(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!No(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ri(t)}setAll(e){let t=be.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=ri(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());No(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];No(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Rr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ze(ri(this.value))}}function Up(n){const e=[];return Rr(n.fields,(t,r)=>{const s=new be([t]);if(No(r)){const i=Up(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,Z.min(),Z.min(),Z.min(),Ze.empty(),0)}static newFoundDocument(e,t,r,s){return new Ce(e,1,t,Z.min(),r,s,0)}static newNoDocument(e,t){return new Ce(e,2,t,Z.min(),Z.min(),Ze.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,Z.min(),Z.min(),Ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ss{constructor(e,t){this.position=e,this.inclusive=t}}function dh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),t.key):r=Un(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ht(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Jo{constructor(e,t="asc"){this.field=e,this.dir=t}}function UE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $p{}class ae extends $p{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $E(e,t,r):t==="array-contains"?new KE(e,r):t==="in"?new Hp(e,r):t==="not-in"?new GE(e,r):t==="array-contains-any"?new zE(e,r):new ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new jE(e,r):new qE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Un(t,this.value)):t!==null&&mr(this.value)===mr(t)&&this.matchesComparison(Un(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fe extends $p{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new fe(e,t)}matches(e){return is(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function is(n){return n.op==="and"}function Kc(n){return n.op==="or"}function Nl(n){return jp(n)&&is(n)}function jp(n){for(const e of n.filters)if(e instanceof fe)return!1;return!0}function Gc(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+rs(n.value);if(Nl(n))return n.filters.map(e=>Gc(e)).join(",");{const e=n.filters.map(t=>Gc(t)).join(",");return`${n.op}(${e})`}}function qp(n,e){return n instanceof ae?function(r,s){return s instanceof ae&&r.op===s.op&&r.field.isEqual(s.field)&&Ht(r.value,s.value)}(n,e):n instanceof fe?function(r,s){return s instanceof fe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&qp(o,s.filters[c]),!0):!1}(n,e):void H()}function Kp(n,e){const t=n.filters.concat(e);return fe.create(t,n.op)}function Gp(n){return n instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${rs(t.value)}`}(n):n instanceof fe?function(t){return t.op.toString()+" {"+t.getFilters().map(Gp).join(" ,")+"}"}(n):"Filter"}class $E extends ae{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class jE extends ae{constructor(e,t){super(e,"in",t),this.keys=zp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class qE extends ae{constructor(e,t){super(e,"not-in",t),this.keys=zp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class KE extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ei(t)&&wi(t.arrayValue,this.value)}}class Hp extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wi(this.value.arrayValue,t)}}class GE extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!wi(this.value.arrayValue,t)}}class zE extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ei(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>wi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function zc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new HE(n,e,t,r,s,i,o)}function gr(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Gc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),va(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>rs(r)).join(",")),e.ue=t}return e.ue}function Oi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!UE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!hh(n.startAt,e.startAt)&&hh(n.endAt,e.endAt)}function Yo(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Xo(n,e){return n.filters.filter(t=>t instanceof ae&&t.field.isEqual(e))}function fh(n,e,t){let r=Do,s=!0;for(const i of Xo(n,e)){let o=Do,c=!0;switch(i.op){case"<":case"<=":o=FE(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Do}lh({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];lh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function ph(n,e,t){let r=Vn,s=!0;for(const i of Xo(n,e)){let o=Vn,c=!0;switch(i.op){case">=":case">":o=BE(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Vn}uh({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];uh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wp(n,e,t,r,s,i,o,c){return new _s(n,e,t,r,s,i,o,c)}function Ia(n){return new _s(n)}function mh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qp(n){return n.collectionGroup!==null}function si(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new _e(be.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Jo(i,r))}),t.has(be.keyField().canonicalString())||e.ce.push(new Jo(be.keyField(),r))}return e.ce}function vt(n){const e=W(n);return e.le||(e.le=WE(e,si(n))),e.le}function WE(n,e){if(n.limitType==="F")return zc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Jo(s.field,i)});const t=n.endAt?new ss(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ss(n.startAt.position,n.startAt.inclusive):null;return zc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Hc(n,e){const t=n.filters.concat([e]);return new _s(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Wc(n,e,t){return new _s(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ea(n,e){return Oi(vt(n),vt(e))&&n.limitType===e.limitType}function Jp(n){return`${gr(vt(n))}|lt:${n.limitType}`}function Hr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gp(s)).join(", ")}]`),va(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>rs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>rs(s)).join(",")),`Target(${r})`}(vt(n))}; limitType=${n.limitType})`}function Fi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of si(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=dh(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,si(r),s)||r.endAt&&!function(o,c,l){const u=dh(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,si(r),s))}(n,e)}function Yp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xp(n){return(e,t)=>{let r=!1;for(const s of si(n)){const i=QE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QE(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Un(l,u):H()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Mp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=new ve($.comparator);function _t(){return JE}const Zp=new ve($.comparator);function Ws(...n){let e=Zp;for(const t of n)e=e.insert(t.key,t);return e}function em(n){let e=Zp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function qt(){return ii()}function tm(){return ii()}function ii(){return new Gn(n=>n.toString(),(n,e)=>n.isEqual(e))}const YE=new ve($.comparator),XE=new _e($.comparator);function re(...n){let e=XE;for(const t of n)e=e.add(t);return e}const ZE=new _e(ne);function xl(){return ZE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yi(e)?"-0":e}}function nm(n){return{integerValue:""+n}}function eT(n,e){return Dp(e)?nm(e):Vl(n,e)}/**
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
 */class Ta{constructor(){this._=void 0}}function tT(n,e,t){return n instanceof os?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kl(i)&&(i=Dl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof as?sm(n,e):n instanceof cs?im(n,e):function(s,i){const o=rm(s,i),c=gh(o)+gh(s.Pe);return qc(o)&&qc(s.Pe)?nm(c):Vl(s.serializer,c)}(n,e)}function nT(n,e,t){return n instanceof as?sm(n,e):n instanceof cs?im(n,e):t}function rm(n,e){return n instanceof Ti?function(r){return qc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class os extends Ta{}class as extends Ta{constructor(e){super(),this.elements=e}}function sm(n,e){const t=om(e);for(const r of n.elements)t.some(s=>Ht(s,r))||t.push(r);return{arrayValue:{values:t}}}class cs extends Ta{constructor(e){super(),this.elements=e}}function im(n,e){let t=om(e);for(const r of n.elements)t=t.filter(s=>!Ht(s,r));return{arrayValue:{values:t}}}class Ti extends Ta{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function gh(n){return Te(n.integerValue||n.doubleValue)}function om(n){return Ei(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t){this.field=e,this.transform=t}}function rT(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof as&&s instanceof as||r instanceof cs&&s instanceof cs?ns(r.elements,s.elements,Ht):r instanceof Ti&&s instanceof Ti?Ht(r.Pe,s.Pe):r instanceof os&&s instanceof os}(n.transform,e.transform)}class sT{constructor(e,t){this.version=e,this.transformResults=t}}class et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ba{}function cm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Aa(n.key,et.none()):new ys(n.key,n.data,et.none());{const t=n.data,r=Ze.empty();let s=new _e(be.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gn(n.key,r,new ht(s.toArray()),et.none())}}function iT(n,e,t){n instanceof ys?function(s,i,o){const c=s.value.clone(),l=yh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof gn?function(s,i,o){if(!xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=yh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(lm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function oi(n,e,t,r){return n instanceof ys?function(i,o,c,l){if(!xo(i.precondition,o))return c;const u=i.value.clone(),h=vh(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof gn?function(i,o,c,l){if(!xo(i.precondition,o))return c;const u=vh(i.fieldTransforms,l,o),h=o.data;return h.setAll(lm(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function oT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=rm(r.transform,s||null);i!=null&&(t===null&&(t=Ze.empty()),t.set(r.field,i))}return t||null}function _h(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,(i,o)=>rT(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ys extends ba{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gn extends ba{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function yh(n,e,t){const r=new Map;J(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,nT(o,c,t[s]))}return r}function vh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,tT(i,o,e))}return r}class Aa extends ba{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class um extends ba{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=oi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=oi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=tm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=cm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),re())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(t,r)=>_h(t,r))&&ns(this.baseMutations,e.baseMutations,(t,r)=>_h(t,r))}}class Ml{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length);let s=function(){return YE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ml(e,t,r,s)}}/**
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
 */class Ol{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,ce;function cT(n){switch(n){default:return H();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function dm(n){if(n===void 0)return Ne("GRPC error has no .code"),N.UNKNOWN;switch(n){case Le.OK:return N.OK;case Le.CANCELLED:return N.CANCELLED;case Le.UNKNOWN:return N.UNKNOWN;case Le.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Le.INTERNAL:return N.INTERNAL;case Le.UNAVAILABLE:return N.UNAVAILABLE;case Le.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Le.NOT_FOUND:return N.NOT_FOUND;case Le.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Le.ABORTED:return N.ABORTED;case Le.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Le.DATA_LOSS:return N.DATA_LOSS;default:return H()}}(ce=Le||(Le={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function lT(){return new TextEncoder}/**
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
 */const uT=new ar([4294967295,4294967295],0);function wh(n){const e=lT().encode(n),t=new yp;return t.update(e),new Uint8Array(t.digest())}function Ih(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ar([t,r],0),new ar([s,i],0)]}class Fl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Qs(`Invalid padding: ${t}`);if(r<0)throw new Qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ar.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(ar.fromNumber(r)));return s.compare(uT)===1&&(s=new ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=wh(e),[r,s]=Ih(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fl(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=wh(e),[r,s]=Ih(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ui.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Bi(Z.min(),s,new ve(ne),_t(),re())}}class Ui{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ui(r,t,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class hm{constructor(e,t){this.targetId=e,this.me=t}}class fm{constructor(e,t,r=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Eh{constructor(){this.fe=0,this.ge=bh(),this.pe=xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),t=re(),r=re();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:H()}}),new Ui(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=bh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dT{constructor(e){this.Le=e,this.Be=new Map,this.ke=_t(),this.qe=Th(),this.Qe=new ve(ne)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Yo(i))if(r===0){const o=new $(i.path);this.Ue(t,o,Ce.newNoDocument(o,Z.min()))}else J(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Bn(r).toUint8Array()}catch(l){if(l instanceof Op)return mi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Fl(o,s,i)}catch(l){return mi(l instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Yo(c.target)){const l=new $(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ce.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=re();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Bi(e,t,this.Qe,this.ke,r);return this.ke=_t(),this.qe=Th(),this.Qe=new ve(ne),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Eh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new _e(ne),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Eh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Th(){return new ve($.comparator)}function bh(){return new ve($.comparator)}const hT={asc:"ASCENDING",desc:"DESCENDING"},fT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pT={and:"AND",or:"OR"};class mT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qc(n,e){return n.useProto3Json||va(e)?e:{value:e}}function ls(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gT(n,e){return ls(n,e.toTimestamp())}function ct(n){return J(!!n),Z.fromTimestamp(function(t){const r=fn(t);return new Ae(r.seconds,r.nanos)}(n))}function Bl(n,e){return Jc(n,e).canonicalString()}function Jc(n,e){const t=function(s){return new he(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mm(n){const e=he.fromString(n);return J(bm(e)),e}function Zo(n,e){return Bl(n.databaseId,e.path)}function cr(n,e){const t=mm(e);if(t.get(1)!==n.databaseId.projectId)throw new O(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(ym(t))}function gm(n,e){return Bl(n.databaseId,e)}function _m(n){const e=mm(n);return e.length===4?he.emptyPath():ym(e)}function Yc(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ym(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ah(n,e,t){return{name:Zo(n,e),fields:t.value.mapValue.fields}}function _T(n,e,t){const r=cr(n,e.name),s=ct(e.updateTime),i=e.createTime?ct(e.createTime):Z.min(),o=new Ze({mapValue:{fields:e.fields}}),c=Ce.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function yT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(J(h===void 0||typeof h=="string"),xe.fromBase64String(h||"")):(J(h===void 0||h instanceof Buffer||h instanceof Uint8Array),xe.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?N.UNKNOWN:dm(u.code);return new O(h,u.message||"")}(o);t=new fm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cr(n,r.document.name),i=ct(r.document.updateTime),o=r.document.createTime?ct(r.document.createTime):Z.min(),c=new Ze({mapValue:{fields:r.document.fields}}),l=Ce.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];t=new Vo(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cr(n,r.document),i=r.readTime?ct(r.readTime):Z.min(),o=Ce.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Vo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cr(n,r.document),i=r.removedTargetIds||[];t=new Vo([],i,s,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new aT(s,i),c=r.targetId;t=new hm(c,o)}}return t}function ea(n,e){let t;if(e instanceof ys)t={update:Ah(n,e.key,e.value)};else if(e instanceof Aa)t={delete:Zo(n,e.key)};else if(e instanceof gn)t={update:Ah(n,e.key,e.data),updateMask:bT(e.fieldMask)};else{if(!(e instanceof um))return H();t={verify:Zo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof os)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof as)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof cs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ti)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw H()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(n,e.precondition)),t}function Xc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?et.updateTime(ct(i.updateTime)):i.exists!==void 0?et.exists(i.exists):et.none()}(e.currentDocument):et.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)J(c.setToServerValue==="REQUEST_TIME"),l=new os;else if("appendMissingElements"in c){const h=c.appendMissingElements.values||[];l=new as(h)}else if("removeAllFromArray"in c){const h=c.removeAllFromArray.values||[];l=new cs(h)}else"increment"in c?l=new Ti(o,c.increment):H();const u=be.fromServerFormat(c.fieldPath);return new am(u,l)}(n,s)):[];if(e.update){e.update.name;const s=cr(n,e.update.name),i=new Ze({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new ht(u.map(h=>be.fromServerFormat(h)))}(e.updateMask);return new gn(s,i,o,t,r)}return new ys(s,i,t,r)}if(e.delete){const s=cr(n,e.delete);return new Aa(s,t)}if(e.verify){const s=cr(n,e.verify);return new um(s,t)}return H()}function vT(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?ct(s.updateTime):ct(i);return o.isEqual(Z.min())&&(o=ct(i)),new sT(o,s.transformResults||[])}(t,e))):[]}function vm(n,e){return{documents:[gm(n,e.path)]}}function wm(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=gm(n,s);const i=function(u){if(u.length!==0)return Tm(fe.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(_){return{field:Wr(_.field),direction:IT(_.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Qc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:s}}function Im(n){let e=_m(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(p){const _=Em(p);return _ instanceof fe&&Nl(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(A){return new Jo(Qr(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,va(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(p){const _=!!p.before,v=p.values||[];return new ss(v,_)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const _=!p.before,v=p.values||[];return new ss(v,_)}(t.endAt)),Wp(e,s,o,i,c,"F",l,u)}function wT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Em(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Qr(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qr(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qr(t.unaryFilter.field);return ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(t.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(t){return ae.create(Qr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return fe.create(t.compositeFilter.filters.map(r=>Em(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(t.compositeFilter.op))}(n):H()}function IT(n){return hT[n]}function ET(n){return fT[n]}function TT(n){return pT[n]}function Wr(n){return{fieldPath:n.canonicalString()}}function Qr(n){return be.fromServerFormat(n.fieldPath)}function Tm(n){return n instanceof ae?function(t){if(t.op==="=="){if(ch(t.value))return{unaryFilter:{field:Wr(t.field),op:"IS_NAN"}};if(ah(t.value))return{unaryFilter:{field:Wr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ch(t.value))return{unaryFilter:{field:Wr(t.field),op:"IS_NOT_NAN"}};if(ah(t.value))return{unaryFilter:{field:Wr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(t.field),op:ET(t.op),value:t.value}}}(n):n instanceof fe?function(t){const r=t.getFilters().map(s=>Tm(s));return r.length===1?r[0]:{compositeFilter:{op:TT(t.op),filters:r}}}(n):H()}function bT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,r,s,i=Z.min(),o=Z.min(),c=xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new an(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.ct=e}}function AT(n,e){let t;if(e.document)t=_T(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=$.fromSegments(e.noDocument.path),s=yr(e.noDocument.readTime);t=Ce.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=$.fromSegments(e.unknownDocument.path),s=yr(e.unknownDocument.version);t=Ce.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Ae(s[0],s[1]);return Z.fromTimestamp(i)}(e.readTime)),t}function Sh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ta(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Zo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ls(i,o.version.toTimestamp()),createTime:ls(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:_r(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:t.path.toArray(),version:_r(e.version)}}return r}function ta(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function _r(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function yr(n){const e=new Ae(n.seconds,n.nanoseconds);return Z.fromTimestamp(e)}function nr(n,e){const t=(e.baseMutations||[]).map(i=>Xc(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Xc(n.ct,i)),s=Ae.fromMillis(e.localWriteTimeMs);return new Ll(e.batchId,s,t,r)}function Js(n){const e=yr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?yr(n.lastLimboFreeSnapshotVersion):Z.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return J(i.documents.length===1),vt(Ia(_m(i.documents[0])))}(n.query):function(i){return vt(Im(i))}(n.query),new an(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,xe.fromBase64String(n.resumeToken))}function Sm(n,e){const t=_r(e.snapshotVersion),r=_r(e.lastLimboFreeSnapshotVersion);let s;s=Yo(e.target)?vm(n.ct,e.target):wm(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:gr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Rm(n){const e=Im({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Wc(e,e.limit,"L"):e}function gc(n,e){return new Ol(e.largestBatchId,Xc(n.ct,e.overlayMutation))}function Rh(n,e){const t=e.path.lastSegment();return[n,at(e.path.popLast()),t]}function Ph(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:_r(r.readTime),documentKey:at(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{getBundleMetadata(e,t){return Ch(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:yr(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Ch(e).put(function(s){return{bundleId:s.id,createTime:_r(ct(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return kh(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Rm(i.bundledQuery),readTime:yr(i.readTime)}}(r)})}saveNamedQuery(e,t){return kh(e).put(function(s){return{name:s.name,readTime:_r(ct(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Ch(n){return Be(n,"bundles")}function kh(n){return Be(n,"namedQueries")}/**
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
 */class Sa{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Sa(e,r)}getOverlay(e,t){return Fs(e).get(Rh(this.userId,t)).next(r=>r?gc(this.serializer,r):null)}getOverlays(e,t){const r=qt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new Ol(t,o);s.push(this.ht(e,c))}),P.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(at(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Fs(e).j("collectionPathOverlayIndex",c))}),P.waitFor(i)}getOverlaysForCollection(e,t,r){const s=qt(),i=at(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Fs(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const u=gc(this.serializer,l);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=qt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Fs(e).J({index:"collectionGroupOverlayIndex",range:c},(l,u,h)=>{const p=gc(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>i)}ht(e,t){return Fs(e).put(function(s,i,o){const[c,l,u]=Rh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ea(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Fs(n){return Be(n,"documentOverlays")}/**
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
 */class RT{Pt(e){return Be(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?xe.fromUint8Array(r):xe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class rr{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Te(e.integerValue));else if("doubleValue"in e){const r=Te(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),yi(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=fn(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Bn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?Fp(e)?this.dt(t,Number.MAX_SAFE_INTEGER):wa(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):H()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(Te(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),$.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}rr.vt=new rr;function PT(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Dh(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=PT(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class CT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Dh(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Dh(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class kT{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class DT{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Bs{constructor(){this.jt=new CT,this.Ht=new kT(this.jt),this.Jt=new DT(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class sr{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new sr(this.indexId,this.documentKey,this.arrayValue,r)}}function Sn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Nh(n.arrayValue,e.arrayValue),t!==0?t:(t=Nh(n.directionalValue,e.directionalValue),t!==0?t:$.comparator(n.documentKey,e.documentKey)))}function Nh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class xh{constructor(e){this.Xt=new _e((t,r)=>be.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(J(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Uc(e);if(t!==void 0&&!this.sn(t))return!1;const r=er(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new _e(be.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Co(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Co(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Co(r.field,r.dir==="asc"?0:1)));return new Qo(Qo.UNKNOWN_ID,this.collectionId,t,_i.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Pm(n){var e,t;if(J(n instanceof ae||n instanceof fe),n instanceof ae){if(n instanceof Hp){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ae.create(n.field,"==",i)))||[];return fe.create(s,"or")}return n}const r=n.filters.map(s=>Pm(s));return fe.create(r,n.op)}function NT(n){if(n.getFilters().length===0)return[];const e=tl(Pm(n));return J(Cm(e)),Zc(e)||el(e)?[e]:e.getFilters()}function Zc(n){return n instanceof ae}function el(n){return n instanceof fe&&Nl(n)}function Cm(n){return Zc(n)||el(n)||function(t){if(t instanceof fe&&Kc(t)){for(const r of t.getFilters())if(!Zc(r)&&!el(r))return!1;return!0}return!1}(n)}function tl(n){if(J(n instanceof ae||n instanceof fe),n instanceof ae)return n;if(n.filters.length===1)return tl(n.filters[0]);const e=n.filters.map(r=>tl(r));let t=fe.create(e,n.op);return t=na(t),Cm(t)?t:(J(t instanceof fe),J(is(t)),J(t.filters.length>1),t.filters.reduce((r,s)=>Ul(r,s)))}function Ul(n,e){let t;return J(n instanceof ae||n instanceof fe),J(e instanceof ae||e instanceof fe),t=n instanceof ae?e instanceof ae?function(s,i){return fe.create([s,i],"and")}(n,e):Vh(n,e):e instanceof ae?Vh(e,n):function(s,i){if(J(s.filters.length>0&&i.filters.length>0),is(s)&&is(i))return Kp(s,i.getFilters());const o=Kc(s)?s:i,c=Kc(s)?i:s,l=o.filters.map(u=>Ul(u,c));return fe.create(l,"or")}(n,e),na(t)}function Vh(n,e){if(is(e))return Kp(e,n.getFilters());{const t=e.filters.map(r=>Ul(n,r));return fe.create(t,"or")}}function na(n){if(J(n instanceof ae||n instanceof fe),n instanceof ae)return n;const e=n.getFilters();if(e.length===1)return na(e[0]);if(jp(n))return n;const t=e.map(s=>na(s)),r=[];return t.forEach(s=>{s instanceof ae?r.push(s):s instanceof fe&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:fe.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(){this.un=new $l}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(wt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class $l{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new _e(he.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _e(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Uint8Array(0);class VT{constructor(e,t){this.databaseId=t,this.cn=new $l,this.ln=new Gn(r=>gr(r),(r,s)=>Oi(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:at(s)};return Lh(e).put(i)}return P.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Ap(t),""],!1,!0);return Lh(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(jt(o.parent))}return r})}addFieldIndex(e,t){const r=Us(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Kr(e);return i.next(c=>{o.put(Ph(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Us(e),s=Kr(e),i=qr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Us(e),r=qr(e),s=Kr(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return P.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new xh(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=qr(e);let s=!0;const i=new Map;return P.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=re();const c=[];return P.forEach(i,(l,u)=>{x("IndexedDbIndexManager",`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(l)} to execute ${gr(t)}`);const h=function(U,Q){const K=Uc(Q);if(K===void 0)return null;for(const G of Xo(U,K.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null}(u,l),p=function(U,Q){const K=new Map;for(const G of er(Q))for(const E of Xo(U,G.fieldPath))switch(E.op){case"==":case"in":K.set(G.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return K.set(G.fieldPath.canonicalString(),E.value),Array.from(K.values())}return null}(u,l),_=function(U,Q){const K=[];let G=!0;for(const E of er(Q)){const y=E.kind===0?fh(U,E.fieldPath,U.startAt):ph(U,E.fieldPath,U.startAt);K.push(y.value),G&&(G=y.inclusive)}return new ss(K,G)}(u,l),v=function(U,Q){const K=[];let G=!0;for(const E of er(Q)){const y=E.kind===0?ph(U,E.fieldPath,U.endAt):fh(U,E.fieldPath,U.endAt);K.push(y.value),G&&(G=y.inclusive)}return new ss(K,G)}(u,l),A=this.In(l,u,_),k=this.In(l,u,v),C=this.Tn(l,u,p),L=this.En(l.indexId,h,A,_.inclusive,k,v.inclusive,C);return P.forEach(L,F=>r.G(F,t.limit).next(U=>{U.forEach(Q=>{const K=$.fromSegments(Q.documentKey);o.has(K)||(o=o.add(K),c.push(K))})}))}).next(()=>c)}return P.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=NT(fe.create(e.filters,"and")).map(r=>zc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),h=[];for(let p=0;p<l;++p){const _=t?this.dn(t[p/u]):yo,v=this.An(e,_,r[p%u],s),A=this.Rn(e,_,i[p%u],o),k=c.map(C=>this.An(e,_,C,!0));h.push(...this.createRange(v,A,k))}return h}An(e,t,r,s){const i=new sr(e,$.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new sr(e,$.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new xh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return P.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new _e(be.comparator),h=!1;for(const p of l.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?h=!0:u=u.add(_.field));for(const p of l.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(h?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new Bs;for(const s of er(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);rr.vt.It(i,o)}return r.zt()}dn(e){const t=new Bs;return rr.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new Bs;return rr.vt.It(Ii(this.databaseId,t),r.Yt(function(i){const o=er(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new Bs);let i=0;for(const o of er(e)){const c=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&Ei(c))s=this.gn(s,o,c);else{const u=l.Yt(o.kind);rr.vt.It(c,u)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new Bs;l.seed(c.zt()),rr.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof ae&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Us(e),s=Kr(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return P.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(h,p){const _=p?new _i(p.sequenceNumber,new wt(yr(p.readTime),new $(jt(p.documentKey)),p.largestBatchId)):_i.empty(),v=h.fields.map(([A,k])=>new Co(be.fromServerFormat(A),k));return new Qo(h.indexId,h.collectionGroup,v,_)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ne(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Us(e),i=Kr(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>P.forEach(c,l=>i.put(Ph(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return P.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),P.forEach(c,l=>this.wn(e,s,l).next(u=>{const h=this.Sn(i,l);return u.isEqual(h)?P.resolve():this.bn(e,i,l,u,h)}))))})}Dn(e,t,r,s){return qr(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return qr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=qr(e);let i=new _e(Sn);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{i=i.add(new sr(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let r=new _e(Sn);const s=this.Vn(t,e);if(s==null)return r;const i=Uc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ei(o))for(const c of o.arrayValue.values||[])r=r.add(new sr(t.indexId,e.key,this.dn(c),s))}else r=r.add(new sr(t.indexId,e.key,yo,s));return r}bn(e,t,r,s,i){x("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,u,h,p,_){const v=l.getIterator(),A=u.getIterator();let k=jr(v),C=jr(A);for(;k||C;){let L=!1,F=!1;if(k&&C){const U=h(k,C);U<0?F=!0:U>0&&(L=!0)}else k!=null?F=!0:L=!0;L?(p(C),C=jr(A)):F?(_(k),k=jr(v)):(k=jr(v),C=jr(A))}}(s,i,Sn,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),P.waitFor(o)}yn(e){let t=1;return Kr(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Sn(o,c)).filter((o,c,l)=>!c||Sn(o,l[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=Sn(o,e),l=Sn(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,yo,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,yo,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return Sn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Mh)}getMinOffset(e,t){return P.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||H())).next(Mh)}}function Lh(n){return Be(n,"collectionParents")}function qr(n){return Be(n,"indexEntries")}function Us(n){return Be(n,"indexConfiguration")}function Kr(n){return Be(n,"indexState")}function Mh(n){J(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Rl(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new wt(e.readTime,e.documentKey,t)}/**
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
 */const Oh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ut{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.J({range:o},(h,p,_)=>(c++,_.delete()));i.push(l.next(()=>{J(c===1)}));const u=[];for(const h of t.mutations){const p=Np(e,h.key.path,t.batchId);i.push(s.delete(p)),u.push(h.key)}return P.waitFor(i).next(()=>u)}function ra(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw H();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(41943040,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);class Ra{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){J(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ra(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Rn(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Jr(e),o=Rn(e);return o.add({}).next(c=>{J(typeof c=="number");const l=new Ll(c,t,r,s),u=function(v,A,k){const C=k.baseMutations.map(F=>ea(v.ct,F)),L=k.mutations.map(F=>ea(v.ct,F));return{userId:A,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:C,mutations:L}}(this.serializer,this.userId,l),h=[];let p=new _e((_,v)=>ne(_.canonicalString(),v.canonicalString()));for(const _ of s){const v=Np(this.userId,_.key.path,c);p=p.add(_.key.path.popLast()),h.push(o.put(u)),h.push(i.put(v,yE))}return p.forEach(_=>{h.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),P.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return Rn(e).get(t).next(r=>r?(J(r.userId===this.userId),nr(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?P.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Rn(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(J(c.batchId>=r),i=nr(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Rn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Rn(e).U("userMutationsIndex",t).next(r=>r.map(s=>nr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ko(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Jr(e).J({range:s},(o,c,l)=>{const[u,h,p]=o,_=jt(h);if(u===this.userId&&t.path.isEqual(_))return Rn(e).get(p).next(v=>{if(!v)throw H();J(v.userId===this.userId),i.push(nr(this.serializer,v))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(ne);const s=[];return t.forEach(i=>{const o=ko(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=Jr(e).J({range:c},(u,h,p)=>{const[_,v,A]=u,k=jt(v);_===this.userId&&i.path.isEqual(k)?r=r.add(A):p.done()});s.push(l)}),P.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=ko(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new _e(ne);return Jr(e).J({range:o},(l,u,h)=>{const[p,_,v]=l,A=jt(_);p===this.userId&&r.isPrefixOf(A)?A.length===s&&(c=c.add(v)):h.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Rn(e).get(i).next(o=>{if(o===null)throw H();J(o.userId===this.userId),r.push(nr(this.serializer,o))}))}),P.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return km(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),P.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Jr(e).J({range:r},(i,o,c)=>{if(i[0]===this.userId){const l=jt(i[1]);s.push(l)}else c.done()}).next(()=>{J(s.length===0)})})}containsKey(e,t){return Dm(e,this.userId,t)}Nn(e){return Nm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Dm(n,e,t){const r=ko(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Jr(n).J({range:i,H:!0},(c,l,u)=>{const[h,p,_]=c;h===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Rn(n){return Be(n,"mutations")}function Jr(n){return Be(n,"documentMutations")}function Nm(n){return Be(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vr(0)}static kn(){return new vr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new vr(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Z.fromTimestamp(new Ae(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Gr(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Gr(e).J((o,c)=>{const l=Js(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>P.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Gr(e).J((r,s)=>{const i=Js(s);t(i)})}qn(e){return Fh(e).get("targetGlobalKey").next(t=>(J(t!==null),t))}Qn(e,t){return Fh(e).put("targetGlobalKey",t)}Kn(e,t){return Gr(e).put(Sm(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=gr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Gr(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const u=Js(c);Oi(t,u.target)&&(i=u,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Nn(e);return t.forEach(o=>{const c=at(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),P.waitFor(s)}removeMatchingKeys(e,t,r){const s=Nn(e);return P.forEach(t,i=>{const o=at(i.path);return P.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Nn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Nn(e);let i=re();return s.J({range:r,H:!0},(o,c,l)=>{const u=jt(o[1]),h=new $(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const r=at(t.path),s=IDBKeyRange.bound([r],[Ap(r)],!1,!0);let i=0;return Nn(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ot(e,t){return Gr(e).get(t).next(r=>r?Js(r):null)}}function Gr(n){return Be(n,"targets")}function Fh(n){return Be(n,"targetGlobal")}function Nn(n){return Be(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh([n,e],[t,r]){const s=ne(n,t);return s===0?ne(e,r):s}class MT{constructor(e){this.Un=e,this.buffer=new _e(Bh),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Bh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Kn(t)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await qn(t)}await this.Hn(3e5)})}}class FT{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(dt.oe);const r=new MT(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Oh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),zr()<=oe.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function BT(n,e){return new FT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,t){this.db=e,this.garbageCollector=BT(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return vo(e,r)}removeReference(e,t,r){return vo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return vo(e,t)}nr(e,t){return function(s,i){let o=!1;return Nm(s).Y(c=>Dm(s,c,i).next(l=>(l&&(o=!0),P.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Z.min()),Nn(e).delete(function(p){return[0,at(p.path)]}(o))))});s.push(l)}}).next(()=>P.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return vo(e,t)}tr(e,t){const r=Nn(e);let s,i=dt.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:u})=>{o===0?(i!==dt.oe&&t(new $(jt(s)),i),i=u,s=l):i=dt.oe}).next(()=>{i!==dt.oe&&t(new $(jt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function vo(n,e){return Nn(n).put(function(r,s){return{targetId:0,path:at(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.changes=new Gn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Xn(e).put(r)}removeEntry(e,t,r){return Xn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],ta(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Ce.newInvalidDocument(t);return Xn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only($s(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:Ce.newInvalidDocument(t)};return Xn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only($s(t))},(s,i)=>{r={document:this.ir(t,i),size:ra(i)}}).next(()=>r)}getEntries(e,t){let r=_t();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=_t(),s=new ve($.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);r=r.insert(i,c),s=s.insert(i,ra(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return P.resolve();let s=new _e(jh);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound($s(s.first()),$s(s.last())),o=s.getIterator();let c=o.getNext();return Xn(e).J({index:"documentKeyIndex",range:i},(l,u,h)=>{const p=$.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&jh(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,u),c=o.hasNext()?o.getNext():null),c?h.$($s(c)):h.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),ta(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Xn(e).U(IDBKeyRange.bound(c,l,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let h=_t();for(const p of u){const _=this.ir($.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(Fi(t,_)||s.has(_.key))&&(h=h.insert(_.key,_))}return h})}getAllFromCollectionGroup(e,t,r,s){let i=_t();const o=$h(t,r),c=$h(t,wt.max());return Xn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,u,h)=>{const p=this.ir($.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&h.done()}).next(()=>i)}newChangeBuffer(e){return new jT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Uh(e).get("remoteDocumentGlobalKey").next(t=>(J(!!t),t))}rr(e,t){return Uh(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=AT(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Z.min())))return r}return Ce.newInvalidDocument(e)}}function Vm(n){return new $T(n)}class jT extends xm{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Gn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new _e((i,o)=>ne(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Sh(this.cr.serializer,o);s=s.add(i.path.popLast());const u=ra(l);r+=u-c.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=Sh(this.cr.serializer,o.convertToNoDocument(Z.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),P.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Uh(n){return Be(n,"remoteDocumentGlobal")}function Xn(n){return Be(n,"remoteDocumentsV14")}function $s(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function $h(n,e){const t=e.documentKey.path.toArray();return[n,ta(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function jh(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=ne(t[i],r[i]),s)return s;return s=ne(t.length,r.length),s||(s=ne(t[t.length-2],r[r.length-2]),s||ne(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&oi(r.mutation,s,ht.empty(),Ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,t,r=re()){const s=qt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Ws();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=qt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,re()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=_t();const o=ii(),c=function(){return ii()}();return t.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof gn)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),oi(h.mutation,u,h.mutation.getFieldMask(),Ae.now())):o.set(u.key,ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var p;return c.set(u,new qT(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ii();let s=new ve((o,c)=>o-c),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let h=r.get(l)||ht.empty();h=c.applyToLocalView(u,h),r.set(l,h);const p=(s.get(c.batchId)||re()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,p=tm();h.forEach(_=>{if(!i.has(_)){const v=cm(t.get(_),r.get(_));v!==null&&p.set(_,v),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(qt());let c=-1,l=i;return o.next(u=>P.forEach(u,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(h)?P.resolve():this.remoteDocumentCache.getEntry(e,h).next(_=>{l=l.insert(h,_)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,re())).next(h=>({batchId:c,changes:em(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=Ws();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ws();return this.indexManager.getCollectionParents(e,i).next(c=>P.forEach(c,l=>{const u=function(p,_){return new _s(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ce.newInvalidDocument(h)))});let c=Ws();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&oi(h.mutation,u,ht.empty(),Ae.now()),Fi(t,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ct(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Rm(s.bundledQuery),readTime:ct(s.readTime)}}(t)),P.resolve()}}/**
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
 */class GT{constructor(){this.overlays=new ve($.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=qt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=qt(),i=t.length+1,o=new $(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ve((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=qt(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=qt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return P.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ol(t,r));let i=this.Ir.get(t);i===void 0&&(i=re(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class zT{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.Tr=new _e(Ue.Er),this.dr=new _e(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ue(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ue(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new he([])),r=new Ue(t,e),s=new Ue(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new he([])),r=new Ue(t,e),s=new Ue(t,e+1);let i=re();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ue(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||ne(e.wr,t.wr)}static Ar(e,t){return ne(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new _e(Ue.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ll(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ue(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ue(t,0),s=new Ue(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(ne);return t.forEach(s=>{const i=new Ue(s,0),o=new Ue(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new $(i),0);let c=new _e(ne);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),P.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(t.mutations,s=>{const i=new Ue(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ue(t,0),s=this.br.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.Mr=e,this.docs=function(){return new ve($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=_t();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ce.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=_t();const o=t.path,c=new $(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Rl(Rp(h),r)<=0||(s.has(h.key)||Fi(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){H()}Or(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new QT(this)}getSize(e){return P.resolve(this.size)}}class QT extends xm{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.persistence=e,this.Nr=new Gn(t=>gr(t),Oi),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jl,this.targetCount=0,this.kr=vr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new vr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.qr={},this.overlays={},this.Qr=new dt(0),this.Kr=!1,this.Kr=!0,this.$r=new zT,this.referenceDelegate=e(this),this.Ur=new JT(this),this.indexManager=new xT,this.remoteDocumentCache=function(s){return new WT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Am(t),this.Gr=new KT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new GT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new HT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new YT(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class YT extends Cp{constructor(e){super(),this.currentSequenceNumber=e}}class Pa{constructor(e){this.persistence=e,this.Jr=new jl,this.Yr=null}static Zr(e){return new Pa(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const s=$.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Z.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.serializer=e}O(e,t,r,s){const i=new ya("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nh,{unique:!0}),l.createObjectStore("documentMutations")}(e),qh(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=P.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),qh(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Z.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",h)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nh,{unique:!0});const p=u.store("mutations"),_=h.map(v=>p.put(v));return P.waitFor(_)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:kE});u.createIndex("collectionPathOverlayIndex",DE,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",NE,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:vE});u.createIndex("documentKeyIndex",wE),u.createIndex("collectionGroupIndex",IE)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:SE}).createIndex("sequenceNumberIndex",RE,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:PE}).createIndex("documentKeyIndex",CE,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=ra(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>P.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>P.forEach(c,l=>{J(l.userId===i.userId);const u=nr(this.serializer,l);return km(e,i.userId,u).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,c)=>{const l=new he(o),u=function(p){return[0,at(p)]}(l);i.push(t.get(u).next(h=>h?P.resolve():(p=>t.put({targetId:0,path:at(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>P.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:AE});const r=t.store("collectionParents"),s=new $l,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:at(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new he(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],u)=>{const h=jt(c);return i(h.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=Js(s),o=Sm(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new $(he.fromString(p.document.name).popFirst(5)):p.noDocument?$.fromSegments(p.noDocument.path):p.unknownDocument?$.fromSegments(p.unknownDocument.path):H()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(u))}).next(()=>P.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=Vm(this.serializer),i=new Mm(Pa.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(l=>{var u;let h=(u=c.get(l.userId))!==null&&u!==void 0?u:re();nr(this.serializer,l).keys().forEach(p=>h=h.add(p)),c.set(l.userId,h)}),P.forEach(c,(l,u)=>{const h=new Xe(u),p=Sa.lt(this.serializer,h),_=i.getIndexManager(h),v=Ra.lt(h,this.serializer,_,i.referenceDelegate);return new Lm(s,v,p,_).recalculateAndSaveOverlaysForDocumentKeys(new $c(t,dt.oe),l).next()})})}}function qh(n){n.createObjectStore("targetDocuments",{keyPath:TE}).createIndex("documentTargetsIndex",bE,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",EE,{unique:!0}),n.createObjectStore("targetGlobal")}const _c="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ql{constructor(e,t,r,s,i,o,c,l,u,h,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=c,this.ci=u,this.li=h,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!ql.D())throw new O(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new UT(this,s),this.Ai=t+"main",this.serializer=new Am(l),this.Ri=new Mn(this.Ai,this.hi,new XT(this.serializer)),this.$r=new RT,this.Ur=new LT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Vm(this.serializer),this.Gr=new ST,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&Ne("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(N.FAILED_PRECONDITION,_c);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new dt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>wo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Kn(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return js(e).get("owner").next(t=>P.resolve(this.vi(t)))}Ci(e){return wo(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Be(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return P.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?P.resolve(!0):js(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new O(N.FAILED_PRECONDITION,_c);return!1}}return!(!this.networkEnabled||!this.inForeground)||wo(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&x("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new $c(e,dt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>wo(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Ra.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new VT(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Sa.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?LE:l===16?VE:l===15?Cl:l===14?Lp:l===13?Vp:l===12?xE:l===11?xp:void H()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new $c(c,this.Qr?this.Qr.next():dt.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new O(N.FAILED_PRECONDITION,Pp);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return js(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(N.FAILED_PRECONDITION,_c)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return js(e).put("owner",t)}static D(){return Mn.D()}bi(e){const t=js(e);return t.get("owner").next(r=>this.vi(r)?(x("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):P.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ne(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Df()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ne("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Ne("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function js(n){return Be(n,"owner")}function wo(n){return Be(n,"clientMetadata")}function Om(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=re(),s=re();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kl(e,t.fromCache,r,s)}}/**
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
 */class ZT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Df()?8:kp(Fe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ZT;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(zr()<=oe.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Hr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(zr()<=oe.DEBUG&&x("QueryEngine","Query:",Hr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(zr()<=oe.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Hr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vt(t))):P.resolve())}Yi(e,t){if(mh(t))return P.resolve(null);let r=vt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Wc(t,null,"F"),r=vt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(t,c);return this.ns(t,u,o,l.readTime)?this.Yi(e,Wc(t,null,"F")):this.rs(e,u,t,l)}))})))}Zi(e,t,r,s){return mh(t)||s.isEqual(Z.min())?P.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?P.resolve(null):(zr()<=oe.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hr(t)),this.rs(e,o,t,Sp(s,-1)).next(c=>c))})}ts(e,t){let r=new _e(Xp(e));return t.forEach((s,i)=>{Fi(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return zr()<=oe.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Hr(t)),this.Ji.getDocumentsMatchingQuery(e,t,wt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ve(ne),this._s=new Gn(i=>gr(i),Oi),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Bm(n,e,t,r){return new eb(n,e,t,r)}async function Um(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=re();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function tb(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const p=u.batch,_=p.keys();let v=P.resolve();return _.forEach(A=>{v=v.next(()=>h.getEntry(l,A)).next(k=>{const C=u.docVersions.get(A);J(C!==null),k.version.compareTo(C)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=re();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function $m(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function nb(n,e){const t=W(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((h,p)=>{const _=s.get(p);if(!_)return;c.push(t.Ur.removeMatchingKeys(i,h.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,h.addedDocuments,p)));let v=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(xe.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),s=s.insert(p,v),function(k,C,L){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(_,v,h)&&c.push(t.Ur.updateTargetData(i,v))});let l=_t(),u=re();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(rb(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(Z.min())){const h=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return P.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.os=s,i))}function rb(n,e,t){let r=re(),s=re();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=_t();return t.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function sb(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sa(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new an(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function us(n,e,t){const r=W(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Kn(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function nl(n,e,t){const r=W(n);let s=Z.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const p=W(l),_=p._s.get(h);return _!==void 0?P.resolve(p.os.get(_)):p.Ur.getTargetData(u,h)}(r,o,vt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:Z.min(),t?i:re())).next(c=>(Km(r,Yp(e),c),{documents:c,Ts:i})))}function jm(n,e){const t=W(n),r=W(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function qm(n,e){const t=W(n),r=t.us.get(e)||Z.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,Sp(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Km(t,e,s),s))}function Km(n,e,t){let r=n.us.get(e)||Z.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function Kh(n,e){return`firestore_clients_${n}_${e}`}function Gh(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function yc(n,e){return`firestore_targets_${n}_${e}`}class ia{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new O(s.error.code,s.error.message))),o?new ia(e,t,s.state,i):(Ne("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ai{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new O(r.error.code,r.error.message))),i?new ai(e,r.state,s):(Ne("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class oa{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=xl();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Dp(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new oa(e,i):(Ne("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Gl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Gl(t.clientId,t.onlineState):(Ne("SharedClientState",`Failed to parse online state: ${e}`),null)}}class rl{constructor(){this.activeTargetIds=xl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vc{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ve(ne),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Kh(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new rl),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(Kh(this.persistenceKey,r));if(s){const i=oa.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(yc(this.persistenceKey,e));if(s){const i=ai.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(yc(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x("SharedClientState","READ",e,t),t}setItem(e,t){x("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(x("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Ne("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=dt.oe;if(i!=null)try{const c=JSON.parse(i);J(typeof c=="number"),o=c}catch(c){Ne("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==dt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new ia(this.currentUser,e,t,r),i=Gh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=Gh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=yc(this.persistenceKey,e),i=new ai(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return oa.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return ia.Rs(new Xe(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return ai.Rs(s,t)}Ls(e){return Gl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=xl();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Gm{constructor(){this.so=new rl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new rl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Io=null;function wc(){return Io===null?Io=function(){return 268435456+Math.round(2147483648*Math.random())}():Io++,"0x"+Io.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class cb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=wc(),l=this.xo(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(t,l,u,s).then(h=>(x("RestConnection",`Received RPC '${t}' ${c}: `,h),h),h=>{throw mi("RestConnection",`RPC '${t}' ${c} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=ob[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=wc();return new Promise((o,c)=>{const l=new vp;l.setWithCredentials(!0),l.listenOnce(wp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Po.NO_ERROR:const h=l.getResponseJson();x(Ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Po.TIMEOUT:x(Ye,`RPC '${e}' ${i} timed out`),c(new O(N.DEADLINE_EXCEEDED,"Request time out"));break;case Po.HTTP_ERROR:const p=l.getStatus();if(x(Ye,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const v=_==null?void 0:_.error;if(v&&v.status&&v.message){const A=function(C){const L=C.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(L)>=0?L:N.UNKNOWN}(v.status);c(new O(A,v.message))}else c(new O(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new O(N.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{x(Ye,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);x(Ye,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",u,r,15)})}Bo(e,t,r){const s=wc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Tp(),c=Ep(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");x(Ye,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);let _=!1,v=!1;const A=new ab({Io:C=>{v?x(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(_||(x(Ye,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),x(Ye,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},To:()=>p.close()}),k=(C,L,F)=>{C.listen(L,U=>{try{F(U)}catch(Q){setTimeout(()=>{throw Q},0)}})};return k(p,Hs.EventType.OPEN,()=>{v||(x(Ye,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),k(p,Hs.EventType.CLOSE,()=>{v||(v=!0,x(Ye,`RPC '${e}' stream ${s} transport closed`),A.So())}),k(p,Hs.EventType.ERROR,C=>{v||(v=!0,mi(Ye,`RPC '${e}' stream ${s} transport errored:`,C),A.So(new O(N.UNAVAILABLE,"The operation could not be completed")))}),k(p,Hs.EventType.MESSAGE,C=>{var L;if(!v){const F=C.data[0];J(!!F);const U=F,Q=U.error||((L=U[0])===null||L===void 0?void 0:L.error);if(Q){x(Ye,`RPC '${e}' stream ${s} received error:`,Q);const K=Q.status;let G=function(w){const T=Le[w];if(T!==void 0)return dm(T)}(K),E=Q.message;G===void 0&&(G=N.INTERNAL,E="Unknown error status: "+K+" with message "+Q.message),v=!0,A.So(new O(G,E)),p.close()}else x(Ye,`RPC '${e}' stream ${s} received:`,F),A.bo(F)}}),k(c,Ip.STAT_EVENT,C=>{C.stat===Bc.PROXY?x(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Bc.NOPROXY&&x(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function zm(){return typeof window<"u"?window:null}function Lo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n){return new mT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Ne(t.toString()),Ne("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new O(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lb extends Wm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=yT(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?ct(o.readTime):Z.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Yc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=Yo(l)?{documents:vm(i,l)}:{query:wm(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=pm(i,o.resumeToken);const u=Qc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Z.min())>0){c.readTime=ls(i,o.snapshotVersion.toTimestamp());const u=Qc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=wT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Yc(this.serializer),t.removeTarget=e,this.a_(t)}}class ub extends Wm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=vT(e.writeResults,e.commitTime),r=ct(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Yc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ea(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new O(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Jc(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(N.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Jc(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(N.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class hb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ne(t),this.D_=!1):x("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Pr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=W(l);u.L_.add(4),await $i(u),u.q_.set("Unknown"),u.L_.delete(4),await ka(u)}(this))})}),this.q_=new hb(r,s)}}async function ka(n){if(Pr(n))for(const e of n.B_)await e(!0)}async function $i(n){for(const e of n.B_)await e(!1)}function Da(n,e){const t=W(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Wl(t)?Hl(t):ws(t).r_()&&zl(t,e))}function ds(n,e){const t=W(n),r=ws(t);t.N_.delete(e),r.r_()&&Qm(t,e),t.N_.size===0&&(r.r_()?r.o_():Pr(t)&&t.q_.set("Unknown"))}function zl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ws(n).A_(e)}function Qm(n,e){n.Q_.xe(e),ws(n).R_(e)}function Hl(n){n.Q_=new dT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ws(n).start(),n.q_.v_()}function Wl(n){return Pr(n)&&!ws(n).n_()&&n.N_.size>0}function Pr(n){return W(n).L_.size===0}function Jm(n){n.Q_=void 0}async function pb(n){n.q_.set("Online")}async function mb(n){n.N_.forEach((e,t)=>{zl(n,e)})}async function gb(n,e){Jm(n),Wl(n)?(n.q_.M_(e),Hl(n)):n.q_.set("Unknown")}async function _b(n,e,t){if(n.q_.set("Online"),e instanceof fm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await aa(n,r)}else if(e instanceof Vo?n.Q_.Ke(e):e instanceof hm?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Z.min()))try{const r=await $m(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(xe.EMPTY_BYTE_STRING,h.snapshotVersion)),Qm(i,l);const p=new an(h.target,l,u,h.sequenceNumber);zl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await aa(n,r)}}async function aa(n,e,t){if(!Kn(e))throw e;n.L_.add(1),await $i(n),n.q_.set("Offline"),t||(t=()=>$m(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ka(n)})}function Ym(n,e){return e().catch(t=>aa(n,t,e))}async function vs(n){const e=W(n),t=$n(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;yb(e);)try{const s=await sb(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,vb(e,s)}catch(s){await aa(e,s)}Xm(e)&&Zm(e)}function yb(n){return Pr(n)&&n.O_.length<10}function vb(n,e){n.O_.push(e);const t=$n(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Xm(n){return Pr(n)&&!$n(n).n_()&&n.O_.length>0}function Zm(n){$n(n).start()}async function wb(n){$n(n).p_()}async function Ib(n){const e=$n(n);for(const t of n.O_)e.m_(t.mutations)}async function Eb(n,e,t){const r=n.O_.shift(),s=Ml.from(r,e,t);await Ym(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await vs(n)}async function Tb(n,e){e&&$n(n).V_&&await async function(r,s){if(function(o){return cT(o)&&o!==N.ABORTED}(s.code)){const i=r.O_.shift();$n(r).s_(),await Ym(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vs(r)}}(n,e),Xm(n)&&Zm(n)}async function Hh(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Pr(t);t.L_.add(3),await $i(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ka(t)}async function sl(n,e){const t=W(n);e?(t.L_.delete(2),await ka(t)):e||(t.L_.add(2),await $i(t),t.q_.set("Unknown"))}function ws(n){return n.K_||(n.K_=function(t,r,s){const i=W(t);return i.w_(),new lb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:pb.bind(null,n),Ro:mb.bind(null,n),mo:gb.bind(null,n),d_:_b.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Wl(n)?Hl(n):n.q_.set("Unknown")):(await n.K_.stop(),Jm(n))})),n.K_}function $n(n){return n.U_||(n.U_=function(t,r,s){const i=W(t);return i.w_(),new ub(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wb.bind(null,n),mo:Tb.bind(null,n),f_:Ib.bind(null,n),g_:Eb.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await vs(n)):(await n.U_.stop(),n.O_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Ql(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jl(n,e){if(Ne("AsyncQueue",`${e}: ${n}`),Kn(n))return new O(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Ws(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.W_=new ve($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class hs{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new hs(e,t,ts.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ab{constructor(){this.queries=Qh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=W(t),i=s.queries;s.queries=Qh(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new O(N.ABORTED,"Firestore shutting down"))}}function Qh(){return new Gn(n=>Jp(n),Ea)}async function eg(n,e){const t=W(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new bb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Jl(o,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Yl(t)}async function tg(n,e){const t=W(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Sb(n,e){const t=W(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Yl(t)}function Rb(n,e,t){const r=W(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Yl(n){n.Y_.forEach(e=>{e.next()})}var il,Jh;(Jh=il||(il={})).ea="default",Jh.Cache="cache";class ng{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==il.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.key=e}}class sg{constructor(e){this.key=e}}class Pb{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=Xp(e),this.Ra=new ts(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Wh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const _=s.get(h),v=Fi(this.query,p)?p:null,A=!!_&&this.mutatedKeys.has(_.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let C=!1;_&&v?_.data.isEqual(v.data)?A!==k&&(r.track({type:3,doc:v}),C=!0):this.ga(_,v)||(r.track({type:2,doc:v}),C=!0,(l&&this.Aa(v,l)>0||u&&this.Aa(v,u)<0)&&(c=!0)):!_&&v?(r.track({type:0,doc:v}),C=!0):_&&!v&&(r.track({type:1,doc:_}),C=!0,(l||u)&&(c=!0)),C&&(v?(o=o.add(v),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(v,A){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return k(v)-k(A)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new hs(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Wh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new sg(r))}),this.da.forEach(r=>{e.has(r)||t.push(new rg(r))}),t}ba(e){this.Ta=e.Ts,this.da=re();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return hs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Cb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class kb{constructor(e){this.key=e,this.va=!1}}class Db{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Gn(c=>Jp(c),Ea),this.Ma=new Map,this.xa=new Set,this.Oa=new ve($.comparator),this.Na=new Map,this.La=new jl,this.Ba={},this.ka=new Map,this.qa=vr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Nb(n,e,t=!0){const r=Na(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await ig(r,e,t,!0),s}async function xb(n,e){const t=Na(n);await ig(t,e,!0,!1)}async function ig(n,e,t,r){const s=await sa(n.localStore,vt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Xl(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Da(n.remoteStore,s),c}async function Xl(n,e,t,r,s){n.Ka=(p,_,v)=>async function(k,C,L,F){let U=C.view.ma(L);U.ns&&(U=await nl(k.localStore,C.query,!1).then(({documents:E})=>C.view.ma(E,U)));const Q=F&&F.targetChanges.get(C.targetId),K=F&&F.targetMismatches.get(C.targetId)!=null,G=C.view.applyChanges(U,k.isPrimaryClient,Q,K);return ol(k,C.targetId,G.wa),G.snapshot}(n,p,_,v);const i=await nl(n.localStore,e,!0),o=new Pb(e,i.Ts),c=o.ma(i.documents),l=Ui.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);ol(n,t,u.wa);const h=new Cb(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),u.snapshot}async function Vb(n,e,t){const r=W(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ea(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await us(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ds(r.remoteStore,s.targetId),fs(r,s.targetId)}).catch(qn)):(fs(r,s.targetId),await us(r.localStore,s.targetId,!0))}async function Lb(n,e){const t=W(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ds(t.remoteStore,r.targetId))}async function Mb(n,e,t){const r=nu(n);try{const s=await function(o,c){const l=W(o),u=Ae.now(),h=c.reduce((v,A)=>v.add(A.key),re());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let A=_t(),k=re();return l.cs.getEntries(v,h).next(C=>{A=C,A.forEach((L,F)=>{F.isValidDocument()||(k=k.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,A)).next(C=>{p=C;const L=[];for(const F of c){const U=oT(F,p.get(F.key).overlayedDocument);U!=null&&L.push(new gn(F.key,U,Up(U.value.mapValue),et.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,L,c)}).next(C=>{_=C;const L=C.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(v,C.batchId,L)})}).then(()=>({batchId:_.batchId,changes:em(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new ve(ne)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,t),await zn(r,s.changes),await vs(r.remoteStore)}catch(s){const i=Jl(s,"Failed to persist write");t.reject(i)}}async function og(n,e){const t=W(n);try{const r=await nb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?J(o.va):s.removedDocuments.size>0&&(J(o.va),o.va=!1))}),await zn(t,r,e)}catch(r){await qn(r)}}function Yh(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=W(o);l.onlineState=c;let u=!1;l.queries.forEach((h,p)=>{for(const _ of p.j_)_.Z_(c)&&(u=!0)}),u&&Yl(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ob(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new ve($.comparator);o=o.insert(i,Ce.newNoDocument(i,Z.min()));const c=re().add(i),l=new Bi(Z.min(),new Map,new ve(ne),o,c);await og(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),tu(r)}else await us(r.localStore,e,!1).then(()=>fs(r,e,t)).catch(qn)}async function Fb(n,e){const t=W(n),r=e.batch.batchId;try{const s=await tb(t.localStore,e);eu(t,r,null),Zl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await zn(t,s)}catch(s){await qn(s)}}async function Bb(n,e,t){const r=W(n);try{const s=await function(o,c){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(J(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);eu(r,e,t),Zl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await zn(r,s)}catch(s){await qn(s)}}function Zl(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function eu(n,e,t){const r=W(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function fs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||ag(n,r)})}function ag(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(ds(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),tu(n))}function ol(n,e,t){for(const r of t)r instanceof rg?(n.La.addReference(r.key,e),Ub(n,r)):r instanceof sg?(x("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||ag(n,r.key)):H()}function Ub(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(x("SyncEngine","New document in limbo: "+t),n.xa.add(r),tu(n))}function tu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(he.fromString(e)),r=n.qa.next();n.Na.set(r,new kb(t)),n.Oa=n.Oa.insert(t,r),Da(n.remoteStore,new an(vt(Ia(t.path)),r,"TargetPurposeLimboResolution",dt.oe))}}async function zn(n,e,t){const r=W(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(u=>{var h;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Kl.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=W(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(u,_=>P.forEach(_.$i,v=>h.persistence.referenceDelegate.addReference(p,_.targetId,v)).next(()=>P.forEach(_.Ui,v=>h.persistence.referenceDelegate.removeReference(p,_.targetId,v)))))}catch(p){if(!Kn(p))throw p;x("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const _=p.targetId;if(!p.fromCache){const v=h.os.get(_),A=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(A);h.os=h.os.insert(_,k)}}}(r.localStore,i))}async function $b(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await Um(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new O(N.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zn(t,r.hs)}}function jb(n,e){const t=W(n),r=t.Na.get(e);if(r&&r.va)return re().add(r.key);{let s=re();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function qb(n,e){const t=W(n),r=await nl(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&ol(t,e.targetId,s.wa),s}async function Kb(n,e){const t=W(n);return qm(t.localStore,e).then(r=>zn(t,r))}async function Gb(n,e,t,r){const s=W(n),i=await function(c,l){const u=W(c),h=W(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",p=>h.Mn(p,l).next(_=>_?u.localDocuments.getDocuments(p,_):P.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await vs(s.remoteStore):t==="acknowledged"||t==="rejected"?(eu(s,e,r||null),Zl(s,e),function(c,l){W(W(c).mutationQueue).On(l)}(s.localStore,e)):H(),await zn(s,i)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function zb(n,e){const t=W(n);if(Na(t),nu(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Xh(t,r.toArray());t.Qa=!0,await sl(t.remoteStore,!0);for(const i of s)Da(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(fs(t,o),us(t.localStore,o,!0))),ds(t.remoteStore,o)}),await s,await Xh(t,r),function(o){const c=W(o);c.Na.forEach((l,u)=>{ds(c.remoteStore,u)}),c.La.pr(),c.Na=new Map,c.Oa=new ve($.comparator)}(t),t.Qa=!1,await sl(t.remoteStore,!1)}}async function Xh(n,e,t){const r=W(n),s=[],i=[];for(const o of e){let c;const l=r.Ma.get(o);if(l&&l.length!==0){c=await sa(r.localStore,vt(l[0]));for(const u of l){const h=r.Fa.get(u),p=await qb(r,h);p.snapshot&&i.push(p.snapshot)}}else{const u=await jm(r.localStore,o);c=await sa(r.localStore,u),await Xl(r,cg(u),o,!1,c.resumeToken)}s.push(c)}return r.Ca.d_(i),s}function cg(n){return Wp(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Hb(n){return function(t){return W(W(t).persistence).Qi()}(W(n).localStore)}async function Wb(n,e,t,r){const s=W(n);if(s.Qa)return void x("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await qm(s.localStore,Yp(i[0])),c=Bi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",xe.EMPTY_BYTE_STRING);await zn(s,o,c);break}case"rejected":await us(s.localStore,e,!0),fs(s,e,r);break;default:H()}}async function Qb(n,e,t){const r=Na(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){x("SyncEngine","Adding an already active target "+s);continue}const i=await jm(r.localStore,s),o=await sa(r.localStore,i);await Xl(r,cg(i),o.targetId,!1,o.resumeToken),Da(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await us(r.localStore,s,!1).then(()=>{ds(r.remoteStore,s),fs(r,s)}).catch(qn)}}function Na(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=og.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ob.bind(null,e),e.Ca.d_=Sb.bind(null,e.eventManager),e.Ca.$a=Rb.bind(null,e.eventManager),e}function nu(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bb.bind(null,e),e}class bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ca(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Bm(this.persistence,new Fm,e.initialUser,this.serializer)}Ga(e){return new Mm(Pa.Zr,this.serializer)}Wa(e){return new Gm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bi.provider={build:()=>new bi};class lg extends bi{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await nu(this.Ja.syncEngine),await vs(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Bm(this.persistence,new Fm,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new OT(r,e.asyncQueue,t)}Ha(e,t){const r=new gE(t,this.persistence);return new mE(e.asyncQueue,r)}Ga(e){const t=Om(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new ql(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,zm(),Lo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Gm}}class Jb extends lg{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof vc&&(this.sharedClientState.syncEngine={no:Gb.bind(null,t),ro:Wb.bind(null,t),io:Qb.bind(null,t),Qi:Hb.bind(null,t),eo:Kb.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await zb(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=zm();if(!vc.D(t))throw new O(N.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Om(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new vc(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ai{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$b.bind(null,this.syncEngine),await sl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ab}()}createDatastore(e){const t=Ca(e.databaseInfo.databaseId),r=function(i){return new cb(i)}(e.databaseInfo);return function(i,o,c,l){return new db(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new fb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Yh(this.syncEngine,t,0),function(){return zh.D()?new zh:new ib}())}createSyncEngine(e,t){return function(s,i,o,c,l,u,h){const p=new Db(s,i,o,c,l,u);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=W(s);x("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await $i(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ai.provider={build:()=>new Ai};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ug{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ne("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=bp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Jl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ic(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Um(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Xb(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Hh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Hh(e.remoteStore,s)),n._onlineComponents=e}async function Xb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ic(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;mi("Error using user provided cache. Falling back to memory cache: "+t),await Ic(n,new bi)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Ic(n,new bi);return n._offlineComponents}async function dg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Zh(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Zh(n,new Ai))),n._onlineComponents}function Zb(n){return dg(n).then(e=>e.syncEngine)}async function hg(n){const e=await dg(n),t=e.eventManager;return t.onListen=Nb.bind(null,e.syncEngine),t.onUnlisten=Vb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Lb.bind(null,e.syncEngine),t}function eA(n,e,t={}){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new ug({next:_=>{h.Za(),o.enqueueAndForget(()=>tg(i,p));const v=_.docs.has(c);!v&&_.fromCache?u.reject(new O(N.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&_.fromCache&&l&&l.source==="server"?u.reject(new O(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(_)},error:_=>u.reject(_)}),p=new ng(Ia(c.path),h,{includeMetadataChanges:!0,_a:!0});return eg(i,p)}(await hg(n),n.asyncQueue,e,t,r)),r.promise}function tA(n,e,t={}){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new ug({next:_=>{h.Za(),o.enqueueAndForget(()=>tg(i,p)),_.fromCache&&l.source==="server"?u.reject(new O(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(_)},error:_=>u.reject(_)}),p=new ng(c,h,{includeMetadataChanges:!0,_a:!0});return eg(i,p)}(await hg(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function fg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n,e,t){if(!t)throw new O(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function nA(n,e,t,r){if(e===!0&&r===!0)throw new O(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function tf(n){if(!$.isDocumentKey(n))throw new O(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nf(n){if($.isDocumentKey(n))throw new O(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H()}function Dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xa(n);throw new O(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Va{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iE;switch(r.type){case"firstParty":return new cE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ef.get(t);r&&(x("ComponentProvider","Removing Datastore"),ef.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class lt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class On extends Cr{constructor(e,t,r){super(e,t,Ia(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new $(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function Ke(n,e,...t){if(n=Ee(n),ru("collection","path",e),n instanceof Va){const r=he.fromString(e,...t);return nf(r),new On(n,null,r)}{if(!(n instanceof lt||n instanceof On))throw new O(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return nf(r),new On(n.firestore,null,r)}}function rA(n,e){if(n=Dt(n,Va),ru("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new O(N.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Cr(n,null,function(r){return new _s(he.emptyPath(),r)}(e))}function se(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=bp.newId()),ru("doc","path",e),n instanceof Va){const r=he.fromString(e,...t);return tf(r),new lt(n,null,new $(r))}{if(!(n instanceof lt||n instanceof On))throw new O(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return tf(r),new lt(n.firestore,n instanceof On?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hm(this,"async_queue_retry"),this.Vu=()=>{const r=Lo();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Lo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Lo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new zt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Kn(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Ne("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Ql.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class kr extends Va{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new sf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sf(e),this._firestoreClient=void 0,await e}}}function sA(n,e,t){t||(t="(default)");const r=Ar(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(di(i,e))return s;throw new O(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(N.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function su(n){if(n._terminated)throw new O(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||iA(n),n._firestoreClient}function iA(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,u,h){return new OE(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,fg(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Yb(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ps(xe.fromBase64String(e))}catch(t){throw new O(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ps(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */class ou{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=/^__.*__$/;class aA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new gn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ys(e,this.data,t,this.fieldTransforms)}}class pg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new gn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class au{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new au(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ca(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(mg(this.Cu)&&oA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class cA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ca(e)}Qu(e,t,r,s=!1){return new au({Cu:e,methodName:t,qu:r,path:be.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oa(n){const e=n._freezeSettings(),t=Ca(n._databaseId);return new cA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gg(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);lu("Data must be an object, but it was:",o,r);const c=_g(r,o);let l,u;if(i.merge)l=new ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const _=al(e,p,t);if(!o.contains(_))throw new O(N.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);vg(h,_)||h.push(_)}l=new ht(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new aA(new Ze(c),l,u)}class Fa extends Ma{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fa}}class cu extends Ma{_toFieldTransform(e){return new am(e.path,new os)}isEqual(e){return e instanceof cu}}function lA(n,e,t,r){const s=n.Qu(1,e,t);lu("Data must be an object, but it was:",s,r);const i=[],o=Ze.empty();Rr(r,(l,u)=>{const h=uu(e,l,t);u=Ee(u);const p=s.Nu(h);if(u instanceof Fa)i.push(h);else{const _=ji(u,p);_!=null&&(i.push(h),o.set(h,_))}});const c=new ht(i);return new pg(o,c,s.fieldTransforms)}function uA(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[al(e,r,t)],l=[s];if(i.length%2!=0)throw new O(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(al(e,i[_])),l.push(i[_+1]);const u=[],h=Ze.empty();for(let _=c.length-1;_>=0;--_)if(!vg(u,c[_])){const v=c[_];let A=l[_];A=Ee(A);const k=o.Nu(v);if(A instanceof Fa)u.push(v);else{const C=ji(A,k);C!=null&&(u.push(v),h.set(v,C))}}const p=new ht(u);return new pg(h,p,o.fieldTransforms)}function dA(n,e,t,r=!1){return ji(t,n.Qu(r?4:3,e))}function ji(n,e){if(yg(n=Ee(n)))return lu("Unsupported field value:",e,n),_g(n,e);if(n instanceof Ma)return function(r,s){if(!mg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ji(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ae.fromDate(r);return{timestampValue:ls(s.serializer,i)}}if(r instanceof Ae){const i=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ls(s.serializer,i)}}if(r instanceof iu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ps)return{bytesValue:pm(s.serializer,r._byteString)};if(r instanceof lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ou)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Vl(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${xa(r)}`)}(n,e)}function _g(n,e){const t={};return Mp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(n,(r,s)=>{const i=ji(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function yg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ae||n instanceof iu||n instanceof ps||n instanceof lt||n instanceof Ma||n instanceof ou)}function lu(n,e,t){if(!yg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=xa(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function al(n,e,t){if((e=Ee(e))instanceof La)return e._internalPath;if(typeof e=="string")return uu(n,e);throw ca("Field path arguments must be of type string or ",n,!1,void 0,t)}const hA=new RegExp("[~\\*/\\[\\]]");function uu(n,e,t){if(e.search(hA)>=0)throw ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new La(...e.split("."))._internalPath}catch{throw ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ca(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new O(N.INVALID_ARGUMENT,c+n+l)}function vg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(du("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fA extends wg{data(){return super.data()}}function du(n,e){return typeof e=="string"?uu(n,e):e instanceof La?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hu{}class mA extends hu{}function la(n,e,...t){let r=[];e instanceof hu&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof fu).length,c=i.filter(l=>l instanceof Ba).length;if(o>1||o>0&&c>0)throw new O(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ba extends mA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ba(e,t,r)}_apply(e){const t=this._parse(e);return Ig(e._query,t),new Cr(e.firestore,e.converter,Hc(e._query,t))}_parse(e){const t=Oa(e.firestore);return function(i,o,c,l,u,h,p){let _;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new O(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){af(p,h);const v=[];for(const A of p)v.push(of(l,i,A));_={arrayValue:{values:v}}}else _=of(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||af(p,h),_=dA(c,o,p,h==="in"||h==="not-in");return ae.create(u,h,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ci(n,e,t){const r=e,s=du("where",n);return Ba._create(s,r,t)}class fu extends hu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:fe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Ig(o,l),o=Hc(o,l)}(e._query,t),new Cr(e.firestore,e.converter,Hc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function of(n,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new O(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qp(e)&&t.indexOf("/")!==-1)throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(he.fromString(t));if(!$.isDocumentKey(r))throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ii(n,new $(r))}if(t instanceof lt)return Ii(n,t._key);throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xa(t)}.`)}function af(n,e){if(!Array.isArray(n)||n.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ig(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class gA{convertValue(e,t="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Rr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Te(o.doubleValue));return new ou(i)}convertGeoPoint(e){return new iu(Te(e.latitude),Te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Dl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(vi(e));default:return null}}convertTimestamp(e){const t=fn(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=he.fromString(e);J(bm(r));const s=new pr(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||Ne(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tg extends wg{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(du("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Mo extends Tg{data(e={}){return super.data(e)}}class _A{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Mo(this._firestore,this._userDataWriter,r.key,r,new Ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Mo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Mo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:yA(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function yA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n){n=Dt(n,lt);const e=Dt(n.firestore,kr);return eA(su(e),n._key).then(t=>vA(e,n,t))}class bg extends gA{constructor(e){super(),this.firestore=e}convertBytes(e){return new ps(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}function nt(n){n=Dt(n,Cr);const e=Dt(n.firestore,kr),t=su(e),r=new bg(e);return pA(n._query),tA(t,n._query).then(s=>new _A(e,r,n,s))}function Fn(n,e,t){n=Dt(n,lt);const r=Dt(n.firestore,kr),s=Eg(n.converter,e);return Ua(r,[gg(Oa(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,et.none())])}function st(n,e,t,...r){n=Dt(n,lt);const s=Dt(n.firestore,kr),i=Oa(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof La?uA(i,"updateDoc",n._key,e,t,r):lA(i,"updateDoc",n._key,e),Ua(s,[o.toMutation(n._key,et.exists(!0))])}function Wt(n){return Ua(Dt(n.firestore,kr),[new Aa(n._key,et.none())])}function Ag(n,e){const t=Dt(n.firestore,kr),r=se(n),s=Eg(n.converter,e);return Ua(t,[gg(Oa(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,et.exists(!1))]).then(()=>r)}function Ua(n,e){return function(r,s){const i=new zt;return r.asyncQueue.enqueueAndForget(async()=>Mb(await Zb(r),s,i)),i.promise}(su(n),e)}function vA(n,e,t){const r=t.docs.get(e._key),s=new bg(n);return new Tg(n,s,e._key,r,new Ys(t.hasPendingWrites,t.fromCache),e.converter)}class wA{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=bA(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function IA(n){return new wA(n)}class EA{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ai.provider,this._offlineComponentProvider={build:t=>new lg(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class TA{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ai.provider,this._offlineComponentProvider={build:t=>new Jb(t,e==null?void 0:e.cacheSizeBytes)}}}function bA(n){return new EA(void 0)}function AA(){return new TA}function pt(){return new cu("serverTimestamp")}(function(e,t=!0){(function(s){gs=s})(Sr),Ct(new At("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new kr(new oE(r.getProvider("auth-internal")),new uE(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new O(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pr(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ft(Zd,"4.7.3",e),ft(Zd,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="firebasestorage.googleapis.com",Rg="storageBucket",SA=2*60*1e3,RA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends xt{constructor(e,t,r=0){super(Ec(e),`Firebase Storage: ${t} (${Ec(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ec(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function Ec(n){return"storage/"+n}function pu(){const n="An unknown error occurred, please check the error payload for server response.";return new De(ke.UNKNOWN,n)}function PA(n){return new De(ke.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function CA(n){return new De(ke.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kA(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(ke.UNAUTHENTICATED,n)}function DA(){return new De(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NA(n){return new De(ke.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function xA(){return new De(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VA(){return new De(ke.CANCELED,"User canceled the upload/download.")}function LA(n){return new De(ke.INVALID_URL,"Invalid URL '"+n+"'.")}function MA(n){return new De(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function OA(){return new De(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rg+"' property when initializing the app?")}function FA(){return new De(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BA(){return new De(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function UA(n){return new De(ke.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cl(n){return new De(ke.INVALID_ARGUMENT,n)}function Pg(){return new De(ke.APP_DELETED,"The Firebase app was deleted.")}function $A(n){return new De(ke.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function li(n,e){return new De(ke.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function qs(n){throw new De(ke.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=yt.makeFromUrl(e,t)}catch{return new yt(e,"")}if(r.path==="")return r;throw MA(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(Q){Q.path_=decodeURIComponent(Q.path)}const h="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${h}/b/${s}/o${_}`,"i"),A={bucket:1,path:3},k=t===Sg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",L=new RegExp(`^https?://${k}/${s}/${C}`,"i"),U=[{regex:c,indices:l,postModify:i},{regex:v,indices:A,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let Q=0;Q<U.length;Q++){const K=U[Q],G=K.regex.exec(e);if(G){const E=G[K.indices.bucket];let y=G[K.indices.path];y||(y=""),r=new yt(E,y),K.postModify(r);break}}if(r==null)throw LA(e);return r}}class jA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function h(...C){u||(u=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,n(v,l())},C)}function _(){i&&clearTimeout(i)}function v(C,...L){if(u){_();return}if(C){_(),h.call(null,C,...L);return}if(l()||o){_(),h.call(null,C,...L);return}r<64&&(r*=2);let U;c===1?(c=2,U=0):U=(r+Math.random())*1e3,p(U)}let A=!1;function k(C){A||(A=!0,_(),!u&&(s!==null?(C||(c=2),clearTimeout(s),p(0)):C||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,k(!0)},t),k}function KA(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(n){return n!==void 0}function zA(n){return typeof n=="object"&&!Array.isArray(n)}function mu(n){return typeof n=="string"||n instanceof String}function cf(n){return gu()&&n instanceof Blob}function gu(){return typeof Blob<"u"}function lf(n,e,t,r){if(r<e)throw cl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw cl(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Cg(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var lr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(lr||(lr={}));/**
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
 */function HA(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,t,r,s,i,o,c,l,u,h,p,_=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=p,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,A)=>{this.resolve_=v,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Eo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===lr.NO_ERROR,l=i.getStatus();if(!c||HA(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===lr.ABORT;r(!1,new Eo(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Eo(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());GA(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=pu();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Pg():VA();o(l)}else{const l=xA();o(l)}};this.canceled_?t(!1,new Eo(!1,null,!0)):this.backoffId_=qA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Eo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function QA(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function JA(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YA(n,e){e&&(n["X-Firebase-GMPID"]=e)}function XA(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ZA(n,e,t,r,s,i,o=!0){const c=Cg(n.urlParams),l=n.url+c,u=Object.assign({},n.headers);return YA(u,e),QA(u,t),JA(u,i),XA(u,r),new WA(l,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function tS(...n){const e=eS();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(gu())return new Blob(n);throw new De(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function nS(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function rS(n){if(typeof atob>"u")throw UA("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Tc{constructor(e,t){this.data=e,this.contentType=t||null}}function kg(n,e){switch(n){case Pt.RAW:return new Tc(Dg(e));case Pt.BASE64:case Pt.BASE64URL:return new Tc(Ng(n,e));case Pt.DATA_URL:return new Tc(iS(e),oS(e))}throw pu()}function Dg(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function sS(n){let e;try{e=decodeURIComponent(n)}catch{throw li(Pt.DATA_URL,"Malformed data URL.")}return Dg(e)}function Ng(n,e){switch(n){case Pt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw li(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Pt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw li(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=rS(e)}catch(s){throw s.message.includes("polyfill")?s:li(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class xg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw li(Pt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=aS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function iS(n){const e=new xg(n);return e.base64?Ng(Pt.BASE64,e.rest):sS(e.rest)}function oS(n){return new xg(n).contentType}function aS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t){let r=0,s="";cf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(cf(this.data_)){const r=this.data_,s=nS(r,e,t);return s===null?null:new xn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new xn(r,!0)}}static getBlob(...e){if(gu()){const t=e.map(r=>r instanceof xn?r.data_:r);return new xn(tS.apply(null,t))}else{const t=e.map(o=>mu(o)?kg(Pt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new xn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(n){let e;try{e=JSON.parse(n)}catch{return null}return zA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function lS(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Lg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(n,e){return e}class ot{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||uS}}let To=null;function dS(n){return!mu(n)||n.length<2?n:Lg(n)}function Mg(){if(To)return To;const n=[];n.push(new ot("bucket")),n.push(new ot("generation")),n.push(new ot("metageneration")),n.push(new ot("name","fullPath",!0));function e(i,o){return dS(o)}const t=new ot("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new ot("size");return s.xform=r,n.push(s),n.push(new ot("timeCreated")),n.push(new ot("updated")),n.push(new ot("md5Hash",null,!0)),n.push(new ot("cacheControl",null,!0)),n.push(new ot("contentDisposition",null,!0)),n.push(new ot("contentEncoding",null,!0)),n.push(new ot("contentLanguage",null,!0)),n.push(new ot("contentType",null,!0)),n.push(new ot("metadata","customMetadata",!0)),To=n,To}function hS(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new yt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function fS(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return hS(r,n),r}function Og(n,e,t){const r=Vg(e);return r===null?null:fS(n,r,t)}function pS(n,e,t,r){const s=Vg(e);if(s===null||!mu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=n.bucket,p=n.fullPath,_="/b/"+o(h)+"/o/"+o(p),v=_u(_,t,r),A=Cg({alt:"media",token:u});return v+A})[0]}function mS(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Fg{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n){if(!n)throw pu()}function gS(n,e){function t(r,s){const i=Og(n,s,e);return Bg(i!==null),i}return t}function _S(n,e){function t(r,s){const i=Og(n,s,e);return Bg(i!==null),pS(i,s,n.host,n._protocol)}return t}function Ug(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=DA():s=kA():t.getStatus()===402?s=CA(n.bucket):t.getStatus()===403?s=NA(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function yS(n){const e=Ug(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=PA(n.path)),i.serverResponse=s.serverResponse,i}return t}function vS(n,e,t){const r=e.fullServerUrl(),s=_u(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new Fg(s,i,_S(n,t),o);return c.errorHandler=yS(e),c}function wS(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function IS(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=wS(null,e)),r}function ES(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let U="";for(let Q=0;Q<2;Q++)U=U+Math.random().toString().slice(2);return U}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=IS(e,r,s),h=mS(u,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,_=`\r
--`+l+"--",v=xn.getBlob(p,r,_);if(v===null)throw FA();const A={name:u.fullPath},k=_u(i,n.host,n._protocol),C="POST",L=n.maxUploadRetryTime,F=new Fg(k,C,gS(n,t),L);return F.urlParams=A,F.headers=o,F.body=v.uploadData(),F.errorHandler=Ug(e),F}class TS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=lr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=lr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=lr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw qs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bS extends TS{initXhr(){this.xhr_.responseType="text"}}function $g(){return new bS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t){this._service=e,t instanceof yt?this._location=t:this._location=yt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new wr(e,t)}get root(){const e=new yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lg(this._location.path)}get storage(){return this._service}get parent(){const e=cS(this._location.path);if(e===null)return null;const t=new yt(this._location.bucket,e);return new wr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw $A(e)}}function AS(n,e,t){n._throwIfRoot("uploadBytes");const r=ES(n.storage,n._location,Mg(),new xn(e,!0),t);return n.storage.makeRequestWithTokens(r,$g).then(s=>({metadata:s,ref:n}))}function SS(n,e,t=Pt.RAW,r){n._throwIfRoot("uploadString");const s=kg(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),AS(n,s.data,i)}function RS(n){n._throwIfRoot("getDownloadURL");const e=vS(n.storage,n._location,Mg());return n.storage.makeRequestWithTokens(e,$g).then(t=>{if(t===null)throw BA();return t})}function PS(n,e){const t=lS(n._location.path,e),r=new yt(n._location.bucket,t);return new wr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(n){return/^[A-Za-z]+:\/\//.test(n)}function kS(n,e){return new wr(n,e)}function jg(n,e){if(n instanceof yu){const t=n;if(t._bucket==null)throw OA();const r=new wr(t,t._bucket);return e!=null?jg(r,e):r}else return e!==void 0?PS(n,e):n}function DS(n,e){if(e&&CS(e)){if(n instanceof yu)return kS(n,e);throw cl("To use ref(service, url), the first argument must be a Storage instance.")}else return jg(n,e)}function uf(n,e){const t=e==null?void 0:e[Rg];return t==null?null:yt.makeFromBucketSpec(t,n)}function NS(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:vy(s,n.app.options.projectId))}class yu{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Sg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SA,this._maxUploadRetryTime=RA,this._requests=new Set,s!=null?this._bucket=yt.makeFromBucketSpec(s,this._host):this._bucket=uf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,e):this._bucket=uf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new jA(Pg());{const o=ZA(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const df="@firebase/storage",hf="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="storage";function Kg(n,e,t,r){return n=Ee(n),SS(n,e,t,r)}function Gg(n){return n=Ee(n),RS(n)}function zg(n,e){return n=Ee(n),DS(n,e)}function xS(n=gl(),e){n=Ee(n);const r=Ar(n,qg).getImmediate({identifier:e}),s=_y("storage");return s&&VS(r,...s),r}function VS(n,e,t,r={}){NS(n,e,t,r)}function LS(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new yu(t,r,s,e,Sr)}function MS(){Ct(new At(qg,LS,"PUBLIC").setMultipleInstances(!0)),ft(df,hf,""),ft(df,hf,"esm2017")}MS();const Hg="@firebase/installations",vu="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=1e4,Qg=`w:${vu}`,Jg="FIS_v2",OS="https://firebaseinstallations.googleapis.com/v1",FS=60*60*1e3,BS="installations",US="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ir=new br(BS,US,$S);function Yg(n){return n instanceof xt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg({projectId:n}){return`${OS}/projects/${n}/installations`}function Zg(n){return{token:n.token,requestStatus:2,expiresIn:qS(n.expiresIn),creationTime:Date.now()}}async function e_(n,e){const r=(await e.json()).error;return Ir.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function t_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function jS(n,{refreshToken:e}){const t=t_(n);return t.append("Authorization",KS(e)),t}async function n_(n){const e=await n();return e.status>=500&&e.status<600?n():e}function qS(n){return Number(n.replace("s","000"))}function KS(n){return`${Jg} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Xg(n),s=t_(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:Jg,appId:n.appId,sdkVersion:Qg},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await n_(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Zg(u.authToken)}}else throw await e_("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=/^[cdef][\w-]{21}$/,ll="";function WS(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=QS(n);return HS.test(t)?t:ll}catch{return ll}}function QS(n){return zS(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=new Map;function i_(n,e){const t=$a(n);o_(t,e),JS(t,e)}function o_(n,e){const t=s_.get(n);if(t)for(const r of t)r(e)}function JS(n,e){const t=YS();t&&t.postMessage({key:n,fid:e}),XS()}let ir=null;function YS(){return!ir&&"BroadcastChannel"in self&&(ir=new BroadcastChannel("[Firebase] FID Change"),ir.onmessage=n=>{o_(n.data.key,n.data.fid)}),ir}function XS(){s_.size===0&&ir&&(ir.close(),ir=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="firebase-installations-database",e0=1,Er="firebase-installations-store";let bc=null;function wu(){return bc||(bc=pa(ZS,e0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Er)}}})),bc}async function ua(n,e){const t=$a(n),s=(await wu()).transaction(Er,"readwrite"),i=s.objectStore(Er),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&i_(n,e.fid),e}async function a_(n){const e=$a(n),r=(await wu()).transaction(Er,"readwrite");await r.objectStore(Er).delete(e),await r.done}async function ja(n,e){const t=$a(n),s=(await wu()).transaction(Er,"readwrite"),i=s.objectStore(Er),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&i_(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(n){let e;const t=await ja(n.appConfig,r=>{const s=t0(r),i=n0(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ll?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function t0(n){const e=n||{fid:WS(),registrationStatus:0};return c_(e)}function n0(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ir.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=r0(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:s0(n)}:{installationEntry:e}}async function r0(n,e){try{const t=await GS(n,e);return ua(n.appConfig,t)}catch(t){throw Yg(t)&&t.customData.serverCode===409?await a_(n.appConfig):await ua(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function s0(n){let e=await ff(n.appConfig);for(;e.registrationStatus===1;)await r_(100),e=await ff(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Iu(n);return r||t}return e}function ff(n){return ja(n,e=>{if(!e)throw Ir.create("installation-not-found");return c_(e)})}function c_(n){return i0(n)?{fid:n.fid,registrationStatus:0}:n}function i0(n){return n.registrationStatus===1&&n.registrationTime+Wg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0({appConfig:n,heartbeatServiceProvider:e},t){const r=a0(n,t),s=jS(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Qg,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await n_(()=>fetch(r,c));if(l.ok){const u=await l.json();return Zg(u)}else throw await e_("Generate Auth Token",l)}function a0(n,{fid:e}){return`${Xg(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eu(n,e=!1){let t;const r=await ja(n.appConfig,i=>{if(!l_(i))throw Ir.create("not-registered");const o=i.authToken;if(!e&&u0(o))return i;if(o.requestStatus===1)return t=c0(n,e),i;{if(!navigator.onLine)throw Ir.create("app-offline");const c=h0(i);return t=l0(n,c),c}});return t?await t:r.authToken}async function c0(n,e){let t=await pf(n.appConfig);for(;t.authToken.requestStatus===1;)await r_(100),t=await pf(n.appConfig);const r=t.authToken;return r.requestStatus===0?Eu(n,e):r}function pf(n){return ja(n,e=>{if(!l_(e))throw Ir.create("not-registered");const t=e.authToken;return f0(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function l0(n,e){try{const t=await o0(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ua(n.appConfig,r),t}catch(t){if(Yg(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await a_(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ua(n.appConfig,r)}throw t}}function l_(n){return n!==void 0&&n.registrationStatus===2}function u0(n){return n.requestStatus===2&&!d0(n)}function d0(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+FS}function h0(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function f0(n){return n.requestStatus===1&&n.requestTime+Wg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(n){const e=n,{installationEntry:t,registrationPromise:r}=await Iu(e);return r?r.catch(console.error):Eu(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(n,e=!1){const t=n;return await g0(t),(await Eu(t,e)).token}async function g0(n){const{registrationPromise:e}=await Iu(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(n){if(!n||!n.options)throw Ac("App Configuration");if(!n.name)throw Ac("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ac(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ac(n){return Ir.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="installations",y0="installations-internal",v0=n=>{const e=n.getProvider("app").getImmediate(),t=_0(e),r=Ar(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},w0=n=>{const e=n.getProvider("app").getImmediate(),t=Ar(e,u_).getImmediate();return{getId:()=>p0(t),getToken:s=>m0(t,s)}};function I0(){Ct(new At(u_,v0,"PUBLIC")),Ct(new At(y0,w0,"PRIVATE"))}I0();ft(Hg,vu);ft(Hg,vu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="/firebase-messaging-sw.js",T0="/firebase-cloud-messaging-push-scope",d_="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",b0="https://fcmregistrations.googleapis.com/v1",h_="google.c.a.c_id",A0="google.c.a.c_l",S0="google.c.a.ts",R0="google.c.a.e";var mf;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(mf||(mf={}));/**
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
 */var Ri;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Ri||(Ri={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function P0(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="fcm_token_details_db",C0=5,gf="fcm_token_object_Store";async function k0(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Sc))return null;let e=null;return(await pa(Sc,C0,{upgrade:async(r,s,i,o)=>{var c;if(s<2||!r.objectStoreNames.contains(gf))return;const l=o.objectStore(gf),u=await l.index("fcmSenderId").get(n);if(await l.clear(),!!u){if(s===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(c=h.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:nn(h.vapidKey)}}}else if(s===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:nn(h.auth),p256dh:nn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:nn(h.vapidKey)}}}else if(s===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:nn(h.auth),p256dh:nn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:nn(h.vapidKey)}}}}}})).close(),await dc(Sc),await dc("fcm_vapid_details_db"),await dc("undefined"),D0(e)?e:null}function D0(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="firebase-messaging-database",x0=1,Pi="firebase-messaging-store";let Rc=null;function f_(){return Rc||(Rc=pa(N0,x0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Pi)}}})),Rc}async function V0(n){const e=p_(n),r=await(await f_()).transaction(Pi).objectStore(Pi).get(e);if(r)return r;{const s=await k0(n.appConfig.senderId);if(s)return await Tu(n,s),s}}async function Tu(n,e){const t=p_(n),s=(await f_()).transaction(Pi,"readwrite");return await s.objectStore(Pi).put(e,t),await s.done,e}function p_({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},rt=new br("messaging","Messaging",L0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(n,e){const t=await Au(n),r=m_(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(bu(n.appConfig),s)).json()}catch(o){throw rt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw rt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw rt.create("token-subscribe-no-token");return i.token}async function O0(n,e){const t=await Au(n),r=m_(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${bu(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw rt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw rt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw rt.create("token-update-no-token");return i.token}async function F0(n,e){const r={method:"DELETE",headers:await Au(n)};try{const i=await(await fetch(`${bu(n.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw rt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw rt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function bu({projectId:n}){return`${b0}/projects/${n}/registrations`}async function Au({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function m_({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==d_&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=7*24*60*60*1e3;async function U0(n){const e=await j0(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:nn(e.getKey("auth")),p256dh:nn(e.getKey("p256dh"))},r=await V0(n.firebaseDependencies);if(r){if(q0(r.subscriptionOptions,t))return Date.now()>=r.createTime+B0?$0(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await F0(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return _f(n.firebaseDependencies,t)}else return _f(n.firebaseDependencies,t)}async function $0(n,e){try{const t=await O0(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Tu(n.firebaseDependencies,r),t}catch(t){throw t}}async function _f(n,e){const r={token:await M0(n,e),createTime:Date.now(),subscriptionOptions:e};return await Tu(n,r),r.token}async function j0(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:P0(e)})}function q0(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return K0(e,n),G0(e,n),z0(e,n),e}function K0(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function G0(n,e){e.data&&(n.data=e.data)}function z0(n,e){var t,r,s,i,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;c&&(n.fcmOptions.link=c);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(n.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(n){return typeof n=="object"&&!!n&&h_ in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(n){if(!n||!n.options)throw Pc("App Configuration Object");if(!n.name)throw Pc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Pc(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Pc(n){return rt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=W0(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(n){try{n.swRegistration=await navigator.serviceWorker.register(E0,{scope:T0}),n.swRegistration.update().catch(()=>{})}catch(e){throw rt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y0(n,e){if(!e&&!n.swRegistration&&await J0(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw rt.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=d_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(n,e){if(!navigator)throw rt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw rt.create("permission-blocked");return await X0(n,e==null?void 0:e.vapidKey),await Y0(n,e==null?void 0:e.serviceWorkerRegistration),U0(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(n,e,t){const r=eR(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[h_],message_name:t[A0],message_time:t[S0],message_device_time:Math.floor(Date.now()/1e3)})}function eR(n){switch(n){case Ri.NOTIFICATION_CLICKED:return"notification_open";case Ri.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Ri.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(yf(t)):n.onMessageHandler.next(yf(t)));const r=t.data;H0(r)&&r[R0]==="1"&&await Z0(n,t.messageType,r)}const vf="@firebase/messaging",wf="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=n=>{const e=new Q0(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>tR(e,t)),e},rR=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>g_(e,r)}};function sR(){Ct(new At("messaging",nR,"PUBLIC")),Ct(new At("messaging-internal",rR,"PRIVATE")),ft(vf,wf),ft(vf,wf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(){try{await Nf()}catch{return!1}return typeof window<"u"&&fl()&&Sy()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(n,e){if(!navigator)throw rt.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(n=gl()){return __().then(e=>{if(!e)throw rt.create("unsupported-browser")},e=>{throw rt.create("indexed-db-unsupported")}),Ar(Ee(n),"messaging").getImmediate()}async function aR(n,e){return n=Ee(n),g_(n,e)}function cR(n,e){return n=Ee(n),iR(n,e)}sR();const lR={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},qa=Lf(lR),qi=nE(qa),X=sA(qa,{localCache:IA({tabManager:AA()})}),y_=xS(qa);let Ci=null;const v_=__().then(n=>(n&&(Ci=oR(qa)),n)),m={user:null,profile:null,isAdmin:!1,isSuperAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,meetups:[],currentCourse:null,courseMap:null,courseMapLayer:null,approvedDraft:{new:[],edit:[]},gpsTracking:!1,warnThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0};function z(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ee(n,e="info"){const t=document.createElement("div");t.className=`toast toast-${e}`,t.textContent=n,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("toast-show")),setTimeout(()=>{t.classList.remove("toast-show"),setTimeout(()=>t.remove(),300)},3500)}function Is(n,e){const t=document.getElementById("confirm-modal");document.getElementById("confirm-msg").textContent=n,t.classList.remove("hidden");const r=()=>{t.classList.add("hidden"),window._confirmAccept=null,window._confirmReject=null};window._confirmAccept=()=>{r(),e()},window._confirmReject=()=>{r()}}const w_="archery_v5",uR="archery_v4";function If(){try{const n=JSON.parse(localStorage.getItem(w_)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(uR)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function Nt(){try{localStorage.setItem(w_,JSON.stringify({friends:m.friends,rounds:m.rounds.slice(0,200),courses:m.courses}))}catch(n){(n==null?void 0:n.name)==="QuotaExceededError"&&ee("Lokalt lager er fuldt — nogle data blev ikke gemt","error")}}function ki(){const n=document.getElementById("friends-list");if(!m.friends.length){n.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}n.innerHTML="",m.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${z(e.name)}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).map(z).join(" · ")}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del">🗑</button></div>`,t.querySelector(".frd-edit").addEventListener("click",()=>openFriendModal(e)),t.querySelector(".frd-del").addEventListener("click",()=>doDeleteFriend(e.id,e.name)),n.appendChild(t)})}function Di(){const n=document.getElementById("qfriends");n.innerHTML="",m.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=m.friends.filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await nt(Ke(X,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=m.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...r];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" data-id="${z(i.id)}" data-name="${z(i.name||"")}" data-email="${z(i.email||"")}">${z(i.name)}${i.email?` <span style='font-size:11px;opacity:.6'>${z(i.email)}</span>`:""}</div>`).join(""),e.querySelectorAll(".ac-item").forEach(i=>i.addEventListener("click",()=>{selectFriend(i.dataset.id,i.dataset.name,i.dataset.email),document.getElementById("friend-search").value="",document.getElementById("ac-list").classList.add("hidden")})),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){if(!m.friends.find(r=>r.id===n)){const r={id:n,name:e,email:t};m.friends.push(r),Nt(),ki(),Di(),m.user&&Fn(se(X,"users",m.user.uid,"friends",n),r).catch(s=>console.warn(s))}window.addParticipant(n,e)};window.openFriendModal=function(n){m.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=n?"Rediger ven":"Tilføj ven",document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim().slice(0,80),email:document.getElementById("f-email").value.trim().slice(0,100),phone:document.getElementById("f-phone").value.trim().slice(0,30),club:document.getElementById("f-club").value.trim().slice(0,80),bowType:document.getElementById("f-bow").value};if(!n.name)return;if(m.editFriendId){const r=m.friends.findIndex(s=>s.id===m.editFriendId);r!==-1?m.friends[r]={...n,id:m.editFriendId}:m.friends.push({...n,id:m.editFriendId})}else m.friends.push({...n,id:"f_"+Date.now()});const e=m.editFriendId||"f_"+Date.now();m.editFriendId||(m.friends[m.friends.length-1].id=e);const t=m.friends.find(r=>r.id===(m.editFriendId||e));t&&m.user&&Fn(se(X,"users",m.user.uid,"friends",t.id),t).catch(r=>console.warn(r)),Nt(),document.getElementById("friend-modal").classList.add("hidden"),ki(),Di()};window.doDeleteFriend=function(n,e){Is(`Slet ${e}?`,()=>{m.friends=m.friends.filter(t=>t.id!==n),Nt(),ki(),Di(),m.user&&Wt(se(X,"users",m.user.uid,"friends",n)).catch(t=>console.warn(t))})};const dR=[11,10,8,5,"M"],hR={WA:{label:"WA",arrowsPerTarget:2},"HDD-IAA":{label:"HDD-IAA",arrowsPerTarget:1}},Su="WA";function Qt(n){var e;return((e=hR[n])==null?void 0:e.arrowsPerTarget)??2}function Oe(n){return n==="M"||n==null?0:Number(n)}function Tr(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":t==="-"?null:Number(t))):[]}function fR(n){return n.map(e=>e.map(t=>t??"-").join(",")).join(";")}function tt(n){return n.flat().reduce((e,t)=>e+Oe(t),0)}function pR(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(s=>s!=null).map(Oe));return t.length?(t.reduce((r,s)=>r+s,0)/t.length).toFixed(1):null}function Ru(n){const e={11:0,10:0,8:0,5:0,M:0};return n.flat().forEach(t=>{t==="M"?e.M++:t!=null&&e[Number(t)]!==void 0&&e[Number(t)]++}),e}function Pu(n){return n.length?n.reduce((e,t)=>tt(t.scores)>tt(e.scores)?t:e,n[0]):null}function mR(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,s)=>r+Oe(s),0)/t.length<e:!1}function gR(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function _R(n,e,t=2){for(;n.scores.length<e;)n.scores.push(Array(t).fill(null))}function yR(n,e,t=2){let r=0;for(let s=0;s<e;s++)n.every(i=>{const o=i.scores[s]||[];return o.length>=t&&o.slice(0,t).every(c=>c!=null)})&&r++;return r}function I_(n){return{id:n.id||null,name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,ruleset:n.ruleset||Su,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:fR(e.scores)}))}}function vR(n){return{...n,ruleset:n.ruleset||Su,shooters:(n.shooters||[]).map(e=>({...e,scores:Tr(e.scores)}))}}function E_(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}let Oo=null,Fo=!1,ur=!1,ul=[],ui=null,Xs=0,Bt=null,dl=null,Ks=null;function T_(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function Cu(n,e){const r=(e.lat-n.lat)*Math.PI/180,s=(e.lng-n.lng)*Math.PI/180,i=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function b_(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function A_(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function wR(n){return navigator.geolocation?(Ks=n,ul=[],Xs=0,Bt=null,ui=Date.now(),ur=!1,Fo=!0,Oo=navigator.geolocation.watchPosition(e=>{if(!Fo||ur)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};Bt&&(Xs+=Cu(Bt,t)),Bt=t,ul.push(t),Ks&&Ks({lat:t.lat,lng:t.lng,distance:Xs,elapsed:Math.round((Date.now()-ui)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),dl=setInterval(()=>{Fo&&!ur&&Ks&&Ks({lat:Bt==null?void 0:Bt.lat,lng:Bt==null?void 0:Bt.lng,distance:Xs,elapsed:Math.round((Date.now()-ui)/1e3)})},1e3),!0):!1}function IR(){return ur=!ur,ur}function S_(){return Fo=!1,ur=!1,Oo!==null&&(navigator.geolocation.clearWatch(Oo),Oo=null),clearInterval(dl),dl=null,{route:ul.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round(Xs),duration:ui?Math.round((Date.now()-ui)/1e3):0}}function Ka(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function ER(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((s,i)=>{if(!s.gps)return;const o=Cu(e,s.gps);o<t&&(t=o,r=i)}),r}function TR(n){const e=n.data();return{id:n.id,name:e.name||e.yam||"—",numTargets:e.numTargets||e.antalMål||24,location:e.location||e.beliggenhed||"",targets:e.targets||e.mål||[],visits:e.visits||e.besøg||[],private:e.private??e.privat??!1,hidden:e.hidden??e.skjult??!1,approvedUsers:e.approvedUsers||e.godkendteBrugere||[],ownerId:e.ownerId||null}}function bR(n){var e;return m.isAdmin||!!n.ownerId&&n.ownerId===((e=m.user)==null?void 0:e.uid)}async function AR(){var n;try{const e=(((n=m.user)==null?void 0:n.email)||"").toLowerCase();let t;if(m.isAdmin)t=[await nt(Ke(X,"courses"))];else{const i=[nt(la(Ke(X,"courses"),ci("hidden","==",!1)))];e&&i.push(nt(la(Ke(X,"courses"),ci("hidden","==",!0),ci("approvedUsers","array-contains",e)))),t=await Promise.all(i)}const r=new Map;t.forEach(i=>i.docs.forEach(o=>r.set(o.id,o)));const s=[...r.values()].map(TR);s.length&&(m.courses=s,Nt(),Ki(),window.populateCourseDropdown())}catch(e){console.warn("courses:",e)}}function Ki(){const n=document.getElementById("courses-list");if(!m.courses.length){n.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}n.innerHTML="",m.courses.forEach(e=>{const t=document.createElement("div");t.className="ccard",t.innerHTML=`<div class="ccard-name">${z(e.name)}${e.private?' <span class="ccard-private-note">(Banen er kun for medlemmer)</span>':""}</div><div class="ccard-meta">${e.numTargets} mål · ${z(e.location||"—")}</div>`,t.onclick=()=>SR(e),n.appendChild(t)})}function SR(n){m.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name+(n.private?" (Banen er kun for medlemmer)":""),document.getElementById("course-edit-stab-btn").classList.toggle("hidden",!bR(n)),window.switchSubtab("map"),RR(n),PR(n),Gi(n)}function RR(n){const e=document.getElementById("course-map");m.courseMap&&(m.courseMap.remove(),m.courseMap=null),m.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(m.courseMap);const t=[];(n.targets||[]).forEach((r,s)=>{const i=r.gps||r.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div class="map-marker-num">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(m.courseMap).bindPopup(`<b>${s+1}. ${r.name||"Mål"}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" class="popup-target-img"/>`:""}`))}),t.length?m.courseMap.fitBounds(t,{padding:[20,20]}):m.courseMap.setView([55.7,12.5],10)}function PR(n){const e=document.getElementById("visits-list"),t=m.rounds.filter(r=>r.courseId===n.id).map(r=>{const s=(r.shooters||[]).map(o=>({...o,scores:Tr(o.scores)})),i=Pu(s);return{roundId:r.id,date:r.completed?new Date(r.completed).toLocaleDateString("da-DK"):r.created?new Date(r.created).toLocaleDateString("da-DK"):"—",participants:s.map(o=>o.name),winner:i==null?void 0:i.name,winnerScore:i?tt(i.scores):0}});if(!t.length){e.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}e.innerHTML="",t.forEach(r=>{const s=document.createElement("div");s.className="visit-card",s.onclick=i=>{i.target.closest(".btn-icon")||window.showVisitResults(r.roundId)},s.innerHTML=`<div class="visit-card-head"><span class="visit-card-date">${z(r.date)}</span><button class="btn-icon" onclick="window.showVisitResults('${z(r.roundId)}')" title="Se resultat">📊</button></div><div class="visit-card-participants">${(r.participants||[]).map(z).join(", ")}</div>${r.winner?`<div class="visit-card-winner">🏆 ${z(r.winner)} (${r.winnerScore} pt)</div>`:""}`,e.appendChild(s)})}function Gi(n){const e=n.targets||[];let t=`
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
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t,m.approvedDraft.edit=[...n.approvedUsers||[]],Ga("edit")}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim().slice(0,100),e=document.getElementById("edit-cloc").value.trim().slice(0,100),t=document.getElementById("edit-cvisibility").value,r=t!=="public",s=t==="hidden",i=s?[...m.approvedDraft.edit]:[];if(!n)return;await st(se(X,"courses",m.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i}),m.currentCourse.name=n,m.currentCourse.location=e,m.currentCourse.private=r,m.currentCourse.hidden=s,m.currentCourse.approvedUsers=i;const o=m.courses.findIndex(c=>c.id===m.currentCourse.id);o>-1&&(m.courses[o]={...m.courses[o],name:n,location:e,private:r,hidden:s,approvedUsers:i}),Nt(),Ki(),document.getElementById("course-detail-title").textContent=n+(r?" (Banen er kun for medlemmer)":""),ee("Gemt!","success")};window.updateTargetField=function(n,e,t){var r;(r=m.currentCourse)!=null&&r.targets&&(m.currentCourse.targets[n][e]=t)};window.addTargetToCurrentCourse=async function(){if(!m.currentCourse)return;const n=[...m.currentCourse.targets||[]];n.push({number:n.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await st(se(X,"courses",m.currentCourse.id),{targets:n}),m.currentCourse.targets=n,Gi(m.currentCourse),ee(`Mål ${n.length} tilføjet!`,"success")};window.deleteTargetFromCourse=function(n){var e;(e=m.currentCourse)!=null&&e.targets&&Is(`Slet mål ${n+1}?`,async()=>{try{const t=[...m.currentCourse.targets];t.splice(n,1),t.forEach((r,s)=>r.number=s+1),await st(se(X,"courses",m.currentCourse.id),{targets:t,numTargets:t.length}),m.currentCourse.targets=t,m.currentCourse.numTargets=t.length,Gi(m.currentCourse)}catch{ee("Fejl: Kunne ikke slette mål","error")}})};window.setTargetGps=async function(n){var e;if((e=m.currentCourse)!=null&&e.targets)try{const t=await Ka();m.currentCourse.targets[n].gps=t,await st(se(X,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),Gi(m.currentCourse),ee(`GPS sat for mål ${n+1}!`,"success")}catch(t){ee("GPS fejl: "+t.message,"error")}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await P_(t),s=zg(y_,`courses/${m.currentCourse.id}/target_${n}.jpg`);await Kg(s,r,"base64",{contentType:"image/jpeg"});const i=await Gg(s);m.currentCourse.targets[n].imageUrl=i,await st(se(X,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),Gi(m.currentCourse),ee("Foto gemt!","success")}catch(r){ee("Upload fejl: "+r.message,"error")}};window.saveAllTargets=async function(){var n;(n=m.currentCourse)!=null&&n.targets&&(await st(se(X,"courses",m.currentCourse.id),{targets:m.currentCourse.targets}),ee("Alle mål gemt!","success"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&m.courseMap&&setTimeout(()=>m.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await Ka();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(m.courseMap),m.courseMap.panTo([e.lat,e.lng])}catch{ee("GPS ikke tilgængeligt","error"),n.classList.remove("on")}};window.doDeleteCourse=function(){if(!m.currentCourse)return;const n=m.currentCourse.id,e=m.currentCourse.name;Is(`Slet banen "${e}"?`,async()=>{try{await Wt(se(X,"courses",n)),m.courses=m.courses.filter(t=>t.id!==n),m.currentCourse=null,Nt(),Ki(),window.populateCourseDropdown(),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"),ee("Bane slettet","success")}catch{ee("Fejl: Kunne ikke slette bane","error")}})};const da={new:"new-course-approved",edit:"edit-capproved"};function Ga(n){const e=m.approvedDraft[n];document.getElementById(`${da[n]}-chips`).innerHTML=e.length?e.map(t=>`<span class="approved-chip">${z(t)}<span class="approved-chip-remove" onclick="removeApprovedEmail('${n}','${z(t)}')">✕</span></span>`).join(""):'<span class="approved-empty">Ingen godkendt endnu</span>'}function R_(n,e){const t=e.trim().toLowerCase();!t||!t.includes("@")||(m.approvedDraft[n].includes(t)||m.approvedDraft[n].push(t),Ga(n))}window.removeApprovedEmail=function(n,e){m.approvedDraft[n]=m.approvedDraft[n].filter(t=>t!==e),Ga(n)};window.addApprovedEmailManual=function(n){const e=document.getElementById(`${da[n]}-manual`);R_(n,e.value),e.value=""};window.searchApprovedUsers=async function(n,e){const t=document.getElementById(`${da[n]}-ac`);if(!e.trim()){t.classList.add("hidden");return}let r=[];try{r=(await nt(Ke(X,"users"))).docs.map(i=>i.data()).map(i=>({name:i.name||i.yam||i.email||"—",email:(i.email||i["e-mail"]||"").toLowerCase()})).filter(i=>i.email&&(i.name.toLowerCase().includes(e.toLowerCase())||i.email.includes(e.toLowerCase())))}catch(s){console.warn(s)}if(!r.length){t.classList.add("hidden");return}t.innerHTML=r.map(s=>`<div class="ac-item" data-email="${z(s.email)}">${z(s.name)} <span style='font-size:11px;opacity:.6'>${z(s.email)}</span></div>`).join(""),t.querySelectorAll(".ac-item").forEach(s=>s.addEventListener("click",()=>{R_(n,s.dataset.email),document.getElementById(`${da[n]}-search`).value="",t.classList.add("hidden")})),t.classList.remove("hidden")};window.openCreateCourseModal=function(){m.approvedDraft.new=[],Ga("new"),document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",document.getElementById("create-course-modal").classList.remove("hidden")};window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim().slice(0,100),e=document.getElementById("new-course-loc").value.trim().slice(0,100),t=document.getElementById("new-course-visibility").value,r=t!=="public",s=t==="hidden",i=s?[...m.approvedDraft.new]:[],o=document.getElementById("new-course-targets"),c=(o.value==="custom"?Number(document.getElementById("new-course-targets-custom").value):Number(o.value))||24;if(!n)return;const l=Array.from({length:c},(u,h)=>({number:h+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));try{const u=m.user.uid,h=await Ag(Ke(X,"courses"),{name:n,yam:n,numTargets:c,antalMål:c,location:e,beliggenhed:e,targets:l,mål:l,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i,ownerId:u,created:pt(),visits:[],besøg:[]});m.courses.unshift({id:h.id,name:n,numTargets:c,location:e,targets:l,visits:[],private:r,hidden:s,approvedUsers:i,ownerId:u}),Nt(),Ki(),window.populateCourseDropdown(),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value="",document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved-wrap").style.display="none",ee("Bane oprettet!","success")}catch{ee("Fejl: Kunne ikke oprette bane","error")}};async function ku(n,e,t){const r=se(X,"courses",n),s=await Si(r);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await st(r,{targets:o,mål:o})}function P_(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,l=i.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const u=document.createElement("canvas");u.width=c,u.height=l,u.getContext("2d").drawImage(i,0,0,c,l),e(u.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},r.onerror=t,r.readAsDataURL(n)})}async function CR(n,e){const t=se(X,"courses",n),r=await Si(t);if(!r.exists())return;const s=(r.data().visits||[]).filter(o=>o.roundId!==e);await st(t,{visits:s});const i=m.courses.find(o=>o.id===n);i&&(i.visits=s)}let Zs=[];async function kR(){if(m.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{await Du()}catch(n){console.warn(n)}if(m.isSuperAdmin){document.getElementById("users-section").classList.remove("hidden");try{Zs=(await nt(Ke(X,"users"))).docs.map(e=>({uid:e.id,...e.data()})).sort((e,t)=>(e.name||e.yam||"").localeCompare(t.name||t.yam||"","da")),C_()}catch(n){console.warn(n)}}}}async function Du(){const n=document.getElementById("admins-list");if(!n)return;n.innerHTML='<div class="admin-hint">Henter admins…</div>';const e=await nt(Ke(X,"admins"));if(e.empty){n.innerHTML='<div class="admin-hint">Ingen admins fundet</div>';return}n.innerHTML='<div class="admin-list-label">NUVÆRENDE ADMINISTRATORER</div>',e.docs.forEach(t=>{var o;const r=document.createElement("div");r.className="admin-row";const s=t.data().email||t.id,i=t.id===((o=m.user)==null?void 0:o.uid);if(r.innerHTML=`<span class="admin-row-email">${z(s)}${i?' <span class="admin-you-tag">(dig)</span>':""}</span>`,m.isSuperAdmin&&!i){const c=document.createElement("button");c.className="btn btn-dark btn-sm admin-remove-btn",c.textContent="Fjern",c.onclick=()=>doRemoveAdmin(t.id,s),r.appendChild(c)}n.appendChild(r)})}const Cc=[{label:"Sidste 7 dage",ms:7*864e5},{label:"Sidste 30 dage",ms:30*864e5},{label:"Sidste 365 dage",ms:365*864e5}];window.loadUsageStats=async function(){const n=document.getElementById("usage-stats-result");if(n){n.textContent="Henter…";try{const e=await nt(rA(X,"runder")),t=Date.now(),r=Cc.map(()=>0);let s=0;e.forEach(o=>{var u,h;s++;const c=(h=(u=o.data().dato)==null?void 0:u.toDate)==null?void 0:h.call(u);if(!c)return;const l=t-c.getTime();Cc.forEach((p,_)=>{l<=p.ms&&r[_]++})});const i=Cc.map((o,c)=>`<div class="usage-stat-row"><span>${z(o.label)}</span><b>${r[c]}</b></div>`).join("");n.innerHTML=`${i}<div class="usage-stat-row usage-stat-total"><span>I alt registreret</span><b>${s}</b></div>`}catch(e){n.textContent="Fejl: "+e.message}}};const DR={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"};function C_(n=""){const e=document.getElementById("users-list");e.innerHTML="";const t=n.toLowerCase(),r=t?Zs.filter(c=>(c.name||c.yam||"").toLowerCase().includes(t)||(c.email||c["e-mail"]||"").toLowerCase().includes(t)):Zs;document.getElementById("users-count").textContent=`${Zs.length} brugere`;const s=document.getElementById("users-summary"),i={};Zs.forEach(c=>{const l=c.bueklasse||"Ukendt";i[l]=(i[l]||0)+1});const o=Object.entries(i).sort((c,l)=>l[1]-c[1]).map(([c,l])=>`<span class="bow-chip"><b>${l}</b> ${z(DR[c]||c)}</span>`).join("");s.innerHTML=`<div class="bow-chips-wrap">${o}</div>`,r.forEach(c=>{var _;const l=document.createElement("div");l.className="urow";const u=(_=c.created)!=null&&_.toDate?c.created.toDate().toLocaleDateString("da-DK"):"—",h=c.bueklasse||"",p=c.kon==="m"?"♂":c.kon==="k"?"♀":"";l.innerHTML=`<span class="un">${z(c.name||c.yam||"—")}</span><span class="ue">${z(c.email||c["e-mail"]||"")}</span><span class="ubow">${z(h)}${p?` ${z(p)}`:""}</span><span class="ud">${z(u)}</span>`,e.appendChild(l)})}window.filterUsers=function(n){C_(n)};window.doAddAdmin=async function(){if(!m.isSuperAdmin)return;const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await nt(Ke(X,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){ee("Bruger ikke fundet","error");return}await Fn(se(X,"admins",t.id),{email:n,created:pt()}),ee(`${t.data().name||n} er nu admin`,"success"),document.getElementById("admin-email").value="",await Du()}catch(e){ee("Fejl: "+e.message,"error")}};window.doRemoveAdmin=async function(n,e){if(m.isSuperAdmin&&confirm(`Fjern ${e} som administrator?`))try{await Wt(se(X,"admins",n)),ee(`${e} er fjernet som admin`,"success"),await Du()}catch(t){ee("Fejl: "+t.message,"error")}};function NR(n){const e=Qt(n.ruleset);return'<div class="dist-grid">'+n.shooters.map(t=>{const r=Ru(t.scores),s=tt(t.scores),i=t.scores.flat().filter(l=>l!=null),o=i.length?(i.reduce((l,u)=>l+Oe(u),0)/i.length).toFixed(2):"—";let c="";if(e>=2){const l=t.scores.map(_=>(_||[])[0]).filter(_=>_!=null),u=t.scores.map(_=>(_||[])[1]).filter(_=>_!=null),h=l.length?(l.reduce((_,v)=>_+Oe(v),0)/l.length).toFixed(2):"—",p=u.length?(u.reduce((_,v)=>_+Oe(v),0)/u.length).toFixed(2):"—";c=`<div class="dist-row"><span>Snit pil 1</span><span>${h}</span></div><div class="dist-row"><span>Snit pil 2</span><span>${p}</span></div>`}return`<div class="dist-card"><div class="dist-name">${z(t.name)}</div><div class="dist-row dist-row-total"><span>Total</span><span>${s} pt</span></div>${c}<div class="dist-row dist-row-border"><span>Samlet snit</span><span>${o}</span></div>${Object.entries(r).map(([l,u])=>`<div class="dist-row"><span>${l}</span><span>${u}x</span></div>`).join("")}</div>`}).join("")+"</div>"}function xR(n){const e=Pu(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${z((e==null?void 0:e.name)||"—")}</div><div class="win-score">${e?tt(e.scores):0} point</div>`,document.getElementById("res-table").innerHTML=k_(n),document.getElementById("res-dist").innerHTML=NR(n)}function k_(n){const e=(n.startTarget||1)-1,t=Qt(n.ruleset);let r=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${n.shooters.map(s=>`<th>${s.name}</th>`).join("")}</tr>`;for(let s=0;s<n.numTargets;s++)r+=`<tr><td class="tc">${s===e?'<span class="start-target-dot"></span>':""}${s+1}</td>`,n.shooters.forEach(o=>{const c=o.scores[s]||Array(t).fill(null),l=c.reduce((u,h)=>u+(h!=null&&h!=="M"?Number(h):0),0);r+=`<td>${c.map(u=>u??"—").join("/")}<br><small>${l}</small></td>`}),r+="</tr>";return r+=`<tr class="tr-tot"><td class="tc">Total</td>${n.shooters.map(s=>`<td>${tt(s.scores)}</td>`).join("")}</tr></table></div>`,r}function VR(n){const e=["11","10","8","5","M"],t=Qt(n.ruleset);return n.shooters.map(r=>{const s=tt(r.scores),i=r.scores.flat().filter(h=>h!=null),o=i.length,c=o?(i.reduce((h,p)=>h+Oe(p),0)/o).toFixed(2):"—",l=Ru(r.scores);let u="";if(t>=2){const h=r.scores.map(A=>(A||[])[0]).filter(A=>A!=null),p=r.scores.map(A=>(A||[])[1]).filter(A=>A!=null),_=h.length?(h.reduce((A,k)=>A+Oe(k),0)/h.length).toFixed(2):"—",v=p.length?(p.reduce((A,k)=>A+Oe(k),0)/p.length).toFixed(2):"—";u=`<div class="summary-stats-row2">
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${_}</div>
          <div class="summary-stat-lbl">SNIT PIL 1</div>
        </div>
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${v}</div>
          <div class="summary-stat-lbl">SNIT PIL 2</div>
        </div>
      </div>`}return`<div class="summary-card">
      <div class="summary-card-name">${z(r.name)}</div>
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
    </div>`}).join("")}function LR(n){const e=Qt(n.ruleset),t=n.shooters.map(s=>{const i=s.scores.filter(p=>{const _=p||Array(e).fill(null);return _.length>=e&&_.slice(0,e).every(v=>v!==null)});if(!i.length||i.length===n.numTargets)return null;const o=i.flat().filter(p=>p!==null),c=o.reduce((p,_)=>p+Oe(_),0),l=o.length,u=l?(c/l).toFixed(2):0,h=i.length?(c/i.length).toFixed(1):0;return{name:s.name,shot:i.length,total:c,avgPil:u,avgMaal:h}}).filter(Boolean);return t.length?`<div class="actual-results-wrap"><div class="actual-results-title">Kun skudte mål</div><div class="actual-results-cards">${t.map(s=>`<div class="actual-card"><div class="actual-card-name">${s.name}</div><div class="actual-card-sub">${s.shot} af ${n.numTargets} mål</div><div class="actual-card-total">${s.total}</div><div class="actual-card-total-lbl">POINT</div><div class="actual-card-avgs"><div><div class="actual-avg-val">${s.avgPil}</div><div class="actual-avg-lbl">SNT/PIL</div></div><div><div class="actual-avg-val">${s.avgMaal}</div><div class="actual-avg-lbl">SNT/MÅL</div></div></div></div>`).join("")}</div></div>`:""}function ha(){const n=document.getElementById("rounds-list");if(!m.rounds.length){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}n.innerHTML="",m.rounds.forEach(e=>{const t=(e.shooters||[]).map(l=>({...l,scores:Tr(l.scores)})),r=t.length?Pu(t):null,s=e.created,i=s!=null&&s.toDate?s.toDate().toLocaleDateString("da-DK"):s!=null&&s.seconds?new Date(s.seconds*1e3).toLocaleDateString("da-DK"):typeof s=="number"?new Date(s).toLocaleDateString("da-DK"):"—",o=document.createElement("div");o.className="rcard";const c=e.ruleset&&e.ruleset!=="WA"?` · <span class="rcard-ruleset-tag">${z(e.ruleset)}</span>`:"";o.innerHTML=`<div class="rcard-info"><div class="rcard-name">${z(e.name||"Runde")}</div><div class="rcard-meta"><span class="rcard-date">${z(i)}</span> · ${z(e.courseName||e.numTargets+" mål")}${c}</div><div class="rcard-win">🏆 ${z((r==null?void 0:r.name)||"—")} (${r?tt(r.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser">📈</button><button class="del-btn" data-id="${z(e.id)}">✕</button>`,o.querySelector(".rcard-info").onclick=()=>Nu({...e,shooters:t}),o.querySelector(".rcard-analyse").onclick=()=>window.analyseRound(e.id),o.querySelector(".del-btn").onclick=l=>{const u=l.currentTarget,h=`r-${e.id}`;m.deleteConfirm[h]?(delete m.deleteConfirm[h],m.rounds=m.rounds.filter(p=>p.id!==e.id),Nt(),ha(),m.user&&Wt(se(X,"users",m.user.uid,"rounds",e.id)).catch(p=>console.warn(p)),m.user&&e.courseId&&Wt(se(X,"bane_stats",e.courseId,"runder",e.id)).catch(p=>console.warn(p)),e.courseId&&CR(e.courseId,e.id).catch(p=>console.warn(p))):(m.deleteConfirm[h]=!0,u.classList.add("conf"),u.textContent="Slet?",setTimeout(()=>{delete m.deleteConfirm[h],u.classList.remove("conf"),u.textContent="✕"},3e3))},n.appendChild(o)})}function Nu(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),m.rpopMap&&(m.rpopMap.remove(),m.rpopMap=null);const t=n.gpsRoute||n.route||null,r=n.gpsDuration||n.duration||null,s=n.gpsDistance||n.distance||null,i=r?b_(r):null,o=s?A_(s):null,c=o||i?`<div class="rpop-gps-row">${o?`<div class="rpop-gps-box"><div class="rpop-gps-val">${o}</div><div class="rpop-gps-lbl">DISTANCE</div></div>`:""}${i?`<div class="rpop-gps-box"><div class="rpop-gps-val">${i}</div><div class="rpop-gps-lbl">TID</div></div>`:""}</div>${t?'<div id="rpop-map"></div>':""}`:"";if(document.getElementById("rpop-body").innerHTML=`<h3 class="rpop-title">${z(n.name)}</h3>${c}`+VR(n)+k_(n)+LR(n)+'<button class="btn btn-gold rpop-send-btn" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>',t){const l=T_(t);l.length&&setTimeout(()=>{const u=document.getElementById("rpop-map");if(!u)return;m.rpopMap=window.L.map(u),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(m.rpopMap);const h=window.L.polyline(l.map(p=>[p.lat,p.lng]),{color:"#e8a020",weight:3}).addTo(m.rpopMap);m.rpopMap.fitBounds(h.getBounds(),{padding:[20,20]})},50)}}window.sendResults=async function(n){if(!n){ee("Ingen runde at sende","error");return}const e=new Date().toLocaleDateString("da-DK");let t=`3D Bueskydning - Resultater
`;t+="Dato: "+e+`
`,n.courseName&&(t+="Bane: "+n.courseName+`
`),t+=`
--- RESULTATER ---
`,[...n.shooters].sort((l,u)=>tt(u.scores)-tt(l.scores)).forEach((l,u)=>{t+=`
`+(u+1)+". "+l.name+": "+tt(l.scores)+" point"}),t+=`

--- DETALJERET ---
`;const s=Qt(n.ruleset);n.shooters.forEach(l=>{t+=`
`+l.name+`:
`;for(let _=0;_<n.numTargets;_++){const v=l.scores[_]||Array(s).fill(null),A=v.reduce((k,C)=>k+(C!=null&&C!=="M"?Number(C):0),0);t+="  Mål "+(_+1)+": "+v.map(k=>k??"-").join("+")+" = "+A+`
`}const u=l.scores.flat().filter(_=>_!=null),h=u.length?(u.reduce((_,v)=>_+Oe(v),0)/u.length).toFixed(2):"—",p=Ru(l.scores);if(t+="  Total: "+tt(l.scores)+` point
`,s>=2){const _=l.scores.map(C=>(C||[])[0]).filter(C=>C!=null),v=l.scores.map(C=>(C||[])[1]).filter(C=>C!=null),A=_.length?(_.reduce((C,L)=>C+Oe(L),0)/_.length).toFixed(2):"—",k=v.length?(v.reduce((C,L)=>C+Oe(L),0)/v.length).toFixed(2):"—";t+="  Snit pil 1: "+A+" | Snit pil 2: "+k+" | Samlet snit: "+h+`
`}else t+="  Samlet snit: "+h+`
`;t+="  Fordeling: "+Object.entries(p).map(([_,v])=>_+":"+v+"x").join("  ")+`
`}),n.id&&(t+=`

Se resultater i appen:
https://bsk65.github.io/3D/?round=${n.id}
(Kræver login med din bruger)`);const i=n.shooters.map(l=>{var u;return(u=m.friends.find(h=>h.id===l.id))==null?void 0:u.email}).filter(Boolean),o="3D Bueskydning - "+n.name,c="mailto:"+i.join(",")+"?subject="+encodeURIComponent(o)+"&body="+encodeURIComponent(t);window.location.href=c};const D_="archery_meetups_seen",MR={afventer:"Afventer",tilmeldt:"Tilmeldt ✅",foreslået:"Foreslår andet tidspunkt 🕓",afvist:"Afbud ❌"};function kc(n){if(!n)return"";const[e,t,r]=n.split("-");return e&&t&&r?`${r}-${t}-${e}`:n}let qe=new Map,zi="venner",ei=null,N_=null,xu=null,x_=null;async function Vu(){if(m.user)try{const n=[nt(la(Ke(X,"meetups"),ci("creatorUid","==",m.user.uid))),nt(la(Ke(X,"meetups"),ci("invitedUids","array-contains",m.user.uid)))];m.isSuperAdmin&&n.push(nt(Ke(X,"meetups")));const e=await Promise.all(n),t=new Map;e.forEach(r=>r.docs.forEach(s=>t.set(s.id,{id:s.id,...s.data()}))),m.meetups=[...t.values()].sort((r,s)=>`${r.date}${r.time}`.localeCompare(`${s.date}${s.time}`))}catch(n){console.warn("Hent meetups:",n)}}function OR(n,e){return n.filter(t=>{var s,i;return(((i=(s=t.updatedAt)==null?void 0:s.toMillis)==null?void 0:i.call(s))??(typeof t.updatedAt=="number"?t.updatedAt:0))>e}).length}function Hi(){const n=document.getElementById("meetup-badge");if(!n)return;const e=Number(localStorage.getItem(D_)||0),t=OR(m.meetups,e);n.classList.toggle("hidden",t===0),n.textContent=t}function FR(){localStorage.setItem(D_,String(Date.now())),Hi()}function Vt(){const n=document.getElementById("meetups-list");if(!n)return;const e=new Date().toISOString().slice(0,10),t=m.meetups.filter(r=>r.date>=e);if(!t.length){n.innerHTML='<div class="empty"><div class="empty-icon">🏹</div>Ingen planlagte skydninger endnu</div>';return}n.innerHTML="",t.forEach(r=>n.appendChild(BR(r)))}function BR(n){var u;const e=document.createElement("div");e.className="meetup-card"+(n.status==="aflyst"?" meetup-cancelled":"");const t=n.creatorUid===((u=m.user)==null?void 0:u.uid),r=(n.participants||[]).find(h=>{var p;return h.uid===((p=m.user)==null?void 0:p.uid)}),s=m.isSuperAdmin&&!t&&!r,i=(n.participants||[]).map(h=>{const p=h.status==="foreslået"&&h.proposedDate?` → ${z(kc(h.proposedDate))} ${z(h.proposedTime||"")}`:"";return`<div class="meetup-partrow"><span>${z(h.name)}</span><span class="meetup-status meetup-status-${z(h.status)}">${z(MR[h.status]||h.status)}${p}</span></div>`}).join(""),o=(n.comments||[]).map(h=>`<div class="meetup-comment"><b>${z(h.name)}:</b> ${z(h.text)}</div>`).join("");let c="";n.status!=="aflyst"&&(r&&(r.status!=="tilmeldt"&&(c+=`<button class="btn btn-gold btn-sm" onclick="joinMeetup('${n.id}')">Tilmeld</button>`),c+=`<button class="btn btn-dark btn-sm" onclick="openProposeTimeModal('${n.id}')">Foreslå andet tidspunkt</button>`,r.status!=="afvist"&&(c+=`<button class="btn btn-dark btn-sm" onclick="declineMeetup('${n.id}')">Afbud</button>`)),t&&((n.participants||[]).filter(h=>h.status==="foreslået"&&h.proposedDate).forEach(h=>{c+=`<button class="btn btn-gold btn-sm" onclick="acceptProposedTime('${n.id}','${h.uid}')">Accepter ${z(kc(h.proposedDate))} ${z(h.proposedTime||"")} (${z(h.name)})</button>`}),c+=`<button class="btn btn-dark btn-sm" onclick="openEditMeetupModal('${n.id}')">Rediger tidspunkt</button>`,c+=`<button class="btn btn-dark btn-sm" onclick="cancelMeetup('${n.id}')">Aflys</button>`,c+=`<button class="btn btn-red btn-sm" onclick="deleteMeetup('${n.id}')">Slet</button>`)),e.innerHTML=`
    ${n.status==="aflyst"?'<div class="meetup-cancelled-banner">❌ Aflyst</div>':""}
    ${s?'<div class="meetup-notinvited-banner">👁 Du er ikke inviteret — vises kun for superadmin</div>':""}
    <div class="meetup-head">
      <div class="meetup-title">${z(n.courseName)}</div>
      <div class="meetup-when">${z(kc(n.date))} kl. ${z(n.time)}</div>
      <div class="meetup-creator">Oprettet af ${z(n.creatorName)}</div>
    </div>
    <div class="meetup-participants">${i}</div>
    <div class="meetup-actions">${c}</div>
    <div class="meetup-comments">${o}</div>
    <div class="meetup-comment-add">
      <input type="text" placeholder="Skriv en kommentar…" class="meetup-comment-input" maxlength="300" />
      <button class="btn btn-dark btn-sm meetup-comment-send">Send</button>
    </div>
  `;const l=e.querySelector(".meetup-comment-input");return e.querySelector(".meetup-comment-send").addEventListener("click",()=>{$R(n.id,l.value),l.value=""}),e}window.openMeetupModal=function(){if(!m.courses.length){ee("Ingen baner tilgængelige","error");return}qe=new Map,zi="venner",ei=null,xu=null,document.getElementById("mu-course-display").value="",document.getElementById("mu-course-list").classList.add("hidden"),UR(),document.getElementById("mu-date").value="",document.getElementById("mu-time").value="",document.getElementById("mu-comment").value="",document.querySelectorAll(".mu-pool-tab").forEach(n=>n.classList.toggle("active",n.dataset.pool==="venner")),Wi(),za(),document.getElementById("meetup-modal").classList.remove("hidden")};window.toggleMeetupCourseList=function(){document.getElementById("mu-course-list").classList.toggle("hidden")};function UR(){const n=document.getElementById("mu-course-list");n.innerHTML="",m.courses.forEach(e=>{const t=document.createElement("div");t.className="ac-item",t.textContent=e.name||e.yam||"",t.addEventListener("click",()=>{xu=e.id,document.getElementById("mu-course-display").value=e.name||e.yam||"",n.classList.add("hidden")}),n.appendChild(t)})}window.toggleMeetupPool=function(n){zi=n,document.querySelectorAll(".mu-pool-tab").forEach(e=>e.classList.toggle("active",e.dataset.pool===n)),Wi()};async function hl(){if(!ei)try{ei=(await nt(Ke(X,"users"))).docs.map(e=>({uid:e.id,name:e.data().name||e.data().yam||e.data().email||"—"}))}catch(n){console.warn(n),ei=[]}return ei}async function V_(){if(zi==="venner"){const e=new Set((await hl()).map(t=>t.uid));return m.friends.map(t=>({uid:t.id,name:t.name,registered:e.has(t.id)})).sort((t,r)=>t.name.localeCompare(r.name,"da"))}return(await hl()).filter(e=>{var t;return e.uid!==((t=m.user)==null?void 0:t.uid)}).map(e=>({...e,registered:!0})).sort((e,t)=>e.name.localeCompare(t.name,"da"))}async function Wi(){const n=document.getElementById("mu-invitee-list");if(!n)return;const e=await V_();if(n.innerHTML="",!e.length){n.innerHTML=`<div class="empty"><div class="empty-icon">👤</div>${zi==="venner"?"Du har ingen venner endnu":"Ingen andre registrerede brugere"}</div>`;return}e.forEach(t=>{const r=document.createElement("label");r.className="mu-invitee-row"+(t.registered===!1?" mu-invitee-unregistered":"");const s=document.createElement("input");s.type="checkbox",s.checked=qe.has(t.uid);const i=document.createElement("span");if(i.textContent=t.name,r.appendChild(s),r.appendChild(i),t.registered===!1){s.disabled=!0;const o=document.createElement("span");o.className="mu-invitee-note",o.textContent="ikke registreret i appen",r.appendChild(o)}else s.addEventListener("change",()=>L_(t.uid,t.name));n.appendChild(r)})}function L_(n,e){qe.has(n)?qe.delete(n):qe.set(n,{uid:n,name:e}),za(),Wi()}window.toggleSelectAllMeetup=async function(){const n=(await V_()).filter(t=>t.registered!==!1);if(!n.length)return;n.every(t=>qe.has(t.uid))?n.forEach(t=>qe.delete(t.uid)):n.forEach(t=>qe.set(t.uid,t)),za(),Wi()};function za(){const n=document.getElementById("mu-selected-chips");if(n){if(n.innerHTML="",!qe.size){n.innerHTML='<div class="mu-chips-empty">Ingen modtagere valgt endnu</div>';return}[...qe.values()].forEach(e=>{const t=document.createElement("div");t.className="pchip";const r=document.createElement("span");r.className="pchip-name",r.textContent=e.name;const s=document.createElement("button");s.className="pchip-rm",s.textContent="✕",s.addEventListener("click",()=>L_(e.uid,e.name)),t.appendChild(r),t.appendChild(s),n.appendChild(t)})}}window.saveMeetup=async function(){var p,_;const n=m.courses.find(v=>v.id===xu),e=document.getElementById("mu-date").value,t=document.getElementById("mu-time").value;if(!n){ee("Vælg en bane","error");return}if(!e||!t){ee("Vælg dato og tid","error");return}if(!qe.size){ee("Vælg mindst én modtager","error");return}const r=new Set((await hl()).map(v=>v.uid)),s=[...qe.values()].filter(v=>!r.has(v.uid)).map(v=>v.name);if(s.length&&(s.forEach(v=>{const A=[...qe.entries()].find(([,k])=>k.name===v);A&&qe.delete(A[0])}),ee(`${s.join(", ")} er ikke registreret i appen og blev ikke inviteret`,"error"),za(),Wi(),!qe.size))return;const i=document.getElementById("mu-comment").value.trim().slice(0,300),o=[...qe.keys()],c=[...qe.values()].map(v=>({uid:v.uid,name:v.name,status:"afventer",proposedDate:null,proposedTime:null})),l=i?[{uid:m.user.uid,name:((p=m.profile)==null?void 0:p.name)||"—",text:i,createdAt:new Date}]:[],u=new Date(`${e}T${t}`);u.setDate(u.getDate()+1);const h={courseId:n.id,courseName:n.name||n.yam||"",date:e,time:t,creatorUid:m.user.uid,creatorName:((_=m.profile)==null?void 0:_.name)||"—",pool:zi,invitedUids:o,participants:c,comments:l,status:"åben",createdAt:pt(),updatedAt:pt(),expireAt:u};try{await Ag(Ke(X,"meetups"),h),document.getElementById("meetup-modal").classList.add("hidden"),ee("Forslag sendt","success"),await Vu(),Vt(),Hi()}catch(v){ee("Fejl: "+v.message,"error")}};async function M_(n,e){const t=m.meetups.find(s=>s.id===n);if(!t||!m.user)return;const r=(t.participants||[]).map(s=>s.uid===m.user.uid?{...s,status:e,proposedDate:null,proposedTime:null}:s);try{await st(se(X,"meetups",t.id),{participants:r,updatedAt:pt()}),t.participants=r,t.updatedAt=Date.now(),Vt()}catch(s){ee("Fejl: "+s.message,"error")}}window.joinMeetup=function(n){M_(n,"tilmeldt")};window.declineMeetup=function(n){M_(n,"afvist")};window.openProposeTimeModal=function(n){N_=n,document.getElementById("mu-propose-date").value="",document.getElementById("mu-propose-time").value="",document.getElementById("meetup-propose-modal").classList.remove("hidden")};window.saveProposeTime=async function(){const n=document.getElementById("mu-propose-date").value,e=document.getElementById("mu-propose-time").value;if(!n||!e){ee("Vælg dato og tid","error");return}const t=m.meetups.find(s=>s.id===N_);if(!t||!m.user)return;const r=(t.participants||[]).map(s=>s.uid===m.user.uid?{...s,status:"foreslået",proposedDate:n,proposedTime:e}:s);try{await st(se(X,"meetups",t.id),{participants:r,updatedAt:pt()}),t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-propose-modal").classList.add("hidden"),Vt()}catch(s){ee("Fejl: "+s.message,"error")}};window.acceptProposedTime=async function(n,e){var c;const t=m.meetups.find(l=>l.id===n);if(!t||t.creatorUid!==((c=m.user)==null?void 0:c.uid))return;const r=(t.participants||[]).find(l=>l.uid===e);if(!(r!=null&&r.proposedDate)||!(r!=null&&r.proposedTime))return;const s=r.proposedDate,i=r.proposedTime,o=t.participants.map(l=>l.uid===e?{...l,status:"tilmeldt",proposedDate:null,proposedTime:null}:{...l,status:"afventer",proposedDate:null,proposedTime:null});try{await st(se(X,"meetups",t.id),{date:s,time:i,participants:o,updatedAt:pt()}),t.date=s,t.time=i,t.participants=o,t.updatedAt=Date.now(),Vt(),ee("Nyt tidspunkt accepteret","success")}catch(l){ee("Fejl: "+l.message,"error")}};window.openEditMeetupModal=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||(x_=n,document.getElementById("mu-edit-date").value=e.date,document.getElementById("mu-edit-time").value=e.time,document.getElementById("meetup-edit-modal").classList.remove("hidden"))};window.saveEditMeetup=async function(){var s;const n=document.getElementById("mu-edit-date").value,e=document.getElementById("mu-edit-time").value;if(!n||!e){ee("Vælg dato og tid","error");return}const t=m.meetups.find(i=>i.id===x_);if(!t||t.creatorUid!==((s=m.user)==null?void 0:s.uid))return;const r=(t.participants||[]).map(i=>({...i,status:"afventer",proposedDate:null,proposedTime:null}));try{await st(se(X,"meetups",t.id),{date:n,time:e,participants:r,updatedAt:pt()}),t.date=n,t.time=e,t.participants=r,t.updatedAt=Date.now(),document.getElementById("meetup-edit-modal").classList.add("hidden"),Vt(),ee("Tidspunkt opdateret","success")}catch(i){ee("Fejl: "+i.message,"error")}};window.cancelMeetup=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||Is("Aflys denne skydning?",async()=>{try{await st(se(X,"meetups",e.id),{status:"aflyst",updatedAt:pt()}),e.status="aflyst",e.updatedAt=Date.now(),Vt()}catch(r){ee("Fejl: "+r.message,"error")}})};window.deleteMeetup=function(n){var t;const e=m.meetups.find(r=>r.id===n);!e||e.creatorUid!==((t=m.user)==null?void 0:t.uid)||Is("Slet denne skydning permanent? Det kan ikke fortrydes.",async()=>{try{await Wt(se(X,"meetups",e.id)),m.meetups=m.meetups.filter(r=>r.id!==n),Vt(),Hi()}catch(r){ee("Fejl: "+r.message,"error")}})};async function $R(n,e){var i;if(e=(e||"").trim().slice(0,300),!e||!m.user)return;const t=m.meetups.find(o=>o.id===n);if(!t)return;const r={uid:m.user.uid,name:((i=m.profile)==null?void 0:i.name)||"—",text:e,createdAt:new Date},s=[...t.comments||[],r];try{await st(se(X,"meetups",t.id),{comments:s,updatedAt:pt()}),t.comments=s,t.updatedAt=Date.now(),Vt()}catch(o){ee("Fejl: "+o.message,"error")}}const jR="BOJHqC2HeXd9Ru6EjuL7HEuAZuZ2MM86LPqPfVbeQsm8M8-wgT_u3QPWYFs0XN0vfMz_FS3rDgjXgCXXm0GkmZs",qR="/3D/sw.js";async function O_(){if(!("serviceWorker"in navigator))return null;try{return await navigator.serviceWorker.register(qR,{scope:"/3D/"})}catch(n){return console.warn("SW-registrering fejlede",n),null}}function KR(){return"Notification"in window&&Notification.permission==="default"}async function F_(){let n;try{n=await Notification.requestPermission()}catch(e){return console.warn("Notification.requestPermission fejlede",e),ee("Kunne ikke bede om tilladelse: "+e.message,"error"),!1}if(n==="denied")return ee("Notifikationer blokeret i browseren — skal ændres i browserens side-indstillinger","error"),!1;if(n!=="granted")return!1;try{if(!await v_||!Ci)return ee("Push-notifikationer understøttes ikke i denne browser","error"),!1;const t=await O_();if(!t)return ee("Kunne ikke registrere service worker","error"),!1;const r=await aR(Ci,{vapidKey:jR,serviceWorkerRegistration:t});return r?(await st(se(X,"users",m.user.uid),{fcmToken:r}),!0):(ee("Kunne ikke hente push-token","error"),!1)}catch(e){return console.warn("Push-opsætning fejlede",e),ee("Push-fejl: "+e.message,"error"),!1}}function GR(){"Notification"in window&&Notification.permission==="granted"&&F_()}function zR(){v_.then(n=>{!n||!Ci||cR(Ci,e=>{const t=e.data||{};ee(t.body||"Ny besked","info"),Vu().then(()=>{Vt(),Hi()}).catch(()=>{})})})}function Ef(n,e){var Q;const t=K=>{var G;return K.shooters.find(E=>E.id===e)||((G=K.shooters)==null?void 0:G[0])},r=n.map(K=>{const G=t(K);return G?tt(G.scores):null}).filter(K=>K!==null);let s=0,i=0,o=0,c=0,l=0;const u={11:0,10:0,8:0,5:0,M:0},h={11:0,10:0,8:0,5:0,M:0},p={11:0,10:0,8:0,5:0,M:0};n.forEach(K=>{const G=t(K);G&&(G.scores.forEach(E=>{E.forEach(y=>{y!=null&&(y==="M"?p.M++:p[Number(y)]=(p[Number(y)]||0)+1)})}),!(Qt(K.ruleset)<2)&&(l++,G.scores.forEach(E=>{E[0]!=null&&(E[0]==="M"?(u.M++,i++):(u[Number(E[0])]=(u[Number(E[0])]||0)+1,s+=Number(E[0]),i++)),E[1]!=null&&(E[1]==="M"?(h.M++,c++):(h[Number(E[1])]=(h[Number(E[1])]||0)+1,o+=Number(E[1]),c++))})))});const _=i?(s/i).toFixed(2):0,v=c?(o/c).toFixed(2):0,A=i+c?((s+o)/(i+c)).toFixed(2):0,k=((Q=n[0])==null?void 0:Q.numTargets)||24,L=Array.from({length:k},(K,G)=>{let E=0,y=0;return n.forEach(w=>{const T=t(w);if(!T)return;(T.scores[G]||[null,null]).forEach(R=>{R!=null&&(E+=Oe(R),y++)})}),y?E/y:null}).map((K,G)=>({v:K,i:G})).filter(K=>K.v!==null),F=L.length?L.reduce((K,G)=>K.v>G.v?K:G):null,U=L.length?L.reduce((K,G)=>K.v<G.v?K:G):null;return{myScores:r,p1avg:_,p2avg:v,pilAvg:A,distP1:u,distP2:h,distAll:p,bestTarget:F,worstTarget:U,waRoundCount:l}}function Tf(n){if(!n.length)return 0;const e=n.reduce((t,r)=>t+r,0)/n.length;return Math.sqrt(n.reduce((t,r)=>t+(r-e)**2,0)/n.length)}function HR(n){var l;const e=n.length;if(e<2)return{slope:0,intercept:((l=n[0])==null?void 0:l.y)||0};const t=n.reduce((u,h)=>u+h.x,0),r=n.reduce((u,h)=>u+h.y,0),s=n.reduce((u,h)=>u+h.x*h.y,0),i=n.reduce((u,h)=>u+h.x*h.x,0),o=e*i-t*t,c=o?(e*s-t*r)/o:0;return{slope:c,intercept:(r-c*t)/e}}function WR(n,e){var o,c;const t=((o=n.shooters)==null?void 0:o.find(l=>l.id===e))||((c=n.shooters)==null?void 0:c[0]);if(!t)return[];const r=n.numTargets||24,s=n.traversalOrder||Array.from({length:r},(l,u)=>u),i=[];for(let l=0;l<r;l++){const u=s[l];if(u===void 0)continue;const h=t.scores[u]||[null,null];let p=0,_=0;h.forEach(v=>{v!=null&&(p+=Oe(v),_++)}),_&&i.push(p/_)}return i}function QR(n,e){let t=1,r=0,s=0,i=0,o=1,c=0,l=0,u=0,h=0,p=0,_=0,v=0,A=0;const k=()=>{e.style.transformOrigin="0 0",e.style.transform=t>1?`translate(${r}px,${s}px) scale(${t})`:""};n.addEventListener("touchstart",L=>{if(L.preventDefault(),L.touches.length===2){const F=L.touches,U=n.getBoundingClientRect();i=Math.hypot(F[0].clientX-F[1].clientX,F[0].clientY-F[1].clientY),o=t,c=r,l=s,u=(F[0].clientX+F[1].clientX)/2-U.left,h=(F[0].clientY+F[1].clientY)/2-U.top}else L.touches.length===1&&(p=L.touches[0].clientX,_=L.touches[0].clientY,v=r,A=s)},{passive:!1}),n.addEventListener("touchmove",L=>{if(L.preventDefault(),L.touches.length===2){const F=L.touches,U=Math.hypot(F[0].clientX-F[1].clientX,F[0].clientY-F[1].clientY),Q=Math.min(8,Math.max(1,o*U/i)),K=(u-c)/o,G=(h-l)/o;r=u-K*Q,s=h-G*Q,t=Q,k()}else L.touches.length===1&&t>1&&(r=v+L.touches[0].clientX-p,s=A+L.touches[0].clientY-_,k())},{passive:!1}),n.addEventListener("touchend",()=>{t<1.05&&(t=1,r=0,s=0,k())},{passive:!0});let C=0;n.addEventListener("touchend",()=>{const L=Date.now();L-C<300&&(t=1,r=0,s=0,k()),C=L},{passive:!0})}let Ut=null,or=null;function JR(){const n=document.getElementById("graph-fs");n&&n.classList.add("hidden"),Ut&&(window.removeEventListener("resize",Ut),window.removeEventListener("orientationchange",Ut),Ut=null),or&&(document.removeEventListener("gesturestart",or),or=null)}window.closeGraphFs=JR;function YR(n){m.pendingAnalyseRound=n,document.getElementById("analyse-filter").value="specific",window.switchTab("analyse")}window.analyseRound=YR;function XR(n,e,t,r){const s=["11","10","8","5","M"],i={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333"},o=n.myScores[0]||0,c=t.myScores[0]||0,l=Math.abs(o-c),u='<div class="cmp-sep"></div>',h=(v,A,k)=>`<div style="font-size:11px;color:${k};margin-bottom:4px;">${z(A)}</div>
    ${v.waRoundCount?`<div class="cmp-pil-grid">
      <div><div class="cmp-pil-lbl">PIL 1</div><div class="cmp-pil-val">${v.p1avg}</div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">SNT/PIL</div><div class="cmp-pil-val-mid">${v.pilAvg}</div>
      </div>
      <div><div class="cmp-pil-lbl">PIL 2</div><div class="cmp-pil-val">${v.p2avg}</div></div>
    </div>`:'<div class="pil-best-note">Ikke relevant (ikke en WA-runde)</div>'}`,p=(v,A,k)=>v.bestTarget&&v.worstTarget?`<div style="font-size:11px;color:${k};margin-bottom:6px;">${z(A)}</div>
    <div class="cmp-target-grid">
      <div class="cmp-target-best">
        <div class="cmp-pil-lbl">BEDSTE</div>
        <div class="cmp-target-best-val">Mål ${v.bestTarget.i+1}</div>
        <div class="cmp-target-sub">⌀ ${v.bestTarget.v.toFixed(2)}</div>
      </div>
      <div class="cmp-target-worst">
        <div class="cmp-pil-lbl">SVÆRESTE</div>
        <div class="cmp-target-worst-val">Mål ${v.worstTarget.i+1}</div>
        <div class="cmp-target-sub">⌀ ${v.worstTarget.v.toFixed(2)}</div>
      </div>
    </div>`:"";let _="";return _+=`<div class="card card-mb16">
    <div class="cmp-section-title">SAMMENLIGNING</div>
    <div class="cmp-score-grid">
      <div>
        <div class="cmp-score-lbl-a">${z(e)}</div>
        <div class="cmp-score-val-a">${o}</div>
        <div class="cmp-score-unit">POINT</div>
      </div>
      <div class="cmp-vs">VS</div>
      <div>
        <div class="cmp-score-lbl-b">${z(r)}</div>
        <div class="cmp-score-val-b">${c}</div>
        <div class="cmp-score-unit">POINT</div>
      </div>
    </div>
    <div class="cmp-winner-line">${o>c?`${z(e)} vandt med ${l} point`:c>o?`${z(r)} vandt med ${l} point`:"Uafgjort!"}</div>
  </div>`,_+=`<div class="card card-mb16">
    <div class="cmp-section-title">PIL STATISTIK</div>
    ${h(n,e,"var(--acc)")}${u}${h(t,r,"#f0c030")}
  </div>`,(n.bestTarget||t.bestTarget)&&(_+=`<div class="card card-mb16">
      <div class="cmp-section-title">BEDSTE OG SVÆRESTE MÅL</div>
      ${p(n,e,"var(--acc)")}${u}${p(t,r,"#f0c030")}
    </div>`),_+=`<div class="card card-mb16">
    <div class="cmp-section-title">FORDELING PR. SCOREZONE</div>
    <div class="cmp-dist-grid">
      <div></div>
      ${s.map(v=>`<div style="text-align:center;font-weight:700;color:${i[v]};">${v}</div>`).join("")}
      <div class="cmp-dist-lbl-a">${z(e)}</div>
      ${s.map(v=>`<div class="cmp-dist-val">${n.distAll[v]||0}</div>`).join("")}
      <div class="cmp-dist-lbl-b">${z(r)}</div>
      ${s.map(v=>`<div class="cmp-dist-val">${t.distAll[v]||0}</div>`).join("")}
    </div>
  </div>`,_}window.renderAnalyse=function(){var xr,Vr,Lr,Mr,As,Ji,Yi,Ss,Or,Rs,Xi;const n=document.getElementById("analyse-content");if(!n)return;const e=document.getElementById("analyse-bane");if(e&&e.options.length<=1&&[...new Set(m.rounds.map(B=>B.courseId).filter(Boolean))].forEach(B=>{const Y=m.courses.find(j=>j.id===B);if(Y&&!Array.from(e.options).find(j=>j.value===B)){const j=document.createElement("option");j.value=B,j.textContent=Y.name,e.appendChild(j)}}),m.pendingAnalyseRound&&e){const V=m.rounds.find(B=>B.id===m.pendingAnalyseRound);V!=null&&V.courseId&&Array.from(e.options).some(B=>B.value===V.courseId)&&(e.value=V.courseId)}const t=((xr=document.getElementById("analyse-filter"))==null?void 0:xr.value)||"all",r=t==="all"?0:t==="lastround"?1:t==="specific"?0:Number(t),s=((Vr=document.getElementById("analyse-bane"))==null?void 0:Vr.value)||"all",i=Number((Lr=document.getElementById("analyse-antal"))==null?void 0:Lr.value)||0,o=document.getElementById("analyse-runde-wrap"),c=document.getElementById("analyse-runde"),l=document.getElementById("analyse-runde-wrap-2"),u=document.getElementById("analyse-runde-2"),h=document.getElementById("analyse-runde-lbl"),p=t==="compare";o&&(o.style.display=t==="specific"||p?"":"none"),l&&(l.style.display=p?"":"none"),h&&(h.style.display=p?"":"none");const _=V=>{const B=V.created;return B!=null&&B.toDate?B.toDate().toLocaleDateString("da-DK"):B!=null&&B.seconds?new Date(B.seconds*1e3).toLocaleDateString("da-DK"):typeof B=="number"?new Date(B).toLocaleDateString("da-DK"):"—"},v=((Mr=document.getElementById("analyse-ruleset"))==null?void 0:Mr.value)||"all",A=(V,B)=>{let Y=s==="all"?m.rounds:m.rounds.filter(q=>q.courseId===s);v!=="all"&&(Y=Y.filter(q=>(q.ruleset||"WA")===v));const j=V.value;V.innerHTML=`<option value="">${B}</option>`,Y.forEach(q=>{const ie=document.createElement("option");ie.value=q.id,ie.textContent=`${_(q)} — ${q.name||"Runde"}`,V.appendChild(ie)}),Y.some(q=>q.id===j)&&(V.value=j)};if((t==="specific"||p)&&c&&(A(c,"Vælg runde..."),m.pendingAnalyseRound&&(c.value=m.pendingAnalyseRound,m.pendingAnalyseRound=null)),p&&u&&A(u,"Vælg runde 2..."),p){const V=c==null?void 0:c.value,B=u==null?void 0:u.value;if(!V||!B){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Vælg to runder ovenfor</div>';return}const Y=m.rounds.map(de=>({...de,shooters:(de.shooters||[]).map(we=>({...we,scores:Tr(we.scores)}))})),j=Y.find(de=>de.id===V),q=Y.find(de=>de.id===B);if(!j||!q){n.innerHTML='<div class="empty">Kunne ikke finde runderne</div>';return}const ie=`${j.name||"Runde"} (${_(j)})`,me=`${q.name||"Runde"} (${_(q)})`;n.innerHTML=XR(Ef([j],(As=m.user)==null?void 0:As.uid),ie,Ef([q],(Ji=m.user)==null?void 0:Ji.uid),me);return}const k=m.rounds.map(V=>({...V,shooters:(V.shooters||[]).map(B=>({...B,scores:Tr(B.scores)}))})),C=((Yi=document.getElementById("analyse-completed-only"))==null?void 0:Yi.checked)||!1,L=((Ss=document.getElementById("analyse-startat1-only"))==null?void 0:Ss.checked)||!1,F=V=>{var j,q;const B=((j=V.shooters)==null?void 0:j.find(ie=>{var me;return ie.id===((me=m.user)==null?void 0:me.uid)}))||((q=V.shooters)==null?void 0:q[0]);if(!B)return!1;const Y=V.numTargets||24;for(let ie=0;ie<Y;ie++){const me=B.scores[ie]||[null,null];if(me[0]==null&&me[1]==null)return!1}return!0},U=V=>V.startTarget===1,Q=v;let K=s==="all"?k:k.filter(V=>V.courseId===s);if(Q!=="all"&&(K=K.filter(V=>(V.ruleset||"WA")===Q)),C&&(K=K.filter(F)),L&&(K=K.filter(U)),t==="specific"){const V=c==null?void 0:c.value;K=V?K.filter(B=>B.id===V):[]}const G=i||r,E=G&&t!=="specific"?K.slice(0,G):K;if(!E.length){n.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}const y=V=>{var B;return V.shooters.find(Y=>{var j;return Y.id===((j=m.user)==null?void 0:j.uid)})||((B=V.shooters)==null?void 0:B[0])},w=E.map(V=>{const B=y(V);return B?tt(B.scores):null}).filter(V=>V!==null),T=w.length?(w.reduce((V,B)=>V+B,0)/w.length).toFixed(1):0,b=w.length?Math.max(...w):0,R=w.length?Math.min(...w):0;let I=0,Ge=0,Jt=0,_n=0,It=0;const Lt={11:0,10:0,8:0,5:0,M:0},yn={11:0,10:0,8:0,5:0,M:0};E.forEach(V=>{const B=y(V);B&&(Qt(V.ruleset)<2||(It++,B.scores.forEach(Y=>{Y[0]!=null&&(Y[0]==="M"?(Lt.M++,Ge++):(Lt[Number(Y[0])]=(Lt[Number(Y[0])]||0)+1,I+=Number(Y[0]),Ge++)),Y[1]!=null&&(Y[1]==="M"?(yn.M++,_n++):(yn[Number(Y[1])]=(yn[Number(Y[1])]||0)+1,Jt+=Number(Y[1]),_n++))})))});const Dr=Ge?(I/Ge).toFixed(2):0,bs=_n?(Jt/_n).toFixed(2):0,Et=Ge+_n?((I+Jt)/(Ge+_n)).toFixed(2):0,pe=((Or=E[0])==null?void 0:Or.numTargets)||24,Qi=Array.from({length:pe},(V,B)=>{let Y=0,j=0;return E.forEach(q=>{const ie=y(q);if(!ie)return;const de=(q.traversalOrder||Array.from({length:q.numTargets||pe},(ge,He)=>He))[B];if(de===void 0)return;(ie.scores[de]||[null,null]).forEach(ge=>{ge!=null&&(Y+=Oe(ge),j++)})}),j?Y/j:null}),Mt=Qi.map((V,B)=>({v:V,i:B})).filter(V=>V.v!==null),Nr=Mt.length?Mt.reduce((V,B)=>V.v>B.v?V:B):null,Yt=Mt.length?Mt.reduce((V,B)=>V.v<B.v?V:B):null,Qa=["11","10","8","5","M"];let ze="";ze+=`<div class="stats-grid2">
    <div class="card stat-card"><div class="stat-lbl">RUNDER</div><div class="stat-val-28">${E.length}</div></div>
    <div class="card stat-card"><div class="stat-lbl">SNIT/RUNDE</div><div class="stat-val-28">${T}</div></div>
    <div class="card stat-card"><div class="stat-lbl">BEDSTE</div><div class="stat-val-28-good">${b}</div></div>
    <div class="card stat-card"><div class="stat-lbl">LAVESTE</div><div class="stat-val-28-bad">${R}</div></div>
  </div>`,ze+=`<details class="card card-mb16 rounds-included-card">
    <summary class="section-title-mb8 rounds-included-summary">RUNDER I DENNE ANALYSE (${E.length})</summary>
    <div class="rounds-included-list">
      ${E.map(V=>`<div class="rounds-included-row"><span class="rounds-included-date">${_(V)}</span><span class="rounds-included-name">${z(V.name||"Runde")}${s==="all"?` · ${z(V.courseName||"")}`:""}${V.ruleset&&V.ruleset!=="WA"?` · <span class="rcard-ruleset-tag">${z(V.ruleset)}</span>`:""}</span></div>`).join("")}
    </div>
  </details>`;const Wn=It>0&&It<E.length?` <span class="pil-scope-note">(kun WA-runder: ${It} af ${E.length})</span>`:"";if(ze+=`<div class="card card-mb16">
    <div class="section-title-mb8">PIL STATISTIK${Wn}</div>
    ${It?`<div class="cmp-pil-grid">
      <div><div class="stat-lbl">PIL 1</div><div class="stat-val-22">${Dr}</div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">SNT/PIL</div>
        <div class="stat-val-22-mid">${Et}</div>
      </div>
      <div><div class="stat-lbl">PIL 2</div><div class="stat-val-22">${bs}</div></div>
    </div>
    <div class="pil-best-note">
      ${Number(Dr)>Number(bs)?"Bedst med PIL 1 🏹":Number(bs)>Number(Dr)?"Bedst med PIL 2 🏹":"Begge pile er lige gode 🎯"}
    </div>`:'<div class="pil-best-note">Ikke relevant — ingen WA-runder i dette udvalg</div>'}
  </div>`,Nr&&Yt&&Nr.i!==Yt.i&&(ze+=`<div class="card card-mb16">
      <div class="section-title-mb8">BEDSTE OG SVÆRESTE MÅL</div>
      <div class="cmp-target-grid">
        <div class="target-best-box">
          <div class="stat-lbl">BEDSTE</div>
          <div class="target-best-val">Skud nr. ${Nr.i+1}</div>
          <div class="target-sub-13">⌀ ${Nr.v.toFixed(2)}</div>
        </div>
        <div class="target-worst-box">
          <div class="stat-lbl">SVÆRESTE</div>
          <div class="target-worst-val">Skud nr. ${Yt.i+1}</div>
          <div class="target-sub-13">⌀ ${Yt.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`),ze+=`<div class="card card-mb16">
    <div class="section-title-mb12">FORDELING PR. SCOREZONE${Wn}</div>`,It?(ze+='<div class="pie-grid">',Qa.forEach(V=>{const B=Lt[V]||0,Y=yn[V]||0,j=B+Y,q=30;let ie="";if(j===0)ie=`<circle cx="${q}" cy="${q}" r="${q}" fill="var(--surface2)"/>`;else if(Y===0)ie=`<circle cx="${q}" cy="${q}" r="${q}" fill="#ffd700"/>`;else if(B===0)ie=`<circle cx="${q}" cy="${q}" r="${q}" fill="#00cc44"/>`;else{const me=B/j,de=me*2*Math.PI,we=q,ge=0,He=q-q*Math.sin(de),Me=q-q*Math.cos(de),Se=de>Math.PI?1:0;ie=`<path d="M${q},${q} L${we},${ge} A${q},${q} 0 ${Se},0 ${He},${Me} Z" fill="#ffd700"/>
             <path d="M${q},${q} L${He},${Me} A${q},${q} 0 ${1-Se},0 ${we},${ge} Z" fill="#00cc44"/>`}ze+=`<div class="pie-cell">
        <div class="pie-zone-label">${V}</div>
        <svg viewBox="0 0 ${q*2} ${q*2}" class="pie-svg">${ie}</svg>
        <div class="pie-count">${B}/${Y}</div>
        <div class="pie-total">${j}</div>
      </div>`}),ze+=`</div>
      <div class="pie-legend">
        <span><span class="pie-legend-dot-1"></span>PIL 1</span>
        <span><span class="pie-legend-dot-2"></span>PIL 2</span>
      </div>`):ze+='<div class="pil-best-note">Ikke relevant — ingen WA-runder i dette udvalg</div>',ze+="</div>",w.length>1){const j=Math.min(...w)-5,q=Math.max(...w)+5,ie=w.slice().reverse().map((me,de)=>{const we=30+de/(w.length-1)*280,ge=90-(me-j)/(q-j)*(120-2*30);return`${we},${ge}`}).join(" ");ze+=`<div class="card card-mb16">
      <div class="section-title-mb8">UDVIKLING (RUNDER)</div>
      <svg viewBox="0 0 340 120" class="graph-svg">
        <polyline points="${ie}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${w.slice().reverse().map((me,de)=>{const we=30+de/(w.length-1)*280,ge=90-(me-j)/(q-j)*(120-2*30);return`<circle cx="${we}" cy="${ge}" r="4" fill="var(--acc)"/><text x="${we}" y="${ge-8}" text-anchor="middle" font-size="10" fill="var(--text)">${me}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg>
    </div>`}const Tt=Qi.map((V,B)=>({v:V,i:B})).filter(V=>V.v!==null);if(Tt.length>1){const{slope:me,intercept:de}=HR(Tt.map(({v:Re,i:it})=>({x:it,y:Re}))),we=[de,de+me*(pe-1)],ge=Math.floor(Math.min(...Tt.map(Re=>Re.v),...we)),He=Math.ceil(Math.max(...Tt.map(Re=>Re.v),...we)),Me=He-ge||1,Se=[];for(let Re=ge;Re<=He;Re++)(He-ge<=6||Re%Math.ceil((He-ge)/5)===0)&&Se.push(Re);const Xt=Tf(Tt.map(Re=>Re.v)),Ot=(Re,it,{dotR:bt=3,valFont:mt=9,showVals:vn=!1}={})=>{const Ve=le=>42+(pe>1?le/(pe-1)*(Re-42-15):0),We=le=>15+(it-15-25)*(1-(le-ge)/Me),Zt=Tt.map(({v:le,i:In})=>Ve(In)+","+We(le)).join(" "),wn=Se.map(le=>`<line x1="38" y1="${We(le)}" x2="42" y2="${We(le)}" stroke="var(--muted)" stroke-width="1" pointer-events="none"/><text x="36" y="${We(le)+4}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${le}</text><line x1="42" y1="${We(le)}" x2="${Re-15}" y2="${We(le)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3" pointer-events="none"/>`).join(""),Ft=Tt.map(({v:le,i:In})=>vn?`<circle cx="${Ve(In)}" cy="${We(le)}" r="${bt}" fill="var(--acc)" pointer-events="none"/><text x="${Ve(In)}" y="${We(le)-bt-5}" text-anchor="middle" font-size="${mt}" fill="#fff" pointer-events="none">${le.toFixed(1)}</text>`:`<circle cx="${Ve(In)}" cy="${We(le)}" r="${bt}" fill="var(--acc)" pointer-events="none"/>`).join(""),Zi=`<line x1="${Ve(0)}" y1="${We(de)}" x2="${Ve(pe-1)}" y2="${We(de+me*(pe-1))}" stroke="#f0c030" stroke-width="1.5" stroke-dasharray="6,4" pointer-events="none"/>`;return`<line x1="42" y1="15" x2="42" y2="${it-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        <line x1="42" y1="${it-25}" x2="${Re-15}" y2="${it-25}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        ${wn}
        <polyline points="${Zt}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round" pointer-events="none"/>
        ${Zi}
        ${Ft}
        <text x="42" y="${it-5}" font-size="9" fill="var(--muted)" pointer-events="none">1</text>
        <text x="${Ve(pe-1)}" y="${it-5}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${pe}</text>`},St=Math.max(340,pe*30);ze+=`<div class="card card-mb16">
      <div class="graph-header-row">
        <span>GENNEMSNIT PR. SKUDRÆKKEFØLGE</span>
        <button class="btn-icon graph-fs-btn" onclick="window.openGraphFs()">⤢</button>
      </div>
      <svg viewBox="0 0 340 160" class="graph-svg">${Ot(340,160,{dotR:3})}</svg>
      <div class="graph-caption">Skudrækkefølge — 1 = første mål skudt · stiplet linje = trend</div>
    </div>
    <div class="card card-mb16">
      <div class="section-title-mb8">KONSISTENS (SPREDNING)</div>
      <div class="spredning-row">
        <div class="stat-val-28">${Xt.toFixed(2)}</div>
        <div class="spredning-note">Standardafvigelse i point (samme skala som scoren, 0-11) — ikke et 0-1-tal. Tæt på 0 = meget ensartet gennem runden; jo højere tal, jo større udsving mellem de bedste og sværeste mål.</div>
      </div>
    </div>
    <div id="graph-fs" class="fs-ov hidden graph-fs-overlay" onclick="window.closeGraphFs()">
      <div class="graph-fs-box" id="graph-fs-box" onclick="event.stopPropagation()">
        <div class="graph-fs-title">GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset</div>
        <div id="graph-fs-viewport" class="graph-fs-viewport">
          <svg id="graph-fs-svg" viewBox="0 0 ${St} 160" class="graph-fs-svg">${Ot(St,160,{dotR:5,valFont:10,showVals:!0})}</svg>
        </div>
        <button class="btn btn-dark graph-fs-close-btn" onclick="window.closeGraphFs()">Luk</button>
      </div>
    </div>`,window.openGraphFs=function(){const Re=document.getElementById("graph-fs");if(!Re)return;Re.classList.remove("hidden");const it=document.getElementById("graph-fs-svg"),bt=document.getElementById("graph-fs-box"),mt=document.getElementById("graph-fs-viewport"),vn=()=>{const Ve=Math.min(window.innerWidth*.96,900),We=Math.min(window.innerHeight*.9,700),Zt=Math.max(200,Ve-32),wn=Math.max(140,We-90),Ft=Math.max(Zt,pe*30);it.setAttribute("viewBox",`0 0 ${Ft} ${wn}`),it.innerHTML=Ot(Ft,wn,{dotR:5,valFont:10,showVals:!0}),bt&&(bt.style.width=Ve+"px"),mt&&(mt.style.width=Zt+"px",mt.style.height=wn+"px")};vn(),Ut&&(window.removeEventListener("resize",Ut),window.removeEventListener("orientationchange",Ut)),Ut=vn,window.addEventListener("resize",Ut),window.addEventListener("orientationchange",Ut),or&&document.removeEventListener("gesturestart",or),or=Ve=>Ve.preventDefault(),document.addEventListener("gesturestart",or,{passive:!1}),mt&&!mt.dataset.pinchInit&&(QR(mt,it),mt.dataset.pinchInit="1")}}if(s!=="all"){const V=Y=>{const j=Y.created;return j!=null&&j.toDate?j.toDate().getTime():j!=null&&j.seconds?j.seconds*1e3:typeof j=="number"?j:0},B=k.filter(Y=>Y.courseId===s).filter(Y=>!C||F(Y)).filter(Y=>!L||U(Y)).map(Y=>{var q;const j=WR(Y,(q=m.user)==null?void 0:q.uid);return j.length>1?{t:V(Y),cv:Tf(j)}:null}).filter(Boolean).sort((Y,j)=>Y.t-j.t);if(B.length>1){const ie=B.map(Se=>Se.cv),me=Math.min(...ie),de=Math.max(...ie),we=de-me||1,ge=(Se,Xt)=>({x:30+Xt/(B.length-1)*(340-2*30),y:90-(Se.cv-me)/we*(120-2*30)}),He=B.map((Se,Xt)=>{const{x:Ot,y:St}=ge(Se,Xt);return`${Ot},${St}`}).join(" "),Me=B.map((Se,Xt)=>{const{x:Ot,y:St}=ge(Se,Xt);return`<circle cx="${Ot}" cy="${St}" r="4" fill="#f0c030"/><text x="${Ot}" y="${St-8}" text-anchor="middle" font-size="10" fill="var(--text)">${Se.cv.toFixed(2)}</text>`}).join("");ze+=`<div class="card card-mb16">
        <div class="section-title-mb8">KONSISTENS OVER TID · denne bane</div>
        <svg viewBox="0 0 340 120" class="graph-svg">
          <polyline points="${He}" fill="none" stroke="#f0c030" stroke-width="2.5" stroke-linejoin="round"/>
          ${Me}
          <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
          <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
        </svg>
        <div class="graph-caption">Spredning pr. runde (samme point-skala som ovenfor) — faldende kurve = mere ensartet skydning over tid</div>
      </div>`}}if(n.innerHTML=ze,s!=="all"&&((Rs=m.profile)!=null&&Rs.kon)&&((Xi=m.profile)!=null&&Xi.bueklasse)){const V=m.profile.kon==="herre"?"Herre":"Dame",B={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"}[m.profile.bueklasse]||m.profile.bueklasse,Y=document.createElement("div");Y.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">SAMMENLIGNING · ${V} ${B}</div><div class="comp-loading-msg">Henter...</div></div>`,n.appendChild(Y),nt(Ke(X,"bane_stats",s,"runder")).then(j=>{const ie=j.docs.map(Me=>Me.data()).filter(Me=>Me.kon===m.profile.kon&&Me.bueklasse===m.profile.bueklasse);if(!ie.length){Y.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">SAMMENLIGNING · ${V} ${B}</div><div class="comp-loading-msg">Ingen andre ${V} ${B}-skytter har skudt denne bane endnu.</div></div>`;return}const me=ie.filter(Me=>(Me.arrowsShot||Me.numTargets*2)>0),de=me.length?(me.reduce((Me,Se)=>Me+Se.score/(Se.arrowsShot||Se.numTargets*2),0)/me.length).toFixed(2):"—",we=de!=="—"?Number(Et)-Number(de):null,ge=we!==null?(we>0?"+":"")+we.toFixed(2):"—",He=we===null?"var(--muted)":we>0?"#2aaa5a":we<0?"var(--danger)":"var(--muted)";Y.innerHTML=`<div class="card card-mb16">
        <div class="section-title-mb12">SAMMENLIGNING · ${V} ${B}</div>
        <div class="cmp-pil-grid">
          <div><div class="stat-lbl">DIT SNT/PIL</div><div class="stat-val-22">${Et}</div></div>
          <div class="cmp-pil-mid">
            <div class="stat-lbl">DIFFERENCE</div>
            <div style="font-size:22px;font-weight:700;color:${He};">${ge}</div>
          </div>
          <div><div class="stat-lbl">ANDRES SNT/PIL</div><div class="stat-val-22-txt">${de}</div></div>
        </div>
        <div class="pil-best-note">Baseret på ${ie.length} runde${ie.length!==1?"r":""} fra andre skytter</div>
      </div>`}).catch(()=>{Y.remove()})}};let Bo=null;async function ZR(){try{"wakeLock"in navigator&&(Bo=await navigator.wakeLock.request("screen"))}catch{}}function Lu(){Bo&&(Bo.release(),Bo=null)}function bf(){if(!m.pendingRound)return;const n=m.rounds.find(t=>t.id===m.pendingRound);if(!n)return;m.pendingRound=null;const e=(n.shooters||[]).map(t=>({...t,scores:Tr(t.scores)}));setTimeout(()=>Nu({...n,shooters:e}),300)}function eP(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${z(e)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};window.startRound=async function(){var _,v,A;const n=(document.getElementById("round-name").value.trim()||"Min Skydning").slice(0,80),e=document.getElementById("course-sel").value,t=document.getElementById("target-count"),r=(t.value==="custom"?Number(document.getElementById("target-count-custom").value):Number(t.value))||24,s=Number(document.getElementById("start-target").value)-1,i=document.getElementById("gps-auto-sw").classList.contains("on"),o=document.getElementById("gps-track-sw").classList.contains("on");m.warnThreshold=Number(document.getElementById("warn-thresh").value)||8;const c=((_=document.getElementById("ruleset-sel"))==null?void 0:_.value)||Su,l=Qt(c),u=[{id:m.user.uid,name:m.profile.name,isGuest:!1},...eP().filter(k=>k.id!==m.user.uid)];m.course=e&&m.courses.find(k=>k.id===e)||null;const h=u.map(k=>{const C=gR(k.id,k.name,k.isGuest);return _R(C,r,l),C});let p=s;if(i&&((v=m.course)!=null&&v.targets))try{p=ER(m.course.targets,await Ka())}catch{}m.round={id:"r_"+Date.now(),name:n,courseId:e||null,courseName:((A=m.course)==null?void 0:A.name)||null,numTargets:r,startTarget:p+1,ruleset:c,shooters:h,created:Date.now(),traversalOrder:E_(p,r),traversalPos:0},o&&(m.gpsTracking=wR(tP),document.getElementById("gps-bar").classList.toggle("hidden",!m.gpsTracking),ZR()),showActivePanel(),Ts(),Hn(),Wa(),Ha()};function Es(){return m.round.traversalOrder[m.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function Hn(){var l,u;if(!m.round)return;const n=Es(),e=m.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=" af "+e,document.getElementById("round-badge").textContent=m.round.name;const t=(u=(l=m.course)==null?void 0:l.targets)==null?void 0:u[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||`Mål ${n+1}`;const r=yR(m.round.shooters,e,Qt(m.round.ruleset));document.getElementById("pbar").style.width=`${r/e*100}%`;const s=m.round.shooters.flatMap(h=>h.scores.flat().filter(p=>p!=null)),i=s.reduce((h,p)=>h+Oe(p),0);document.getElementById("stat-avg").textContent=s.length?(i/s.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=i,document.getElementById("stat-rem").textContent=e-r;const o=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(o.classList.add("hidden"),o.onload=()=>o.classList.remove("hidden"),o.onerror=()=>o.classList.add("hidden"),o.src=t.imageUrl||t.photo):(o.src="",o.classList.add("hidden")),document.getElementById("edit-target-btn").classList.toggle("hidden",!(m.isAdmin&&m.round.courseId)),document.getElementById("next-btn").textContent=m.round.traversalPos===e-1?"AFSLUT →":"NÆSTE →";const c=pR(m.round.shooters,n);document.getElementById("target-avg").textContent=c!==null?`Gns. dette mål: ${c}`:""}function Ts(){if(!m.round)return;const n=Es(),e=document.getElementById("shooters-list");e.innerHTML="";const t=Qt(m.round.ruleset);m.round.shooters.forEach((r,s)=>{const i=tt(r.scores),o=mR(r.scores,m.warnThreshold),c=r.scores[n]||Array(t).fill(null),l=document.createElement("div");l.className="shooter-card";const u=r.scores.flat().filter(_=>_!=null),h=u.length?(u.reduce((_,v)=>_+Oe(v),0)/u.length).toFixed(2):"—";let p=`<div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${i}</div></div>`;if(t>=2){const v=Array.from({length:t},(A,k)=>r.scores.map(C=>C[k]).filter(C=>C!=null)).map(A=>A.length?(A.reduce((k,C)=>k+Oe(C),0)/A.length).toFixed(2):"—");p+=`<div class="sh-mini"><div class="sh-mini-lbl">P1</div><div class="sh-mini-val sh-mini-val-sm">${v[0]}</div></div>`,p+=`<div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">SNT</div><div class="sh-mini-val sh-mini-val-acc">${h}</div></div>`,p+=`<div class="sh-mini"><div class="sh-mini-lbl">P2</div><div class="sh-mini-val sh-mini-val-sm">${v[1]}</div></div>`}else p+=`<div class="sh-mini sh-mini-acc"><div class="sh-mini-lbl">SNT</div><div class="sh-mini-val sh-mini-val-acc">${h}</div></div>`;l.innerHTML=`
      <div class="sh-head"><span class="sh-target-emoji">🎯</span>${o?'<span class="warn-dot"></span>':""}
        <span class="sh-name">${z(r.name)}</span>
        <div class="sh-mini-group">${p}</div>
      </div>
      <div class="arrows-row">${Array.from({length:t},(_,v)=>`
        <div class="arrow-grp">${t>=2?`<div class="arrow-lbl">🎯 PIL ${v+1}</div>`:""}
          <div class="score-btns">${dR.map(A=>`
            <button class="sbtn ${c[v]===A?`sel-${A}`:""}" data-v="${A}"
              onclick="setScore(${s},${n},${v},'${A}')">${A}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(l)})}window.setScore=function(n,e,t,r){const s=r==="M"?"M":Number(r);m.round.shooters[n].scores[e][t]=s,Ha(),Ts(),Hn()};function tP({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=b_(r),document.getElementById("gps-dist").textContent=A_(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function Ha(){if(!(!m.round||!m.user))try{await Fn(se(X,"users",m.user.uid,"active","round"),I_(m.round))}catch(n){console.warn(n)}}async function nP(){var n;try{const e=await Si(se(X,"users",m.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(t.id&&m.rounds.some(s=>s.id===t.id)){await Wt(se(X,"users",m.user.uid,"active","round"));return}if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await Wt(se(X,"users",m.user.uid,"active","round"));return}Is("Genoptag den igangværende runde?",()=>{m.round=vR(t),m.round.traversalOrder=t.traversalOrder||E_(0,m.round.numTargets),m.round.traversalPos=t.traversalPos||0,m.round.courseId&&(m.course=m.courses.find(s=>s.id===m.round.courseId)||null),showActivePanel(),Ts(),Hn(),Wa()})}catch(e){console.warn(e)}}function Wa(){const n=document.getElementById("app-main");n&&(n.scrollTop=0,requestAnimationFrame(()=>{n.scrollTop=0,setTimeout(()=>{n.scrollTop=0},100)}))}function Mu(){document.getElementById("edit-panel").classList.add("hidden")}window.prevTarget=function(){!m.round||m.round.traversalPos<=0||(Mu(),m.round.traversalPos--,Ha(),Ts(),Hn(),Wa())};window.nextTarget=function(){m.round&&(Mu(),m.round.traversalPos<m.round.numTargets-1?(m.round.traversalPos++,Ha(),Ts(),Hn(),Wa()):window.finishRound())};window.skipToTarget=function(){m.round&&(document.getElementById("skip-input").max=m.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!m.round||n<1||n>m.round.numTargets)return;Mu();const e=m.round.traversalOrder.indexOf(n-1);e!==-1&&(m.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),Ts(),Hn()};window.finishRound=async function(){var o,c,l;m.finishTap++;const n=document.getElementById("finish-btn");if(m.finishTap===1){n.textContent="✓ BEKRÆFT",setTimeout(()=>{m.finishTap=0,n.textContent="✓ AFSLUT NU"},3e3);return}m.finishTap=0,n.textContent="✓ AFSLUT NU";let e={};m.gpsTracking&&(e=S_(),m.gpsTracking=!1),Lu();const t=m.round.id||"r_"+Date.now(),r=m.round.shooters.filter(u=>!u.isGuest).map(u=>u.id),s={...I_(m.round),completed:Date.now(),...e,id:t,shooterIds:r};m.rounds.unshift({...s,created:Date.now()}),Nt(),ha(),Fn(se(X,"users",m.user.uid,"rounds",t),{...s,created:pt()}).catch(()=>ee("Runde gemt lokalt (netværksfejl)","error")),m.round.shooters.filter(u=>!u.isGuest&&u.id!==m.user.uid).forEach(u=>{Fn(se(X,"users",u.id,"rounds",t),{...s,created:pt()}).catch(()=>ee("Kunne ikke dele runde med medskytte","error"))});const i=m.round;if(i.courseId&&((o=m.profile)!=null&&o.kon)&&((c=m.profile)!=null&&c.bueklasse)){const u=i.shooters.find(h=>{var p;return h.id===((p=m.user)==null?void 0:p.uid)})||((l=i.shooters)==null?void 0:l[0]);if(u){const h=u.scores.flat().filter(p=>p!=null).length;Fn(se(X,"bane_stats",i.courseId,"runder",t),{score:tt(u.scores),arrowsShot:h,kon:m.profile.kon,bueklasse:m.profile.bueklasse,numTargets:i.numTargets,dato:pt()}).catch(p=>console.warn("bane_stats fejl:",p))}}window._lastRound=i,m.round=null,await Wt(se(X,"users",m.user.uid,"active","round")).catch(()=>{}),xR(i),showResultsPanel()};window.abortRound=async function(){m.abortTap++;const n=document.getElementById("abort-btn");if(m.abortTap===1){n.textContent="🗑 BEKRÆFT",setTimeout(()=>{m.abortTap=0,n.textContent="🗑 AFBRYD"},3e3);return}m.abortTap=0,n.textContent="🗑 AFBRYD",m.gpsTracking&&(S_(),m.gpsTracking=!1),Lu(),await Wt(se(X,"users",m.user.uid,"active","round")).catch(()=>{}),m.round=null,showSetupPanel()};window.showVisitResults=function(n){const e=m.rounds.find(r=>r.id===n);if(!e){ee("Runden er ikke gemt lokalt","error");return}const t=(e.shooters||[]).map(r=>({...r,scores:Tr(r.scores)}));window.switchTab("results"),Nu({...e,shooters:t})};window.showRouteOnMap=function(n){!m.courseMap||!n.length||(m.courseMapLayer&&m.courseMap.removeLayer(m.courseMapLayer),m.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(m.courseMap),m.courseMap.fitBounds(m.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.openEditTarget=function(){var t,r;const n=Es(),e=(r=(t=m.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=Es();m.round.courseId&&(await ku(m.round.courseId,e,{name:n}),(t=m.course)!=null&&t.targets&&(m.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),Hn()};window.editGps=async function(){var n;try{const e=await Ka(),t=Es();await ku(m.round.courseId,t,{gps:e}),(n=m.course)!=null&&n.targets&&(m.course.targets[t].gps=e),ee("GPS gemt!","success")}catch(e){ee("GPS fejl: "+e.message,"error")}};const rP={"auth/user-not-found":"Bruger ikke fundet.","auth/wrong-password":"Forkert kodeord.","auth/invalid-credential":"Ugyldig email eller kodeord.","auth/email-already-in-use":"Email er allerede i brug.","auth/weak-password":"Kodeordet er for svagt (min. 6 tegn).","auth/invalid-email":"Ugyldig email-adresse.","auth/too-many-requests":"For mange forsøg. Prøv igen senere.","auth/network-request-failed":"Netværksfejl. Tjek din forbindelse."};function Ou(n){return rP[n]||"Der opstod en fejl. Prøv igen."}function cn(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){cn("Udfyld alle felter.");return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await $w(qi,n,e)}catch(r){cn(Ou(r.code))}finally{t.disabled=!1,t.textContent="LOG IND"}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value,r=document.getElementById("signup-kon").value,s=document.getElementById("signup-bueklasse").value;if(!n||!e||!t||!r||!s){cn("Udfyld alle felter.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){cn("Ugyldig email-adresse.");return}if(t.length<6){cn("Adgangskoden skal være mindst 6 tegn.");return}const i=document.querySelector("#signup-form .btn");i.disabled=!0,i.textContent="...";try{const o=await Uw(qi,e,t);await Fn(se(X,"users",o.user.uid),{name:n,email:e,yam:n,"e-mail":e,kon:r,bueklasse:s,created:pt()})}catch(o){cn(Ou(o.code))}finally{i.disabled=!1,i.textContent="OPRET KONTO"}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){cn("Indtast din email først.");return}try{await Bw(qi,n),cn("Nulstillingsmail sendt!","ok")}catch(e){cn(Ou(e.code))}};window.doLogout=async function(){try{await Gw(qi)}catch{}};window.toggleGpsPause=IR;window.parseRoute=T_;const B_="archery_push_dismissed";document.addEventListener("DOMContentLoaded",()=>{var o,c,l,u,h,p,_;const n=document.getElementById("warn-enabled-sw");if(n){const v=localStorage.getItem("warnEnabled");m.warnEnabled=v===null?!0:v==="true",n.classList.toggle("on",m.warnEnabled),n.addEventListener("click",()=>{m.warnEnabled=!m.warnEnabled,n.classList.toggle("on",m.warnEnabled),localStorage.setItem("warnEnabled",m.warnEnabled)})}Kw(qi,async v=>{if(v){m.user=v;let A,k;for(let C=0;C<3;C++)try{[A,k]=await Promise.all([Si(se(X,"users",v.uid)),Si(se(X,"admins",v.uid))]);break}catch(L){console.error("Profil fejl attempt",C,L.code,L.message),C<2?await new Promise(F=>setTimeout(F,2e3*(C+1))):(m.profile={name:v.email,email:v.email},m.isAdmin=!1)}if(A!=null&&A.exists()){const C=A.data();m.profile={name:C.name||C.yam||v.email,email:C.email||C["e-mail"]||v.email,kon:C.kon||null,bueklasse:C.bueklasse||null}}else m.profile||(m.profile={name:v.email,email:v.email});m.isAdmin=(k==null?void 0:k.exists())||!1,m.isSuperAdmin=m.isAdmin&&v.email==="bsklausen@proton.me",sP()}else iP()});const e="archery_pwa_dismissed",t=localStorage.getItem(e)==="1";let r=null;window.addEventListener("beforeinstallprompt",v=>{v.preventDefault(),r=v,t||document.getElementById("pwa-banner").classList.remove("hidden")}),(o=document.getElementById("pwa-install-btn"))==null||o.addEventListener("click",async()=>{r&&(r.prompt(),await r.userChoice,r=null,document.getElementById("pwa-banner").classList.add("hidden"))}),(c=document.getElementById("pwa-dismiss-btn"))==null||c.addEventListener("click",()=>{document.getElementById("pwa-banner").classList.add("hidden"),localStorage.setItem(e,"1")}),(l=document.getElementById("push-enable-btn"))==null||l.addEventListener("click",async()=>{document.getElementById("push-banner").classList.add("hidden"),await F_()&&ee("Notifikationer aktiveret","success")}),(u=document.getElementById("push-dismiss-btn"))==null||u.addEventListener("click",()=>{document.getElementById("push-banner").classList.add("hidden"),localStorage.setItem(B_,"1")});const s=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.MSStream,i=window.navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches;s&&!i&&!t&&((h=document.getElementById("ios-install-banner"))==null||h.classList.remove("hidden")),(p=document.getElementById("ios-dismiss-btn"))==null||p.addEventListener("click",()=>{document.getElementById("ios-install-banner").classList.add("hidden"),localStorage.setItem(e,"1")}),Uo(24),document.getElementById("target-count").addEventListener("change",v=>{const A=v.target.value,k=document.getElementById("target-count-custom");k.style.display=A==="custom"?"":"none",A!=="custom"&&Uo(Number(A))}),document.getElementById("target-count-custom").addEventListener("input",v=>{const A=Number(v.target.value);A>0&&Uo(A)}),(_=document.getElementById("photo-input"))==null||_.addEventListener("change",async v=>{var k;const A=v.target.files[0];if(A)try{const C=await P_(A),L=Es(),F=zg(y_,`courses/${m.round.courseId}/target_${L}.jpg`);await Kg(F,C,"base64",{contentType:"image/jpeg"});const U=await Gg(F);await ku(m.round.courseId,L,{imageUrl:U}),(k=m.course)!=null&&k.targets&&(m.course.targets[L].imageUrl=U),Hn()}catch(C){ee("Upload fejl: "+C.message,"error")}}),document.querySelectorAll(".modal").forEach(v=>{v.addEventListener("click",A=>{A.target===v&&v.classList.add("hidden")})})});window.saveProfilModal=async function(){const n=document.getElementById("profil-kon").value,e=document.getElementById("profil-bueklasse").value,t=document.getElementById("profil-err");if(!n||!e){t.textContent="Vælg både køn og bueklasse.",t.classList.remove("hidden");return}t.classList.add("hidden");try{await st(se(X,"users",m.user.uid),{kon:n,bueklasse:e}),m.profile.kon=n,m.profile.bueklasse=e,document.getElementById("profil-modal").classList.add("hidden")}catch{t.textContent="Fejl ved gem. Prøv igen.",t.classList.remove("hidden")}};function sP(){document.getElementById("hdr-name").textContent=m.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),(!m.profile.kon||!m.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),800),document.getElementById("admin-badge").classList.toggle("hidden",!m.isAdmin),document.querySelectorAll(".admin-only").forEach(t=>t.classList.toggle("hidden",!m.isAdmin));const n=If();m.friends=n.friends||[],m.rounds=n.rounds||[],nt(Ke(X,"users",m.user.uid,"friends")).then(t=>{m.friends=t.docs.map(r=>({...r.data(),id:r.id})),Nt(),ki(),Di()}).catch(t=>console.warn("Hent venner:",t)),ki(),Di(),ha(),m.pendingRound=new URLSearchParams(window.location.search).get("round")||null,m.pendingRound&&bf();const e=If().courses||[];m.courses=e,Ki(),U_(),oP(),nt(Ke(X,"users",m.user.uid,"rounds")).then(t=>{if(!t.docs.length)return;const r=t.docs.map(o=>({...o.data(),id:o.id})),s=new Set(m.rounds.map(o=>o.id)),i=r.filter(o=>!s.has(o.id));i.length&&(m.rounds=[...m.rounds,...i].sort((o,c)=>{var h,p;const l=o.completed||o.created||0,u=c.completed||c.created||0;return(typeof u=="number"?u:((h=u.toMillis)==null?void 0:h.call(u))??0)-(typeof l=="number"?l:((p=l.toMillis)==null?void 0:p.call(l))??0)}),Nt(),ha(),m.pendingRound&&bf())}).catch(t=>console.warn("Hent runder:",t)),AR(),Vu().then(()=>{Vt(),Hi()}).catch(t=>console.warn("Hent meetups:",t)),O_().then(t=>{t&&zR()}),GR(),KR()&&localStorage.getItem(B_)!=="1"&&document.getElementById("pwa-banner").classList.contains("hidden")&&document.getElementById("ios-install-banner").classList.contains("hidden")&&setTimeout(()=>{var t;return(t=document.getElementById("push-banner"))==null?void 0:t.classList.remove("hidden")},1e3),nP()}function iP(){m.user=null,m.profile=null,m.round=null,Lu(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){window.appLang=window.appLang==="da"?"en":"da",document.getElementById("lang-btn").textContent=window.appLang.toUpperCase()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&(kR(),Vt(),FR()),n==="analyse"&&window.renderAnalyse(),n==="courses"&&m.courseMap&&setTimeout(()=>m.courseMap.invalidateSize(),100)};function oP(){!navigator.geolocation||!m.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(m.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=Cu(e,o);c<t&&(t=c,r=s.id)})}),r&&t<500){const s=document.getElementById("course-sel");s.value=r,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function U_(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML='<option value="">-- Ingen bane --</option>',m.courses.forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${t.numTargets} mål)`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=m.courses.find(i=>i.id===n.value),r=document.getElementById("target-count"),s=document.getElementById("target-count-custom");t?(!!r.querySelector(`option[value="${t.numTargets}"]`)?(r.value=String(t.numTargets),s.style.display="none"):(r.value="custom",s.value=t.numTargets,s.style.display=""),r.disabled=!0,s.disabled=!0):(r.disabled=!1,s.disabled=!1,r.value!=="custom"&&(s.style.display="none")),Uo(t?t.numTargets:r.value==="custom"?Number(s.value):Number(r.value))}}window.populateCourseDropdown=U_;function Uo(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"}),document.getElementById("qr-url").value=window.location.href};window.copyQrUrl=function(){var e;const n=document.getElementById("qr-url");(e=navigator.clipboard)==null||e.writeText(n.value).then(()=>ee("Link kopieret","success"),()=>{n.select(),document.execCommand("copy"),ee("Link kopieret","success")})};window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
