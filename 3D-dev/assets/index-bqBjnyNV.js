(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var mu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},dg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,b=h&63;l||(b=64,o||(y=64)),r.push(t[f],t[p],t[y],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(id(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new fg;const y=i<<2|c>>4;if(r.push(y),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mg=function(n){const e=id(n);return od.encodeByteArray(e,!0)},Yi=function(n){return mg(n).replace(/\./g,"")},ad=function(n){try{return od.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gg=()=>pg().__FIREBASE_DEFAULTS__,_g=()=>{if(typeof process>"u"||typeof mu>"u")return;const n=mu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ad(n[1]);return e&&JSON.parse(e)},Eo=()=>{try{return gg()||_g()||yg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cd=n=>{var e,t;return(t=(e=Eo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vg=n=>{const e=cd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ld=()=>{var n;return(n=Eo())===null||n===void 0?void 0:n.config},ud=n=>{var e;return(e=Eo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function wg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yi(JSON.stringify(t)),Yi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Tg(){var n;const e=(n=Eo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ag(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Rg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sg(){const n=De();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hd(){return!Tg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dd(){try{return typeof indexedDB=="object"}catch{return!1}}function Pg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="FirebaseError";class bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Cg,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xg(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new bt(s,c,r)}}function xg(n,e){return n.replace(kg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kg=/\{\$([^}]+)}/g;function Dg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(pu(i)&&pu(o)){if(!Cs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function pu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ds(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Vg(n,e){const t=new Ng(n,e);return t.subscribe.bind(t)}class Ng{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Lg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=fa),s.error===void 0&&(s.error=fa),s.complete===void 0&&(s.complete=fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fa(){}/**
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
 */function Se(n){return n&&n._delegate?n._delegate:n}class ln{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ig;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fg(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mg(n){return n===Sn?void 0:n}function Fg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Og(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const Ug={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},$g=ne.INFO,jg={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},zg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=jg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=$g,this._logHandler=zg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ug[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const qg=(n,e)=>e.some(t=>n instanceof t);let gu,_u;function Gg(){return gu||(gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kg(){return _u||(_u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fd=new WeakMap,Pa=new WeakMap,md=new WeakMap,ma=new WeakMap,lc=new WeakMap;function Hg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(nn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&fd.set(t,n)}).catch(()=>{}),lc.set(e,n),e}function Wg(n){if(Pa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Pa.set(n,e)}let Ca={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||md.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Qg(n){Ca=n(Ca)}function Jg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(pa(this),e,...t);return md.set(r,e.sort?e.sort():[e]),nn(r)}:Kg().includes(n)?function(...e){return n.apply(pa(this),e),nn(fd.get(this))}:function(...e){return nn(n.apply(pa(this),e))}}function Xg(n){return typeof n=="function"?Jg(n):(n instanceof IDBTransaction&&Wg(n),qg(n,Gg())?new Proxy(n,Ca):n)}function nn(n){if(n instanceof IDBRequest)return Hg(n);if(ma.has(n))return ma.get(n);const e=Xg(n);return e!==n&&(ma.set(n,e),lc.set(e,n)),e}const pa=n=>lc.get(n);function Yg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Zg=["get","getKey","getAll","getAllKeys","count"],e_=["put","add","delete","clear"],ga=new Map;function yu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ga.get(e))return ga.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=e_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zg.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return ga.set(e,i),i}Qg(n=>({...n,get:(e,t,r)=>yu(e,t)||n.get(e,t,r),has:(e,t)=>!!yu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(n_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function n_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xa="@firebase/app",vu="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new cc("@firebase/app"),r_="@firebase/app-compat",s_="@firebase/analytics-compat",i_="@firebase/analytics",o_="@firebase/app-check-compat",a_="@firebase/app-check",c_="@firebase/auth",l_="@firebase/auth-compat",u_="@firebase/database",h_="@firebase/data-connect",d_="@firebase/database-compat",f_="@firebase/functions",m_="@firebase/functions-compat",p_="@firebase/installations",g_="@firebase/installations-compat",__="@firebase/messaging",y_="@firebase/messaging-compat",v_="@firebase/performance",I_="@firebase/performance-compat",w_="@firebase/remote-config",E_="@firebase/remote-config-compat",T_="@firebase/storage",b_="@firebase/storage-compat",A_="@firebase/firestore",R_="@firebase/vertexai-preview",S_="@firebase/firestore-compat",P_="firebase",C_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="[DEFAULT]",x_={[xa]:"fire-core",[r_]:"fire-core-compat",[i_]:"fire-analytics",[s_]:"fire-analytics-compat",[a_]:"fire-app-check",[o_]:"fire-app-check-compat",[c_]:"fire-auth",[l_]:"fire-auth-compat",[u_]:"fire-rtdb",[h_]:"fire-data-connect",[d_]:"fire-rtdb-compat",[f_]:"fire-fn",[m_]:"fire-fn-compat",[p_]:"fire-iid",[g_]:"fire-iid-compat",[__]:"fire-fcm",[y_]:"fire-fcm-compat",[v_]:"fire-perf",[I_]:"fire-perf-compat",[w_]:"fire-rc",[E_]:"fire-rc-compat",[T_]:"fire-gcs",[b_]:"fire-gcs-compat",[A_]:"fire-fst",[S_]:"fire-fst-compat",[R_]:"fire-vertex","fire-js":"fire-js",[P_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Map,k_=new Map,Da=new Map;function Iu(n,e){try{n.container.addComponent(e)}catch(t){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bn(n){const e=n.name;if(Da.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;Da.set(e,n);for(const t of Zi.values())Iu(t,n);for(const t of k_.values())Iu(t,n);return!0}function To(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function pt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rn=new Ks("app","Firebase",D_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=C_;function pd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ka,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rn.create("bad-app-name",{appName:String(s)});if(t||(t=ld()),!t)throw rn.create("no-options");const i=Zi.get(s);if(i){if(Cs(t,i.options)&&Cs(r,i.config))return i;throw rn.create("duplicate-app",{appName:s})}const o=new Bg(s);for(const l of Da.values())o.addComponent(l);const c=new V_(t,r,o);return Zi.set(s,c),c}function gd(n=ka){const e=Zi.get(n);if(!e&&n===ka&&ld())return pd();if(!e)throw rn.create("no-app",{appName:n});return e}function yt(n,e,t){var r;let s=(r=x_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(c.join(" "));return}Bn(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const N_="firebase-heartbeat-database",L_=1,xs="firebase-heartbeat-store";let _a=null;function _d(){return _a||(_a=Yg(N_,L_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xs)}catch(t){console.warn(t)}}}}).catch(n=>{throw rn.create("idb-open",{originalErrorMessage:n.message})})),_a}async function O_(n){try{const t=(await _d()).transaction(xs),r=await t.objectStore(xs).get(yd(n));return await t.done,r}catch(e){if(e instanceof bt)Nt.warn(e.message);else{const t=rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(t.message)}}}async function wu(n,e){try{const r=(await _d()).transaction(xs,"readwrite");await r.objectStore(xs).put(e,yd(n)),await r.done}catch(t){if(t instanceof bt)Nt.warn(t.message);else{const r=rn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nt.warn(r.message)}}}function yd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const M_=1024,F_=30*24*60*60*1e3;class B_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Eu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=F_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Nt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Eu(),{heartbeatsToSend:r,unsentEntries:s}=U_(this._heartbeatsCache.heartbeats),i=Yi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Nt.warn(t),""}}}function Eu(){return new Date().toISOString().substring(0,10)}function U_(n,e=M_){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Tu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Tu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class $_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dd()?Pg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await O_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return wu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return wu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Tu(n){return Yi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n){Bn(new ln("platform-logger",e=>new t_(e),"PRIVATE")),Bn(new ln("heartbeat",e=>new B_(e),"PRIVATE")),yt(xa,vu,n),yt(xa,vu,"esm2017"),yt("fire-js","")}j_("");var z_="firebase",q_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(z_,q_,"app");function uc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function vd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G_=vd,Id=new Ks("auth","Firebase",vd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new cc("@firebase/auth");function K_(n,...e){eo.logLevel<=ne.WARN&&eo.warn(`Auth (${Xn}): ${n}`,...e)}function Li(n,...e){eo.logLevel<=ne.ERROR&&eo.error(`Auth (${Xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,...e){throw hc(n,...e)}function vt(n,...e){return hc(n,...e)}function wd(n,e,t){const r=Object.assign(Object.assign({},G_()),{[e]:t});return new Ks("auth","Firebase",r).create(e,{appName:n.name})}function Dt(n){return wd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Id.create(n,...e)}function W(n,e,...t){if(!n)throw hc(e,...t)}function St(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Li(e),new Error(e)}function Lt(n,e){n||St(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function H_(){return bu()==="http:"||bu()==="https:"}function bu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H_()||Ag()||"connection"in navigator)?navigator.onLine:!0}function Q_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lt(t>e,"Short delay should be less than long delay!"),this.isMobile=Eg()||Rg()}get(){return W_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n,e){Lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=new Ws(3e4,6e4);function Mt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ft(n,e,t,r,s={}){return Td(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Hs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return bg()||(h.referrerPolicy="no-referrer"),Ed.fetch()(bd(n,n.config.apiHost,t,c),h)})}async function Td(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},J_),e);try{const s=new Z_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ri(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ri(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ri(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wd(n,f,h);dt(n,f)}}catch(s){if(s instanceof bt)throw s;dt(n,"network-request-failed",{message:String(s)})}}async function Qs(n,e,t,r,s={}){const i=await Ft(n,e,t,r,s);return"mfaPendingCredential"in i&&dt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function bd(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?dc(n.config,s):`${n.config.apiScheme}://${s}`}function Y_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Z_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),X_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ri(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=vt(n,e,r);return s.customData._tokenResponse=t,s}function Au(n){return n!==void 0&&n.enterprise!==void 0}class ey{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Y_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ty(n,e){return Ft(n,"GET","/v2/recaptchaConfig",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(n,e){return Ft(n,"POST","/v1/accounts:delete",e)}async function Ad(n,e){return Ft(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ry(n,e=!1){const t=Se(n),r=await t.getIdToken(e),s=fc(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Is(ya(s.auth_time)),issuedAtTime:Is(ya(s.iat)),expirationTime:Is(ya(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ya(n){return Number(n)*1e3}function fc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Li("JWT malformed, contained fewer than 3 sections"),null;try{const s=ad(t);return s?JSON.parse(s):(Li("Failed to decode base64 JWT payload"),null)}catch(s){return Li("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ru(n){const e=fc(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bt&&sy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function sy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ks(n,Ad(t,{idToken:r}));W(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rd(i.providerUserInfo):[],c=ay(n.providerData,o),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Na(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function oy(n){const e=Se(n);await to(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ay(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rd(n){return n.map(e=>{var{providerId:t}=e,r=uc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(n,e){const t=await Td(n,{},async()=>{const r=Hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=bd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ed.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ly(n,e){return Ft(n,"POST","/v2/accounts:revokeToken",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ru(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Ru(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await cy(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new _r;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _r,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Na(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ks(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ry(this,e)}reload(){return oy(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await to(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await ks(this,ny(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,B=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:q,isAnonymous:Z,providerData:Q,stsTokenManager:E}=t;W(O&&E,e,"internal-error");const _=_r.fromJSON(this.name,E);W(typeof O=="string",e,"internal-error"),Kt(p,e.name),Kt(y,e.name),W(typeof q=="boolean",e,"internal-error"),W(typeof Z=="boolean",e,"internal-error"),Kt(b,e.name),Kt(C,e.name),Kt(D,e.name),Kt(x,e.name),Kt(B,e.name),Kt(F,e.name);const I=new Pt({uid:O,auth:e,email:y,emailVerified:q,displayName:p,isAnonymous:Z,photoURL:C,phoneNumber:b,tenantId:D,stsTokenManager:_,createdAt:B,lastLoginAt:F});return Q&&Array.isArray(Q)&&(I.providerData=Q.map(w=>Object.assign({},w))),x&&(I._redirectEventId=x),I}static async _fromIdTokenResponse(e,t,r=!1){const s=new _r;s.updateFromServerResponse(t);const i=new Pt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await to(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new _r;c.updateFromIdToken(r);const l=new Pt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Na(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map;function Ct(n){Lt(n instanceof Function,"Expected a class definition");let e=Su.get(n);return e?(Lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Su.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sd.type="NONE";const Pu=Sd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n,e,t){return`firebase:${n}:${e}:${t}`}class yr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Oi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Oi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new yr(Ct(Pu),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ct(Pu);const o=Oi(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=Pt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new yr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new yr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vd(e))return"Blackberry";if(Nd(e))return"Webos";if(Cd(e))return"Safari";if((e.includes("chrome/")||xd(e))&&!e.includes("edge/"))return"Chrome";if(Dd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pd(n=De()){return/firefox\//i.test(n)}function Cd(n=De()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xd(n=De()){return/crios\//i.test(n)}function kd(n=De()){return/iemobile/i.test(n)}function Dd(n=De()){return/android/i.test(n)}function Vd(n=De()){return/blackberry/i.test(n)}function Nd(n=De()){return/webos/i.test(n)}function mc(n=De()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function uy(n=De()){var e;return mc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hy(){return Sg()&&document.documentMode===10}function Ld(n=De()){return mc(n)||Dd(n)||Nd(n)||Vd(n)||/windows phone/i.test(n)||kd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n,e=[]){let t;switch(n){case"Browser":t=Cu(De());break;case"Worker":t=`${Cu(De())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xn}/${r}`}/**
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
 */class dy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fy(n,e={}){return Ft(n,"GET","/v2/passwordPolicy",Mt(n,e))}/**
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
 */const my=6;class py{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:my,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xu(this),this.idTokenSubscription=new xu(this),this.beforeStateQueue=new dy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Id,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ct(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await yr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ad(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await to(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Q_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(Dt(this));const t=e?Se(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fy(this),t=new py(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ly(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ct(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[Ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Od(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&K_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fn(n){return Se(n)}class xu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vg(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _y(n){bo=n}function Md(n){return bo.loadJS(n)}function yy(){return bo.recaptchaEnterpriseScript}function vy(){return bo.gapiScript}function Iy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const wy="recaptcha-enterprise",Ey="NO_RECAPTCHA";class Ty{constructor(e){this.type=wy,this.auth=fn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{ty(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new ey(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Au(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ey)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&Au(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=yy();l.length!==0&&(l+=c),Md(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function ku(n,e,t,r=!1){const s=new Ty(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function no(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ku(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ku(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n,e){const t=To(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Cs(i,e??{}))return s;dt(s,"already-initialized")}return t.initialize({options:e})}function Ay(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ry(n,e,t){const r=fn(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Fd(e),{host:o,port:c}=Sy(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Py()}function Fd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Sy(n){const e=Fd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Du(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Du(o)}}}function Du(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Py(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return St("not implemented")}_getIdTokenResponse(e){return St("not implemented")}_linkToIdToken(e,t){return St("not implemented")}_getReauthenticationResolver(e){return St("not implemented")}}async function Cy(n,e){return Ft(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(n,e){return Qs(n,"POST","/v1/accounts:signInWithPassword",Mt(n,e))}async function ky(n,e){return Ft(n,"POST","/v1/accounts:sendOobCode",Mt(n,e))}async function Dy(n,e){return ky(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(n,e){return Qs(n,"POST","/v1/accounts:signInWithEmailLink",Mt(n,e))}async function Ny(n,e){return Qs(n,"POST","/v1/accounts:signInWithEmailLink",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends pc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ds(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ds(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return no(e,t,"signInWithPassword",xy);case"emailLink":return Vy(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return no(e,r,"signUpPassword",Cy);case"emailLink":return Ny(e,{idToken:t,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n,e){return Qs(n,"POST","/v1/accounts:signInWithIdp",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="http://localhost";class Un extends pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=uc(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Un(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vr(e,t)}buildRequest(){const e={requestUri:Ly,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function My(n){const e=ds(fs(n)).link,t=e?ds(fs(e)).deep_link_id:null,r=ds(fs(n)).deep_link_id;return(r?ds(fs(r)).link:null)||r||t||e||n}class gc{constructor(e){var t,r,s,i,o,c;const l=ds(fs(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Oy((s=l.mode)!==null&&s!==void 0?s:null);W(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=My(e);try{return new gc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.providerId=Lr.PROVIDER_ID}static credential(e,t){return Ds._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=gc.parseLink(t);return W(r,"argument-error"),Ds._fromEmailAndCode(e,r.code,r.tenantId)}}Lr.PROVIDER_ID="password";Lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends Bd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Js{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Un._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Jt.credential(t,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Js{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Js{constructor(){super("twitter.com")}static credential(e,t){return Un._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yt.credential(t,r)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(n,e){return Qs(n,"POST","/v1/accounts:signUp",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=Vu(r);return new $n({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Vu(r);return new $n({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Vu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends bt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ro.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ro(e,t,r,s)}}function Ud(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ro._fromErrorAndOperation(n,i,e,r):i})}async function By(n,e,t=!1){const r=await ks(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $n._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uy(n,e,t=!1){const{auth:r}=n;if(pt(r.app))return Promise.reject(Dt(r));const s="reauthenticate";try{const i=await ks(n,Ud(r,s,e,n),t);W(i.idToken,r,"internal-error");const o=fc(i.idToken);W(o,r,"internal-error");const{sub:c}=o;return W(n.uid===c,r,"user-mismatch"),$n._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $d(n,e,t=!1){if(pt(n.app))return Promise.reject(Dt(n));const r="signIn",s=await Ud(n,r,e),i=await $n._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function $y(n,e){return $d(fn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jd(n){const e=fn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jy(n,e,t){const r=fn(n);await no(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Dy)}async function zy(n,e,t){if(pt(n.app))return Promise.reject(Dt(n));const r=fn(n),o=await no(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&jd(n),l}),c=await $n._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function qy(n,e,t){return pt(n.app)?Promise.reject(Dt(n)):$y(Se(n),Lr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jd(n),r})}function Gy(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function Ky(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function Hy(n,e,t,r){return Se(n).onAuthStateChanged(e,t,r)}function Wy(n){return Se(n).signOut()}const so="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=1e3,Jy=10;class qd extends zd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ld(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const Xy=qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends zd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gd.type="SESSION";const Kd=Gd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ao(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await Yy(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=_c("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function ev(n){It().location.href=n}/**
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
 */function Hd(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function tv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rv(){return Hd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="firebaseLocalStorageDb",sv=1,io="firebaseLocalStorage",Qd="fbase_key";class Xs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ro(n,e){return n.transaction([io],e?"readwrite":"readonly").objectStore(io)}function iv(){const n=indexedDB.deleteDatabase(Wd);return new Xs(n).toPromise()}function La(){const n=indexedDB.open(Wd,sv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(io,{keyPath:Qd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(io)?e(r):(r.close(),await iv(),e(await La()))})})}async function Nu(n,e,t){const r=Ro(n,!0).put({[Qd]:e,value:t});return new Xs(r).toPromise()}async function ov(n,e){const t=Ro(n,!1).get(e),r=await new Xs(t).toPromise();return r===void 0?null:r.value}function Lu(n,e){const t=Ro(n,!0).delete(e);return new Xs(t).toPromise()}const av=800,cv=3;class Jd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await La(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>cv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(rv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tv(),!this.activeServiceWorker)return;this.sender=new Zy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await La();return await Nu(e,so,"1"),await Lu(e,so),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ov(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ro(s,!1).getAll();return new Xs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jd.type="LOCAL";const lv=Jd;new Ws(3e4,6e4);/**
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
 */function uv(n,e){return e?Ct(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends pc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hv(n){return $d(n.auth,new yc(n),n.bypassAuthState)}function dv(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),Uy(t,new yc(n),n.bypassAuthState)}async function fv(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),By(t,new yc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hv;case"linkViaPopup":case"linkViaRedirect":return fv;case"reauthViaPopup":case"reauthViaRedirect":return dv;default:dt(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=new Ws(2e3,1e4);class gr extends Xd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=_c();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mv.get())};e()}}gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="pendingRedirect",Mi=new Map;class gv extends Xd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const r=await _v(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _v(n,e){const t=Iv(e),r=vv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function yv(n,e){Mi.set(n._key(),e)}function vv(n){return Ct(n._redirectPersistence)}function Iv(n){return Oi(pv,n.config.apiKey,n.name)}async function wv(n,e,t=!1){if(pt(n.app))return Promise.reject(Dt(n));const r=fn(n),s=uv(r,e),o=await new gv(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=10*60*1e3;class Tv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Yd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(vt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ev&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ou(e))}saveEventToCache(e){this.cachedEventUids.add(Ou(e)),this.lastProcessedEventTime=Date.now()}}function Ou(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(n,e={}){return Ft(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sv=/^https?/;async function Pv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Av(n);for(const t of e)try{if(Cv(t))return}catch{}dt(n,"unauthorized-domain")}function Cv(n){const e=Va(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Sv.test(t))return!1;if(Rv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const xv=new Ws(3e4,6e4);function Mu(){const n=It().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function kv(n){return new Promise((e,t)=>{var r,s,i;function o(){Mu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mu(),t(vt(n,"network-request-failed"))},timeout:xv.get()})}if(!((s=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=It().gapi)===null||i===void 0)&&i.load)o();else{const c=Iy("iframefcb");return It()[c]=()=>{gapi.load?o():t(vt(n,"network-request-failed"))},Md(`${vy()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Fi=null,e})}let Fi=null;function Dv(n){return Fi=Fi||kv(n),Fi}/**
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
 */const Vv=new Ws(5e3,15e3),Nv="__/auth/iframe",Lv="emulator/auth/iframe",Ov={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fv(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?dc(e,Lv):`https://${n.config.authDomain}/${Nv}`,r={apiKey:e.apiKey,appName:n.name,v:Xn},s=Mv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Hs(r).slice(1)}`}async function Bv(n){const e=await Dv(n),t=It().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:Fv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ov,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=vt(n,"network-request-failed"),c=It().setTimeout(()=>{i(o)},Vv.get());function l(){It().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Uv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$v=500,jv=600,zv="_blank",qv="http://localhost";class Fu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gv(n,e,t,r=$v,s=jv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Uv),{width:r.toString(),height:s.toString(),top:i,left:o}),h=De().toLowerCase();t&&(c=xd(h)?zv:t),Pd(h)&&(e=e||qv,l.scrollbars="yes");const f=Object.entries(l).reduce((y,[b,C])=>`${y}${b}=${C},`,"");if(uy(h)&&c!=="_self")return Kv(e||"",c),new Fu(null);const p=window.open(e||"",c,f);W(p,n,"popup-blocked");try{p.focus()}catch{}return new Fu(p)}function Kv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Hv="__/auth/handler",Wv="emulator/auth/handler",Qv=encodeURIComponent("fac");async function Bu(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xn,eventId:s};if(e instanceof Bd){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Dg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Js){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${Qv}=${encodeURIComponent(l)}`:"";return`${Jv(n)}?${Hs(c).slice(1)}${h}`}function Jv({config:n}){return n.emulator?dc(n,Wv):`https://${n.authDomain}/${Hv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="webStorageSupport";class Xv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kd,this._completeRedirectFn=wv,this._overrideRedirectResult=yv}async _openPopup(e,t,r,s){var i;Lt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Bu(e,t,r,Va(),s);return Gv(e,o,_c())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Bu(e,t,r,Va(),s);return ev(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Bv(e),r=new Tv(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(va,{type:va},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[va];o!==void 0&&t(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ld()||Cd()||mc()}}const Yv=Xv;var Uu="@firebase/auth",$u="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tI(n){Bn(new ln("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Od(n)},h=new gy(r,s,i,l);return Ay(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Bn(new ln("auth-internal",e=>{const t=fn(e.getProvider("auth").getImmediate());return(r=>new Zv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(Uu,$u,eI(n)),yt(Uu,$u,"esm2017")}/**
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
 */const nI=5*60,rI=ud("authIdTokenMaxAge")||nI;let ju=null;const sI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>rI)return;const s=t==null?void 0:t.token;ju!==s&&(ju=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function iI(n=gd()){const e=To(n,"auth");if(e.isInitialized())return e.getImmediate();const t=by(n,{popupRedirectResolver:Yv,persistence:[lv,Xy,Kd]}),r=ud("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=sI(i.toString());Ky(t,o,()=>o(t.currentUser)),Gy(t,c=>o(c))}}const s=cd("auth");return s&&Ry(t,`http://${s}`),t}function oI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_y({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=vt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",oI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tI("Browser");var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vn,Zd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.D=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(w,T,R){for(var v=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)v[Je-2]=arguments[Je];return _.prototype[T].apply(w,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,I){I||(I=0);var w=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)w[T]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(T=0;16>T;++T)w[T]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],T=E.g[2];var R=E.g[3],v=_+(R^I&(T^R))+w[0]+3614090360&4294967295;_=I+(v<<7&4294967295|v>>>25),v=R+(T^_&(I^T))+w[1]+3905402710&4294967295,R=_+(v<<12&4294967295|v>>>20),v=T+(I^R&(_^I))+w[2]+606105819&4294967295,T=R+(v<<17&4294967295|v>>>15),v=I+(_^T&(R^_))+w[3]+3250441966&4294967295,I=T+(v<<22&4294967295|v>>>10),v=_+(R^I&(T^R))+w[4]+4118548399&4294967295,_=I+(v<<7&4294967295|v>>>25),v=R+(T^_&(I^T))+w[5]+1200080426&4294967295,R=_+(v<<12&4294967295|v>>>20),v=T+(I^R&(_^I))+w[6]+2821735955&4294967295,T=R+(v<<17&4294967295|v>>>15),v=I+(_^T&(R^_))+w[7]+4249261313&4294967295,I=T+(v<<22&4294967295|v>>>10),v=_+(R^I&(T^R))+w[8]+1770035416&4294967295,_=I+(v<<7&4294967295|v>>>25),v=R+(T^_&(I^T))+w[9]+2336552879&4294967295,R=_+(v<<12&4294967295|v>>>20),v=T+(I^R&(_^I))+w[10]+4294925233&4294967295,T=R+(v<<17&4294967295|v>>>15),v=I+(_^T&(R^_))+w[11]+2304563134&4294967295,I=T+(v<<22&4294967295|v>>>10),v=_+(R^I&(T^R))+w[12]+1804603682&4294967295,_=I+(v<<7&4294967295|v>>>25),v=R+(T^_&(I^T))+w[13]+4254626195&4294967295,R=_+(v<<12&4294967295|v>>>20),v=T+(I^R&(_^I))+w[14]+2792965006&4294967295,T=R+(v<<17&4294967295|v>>>15),v=I+(_^T&(R^_))+w[15]+1236535329&4294967295,I=T+(v<<22&4294967295|v>>>10),v=_+(T^R&(I^T))+w[1]+4129170786&4294967295,_=I+(v<<5&4294967295|v>>>27),v=R+(I^T&(_^I))+w[6]+3225465664&4294967295,R=_+(v<<9&4294967295|v>>>23),v=T+(_^I&(R^_))+w[11]+643717713&4294967295,T=R+(v<<14&4294967295|v>>>18),v=I+(R^_&(T^R))+w[0]+3921069994&4294967295,I=T+(v<<20&4294967295|v>>>12),v=_+(T^R&(I^T))+w[5]+3593408605&4294967295,_=I+(v<<5&4294967295|v>>>27),v=R+(I^T&(_^I))+w[10]+38016083&4294967295,R=_+(v<<9&4294967295|v>>>23),v=T+(_^I&(R^_))+w[15]+3634488961&4294967295,T=R+(v<<14&4294967295|v>>>18),v=I+(R^_&(T^R))+w[4]+3889429448&4294967295,I=T+(v<<20&4294967295|v>>>12),v=_+(T^R&(I^T))+w[9]+568446438&4294967295,_=I+(v<<5&4294967295|v>>>27),v=R+(I^T&(_^I))+w[14]+3275163606&4294967295,R=_+(v<<9&4294967295|v>>>23),v=T+(_^I&(R^_))+w[3]+4107603335&4294967295,T=R+(v<<14&4294967295|v>>>18),v=I+(R^_&(T^R))+w[8]+1163531501&4294967295,I=T+(v<<20&4294967295|v>>>12),v=_+(T^R&(I^T))+w[13]+2850285829&4294967295,_=I+(v<<5&4294967295|v>>>27),v=R+(I^T&(_^I))+w[2]+4243563512&4294967295,R=_+(v<<9&4294967295|v>>>23),v=T+(_^I&(R^_))+w[7]+1735328473&4294967295,T=R+(v<<14&4294967295|v>>>18),v=I+(R^_&(T^R))+w[12]+2368359562&4294967295,I=T+(v<<20&4294967295|v>>>12),v=_+(I^T^R)+w[5]+4294588738&4294967295,_=I+(v<<4&4294967295|v>>>28),v=R+(_^I^T)+w[8]+2272392833&4294967295,R=_+(v<<11&4294967295|v>>>21),v=T+(R^_^I)+w[11]+1839030562&4294967295,T=R+(v<<16&4294967295|v>>>16),v=I+(T^R^_)+w[14]+4259657740&4294967295,I=T+(v<<23&4294967295|v>>>9),v=_+(I^T^R)+w[1]+2763975236&4294967295,_=I+(v<<4&4294967295|v>>>28),v=R+(_^I^T)+w[4]+1272893353&4294967295,R=_+(v<<11&4294967295|v>>>21),v=T+(R^_^I)+w[7]+4139469664&4294967295,T=R+(v<<16&4294967295|v>>>16),v=I+(T^R^_)+w[10]+3200236656&4294967295,I=T+(v<<23&4294967295|v>>>9),v=_+(I^T^R)+w[13]+681279174&4294967295,_=I+(v<<4&4294967295|v>>>28),v=R+(_^I^T)+w[0]+3936430074&4294967295,R=_+(v<<11&4294967295|v>>>21),v=T+(R^_^I)+w[3]+3572445317&4294967295,T=R+(v<<16&4294967295|v>>>16),v=I+(T^R^_)+w[6]+76029189&4294967295,I=T+(v<<23&4294967295|v>>>9),v=_+(I^T^R)+w[9]+3654602809&4294967295,_=I+(v<<4&4294967295|v>>>28),v=R+(_^I^T)+w[12]+3873151461&4294967295,R=_+(v<<11&4294967295|v>>>21),v=T+(R^_^I)+w[15]+530742520&4294967295,T=R+(v<<16&4294967295|v>>>16),v=I+(T^R^_)+w[2]+3299628645&4294967295,I=T+(v<<23&4294967295|v>>>9),v=_+(T^(I|~R))+w[0]+4096336452&4294967295,_=I+(v<<6&4294967295|v>>>26),v=R+(I^(_|~T))+w[7]+1126891415&4294967295,R=_+(v<<10&4294967295|v>>>22),v=T+(_^(R|~I))+w[14]+2878612391&4294967295,T=R+(v<<15&4294967295|v>>>17),v=I+(R^(T|~_))+w[5]+4237533241&4294967295,I=T+(v<<21&4294967295|v>>>11),v=_+(T^(I|~R))+w[12]+1700485571&4294967295,_=I+(v<<6&4294967295|v>>>26),v=R+(I^(_|~T))+w[3]+2399980690&4294967295,R=_+(v<<10&4294967295|v>>>22),v=T+(_^(R|~I))+w[10]+4293915773&4294967295,T=R+(v<<15&4294967295|v>>>17),v=I+(R^(T|~_))+w[1]+2240044497&4294967295,I=T+(v<<21&4294967295|v>>>11),v=_+(T^(I|~R))+w[8]+1873313359&4294967295,_=I+(v<<6&4294967295|v>>>26),v=R+(I^(_|~T))+w[15]+4264355552&4294967295,R=_+(v<<10&4294967295|v>>>22),v=T+(_^(R|~I))+w[6]+2734768916&4294967295,T=R+(v<<15&4294967295|v>>>17),v=I+(R^(T|~_))+w[13]+1309151649&4294967295,I=T+(v<<21&4294967295|v>>>11),v=_+(T^(I|~R))+w[4]+4149444226&4294967295,_=I+(v<<6&4294967295|v>>>26),v=R+(I^(_|~T))+w[11]+3174756917&4294967295,R=_+(v<<10&4294967295|v>>>22),v=T+(_^(R|~I))+w[2]+718787259&4294967295,T=R+(v<<15&4294967295|v>>>17),v=I+(R^(T|~_))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var I=_-this.blockSize,w=this.B,T=this.h,R=0;R<_;){if(T==0)for(;R<=I;)s(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<_;)if(w[T++]=E.charCodeAt(R++),T==this.blockSize){s(this,w),T=0;break}}else for(;R<_;)if(w[T++]=E[R++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var I=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=I&255,I/=256;for(this.u(E),E=Array(16),_=I=0;4>_;++_)for(var w=0;32>w;w+=8)E[I++]=this.g[_]>>>w&255;return E};function i(E,_){var I=c;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;for(var I=[],w=!0,T=E.length-1;0<=T;T--){var R=E[T]|0;w&&R==_||(I[T]=R,w=!1)}this.g=I}var c={};function l(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return x(h(-E));for(var _=[],I=1,w=0;E>=I;w++)_[w]=E/I|0,I*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return x(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),w=p,T=0;T<E.length;T+=8){var R=Math.min(8,E.length-T),v=parseInt(E.substring(T,T+R),_);8>R?(R=h(Math.pow(_,R)),w=w.j(R).add(h(v))):(w=w.j(I),w=w.add(h(v)))}return w}var p=l(0),y=l(1),b=l(16777216);n=o.prototype,n.m=function(){if(D(this))return-x(this).m();for(var E=0,_=1,I=0;I<this.g.length;I++){var w=this.i(I);E+=(0<=w?w:4294967296+w)*_,_*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(D(this))return"-"+x(this).toString(E);for(var _=h(Math.pow(E,6)),I=this,w="";;){var T=q(I,_).g;I=B(I,T.j(_));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=T,C(I))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=B(this,E),D(E)?-1:C(E)?0:1};function x(E){for(var _=E.g.length,I=[],w=0;w<_;w++)I[w]=~E.g[w];return new o(I,~E.h).add(y)}n.abs=function(){return D(this)?x(this):this},n.add=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],w=0,T=0;T<=_;T++){var R=w+(this.i(T)&65535)+(E.i(T)&65535),v=(R>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=v>>>16,R&=65535,v&=65535,I[T]=v<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function B(E,_){return E.add(x(_))}n.j=function(E){if(C(this)||C(E))return p;if(D(this))return D(E)?x(this).j(x(E)):x(x(this).j(E));if(D(E))return x(this.j(x(E)));if(0>this.l(b)&&0>E.l(b))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,I=[],w=0;w<2*_;w++)I[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<E.g.length;T++){var R=this.i(w)>>>16,v=this.i(w)&65535,Je=E.i(T)>>>16,vn=E.i(T)&65535;I[2*w+2*T]+=v*vn,F(I,2*w+2*T),I[2*w+2*T+1]+=R*vn,F(I,2*w+2*T+1),I[2*w+2*T+1]+=v*Je,F(I,2*w+2*T+1),I[2*w+2*T+2]+=R*Je,F(I,2*w+2*T+2)}for(w=0;w<_;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=_;w<2*_;w++)I[w]=0;return new o(I,0)};function F(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function O(E,_){this.g=E,this.h=_}function q(E,_){if(C(_))throw Error("division by zero");if(C(E))return new O(p,p);if(D(E))return _=q(x(E),_),new O(x(_.g),x(_.h));if(D(_))return _=q(E,x(_)),new O(x(_.g),_.h);if(30<E.g.length){if(D(E)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var I=y,w=_;0>=w.l(E);)I=Z(I),w=Z(w);var T=Q(I,1),R=Q(w,1);for(w=Q(w,2),I=Q(I,2);!C(w);){var v=R.add(w);0>=v.l(E)&&(T=T.add(I),R=v),w=Q(w,1),I=Q(I,1)}return _=B(E,T.j(_)),new O(T,_)}for(T=p;0<=E.l(_);){for(I=Math.max(1,Math.floor(E.m()/_.m())),w=Math.ceil(Math.log(I)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(I),v=R.j(_);D(v)||0<v.l(E);)I-=w,R=h(I),v=R.j(_);C(R)&&(R=y),T=T.add(R),E=B(E,v)}return new O(T,E)}n.A=function(E){return q(this,E).h},n.and=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],w=0;w<_;w++)I[w]=this.i(w)&E.i(w);return new o(I,this.h&E.h)},n.or=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],w=0;w<_;w++)I[w]=this.i(w)|E.i(w);return new o(I,this.h|E.h)},n.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],w=0;w<_;w++)I[w]=this.i(w)^E.i(w);return new o(I,this.h^E.h)};function Z(E){for(var _=E.g.length+1,I=[],w=0;w<_;w++)I[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(I,E.h)}function Q(E,_){var I=_>>5;_%=32;for(var w=E.g.length-I,T=[],R=0;R<w;R++)T[R]=0<_?E.i(R+I)>>>_|E.i(R+I+1)<<32-_:E.i(R+I);return new o(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zd=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Vn=o}).apply(typeof zu<"u"?zu:typeof self<"u"?self:typeof window<"u"?window:{});var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ef,ms,tf,Bi,Oa,nf,rf,sf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Si=="object"&&Si];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in d))break e;d=d[A]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,A={next:function(){if(!m&&d<a.length){var P=d++;return{value:u(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function y(a,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,y.apply(null,arguments)}function b(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,A,P){for(var N=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)N[fe-2]=arguments[fe];return u.prototype[A].apply(m,N)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function x(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const A=a.length||0,P=m.length||0;a.length=A+P;for(let N=0;N<P;N++)a[A+N]=m[N]}else a.push(m)}}class B{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var Z=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function Q(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function E(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function _(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)a[d]=m[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function T(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function R(a){c.setTimeout(()=>{throw a},0)}function v(){var a=tr;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Je{constructor(){this.h=this.g=null}add(u,d){const m=vn.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var vn=new B(()=>new ct,a=>a.reset());class ct{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let In,Xe=!1,tr=new Je,jr=()=>{const a=c.Promise.resolve(void 0);In=()=>{a.then(oi)}};var oi=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){R(d)}var u=vn;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Xe=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var ai=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Ut(a,u){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(Z){e:{try{q(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:H[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ut.aa.h.call(this)}}C(Ut,ke);var H={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),X=0;function oe(a,u,d,m,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=A,this.key=++X,this.da=this.fa=!1}function Y(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function we(a){this.src=a,this.g={},this.h=0}we.prototype.add=function(a,u,d,m,A){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var N=ge(a,u,m,A);return-1<N?(u=a[N],d||(u.fa=!1)):(u=new oe(u,this.src,P,!!m,A),u.fa=d,a.push(u)),u};function Ce(a,u){var d=u.type;if(d in a.g){var m=a.g[d],A=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=A)&&Array.prototype.splice.call(m,A,1),P&&(Y(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ge(a,u,d,m){for(var A=0;A<a.length;++A){var P=a[A];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return A}return-1}var Ge="closure_lm_"+(1e6*Math.random()|0),Ne={};function ae(a,u,d,m,A){if(Array.isArray(u)){for(var P=0;P<u.length;P++)ae(a,u[P],d,m,A);return null}return d=li(d),a&&a[G]?a.K(u,d,h(m)?!!m.capture:!1,A):$t(a,u,d,!1,m,A)}function $t(a,u,d,m,A,P){if(!u)throw Error("Invalid event type");var N=h(A)?!!A.capture:!!A,fe=qr(a);if(fe||(a[Ge]=fe=new we(a)),d=fe.add(u,d,m,N,P),d.proxy)return d;if(m=jt(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)ai||(A=N),A===void 0&&(A=!1),a.addEventListener(u.toString(),m,A);else if(a.attachEvent)a.attachEvent(wn(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function jt(){function a(d){return u.call(a.src,a.listener,d)}const u=nr;return a}function ci(a,u,d,m,A){if(Array.isArray(u))for(var P=0;P<u.length;P++)ci(a,u[P],d,m,A);else m=h(m)?!!m.capture:!!m,d=li(d),a&&a[G]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],d=ge(P,d,m,A),-1<d&&(Y(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=qr(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ge(u,d,m,A)),(d=-1<a?u[a]:null)&&zr(d))}function zr(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[G])Ce(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(wn(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=qr(u))?(Ce(d,a),d.h==0&&(d.src=null,u[Ge]=null)):Y(a)}}}function wn(a){return a in Ne?Ne[a]:Ne[a]="on"+a}function nr(a,u){if(a.da)a=!0;else{u=new Ut(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&zr(a),a=d.call(m,u)}return a}function qr(a){return a=a[Ge],a instanceof we?a:null}var Gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function li(a){return typeof a=="function"?a:(a[Gr]||(a[Gr]=function(u){return a.handleEvent(u)}),a[Gr])}function j(){lt.call(this),this.i=new we(this),this.M=this,this.F=null}C(j,lt),j.prototype[G]=!0,j.prototype.removeEventListener=function(a,u,d,m){ci(this,a,u,d,m)};function de(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new ke(u,a);else if(u instanceof ke)u.target=u.target||a;else{var A=u;u=new ke(m,a),w(u,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var N=u.g=d[P];A=ui(N,m,!0,u)&&A}if(N=u.g=a,A=ui(N,m,!0,u)&&A,A=ui(N,m,!1,u)&&A,d)for(P=0;P<d.length;P++)N=u.g=d[P],A=ui(N,m,!1,u)&&A}j.prototype.N=function(){if(j.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Y(d[m]);delete a.g[u],a.h--}}this.F=null},j.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},j.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function ui(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,P=0;P<u.length;++P){var N=u[P];if(N&&!N.da&&N.capture==d){var fe=N.listener,Oe=N.ha||N.src;N.fa&&Ce(a.i,N),A=fe.call(Oe,m)!==!1&&A}}return A&&!m.defaultPrevented}function vl(a,u,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Il(a){a.g=vl(()=>{a.g=null,a.i&&(a.i=!1,Il(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Up extends lt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Il(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kr(a){lt.call(this),this.h=a,this.g={}}C(Kr,lt);var wl=[];function El(a){Q(a.g,function(u,d){this.g.hasOwnProperty(d)&&zr(u)},a),a.g={}}Kr.prototype.N=function(){Kr.aa.N.call(this),El(this)},Kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xo=c.JSON.stringify,$p=c.JSON.parse,jp=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Yo(){}Yo.prototype.h=null;function Tl(a){return a.h||(a.h=a.i())}function bl(){}var Hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zo(){ke.call(this,"d")}C(Zo,ke);function ea(){ke.call(this,"c")}C(ea,ke);var En={},Al=null;function hi(){return Al=Al||new j}En.La="serverreachability";function Rl(a){ke.call(this,En.La,a)}C(Rl,ke);function Wr(a){const u=hi();de(u,new Rl(u))}En.STAT_EVENT="statevent";function Sl(a,u){ke.call(this,En.STAT_EVENT,a),this.stat=u}C(Sl,ke);function Ke(a){const u=hi();de(u,new Sl(u,a))}En.Ma="timingevent";function Pl(a,u){ke.call(this,En.Ma,a),this.size=u}C(Pl,ke);function Qr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Jr(){this.g=!0}Jr.prototype.xa=function(){this.g=!1};function zp(a,u,d,m,A,P){a.info(function(){if(a.g)if(P)for(var N="",fe=P.split("&"),Oe=0;Oe<fe.length;Oe++){var ie=fe[Oe].split("=");if(1<ie.length){var Be=ie[0];ie=ie[1];var Ue=Be.split("_");N=2<=Ue.length&&Ue[1]=="type"?N+(Be+"="+ie+"&"):N+(Be+"=redacted&")}}else N=null;else N=P;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+d+`
`+N})}function qp(a,u,d,m,A,P,N){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+d+`
`+P+" "+N})}function rr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Kp(a,d)+(m?" "+m:"")})}function Gp(a,u){a.info(function(){return"TIMEOUT: "+u})}Jr.prototype.info=function(){};function Kp(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var N=1;N<A.length;N++)A[N]=""}}}}return Xo(d)}catch{return u}}var di={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ta;function fi(){}C(fi,Yo),fi.prototype.g=function(){return new XMLHttpRequest},fi.prototype.i=function(){return{}},ta=new fi;function zt(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Kr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xl}function xl(){this.i=null,this.g="",this.h=!1}var kl={},na={};function ra(a,u,d){a.L=1,a.v=_i(At(u)),a.m=d,a.P=!0,Dl(a,null)}function Dl(a,u){a.F=Date.now(),mi(a),a.A=At(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Kl(d.i,"t",m),a.C=0,d=a.j.J,a.h=new xl,a.g=uu(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Up(y(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(wl[0]=A.toString()),A=wl);for(var P=0;P<A.length;P++){var N=ae(d,A[P],m||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Wr(),zp(a.i,a.u,a.A,a.l,a.R,a.m)}zt.prototype.ca=function(a){a=a.target;const u=this.M;u&&Rt(a)==3?u.j():this.Y(a)},zt.prototype.Y=function(a){try{if(a==this.g)e:{const Ue=Rt(this.g);var u=this.g.Ba();const or=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||Zl(this.g)))){this.J||Ue!=4||u==7||(u==8||0>=or?Wr(3):Wr(2)),sa(this);var d=this.g.Z();this.X=d;t:if(Vl(this)){var m=Zl(this.g);a="";var A=m.length,P=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),Xr(this);var N="";break t}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(P&&u==A-1)});m.length=0,this.h.g+=a,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=d==200,qp(this.i,this.u,this.A,this.l,this.R,Ue,d),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Oe=this.g;if((fe=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(fe)){var ie=fe;break t}}ie=null}if(d=ie)rr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ia(this,d);else{this.o=!1,this.s=3,Ke(12),Tn(this),Xr(this);break e}}if(this.P){d=!0;let ut;for(;!this.J&&this.C<N.length;)if(ut=Hp(this,N),ut==na){Ue==4&&(this.s=4,Ke(14),d=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==kl){this.s=4,Ke(15),rr(this.i,this.l,N,"[Invalid Chunk]"),d=!1;break}else rr(this.i,this.l,ut,null),ia(this,ut);if(Vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||N.length!=0||this.h.h||(this.s=1,Ke(16),d=!1),this.o=this.o&&d,!d)rr(this.i,this.l,N,"[Invalid Chunked Response]"),Tn(this),Xr(this);else if(0<N.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),ha(Be),Be.M=!0,Ke(11))}}else rr(this.i,this.l,N,null),ia(this,N);Ue==4&&Tn(this),this.o&&!this.J&&(Ue==4?ou(this.j,this):(this.o=!1,mi(this)))}else ug(this.g),d==400&&0<N.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),Tn(this),Xr(this)}}}catch{}finally{}};function Vl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Hp(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?na:(d=Number(u.substring(d,m)),isNaN(d)?kl:(m+=1,m+d>u.length?na:(u=u.slice(m,m+d),a.C=m+d,u)))}zt.prototype.cancel=function(){this.J=!0,Tn(this)};function mi(a){a.S=Date.now()+a.I,Nl(a,a.I)}function Nl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qr(y(a.ba,a),u)}function sa(a){a.B&&(c.clearTimeout(a.B),a.B=null)}zt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Gp(this.i,this.A),this.L!=2&&(Wr(),Ke(17)),Tn(this),this.s=2,Xr(this)):Nl(this,this.S-a)};function Xr(a){a.j.G==0||a.J||ou(a.j,a)}function Tn(a){sa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,El(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ia(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||oa(d.h,a))){if(!a.K&&oa(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ti(d),wi(d);else break e;ua(d),Ke(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Qr(y(d.Za,d),6e3));if(1>=Ml(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else An(d,11)}else if((a.K||d.g==a)&&Ti(d),!F(u))for(A=d.Da.g.parse(u),u=0;u<A.length;u++){let ie=A[u];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Be=ie[3];Be!=null&&(d.la=Be,d.j.info("VER="+d.la));const Ue=ie[4];Ue!=null&&(d.Aa=Ue,d.j.info("SVER="+d.Aa));const or=ie[5];or!=null&&typeof or=="number"&&0<or&&(m=1.5*or,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const ut=a.g;if(ut){const Ai=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var P=m.h;P.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(aa(P,P.h),P.h=null))}if(m.D){const da=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;da&&(m.ya=da,_e(m.I,m.D,da))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var N=a;if(m.qa=lu(m,m.J?m.ia:null,m.W),N.K){Fl(m.h,N);var fe=N,Oe=m.L;Oe&&(fe.I=Oe),fe.B&&(sa(fe),mi(fe)),m.g=N}else su(m);0<d.i.length&&Ei(d)}else ie[0]!="stop"&&ie[0]!="close"||An(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?An(d,7):la(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}Wr(4)}catch{}}var Wp=class{constructor(a,u){this.g=a,this.map=u}};function Ll(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ol(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ml(a){return a.h?1:a.g?a.g.size:0}function oa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function aa(a,u){a.g?a.g.add(u):a.h=u}function Fl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Ll.prototype.cancel=function(){if(this.i=Bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function Qp(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function Jp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Ul(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Jp(a),m=Qp(a),A=m.length,P=0;P<A;P++)u.call(void 0,m[P],d&&d[P],a)}var $l=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xp(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),A=null;if(0<=m){var P=a[d].substring(0,m);A=a[d].substring(m+1)}else P=a[d];u(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function bn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof bn){this.h=a.h,pi(this,a.j),this.o=a.o,this.g=a.g,gi(this,a.s),this.l=a.l;var u=a.i,d=new es;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),jl(this,d),this.m=a.m}else a&&(u=String(a).match($l))?(this.h=!1,pi(this,u[1]||"",!0),this.o=Yr(u[2]||""),this.g=Yr(u[3]||"",!0),gi(this,u[4]),this.l=Yr(u[5]||"",!0),jl(this,u[6]||"",!0),this.m=Yr(u[7]||"")):(this.h=!1,this.i=new es(null,this.h))}bn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Zr(u,zl,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Zr(u,zl,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Zr(d,d.charAt(0)=="/"?eg:Zp,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Zr(d,ng)),a.join("")};function At(a){return new bn(a)}function pi(a,u,d){a.j=d?Yr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function gi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function jl(a,u,d){u instanceof es?(a.i=u,rg(a.i,a.h)):(d||(u=Zr(u,tg)),a.i=new es(u,a.h))}function _e(a,u,d){a.i.set(u,d)}function _i(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Yr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Yp),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Yp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zl=/[#\/\?@]/g,Zp=/[#\?:]/g,eg=/[#\?]/g,tg=/[#\?@]/g,ng=/#/g;function es(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function qt(a){a.g||(a.g=new Map,a.h=0,a.i&&Xp(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=es.prototype,n.add=function(a,u){qt(this),this.i=null,a=sr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function ql(a,u){qt(a),u=sr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Gl(a,u){return qt(a),u=sr(a,u),a.g.has(u)}n.forEach=function(a,u){qt(this),this.g.forEach(function(d,m){d.forEach(function(A){a.call(u,A,m,this)},this)},this)},n.na=function(){qt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const A=a[m];for(let P=0;P<A.length;P++)d.push(u[m])}return d},n.V=function(a){qt(this);let u=[];if(typeof a=="string")Gl(this,a)&&(u=u.concat(this.g.get(sr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},n.set=function(a,u){return qt(this),this.i=null,a=sr(this,a),Gl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Kl(a,u,d){ql(a,u),0<d.length&&(a.i=null,a.g.set(sr(a,u),D(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const P=encodeURIComponent(String(m)),N=this.V(m);for(m=0;m<N.length;m++){var A=P;N[m]!==""&&(A+="="+encodeURIComponent(String(N[m]))),a.push(A)}}return this.i=a.join("&")};function sr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function rg(a,u){u&&!a.j&&(qt(a),a.i=null,a.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(ql(this,m),Kl(this,A,d))},a)),a.j=u}function sg(a,u){const d=new Jr;if(c.Image){const m=new Image;m.onload=b(Gt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=b(Gt,d,"TestLoadImage: error",!1,u,m),m.onabort=b(Gt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=b(Gt,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function ig(a,u){const d=new Jr,m=new AbortController,A=setTimeout(()=>{m.abort(),Gt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(A),P.ok?Gt(d,"TestPingServer: ok",!0,u):Gt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Gt(d,"TestPingServer: error",!1,u)})}function Gt(a,u,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function og(){this.g=new jp}function ag(a,u,d){const m=d||"";try{Ul(a,function(A,P){let N=A;h(A)&&(N=Xo(A)),u.push(m+P+"="+encodeURIComponent(N))})}catch(A){throw u.push(m+"type="+encodeURIComponent("_badmap")),A}}function yi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(yi,Yo),yi.prototype.g=function(){return new vi(this.l,this.j)},yi.prototype.i=function(a){return function(){return a}}({});function vi(a,u){j.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(vi,j),n=vi.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,ns(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ts(this):ns(this),this.readyState==3&&Hl(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,ts(this))},n.Qa=function(a){this.g&&(this.response=a,ts(this))},n.ga=function(){this.g&&ts(this)};function ts(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ns(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wl(a){let u="";return Q(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function ca(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Wl(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):_e(a,u,d))}function Ee(a){j.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ee,j);var cg=/^https?$/i,lg=["POST","PUT"];n=Ee.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ta.g(),this.v=this.o?Tl(this.o):Tl(ta),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){Ql(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(lg,u,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,N]of d)this.g.setRequestHeader(P,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yl(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Ql(this,P)}};function Ql(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Jl(a),Ii(a)}function Jl(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),Ii(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ii(this,!0)),Ee.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xl(this):this.bb())},n.bb=function(){Xl(this)};function Xl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Rt(a)!=4||a.Z()!=2)){if(a.u&&Rt(a)==4)vl(a.Ea,0,a);else if(de(a,"readystatechange"),Rt(a)==4){a.h=!1;try{const N=a.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=N===0){var A=String(a.D).match($l)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!cg.test(A?A.toLowerCase():"")}d=m}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var P=2<Rt(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",Jl(a)}}finally{Ii(a)}}}}function Ii(a,u){if(a.g){Yl(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||de(a,"ready");try{d.onreadystatechange=m}catch{}}}function Yl(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Rt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),$p(u)}};function Zl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ug(a){const u={};a=(a.g&&2<=Rt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(F(a[m]))continue;var d=T(a[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[A]||[];u[A]=P,P.push(d)}E(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function eu(a){this.Aa=0,this.i=[],this.j=new Jr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rs("baseRetryDelayMs",5e3,a),this.cb=rs("retryDelaySeedMs",1e4,a),this.Wa=rs("forwardChannelMaxRetries",2,a),this.wa=rs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ll(a&&a.concurrentRequestLimit),this.Da=new og,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=eu.prototype,n.la=8,n.G=1,n.connect=function(a,u,d,m){Ke(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=lu(this,null,this.W),Ei(this)};function la(a){if(tu(a),a.G==3){var u=a.U++,d=At(a.I);if(_e(d,"SID",a.K),_e(d,"RID",u),_e(d,"TYPE","terminate"),ss(a,d),u=new zt(a,a.j,u),u.L=2,u.v=_i(At(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=uu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),mi(u)}cu(a)}function wi(a){a.g&&(ha(a),a.g.cancel(),a.g=null)}function tu(a){wi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ti(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ei(a){if(!Ol(a.h)&&!a.s){a.s=!0;var u=a.Ga;In||jr(),Xe||(In(),Xe=!0),tr.add(u,a),a.B=0}}function hg(a,u){return Ml(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qr(y(a.Ga,a,u),au(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new zt(this,this.j,a);let P=this.o;if(this.S&&(P?(P=_(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=ru(this,A,u),d=At(this.I),_e(d,"RID",a),_e(d,"CVER",22),this.D&&_e(d,"X-HTTP-Session-Id",this.D),ss(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(Wl(P)))+"&"+u:this.m&&ca(d,this.m,P)),aa(this.h,A),this.Ua&&_e(d,"TYPE","init"),this.P?(_e(d,"$req",u),_e(d,"SID","null"),A.T=!0,ra(A,d,null)):ra(A,d,u),this.G=2}}else this.G==3&&(a?nu(this,a):this.i.length==0||Ol(this.h)||nu(this))};function nu(a,u){var d;u?d=u.l:d=a.U++;const m=At(a.I);_e(m,"SID",a.K),_e(m,"RID",d),_e(m,"AID",a.T),ss(a,m),a.m&&a.o&&ca(m,a.m,a.o),d=new zt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ru(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),aa(a.h,d),ra(d,m,u)}function ss(a,u){a.H&&Q(a.H,function(d,m){_e(u,m,d)}),a.l&&Ul({},function(d,m){_e(u,m,d)})}function ru(a,u,d){d=Math.min(a.i.length,d);var m=a.l?y(a.l.Na,a.l,a):null;e:{var A=a.i;let P=-1;for(;;){const N=["count="+d];P==-1?0<d?(P=A[0].g,N.push("ofs="+P)):P=0:N.push("ofs="+P);let fe=!0;for(let Oe=0;Oe<d;Oe++){let ie=A[Oe].g;const Be=A[Oe].map;if(ie-=P,0>ie)P=Math.max(0,A[Oe].g-100),fe=!1;else try{ag(Be,N,"req"+ie+"_")}catch{m&&m(Be)}}if(fe){m=N.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function su(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;In||jr(),Xe||(In(),Xe=!0),tr.add(u,a),a.v=0}}function ua(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qr(y(a.Fa,a),au(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qr(y(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),wi(this),iu(this))};function ha(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function iu(a){a.g=new zt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=At(a.qa);_e(u,"RID","rpc"),_e(u,"SID",a.K),_e(u,"AID",a.T),_e(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(u,"TO",a.ja),_e(u,"TYPE","xmlhttp"),ss(a,u),a.m&&a.o&&ca(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=_i(At(u)),d.m=null,d.P=!0,Dl(d,a)}n.Za=function(){this.C!=null&&(this.C=null,wi(this),ua(this),Ke(19))};function Ti(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function ou(a,u){var d=null;if(a.g==u){Ti(a),ha(a),a.g=null;var m=2}else if(oa(a.h,u))d=u.D,Fl(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;m=hi(),de(m,new Pl(m,d)),Ei(a)}else su(a);else if(A=u.s,A==3||A==0&&0<u.X||!(m==1&&hg(a,u)||m==2&&ua(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),A){case 1:An(a,5);break;case 4:An(a,10);break;case 3:An(a,6);break;default:An(a,2)}}}function au(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function An(a,u){if(a.j.info("Error code "+u),u==2){var d=y(a.fb,a),m=a.Xa;const A=!m;m=new bn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||pi(m,"https"),_i(m),A?sg(m.toString(),d):ig(m.toString(),d)}else Ke(2);a.G=0,a.l&&a.l.sa(u),cu(a),tu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function cu(a){if(a.G=0,a.ka=[],a.l){const u=Bl(a.h);(u.length!=0||a.i.length!=0)&&(x(a.ka,u),x(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function lu(a,u,d){var m=d instanceof bn?At(d):new bn(d);if(m.g!="")u&&(m.g=u+"."+m.g),gi(m,m.s);else{var A=c.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var P=new bn(null);m&&pi(P,m),u&&(P.g=u),A&&gi(P,A),d&&(P.l=d),m=P}return d=a.D,u=a.ya,d&&u&&_e(m,d,u),_e(m,"VER",a.la),ss(a,m),m}function uu(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ee(new yi({eb:d})):new Ee(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hu(){}n=hu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function bi(){}bi.prototype.g=function(a,u){return new rt(a,u)};function rt(a,u){j.call(this),this.g=new eu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new ir(this)}C(rt,j),rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rt.prototype.close=function(){la(this.g)},rt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Xo(a),a=d);u.i.push(new Wp(u.Ya++,a)),u.G==3&&Ei(u)},rt.prototype.N=function(){this.g.l=null,delete this.j,la(this.g),delete this.g,rt.aa.N.call(this)};function du(a){Zo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(du,Zo);function fu(){ea.call(this),this.status=1}C(fu,ea);function ir(a){this.g=a}C(ir,hu),ir.prototype.ua=function(){de(this.g,"a")},ir.prototype.ta=function(a){de(this.g,new du(a))},ir.prototype.sa=function(a){de(this.g,new fu)},ir.prototype.ra=function(){de(this.g,"b")},bi.prototype.createWebChannel=bi.prototype.g,rt.prototype.send=rt.prototype.o,rt.prototype.open=rt.prototype.m,rt.prototype.close=rt.prototype.close,sf=function(){return new bi},rf=function(){return hi()},nf=En,Oa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},di.NO_ERROR=0,di.TIMEOUT=8,di.HTTP_ERROR=6,Bi=di,Cl.COMPLETE="complete",tf=Cl,bl.EventType=Hr,Hr.OPEN="a",Hr.CLOSE="b",Hr.ERROR="c",Hr.MESSAGE="d",j.prototype.listen=j.prototype.K,ms=bl,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,ef=Ee}).apply(typeof Si<"u"?Si:typeof self<"u"?self:typeof window<"u"?window:{});const qu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new cc("@firebase/firestore");function hr(){return jn.logLevel}function V(n,...e){if(jn.logLevel<=ne.DEBUG){const t=e.map(vc);jn.debug(`Firestore (${Or}): ${n}`,...t)}}function Re(n,...e){if(jn.logLevel<=ne.ERROR){const t=e.map(vc);jn.error(`Firestore (${Or}): ${n}`,...t)}}function Vs(n,...e){if(jn.logLevel<=ne.WARN){const t=e.map(vc);jn.warn(`Firestore (${Or}): ${n}`,...t)}}function vc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function U(n="Unexpected state"){const e=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+n;throw Re(e),new Error(e)}function z(n,e){n||U()}function $(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(je.UNAUTHENTICATED))}shutdown(){}}class lI{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){z(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new aI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new je(e)}}class uI{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hI{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new uI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){z(this.o===void 0);const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(z(typeof t.token=="string"),this.R=t.token,new dI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=mI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function wr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function af(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ie(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new Ie(0,0))}static max(){return new K(new Ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ns.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ns?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends Ns{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const pI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends Ns{construct(e,t,r){return new ve(e,t,r)}static isValidIdentifier(e){return pI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ve(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new M(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new M(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(le.fromString(e))}static fromName(e){return new L(le.fromString(e).popFirst(5))}static empty(){return new L(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new le(e.slice()))}}/**
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
 */class oo{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Ma(n){return n.fields.find(e=>e.kind===2)}function Pn(n){return n.fields.filter(e=>e.kind!==2)}oo.UNKNOWN_ID=-1;class Ui{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ls{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ls(0,at.min())}}function cf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new Ie(t+1,0):new Ie(t,r));return new at(s,L.empty(),e)}function lf(n){return new at(n.readTime,n.key,-1)}class at{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new at(K.min(),L.empty(),-1)}static max(){return new at(K.max(),L.empty(),-1)}}function Ic(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==uf)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(s=>s?S.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new S((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new S((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new wt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ws(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=wc(r.target.error);this.V.reject(new ws(e,s))}}static open(e,t,r,s){try{return new So(t,e.transaction(s,r))}catch(i){throw new ws(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new _I(t)}}class sn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,sn.S(De())===12.2&&Re("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),Cn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!dd())return!1;if(sn.v())return!0;const e=De(),t=sn.S(e),r=0<t&&t<10,s=df(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new ws(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new M(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new M(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ws(e,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=So.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),S.reject(h))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function df(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class gI{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Cn(this.B.delete())}}class ws extends M{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function pn(n){return n.name==="IndexedDbTransactionError"}class _I{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(V("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Cn(r)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),Cn(this.store.add(e))}get(e){return Cn(this.store.get(e)).next(t=>(t===void 0&&(t=null),V("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),Cn(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),Cn(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new S((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new S((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){V("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new S((r,s)=>{t.onerror=i=>{const o=wc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new S((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new gI(c),h=t(c.primaryKey,c.value,l);if(h instanceof S){const f=h.catch(p=>(l.done(),S.reject(p)));r.push(f)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>S.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Cn(n){return new S((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=wc(r.target.error);t(s)}})}let Gu=!1;function wc(n){const e=sn.S(De());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Gu||(Gu=!0,setTimeout(()=>{throw r},0)),r}}return n}class yI{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){V("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{V("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){pn(t)?V("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await mn(t)}await this.X(6e4)})}}class vI{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return S.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return V("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(V("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=lf(i);Ic(o,r)>0&&(r=o)}),new at(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ze{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ze.oe=-1;function Po(n){return n==null}function Os(n){return n===0&&1/n==-1/0}function ff(n){return typeof n=="number"&&Number.isInteger(n)&&!Os(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ku(e)),e=II(n.get(t),e);return Ku(e)}function II(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Ku(n){return n+""}function gt(n){const e=n.length;if(z(e>=2),e===2)return z(n.charAt(0)===""&&n.charAt(1)===""),le.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&U(),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:U()}i=o+2}return new le(r)}/**
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
 */const Hu=["userId","batchId"];/**
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
 */function $i(n,e){return[n,We(e)]}function mf(n,e,t){return[n,We(e),t]}const wI={},EI=["prefixPath","collectionGroup","readTime","documentId"],TI=["prefixPath","collectionGroup","documentId"],bI=["collectionGroup","readTime","prefixPath","documentId"],AI=["canonicalId","targetId"],RI=["targetId","path"],SI=["path","targetId"],PI=["collectionId","parent"],CI=["indexId","uid"],xI=["uid","sequenceNumber"],kI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],DI=["indexId","uid","orderedDocumentKey"],VI=["userId","collectionPath","documentId"],NI=["userId","collectionPath","largestBatchId"],LI=["userId","collectionGroup","largestBatchId"],pf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],OI=[...pf,"documentOverlays"],gf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],_f=gf,Ec=[..._f,"indexConfiguration","indexState","indexEntries"],MI=Ec,FI=[...Ec,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends hf{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Ve(n,e){const t=$(n);return sn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pi(this.root,e,this.comparator,!0)}}class Pi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Me.RED,this.left=s??Me.EMPTY,this.right=i??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Me(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qu(this.data.getIterator())}getIteratorFrom(e){return new Qu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class Qu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ar(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new et([])}unionWith(e){let t=new he(ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class vf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vf("Invalid base64 string: "+i):i}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const BI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(n){if(z(!!n),typeof n=="string"){let e=0;const t=BI.exec(n);if(z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function un(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bc(n){const e=n.mapValue.fields.__previous_value__;return Tc(e)?bc(e):e}function Ms(n){const e=Ot(n.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,t,r,s,i,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class zn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new zn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ji={nullValue:"NULL_VALUE"};function qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Tc(n)?4:If(n)?9007199254740991:Co(n)?10:11:U()}function Et(n,e){if(n===e)return!0;const t=qn(n);if(t!==qn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ms(n).isEqual(Ms(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ot(s.timestampValue),c=Ot(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return un(s.bytesValue).isEqual(un(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ye(s.doubleValue),c=ye(i.doubleValue);return o===c?Os(o)===Os(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return wr(n.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Wu(o)!==Wu(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Et(o[l],c[l])))return!1;return!0}(n,e);default:return U()}}function Fs(n,e){return(n.values||[]).find(t=>Et(t,e))!==void 0}function hn(n,e){if(n===e)return 0;const t=qn(n),r=qn(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ye(i.integerValue||i.doubleValue),l=ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Ju(n.timestampValue,e.timestampValue);case 4:return Ju(Ms(n),Ms(e));case 5:return J(n.stringValue,e.stringValue);case 6:return function(i,o){const c=un(i),l=un(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=J(c[h],l[h]);if(f!==0)return f}return J(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=J(ye(i.latitude),ye(o.latitude));return c!==0?c:J(ye(i.longitude),ye(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xu(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},y=o.fields||{},b=(c=p.value)===null||c===void 0?void 0:c.arrayValue,C=(l=y.value)===null||l===void 0?void 0:l.arrayValue,D=J(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Xu(b,C)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===tn.mapValue&&o===tn.mapValue)return 0;if(i===tn.mapValue)return 1;if(o===tn.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const y=J(l[p],f[p]);if(y!==0)return y;const b=hn(c[l[p]],h[f[p]]);if(b!==0)return b}return J(l.length,f.length)}(n.mapValue,e.mapValue);default:throw U()}}function Ju(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Ot(n),r=Ot(e),s=J(t.seconds,r.seconds);return s!==0?s:J(t.nanos,r.nanos)}function Xu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=hn(t[s],r[s]);if(i)return i}return J(t.length,r.length)}function Er(n){return Ba(n)}function Ba(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ot(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return un(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ba(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ba(t.fields[o])}`;return s+"}"}(n.mapValue):U()}function Ac(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ua(n){return!!n&&"integerValue"in n}function Bs(n){return!!n&&"arrayValue"in n}function Yu(n){return!!n&&"nullValue"in n}function Zu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function zi(n){return!!n&&"mapValue"in n}function Co(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Es(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Es(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Es(n.arrayValue.values[t]);return e}return Object.assign({},n)}function If(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const wf={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function $I(n){return"nullValue"in n?ji:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ac(zn.empty(),L.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Co(n)?wf:{mapValue:{}}:U()}function jI(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ac(zn.empty(),L.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?wf:"mapValue"in n?Co(n)?{mapValue:{}}:tn:U()}function eh(n,e){const t=hn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function th(n,e){const t=hn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!zi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(t)}setAll(e){let t=ve.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Es(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());zi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];zi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Yn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(Es(this.value))}}function Ef(n){const e=[];return Yn(n.fields,(t,r)=>{const s=new ve([t]);if(zi(r)){const i=Ef(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Te(e,0,K.min(),K.min(),K.min(),ze.empty(),0)}static newFoundDocument(e,t,r,s){return new Te(e,1,t,K.min(),r,s,0)}static newNoDocument(e,t){return new Te(e,2,t,K.min(),K.min(),ze.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,K.min(),K.min(),ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tr{constructor(e,t){this.position=e,this.inclusive=t}}function nh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),t.key):r=hn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Et(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ao{constructor(e,t="asc"){this.field=e,this.dir=t}}function zI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Tf{}class re extends Tf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new qI(e,t,r):t==="array-contains"?new HI(e,r):t==="in"?new Cf(e,r):t==="not-in"?new WI(e,r):t==="array-contains-any"?new QI(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new GI(e,r):new KI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(hn(t,this.value)):t!==null&&qn(this.value)===qn(t)&&this.matchesComparison(hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends Tf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ue(e,t)}matches(e){return br(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function br(n){return n.op==="and"}function $a(n){return n.op==="or"}function Rc(n){return bf(n)&&br(n)}function bf(n){for(const e of n.filters)if(e instanceof ue)return!1;return!0}function ja(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+Er(n.value);if(Rc(n))return n.filters.map(e=>ja(e)).join(",");{const e=n.filters.map(t=>ja(t)).join(",");return`${n.op}(${e})`}}function Af(n,e){return n instanceof re?function(r,s){return s instanceof re&&r.op===s.op&&r.field.isEqual(s.field)&&Et(r.value,s.value)}(n,e):n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Af(o,s.filters[c]),!0):!1}(n,e):void U()}function Rf(n,e){const t=n.filters.concat(e);return ue.create(t,n.op)}function Sf(n){return n instanceof re?function(t){return`${t.field.canonicalString()} ${t.op} ${Er(t.value)}`}(n):n instanceof ue?function(t){return t.op.toString()+" {"+t.getFilters().map(Sf).join(" ,")+"}"}(n):"Filter"}class qI extends re{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class GI extends re{constructor(e,t){super(e,"in",t),this.keys=Pf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class KI extends re{constructor(e,t){super(e,"not-in",t),this.keys=Pf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Pf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class HI extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bs(t)&&Fs(t.arrayValue,this.value)}}class Cf extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fs(this.value.arrayValue,t)}}class WI extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Fs(this.value.arrayValue,t)}}class QI extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Fs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function za(n,e=null,t=[],r=[],s=null,i=null,o=null){return new JI(n,e,t,r,s,i,o)}function Gn(n){const e=$(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ja(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Po(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Er(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Er(r)).join(",")),e.ue=t}return e.ue}function Ys(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!zI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Af(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rh(n.startAt,e.startAt)&&rh(n.endAt,e.endAt)}function co(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function lo(n,e){return n.filters.filter(t=>t instanceof re&&t.field.isEqual(e))}function sh(n,e,t){let r=ji,s=!0;for(const i of lo(n,e)){let o=ji,c=!0;switch(i.op){case"<":case"<=":o=$I(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=ji}eh({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];eh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function ih(n,e,t){let r=tn,s=!0;for(const i of lo(n,e)){let o=tn,c=!0;switch(i.op){case">=":case">":o=jI(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=tn}th({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];th({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xf(n,e,t,r,s,i,o,c){return new xo(n,e,t,r,s,i,o,c)}function ko(n){return new xo(n)}function oh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function XI(n){return n.collectionGroup!==null}function Ts(n){const e=$(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new he(ve.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ao(i,r))}),t.has(ve.keyField().canonicalString())||e.ce.push(new ao(ve.keyField(),r))}return e.ce}function ot(n){const e=$(n);return e.le||(e.le=YI(e,Ts(n))),e.le}function YI(n,e){if(n.limitType==="F")return za(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ao(s.field,i)});const t=n.endAt?new Tr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Tr(n.startAt.position,n.startAt.inclusive):null;return za(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function qa(n,e,t){return new xo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Do(n,e){return Ys(ot(n),ot(e))&&n.limitType===e.limitType}function kf(n){return`${Gn(ot(n))}|lt:${n.limitType}`}function dr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Sf(s)).join(", ")}]`),Po(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Er(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Er(s)).join(",")),`Target(${r})`}(ot(n))}; limitType=${n.limitType})`}function Zs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):L.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ts(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=nh(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Ts(r),s)||r.endAt&&!function(o,c,l){const h=nh(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Ts(r),s))}(n,e)}function Df(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vf(n){return(e,t)=>{let r=!1;for(const s of Ts(n)){const i=ZI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ZI(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?hn(l,h):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return yf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=new pe(L.comparator);function st(){return ew}const Nf=new pe(L.comparator);function ps(...n){let e=Nf;for(const t of n)e=e.insert(t.key,t);return e}function Lf(n){let e=Nf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function _t(){return bs()}function Of(){return bs()}function bs(){return new gn(n=>n.toString(),(n,e)=>n.isEqual(e))}const tw=new pe(L.comparator),nw=new he(L.comparator);function ee(...n){let e=nw;for(const t of n)e=e.add(t);return e}const rw=new he(J);function Sc(){return rw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(e)?"-0":e}}function Mf(n){return{integerValue:""+n}}function sw(n,e){return ff(e)?Mf(e):Pc(n,e)}/**
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
 */class Vo{constructor(){this._=void 0}}function iw(n,e,t){return n instanceof Ar?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tc(i)&&(i=bc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Rr?Bf(n,e):n instanceof Sr?Uf(n,e):function(s,i){const o=Ff(s,i),c=ah(o)+ah(s.Pe);return Ua(o)&&Ua(s.Pe)?Mf(c):Pc(s.serializer,c)}(n,e)}function ow(n,e,t){return n instanceof Rr?Bf(n,e):n instanceof Sr?Uf(n,e):t}function Ff(n,e){return n instanceof Us?function(r){return Ua(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ar extends Vo{}class Rr extends Vo{constructor(e){super(),this.elements=e}}function Bf(n,e){const t=$f(e);for(const r of n.elements)t.some(s=>Et(s,r))||t.push(r);return{arrayValue:{values:t}}}class Sr extends Vo{constructor(e){super(),this.elements=e}}function Uf(n,e){let t=$f(e);for(const r of n.elements)t=t.filter(s=>!Et(s,r));return{arrayValue:{values:t}}}class Us extends Vo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ah(n){return ye(n.integerValue||n.doubleValue)}function $f(n){return Bs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.field=e,this.transform=t}}function aw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Rr&&s instanceof Rr||r instanceof Sr&&s instanceof Sr?wr(r.elements,s.elements,Et):r instanceof Us&&s instanceof Us?Et(r.Pe,s.Pe):r instanceof Ar&&s instanceof Ar}(n.transform,e.transform)}class cw{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class No{}function zf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lo(n.key,qe.none()):new Mr(n.key,n.data,qe.none());{const t=n.data,r=ze.empty();let s=new he(ve.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Bt(n.key,r,new et(s.toArray()),qe.none())}}function lw(n,e,t){n instanceof Mr?function(s,i,o){const c=s.value.clone(),l=lh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Bt?function(s,i,o){if(!qi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=lh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(qf(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function As(n,e,t,r){return n instanceof Mr?function(i,o,c,l){if(!qi(i.precondition,o))return c;const h=i.value.clone(),f=uh(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Bt?function(i,o,c,l){if(!qi(i.precondition,o))return c;const h=uh(i.fieldTransforms,l,o),f=o.data;return f.setAll(qf(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return qi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function uw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ff(r.transform,s||null);i!=null&&(t===null&&(t=ze.empty()),t.set(r.field,i))}return t||null}function ch(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wr(r,s,(i,o)=>aw(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mr extends No{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bt extends No{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function lh(n,e,t){const r=new Map;z(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,ow(o,c,t[s]))}return r}function uh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,iw(i,o,e))}return r}class Lo extends No{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gf extends No{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=As(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=As(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Of();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=zf(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&wr(this.mutations,e.mutations,(t,r)=>ch(t,r))&&wr(this.baseMutations,e.baseMutations,(t,r)=>ch(t,r))}}class xc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){z(e.mutations.length===r.length);let s=function(){return tw}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new xc(e,t,r,s)}}/**
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
 */class kc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,se;function dw(n){switch(n){default:return U();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Kf(n){if(n===void 0)return Re("GRPC error has no .code"),k.UNKNOWN;switch(n){case xe.OK:return k.OK;case xe.CANCELLED:return k.CANCELLED;case xe.UNKNOWN:return k.UNKNOWN;case xe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case xe.INTERNAL:return k.INTERNAL;case xe.UNAVAILABLE:return k.UNAVAILABLE;case xe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case xe.NOT_FOUND:return k.NOT_FOUND;case xe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case xe.ABORTED:return k.ABORTED;case xe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case xe.DATA_LOSS:return k.DATA_LOSS;default:return U()}}(se=xe||(xe={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fw(){return new TextEncoder}/**
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
 */const mw=new Vn([4294967295,4294967295],0);function hh(n){const e=fw().encode(n),t=new Zd;return t.update(e),new Uint8Array(t.digest())}function dh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vn([t,r],0),new Vn([s,i],0)]}class Dc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new gs(`Invalid padding: ${t}`);if(r<0)throw new gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new gs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Vn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Vn.fromNumber(r)));return s.compare(mw)===1&&(s=new Vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=hh(e),[r,s]=dh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Dc(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=hh(e),[r,s]=dh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ti.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ei(K.min(),s,new pe(J),st(),ee())}}class ti{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ti(r,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Hf{constructor(e,t){this.targetId=e,this.me=t}}class Wf{constructor(e,t,r=Pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class fh{constructor(){this.fe=0,this.ge=ph(),this.pe=Pe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),r=ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U()}}),new ti(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=ph()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pw{constructor(e){this.Le=e,this.Be=new Map,this.ke=st(),this.qe=mh(),this.Qe=new pe(J)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(co(i))if(r===0){const o=new L(i.path);this.Ue(t,o,Te.newNoDocument(o,K.min()))}else z(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=un(r).toUint8Array()}catch(l){if(l instanceof vf)return Vs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Dc(o,s,i)}catch(l){return Vs(l instanceof gs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&co(c.target)){const l=new L(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Te.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=ee();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ei(e,t,this.Qe,this.ke,r);return this.ke=st(),this.qe=mh(),this.Qe=new pe(J),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new fh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new he(J),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new fh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function mh(){return new pe(L.comparator)}function ph(){return new pe(L.comparator)}const gw={asc:"ASCENDING",desc:"DESCENDING"},_w={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yw={and:"AND",or:"OR"};class vw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ga(n,e){return n.useProto3Json||Po(e)?e:{value:e}}function Pr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Iw(n,e){return Pr(n,e.toTimestamp())}function Qe(n){return z(!!n),K.fromTimestamp(function(t){const r=Ot(t);return new Ie(r.seconds,r.nanos)}(n))}function Vc(n,e){return Ka(n,e).canonicalString()}function Ka(n,e){const t=function(s){return new le(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Jf(n){const e=le.fromString(n);return z(im(e)),e}function uo(n,e){return Vc(n.databaseId,e.path)}function Nn(n,e){const t=Jf(e);if(t.get(1)!==n.databaseId.projectId)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Zf(t))}function Xf(n,e){return Vc(n.databaseId,e)}function Yf(n){const e=Jf(n);return e.length===4?le.emptyPath():Zf(e)}function Ha(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Zf(n){return z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function gh(n,e,t){return{name:uo(n,e),fields:t.value.mapValue.fields}}function ww(n,e,t){const r=Nn(n,e.name),s=Qe(e.updateTime),i=e.createTime?Qe(e.createTime):K.min(),o=new ze({mapValue:{fields:e.fields}}),c=Te.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Ew(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(z(f===void 0||typeof f=="string"),Pe.fromBase64String(f||"")):(z(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Pe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?k.UNKNOWN:Kf(h.code);return new M(f,h.message||"")}(o);t=new Wf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nn(n,r.document.name),i=Qe(r.document.updateTime),o=r.document.createTime?Qe(r.document.createTime):K.min(),c=new ze({mapValue:{fields:r.document.fields}}),l=Te.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Gi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nn(n,r.document),i=r.readTime?Qe(r.readTime):K.min(),o=Te.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Gi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nn(n,r.document),i=r.removedTargetIds||[];t=new Gi([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new hw(s,i),c=r.targetId;t=new Hf(c,o)}}return t}function ho(n,e){let t;if(e instanceof Mr)t={update:gh(n,e.key,e.value)};else if(e instanceof Lo)t={delete:uo(n,e.key)};else if(e instanceof Bt)t={update:gh(n,e.key,e.data),updateMask:Pw(e.fieldMask)};else{if(!(e instanceof Gf))return U();t={verify:uo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ar)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Rr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Sr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Us)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Iw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(n,e.precondition)),t}function Wa(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?qe.updateTime(Qe(i.updateTime)):i.exists!==void 0?qe.exists(i.exists):qe.none()}(e.currentDocument):qe.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)z(c.setToServerValue==="REQUEST_TIME"),l=new Ar;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new Rr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Sr(f)}else"increment"in c?l=new Us(o,c.increment):U();const h=ve.fromServerFormat(c.fieldPath);return new jf(h,l)}(n,s)):[];if(e.update){e.update.name;const s=Nn(n,e.update.name),i=new ze({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new et(h.map(f=>ve.fromServerFormat(f)))}(e.updateMask);return new Bt(s,i,o,t,r)}return new Mr(s,i,t,r)}if(e.delete){const s=Nn(n,e.delete);return new Lo(s,t)}if(e.verify){const s=Nn(n,e.verify);return new Gf(s,t)}return U()}function Tw(n,e){return n&&n.length>0?(z(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Qe(s.updateTime):Qe(i);return o.isEqual(K.min())&&(o=Qe(i)),new cw(o,s.transformResults||[])}(t,e))):[]}function em(n,e){return{documents:[Xf(n,e.path)]}}function tm(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Xf(n,s);const i=function(h){if(h.length!==0)return sm(ue.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:fr(y.field),direction:Aw(y.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ga(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function nm(n){let e=Yf(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){z(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const y=rm(p);return y instanceof ue&&Rc(y)?y.getFilters():[y]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(y=>function(C){return new ao(mr(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(t.orderBy));let c=null;t.limit&&(c=function(p){let y;return y=typeof p=="object"?p.value:p,Po(y)?null:y}(t.limit));let l=null;t.startAt&&(l=function(p){const y=!!p.before,b=p.values||[];return new Tr(b,y)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const y=!p.before,b=p.values||[];return new Tr(b,y)}(t.endAt)),xf(e,s,o,i,c,"F",l,h)}function bw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=mr(t.unaryFilter.field);return re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=mr(t.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mr(t.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mr(t.unaryFilter.field);return re.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return re.create(mr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ue.create(t.compositeFilter.filters.map(r=>rm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function Aw(n){return gw[n]}function Rw(n){return _w[n]}function Sw(n){return yw[n]}function fr(n){return{fieldPath:n.canonicalString()}}function mr(n){return ve.fromServerFormat(n.fieldPath)}function sm(n){return n instanceof re?function(t){if(t.op==="=="){if(Zu(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NAN"}};if(Yu(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zu(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NOT_NAN"}};if(Yu(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fr(t.field),op:Rw(t.op),value:t.value}}}(n):n instanceof ue?function(t){const r=t.getFilters().map(s=>sm(s));return r.length===1?r[0]:{compositeFilter:{op:Sw(t.op),filters:r}}}(n):U()}function Pw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function im(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,r,s,i=K.min(),o=K.min(),c=Pe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.ct=e}}function Cw(n,e){let t;if(e.document)t=ww(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),s=Hn(e.noDocument.readTime);t=Te.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const r=L.fromSegments(e.unknownDocument.path),s=Hn(e.unknownDocument.version);t=Te.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Ie(s[0],s[1]);return K.fromTimestamp(i)}(e.readTime)),t}function _h(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:fo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:uo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Pr(i,o.version.toTimestamp()),createTime:Pr(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Kn(e.version)};else{if(!e.isUnknownDocument())return U();r.unknownDocument={path:t.path.toArray(),version:Kn(e.version)}}return r}function fo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Kn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Hn(n){const e=new Ie(n.seconds,n.nanoseconds);return K.fromTimestamp(e)}function xn(n,e){const t=(e.baseMutations||[]).map(i=>Wa(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Wa(n.ct,i)),s=Ie.fromMillis(e.localWriteTimeMs);return new Cc(e.batchId,s,t,r)}function _s(n){const e=Hn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Hn(n.lastLimboFreeSnapshotVersion):K.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return z(i.documents.length===1),ot(ko(Yf(i.documents[0])))}(n.query):function(i){return ot(nm(i))}(n.query),new xt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Pe.fromBase64String(n.resumeToken))}function am(n,e){const t=Kn(e.snapshotVersion),r=Kn(e.lastLimboFreeSnapshotVersion);let s;s=co(e.target)?em(n.ct,e.target):tm(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Gn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function cm(n){const e=nm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qa(e,e.limit,"L"):e}function Ia(n,e){return new kc(e.largestBatchId,Wa(n.ct,e.overlayMutation))}function yh(n,e){const t=e.path.lastSegment();return[n,We(e.path.popLast()),t]}function vh(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Kn(r.readTime),documentKey:We(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{getBundleMetadata(e,t){return Ih(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Hn(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Ih(e).put(function(s){return{bundleId:s.id,createTime:Kn(Qe(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return wh(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:cm(i.bundledQuery),readTime:Hn(i.readTime)}}(r)})}saveNamedQuery(e,t){return wh(e).put(function(s){return{name:s.name,readTime:Kn(Qe(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Ih(n){return Ve(n,"bundles")}function wh(n){return Ve(n,"namedQueries")}/**
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
 */class Oo{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Oo(e,r)}getOverlay(e,t){return is(e).get(yh(this.userId,t)).next(r=>r?Ia(this.serializer,r):null)}getOverlays(e,t){const r=_t();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new kc(t,o);s.push(this.ht(e,c))}),S.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(We(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(is(e).j("collectionPathOverlayIndex",c))}),S.waitFor(i)}getOverlaysForCollection(e,t,r){const s=_t(),i=We(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return is(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const h=Ia(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=_t();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return is(e).J({index:"collectionGroupOverlayIndex",range:c},(l,h,f)=>{const p=Ia(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return is(e).put(function(s,i,o){const[c,l,h]=yh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ho(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function is(n){return Ve(n,"documentOverlays")}/**
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
 */class kw{Pt(e){return Ve(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Pe.fromUint8Array(r):Pe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class kn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ye(e.integerValue));else if("doubleValue"in e){const r=ye(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Os(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Ot(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(un(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?If(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Co(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):U()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(ye(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),L.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}kn.vt=new kn;function Dw(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Eh(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=Dw(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class Vw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Eh(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Eh(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class Nw{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class Lw{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class os{constructor(){this.jt=new Vw,this.Ht=new Nw(this.jt),this.Jt=new Lw(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Dn{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Dn(this.indexId,this.documentKey,this.arrayValue,r)}}function Ht(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Th(n.arrayValue,e.arrayValue),t!==0?t:(t=Th(n.directionalValue,e.directionalValue),t!==0?t:L.comparator(n.documentKey,e.documentKey)))}function Th(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class bh{constructor(e){this.Xt=new he((t,r)=>ve.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(z(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Ma(e);if(t!==void 0&&!this.sn(t))return!1;const r=Pn(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new he(ve.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ui(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ui(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ui(r.field,r.dir==="asc"?0:1)));return new oo(oo.UNKNOWN_ID,this.collectionId,t,Ls.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function lm(n){var e,t;if(z(n instanceof re||n instanceof ue),n instanceof re){if(n instanceof Cf){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>re.create(n.field,"==",i)))||[];return ue.create(s,"or")}return n}const r=n.filters.map(s=>lm(s));return ue.create(r,n.op)}function Ow(n){if(n.getFilters().length===0)return[];const e=Xa(lm(n));return z(um(e)),Qa(e)||Ja(e)?[e]:e.getFilters()}function Qa(n){return n instanceof re}function Ja(n){return n instanceof ue&&Rc(n)}function um(n){return Qa(n)||Ja(n)||function(t){if(t instanceof ue&&$a(t)){for(const r of t.getFilters())if(!Qa(r)&&!Ja(r))return!1;return!0}return!1}(n)}function Xa(n){if(z(n instanceof re||n instanceof ue),n instanceof re)return n;if(n.filters.length===1)return Xa(n.filters[0]);const e=n.filters.map(r=>Xa(r));let t=ue.create(e,n.op);return t=mo(t),um(t)?t:(z(t instanceof ue),z(br(t)),z(t.filters.length>1),t.filters.reduce((r,s)=>Nc(r,s)))}function Nc(n,e){let t;return z(n instanceof re||n instanceof ue),z(e instanceof re||e instanceof ue),t=n instanceof re?e instanceof re?function(s,i){return ue.create([s,i],"and")}(n,e):Ah(n,e):e instanceof re?Ah(e,n):function(s,i){if(z(s.filters.length>0&&i.filters.length>0),br(s)&&br(i))return Rf(s,i.getFilters());const o=$a(s)?s:i,c=$a(s)?i:s,l=o.filters.map(h=>Nc(h,c));return ue.create(l,"or")}(n,e),mo(t)}function Ah(n,e){if(br(e))return Rf(e,n.getFilters());{const t=e.filters.map(r=>Nc(n,r));return ue.create(t,"or")}}function mo(n){if(z(n instanceof re||n instanceof ue),n instanceof re)return n;const e=n.getFilters();if(e.length===1)return mo(e[0]);if(bf(n))return n;const t=e.map(s=>mo(s)),r=[];return t.forEach(s=>{s instanceof re?r.push(s):s instanceof ue&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ue.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.un=new Lc}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(at.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(at.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Lc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new he(le.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new he(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Uint8Array(0);class Fw{constructor(e,t){this.databaseId=t,this.cn=new Lc,this.ln=new gn(r=>Gn(r),(r,s)=>Ys(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:We(s)};return Rh(e).put(i)}return S.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[af(t),""],!1,!0);return Rh(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(gt(o.parent))}return r})}addFieldIndex(e,t){const r=as(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=lr(e);return i.next(c=>{o.put(vh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=as(e),s=lr(e),i=cr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=as(e),r=cr(e),s=lr(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return S.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new bh(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=cr(e);let s=!0;const i=new Map;return S.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=ee();const c=[];return S.forEach(i,(l,h)=>{V("IndexedDbIndexManager",`Using index ${function(O){return`id=${O.indexId}|cg=${O.collectionGroup}|f=${O.fields.map(q=>`${q.fieldPath}:${q.kind}`).join(",")}`}(l)} to execute ${Gn(t)}`);const f=function(O,q){const Z=Ma(q);if(Z===void 0)return null;for(const Q of lo(O,Z.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(h,l),p=function(O,q){const Z=new Map;for(const Q of Pn(q))for(const E of lo(O,Q.fieldPath))switch(E.op){case"==":case"in":Z.set(Q.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return Z.set(Q.fieldPath.canonicalString(),E.value),Array.from(Z.values())}return null}(h,l),y=function(O,q){const Z=[];let Q=!0;for(const E of Pn(q)){const _=E.kind===0?sh(O,E.fieldPath,O.startAt):ih(O,E.fieldPath,O.startAt);Z.push(_.value),Q&&(Q=_.inclusive)}return new Tr(Z,Q)}(h,l),b=function(O,q){const Z=[];let Q=!0;for(const E of Pn(q)){const _=E.kind===0?ih(O,E.fieldPath,O.endAt):sh(O,E.fieldPath,O.endAt);Z.push(_.value),Q&&(Q=_.inclusive)}return new Tr(Z,Q)}(h,l),C=this.In(l,h,y),D=this.In(l,h,b),x=this.Tn(l,h,p),B=this.En(l.indexId,f,C,y.inclusive,D,b.inclusive,x);return S.forEach(B,F=>r.G(F,t.limit).next(O=>{O.forEach(q=>{const Z=L.fromSegments(q.documentKey);o.has(Z)||(o=o.add(Z),c.push(Z))})}))}).next(()=>c)}return S.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=Ow(ue.create(e.filters,"and")).map(r=>za(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const y=t?this.dn(t[p/h]):Ci,b=this.An(e,y,r[p%h],s),C=this.Rn(e,y,i[p%h],o),D=c.map(x=>this.An(e,y,x,!0));f.push(...this.createRange(b,C,D))}return f}An(e,t,r,s){const i=new Dn(e,L.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new Dn(e,L.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new bh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return S.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let h=new he(ve.comparator),f=!1;for(const p of l.filters)for(const y of p.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?f=!0:h=h.add(y.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new os;for(const s of Pn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);kn.vt.It(i,o)}return r.zt()}dn(e){const t=new os;return kn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new os;return kn.vt.It(Ac(this.databaseId,t),r.Yt(function(i){const o=Pn(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new os);let i=0;for(const o of Pn(e)){const c=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&Bs(c))s=this.gn(s,o,c);else{const h=l.Yt(o.kind);kn.vt.It(c,h)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new os;l.seed(c.zt()),kn.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof re&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=as(e),s=lr(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return S.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const y=p?new Ls(p.sequenceNumber,new at(Hn(p.readTime),new L(gt(p.documentKey)),p.largestBatchId)):Ls.empty(),b=f.fields.map(([C,D])=>new Ui(ve.fromServerFormat(C),D));return new oo(f.indexId,f.collectionGroup,b,y)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:J(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=as(e),i=lr(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>S.forEach(c,l=>i.put(vh(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return S.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),S.forEach(c,l=>this.wn(e,s,l).next(h=>{const f=this.Sn(i,l);return h.isEqual(f)?S.resolve():this.bn(e,i,l,h,f)}))))})}Dn(e,t,r,s){return cr(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return cr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=cr(e);let i=new he(Ht);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{i=i.add(new Dn(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let r=new he(Ht);const s=this.Vn(t,e);if(s==null)return r;const i=Ma(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Bs(o))for(const c of o.arrayValue.values||[])r=r.add(new Dn(t.indexId,e.key,this.dn(c),s))}else r=r.add(new Dn(t.indexId,e.key,Ci,s));return r}bn(e,t,r,s,i){V("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,y){const b=l.getIterator(),C=h.getIterator();let D=ar(b),x=ar(C);for(;D||x;){let B=!1,F=!1;if(D&&x){const O=f(D,x);O<0?F=!0:O>0&&(B=!0)}else D!=null?F=!0:B=!0;B?(p(x),x=ar(C)):F?(y(D),D=ar(b)):(D=ar(b),x=ar(C))}}(s,i,Ht,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),S.waitFor(o)}yn(e){let t=1;return lr(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Ht(o,c)).filter((o,c,l)=>!c||Ht(o,l[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=Ht(o,e),l=Ht(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Ci,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Ci,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return Ht(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Sh)}getMinOffset(e,t){return S.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||U())).next(Sh)}}function Rh(n){return Ve(n,"collectionParents")}function cr(n){return Ve(n,"indexEntries")}function as(n){return Ve(n,"indexConfiguration")}function lr(n){return Ve(n,"indexState")}function Sh(n){z(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Ic(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new at(e.readTime,e.documentKey,t)}/**
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
 */const Ph={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ye{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ye(e,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.J({range:o},(f,p,y)=>(c++,y.delete()));i.push(l.next(()=>{z(c===1)}));const h=[];for(const f of t.mutations){const p=mf(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return S.waitFor(i).next(()=>h)}function po(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw U();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.DEFAULT_COLLECTION_PERCENTILE=10,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ye.DEFAULT=new Ye(41943040,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ye.DISABLED=new Ye(-1,0,0);class Mo{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){z(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Mo(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Wt(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=pr(e),o=Wt(e);return o.add({}).next(c=>{z(typeof c=="number");const l=new Cc(c,t,r,s),h=function(b,C,D){const x=D.baseMutations.map(F=>ho(b.ct,F)),B=D.mutations.map(F=>ho(b.ct,F));return{userId:C,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:x,mutations:B}}(this.serializer,this.userId,l),f=[];let p=new he((y,b)=>J(y.canonicalString(),b.canonicalString()));for(const y of s){const b=mf(this.userId,y.key.path,c);p=p.add(y.key.path.popLast()),f.push(o.put(h)),f.push(i.put(b,wI))}return p.forEach(y=>{f.push(this.indexManager.addToCollectionParentIndex(e,y))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),S.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Wt(e).get(t).next(r=>r?(z(r.userId===this.userId),xn(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?S.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Wt(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(z(c.batchId>=r),i=xn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Wt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Wt(e).U("userMutationsIndex",t).next(r=>r.map(s=>xn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=$i(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return pr(e).J({range:s},(o,c,l)=>{const[h,f,p]=o,y=gt(f);if(h===this.userId&&t.path.isEqual(y))return Wt(e).get(p).next(b=>{if(!b)throw U();z(b.userId===this.userId),i.push(xn(this.serializer,b))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he(J);const s=[];return t.forEach(i=>{const o=$i(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=pr(e).J({range:c},(h,f,p)=>{const[y,b,C]=h,D=gt(b);y===this.userId&&i.path.isEqual(D)?r=r.add(C):p.done()});s.push(l)}),S.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=$i(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new he(J);return pr(e).J({range:o},(l,h,f)=>{const[p,y,b]=l,C=gt(y);p===this.userId&&r.isPrefixOf(C)?C.length===s&&(c=c.add(b)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Wt(e).get(i).next(o=>{if(o===null)throw U();z(o.userId===this.userId),r.push(xn(this.serializer,o))}))}),S.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return hm(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),S.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return pr(e).J({range:r},(i,o,c)=>{if(i[0]===this.userId){const l=gt(i[1]);s.push(l)}else c.done()}).next(()=>{z(s.length===0)})})}containsKey(e,t){return dm(e,this.userId,t)}Nn(e){return fm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function dm(n,e,t){const r=$i(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return pr(n).J({range:i,H:!0},(c,l,h)=>{const[f,p,y]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function Wt(n){return Ve(n,"mutations")}function pr(n){return Ve(n,"documentMutations")}function fm(n){return Ve(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Wn(0)}static kn(){return new Wn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Wn(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>K.fromTimestamp(new Ie(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ur(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(z(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return ur(e).J((o,c)=>{const l=_s(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>S.waitFor(i)).next(()=>s)}forEachTarget(e,t){return ur(e).J((r,s)=>{const i=_s(s);t(i)})}qn(e){return Ch(e).get("targetGlobalKey").next(t=>(z(t!==null),t))}Qn(e,t){return Ch(e).put("targetGlobalKey",t)}Kn(e,t){return ur(e).put(am(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Gn(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return ur(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const h=_s(c);Ys(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Zt(e);return t.forEach(o=>{const c=We(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),S.waitFor(s)}removeMatchingKeys(e,t,r){const s=Zt(e);return S.forEach(t,i=>{const o=We(i.path);return S.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Zt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Zt(e);let i=ee();return s.J({range:r,H:!0},(o,c,l)=>{const h=gt(o[1]),f=new L(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const r=We(t.path),s=IDBKeyRange.bound([r],[af(r)],!1,!0);let i=0;return Zt(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return ur(e).get(t).next(r=>r?_s(r):null)}}function ur(n){return Ve(n,"targets")}function Ch(n){return Ve(n,"targetGlobal")}function Zt(n){return Ve(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh([n,e],[t,r]){const s=J(n,t);return s===0?J(e,r):s}class Uw{constructor(e){this.Un=e,this.buffer=new he(xh),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();xh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $w{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pn(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await mn(t)}await this.Hn(3e5)})}}class jw{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Ze.oe);const r=new Uw(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Ph)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ph):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),hr()<=ne.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function zw(n,e){return new jw(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t){this.db=e,this.garbageCollector=zw(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return xi(e,r)}removeReference(e,t,r){return xi(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return xi(e,t)}nr(e,t){return function(s,i){let o=!1;return fm(s).Y(c=>dm(s,c,i).next(l=>(l&&(o=!0),S.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(h=>{if(!h)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,K.min()),Zt(e).delete(function(p){return[0,We(p.path)]}(o))))});s.push(l)}}).next(()=>S.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return xi(e,t)}tr(e,t){const r=Zt(e);let s,i=Ze.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==Ze.oe&&t(new L(gt(s)),i),i=h,s=l):i=Ze.oe}).next(()=>{i!==Ze.oe&&t(new L(gt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function xi(n,e){return Zt(n).put(function(r,s){return{targetId:0,path:We(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.changes=new gn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Rn(e).put(r)}removeEntry(e,t,r){return Rn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],fo(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Te.newInvalidDocument(t);return Rn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(cs(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:Te.newInvalidDocument(t)};return Rn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(cs(t))},(s,i)=>{r={document:this.ir(t,i),size:po(i)}}).next(()=>r)}getEntries(e,t){let r=st();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=st(),s=new pe(L.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);r=r.insert(i,c),s=s.insert(i,po(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return S.resolve();let s=new he(Vh);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(cs(s.first()),cs(s.last())),o=s.getIterator();let c=o.getNext();return Rn(e).J({index:"documentKeyIndex",range:i},(l,h,f)=>{const p=L.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Vh(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.$(cs(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),fo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Rn(e).U(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=st();for(const p of h){const y=this.ir(L.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);y.isFoundDocument()&&(Zs(t,y)||s.has(y.key))&&(f=f.insert(y.key,y))}return f})}getAllFromCollectionGroup(e,t,r,s){let i=st();const o=Dh(t,r),c=Dh(t,at.max());return Rn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.ir(L.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new Kw(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return kh(e).get("remoteDocumentGlobalKey").next(t=>(z(!!t),t))}rr(e,t){return kh(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=Cw(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(K.min())))return r}return Te.newInvalidDocument(e)}}function pm(n){return new Gw(n)}class Kw extends mm{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new gn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new he((i,o)=>J(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=_h(this.cr.serializer,o);s=s.add(i.path.popLast());const h=po(l);r+=h-c.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=_h(this.cr.serializer,o.convertToNoDocument(K.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),S.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function kh(n){return Ve(n,"remoteDocumentGlobal")}function Rn(n){return Ve(n,"remoteDocumentsV14")}function cs(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Dh(n,e){const t=e.documentKey.path.toArray();return[n,fo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Vh(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=J(t[i],r[i]),s)return s;return s=J(t.length,r.length),s||(s=J(t[t.length-2],r[r.length-2]),s||J(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&As(r.mutation,s,et.empty(),Ie.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const s=_t();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=ps();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=_t();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=st();const o=bs(),c=function(){return bs()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Bt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),As(f.mutation,h,f.mutation.getFieldMask(),Ie.now())):o.set(h.key,et.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new Hw(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=bs();let s=new pe((o,c)=>o-c),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||et.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||ee()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Of();f.forEach(y=>{if(!i.has(y)){const b=zf(t.get(y),r.get(y));b!==null&&p.set(y,b),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):XI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):S.resolve(_t());let c=-1,l=i;return o.next(h=>S.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{l=l.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ee())).next(f=>({batchId:c,changes:Lf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let s=ps();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=ps();return this.indexManager.getCollectionParents(e,i).next(c=>S.forEach(c,l=>{const h=function(p,y){return new xo(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Te.newInvalidDocument(f)))});let c=ps();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&As(f.mutation,h,et.empty(),Ie.now()),Zs(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Qe(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:cm(s.bundledQuery),readTime:Qe(s.readTime)}}(t)),S.resolve()}}/**
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
 */class Qw{constructor(){this.overlays=new pe(L.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=_t();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=_t(),i=t.length+1,o=new L(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=_t(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=_t(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return S.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kc(t,r));let i=this.Ir.get(t);i===void 0&&(i=ee(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Jw{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.Tr=new he(Le.Er),this.dr=new he(Le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Le(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Le(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new L(new le([])),r=new Le(t,e),s=new Le(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new L(new le([])),r=new Le(t,e),s=new Le(t,e+1);let i=ee();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Le(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return L.comparator(e.key,t.key)||J(e.wr,t.wr)}static Ar(e,t){return J(e.wr,t.wr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new he(Le.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cc(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Le(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Le(t,0),s=new Le(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he(J);return t.forEach(s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const o=new Le(new L(i),0);let c=new he(J);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),S.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){z(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(t.mutations,s=>{const i=new Le(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Le(t,0),s=this.br.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.Mr=e,this.docs=function(){return new pe(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Te.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=st();const o=t.path,c=new L(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Ic(lf(f),r)<=0||(s.has(f.key)||Zs(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U()}Or(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Zw(this)}getSize(e){return S.resolve(this.size)}}class Zw extends mm{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.persistence=e,this.Nr=new gn(t=>Gn(t),Ys),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Oc,this.targetCount=0,this.kr=Wn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Wn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ze(0),this.Kr=!1,this.Kr=!0,this.$r=new Jw,this.referenceDelegate=e(this),this.Ur=new eE(this),this.indexManager=new Mw,this.remoteDocumentCache=function(s){return new Yw(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new om(t),this.Gr=new Ww(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Xw(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new tE(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return S.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class tE extends hf{constructor(e){super(),this.currentSequenceNumber=e}}class Fo{constructor(e){this.persistence=e,this.Jr=new Oc,this.Yr=null}static Zr(e){return new Fo(e)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,r=>{const s=L.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,K.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.serializer=e}O(e,t,r,s){const i=new So("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Hu,{unique:!0}),l.createObjectStore("documentMutations")}(e),Nh(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=S.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Nh(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:K.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Hu,{unique:!0});const p=h.store("mutations"),y=f.map(b=>p.put(b));return S.waitFor(y)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:VI});h.createIndex("collectionPathOverlayIndex",NI,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",LI,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:EI});h.createIndex("documentKeyIndex",TI),h.createIndex("collectionGroupIndex",bI)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:CI}).createIndex("sequenceNumberIndex",xI,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:kI}).createIndex("documentKeyIndex",DI,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=po(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>S.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>S.forEach(c,l=>{z(l.userId===i.userId);const h=xn(this.serializer,l);return hm(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,c)=>{const l=new le(o),h=function(p){return[0,We(p)]}(l);i.push(t.get(h).next(f=>f?S.resolve():(p=>t.put({targetId:0,path:We(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>S.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:PI});const r=t.store("collectionParents"),s=new Lc,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:We(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new le(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],h)=>{const f=gt(c);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=_s(s),o=am(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new L(le.fromString(p.document.name).popFirst(5)):p.noDocument?L.fromSegments(p.noDocument.path):p.unknownDocument?L.fromSegments(p.unknownDocument.path):U()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>S.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=pm(this.serializer),i=new _m(Fo.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:ee();xn(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),S.forEach(c,(l,h)=>{const f=new je(h),p=Oo.lt(this.serializer,f),y=i.getIndexManager(f),b=Mo.lt(f,this.serializer,y,i.referenceDelegate);return new gm(s,b,p,y).recalculateAndSaveOverlaysForDocumentKeys(new Fa(t,Ze.oe),l).next()})})}}function Nh(n){n.createObjectStore("targetDocuments",{keyPath:RI}).createIndex("documentTargetsIndex",SI,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",AI,{unique:!0}),n.createObjectStore("targetGlobal")}const wa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Mc{constructor(e,t,r,s,i,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=y=>Promise.resolve(),!Mc.D())throw new M(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new qw(this,s),this.Ai=t+"main",this.serializer=new om(l),this.Ri=new sn(this.Ai,this.hi,new nE(this.serializer)),this.$r=new kw,this.Ur=new Bw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=pm(this.serializer),this.Gr=new xw,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&Re("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(k.FAILED_PRECONDITION,wa);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Ze(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ki(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(pn(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ls(e).get("owner").next(t=>S.resolve(this.vi(t)))}Ci(e){return ki(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ve(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return S.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?S.resolve(!0):ls(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new M(k.FAILED_PRECONDITION,wa);return!1}}return!(!this.networkEnabled||!this.inForeground)||ki(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Fa(e,Ze.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>ki(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Mo.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Fw(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Oo.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?FI:l===16?MI:l===15?Ec:l===14?_f:l===13?gf:l===12?OI:l===11?pf:void U()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new Fa(c,this.Qr?this.Qr.next():Ze.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Re(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new M(k.FAILED_PRECONDITION,uf);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return ls(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new M(k.FAILED_PRECONDITION,wa)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ls(e).put("owner",t)}static D(){return sn.D()}bi(e){const t=ls(e);return t.get("owner").next(r=>this.vi(r)?(V("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):S.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Re(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;hd()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Re("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Re("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ls(n){return Ve(n,"owner")}function ki(n){return Ve(n,"clientMetadata")}function ym(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ee(),s=ee();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fc(e,t.fromCache,r,s)}}/**
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
 */class rE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hd()?8:df(De())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new rE;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(hr()<=ne.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",dr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(hr()<=ne.DEBUG&&V("QueryEngine","Query:",dr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(hr()<=ne.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",dr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ot(t))):S.resolve())}Yi(e,t){if(oh(t))return S.resolve(null);let r=ot(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=qa(t,null,"F"),r=ot(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ee(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,qa(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return oh(t)||s.isEqual(K.min())?S.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?S.resolve(null):(hr()<=ne.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dr(t)),this.rs(e,o,t,cf(s,-1)).next(c=>c))})}ts(e,t){let r=new he(Vf(e));return t.forEach((s,i)=>{Zs(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return hr()<=ne.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",dr(t)),this.Ji.getDocumentsMatchingQuery(e,t,at.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new pe(J),this._s=new gn(i=>Gn(i),Ys),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Im(n,e,t,r){return new sE(n,e,t,r)}async function wm(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ee();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function iE(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,y=p.keys();let b=S.resolve();return y.forEach(C=>{b=b.next(()=>f.getEntry(l,C)).next(D=>{const x=h.docVersions.get(C);z(x!==null),D.version.compareTo(x)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Em(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function oE(n,e){const t=$(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const y=s.get(p);if(!y)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let b=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Pe.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(p,b),function(D,x,B){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(y,b,f)&&c.push(t.Ur.updateTargetData(i,b))});let l=st(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(aE(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(K.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return S.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function aE(n,e,t){let r=ee(),s=ee();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=st();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(K.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function cE(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function go(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new xt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Cr(n,e,t){const r=$(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!pn(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ya(n,e,t){const r=$(n);let s=K.min(),i=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=$(l),y=p._s.get(f);return y!==void 0?S.resolve(p.os.get(y)):p.Ur.getTargetData(h,f)}(r,o,ot(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:K.min(),t?i:ee())).next(c=>(Am(r,Df(e),c),{documents:c,Ts:i})))}function Tm(n,e){const t=$(n),r=$(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function bm(n,e){const t=$(n),r=t.us.get(e)||K.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,cf(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Am(t,e,s),s))}function Am(n,e,t){let r=n.us.get(e)||K.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function Lh(n,e){return`firestore_clients_${n}_${e}`}function Oh(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ea(n,e){return`firestore_targets_${n}_${e}`}class _o{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new M(s.error.code,s.error.message))),o?new _o(e,t,s.state,i):(Re("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rs{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new M(r.error.code,r.error.message))),i?new Rs(e,r.state,s):(Re("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class yo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Sc();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=ff(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new yo(e,i):(Re("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Bc{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Bc(t.clientId,t.onlineState):(Re("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Za{constructor(){this.activeTargetIds=Sc()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ta{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new pe(J),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Lh(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Za),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(Lh(this.persistenceKey,r));if(s){const i=yo.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Ea(this.persistenceKey,e));if(s){const i=Rs.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ea(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V("SharedClientState","READ",e,t),t}setItem(e,t){V("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(V("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Re("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=Ze.oe;if(i!=null)try{const c=JSON.parse(i);z(typeof c=="number"),o=c}catch(c){Re("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==Ze.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new _o(this.currentUser,e,t,r),i=Oh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=Oh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=Ea(this.persistenceKey,e),i=new Rs(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return yo.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return _o.Rs(new je(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return Rs.Rs(s,t)}Ls(e){return Bc.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Sc();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Rm{constructor(){this.so=new Za,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Za,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Di=null;function ba(){return Di===null?Di=function(){return 268435456+Math.round(2147483648*Math.random())}():Di++,"0x"+Di.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection";class dE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=ba(),l=this.xo(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Vs("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Or}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=uE[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=ba();return new Promise((o,c)=>{const l=new ef;l.setWithCredentials(!0),l.listenOnce(tf.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bi.NO_ERROR:const f=l.getResponseJson();V($e,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Bi.TIMEOUT:V($e,`RPC '${e}' ${i} timed out`),c(new M(k.DEADLINE_EXCEEDED,"Request time out"));break;case Bi.HTTP_ERROR:const p=l.getStatus();if(V($e,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const b=y==null?void 0:y.error;if(b&&b.status&&b.message){const C=function(x){const B=x.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(B)>=0?B:k.UNKNOWN}(b.status);c(new M(C,b.message))}else c(new M(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new M(k.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{V($e,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);V($e,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=ba(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sf(),c=rf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");V($e,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let y=!1,b=!1;const C=new hE({Io:x=>{b?V($e,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(y||(V($e,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),V($e,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},To:()=>p.close()}),D=(x,B,F)=>{x.listen(B,O=>{try{F(O)}catch(q){setTimeout(()=>{throw q},0)}})};return D(p,ms.EventType.OPEN,()=>{b||(V($e,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),D(p,ms.EventType.CLOSE,()=>{b||(b=!0,V($e,`RPC '${e}' stream ${s} transport closed`),C.So())}),D(p,ms.EventType.ERROR,x=>{b||(b=!0,Vs($e,`RPC '${e}' stream ${s} transport errored:`,x),C.So(new M(k.UNAVAILABLE,"The operation could not be completed")))}),D(p,ms.EventType.MESSAGE,x=>{var B;if(!b){const F=x.data[0];z(!!F);const O=F,q=O.error||((B=O[0])===null||B===void 0?void 0:B.error);if(q){V($e,`RPC '${e}' stream ${s} received error:`,q);const Z=q.status;let Q=function(I){const w=xe[I];if(w!==void 0)return Kf(w)}(Z),E=q.message;Q===void 0&&(Q=k.INTERNAL,E="Unknown error status: "+Z+" with message "+q.message),b=!0,C.So(new M(Q,E)),p.close()}else V($e,`RPC '${e}' stream ${s} received:`,F),C.bo(F)}}),D(c,nf.STAT_EVENT,x=>{x.stat===Oa.PROXY?V($e,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Oa.NOPROXY&&V($e,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Sm(){return typeof window<"u"?window:null}function Ki(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(n){return new vw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Pm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Re(t.toString()),Re("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new M(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fE extends Cm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Ew(this.serializer,e),r=function(i){if(!("targetChange"in i))return K.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?Qe(o.readTime):K.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ha(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=co(l)?{documents:em(i,l)}:{query:tm(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Qf(i,o.resumeToken);const h=Ga(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(K.min())>0){c.readTime=Pr(i,o.snapshotVersion.toTimestamp());const h=Ga(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=bw(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ha(this.serializer),t.removeTarget=e,this.a_(t)}}class mE extends Cm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return z(!!e.streamToken),this.lastStreamToken=e.streamToken,z(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Tw(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ha(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ho(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Ka(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(k.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Ka(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(k.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Re(t),this.D_=!1):V("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Zn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=$(l);h.L_.add(4),await ni(h),h.q_.set("Unknown"),h.L_.delete(4),await Uo(h)}(this))})}),this.q_=new gE(r,s)}}async function Uo(n){if(Zn(n))for(const e of n.B_)await e(!0)}async function ni(n){for(const e of n.B_)await e(!1)}function $o(n,e){const t=$(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),jc(t)?$c(t):Br(t).r_()&&Uc(t,e))}function xr(n,e){const t=$(n),r=Br(t);t.N_.delete(e),r.r_()&&xm(t,e),t.N_.size===0&&(r.r_()?r.o_():Zn(t)&&t.q_.set("Unknown"))}function Uc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Br(n).A_(e)}function xm(n,e){n.Q_.xe(e),Br(n).R_(e)}function $c(n){n.Q_=new pw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Br(n).start(),n.q_.v_()}function jc(n){return Zn(n)&&!Br(n).n_()&&n.N_.size>0}function Zn(n){return $(n).L_.size===0}function km(n){n.Q_=void 0}async function yE(n){n.q_.set("Online")}async function vE(n){n.N_.forEach((e,t)=>{Uc(n,e)})}async function IE(n,e){km(n),jc(n)?(n.q_.M_(e),$c(n)):n.q_.set("Unknown")}async function wE(n,e,t){if(n.q_.set("Online"),e instanceof Wf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vo(n,r)}else if(e instanceof Gi?n.Q_.Ke(e):e instanceof Hf?n.Q_.He(e):n.Q_.We(e),!t.isEqual(K.min()))try{const r=await Em(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Pe.EMPTY_BYTE_STRING,f.snapshotVersion)),xm(i,l);const p=new xt(f.target,l,h,f.sequenceNumber);Uc(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await vo(n,r)}}async function vo(n,e,t){if(!pn(e))throw e;n.L_.add(1),await ni(n),n.q_.set("Offline"),t||(t=()=>Em(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Uo(n)})}function Dm(n,e){return e().catch(t=>vo(n,t,e))}async function Fr(n){const e=$(n),t=dn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;EE(e);)try{const s=await cE(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,TE(e,s)}catch(s){await vo(e,s)}Vm(e)&&Nm(e)}function EE(n){return Zn(n)&&n.O_.length<10}function TE(n,e){n.O_.push(e);const t=dn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Vm(n){return Zn(n)&&!dn(n).n_()&&n.O_.length>0}function Nm(n){dn(n).start()}async function bE(n){dn(n).p_()}async function AE(n){const e=dn(n);for(const t of n.O_)e.m_(t.mutations)}async function RE(n,e,t){const r=n.O_.shift(),s=xc.from(r,e,t);await Dm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Fr(n)}async function SE(n,e){e&&dn(n).V_&&await async function(r,s){if(function(o){return dw(o)&&o!==k.ABORTED}(s.code)){const i=r.O_.shift();dn(r).s_(),await Dm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fr(r)}}(n,e),Vm(n)&&Nm(n)}async function Fh(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Zn(t);t.L_.add(3),await ni(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Uo(t)}async function ec(n,e){const t=$(n);e?(t.L_.delete(2),await Uo(t)):e||(t.L_.add(2),await ni(t),t.q_.set("Unknown"))}function Br(n){return n.K_||(n.K_=function(t,r,s){const i=$(t);return i.w_(),new fE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:yE.bind(null,n),Ro:vE.bind(null,n),mo:IE.bind(null,n),d_:wE.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),jc(n)?$c(n):n.q_.set("Unknown")):(await n.K_.stop(),km(n))})),n.K_}function dn(n){return n.U_||(n.U_=function(t,r,s){const i=$(t);return i.w_(),new mE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:bE.bind(null,n),mo:SE.bind(null,n),f_:AE.bind(null,n),g_:RE.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Fr(n)):(await n.U_.stop(),n.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new zc(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qc(n,e){if(Re("AsyncQueue",`${e}: ${n}`),pn(n))return new M(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=ps(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Ir(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ir)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ir;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.W_=new pe(L.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):U():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class kr{constructor(e,t,r,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new kr(e,t,Ir.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Do(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class CE{constructor(){this.queries=Uh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=Uh(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new M(k.ABORTED,"Firestore shutting down"))}}function Uh(){return new gn(n=>kf(n),Do)}async function Lm(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new PE,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=qc(o,`Initialization of query '${dr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Gc(t)}async function Om(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function xE(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Gc(t)}function kE(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Gc(n){n.Y_.forEach(e=>{e.next()})}var tc,$h;($h=tc||(tc={})).ea="default",$h.Cache="cache";class Mm{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new kr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==tc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.key=e}}class Bm{constructor(e){this.key=e}}class DE{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=Vf(e),this.Ra=new Ir(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Bh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const y=s.get(f),b=Zs(this.query,p)?p:null,C=!!y&&this.mutatedKeys.has(y.key),D=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let x=!1;y&&b?y.data.isEqual(b.data)?C!==D&&(r.track({type:3,doc:b}),x=!0):this.ga(y,b)||(r.track({type:2,doc:b}),x=!0,(l&&this.Aa(b,l)>0||h&&this.Aa(b,h)<0)&&(c=!0)):!y&&b?(r.track({type:0,doc:b}),x=!0):y&&!b&&(r.track({type:1,doc:y}),x=!0,(l||h)&&(c=!0)),x&&(b?(o=o.add(b),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(b,C){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return D(b)-D(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new kr(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Bh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Bm(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Fm(r))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return kr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class VE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class NE{constructor(e){this.key=e,this.va=!1}}class LE{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new gn(c=>kf(c),Do),this.Ma=new Map,this.xa=new Set,this.Oa=new pe(L.comparator),this.Na=new Map,this.La=new Oc,this.Ba={},this.ka=new Map,this.qa=Wn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function OE(n,e,t=!0){const r=jo(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Um(r,e,t,!0),s}async function ME(n,e){const t=jo(n);await Um(t,e,!0,!1)}async function Um(n,e,t,r){const s=await go(n.localStore,ot(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Kc(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&$o(n.remoteStore,s),c}async function Kc(n,e,t,r,s){n.Ka=(p,y,b)=>async function(D,x,B,F){let O=x.view.ma(B);O.ns&&(O=await Ya(D.localStore,x.query,!1).then(({documents:E})=>x.view.ma(E,O)));const q=F&&F.targetChanges.get(x.targetId),Z=F&&F.targetMismatches.get(x.targetId)!=null,Q=x.view.applyChanges(O,D.isPrimaryClient,q,Z);return nc(D,x.targetId,Q.wa),Q.snapshot}(n,p,y,b);const i=await Ya(n.localStore,e,!0),o=new DE(e,i.Ts),c=o.ma(i.documents),l=ti.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);nc(n,t,h.wa);const f=new VE(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function FE(n,e,t){const r=$(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Do(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cr(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&xr(r.remoteStore,s.targetId),Dr(r,s.targetId)}).catch(mn)):(Dr(r,s.targetId),await Cr(r.localStore,s.targetId,!0))}async function BE(n,e){const t=$(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xr(t.remoteStore,r.targetId))}async function UE(n,e,t){const r=Jc(n);try{const s=await function(o,c){const l=$(o),h=Ie.now(),f=c.reduce((b,C)=>b.add(C.key),ee());let p,y;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let C=st(),D=ee();return l.cs.getEntries(b,f).next(x=>{C=x,C.forEach((B,F)=>{F.isValidDocument()||(D=D.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,C)).next(x=>{p=x;const B=[];for(const F of c){const O=uw(F,p.get(F.key).overlayedDocument);O!=null&&B.push(new Bt(F.key,O,Ef(O.value.mapValue),qe.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,B,c)}).next(x=>{y=x;const B=x.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(b,x.batchId,B)})}).then(()=>({batchId:y.batchId,changes:Lf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new pe(J)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,t),await _n(r,s.changes),await Fr(r.remoteStore)}catch(s){const i=qc(s,"Failed to persist write");t.reject(i)}}async function $m(n,e){const t=$(n);try{const r=await oE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?z(o.va):s.removedDocuments.size>0&&(z(o.va),o.va=!1))}),await _n(t,r,e)}catch(r){await mn(r)}}function jh(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=$(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const y of p.j_)y.Z_(c)&&(h=!0)}),h&&Gc(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $E(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new pe(L.comparator);o=o.insert(i,Te.newNoDocument(i,K.min()));const c=ee().add(i),l=new ei(K.min(),new Map,new pe(J),o,c);await $m(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Qc(r)}else await Cr(r.localStore,e,!1).then(()=>Dr(r,e,t)).catch(mn)}async function jE(n,e){const t=$(n),r=e.batch.batchId;try{const s=await iE(t.localStore,e);Wc(t,r,null),Hc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await _n(t,s)}catch(s){await mn(s)}}async function zE(n,e,t){const r=$(n);try{const s=await function(o,c){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(z(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Wc(r,e,t),Hc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await _n(r,s)}catch(s){await mn(s)}}function Hc(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Wc(n,e,t){const r=$(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Dr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||jm(n,r)})}function jm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(xr(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Qc(n))}function nc(n,e,t){for(const r of t)r instanceof Fm?(n.La.addReference(r.key,e),qE(n,r)):r instanceof Bm?(V("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||jm(n,r.key)):U()}function qE(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(V("SyncEngine","New document in limbo: "+t),n.xa.add(r),Qc(n))}function Qc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new L(le.fromString(e)),r=n.qa.next();n.Na.set(r,new NE(t)),n.Oa=n.Oa.insert(t,r),$o(n.remoteStore,new xt(ot(ko(t.path)),r,"TargetPurposeLimboResolution",Ze.oe))}}async function _n(n,e,t){const r=$(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Fc.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=$(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>S.forEach(h,y=>S.forEach(y.$i,b=>f.persistence.referenceDelegate.addReference(p,y.targetId,b)).next(()=>S.forEach(y.Ui,b=>f.persistence.referenceDelegate.removeReference(p,y.targetId,b)))))}catch(p){if(!pn(p))throw p;V("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const b=f.os.get(y),C=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(y,D)}}}(r.localStore,i))}async function GE(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await wm(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new M(k.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _n(t,r.hs)}}function KE(n,e){const t=$(n),r=t.Na.get(e);if(r&&r.va)return ee().add(r.key);{let s=ee();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function HE(n,e){const t=$(n),r=await Ya(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&nc(t,e.targetId,s.wa),s}async function WE(n,e){const t=$(n);return bm(t.localStore,e).then(r=>_n(t,r))}async function QE(n,e,t,r){const s=$(n),i=await function(c,l){const h=$(c),f=$(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,l).next(y=>y?h.localDocuments.getDocuments(p,y):S.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Fr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Wc(s,e,r||null),Hc(s,e),function(c,l){$($(c).mutationQueue).On(l)}(s.localStore,e)):U(),await _n(s,i)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function JE(n,e){const t=$(n);if(jo(t),Jc(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await zh(t,r.toArray());t.Qa=!0,await ec(t.remoteStore,!0);for(const i of s)$o(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Dr(t,o),Cr(t.localStore,o,!0))),xr(t.remoteStore,o)}),await s,await zh(t,r),function(o){const c=$(o);c.Na.forEach((l,h)=>{xr(c.remoteStore,h)}),c.La.pr(),c.Na=new Map,c.Oa=new pe(L.comparator)}(t),t.Qa=!1,await ec(t.remoteStore,!1)}}async function zh(n,e,t){const r=$(n),s=[],i=[];for(const o of e){let c;const l=r.Ma.get(o);if(l&&l.length!==0){c=await go(r.localStore,ot(l[0]));for(const h of l){const f=r.Fa.get(h),p=await HE(r,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await Tm(r.localStore,o);c=await go(r.localStore,h),await Kc(r,zm(h),o,!1,c.resumeToken)}s.push(c)}return r.Ca.d_(i),s}function zm(n){return xf(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function XE(n){return function(t){return $($(t).persistence).Qi()}($(n).localStore)}async function YE(n,e,t,r){const s=$(n);if(s.Qa)return void V("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await bm(s.localStore,Df(i[0])),c=ei.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Pe.EMPTY_BYTE_STRING);await _n(s,o,c);break}case"rejected":await Cr(s.localStore,e,!0),Dr(s,e,r);break;default:U()}}async function ZE(n,e,t){const r=jo(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){V("SyncEngine","Adding an already active target "+s);continue}const i=await Tm(r.localStore,s),o=await go(r.localStore,i);await Kc(r,zm(i),o.targetId,!1,o.resumeToken),$o(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await Cr(r.localStore,s,!1).then(()=>{xr(r.remoteStore,s),Dr(r,s)}).catch(mn)}}function jo(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$m.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$E.bind(null,e),e.Ca.d_=xE.bind(null,e.eventManager),e.Ca.$a=kE.bind(null,e.eventManager),e}function Jc(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zE.bind(null,e),e}class $s{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Im(this.persistence,new vm,e.initialUser,this.serializer)}Ga(e){return new _m(Fo.Zr,this.serializer)}Wa(e){return new Rm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$s.provider={build:()=>new $s};class qm extends $s{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Jc(this.Ja.syncEngine),await Fr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Im(this.persistence,new vm,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new $w(r,e.asyncQueue,t)}Ha(e,t){const r=new vI(t,this.persistence);return new yI(e.asyncQueue,r)}Ga(e){const t=ym(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new Mc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Sm(),Ki(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Rm}}class eT extends qm{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Ta&&(this.sharedClientState.syncEngine={no:QE.bind(null,t),ro:YE.bind(null,t),io:ZE.bind(null,t),Qi:XE.bind(null,t),eo:WE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await JE(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Sm();if(!Ta.D(t))throw new M(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ym(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ta(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class js{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GE.bind(null,this.syncEngine),await ec(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CE}()}createDatastore(e){const t=Bo(e.databaseInfo.databaseId),r=function(i){return new dE(i)}(e.databaseInfo);return function(i,o,c,l){return new pE(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new _E(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>jh(this.syncEngine,t,0),function(){return Mh.D()?new Mh:new lE}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new LE(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=$(s);V("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ni(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}js.provider={build:()=>new js};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Re("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=je.UNAUTHENTICATED,this.clientId=of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Aa(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function qh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nT(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Fh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Fh(e.remoteStore,s)),n._onlineComponents=e}async function nT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Aa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Vs("Error using user provided cache. Falling back to memory cache: "+t),await Aa(n,new $s)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Aa(n,new $s);return n._offlineComponents}async function Km(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await qh(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await qh(n,new js))),n._onlineComponents}function rT(n){return Km(n).then(e=>e.syncEngine)}async function Hm(n){const e=await Km(n),t=e.eventManager;return t.onListen=OE.bind(null,e.syncEngine),t.onUnlisten=FE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ME.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=BE.bind(null,e.syncEngine),t}function sT(n,e,t={}){const r=new wt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new Gm({next:y=>{f.Za(),o.enqueueAndForget(()=>Om(i,p));const b=y.docs.has(c);!b&&y.fromCache?h.reject(new M(k.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&y.fromCache&&l&&l.source==="server"?h.reject(new M(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Mm(ko(c.path),f,{includeMetadataChanges:!0,_a:!0});return Lm(i,p)}(await Hm(n),n.asyncQueue,e,t,r)),r.promise}function iT(n,e,t={}){const r=new wt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new Gm({next:y=>{f.Za(),o.enqueueAndForget(()=>Om(i,p)),y.fromCache&&l.source==="server"?h.reject(new M(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Mm(c,f,{includeMetadataChanges:!0,_a:!0});return Lm(i,p)}(await Hm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Wm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(n,e,t){if(!t)throw new M(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oT(n,e,t,r){if(e===!0&&r===!0)throw new M(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kh(n){if(!L.isDocumentKey(n))throw new M(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hh(n){if(L.isDocumentKey(n))throw new M(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function Tt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xc(n);throw new M(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cI;switch(r.type){case"firstParty":return new hI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Gh.get(t);r&&(V("ComponentProvider","Removing Datastore"),Gh.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zo(this.firestore,e,this._query)}}class nt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new on(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class on extends zo{constructor(e,t,r){super(e,t,ko(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new L(e))}withConverter(e){return new on(this.firestore,e,this._path)}}function an(n,e,...t){if(n=Se(n),Qm("collection","path",e),n instanceof Yc){const r=le.fromString(e,...t);return Hh(r),new on(n,null,r)}{if(!(n instanceof nt||n instanceof on))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Hh(r),new on(n.firestore,null,r)}}function ce(n,e,...t){if(n=Se(n),arguments.length===1&&(e=of.newId()),Qm("doc","path",e),n instanceof Yc){const r=le.fromString(e,...t);return Kh(r),new nt(n,null,new L(r))}{if(!(n instanceof nt||n instanceof on))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Kh(r),new nt(n.firestore,n instanceof on?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Pm(this,"async_queue_retry"),this.Vu=()=>{const r=Ki();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ki();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ki();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new wt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!pn(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Re("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=zc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&U()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class er extends Yc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Qh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qh(e),this._firestoreClient=void 0,await e}}}function aT(n,e,t){t||(t="(default)");const r=To(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Cs(i,e))return s;throw new M(k.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new M(k.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function Zc(n){if(n._terminated)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||cT(n),n._firestoreClient}function cT(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,h,f){return new UI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Wm(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new tT(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vr(Pe.fromBase64String(e))}catch(t){throw new M(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vr(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */class tl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=/^__.*__$/;class uT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mr(e,this.data,t,this.fieldTransforms)}}class Jm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class nl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new nl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Io(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Xm(this.Cu)&&lT.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class hT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Bo(e)}Qu(e,t,r,s=!1){return new nl({Cu:e,methodName:t,qu:r,path:ve.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rl(n){const e=n._freezeSettings(),t=Bo(n._databaseId);return new hT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ym(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);il("Data must be an object, but it was:",o,r);const c=Zm(r,o);let l,h;if(i.merge)l=new et(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const y=rc(e,p,t);if(!o.contains(y))throw new M(k.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);tp(f,y)||f.push(y)}l=new et(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new uT(new ze(c),l,h)}class Ko extends Go{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ko}}class sl extends Go{_toFieldTransform(e){return new jf(e.path,new Ar)}isEqual(e){return e instanceof sl}}function dT(n,e,t,r){const s=n.Qu(1,e,t);il("Data must be an object, but it was:",s,r);const i=[],o=ze.empty();Yn(r,(l,h)=>{const f=ol(e,l,t);h=Se(h);const p=s.Nu(f);if(h instanceof Ko)i.push(f);else{const y=Ho(h,p);y!=null&&(i.push(f),o.set(f,y))}});const c=new et(i);return new Jm(o,c,s.fieldTransforms)}function fT(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[rc(e,r,t)],l=[s];if(i.length%2!=0)throw new M(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)c.push(rc(e,i[y])),l.push(i[y+1]);const h=[],f=ze.empty();for(let y=c.length-1;y>=0;--y)if(!tp(h,c[y])){const b=c[y];let C=l[y];C=Se(C);const D=o.Nu(b);if(C instanceof Ko)h.push(b);else{const x=Ho(C,D);x!=null&&(h.push(b),f.set(b,x))}}const p=new et(h);return new Jm(f,p,o.fieldTransforms)}function Ho(n,e){if(ep(n=Se(n)))return il("Unsupported field value:",e,n),Zm(n,e);if(n instanceof Go)return function(r,s){if(!Xm(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ho(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ie.fromDate(r);return{timestampValue:Pr(s.serializer,i)}}if(r instanceof Ie){const i=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pr(s.serializer,i)}}if(r instanceof el)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vr)return{bytesValue:Qf(s.serializer,r._byteString)};if(r instanceof nt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tl)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Pc(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Xc(r)}`)}(n,e)}function Zm(n,e){const t={};return yf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yn(n,(r,s)=>{const i=Ho(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function ep(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ie||n instanceof el||n instanceof Vr||n instanceof nt||n instanceof Go||n instanceof tl)}function il(n,e,t){if(!ep(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Xc(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function rc(n,e,t){if((e=Se(e))instanceof qo)return e._internalPath;if(typeof e=="string")return ol(n,e);throw Io("Field path arguments must be of type string or ",n,!1,void 0,t)}const mT=new RegExp("[~\\*/\\[\\]]");function ol(n,e,t){if(e.search(mT)>=0)throw Io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qo(...e.split("."))._internalPath}catch{throw Io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Io(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new M(k.INVALID_ARGUMENT,c+n+l)}function tp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class pT extends np{data(){return super.data()}}function rp(n,e){return typeof e=="string"?ol(n,e):e instanceof qo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _T{convertValue(e,t="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ye(o.doubleValue));return new tl(i)}convertGeoPoint(e){return new el(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=bc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ms(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new Ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);z(im(r));const s=new zn(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(t)||Re(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ip extends np{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(rp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Hi extends ip{data(e={}){return super.data(e)}}class yT{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Hi(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Hi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Hi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:vT(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function vT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n){n=Tt(n,nt);const e=Tt(n.firestore,er);return sT(Zc(e),n._key).then(t=>wT(e,n,t))}class op extends _T{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,t)}}function Ln(n){n=Tt(n,zo);const e=Tt(n.firestore,er),t=Zc(e),r=new op(e);return gT(n._query),iT(t,n._query).then(s=>new yT(e,r,n,s))}function Nr(n,e,t){n=Tt(n,nt);const r=Tt(n.firestore,er),s=sp(n.converter,e);return Wo(r,[Ym(rl(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,qe.none())])}function ft(n,e,t,...r){n=Tt(n,nt);const s=Tt(n.firestore,er),i=rl(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof qo?fT(i,"updateDoc",n._key,e,t,r):dT(i,"updateDoc",n._key,e),Wo(s,[o.toMutation(n._key,qe.exists(!0))])}function kt(n){return Wo(Tt(n.firestore,er),[new Lo(n._key,qe.none())])}function IT(n,e){const t=Tt(n.firestore,er),r=ce(n),s=sp(n.converter,e);return Wo(t,[Ym(rl(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,qe.exists(!1))]).then(()=>r)}function Wo(n,e){return function(r,s){const i=new wt;return r.asyncQueue.enqueueAndForget(async()=>UE(await rT(r),s,i)),i.promise}(Zc(n),e)}function wT(n,e,t){const r=t.docs.get(e._key),s=new op(n);return new ip(n,s,e._key,r,new ys(t.hasPendingWrites,t.fromCache),e.converter)}class ET{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=RT(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function TT(n){return new ET(n)}class bT{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=js.provider,this._offlineComponentProvider={build:t=>new qm(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class AT{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=js.provider,this._offlineComponentProvider={build:t=>new eT(t,e==null?void 0:e.cacheSizeBytes)}}}function RT(n){return new bT(void 0)}function ST(){return new AT}function zs(){return new sl("serverTimestamp")}(function(e,t=!0){(function(s){Or=s})(Xn),Bn(new ln("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new er(new lI(r.getProvider("auth-internal")),new fI(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new M(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),yt(qu,"4.7.3",e),yt(qu,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="firebasestorage.googleapis.com",cp="storageBucket",PT=2*60*1e3,CT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends bt{constructor(e,t,r=0){super(Ra(e),`Firebase Storage: ${t} (${Ra(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ra(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function Ra(n){return"storage/"+n}function al(){const n="An unknown error occurred, please check the error payload for server response.";return new Ae(be.UNKNOWN,n)}function xT(n){return new Ae(be.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function kT(n){return new Ae(be.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function DT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ae(be.UNAUTHENTICATED,n)}function VT(){return new Ae(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NT(n){return new Ae(be.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function LT(){return new Ae(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OT(){return new Ae(be.CANCELED,"User canceled the upload/download.")}function MT(n){return new Ae(be.INVALID_URL,"Invalid URL '"+n+"'.")}function FT(n){return new Ae(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function BT(){return new Ae(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cp+"' property when initializing the app?")}function UT(){return new Ae(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $T(){return new Ae(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jT(n){return new Ae(be.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sc(n){return new Ae(be.INVALID_ARGUMENT,n)}function lp(){return new Ae(be.APP_DELETED,"The Firebase app was deleted.")}function zT(n){return new Ae(be.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ss(n,e){return new Ae(be.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function us(n){throw new Ae(be.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=it.makeFromUrl(e,t)}catch{return new it(e,"")}if(r.path==="")return r;throw FT(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(q){q.path_=decodeURIComponent(q.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",b=new RegExp(`^https?://${p}/${f}/b/${s}/o${y}`,"i"),C={bucket:1,path:3},D=t===ap?"(?:storage.googleapis.com|storage.cloud.google.com)":t,x="([^?#]*)",B=new RegExp(`^https?://${D}/${s}/${x}`,"i"),O=[{regex:c,indices:l,postModify:i},{regex:b,indices:C,postModify:h},{regex:B,indices:{bucket:1,path:2},postModify:h}];for(let q=0;q<O.length;q++){const Z=O[q],Q=Z.regex.exec(e);if(Q){const E=Q[Z.indices.bucket];let _=Q[Z.indices.path];_||(_=""),r=new it(E,_),Z.postModify(r);break}}if(r==null)throw MT(e);return r}}class qT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...x){h||(h=!0,e.apply(null,x))}function p(x){s=setTimeout(()=>{s=null,n(b,l())},x)}function y(){i&&clearTimeout(i)}function b(x,...B){if(h){y();return}if(x){y(),f.call(null,x,...B);return}if(l()||o){y(),f.call(null,x,...B);return}r<64&&(r*=2);let O;c===1?(c=2,O=0):O=(r+Math.random())*1e3,p(O)}let C=!1;function D(x){C||(C=!0,y(),!h&&(s!==null?(x||(c=2),clearTimeout(s),p(0)):x||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},t),D}function KT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(n){return n!==void 0}function WT(n){return typeof n=="object"&&!Array.isArray(n)}function cl(n){return typeof n=="string"||n instanceof String}function Jh(n){return ll()&&n instanceof Blob}function ll(){return typeof Blob<"u"}function Xh(n,e,t,r){if(r<e)throw sc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw sc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function up(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var On;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(On||(On={}));/**
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
 */function QT(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,t,r,s,i,o,c,l,h,f,p,y=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,C)=>{this.resolve_=b,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Vi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===On.NO_ERROR,l=i.getStatus();if(!c||QT(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===On.ABORT;r(!1,new Vi(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new Vi(h,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());HT(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=al();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?lp():OT();o(l)}else{const l=LT();o(l)}};this.canceled_?t(!1,new Vi(!1,null,!0)):this.backoffId_=GT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function XT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function YT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function eb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function tb(n,e,t,r,s,i,o=!0){const c=up(n.urlParams),l=n.url+c,h=Object.assign({},n.headers);return ZT(h,e),XT(h,t),YT(h,i),eb(h,r),new JT(l,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rb(...n){const e=nb();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ll())return new Blob(n);throw new Ae(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sb(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function ib(n){if(typeof atob>"u")throw jT("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sa{constructor(e,t){this.data=e,this.contentType=t||null}}function hp(n,e){switch(n){case ht.RAW:return new Sa(dp(e));case ht.BASE64:case ht.BASE64URL:return new Sa(fp(n,e));case ht.DATA_URL:return new Sa(ab(e),cb(e))}throw al()}function dp(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ob(n){let e;try{e=decodeURIComponent(n)}catch{throw Ss(ht.DATA_URL,"Malformed data URL.")}return dp(e)}function fp(n,e){switch(n){case ht.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ss(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ht.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ss(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=ib(e)}catch(s){throw s.message.includes("polyfill")?s:Ss(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class mp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ss(ht.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=lb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ab(n){const e=new mp(n);return e.base64?fp(ht.BASE64,e.rest):ob(e.rest)}function cb(n){return new mp(n).contentType}function lb(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){let r=0,s="";Jh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Jh(this.data_)){const r=this.data_,s=sb(r,e,t);return s===null?null:new en(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new en(r,!0)}}static getBlob(...e){if(ll()){const t=e.map(r=>r instanceof en?r.data_:r);return new en(rb.apply(null,t))}else{const t=e.map(o=>cl(o)?hp(ht.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new en(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n){let e;try{e=JSON.parse(n)}catch{return null}return WT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function hb(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function gp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(n,e){return e}class He{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||db}}let Ni=null;function fb(n){return!cl(n)||n.length<2?n:gp(n)}function _p(){if(Ni)return Ni;const n=[];n.push(new He("bucket")),n.push(new He("generation")),n.push(new He("metageneration")),n.push(new He("name","fullPath",!0));function e(i,o){return fb(o)}const t=new He("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new He("size");return s.xform=r,n.push(s),n.push(new He("timeCreated")),n.push(new He("updated")),n.push(new He("md5Hash",null,!0)),n.push(new He("cacheControl",null,!0)),n.push(new He("contentDisposition",null,!0)),n.push(new He("contentEncoding",null,!0)),n.push(new He("contentLanguage",null,!0)),n.push(new He("contentType",null,!0)),n.push(new He("metadata","customMetadata",!0)),Ni=n,Ni}function mb(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new it(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function pb(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return mb(r,n),r}function yp(n,e,t){const r=pp(e);return r===null?null:pb(n,r,t)}function gb(n,e,t,r){const s=pp(e);if(s===null||!cl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=n.bucket,p=n.fullPath,y="/b/"+o(f)+"/o/"+o(p),b=ul(y,t,r),C=up({alt:"media",token:h});return b+C})[0]}function _b(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class vp{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n){if(!n)throw al()}function yb(n,e){function t(r,s){const i=yp(n,s,e);return Ip(i!==null),i}return t}function vb(n,e){function t(r,s){const i=yp(n,s,e);return Ip(i!==null),gb(i,s,n.host,n._protocol)}return t}function wp(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=VT():s=DT():t.getStatus()===402?s=kT(n.bucket):t.getStatus()===403?s=NT(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Ib(n){const e=wp(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=xT(n.path)),i.serverResponse=s.serverResponse,i}return t}function wb(n,e,t){const r=e.fullServerUrl(),s=ul(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new vp(s,i,vb(n,t),o);return c.errorHandler=Ib(e),c}function Eb(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Tb(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=Eb(null,e)),r}function bb(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let O="";for(let q=0;q<2;q++)O=O+Math.random().toString().slice(2);return O}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=Tb(e,r,s),f=_b(h,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+l+"--",b=en.getBlob(p,r,y);if(b===null)throw UT();const C={name:h.fullPath},D=ul(i,n.host,n._protocol),x="POST",B=n.maxUploadRetryTime,F=new vp(D,x,yb(n,t),B);return F.urlParams=C,F.headers=o,F.body=b.uploadData(),F.errorHandler=wp(e),F}class Ab{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=On.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=On.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=On.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw us("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw us("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw us("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw us("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw us("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Rb extends Ab{initXhr(){this.xhr_.responseType="text"}}function Ep(){return new Rb}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t){this._service=e,t instanceof it?this._location=t:this._location=it.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Jn(e,t)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gp(this._location.path)}get storage(){return this._service}get parent(){const e=ub(this._location.path);if(e===null)return null;const t=new it(this._location.bucket,e);return new Jn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw zT(e)}}function Sb(n,e,t){n._throwIfRoot("uploadBytes");const r=bb(n.storage,n._location,_p(),new en(e,!0),t);return n.storage.makeRequestWithTokens(r,Ep).then(s=>({metadata:s,ref:n}))}function Pb(n,e,t=ht.RAW,r){n._throwIfRoot("uploadString");const s=hp(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),Sb(n,s.data,i)}function Cb(n){n._throwIfRoot("getDownloadURL");const e=wb(n.storage,n._location,_p());return n.storage.makeRequestWithTokens(e,Ep).then(t=>{if(t===null)throw $T();return t})}function xb(n,e){const t=hb(n._location.path,e),r=new it(n._location.bucket,t);return new Jn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(n){return/^[A-Za-z]+:\/\//.test(n)}function Db(n,e){return new Jn(n,e)}function Tp(n,e){if(n instanceof hl){const t=n;if(t._bucket==null)throw BT();const r=new Jn(t,t._bucket);return e!=null?Tp(r,e):r}else return e!==void 0?xb(n,e):n}function Vb(n,e){if(e&&kb(e)){if(n instanceof hl)return Db(n,e);throw sc("To use ref(service, url), the first argument must be a Storage instance.")}else return Tp(n,e)}function Yh(n,e){const t=e==null?void 0:e[cp];return t==null?null:it.makeFromBucketSpec(t,n)}function Nb(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:wg(s,n.app.options.projectId))}class hl{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ap,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PT,this._maxUploadRetryTime=CT,this._requests=new Set,s!=null?this._bucket=it.makeFromBucketSpec(s,this._host):this._bucket=Yh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=Yh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new qT(lp());{const o=tb(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Zh="@firebase/storage",ed="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="storage";function Ap(n,e,t,r){return n=Se(n),Pb(n,e,t,r)}function Rp(n){return n=Se(n),Cb(n)}function Sp(n,e){return n=Se(n),Vb(n,e)}function Lb(n=gd(),e){n=Se(n);const r=To(n,bp).getImmediate({identifier:e}),s=vg("storage");return s&&Ob(r,...s),r}function Ob(n,e,t,r={}){Nb(n,e,t,r)}function Mb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new hl(t,r,s,e,Xn)}function Fb(){Bn(new ln(bp,Mb,"PUBLIC").setMultipleInstances(!0)),yt(Zh,ed,""),yt(Zh,ed,"esm2017")}Fb();const Bb={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},dl=pd(Bb),ri=iI(dl),te=aT(dl,{localCache:TT({tabManager:ST()})}),Pp=Lb(dl);function me(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Fe(n,e="info"){const t=document.createElement("div");t.className=`toast toast-${e}`,t.textContent=n,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("toast-show")),setTimeout(()=>{t.classList.remove("toast-show"),setTimeout(()=>t.remove(),300)},3500)}const Cp="archery_v5",Ub="archery_v4";function td(){try{const n=JSON.parse(localStorage.getItem(Cp)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(Ub)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function cn(){try{localStorage.setItem(Cp,JSON.stringify({friends:g.friends,rounds:g.rounds.slice(0,200),courses:g.courses}))}catch(n){(n==null?void 0:n.name)==="QuotaExceededError"&&Fe("Lokalt lager er fuldt — nogle data blev ikke gemt","error")}}const $b=[11,10,8,5,"M"];function Vt(n){return n==="M"||n==null?0:Number(n)}function si(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":Number(t))):[]}function jb(n){return n.map(e=>e.map(t=>t??"M").join(",")).join(";")}function tt(n){return n.flat().reduce((e,t)=>e+Vt(t),0)}function zb(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(s=>s!=null).map(Vt));return t.length?(t.reduce((r,s)=>r+s,0)/t.length).toFixed(1):null}function qb(n){const e={11:0,10:0,8:0,5:0,M:0};return n.flat().forEach(t=>{t==="M"?e.M++:t!=null&&e[Number(t)]!==void 0&&e[Number(t)]++}),e}function fl(n){return n.length?n.reduce((e,t)=>tt(t.scores)>tt(e.scores)?t:e,n[0]):null}function Gb(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,s)=>r+Vt(s),0)/t.length<e:!1}function Kb(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function Hb(n,e){for(;n.scores.length<e;)n.scores.push([null,null])}function Wb(n,e){let t=0;for(let r=0;r<e;r++)n.every(s=>{const i=s.scores[r]||[null,null];return i[0]!=null&&i[1]!=null})&&t++;return t}function xp(n){return{name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:jb(e.scores)}))}}function Qb(n){return{...n,shooters:(n.shooters||[]).map(e=>({...e,scores:si(e.scores)}))}}let Wi=null,Qi=!1,Mn=!1,ic=[],Ps=null,vs=0,mt=null,oc=null,hs=null;function kp(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function ml(n,e){const r=(e.lat-n.lat)*Math.PI/180,s=(e.lng-n.lng)*Math.PI/180,i=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function Dp(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function Vp(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function Jb(n){return navigator.geolocation?(hs=n,ic=[],vs=0,mt=null,Ps=Date.now(),Mn=!1,Qi=!0,Wi=navigator.geolocation.watchPosition(e=>{if(!Qi||Mn)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};mt&&(vs+=ml(mt,t)),mt=t,ic.push(t),hs&&hs({lat:t.lat,lng:t.lng,distance:vs,elapsed:Math.round((Date.now()-Ps)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),oc=setInterval(()=>{Qi&&!Mn&&hs&&hs({lat:mt==null?void 0:mt.lat,lng:mt==null?void 0:mt.lng,distance:vs,elapsed:Math.round((Date.now()-Ps)/1e3)})},1e3),!0):!1}window.toggleGpsPause=function(){return Mn=!Mn,Mn};function Np(){return Qi=!1,Mn=!1,Wi!==null&&(navigator.geolocation.clearWatch(Wi),Wi=null),clearInterval(oc),oc=null,{route:ic.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round(vs),duration:Ps?Math.round((Date.now()-Ps)/1e3):0}}function Qo(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function Xb(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((s,i)=>{if(!s.gps)return;const o=ml(e,s.gps);o<t&&(t=o,r=i)}),r}const g={user:null,profile:null,isAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,currentCourse:null,courseMap:null,courseMapLayer:null,gpsTracking:!1,warnThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0};let Ji=null;async function Yb(){try{"wakeLock"in navigator&&(Ji=await navigator.wakeLock.request("screen"))}catch{}}function pl(){Ji&&(Ji.release(),Ji=null)}const Zb={"auth/user-not-found":"Bruger ikke fundet.","auth/wrong-password":"Forkert kodeord.","auth/invalid-credential":"Ugyldig email eller kodeord.","auth/email-already-in-use":"Email er allerede i brug.","auth/weak-password":"Kodeordet er for svagt (min. 6 tegn).","auth/invalid-email":"Ugyldig email-adresse.","auth/too-many-requests":"For mange forsøg. Prøv igen senere.","auth/network-request-failed":"Netværksfejl. Tjek din forbindelse."};function gl(n){return Zb[n]||"Der opstod en fejl. Prøv igen."}function Fn(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){Fn("Udfyld alle felter.");return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await qy(ri,n,e)}catch(r){Fn(gl(r.code))}finally{t.disabled=!1,t.textContent="LOG IND"}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value,r=document.getElementById("signup-kon").value,s=document.getElementById("signup-bueklasse").value;if(!n||!e||!t||!r||!s){Fn("Udfyld alle felter.");return}const i=document.querySelector("#signup-form .btn");i.disabled=!0,i.textContent="...";try{const o=await zy(ri,e,t);await Nr(ce(te,"users",o.user.uid),{name:n,email:e,yam:n,"e-mail":e,kon:r,bueklasse:s,created:zs()})}catch(o){Fn(gl(o.code))}finally{i.disabled=!1,i.textContent="OPRET KONTO"}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){Fn("Indtast din email først.");return}try{await jy(ri,n),Fn("Nulstillingsmail sendt!","ok")}catch(e){Fn(gl(e.code))}};window.doLogout=async function(){try{await Wy(ri)}catch{}};document.addEventListener("DOMContentLoaded",()=>{var t,r,s;const n=document.getElementById("warn-enabled-sw");if(n){const i=localStorage.getItem("warnEnabled");g.warnEnabled=i===null?!0:i==="true",n.classList.toggle("on",g.warnEnabled),n.addEventListener("click",()=>{g.warnEnabled=!g.warnEnabled,n.classList.toggle("on",g.warnEnabled),localStorage.setItem("warnEnabled",g.warnEnabled)})}Hy(ri,async i=>{if(i){g.user=i;let o,c;for(let l=0;l<3;l++)try{[o,c]=await Promise.all([Qn(ce(te,"users",i.uid)),Qn(ce(te,"admins",i.uid))]);break}catch(h){console.error("Profil fejl attempt",l,h.code,h.message),l<2?await new Promise(f=>setTimeout(f,2e3*(l+1))):(g.profile={name:i.email,email:i.email},g.isAdmin=!1)}if(o!=null&&o.exists()){const l=o.data();g.profile={name:l.name||l.yam||i.email,email:l.email||l["e-mail"]||i.email,kon:l.kon||null,bueklasse:l.bueklasse||null}}else g.profile||(g.profile={name:i.email,email:i.email});g.isAdmin=(c==null?void 0:c.exists())||!1,nA()}else rA()});let e=null;window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),e=i,document.getElementById("pwa-banner").style.display="flex"}),(t=document.getElementById("pwa-install-btn"))==null||t.addEventListener("click",async()=>{e&&(e.prompt(),await e.userChoice,e=null,document.getElementById("pwa-banner").style.display="none")}),(r=document.getElementById("pwa-dismiss-btn"))==null||r.addEventListener("click",()=>{document.getElementById("pwa-banner").style.display="none"}),Xi(24),document.getElementById("target-count").addEventListener("change",i=>{const o=i.target.value,c=document.getElementById("target-count-custom");c.style.display=o==="custom"?"":"none",o!=="custom"&&Xi(Number(o))}),document.getElementById("target-count-custom").addEventListener("input",i=>{const o=Number(i.target.value);o>0&&Xi(o)}),(s=document.getElementById("photo-input"))==null||s.addEventListener("change",async i=>{var c;const o=i.target.files[0];if(o)try{const l=await Fp(o),h=Ur(),f=Sp(Pp,`courses/${g.round.courseId}/target_${h}.jpg`);await Ap(f,l,"base64",{contentType:"image/jpeg"});const p=await Rp(f);await yl(g.round.courseId,h,{imageUrl:p}),(c=g.course)!=null&&c.targets&&(g.course.targets[h].imageUrl=p),yn()}catch(l){Fe("Upload fejl: "+l.message,"error")}}),document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("click",o=>{o.target===i&&i.classList.add("hidden")})})});window.saveProfilModal=async function(){const n=document.getElementById("profil-kon").value,e=document.getElementById("profil-bueklasse").value,t=document.getElementById("profil-err");if(!n||!e){t.textContent="Vælg både køn og bueklasse.",t.classList.remove("hidden");return}t.classList.add("hidden");try{await ft(ce(te,"users",g.user.uid),{kon:n,bueklasse:e}),g.profile.kon=n,g.profile.bueklasse=e,document.getElementById("profil-modal").classList.add("hidden")}catch{t.textContent="Fejl ved gem. Prøv igen.",t.classList.remove("hidden")}};function eA(n){let e=1,t=0,r=0,s=0,i=1,o=0,c=0,l=0,h=0,f=0,p=0,y=0,b=0;const C=()=>{n.style.transformOrigin="0 0",n.style.transform=e>1?`translate(${t}px,${r}px) scale(${e})`:""};n.addEventListener("touchstart",x=>{if(x.preventDefault(),x.touches.length===2){const B=x.touches,F=n.getBoundingClientRect();s=Math.hypot(B[0].clientX-B[1].clientX,B[0].clientY-B[1].clientY),i=e,o=t,c=r,l=(B[0].clientX+B[1].clientX)/2-F.left,h=(B[0].clientY+B[1].clientY)/2-F.top}else x.touches.length===1&&(f=x.touches[0].clientX,p=x.touches[0].clientY,y=t,b=r)},{passive:!1}),n.addEventListener("touchmove",x=>{if(x.preventDefault(),x.touches.length===2){const B=x.touches,F=Math.hypot(B[0].clientX-B[1].clientX,B[0].clientY-B[1].clientY),O=Math.min(8,Math.max(1,i*F/s)),q=(l-o)/i,Z=(h-c)/i;t=l-q*O,r=h-Z*O,e=O,C()}else x.touches.length===1&&e>1&&(t=y+x.touches[0].clientX-f,r=b+x.touches[0].clientY-p,C())},{passive:!1}),n.addEventListener("touchend",()=>{e<1.05&&(e=1,t=0,r=0,C())},{passive:!0});let D=0;n.addEventListener("touchend",()=>{const x=Date.now();x-D<300&&(e=1,t=0,r=0,C()),D=x},{passive:!0})}function tA(n){g.pendingAnalyseRound=n,document.getElementById("analyse-filter").value="specific",window.switchTab("analyse")}function nd(){if(!g.pendingRound)return;const n=g.rounds.find(t=>t.id===g.pendingRound);if(!n)return;g.pendingRound=null;const e=(n.shooters||[]).map(t=>({...t,scores:si(t.scores)}));setTimeout(()=>_l({...n,shooters:e}),300)}function nA(){document.getElementById("hdr-name").textContent=g.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),(!g.profile.kon||!g.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),800),document.getElementById("admin-badge").classList.toggle("hidden",!g.isAdmin),document.querySelectorAll(".admin-only").forEach(t=>t.classList.toggle("hidden",!g.isAdmin));const n=td();g.friends=n.friends||[],g.rounds=n.rounds||[],Ln(an(te,"users",g.user.uid,"friends")).then(t=>{if(!t.docs.length)return;const r=t.docs.map(o=>({...o.data(),id:o.id})),s=new Set(g.friends.map(o=>o.id)),i=r.filter(o=>!s.has(o.id));i.length&&(g.friends=[...g.friends,...i],cn(),Gs(),qs())}).catch(t=>console.warn("Hent venner:",t)),Gs(),qs(),wo(),g.pendingRound=new URLSearchParams(window.location.search).get("round")||null,g.pendingRound&&nd();const e=td().courses||[];g.courses=e,sd(),rd(),sA(),Ln(an(te,"users",g.user.uid,"rounds")).then(t=>{if(!t.docs.length)return;const r=t.docs.map(o=>({...o.data(),id:o.id})),s=new Set(g.rounds.map(o=>o.id)),i=r.filter(o=>!s.has(o.id));i.length&&(g.rounds=[...g.rounds,...i].sort((o,c)=>{var f,p;const l=o.completed||o.created||0,h=c.completed||c.created||0;return(typeof h=="number"?h:((f=h.toMillis)==null?void 0:f.call(h))??0)-(typeof l=="number"?l:((p=l.toMillis)==null?void 0:p.call(l))??0)}),cn(),wo(),g.pendingRound&&nd())}).catch(t=>console.warn("Hent runder:",t)),Ln(an(te,"courses")).then(t=>{const r=t.docs.map(s=>{const i=s.data();return{id:s.id,name:i.name||i.yam||"—",numTargets:i.numTargets||i.antalMål||24,location:i.location||i.beliggenhed||"",targets:i.targets||i.mål||[],visits:i.visits||i.besøg||[]}});r.length&&(g.courses=r,cn(),sd(),rd())}).catch(t=>console.warn("courses:",t)),aA()}function rA(){g.user=null,g.profile=null,g.round=null,pl(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){window.appLang=window.appLang==="da"?"en":"da",document.getElementById("lang-btn").textContent=window.appLang.toUpperCase()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&mA(),n==="analyse"&&window.renderAnalyse(),n==="courses"&&g.courseMap&&setTimeout(()=>g.courseMap.invalidateSize(),100)};function sA(){!navigator.geolocation||!g.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(g.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=ml(e,o);c<t&&(t=c,r=s.id)})}),r&&t<500){const s=document.getElementById("course-sel");s.value=r,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function rd(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML='<option value="">-- Ingen bane --</option>',g.courses.forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${t.numTargets} mål)`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=g.courses.find(i=>i.id===n.value),r=document.getElementById("target-count"),s=document.getElementById("target-count-custom");t?(!!r.querySelector(`option[value="${t.numTargets}"]`)?(r.value=String(t.numTargets),s.style.display="none"):(r.value="custom",s.value=t.numTargets,s.style.display=""),r.disabled=!0,s.disabled=!0):(r.disabled=!1,s.disabled=!1,r.value!=="custom"&&(s.style.display="none")),Xi(t?t.numTargets:r.value==="custom"?Number(s.value):Number(r.value))}}function Xi(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${me(e)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};function iA(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}function qs(){const n=document.getElementById("qfriends");n.innerHTML="",g.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=g.friends.filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await Ln(an(te,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=g.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...r];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" data-id="${me(i.id)}" data-name="${me(i.name||"")}" data-email="${me(i.email||"")}">${me(i.name)}${i.email?` <span style='font-size:11px;opacity:.6'>${me(i.email)}</span>`:""}</div>`).join(""),e.querySelectorAll(".ac-item").forEach(i=>i.addEventListener("click",()=>{selectFriend(i.dataset.id,i.dataset.name,i.dataset.email),document.getElementById("friend-search").value="",document.getElementById("ac-list").classList.add("hidden")})),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){g.friends.find(r=>r.id===n)||(g.friends.push({id:n,name:e,email:t}),cn(),Gs(),qs()),window.addParticipant(n,e)};window.startRound=async function(){var f,p;const n=(document.getElementById("round-name").value.trim()||"Min Skydning").slice(0,80),e=document.getElementById("course-sel").value,t=document.getElementById("target-count"),r=(t.value==="custom"?Number(document.getElementById("target-count-custom").value):Number(t.value))||24,s=Number(document.getElementById("start-target").value)-1,i=document.getElementById("gps-auto-sw").classList.contains("on"),o=document.getElementById("gps-track-sw").classList.contains("on");g.warnThreshold=Number(document.getElementById("warn-thresh").value)||8;const c=[{id:g.user.uid,name:g.profile.name,isGuest:!1},...iA().filter(y=>y.id!==g.user.uid)];g.course=e&&g.courses.find(y=>y.id===e)||null;const l=c.map(y=>{const b=Kb(y.id,y.name,y.isGuest);return Hb(b,r),b});let h=s;if(i&&((f=g.course)!=null&&f.targets))try{h=Xb(g.course.targets,await Qo())}catch{}g.round={name:n,courseId:e||null,courseName:((p=g.course)==null?void 0:p.name)||null,numTargets:r,startTarget:h+1,shooters:l,created:Date.now(),traversalOrder:Lp(h,r),traversalPos:0},o&&(g.gpsTracking=Jb(oA),document.getElementById("gps-bar").classList.toggle("hidden",!g.gpsTracking),Yb()),showActivePanel(),$r(),yn(),Jo()};function Lp(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}function Ur(){return g.round.traversalOrder[g.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function yn(){var l,h;if(!g.round)return;const n=Ur(),e=g.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=" af "+e,document.getElementById("round-badge").textContent=g.round.name;const t=(h=(l=g.course)==null?void 0:l.targets)==null?void 0:h[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||`Mål ${n+1}`;const r=Wb(g.round.shooters,e);document.getElementById("pbar").style.width=`${r/e*100}%`;const s=g.round.shooters.flatMap(f=>f.scores.flat().filter(p=>p!=null)),i=s.reduce((f,p)=>f+Vt(p),0);document.getElementById("stat-avg").textContent=s.length?(i/s.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=i,document.getElementById("stat-rem").textContent=e-r;const o=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(o.src=t.imageUrl||t.photo,o.classList.remove("hidden")):o.classList.add("hidden"),document.getElementById("edit-target-btn").classList.toggle("hidden",!(g.isAdmin&&g.round.courseId)),document.getElementById("next-btn").textContent=g.round.traversalPos===e-1?"AFSLUT →":"NÆSTE →";const c=zb(g.round.shooters,n);document.getElementById("target-avg").textContent=c!==null?`Gns. dette mål: ${c}`:""}function $r(){if(!g.round)return;const n=Ur(),e=document.getElementById("shooters-list");e.innerHTML="",g.round.shooters.forEach((t,r)=>{const s=tt(t.scores),i=Gb(t.scores,g.warnThreshold),o=t.scores[n]||[null,null],c=document.createElement("div");c.className="shooter-card";const l=t.scores.map(C=>C[0]).filter(C=>C!=null),h=t.scores.map(C=>C[1]).filter(C=>C!=null),f=[...l,...h],p=l.length?(l.reduce((C,D)=>C+Vt(D),0)/l.length).toFixed(2):"—",y=h.length?(h.reduce((C,D)=>C+Vt(D),0)/h.length).toFixed(2):"—",b=f.length?(f.reduce((C,D)=>C+Vt(D),0)/f.length).toFixed(2):"—";c.innerHTML=`
      <div class="sh-head"><span style="font-size:18px;">🎯</span>${i?'<span class="warn-dot"></span>':""}
        <span class="sh-name">${t.name}</span>
        <div style="display:flex;gap:4px;">
          <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${s}</div></div>
          <div class="sh-mini"><div class="sh-mini-lbl">P1</div><div class="sh-mini-val" style="font-size:12px;">${p}</div></div>
          <div class="sh-mini" style="border:1px solid var(--acc);"><div class="sh-mini-lbl">SNT</div><div class="sh-mini-val" style="font-size:12px;color:var(--acc);">${b}</div></div>
          <div class="sh-mini"><div class="sh-mini-lbl">P2</div><div class="sh-mini-val" style="font-size:12px;">${y}</div></div>
        </div>
      </div>
      <div class="arrows-row">${[0,1].map(C=>`
        <div class="arrow-grp"><div class="arrow-lbl">🎯 PIL ${C+1}</div>
          <div class="score-btns">${$b.map(D=>`
            <button class="sbtn ${o[C]===D?`sel-${D}`:""}" data-v="${D}"
              onclick="setScore(${r},${n},${C},'${D}')">${D}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(c)})}window.setScore=function(n,e,t,r){const s=r==="M"?"M":Number(r);g.round.shooters[n].scores[e][t]=s,Jo(),$r(),yn()};function oA({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=Dp(r),document.getElementById("gps-dist").textContent=Vp(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function Jo(){if(!(!g.round||!g.user))try{await Nr(ce(te,"users",g.user.uid,"active","round"),xp(g.round))}catch(n){console.warn(n)}}async function aA(){var n;try{const e=await Qn(ce(te,"users",g.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await kt(ce(te,"users",g.user.uid,"active","round"));return}confirm("Genoptag den igangværende runde?")&&(g.round=Qb(t),g.round.traversalOrder=t.traversalOrder||Lp(0,g.round.numTargets),g.round.traversalPos=t.traversalPos||0,g.round.courseId&&(g.course=g.courses.find(s=>s.id===g.round.courseId)||null),showActivePanel(),$r(),yn())}catch(e){console.warn(e)}}window.prevTarget=function(){!g.round||g.round.traversalPos<=0||(g.round.traversalPos--,Jo(),$r(),yn(),document.getElementById("scroll-area").scrollTop=0)};window.nextTarget=function(){g.round&&(g.round.traversalPos<g.round.numTargets-1?(g.round.traversalPos++,Jo(),$r(),yn(),document.getElementById("scroll-area").scrollTop=0):window.finishRound())};window.skipToTarget=function(){g.round&&(document.getElementById("skip-input").max=g.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!g.round||n<1||n>g.round.numTargets)return;const e=g.round.traversalOrder.indexOf(n-1);e!==-1&&(g.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),$r(),yn()};window.finishRound=async function(){var i,o,c;g.finishTap++;const n=document.getElementById("finish-btn");if(g.finishTap===1){n.textContent="✓ BEKRÆFT",setTimeout(()=>{g.finishTap=0,n.textContent="✓ AFSLUT NU"},3e3);return}g.finishTap=0,n.textContent="✓ AFSLUT NU";let e={};g.gpsTracking&&(e=Np(),g.gpsTracking=!1),pl();const t="r_"+Date.now(),r={...xp(g.round),completed:Date.now(),...e,id:t};g.rounds.unshift({...r,created:Date.now()}),cn(),wo(),Nr(ce(te,"users",g.user.uid,"rounds",t),{...r,created:zs()}).catch(l=>console.warn("Gem runde fejl:",l));const s=g.round;if(s.courseId&&((i=g.profile)!=null&&i.kon)&&((o=g.profile)!=null&&o.bueklasse)){const l=s.shooters.find(h=>{var f;return h.id===((f=g.user)==null?void 0:f.uid)})||((c=s.shooters)==null?void 0:c[0]);l&&Nr(ce(te,"bane_stats",s.courseId,"runder",t),{score:tt(l.scores),kon:g.profile.kon,bueklasse:g.profile.bueklasse,numTargets:s.numTargets,dato:zs()}).catch(h=>console.warn("bane_stats fejl:",h))}if(window._lastRound=s,g.round=null,s.courseId){const l=fl(s.shooters);fA(s.courseId,{roundId:t,date:new Date().toLocaleDateString("da-DK"),participants:s.shooters.map(h=>h.name),winner:l==null?void 0:l.name,winnerScore:l?tt(l.scores):0,gpsRoute:e.route||null,gpsDuration:e.duration||null,gpsDistance:e.distance||null}).catch(console.warn)}kt(ce(te,"users",g.user.uid,"active","round")).catch(()=>{}),cA(s),showResultsPanel()};window.abortRound=async function(){g.abortTap++;const n=document.getElementById("abort-btn");if(g.abortTap===1){n.textContent="🗑 BEKRÆFT",setTimeout(()=>{g.abortTap=0,n.textContent="🗑 AFBRYD"},3e3);return}g.abortTap=0,n.textContent="🗑 AFBRYD",g.gpsTracking&&(Np(),g.gpsTracking=!1),pl(),kt(ce(te,"users",g.user.uid,"active","round")).catch(()=>{}),g.round=null,showSetupPanel()};function cA(n){const e=fl(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${me((e==null?void 0:e.name)||"—")}</div><div class="win-score">${e?tt(e.scores):0} point</div>`,document.getElementById("res-table").innerHTML=Op(n),document.getElementById("res-dist").innerHTML=buildDistribution(n)}function Op(n){let e=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${n.shooters.map(t=>`<th>${t.name}</th>`).join("")}</tr>`;for(let t=0;t<n.numTargets;t++)e+=`<tr><td class="tc">${t+1}</td>`,n.shooters.forEach(r=>{const s=r.scores[t]||[null,null],i=(s[0]!=null&&s[0]!=="M"?Number(s[0]):0)+(s[1]!=null&&s[1]!=="M"?Number(s[1]):0);e+=`<td>${s.map(o=>o??"—").join("/")}<br><small>${i}</small></td>`}),e+="</tr>";return e+=`<tr class="tr-tot"><td class="tc">Total</td>${n.shooters.map(t=>`<td>${tt(t.scores)}</td>`).join("")}</tr></table></div>`,e}function lA(n){const e=n.shooters.map((r,s)=>{const i=tt(r.scores),o=r.scores.flat().filter(h=>h!=null),c=o.length,l=c?(o.reduce((h,f)=>h+Vt(f),0)/c).toFixed(2):0;return`<div onclick="window.toggleRpopDetail(${s})" style="flex:1;min-width:130px;background:var(--surface2);border-radius:10px;padding:12px 10px;cursor:pointer;text-align:center;"><div style="font-size:15px;font-weight:700;color:var(--txt);margin-bottom:4px;">${r.name}</div><div style="font-size:42px;font-weight:700;color:var(--acc);line-height:1.1;">${i}</div><div style="font-size:13px;color:var(--muted);margin-bottom:8px;">POINT</div><div style="display:flex;justify-content:center;gap:16px;"><div><div style="font-size:18px;font-weight:700;color:var(--acc);">${l}</div><div style="font-size:11px;color:var(--muted);">SNT/PIL</div></div><div><div style="font-size:18px;font-weight:700;color:var(--acc);">${c}</div><div style="font-size:11px;color:var(--muted);">PILE</div></div></div></div>`}).join(""),t=n.shooters.map((r,s)=>{const i=qb(r.scores);return`<div id="rpop-detail-${s}" style="display:none;margin-bottom:8px;" class="dist-card"><div class="dist-name">${r.name}</div>${Object.entries(i).map(([o,c])=>`<div class="dist-row"><span>${o}</span><span>${c}x</span></div>`).join("")}</div>`}).join("");return`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">${e}</div>${t}`}window.toggleRpopDetail=function(n){const e=document.getElementById("rpop-detail-"+n);e&&(e.style.display=e.style.display==="none"?"":"none")};function uA(n){const e=n.shooters.map(r=>{const s=r.scores.filter(f=>{const p=f||[null,null];return p[0]!==null&&p[1]!==null});if(!s.length||s.length===n.numTargets)return null;const i=s.flat().filter(f=>f!==null),o=i.reduce((f,p)=>f+Vt(p),0),c=i.length,l=c?(o/c).toFixed(2):0,h=s.length?(o/s.length).toFixed(1):0;return{name:r.name,shot:s.length,total:o,avgPil:l,avgMaal:h}}).filter(Boolean);return e.length?`<div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--surface2);"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Kun skudte mål</div><div style="display:flex;gap:8px;flex-wrap:wrap;">${e.map(r=>`<div style="flex:1;min-width:130px;background:var(--surface2);border-radius:10px;padding:12px 10px;text-align:center;"><div style="font-size:13px;font-weight:700;color:var(--txt);margin-bottom:2px;">${r.name}</div><div style="font-size:11px;color:var(--muted);margin-bottom:6px;">${r.shot} af ${n.numTargets} mål</div><div style="font-size:30px;font-weight:700;color:var(--acc);line-height:1.1;">${r.total}</div><div style="font-size:12px;color:var(--muted);margin-bottom:8px;">POINT</div><div style="display:flex;justify-content:center;gap:12px;"><div><div style="font-size:16px;font-weight:700;color:var(--acc);">${r.avgPil}</div><div style="font-size:11px;color:var(--muted);">SNT/PIL</div></div><div><div style="font-size:16px;font-weight:700;color:var(--acc);">${r.avgMaal}</div><div style="font-size:11px;color:var(--muted);">SNT/MÅL</div></div></div></div>`).join("")}</div></div>`:""}function wo(){const n=document.getElementById("rounds-list");if(!g.rounds.length){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}n.innerHTML="",g.rounds.forEach(e=>{const t=(e.shooters||[]).map(c=>({...c,scores:si(c.scores)})),r=t.length?fl(t):null,s=e.created,i=s!=null&&s.toDate?s.toDate().toLocaleDateString("da-DK"):s!=null&&s.seconds?new Date(s.seconds*1e3).toLocaleDateString("da-DK"):typeof s=="number"?new Date(s).toLocaleDateString("da-DK"):"—",o=document.createElement("div");o.className="rcard",o.innerHTML=`<div class="rcard-info"><div class="rcard-name">${me(e.name||"Runde")}</div><div class="rcard-meta"><span class="rcard-date">${me(i)}</span> · ${me(e.courseName||e.numTargets+" mål")}</div><div class="rcard-win">🏆 ${me((r==null?void 0:r.name)||"—")} (${r?tt(r.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser" style="font-size:16px;">📈</button><button class="del-btn" data-id="${me(e.id)}">✕</button>`,o.querySelector(".rcard-info").onclick=()=>_l({...e,shooters:t}),o.querySelector(".rcard-analyse").onclick=()=>tA(e.id),o.querySelector(".del-btn").onclick=c=>{const l=c.currentTarget,h=`r-${e.id}`;g.deleteConfirm[h]?(delete g.deleteConfirm[h],g.rounds=g.rounds.filter(f=>f.id!==e.id),cn(),wo(),g.user&&kt(ce(te,"users",g.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),e.courseId&&pA(e.courseId,e.id).catch(f=>console.warn(f)),g.user&&kt(ce(te,"users",g.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),g.user&&kt(ce(te,"users",g.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),g.user&&kt(ce(te,"users",g.user.uid,"rounds",e.id)).catch(f=>console.warn(f))):(g.deleteConfirm[h]=!0,l.classList.add("conf"),l.textContent="Slet?",setTimeout(()=>{delete g.deleteConfirm[h],l.classList.remove("conf"),l.textContent="✕"},3e3))},n.appendChild(o)})}function _l(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),g.rpopMap&&(g.rpopMap.remove(),g.rpopMap=null);const t=n.gpsRoute||n.route||null,r=n.gpsDuration||n.duration||null,s=n.gpsDistance||n.distance||null,i=r?Dp(r):null,o=s?Vp(s):null,c=o||i?`<div style="display:flex;gap:8px;margin-bottom:12px;">${o?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${o}</div><div style="font-size:11px;color:var(--muted);">DISTANCE</div></div>`:""}${i?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${i}</div><div style="font-size:11px;color:var(--muted);">TID</div></div>`:""}</div>${t?'<div id="rpop-map" style="height:200px;border-radius:8px;margin-bottom:12px;overflow:hidden;"></div>':""}`:"";if(document.getElementById("rpop-body").innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${me(n.name)}</h3>${c}`+lA(n)+Op(n)+uA(n)+'<button class="btn btn-gold" style="width:100%;margin-top:12px;" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>',t){const l=kp(t);l.length&&setTimeout(()=>{const h=document.getElementById("rpop-map");if(!h)return;g.rpopMap=window.L.map(h),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(g.rpopMap);const f=window.L.polyline(l.map(p=>[p.lat,p.lng]),{color:"#e8a020",weight:3}).addTo(g.rpopMap);g.rpopMap.fitBounds(f.getBounds(),{padding:[20,20]})},50)}}function sd(){const n=document.getElementById("courses-list");if(!g.courses.length){n.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}n.innerHTML="",g.courses.forEach(e=>{const t=document.createElement("div");t.className="ccard",t.innerHTML=`<div class="ccard-name">${me(e.name)}</div><div class="ccard-meta">${e.numTargets} mål · ${me(e.location||"—")}</div>`,t.onclick=()=>hA(e),n.appendChild(t)})}function hA(n){g.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name,window.switchSubtab("map"),dA(n),Mp(n),ii(n)}function dA(n){const e=document.getElementById("course-map");g.courseMap&&(g.courseMap.remove(),g.courseMap=null),g.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(g.courseMap);const t=[];(n.targets||[]).forEach((r,s)=>{const i=r.gps||r.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(g.courseMap).bindPopup(`<b>${s+1}. ${r.name||"Mål"}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" style="max-width:140px;border-radius:4px;"/>`:""}`))}),t.length?g.courseMap.fitBounds(t,{padding:[20,20]}):g.courseMap.setView([55.7,12.5],10)}function Mp(n){const e=document.getElementById("visits-list"),t=n.visits||n.besøg||[];if(!t.length){e.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}e.innerHTML="",t.forEach((r,s)=>{const i=document.createElement("div");i.className="visit-card",i.style.cursor="pointer",i.onclick=o=>{o.target.closest(".btn-icon")||window.showVisitResults(r.roundId)},i.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;"><span style="font-weight:700;font-size:13px;">${me(r.date)}</span><div style="display:flex;gap:6px;"><button class="btn-icon" onclick="window.showVisitResults('${me(r.roundId)}')" title="Se resultat">📊</button><button class="btn-icon" style="color:var(--danger);" onclick="deleteVisit(${s})">✕</button></div></div><div style="font-size:12px;color:var(--muted);">${(r.participants||[]).map(me).join(", ")}</div>${r.winner?`<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${me(r.winner)} (${r.winnerScore} pt)</div>`:""}`,e.appendChild(i)})}window.showVisitResults=function(n){const e=g.rounds.find(r=>r.id===n);if(!e){Fe("Runden er ikke gemt lokalt","error");return}const t=(e.shooters||[]).map(r=>({...r,scores:si(r.scores)}));window.switchTab("results"),_l({...e,shooters:t})};window.deleteVisit=async function(n){if(!confirm("Slet dette besøg?"))return;const e=ce(te,"courses",g.currentCourse.id),t=await Qn(e);if(!t.exists())return;const r=[...t.data().visits||t.data().besøg||[]];r.splice(n,1),await ft(e,{visits:r,besøg:r}),g.currentCourse.visits=r,Mp(g.currentCourse)};window.showRouteOnMap=function(n){!g.courseMap||!n.length||(g.courseMapLayer&&g.courseMap.removeLayer(g.courseMapLayer),g.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(g.courseMap),g.courseMap.fitBounds(g.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.parseRoute=kp;function ii(n){const e=n.targets||[];let t=`
    <div class="card" style="margin-bottom:12px;">
      <div class="card-title">Baneinfo</div>
      <div class="fg"><label class="lbl">Banenavn</label><input type="text" id="edit-cname" value="${n.name}" /></div>
      <div class="fg"><label class="lbl">Lokation</label><input type="text" id="edit-cloc" value="${n.location||""}" /></div>
      <button class="btn btn-gold" style="width:100%" onclick="saveCourseEdit()">Gem baneinfo</button>
    </div>
    <div class="card">
      <div class="card-title" style="display:flex;justify-content:space-between;align-items:center;">
        <span>Mål (${e.length})</span>
        <button class="btn-icon" onclick="addTargetToCurrentCourse()" style="font-size:20px;">＋</button>
      </div>
      <div id="targets-edit-list">`;e.forEach((r,s)=>{t+=`<div class="fg" style="border-bottom:1px solid var(--surface2);padding-bottom:12px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;color:var(--acc);">Mål ${s+1}</span>
        <div style="display:flex;gap:6px;">
          <button class="btn-icon" onclick="setTargetGps(${s})" title="Sæt GPS">📍</button>
          <button class="btn-icon" onclick="deleteTargetFromCourse(${s})" style="color:var(--danger)">🗑</button>
        </div>
      </div>
      <div class="fg"><label class="lbl">Navn</label>
        <input type="text" value="${r.name||""}" onchange="updateTargetField(${s},'name',this.value)" style="padding:6px 10px;" /></div>
      <div style="display:flex;gap:8px;">
        <div class="fg" style="flex:1"><label class="lbl">Emoji</label>
          <input type="text" value="${r.emoji||""}" onchange="updateTargetField(${s},'emoji',this.value)" style="padding:6px 10px;" /></div>
        <div class="fg" style="flex:1"><label class="lbl">Afstand (m)</label>
          <input type="number" value="${r.distance||""}" onchange="updateTargetField(${s},'distance',this.value)" style="padding:6px 10px;" /></div>
      </div>
      ${r.gps||r.GPS?`<div style="font-size:12px;color:var(--muted);">📍 GPS: ${(r.gps||r.GPS).lat.toFixed(5)}, ${(r.gps||r.GPS).lng.toFixed(5)}</div>`:'<div style="font-size:12px;color:var(--danger);">Ingen GPS</div>'}
      ${r.imageUrl||r.photo?`<img src="${r.imageUrl||r.photo}" style="max-width:100%;max-height:100px;border-radius:8px;margin-top:6px;object-fit:cover;" />`:""}
      <label class="btn btn-dark" style="margin-top:6px;display:inline-block;font-size:12px;padding:4px 10px;cursor:pointer;">
        📷 Upload foto
        <input type="file" accept="image/*" style="display:none;" onchange="uploadTargetPhoto(${s},this)" />
      </label>
      <button class="btn btn-gold" style="margin-top:6px;font-size:12px;padding:4px 10px;" onclick="saveAllTargets()">💾 Gem alle mål</button>
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim().slice(0,100),e=document.getElementById("edit-cloc").value.trim().slice(0,100);n&&(await ft(ce(te,"courses",g.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e}),g.currentCourse.name=n,g.currentCourse.location=e,document.getElementById("course-detail-title").textContent=n,Fe("Gemt!","success"))};window.updateTargetField=function(n,e,t){var r;(r=g.currentCourse)!=null&&r.targets&&(g.currentCourse.targets[n][e]=t)};window.addTargetToCurrentCourse=async function(){if(!g.currentCourse)return;const n=[...g.currentCourse.targets||[]];n.push({number:n.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await ft(ce(te,"courses",g.currentCourse.id),{targets:n}),g.currentCourse.targets=n,ii(g.currentCourse),Fe(`Mål ${n.length} tilføjet!`,"success")};window.deleteTargetFromCourse=async function(n){var t;if(!((t=g.currentCourse)!=null&&t.targets)||!confirm(`Slet mål ${n+1}?`))return;const e=[...g.currentCourse.targets];e.splice(n,1),e.forEach((r,s)=>r.number=s+1),await ft(ce(te,"courses",g.currentCourse.id),{targets:e,numTargets:e.length}),g.currentCourse.targets=e,g.currentCourse.numTargets=e.length,ii(g.currentCourse)};window.setTargetGps=async function(n){var e;if((e=g.currentCourse)!=null&&e.targets)try{const t=await Qo();g.currentCourse.targets[n].gps=t,await ft(ce(te,"courses",g.currentCourse.id),{targets:g.currentCourse.targets}),ii(g.currentCourse),Fe(`GPS sat for mål ${n+1}!`,"success")}catch(t){Fe("GPS fejl: "+t.message,"error")}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await Fp(t),s=Sp(Pp,`courses/${g.currentCourse.id}/target_${n}.jpg`);await Ap(s,r,"base64",{contentType:"image/jpeg"});const i=await Rp(s);g.currentCourse.targets[n].imageUrl=i,await ft(ce(te,"courses",g.currentCourse.id),{targets:g.currentCourse.targets}),ii(g.currentCourse),Fe("Foto gemt!","success")}catch(r){Fe("Upload fejl: "+r.message,"error")}};window.saveAllTargets=async function(){var n;(n=g.currentCourse)!=null&&n.targets&&(await ft(ce(te,"courses",g.currentCourse.id),{targets:g.currentCourse.targets}),Fe("Alle mål gemt!","success"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&g.courseMap&&setTimeout(()=>g.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await Qo();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(g.courseMap),g.courseMap.panTo([e.lat,e.lng])}catch{Fe("GPS ikke tilgængeligt","error"),n.classList.remove("on")}};window.doDeleteCourse=async function(){!g.currentCourse||!confirm(`Slet banen "${g.currentCourse.name}"?`)||(await kt(ce(te,"courses",g.currentCourse.id)),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"))};window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim().slice(0,100),e=document.getElementById("new-course-loc").value.trim().slice(0,100),t=document.getElementById("new-course-targets"),r=(t.value==="custom"?Number(document.getElementById("new-course-targets-custom").value):Number(t.value))||24;if(!n)return;const s=Array.from({length:r},(i,o)=>({number:o+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));await IT(an(te,"courses"),{name:n,yam:n,numTargets:r,antalMål:r,location:e,beliggenhed:e,targets:s,mål:s,created:zs(),visits:[],besøg:[]}),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value=""};async function fA(n,e){try{const t=ce(te,"courses",n),r=await Qn(t);if(!r.exists())return;const s=[e,...r.data().visits||r.data().besøg||[]].slice(0,50);await ft(t,{visits:s,besøg:s})}catch(t){console.warn(t)}}async function yl(n,e,t){const r=ce(te,"courses",n),s=await Qn(r);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await ft(r,{targets:o,mål:o})}function Fp(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,l=i.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const h=document.createElement("canvas");h.width=c,h.height=l,h.getContext("2d").drawImage(i,0,0,c,l),e(h.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},r.onerror=t,r.readAsDataURL(n)})}window.openEditTarget=function(){var t,r;const n=Ur(),e=(r=(t=g.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=Ur();g.round.courseId&&(await yl(g.round.courseId,e,{name:n}),(t=g.course)!=null&&t.targets&&(g.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),yn()};window.editGps=async function(){var n;try{const e=await Qo(),t=Ur();await yl(g.round.courseId,t,{gps:e}),(n=g.course)!=null&&n.targets&&(g.course.targets[t].gps=e),Fe("GPS gemt!","success")}catch(e){Fe("GPS fejl: "+e.message,"error")}};function Gs(){const n=document.getElementById("friends-list");if(!g.friends.length){n.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}n.innerHTML="",g.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${me(e.name)}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).map(me).join(" · ")}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del" style="color:var(--danger);">🗑</button></div>`,t.querySelector(".frd-edit").addEventListener("click",()=>openFriendModal(e)),t.querySelector(".frd-del").addEventListener("click",()=>doDeleteFriend(e.id,e.name)),n.appendChild(t)})}window.openFriendModal=function(n){g.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=n?"Rediger ven":"Tilføj ven",document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim().slice(0,80),email:document.getElementById("f-email").value.trim().slice(0,100),phone:document.getElementById("f-phone").value.trim().slice(0,30),club:document.getElementById("f-club").value.trim().slice(0,80),bowType:document.getElementById("f-bow").value};if(!n.name)return;if(g.editFriendId){const r=g.friends.findIndex(s=>s.id===g.editFriendId);r!==-1?g.friends[r]={...n,id:g.editFriendId}:g.friends.push({...n,id:g.editFriendId})}else g.friends.push({...n,id:"f_"+Date.now()});const e=g.editFriendId||"f_"+Date.now();g.editFriendId||(g.friends[g.friends.length-1].id=e);const t=g.friends.find(r=>r.id===(g.editFriendId||e));t&&g.user&&Nr(ce(te,"users",g.user.uid,"friends",t.id),t).catch(r=>console.warn(r)),cn(),document.getElementById("friend-modal").classList.add("hidden"),Gs(),qs()};window.doDeleteFriend=function(n,e){confirm(`Slet ${e}?`)&&(g.friends=g.friends.filter(t=>t.id!==n),cn(),Gs(),qs(),g.user&&kt(ce(te,"users",g.user.uid,"friends",n)).catch(t=>console.warn(t)))};let ac=[];async function mA(){if(g.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{ac=(await Ln(an(te,"users"))).docs.map(e=>({uid:e.id,...e.data()})).sort((e,t)=>(e.name||e.yam||"").localeCompare(t.name||t.yam||"","da")),Bp()}catch(n){console.warn(n)}}}function Bp(n=""){const e=document.getElementById("users-list");e.innerHTML="";const t=n.toLowerCase(),r=t?ac.filter(s=>(s.name||s.yam||"").toLowerCase().includes(t)||(s.email||s["e-mail"]||"").toLowerCase().includes(t)):ac;document.getElementById("users-count").textContent=`${r.length} brugere`,r.forEach(s=>{var h;const i=document.createElement("div");i.className="urow";const o=(h=s.created)!=null&&h.toDate?s.created.toDate().toLocaleDateString("da-DK"):"—",c=s.bueklasse||"",l=s.kon==="m"?"♂":s.kon==="k"?"♀":"";i.innerHTML=`<span class="un">${me(s.name||s.yam||"—")}</span><span class="ue">${me(s.email||s["e-mail"]||"")}</span><span class="ubow">${me(c)}${l?` ${me(l)}`:""}</span><span class="ud">${me(o)}</span>`,e.appendChild(i)})}window.filterUsers=function(n){Bp(n)};window.doAddAdmin=async function(){const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await Ln(an(te,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){Fe("Bruger ikke fundet","error");return}await Nr(ce(te,"admins",t.id),{email:n,created:zs()}),Fe(`${t.data().name||n} er nu admin`,"success"),document.getElementById("admin-email").value=""}catch(e){Fe("Fejl: "+e.message,"error")}};window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"})};window.renderAnalyse=function(){var jr,oi,lt,ke,ai,Ut;const n=document.getElementById("analyse-content");if(!n)return;const e=document.getElementById("analyse-bane");e&&e.options.length<=1&&[...new Set(g.rounds.map(G=>G.courseId).filter(Boolean))].forEach(G=>{const X=g.courses.find(oe=>oe.id===G);if(X&&!Array.from(e.options).find(oe=>oe.value===G)){const oe=document.createElement("option");oe.value=G,oe.textContent=X.name,e.appendChild(oe)}});const t=((jr=document.getElementById("analyse-filter"))==null?void 0:jr.value)||"all",r=t==="all"?0:t==="lastround"?1:t==="specific"?0:Number(t),s=((oi=document.getElementById("analyse-bane"))==null?void 0:oi.value)||"all",i=Number((lt=document.getElementById("analyse-antal"))==null?void 0:lt.value)||0,o=document.getElementById("analyse-runde-wrap"),c=document.getElementById("analyse-runde");if(o&&(o.style.display=t==="specific"?"":"none"),t==="specific"&&c){const H=new Set(Array.from(c.options).map(G=>G.value).filter(Boolean));g.rounds.forEach(G=>{if(!H.has(G.id)){const X=G.created,oe=X!=null&&X.toDate?X.toDate().toLocaleDateString("da-DK"):X!=null&&X.seconds?new Date(X.seconds*1e3).toLocaleDateString("da-DK"):typeof X=="number"?new Date(X).toLocaleDateString("da-DK"):"—",Y=document.createElement("option");Y.value=G.id,Y.textContent=`${oe} — ${G.name||"Runde"}`,c.appendChild(Y)}}),g.pendingAnalyseRound&&(c.value=g.pendingAnalyseRound,g.pendingAnalyseRound=null)}const l=g.rounds.map(H=>({...H,shooters:(H.shooters||[]).map(G=>({...G,scores:si(G.scores)}))}));let h=s==="all"?l:l.filter(H=>H.courseId===s);if(t==="specific"){const H=c==null?void 0:c.value;h=H?h.filter(G=>G.id===H):[]}const f=i||r,p=f&&t!=="specific"?h.slice(0,f):h;if(!p.length){n.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}const y=H=>{var G;return H.shooters.find(X=>{var oe;return X.id===((oe=g.user)==null?void 0:oe.uid)})||((G=H.shooters)==null?void 0:G[0])},b=p.map(H=>{const G=y(H);return G?tt(G.scores):null}).filter(H=>H!==null),C=b.length?(b.reduce((H,G)=>H+G,0)/b.length).toFixed(1):0,D=b.length?Math.max(...b):0,x=b.length?Math.min(...b):0;let B=0,F=0,O=0,q=0;const Z={11:0,10:0,8:0,5:0,M:0},Q={11:0,10:0,8:0,5:0,M:0};p.forEach(H=>{const G=y(H);G&&G.scores.forEach(X=>{X[0]!=null&&(X[0]==="M"?Z.M++:(Z[Number(X[0])]=(Z[Number(X[0])]||0)+1,B+=Number(X[0]),F++)),X[1]!=null&&(X[1]==="M"?Q.M++:(Q[Number(X[1])]=(Q[Number(X[1])]||0)+1,O+=Number(X[1]),q++))})});const E=F?(B/F).toFixed(2):0,_=q?(O/q).toFixed(2):0,I=F+q?((B+O)/(F+q)).toFixed(2):0,w=((ke=p[0])==null?void 0:ke.numTargets)||24,T=Array.from({length:w},(H,G)=>{let X=0,oe=0;return p.forEach(Y=>{const we=y(Y);if(!we)return;(we.scores[G]||[null,null]).forEach(ge=>{ge!=null&&ge!=="M"&&(X+=Number(ge),oe++)})}),oe?X/oe:null}),R=T.map((H,G)=>({v:H,i:G})).filter(H=>H.v!==null),v=R.length?R.reduce((H,G)=>H.v>G.v?H:G):null,Je=R.length?R.reduce((H,G)=>H.v<G.v?H:G):null,vn=["11","10","8","5","M"];let ct="";if(ct+=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">RUNDER</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${p.length}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">SNIT/RUNDE</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${C}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">BEDSTE</div><div style="font-size:28px;font-weight:700;color:#2aaa5a;">${D}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">LAVESTE</div><div style="font-size:28px;font-weight:700;color:var(--danger);">${x}</div></div>
  </div>`,ct+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">PIL STATISTIK</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
      <div><div style="font-size:11px;color:var(--muted);">PIL 1</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${E}</div></div>
      <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
        <div style="font-size:11px;color:var(--muted);">SNT/PIL</div>
        <div style="font-size:22px;font-weight:700;color:#f0c030;">${I}</div>
      </div>
      <div><div style="font-size:11px;color:var(--muted);">PIL 2</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${_}</div></div>
    </div>
    <div style="margin-top:8px;font-size:12px;color:var(--muted);text-align:center;">
      ${Number(E)>Number(_)?"Bedst med PIL 1 🏹":Number(_)>Number(E)?"Bedst med PIL 2 🏹":"Begge pile er lige gode 🎯"}
    </div>
  </div>`,v&&Je&&v.i!==Je.i&&(ct+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">BEDSTE OG SVÆRESTE MÅL</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:center;">
        <div style="background:rgba(42,170,90,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">BEDSTE</div>
          <div style="font-size:24px;font-weight:700;color:#2aaa5a;">Mål ${v.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${v.v.toFixed(2)}</div>
        </div>
        <div style="background:rgba(204,51,51,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">SVÆRESTE</div>
          <div style="font-size:24px;font-weight:700;color:var(--danger);">Mål ${Je.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${Je.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`),ct+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:12px;">FORDELING PR. SCOREZONE</div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;">`,vn.forEach(H=>{const G=Z[H]||0,X=Q[H]||0,oe=G+X,Y=30;let we="";if(oe===0)we=`<circle cx="${Y}" cy="${Y}" r="${Y}" fill="var(--surface2)"/>`;else if(X===0)we=`<circle cx="${Y}" cy="${Y}" r="${Y}" fill="#00cc44"/>`;else if(G===0)we=`<circle cx="${Y}" cy="${Y}" r="${Y}" fill="#ffd700"/>`;else{const Ce=G/oe,ge=Ce*2*Math.PI,Ge=Y+Y*Math.sin(0),Ne=Y-Y*Math.cos(0),ae=Y+Y*Math.sin(ge),$t=Y-Y*Math.cos(ge),jt=ge>Math.PI?1:0;we=`<path d="M${Y},${Y} L${Ge},${Ne} A${Y},${Y} 0 ${jt},1 ${ae},${$t} Z" fill="#00cc44"/>
           <path d="M${Y},${Y} L${ae},${$t} A${Y},${Y} 0 ${1-jt},1 ${Ge},${Ne} Z" fill="#ffd700"/>`}ct+=`<div style="text-align:center;">
      <div style="font-weight:700;font-size:20px;color:#ffd700;margin-bottom:2px;">${H}</div>
      <svg viewBox="0 0 ${Y*2} ${Y*2}" style="width:56px;height:56px;">${we}</svg>
      <div style="font-size:14px;color:var(--muted);margin-top:2px;">${G}/${X}</div>
      <div style="font-size:15px;font-weight:700;color:var(--text);">${oe}</div>
    </div>`}),ct+=`</div>
    <div style="display:flex;gap:16px;justify-content:center;margin-top:8px;font-size:11px;color:var(--muted);">
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#ffd700;margin-right:4px;vertical-align:middle;"></span>PIL 1</span>
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#00cc44;margin-right:4px;vertical-align:middle;"></span>PIL 2</span>
    </div>
  </div>`,b.length>1){const oe=Math.min(...b)-5,Y=Math.max(...b)+5,we=b.slice().reverse().map((Ce,ge)=>{const Ge=30+ge/(b.length-1)*280,Ne=90-(Ce-oe)/(Y-oe)*(120-2*30);return`${Ge},${Ne}`}).join(" ");ct+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">UDVIKLING (RUNDER)</div>
      <svg viewBox="0 0 340 120" style="width:100%;overflow:visible;">
        <polyline points="${we}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${b.slice().reverse().map((Ce,ge)=>{const Ge=30+ge/(b.length-1)*280,Ne=90-(Ce-oe)/(Y-oe)*(120-2*30);return`<circle cx="${Ge}" cy="${Ne}" r="4" fill="var(--acc)"/><text x="${Ge}" y="${Ne-8}" text-anchor="middle" font-size="10" fill="var(--text)">${Ce}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg>
    </div>`}const In=s!=="all"||t==="lastround"||t==="specific",Xe=T.map((H,G)=>({v:H,i:G})).filter(H=>H.v!==null);if(Xe.length>1&&In){const Ce=Math.floor(Math.min(...Xe.map(j=>j.v))),ge=Math.ceil(Math.max(...Xe.map(j=>j.v))),Ge=ge-Ce||1,Ne=j=>42+(w>1?j/(w-1)*283:0),ae=j=>15+120*(1-(j-Ce)/Ge),$t=Xe.map(({v:j,i:de})=>Ne(de)+","+ae(j)).join(" "),jt=[];for(let j=Ce;j<=ge;j++)(ge-Ce<=6||j%Math.ceil((ge-Ce)/5)===0)&&jt.push(j);const ci=jt.map(j=>`<line x1="38" y1="${ae(j)}" x2="42" y2="${ae(j)}" stroke="var(--muted)" stroke-width="1"/><text x="36" y="${ae(j)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${j}</text><line x1="42" y1="${ae(j)}" x2="325" y2="${ae(j)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join(""),zr=Xe.map(({v:j,i:de})=>`<circle cx="${Ne(de)}" cy="${ae(j)}" r="3" fill="var(--acc)"/>`).join("");Xe.map(({v:j,i:de})=>`<circle cx="${Ne(de)}" cy="${ae(j)}" r="4" fill="var(--acc)"/><text x="${Ne(de)}" y="${ae(j)-8}" text-anchor="middle" font-size="9" fill="#fff">${j.toFixed(1)}</text>`).join("");const wn=Math.max(340,w*30),nr=j=>42+(w>1?j/(w-1)*(wn-42-15):0),qr=Xe.map(({v:j,i:de})=>nr(de)+","+ae(j)).join(" "),Gr=jt.map(j=>`<line x1="38" y1="${ae(j)}" x2="42" y2="${ae(j)}" stroke="var(--muted)" stroke-width="1"/><text x="36" y="${ae(j)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${j}</text><line x1="42" y1="${ae(j)}" x2="${wn-15}" y2="${ae(j)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join(""),li=Xe.map(({v:j,i:de})=>`<circle cx="${nr(de)}" cy="${ae(j)}" r="5" fill="var(--acc)"/><text x="${nr(de)}" y="${ae(j)-10}" text-anchor="middle" font-size="10" fill="#fff">${j.toFixed(1)}</text>`).join("");ct+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
        <span>GENNEMSNIT PR. MÅL</span>
        <button class="btn-icon" onclick="document.getElementById('graph-fs').classList.remove('hidden')" style="font-size:16px;">⤢</button>
      </div>
      <svg viewBox="0 0 340 160" style="width:100%;overflow:visible;">
        <line x1="42" y1="15" x2="42" y2="135" stroke="var(--surface2)" stroke-width="1"/>
        <line x1="42" y1="135" x2="325" y2="135" stroke="var(--surface2)" stroke-width="1"/>
        ${ci}
        <polyline points="${$t}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round"/>
        ${zr}
        <text x="42" y="155" font-size="9" fill="var(--muted)">1</text>
        <text x="325" y="155" text-anchor="end" font-size="9" fill="var(--muted)">${w}</text>
      </svg>
    </div>
    <div id="graph-fs" class="fs-ov hidden" onclick="this.classList.add('hidden')" style="align-items:center;justify-content:center;padding:16px;">
      <div style="background:var(--card);border-radius:16px;padding:16px;width:100%;max-width:90vw;overflow:hidden;" onclick="event.stopPropagation()">
        <div style="font-family:var(--fd);font-size:14px;color:var(--muted);margin-bottom:8px;">GENNEMSNIT PR. MÅL · knib for zoom · dobbelttryk for reset</div>
        <svg id="graph-fs-svg" viewBox="0 0 ${wn} 160" style="width:100%;display:block;touch-action:none;overflow:visible;">
          <line x1="42" y1="15" x2="42" y2="135" stroke="var(--surface2)" stroke-width="1"/>
          <line x1="42" y1="135" x2="${wn-15}" y2="135" stroke="var(--surface2)" stroke-width="1"/>
          ${Gr}
          <polyline points="${qr}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
          ${li}
          <text x="42" y="155" font-size="9" fill="var(--muted)">1</text>
          <text x="${nr(w-1)}" y="155" text-anchor="end" font-size="9" fill="var(--muted)">${w}</text>
        </svg>
        <button class="btn btn-dark" style="width:100%;margin-top:12px;" onclick="document.getElementById('graph-fs').classList.add('hidden')">Luk</button>
      </div>
    </div>`}n.innerHTML=ct;const tr=document.getElementById("graph-fs-svg");if(tr&&eA(tr),s!=="all"&&((ai=g.profile)!=null&&ai.kon)&&((Ut=g.profile)!=null&&Ut.bueklasse)){const H=g.profile.kon==="herre"?"Herre":"Dame",G={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"}[g.profile.bueklasse]||g.profile.bueklasse,X=document.createElement("div");X.innerHTML=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">SAMMENLIGNING · ${H} ${G}</div><div style="color:var(--muted);font-size:13px;text-align:center;padding:8px;">Henter...</div></div>`,n.appendChild(X),Ln(an(te,"bane_stats",s,"runder")).then(oe=>{const we=oe.docs.map(ae=>ae.data()).filter(ae=>ae.kon===g.profile.kon&&ae.bueklasse===g.profile.bueklasse);if(!we.length){X.innerHTML=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">SAMMENLIGNING · ${H} ${G}</div><div style="color:var(--muted);font-size:13px;text-align:center;padding:8px;">Ingen andre ${H} ${G}-skytter har skudt denne bane endnu.</div></div>`;return}const Ce=(we.reduce((ae,$t)=>ae+$t.score,0)/we.length).toFixed(1),ge=Number(C)-Number(Ce),Ge=(ge>0?"+":"")+ge.toFixed(1),Ne=ge>0?"#2aaa5a":ge<0?"var(--danger)":"var(--muted)";X.innerHTML=`<div class="card" style="margin-bottom:16px;">
        <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:12px;">SAMMENLIGNING · ${H} ${G}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
          <div><div style="font-size:11px;color:var(--muted);">DIT SNIT</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${C}</div></div>
          <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
            <div style="font-size:11px;color:var(--muted);">DIFFERENCE</div>
            <div style="font-size:22px;font-weight:700;color:${Ne};">${Ge}</div>
          </div>
          <div><div style="font-size:11px;color:var(--muted);">ANDRES SNIT</div><div style="font-size:22px;font-weight:700;color:var(--txt);">${Ce}</div></div>
        </div>
        <div style="margin-top:8px;font-size:12px;color:var(--muted);text-align:center;">Baseret på ${we.length} runde${we.length!==1?"r":""} fra andre skytter</div>
      </div>`}).catch(()=>{X.remove()})}};window.sendResults=async function(n){if(!n){Fe("Ingen runde at sende","error");return}const e=new Date().toLocaleDateString("da-DK");let t=`3D Bueskydning - Resultater
`;t+="Dato: "+e+`
`,n.courseName&&(t+="Bane: "+n.courseName+`
`),t+=`
--- RESULTATER ---
`,[...n.shooters].sort((c,l)=>tt(l.scores)-tt(c.scores)).forEach((c,l)=>{t+=`
`+(l+1)+". "+c.name+": "+tt(c.scores)+" point"}),t+=`

--- DETALJERET ---
`,n.shooters.forEach(c=>{t+=`
`+c.name+`:
`;for(let l=0;l<n.numTargets;l++){const h=c.scores[l]||[null,null],f=(h[0]!=null&&h[0]!=="M"?Number(h[0]):0)+(h[1]!=null&&h[1]!=="M"?Number(h[1]):0);t+="  Mål "+(l+1)+": "+h.map(p=>p??"-").join("+")+" = "+f+`
`}t+="  Total: "+tt(c.scores)+` point
`}),n.id&&(t+=`

Se resultater i appen:
https://bsk65.github.io/3D/?round=${n.id}
(Kræver login med din bruger)`);const s=n.shooters.map(c=>{var l;return(l=g.friends.find(h=>h.id===c.id))==null?void 0:l.email}).filter(Boolean),i="3D Bueskydning - "+n.name,o="mailto:"+s.join(",")+"?subject="+encodeURIComponent(i)+"&body="+encodeURIComponent(t);window.location.href=o};async function pA(n,e){const t=ce(te,"courses",n),r=await Qn(t);if(!r.exists())return;const s=(r.data().visits||[]).filter(o=>o.roundId!==e);await ft(t,{visits:s});const i=g.courses.find(o=>o.id===n);i&&(i.visits=s)}window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
