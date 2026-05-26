(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ic={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let i=r.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ff=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const i=r[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const o=r[n++];e[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=r[n++],c=r[n++],l=r[n++],h=((i&7)<<18|(o&63)<<12|(c&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const o=r[n++],c=r[n++];e[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return e.join("")},Hl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<r.length;i+=3){const o=r[i],c=i+1<r.length,l=c?r[i+1]:0,h=i+2<r.length,f=h?r[i+2]:0,m=o>>2,v=(o&3)<<4|l>>4;let R=(l&15)<<2|f>>6,S=f&63;h||(S=64,c||(R=64)),s.push(n[m],n[v],n[R],n[S])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ql(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ff(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<r.length;){const o=n[r.charAt(i++)],l=i<r.length?n[r.charAt(i)]:0;++i;const f=i<r.length?n[r.charAt(i)]:64;++i;const v=i<r.length?n[r.charAt(i)]:64;if(++i,o==null||l==null||f==null||v==null)throw new pf;const R=o<<2|l>>4;if(s.push(R),f!==64){const S=l<<4&240|f>>2;if(s.push(S),v!==64){const N=f<<6&192|v;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class pf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mf=function(r){const e=ql(r);return Hl.encodeByteArray(e,!0)},gs=function(r){return mf(r).replace(/\./g,"")},zl=function(r){try{return Hl.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _f=()=>gf().__FIREBASE_DEFAULTS__,yf=()=>{if(typeof process>"u"||typeof Ic>"u")return;const r=Ic.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},vf=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&zl(r[1]);return e&&JSON.parse(e)},Os=()=>{try{return _f()||yf()||vf()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Wl=r=>{var e,n;return(n=(e=Os())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},Gl=r=>{const e=Wl(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Kl=()=>{var r;return(r=Os())===null||r===void 0?void 0:r.config},Ql=r=>{var e;return(e=Os())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Xl(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[gs(JSON.stringify(n)),gs(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Tf(){var r;const e=(r=Os())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function If(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Af(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Rf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bf(){const r=be();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Pf(){return!Tf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sf(){try{return typeof indexedDB=="object"}catch{return!1}}function Cf(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="FirebaseError";class Je extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=kf,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],c=o?Df(o,s):"Error",l=`${this.serviceName}: ${c} (${i}).`;return new Je(i,l,s)}}function Df(r,e){return r.replace(Nf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Nf=/\{\$([^}]+)}/g;function Of(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function _s(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const o=r[i],c=e[i];if(Ac(o)&&Ac(c)){if(!_s(o,c))return!1}else if(o!==c)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ac(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Kn(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,o]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Qn(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function Vf(r,e){const n=new Lf(r,e);return n.subscribe.bind(n)}class Lf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Mf(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Oi),i.error===void 0&&(i.error=Oi),i.complete===void 0&&(i.complete=Oi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mf(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Oi(){}/**
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
 */function ae(r){return r&&r._delegate?r._delegate:r}class bt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ef;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ff(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});s.resolve(o)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);s===l&&c.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(i,o);const c=this.instances.get(i);return c&&e(c,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Uf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uf(r){return r===xt?void 0:r}function Ff(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(G||(G={}));const $f={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},jf=G.INFO,qf={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Hf=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),i=qf[e];if(i)console[i](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eo{constructor(e){this.name=e,this._logLevel=jf,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$f[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const zf=(r,e)=>e.some(n=>r instanceof n);let Rc,bc;function Wf(){return Rc||(Rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gf(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jl=new WeakMap,Wi=new WeakMap,Yl=new WeakMap,Vi=new WeakMap,wo=new WeakMap;function Kf(r){const e=new Promise((n,s)=>{const i=()=>{r.removeEventListener("success",o),r.removeEventListener("error",c)},o=()=>{n(It(r.result)),i()},c=()=>{s(r.error),i()};r.addEventListener("success",o),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Jl.set(n,r)}).catch(()=>{}),wo.set(e,r),e}function Qf(r){if(Wi.has(r))return;const e=new Promise((n,s)=>{const i=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",c),r.removeEventListener("abort",c)},o=()=>{n(),i()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",o),r.addEventListener("error",c),r.addEventListener("abort",c)});Wi.set(r,e)}let Gi={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Wi.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Yl.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Xf(r){Gi=r(Gi)}function Jf(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Li(this),e,...n);return Yl.set(s,e.sort?e.sort():[e]),It(s)}:Gf().includes(r)?function(...e){return r.apply(Li(this),e),It(Jl.get(this))}:function(...e){return It(r.apply(Li(this),e))}}function Yf(r){return typeof r=="function"?Jf(r):(r instanceof IDBTransaction&&Qf(r),zf(r,Wf())?new Proxy(r,Gi):r)}function It(r){if(r instanceof IDBRequest)return Kf(r);if(Vi.has(r))return Vi.get(r);const e=Yf(r);return e!==r&&(Vi.set(r,e),wo.set(e,r)),e}const Li=r=>wo.get(r);function Zf(r,e,{blocked:n,upgrade:s,blocking:i,terminated:o}={}){const c=indexedDB.open(r,e),l=It(c);return s&&c.addEventListener("upgradeneeded",h=>{s(It(c.result),h.oldVersion,h.newVersion,It(c.transaction),h)}),n&&c.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const ep=["get","getKey","getAll","getAllKeys","count"],tp=["put","add","delete","clear"],Mi=new Map;function Pc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Mi.get(e))return Mi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=tp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ep.includes(n)))return;const o=async function(c,...l){const h=this.transaction(c,i?"readwrite":"readonly");let f=h.store;return s&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),i&&h.done]))[0]};return Mi.set(e,o),o}Xf(r=>({...r,get:(e,n,s)=>Pc(e,n)||r.get(e,n,s),has:(e,n)=>!!Pc(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function rp(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ki="@firebase/app",Sc="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Eo("@firebase/app"),sp="@firebase/app-compat",ip="@firebase/analytics-compat",op="@firebase/analytics",ap="@firebase/app-check-compat",cp="@firebase/app-check",lp="@firebase/auth",up="@firebase/auth-compat",hp="@firebase/database",dp="@firebase/data-connect",fp="@firebase/database-compat",pp="@firebase/functions",mp="@firebase/functions-compat",gp="@firebase/installations",_p="@firebase/installations-compat",yp="@firebase/messaging",vp="@firebase/messaging-compat",Ep="@firebase/performance",wp="@firebase/performance-compat",Tp="@firebase/remote-config",Ip="@firebase/remote-config-compat",Ap="@firebase/storage",Rp="@firebase/storage-compat",bp="@firebase/firestore",Pp="@firebase/vertexai-preview",Sp="@firebase/firestore-compat",Cp="firebase",kp="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]",Dp={[Ki]:"fire-core",[sp]:"fire-core-compat",[op]:"fire-analytics",[ip]:"fire-analytics-compat",[cp]:"fire-app-check",[ap]:"fire-app-check-compat",[lp]:"fire-auth",[up]:"fire-auth-compat",[hp]:"fire-rtdb",[dp]:"fire-data-connect",[fp]:"fire-rtdb-compat",[pp]:"fire-fn",[mp]:"fire-fn-compat",[gp]:"fire-iid",[_p]:"fire-iid-compat",[yp]:"fire-fcm",[vp]:"fire-fcm-compat",[Ep]:"fire-perf",[wp]:"fire-perf-compat",[Tp]:"fire-rc",[Ip]:"fire-rc-compat",[Ap]:"fire-gcs",[Rp]:"fire-gcs-compat",[bp]:"fire-fst",[Sp]:"fire-fst-compat",[Pp]:"fire-vertex","fire-js":"fire-js",[Cp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Map,Np=new Map,Xi=new Map;function Cc(r,e){try{r.container.addComponent(e)}catch(n){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function qt(r){const e=r.name;if(Xi.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;Xi.set(e,r);for(const n of ys.values())Cc(n,r);for(const n of Np.values())Cc(n,r);return!0}function Vs(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function qe(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new yr("app","Firebase",Op);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=kp;function Zl(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=Kl()),!n)throw At.create("no-options");const o=ys.get(i);if(o){if(_s(n,o.options)&&_s(s,o.config))return o;throw At.create("duplicate-app",{appName:i})}const c=new Bf(i);for(const h of Xi.values())c.addComponent(h);const l=new Vp(n,s,c);return ys.set(i,l),l}function To(r=Qi){const e=ys.get(r);if(!e&&r===Qi&&Kl())return Zl();if(!e)throw At.create("no-app",{appName:r});return e}function He(r,e,n){var s;let i=(s=Dp[r])!==null&&s!==void 0?s:r;n&&(i+=`-${n}`);const o=i.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(l.join(" "));return}qt(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Lp="firebase-heartbeat-database",Mp=1,cr="firebase-heartbeat-store";let xi=null;function eu(){return xi||(xi=Zf(Lp,Mp,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(cr)}catch(n){console.warn(n)}}}}).catch(r=>{throw At.create("idb-open",{originalErrorMessage:r.message})})),xi}async function xp(r){try{const n=(await eu()).transaction(cr),s=await n.objectStore(cr).get(tu(r));return await n.done,s}catch(e){if(e instanceof Je)ot.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(n.message)}}}async function kc(r,e){try{const s=(await eu()).transaction(cr,"readwrite");await s.objectStore(cr).put(e,tu(r)),await s.done}catch(n){if(n instanceof Je)ot.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ot.warn(s.message)}}}function tu(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Up=1024,Fp=30*24*60*60*1e3;class Bp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Dc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const l=new Date(c.date).valueOf();return Date.now()-l<=Fp}),this._storage.overwrite(this._heartbeatsCache))}catch(s){ot.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dc(),{heartbeatsToSend:s,unsentEntries:i}=$p(this._heartbeatsCache.heartbeats),o=gs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return ot.warn(n),""}}}function Dc(){return new Date().toISOString().substring(0,10)}function $p(r,e=Up){const n=[];let s=r.slice();for(const i of r){const o=n.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),Nc(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sf()?Cf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nc(r){return gs(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(r){qt(new bt("platform-logger",e=>new np(e),"PRIVATE")),qt(new bt("heartbeat",e=>new Bp(e),"PRIVATE")),He(Ki,Sc,r),He(Ki,Sc,"esm2017"),He("fire-js","")}qp("");var Hp="firebase",zp="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(Hp,zp,"app");function Io(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(r);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(r,s[i])&&(n[s[i]]=r[s[i]]);return n}function nu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wp=nu,ru=new yr("auth","Firebase",nu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Eo("@firebase/auth");function Gp(r,...e){vs.logLevel<=G.WARN&&vs.warn(`Auth (${Xt}): ${r}`,...e)}function ss(r,...e){vs.logLevel<=G.ERROR&&vs.error(`Auth (${Xt}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(r,...e){throw Ao(r,...e)}function ze(r,...e){return Ao(r,...e)}function su(r,e,n){const s=Object.assign(Object.assign({},Wp()),{[e]:n});return new yr("auth","Firebase",s).create(e,{appName:r.name})}function st(r){return su(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ao(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return ru.create(r,...e)}function U(r,e,...n){if(!r)throw Ao(e,...n)}function tt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ss(e),new Error(e)}function at(r,e){r||tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Kp(){return Oc()==="http:"||Oc()==="https:"}function Oc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kp()||Af()||"connection"in navigator)?navigator.onLine:!0}function Xp(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=wf()||Rf()}get(){return Qp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(r,e){at(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=new Er(3e4,6e4);function ut(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ht(r,e,n,s,i={}){return ou(r,i,async()=>{let o={},c={};s&&(e==="GET"?c=s:o={body:JSON.stringify(s)});const l=vr(Object.assign({key:r.config.apiKey},c)).slice(1),h=await r._getAdditionalHeaders();h["Content-Type"]="application/json",r.languageCode&&(h["X-Firebase-Locale"]=r.languageCode);const f=Object.assign({method:e,headers:h},o);return If()||(f.referrerPolicy="no-referrer"),iu.fetch()(au(r,r.config.apiHost,n,l),f)})}async function ou(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},Jp),e);try{const i=new em(r),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw Jr(r,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const l=o.ok?c.errorMessage:c.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jr(r,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw Jr(r,"email-already-in-use",c);if(h==="USER_DISABLED")throw Jr(r,"user-disabled",c);const m=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw su(r,m,f);Be(r,m)}}catch(i){if(i instanceof Je)throw i;Be(r,"network-request-failed",{message:String(i)})}}async function wr(r,e,n,s,i={}){const o=await ht(r,e,n,s,i);return"mfaPendingCredential"in o&&Be(r,"multi-factor-auth-required",{_serverResponse:o}),o}function au(r,e,n,s){const i=`${e}${n}?${s}`;return r.config.emulator?Ro(r.config,i):`${r.config.apiScheme}://${i}`}function Zp(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class em{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ze(this.auth,"network-request-failed")),Yp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jr(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=ze(r,e,s);return i.customData._tokenResponse=n,i}function Vc(r){return r!==void 0&&r.enterprise!==void 0}class tm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Zp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function nm(r,e){return ht(r,"GET","/v2/recaptchaConfig",ut(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(r,e){return ht(r,"POST","/v1/accounts:delete",e)}async function cu(r,e){return ht(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sm(r,e=!1){const n=ae(r),s=await n.getIdToken(e),i=bo(s);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,c=o==null?void 0:o.sign_in_provider;return{claims:i,token:s,authTime:tr(Ui(i.auth_time)),issuedAtTime:tr(Ui(i.iat)),expirationTime:tr(Ui(i.exp)),signInProvider:c||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ui(r){return Number(r)*1e3}function bo(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ss("JWT malformed, contained fewer than 3 sections"),null;try{const i=zl(n);return i?JSON.parse(i):(ss("Failed to decode base64 JWT payload"),null)}catch(i){return ss("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lc(r){const e=bo(r);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Je&&im(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function im({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=tr(this.lastLoginAt),this.creationTime=tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(r){var e;const n=r.auth,s=await r.getIdToken(),i=await lr(r,cu(n,{idToken:s}));U(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const c=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?lu(o.providerUserInfo):[],l=cm(r.providerData,c),h=r.isAnonymous,f=!(r.email&&o.passwordHash)&&!(l!=null&&l.length),m=h?f:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Yi(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(r,v)}async function am(r){const e=ae(r);await Es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cm(r,e){return[...r.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function lu(r){return r.map(e=>{var{providerId:n}=e,s=Io(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(r,e){const n=await ou(r,{},async()=>{const s=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=r.config,c=au(r,i,"/v1/token",`key=${o}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",iu.fetch()(c,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function um(r,e){return ht(r,"POST","/v2/accounts:revokeToken",ut(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=Lc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:o}=await lm(e,n);this.updateTokensAndExpiration(s,i,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:o}=n,c=new ln;return s&&(U(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),o&&(U(typeof o=="number","internal-error",{appName:e}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ln,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(r,e){U(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,o=Io(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new om(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Yi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await lr(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sm(this,e)}reload(){return am(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await lr(this,rm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,o,c,l,h,f,m;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,R=(i=n.email)!==null&&i!==void 0?i:void 0,S=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,N=(c=n.photoURL)!==null&&c!==void 0?c:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,H=(f=n.createdAt)!==null&&f!==void 0?f:void 0,q=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:j,emailVerified:z,isAnonymous:fe,providerData:Z,stsTokenManager:w}=n;U(j&&w,e,"internal-error");const g=ln.fromJSON(this.name,w);U(typeof j=="string",e,"internal-error"),gt(v,e.name),gt(R,e.name),U(typeof z=="boolean",e,"internal-error"),U(typeof fe=="boolean",e,"internal-error"),gt(S,e.name),gt(N,e.name),gt(V,e.name),gt(D,e.name),gt(H,e.name),gt(q,e.name);const y=new nt({uid:j,auth:e,email:R,emailVerified:z,displayName:v,isAnonymous:fe,photoURL:N,phoneNumber:S,tenantId:V,stsTokenManager:g,createdAt:H,lastLoginAt:q});return Z&&Array.isArray(Z)&&(y.providerData=Z.map(E=>Object.assign({},E))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,n,s=!1){const i=new ln;i.updateFromServerResponse(n);const o=new nt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Es(o),o}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];U(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?lu(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new ln;l.updateFromIdToken(s);const h=new nt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:c}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;function rt(r){at(r instanceof Function,"Expected a class definition");let e=Mc.get(r);return e?(at(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Mc.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uu.type="NONE";const xc=uu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(r,e,n){return`firebase:${r}:${e}:${n}`}class un{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:o}=this.auth;this.fullUserKey=is(this.userKey,i.apiKey,o),this.fullPersistenceKey=is("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new un(rt(xc),e,s);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||rt(xc);const c=is(s,e.config.apiKey,e.name);let l=null;for(const f of n)try{const m=await f._get(c);if(m){const v=nt._fromJSON(e,m);f!==o&&(l=v),o=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new un(o,e,s):(o=h[0],l&&await o._set(c,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(c)}catch{}})),new un(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gu(e))return"Blackberry";if(_u(e))return"Webos";if(du(e))return"Safari";if((e.includes("chrome/")||fu(e))&&!e.includes("edge/"))return"Chrome";if(mu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hu(r=be()){return/firefox\//i.test(r)}function du(r=be()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fu(r=be()){return/crios\//i.test(r)}function pu(r=be()){return/iemobile/i.test(r)}function mu(r=be()){return/android/i.test(r)}function gu(r=be()){return/blackberry/i.test(r)}function _u(r=be()){return/webos/i.test(r)}function Po(r=be()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function hm(r=be()){var e;return Po(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dm(){return bf()&&document.documentMode===10}function yu(r=be()){return Po(r)||mu(r)||_u(r)||gu(r)||/windows phone/i.test(r)||pu(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(r,e=[]){let n;switch(r){case"Browser":n=Uc(be());break;case"Worker":n=`${Uc(be())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xt}/${s}`}/**
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
 */class fm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((c,l)=>{try{const h=e(o);c(h)}catch(h){l(h)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function pm(r,e={}){return ht(r,"GET","/v2/passwordPolicy",ut(r,e))}/**
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
 */const mm=6;class gm{constructor(e){var n,s,i,o;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:mm,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,o,c,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(s=h.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(c=h.containsNumericCharacter)!==null&&c!==void 0?c:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fc(this),this.idTokenSubscription=new Fc(this),this.beforeStateQueue=new fm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ru,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cu(this,{idToken:e}),s=await nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qe(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===l)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Es(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(st(this));const n=e?ae(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pm(this),n=new gm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await um(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{c||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,s,i);return()=>{c=!0,h()}}else{const h=e.addObserver(n);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kt(r){return ae(r)}class Fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vf(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ym(r){Ls=r}function Eu(r){return Ls.loadJS(r)}function vm(){return Ls.recaptchaEnterpriseScript}function Em(){return Ls.gapiScript}function wm(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const Tm="recaptcha-enterprise",Im="NO_RECAPTCHA";class Am{constructor(e){this.type=Tm,this.auth=kt(e)}async verify(e="verify",n=!1){async function s(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(c,l)=>{nm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new tm(h);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,c(f.siteKey)}}).catch(h=>{l(h)})})}function i(o,c,l){const h=window.grecaptcha;Vc(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(f=>{c(f)}).catch(()=>{c(Im)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,c)=>{s(this.auth).then(l=>{if(!n&&Vc(window.grecaptcha))i(l,o,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let h=vm();h.length!==0&&(h+=l),Eu(h).then(()=>{i(l,o,c)}).catch(f=>{c(f)})}}).catch(l=>{c(l)})})}}async function Bc(r,e,n,s=!1){const i=new Am(r);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);return s?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ws(r,e,n,s){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Bc(r,e,n,n==="getOobCode");return s(r,o)}else return s(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Bc(r,e,n,n==="getOobCode");return s(r,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(r,e){const n=Vs(r,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(_s(o,e??{}))return i;Be(i,"already-initialized")}return n.initialize({options:e})}function bm(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Pm(r,e,n){const s=kt(r);U(s._canInitEmulator,s,"emulator-config-failed"),U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,o=wu(e),{host:c,port:l}=Sm(e),h=l===null?"":`:${l}`;s.config.emulator={url:`${o}//${c}${h}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Cm()}function wu(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Sm(r){const e=wu(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const o=i[1];return{host:o,port:$c(s.substr(o.length+1))}}else{const[o,c]=s.split(":");return{host:o,port:$c(c)}}}function $c(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Cm(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}async function km(r,e){return ht(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dm(r,e){return wr(r,"POST","/v1/accounts:signInWithPassword",ut(r,e))}async function Nm(r,e){return ht(r,"POST","/v1/accounts:sendOobCode",ut(r,e))}async function Om(r,e){return Nm(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(r,e){return wr(r,"POST","/v1/accounts:signInWithEmailLink",ut(r,e))}async function Lm(r,e){return wr(r,"POST","/v1/accounts:signInWithEmailLink",ut(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends So{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ur(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ur(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ws(e,n,"signInWithPassword",Dm);case"emailLink":return Vm(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ws(e,s,"signUpPassword",km);case"emailLink":return Lm(e,{idToken:n,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(r,e){return wr(r,"POST","/v1/accounts:signInWithIdp",ut(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="http://localhost";class Ht extends So{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,o=Io(n,["providerId","signInMethod"]);if(!s||!i)return null;const c=new Ht(s,i);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return hn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hn(e,n)}buildRequest(){const e={requestUri:Mm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Um(r){const e=Kn(Qn(r)).link,n=e?Kn(Qn(e)).deep_link_id:null,s=Kn(Qn(r)).deep_link_id;return(s?Kn(Qn(s)).link:null)||s||n||e||r}class Co{constructor(e){var n,s,i,o,c,l;const h=Kn(Qn(e)),f=(n=h.apiKey)!==null&&n!==void 0?n:null,m=(s=h.oobCode)!==null&&s!==void 0?s:null,v=xm((i=h.mode)!==null&&i!==void 0?i:null);U(f&&m&&v,"argument-error"),this.apiKey=f,this.operation=v,this.code=m,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(c=h.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(l=h.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Um(e);try{return new Co(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(e,n){return ur._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Co.parseLink(n);return U(s,"argument-error"),ur._fromEmailAndCode(e,s.code,s.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Tu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Tr{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ht._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yt.credential(n,s)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Tr{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Tr{constructor(){super("twitter.com")}static credential(e,n){return Ht._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Et.credential(n,s)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(r,e){return wr(r,"POST","/v1/accounts:signUp",ut(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const o=await nt._fromIdTokenResponse(e,s,i),c=jc(s);return new zt({user:o,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=jc(s);return new zt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function jc(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Je{constructor(e,n,s,i){var o;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ts.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ts(e,n,s,i)}}function Iu(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ts._fromErrorAndOperation(r,o,e,s):o})}async function Bm(r,e,n=!1){const s=await lr(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return zt._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(r,e,n=!1){const{auth:s}=r;if(qe(s.app))return Promise.reject(st(s));const i="reauthenticate";try{const o=await lr(r,Iu(s,i,e,r),n);U(o.idToken,s,"internal-error");const c=bo(o.idToken);U(c,s,"internal-error");const{sub:l}=c;return U(r.uid===l,s,"user-mismatch"),zt._forOperation(r,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Be(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(r,e,n=!1){if(qe(r.app))return Promise.reject(st(r));const s="signIn",i=await Iu(r,s,e),o=await zt._fromIdTokenResponse(r,s,i);return n||await r._updateCurrentUser(o.user),o}async function jm(r,e){return Au(kt(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(r){const e=kt(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qm(r,e,n){const s=kt(r);await ws(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Om)}async function Hm(r,e,n){if(qe(r.app))return Promise.reject(st(r));const s=kt(r),c=await ws(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fm).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Ru(r),h}),l=await zt._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(l.user),l}function zm(r,e,n){return qe(r.app)?Promise.reject(st(r)):jm(ae(r),wn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ru(r),s})}function Wm(r,e,n,s){return ae(r).onIdTokenChanged(e,n,s)}function Gm(r,e,n){return ae(r).beforeAuthStateChanged(e,n)}function Km(r,e,n,s){return ae(r).onAuthStateChanged(e,n,s)}function Qm(r){return ae(r).signOut()}const Is="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Is,"1"),this.storage.removeItem(Is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=1e3,Jm=10;class Pu extends bu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,l,h)=>{this.notifyListeners(c,h)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},o=this.storage.getItem(s);dm()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jm):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Xm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pu.type="LOCAL";const Ym=Pu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends bu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Su.type="SESSION";const Cu=Su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ms(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:o}=n.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(c).map(async f=>f(n.origin,o)),h=await Zm(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,c;return new Promise((l,h)=>{const f=ko("",20);i.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},s);c={messageChannel:i,onMessage(v){const R=v;if(R.data.eventId===f)switch(R.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(R.data.response);break;default:clearTimeout(m),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return window}function tg(r){We().location.href=r}/**
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
 */function ku(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function ng(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rg(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function sg(){return ku()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="firebaseLocalStorageDb",ig=1,As="firebaseLocalStorage",Nu="fbase_key";class Ir{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xs(r,e){return r.transaction([As],e?"readwrite":"readonly").objectStore(As)}function og(){const r=indexedDB.deleteDatabase(Du);return new Ir(r).toPromise()}function Zi(){const r=indexedDB.open(Du,ig);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(As,{keyPath:Nu})}catch(i){n(i)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(As)?e(s):(s.close(),await og(),e(await Zi()))})})}async function qc(r,e,n){const s=xs(r,!0).put({[Nu]:e,value:n});return new Ir(s).toPromise()}async function ag(r,e){const n=xs(r,!1).get(e),s=await new Ir(n).toPromise();return s===void 0?null:s.value}function Hc(r,e){const n=xs(r,!0).delete(e);return new Ir(n).toPromise()}const cg=800,lg=3;class Ou{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>lg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ku()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ms._getInstance(sg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ng(),!this.activeServiceWorker)return;this.sender=new eg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zi();return await qc(e,Is,"1"),await Hc(e,Is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ag(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=xs(i,!1).getAll();return new Ir(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ou.type="LOCAL";const ug=Ou;new Er(3e4,6e4);/**
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
 */function hg(r,e){return e?rt(e):(U(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends So{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dg(r){return Au(r.auth,new Do(r),r.bypassAuthState)}function fg(r){const{auth:e,user:n}=r;return U(n,e,"internal-error"),$m(n,new Do(r),r.bypassAuthState)}async function pg(r){const{auth:e,user:n}=r;return U(n,e,"internal-error"),Bm(n,new Do(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,s,i,o=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:o,error:c,type:l}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dg;case"linkViaPopup":case"linkViaRedirect":return pg;case"reauthViaPopup":case"reauthViaRedirect":return fg;default:Be(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new Er(2e3,1e4);class cn extends Vu{constructor(e,n,s,i,o){super(e,n,i,o),this.provider=s,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mg.get())};e()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="pendingRedirect",os=new Map;class _g extends Vu{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=os.get(this.auth._key());if(!e){try{const s=await yg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}os.set(this.auth._key(),e)}return this.bypassAuthState||os.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yg(r,e){const n=wg(e),s=Eg(r);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function vg(r,e){os.set(r._key(),e)}function Eg(r){return rt(r._redirectPersistence)}function wg(r){return is(gg,r.config.apiKey,r.name)}async function Tg(r,e,n=!1){if(qe(r.app))return Promise.reject(st(r));const s=kt(r),i=hg(s,e),c=await new _g(s,i,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=10*60*1e3;class Ag{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Lu(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ig&&this.cachedEventUids.clear(),this.cachedEventUids.has(zc(e))}saveEventToCache(e){this.cachedEventUids.add(zc(e)),this.lastProcessedEventTime=Date.now()}}function zc(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Lu({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Rg(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lu(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(r,e={}){return ht(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sg=/^https?/;async function Cg(r){if(r.config.emulator)return;const{authorizedDomains:e}=await bg(r);for(const n of e)try{if(kg(n))return}catch{}Be(r,"unauthorized-domain")}function kg(r){const e=Ji(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!Sg.test(n))return!1;if(Pg.test(r))return s===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Dg=new Er(3e4,6e4);function Wc(){const r=We().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function Ng(r){return new Promise((e,n)=>{var s,i,o;function c(){Wc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wc(),n(ze(r,"network-request-failed"))},timeout:Dg.get()})}if(!((i=(s=We().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=We().gapi)===null||o===void 0)&&o.load)c();else{const l=wm("iframefcb");return We()[l]=()=>{gapi.load?c():n(ze(r,"network-request-failed"))},Eu(`${Em()}?onload=${l}`).catch(h=>n(h))}}).catch(e=>{throw as=null,e})}let as=null;function Og(r){return as=as||Ng(r),as}/**
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
 */const Vg=new Er(5e3,15e3),Lg="__/auth/iframe",Mg="emulator/auth/iframe",xg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ug=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fg(r){const e=r.config;U(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Ro(e,Mg):`https://${r.config.authDomain}/${Lg}`,s={apiKey:e.apiKey,appName:r.name,v:Xt},i=Ug.get(r.config.apiHost);i&&(s.eid=i);const o=r._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${vr(s).slice(1)}`}async function Bg(r){const e=await Og(r),n=We().gapi;return U(n,r,"internal-error"),e.open({where:document.body,url:Fg(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xg,dontclear:!0},s=>new Promise(async(i,o)=>{await s.restyle({setHideOnLeave:!1});const c=ze(r,"network-request-failed"),l=We().setTimeout(()=>{o(c)},Vg.get());function h(){We().clearTimeout(l),i(s)}s.ping(h).then(h,()=>{o(c)})}))}/**
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
 */const $g={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jg=500,qg=600,Hg="_blank",zg="http://localhost";class Gc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wg(r,e,n,s=jg,i=qg){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const h=Object.assign(Object.assign({},$g),{width:s.toString(),height:i.toString(),top:o,left:c}),f=be().toLowerCase();n&&(l=fu(f)?Hg:n),hu(f)&&(e=e||zg,h.scrollbars="yes");const m=Object.entries(h).reduce((R,[S,N])=>`${R}${S}=${N},`,"");if(hm(f)&&l!=="_self")return Gg(e||"",l),new Gc(null);const v=window.open(e||"",l,m);U(v,r,"popup-blocked");try{v.focus()}catch{}return new Gc(v)}function Gg(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Kg="__/auth/handler",Qg="emulator/auth/handler",Xg=encodeURIComponent("fac");async function Kc(r,e,n,s,i,o){U(r.config.authDomain,r,"auth-domain-config-required"),U(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Xt,eventId:i};if(e instanceof Tu){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Of(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,v]of Object.entries({}))c[m]=v}if(e instanceof Tr){const m=e.getScopes().filter(v=>v!=="");m.length>0&&(c.scopes=m.join(","))}r.tenantId&&(c.tid=r.tenantId);const l=c;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const h=await r._getAppCheckToken(),f=h?`#${Xg}=${encodeURIComponent(h)}`:"";return`${Jg(r)}?${vr(l).slice(1)}${f}`}function Jg({config:r}){return r.emulator?Ro(r,Qg):`https://${r.authDomain}/${Kg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="webStorageSupport";class Yg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cu,this._completeRedirectFn=Tg,this._overrideRedirectResult=vg}async _openPopup(e,n,s,i){var o;at((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const c=await Kc(e,n,s,Ji(),i);return Wg(e,c,ko())}async _openRedirect(e,n,s,i){await this._originValidation(e);const o=await Kc(e,n,s,Ji(),i);return tg(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(at(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Bg(e),s=new Ag(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fi,{type:Fi},i=>{var o;const c=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Fi];c!==void 0&&n(!!c),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yu()||du()||Po()}}const Zg=Yg;var Qc="@firebase/auth",Xc="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n_(r){qt(new bt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=s.options;U(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:c,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vu(r)},f=new _m(s,i,o,h);return bm(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),qt(new bt("auth-internal",e=>{const n=kt(e.getProvider("auth").getImmediate());return(s=>new e_(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Qc,Xc,t_(r)),He(Qc,Xc,"esm2017")}/**
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
 */const r_=5*60,s_=Ql("authIdTokenMaxAge")||r_;let Jc=null;const i_=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>s_)return;const i=n==null?void 0:n.token;Jc!==i&&(Jc=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function o_(r=To()){const e=Vs(r,"auth");if(e.isInitialized())return e.getImmediate();const n=Rm(r,{popupRedirectResolver:Zg,persistence:[ug,Ym,Cu]}),s=Ql("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const c=i_(o.toString());Gm(n,c,()=>c(n.currentUser)),Wm(n,l=>c(l))}}const i=Wl("auth");return i&&Pm(n,`http://${i}`),n}function a_(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}ym({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=i=>{const o=ze("internal-error");o.customData=i,n(o)},s.type="text/javascript",s.charset="UTF-8",a_().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n_("Browser");var Yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ft,Mu;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function y(){}y.prototype=g.prototype,w.D=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(E,I,b){for(var _=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)_[Ye-2]=arguments[Ye];return g.prototype[I].apply(E,_)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,y){y||(y=0);var E=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)E[I]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(I=0;16>I;++I)E[I]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],I=w.g[2];var b=w.g[3],_=g+(b^y&(I^b))+E[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=b+(I^g&(y^I))+E[1]+3905402710&4294967295,b=g+(_<<12&4294967295|_>>>20),_=I+(y^b&(g^y))+E[2]+606105819&4294967295,I=b+(_<<17&4294967295|_>>>15),_=y+(g^I&(b^g))+E[3]+3250441966&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(b^y&(I^b))+E[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=b+(I^g&(y^I))+E[5]+1200080426&4294967295,b=g+(_<<12&4294967295|_>>>20),_=I+(y^b&(g^y))+E[6]+2821735955&4294967295,I=b+(_<<17&4294967295|_>>>15),_=y+(g^I&(b^g))+E[7]+4249261313&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(b^y&(I^b))+E[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=b+(I^g&(y^I))+E[9]+2336552879&4294967295,b=g+(_<<12&4294967295|_>>>20),_=I+(y^b&(g^y))+E[10]+4294925233&4294967295,I=b+(_<<17&4294967295|_>>>15),_=y+(g^I&(b^g))+E[11]+2304563134&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(b^y&(I^b))+E[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=b+(I^g&(y^I))+E[13]+4254626195&4294967295,b=g+(_<<12&4294967295|_>>>20),_=I+(y^b&(g^y))+E[14]+2792965006&4294967295,I=b+(_<<17&4294967295|_>>>15),_=y+(g^I&(b^g))+E[15]+1236535329&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(I^b&(y^I))+E[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^I&(g^y))+E[6]+3225465664&4294967295,b=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(b^g))+E[11]+643717713&4294967295,I=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(I^b))+E[0]+3921069994&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^b&(y^I))+E[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^I&(g^y))+E[10]+38016083&4294967295,b=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(b^g))+E[15]+3634488961&4294967295,I=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(I^b))+E[4]+3889429448&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^b&(y^I))+E[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^I&(g^y))+E[14]+3275163606&4294967295,b=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(b^g))+E[3]+4107603335&4294967295,I=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(I^b))+E[8]+1163531501&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^b&(y^I))+E[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^I&(g^y))+E[2]+4243563512&4294967295,b=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(b^g))+E[7]+1735328473&4294967295,I=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(I^b))+E[12]+2368359562&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(y^I^b)+E[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^I)+E[8]+2272392833&4294967295,b=g+(_<<11&4294967295|_>>>21),_=I+(b^g^y)+E[11]+1839030562&4294967295,I=b+(_<<16&4294967295|_>>>16),_=y+(I^b^g)+E[14]+4259657740&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^b)+E[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^I)+E[4]+1272893353&4294967295,b=g+(_<<11&4294967295|_>>>21),_=I+(b^g^y)+E[7]+4139469664&4294967295,I=b+(_<<16&4294967295|_>>>16),_=y+(I^b^g)+E[10]+3200236656&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^b)+E[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^I)+E[0]+3936430074&4294967295,b=g+(_<<11&4294967295|_>>>21),_=I+(b^g^y)+E[3]+3572445317&4294967295,I=b+(_<<16&4294967295|_>>>16),_=y+(I^b^g)+E[6]+76029189&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^b)+E[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^I)+E[12]+3873151461&4294967295,b=g+(_<<11&4294967295|_>>>21),_=I+(b^g^y)+E[15]+530742520&4294967295,I=b+(_<<16&4294967295|_>>>16),_=y+(I^b^g)+E[2]+3299628645&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(I^(y|~b))+E[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~I))+E[7]+1126891415&4294967295,b=g+(_<<10&4294967295|_>>>22),_=I+(g^(b|~y))+E[14]+2878612391&4294967295,I=b+(_<<15&4294967295|_>>>17),_=y+(b^(I|~g))+E[5]+4237533241&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~b))+E[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~I))+E[3]+2399980690&4294967295,b=g+(_<<10&4294967295|_>>>22),_=I+(g^(b|~y))+E[10]+4293915773&4294967295,I=b+(_<<15&4294967295|_>>>17),_=y+(b^(I|~g))+E[1]+2240044497&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~b))+E[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~I))+E[15]+4264355552&4294967295,b=g+(_<<10&4294967295|_>>>22),_=I+(g^(b|~y))+E[6]+2734768916&4294967295,I=b+(_<<15&4294967295|_>>>17),_=y+(b^(I|~g))+E[13]+1309151649&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~b))+E[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~I))+E[11]+3174756917&4294967295,b=g+(_<<10&4294967295|_>>>22),_=I+(g^(b|~y))+E[2]+718787259&4294967295,I=b+(_<<15&4294967295|_>>>17),_=y+(b^(I|~g))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}s.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var y=g-this.blockSize,E=this.B,I=this.h,b=0;b<g;){if(I==0)for(;b<=y;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<g;)if(E[I++]=w.charCodeAt(b++),I==this.blockSize){i(this,E),I=0;break}}else for(;b<g;)if(E[I++]=w[b++],I==this.blockSize){i(this,E),I=0;break}}this.h=I,this.o+=g},s.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var y=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=y&255,y/=256;for(this.u(w),w=Array(16),g=y=0;4>g;++g)for(var E=0;32>E;E+=8)w[y++]=this.g[g]>>>E&255;return w};function o(w,g){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function c(w,g){this.h=g;for(var y=[],E=!0,I=w.length-1;0<=I;I--){var b=w[I]|0;E&&b==g||(y[I]=b,E=!1)}this.g=y}var l={};function h(w){return-128<=w&&128>w?o(w,function(g){return new c([g|0],0>g?-1:0)}):new c([w|0],0>w?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return v;if(0>w)return D(f(-w));for(var g=[],y=1,E=0;w>=y;E++)g[E]=w/y|0,y*=4294967296;return new c(g,0)}function m(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return D(m(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(g,8)),E=v,I=0;I<w.length;I+=8){var b=Math.min(8,w.length-I),_=parseInt(w.substring(I,I+b),g);8>b?(b=f(Math.pow(g,b)),E=E.j(b).add(f(_))):(E=E.j(y),E=E.add(f(_)))}return E}var v=h(0),R=h(1),S=h(16777216);r=c.prototype,r.m=function(){if(V(this))return-D(this).m();for(var w=0,g=1,y=0;y<this.g.length;y++){var E=this.i(y);w+=(0<=E?E:4294967296+E)*g,g*=4294967296}return w},r.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(V(this))return"-"+D(this).toString(w);for(var g=f(Math.pow(w,6)),y=this,E="";;){var I=z(y,g).g;y=H(y,I.j(g));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=I,N(y))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},r.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function V(w){return w.h==-1}r.l=function(w){return w=H(this,w),V(w)?-1:N(w)?0:1};function D(w){for(var g=w.g.length,y=[],E=0;E<g;E++)y[E]=~w.g[E];return new c(y,~w.h).add(R)}r.abs=function(){return V(this)?D(this):this},r.add=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0,I=0;I<=g;I++){var b=E+(this.i(I)&65535)+(w.i(I)&65535),_=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);E=_>>>16,b&=65535,_&=65535,y[I]=_<<16|b}return new c(y,y[y.length-1]&-2147483648?-1:0)};function H(w,g){return w.add(D(g))}r.j=function(w){if(N(this)||N(w))return v;if(V(this))return V(w)?D(this).j(D(w)):D(D(this).j(w));if(V(w))return D(this.j(D(w)));if(0>this.l(S)&&0>w.l(S))return f(this.m()*w.m());for(var g=this.g.length+w.g.length,y=[],E=0;E<2*g;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<w.g.length;I++){var b=this.i(E)>>>16,_=this.i(E)&65535,Ye=w.i(I)>>>16,Sn=w.i(I)&65535;y[2*E+2*I]+=_*Sn,q(y,2*E+2*I),y[2*E+2*I+1]+=b*Sn,q(y,2*E+2*I+1),y[2*E+2*I+1]+=_*Ye,q(y,2*E+2*I+1),y[2*E+2*I+2]+=b*Ye,q(y,2*E+2*I+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new c(y,0)};function q(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function j(w,g){this.g=w,this.h=g}function z(w,g){if(N(g))throw Error("division by zero");if(N(w))return new j(v,v);if(V(w))return g=z(D(w),g),new j(D(g.g),D(g.h));if(V(g))return g=z(w,D(g)),new j(D(g.g),g.h);if(30<w.g.length){if(V(w)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var y=R,E=g;0>=E.l(w);)y=fe(y),E=fe(E);var I=Z(y,1),b=Z(E,1);for(E=Z(E,2),y=Z(y,2);!N(E);){var _=b.add(E);0>=_.l(w)&&(I=I.add(y),b=_),E=Z(E,1),y=Z(y,1)}return g=H(w,I.j(g)),new j(I,g)}for(I=v;0<=w.l(g);){for(y=Math.max(1,Math.floor(w.m()/g.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=f(y),_=b.j(g);V(_)||0<_.l(w);)y-=E,b=f(y),_=b.j(g);N(b)&&(b=R),I=I.add(b),w=H(w,_)}return new j(I,w)}r.A=function(w){return z(this,w).h},r.and=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)&w.i(E);return new c(y,this.h&w.h)},r.or=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)|w.i(E);return new c(y,this.h|w.h)},r.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)^w.i(E);return new c(y,this.h^w.h)};function fe(w){for(var g=w.g.length+1,y=[],E=0;E<g;E++)y[E]=w.i(E)<<1|w.i(E-1)>>>31;return new c(y,w.h)}function Z(w,g){var y=g>>5;g%=32;for(var E=w.g.length-y,I=[],b=0;b<E;b++)I[b]=0<g?w.i(b+y)>>>g|w.i(b+y+1)<<32-g:w.i(b+y);return new c(I,w.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Mu=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=m,Ft=c}).apply(typeof Yc<"u"?Yc:typeof self<"u"?self:typeof window<"u"?window:{});var Yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xu,Xn,Uu,cs,eo,Fu,Bu,$u;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yr=="object"&&Yr];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=n(this);function i(a,u){if(u)e:{var d=s;a=a.split(".");for(var p=0;p<a.length-1;p++){var A=a[p];if(!(A in d))break e;d=d[A]}a=a[a.length-1],p=d[a],u=u(p),u!=p&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function o(a,u){a instanceof String&&(a+="");var d=0,p=!1,A={next:function(){if(!p&&d<a.length){var P=d++;return{value:u(P,a[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(a){return a||function(){return o(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function h(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function f(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function m(a,u,d){return a.call.apply(a.bind,arguments)}function v(a,u,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function R(a,u,d){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:v,R.apply(null,arguments)}function S(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function N(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,A,P){for(var O=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)O[Y-2]=arguments[Y];return u.prototype[A].apply(p,O)}}function V(a){const u=a.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=a[p];return d}return[]}function D(a,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(h(p)){const A=a.length||0,P=p.length||0;a.length=A+P;for(let O=0;O<P;O++)a[A+O]=p[O]}else a.push(p)}}class H{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function q(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var fe=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function Z(a,u,d){for(const p in a)u.call(d,a[p],p,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)a[d]=p[d];for(let P=0;P<y.length;P++)d=y[P],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function I(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function b(a){l.setTimeout(()=>{throw a},0)}function _(){var a=li;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Ye{constructor(){this.h=this.g=null}add(u,d){const p=Sn.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Sn=new H(()=>new Dd,a=>a.reset());class Dd{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Cn,kn=!1,li=new Ye,Ia=()=>{const a=l.Promise.resolve(void 0);Cn=()=>{a.then(Nd)}};var Nd=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(d){b(d)}var u=Sn;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}kn=!1};function dt(){this.s=this.s,this.C=this.C}dt.prototype.s=!1,dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Od=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function Dn(a,u){if(ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(fe){e:{try{z(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vd[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Dn.aa.h.call(this)}}N(Dn,ve);var Vd={2:"touch",3:"pen",4:"mouse"};Dn.prototype.h=function(){Dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Nr="closure_listenable_"+(1e6*Math.random()|0),Ld=0;function Md(a,u,d,p,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=A,this.key=++Ld,this.da=this.fa=!1}function Or(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vr(a){this.src=a,this.g={},this.h=0}Vr.prototype.add=function(a,u,d,p,A){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var O=hi(a,u,p,A);return-1<O?(u=a[O],d||(u.fa=!1)):(u=new Md(u,this.src,P,!!p,A),u.fa=d,a.push(u)),u};function ui(a,u){var d=u.type;if(d in a.g){var p=a.g[d],A=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=A)&&Array.prototype.splice.call(p,A,1),P&&(Or(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function hi(a,u,d,p){for(var A=0;A<a.length;++A){var P=a[A];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==p)return A}return-1}var di="closure_lm_"+(1e6*Math.random()|0),fi={};function Aa(a,u,d,p,A){if(Array.isArray(u)){for(var P=0;P<u.length;P++)Aa(a,u[P],d,p,A);return null}return d=Pa(d),a&&a[Nr]?a.K(u,d,f(p)?!!p.capture:!1,A):xd(a,u,d,!1,p,A)}function xd(a,u,d,p,A,P){if(!u)throw Error("Invalid event type");var O=f(A)?!!A.capture:!!A,Y=mi(a);if(Y||(a[di]=Y=new Vr(a)),d=Y.add(u,d,p,O,P),d.proxy)return d;if(p=Ud(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Od||(A=O),A===void 0&&(A=!1),a.addEventListener(u.toString(),p,A);else if(a.attachEvent)a.attachEvent(ba(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ud(){function a(d){return u.call(a.src,a.listener,d)}const u=Fd;return a}function Ra(a,u,d,p,A){if(Array.isArray(u))for(var P=0;P<u.length;P++)Ra(a,u[P],d,p,A);else p=f(p)?!!p.capture:!!p,d=Pa(d),a&&a[Nr]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],d=hi(P,d,p,A),-1<d&&(Or(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=mi(a))&&(u=a.g[u.toString()],a=-1,u&&(a=hi(u,d,p,A)),(d=-1<a?u[a]:null)&&pi(d))}function pi(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Nr])ui(u.i,a);else{var d=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(d,p,a.capture):u.detachEvent?u.detachEvent(ba(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=mi(u))?(ui(d,a),d.h==0&&(d.src=null,u[di]=null)):Or(a)}}}function ba(a){return a in fi?fi[a]:fi[a]="on"+a}function Fd(a,u){if(a.da)a=!0;else{u=new Dn(u,this);var d=a.listener,p=a.ha||a.src;a.fa&&pi(a),a=d.call(p,u)}return a}function mi(a){return a=a[di],a instanceof Vr?a:null}var gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pa(a){return typeof a=="function"?a:(a[gi]||(a[gi]=function(u){return a.handleEvent(u)}),a[gi])}function Ee(){dt.call(this),this.i=new Vr(this),this.M=this,this.F=null}N(Ee,dt),Ee.prototype[Nr]=!0,Ee.prototype.removeEventListener=function(a,u,d,p){Ra(this,a,u,d,p)};function Pe(a,u){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new ve(u,a);else if(u instanceof ve)u.target=u.target||a;else{var A=u;u=new ve(p,a),E(u,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var O=u.g=d[P];A=Lr(O,p,!0,u)&&A}if(O=u.g=a,A=Lr(O,p,!0,u)&&A,A=Lr(O,p,!1,u)&&A,d)for(P=0;P<d.length;P++)O=u.g=d[P],A=Lr(O,p,!1,u)&&A}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],p=0;p<d.length;p++)Or(d[p]);delete a.g[u],a.h--}}this.F=null},Ee.prototype.K=function(a,u,d,p){return this.i.add(String(a),u,!1,d,p)},Ee.prototype.L=function(a,u,d,p){return this.i.add(String(a),u,!0,d,p)};function Lr(a,u,d,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,P=0;P<u.length;++P){var O=u[P];if(O&&!O.da&&O.capture==d){var Y=O.listener,pe=O.ha||O.src;O.fa&&ui(a.i,O),A=Y.call(pe,p)!==!1&&A}}return A&&!p.defaultPrevented}function Sa(a,u,d){if(typeof a=="function")d&&(a=R(a,d));else if(a&&typeof a.handleEvent=="function")a=R(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ca(a){a.g=Sa(()=>{a.g=null,a.i&&(a.i=!1,Ca(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Bd extends dt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ca(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nn(a){dt.call(this),this.h=a,this.g={}}N(Nn,dt);var ka=[];function Da(a){Z(a.g,function(u,d){this.g.hasOwnProperty(d)&&pi(u)},a),a.g={}}Nn.prototype.N=function(){Nn.aa.N.call(this),Da(this)},Nn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _i=l.JSON.stringify,$d=l.JSON.parse,jd=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function yi(){}yi.prototype.h=null;function Na(a){return a.h||(a.h=a.i())}function Oa(){}var On={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vi(){ve.call(this,"d")}N(vi,ve);function Ei(){ve.call(this,"c")}N(Ei,ve);var Ot={},Va=null;function Mr(){return Va=Va||new Ee}Ot.La="serverreachability";function La(a){ve.call(this,Ot.La,a)}N(La,ve);function Vn(a){const u=Mr();Pe(u,new La(u))}Ot.STAT_EVENT="statevent";function Ma(a,u){ve.call(this,Ot.STAT_EVENT,a),this.stat=u}N(Ma,ve);function Se(a){const u=Mr();Pe(u,new Ma(u,a))}Ot.Ma="timingevent";function xa(a,u){ve.call(this,Ot.Ma,a),this.size=u}N(xa,ve);function Ln(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Mn(){this.g=!0}Mn.prototype.xa=function(){this.g=!1};function qd(a,u,d,p,A,P){a.info(function(){if(a.g)if(P)for(var O="",Y=P.split("&"),pe=0;pe<Y.length;pe++){var Q=Y[pe].split("=");if(1<Q.length){var we=Q[0];Q=Q[1];var Te=we.split("_");O=2<=Te.length&&Te[1]=="type"?O+(we+"="+Q+"&"):O+(we+"=redacted&")}}else O=null;else O=P;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+u+`
`+d+`
`+O})}function Hd(a,u,d,p,A,P,O){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+u+`
`+d+`
`+P+" "+O})}function en(a,u,d,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Wd(a,d)+(p?" "+p:"")})}function zd(a,u){a.info(function(){return"TIMEOUT: "+u})}Mn.prototype.info=function(){};function Wd(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var O=1;O<A.length;O++)A[O]=""}}}}return _i(d)}catch{return u}}var xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ua={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wi;function Ur(){}N(Ur,yi),Ur.prototype.g=function(){return new XMLHttpRequest},Ur.prototype.i=function(){return{}},wi=new Ur;function ft(a,u,d,p){this.j=a,this.i=u,this.l=d,this.R=p||1,this.U=new Nn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fa}function Fa(){this.i=null,this.g="",this.h=!1}var Ba={},Ti={};function Ii(a,u,d){a.L=1,a.v=jr(Ze(u)),a.m=d,a.P=!0,$a(a,null)}function $a(a,u){a.F=Date.now(),Fr(a),a.A=Ze(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),tc(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Fa,a.g=vc(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Bd(R(a.Y,a,a.g),a.O)),u=a.U,d=a.g,p=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(ka[0]=A.toString()),A=ka);for(var P=0;P<A.length;P++){var O=Aa(d,A[P],p||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Vn(),qd(a.i,a.u,a.A,a.l,a.R,a.m)}ft.prototype.ca=function(a){a=a.target;const u=this.M;u&&et(a)==3?u.j():this.Y(a)},ft.prototype.Y=function(a){try{if(a==this.g)e:{const Te=et(this.g);var u=this.g.Ba();const rn=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||cc(this.g)))){this.J||Te!=4||u==7||(u==8||0>=rn?Vn(3):Vn(2)),Ai(this);var d=this.g.Z();this.X=d;t:if(ja(this)){var p=cc(this.g);a="";var A=p.length,P=et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vt(this),xn(this);var O="";break t}this.h.i=new l.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(p[u],{stream:!(P&&u==A-1)});p.length=0,this.h.g+=a,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Hd(this.i,this.u,this.A,this.l,this.R,Te,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Y,pe=this.g;if((Y=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Y)){var Q=Y;break t}}Q=null}if(d=Q)en(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ri(this,d);else{this.o=!1,this.s=3,Se(12),Vt(this),xn(this);break e}}if(this.P){d=!0;let xe;for(;!this.J&&this.C<O.length;)if(xe=Gd(this,O),xe==Ti){Te==4&&(this.s=4,Se(14),d=!1),en(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==Ba){this.s=4,Se(15),en(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else en(this.i,this.l,xe,null),Ri(this,xe);if(ja(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||O.length!=0||this.h.h||(this.s=1,Se(16),d=!1),this.o=this.o&&d,!d)en(this.i,this.l,O,"[Invalid Chunked Response]"),Vt(this),xn(this);else if(0<O.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Di(we),we.M=!0,Se(11))}}else en(this.i,this.l,O,null),Ri(this,O);Te==4&&Vt(this),this.o&&!this.J&&(Te==4?mc(this.j,this):(this.o=!1,Fr(this)))}else hf(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),Vt(this),xn(this)}}}catch{}finally{}};function ja(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Gd(a,u){var d=a.C,p=u.indexOf(`
`,d);return p==-1?Ti:(d=Number(u.substring(d,p)),isNaN(d)?Ba:(p+=1,p+d>u.length?Ti:(u=u.slice(p,p+d),a.C=p+d,u)))}ft.prototype.cancel=function(){this.J=!0,Vt(this)};function Fr(a){a.S=Date.now()+a.I,qa(a,a.I)}function qa(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ln(R(a.ba,a),u)}function Ai(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ft.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(zd(this.i,this.A),this.L!=2&&(Vn(),Se(17)),Vt(this),this.s=2,xn(this)):qa(this,this.S-a)};function xn(a){a.j.G==0||a.J||mc(a.j,a)}function Vt(a){Ai(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Da(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ri(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||bi(d.h,a))){if(!a.K&&bi(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Kr(d),Wr(d);else break e;ki(d),Se(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ln(R(d.Za,d),6e3));if(1>=Wa(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Mt(d,11)}else if((a.K||d.g==a)&&Kr(d),!q(u))for(A=d.Da.g.parse(u),u=0;u<A.length;u++){let Q=A[u];if(d.T=Q[0],Q=Q[1],d.G==2)if(Q[0]=="c"){d.K=Q[1],d.ia=Q[2];const we=Q[3];we!=null&&(d.la=we,d.j.info("VER="+d.la));const Te=Q[4];Te!=null&&(d.Aa=Te,d.j.info("SVER="+d.Aa));const rn=Q[5];rn!=null&&typeof rn=="number"&&0<rn&&(p=1.5*rn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const xe=a.g;if(xe){const Xr=xe.g?xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xr){var P=p.h;P.g||Xr.indexOf("spdy")==-1&&Xr.indexOf("quic")==-1&&Xr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Pi(P,P.h),P.h=null))}if(p.D){const Ni=xe.g?xe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ni&&(p.ya=Ni,ee(p.I,p.D,Ni))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=a;if(p.qa=yc(p,p.J?p.ia:null,p.W),O.K){Ga(p.h,O);var Y=O,pe=p.L;pe&&(Y.I=pe),Y.B&&(Ai(Y),Fr(Y)),p.g=O}else fc(p);0<d.i.length&&Gr(d)}else Q[0]!="stop"&&Q[0]!="close"||Mt(d,7);else d.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Mt(d,7):Ci(d):Q[0]!="noop"&&d.l&&d.l.ta(Q),d.v=0)}}Vn(4)}catch{}}var Kd=class{constructor(a,u){this.g=a,this.map=u}};function Ha(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function za(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wa(a){return a.h?1:a.g?a.g.size:0}function bi(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Pi(a,u){a.g?a.g.add(u):a.h=u}function Ga(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Ha.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ka(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return V(a.i)}function Qd(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(h(a)){for(var u=[],d=a.length,p=0;p<d;p++)u.push(a[p]);return u}u=[],d=0;for(p in a)u[d++]=a[p];return u}function Xd(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(h(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const p in a)u[d++]=p;return u}}}function Qa(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(h(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Xd(a),p=Qd(a),A=p.length,P=0;P<A;P++)u.call(void 0,p[P],d&&d[P],a)}var Xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jd(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),A=null;if(0<=p){var P=a[d].substring(0,p);A=a[d].substring(p+1)}else P=a[d];u(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Lt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lt){this.h=a.h,Br(this,a.j),this.o=a.o,this.g=a.g,$r(this,a.s),this.l=a.l;var u=a.i,d=new Bn;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Ja(this,d),this.m=a.m}else a&&(u=String(a).match(Xa))?(this.h=!1,Br(this,u[1]||"",!0),this.o=Un(u[2]||""),this.g=Un(u[3]||"",!0),$r(this,u[4]),this.l=Un(u[5]||"",!0),Ja(this,u[6]||"",!0),this.m=Un(u[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}Lt.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Fn(u,Ya,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Fn(u,Ya,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Fn(d,d.charAt(0)=="/"?ef:Zd,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Fn(d,nf)),a.join("")};function Ze(a){return new Lt(a)}function Br(a,u,d){a.j=d?Un(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function $r(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Ja(a,u,d){u instanceof Bn?(a.i=u,rf(a.i,a.h)):(d||(u=Fn(u,tf)),a.i=new Bn(u,a.h))}function ee(a,u,d){a.i.set(u,d)}function jr(a){return ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Un(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fn(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Yd),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Yd(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ya=/[#\/\?@]/g,Zd=/[#\?:]/g,ef=/[#\?]/g,tf=/[#\?@]/g,nf=/#/g;function Bn(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function pt(a){a.g||(a.g=new Map,a.h=0,a.i&&Jd(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Bn.prototype,r.add=function(a,u){pt(this),this.i=null,a=tn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Za(a,u){pt(a),u=tn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ec(a,u){return pt(a),u=tn(a,u),a.g.has(u)}r.forEach=function(a,u){pt(this),this.g.forEach(function(d,p){d.forEach(function(A){a.call(u,A,p,this)},this)},this)},r.na=function(){pt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const A=a[p];for(let P=0;P<A.length;P++)d.push(u[p])}return d},r.V=function(a){pt(this);let u=[];if(typeof a=="string")ec(this,a)&&(u=u.concat(this.g.get(tn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return pt(this),this.i=null,a=tn(this,a),ec(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function tc(a,u,d){Za(a,u),0<d.length&&(a.i=null,a.g.set(tn(a,u),V(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const P=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var A=P;O[p]!==""&&(A+="="+encodeURIComponent(String(O[p]))),a.push(A)}}return this.i=a.join("&")};function tn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function rf(a,u){u&&!a.j&&(pt(a),a.i=null,a.g.forEach(function(d,p){var A=p.toLowerCase();p!=A&&(Za(this,p),tc(this,A,d))},a)),a.j=u}function sf(a,u){const d=new Mn;if(l.Image){const p=new Image;p.onload=S(mt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=S(mt,d,"TestLoadImage: error",!1,u,p),p.onabort=S(mt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=S(mt,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function of(a,u){const d=new Mn,p=new AbortController,A=setTimeout(()=>{p.abort(),mt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(P=>{clearTimeout(A),P.ok?mt(d,"TestPingServer: ok",!0,u):mt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),mt(d,"TestPingServer: error",!1,u)})}function mt(a,u,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function af(){this.g=new jd}function cf(a,u,d){const p=d||"";try{Qa(a,function(A,P){let O=A;f(A)&&(O=_i(A)),u.push(p+P+"="+encodeURIComponent(O))})}catch(A){throw u.push(p+"type="+encodeURIComponent("_badmap")),A}}function qr(a){this.l=a.Ub||null,this.j=a.eb||!1}N(qr,yi),qr.prototype.g=function(){return new Hr(this.l,this.j)},qr.prototype.i=function(a){return function(){return a}}({});function Hr(a,u){Ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Hr,Ee),r=Hr.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,jn(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function nc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?$n(this):jn(this),this.readyState==3&&nc(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,$n(this))},r.Qa=function(a){this.g&&(this.response=a,$n(this))},r.ga=function(){this.g&&$n(this)};function $n(a){a.readyState=4,a.l=null,a.j=null,a.v=null,jn(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function jn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rc(a){let u="";return Z(a,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Si(a,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=rc(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ee(a,u,d))}function re(a){Ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(re,Ee);var lf=/^https?$/i,uf=["POST","PUT"];r=re.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wi.g(),this.v=this.o?Na(this.o):Na(wi),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){sc(this,P);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(uf,u,void 0))||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,O]of d)this.g.setRequestHeader(P,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ac(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){sc(this,P)}};function sc(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,ic(a),zr(a)}function ic(a){a.A||(a.A=!0,Pe(a,"complete"),Pe(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Pe(this,"complete"),Pe(this,"abort"),zr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zr(this,!0)),re.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?oc(this):this.bb())},r.bb=function(){oc(this)};function oc(a){if(a.h&&typeof c<"u"&&(!a.v[1]||et(a)!=4||a.Z()!=2)){if(a.u&&et(a)==4)Sa(a.Ea,0,a);else if(Pe(a,"readystatechange"),et(a)==4){a.h=!1;try{const O=a.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=O===0){var A=String(a.D).match(Xa)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),p=!lf.test(A?A.toLowerCase():"")}d=p}if(d)Pe(a,"complete"),Pe(a,"success");else{a.m=6;try{var P=2<et(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",ic(a)}}finally{zr(a)}}}}function zr(a,u){if(a.g){ac(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Pe(a,"ready");try{d.onreadystatechange=p}catch{}}}function ac(a){a.I&&(l.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function et(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<et(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),$d(u)}};function cc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function hf(a){const u={};a=(a.g&&2<=et(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(q(a[p]))continue;var d=I(a[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[A]||[];u[A]=P,P.push(d)}w(u,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function lc(a){this.Aa=0,this.i=[],this.j=new Mn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,a),this.cb=qn("retryDelaySeedMs",1e4,a),this.Wa=qn("forwardChannelMaxRetries",2,a),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ha(a&&a.concurrentRequestLimit),this.Da=new af,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=lc.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,p){Se(0),this.W=a,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=yc(this,null,this.W),Gr(this)};function Ci(a){if(uc(a),a.G==3){var u=a.U++,d=Ze(a.I);if(ee(d,"SID",a.K),ee(d,"RID",u),ee(d,"TYPE","terminate"),Hn(a,d),u=new ft(a,a.j,u),u.L=2,u.v=jr(Ze(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=vc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Fr(u)}_c(a)}function Wr(a){a.g&&(Di(a),a.g.cancel(),a.g=null)}function uc(a){Wr(a),a.u&&(l.clearTimeout(a.u),a.u=null),Kr(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Gr(a){if(!za(a.h)&&!a.s){a.s=!0;var u=a.Ga;Cn||Ia(),kn||(Cn(),kn=!0),li.add(u,a),a.B=0}}function df(a,u){return Wa(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ln(R(a.Ga,a,u),gc(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new ft(this,this.j,a);let P=this.o;if(this.S&&(P?(P=g(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=dc(this,A,u),d=Ze(this.I),ee(d,"RID",a),ee(d,"CVER",22),this.D&&ee(d,"X-HTTP-Session-Id",this.D),Hn(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(rc(P)))+"&"+u:this.m&&Si(d,this.m,P)),Pi(this.h,A),this.Ua&&ee(d,"TYPE","init"),this.P?(ee(d,"$req",u),ee(d,"SID","null"),A.T=!0,Ii(A,d,null)):Ii(A,d,u),this.G=2}}else this.G==3&&(a?hc(this,a):this.i.length==0||za(this.h)||hc(this))};function hc(a,u){var d;u?d=u.l:d=a.U++;const p=Ze(a.I);ee(p,"SID",a.K),ee(p,"RID",d),ee(p,"AID",a.T),Hn(a,p),a.m&&a.o&&Si(p,a.m,a.o),d=new ft(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=dc(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Pi(a.h,d),Ii(d,p,u)}function Hn(a,u){a.H&&Z(a.H,function(d,p){ee(u,p,d)}),a.l&&Qa({},function(d,p){ee(u,p,d)})}function dc(a,u,d){d=Math.min(a.i.length,d);var p=a.l?R(a.l.Na,a.l,a):null;e:{var A=a.i;let P=-1;for(;;){const O=["count="+d];P==-1?0<d?(P=A[0].g,O.push("ofs="+P)):P=0:O.push("ofs="+P);let Y=!0;for(let pe=0;pe<d;pe++){let Q=A[pe].g;const we=A[pe].map;if(Q-=P,0>Q)P=Math.max(0,A[pe].g-100),Y=!1;else try{cf(we,O,"req"+Q+"_")}catch{p&&p(we)}}if(Y){p=O.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,p}function fc(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Cn||Ia(),kn||(Cn(),kn=!0),li.add(u,a),a.v=0}}function ki(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ln(R(a.Fa,a),gc(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,pc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ln(R(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),Wr(this),pc(this))};function Di(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function pc(a){a.g=new ft(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Ze(a.qa);ee(u,"RID","rpc"),ee(u,"SID",a.K),ee(u,"AID",a.T),ee(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ee(u,"TO",a.ja),ee(u,"TYPE","xmlhttp"),Hn(a,u),a.m&&a.o&&Si(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=jr(Ze(u)),d.m=null,d.P=!0,$a(d,a)}r.Za=function(){this.C!=null&&(this.C=null,Wr(this),ki(this),Se(19))};function Kr(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function mc(a,u){var d=null;if(a.g==u){Kr(a),Di(a),a.g=null;var p=2}else if(bi(a.h,u))d=u.D,Ga(a.h,u),p=1;else return;if(a.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;p=Mr(),Pe(p,new xa(p,d)),Gr(a)}else fc(a);else if(A=u.s,A==3||A==0&&0<u.X||!(p==1&&df(a,u)||p==2&&ki(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),A){case 1:Mt(a,5);break;case 4:Mt(a,10);break;case 3:Mt(a,6);break;default:Mt(a,2)}}}function gc(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Mt(a,u){if(a.j.info("Error code "+u),u==2){var d=R(a.fb,a),p=a.Xa;const A=!p;p=new Lt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Br(p,"https"),jr(p),A?sf(p.toString(),d):of(p.toString(),d)}else Se(2);a.G=0,a.l&&a.l.sa(u),_c(a),uc(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function _c(a){if(a.G=0,a.ka=[],a.l){const u=Ka(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function yc(a,u,d){var p=d instanceof Lt?Ze(d):new Lt(d);if(p.g!="")u&&(p.g=u+"."+p.g),$r(p,p.s);else{var A=l.location;p=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var P=new Lt(null);p&&Br(P,p),u&&(P.g=u),A&&$r(P,A),d&&(P.l=d),p=P}return d=a.D,u=a.ya,d&&u&&ee(p,d,u),ee(p,"VER",a.la),Hn(a,p),p}function vc(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new re(new qr({eb:d})):new re(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ec(){}r=Ec.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Qr(){}Qr.prototype.g=function(a,u){return new Oe(a,u)};function Oe(a,u){Ee.call(this),this.g=new lc(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!q(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!q(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new nn(this)}N(Oe,Ee),Oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){Ci(this.g)},Oe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=_i(a),a=d);u.i.push(new Kd(u.Ya++,a)),u.G==3&&Gr(u)},Oe.prototype.N=function(){this.g.l=null,delete this.j,Ci(this.g),delete this.g,Oe.aa.N.call(this)};function wc(a){vi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}N(wc,vi);function Tc(){Ei.call(this),this.status=1}N(Tc,Ei);function nn(a){this.g=a}N(nn,Ec),nn.prototype.ua=function(){Pe(this.g,"a")},nn.prototype.ta=function(a){Pe(this.g,new wc(a))},nn.prototype.sa=function(a){Pe(this.g,new Tc)},nn.prototype.ra=function(){Pe(this.g,"b")},Qr.prototype.createWebChannel=Qr.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,$u=function(){return new Qr},Bu=function(){return Mr()},Fu=Ot,eo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xr.NO_ERROR=0,xr.TIMEOUT=8,xr.HTTP_ERROR=6,cs=xr,Ua.COMPLETE="complete",Uu=Ua,Oa.EventType=On,On.OPEN="a",On.CLOSE="b",On.ERROR="c",On.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,Xn=Oa,re.prototype.listenOnce=re.prototype.L,re.prototype.getLastError=re.prototype.Ka,re.prototype.getLastErrorCode=re.prototype.Ba,re.prototype.getStatus=re.prototype.Z,re.prototype.getResponseJson=re.prototype.Oa,re.prototype.getResponseText=re.prototype.oa,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Ha,xu=re}).apply(typeof Yr<"u"?Yr:typeof self<"u"?self:typeof window<"u"?window:{});const Zc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Eo("@firebase/firestore");function zn(){return Wt.logLevel}function L(r,...e){if(Wt.logLevel<=G.DEBUG){const n=e.map(No);Wt.debug(`Firestore (${Tn}): ${r}`,...n)}}function ct(r,...e){if(Wt.logLevel<=G.ERROR){const n=e.map(No);Wt.error(`Firestore (${Tn}): ${r}`,...n)}}function fn(r,...e){if(Wt.logLevel<=G.WARN){const n=e.map(No);Wt.warn(`Firestore (${Tn}): ${r}`,...n)}}function No(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r="Unexpected state"){const e=`FIRESTORE (${Tn}) INTERNAL ASSERTION FAILED: `+r;throw ct(e),new Error(e)}function J(r,e){r||F()}function $(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Je{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class c_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ae.UNAUTHENTICATED))}shutdown(){}}class l_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class u_{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){J(this.o===void 0);let s=this.i;const i=h=>this.i!==s?(s=this.i,n(h)):Promise.resolve();let o=new it;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new it,e.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new it)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(J(typeof s.accessToken=="string"),new ju(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Ae(e)}}class h_{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class d_{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new h_(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class p_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){J(this.o===void 0);const s=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.R;return this.R=o.token,L("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const i=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.R=n.token,new f_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=m_(40);for(let o=0;o<i.length;++o)s.length<20&&i[o]<n&&(s+=e.charAt(i[o]%e.length))}return s}}function X(r,e){return r<e?-1:r>e?1:0}function pn(r,e,n){return r.length===e.length&&r.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ue(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new ue(0,0))}static max(){return new B(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,s){n===void 0?n=0:n>e.length&&F(),s===void 0?s=e.length-n:s>e.length-n&&F(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const o=e.get(i),c=n.get(i);if(o<c)return-1;if(o>c)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends hr{construct(e,n,s){return new te(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const g_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends hr{construct(e,n,s){return new ge(e,n,s)}static isValidIdentifier(e){return g_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const o=()=>{if(s.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let c=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,i+=2}else l==="`"?(c=!c,i++):l!=="."||c?(s+=l,i++):(o(),i++)}if(o(),c)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(n)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(te.fromString(e))}static fromName(e){return new x(te.fromString(e).popFirst(5))}static empty(){return new x(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new te(e.slice()))}}function __(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,i=B.fromTimestamp(s===1e9?new ue(n+1,0):new ue(n,s));return new Pt(i,x.empty(),e)}function y_(r){return new Pt(r.readTime,r.key,-1)}class Pt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Pt(B.min(),x.empty(),-1)}static max(){return new Pt(B.max(),x.empty(),-1)}}function v_(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=x.comparator(r.documentKey,e.documentKey),n!==0?n:X(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==E_)throw r;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let i=0,o=0,c=!1;e.forEach(l=>{++i,l.next(()=>{++o,c&&o===i&&n()},h=>s(h))}),c=!0,o===i&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(i=>i?k.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,o)=>{s.push(n.call(this,i,o))}),this.waitFor(s)}static mapArray(e,n){return new k((s,i)=>{const o=e.length,c=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;n(e[f]).next(m=>{c[f]=m,++l,l===o&&s(c)},m=>i(m))}})}static doWhile(e,n){return new k((s,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):s()};o()})}}function T_(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rr(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Oo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Oo.oe=-1;function Us(r){return r==null}function Rs(r){return r===0&&1/r==-1/0}function I_(r){return typeof r=="number"&&Number.isInteger(r)&&!Rs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function Jt(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function Hu(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.comparator=e,this.root=n||me.EMPTY}insert(e,n){return new ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zr(this.root,e,this.comparator,!0)}}class Zr{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?s(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,o){this.key=e,this.value=n,this.color=s??me.RED,this.left=i??me.EMPTY,this.right=o??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,o){return new me(e??this.key,n??this.value,s??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const o=s(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,s),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return me.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,n,s,i,o){return this}insert(e,n,s){return new me(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tl(this.data.getIterator())}getIteratorFrom(e){return new tl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=s.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class tl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Ve([])}unionWith(e){let n=new _e(ge.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ve(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class zu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new zu("Invalid base64 string: "+o):o}}(e);return new ye(n)}static fromUint8Array(e){const n=function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o}(e);return new ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const A_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(r){if(J(!!r),typeof r=="string"){let e=0;const n=A_.exec(r);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:oe(r.seconds),nanos:oe(r.nanos)}}function oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Gt(r){return typeof r=="string"?ye.fromBase64String(r):ye.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lo(r){const e=r.mapValue.fields.__previous_value__;return Vo(e)?Lo(e):e}function dr(r){const e=St(r.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f}}class fr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es={mapValue:{}};function Kt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Vo(r)?4:P_(r)?9007199254740991:b_(r)?10:11:F()}function Qe(r,e){if(r===e)return!0;const n=Kt(r);if(n!==Kt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return dr(r).isEqual(dr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=St(i.timestampValue),l=St(o.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,o){return Gt(i.bytesValue).isEqual(Gt(o.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,o){return oe(i.geoPointValue.latitude)===oe(o.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(o.geoPointValue.longitude)}(r,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return oe(i.integerValue)===oe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const c=oe(i.doubleValue),l=oe(o.doubleValue);return c===l?Rs(c)===Rs(l):isNaN(c)&&isNaN(l)}return!1}(r,e);case 9:return pn(r.arrayValue.values||[],e.arrayValue.values||[],Qe);case 10:case 11:return function(i,o){const c=i.mapValue.fields||{},l=o.mapValue.fields||{};if(el(c)!==el(l))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(l[h]===void 0||!Qe(c[h],l[h])))return!1;return!0}(r,e);default:return F()}}function pr(r,e){return(r.values||[]).find(n=>Qe(n,e))!==void 0}function mn(r,e){if(r===e)return 0;const n=Kt(r),s=Kt(e);if(n!==s)return X(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(r.booleanValue,e.booleanValue);case 2:return function(o,c){const l=oe(o.integerValue||o.doubleValue),h=oe(c.integerValue||c.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(r,e);case 3:return nl(r.timestampValue,e.timestampValue);case 4:return nl(dr(r),dr(e));case 5:return X(r.stringValue,e.stringValue);case 6:return function(o,c){const l=Gt(o),h=Gt(c);return l.compareTo(h)}(r.bytesValue,e.bytesValue);case 7:return function(o,c){const l=o.split("/"),h=c.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=X(l[f],h[f]);if(m!==0)return m}return X(l.length,h.length)}(r.referenceValue,e.referenceValue);case 8:return function(o,c){const l=X(oe(o.latitude),oe(c.latitude));return l!==0?l:X(oe(o.longitude),oe(c.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return rl(r.arrayValue,e.arrayValue);case 10:return function(o,c){var l,h,f,m;const v=o.fields||{},R=c.fields||{},S=(l=v.value)===null||l===void 0?void 0:l.arrayValue,N=(h=R.value)===null||h===void 0?void 0:h.arrayValue,V=X(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((m=N==null?void 0:N.values)===null||m===void 0?void 0:m.length)||0);return V!==0?V:rl(S,N)}(r.mapValue,e.mapValue);case 11:return function(o,c){if(o===es.mapValue&&c===es.mapValue)return 0;if(o===es.mapValue)return 1;if(c===es.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=c.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let v=0;v<h.length&&v<m.length;++v){const R=X(h[v],m[v]);if(R!==0)return R;const S=mn(l[h[v]],f[m[v]]);if(S!==0)return S}return X(h.length,m.length)}(r.mapValue,e.mapValue);default:throw F()}}function nl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return X(r,e);const n=St(r),s=St(e),i=X(n.seconds,s.seconds);return i!==0?i:X(n.nanos,s.nanos)}function rl(r,e){const n=r.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const o=mn(n[i],s[i]);if(o)return o}return X(n.length,s.length)}function gn(r){return to(r)}function to(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=St(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Gt(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return x.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",i=!0;for(const o of n.values||[])i?i=!1:s+=",",s+=to(o);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const c of s)o?o=!1:i+=",",i+=`${c}:${to(n.fields[c])}`;return i+"}"}(r.mapValue):F()}function no(r){return!!r&&"integerValue"in r}function Mo(r){return!!r&&"arrayValue"in r}function sl(r){return!!r&&"nullValue"in r}function il(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ls(r){return!!r&&"mapValue"in r}function b_(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function nr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Jt(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=nr(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=nr(r.arrayValue.values[n]);return e}return Object.assign({},r)}function P_(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ls(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=nr(n)}setAll(e){let n=ge.emptyPath(),s={},i=[];e.forEach((c,l)=>{if(!n.isImmediateParentOf(l)){const h=this.getFieldsMap(n);this.applyChanges(h,s,i),s={},i=[],n=l.popLast()}c?s[l.lastSegment()]=nr(c):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,s,i)}delete(e){const n=this.field(e.popLast());ls(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ls(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Jt(n,(i,o)=>e[i]=o);for(const i of s)delete e[i]}clone(){return new De(nr(this.value))}}function Wu(r){const e=[];return Jt(r.fields,(n,s)=>{const i=new ge([n]);if(ls(s)){const o=Wu(s.mapValue).fields;if(o.length===0)e.push(i);else for(const c of o)e.push(i.child(c))}else e.push(i)}),new Ve(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n,s,i,o,c,l){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=o,this.data=c,this.documentState=l}static newInvalidDocument(e){return new Re(e,0,B.min(),B.min(),B.min(),De.empty(),0)}static newFoundDocument(e,n,s,i){return new Re(e,1,n,B.min(),s,i,0)}static newNoDocument(e,n){return new Re(e,2,n,B.min(),B.min(),De.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,B.min(),B.min(),De.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bs{constructor(e,n){this.position=e,this.inclusive=n}}function ol(r,e,n){let s=0;for(let i=0;i<r.position.length;i++){const o=e[i],c=r.position[i];if(o.field.isKeyField()?s=x.comparator(x.fromName(c.referenceValue),n.key):s=mn(c,n.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function al(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Qe(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ps{constructor(e,n="asc"){this.field=e,this.dir=n}}function S_(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Gu{}class le extends Gu{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new k_(e,n,s):n==="array-contains"?new O_(e,s):n==="in"?new V_(e,s):n==="not-in"?new L_(e,s):n==="array-contains-any"?new M_(e,s):new le(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new D_(e,s):new N_(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(mn(n,this.value)):n!==null&&Kt(this.value)===Kt(n)&&this.matchesComparison(mn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xe extends Gu{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Xe(e,n)}matches(e){return Ku(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ku(r){return r.op==="and"}function Qu(r){return C_(r)&&Ku(r)}function C_(r){for(const e of r.filters)if(e instanceof Xe)return!1;return!0}function ro(r){if(r instanceof le)return r.field.canonicalString()+r.op.toString()+gn(r.value);if(Qu(r))return r.filters.map(e=>ro(e)).join(",");{const e=r.filters.map(n=>ro(n)).join(",");return`${r.op}(${e})`}}function Xu(r,e){return r instanceof le?function(s,i){return i instanceof le&&s.op===i.op&&s.field.isEqual(i.field)&&Qe(s.value,i.value)}(r,e):r instanceof Xe?function(s,i){return i instanceof Xe&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((o,c,l)=>o&&Xu(c,i.filters[l]),!0):!1}(r,e):void F()}function Ju(r){return r instanceof le?function(n){return`${n.field.canonicalString()} ${n.op} ${gn(n.value)}`}(r):r instanceof Xe?function(n){return n.op.toString()+" {"+n.getFilters().map(Ju).join(" ,")+"}"}(r):"Filter"}class k_ extends le{constructor(e,n,s){super(e,n,s),this.key=x.fromName(s.referenceValue)}matches(e){const n=x.comparator(e.key,this.key);return this.matchesComparison(n)}}class D_ extends le{constructor(e,n){super(e,"in",n),this.keys=Yu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class N_ extends le{constructor(e,n){super(e,"not-in",n),this.keys=Yu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Yu(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>x.fromName(s.referenceValue))}class O_ extends le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mo(n)&&pr(n.arrayValue,this.value)}}class V_ extends le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pr(this.value.arrayValue,n)}}class L_ extends le{constructor(e,n){super(e,"not-in",n)}matches(e){if(pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pr(this.value.arrayValue,n)}}class M_ extends le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>pr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n=null,s=[],i=[],o=null,c=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=o,this.startAt=c,this.endAt=l,this.ue=null}}function cl(r,e=null,n=[],s=[],i=null,o=null,c=null){return new x_(r,e,n,s,i,o,c)}function xo(r){const e=$(r);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ro(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(o){return o.field.canonicalString()+o.dir}(s)).join(","),Us(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>gn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>gn(s)).join(",")),e.ue=n}return e.ue}function Uo(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!S_(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!Xu(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!al(r.startAt,e.startAt)&&al(r.endAt,e.endAt)}function so(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n=null,s=[],i=[],o=null,c="F",l=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=o,this.limitType=c,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function U_(r,e,n,s,i,o,c,l){return new Fs(r,e,n,s,i,o,c,l)}function Fo(r){return new Fs(r)}function ll(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function F_(r){return r.collectionGroup!==null}function rr(r){const e=$(r);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new _e(ge.comparator);return c.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ps(o,s))}),n.has(ge.keyField().canonicalString())||e.ce.push(new Ps(ge.keyField(),s))}return e.ce}function Ge(r){const e=$(r);return e.le||(e.le=B_(e,rr(r))),e.le}function B_(r,e){if(r.limitType==="F")return cl(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ps(i.field,o)});const n=r.endAt?new bs(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new bs(r.startAt.position,r.startAt.inclusive):null;return cl(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function io(r,e,n){return new Fs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Bs(r,e){return Uo(Ge(r),Ge(e))&&r.limitType===e.limitType}function Zu(r){return`${xo(Ge(r))}|lt:${r.limitType}`}function sn(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>Ju(i)).join(", ")}]`),Us(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>gn(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>gn(i)).join(",")),`Target(${s})`}(Ge(r))}; limitType=${r.limitType})`}function $s(r,e){return e.isFoundDocument()&&function(s,i){const o=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):x.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)}(r,e)&&function(s,i){for(const o of rr(s))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,e)&&function(s,i){for(const o of s.filters)if(!o.matches(i))return!1;return!0}(r,e)&&function(s,i){return!(s.startAt&&!function(c,l,h){const f=ol(c,l,h);return c.inclusive?f<=0:f<0}(s.startAt,rr(s),i)||s.endAt&&!function(c,l,h){const f=ol(c,l,h);return c.inclusive?f>=0:f>0}(s.endAt,rr(s),i))}(r,e)}function $_(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function eh(r){return(e,n)=>{let s=!1;for(const i of rr(r)){const o=j_(i,e,n);if(o!==0)return o;s=s||i.field.isKeyField()}return 0}}function j_(r,e,n){const s=r.field.isKeyField()?x.comparator(e.key,n.key):function(o,c,l){const h=c.data.field(o),f=l.data.field(o);return h!==null&&f!==null?mn(h,f):F()}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,o]of s)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jt(this.inner,(n,s)=>{for(const[i,o]of s)e(i,o)})}isEmpty(){return Hu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new ne(x.comparator);function lt(){return q_}const th=new ne(x.comparator);function Jn(...r){let e=th;for(const n of r)e=e.insert(n.key,n);return e}function nh(r){let e=th;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ut(){return sr()}function rh(){return sr()}function sr(){return new In(r=>r.toString(),(r,e)=>r.isEqual(e))}const H_=new ne(x.comparator),z_=new _e(x.comparator);function W(...r){let e=z_;for(const n of r)e=e.add(n);return e}const W_=new _e(X);function G_(){return W_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function sh(r){return{integerValue:""+r}}function K_(r,e){return I_(e)?sh(e):Bo(r,e)}/**
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
 */class js{constructor(){this._=void 0}}function Q_(r,e,n){return r instanceof mr?function(i,o){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Vo(o)&&(o=Lo(o)),o&&(c.fields.__previous_value__=o),{mapValue:c}}(n,e):r instanceof gr?oh(r,e):r instanceof _r?ah(r,e):function(i,o){const c=ih(i,o),l=ul(c)+ul(i.Pe);return no(c)&&no(i.Pe)?sh(l):Bo(i.serializer,l)}(r,e)}function X_(r,e,n){return r instanceof gr?oh(r,e):r instanceof _r?ah(r,e):n}function ih(r,e){return r instanceof Ss?function(s){return no(s)||function(o){return!!o&&"doubleValue"in o}(s)}(e)?e:{integerValue:0}:null}class mr extends js{}class gr extends js{constructor(e){super(),this.elements=e}}function oh(r,e){const n=ch(e);for(const s of r.elements)n.some(i=>Qe(i,s))||n.push(s);return{arrayValue:{values:n}}}class _r extends js{constructor(e){super(),this.elements=e}}function ah(r,e){let n=ch(e);for(const s of r.elements)n=n.filter(i=>!Qe(i,s));return{arrayValue:{values:n}}}class Ss extends js{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ul(r){return oe(r.integerValue||r.doubleValue)}function ch(r){return Mo(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n){this.field=e,this.transform=n}}function Y_(r,e){return r.field.isEqual(e.field)&&function(s,i){return s instanceof gr&&i instanceof gr||s instanceof _r&&i instanceof _r?pn(s.elements,i.elements,Qe):s instanceof Ss&&i instanceof Ss?Qe(s.Pe,i.Pe):s instanceof mr&&i instanceof mr}(r.transform,e.transform)}class Z_{constructor(e,n){this.version=e,this.transformResults=n}}class Me{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Me}static exists(e){return new Me(void 0,e)}static updateTime(e){return new Me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function us(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class qs{}function lh(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new $o(r.key,Me.none()):new br(r.key,r.data,Me.none());{const n=r.data,s=De.empty();let i=new _e(ge.comparator);for(let o of e.fields)if(!i.has(o)){let c=n.field(o);c===null&&o.length>1&&(o=o.popLast(),c=n.field(o)),c===null?s.delete(o):s.set(o,c),i=i.add(o)}return new Dt(r.key,s,new Ve(i.toArray()),Me.none())}}function ey(r,e,n){r instanceof br?function(i,o,c){const l=i.value.clone(),h=dl(i.fieldTransforms,o,c.transformResults);l.setAll(h),o.convertToFoundDocument(c.version,l).setHasCommittedMutations()}(r,e,n):r instanceof Dt?function(i,o,c){if(!us(i.precondition,o))return void o.convertToUnknownDocument(c.version);const l=dl(i.fieldTransforms,o,c.transformResults),h=o.data;h.setAll(uh(i)),h.setAll(l),o.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(r,e,n):function(i,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function ir(r,e,n,s){return r instanceof br?function(o,c,l,h){if(!us(o.precondition,c))return l;const f=o.value.clone(),m=fl(o.fieldTransforms,h,c);return f.setAll(m),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),null}(r,e,n,s):r instanceof Dt?function(o,c,l,h){if(!us(o.precondition,c))return l;const f=fl(o.fieldTransforms,h,c),m=c.data;return m.setAll(uh(o)),m.setAll(f),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(r,e,n,s):function(o,c,l){return us(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l}(r,e,n)}function ty(r,e){let n=null;for(const s of r.fieldTransforms){const i=e.data.field(s.field),o=ih(s.transform,i||null);o!=null&&(n===null&&(n=De.empty()),n.set(s.field,o))}return n||null}function hl(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&pn(s,i,(o,c)=>Y_(o,c))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class br extends qs{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dt extends qs{constructor(e,n,s,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function uh(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function dl(r,e,n){const s=new Map;J(r.length===n.length);for(let i=0;i<n.length;i++){const o=r[i],c=o.transform,l=e.data.field(o.field);s.set(o.field,X_(c,l,n[i]))}return s}function fl(r,e,n){const s=new Map;for(const i of r){const o=i.transform,c=n.data.field(i.field);s.set(i.field,Q_(o,c,e))}return s}class $o extends qs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ny extends qs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&ey(o,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ir(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ir(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=rh();return this.mutations.forEach(i=>{const o=e.get(i.key),c=o.overlayedDocument;let l=this.applyToLocalView(c,o.mutatedFields);l=n.has(i.key)?null:l;const h=lh(c,l);h!==null&&s.set(i.key,h),c.isValidDocument()||c.convertToNoDocument(B.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&pn(this.mutations,e.mutations,(n,s)=>hl(n,s))&&pn(this.baseMutations,e.baseMutations,(n,s)=>hl(n,s))}}class jo{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){J(e.mutations.length===s.length);let i=function(){return H_}();const o=e.mutations;for(let c=0;c<o.length;c++)i=i.insert(o[c].key,s[c].version);return new jo(e,n,s,i)}}/**
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
 */class sy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iy{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,K;function oy(r){switch(r){default:return F();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function hh(r){if(r===void 0)return ct("GRPC error has no .code"),C.UNKNOWN;switch(r){case ce.OK:return C.OK;case ce.CANCELLED:return C.CANCELLED;case ce.UNKNOWN:return C.UNKNOWN;case ce.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ce.INTERNAL:return C.INTERNAL;case ce.UNAVAILABLE:return C.UNAVAILABLE;case ce.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ce.NOT_FOUND:return C.NOT_FOUND;case ce.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ce.ABORTED:return C.ABORTED;case ce.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ce.DATA_LOSS:return C.DATA_LOSS;default:return F()}}(K=ce||(ce={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ay(){return new TextEncoder}/**
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
 */const cy=new Ft([4294967295,4294967295],0);function pl(r){const e=ay().encode(r),n=new Mu;return n.update(e),new Uint8Array(n.digest())}function ml(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ft([n,s],0),new Ft([i,o],0)]}class qo{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Yn(`Invalid padding: ${n}`);if(s<0)throw new Yn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Yn(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Yn(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ft.fromNumber(this.Ie)}Ee(e,n,s){let i=e.add(n.multiply(Ft.fromNumber(s)));return i.compare(cy)===1&&(i=new Ft([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=pl(e),[s,i]=ml(n);for(let o=0;o<this.hashCount;o++){const c=this.Ee(s,i,o);if(!this.de(c))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),c=new qo(o,i,n);return s.forEach(l=>c.insert(l)),c}insert(e){if(this.Ie===0)return;const n=pl(e),[s,i]=ml(n);for(let o=0;o<this.hashCount;o++){const c=this.Ee(s,i,o);this.Ae(c)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Yn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,s,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Pr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Hs(B.min(),i,new ne(X),lt(),W())}}class Pr{constructor(e,n,s,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Pr(s,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,s,i){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=i}}class dh{constructor(e,n){this.targetId=e,this.me=n}}class fh{constructor(e,n,s=ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class gl{constructor(){this.fe=0,this.ge=yl(),this.pe=ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),n=W(),s=W();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:F()}}),new Pr(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=yl()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ly{constructor(e){this.Le=e,this.Be=new Map,this.ke=lt(),this.qe=_l(),this.Qe=new ne(X)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,s=e.me.count,i=this.Je(n);if(i){const o=i.target;if(so(o))if(s===0){const c=new x(o.path);this.Ue(n,c,Re.newNoDocument(c,B.min()))}else J(s===1);else{const c=this.Ye(n);if(c!==s){const l=this.Ze(e),h=l?this.Xe(l,e,c):1;if(h!==0){this.je(n);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,f)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:o=0}=n;let c,l;try{c=Gt(s).toUint8Array()}catch(h){if(h instanceof zu)return fn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new qo(c,i,o)}catch(h){return fn(h instanceof Yn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(o=>{const c=this.Le.tt(),l=`projects/${c.projectId}/databases/${c.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,c)=>{const l=this.Je(c);if(l){if(o.current&&so(l.target)){const h=new x(l.target.path);this.ke.get(h)!==null||this.it(c,h)||this.Ue(c,h,Re.newNoDocument(h,e))}o.be&&(n.set(c,o.ve()),o.Ce())}});let s=W();this.qe.forEach((o,c)=>{let l=!0;c.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(o))}),this.ke.forEach((o,c)=>c.setReadTime(e));const i=new Hs(e,n,this.Qe,this.ke,s);return this.ke=lt(),this.qe=_l(),this.Qe=new ne(X),i}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new gl,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _e(X),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gl),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function _l(){return new ne(x.comparator)}function yl(){return new ne(x.comparator)}const uy={asc:"ASCENDING",desc:"DESCENDING"},hy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dy={and:"AND",or:"OR"};class fy{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function oo(r,e){return r.useProto3Json||Us(e)?e:{value:e}}function Cs(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ph(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function py(r,e){return Cs(r,e.toTimestamp())}function Ke(r){return J(!!r),B.fromTimestamp(function(n){const s=St(n);return new ue(s.seconds,s.nanos)}(r))}function Ho(r,e){return ao(r,e).canonicalString()}function ao(r,e){const n=function(i){return new te(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?n:n.child(e)}function mh(r){const e=te.fromString(r);return J(Eh(e)),e}function co(r,e){return Ho(r.databaseId,e.path)}function Bi(r,e){const n=mh(e);if(n.get(1)!==r.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new x(_h(n))}function gh(r,e){return Ho(r.databaseId,e)}function my(r){const e=mh(r);return e.length===4?te.emptyPath():_h(e)}function lo(r){return new te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function _h(r){return J(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function vl(r,e,n){return{name:co(r,e),fields:n.value.mapValue.fields}}function gy(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(J(m===void 0||typeof m=="string"),ye.fromBase64String(m||"")):(J(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ye.fromUint8Array(m||new Uint8Array))}(r,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&function(f){const m=f.code===void 0?C.UNKNOWN:hh(f.code);return new M(m,f.message||"")}(c);n=new fh(s,i,o,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Bi(r,s.document.name),o=Ke(s.document.updateTime),c=s.document.createTime?Ke(s.document.createTime):B.min(),l=new De({mapValue:{fields:s.document.fields}}),h=Re.newFoundDocument(i,o,c,l),f=s.targetIds||[],m=s.removedTargetIds||[];n=new hs(f,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Bi(r,s.document),o=s.readTime?Ke(s.readTime):B.min(),c=Re.newNoDocument(i,o),l=s.removedTargetIds||[];n=new hs([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Bi(r,s.document),o=s.removedTargetIds||[];n=new hs([],o,i,null)}else{if(!("filter"in e))return F();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:o}=s,c=new iy(i,o),l=s.targetId;n=new dh(l,c)}}return n}function _y(r,e){let n;if(e instanceof br)n={update:vl(r,e.key,e.value)};else if(e instanceof $o)n={delete:co(r,e.key)};else if(e instanceof Dt)n={update:vl(r,e.key,e.data),updateMask:by(e.fieldMask)};else{if(!(e instanceof ny))return F();n={verify:co(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(o,c){const l=c.transform;if(l instanceof mr)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof gr)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _r)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ss)return{fieldPath:c.field.canonicalString(),increment:l.Pe};throw F()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:py(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F()}(r,e.precondition)),n}function yy(r,e){return r&&r.length>0?(J(e!==void 0),r.map(n=>function(i,o){let c=i.updateTime?Ke(i.updateTime):Ke(o);return c.isEqual(B.min())&&(c=Ke(o)),new Z_(c,i.transformResults||[])}(n,e))):[]}function vy(r,e){return{documents:[gh(r,e.path)]}}function Ey(r,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=gh(r,i);const o=function(f){if(f.length!==0)return vh(Xe.create(f,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const c=function(f){if(f.length!==0)return f.map(m=>function(R){return{field:on(R.field),direction:Iy(R.dir)}}(m))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const l=oo(r,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:n,parent:i}}function wy(r){let e=my(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){J(s===1);const m=n.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let o=[];n.where&&(o=function(v){const R=yh(v);return R instanceof Xe&&Qu(R)?R.getFilters():[R]}(n.where));let c=[];n.orderBy&&(c=function(v){return v.map(R=>function(N){return new Ps(an(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(n.orderBy));let l=null;n.limit&&(l=function(v){let R;return R=typeof v=="object"?v.value:v,Us(R)?null:R}(n.limit));let h=null;n.startAt&&(h=function(v){const R=!!v.before,S=v.values||[];return new bs(S,R)}(n.startAt));let f=null;return n.endAt&&(f=function(v){const R=!v.before,S=v.values||[];return new bs(S,R)}(n.endAt)),U_(e,i,c,o,l,"F",h,f)}function Ty(r,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yh(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=an(n.unaryFilter.field);return le.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=an(n.unaryFilter.field);return le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=an(n.unaryFilter.field);return le.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=an(n.unaryFilter.field);return le.create(c,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(r):r.fieldFilter!==void 0?function(n){return le.create(an(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Xe.create(n.compositeFilter.filters.map(s=>yh(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(n.compositeFilter.op))}(r):F()}function Iy(r){return uy[r]}function Ay(r){return hy[r]}function Ry(r){return dy[r]}function on(r){return{fieldPath:r.canonicalString()}}function an(r){return ge.fromServerFormat(r.fieldPath)}function vh(r){return r instanceof le?function(n){if(n.op==="=="){if(il(n.value))return{unaryFilter:{field:on(n.field),op:"IS_NAN"}};if(sl(n.value))return{unaryFilter:{field:on(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(il(n.value))return{unaryFilter:{field:on(n.field),op:"IS_NOT_NAN"}};if(sl(n.value))return{unaryFilter:{field:on(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(n.field),op:Ay(n.op),value:n.value}}}(r):r instanceof Xe?function(n){const s=n.getFilters().map(i=>vh(i));return s.length===1?s[0]:{compositeFilter:{op:Ry(n.op),filters:s}}}(r):F()}function by(r){const e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Eh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,s,i,o=B.min(),c=B.min(),l=ye.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new Tt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.ct=e}}function Sy(r){const e=wy({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?io(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.un=new ky}addToCollectionParentIndex(e,n){return this.un.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Pt.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Pt.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class ky{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new _e(te.comparator),o=!i.has(s);return this.index[n]=i.add(s),o}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new _e(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new _n(0)}static kn(){return new _n(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.changes=new In(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ny{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ir(s.mutation,i,Ve.empty(),ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,W()).next(()=>s))}getLocalViewOfDocuments(e,n,s=W()){const i=Ut();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(o=>{let c=Jn();return o.forEach((l,h)=>{c=c.insert(l,h.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const s=Ut();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,W()))}populateOverlays(e,n,s){const i=[];return s.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((c,l)=>{n.set(c,l)})})}computeViews(e,n,s,i){let o=lt();const c=sr(),l=function(){return sr()}();return n.forEach((h,f)=>{const m=s.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof Dt)?o=o.insert(f.key,f):m!==void 0?(c.set(f.key,m.mutation.getFieldMask()),ir(m.mutation,f,m.mutation.getFieldMask(),ue.now())):c.set(f.key,Ve.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((f,m)=>c.set(f,m)),n.forEach((f,m)=>{var v;return l.set(f,new Ny(m,(v=c.get(f))!==null&&v!==void 0?v:null))}),l))}recalculateAndSaveOverlays(e,n){const s=sr();let i=new ne((c,l)=>c-l),o=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const l of c)l.keys().forEach(h=>{const f=n.get(h);if(f===null)return;let m=s.get(h)||Ve.empty();m=l.applyToLocalView(f,m),s.set(h,m);const v=(i.get(l.batchId)||W()).add(h);i=i.insert(l.batchId,v)})}).next(()=>{const c=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,v=rh();m.forEach(R=>{if(!o.has(R)){const S=lh(n.get(R),s.get(R));S!==null&&v.set(R,S),o=o.add(R)}}),c.push(this.documentOverlayCache.saveOverlays(e,f,v))}return k.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(c){return x.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):F_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-o.size):k.resolve(Ut());let l=-1,h=o;return c.next(f=>k.forEach(f,(m,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),o.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,h,f,W())).next(m=>({batchId:l,changes:nh(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new x(n)).next(s=>{let i=Jn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const o=n.collectionGroup;let c=Jn();return this.indexManager.getCollectionParents(e,o).next(l=>k.forEach(l,h=>{const f=function(v,R){return new Fs(R,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(n,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,s,i).next(m=>{m.forEach((v,R)=>{c=c.insert(v,R)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,s,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,o,i))).next(c=>{o.forEach((h,f)=>{const m=f.getKey();c.get(m)===null&&(c=c.insert(m,Re.newInvalidDocument(m)))});let l=Jn();return c.forEach((h,f)=>{const m=o.get(h);m!==void 0&&ir(m.mutation,f,Ve.empty(),ue.now()),$s(n,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return k.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ke(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Sy(i.bundledQuery),readTime:Ke(i.readTime)}}(n)),k.resolve()}}/**
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
 */class Ly{constructor(){this.overlays=new ne(x.comparator),this.Ir=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ut();return k.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&s.set(i,o)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,o)=>{this.ht(e,n,o)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const i=Ut(),o=n.length+1,c=new x(n.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>s&&i.set(h.getKey(),h)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let o=new ne((f,m)=>f-m);const c=this.overlays.getIterator();for(;c.hasNext();){const f=c.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>s){let m=o.get(f.largestBatchId);m===null&&(m=Ut(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=Ut(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>l.set(f,m)),!(l.size()>=i)););return k.resolve(l)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const c=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new sy(n,s));let o=this.Ir.get(n);o===void 0&&(o=W(),this.Ir.set(n,o)),this.Ir.set(n,o.add(s.key))}}/**
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
 */class My{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.Tr=new _e(de.Er),this.dr=new _e(de.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new de(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Vr(new de(e,n))}mr(e,n){e.forEach(s=>this.removeReference(s,n))}gr(e){const n=new x(new te([])),s=new de(n,e),i=new de(n,e+1),o=[];return this.dr.forEachInRange([s,i],c=>{this.Vr(c),o.push(c.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new x(new te([])),s=new de(n,e),i=new de(n,e+1);let o=W();return this.dr.forEachInRange([s,i],c=>{o=o.add(c.key)}),o}containsKey(e){const n=new de(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class de{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return x.comparator(e.key,n.key)||X(e.wr,n.wr)}static Ar(e,n){return X(e.wr,n.wr)||x.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new _e(de.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new ry(o,n,s,i);this.mutationQueue.push(c);for(const l of i)this.br=this.br.add(new de(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(c)}lookupMutationBatch(e,n){return k.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.vr(s),o=i<0?0:i;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new de(n,0),i=new de(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([s,i],c=>{const l=this.Dr(c.wr);o.push(l)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(X);return n.forEach(i=>{const o=new de(i,0),c=new de(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,c],l=>{s=s.add(l.wr)})}),k.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let o=s;x.isDocumentKey(o)||(o=o.child(""));const c=new de(new x(o),0);let l=new _e(X);return this.br.forEachWhile(h=>{const f=h.key.path;return!!s.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.wr)),!0)},c),k.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(s=>{const i=this.Dr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return k.forEach(n.mutations,i=>{const o=new de(i.key,n.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,n){const s=new de(n,0),i=this.br.firstAfterOrEqual(s);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.Mr=e,this.docs=function(){return new ne(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),o=i?i.size:0,c=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let s=lt();return n.forEach(i=>{const o=this.docs.get(i);s=s.insert(i,o?o.document.mutableCopy():Re.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let o=lt();const c=n.path,l=new x(c.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!c.isPrefixOf(f.path))break;f.path.length>c.length+1||v_(y_(m),s)<=0||(i.has(m.key)||$s(n,m))&&(o=o.insert(m.key,m.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(e,n,s,i){F()}Or(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Fy(this)}getSize(e){return k.resolve(this.size)}}class Fy extends Dy{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.persistence=e,this.Nr=new In(n=>xo(n),Uo),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Lr=0,this.Br=new zo,this.targetCount=0,this.kr=_n.Bn()}forEachTarget(e,n){return this.Nr.forEach((s,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),k.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new _n(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Kn(n),k.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let i=0;const o=[];return this.Nr.forEach((c,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.Nr.delete(c),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),k.waitFor(o).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(c=>{o.push(i.markPotentiallyOrphaned(e,c))}),k.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Oo(0),this.Kr=!1,this.Kr=!0,this.$r=new My,this.referenceDelegate=e(this),this.Ur=new By(this),this.indexManager=new Cy,this.remoteDocumentCache=function(i){return new Uy(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new Py(n),this.Gr=new Vy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ly,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new xy(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){L("MemoryPersistence","Starting transaction:",e);const i=new jy(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return k.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,n)))}}class jy extends w_{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Jr=new zo,this.Yr=null}static Zr(e){return new Wo(e)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>s.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,s=>{const i=x.fromPath(s);return this.ei(e,i).next(o=>{o||n.removeEntry(i,B.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return k.or([()=>k.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=i}static Wi(e,n){let s=W(),i=W();for(const o of n.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Go(e,n.fromCache,s,i)}}/**
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
 */class qy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Pf()?8:T_(be())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,i){const o={result:null};return this.Yi(e,n).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.Zi(e,n,i,s).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new qy;return this.Xi(e,n,c).next(l=>{if(o.result=l,this.zi)return this.es(e,n,c,l.size)})}).next(()=>o.result)}es(e,n,s,i){return s.documentReadCount<this.ji?(zn()<=G.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",sn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(zn()<=G.DEBUG&&L("QueryEngine","Query:",sn(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(zn()<=G.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",sn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(n))):k.resolve())}Yi(e,n){if(ll(n))return k.resolve(null);let s=Ge(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=io(n,null,"F"),s=Ge(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const c=W(...o);return this.Ji.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,s).next(h=>{const f=this.ts(n,l);return this.ns(n,f,c,h.readTime)?this.Yi(e,io(n,null,"F")):this.rs(e,f,n,h)}))})))}Zi(e,n,s,i){return ll(n)||i.isEqual(B.min())?k.resolve(null):this.Ji.getDocuments(e,s).next(o=>{const c=this.ts(n,o);return this.ns(n,c,s,i)?k.resolve(null):(zn()<=G.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sn(n)),this.rs(e,c,n,__(i,-1)).next(l=>l))})}ts(e,n){let s=new _e(eh(e));return n.forEach((i,o)=>{$s(e,o)&&(s=s.add(o))}),s}ns(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,s){return zn()<=G.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",sn(n)),this.Ji.getDocumentsMatchingQuery(e,n,Pt.min(),s)}rs(e,n,s,i){return this.Ji.getDocumentsMatchingQuery(e,s,i).next(o=>(n.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,s,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ne(X),this._s=new In(o=>xo(o),Uo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Oy(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Wy(r,e,n,s){return new zy(r,e,n,s)}async function wh(r,e){const n=$(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(s))).next(o=>{const c=[],l=[];let h=W();for(const f of i){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return n.localDocuments.getDocuments(s,h).next(f=>({hs:f,removedBatchIds:c,addedBatchIds:l}))})})}function Gy(r,e){const n=$(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,h,f,m){const v=f.batch,R=v.keys();let S=k.resolve();return R.forEach(N=>{S=S.next(()=>m.getEntry(h,N)).next(V=>{const D=f.docVersions.get(N);J(D!==null),V.version.compareTo(D)<0&&(v.applyToRemoteDocument(V,f),V.isValidDocument()&&(V.setReadTime(f.commitVersion),m.addEntry(V)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,v))}(n,s,e,o).next(()=>o.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let h=W();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Th(r){const e=$(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Ky(r,e){const n=$(r),s=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const c=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((m,v)=>{const R=i.get(v);if(!R)return;l.push(n.Ur.removeMatchingKeys(o,m.removedDocuments,v).next(()=>n.Ur.addMatchingKeys(o,m.addedDocuments,v)));let S=R.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(ye.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,s)),i=i.insert(v,S),function(V,D,H){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(R,S,m)&&l.push(n.Ur.updateTargetData(o,S))});let h=lt(),f=W();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(Qy(o,c,e.documentUpdates).next(m=>{h=m.Ps,f=m.Is})),!s.isEqual(B.min())){const m=n.Ur.getLastRemoteSnapshotVersion(o).next(v=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,s));l.push(m)}return k.waitFor(l).next(()=>c.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(n.os=i,o))}function Qy(r,e,n){let s=W(),i=W();return n.forEach(o=>s=s.add(o)),e.getEntries(r,s).next(o=>{let c=lt();return n.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(B.min())?(e.removeEntry(l,h.readTime),c=c.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),c=c.insert(l,h)):L("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{Ps:c,Is:i}})}function Xy(r,e){const n=$(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Jy(r,e){const n=$(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ur.getTargetData(s,e).next(o=>o?(i=o,k.resolve(i)):n.Ur.allocateTargetId(s).next(c=>(i=new Tt(e,c,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s})}async function uo(r,e,n){const s=$(r),i=s.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",o,c=>s.persistence.referenceDelegate.removeTarget(c,i))}catch(c){if(!Rr(c))throw c;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}s.os=s.os.remove(e),s._s.delete(i.target)}function El(r,e,n){const s=$(r);let i=B.min(),o=W();return s.persistence.runTransaction("Execute query","readwrite",c=>function(h,f,m){const v=$(h),R=v._s.get(m);return R!==void 0?k.resolve(v.os.get(R)):v.Ur.getTargetData(f,m)}(s,c,Ge(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(c,l.targetId).next(h=>{o=h})}).next(()=>s.ss.getDocumentsMatchingQuery(c,e,n?i:B.min(),n?o:W())).next(l=>(Yy(s,$_(e),l),{documents:l,Ts:o})))}function Yy(r,e,n){let s=r.us.get(e)||B.min();n.forEach((i,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)}),r.us.set(e,s)}class wl{constructor(){this.activeTargetIds=G_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zy{constructor(){this.so=new wl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ts=null;function $i(){return ts===null?ts=function(){return 268435456+Math.round(2147483648*Math.random())}():ts++,"0x"+ts.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection";class rv extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,s,i,o,c){const l=$i(),h=this.xo(n,s.toUriEncodedString());L("RestConnection",`Sending RPC '${n}' ${l}:`,h,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,c),this.No(n,h,f,i).then(m=>(L("RestConnection",`Received RPC '${n}' ${l}: `,m),m),m=>{throw fn("RestConnection",`RPC '${n}' ${l} failed with error: `,m,"url: ",h,"request:",i),m})}Lo(n,s,i,o,c,l){return this.Mo(n,s,i,o,c)}Oo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((o,c)=>n[c]=o),i&&i.headers.forEach((o,c)=>n[c]=o)}xo(n,s){const i=tv[n];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,i){const o=$i();return new Promise((c,l)=>{const h=new xu;h.setWithCredentials(!0),h.listenOnce(Uu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case cs.NO_ERROR:const m=h.getResponseJson();L(Ie,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case cs.TIMEOUT:L(Ie,`RPC '${e}' ${o} timed out`),l(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case cs.HTTP_ERROR:const v=h.getStatus();if(L(Ie,`RPC '${e}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const N=function(D){const H=D.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(H)>=0?H:C.UNKNOWN}(S.status);l(new M(N,S.message))}else l(new M(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new M(C.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{L(Ie,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);L(Ie,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,s,15)})}Bo(e,n,s){const i=$i(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=$u(),l=Bu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,n,s),h.encodeInitMessageHeaders=!0;const m=o.join("");L(Ie,`Creating RPC '${e}' stream ${i}: ${m}`,h);const v=c.createWebChannel(m,h);let R=!1,S=!1;const N=new nv({Io:D=>{S?L(Ie,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(R||(L(Ie,`Opening RPC '${e}' stream ${i} transport.`),v.open(),R=!0),L(Ie,`RPC '${e}' stream ${i} sending:`,D),v.send(D))},To:()=>v.close()}),V=(D,H,q)=>{D.listen(H,j=>{try{q(j)}catch(z){setTimeout(()=>{throw z},0)}})};return V(v,Xn.EventType.OPEN,()=>{S||(L(Ie,`RPC '${e}' stream ${i} transport opened.`),N.yo())}),V(v,Xn.EventType.CLOSE,()=>{S||(S=!0,L(Ie,`RPC '${e}' stream ${i} transport closed`),N.So())}),V(v,Xn.EventType.ERROR,D=>{S||(S=!0,fn(Ie,`RPC '${e}' stream ${i} transport errored:`,D),N.So(new M(C.UNAVAILABLE,"The operation could not be completed")))}),V(v,Xn.EventType.MESSAGE,D=>{var H;if(!S){const q=D.data[0];J(!!q);const j=q,z=j.error||((H=j[0])===null||H===void 0?void 0:H.error);if(z){L(Ie,`RPC '${e}' stream ${i} received error:`,z);const fe=z.status;let Z=function(y){const E=ce[y];if(E!==void 0)return hh(E)}(fe),w=z.message;Z===void 0&&(Z=C.INTERNAL,w="Unknown error status: "+fe+" with message "+z.message),S=!0,N.So(new M(Z,w)),v.close()}else L(Ie,`RPC '${e}' stream ${i} received:`,q),N.bo(q)}}),V(l,Fu.STAT_EVENT,D=>{D.stat===eo.PROXY?L(Ie,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===eo.NOPROXY&&L(Ie,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function ji(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(r){return new fy(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,s=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-s);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n,s,i,o,c,l,h){this.ui=e,this.Ho=s,this.Jo=i,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ih(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(ct(n.toString()),ct("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===n&&this.P_(s,i)},s=>{e(()=>{const i=new M(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sv extends Ah{constructor(e,n,s,i,o,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,c),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=gy(this.serializer,e),s=function(o){if(!("targetChange"in o))return B.min();const c=o.targetChange;return c.targetIds&&c.targetIds.length?B.min():c.readTime?Ke(c.readTime):B.min()}(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=lo(this.serializer),n.addTarget=function(o,c){let l;const h=c.target;if(l=so(h)?{documents:vy(o,h)}:{query:Ey(o,h)._t},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=ph(o,c.resumeToken);const f=oo(o,c.expectedCount);f!==null&&(l.expectedCount=f)}else if(c.snapshotVersion.compareTo(B.min())>0){l.readTime=Cs(o,c.snapshotVersion.toTimestamp());const f=oo(o,c.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);const s=Ty(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=lo(this.serializer),n.removeTarget=e,this.a_(n)}}class iv extends Ah{constructor(e,n,s,i,o,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,c),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=yy(e.writeResults,e.commitTime),s=Ke(e.commitTime);return this.listener.g_(s,n)}p_(){const e={};e.database=lo(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>_y(this.serializer,s))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Mo(e,ao(n,s),i,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(C.UNKNOWN,o.toString())})}Lo(e,n,s,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,l])=>this.connection.Lo(e,ao(n,s),i,c,l,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new M(C.UNKNOWN,c.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class av{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ct(n),this.D_=!1):L("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n,s,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(c=>{s.enqueueAndForget(async()=>{Yt(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=$(h);f.L_.add(4),await Sr(f),f.q_.set("Unknown"),f.L_.delete(4),await Ws(f)}(this))})}),this.q_=new av(s,i)}}async function Ws(r){if(Yt(r))for(const e of r.B_)await e(!0)}async function Sr(r){for(const e of r.B_)await e(!1)}function Rh(r,e){const n=$(r);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Jo(n)?Xo(n):An(n).r_()&&Qo(n,e))}function Ko(r,e){const n=$(r),s=An(n);n.N_.delete(e),s.r_()&&bh(n,e),n.N_.size===0&&(s.r_()?s.o_():Yt(n)&&n.q_.set("Unknown"))}function Qo(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}An(r).A_(e)}function bh(r,e){r.Q_.xe(e),An(r).R_(e)}function Xo(r){r.Q_=new ly({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),An(r).start(),r.q_.v_()}function Jo(r){return Yt(r)&&!An(r).n_()&&r.N_.size>0}function Yt(r){return $(r).L_.size===0}function Ph(r){r.Q_=void 0}async function lv(r){r.q_.set("Online")}async function uv(r){r.N_.forEach((e,n)=>{Qo(r,e)})}async function hv(r,e){Ph(r),Jo(r)?(r.q_.M_(e),Xo(r)):r.q_.set("Unknown")}async function dv(r,e,n){if(r.q_.set("Online"),e instanceof fh&&e.state===2&&e.cause)try{await async function(i,o){const c=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,c),i.N_.delete(l),i.Q_.removeTarget(l))}(r,e)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ks(r,s)}else if(e instanceof hs?r.Q_.Ke(e):e instanceof dh?r.Q_.He(e):r.Q_.We(e),!n.isEqual(B.min()))try{const s=await Th(r.localStore);n.compareTo(s)>=0&&await function(o,c){const l=o.Q_.rt(c);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(h.resumeToken,c))}}),l.targetMismatches.forEach((h,f)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(ye.EMPTY_BYTE_STRING,m.snapshotVersion)),bh(o,h);const v=new Tt(m.target,h,f,m.sequenceNumber);Qo(o,v)}),o.remoteSyncer.applyRemoteEvent(l)}(r,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await ks(r,s)}}async function ks(r,e,n){if(!Rr(e))throw e;r.L_.add(1),await Sr(r),r.q_.set("Offline"),n||(n=()=>Th(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),r.L_.delete(1),await Ws(r)})}function Sh(r,e){return e().catch(n=>ks(r,n,e))}async function Gs(r){const e=$(r),n=Ct(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;fv(e);)try{const i=await Xy(e.localStore,s);if(i===null){e.O_.length===0&&n.o_();break}s=i.batchId,pv(e,i)}catch(i){await ks(e,i)}Ch(e)&&kh(e)}function fv(r){return Yt(r)&&r.O_.length<10}function pv(r,e){r.O_.push(e);const n=Ct(r);n.r_()&&n.V_&&n.m_(e.mutations)}function Ch(r){return Yt(r)&&!Ct(r).n_()&&r.O_.length>0}function kh(r){Ct(r).start()}async function mv(r){Ct(r).p_()}async function gv(r){const e=Ct(r);for(const n of r.O_)e.m_(n.mutations)}async function _v(r,e,n){const s=r.O_.shift(),i=jo.from(s,e,n);await Sh(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Gs(r)}async function yv(r,e){e&&Ct(r).V_&&await async function(s,i){if(function(c){return oy(c)&&c!==C.ABORTED}(i.code)){const o=s.O_.shift();Ct(s).s_(),await Sh(s,()=>s.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Gs(s)}}(r,e),Ch(r)&&kh(r)}async function Il(r,e){const n=$(r);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const s=Yt(n);n.L_.add(3),await Sr(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ws(n)}async function vv(r,e){const n=$(r);e?(n.L_.delete(2),await Ws(n)):e||(n.L_.add(2),await Sr(n),n.q_.set("Unknown"))}function An(r){return r.K_||(r.K_=function(n,s,i){const o=$(n);return o.w_(),new sv(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:lv.bind(null,r),Ro:uv.bind(null,r),mo:hv.bind(null,r),d_:dv.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),Jo(r)?Xo(r):r.q_.set("Unknown")):(await r.K_.stop(),Ph(r))})),r.K_}function Ct(r){return r.U_||(r.U_=function(n,s,i){const o=$(n);return o.w_(),new iv(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:mv.bind(null,r),mo:yv.bind(null,r),f_:gv.bind(null,r),g_:_v.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await Gs(r)):(await r.U_.stop(),r.O_.length>0&&(L("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,s,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=o,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,o){const c=Date.now()+s,l=new Yo(e,n,c,i,o);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(r,e){if(ct("AsyncQueue",`${e}: ${r}`),Rr(r))return new M(C.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||x.comparator(n.key,s.key):(n,s)=>x.comparator(n.key,s.key),this.keyedMap=Jn(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new dn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof dn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=s.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new dn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.W_=new ne(x.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):F():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,s)=>{e.push(s)}),e}}class yn{constructor(e,n,s,i,o,c,l,h,f){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=o,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,n,s,i,o){const c=[];return n.forEach(l=>{c.push({type:0,doc:l})}),new yn(e,n,dn.emptySet(n),c,s,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class wv{constructor(){this.queries=Rl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const i=$(n),o=i.queries;i.queries=Rl(),o.forEach((c,l)=>{for(const h of l.j_)h.onError(s)})})(this,new M(C.ABORTED,"Firestore shutting down"))}}function Rl(){return new In(r=>Zu(r),Bs)}async function Dh(r,e){const n=$(r);let s=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(s=2):(o=new Ev,s=e.J_()?0:1);try{switch(s){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(c){const l=Zo(c,`Initialization of query '${sn(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&ea(n)}async function Nh(r,e){const n=$(r),s=e.query;let i=3;const o=n.queries.get(s);if(o){const c=o.j_.indexOf(e);c>=0&&(o.j_.splice(c,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function Tv(r,e){const n=$(r);let s=!1;for(const i of e){const o=i.query,c=n.queries.get(o);if(c){for(const l of c.j_)l.X_(i)&&(s=!0);c.z_=i}}s&&ea(n)}function Iv(r,e,n){const s=$(r),i=s.queries.get(e);if(i)for(const o of i.j_)o.onError(n);s.queries.delete(e)}function ea(r){r.Y_.forEach(e=>{e.next()})}var ho,bl;(bl=ho||(ho={})).ea="default",bl.Cache="cache";class Oh{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new yn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ho.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.key=e}}class Lh{constructor(e){this.key=e}}class Av{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=eh(e),this.Ra=new dn(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new Al,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,c=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,v)=>{const R=i.get(m),S=$s(this.query,v)?v:null,N=!!R&&this.mutatedKeys.has(R.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;R&&S?R.data.isEqual(S.data)?N!==V&&(s.track({type:3,doc:S}),D=!0):this.ga(R,S)||(s.track({type:2,doc:S}),D=!0,(h&&this.Aa(S,h)>0||f&&this.Aa(S,f)<0)&&(l=!0)):!R&&S?(s.track({type:0,doc:S}),D=!0):R&&!S&&(s.track({type:1,doc:R}),D=!0,(h||f)&&(l=!0)),D&&(S?(c=c.add(S),o=V?o.add(m):o.delete(m)):(c=c.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const m=this.query.limitType==="F"?c.last():c.first();c=c.delete(m.key),o=o.delete(m.key),s.track({type:1,doc:m})}return{Ra:c,fa:s,ns:l,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort((m,v)=>function(S,N){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return V(S)-V(N)}(m.type,v.type)||this.Aa(m.doc,v.doc)),this.pa(s),i=i!=null&&i;const l=n&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,f=h!==this.Ea;return this.Ea=h,c.length!==0||f?{snapshot:new yn(this.query,e.Ra,o,c,e.mutatedKeys,h===0,f,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Al,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=W(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return e.forEach(s=>{this.da.has(s)||n.push(new Lh(s))}),this.da.forEach(s=>{e.has(s)||n.push(new Vh(s))}),n}ba(e){this.Ta=e.Ts,this.da=W();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return yn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Rv{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class bv{constructor(e){this.key=e,this.va=!1}}class Pv{constructor(e,n,s,i,o,c){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new In(l=>Zu(l),Bs),this.Ma=new Map,this.xa=new Set,this.Oa=new ne(x.comparator),this.Na=new Map,this.La=new zo,this.Ba={},this.ka=new Map,this.qa=_n.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Sv(r,e,n=!0){const s=$h(r);let i;const o=s.Fa.get(e);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Mh(s,e,n,!0),i}async function Cv(r,e){const n=$h(r);await Mh(n,e,!0,!1)}async function Mh(r,e,n,s){const i=await Jy(r.localStore,Ge(e)),o=i.targetId,c=r.sharedClientState.addLocalQueryTarget(o,n);let l;return s&&(l=await kv(r,e,o,c==="current",i.resumeToken)),r.isPrimaryClient&&n&&Rh(r.remoteStore,i),l}async function kv(r,e,n,s,i){r.Ka=(v,R,S)=>async function(V,D,H,q){let j=D.view.ma(H);j.ns&&(j=await El(V.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,j)));const z=q&&q.targetChanges.get(D.targetId),fe=q&&q.targetMismatches.get(D.targetId)!=null,Z=D.view.applyChanges(j,V.isPrimaryClient,z,fe);return Sl(V,D.targetId,Z.wa),Z.snapshot}(r,v,R,S);const o=await El(r.localStore,e,!0),c=new Av(e,o.Ts),l=c.ma(o.documents),h=Pr.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",i),f=c.applyChanges(l,r.isPrimaryClient,h);Sl(r,n,f.wa);const m=new Rv(e,n,c);return r.Fa.set(e,m),r.Ma.has(n)?r.Ma.get(n).push(e):r.Ma.set(n,[e]),f.snapshot}async function Dv(r,e,n){const s=$(r),i=s.Fa.get(e),o=s.Ma.get(i.targetId);if(o.length>1)return s.Ma.set(i.targetId,o.filter(c=>!Bs(c,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await uo(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),n&&Ko(s.remoteStore,i.targetId),fo(s,i.targetId)}).catch(Ar)):(fo(s,i.targetId),await uo(s.localStore,i.targetId,!0))}async function Nv(r,e){const n=$(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Ko(n.remoteStore,s.targetId))}async function Ov(r,e,n){const s=Bv(r);try{const i=await function(c,l){const h=$(c),f=ue.now(),m=l.reduce((S,N)=>S.add(N.key),W());let v,R;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=lt(),V=W();return h.cs.getEntries(S,m).next(D=>{N=D,N.forEach((H,q)=>{q.isValidDocument()||(V=V.add(H))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,N)).next(D=>{v=D;const H=[];for(const q of l){const j=ty(q,v.get(q.key).overlayedDocument);j!=null&&H.push(new Dt(q.key,j,Wu(j.value.mapValue),Me.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,H,l)}).next(D=>{R=D;const H=D.applyToLocalDocumentSet(v,V);return h.documentOverlayCache.saveOverlays(S,D.batchId,H)})}).then(()=>({batchId:R.batchId,changes:nh(v)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(c,l,h){let f=c.Ba[c.currentUser.toKey()];f||(f=new ne(X)),f=f.insert(l,h),c.Ba[c.currentUser.toKey()]=f}(s,i.batchId,n),await Cr(s,i.changes),await Gs(s.remoteStore)}catch(i){const o=Zo(i,"Failed to persist write");n.reject(o)}}async function xh(r,e){const n=$(r);try{const s=await Ky(n.localStore,e);e.targetChanges.forEach((i,o)=>{const c=n.Na.get(o);c&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?c.va=!0:i.modifiedDocuments.size>0?J(c.va):i.removedDocuments.size>0&&(J(c.va),c.va=!1))}),await Cr(n,s,e)}catch(s){await Ar(s)}}function Pl(r,e,n){const s=$(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Fa.forEach((o,c)=>{const l=c.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(c,l){const h=$(c);h.onlineState=l;let f=!1;h.queries.forEach((m,v)=>{for(const R of v.j_)R.Z_(l)&&(f=!0)}),f&&ea(h)}(s.eventManager,e),i.length&&s.Ca.d_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Vv(r,e,n){const s=$(r);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Na.get(e),o=i&&i.key;if(o){let c=new ne(x.comparator);c=c.insert(o,Re.newNoDocument(o,B.min()));const l=W().add(o),h=new Hs(B.min(),new Map,new ne(X),c,l);await xh(s,h),s.Oa=s.Oa.remove(o),s.Na.delete(e),ta(s)}else await uo(s.localStore,e,!1).then(()=>fo(s,e,n)).catch(Ar)}async function Lv(r,e){const n=$(r),s=e.batch.batchId;try{const i=await Gy(n.localStore,e);Fh(n,s,null),Uh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Cr(n,i)}catch(i){await Ar(i)}}async function Mv(r,e,n){const s=$(r);try{const i=await function(c,l){const h=$(c);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next(v=>(J(v!==null),m=v.keys(),h.mutationQueue.removeMutationBatch(f,v))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(s.localStore,e);Fh(s,e,n),Uh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Cr(s,i)}catch(i){await Ar(i)}}function Uh(r,e){(r.ka.get(e)||[]).forEach(n=>{n.resolve()}),r.ka.delete(e)}function Fh(r,e,n){const s=$(r);let i=s.Ba[s.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),s.Ba[s.currentUser.toKey()]=i}}function fo(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Ma.get(e))r.Fa.delete(s),n&&r.Ca.$a(s,n);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(s=>{r.La.containsKey(s)||Bh(r,s)})}function Bh(r,e){r.xa.delete(e.path.canonicalString());const n=r.Oa.get(e);n!==null&&(Ko(r.remoteStore,n),r.Oa=r.Oa.remove(e),r.Na.delete(n),ta(r))}function Sl(r,e,n){for(const s of n)s instanceof Vh?(r.La.addReference(s.key,e),xv(r,s)):s instanceof Lh?(L("SyncEngine","Document no longer in limbo: "+s.key),r.La.removeReference(s.key,e),r.La.containsKey(s.key)||Bh(r,s.key)):F()}function xv(r,e){const n=e.key,s=n.path.canonicalString();r.Oa.get(n)||r.xa.has(s)||(L("SyncEngine","New document in limbo: "+n),r.xa.add(s),ta(r))}function ta(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const n=new x(te.fromString(e)),s=r.qa.next();r.Na.set(s,new bv(n)),r.Oa=r.Oa.insert(n,s),Rh(r.remoteStore,new Tt(Ge(Fo(n.path)),s,"TargetPurposeLimboResolution",Oo.oe))}}async function Cr(r,e,n){const s=$(r),i=[],o=[],c=[];s.Fa.isEmpty()||(s.Fa.forEach((l,h)=>{c.push(s.Ka(h,e,n).then(f=>{var m;if((f||n)&&s.isPrimaryClient){const v=f?!f.fromCache:(m=n==null?void 0:n.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;s.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(f){i.push(f);const v=Go.Wi(h.targetId,f);o.push(v)}}))}),await Promise.all(c),s.Ca.d_(i),await async function(h,f){const m=$(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>k.forEach(f,R=>k.forEach(R.$i,S=>m.persistence.referenceDelegate.addReference(v,R.targetId,S)).next(()=>k.forEach(R.Ui,S=>m.persistence.referenceDelegate.removeReference(v,R.targetId,S)))))}catch(v){if(!Rr(v))throw v;L("LocalStore","Failed to update sequence numbers: "+v)}for(const v of f){const R=v.targetId;if(!v.fromCache){const S=m.os.get(R),N=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(N);m.os=m.os.insert(R,V)}}}(s.localStore,o))}async function Uv(r,e){const n=$(r);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const s=await wh(n.localStore,e);n.currentUser=e,function(o,c){o.ka.forEach(l=>{l.forEach(h=>{h.reject(new M(C.CANCELLED,c))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Cr(n,s.hs)}}function Fv(r,e){const n=$(r),s=n.Na.get(e);if(s&&s.va)return W().add(s.key);{let i=W();const o=n.Ma.get(e);if(!o)return i;for(const c of o){const l=n.Fa.get(c);i=i.unionWith(l.view.Va)}return i}}function $h(r){const e=$(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=xh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vv.bind(null,e),e.Ca.d_=Tv.bind(null,e.eventManager),e.Ca.$a=Iv.bind(null,e.eventManager),e}function Bv(r){const e=$(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mv.bind(null,e),e}class Ds{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Wy(this.persistence,new Hy,e.initialUser,this.serializer)}Ga(e){return new $y(Wo.Zr,this.serializer)}Wa(e){return new Zy}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ds.provider={build:()=>new Ds};class po{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uv.bind(null,this.syncEngine),await vv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wv}()}createDatastore(e){const n=zs(e.databaseInfo.databaseId),s=function(o){return new rv(o)}(e.databaseInfo);return function(o,c,l,h){return new ov(o,c,l,h)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,o,c,l){return new cv(s,i,o,c,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Pl(this.syncEngine,n,0),function(){return Tl.D()?new Tl:new ev}())}createSyncEngine(e,n){return function(i,o,c,l,h,f,m){const v=new Pv(i,o,c,l,h,f);return m&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=$(i);L("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Sr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}po.provider={build:()=>new po};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ct("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,s,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=qu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,async c=>{L("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(L("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Zo(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function qi(r,e){r.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async i=>{s.isEqual(i)||(await wh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Cl(r,e){r.asyncQueue.verifyOperationInProgress();const n=await jv(r);L("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>Il(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,i)=>Il(e.remoteStore,i)),r._onlineComponents=e}async function jv(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await qi(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;fn("Error using user provided cache. Falling back to memory cache: "+n),await qi(r,new Ds)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await qi(r,new Ds);return r._offlineComponents}async function qh(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await Cl(r,r._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await Cl(r,new po))),r._onlineComponents}function qv(r){return qh(r).then(e=>e.syncEngine)}async function Hh(r){const e=await qh(r),n=e.eventManager;return n.onListen=Sv.bind(null,e.syncEngine),n.onUnlisten=Dv.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Cv.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Nv.bind(null,e.syncEngine),n}function Hv(r,e,n={}){const s=new it;return r.asyncQueue.enqueueAndForget(async()=>function(o,c,l,h,f){const m=new jh({next:R=>{m.Za(),c.enqueueAndForget(()=>Nh(o,v));const S=R.docs.has(l);!S&&R.fromCache?f.reject(new M(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&R.fromCache&&h&&h.source==="server"?f.reject(new M(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),v=new Oh(Fo(l.path),m,{includeMetadataChanges:!0,_a:!0});return Dh(o,v)}(await Hh(r),r.asyncQueue,e,n,s)),s.promise}function zv(r,e,n={}){const s=new it;return r.asyncQueue.enqueueAndForget(async()=>function(o,c,l,h,f){const m=new jh({next:R=>{m.Za(),c.enqueueAndForget(()=>Nh(o,v)),R.fromCache&&h.source==="server"?f.reject(new M(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),v=new Oh(l,m,{includeMetadataChanges:!0,_a:!0});return Dh(o,v)}(await Hh(r),r.asyncQueue,e,n,s)),s.promise}/**
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
 */function zh(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(r,e,n){if(!n)throw new M(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Wv(r,e,n,s){if(e===!0&&s===!0)throw new M(C.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Dl(r){if(!x.isDocumentKey(r))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Nl(r){if(x.isDocumentKey(r))throw new M(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function na(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F()}function $e(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=na(r);throw new M(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zh((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ks{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ol({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ol(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new c_;switch(s.type){case"firstParty":return new d_(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=kl.get(n);s&&(L("ComponentProvider","Removing Datastore"),kl.delete(n),s.terminate())}(this),Promise.resolve()}}function Gv(r,e,n,s={}){var i;const o=(r=$e(r,Ks))._getSettings(),c=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==c&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:c,ssl:!1})),s.mockUserToken){let l,h;if(typeof s.mockUserToken=="string")l=s.mockUserToken,h=Ae.MOCK_USER;else{l=Xl(s.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const f=s.mockUserToken.sub||s.mockUserToken.user_id;if(!f)throw new M(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ae(f)}r._authCredentials=new l_(new ju(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class Ne{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class Rt extends Qs{constructor(e,n,s){super(e,n,Fo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new x(e))}withConverter(e){return new Rt(this.firestore,e,this._path)}}function kr(r,e,...n){if(r=ae(r),Wh("collection","path",e),r instanceof Ks){const s=te.fromString(e,...n);return Nl(s),new Rt(r,null,s)}{if(!(r instanceof Ne||r instanceof Rt))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(e,...n));return Nl(s),new Rt(r.firestore,null,s)}}function ke(r,e,...n){if(r=ae(r),arguments.length===1&&(e=qu.newId()),Wh("doc","path",e),r instanceof Ks){const s=te.fromString(e,...n);return Dl(s),new Ne(r,null,new x(s))}{if(!(r instanceof Ne||r instanceof Rt))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(e,...n));return Dl(s),new Ne(r.firestore,r instanceof Rt?r.converter:null,new x(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ih(this,"async_queue_retry"),this.Vu=()=>{const s=ji();s&&L("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=ji();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ji();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new it;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Rr(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const i=function(c){let l=c.message||"";return c.stack&&(l=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),l}(s);throw ct("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Yo.createAndSchedule(this,e,n,s,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Zt extends Ks{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Vl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vl(e),this._firestoreClient=void 0,await e}}}function Kv(r,e){const n=typeof r=="object"?r:To(),s=typeof r=="string"?r:"(default)",i=Vs(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const o=Gl("firestore");o&&Gv(i,...o)}return i}function ra(r){if(r._terminated)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Qv(r),r._firestoreClient}function Qv(r){var e,n,s;const i=r._freezeSettings(),o=function(l,h,f,m){return new R_(l,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,zh(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new $v(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(ye.fromBase64String(e))}catch(n){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vn(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */class ia{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=/^__.*__$/;class Jv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Dt(e,this.data,this.fieldMask,n,this.fieldTransforms):new br(e,this.data,n,this.fieldTransforms)}}class Gh{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Dt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Kh(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class oa{constructor(e,n,s,i,o,c){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new oa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:s,xu:!1});return i.Ou(e),i}Nu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ns(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Kh(this.Cu)&&Xv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Yv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||zs(e)}Qu(e,n,s,i=!1){return new oa({Cu:e,methodName:n,qu:s,path:ge.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aa(r){const e=r._freezeSettings(),n=zs(r._databaseId);return new Yv(r._databaseId,!!e.ignoreUndefinedProperties,n)}function Qh(r,e,n,s,i,o={}){const c=r.Qu(o.merge||o.mergeFields?2:0,e,n,i);la("Data must be an object, but it was:",c,s);const l=Xh(s,c);let h,f;if(o.merge)h=new Ve(c.fieldMask),f=c.fieldTransforms;else if(o.mergeFields){const m=[];for(const v of o.mergeFields){const R=mo(e,v,n);if(!c.contains(R))throw new M(C.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Yh(m,R)||m.push(R)}h=new Ve(m),f=c.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,f=c.fieldTransforms;return new Jv(new De(l),h,f)}class Ys extends Js{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ys}}class ca extends Js{_toFieldTransform(e){return new J_(e.path,new mr)}isEqual(e){return e instanceof ca}}function Zv(r,e,n,s){const i=r.Qu(1,e,n);la("Data must be an object, but it was:",i,s);const o=[],c=De.empty();Jt(s,(h,f)=>{const m=ua(e,h,n);f=ae(f);const v=i.Nu(m);if(f instanceof Ys)o.push(m);else{const R=Zs(f,v);R!=null&&(o.push(m),c.set(m,R))}});const l=new Ve(o);return new Gh(c,l,i.fieldTransforms)}function eE(r,e,n,s,i,o){const c=r.Qu(1,e,n),l=[mo(e,s,n)],h=[i];if(o.length%2!=0)throw new M(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)l.push(mo(e,o[R])),h.push(o[R+1]);const f=[],m=De.empty();for(let R=l.length-1;R>=0;--R)if(!Yh(f,l[R])){const S=l[R];let N=h[R];N=ae(N);const V=c.Nu(S);if(N instanceof Ys)f.push(S);else{const D=Zs(N,V);D!=null&&(f.push(S),m.set(S,D))}}const v=new Ve(f);return new Gh(m,v,c.fieldTransforms)}function Zs(r,e){if(Jh(r=ae(r)))return la("Unsupported field value:",e,r),Xh(r,e);if(r instanceof Js)return function(s,i){if(!Kh(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,i){const o=[];let c=0;for(const l of s){let h=Zs(l,i.Lu(c));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),c++}return{arrayValue:{values:o}}}(r,e)}return function(s,i){if((s=ae(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return K_(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=ue.fromDate(s);return{timestampValue:Cs(i.serializer,o)}}if(s instanceof ue){const o=new ue(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Cs(i.serializer,o)}}if(s instanceof sa)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vn)return{bytesValue:ph(i.serializer,s._byteString)};if(s instanceof Ne){const o=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(o))throw i.Bu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ho(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof ia)return function(c,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(h=>{if(typeof h!="number")throw l.Bu("VectorValues must only contain numeric values.");return Bo(l.serializer,h)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${na(s)}`)}(r,e)}function Xh(r,e){const n={};return Hu(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jt(r,(s,i)=>{const o=Zs(i,e.Mu(s));o!=null&&(n[s]=o)}),{mapValue:{fields:n}}}function Jh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ue||r instanceof sa||r instanceof vn||r instanceof Ne||r instanceof Js||r instanceof ia)}function la(r,e,n){if(!Jh(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=na(n);throw s==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+s)}}function mo(r,e,n){if((e=ae(e))instanceof Xs)return e._internalPath;if(typeof e=="string")return ua(r,e);throw Ns("Field path arguments must be of type string or ",r,!1,void 0,n)}const tE=new RegExp("[~\\*/\\[\\]]");function ua(r,e,n){if(e.search(tE)>=0)throw Ns(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Xs(...e.split("."))._internalPath}catch{throw Ns(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Ns(r,e,n,s,i){const o=s&&!s.isEmpty(),c=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||c)&&(h+=" (found",o&&(h+=` in field ${s}`),c&&(h+=` in document ${i}`),h+=")"),new M(C.INVALID_ARGUMENT,l+r+h)}function Yh(r,e){return r.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,s,i,o){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ed("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nE extends Zh{data(){return super.data()}}function ed(r,e){return typeof e=="string"?ua(r,e):e instanceof Xs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sE{convertValue(e,n="none"){switch(Kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Jt(e,(i,o)=>{s[i]=this.convertValue(o,n)}),s}convertVectorValue(e){var n,s,i;const o=(i=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(c=>oe(c.doubleValue));return new ia(o)}convertGeoPoint(e){return new sa(oe(e.latitude),oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Lo(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(dr(e));default:return null}}convertTimestamp(e){const n=St(e);return new ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=te.fromString(e);J(Eh(s));const i=new fr(s.get(1),s.get(3)),o=new x(s.popFirst(5));return i.isEqual(n)||ct(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(r,e,n){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nd extends Zh{constructor(e,n,s,i,o,c){super(e,n,s,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ed("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ds extends nd{data(e={}){return super.data(e)}}class iE{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ds(this._firestore,this._userDataWriter,s.key,s,new Zn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map(l=>{const h=new ds(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:c++}})}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new ds(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return l.type!==0&&(f=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),m=c.indexOf(l.doc.key)),{type:oE(l.type),doc:h,oldIndex:f,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(r){r=$e(r,Ne);const e=$e(r.firestore,Zt);return Hv(ra(e),r._key).then(n=>cE(e,r,n))}class rd extends sE{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function ei(r){r=$e(r,Qs);const e=$e(r.firestore,Zt),n=ra(e),s=new rd(e);return rE(r._query),zv(n,r._query).then(i=>new iE(e,s,r,i))}function ha(r,e,n){r=$e(r,Ne);const s=$e(r.firestore,Zt),i=td(r.converter,e);return ri(s,[Qh(aa(s),"setDoc",r._key,i,r.converter!==null,n).toMutation(r._key,Me.none())])}function ti(r,e,n,...s){r=$e(r,Ne);const i=$e(r.firestore,Zt),o=aa(i);let c;return c=typeof(e=ae(e))=="string"||e instanceof Xs?eE(o,"updateDoc",r._key,e,n,s):Zv(o,"updateDoc",r._key,e),ri(i,[c.toMutation(r._key,Me.exists(!0))])}function ni(r){return ri($e(r.firestore,Zt),[new $o(r._key,Me.none())])}function aE(r,e){const n=$e(r.firestore,Zt),s=ke(r),i=td(r.converter,e);return ri(n,[Qh(aa(r.firestore),"addDoc",s._key,i,r.converter!==null,{}).toMutation(s._key,Me.exists(!1))]).then(()=>s)}function ri(r,e){return function(s,i){const o=new it;return s.asyncQueue.enqueueAndForget(async()=>Ov(await qv(s),i,o)),o.promise}(ra(r),e)}function cE(r,e,n){const s=n.docs.get(e._key),i=new rd(r);return new nd(r,i,e._key,s,new Zn(n.hasPendingWrites,n.fromCache),e.converter)}function da(){return new ca("serverTimestamp")}(function(e,n=!0){(function(i){Tn=i})(Xt),qt(new bt("firestore",(s,{instanceIdentifier:i,options:o})=>{const c=s.getProvider("app").getImmediate(),l=new Zt(new u_(s.getProvider("auth-internal")),new p_(s.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(f.options.projectId,m)}(c,i),c);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),He(Zc,"4.7.3",e),He(Zc,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="firebasestorage.googleapis.com",id="storageBucket",lE=2*60*1e3,uE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends Je{constructor(e,n,s=0){super(Hi(e),`Firebase Storage: ${n} (${Hi(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ie.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var se;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(se||(se={}));function Hi(r){return"storage/"+r}function fa(){const r="An unknown error occurred, please check the error payload for server response.";return new ie(se.UNKNOWN,r)}function hE(r){return new ie(se.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function dE(r){return new ie(se.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fE(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ie(se.UNAUTHENTICATED,r)}function pE(){return new ie(se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mE(r){return new ie(se.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function gE(){return new ie(se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _E(){return new ie(se.CANCELED,"User canceled the upload/download.")}function yE(r){return new ie(se.INVALID_URL,"Invalid URL '"+r+"'.")}function vE(r){return new ie(se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function EE(){return new ie(se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+id+"' property when initializing the app?")}function wE(){return new ie(se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function TE(){return new ie(se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function IE(r){return new ie(se.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function go(r){return new ie(se.INVALID_ARGUMENT,r)}function od(){return new ie(se.APP_DELETED,"The Firebase app was deleted.")}function AE(r){return new ie(se.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function or(r,e){return new ie(se.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Wn(r){throw new ie(se.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Le.makeFromUrl(e,n)}catch{return new Le(e,"")}if(s.path==="")return s;throw vE(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function o(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const c="(/(.*))?$",l=new RegExp("^gs://"+i+c,"i"),h={bucket:1,path:3};function f(z){z.path_=decodeURIComponent(z.path)}const m="v[A-Za-z0-9_]+",v=n.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",S=new RegExp(`^https?://${v}/${m}/b/${i}/o${R}`,"i"),N={bucket:1,path:3},V=n===sd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",H=new RegExp(`^https?://${V}/${i}/${D}`,"i"),j=[{regex:l,indices:h,postModify:o},{regex:S,indices:N,postModify:f},{regex:H,indices:{bucket:1,path:2},postModify:f}];for(let z=0;z<j.length;z++){const fe=j[z],Z=fe.regex.exec(e);if(Z){const w=Z[fe.indices.bucket];let g=Z[fe.indices.path];g||(g=""),s=new Le(w,g),fe.postModify(s);break}}if(s==null)throw yE(e);return s}}class RE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(r,e,n){let s=1,i=null,o=null,c=!1,l=0;function h(){return l===2}let f=!1;function m(...D){f||(f=!0,e.apply(null,D))}function v(D){i=setTimeout(()=>{i=null,r(S,h())},D)}function R(){o&&clearTimeout(o)}function S(D,...H){if(f){R();return}if(D){R(),m.call(null,D,...H);return}if(h()||c){R(),m.call(null,D,...H);return}s<64&&(s*=2);let j;l===1?(l=2,j=0):j=(s+Math.random())*1e3,v(j)}let N=!1;function V(D){N||(N=!0,R(),!f&&(i!==null?(D||(l=2),clearTimeout(i),v(0)):D||(l=1)))}return v(0),o=setTimeout(()=>{c=!0,V(!0)},n),V}function PE(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(r){return r!==void 0}function CE(r){return typeof r=="object"&&!Array.isArray(r)}function pa(r){return typeof r=="string"||r instanceof String}function Ll(r){return ma()&&r instanceof Blob}function ma(){return typeof Blob<"u"}function Ml(r,e,n,s){if(s<e)throw go(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>n)throw go(`Invalid value for '${r}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(r,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${r}`}function ad(r){const e=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const i=e(s)+"="+e(r[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var Bt;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Bt||(Bt={}));/**
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
 */function kE(r,e){const n=r>=500&&r<600,i=[408,429].indexOf(r)!==-1,o=e.indexOf(r)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,s,i,o,c,l,h,f,m,v,R=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=c,this.callback_=l,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=v,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,N)=>{this.resolve_=S,this.reject_=N,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ns(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const c=l=>{const h=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(c),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(c),this.pendingConnection_=null;const l=o.getErrorCode()===Bt.NO_ERROR,h=o.getStatus();if(!l||kE(h,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===Bt.ABORT;s(!1,new ns(!1,null,m));return}const f=this.successCodes_.indexOf(h)!==-1;s(!0,new ns(f,o))})},n=(s,i)=>{const o=this.resolve_,c=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(l,l.getResponse());SE(h)?o(h):o()}catch(h){c(h)}else if(l!==null){const h=fa();h.serverResponse=l.getErrorText(),this.errorCallback_?c(this.errorCallback_(l,h)):c(h)}else if(i.canceled){const h=this.appDelete_?od():_E();c(h)}else{const h=gE();c(h)}};this.canceled_?n(!1,new ns(!1,null,!0)):this.backoffId_=bE(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ns{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function NE(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function OE(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VE(r,e){e&&(r["X-Firebase-GMPID"]=e)}function LE(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function ME(r,e,n,s,i,o,c=!0){const l=ad(r.urlParams),h=r.url+l,f=Object.assign({},r.headers);return VE(f,e),NE(f,n),OE(f,o),LE(f,s),new DE(h,r.method,f,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,i,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function UE(...r){const e=xE();if(e!==void 0){const n=new e;for(let s=0;s<r.length;s++)n.append(r[s]);return n.getBlob()}else{if(ma())return new Blob(r);throw new ie(se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function FE(r,e,n){return r.webkitSlice?r.webkitSlice(e,n):r.mozSlice?r.mozSlice(e,n):r.slice?r.slice(e,n):null}/**
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
 */function BE(r){if(typeof atob>"u")throw IE("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zi{constructor(e,n){this.data=e,this.contentType=n||null}}function cd(r,e){switch(r){case Ue.RAW:return new zi(ld(e));case Ue.BASE64:case Ue.BASE64URL:return new zi(ud(r,e));case Ue.DATA_URL:return new zi(jE(e),qE(e))}throw fa()}function ld(r){const e=[];for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<r.length-1&&(r.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=s,c=r.charCodeAt(++n);s=65536|(o&1023)<<10|c&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function $E(r){let e;try{e=decodeURIComponent(r)}catch{throw or(Ue.DATA_URL,"Malformed data URL.")}return ld(e)}function ud(r,e){switch(r){case Ue.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw or(r,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ue.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw or(r,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=BE(e)}catch(i){throw i.message.includes("polyfill")?i:or(r,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class hd{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw or(Ue.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=HE(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function jE(r){const e=new hd(r);return e.base64?ud(Ue.BASE64,e.rest):$E(e.rest)}function qE(r){return new hd(r).contentType}function HE(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){let s=0,i="";Ll(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ll(this.data_)){const s=this.data_,i=FE(s,e,n);return i===null?null:new wt(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new wt(s,!0)}}static getBlob(...e){if(ma()){const n=e.map(s=>s instanceof wt?s.data_:s);return new wt(UE.apply(null,n))}else{const n=e.map(c=>pa(c)?cd(Ue.RAW,c).data:c.data_);let s=0;n.forEach(c=>{s+=c.byteLength});const i=new Uint8Array(s);let o=0;return n.forEach(c=>{for(let l=0;l<c.length;l++)i[o++]=c[l]}),new wt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(r){let e;try{e=JSON.parse(r)}catch{return null}return CE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function WE(r,e){const n=e.split("/").filter(s=>s.length>0).join("/");return r.length===0?n:r+"/"+n}function fd(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(r,e){return e}class Ce{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||GE}}let rs=null;function KE(r){return!pa(r)||r.length<2?r:fd(r)}function pd(){if(rs)return rs;const r=[];r.push(new Ce("bucket")),r.push(new Ce("generation")),r.push(new Ce("metageneration")),r.push(new Ce("name","fullPath",!0));function e(o,c){return KE(c)}const n=new Ce("name");n.xform=e,r.push(n);function s(o,c){return c!==void 0?Number(c):c}const i=new Ce("size");return i.xform=s,r.push(i),r.push(new Ce("timeCreated")),r.push(new Ce("updated")),r.push(new Ce("md5Hash",null,!0)),r.push(new Ce("cacheControl",null,!0)),r.push(new Ce("contentDisposition",null,!0)),r.push(new Ce("contentEncoding",null,!0)),r.push(new Ce("contentLanguage",null,!0)),r.push(new Ce("contentType",null,!0)),r.push(new Ce("metadata","customMetadata",!0)),rs=r,rs}function QE(r,e){function n(){const s=r.bucket,i=r.fullPath,o=new Le(s,i);return e._makeStorageReference(o)}Object.defineProperty(r,"ref",{get:n})}function XE(r,e,n){const s={};s.type="file";const i=n.length;for(let o=0;o<i;o++){const c=n[o];s[c.local]=c.xform(s,e[c.server])}return QE(s,r),s}function md(r,e,n){const s=dd(e);return s===null?null:XE(r,s,n)}function JE(r,e,n,s){const i=dd(e);if(i===null||!pa(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const c=encodeURIComponent;return o.split(",").map(f=>{const m=r.bucket,v=r.fullPath,R="/b/"+c(m)+"/o/"+c(v),S=ga(R,n,s),N=ad({alt:"media",token:f});return S+N})[0]}function YE(r,e){const n={},s=e.length;for(let i=0;i<s;i++){const o=e[i];o.writable&&(n[o.server]=r[o.local])}return JSON.stringify(n)}class gd{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(r){if(!r)throw fa()}function ZE(r,e){function n(s,i){const o=md(r,i,e);return _d(o!==null),o}return n}function ew(r,e){function n(s,i){const o=md(r,i,e);return _d(o!==null),JE(o,i,r.host,r._protocol)}return n}function yd(r){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=pE():i=fE():n.getStatus()===402?i=dE(r.bucket):n.getStatus()===403?i=mE(r.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function tw(r){const e=yd(r);function n(s,i){let o=e(s,i);return s.getStatus()===404&&(o=hE(r.path)),o.serverResponse=i.serverResponse,o}return n}function nw(r,e,n){const s=e.fullServerUrl(),i=ga(s,r.host,r._protocol),o="GET",c=r.maxOperationRetryTime,l=new gd(i,o,ew(r,n),c);return l.errorHandler=tw(e),l}function rw(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function sw(r,e,n){const s=Object.assign({},n);return s.fullPath=r.path,s.size=e.size(),s.contentType||(s.contentType=rw(null,e)),s}function iw(r,e,n,s,i){const o=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function l(){let j="";for(let z=0;z<2;z++)j=j+Math.random().toString().slice(2);return j}const h=l();c["Content-Type"]="multipart/related; boundary="+h;const f=sw(e,s,i),m=YE(f,n),v="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,R=`\r
--`+h+"--",S=wt.getBlob(v,s,R);if(S===null)throw wE();const N={name:f.fullPath},V=ga(o,r.host,r._protocol),D="POST",H=r.maxUploadRetryTime,q=new gd(V,D,ZE(r,n),H);return q.urlParams=N,q.headers=c,q.body=S.uploadData(),q.errorHandler=yd(e),q}class ow{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Wn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class aw extends ow{initXhr(){this.xhr_.responseType="text"}}function vd(){return new aw}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){this._service=e,n instanceof Le?this._location=n:this._location=Le.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qt(e,n)}get root(){const e=new Le(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fd(this._location.path)}get storage(){return this._service}get parent(){const e=zE(this._location.path);if(e===null)return null;const n=new Le(this._location.bucket,e);return new Qt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw AE(e)}}function cw(r,e,n){r._throwIfRoot("uploadBytes");const s=iw(r.storage,r._location,pd(),new wt(e,!0),n);return r.storage.makeRequestWithTokens(s,vd).then(i=>({metadata:i,ref:r}))}function lw(r,e,n=Ue.RAW,s){r._throwIfRoot("uploadString");const i=cd(n,e),o=Object.assign({},s);return o.contentType==null&&i.contentType!=null&&(o.contentType=i.contentType),cw(r,i.data,o)}function uw(r){r._throwIfRoot("getDownloadURL");const e=nw(r.storage,r._location,pd());return r.storage.makeRequestWithTokens(e,vd).then(n=>{if(n===null)throw TE();return n})}function hw(r,e){const n=WE(r._location.path,e),s=new Le(r._location.bucket,n);return new Qt(r.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(r){return/^[A-Za-z]+:\/\//.test(r)}function fw(r,e){return new Qt(r,e)}function Ed(r,e){if(r instanceof _a){const n=r;if(n._bucket==null)throw EE();const s=new Qt(n,n._bucket);return e!=null?Ed(s,e):s}else return e!==void 0?hw(r,e):r}function pw(r,e){if(e&&dw(e)){if(r instanceof _a)return fw(r,e);throw go("To use ref(service, url), the first argument must be a Storage instance.")}else return Ed(r,e)}function xl(r,e){const n=e==null?void 0:e[id];return n==null?null:Le.makeFromBucketSpec(n,r)}function mw(r,e,n,s={}){r.host=`${e}:${n}`,r._protocol="http";const{mockUserToken:i}=s;i&&(r._overrideAuthToken=typeof i=="string"?i:Xl(i,r.app.options.projectId))}class _a{constructor(e,n,s,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=sd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lE,this._maxUploadRetryTime=uE,this._requests=new Set,i!=null?this._bucket=Le.makeFromBucketSpec(i,this._host):this._bucket=xl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Le.makeFromBucketSpec(this._url,e):this._bucket=xl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ml("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ml("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qt(this,e)}_makeRequest(e,n,s,i,o=!0){if(this._deleted)return new RE(od());{const c=ME(e,this._appId,s,i,n,this._firebaseVersion,o);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Ul="@firebase/storage",Fl="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="storage";function gw(r,e,n,s){return r=ae(r),lw(r,e,n,s)}function _w(r){return r=ae(r),uw(r)}function yw(r,e){return r=ae(r),pw(r,e)}function vw(r=To(),e){r=ae(r);const s=Vs(r,wd).getImmediate({identifier:e}),i=Gl("storage");return i&&Ew(s,...i),s}function Ew(r,e,n,s={}){mw(r,e,n,s)}function ww(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),i=r.getProvider("app-check-internal");return new _a(n,s,i,e,Xt)}function Tw(){qt(new bt(wd,ww,"PUBLIC").setMultipleInstances(!0)),He(Ul,Fl,""),He(Ul,Fl,"esm2017")}Tw();const Iw={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},ya=Zl(Iw),Dr=o_(ya),he=Kv(ya),Aw=vw(ya),Td="archery_v5",Rw="archery_v4";function Bl(){try{const r=JSON.parse(localStorage.getItem(Td)||"null");if(r)return r;const e=JSON.parse(localStorage.getItem(Rw)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function Rn(){try{localStorage.setItem(Td,JSON.stringify({friends:T.friends,rounds:T.rounds.slice(0,200),courses:T.courses}))}catch{}}const bw=[11,10,8,5,"M"];function si(r){return r==="M"||r==null?0:Number(r)}function Id(r){return r?r.split(";").map(e=>e.split(",").map(n=>n==="M"?"M":Number(n))):[]}function Pw(r){return r.map(e=>e.map(n=>n??"M").join(",")).join(";")}function Fe(r){return r.flat().reduce((e,n)=>e+si(n),0)}function Sw(r,e){const n=r.flatMap(s=>(s.scores[e]||[]).filter(i=>i!=null).map(si));return n.length?(n.reduce((s,i)=>s+i,0)/n.length).toFixed(1):null}function Cw(r){const e={11:0,10:0,8:0,5:0,M:0};return r.flat().forEach(n=>{n==="M"?e.M++:n!=null&&e[Number(n)]!==void 0&&e[Number(n)]++}),e}function ii(r){return r.length?r.reduce((e,n)=>Fe(n.scores)>Fe(e.scores)?n:e,r[0]):null}function kw(r,e){const n=r.flat().filter(s=>s!=null);return n.length?n.reduce((s,i)=>s+si(i),0)/n.length<e:!1}function Dw(r,e,n){return{id:r,name:e,isGuest:!!n,scores:[]}}function Nw(r,e){for(;r.scores.length<e;)r.scores.push([null,null])}function Ow(r,e){let n=0;for(let s=0;s<e;s++)r.every(i=>{const o=i.scores[s]||[null,null];return o[0]!=null&&o[1]!=null})&&n++;return n}function Ad(r){return{name:r.name,courseId:r.courseId||null,courseName:r.courseName||null,numTargets:r.numTargets,startTarget:r.startTarget||1,created:r.created,completed:r.completed||null,gpsRoute:r.gpsRoute||null,gpsDuration:r.gpsDuration||null,gpsDistance:r.gpsDistance||null,traversalOrder:r.traversalOrder,traversalPos:r.traversalPos||0,shooters:r.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:Pw(e.scores)}))}}function Vw(r){return{...r,shooters:(r.shooters||[]).map(e=>({...e,scores:Id(e.scores)}))}}let fs=null,ps=!1,$t=!1,_o=[],ar=null,er=0,je=null,yo=null,Gn=null;function Lw(r){return r?r.split(";").map(e=>{const[n,s]=e.split(",").map(Number);return{lat:n,lng:s}}):[]}function Rd(r,e){const s=(e.lat-r.lat)*Math.PI/180,i=(e.lng-r.lng)*Math.PI/180,o=Math.sin(s/2)**2+Math.cos(r.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(i/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))}function Mw(r){return`${Math.floor(r/60).toString().padStart(2,"0")}:${(r%60).toString().padStart(2,"0")}`}function xw(r){return r<1e3?`${Math.round(r)} m`:`${(r/1e3).toFixed(2)} km`}function Uw(r){return navigator.geolocation?(Gn=r,_o=[],er=0,je=null,ar=Date.now(),$t=!1,ps=!0,fs=navigator.geolocation.watchPosition(e=>{if(!ps||$t)return;const n={lat:e.coords.latitude,lng:e.coords.longitude};je&&(er+=Rd(je,n)),je=n,_o.push(n),Gn&&Gn({lat:n.lat,lng:n.lng,distance:er,elapsed:Math.round((Date.now()-ar)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),yo=setInterval(()=>{ps&&!$t&&Gn&&Gn({lat:je==null?void 0:je.lat,lng:je==null?void 0:je.lng,distance:er,elapsed:Math.round((Date.now()-ar)/1e3)})},1e3),!0):!1}window.toggleGpsPause=function(){return $t=!$t,$t};function bd(){return ps=!1,$t=!1,fs!==null&&(navigator.geolocation.clearWatch(fs),fs=null),clearInterval(yo),yo=null,{route:_o.map(r=>`${r.lat},${r.lng}`).join(";"),distance:Math.round(er),duration:ar?Math.round((Date.now()-ar)/1e3):0}}function va(){return new Promise((r,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(n=>r({lat:n.coords.latitude,lng:n.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function Fw(r,e){if(!(r!=null&&r.length)||!e)return 0;let n=1/0,s=0;return r.forEach((i,o)=>{if(!i.gps||i.GPS)return;const c=Rd(e,i.gps||i.GPS);c<n&&(n=c,s=o)}),s}const T={user:null,profile:null,isAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,currentCourse:null,courseMap:null,courseMapLayer:null,gpsTracking:!1,warnThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0};let ms=null;async function Bw(){try{"wakeLock"in navigator&&(ms=await navigator.wakeLock.request("screen"))}catch{}}function Ea(){ms&&(ms.release(),ms=null)}function jt(r,e="error"){const n=document.getElementById("auth-err");n.textContent=r,n.style.color=e==="ok"?"var(--success)":"",n.classList.remove("hidden")}window.showAuthTab=function(r){document.querySelectorAll(".auth-tab").forEach((e,n)=>e.classList.toggle("active",n===0==(r==="login"))),document.getElementById("login-form").classList.toggle("hidden",r!=="login"),document.getElementById("signup-form").classList.toggle("hidden",r!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const r=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!r||!e){jt("Udfyld alle felter.");return}const n=document.querySelector("#login-form .btn");n.disabled=!0,n.textContent="...";try{await zm(Dr,r,e)}catch(s){jt(s.code==="auth/invalid-credential"?"Ugyldig email eller kodeord.":"Der opstod en fejl: "+s.code)}finally{n.disabled=!1,n.textContent="LOG IND"}};window.doSignup=async function(){const r=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),n=document.getElementById("signup-password").value;if(!r||!e||!n){jt("Udfyld alle felter.");return}const s=document.querySelector("#signup-form .btn");s.disabled=!0,s.textContent="...";try{const i=await Hm(Dr,e,n);await ha(ke(he,"users",i.user.uid),{name:r,email:e,yam:r,"e-mail":e,created:da()})}catch(i){jt("Fejl: "+i.code)}finally{s.disabled=!1,s.textContent="OPRET KONTO"}};window.doForgot=async function(){const r=document.getElementById("login-email").value.trim();if(!r){jt("Indtast din email først.");return}try{await qm(Dr,r),jt("Nulstillingsmail sendt!","ok")}catch(e){jt("Fejl: "+e.code)}};window.doLogout=async function(){try{await Qm(Dr)}catch{}};document.addEventListener("DOMContentLoaded",()=>{var e,n,s;Km(Dr,async i=>{var o;if(i){T.user=i;let c,l;for(let h=0;h<3;h++)try{console.log("Henter profil for uid:",i.uid),[c,l]=await Promise.all([En(ke(he,"users",i.uid)),En(ke(he,"admins",i.uid))]),console.log("Profil:",c.exists(),(o=c.data)==null?void 0:o.call(c));break}catch(f){console.error("Profil fejl attempt",h,f.code,f.message),h<2?await new Promise(m=>setTimeout(m,2e3*(h+1))):(T.profile={name:i.email,email:i.email},T.isAdmin=!1)}if(c!=null&&c.exists()){const h=c.data();T.profile={name:h.name||h.yam||i.email,email:h.email||h["e-mail"]||i.email}}else T.profile||(T.profile={name:i.email,email:i.email});T.isAdmin=(l==null?void 0:l.exists())||!1,$w()}else jw()});let r=null;window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),r=i,document.getElementById("pwa-banner").style.display="flex"}),(e=document.getElementById("pwa-install-btn"))==null||e.addEventListener("click",async()=>{r&&(r.prompt(),await r.userChoice,r=null,document.getElementById("pwa-banner").style.display="none")}),(n=document.getElementById("pwa-dismiss-btn"))==null||n.addEventListener("click",()=>{document.getElementById("pwa-banner").style.display="none"}),vo(24),document.getElementById("target-count").addEventListener("change",i=>vo(Number(i.target.value))),(s=document.getElementById("photo-input"))==null||s.addEventListener("change",async i=>{var c;const o=i.target.files[0];if(o)try{const l=await Yw(o),h=bn(),f=yw(Aw,`courses/${T.round.courseId}/target_${h}.jpg`);await gw(f,l,"base64",{contentType:"image/jpeg"});const m=await _w(f);await Ta(T.round.courseId,h,{imageUrl:m}),(c=T.course)!=null&&c.targets&&(T.course.targets[h].imageUrl=m),Nt()}catch(l){alert("Upload fejl: "+l.message)}}),document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("click",o=>{o.target===i&&i.classList.add("hidden")})})});function $w(){var n;document.getElementById("hdr-name").textContent=T.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),document.getElementById("admin-badge").classList.toggle("hidden",!T.isAdmin),document.querySelectorAll(".admin-only").forEach(s=>s.classList.toggle("hidden",!T.isAdmin));const r=Bl();T.friends=r.friends||[],T.rounds=r.rounds||[],ci(),oi(),wa();const e=Bl().courses||[];T.courses=e,jl(),$l(),console.log("Henter baner, user uid:",(n=T.user)==null?void 0:n.uid),ei(kr(he,"courses")).then(s=>{console.log("Baner hentet:",s.docs.length,s.docs.map(o=>o.id));const i=s.docs.map(o=>{const c=o.data();return{id:o.id,name:c.name||c.yam||c.id||"—",numTargets:c.numTargets||c.antalMål||24,location:c.location||c.beliggenhed||"",targets:c.targets||c.mal||c.mål||[],visits:c.visits||c.besøg||[]}});i.length&&(T.courses=i,Rn(),jl(),$l())}).catch(s=>console.warn("courses:",s)),zw()}function jw(){T.user=null,T.profile=null,T.round=null,Ea(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){window.appLang=window.appLang==="da"?"en":"da",document.getElementById("lang-btn").textContent=window.appLang.toUpperCase()};window.switchTab=function(r){var n;document.querySelectorAll(".tab").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".nav-btn").forEach(s=>s.classList.remove("active"));const e=document.getElementById(`tab-${r}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(n=document.querySelector(`.nav-btn[data-tab="${r}"]`))==null||n.classList.add("active"),r==="friends"&&Zw(),r==="courses"&&T.courseMap&&setTimeout(()=>T.courseMap.invalidateSize(),100)};function $l(){const r=document.getElementById("course-sel"),e=r.value;r.innerHTML='<option value="">-- Ingen bane --</option>',T.courses.forEach(n=>{const s=document.createElement("option");s.value=n.id,s.textContent=`${n.name} (${n.numTargets} mål)`,r.appendChild(s)}),e&&(r.value=e),r.onchange=()=>{const n=T.courses.find(s=>s.id===r.value);vo(n?n.numTargets:Number(document.getElementById("target-count").value))}}function vo(r){const e=document.getElementById("start-target");e.innerHTML="";for(let n=1;n<=r;n++){const s=document.createElement("option");s.value=n,s.textContent=n,e.appendChild(s)}}window.addParticipant=function(r,e){if(document.getElementById(`chip-${r}`))return;const n=document.createElement("div");n.className="pchip",n.id=`chip-${r}`,n.innerHTML=`<span class="pchip-name">🎯 ${e}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(n)};function qw(){return Array.from(document.querySelectorAll(".pchip")).map(r=>({id:r.id.replace("chip-",""),name:r.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:r.id.startsWith("chip-guest-")}))}function oi(){const r=document.getElementById("qfriends");r.innerHTML="",T.friends.forEach(e=>{const n=document.createElement("button");n.className="qfbtn",n.textContent=e.name,n.onclick=()=>window.addParticipant(e.id,e.name),r.appendChild(n)})}window.searchFriends=async function(r){const e=document.getElementById("ac-list");if(!r.trim()){e.classList.add("hidden");return}const n=T.friends.filter(o=>o.name.toLowerCase().includes(r.toLowerCase()));let s=[];try{s=(await ei(kr(he,"users"))).docs.map(c=>({id:c.id,...c.data()})).filter(c=>{var l;return(c.name||c.yam||"").toLowerCase().includes(r.toLowerCase())&&c.id!==((l=T.user)==null?void 0:l.uid)&&!n.find(h=>h.id===c.id)}).map(c=>({id:c.id,name:c.name||c.yam||c.email||c["e-mail"]||"—",email:c.email||c["e-mail"]||""}))}catch(o){console.warn(o)}const i=[...n,...s];if(!i.length){e.classList.add("hidden");return}e.innerHTML=i.map(o=>`<div class="ac-item" onclick="selectFriend('${o.id}','${(o.name||"").replace(/'/g,"\\'")}','${(o.email||"").replace(/'/g,"\\'")}');document.getElementById('friend-search').value='';document.getElementById('ac-list').classList.add('hidden');">${o.name}${o.email?' <span style="font-size:11px;opacity:.6">${f.email}</span>':""}</div>`).join(""),e.classList.remove("hidden")};window.selectFriend=function(r,e,n){T.friends.find(s=>s.id===r)||(T.friends.push({id:r,name:e,email:n}),Rn(),ci(),oi()),window.addParticipant(r,e)};window.startRound=async function(){var f,m;const r=document.getElementById("round-name").value.trim()||"Min Skydning",e=document.getElementById("course-sel").value,n=Number(document.getElementById("target-count").value)||24,s=Number(document.getElementById("start-target").value)-1,i=document.getElementById("gps-auto-sw").classList.contains("on"),o=document.getElementById("gps-track-sw").classList.contains("on");T.warnThreshold=Number(document.getElementById("warn-thresh").value)||8;const c=[{id:T.user.uid,name:T.profile.name,isGuest:!1},...qw().filter(v=>v.id!==T.user.uid)];T.course=e&&T.courses.find(v=>v.id===e)||null;const l=c.map(v=>{const R=Dw(v.id,v.name,v.isGuest);return Nw(R,n),R});let h=s;if(i&&((f=T.course)!=null&&f.targets))try{h=Fw(T.course.targets,await va())}catch{}T.round={name:r,courseId:e||null,courseName:((m=T.course)==null?void 0:m.name)||null,numTargets:n,startTarget:h+1,shooters:l,created:Date.now(),traversalOrder:Pd(h,n),traversalPos:0},o&&(T.gpsTracking=Uw(Hw),document.getElementById("gps-bar").classList.toggle("hidden",!T.gpsTracking),Bw()),showActivePanel(),Pn(),Nt(),ai()};function Pd(r,e){return Array.from({length:e},(n,s)=>(r+s)%e)}function bn(){return T.round.traversalOrder[T.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function Nt(){var h,f;if(!T.round)return;const r=bn(),e=T.round.numTargets;document.getElementById("tnum-big").textContent=r+1,document.getElementById("tnum-suf").textContent=" af "+e,document.getElementById("round-badge").textContent=T.round.name;const n=(f=(h=T.course)==null?void 0:h.targets)==null?void 0:f[r];document.getElementById("anim-name").textContent=(n==null?void 0:n.name)||`Mål ${r+1}`;const s=Ow(T.round.shooters,e);document.getElementById("pbar").style.width=`${s/e*100}%`;const i=T.round.shooters.flatMap(m=>m.scores.flat().filter(v=>v!=null)),o=i.reduce((m,v)=>m+si(v),0);document.getElementById("stat-avg").textContent=i.length?(o/i.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=o,document.getElementById("stat-rem").textContent=e-s;const c=document.getElementById("anim-img");n!=null&&n.imageUrl||n!=null&&n.photo?(c.src=n.imageUrl||n.photo||n.photo||t.photo,c.classList.remove("hidden")):c.classList.add("hidden"),document.getElementById("edit-target-btn").classList.toggle("hidden",!(T.isAdmin&&T.round.courseId)),document.getElementById("next-btn").textContent=T.round.traversalPos===e-1?"AFSLUT →":"NÆSTE →";const l=Sw(T.round.shooters,r);document.getElementById("target-avg").textContent=l!==null?`Gns. dette mål: ${l}`:""}function Pn(){if(!T.round)return;const r=bn(),e=document.getElementById("shooters-list");e.innerHTML="",T.round.shooters.forEach((n,s)=>{const i=Fe(n.scores),o=kw(n.scores,T.warnThreshold),c=n.scores[r]||[null,null],l=document.createElement("div");l.className="shooter-card",l.innerHTML=`
      <div class="sh-head"><span style="font-size:18px;">🎯</span>${o?'<span class="warn-dot"></span>':""}
        <span class="sh-name">${n.name}</span>
        <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${i}</div></div>
      </div>
      <div class="arrows-row">${[0,1].map(h=>`
        <div class="arrow-grp"><div class="arrow-lbl">🎯 PIL ${h+1}</div>
          <div class="score-btns">${bw.map(f=>`
            <button class="sbtn ${c[h]===f?`sel-${f}`:""}" data-v="${f}"
              onclick="setScore(${s},${r},${h},'${f}')">${f}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(l)})}window.setScore=function(r,e,n,s){const i=s==="M"?"M":Number(s);T.round.shooters[r].scores[e][n]=i,ai(),Pn(),Nt()};function Hw({lat:r,lng:e,distance:n,elapsed:s}){document.getElementById("gps-time").textContent=Mw(s),document.getElementById("gps-dist").textContent=xw(n),r&&e&&(document.getElementById("gps-coord").textContent=`${r.toFixed(5)}, ${e.toFixed(5)}`)}async function ai(){if(!(!T.round||!T.user))try{await ha(ke(he,"users",T.user.uid,"active","round"),Ad(T.round))}catch(r){console.warn(r)}}async function zw(){var r;try{const e=await En(ke(he,"users",T.user.uid,"active","round"));if(!e.exists())return;const n=e.data();if(Date.now()-((r=n.created)!=null&&r.toMillis?n.created.toMillis():n.created||0)>24*60*60*1e3){await ni(ke(he,"users",T.user.uid,"active","round"));return}confirm("Genoptag den igangværende runde?")&&(T.round=Vw(n),T.round.traversalOrder=n.traversalOrder||Pd(0,T.round.numTargets),T.round.traversalPos=n.traversalPos||0,T.round.courseId&&(T.course=T.courses.find(i=>i.id===T.round.courseId)||null),showActivePanel(),Pn(),Nt())}catch(e){console.warn(e)}}window.prevTarget=function(){!T.round||T.round.traversalPos<=0||(T.round.traversalPos--,ai(),Pn(),Nt(),document.getElementById("scroll-area").scrollTop=0)};window.nextTarget=function(){T.round&&(T.round.traversalPos<T.round.numTargets-1?(T.round.traversalPos++,ai(),Pn(),Nt(),document.getElementById("scroll-area").scrollTop=0):window.finishRound())};window.skipToTarget=function(){T.round&&(document.getElementById("skip-input").max=T.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const r=Number(document.getElementById("skip-input").value);if(!T.round||r<1||r>T.round.numTargets)return;const e=T.round.traversalOrder.indexOf(r-1);e!==-1&&(T.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),Pn(),Nt()};window.finishRound=async function(){T.finishTap++;const r=document.getElementById("finish-btn");if(T.finishTap===1){r.textContent="✓ BEKRÆFT",setTimeout(()=>{T.finishTap=0,r.textContent="✓ AFSLUT NU"},3e3);return}T.finishTap=0,r.textContent="✓ AFSLUT NU";let e={};T.gpsTracking&&(e=bd(),T.gpsTracking=!1),Ea();const n="r_"+Date.now(),s={...Ad(T.round),completed:Date.now(),...e,id:n};if(T.rounds.unshift({...s,created:{toDate:()=>new Date,toMillis:()=>Date.now()}}),Rn(),wa(),T.round.courseId){const o=ii(T.round.shooters);Jw(T.round.courseId,{roundId:n,date:new Date().toLocaleDateString("da-DK"),participants:T.round.shooters.map(c=>c.name),winner:o==null?void 0:o.name,winnerScore:o?Fe(o.scores):0,gpsRoute:e.route||null,gpsDuration:e.duration||null,gpsDistance:e.distance||null}).catch(console.warn)}ni(ke(he,"users",T.user.uid,"active","round")).catch(()=>{});const i=T.round;T.round=null,Ww(i),showResultsPanel()};window.abortRound=async function(){T.abortTap++;const r=document.getElementById("abort-btn");if(T.abortTap===1){r.textContent="🗑 BEKRÆFT",setTimeout(()=>{T.abortTap=0,r.textContent="🗑 AFBRYD"},3e3);return}T.abortTap=0,r.textContent="🗑 AFBRYD",T.gpsTracking&&(bd(),T.gpsTracking=!1),Ea(),ni(ke(he,"users",T.user.uid,"active","round")).catch(()=>{}),T.round=null,showSetupPanel()};function Ww(r){const e=ii(r.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${(e==null?void 0:e.name)||"—"}</div><div class="win-score">${e?Fe(e.scores):0} point</div>`,document.getElementById("res-table").innerHTML=Sd(r),document.getElementById("res-dist").innerHTML=Cd(r)}function Sd(r){let e=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${r.shooters.map(n=>`<th>${n.name}</th>`).join("")}</tr>`;for(let n=0;n<r.numTargets;n++)e+=`<tr><td class="tc">${n+1}</td>`,r.shooters.forEach(s=>{const i=s.scores[n]||[null,null],o=(i[0]!=null&&i[0]!=="M"?Number(i[0]):0)+(i[1]!=null&&i[1]!=="M"?Number(i[1]):0);e+=`<td>${i.map(c=>c??"—").join("/")}<br><small>${o}</small></td>`}),e+="</tr>";return e+=`<tr class="tr-tot"><td class="tc">Total</td>${r.shooters.map(n=>`<td>${Fe(n.scores)}</td>`).join("")}</tr></table></div>`,e}function Cd(r){return'<div class="dist-grid">'+r.shooters.map(e=>{const n=Cw(e.scores);return`<div class="dist-card"><div class="dist-name">${e.name}</div>${Object.entries(n).map(([s,i])=>`<div class="dist-row"><span>${s}</span><span>${i}x</span></div>`).join("")}</div>`}).join("")+"</div>"}function wa(){const r=document.getElementById("rounds-list");if(!T.rounds.length){r.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}r.innerHTML="",T.rounds.forEach(e=>{var c;const n=(e.shooters||[]).map(l=>({...l,scores:Id(l.scores)})),s=n.length?ii(n):null,i=(c=e.created)!=null&&c.toDate?e.created.toDate().toLocaleDateString("da-DK"):e.created?new Date(e.created).toLocaleDateString("da-DK"):"—",o=document.createElement("div");o.className="rcard",o.innerHTML=`<div class="rcard-info"><div class="rcard-name">${e.name||"Runde"}</div><div class="rcard-meta">${i} · ${e.courseName||e.numTargets+" mål"}</div><div class="rcard-win">🏆 ${(s==null?void 0:s.name)||"—"} (${s?Fe(s.scores):0} pt)</div></div><button class="del-btn" data-id="${e.id}">✕</button>`,o.querySelector(".rcard-info").onclick=()=>Gw({...e,shooters:n}),o.querySelector(".del-btn").onclick=l=>{const h=l.currentTarget,f=`r-${e.id}`;T.deleteConfirm[f]?(delete T.deleteConfirm[f],T.rounds=T.rounds.filter(m=>m.id!==e.id),Rn(),wa()):(T.deleteConfirm[f]=!0,h.classList.add("conf"),h.textContent="Slet?",setTimeout(()=>{delete T.deleteConfirm[f],h.classList.remove("conf"),h.textContent="✕"},3e3))},r.appendChild(o)})}function Gw(r){let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),document.getElementById("rpop-body").innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${r.name}</h3>`+Sd(r)+Cd(r)}function jl(){const r=document.getElementById("courses-list");if(!T.courses.length){r.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}r.innerHTML="",T.courses.forEach(e=>{const n=document.createElement("div");n.className="ccard",n.innerHTML=`<div class="ccard-name">${e.name}</div><div class="ccard-meta">${e.numTargets} mål · ${e.location||"—"}</div>`,n.onclick=()=>Kw(e),r.appendChild(n)})}function Kw(r){T.currentCourse=r,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=r.name,window.switchSubtab("map"),Qw(r),kd(r),Xw(r)}function Qw(r){const e=document.getElementById("course-map");T.courseMap&&(T.courseMap.remove(),T.courseMap=null),T.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(T.courseMap);const n=[];(r.targets||[]).forEach((s,i)=>{!s.gps||s.GPS||(n.push([s.gps||s.GPS.lat,s.gps||s.GPS.lng]),window.L.marker([s.gps||s.GPS.lat,s.gps||s.GPS.lng],{icon:window.L.divIcon({className:"",html:`<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${i+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(T.courseMap).bindPopup(`<b>${i+1}. ${s.name||"Mål"}</b>${s.emoji?`<br>${s.emoji}`:""}${s.imageUrl||s.photo?`<br><img src="${s.imageUrl||s.photo}" style="max-width:140px;border-radius:4px;"/>`:""}`))}),n.length?T.courseMap.fitBounds(n,{padding:[20,20]}):T.courseMap.setView([55.7,12.5],10)}function kd(r){const e=document.getElementById("visits-list"),n=r.visits||r.besøg||[];if(!n.length){e.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}e.innerHTML="",n.forEach((s,i)=>{const o=document.createElement("div");o.className="visit-card",o.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;"><span style="font-weight:700;font-size:13px;">${s.date}</span><div style="display:flex;gap:6px;">${s.gpsRoute?`<button class="btn-icon" onclick="showRouteOnMap(parseRoute('${s.gpsRoute}'))">🗺️</button>`:""}<button class="btn-icon" style="color:var(--danger);" onclick="deleteVisit(${i})">✕</button></div></div><div style="font-size:12px;color:var(--muted);">${(s.participants||[]).join(", ")}</div>${s.winner?`<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${s.winner} (${s.winnerScore} pt)</div>`:""}`,e.appendChild(o)})}window.deleteVisit=async function(r){if(!confirm("Slet dette besøg?"))return;const e=ke(he,"courses",T.currentCourse.id),n=await En(e);if(!n.exists())return;const s=[...n.data().visits||n.data().besøg||[]];s.splice(r,1),await ti(e,{visits:s,besøg:s}),T.currentCourse.visits=s,kd(T.currentCourse)};window.showRouteOnMap=function(r){!T.courseMap||!r.length||(T.courseMapLayer&&T.courseMap.removeLayer(T.courseMapLayer),T.courseMapLayer=window.L.polyline(r.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(T.courseMap),T.courseMap.fitBounds(T.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.parseRoute=Lw;function Xw(r){document.getElementById("course-edit-form").innerHTML=`<div class="fg"><label class="lbl">Banenavn</label><input type="text" id="edit-cname" value="${r.name}" /></div><div class="fg"><label class="lbl">Lokation</label><input type="text" id="edit-cloc" value="${r.location||""}" /></div><button class="btn btn-gold" onclick="saveCourseEdit()">Gem ændringer</button>`}window.saveCourseEdit=async function(){const r=document.getElementById("edit-cname").value.trim(),e=document.getElementById("edit-cloc").value.trim();r&&(await ti(ke(he,"courses",T.currentCourse.id),{name:r,yam:r,location:e,beliggenhed:e}),T.currentCourse.name=r,T.currentCourse.location=e,document.getElementById("course-detail-title").textContent=r,alert("Gemt!"))};window.switchSubtab=function(r){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===r)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${r}`),e.classList.toggle("hidden",e.id!==`stab-${r}`)}),r==="map"&&T.courseMap&&setTimeout(()=>T.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const r=document.getElementById("mypos-sw");if(r.classList.toggle("on"),r.classList.contains("on"))try{const e=await va();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(T.courseMap),T.courseMap.panTo([e.lat,e.lng])}catch{alert("GPS ikke tilgængeligt"),r.classList.remove("on")}};window.doDeleteCourse=async function(){!T.currentCourse||!confirm(`Slet banen "${T.currentCourse.name}"?`)||(await ni(ke(he,"courses",T.currentCourse.id)),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"))};window.doCreateCourse=async function(){const r=document.getElementById("new-course-name").value.trim(),e=document.getElementById("new-course-loc").value.trim(),n=Number(document.getElementById("new-course-targets").value)||24;if(!r)return;const s=Array.from({length:n},(i,o)=>({number:o+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));await aE(kr(he,"courses"),{name:r,yam:r,numTargets:n,antalMål:n,location:e,beliggenhed:e,targets:s,mål:s,created:da(),visits:[],besøg:[]}),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value=""};async function Jw(r,e){try{const n=ke(he,"courses",r),s=await En(n);if(!s.exists())return;const i=[e,...s.data().visits||s.data().besøg||[]].slice(0,50);await ti(n,{visits:i,besøg:i})}catch(n){console.warn(n)}}async function Ta(r,e,n){const s=ke(he,"courses",r),i=await En(s);if(!i.exists())return;const o=i.data(),c=[...o.targets||o.mål||[]];for(;c.length<=e;)c.push({});c[e]={...c[e],...n},await ti(s,{targets:c,mål:c})}function Yw(r){return new Promise((e,n)=>{const s=new FileReader;s.onload=i=>{const o=new Image;o.onload=()=>{let l=o.width,h=o.height;l>h?l>400&&(h=h*400/l,l=400):h>400&&(l=l*400/h,h=400);const f=document.createElement("canvas");f.width=l,f.height=h,f.getContext("2d").drawImage(o,0,0,l,h),e(f.toDataURL("image/jpeg",.65).split(",")[1])},o.onerror=n,o.src=i.target.result},s.onerror=n,s.readAsDataURL(r)})}window.openEditTarget=function(){var n,s;const r=bn(),e=(s=(n=T.course)==null?void 0:n.targets)==null?void 0:s[r];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var n;const r=document.getElementById("edit-tname").value.trim(),e=bn();T.round.courseId&&(await Ta(T.round.courseId,e,{name:r}),(n=T.course)!=null&&n.targets&&(T.course.targets[e].name=r)),document.getElementById("edit-panel").classList.add("hidden"),Nt()};window.editGps=async function(){var r;try{const e=await va(),n=bn();await Ta(T.round.courseId,n,{gps:e}),(r=T.course)!=null&&r.targets&&(T.course.targets[n].gps=e),alert("GPS gemt!")}catch(e){alert("GPS fejl: "+e.message)}};function ci(){const r=document.getElementById("friends-list");if(!T.friends.length){r.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}r.innerHTML="",T.friends.forEach(e=>{const n=document.createElement("div");n.className="fcard",n.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${e.name}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).join(" · ")}</div></div><div class="factions"><button class="btn-icon" onclick='openFriendModal(${JSON.stringify(e)})'>✏️</button><button class="btn-icon" style="color:var(--danger);" onclick="doDeleteFriend('${e.id}','${e.name.replace(/'/g,"\\'")}')">🗑</button></div>`,r.appendChild(n)})}window.openFriendModal=function(r){T.editFriendId=(r==null?void 0:r.id)||null,document.getElementById("friend-modal-title").textContent=r?"Rediger ven":"Tilføj ven",document.getElementById("f-name").value=(r==null?void 0:r.name)||"",document.getElementById("f-email").value=(r==null?void 0:r.email)||"",document.getElementById("f-phone").value=(r==null?void 0:r.phone)||"",document.getElementById("f-club").value=(r==null?void 0:r.club)||"",document.getElementById("f-bow").value=(r==null?void 0:r.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const r={name:document.getElementById("f-name").value.trim(),email:document.getElementById("f-email").value.trim(),phone:document.getElementById("f-phone").value.trim(),club:document.getElementById("f-club").value.trim(),bowType:document.getElementById("f-bow").value};if(r.name){if(T.editFriendId){const e=T.friends.findIndex(n=>n.id===T.editFriendId);e!==-1?T.friends[e]={...r,id:T.editFriendId}:T.friends.push({...r,id:T.editFriendId})}else T.friends.push({...r,id:"f_"+Date.now()});Rn(),document.getElementById("friend-modal").classList.add("hidden"),ci(),oi()}};window.doDeleteFriend=function(r,e){confirm(`Slet ${e}?`)&&(T.friends=T.friends.filter(n=>n.id!==r),Rn(),ci(),oi())};async function Zw(){if(T.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{const r=await ei(kr(he,"users")),e=document.getElementById("users-list");e.innerHTML="",r.docs.forEach(n=>{var c;const s=n.data(),i=document.createElement("div");i.className="urow";const o=(c=s.created)!=null&&c.toDate?s.created.toDate().toLocaleDateString("da-DK"):"—";i.innerHTML=`<span class="un">${s.name||s.yam||"—"}</span><span class="ue">${s.email||s["e-mail"]||""}</span><span class="ud">${o}</span>`,e.appendChild(i)})}catch(r){console.warn(r)}}}window.doAddAdmin=async function(){const r=document.getElementById("admin-email").value.trim();if(r)try{const n=(await ei(kr(he,"users"))).docs.find(s=>s.data().email===r||s.data()["e-mail"]===r);if(!n){alert("Bruger ikke fundet");return}await ha(ke(he,"admins",n.id),{email:r,created:da()}),alert(`${n.data().name||r} er nu admin`),document.getElementById("admin-email").value=""}catch(e){alert("Fejl: "+e.message)}};window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const r=document.getElementById("qr-canvas");r.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(r,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"})};window.sendResults=function(r){if(!r)return;ii(r.shooters);const e=new Date().toLocaleDateString("da-DK");let n=`3D Bueskydning - Resultater
`;n+=`Dato: ${e}
`,r.courseName&&(n+=`Bane: ${r.courseName}
`),n+=`
--- RESULTATER ---
`,[...r.shooters].sort((c,l)=>Fe(l.scores)-Fe(c.scores)).forEach((c,l)=>{n+=`
${l+1}. ${c.name}: ${Fe(c.scores)} point`}),n+=`

--- DETALJERET ---
`,r.shooters.forEach(c=>{n+=`
${c.name}:
`;for(let l=0;l<r.numTargets;l++){const h=c.scores[l]||[null,null],f=(h[0]!=null&&h[0]!=="M"?Number(h[0]):0)+(h[1]!=null&&h[1]!=="M"?Number(h[1]):0);n+=`  Mål ${l+1}: ${h.map(m=>m??"-").join("+")} = ${f}
`}n+=`  Total: ${Fe(c.scores)} point
`});const o=`mailto:${r.shooters.map(c=>{var l;return(l=T.friends.find(h=>h.id===c.id))==null?void 0:l.email}).filter(Boolean).join(",")}?subject=3D Bueskydning - ${r.name}&body=${encodeURIComponent(n)}`;location.href=o};window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const r=document.getElementById("guest-name").value.trim();r&&(window.addParticipant(`guest-${Date.now()}`,r,!0),document.getElementById("guest-modal").classList.add("hidden"))};
