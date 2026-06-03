(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var fu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},og=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let I=(c&15)<<2|h>>6,S=h&63;l||(S=64,o||(I=64)),r.push(t[f],t[p],t[I],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):og(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new ag;const I=i<<2|c>>4;if(r.push(I),h!==64){const S=c<<4&240|h>>2;if(r.push(S),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ag extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cg=function(n){const e=rd(n);return sd.encodeByteArray(e,!0)},Li=function(n){return cg(n).replace(/\./g,"")},id=function(n){try{return sd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ug=()=>lg().__FIREBASE_DEFAULTS__,hg=()=>{if(typeof process>"u"||typeof fu>"u")return;const n=fu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&id(n[1]);return e&&JSON.parse(e)},io=()=>{try{return ug()||hg()||dg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},od=n=>{var e,t;return(t=(e=io())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},fg=n=>{const e=od(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ad=()=>{var n;return(n=io())===null||n===void 0?void 0:n.config},cd=n=>{var e;return(e=io())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function pg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Li(JSON.stringify(t)),Li(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function _g(){var n;const e=(n=io())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ig(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Eg(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ld(){return!_g()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ud(){try{return typeof indexedDB=="object"}catch{return!1}}function wg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="FirebaseError";class Et extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Tg,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bg(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Et(s,c,r)}}function bg(n,e){return n.replace(Ag,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ag=/\{\$([^}]+)}/g;function Rg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(mu(i)&&mu(o)){if(!vs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function mu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ns(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function rs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Sg(n,e){const t=new Pg(n,e);return t.subscribe.bind(t)}class Pg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Cg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=aa),s.error===void 0&&(s.error=aa),s.complete===void 0&&(s.complete=aa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function aa(){}/**
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
 */function we(n){return n&&n._delegate?n._delegate:n}class rn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new mg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dg(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kg(n){return n===vn?void 0:n}function Dg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Ng={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Og=Y.INFO,Lg={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Mg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Lg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=Og,this._logHandler=Mg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ng[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Fg=(n,e)=>e.some(t=>n instanceof t);let pu,gu;function Ug(){return pu||(pu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bg(){return gu||(gu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hd=new WeakMap,wa=new WeakMap,dd=new WeakMap,ca=new WeakMap,rc=new WeakMap;function $g(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Zt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&hd.set(t,n)}).catch(()=>{}),rc.set(e,n),e}function jg(n){if(wa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});wa.set(n,e)}let Ta={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return wa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||dd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qg(n){Ta=n(Ta)}function zg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(la(this),e,...t);return dd.set(r,e.sort?e.sort():[e]),Zt(r)}:Bg().includes(n)?function(...e){return n.apply(la(this),e),Zt(hd.get(this))}:function(...e){return Zt(n.apply(la(this),e))}}function Gg(n){return typeof n=="function"?zg(n):(n instanceof IDBTransaction&&jg(n),Fg(n,Ug())?new Proxy(n,Ta):n)}function Zt(n){if(n instanceof IDBRequest)return $g(n);if(ca.has(n))return ca.get(n);const e=Gg(n);return e!==n&&(ca.set(n,e),rc.set(e,n)),e}const la=n=>rc.get(n);function Kg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Zt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Hg=["get","getKey","getAll","getAllKeys","count"],Wg=["put","add","delete","clear"],ua=new Map;function _u(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ua.get(e))return ua.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Wg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hg.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return ua.set(e,i),i}qg(n=>({...n,get:(e,t,r)=>_u(e,t)||n.get(e,t,r),has:(e,t)=>!!_u(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Jg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ba="@firebase/app",yu="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new nc("@firebase/app"),Xg="@firebase/app-compat",Yg="@firebase/analytics-compat",Zg="@firebase/analytics",e_="@firebase/app-check-compat",t_="@firebase/app-check",n_="@firebase/auth",r_="@firebase/auth-compat",s_="@firebase/database",i_="@firebase/data-connect",o_="@firebase/database-compat",a_="@firebase/functions",c_="@firebase/functions-compat",l_="@firebase/installations",u_="@firebase/installations-compat",h_="@firebase/messaging",d_="@firebase/messaging-compat",f_="@firebase/performance",m_="@firebase/performance-compat",p_="@firebase/remote-config",g_="@firebase/remote-config-compat",__="@firebase/storage",y_="@firebase/storage-compat",v_="@firebase/firestore",I_="@firebase/vertexai-preview",E_="@firebase/firestore-compat",w_="firebase",T_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="[DEFAULT]",b_={[ba]:"fire-core",[Xg]:"fire-core-compat",[Zg]:"fire-analytics",[Yg]:"fire-analytics-compat",[t_]:"fire-app-check",[e_]:"fire-app-check-compat",[n_]:"fire-auth",[r_]:"fire-auth-compat",[s_]:"fire-rtdb",[i_]:"fire-data-connect",[o_]:"fire-rtdb-compat",[a_]:"fire-fn",[c_]:"fire-fn-compat",[l_]:"fire-iid",[u_]:"fire-iid-compat",[h_]:"fire-fcm",[d_]:"fire-fcm-compat",[f_]:"fire-perf",[m_]:"fire-perf-compat",[p_]:"fire-rc",[g_]:"fire-rc-compat",[__]:"fire-gcs",[y_]:"fire-gcs-compat",[v_]:"fire-fst",[E_]:"fire-fst-compat",[I_]:"fire-vertex","fire-js":"fire-js",[w_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Map,A_=new Map,Ra=new Map;function vu(n,e){try{n.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xn(n){const e=n.name;if(Ra.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;Ra.set(e,n);for(const t of Mi.values())vu(t,n);for(const t of A_.values())vu(t,n);return!0}function oo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function dt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new Ns("app","Firebase",R_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=T_;function fd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Aa,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(t||(t=ad()),!t)throw en.create("no-options");const i=Mi.get(s);if(i){if(vs(t,i.options)&&vs(r,i.config))return i;throw en.create("duplicate-app",{appName:s})}const o=new Vg(s);for(const l of Ra.values())o.addComponent(l);const c=new S_(t,r,o);return Mi.set(s,c),c}function md(n=Aa){const e=Mi.get(n);if(!e&&n===Aa&&ad())return fd();if(!e)throw en.create("no-app",{appName:n});return e}function pt(n,e,t){var r;let s=(r=b_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(c.join(" "));return}xn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const P_="firebase-heartbeat-database",C_=1,Is="firebase-heartbeat-store";let ha=null;function pd(){return ha||(ha=Kg(P_,C_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Is)}catch(t){console.warn(t)}}}}).catch(n=>{throw en.create("idb-open",{originalErrorMessage:n.message})})),ha}async function x_(n){try{const t=(await pd()).transaction(Is),r=await t.objectStore(Is).get(gd(n));return await t.done,r}catch(e){if(e instanceof Et)Dt.warn(e.message);else{const t=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(t.message)}}}async function Iu(n,e){try{const r=(await pd()).transaction(Is,"readwrite");await r.objectStore(Is).put(e,gd(n)),await r.done}catch(t){if(t instanceof Et)Dt.warn(t.message);else{const r=en.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(r.message)}}}function gd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const k_=1024,D_=30*24*60*60*1e3;class V_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new O_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Eu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=D_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Eu(),{heartbeatsToSend:r,unsentEntries:s}=N_(this._heartbeatsCache.heartbeats),i=Li(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Dt.warn(t),""}}}function Eu(){return new Date().toISOString().substring(0,10)}function N_(n,e=k_){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class O_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ud()?wg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await x_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Iu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Iu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wu(n){return Li(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(n){xn(new rn("platform-logger",e=>new Qg(e),"PRIVATE")),xn(new rn("heartbeat",e=>new V_(e),"PRIVATE")),pt(ba,yu,n),pt(ba,yu,"esm2017"),pt("fire-js","")}L_("");var M_="firebase",F_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt(M_,F_,"app");function sc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function _d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const U_=_d,yd=new Ns("auth","Firebase",_d());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new nc("@firebase/auth");function B_(n,...e){Fi.logLevel<=Y.WARN&&Fi.warn(`Auth (${qn}): ${n}`,...e)}function Ii(n,...e){Fi.logLevel<=Y.ERROR&&Fi.error(`Auth (${qn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,...e){throw ic(n,...e)}function gt(n,...e){return ic(n,...e)}function vd(n,e,t){const r=Object.assign(Object.assign({},U_()),{[e]:t});return new Ns("auth","Firebase",r).create(e,{appName:n.name})}function kt(n){return vd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ic(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return yd.create(n,...e)}function H(n,e,...t){if(!n)throw ic(e,...t)}function St(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ii(e),new Error(e)}function Vt(n,e){n||St(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $_(){return Tu()==="http:"||Tu()==="https:"}function Tu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($_()||vg()||"connection"in navigator)?navigator.onLine:!0}function q_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vt(t>e,"Short delay should be less than long delay!"),this.isMobile=gg()||Ig()}get(){return j_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,e){Vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=new Ls(3e4,6e4);function Ot(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Lt(n,e,t,r,s={}){return Ed(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Os(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return yg()||(h.referrerPolicy="no-referrer"),Id.fetch()(wd(n,n.config.apiHost,t,c),h)})}async function Ed(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},z_),e);try{const s=new H_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw hi(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw vd(n,f,h);lt(n,f)}}catch(s){if(s instanceof Et)throw s;lt(n,"network-request-failed",{message:String(s)})}}async function Ms(n,e,t,r,s={}){const i=await Lt(n,e,t,r,s);return"mfaPendingCredential"in i&&lt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function wd(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?oc(n.config,s):`${n.config.apiScheme}://${s}`}function K_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class H_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),G_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=gt(n,e,r);return s.customData._tokenResponse=t,s}function bu(n){return n!==void 0&&n.enterprise!==void 0}class W_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return K_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Q_(n,e){return Lt(n,"GET","/v2/recaptchaConfig",Ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(n,e){return Lt(n,"POST","/v1/accounts:delete",e)}async function Td(n,e){return Lt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function X_(n,e=!1){const t=we(n),r=await t.getIdToken(e),s=ac(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:us(da(s.auth_time)),issuedAtTime:us(da(s.iat)),expirationTime:us(da(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function da(n){return Number(n)*1e3}function ac(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ii("JWT malformed, contained fewer than 3 sections"),null;try{const s=id(t);return s?JSON.parse(s):(Ii("Failed to decode base64 JWT payload"),null)}catch(s){return Ii("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Au(n){const e=ac(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Et&&Y_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Y_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Es(n,Td(t,{idToken:r}));H(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bd(i.providerUserInfo):[],c=ty(n.providerData,o),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Pa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function ey(n){const e=we(n);await Ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ty(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bd(n){return n.map(e=>{var{providerId:t}=e,r=sc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(n,e){const t=await Ed(n,{},async()=>{const r=Os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=wd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Id.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ry(n,e){return Lt(n,"POST","/v2/accounts:revokeToken",Ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Au(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Au(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ny(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new lr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Es(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return X_(this,e)}reload(){return ey(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ui(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(kt(this.auth));const e=await this.getIdToken();return await Es(this,J_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=t.photoURL)!==null&&o!==void 0?o:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,G=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:q,isAnonymous:X,providerData:W,stsTokenManager:E}=t;H(M&&E,e,"internal-error");const g=lr.fromJSON(this.name,E);H(typeof M=="string",e,"internal-error"),jt(p,e.name),jt(I,e.name),H(typeof q=="boolean",e,"internal-error"),H(typeof X=="boolean",e,"internal-error"),jt(S,e.name),jt(k,e.name),jt(V,e.name),jt(x,e.name),jt(G,e.name),jt(B,e.name);const v=new Pt({uid:M,auth:e,email:I,emailVerified:q,displayName:p,isAnonymous:X,photoURL:k,phoneNumber:S,tenantId:V,stsTokenManager:g,createdAt:G,lastLoginAt:B});return W&&Array.isArray(W)&&(v.providerData=W.map(w=>Object.assign({},w))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new lr;s.updateFromServerResponse(t);const i=new Pt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ui(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new lr;c.updateFromIdToken(r);const l=new Pt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Pa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Map;function Ct(n){Vt(n instanceof Function,"Expected a class definition");let e=Ru.get(n);return e?(Vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ru.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ad.type="NONE";const Su=Ad;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n,e,t){return`firebase:${n}:${e}:${t}`}class ur{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ei(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ei("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ur(Ct(Su),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ct(Su);const o=Ei(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=Pt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ur(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ur(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kd(e))return"Blackberry";if(Dd(e))return"Webos";if(Sd(e))return"Safari";if((e.includes("chrome/")||Pd(e))&&!e.includes("edge/"))return"Chrome";if(xd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rd(n=Ae()){return/firefox\//i.test(n)}function Sd(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pd(n=Ae()){return/crios\//i.test(n)}function Cd(n=Ae()){return/iemobile/i.test(n)}function xd(n=Ae()){return/android/i.test(n)}function kd(n=Ae()){return/blackberry/i.test(n)}function Dd(n=Ae()){return/webos/i.test(n)}function cc(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sy(n=Ae()){var e;return cc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iy(){return Eg()&&document.documentMode===10}function Vd(n=Ae()){return cc(n)||xd(n)||Dd(n)||kd(n)||/windows phone/i.test(n)||Cd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n,e=[]){let t;switch(n){case"Browser":t=Pu(Ae());break;case"Worker":t=`${Pu(Ae())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qn}/${r}`}/**
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
 */class oy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ay(n,e={}){return Lt(n,"GET","/v2/passwordPolicy",Ot(n,e))}/**
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
 */const cy=6;class ly{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:cy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cu(this),this.idTokenSubscription=new Cu(this),this.beforeStateQueue=new oy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ct(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Td(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ui(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=q_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(kt(this));const t=e?we(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ay(this),t=new ly(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ry(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ct(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[Ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&B_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function cn(n){return we(n)}class Cu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sg(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hy(n){ao=n}function Od(n){return ao.loadJS(n)}function dy(){return ao.recaptchaEnterpriseScript}function fy(){return ao.gapiScript}function my(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const py="recaptcha-enterprise",gy="NO_RECAPTCHA";class _y{constructor(e){this.type=py,this.auth=cn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Q_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new W_(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;bu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(gy)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&bu(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=dy();l.length!==0&&(l+=c),Od(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function xu(n,e,t,r=!1){const s=new _y(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bi(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await xu(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xu(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(n,e){const t=oo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(vs(i,e??{}))return s;lt(s,"already-initialized")}return t.initialize({options:e})}function vy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Iy(n,e,t){const r=cn(n);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ld(e),{host:o,port:c}=Ey(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),wy()}function Ld(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ey(n){const e=Ld(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ku(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ku(o)}}}function ku(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return St("not implemented")}_getIdTokenResponse(e){return St("not implemented")}_linkToIdToken(e,t){return St("not implemented")}_getReauthenticationResolver(e){return St("not implemented")}}async function Ty(n,e){return Lt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(n,e){return Ms(n,"POST","/v1/accounts:signInWithPassword",Ot(n,e))}async function Ay(n,e){return Lt(n,"POST","/v1/accounts:sendOobCode",Ot(n,e))}async function Ry(n,e){return Ay(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sy(n,e){return Ms(n,"POST","/v1/accounts:signInWithEmailLink",Ot(n,e))}async function Py(n,e){return Ms(n,"POST","/v1/accounts:signInWithEmailLink",Ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends lc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ws(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ws(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bi(e,t,"signInWithPassword",by);case"emailLink":return Sy(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bi(e,r,"signUpPassword",Ty);case"emailLink":return Py(e,{idToken:t,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,e){return Ms(n,"POST","/v1/accounts:signInWithIdp",Ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="http://localhost";class kn extends lc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=sc(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new kn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return hr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,hr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hr(e,t)}buildRequest(){const e={requestUri:Cy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Os(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ky(n){const e=ns(rs(n)).link,t=e?ns(rs(e)).deep_link_id:null,r=ns(rs(n)).deep_link_id;return(r?ns(rs(r)).link:null)||r||t||e||n}class uc{constructor(e){var t,r,s,i,o,c;const l=ns(rs(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=xy((s=l.mode)!==null&&s!==void 0?s:null);H(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=ky(e);try{return new uc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.providerId=Sr.PROVIDER_ID}static credential(e,t){return ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=uc.parseLink(t);return H(r,"argument-error"),ws._fromEmailAndCode(e,r.code,r.tenantId)}}Sr.PROVIDER_ID="password";Sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Md{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Fs{constructor(){super("facebook.com")}static credential(e){return kn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Kt.credential(t,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Fs{constructor(){super("github.com")}static credential(e){return kn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Fs{constructor(){super("twitter.com")}static credential(e,t){return kn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Wt.credential(t,r)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(n,e){return Ms(n,"POST","/v1/accounts:signUp",Ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=Du(r);return new Dn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Du(r);return new Dn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Du(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Et{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$i.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new $i(e,t,r,s)}}function Fd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$i._fromErrorAndOperation(n,i,e,r):i})}async function Vy(n,e,t=!1){const r=await Es(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Dn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(n,e,t=!1){const{auth:r}=n;if(dt(r.app))return Promise.reject(kt(r));const s="reauthenticate";try{const i=await Es(n,Fd(r,s,e,n),t);H(i.idToken,r,"internal-error");const o=ac(i.idToken);H(o,r,"internal-error");const{sub:c}=o;return H(n.uid===c,r,"user-mismatch"),Dn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(n,e,t=!1){if(dt(n.app))return Promise.reject(kt(n));const r="signIn",s=await Fd(n,r,e),i=await Dn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Oy(n,e){return Ud(cn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(n){const e=cn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ly(n,e,t){const r=cn(n);await Bi(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ry)}async function My(n,e,t){if(dt(n.app))return Promise.reject(kt(n));const r=cn(n),o=await Bi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bd(n),l}),c=await Dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Fy(n,e,t){return dt(n.app)?Promise.reject(kt(n)):Oy(we(n),Sr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bd(n),r})}function Uy(n,e,t,r){return we(n).onIdTokenChanged(e,t,r)}function By(n,e,t){return we(n).beforeAuthStateChanged(e,t)}function $y(n,e,t,r){return we(n).onAuthStateChanged(e,t,r)}function jy(n){return we(n).signOut()}const ji="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ji,"1"),this.storage.removeItem(ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=1e3,zy=10;class jd extends $d{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);iy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jd.type="LOCAL";const Gy=jd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends $d{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qd.type="SESSION";const zd=qd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new co(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await Ky(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}co.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=hc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const I=p;if(I.data.eventId===h)switch(I.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(I.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function Wy(n){_t().location.href=n}/**
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
 */function Gd(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function Qy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Xy(){return Gd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="firebaseLocalStorageDb",Yy=1,qi="firebaseLocalStorage",Hd="fbase_key";class Us{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lo(n,e){return n.transaction([qi],e?"readwrite":"readonly").objectStore(qi)}function Zy(){const n=indexedDB.deleteDatabase(Kd);return new Us(n).toPromise()}function Ca(){const n=indexedDB.open(Kd,Yy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(qi,{keyPath:Hd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(qi)?e(r):(r.close(),await Zy(),e(await Ca()))})})}async function Vu(n,e,t){const r=lo(n,!0).put({[Hd]:e,value:t});return new Us(r).toPromise()}async function ev(n,e){const t=lo(n,!1).get(e),r=await new Us(t).toPromise();return r===void 0?null:r.value}function Nu(n,e){const t=lo(n,!0).delete(e);return new Us(t).toPromise()}const tv=800,nv=3;class Wd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ca(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>nv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(Xy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Qy(),!this.activeServiceWorker)return;this.sender=new Hy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ca();return await Vu(e,ji,"1"),await Nu(e,ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ev(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=lo(s,!1).getAll();return new Us(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wd.type="LOCAL";const rv=Wd;new Ls(3e4,6e4);/**
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
 */function sv(n,e){return e?Ct(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends lc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iv(n){return Ud(n.auth,new dc(n),n.bypassAuthState)}function ov(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),Ny(t,new dc(n),n.bypassAuthState)}async function av(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),Vy(t,new dc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iv;case"linkViaPopup":case"linkViaRedirect":return av;case"reauthViaPopup":case"reauthViaRedirect":return ov;default:lt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Ls(2e3,1e4);class cr extends Qd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cv.get())};e()}}cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="pendingRedirect",wi=new Map;class uv extends Qd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=wi.get(this.auth._key());if(!e){try{const r=await hv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}wi.set(this.auth._key(),e)}return this.bypassAuthState||wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hv(n,e){const t=mv(e),r=fv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function dv(n,e){wi.set(n._key(),e)}function fv(n){return Ct(n._redirectPersistence)}function mv(n){return Ei(lv,n.config.apiKey,n.name)}async function pv(n,e,t=!1){if(dt(n.app))return Promise.reject(kt(n));const r=cn(n),s=sv(r,e),o=await new uv(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=10*60*1e3;class _v{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Jd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(gt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ou(e))}saveEventToCache(e){this.cachedEventUids.add(Ou(e)),this.lastProcessedEventTime=Date.now()}}function Ou(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Jd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(n,e={}){return Lt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ev=/^https?/;async function wv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vv(n);for(const t of e)try{if(Tv(t))return}catch{}lt(n,"unauthorized-domain")}function Tv(n){const e=Sa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Ev.test(t))return!1;if(Iv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const bv=new Ls(3e4,6e4);function Lu(){const n=_t().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Av(n){return new Promise((e,t)=>{var r,s,i;function o(){Lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lu(),t(gt(n,"network-request-failed"))},timeout:bv.get()})}if(!((s=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_t().gapi)===null||i===void 0)&&i.load)o();else{const c=my("iframefcb");return _t()[c]=()=>{gapi.load?o():t(gt(n,"network-request-failed"))},Od(`${fy()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ti=null,e})}let Ti=null;function Rv(n){return Ti=Ti||Av(n),Ti}/**
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
 */const Sv=new Ls(5e3,15e3),Pv="__/auth/iframe",Cv="emulator/auth/iframe",xv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dv(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?oc(e,Cv):`https://${n.config.authDomain}/${Pv}`,r={apiKey:e.apiKey,appName:n.name,v:qn},s=kv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Os(r).slice(1)}`}async function Vv(n){const e=await Rv(n),t=_t().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:Dv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gt(n,"network-request-failed"),c=_t().setTimeout(()=>{i(o)},Sv.get());function l(){_t().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Nv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ov=500,Lv=600,Mv="_blank",Fv="http://localhost";class Mu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uv(n,e,t,r=Ov,s=Lv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Nv),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Ae().toLowerCase();t&&(c=Pd(h)?Mv:t),Rd(h)&&(e=e||Fv,l.scrollbars="yes");const f=Object.entries(l).reduce((I,[S,k])=>`${I}${S}=${k},`,"");if(sy(h)&&c!=="_self")return Bv(e||"",c),new Mu(null);const p=window.open(e||"",c,f);H(p,n,"popup-blocked");try{p.focus()}catch{}return new Mu(p)}function Bv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const $v="__/auth/handler",jv="emulator/auth/handler",qv=encodeURIComponent("fac");async function Fu(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:qn,eventId:s};if(e instanceof Md){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Rg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Fs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${qv}=${encodeURIComponent(l)}`:"";return`${zv(n)}?${Os(c).slice(1)}${h}`}function zv({config:n}){return n.emulator?oc(n,jv):`https://${n.authDomain}/${$v}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="webStorageSupport";class Gv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zd,this._completeRedirectFn=pv,this._overrideRedirectResult=dv}async _openPopup(e,t,r,s){var i;Vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Fu(e,t,r,Sa(),s);return Uv(e,o,hc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Fu(e,t,r,Sa(),s);return Wy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Vv(e),r=new _v(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fa,{type:fa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[fa];o!==void 0&&t(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vd()||Sd()||cc()}}const Kv=Gv;var Uu="@firebase/auth",Bu="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qv(n){xn(new rn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nd(n)},h=new uy(r,s,i,l);return vy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xn(new rn("auth-internal",e=>{const t=cn(e.getProvider("auth").getImmediate());return(r=>new Hv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(Uu,Bu,Wv(n)),pt(Uu,Bu,"esm2017")}/**
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
 */const Jv=5*60,Xv=cd("authIdTokenMaxAge")||Jv;let $u=null;const Yv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Xv)return;const s=t==null?void 0:t.token;$u!==s&&($u=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zv(n=md()){const e=oo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yy(n,{popupRedirectResolver:Kv,persistence:[rv,Gy,zd]}),r=cd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Yv(i.toString());By(t,o,()=>o(t.currentUser)),Uy(t,c=>o(c))}}const s=od("auth");return s&&Iy(t,`http://${s}`),t}function eI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}hy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=gt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",eI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qv("Browser");var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var An,Xd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function v(){}v.prototype=g.prototype,E.D=g.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(w,T,A){for(var y=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)y[ot-2]=arguments[ot];return g.prototype[T].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,v){v||(v=0);var w=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)w[T]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(T=0;16>T;++T)w[T]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=E.g[0],v=E.g[1],T=E.g[2];var A=E.g[3],y=g+(A^v&(T^A))+w[0]+3614090360&4294967295;g=v+(y<<7&4294967295|y>>>25),y=A+(T^g&(v^T))+w[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=T+(v^A&(g^v))+w[2]+606105819&4294967295,T=A+(y<<17&4294967295|y>>>15),y=v+(g^T&(A^g))+w[3]+3250441966&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(A^v&(T^A))+w[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(T^g&(v^T))+w[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=T+(v^A&(g^v))+w[6]+2821735955&4294967295,T=A+(y<<17&4294967295|y>>>15),y=v+(g^T&(A^g))+w[7]+4249261313&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(A^v&(T^A))+w[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(T^g&(v^T))+w[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=T+(v^A&(g^v))+w[10]+4294925233&4294967295,T=A+(y<<17&4294967295|y>>>15),y=v+(g^T&(A^g))+w[11]+2304563134&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(A^v&(T^A))+w[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(T^g&(v^T))+w[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=T+(v^A&(g^v))+w[14]+2792965006&4294967295,T=A+(y<<17&4294967295|y>>>15),y=v+(g^T&(A^g))+w[15]+1236535329&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(T^A&(v^T))+w[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^T&(g^v))+w[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(A^g))+w[11]+643717713&4294967295,T=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(T^A))+w[0]+3921069994&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(T^A&(v^T))+w[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^T&(g^v))+w[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(A^g))+w[15]+3634488961&4294967295,T=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(T^A))+w[4]+3889429448&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(T^A&(v^T))+w[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^T&(g^v))+w[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(A^g))+w[3]+4107603335&4294967295,T=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(T^A))+w[8]+1163531501&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(T^A&(v^T))+w[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^T&(g^v))+w[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(A^g))+w[7]+1735328473&4294967295,T=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(T^A))+w[12]+2368359562&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(v^T^A)+w[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^T)+w[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=T+(A^g^v)+w[11]+1839030562&4294967295,T=A+(y<<16&4294967295|y>>>16),y=v+(T^A^g)+w[14]+4259657740&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(v^T^A)+w[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^T)+w[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=T+(A^g^v)+w[7]+4139469664&4294967295,T=A+(y<<16&4294967295|y>>>16),y=v+(T^A^g)+w[10]+3200236656&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(v^T^A)+w[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^T)+w[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=T+(A^g^v)+w[3]+3572445317&4294967295,T=A+(y<<16&4294967295|y>>>16),y=v+(T^A^g)+w[6]+76029189&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(v^T^A)+w[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^T)+w[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=T+(A^g^v)+w[15]+530742520&4294967295,T=A+(y<<16&4294967295|y>>>16),y=v+(T^A^g)+w[2]+3299628645&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(T^(v|~A))+w[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~T))+w[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=T+(g^(A|~v))+w[14]+2878612391&4294967295,T=A+(y<<15&4294967295|y>>>17),y=v+(A^(T|~g))+w[5]+4237533241&4294967295,v=T+(y<<21&4294967295|y>>>11),y=g+(T^(v|~A))+w[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~T))+w[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=T+(g^(A|~v))+w[10]+4293915773&4294967295,T=A+(y<<15&4294967295|y>>>17),y=v+(A^(T|~g))+w[1]+2240044497&4294967295,v=T+(y<<21&4294967295|y>>>11),y=g+(T^(v|~A))+w[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~T))+w[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=T+(g^(A|~v))+w[6]+2734768916&4294967295,T=A+(y<<15&4294967295|y>>>17),y=v+(A^(T|~g))+w[13]+1309151649&4294967295,v=T+(y<<21&4294967295|y>>>11),y=g+(T^(v|~A))+w[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~T))+w[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=T+(g^(A|~v))+w[2]+718787259&4294967295,T=A+(y<<15&4294967295|y>>>17),y=v+(A^(T|~g))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var v=g-this.blockSize,w=this.B,T=this.h,A=0;A<g;){if(T==0)for(;A<=v;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<g;)if(w[T++]=E.charCodeAt(A++),T==this.blockSize){s(this,w),T=0;break}}else for(;A<g;)if(w[T++]=E[A++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var v=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=v&255,v/=256;for(this.u(E),E=Array(16),g=v=0;4>g;++g)for(var w=0;32>w;w+=8)E[v++]=this.g[g]>>>w&255;return E};function i(E,g){var v=c;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=g(E)}function o(E,g){this.h=g;for(var v=[],w=!0,T=E.length-1;0<=T;T--){var A=E[T]|0;w&&A==g||(v[T]=A,w=!1)}this.g=v}var c={};function l(E){return-128<=E&&128>E?i(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return x(h(-E));for(var g=[],v=1,w=0;E>=v;w++)g[w]=E/v|0,v*=4294967296;return new o(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return x(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),w=p,T=0;T<E.length;T+=8){var A=Math.min(8,E.length-T),y=parseInt(E.substring(T,T+A),g);8>A?(A=h(Math.pow(g,A)),w=w.j(A).add(h(y))):(w=w.j(v),w=w.add(h(y)))}return w}var p=l(0),I=l(1),S=l(16777216);n=o.prototype,n.m=function(){if(V(this))return-x(this).m();for(var E=0,g=1,v=0;v<this.g.length;v++){var w=this.i(v);E+=(0<=w?w:4294967296+w)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(V(this))return"-"+x(this).toString(E);for(var g=h(Math.pow(E,6)),v=this,w="";;){var T=q(v,g).g;v=G(v,T.j(g));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=T,k(v))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=G(this,E),V(E)?-1:k(E)?0:1};function x(E){for(var g=E.g.length,v=[],w=0;w<g;w++)v[w]=~E.g[w];return new o(v,~E.h).add(I)}n.abs=function(){return V(this)?x(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],w=0,T=0;T<=g;T++){var A=w+(this.i(T)&65535)+(E.i(T)&65535),y=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=y>>>16,A&=65535,y&=65535,v[T]=y<<16|A}return new o(v,v[v.length-1]&-2147483648?-1:0)};function G(E,g){return E.add(x(g))}n.j=function(E){if(k(this)||k(E))return p;if(V(this))return V(E)?x(this).j(x(E)):x(x(this).j(E));if(V(E))return x(this.j(x(E)));if(0>this.l(S)&&0>E.l(S))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,v=[],w=0;w<2*g;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<E.g.length;T++){var A=this.i(w)>>>16,y=this.i(w)&65535,ot=E.i(T)>>>16,$e=E.i(T)&65535;v[2*w+2*T]+=y*$e,B(v,2*w+2*T),v[2*w+2*T+1]+=A*$e,B(v,2*w+2*T+1),v[2*w+2*T+1]+=y*ot,B(v,2*w+2*T+1),v[2*w+2*T+2]+=A*ot,B(v,2*w+2*T+2)}for(w=0;w<g;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=g;w<2*g;w++)v[w]=0;return new o(v,0)};function B(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function M(E,g){this.g=E,this.h=g}function q(E,g){if(k(g))throw Error("division by zero");if(k(E))return new M(p,p);if(V(E))return g=q(x(E),g),new M(x(g.g),x(g.h));if(V(g))return g=q(E,x(g)),new M(x(g.g),g.h);if(30<E.g.length){if(V(E)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var v=I,w=g;0>=w.l(E);)v=X(v),w=X(w);var T=W(v,1),A=W(w,1);for(w=W(w,2),v=W(v,2);!k(w);){var y=A.add(w);0>=y.l(E)&&(T=T.add(v),A=y),w=W(w,1),v=W(v,1)}return g=G(E,T.j(g)),new M(T,g)}for(T=p;0<=E.l(g);){for(v=Math.max(1,Math.floor(E.m()/g.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=h(v),y=A.j(g);V(y)||0<y.l(E);)v-=w,A=h(v),y=A.j(g);k(A)&&(A=I),T=T.add(A),E=G(E,y)}return new M(T,E)}n.A=function(E){return q(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],w=0;w<g;w++)v[w]=this.i(w)&E.i(w);return new o(v,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],w=0;w<g;w++)v[w]=this.i(w)|E.i(w);return new o(v,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],w=0;w<g;w++)v[w]=this.i(w)^E.i(w);return new o(v,this.h^E.h)};function X(E){for(var g=E.g.length+1,v=[],w=0;w<g;w++)v[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(v,E.h)}function W(E,g){var v=g>>5;g%=32;for(var w=E.g.length-v,T=[],A=0;A<w;A++)T[A]=0<g?E.i(A+v)>>>g|E.i(A+v+1)<<32-g:E.i(A+v);return new o(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Xd=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,An=o}).apply(typeof ju<"u"?ju:typeof self<"u"?self:typeof window<"u"?window:{});var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yd,ss,Zd,bi,xa,ef,tf,nf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof di=="object"&&di];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,b={next:function(){if(!m&&d<a.length){var P=d++;return{value:u(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),a.apply(u,b)}}return function(){return a.apply(u,arguments)}}function I(a,u,d){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,I.apply(null,arguments)}function S(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,b,P){for(var N=Array(arguments.length-2),le=2;le<arguments.length;le++)N[le-2]=arguments[le];return u.prototype[b].apply(m,N)}}function V(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function x(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const b=a.length||0,P=m.length||0;a.length=b+P;for(let N=0;N<P;N++)a[b+N]=m[N]}else a.push(m)}}class G{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var X=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function W(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function E(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let P=0;P<v.length;P++)d=v[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function T(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function y(){var a=Hn;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ot{constructor(){this.h=this.g=null}add(u,d){const m=$e.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var $e=new G(()=>new Bo,a=>a.reset());class Bo{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let st,Ft=!1,Hn=new ot,Or=()=>{const a=c.Promise.resolve(void 0);st=()=>{a.then(Hs)}};var Hs=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){A(d)}var u=$e;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Ft=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function j(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}j.prototype.h=function(){this.defaultPrevented=!0};var he=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function se(a,u){if(j.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(X){e:{try{q(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Z[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&se.aa.h.call(this)}}k(se,j);var Z={2:"touch",3:"pen",4:"mouse"};se.prototype.h=function(){se.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),je=0;function Se(a,u,d,m,b){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=b,this.key=++je,this.da=this.fa=!1}function We(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ce(a){this.src=a,this.g={},this.h=0}Ce.prototype.add=function(a,u,d,m,b){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var N=wt(a,u,m,b);return-1<N?(u=a[N],d||(u.fa=!1)):(u=new Se(u,this.src,P,!!m,b),u.fa=d,a.push(u)),u};function Ve(a,u){var d=u.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=b)&&Array.prototype.splice.call(m,b,1),P&&(We(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function wt(a,u,d,m){for(var b=0;b<a.length;++b){var P=a[b];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return b}return-1}var Tt="closure_lm_"+(1e6*Math.random()|0),Wn={};function Ws(a,u,d,m,b){if(Array.isArray(u)){for(var P=0;P<u.length;P++)Ws(a,u[P],d,m,b);return null}return d=_l(d),a&&a[De]?a.K(u,d,h(m)?!!m.capture:!1,b):$o(a,u,d,!1,m,b)}function $o(a,u,d,m,b,P){if(!u)throw Error("Invalid event type");var N=h(b)?!!b.capture:!!b,le=qo(a);if(le||(a[Tt]=le=new Ce(a)),d=le.add(u,d,m,N,P),d.proxy)return d;if(m=ie(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)he||(b=N),b===void 0&&(b=!1),a.addEventListener(u.toString(),m,b);else if(a.attachEvent)a.attachEvent(gl(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ie(){function a(d){return u.call(a.src,a.listener,d)}const u=Vp;return a}function bt(a,u,d,m,b){if(Array.isArray(u))for(var P=0;P<u.length;P++)bt(a,u[P],d,m,b);else m=h(m)?!!m.capture:!!m,d=_l(d),a&&a[De]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],d=wt(P,d,m,b),-1<d&&(We(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=qo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=wt(u,d,m,b)),(d=-1<a?u[a]:null)&&jo(d))}function jo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[De])Ve(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(gl(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=qo(u))?(Ve(d,a),d.h==0&&(d.src=null,u[Tt]=null)):We(a)}}}function gl(a){return a in Wn?Wn[a]:Wn[a]="on"+a}function Vp(a,u){if(a.da)a=!0;else{u=new se(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&jo(a),a=d.call(m,u)}return a}function qo(a){return a=a[Tt],a instanceof Ce?a:null}var zo="__closure_events_fn_"+(1e9*Math.random()>>>0);function _l(a){return typeof a=="function"?a:(a[zo]||(a[zo]=function(u){return a.handleEvent(u)}),a[zo])}function Ne(){K.call(this),this.i=new Ce(this),this.M=this,this.F=null}k(Ne,K),Ne.prototype[De]=!0,Ne.prototype.removeEventListener=function(a,u,d,m){bt(this,a,u,d,m)};function qe(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new j(u,a);else if(u instanceof j)u.target=u.target||a;else{var b=u;u=new j(m,a),w(u,b)}if(b=!0,d)for(var P=d.length-1;0<=P;P--){var N=u.g=d[P];b=Qs(N,m,!0,u)&&b}if(N=u.g=a,b=Qs(N,m,!0,u)&&b,b=Qs(N,m,!1,u)&&b,d)for(P=0;P<d.length;P++)N=u.g=d[P],b=Qs(N,m,!1,u)&&b}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)We(d[m]);delete a.g[u],a.h--}}this.F=null},Ne.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},Ne.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Qs(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,P=0;P<u.length;++P){var N=u[P];if(N&&!N.da&&N.capture==d){var le=N.listener,xe=N.ha||N.src;N.fa&&Ve(a.i,N),b=le.call(xe,m)!==!1&&b}}return b&&!m.defaultPrevented}function yl(a,u,d){if(typeof a=="function")d&&(a=I(a,d));else if(a&&typeof a.handleEvent=="function")a=I(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function vl(a){a.g=yl(()=>{a.g=null,a.i&&(a.i=!1,vl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Np extends K{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:vl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(a){K.call(this),this.h=a,this.g={}}k(Lr,K);var Il=[];function El(a){W(a.g,function(u,d){this.g.hasOwnProperty(d)&&jo(u)},a),a.g={}}Lr.prototype.N=function(){Lr.aa.N.call(this),El(this)},Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Go=c.JSON.stringify,Op=c.JSON.parse,Lp=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ko(){}Ko.prototype.h=null;function wl(a){return a.h||(a.h=a.i())}function Tl(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ho(){j.call(this,"d")}k(Ho,j);function Wo(){j.call(this,"c")}k(Wo,j);var mn={},bl=null;function Js(){return bl=bl||new Ne}mn.La="serverreachability";function Al(a){j.call(this,mn.La,a)}k(Al,j);function Fr(a){const u=Js();qe(u,new Al(u))}mn.STAT_EVENT="statevent";function Rl(a,u){j.call(this,mn.STAT_EVENT,a),this.stat=u}k(Rl,j);function ze(a){const u=Js();qe(u,new Rl(u,a))}mn.Ma="timingevent";function Sl(a,u){j.call(this,mn.Ma,a),this.size=u}k(Sl,j);function Ur(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Br(){this.g=!0}Br.prototype.xa=function(){this.g=!1};function Mp(a,u,d,m,b,P){a.info(function(){if(a.g)if(P)for(var N="",le=P.split("&"),xe=0;xe<le.length;xe++){var ne=le[xe].split("=");if(1<ne.length){var Oe=ne[0];ne=ne[1];var Le=Oe.split("_");N=2<=Le.length&&Le[1]=="type"?N+(Oe+"="+ne+"&"):N+(Oe+"=redacted&")}}else N=null;else N=P;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+u+`
`+d+`
`+N})}function Fp(a,u,d,m,b,P,N){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+u+`
`+d+`
`+P+" "+N})}function Qn(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Bp(a,d)+(m?" "+m:"")})}function Up(a,u){a.info(function(){return"TIMEOUT: "+u})}Br.prototype.info=function(){};function Bp(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var N=1;N<b.length;N++)b[N]=""}}}}return Go(d)}catch{return u}}var Xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qo;function Ys(){}k(Ys,Ko),Ys.prototype.g=function(){return new XMLHttpRequest},Ys.prototype.i=function(){return{}},Qo=new Ys;function Ut(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Lr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cl}function Cl(){this.i=null,this.g="",this.h=!1}var xl={},Jo={};function Xo(a,u,d){a.L=1,a.v=ni(At(u)),a.m=d,a.P=!0,kl(a,null)}function kl(a,u){a.F=Date.now(),Zs(a),a.A=At(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Gl(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Cl,a.g=lu(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Np(I(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Il[0]=b.toString()),b=Il);for(var P=0;P<b.length;P++){var N=Ws(d,b[P],m||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Fr(),Mp(a.i,a.u,a.A,a.l,a.R,a.m)}Ut.prototype.ca=function(a){a=a.target;const u=this.M;u&&Rt(a)==3?u.j():this.Y(a)},Ut.prototype.Y=function(a){try{if(a==this.g)e:{const Le=Rt(this.g);var u=this.g.Ba();const Yn=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||Yl(this.g)))){this.J||Le!=4||u==7||(u==8||0>=Yn?Fr(3):Fr(2)),Yo(this);var d=this.g.Z();this.X=d;t:if(Dl(this)){var m=Yl(this.g);a="";var b=m.length,P=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),$r(this);var N="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(P&&u==b-1)});m.length=0,this.h.g+=a,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=d==200,Fp(this.i,this.u,this.A,this.l,this.R,Le,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,xe=this.g;if((le=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(le)){var ne=le;break t}}ne=null}if(d=ne)Qn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zo(this,d);else{this.o=!1,this.s=3,ze(12),pn(this),$r(this);break e}}if(this.P){d=!0;let at;for(;!this.J&&this.C<N.length;)if(at=$p(this,N),at==Jo){Le==4&&(this.s=4,ze(14),d=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(at==xl){this.s=4,ze(15),Qn(this.i,this.l,N,"[Invalid Chunk]"),d=!1;break}else Qn(this.i,this.l,at,null),Zo(this,at);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||N.length!=0||this.h.h||(this.s=1,ze(16),d=!1),this.o=this.o&&d,!d)Qn(this.i,this.l,N,"[Invalid Chunked Response]"),pn(this),$r(this);else if(0<N.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),ia(Oe),Oe.M=!0,ze(11))}}else Qn(this.i,this.l,N,null),Zo(this,N);Le==4&&pn(this),this.o&&!this.J&&(Le==4?iu(this.j,this):(this.o=!1,Zs(this)))}else sg(this.g),d==400&&0<N.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),pn(this),$r(this)}}}catch{}finally{}};function Dl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function $p(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Jo:(d=Number(u.substring(d,m)),isNaN(d)?xl:(m+=1,m+d>u.length?Jo:(u=u.slice(m,m+d),a.C=m+d,u)))}Ut.prototype.cancel=function(){this.J=!0,pn(this)};function Zs(a){a.S=Date.now()+a.I,Vl(a,a.I)}function Vl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ur(I(a.ba,a),u)}function Yo(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Ut.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Up(this.i,this.A),this.L!=2&&(Fr(),ze(17)),pn(this),this.s=2,$r(this)):Vl(this,this.S-a)};function $r(a){a.j.G==0||a.J||iu(a.j,a)}function pn(a){Yo(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,El(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Zo(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||ea(d.h,a))){if(!a.K&&ea(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ci(d),oi(d);else break e;sa(d),ze(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ur(I(d.Za,d),6e3));if(1>=Ll(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else _n(d,11)}else if((a.K||d.g==a)&&ci(d),!B(u))for(b=d.Da.g.parse(u),u=0;u<b.length;u++){let ne=b[u];if(d.T=ne[0],ne=ne[1],d.G==2)if(ne[0]=="c"){d.K=ne[1],d.ia=ne[2];const Oe=ne[3];Oe!=null&&(d.la=Oe,d.j.info("VER="+d.la));const Le=ne[4];Le!=null&&(d.Aa=Le,d.j.info("SVER="+d.Aa));const Yn=ne[5];Yn!=null&&typeof Yn=="number"&&0<Yn&&(m=1.5*Yn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const at=a.g;if(at){const ui=at.g?at.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ui){var P=m.h;P.g||ui.indexOf("spdy")==-1&&ui.indexOf("quic")==-1&&ui.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ta(P,P.h),P.h=null))}if(m.D){const oa=at.g?at.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(m.ya=oa,fe(m.I,m.D,oa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var N=a;if(m.qa=cu(m,m.J?m.ia:null,m.W),N.K){Ml(m.h,N);var le=N,xe=m.L;xe&&(le.I=xe),le.B&&(Yo(le),Zs(le)),m.g=N}else ru(m);0<d.i.length&&ai(d)}else ne[0]!="stop"&&ne[0]!="close"||_n(d,7);else d.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?_n(d,7):ra(d):ne[0]!="noop"&&d.l&&d.l.ta(ne),d.v=0)}}Fr(4)}catch{}}var jp=class{constructor(a,u){this.g=a,this.map=u}};function Nl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ol(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ll(a){return a.h?1:a.g?a.g.size:0}function ea(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ta(a,u){a.g?a.g.add(u):a.h=u}function Ml(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Nl.prototype.cancel=function(){if(this.i=Fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Fl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return V(a.i)}function qp(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function zp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Ul(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=zp(a),m=qp(a),b=m.length,P=0;P<b;P++)u.call(void 0,m[P],d&&d[P],a)}var Bl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gp(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),b=null;if(0<=m){var P=a[d].substring(0,m);b=a[d].substring(m+1)}else P=a[d];u(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function gn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gn){this.h=a.h,ei(this,a.j),this.o=a.o,this.g=a.g,ti(this,a.s),this.l=a.l;var u=a.i,d=new zr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),$l(this,d),this.m=a.m}else a&&(u=String(a).match(Bl))?(this.h=!1,ei(this,u[1]||"",!0),this.o=jr(u[2]||""),this.g=jr(u[3]||"",!0),ti(this,u[4]),this.l=jr(u[5]||"",!0),$l(this,u[6]||"",!0),this.m=jr(u[7]||"")):(this.h=!1,this.i=new zr(null,this.h))}gn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(qr(u,jl,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(qr(u,jl,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(qr(d,d.charAt(0)=="/"?Wp:Hp,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",qr(d,Jp)),a.join("")};function At(a){return new gn(a)}function ei(a,u,d){a.j=d?jr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ti(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function $l(a,u,d){u instanceof zr?(a.i=u,Xp(a.i,a.h)):(d||(u=qr(u,Qp)),a.i=new zr(u,a.h))}function fe(a,u,d){a.i.set(u,d)}function ni(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function jr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function qr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Kp),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Kp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jl=/[#\/\?@]/g,Hp=/[#\?:]/g,Wp=/[#\?]/g,Qp=/[#\?@]/g,Jp=/#/g;function zr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Bt(a){a.g||(a.g=new Map,a.h=0,a.i&&Gp(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=zr.prototype,n.add=function(a,u){Bt(this),this.i=null,a=Jn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function ql(a,u){Bt(a),u=Jn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function zl(a,u){return Bt(a),u=Jn(a,u),a.g.has(u)}n.forEach=function(a,u){Bt(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(u,b,m,this)},this)},this)},n.na=function(){Bt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const b=a[m];for(let P=0;P<b.length;P++)d.push(u[m])}return d},n.V=function(a){Bt(this);let u=[];if(typeof a=="string")zl(this,a)&&(u=u.concat(this.g.get(Jn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},n.set=function(a,u){return Bt(this),this.i=null,a=Jn(this,a),zl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Gl(a,u,d){ql(a,u),0<d.length&&(a.i=null,a.g.set(Jn(a,u),V(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const P=encodeURIComponent(String(m)),N=this.V(m);for(m=0;m<N.length;m++){var b=P;N[m]!==""&&(b+="="+encodeURIComponent(String(N[m]))),a.push(b)}}return this.i=a.join("&")};function Jn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Xp(a,u){u&&!a.j&&(Bt(a),a.i=null,a.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(ql(this,m),Gl(this,b,d))},a)),a.j=u}function Yp(a,u){const d=new Br;if(c.Image){const m=new Image;m.onload=S($t,d,"TestLoadImage: loaded",!0,u,m),m.onerror=S($t,d,"TestLoadImage: error",!1,u,m),m.onabort=S($t,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=S($t,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Zp(a,u){const d=new Br,m=new AbortController,b=setTimeout(()=>{m.abort(),$t(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(b),P.ok?$t(d,"TestPingServer: ok",!0,u):$t(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),$t(d,"TestPingServer: error",!1,u)})}function $t(a,u,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function eg(){this.g=new Lp}function tg(a,u,d){const m=d||"";try{Ul(a,function(b,P){let N=b;h(b)&&(N=Go(b)),u.push(m+P+"="+encodeURIComponent(N))})}catch(b){throw u.push(m+"type="+encodeURIComponent("_badmap")),b}}function ri(a){this.l=a.Ub||null,this.j=a.eb||!1}k(ri,Ko),ri.prototype.g=function(){return new si(this.l,this.j)},ri.prototype.i=function(a){return function(){return a}}({});function si(a,u){Ne.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(si,Ne),n=si.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Kr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Kr(this)),this.g&&(this.readyState=3,Kr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Gr(this):Kr(this),this.readyState==3&&Kl(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Gr(this))},n.Qa=function(a){this.g&&(this.response=a,Gr(this))},n.ga=function(){this.g&&Gr(this)};function Gr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Kr(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Kr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hl(a){let u="";return W(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function na(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Hl(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):fe(a,u,d))}function _e(a){Ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(_e,Ne);var ng=/^https?$/i,rg=["POST","PUT"];n=_e.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qo.g(),this.v=this.o?wl(this.o):wl(Qo),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){Wl(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rg,u,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,N]of d)this.g.setRequestHeader(P,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xl(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Wl(this,P)}};function Wl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Ql(a),ii(a)}function Ql(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,qe(this,"complete"),qe(this,"abort"),ii(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ii(this,!0)),_e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Jl(this):this.bb())},n.bb=function(){Jl(this)};function Jl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Rt(a)!=4||a.Z()!=2)){if(a.u&&Rt(a)==4)yl(a.Ea,0,a);else if(qe(a,"readystatechange"),Rt(a)==4){a.h=!1;try{const N=a.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=N===0){var b=String(a.D).match(Bl)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),m=!ng.test(b?b.toLowerCase():"")}d=m}if(d)qe(a,"complete"),qe(a,"success");else{a.m=6;try{var P=2<Rt(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",Ql(a)}}finally{ii(a)}}}}function ii(a,u){if(a.g){Xl(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||qe(a,"ready");try{d.onreadystatechange=m}catch{}}}function Xl(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Rt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Op(u)}};function Yl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sg(a){const u={};a=(a.g&&2<=Rt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var d=T(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[b]||[];u[b]=P,P.push(d)}E(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Zl(a){this.Aa=0,this.i=[],this.j=new Br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hr("baseRetryDelayMs",5e3,a),this.cb=Hr("retryDelaySeedMs",1e4,a),this.Wa=Hr("forwardChannelMaxRetries",2,a),this.wa=Hr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Nl(a&&a.concurrentRequestLimit),this.Da=new eg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zl.prototype,n.la=8,n.G=1,n.connect=function(a,u,d,m){ze(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=cu(this,null,this.W),ai(this)};function ra(a){if(eu(a),a.G==3){var u=a.U++,d=At(a.I);if(fe(d,"SID",a.K),fe(d,"RID",u),fe(d,"TYPE","terminate"),Wr(a,d),u=new Ut(a,a.j,u),u.L=2,u.v=ni(At(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=lu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Zs(u)}au(a)}function oi(a){a.g&&(ia(a),a.g.cancel(),a.g=null)}function eu(a){oi(a),a.u&&(c.clearTimeout(a.u),a.u=null),ci(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ai(a){if(!Ol(a.h)&&!a.s){a.s=!0;var u=a.Ga;st||Or(),Ft||(st(),Ft=!0),Hn.add(u,a),a.B=0}}function ig(a,u){return Ll(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ur(I(a.Ga,a,u),ou(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Ut(this,this.j,a);let P=this.o;if(this.S&&(P?(P=g(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=nu(this,b,u),d=At(this.I),fe(d,"RID",a),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),Wr(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(Hl(P)))+"&"+u:this.m&&na(d,this.m,P)),ta(this.h,b),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",u),fe(d,"SID","null"),b.T=!0,Xo(b,d,null)):Xo(b,d,u),this.G=2}}else this.G==3&&(a?tu(this,a):this.i.length==0||Ol(this.h)||tu(this))};function tu(a,u){var d;u?d=u.l:d=a.U++;const m=At(a.I);fe(m,"SID",a.K),fe(m,"RID",d),fe(m,"AID",a.T),Wr(a,m),a.m&&a.o&&na(m,a.m,a.o),d=new Ut(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=nu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ta(a.h,d),Xo(d,m,u)}function Wr(a,u){a.H&&W(a.H,function(d,m){fe(u,m,d)}),a.l&&Ul({},function(d,m){fe(u,m,d)})}function nu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?I(a.l.Na,a.l,a):null;e:{var b=a.i;let P=-1;for(;;){const N=["count="+d];P==-1?0<d?(P=b[0].g,N.push("ofs="+P)):P=0:N.push("ofs="+P);let le=!0;for(let xe=0;xe<d;xe++){let ne=b[xe].g;const Oe=b[xe].map;if(ne-=P,0>ne)P=Math.max(0,b[xe].g-100),le=!1;else try{tg(Oe,N,"req"+ne+"_")}catch{m&&m(Oe)}}if(le){m=N.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function ru(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;st||Or(),Ft||(st(),Ft=!0),Hn.add(u,a),a.v=0}}function sa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ur(I(a.Fa,a),ou(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,su(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ur(I(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),oi(this),su(this))};function ia(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function su(a){a.g=new Ut(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=At(a.qa);fe(u,"RID","rpc"),fe(u,"SID",a.K),fe(u,"AID",a.T),fe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(u,"TO",a.ja),fe(u,"TYPE","xmlhttp"),Wr(a,u),a.m&&a.o&&na(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ni(At(u)),d.m=null,d.P=!0,kl(d,a)}n.Za=function(){this.C!=null&&(this.C=null,oi(this),sa(this),ze(19))};function ci(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function iu(a,u){var d=null;if(a.g==u){ci(a),ia(a),a.g=null;var m=2}else if(ea(a.h,u))d=u.D,Ml(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var b=a.B;m=Js(),qe(m,new Sl(m,d)),ai(a)}else ru(a);else if(b=u.s,b==3||b==0&&0<u.X||!(m==1&&ig(a,u)||m==2&&sa(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),b){case 1:_n(a,5);break;case 4:_n(a,10);break;case 3:_n(a,6);break;default:_n(a,2)}}}function ou(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function _n(a,u){if(a.j.info("Error code "+u),u==2){var d=I(a.fb,a),m=a.Xa;const b=!m;m=new gn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ei(m,"https"),ni(m),b?Yp(m.toString(),d):Zp(m.toString(),d)}else ze(2);a.G=0,a.l&&a.l.sa(u),au(a),eu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function au(a){if(a.G=0,a.ka=[],a.l){const u=Fl(a.h);(u.length!=0||a.i.length!=0)&&(x(a.ka,u),x(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function cu(a,u,d){var m=d instanceof gn?At(d):new gn(d);if(m.g!="")u&&(m.g=u+"."+m.g),ti(m,m.s);else{var b=c.location;m=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var P=new gn(null);m&&ei(P,m),u&&(P.g=u),b&&ti(P,b),d&&(P.l=d),m=P}return d=a.D,u=a.ya,d&&u&&fe(m,d,u),fe(m,"VER",a.la),Wr(a,m),m}function lu(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new _e(new ri({eb:d})):new _e(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uu(){}n=uu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function li(){}li.prototype.g=function(a,u){return new Ze(a,u)};function Ze(a,u){Ne.call(this),this.g=new Zl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Xn(this)}k(Ze,Ne),Ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){ra(this.g)},Ze.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Go(a),a=d);u.i.push(new jp(u.Ya++,a)),u.G==3&&ai(u)},Ze.prototype.N=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,Ze.aa.N.call(this)};function hu(a){Ho.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(hu,Ho);function du(){Wo.call(this),this.status=1}k(du,Wo);function Xn(a){this.g=a}k(Xn,uu),Xn.prototype.ua=function(){qe(this.g,"a")},Xn.prototype.ta=function(a){qe(this.g,new hu(a))},Xn.prototype.sa=function(a){qe(this.g,new du)},Xn.prototype.ra=function(){qe(this.g,"b")},li.prototype.createWebChannel=li.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,nf=function(){return new li},tf=function(){return Js()},ef=mn,xa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xs.NO_ERROR=0,Xs.TIMEOUT=8,Xs.HTTP_ERROR=6,bi=Xs,Pl.COMPLETE="complete",Zd=Pl,Tl.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,ss=Tl,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha,Yd=_e}).apply(typeof di<"u"?di:typeof self<"u"?self:typeof window<"u"?window:{});const qu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new nc("@firebase/firestore");function rr(){return Vn.logLevel}function D(n,...e){if(Vn.logLevel<=Y.DEBUG){const t=e.map(fc);Vn.debug(`Firestore (${Pr}): ${n}`,...t)}}function Ee(n,...e){if(Vn.logLevel<=Y.ERROR){const t=e.map(fc);Vn.error(`Firestore (${Pr}): ${n}`,...t)}}function Ts(n,...e){if(Vn.logLevel<=Y.WARN){const t=e.map(fc);Vn.warn(`Firestore (${Pr}): ${n}`,...t)}}function fc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function F(n="Unexpected state"){const e=`FIRESTORE (${Pr}) INTERNAL ASSERTION FAILED: `+n;throw Ee(e),new Error(e)}function $(n,e){n||F()}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Fe.UNAUTHENTICATED))}shutdown(){}}class rI{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new tI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new Fe(e)}}class sI{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class iI{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new sI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){$(this.o===void 0);const r=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($(typeof t.token=="string"),this.R=t.token,new oI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=cI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function fr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function sf(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ge(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new ge(0,0))}static max(){return new z(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(),r===void 0?r=e.length-t:r>e.length-t&&F(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return bs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oe extends bs{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const lI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends bs{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return lI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(oe.fromString(e))}static fromName(e){return new O(oe.fromString(e).popFirst(5))}static empty(){return new O(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new oe(e.slice()))}}/**
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
 */class zi{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function ka(n){return n.fields.find(e=>e.kind===2)}function In(n){return n.fields.filter(e=>e.kind!==2)}zi.UNKNOWN_ID=-1;class Ai{constructor(e,t){this.fieldPath=e,this.kind=t}}class As{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new As(0,rt.min())}}function of(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new ge(t+1,0):new ge(t,r));return new rt(s,O.empty(),e)}function af(n){return new rt(n.readTime,n.key,-1)}class rt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rt(z.min(),O.empty(),-1)}static max(){return new rt(z.max(),O.empty(),-1)}}function mc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==cf)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(s=>s?R.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new R((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new R((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new yt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new hs(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=pc(r.target.error);this.V.reject(new hs(e,s))}}static open(e,t,r,s){try{return new uo(t,e.transaction(s,r))}catch(i){throw new hs(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(D("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new hI(t)}}class tn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,tn.S(Ae())===12.2&&Ee("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return D("SimpleDb","Removing database:",e),En(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ud())return!1;if(tn.v())return!0;const e=Ae(),t=tn.S(e),r=0<t&&t<10,s=uf(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new hs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new L(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new hs(e,o))},s.onupgradeneeded=i=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=uo.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),R.reject(h))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(D("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function uf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class uI{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return En(this.B.delete())}}class hs extends L{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function un(n){return n.name==="IndexedDbTransactionError"}class hI{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(D("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),En(r)}add(e){return D("SimpleDb","ADD",this.store.name,e,e),En(this.store.add(e))}get(e){return En(this.store.get(e)).next(t=>(t===void 0&&(t=null),D("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return D("SimpleDb","DELETE",this.store.name,e),En(this.store.delete(e))}count(){return D("SimpleDb","COUNT",this.store.name),En(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new R((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new R((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){D("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new R((r,s)=>{t.onerror=i=>{const o=pc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new R((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new uI(c),h=t(c.primaryKey,c.value,l);if(h instanceof R){const f=h.catch(p=>(l.done(),R.reject(p)));r.push(f)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>R.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function En(n){return new R((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=pc(r.target.error);t(s)}})}let zu=!1;function pc(n){const e=tn.S(Ae());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return zu||(zu=!0,setTimeout(()=>{throw r},0)),r}}return n}class dI{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){D("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{D("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){un(t)?D("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await ln(t)}await this.X(6e4)})}}class fI{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return R.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return D("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(D("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=af(i);mc(o,r)>0&&(r=o)}),new rt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Je{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Je.oe=-1;function ho(n){return n==null}function Rs(n){return n===0&&1/n==-1/0}function hf(n){return typeof n=="number"&&Number.isInteger(n)&&!Rs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Gu(e)),e=mI(n.get(t),e);return Gu(e)}function mI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Gu(n){return n+""}function ft(n){const e=n.length;if($(e>=2),e===2)return $(n.charAt(0)===""&&n.charAt(1)===""),oe.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&F(),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:F()}i=o+2}return new oe(r)}/**
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
 */const Ku=["userId","batchId"];/**
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
 */function Ri(n,e){return[n,Ke(e)]}function df(n,e,t){return[n,Ke(e),t]}const pI={},gI=["prefixPath","collectionGroup","readTime","documentId"],_I=["prefixPath","collectionGroup","documentId"],yI=["collectionGroup","readTime","prefixPath","documentId"],vI=["canonicalId","targetId"],II=["targetId","path"],EI=["path","targetId"],wI=["collectionId","parent"],TI=["indexId","uid"],bI=["uid","sequenceNumber"],AI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],RI=["indexId","uid","orderedDocumentKey"],SI=["userId","collectionPath","documentId"],PI=["userId","collectionPath","largestBatchId"],CI=["userId","collectionGroup","largestBatchId"],ff=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xI=[...ff,"documentOverlays"],mf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],pf=mf,gc=[...pf,"indexConfiguration","indexState","indexEntries"],kI=gc,DI=[...gc,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends lf{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Re(n,e){const t=U(n);return tn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function gf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||ke.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fi(this.root,e,this.comparator,!0)}}class fi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ke.RED,this.left=s??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ke(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wu(this.data.getIterator())}getIteratorFrom(e){return new Wu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Wu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zn(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new ce(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class _f extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _f("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const VI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if($(!!n),typeof n=="string"){let e=0;const t=VI.exec(n);if($(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sn(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function yc(n){const e=n.mapValue.fields.__previous_value__;return _c(e)?yc(e):e}function Ss(n){const e=Nt(n.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t,r,s,i,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Nn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Si={nullValue:"NULL_VALUE"};function On(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_c(n)?4:yf(n)?9007199254740991:fo(n)?10:11:F()}function vt(n,e){if(n===e)return!0;const t=On(n);if(t!==On(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ss(n).isEqual(Ss(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nt(s.timestampValue),c=Nt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return sn(s.bytesValue).isEqual(sn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),c=me(i.doubleValue);return o===c?Rs(o)===Rs(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return fr(n.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Hu(o)!==Hu(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!vt(o[l],c[l])))return!1;return!0}(n,e);default:return F()}}function Ps(n,e){return(n.values||[]).find(t=>vt(t,e))!==void 0}function on(n,e){if(n===e)return 0;const t=On(n),r=On(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=me(i.integerValue||i.doubleValue),l=me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Qu(n.timestampValue,e.timestampValue);case 4:return Qu(Ss(n),Ss(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return function(i,o){const c=sn(i),l=sn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Q(c[h],l[h]);if(f!==0)return f}return Q(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Q(me(i.latitude),me(o.latitude));return c!==0?c:Q(me(i.longitude),me(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ju(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},I=o.fields||{},S=(c=p.value)===null||c===void 0?void 0:c.arrayValue,k=(l=I.value)===null||l===void 0?void 0:l.arrayValue,V=Q(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Ju(S,k)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Xt.mapValue&&o===Xt.mapValue)return 0;if(i===Xt.mapValue)return 1;if(o===Xt.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const I=Q(l[p],f[p]);if(I!==0)return I;const S=on(c[l[p]],h[f[p]]);if(S!==0)return S}return Q(l.length,f.length)}(n.mapValue,e.mapValue);default:throw F()}}function Qu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Nt(n),r=Nt(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function Ju(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=on(t[s],r[s]);if(i)return i}return Q(t.length,r.length)}function mr(n){return Va(n)}function Va(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Nt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return sn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Va(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Va(t.fields[o])}`;return s+"}"}(n.mapValue):F()}function vc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Na(n){return!!n&&"integerValue"in n}function Cs(n){return!!n&&"arrayValue"in n}function Xu(n){return!!n&&"nullValue"in n}function Yu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pi(n){return!!n&&"mapValue"in n}function fo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ds(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ds(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ds(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const vf={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function OI(n){return"nullValue"in n?Si:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?vc(Nn.empty(),O.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?fo(n)?vf:{mapValue:{}}:F()}function LI(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?vc(Nn.empty(),O.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?vf:"mapValue"in n?fo(n)?{mapValue:{}}:Xt:F()}function Zu(n,e){const t=on(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function eh(n,e){const t=on(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ds(t)}setAll(e){let t=pe.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=ds(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Pi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Pi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){zn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ue(ds(this.value))}}function If(n){const e=[];return zn(n.fields,(t,r)=>{const s=new pe([t]);if(Pi(r)){const i=If(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ye(e,0,z.min(),z.min(),z.min(),Ue.empty(),0)}static newFoundDocument(e,t,r,s){return new ye(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new ye(e,2,t,z.min(),z.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,z.min(),z.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pr{constructor(e,t){this.position=e,this.inclusive=t}}function th(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),t.key):r=on(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function nh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Gi{constructor(e,t="asc"){this.field=e,this.dir=t}}function MI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ef{}class ee extends Ef{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new FI(e,t,r):t==="array-contains"?new $I(e,r):t==="in"?new Sf(e,r):t==="not-in"?new jI(e,r):t==="array-contains-any"?new qI(e,r):new ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new UI(e,r):new BI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(on(t,this.value)):t!==null&&On(this.value)===On(t)&&this.matchesComparison(on(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ae extends Ef{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ae(e,t)}matches(e){return gr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gr(n){return n.op==="and"}function Oa(n){return n.op==="or"}function Ic(n){return wf(n)&&gr(n)}function wf(n){for(const e of n.filters)if(e instanceof ae)return!1;return!0}function La(n){if(n instanceof ee)return n.field.canonicalString()+n.op.toString()+mr(n.value);if(Ic(n))return n.filters.map(e=>La(e)).join(",");{const e=n.filters.map(t=>La(t)).join(",");return`${n.op}(${e})`}}function Tf(n,e){return n instanceof ee?function(r,s){return s instanceof ee&&r.op===s.op&&r.field.isEqual(s.field)&&vt(r.value,s.value)}(n,e):n instanceof ae?function(r,s){return s instanceof ae&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Tf(o,s.filters[c]),!0):!1}(n,e):void F()}function bf(n,e){const t=n.filters.concat(e);return ae.create(t,n.op)}function Af(n){return n instanceof ee?function(t){return`${t.field.canonicalString()} ${t.op} ${mr(t.value)}`}(n):n instanceof ae?function(t){return t.op.toString()+" {"+t.getFilters().map(Af).join(" ,")+"}"}(n):"Filter"}class FI extends ee{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class UI extends ee{constructor(e,t){super(e,"in",t),this.keys=Rf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class BI extends ee{constructor(e,t){super(e,"not-in",t),this.keys=Rf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class $I extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cs(t)&&Ps(t.arrayValue,this.value)}}class Sf extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ps(this.value.arrayValue,t)}}class jI extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ps(this.value.arrayValue,t)}}class qI extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ps(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Ma(n,e=null,t=[],r=[],s=null,i=null,o=null){return new zI(n,e,t,r,s,i,o)}function Ln(n){const e=U(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>La(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ho(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mr(r)).join(",")),e.ue=t}return e.ue}function Bs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!MI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Tf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nh(n.startAt,e.startAt)&&nh(n.endAt,e.endAt)}function Ki(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Hi(n,e){return n.filters.filter(t=>t instanceof ee&&t.field.isEqual(e))}function rh(n,e,t){let r=Si,s=!0;for(const i of Hi(n,e)){let o=Si,c=!0;switch(i.op){case"<":case"<=":o=OI(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Si}Zu({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Zu({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function sh(n,e,t){let r=Xt,s=!0;for(const i of Hi(n,e)){let o=Xt,c=!0;switch(i.op){case">=":case">":o=LI(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Xt}eh({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];eh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Pf(n,e,t,r,s,i,o,c){return new mo(n,e,t,r,s,i,o,c)}function po(n){return new mo(n)}function ih(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function GI(n){return n.collectionGroup!==null}function fs(n){const e=U(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ce(pe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Gi(i,r))}),t.has(pe.keyField().canonicalString())||e.ce.push(new Gi(pe.keyField(),r))}return e.ce}function nt(n){const e=U(n);return e.le||(e.le=KI(e,fs(n))),e.le}function KI(n,e){if(n.limitType==="F")return Ma(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gi(s.field,i)});const t=n.endAt?new pr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pr(n.startAt.position,n.startAt.inclusive):null;return Ma(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Fa(n,e,t){return new mo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function go(n,e){return Bs(nt(n),nt(e))&&n.limitType===e.limitType}function Cf(n){return`${Ln(nt(n))}|lt:${n.limitType}`}function sr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Af(s)).join(", ")}]`),ho(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>mr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>mr(s)).join(",")),`Target(${r})`}(nt(n))}; limitType=${n.limitType})`}function $s(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of fs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=th(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,fs(r),s)||r.endAt&&!function(o,c,l){const h=th(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,fs(r),s))}(n,e)}function xf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kf(n){return(e,t)=>{let r=!1;for(const s of fs(n)){const i=HI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HI(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?on(l,h):F()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new de(O.comparator);function et(){return WI}const Df=new de(O.comparator);function is(...n){let e=Df;for(const t of n)e=e.insert(t.key,t);return e}function Vf(n){let e=Df;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mt(){return ms()}function Nf(){return ms()}function ms(){return new hn(n=>n.toString(),(n,e)=>n.isEqual(e))}const QI=new de(O.comparator),JI=new ce(O.comparator);function J(...n){let e=JI;for(const t of n)e=e.add(t);return e}const XI=new ce(Q);function Ec(){return XI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function Of(n){return{integerValue:""+n}}function YI(n,e){return hf(e)?Of(e):wc(n,e)}/**
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
 */class _o{constructor(){this._=void 0}}function ZI(n,e,t){return n instanceof _r?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_c(i)&&(i=yc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof yr?Mf(n,e):n instanceof vr?Ff(n,e):function(s,i){const o=Lf(s,i),c=oh(o)+oh(s.Pe);return Na(o)&&Na(s.Pe)?Of(c):wc(s.serializer,c)}(n,e)}function eE(n,e,t){return n instanceof yr?Mf(n,e):n instanceof vr?Ff(n,e):t}function Lf(n,e){return n instanceof xs?function(r){return Na(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class _r extends _o{}class yr extends _o{constructor(e){super(),this.elements=e}}function Mf(n,e){const t=Uf(e);for(const r of n.elements)t.some(s=>vt(s,r))||t.push(r);return{arrayValue:{values:t}}}class vr extends _o{constructor(e){super(),this.elements=e}}function Ff(n,e){let t=Uf(e);for(const r of n.elements)t=t.filter(s=>!vt(s,r));return{arrayValue:{values:t}}}class xs extends _o{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function oh(n){return me(n.integerValue||n.doubleValue)}function Uf(n){return Cs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t){this.field=e,this.transform=t}}function tE(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof yr&&s instanceof yr||r instanceof vr&&s instanceof vr?fr(r.elements,s.elements,vt):r instanceof xs&&s instanceof xs?vt(r.Pe,s.Pe):r instanceof _r&&s instanceof _r}(n.transform,e.transform)}class nE{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ci(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class yo{}function $f(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new vo(n.key,Be.none()):new Cr(n.key,n.data,Be.none());{const t=n.data,r=Ue.empty();let s=new ce(pe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mt(n.key,r,new Xe(s.toArray()),Be.none())}}function rE(n,e,t){n instanceof Cr?function(s,i,o){const c=s.value.clone(),l=ch(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Mt?function(s,i,o){if(!Ci(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=ch(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(jf(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ps(n,e,t,r){return n instanceof Cr?function(i,o,c,l){if(!Ci(i.precondition,o))return c;const h=i.value.clone(),f=lh(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Mt?function(i,o,c,l){if(!Ci(i.precondition,o))return c;const h=lh(i.fieldTransforms,l,o),f=o.data;return f.setAll(jf(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return Ci(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function sE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Lf(r.transform,s||null);i!=null&&(t===null&&(t=Ue.empty()),t.set(r.field,i))}return t||null}function ah(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fr(r,s,(i,o)=>tE(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cr extends yo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mt extends yo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ch(n,e,t){const r=new Map;$(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,eE(o,c,t[s]))}return r}function lh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,ZI(i,o,e))}return r}class vo extends yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qf extends yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ps(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ps(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nf();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=$f(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&fr(this.mutations,e.mutations,(t,r)=>ah(t,r))&&fr(this.baseMutations,e.baseMutations,(t,r)=>ah(t,r))}}class bc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){$(e.mutations.length===r.length);let s=function(){return QI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new bc(e,t,r,s)}}/**
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
 */class Ac{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,te;function oE(n){switch(n){default:return F();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function zf(n){if(n===void 0)return Ee("GRPC error has no .code"),C.UNKNOWN;switch(n){case be.OK:return C.OK;case be.CANCELLED:return C.CANCELLED;case be.UNKNOWN:return C.UNKNOWN;case be.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case be.INTERNAL:return C.INTERNAL;case be.UNAVAILABLE:return C.UNAVAILABLE;case be.UNAUTHENTICATED:return C.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case be.NOT_FOUND:return C.NOT_FOUND;case be.ALREADY_EXISTS:return C.ALREADY_EXISTS;case be.PERMISSION_DENIED:return C.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case be.ABORTED:return C.ABORTED;case be.OUT_OF_RANGE:return C.OUT_OF_RANGE;case be.UNIMPLEMENTED:return C.UNIMPLEMENTED;case be.DATA_LOSS:return C.DATA_LOSS;default:return F()}}(te=be||(be={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function aE(){return new TextEncoder}/**
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
 */const cE=new An([4294967295,4294967295],0);function uh(n){const e=aE().encode(n),t=new Xd;return t.update(e),new Uint8Array(t.digest())}function hh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new An([t,r],0),new An([s,i],0)]}class Rc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new os(`Invalid padding: ${t}`);if(r<0)throw new os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new os(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new os(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=An.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(An.fromNumber(r)));return s.compare(cE)===1&&(s=new An([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=uh(e),[r,s]=hh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Rc(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=uh(e),[r,s]=hh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,qs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new js(z.min(),s,new de(Q),et(),J())}}class qs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new qs(r,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Gf{constructor(e,t){this.targetId=e,this.me=t}}class Kf{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class dh{constructor(){this.fe=0,this.ge=mh(),this.pe=Te.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=J(),t=J(),r=J();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F()}}),new qs(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=mh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,$(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lE{constructor(e){this.Le=e,this.Be=new Map,this.ke=et(),this.qe=fh(),this.Qe=new de(Q)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Ki(i))if(r===0){const o=new O(i.path);this.Ue(t,o,ye.newNoDocument(o,z.min()))}else $(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=sn(r).toUint8Array()}catch(l){if(l instanceof _f)return Ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Rc(o,s,i)}catch(l){return Ts(l instanceof os?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Ki(c.target)){const l=new O(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ye.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=J();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new js(e,t,this.Qe,this.ke,r);return this.ke=et(),this.qe=fh(),this.Qe=new de(Q),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new dh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ce(Q),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new dh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function fh(){return new de(O.comparator)}function mh(){return new de(O.comparator)}const uE={asc:"ASCENDING",desc:"DESCENDING"},hE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dE={and:"AND",or:"OR"};class fE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ua(n,e){return n.useProto3Json||ho(e)?e:{value:e}}function Ir(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mE(n,e){return Ir(n,e.toTimestamp())}function He(n){return $(!!n),z.fromTimestamp(function(t){const r=Nt(t);return new ge(r.seconds,r.nanos)}(n))}function Sc(n,e){return Ba(n,e).canonicalString()}function Ba(n,e){const t=function(s){return new oe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Wf(n){const e=oe.fromString(n);return $(rm(e)),e}function Wi(n,e){return Sc(n.databaseId,e.path)}function Rn(n,e){const t=Wf(e);if(t.get(1)!==n.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Xf(t))}function Qf(n,e){return Sc(n.databaseId,e)}function Jf(n){const e=Wf(n);return e.length===4?oe.emptyPath():Xf(e)}function $a(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xf(n){return $(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ph(n,e,t){return{name:Wi(n,e),fields:t.value.mapValue.fields}}function pE(n,e,t){const r=Rn(n,e.name),s=He(e.updateTime),i=e.createTime?He(e.createTime):z.min(),o=new Ue({mapValue:{fields:e.fields}}),c=ye.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function gE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?($(f===void 0||typeof f=="string"),Te.fromBase64String(f||"")):($(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Te.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?C.UNKNOWN:zf(h.code);return new L(f,h.message||"")}(o);t=new Kf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rn(n,r.document.name),i=He(r.document.updateTime),o=r.document.createTime?He(r.document.createTime):z.min(),c=new Ue({mapValue:{fields:r.document.fields}}),l=ye.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new xi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rn(n,r.document),i=r.readTime?He(r.readTime):z.min(),o=ye.newNoDocument(s,i),c=r.removedTargetIds||[];t=new xi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rn(n,r.document),i=r.removedTargetIds||[];t=new xi([],i,s,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new iE(s,i),c=r.targetId;t=new Gf(c,o)}}return t}function Qi(n,e){let t;if(e instanceof Cr)t={update:ph(n,e.key,e.value)};else if(e instanceof vo)t={delete:Wi(n,e.key)};else if(e instanceof Mt)t={update:ph(n,e.key,e.data),updateMask:wE(e.fieldMask)};else{if(!(e instanceof qf))return F();t={verify:Wi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof _r)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof xs)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw F()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:mE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(n,e.precondition)),t}function ja(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Be.updateTime(He(i.updateTime)):i.exists!==void 0?Be.exists(i.exists):Be.none()}(e.currentDocument):Be.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)$(c.setToServerValue==="REQUEST_TIME"),l=new _r;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new yr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new vr(f)}else"increment"in c?l=new xs(o,c.increment):F();const h=pe.fromServerFormat(c.fieldPath);return new Bf(h,l)}(n,s)):[];if(e.update){e.update.name;const s=Rn(n,e.update.name),i=new Ue({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new Xe(h.map(f=>pe.fromServerFormat(f)))}(e.updateMask);return new Mt(s,i,o,t,r)}return new Cr(s,i,t,r)}if(e.delete){const s=Rn(n,e.delete);return new vo(s,t)}if(e.verify){const s=Rn(n,e.verify);return new qf(s,t)}return F()}function _E(n,e){return n&&n.length>0?($(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?He(s.updateTime):He(i);return o.isEqual(z.min())&&(o=He(i)),new nE(o,s.transformResults||[])}(t,e))):[]}function Yf(n,e){return{documents:[Qf(n,e.path)]}}function Zf(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Qf(n,s);const i=function(h){if(h.length!==0)return nm(ae.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(I){return{field:ir(I.field),direction:vE(I.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ua(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function em(n){let e=Jf(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){$(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const I=tm(p);return I instanceof ae&&Ic(I)?I.getFilters():[I]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(I=>function(k){return new Gi(or(k.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(p){let I;return I=typeof p=="object"?p.value:p,ho(I)?null:I}(t.limit));let l=null;t.startAt&&(l=function(p){const I=!!p.before,S=p.values||[];return new pr(S,I)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const I=!p.before,S=p.values||[];return new pr(S,I)}(t.endAt)),Pf(e,s,o,i,c,"F",l,h)}function yE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=or(t.unaryFilter.field);return ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=or(t.unaryFilter.field);return ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=or(t.unaryFilter.field);return ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=or(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return ee.create(or(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ae.create(t.compositeFilter.filters.map(r=>tm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function vE(n){return uE[n]}function IE(n){return hE[n]}function EE(n){return dE[n]}function ir(n){return{fieldPath:n.canonicalString()}}function or(n){return pe.fromServerFormat(n.fieldPath)}function nm(n){return n instanceof ee?function(t){if(t.op==="=="){if(Yu(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NAN"}};if(Xu(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Yu(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NOT_NAN"}};if(Xu(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ir(t.field),op:IE(t.op),value:t.value}}}(n):n instanceof ae?function(t){const r=t.getFilters().map(s=>nm(s));return r.length===1?r[0]:{compositeFilter:{op:EE(t.op),filters:r}}}(n):F()}function wE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function rm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,r,s,i=z.min(),o=z.min(),c=Te.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.ct=e}}function TE(n,e){let t;if(e.document)t=pE(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=O.fromSegments(e.noDocument.path),s=Fn(e.noDocument.readTime);t=ye.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const r=O.fromSegments(e.unknownDocument.path),s=Fn(e.unknownDocument.version);t=ye.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ge(s[0],s[1]);return z.fromTimestamp(i)}(e.readTime)),t}function gh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ji(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Wi(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Ir(i,o.version.toTimestamp()),createTime:Ir(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Mn(e.version)};else{if(!e.isUnknownDocument())return F();r.unknownDocument={path:t.path.toArray(),version:Mn(e.version)}}return r}function Ji(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Mn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Fn(n){const e=new ge(n.seconds,n.nanoseconds);return z.fromTimestamp(e)}function wn(n,e){const t=(e.baseMutations||[]).map(i=>ja(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>ja(n.ct,i)),s=ge.fromMillis(e.localWriteTimeMs);return new Tc(e.batchId,s,t,r)}function as(n){const e=Fn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Fn(n.lastLimboFreeSnapshotVersion):z.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return $(i.documents.length===1),nt(po(Jf(i.documents[0])))}(n.query):function(i){return nt(em(i))}(n.query),new xt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Te.fromBase64String(n.resumeToken))}function im(n,e){const t=Mn(e.snapshotVersion),r=Mn(e.lastLimboFreeSnapshotVersion);let s;s=Ki(e.target)?Yf(n.ct,e.target):Zf(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ln(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function om(n){const e=em({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fa(e,e.limit,"L"):e}function ma(n,e){return new Ac(e.largestBatchId,ja(n.ct,e.overlayMutation))}function _h(n,e){const t=e.path.lastSegment();return[n,Ke(e.path.popLast()),t]}function yh(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Mn(r.readTime),documentKey:Ke(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{getBundleMetadata(e,t){return vh(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Fn(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return vh(e).put(function(s){return{bundleId:s.id,createTime:Mn(He(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Ih(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:om(i.bundledQuery),readTime:Fn(i.readTime)}}(r)})}saveNamedQuery(e,t){return Ih(e).put(function(s){return{name:s.name,readTime:Mn(He(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function vh(n){return Re(n,"bundles")}function Ih(n){return Re(n,"namedQueries")}/**
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
 */class Io{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Io(e,r)}getOverlay(e,t){return Qr(e).get(_h(this.userId,t)).next(r=>r?ma(this.serializer,r):null)}getOverlays(e,t){const r=mt();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new Ac(t,o);s.push(this.ht(e,c))}),R.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Ke(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Qr(e).j("collectionPathOverlayIndex",c))}),R.waitFor(i)}getOverlaysForCollection(e,t,r){const s=mt(),i=Ke(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Qr(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const h=ma(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=mt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Qr(e).J({index:"collectionGroupOverlayIndex",range:c},(l,h,f)=>{const p=ma(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return Qr(e).put(function(s,i,o){const[c,l,h]=_h(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Qi(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Qr(n){return Re(n,"documentOverlays")}/**
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
 */class AE{Pt(e){return Re(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Te.fromUint8Array(r):Te.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Tn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(me(e.integerValue));else if("doubleValue"in e){const r=me(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Rs(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Nt(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(sn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?yf(e)?this.dt(t,Number.MAX_SAFE_INTEGER):fo(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):F()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(me(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),O.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Tn.vt=new Tn;function RE(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Eh(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=RE(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class SE{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Eh(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Eh(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class PE{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class CE{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Jr{constructor(){this.jt=new SE,this.Ht=new PE(this.jt),this.Jt=new CE(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class bn{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new bn(this.indexId,this.documentKey,this.arrayValue,r)}}function qt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=wh(n.arrayValue,e.arrayValue),t!==0?t:(t=wh(n.directionalValue,e.directionalValue),t!==0?t:O.comparator(n.documentKey,e.documentKey)))}function wh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Th{constructor(e){this.Xt=new ce((t,r)=>pe.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if($(e.collectionGroup===this.collectionId),this.nn)return!1;const t=ka(e);if(t!==void 0&&!this.sn(t))return!1;const r=In(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ce(pe.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ai(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ai(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ai(r.field,r.dir==="asc"?0:1)));return new zi(zi.UNKNOWN_ID,this.collectionId,t,As.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function am(n){var e,t;if($(n instanceof ee||n instanceof ae),n instanceof ee){if(n instanceof Sf){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ee.create(n.field,"==",i)))||[];return ae.create(s,"or")}return n}const r=n.filters.map(s=>am(s));return ae.create(r,n.op)}function xE(n){if(n.getFilters().length===0)return[];const e=Ga(am(n));return $(cm(e)),qa(e)||za(e)?[e]:e.getFilters()}function qa(n){return n instanceof ee}function za(n){return n instanceof ae&&Ic(n)}function cm(n){return qa(n)||za(n)||function(t){if(t instanceof ae&&Oa(t)){for(const r of t.getFilters())if(!qa(r)&&!za(r))return!1;return!0}return!1}(n)}function Ga(n){if($(n instanceof ee||n instanceof ae),n instanceof ee)return n;if(n.filters.length===1)return Ga(n.filters[0]);const e=n.filters.map(r=>Ga(r));let t=ae.create(e,n.op);return t=Xi(t),cm(t)?t:($(t instanceof ae),$(gr(t)),$(t.filters.length>1),t.filters.reduce((r,s)=>Pc(r,s)))}function Pc(n,e){let t;return $(n instanceof ee||n instanceof ae),$(e instanceof ee||e instanceof ae),t=n instanceof ee?e instanceof ee?function(s,i){return ae.create([s,i],"and")}(n,e):bh(n,e):e instanceof ee?bh(e,n):function(s,i){if($(s.filters.length>0&&i.filters.length>0),gr(s)&&gr(i))return bf(s,i.getFilters());const o=Oa(s)?s:i,c=Oa(s)?i:s,l=o.filters.map(h=>Pc(h,c));return ae.create(l,"or")}(n,e),Xi(t)}function bh(n,e){if(gr(e))return bf(e,n.getFilters());{const t=e.filters.map(r=>Pc(n,r));return ae.create(t,"or")}}function Xi(n){if($(n instanceof ee||n instanceof ae),n instanceof ee)return n;const e=n.getFilters();if(e.length===1)return Xi(e[0]);if(wf(n))return n;const t=e.map(s=>Xi(s)),r=[];return t.forEach(s=>{s instanceof ee?r.push(s):s instanceof ae&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ae.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(){this.un=new Cc}addToCollectionParentIndex(e,t){return this.un.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(rt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(rt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Cc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ce(oe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ce(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Uint8Array(0);class DE{constructor(e,t){this.databaseId=t,this.cn=new Cc,this.ln=new hn(r=>Ln(r),(r,s)=>Bs(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:Ke(s)};return Ah(e).put(i)}return R.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[sf(t),""],!1,!0);return Ah(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(ft(o.parent))}return r})}addFieldIndex(e,t){const r=Xr(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=tr(e);return i.next(c=>{o.put(yh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Xr(e),s=tr(e),i=er(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Xr(e),r=er(e),s=tr(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return R.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Th(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=er(e);let s=!0;const i=new Map;return R.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=J();const c=[];return R.forEach(i,(l,h)=>{D("IndexedDbIndexManager",`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(q=>`${q.fieldPath}:${q.kind}`).join(",")}`}(l)} to execute ${Ln(t)}`);const f=function(M,q){const X=ka(q);if(X===void 0)return null;for(const W of Hi(M,X.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(h,l),p=function(M,q){const X=new Map;for(const W of In(q))for(const E of Hi(M,W.fieldPath))switch(E.op){case"==":case"in":X.set(W.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return X.set(W.fieldPath.canonicalString(),E.value),Array.from(X.values())}return null}(h,l),I=function(M,q){const X=[];let W=!0;for(const E of In(q)){const g=E.kind===0?rh(M,E.fieldPath,M.startAt):sh(M,E.fieldPath,M.startAt);X.push(g.value),W&&(W=g.inclusive)}return new pr(X,W)}(h,l),S=function(M,q){const X=[];let W=!0;for(const E of In(q)){const g=E.kind===0?sh(M,E.fieldPath,M.endAt):rh(M,E.fieldPath,M.endAt);X.push(g.value),W&&(W=g.inclusive)}return new pr(X,W)}(h,l),k=this.In(l,h,I),V=this.In(l,h,S),x=this.Tn(l,h,p),G=this.En(l.indexId,f,k,I.inclusive,V,S.inclusive,x);return R.forEach(G,B=>r.G(B,t.limit).next(M=>{M.forEach(q=>{const X=O.fromSegments(q.documentKey);o.has(X)||(o=o.add(X),c.push(X))})}))}).next(()=>c)}return R.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=xE(ae.create(e.filters,"and")).map(r=>Ma(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const I=t?this.dn(t[p/h]):mi,S=this.An(e,I,r[p%h],s),k=this.Rn(e,I,i[p%h],o),V=c.map(x=>this.An(e,I,x,!0));f.push(...this.createRange(S,k,V))}return f}An(e,t,r,s){const i=new bn(e,O.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new bn(e,O.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new Th(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return R.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let h=new ce(pe.comparator),f=!1;for(const p of l.filters)for(const I of p.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?f=!0:h=h.add(I.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new Jr;for(const s of In(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);Tn.vt.It(i,o)}return r.zt()}dn(e){const t=new Jr;return Tn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new Jr;return Tn.vt.It(vc(this.databaseId,t),r.Yt(function(i){const o=In(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new Jr);let i=0;for(const o of In(e)){const c=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&Cs(c))s=this.gn(s,o,c);else{const h=l.Yt(o.kind);Tn.vt.It(c,h)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new Jr;l.seed(c.zt()),Tn.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof ee&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Xr(e),s=tr(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return R.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const I=p?new As(p.sequenceNumber,new rt(Fn(p.readTime),new O(ft(p.documentKey)),p.largestBatchId)):As.empty(),S=f.fields.map(([k,V])=>new Ai(pe.fromServerFormat(k),V));return new zi(f.indexId,f.collectionGroup,S,I)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:Q(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Xr(e),i=tr(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>R.forEach(c,l=>i.put(yh(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return R.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),R.forEach(c,l=>this.wn(e,s,l).next(h=>{const f=this.Sn(i,l);return h.isEqual(f)?R.resolve():this.bn(e,i,l,h,f)}))))})}Dn(e,t,r,s){return er(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return er(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=er(e);let i=new ce(qt);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{i=i.add(new bn(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let r=new ce(qt);const s=this.Vn(t,e);if(s==null)return r;const i=ka(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Cs(o))for(const c of o.arrayValue.values||[])r=r.add(new bn(t.indexId,e.key,this.dn(c),s))}else r=r.add(new bn(t.indexId,e.key,mi,s));return r}bn(e,t,r,s,i){D("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,I){const S=l.getIterator(),k=h.getIterator();let V=Zn(S),x=Zn(k);for(;V||x;){let G=!1,B=!1;if(V&&x){const M=f(V,x);M<0?B=!0:M>0&&(G=!0)}else V!=null?B=!0:G=!0;G?(p(x),x=Zn(k)):B?(I(V),V=Zn(S)):(V=Zn(S),x=Zn(k))}}(s,i,qt,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),R.waitFor(o)}yn(e){let t=1;return tr(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>qt(o,c)).filter((o,c,l)=>!c||qt(o,l[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=qt(o,e),l=qt(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,mi,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,mi,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return qt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Rh)}getMinOffset(e,t){return R.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||F())).next(Rh)}}function Ah(n){return Re(n,"collectionParents")}function er(n){return Re(n,"indexEntries")}function Xr(n){return Re(n,"indexConfiguration")}function tr(n){return Re(n,"indexState")}function Rh(n){$(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;mc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new rt(e.readTime,e.documentKey,t)}/**
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
 */const Sh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Qe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Qe(e,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.J({range:o},(f,p,I)=>(c++,I.delete()));i.push(l.next(()=>{$(c===1)}));const h=[];for(const f of t.mutations){const p=df(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return R.waitFor(i).next(()=>h)}function Yi(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw F();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.DEFAULT_COLLECTION_PERCENTILE=10,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qe.DEFAULT=new Qe(41943040,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qe.DISABLED=new Qe(-1,0,0);class Eo{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){$(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Eo(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=ar(e),o=zt(e);return o.add({}).next(c=>{$(typeof c=="number");const l=new Tc(c,t,r,s),h=function(S,k,V){const x=V.baseMutations.map(B=>Qi(S.ct,B)),G=V.mutations.map(B=>Qi(S.ct,B));return{userId:k,batchId:V.batchId,localWriteTimeMs:V.localWriteTime.toMillis(),baseMutations:x,mutations:G}}(this.serializer,this.userId,l),f=[];let p=new ce((I,S)=>Q(I.canonicalString(),S.canonicalString()));for(const I of s){const S=df(this.userId,I.key.path,c);p=p.add(I.key.path.popLast()),f.push(o.put(h)),f.push(i.put(S,pI))}return p.forEach(I=>{f.push(this.indexManager.addToCollectionParentIndex(e,I))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),R.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return zt(e).get(t).next(r=>r?($(r.userId===this.userId),wn(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?R.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return zt(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&($(c.batchId>=r),i=wn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return zt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).U("userMutationsIndex",t).next(r=>r.map(s=>wn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ri(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return ar(e).J({range:s},(o,c,l)=>{const[h,f,p]=o,I=ft(f);if(h===this.userId&&t.path.isEqual(I))return zt(e).get(p).next(S=>{if(!S)throw F();$(S.userId===this.userId),i.push(wn(this.serializer,S))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(Q);const s=[];return t.forEach(i=>{const o=Ri(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=ar(e).J({range:c},(h,f,p)=>{const[I,S,k]=h,V=ft(S);I===this.userId&&i.path.isEqual(V)?r=r.add(k):p.done()});s.push(l)}),R.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Ri(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new ce(Q);return ar(e).J({range:o},(l,h,f)=>{const[p,I,S]=l,k=ft(I);p===this.userId&&r.isPrefixOf(k)?k.length===s&&(c=c.add(S)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(zt(e).get(i).next(o=>{if(o===null)throw F();$(o.userId===this.userId),r.push(wn(this.serializer,o))}))}),R.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return lm(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),R.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return ar(e).J({range:r},(i,o,c)=>{if(i[0]===this.userId){const l=ft(i[1]);s.push(l)}else c.done()}).next(()=>{$(s.length===0)})})}containsKey(e,t){return um(e,this.userId,t)}Nn(e){return hm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function um(n,e,t){const r=Ri(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ar(n).J({range:i,H:!0},(c,l,h)=>{const[f,p,I]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function zt(n){return Re(n,"mutations")}function ar(n){return Re(n,"documentMutations")}function hm(n){return Re(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Un(0)}static kn(){return new Un(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Un(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>z.fromTimestamp(new ge(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>nr(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>($(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return nr(e).J((o,c)=>{const l=as(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>R.waitFor(i)).next(()=>s)}forEachTarget(e,t){return nr(e).J((r,s)=>{const i=as(s);t(i)})}qn(e){return Ph(e).get("targetGlobalKey").next(t=>($(t!==null),t))}Qn(e,t){return Ph(e).put("targetGlobalKey",t)}Kn(e,t){return nr(e).put(im(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ln(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return nr(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const h=as(c);Bs(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Qt(e);return t.forEach(o=>{const c=Ke(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),R.waitFor(s)}removeMatchingKeys(e,t,r){const s=Qt(e);return R.forEach(t,i=>{const o=Ke(i.path);return R.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Qt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Qt(e);let i=J();return s.J({range:r,H:!0},(o,c,l)=>{const h=ft(o[1]),f=new O(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const r=Ke(t.path),s=IDBKeyRange.bound([r],[sf(r)],!1,!0);let i=0;return Qt(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return nr(e).get(t).next(r=>r?as(r):null)}}function nr(n){return Re(n,"targets")}function Ph(n){return Re(n,"targetGlobal")}function Qt(n){return Re(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch([n,e],[t,r]){const s=Q(n,t);return s===0?Q(e,r):s}class NE{constructor(e){this.Un=e,this.buffer=new ce(Ch),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ch(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){D("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){un(t)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ln(t)}await this.Hn(3e5)})}}class LE{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Je.oe);const r=new NE(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Sh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),rr()<=Y.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function ME(n,e){return new LE(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t){this.db=e,this.garbageCollector=ME(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return pi(e,r)}removeReference(e,t,r){return pi(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return pi(e,t)}nr(e,t){return function(s,i){let o=!1;return hm(s).Y(c=>um(s,c,i).next(l=>(l&&(o=!0),R.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(h=>{if(!h)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,z.min()),Qt(e).delete(function(p){return[0,Ke(p.path)]}(o))))});s.push(l)}}).next(()=>R.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return pi(e,t)}tr(e,t){const r=Qt(e);let s,i=Je.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==Je.oe&&t(new O(ft(s)),i),i=h,s=l):i=Je.oe}).next(()=>{i!==Je.oe&&t(new O(ft(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function pi(n,e){return Qt(n).put(function(r,s){return{targetId:0,path:Ke(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.changes=new hn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return yn(e).put(r)}removeEntry(e,t,r){return yn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Ji(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=ye.newInvalidDocument(t);return yn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Yr(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:ye.newInvalidDocument(t)};return yn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Yr(t))},(s,i)=>{r={document:this.ir(t,i),size:Yi(i)}}).next(()=>r)}getEntries(e,t){let r=et();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=et(),s=new de(O.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);r=r.insert(i,c),s=s.insert(i,Yi(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return R.resolve();let s=new ce(Dh);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Yr(s.first()),Yr(s.last())),o=s.getIterator();let c=o.getNext();return yn(e).J({index:"documentKeyIndex",range:i},(l,h,f)=>{const p=O.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Dh(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Yr(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Ji(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return yn(e).U(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=et();for(const p of h){const I=this.ir(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);I.isFoundDocument()&&($s(t,I)||s.has(I.key))&&(f=f.insert(I.key,I))}return f})}getAllFromCollectionGroup(e,t,r,s){let i=et();const o=kh(t,r),c=kh(t,rt.max());return yn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.ir(O.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new BE(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return xh(e).get("remoteDocumentGlobalKey").next(t=>($(!!t),t))}rr(e,t){return xh(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=TE(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(z.min())))return r}return ye.newInvalidDocument(e)}}function fm(n){return new UE(n)}class BE extends dm{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new hn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new ce((i,o)=>Q(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=gh(this.cr.serializer,o);s=s.add(i.path.popLast());const h=Yi(l);r+=h-c.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=gh(this.cr.serializer,o.convertToNoDocument(z.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),R.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function xh(n){return Re(n,"remoteDocumentGlobal")}function yn(n){return Re(n,"remoteDocumentsV14")}function Yr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function kh(n,e){const t=e.documentKey.path.toArray();return[n,Ji(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Dh(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=Q(t[i],r[i]),s)return s;return s=Q(t.length,r.length),s||(s=Q(t[t.length-2],r[r.length-2]),s||Q(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $E{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ps(r.mutation,s,Xe.empty(),ge.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,t,r=J()){const s=mt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=is();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=mt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,J()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=et();const o=ms(),c=function(){return ms()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Mt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ps(f.mutation,h,f.mutation.getFieldMask(),ge.now())):o.set(h.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new $E(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ms();let s=new de((o,c)=>o-c),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||Xe.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||J()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Nf();f.forEach(I=>{if(!i.has(I)){const S=$f(t.get(I),r.get(I));S!==null&&p.set(I,S),i=i.add(I)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):GI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):R.resolve(mt());let c=-1,l=i;return o.next(h=>R.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(I=>{l=l.insert(f,I)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,J())).next(f=>({batchId:c,changes:Vf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let s=is();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=is();return this.indexManager.getCollectionParents(e,i).next(c=>R.forEach(c,l=>{const h=function(p,I){return new mo(I,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,I)=>{o=o.insert(p,I)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ye.newInvalidDocument(f)))});let c=is();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ps(f.mutation,h,Xe.empty(),ge.now()),$s(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return R.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:He(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:om(s.bundledQuery),readTime:He(s.readTime)}}(t)),R.resolve()}}/**
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
 */class qE{constructor(){this.overlays=new de(O.comparator),this.Ir=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mt();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=mt(),i=t.length+1,o=new O(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=mt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=mt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return R.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ac(t,r));let i=this.Ir.get(t);i===void 0&&(i=J(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class zE{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.Tr=new ce(Pe.Er),this.dr=new ce(Pe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Pe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Pe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new O(new oe([])),r=new Pe(t,e),s=new Pe(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new O(new oe([])),r=new Pe(t,e),s=new Pe(t,e+1);let i=J();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Pe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return O.comparator(e.key,t.key)||Q(e.wr,t.wr)}static Ar(e,t){return Q(e.wr,t.wr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ce(Pe.Er)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tc(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Pe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Pe(t,0),s=new Pe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(Q);return t.forEach(s=>{const i=new Pe(s,0),o=new Pe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),R.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const o=new Pe(new O(i),0);let c=new ce(Q);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),R.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){$(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return R.forEach(t.mutations,s=>{const i=new Pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Pe(t,0),s=this.br.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.Mr=e,this.docs=function(){return new de(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=et();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ye.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=et();const o=t.path,c=new O(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||mc(af(f),r)<=0||(s.has(f.key)||$s(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,r,s){F()}Or(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new HE(this)}getSize(e){return R.resolve(this.size)}}class HE extends dm{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.persistence=e,this.Nr=new hn(t=>Ln(t),Bs),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xc,this.targetCount=0,this.kr=Un.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),R.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Un(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Kn(t),R.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Je(0),this.Kr=!1,this.Kr=!0,this.$r=new zE,this.referenceDelegate=e(this),this.Ur=new WE(this),this.indexManager=new kE,this.remoteDocumentCache=function(s){return new KE(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new sm(t),this.Gr=new jE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new GE(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const s=new QE(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return R.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class QE extends lf{constructor(e){super(),this.currentSequenceNumber=e}}class wo{constructor(e){this.persistence=e,this.Jr=new xc,this.Yr=null}static Zr(e){return new wo(e)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),R.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,r=>{const s=O.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,z.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return R.or([()=>R.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.serializer=e}O(e,t,r,s){const i=new uo("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ku,{unique:!0}),l.createObjectStore("documentMutations")}(e),Vh(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=R.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Vh(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ku,{unique:!0});const p=h.store("mutations"),I=f.map(S=>p.put(S));return R.waitFor(I)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:SI});h.createIndex("collectionPathOverlayIndex",PI,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",CI,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:gI});h.createIndex("documentKeyIndex",_I),h.createIndex("collectionGroupIndex",yI)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:TI}).createIndex("sequenceNumberIndex",bI,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:AI}).createIndex("documentKeyIndex",RI,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=Yi(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>R.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>R.forEach(c,l=>{$(l.userId===i.userId);const h=wn(this.serializer,l);return lm(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,c)=>{const l=new oe(o),h=function(p){return[0,Ke(p)]}(l);i.push(t.get(h).next(f=>f?R.resolve():(p=>t.put({targetId:0,path:Ke(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>R.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:wI});const r=t.store("collectionParents"),s=new Cc,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:Ke(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new oe(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],h)=>{const f=ft(c);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=as(s),o=im(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new O(oe.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):F()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>R.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=fm(this.serializer),i=new pm(wo.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:J();wn(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),R.forEach(c,(l,h)=>{const f=new Fe(h),p=Io.lt(this.serializer,f),I=i.getIndexManager(f),S=Eo.lt(f,this.serializer,I,i.referenceDelegate);return new mm(s,S,p,I).recalculateAndSaveOverlaysForDocumentKeys(new Da(t,Je.oe),l).next()})})}}function Vh(n){n.createObjectStore("targetDocuments",{keyPath:II}).createIndex("documentTargetsIndex",EI,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",vI,{unique:!0}),n.createObjectStore("targetGlobal")}const pa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class kc{constructor(e,t,r,s,i,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=I=>Promise.resolve(),!kc.D())throw new L(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new FE(this,s),this.Ai=t+"main",this.serializer=new sm(l),this.Ri=new tn(this.Ai,this.hi,new JE(this.serializer)),this.$r=new AE,this.Ur=new VE(this.referenceDelegate,this.serializer),this.remoteDocumentCache=fm(this.serializer),this.Gr=new bE,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&Ee("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(C.FAILED_PRECONDITION,pa);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Je(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>gi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(un(e))return D("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Zr(e).get("owner").next(t=>R.resolve(this.vi(t)))}Ci(e){return gi(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Re(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return R.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?R.resolve(!0):Zr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new L(C.FAILED_PRECONDITION,pa);return!1}}return!(!this.networkEnabled||!this.inForeground)||gi(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&D("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Da(e,Je.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>gi(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Eo.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new DE(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Io.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){D("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?DI:l===16?kI:l===15?gc:l===14?pf:l===13?mf:l===12?xI:l===11?ff:void F()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new Da(c,this.Qr?this.Qr.next():Je.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Ee(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new L(C.FAILED_PRECONDITION,cf);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Zr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(C.FAILED_PRECONDITION,pa)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Zr(e).put("owner",t)}static D(){return tn.D()}bi(e){const t=Zr(e);return t.get("owner").next(r=>this.vi(r)?(D("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):R.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ee(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;ld()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return D("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ee("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Ee("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Zr(n){return Re(n,"owner")}function gi(n){return Re(n,"clientMetadata")}function gm(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=J(),s=J();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Dc(e,t.fromCache,r,s)}}/**
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
 */class XE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ld()?8:uf(Ae())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new XE;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(rr()<=Y.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",sr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(rr()<=Y.DEBUG&&D("QueryEngine","Query:",sr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(rr()<=Y.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",sr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):R.resolve())}Yi(e,t){if(ih(t))return R.resolve(null);let r=nt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Fa(t,null,"F"),r=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=J(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,Fa(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return ih(t)||s.isEqual(z.min())?R.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?R.resolve(null):(rr()<=Y.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),sr(t)),this.rs(e,o,t,of(s,-1)).next(c=>c))})}ts(e,t){let r=new ce(kf(e));return t.forEach((s,i)=>{$s(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return rr()<=Y.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",sr(t)),this.Ji.getDocumentsMatchingQuery(e,t,rt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new de(Q),this._s=new hn(i=>Ln(i),Bs),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ym(n,e,t,r){return new YE(n,e,t,r)}async function vm(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=J();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function ZE(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,I=p.keys();let S=R.resolve();return I.forEach(k=>{S=S.next(()=>f.getEntry(l,k)).next(V=>{const x=h.docVersions.get(k);$(x!==null),V.version.compareTo(x)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=J();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Im(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function ew(n,e){const t=U(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const I=s.get(p);if(!I)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let S=I.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(Te.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(p,S),function(V,x,G){return V.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(I,S,f)&&c.push(t.Ur.updateTargetData(i,S))});let l=et(),h=J();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(tw(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(z.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return R.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function tw(n,e,t){let r=J(),s=J();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=et();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):D("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function nw(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Zi(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new xt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Er(n,e,t){const r=U(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!un(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ka(n,e,t){const r=U(n);let s=z.min(),i=J();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=U(l),I=p._s.get(f);return I!==void 0?R.resolve(p.os.get(I)):p.Ur.getTargetData(h,f)}(r,o,nt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:z.min(),t?i:J())).next(c=>(Tm(r,xf(e),c),{documents:c,Ts:i})))}function Em(n,e){const t=U(n),r=U(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function wm(n,e){const t=U(n),r=t.us.get(e)||z.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,of(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Tm(t,e,s),s))}function Tm(n,e,t){let r=n.us.get(e)||z.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function Nh(n,e){return`firestore_clients_${n}_${e}`}function Oh(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ga(n,e){return`firestore_targets_${n}_${e}`}class eo{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new L(s.error.code,s.error.message))),o?new eo(e,t,s.state,i):(Ee("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class gs{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new L(r.error.code,r.error.message))),i?new gs(e,r.state,s):(Ee("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class to{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Ec();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=hf(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new to(e,i):(Ee("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Vc{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Vc(t.clientId,t.onlineState):(Ee("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ha{constructor(){this.activeTargetIds=Ec()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _a{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new de(Q),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Nh(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Ha),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(Nh(this.persistenceKey,r));if(s){const i=to.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(ga(this.persistenceKey,e));if(s){const i=gs.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ga(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return D("SharedClientState","READ",e,t),t}setItem(e,t){D("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){D("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(D("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Ee("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=Je.oe;if(i!=null)try{const c=JSON.parse(i);$(typeof c=="number"),o=c}catch(c){Ee("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==Je.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new eo(this.currentUser,e,t,r),i=Oh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=Oh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=ga(this.persistenceKey,e),i=new gs(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return to.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return eo.Rs(new Fe(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return gs.Rs(s,t)}Ls(e){return Vc.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);D("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Ec();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class bm{constructor(){this.so=new Ha,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ha,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _i=null;function ya(){return _i===null?_i=function(){return 268435456+Math.round(2147483648*Math.random())}():_i++,"0x"+_i.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class ow extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=ya(),l=this.xo(t,r.toUriEncodedString());D("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(f=>(D("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Ts("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=sw[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=ya();return new Promise((o,c)=>{const l=new Yd;l.setWithCredentials(!0),l.listenOnce(Zd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case bi.NO_ERROR:const f=l.getResponseJson();D(Me,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case bi.TIMEOUT:D(Me,`RPC '${e}' ${i} timed out`),c(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case bi.HTTP_ERROR:const p=l.getStatus();if(D(Me,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const k=function(x){const G=x.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN}(S.status);c(new L(k,S.message))}else c(new L(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new L(C.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{D(Me,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);D(Me,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=ya(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nf(),c=tf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");D(Me,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let I=!1,S=!1;const k=new iw({Io:x=>{S?D(Me,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(I||(D(Me,`Opening RPC '${e}' stream ${s} transport.`),p.open(),I=!0),D(Me,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},To:()=>p.close()}),V=(x,G,B)=>{x.listen(G,M=>{try{B(M)}catch(q){setTimeout(()=>{throw q},0)}})};return V(p,ss.EventType.OPEN,()=>{S||(D(Me,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),V(p,ss.EventType.CLOSE,()=>{S||(S=!0,D(Me,`RPC '${e}' stream ${s} transport closed`),k.So())}),V(p,ss.EventType.ERROR,x=>{S||(S=!0,Ts(Me,`RPC '${e}' stream ${s} transport errored:`,x),k.So(new L(C.UNAVAILABLE,"The operation could not be completed")))}),V(p,ss.EventType.MESSAGE,x=>{var G;if(!S){const B=x.data[0];$(!!B);const M=B,q=M.error||((G=M[0])===null||G===void 0?void 0:G.error);if(q){D(Me,`RPC '${e}' stream ${s} received error:`,q);const X=q.status;let W=function(v){const w=be[v];if(w!==void 0)return zf(w)}(X),E=q.message;W===void 0&&(W=C.INTERNAL,E="Unknown error status: "+X+" with message "+q.message),S=!0,k.So(new L(W,E)),p.close()}else D(Me,`RPC '${e}' stream ${s} received:`,B),k.bo(B)}}),V(c,ef.STAT_EVENT,x=>{x.stat===xa.PROXY?D(Me,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===xa.NOPROXY&&D(Me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Am(){return typeof window<"u"?window:null}function ki(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n){return new fE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Rm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ee(t.toString()),Ee("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new L(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aw extends Sm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=gE(this.serializer,e),r=function(i){if(!("targetChange"in i))return z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?He(o.readTime):z.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=$a(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=Ki(l)?{documents:Yf(i,l)}:{query:Zf(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Hf(i,o.resumeToken);const h=Ua(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(z.min())>0){c.readTime=Ir(i,o.snapshotVersion.toTimestamp());const h=Ua(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=yE(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=$a(this.serializer),t.removeTarget=e,this.a_(t)}}class cw extends Sm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return $(!!e.streamToken),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){$(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=_E(e.writeResults,e.commitTime),r=He(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=$a(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Qi(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Ba(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(C.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Ba(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(C.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class uw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ee(t),this.D_=!1):D("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Gn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=U(l);h.L_.add(4),await zs(h),h.q_.set("Unknown"),h.L_.delete(4),await bo(h)}(this))})}),this.q_=new uw(r,s)}}async function bo(n){if(Gn(n))for(const e of n.B_)await e(!0)}async function zs(n){for(const e of n.B_)await e(!1)}function Ao(n,e){const t=U(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Lc(t)?Oc(t):kr(t).r_()&&Nc(t,e))}function wr(n,e){const t=U(n),r=kr(t);t.N_.delete(e),r.r_()&&Pm(t,e),t.N_.size===0&&(r.r_()?r.o_():Gn(t)&&t.q_.set("Unknown"))}function Nc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}kr(n).A_(e)}function Pm(n,e){n.Q_.xe(e),kr(n).R_(e)}function Oc(n){n.Q_=new lE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),kr(n).start(),n.q_.v_()}function Lc(n){return Gn(n)&&!kr(n).n_()&&n.N_.size>0}function Gn(n){return U(n).L_.size===0}function Cm(n){n.Q_=void 0}async function dw(n){n.q_.set("Online")}async function fw(n){n.N_.forEach((e,t)=>{Nc(n,e)})}async function mw(n,e){Cm(n),Lc(n)?(n.q_.M_(e),Oc(n)):n.q_.set("Unknown")}async function pw(n,e,t){if(n.q_.set("Online"),e instanceof Kf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await no(n,r)}else if(e instanceof xi?n.Q_.Ke(e):e instanceof Gf?n.Q_.He(e):n.Q_.We(e),!t.isEqual(z.min()))try{const r=await Im(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),Pm(i,l);const p=new xt(f.target,l,h,f.sequenceNumber);Nc(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await no(n,r)}}async function no(n,e,t){if(!un(e))throw e;n.L_.add(1),await zs(n),n.q_.set("Offline"),t||(t=()=>Im(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await bo(n)})}function xm(n,e){return e().catch(t=>no(n,t,e))}async function xr(n){const e=U(n),t=an(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;gw(e);)try{const s=await nw(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,_w(e,s)}catch(s){await no(e,s)}km(e)&&Dm(e)}function gw(n){return Gn(n)&&n.O_.length<10}function _w(n,e){n.O_.push(e);const t=an(n);t.r_()&&t.V_&&t.m_(e.mutations)}function km(n){return Gn(n)&&!an(n).n_()&&n.O_.length>0}function Dm(n){an(n).start()}async function yw(n){an(n).p_()}async function vw(n){const e=an(n);for(const t of n.O_)e.m_(t.mutations)}async function Iw(n,e,t){const r=n.O_.shift(),s=bc.from(r,e,t);await xm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await xr(n)}async function Ew(n,e){e&&an(n).V_&&await async function(r,s){if(function(o){return oE(o)&&o!==C.ABORTED}(s.code)){const i=r.O_.shift();an(r).s_(),await xm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xr(r)}}(n,e),km(n)&&Dm(n)}async function Mh(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Gn(t);t.L_.add(3),await zs(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await bo(t)}async function Wa(n,e){const t=U(n);e?(t.L_.delete(2),await bo(t)):e||(t.L_.add(2),await zs(t),t.q_.set("Unknown"))}function kr(n){return n.K_||(n.K_=function(t,r,s){const i=U(t);return i.w_(),new aw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:dw.bind(null,n),Ro:fw.bind(null,n),mo:mw.bind(null,n),d_:pw.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Lc(n)?Oc(n):n.q_.set("Unknown")):(await n.K_.stop(),Cm(n))})),n.K_}function an(n){return n.U_||(n.U_=function(t,r,s){const i=U(t);return i.w_(),new cw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:yw.bind(null,n),mo:Ew.bind(null,n),f_:vw.bind(null,n),g_:Iw.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await xr(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Mc(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fc(n,e){if(Ee("AsyncQueue",`${e}: ${n}`),un(n))return new L(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=is(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new dr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof dr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new dr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.W_=new de(O.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):F():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Tr{constructor(e,t,r,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Tr(e,t,dr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Tw{constructor(){this.queries=Uh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=U(t),i=s.queries;s.queries=Uh(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new L(C.ABORTED,"Firestore shutting down"))}}function Uh(){return new hn(n=>Cf(n),go)}async function Vm(n,e){const t=U(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new ww,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Fc(o,`Initialization of query '${sr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Uc(t)}async function Nm(n,e){const t=U(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function bw(n,e){const t=U(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Uc(t)}function Aw(n,e,t){const r=U(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Uc(n){n.Y_.forEach(e=>{e.next()})}var Qa,Bh;(Bh=Qa||(Qa={})).ea="default",Bh.Cache="cache";class Om{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Tr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Tr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Qa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.key=e}}class Mm{constructor(e){this.key=e}}class Rw{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=J(),this.mutatedKeys=J(),this.Aa=kf(e),this.Ra=new dr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Fh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const I=s.get(f),S=$s(this.query,p)?p:null,k=!!I&&this.mutatedKeys.has(I.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;I&&S?I.data.isEqual(S.data)?k!==V&&(r.track({type:3,doc:S}),x=!0):this.ga(I,S)||(r.track({type:2,doc:S}),x=!0,(l&&this.Aa(S,l)>0||h&&this.Aa(S,h)<0)&&(c=!0)):!I&&S?(r.track({type:0,doc:S}),x=!0):I&&!S&&(r.track({type:1,doc:I}),x=!0,(l||h)&&(c=!0)),x&&(S?(o=o.add(S),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(S,k){const V=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return V(S)-V(k)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new Tr(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=J(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Mm(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Lm(r))}),t}ba(e){this.Ta=e.Ts,this.da=J();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Tr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Sw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Pw{constructor(e){this.key=e,this.va=!1}}class Cw{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new hn(c=>Cf(c),go),this.Ma=new Map,this.xa=new Set,this.Oa=new de(O.comparator),this.Na=new Map,this.La=new xc,this.Ba={},this.ka=new Map,this.qa=Un.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function xw(n,e,t=!0){const r=Ro(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Fm(r,e,t,!0),s}async function kw(n,e){const t=Ro(n);await Fm(t,e,!0,!1)}async function Fm(n,e,t,r){const s=await Zi(n.localStore,nt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Bc(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ao(n.remoteStore,s),c}async function Bc(n,e,t,r,s){n.Ka=(p,I,S)=>async function(V,x,G,B){let M=x.view.ma(G);M.ns&&(M=await Ka(V.localStore,x.query,!1).then(({documents:E})=>x.view.ma(E,M)));const q=B&&B.targetChanges.get(x.targetId),X=B&&B.targetMismatches.get(x.targetId)!=null,W=x.view.applyChanges(M,V.isPrimaryClient,q,X);return Ja(V,x.targetId,W.wa),W.snapshot}(n,p,I,S);const i=await Ka(n.localStore,e,!0),o=new Rw(e,i.Ts),c=o.ma(i.documents),l=qs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);Ja(n,t,h.wa);const f=new Sw(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Dw(n,e,t){const r=U(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!go(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Er(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&wr(r.remoteStore,s.targetId),br(r,s.targetId)}).catch(ln)):(br(r,s.targetId),await Er(r.localStore,s.targetId,!0))}async function Vw(n,e){const t=U(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wr(t.remoteStore,r.targetId))}async function Nw(n,e,t){const r=zc(n);try{const s=await function(o,c){const l=U(o),h=ge.now(),f=c.reduce((S,k)=>S.add(k.key),J());let p,I;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=et(),V=J();return l.cs.getEntries(S,f).next(x=>{k=x,k.forEach((G,B)=>{B.isValidDocument()||(V=V.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,k)).next(x=>{p=x;const G=[];for(const B of c){const M=sE(B,p.get(B.key).overlayedDocument);M!=null&&G.push(new Mt(B.key,M,If(M.value.mapValue),Be.exists(!0)))}return l.mutationQueue.addMutationBatch(S,h,G,c)}).next(x=>{I=x;const G=x.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(S,x.batchId,G)})}).then(()=>({batchId:I.batchId,changes:Vf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new de(Q)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,t),await dn(r,s.changes),await xr(r.remoteStore)}catch(s){const i=Fc(s,"Failed to persist write");t.reject(i)}}async function Um(n,e){const t=U(n);try{const r=await ew(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&($(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?$(o.va):s.removedDocuments.size>0&&($(o.va),o.va=!1))}),await dn(t,r,e)}catch(r){await ln(r)}}function $h(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=U(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const I of p.j_)I.Z_(c)&&(h=!0)}),h&&Uc(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ow(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new de(O.comparator);o=o.insert(i,ye.newNoDocument(i,z.min()));const c=J().add(i),l=new js(z.min(),new Map,new de(Q),o,c);await Um(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),qc(r)}else await Er(r.localStore,e,!1).then(()=>br(r,e,t)).catch(ln)}async function Lw(n,e){const t=U(n),r=e.batch.batchId;try{const s=await ZE(t.localStore,e);jc(t,r,null),$c(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await dn(t,s)}catch(s){await ln(s)}}async function Mw(n,e,t){const r=U(n);try{const s=await function(o,c){const l=U(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>($(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);jc(r,e,t),$c(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await dn(r,s)}catch(s){await ln(s)}}function $c(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function jc(n,e,t){const r=U(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function br(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Bm(n,r)})}function Bm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(wr(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),qc(n))}function Ja(n,e,t){for(const r of t)r instanceof Lm?(n.La.addReference(r.key,e),Fw(n,r)):r instanceof Mm?(D("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Bm(n,r.key)):F()}function Fw(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(D("SyncEngine","New document in limbo: "+t),n.xa.add(r),qc(n))}function qc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new O(oe.fromString(e)),r=n.qa.next();n.Na.set(r,new Pw(t)),n.Oa=n.Oa.insert(t,r),Ao(n.remoteStore,new xt(nt(po(t.path)),r,"TargetPurposeLimboResolution",Je.oe))}}async function dn(n,e,t){const r=U(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Dc.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=U(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(h,I=>R.forEach(I.$i,S=>f.persistence.referenceDelegate.addReference(p,I.targetId,S)).next(()=>R.forEach(I.Ui,S=>f.persistence.referenceDelegate.removeReference(p,I.targetId,S)))))}catch(p){if(!un(p))throw p;D("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const I=p.targetId;if(!p.fromCache){const S=f.os.get(I),k=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(I,V)}}}(r.localStore,i))}async function Uw(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await vm(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new L(C.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dn(t,r.hs)}}function Bw(n,e){const t=U(n),r=t.Na.get(e);if(r&&r.va)return J().add(r.key);{let s=J();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function $w(n,e){const t=U(n),r=await Ka(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&Ja(t,e.targetId,s.wa),s}async function jw(n,e){const t=U(n);return wm(t.localStore,e).then(r=>dn(t,r))}async function qw(n,e,t,r){const s=U(n),i=await function(c,l){const h=U(c),f=U(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,l).next(I=>I?h.localDocuments.getDocuments(p,I):R.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await xr(s.remoteStore):t==="acknowledged"||t==="rejected"?(jc(s,e,r||null),$c(s,e),function(c,l){U(U(c).mutationQueue).On(l)}(s.localStore,e)):F(),await dn(s,i)):D("SyncEngine","Cannot apply mutation batch with id: "+e)}async function zw(n,e){const t=U(n);if(Ro(t),zc(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await jh(t,r.toArray());t.Qa=!0,await Wa(t.remoteStore,!0);for(const i of s)Ao(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(br(t,o),Er(t.localStore,o,!0))),wr(t.remoteStore,o)}),await s,await jh(t,r),function(o){const c=U(o);c.Na.forEach((l,h)=>{wr(c.remoteStore,h)}),c.La.pr(),c.Na=new Map,c.Oa=new de(O.comparator)}(t),t.Qa=!1,await Wa(t.remoteStore,!1)}}async function jh(n,e,t){const r=U(n),s=[],i=[];for(const o of e){let c;const l=r.Ma.get(o);if(l&&l.length!==0){c=await Zi(r.localStore,nt(l[0]));for(const h of l){const f=r.Fa.get(h),p=await $w(r,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await Em(r.localStore,o);c=await Zi(r.localStore,h),await Bc(r,$m(h),o,!1,c.resumeToken)}s.push(c)}return r.Ca.d_(i),s}function $m(n){return Pf(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Gw(n){return function(t){return U(U(t).persistence).Qi()}(U(n).localStore)}async function Kw(n,e,t,r){const s=U(n);if(s.Qa)return void D("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await wm(s.localStore,xf(i[0])),c=js.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Te.EMPTY_BYTE_STRING);await dn(s,o,c);break}case"rejected":await Er(s.localStore,e,!0),br(s,e,r);break;default:F()}}async function Hw(n,e,t){const r=Ro(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){D("SyncEngine","Adding an already active target "+s);continue}const i=await Em(r.localStore,s),o=await Zi(r.localStore,i);await Bc(r,$m(i),o.targetId,!1,o.resumeToken),Ao(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await Er(r.localStore,s,!1).then(()=>{wr(r.remoteStore,s),br(r,s)}).catch(ln)}}function Ro(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Um.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ow.bind(null,e),e.Ca.d_=bw.bind(null,e.eventManager),e.Ca.$a=Aw.bind(null,e.eventManager),e}function zc(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mw.bind(null,e),e}class ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=To(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ym(this.persistence,new _m,e.initialUser,this.serializer)}Ga(e){return new pm(wo.Zr,this.serializer)}Wa(e){return new bm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ks.provider={build:()=>new ks};class jm extends ks{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await zc(this.Ja.syncEngine),await xr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return ym(this.persistence,new _m,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new OE(r,e.asyncQueue,t)}Ha(e,t){const r=new fI(t,this.persistence);return new dI(e.asyncQueue,r)}Ga(e){const t=gm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new kc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Am(),ki(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new bm}}class Ww extends jm{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof _a&&(this.sharedClientState.syncEngine={no:qw.bind(null,t),ro:Kw.bind(null,t),io:Hw.bind(null,t),Qi:Gw.bind(null,t),eo:jw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await zw(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Am();if(!_a.D(t))throw new L(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=gm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new _a(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ds{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$h(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uw.bind(null,this.syncEngine),await Wa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tw}()}createDatastore(e){const t=To(e.databaseInfo.databaseId),r=function(i){return new ow(i)}(e.databaseInfo);return function(i,o,c,l){return new lw(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new hw(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>$h(this.syncEngine,t,0),function(){return Lh.D()?new Lh:new rw}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new Cw(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=U(s);D("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await zs(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ds.provider={build:()=>new Ds};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ee("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=rf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function va(n,e){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function qh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Jw(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Mh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Mh(e.remoteStore,s)),n._onlineComponents=e}async function Jw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await va(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ts("Error using user provided cache. Falling back to memory cache: "+t),await va(n,new ks)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await va(n,new ks);return n._offlineComponents}async function zm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await qh(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await qh(n,new Ds))),n._onlineComponents}function Xw(n){return zm(n).then(e=>e.syncEngine)}async function Gm(n){const e=await zm(n),t=e.eventManager;return t.onListen=xw.bind(null,e.syncEngine),t.onUnlisten=Dw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Vw.bind(null,e.syncEngine),t}function Yw(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new qm({next:I=>{f.Za(),o.enqueueAndForget(()=>Nm(i,p));const S=I.docs.has(c);!S&&I.fromCache?h.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&l&&l.source==="server"?h.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(I)},error:I=>h.reject(I)}),p=new Om(po(c.path),f,{includeMetadataChanges:!0,_a:!0});return Vm(i,p)}(await Gm(n),n.asyncQueue,e,t,r)),r.promise}function Zw(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new qm({next:I=>{f.Za(),o.enqueueAndForget(()=>Nm(i,p)),I.fromCache&&l.source==="server"?h.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(I)},error:I=>h.reject(I)}),p=new Om(c,f,{includeMetadataChanges:!0,_a:!0});return Vm(i,p)}(await Gm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Km(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(n,e,t){if(!t)throw new L(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function eT(n,e,t,r){if(e===!0&&r===!0)throw new L(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gh(n){if(!O.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Kh(n){if(O.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function It(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gc(n);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Km((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nI;switch(r.type){case"firstParty":return new iI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=zh.get(t);r&&(D("ComponentProvider","Removing Datastore"),zh.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new So(this.firestore,e,this._query)}}class Ye{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}}class nn extends So{constructor(e,t,r){super(e,t,po(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new O(e))}withConverter(e){return new nn(this.firestore,e,this._path)}}function Ar(n,e,...t){if(n=we(n),Hm("collection","path",e),n instanceof Kc){const r=oe.fromString(e,...t);return Kh(r),new nn(n,null,r)}{if(!(n instanceof Ye||n instanceof nn))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return Kh(r),new nn(n.firestore,null,r)}}function ue(n,e,...t){if(n=we(n),arguments.length===1&&(e=rf.newId()),Hm("doc","path",e),n instanceof Kc){const r=oe.fromString(e,...t);return Gh(r),new Ye(n,null,new O(r))}{if(!(n instanceof Ye||n instanceof nn))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return Gh(r),new Ye(n.firestore,n instanceof nn?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Rm(this,"async_queue_retry"),this.Vu=()=>{const r=ki();r&&D("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ki();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ki();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new yt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!un(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Ee("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Mc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Kn extends Kc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Wh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wh(e),this._firestoreClient=void 0,await e}}}function tT(n,e,t){t||(t="(default)");const r=oo(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(vs(i,e))return s;throw new L(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new L(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function Hc(n){if(n._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nT(n),n._firestoreClient}function nT(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,h,f){return new NI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Km(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Qw(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rr(Te.fromBase64String(e))}catch(t){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rr(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
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
 */class Qc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=/^__.*__$/;class sT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cr(e,this.data,t,this.fieldTransforms)}}class Wm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Qm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Jc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ro(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Qm(this.Cu)&&rT.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class iT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||To(e)}Qu(e,t,r,s=!1){return new Jc({Cu:e,methodName:t,qu:r,path:pe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xc(n){const e=n._freezeSettings(),t=To(n._databaseId);return new iT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Jm(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Zc("Data must be an object, but it was:",o,r);const c=Xm(r,o);let l,h;if(i.merge)l=new Xe(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const I=Xa(e,p,t);if(!o.contains(I))throw new L(C.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Zm(f,I)||f.push(I)}l=new Xe(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new sT(new Ue(c),l,h)}class xo extends Co{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xo}}class Yc extends Co{_toFieldTransform(e){return new Bf(e.path,new _r)}isEqual(e){return e instanceof Yc}}function oT(n,e,t,r){const s=n.Qu(1,e,t);Zc("Data must be an object, but it was:",s,r);const i=[],o=Ue.empty();zn(r,(l,h)=>{const f=el(e,l,t);h=we(h);const p=s.Nu(f);if(h instanceof xo)i.push(f);else{const I=ko(h,p);I!=null&&(i.push(f),o.set(f,I))}});const c=new Xe(i);return new Wm(o,c,s.fieldTransforms)}function aT(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[Xa(e,r,t)],l=[s];if(i.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<i.length;I+=2)c.push(Xa(e,i[I])),l.push(i[I+1]);const h=[],f=Ue.empty();for(let I=c.length-1;I>=0;--I)if(!Zm(h,c[I])){const S=c[I];let k=l[I];k=we(k);const V=o.Nu(S);if(k instanceof xo)h.push(S);else{const x=ko(k,V);x!=null&&(h.push(S),f.set(S,x))}}const p=new Xe(h);return new Wm(f,p,o.fieldTransforms)}function ko(n,e){if(Ym(n=we(n)))return Zc("Unsupported field value:",e,n),Xm(n,e);if(n instanceof Co)return function(r,s){if(!Qm(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ko(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ge.fromDate(r);return{timestampValue:Ir(s.serializer,i)}}if(r instanceof ge){const i=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ir(s.serializer,i)}}if(r instanceof Wc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rr)return{bytesValue:Hf(s.serializer,r._byteString)};if(r instanceof Ye){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qc)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return wc(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Gc(r)}`)}(n,e)}function Xm(n,e){const t={};return gf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zn(n,(r,s)=>{const i=ko(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ym(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof Wc||n instanceof Rr||n instanceof Ye||n instanceof Co||n instanceof Qc)}function Zc(n,e,t){if(!Ym(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Gc(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Xa(n,e,t){if((e=we(e))instanceof Po)return e._internalPath;if(typeof e=="string")return el(n,e);throw ro("Field path arguments must be of type string or ",n,!1,void 0,t)}const cT=new RegExp("[~\\*/\\[\\]]");function el(n,e,t){if(e.search(cT)>=0)throw ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Po(...e.split("."))._internalPath}catch{throw ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ro(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new L(C.INVALID_ARGUMENT,c+n+l)}function Zm(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lT extends ep{data(){return super.data()}}function tp(n,e){return typeof e=="string"?el(n,e):e instanceof Po?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hT{convertValue(e,t="none"){switch(On(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return zn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>me(o.doubleValue));return new Qc(i)}convertGeoPoint(e){return new Wc(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=yc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ss(e));default:return null}}convertTimestamp(e){const t=Nt(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);$(rm(r));const s=new Nn(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||Ee(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rp extends ep{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(tp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Di extends rp{data(e={}){return super.data(e)}}class dT{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new cs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Di(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Di(s._firestore,s._userDataWriter,c.doc.key,c.doc,new cs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Di(s._firestore,s._userDataWriter,c.doc.key,c.doc,new cs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:fT(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function fT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n){n=It(n,Ye);const e=It(n.firestore,Kn);return Yw(Hc(e),n._key).then(t=>pT(e,n,t))}class sp extends hT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,t)}}function Vs(n){n=It(n,So);const e=It(n.firestore,Kn),t=Hc(e),r=new sp(e);return uT(n._query),Zw(t,n._query).then(s=>new dT(e,r,n,s))}function Do(n,e,t){n=It(n,Ye);const r=It(n.firestore,Kn),s=np(n.converter,e);return Vo(r,[Jm(Xc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Be.none())])}function ut(n,e,t,...r){n=It(n,Ye);const s=It(n.firestore,Kn),i=Xc(s);let o;return o=typeof(e=we(e))=="string"||e instanceof Po?aT(i,"updateDoc",n._key,e,t,r):oT(i,"updateDoc",n._key,e),Vo(s,[o.toMutation(n._key,Be.exists(!0))])}function Yt(n){return Vo(It(n.firestore,Kn),[new vo(n._key,Be.none())])}function mT(n,e){const t=It(n.firestore,Kn),r=ue(n),s=np(n.converter,e);return Vo(t,[Jm(Xc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Be.exists(!1))]).then(()=>r)}function Vo(n,e){return function(r,s){const i=new yt;return r.asyncQueue.enqueueAndForget(async()=>Nw(await Xw(r),s,i)),i.promise}(Hc(n),e)}function pT(n,e,t){const r=t.docs.get(e._key),s=new sp(n);return new rp(n,s,e._key,r,new cs(t.hasPendingWrites,t.fromCache),e.converter)}class gT{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=IT(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function _T(n){return new gT(n)}class yT{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ds.provider,this._offlineComponentProvider={build:t=>new jm(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class vT{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ds.provider,this._offlineComponentProvider={build:t=>new Ww(t,e==null?void 0:e.cacheSizeBytes)}}}function IT(n){return new yT(void 0)}function ET(){return new vT}function No(){return new Yc("serverTimestamp")}(function(e,t=!0){(function(s){Pr=s})(qn),xn(new rn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Kn(new rI(r.getProvider("auth-internal")),new aI(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),pt(qu,"4.7.3",e),pt(qu,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="firebasestorage.googleapis.com",op="storageBucket",wT=2*60*1e3,TT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Et{constructor(e,t,r=0){super(Ia(e),`Firebase Storage: ${t} (${Ia(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ie.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ia(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ve;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ve||(ve={}));function Ia(n){return"storage/"+n}function tl(){const n="An unknown error occurred, please check the error payload for server response.";return new Ie(ve.UNKNOWN,n)}function bT(n){return new Ie(ve.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function AT(n){return new Ie(ve.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ie(ve.UNAUTHENTICATED,n)}function ST(){return new Ie(ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PT(n){return new Ie(ve.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function CT(){return new Ie(ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xT(){return new Ie(ve.CANCELED,"User canceled the upload/download.")}function kT(n){return new Ie(ve.INVALID_URL,"Invalid URL '"+n+"'.")}function DT(n){return new Ie(ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function VT(){return new Ie(ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+op+"' property when initializing the app?")}function NT(){return new Ie(ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OT(){return new Ie(ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function LT(n){return new Ie(ve.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ya(n){return new Ie(ve.INVALID_ARGUMENT,n)}function ap(){return new Ie(ve.APP_DELETED,"The Firebase app was deleted.")}function MT(n){return new Ie(ve.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _s(n,e){return new Ie(ve.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function es(n){throw new Ie(ve.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=tt.makeFromUrl(e,t)}catch{return new tt(e,"")}if(r.path==="")return r;throw DT(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(q){q.path_=decodeURIComponent(q.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",S=new RegExp(`^https?://${p}/${f}/b/${s}/o${I}`,"i"),k={bucket:1,path:3},V=t===ip?"(?:storage.googleapis.com|storage.cloud.google.com)":t,x="([^?#]*)",G=new RegExp(`^https?://${V}/${s}/${x}`,"i"),M=[{regex:c,indices:l,postModify:i},{regex:S,indices:k,postModify:h},{regex:G,indices:{bucket:1,path:2},postModify:h}];for(let q=0;q<M.length;q++){const X=M[q],W=X.regex.exec(e);if(W){const E=W[X.indices.bucket];let g=W[X.indices.path];g||(g=""),r=new tt(E,g),X.postModify(r);break}}if(r==null)throw kT(e);return r}}class FT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...x){h||(h=!0,e.apply(null,x))}function p(x){s=setTimeout(()=>{s=null,n(S,l())},x)}function I(){i&&clearTimeout(i)}function S(x,...G){if(h){I();return}if(x){I(),f.call(null,x,...G);return}if(l()||o){I(),f.call(null,x,...G);return}r<64&&(r*=2);let M;c===1?(c=2,M=0):M=(r+Math.random())*1e3,p(M)}let k=!1;function V(x){k||(k=!0,I(),!h&&(s!==null?(x||(c=2),clearTimeout(s),p(0)):x||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,V(!0)},t),V}function BT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(n){return n!==void 0}function jT(n){return typeof n=="object"&&!Array.isArray(n)}function nl(n){return typeof n=="string"||n instanceof String}function Qh(n){return rl()&&n instanceof Blob}function rl(){return typeof Blob<"u"}function Jh(n,e,t,r){if(r<e)throw Ya(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ya(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function cp(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Sn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Sn||(Sn={}));/**
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
 */function qT(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t,r,s,i,o,c,l,h,f,p,I=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,k)=>{this.resolve_=S,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new yi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Sn.NO_ERROR,l=i.getStatus();if(!c||qT(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Sn.ABORT;r(!1,new yi(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new yi(h,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());$T(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=tl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?ap():xT();o(l)}else{const l=CT();o(l)}};this.canceled_?t(!1,new yi(!1,null,!0)):this.backoffId_=UT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function GT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function KT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function WT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function QT(n,e,t,r,s,i,o=!0){const c=cp(n.urlParams),l=n.url+c,h=Object.assign({},n.headers);return HT(h,e),GT(h,t),KT(h,i),WT(h,r),new zT(l,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XT(...n){const e=JT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(rl())return new Blob(n);throw new Ie(ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function YT(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function ZT(n){if(typeof atob>"u")throw LT("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ea{constructor(e,t){this.data=e,this.contentType=t||null}}function lp(n,e){switch(n){case ct.RAW:return new Ea(up(e));case ct.BASE64:case ct.BASE64URL:return new Ea(hp(n,e));case ct.DATA_URL:return new Ea(tb(e),nb(e))}throw tl()}function up(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function eb(n){let e;try{e=decodeURIComponent(n)}catch{throw _s(ct.DATA_URL,"Malformed data URL.")}return up(e)}function hp(n,e){switch(n){case ct.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw _s(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ct.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw _s(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=ZT(e)}catch(s){throw s.message.includes("polyfill")?s:_s(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class dp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw _s(ct.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=rb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function tb(n){const e=new dp(n);return e.base64?hp(ct.BASE64,e.rest):eb(e.rest)}function nb(n){return new dp(n).contentType}function rb(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){let r=0,s="";Qh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Qh(this.data_)){const r=this.data_,s=YT(r,e,t);return s===null?null:new Jt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Jt(r,!0)}}static getBlob(...e){if(rl()){const t=e.map(r=>r instanceof Jt?r.data_:r);return new Jt(XT.apply(null,t))}else{const t=e.map(o=>nl(o)?lp(ct.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Jt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n){let e;try{e=JSON.parse(n)}catch{return null}return jT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ib(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function mp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(n,e){return e}class Ge{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||ob}}let vi=null;function ab(n){return!nl(n)||n.length<2?n:mp(n)}function pp(){if(vi)return vi;const n=[];n.push(new Ge("bucket")),n.push(new Ge("generation")),n.push(new Ge("metageneration")),n.push(new Ge("name","fullPath",!0));function e(i,o){return ab(o)}const t=new Ge("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new Ge("size");return s.xform=r,n.push(s),n.push(new Ge("timeCreated")),n.push(new Ge("updated")),n.push(new Ge("md5Hash",null,!0)),n.push(new Ge("cacheControl",null,!0)),n.push(new Ge("contentDisposition",null,!0)),n.push(new Ge("contentEncoding",null,!0)),n.push(new Ge("contentLanguage",null,!0)),n.push(new Ge("contentType",null,!0)),n.push(new Ge("metadata","customMetadata",!0)),vi=n,vi}function cb(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new tt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function lb(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return cb(r,n),r}function gp(n,e,t){const r=fp(e);return r===null?null:lb(n,r,t)}function ub(n,e,t,r){const s=fp(e);if(s===null||!nl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=n.bucket,p=n.fullPath,I="/b/"+o(f)+"/o/"+o(p),S=sl(I,t,r),k=cp({alt:"media",token:h});return S+k})[0]}function hb(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class _p{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n){if(!n)throw tl()}function db(n,e){function t(r,s){const i=gp(n,s,e);return yp(i!==null),i}return t}function fb(n,e){function t(r,s){const i=gp(n,s,e);return yp(i!==null),ub(i,s,n.host,n._protocol)}return t}function vp(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=ST():s=RT():t.getStatus()===402?s=AT(n.bucket):t.getStatus()===403?s=PT(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function mb(n){const e=vp(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=bT(n.path)),i.serverResponse=s.serverResponse,i}return t}function pb(n,e,t){const r=e.fullServerUrl(),s=sl(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new _p(s,i,fb(n,t),o);return c.errorHandler=mb(e),c}function gb(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function _b(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=gb(null,e)),r}function yb(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let q=0;q<2;q++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=_b(e,r,s),f=hb(h,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,I=`\r
--`+l+"--",S=Jt.getBlob(p,r,I);if(S===null)throw NT();const k={name:h.fullPath},V=sl(i,n.host,n._protocol),x="POST",G=n.maxUploadRetryTime,B=new _p(V,x,db(n,t),G);return B.urlParams=k,B.headers=o,B.body=S.uploadData(),B.errorHandler=vp(e),B}class vb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Sn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Sn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Sn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw es("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw es("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw es("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw es("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw es("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ib extends vb{initXhr(){this.xhr_.responseType="text"}}function Ip(){return new Ib}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this._service=e,t instanceof tt?this._location=t:this._location=tt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new $n(e,t)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mp(this._location.path)}get storage(){return this._service}get parent(){const e=sb(this._location.path);if(e===null)return null;const t=new tt(this._location.bucket,e);return new $n(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw MT(e)}}function Eb(n,e,t){n._throwIfRoot("uploadBytes");const r=yb(n.storage,n._location,pp(),new Jt(e,!0),t);return n.storage.makeRequestWithTokens(r,Ip).then(s=>({metadata:s,ref:n}))}function wb(n,e,t=ct.RAW,r){n._throwIfRoot("uploadString");const s=lp(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),Eb(n,s.data,i)}function Tb(n){n._throwIfRoot("getDownloadURL");const e=pb(n.storage,n._location,pp());return n.storage.makeRequestWithTokens(e,Ip).then(t=>{if(t===null)throw OT();return t})}function bb(n,e){const t=ib(n._location.path,e),r=new tt(n._location.bucket,t);return new $n(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(n){return/^[A-Za-z]+:\/\//.test(n)}function Rb(n,e){return new $n(n,e)}function Ep(n,e){if(n instanceof il){const t=n;if(t._bucket==null)throw VT();const r=new $n(t,t._bucket);return e!=null?Ep(r,e):r}else return e!==void 0?bb(n,e):n}function Sb(n,e){if(e&&Ab(e)){if(n instanceof il)return Rb(n,e);throw Ya("To use ref(service, url), the first argument must be a Storage instance.")}else return Ep(n,e)}function Xh(n,e){const t=e==null?void 0:e[op];return t==null?null:tt.makeFromBucketSpec(t,n)}function Pb(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:pg(s,n.app.options.projectId))}class il{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ip,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wT,this._maxUploadRetryTime=TT,this._requests=new Set,s!=null?this._bucket=tt.makeFromBucketSpec(s,this._host):this._bucket=Xh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=Xh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $n(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new FT(ap());{const o=QT(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Yh="@firebase/storage",Zh="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="storage";function ol(n,e,t,r){return n=we(n),wb(n,e,t,r)}function al(n){return n=we(n),Tb(n)}function cl(n,e){return n=we(n),Sb(n,e)}function Cb(n=md(),e){n=we(n);const r=oo(n,wp).getImmediate({identifier:e}),s=fg("storage");return s&&xb(r,...s),r}function xb(n,e,t,r={}){Pb(n,e,t,r)}function kb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new il(t,r,s,e,qn)}function Db(){xn(new rn(wp,kb,"PUBLIC").setMultipleInstances(!0)),pt(Yh,Zh,""),pt(Yh,Zh,"esm2017")}Db();const Vb={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},ll=fd(Vb),Gs=Zv(ll),re=tT(ll,{localCache:_T({tabManager:ET()})}),ul=Cb(ll),Tp="archery_v5",Nb="archery_v4";function ed(){try{const n=JSON.parse(localStorage.getItem(Tp)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(Nb)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function jn(){try{localStorage.setItem(Tp,JSON.stringify({friends:_.friends,rounds:_.rounds.slice(0,200),courses:_.courses}))}catch{}}const Ob=[11,10,8,5,"M"];function Ks(n){return n==="M"||n==null?0:Number(n)}function Oo(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":Number(t))):[]}function Lb(n){return n.map(e=>e.map(t=>t??"M").join(",")).join(";")}function it(n){return n.flat().reduce((e,t)=>e+Ks(t),0)}function Mb(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(s=>s!=null).map(Ks));return t.length?(t.reduce((r,s)=>r+s,0)/t.length).toFixed(1):null}function Fb(n){const e={11:0,10:0,8:0,5:0,M:0};return n.flat().forEach(t=>{t==="M"?e.M++:t!=null&&e[Number(t)]!==void 0&&e[Number(t)]++}),e}function hl(n){return n.length?n.reduce((e,t)=>it(t.scores)>it(e.scores)?t:e,n[0]):null}function Ub(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,s)=>r+Ks(s),0)/t.length<e:!1}function Bb(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function $b(n,e){for(;n.scores.length<e;)n.scores.push([null,null])}function jb(n,e){let t=0;for(let r=0;r<e;r++)n.every(s=>{const i=s.scores[r]||[null,null];return i[0]!=null&&i[1]!=null})&&t++;return t}function bp(n){return{name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:Lb(e.scores)}))}}function qb(n){return{...n,shooters:(n.shooters||[]).map(e=>({...e,scores:Oo(e.scores)}))}}let Vi=null,Ni=!1,Pn=!1,Za=[],ys=null,ls=0,ht=null,ec=null,ts=null;function zb(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function dl(n,e){const r=(e.lat-n.lat)*Math.PI/180,s=(e.lng-n.lng)*Math.PI/180,i=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function Ap(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function Rp(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function Gb(n){return navigator.geolocation?(ts=n,Za=[],ls=0,ht=null,ys=Date.now(),Pn=!1,Ni=!0,Vi=navigator.geolocation.watchPosition(e=>{if(!Ni||Pn)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};ht&&(ls+=dl(ht,t)),ht=t,Za.push(t),ts&&ts({lat:t.lat,lng:t.lng,distance:ls,elapsed:Math.round((Date.now()-ys)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),ec=setInterval(()=>{Ni&&!Pn&&ts&&ts({lat:ht==null?void 0:ht.lat,lng:ht==null?void 0:ht.lng,distance:ls,elapsed:Math.round((Date.now()-ys)/1e3)})},1e3),!0):!1}window.toggleGpsPause=function(){return Pn=!Pn,Pn};function Sp(){return Ni=!1,Pn=!1,Vi!==null&&(navigator.geolocation.clearWatch(Vi),Vi=null),clearInterval(ec),ec=null,{route:Za.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round(ls),duration:ys?Math.round((Date.now()-ys)/1e3):0}}function Lo(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function Kb(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((s,i)=>{if(!s.gps)return;const o=dl(e,s.gps);o<t&&(t=o,r=i)}),r}const _={user:null,profile:null,isAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,currentCourse:null,courseMap:null,courseMapLayer:null,gpsTracking:!1,warnThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0};let Oi=null;async function Hb(){try{"wakeLock"in navigator&&(Oi=await navigator.wakeLock.request("screen"))}catch{}}function fl(){Oi&&(Oi.release(),Oi=null)}function Cn(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){Cn("Udfyld alle felter.");return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await Fy(Gs,n,e)}catch(r){Cn(r.code==="auth/invalid-credential"?"Ugyldig email eller kodeord.":"Der opstod en fejl: "+r.code)}finally{t.disabled=!1,t.textContent="LOG IND"}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value;if(!n||!e||!t){Cn("Udfyld alle felter.");return}const r=document.querySelector("#signup-form .btn");r.disabled=!0,r.textContent="...";try{const s=await My(Gs,e,t);await Do(ue(re,"users",s.user.uid),{name:n,email:e,yam:n,"e-mail":e,created:No()})}catch(s){Cn("Fejl: "+s.code)}finally{r.disabled=!1,r.textContent="OPRET KONTO"}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){Cn("Indtast din email først.");return}try{await Ly(Gs,n),Cn("Nulstillingsmail sendt!","ok")}catch(e){Cn("Fejl: "+e.code)}};window.doLogout=async function(){try{await jy(Gs)}catch{}};document.addEventListener("DOMContentLoaded",()=>{var t,r,s;const n=document.getElementById("warn-enabled-sw");if(n){const i=localStorage.getItem("warnEnabled");_.warnEnabled=i===null?!0:i==="true",n.classList.toggle("on",_.warnEnabled),n.addEventListener("click",()=>{_.warnEnabled=!_.warnEnabled,n.classList.toggle("on",_.warnEnabled),localStorage.setItem("warnEnabled",_.warnEnabled)})}$y(Gs,async i=>{var o;if(i){_.user=i;let c,l;for(let h=0;h<3;h++)try{console.log("Henter profil for uid:",i.uid),[c,l]=await Promise.all([Bn(ue(re,"users",i.uid)),Bn(ue(re,"admins",i.uid))]),console.log("Profil:",c.exists(),(o=c.data)==null?void 0:o.call(c));break}catch(f){console.error("Profil fejl attempt",h,f.code,f.message),h<2?await new Promise(p=>setTimeout(p,2e3*(h+1))):(_.profile={name:i.email,email:i.email},_.isAdmin=!1)}if(c!=null&&c.exists()){const h=c.data();_.profile={name:h.name||h.yam||i.email,email:h.email||h["e-mail"]||i.email}}else _.profile||(_.profile={name:i.email,email:i.email});_.isAdmin=(l==null?void 0:l.exists())||!1,Wb()}else Qb()});let e=null;window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),e=i,document.getElementById("pwa-banner").style.display="flex"}),(t=document.getElementById("pwa-install-btn"))==null||t.addEventListener("click",async()=>{e&&(e.prompt(),await e.userChoice,e=null,document.getElementById("pwa-banner").style.display="none")}),(r=document.getElementById("pwa-dismiss-btn"))==null||r.addEventListener("click",()=>{document.getElementById("pwa-banner").style.display="none"}),tc(24),document.getElementById("target-count").addEventListener("change",i=>tc(Number(i.target.value))),(s=document.getElementById("photo-input"))==null||s.addEventListener("change",async i=>{var c;const o=i.target.files[0];if(o)try{const l=await pl(o),h=Dr(),f=cl(ul,`courses/${_.round.courseId}/target_${h}.jpg`);await ol(f,l,"base64",{contentType:"image/jpeg"});const p=await al(f);await ml(_.round.courseId,h,{imageUrl:p}),(c=_.course)!=null&&c.targets&&(_.course.targets[h].imageUrl=p),fn()}catch(l){alert("Upload fejl: "+l.message)}}),document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("click",o=>{o.target===i&&i.classList.add("hidden")})})});function Wb(){var t;document.getElementById("hdr-name").textContent=_.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),document.getElementById("admin-badge").classList.toggle("hidden",!_.isAdmin),document.querySelectorAll(".admin-only").forEach(r=>r.classList.toggle("hidden",!_.isAdmin));const n=ed();_.friends=n.friends||[],_.rounds=n.rounds||[],Uo(),Mo(),so();const e=ed().courses||[];_.courses=e,nd(),td(),Jb(),Vs(Ar(re,"users",_.user.uid,"rounds")).then(r=>{if(!r.docs.length)return;const s=r.docs.map(c=>({...c.data(),id:c.id})),i=new Set(_.rounds.map(c=>c.id)),o=s.filter(c=>!i.has(c.id));o.length&&(_.rounds=[..._.rounds,...o].sort((c,l)=>{var p,I;const h=c.completed||c.created||0,f=l.completed||l.created||0;return(typeof f=="number"?f:((p=f.toMillis)==null?void 0:p.call(f))??0)-(typeof h=="number"?h:((I=h.toMillis)==null?void 0:I.call(h))??0)}),jn(),so(),console.log("Runder fra Firestore:",o.length))}).catch(r=>console.warn("Hent runder:",r)),console.log("Henter baner, user uid:",(t=_.user)==null?void 0:t.uid),Vs(Ar(re,"courses")).then(r=>{console.log("Baner hentet:",r.docs.length,r.docs.map(i=>i.id));const s=r.docs.map(i=>{const o=i.data();return{id:i.id,name:o.name||o.yam||"—",numTargets:o.numTargets||o.antalMål||24,location:o.location||o.beliggenhed||"",targets:o.targets||o.mål||[],visits:o.visits||o.besøg||[]}});s.length&&(_.courses=s,jn(),nd(),td())}).catch(r=>console.warn("courses:",r)),Zb()}function Qb(){_.user=null,_.profile=null,_.round=null,fl(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){window.appLang=window.appLang==="da"?"en":"da",document.getElementById("lang-btn").textContent=window.appLang.toUpperCase()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&sA(),n==="analyse"&&window.renderAnalyse(),n==="courses"&&_.courseMap&&setTimeout(()=>_.courseMap.invalidateSize(),100)};function Jb(){!navigator.geolocation||!_.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(_.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=dl(e,o);c<t&&(t=c,r=s.id)})}),r&&t<500){const s=document.getElementById("course-sel");s.value=r,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function td(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML='<option value="">-- Ingen bane --</option>',_.courses.forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${t.numTargets} mål)`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=_.courses.find(s=>s.id===n.value),r=document.getElementById("target-count");t?(r.value=t.numTargets,r.disabled=!0):r.disabled=!1,tc(t?t.numTargets:Number(r.value))}}function tc(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${e}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};function Xb(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}function Mo(){const n=document.getElementById("qfriends");n.innerHTML="",_.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=_.friends.filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await Vs(Ar(re,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=_.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...r];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" onclick="selectFriend('${i.id}','${(i.name||"").replace(/'/g,"\\'")}','${(i.email||"").replace(/'/g,"\\'")}');document.getElementById('friend-search').value='';document.getElementById('ac-list').classList.add('hidden');">${i.name}${i.email?` <span style='font-size:11px;opacity:.6'>${i.email}</span>`:""}</div>`).join(""),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){_.friends.find(r=>r.id===n)||(_.friends.push({id:n,name:e,email:t}),jn(),Uo(),Mo()),window.addParticipant(n,e)};window.startRound=async function(){var h,f;const n=document.getElementById("round-name").value.trim()||"Min Skydning",e=document.getElementById("course-sel").value,t=Number(document.getElementById("target-count").value)||24,r=Number(document.getElementById("start-target").value)-1,s=document.getElementById("gps-auto-sw").classList.contains("on"),i=document.getElementById("gps-track-sw").classList.contains("on");_.warnThreshold=Number(document.getElementById("warn-thresh").value)||8;const o=[{id:_.user.uid,name:_.profile.name,isGuest:!1},...Xb().filter(p=>p.id!==_.user.uid)];_.course=e&&_.courses.find(p=>p.id===e)||null;const c=o.map(p=>{const I=Bb(p.id,p.name,p.isGuest);return $b(I,t),I});let l=r;if(s&&((h=_.course)!=null&&h.targets))try{l=Kb(_.course.targets,await Lo())}catch{}_.round={name:n,courseId:e||null,courseName:((f=_.course)==null?void 0:f.name)||null,numTargets:t,startTarget:l+1,shooters:c,created:Date.now(),traversalOrder:Pp(l,t),traversalPos:0},i&&(_.gpsTracking=Gb(Yb),document.getElementById("gps-bar").classList.toggle("hidden",!_.gpsTracking),Hb()),showActivePanel(),Vr(),fn(),Fo()};function Pp(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}function Dr(){return _.round.traversalOrder[_.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function fn(){var l,h;if(!_.round)return;const n=Dr(),e=_.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=" af "+e,document.getElementById("round-badge").textContent=_.round.name;const t=(h=(l=_.course)==null?void 0:l.targets)==null?void 0:h[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||`Mål ${n+1}`;const r=jb(_.round.shooters,e);document.getElementById("pbar").style.width=`${r/e*100}%`;const s=_.round.shooters.flatMap(f=>f.scores.flat().filter(p=>p!=null)),i=s.reduce((f,p)=>f+Ks(p),0);document.getElementById("stat-avg").textContent=s.length?(i/s.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=i,document.getElementById("stat-rem").textContent=e-r;const o=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(o.src=t.imageUrl||t.photo,o.classList.remove("hidden")):o.classList.add("hidden"),document.getElementById("edit-target-btn").classList.toggle("hidden",!(_.isAdmin&&_.round.courseId)),document.getElementById("next-btn").textContent=_.round.traversalPos===e-1?"AFSLUT →":"NÆSTE →";const c=Mb(_.round.shooters,n);document.getElementById("target-avg").textContent=c!==null?`Gns. dette mål: ${c}`:""}function Vr(){if(!_.round)return;const n=Dr(),e=document.getElementById("shooters-list");e.innerHTML="",_.round.shooters.forEach((t,r)=>{const s=it(t.scores),i=Ub(t.scores,_.warnThreshold),o=t.scores[n]||[null,null],c=document.createElement("div");c.className="shooter-card",c.innerHTML=`
      <div class="sh-head"><span style="font-size:18px;">🎯</span>${i?'<span class="warn-dot"></span>':""}
        <span class="sh-name">${t.name}</span>
        <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${s}</div></div>
      </div>
      <div class="arrows-row">${[0,1].map(l=>`
        <div class="arrow-grp"><div class="arrow-lbl">🎯 PIL ${l+1}</div>
          <div class="score-btns">${Ob.map(h=>`
            <button class="sbtn ${o[l]===h?`sel-${h}`:""}" data-v="${h}"
              onclick="setScore(${r},${n},${l},'${h}')">${h}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(c)})}window.setScore=function(n,e,t,r){const s=r==="M"?"M":Number(r);_.round.shooters[n].scores[e][t]=s,Fo(),Vr(),fn()};function Yb({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=Ap(r),document.getElementById("gps-dist").textContent=Rp(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function Fo(){if(!(!_.round||!_.user))try{await Do(ue(re,"users",_.user.uid,"active","round"),bp(_.round))}catch(n){console.warn(n)}}async function Zb(){var n;try{const e=await Bn(ue(re,"users",_.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await Yt(ue(re,"users",_.user.uid,"active","round"));return}confirm("Genoptag den igangværende runde?")&&(_.round=qb(t),_.round.traversalOrder=t.traversalOrder||Pp(0,_.round.numTargets),_.round.traversalPos=t.traversalPos||0,_.round.courseId&&(_.course=_.courses.find(s=>s.id===_.round.courseId)||null),showActivePanel(),Vr(),fn())}catch(e){console.warn(e)}}window.prevTarget=function(){!_.round||_.round.traversalPos<=0||(_.round.traversalPos--,Fo(),Vr(),fn(),document.getElementById("scroll-area").scrollTop=0)};window.nextTarget=function(){_.round&&(_.round.traversalPos<_.round.numTargets-1?(_.round.traversalPos++,Fo(),Vr(),fn(),document.getElementById("scroll-area").scrollTop=0):window.finishRound())};window.skipToTarget=function(){_.round&&(document.getElementById("skip-input").max=_.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!_.round||n<1||n>_.round.numTargets)return;const e=_.round.traversalOrder.indexOf(n-1);e!==-1&&(_.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),Vr(),fn()};window.finishRound=async function(){_.finishTap++;const n=document.getElementById("finish-btn");if(_.finishTap===1){n.textContent="✓ BEKRÆFT",setTimeout(()=>{_.finishTap=0,n.textContent="✓ AFSLUT NU"},3e3);return}_.finishTap=0,n.textContent="✓ AFSLUT NU";let e={};_.gpsTracking&&(e=Sp(),_.gpsTracking=!1),fl();const t="r_"+Date.now(),r={...bp(_.round),completed:Date.now(),...e,id:t};_.rounds.unshift({...r,created:{toDate:()=>new Date,toMillis:()=>Date.now()}}),jn(),so(),Do(ue(re,"users",_.user.uid,"rounds",t),{...r,created:No()}).catch(i=>console.warn("Gem runde fejl:",i));const s=_.round;if(window._lastRound=s,_.round=null,s.courseId){const i=hl(s.shooters);rA(s.courseId,{roundId:t,date:new Date().toLocaleDateString("da-DK"),participants:s.shooters.map(o=>o.name),winner:i==null?void 0:i.name,winnerScore:i?it(i.scores):0,gpsRoute:e.route||null,gpsDuration:e.duration||null,gpsDistance:e.distance||null}).catch(console.warn)}Yt(ue(re,"users",_.user.uid,"active","round")).catch(()=>{}),eA(s),showResultsPanel()};window.abortRound=async function(){_.abortTap++;const n=document.getElementById("abort-btn");if(_.abortTap===1){n.textContent="🗑 BEKRÆFT",setTimeout(()=>{_.abortTap=0,n.textContent="🗑 AFBRYD"},3e3);return}_.abortTap=0,n.textContent="🗑 AFBRYD",_.gpsTracking&&(Sp(),_.gpsTracking=!1),fl(),Yt(ue(re,"users",_.user.uid,"active","round")).catch(()=>{}),_.round=null,showSetupPanel()};function eA(n){const e=hl(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${(e==null?void 0:e.name)||"—"}</div><div class="win-score">${e?it(e.scores):0} point</div>`,document.getElementById("res-table").innerHTML=Cp(n),document.getElementById("res-dist").innerHTML=xp(n)}function Cp(n){let e=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${n.shooters.map(t=>`<th>${t.name}</th>`).join("")}</tr>`;for(let t=0;t<n.numTargets;t++)e+=`<tr><td class="tc">${t+1}</td>`,n.shooters.forEach(r=>{const s=r.scores[t]||[null,null],i=(s[0]!=null&&s[0]!=="M"?Number(s[0]):0)+(s[1]!=null&&s[1]!=="M"?Number(s[1]):0);e+=`<td>${s.map(o=>o??"—").join("/")}<br><small>${i}</small></td>`}),e+="</tr>";return e+=`<tr class="tr-tot"><td class="tc">Total</td>${n.shooters.map(t=>`<td>${it(t.scores)}</td>`).join("")}</tr></table></div>`,e}function xp(n){return'<div class="dist-grid">'+n.shooters.map(e=>{const t=Fb(e.scores),r=e.scores.flat().filter(o=>o!=null),s=r.length,i=s?(r.reduce((o,c)=>o+Ks(c),0)/s).toFixed(2):0;return`<div class="dist-card">
      <div class="dist-name">${e.name}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:8px;">
        <div style="text-align:center;background:var(--surface2);border-radius:8px;padding:6px;">
          <div style="font-size:10px;color:var(--muted);">SNT/PIL</div>
          <div style="font-size:20px;font-weight:700;color:var(--acc);">${i}</div>
        </div>
        <div style="text-align:center;background:var(--surface2);border-radius:8px;padding:6px;">
          <div style="font-size:10px;color:var(--muted);">PILE</div>
          <div style="font-size:20px;font-weight:700;color:var(--acc);">${s}</div>
        </div>
      </div>
      ${Object.entries(t).map(([o,c])=>`<div class="dist-row"><span>${o}</span><span>${c}x</span></div>`).join("")}
    </div>`}).join("")+"</div>"}function so(){const n=document.getElementById("rounds-list");if(!_.rounds.length){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}n.innerHTML="",_.rounds.forEach(e=>{var o;const t=(e.shooters||[]).map(c=>({...c,scores:Oo(c.scores)})),r=t.length?hl(t):null,s=(o=e.created)!=null&&o.toDate?e.created.toDate().toLocaleDateString("da-DK"):e.created?new Date(e.created).toLocaleDateString("da-DK"):"—",i=document.createElement("div");i.className="rcard",i.innerHTML=`<div class="rcard-info"><div class="rcard-name">${e.name||"Runde"}</div><div class="rcard-meta">${s} · ${e.courseName||e.numTargets+" mål"}</div><div class="rcard-win">🏆 ${(r==null?void 0:r.name)||"—"} (${r?it(r.scores):0} pt)</div></div><button class="del-btn" data-id="${e.id}">✕</button>`,i.querySelector(".rcard-info").onclick=()=>kp({...e,shooters:t}),i.querySelector(".del-btn").onclick=c=>{const l=c.currentTarget,h=`r-${e.id}`;_.deleteConfirm[h]?(delete _.deleteConfirm[h],_.rounds=_.rounds.filter(f=>f.id!==e.id),jn(),so(),_.user&&Yt(ue(re,"users",_.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),e.courseId&&iA(e.courseId,e.id).catch(f=>console.warn(f)),_.user&&Yt(ue(re,"users",_.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),_.user&&Yt(ue(re,"users",_.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),_.user&&Yt(ue(re,"users",_.user.uid,"rounds",e.id)).catch(f=>console.warn(f))):(_.deleteConfirm[h]=!0,l.classList.add("conf"),l.textContent="Slet?",setTimeout(()=>{delete _.deleteConfirm[h],l.classList.remove("conf"),l.textContent="✕"},3e3))},n.appendChild(i)})}function kp(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),document.getElementById("rpop-body").innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${n.name}</h3>`+Cp(n)+xp(n)+'<button class="btn btn-gold" style="width:100%;margin-top:12px;" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>'}function nd(){const n=document.getElementById("courses-list");if(!_.courses.length){n.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}n.innerHTML="",_.courses.forEach(e=>{const t=document.createElement("div");t.className="ccard",t.innerHTML=`<div class="ccard-name">${e.name}</div><div class="ccard-meta">${e.numTargets} mål · ${e.location||"—"}</div>`,t.onclick=()=>tA(e),n.appendChild(t)})}function tA(n){_.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name,window.switchSubtab("map"),nA(n),Dp(n),Nr(n)}function nA(n){const e=document.getElementById("course-map");_.courseMap&&(_.courseMap.remove(),_.courseMap=null),_.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(_.courseMap);const t=[];(n.targets||[]).forEach((r,s)=>{const i=r.gps||r.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(_.courseMap).bindPopup(`<b>${s+1}. ${r.name||"Mål"}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" style="max-width:140px;border-radius:4px;"/>`:""}`))}),t.length?_.courseMap.fitBounds(t,{padding:[20,20]}):_.courseMap.setView([55.7,12.5],10)}function Dp(n){const e=document.getElementById("visits-list"),t=n.visits||n.besøg||[];if(!t.length){e.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}e.innerHTML="",t.forEach((r,s)=>{const i=document.createElement("div");i.className="visit-card",i.style.cursor="pointer",i.onclick=l=>{l.target.closest(".btn-icon")||window.showVisitResults(r.roundId)};const o=r.gpsDuration?Ap(r.gpsDuration):null,c=r.gpsDistance?Rp(r.gpsDistance):null;i.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;"><span style="font-weight:700;font-size:13px;">${r.date}</span><div style="display:flex;gap:6px;">${r.gpsRoute?`<button class="btn-icon" onclick="showRouteOnMap(parseRoute('${r.gpsRoute}'))">🗺️</button>`:""}<button class="btn-icon" style="color:var(--danger);" onclick="deleteVisit(${s})">✕</button></div></div><div style="font-size:12px;color:var(--muted);">${(r.participants||[]).join(", ")}</div>${r.winner?`<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${r.winner} (${r.winnerScore} pt)</div>`:""}${c||o?`<div style="display:flex;gap:8px;margin-top:8px;">${c?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${c}</div><div style="font-size:11px;color:var(--muted);">DISTANCE</div></div>`:""}${o?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${o}</div><div style="font-size:11px;color:var(--muted);">TID</div></div>`:""}</div>`:""}`,e.appendChild(i)})}window.showVisitResults=function(n){const e=_.rounds.find(r=>r.id===n);if(!e){alert("Runden er ikke gemt lokalt");return}const t=(e.shooters||[]).map(r=>({...r,scores:Oo(r.scores)}));kp({...e,shooters:t})};window.deleteVisit=async function(n){if(!confirm("Slet dette besøg?"))return;const e=ue(re,"courses",_.currentCourse.id),t=await Bn(e);if(!t.exists())return;const r=[...t.data().visits||t.data().besøg||[]];r.splice(n,1),await ut(e,{visits:r,besøg:r}),_.currentCourse.visits=r,Dp(_.currentCourse)};window.showRouteOnMap=function(n){!_.courseMap||!n.length||(_.courseMapLayer&&_.courseMap.removeLayer(_.courseMapLayer),_.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(_.courseMap),_.courseMap.fitBounds(_.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.parseRoute=zb;function Nr(n){const e=n.targets||[];let t=`
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
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim(),e=document.getElementById("edit-cloc").value.trim();n&&(await ut(ue(re,"courses",_.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e}),_.currentCourse.name=n,_.currentCourse.location=e,document.getElementById("course-detail-title").textContent=n,alert("Gemt!"))};window.updateTargetField=function(n,e,t){var r;(r=_.currentCourse)!=null&&r.targets&&(_.currentCourse.targets[n][e]=t)};window.addTargetToCurrentCourse=async function(){if(!_.currentCourse)return;const n=[..._.currentCourse.targets||[]];n.push({number:n.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await ut(ue(re,"courses",_.currentCourse.id),{targets:n}),_.currentCourse.targets=n,Nr(_.currentCourse),alert(`Mål ${n.length} tilføjet!`)};window.deleteTargetFromCourse=async function(n){var t;if(!((t=_.currentCourse)!=null&&t.targets)||!confirm(`Slet mål ${n+1}?`))return;const e=[..._.currentCourse.targets];e.splice(n,1),e.forEach((r,s)=>r.number=s+1),await ut(ue(re,"courses",_.currentCourse.id),{targets:e,numTargets:e.length}),_.currentCourse.targets=e,_.currentCourse.numTargets=e.length,Nr(_.currentCourse)};window.setTargetGps=async function(n){var e;if((e=_.currentCourse)!=null&&e.targets)try{const t=await Lo();_.currentCourse.targets[n].gps=t,await ut(ue(re,"courses",_.currentCourse.id),{targets:_.currentCourse.targets}),Nr(_.currentCourse),alert(`GPS sat for mål ${n+1}!`)}catch(t){alert("GPS fejl: "+t.message)}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await pl(t),s=cl(ul,`courses/${_.currentCourse.id}/target_${n}.jpg`);await ol(s,r,"base64",{contentType:"image/jpeg"});const i=await al(s);_.currentCourse.targets[n].imageUrl=i,await ut(ue(re,"courses",_.currentCourse.id),{targets:_.currentCourse.targets}),Nr(_.currentCourse),alert("Foto gemt!")}catch(r){alert("Upload fejl: "+r.message)}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await pl(t),s=cl(ul,`courses/${_.currentCourse.id}/target_${n}.jpg`);await ol(s,r,"base64",{contentType:"image/jpeg"});const i=await al(s);_.currentCourse.targets[n].imageUrl=i,await ut(ue(re,"courses",_.currentCourse.id),{targets:_.currentCourse.targets}),Nr(_.currentCourse),alert("Foto gemt!")}catch(r){alert("Upload fejl: "+r.message)}};window.saveAllTargets=async function(){var n;(n=_.currentCourse)!=null&&n.targets&&(await ut(ue(re,"courses",_.currentCourse.id),{targets:_.currentCourse.targets}),alert("Alle mål gemt!"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&_.courseMap&&setTimeout(()=>_.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await Lo();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(_.courseMap),_.courseMap.panTo([e.lat,e.lng])}catch{alert("GPS ikke tilgængeligt"),n.classList.remove("on")}};window.doDeleteCourse=async function(){!_.currentCourse||!confirm(`Slet banen "${_.currentCourse.name}"?`)||(await Yt(ue(re,"courses",_.currentCourse.id)),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"))};window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim(),e=document.getElementById("new-course-loc").value.trim(),t=Number(document.getElementById("new-course-targets").value)||24;if(!n)return;const r=Array.from({length:t},(s,i)=>({number:i+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));await mT(Ar(re,"courses"),{name:n,yam:n,numTargets:t,antalMål:t,location:e,beliggenhed:e,targets:r,mål:r,created:No(),visits:[],besøg:[]}),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value=""};async function rA(n,e){try{const t=ue(re,"courses",n),r=await Bn(t);if(!r.exists())return;const s=[e,...r.data().visits||r.data().besøg||[]].slice(0,50);await ut(t,{visits:s,besøg:s})}catch(t){console.warn(t)}}async function ml(n,e,t){const r=ue(re,"courses",n),s=await Bn(r);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await ut(r,{targets:o,mål:o})}function pl(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,l=i.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const h=document.createElement("canvas");h.width=c,h.height=l,h.getContext("2d").drawImage(i,0,0,c,l),e(h.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},r.onerror=t,r.readAsDataURL(n)})}window.openEditTarget=function(){var t,r;const n=Dr(),e=(r=(t=_.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=Dr();_.round.courseId&&(await ml(_.round.courseId,e,{name:n}),(t=_.course)!=null&&t.targets&&(_.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),fn()};window.editGps=async function(){var n;try{const e=await Lo(),t=Dr();await ml(_.round.courseId,t,{gps:e}),(n=_.course)!=null&&n.targets&&(_.course.targets[t].gps=e),alert("GPS gemt!")}catch(e){alert("GPS fejl: "+e.message)}};function Uo(){const n=document.getElementById("friends-list");if(!_.friends.length){n.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}n.innerHTML="",_.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${e.name}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).join(" · ")}</div></div><div class="factions"><button class="btn-icon" onclick='openFriendModal(${JSON.stringify(e)})'>✏️</button><button class="btn-icon" style="color:var(--danger);" onclick="doDeleteFriend('${e.id}','${e.name.replace(/'/g,"\\'")}')">🗑</button></div>`,n.appendChild(t)})}window.openFriendModal=function(n){_.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=n?"Rediger ven":"Tilføj ven",document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim(),email:document.getElementById("f-email").value.trim(),phone:document.getElementById("f-phone").value.trim(),club:document.getElementById("f-club").value.trim(),bowType:document.getElementById("f-bow").value};if(n.name){if(_.editFriendId){const e=_.friends.findIndex(t=>t.id===_.editFriendId);e!==-1?_.friends[e]={...n,id:_.editFriendId}:_.friends.push({...n,id:_.editFriendId})}else _.friends.push({...n,id:"f_"+Date.now()});jn(),document.getElementById("friend-modal").classList.add("hidden"),Uo(),Mo()}};window.doDeleteFriend=function(n,e){confirm(`Slet ${e}?`)&&(_.friends=_.friends.filter(t=>t.id!==n),jn(),Uo(),Mo())};async function sA(){if(_.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{const n=await Vs(Ar(re,"users")),e=document.getElementById("users-list");e.innerHTML="",n.docs.forEach(t=>{var o;const r=t.data(),s=document.createElement("div");s.className="urow";const i=(o=r.created)!=null&&o.toDate?r.created.toDate().toLocaleDateString("da-DK"):"—";s.innerHTML=`<span class="un">${r.name||r.yam||"—"}</span><span class="ue">${r.email||r["e-mail"]||""}</span><span class="ud">${i}</span>`,e.appendChild(s)})}catch(n){console.warn(n)}}}window.doAddAdmin=async function(){const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await Vs(Ar(re,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){alert("Bruger ikke fundet");return}await Do(ue(re,"admins",t.id),{email:n,created:No()}),alert(`${t.data().name||n} er nu admin`),document.getElementById("admin-email").value=""}catch(e){alert("Fejl: "+e.message)}};window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"})};window.renderAnalyse=function(){var Ft,Hn,Or,Hs;const n=document.getElementById("analyse-content");if(!n)return;const e=document.getElementById("analyse-bane");e&&e.options.length<=1&&[...new Set(_.rounds.map(j=>j.courseId).filter(Boolean))].forEach(j=>{const he=_.courses.find(se=>se.id===j);if(he&&!Array.from(e.options).find(se=>se.value===j)){const se=document.createElement("option");se.value=j,se.textContent=he.name,e.appendChild(se)}});const t=((Ft=document.getElementById("analyse-filter"))==null?void 0:Ft.value)||"all",r=["all","lastround"].includes(t)?0:Number(t),s=((Hn=document.getElementById("analyse-bane"))==null?void 0:Hn.value)||"all",i=Number((Or=document.getElementById("analyse-antal"))==null?void 0:Or.value)||0,o=_.rounds.map(K=>({...K,shooters:(K.shooters||[]).map(j=>({...j,scores:Oo(j.scores)}))}));let c=s==="all"?o:o.filter(K=>K.courseId===s);const l=i||r,h=l?c.slice(0,l):c;if(!h.length){n.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}const f=K=>{var j;return K.shooters.find(he=>{var se;return he.id===((se=_.user)==null?void 0:se.uid)})||((j=K.shooters)==null?void 0:j[0])},p=h.map(K=>{const j=f(K);return j?it(j.scores):null}).filter(K=>K!==null),I=p.length?(p.reduce((K,j)=>K+j,0)/p.length).toFixed(1):0,S=p.length?Math.max(...p):0,k=p.length?Math.min(...p):0;let V=0,x=0,G=0,B=0;const M={11:0,10:0,8:0,5:0,M:0},q={11:0,10:0,8:0,5:0,M:0};h.forEach(K=>{const j=f(K);j&&j.scores.forEach(he=>{he[0]!=null&&(he[0]==="M"?M.M++:(M[Number(he[0])]=(M[Number(he[0])]||0)+1,V+=Number(he[0]),x++)),he[1]!=null&&(he[1]==="M"?q.M++:(q[Number(he[1])]=(q[Number(he[1])]||0)+1,G+=Number(he[1]),B++))})});const X=x?(V/x).toFixed(2):0,W=B?(G/B).toFixed(2):0,E=x+B?((V+G)/(x+B)).toFixed(2):0,g=((Hs=h[0])==null?void 0:Hs.numTargets)||24,v=Array.from({length:g},(K,j)=>{let he=0,se=0;return h.forEach(Z=>{const De=f(Z);if(!De)return;(De.scores[j]||[null,null]).forEach(Se=>{Se!=null&&Se!=="M"&&(he+=Number(Se),se++)})}),se?he/se:null}),w=v.map((K,j)=>({v:K,i:j})).filter(K=>K.v!==null),T=w.length?w.reduce((K,j)=>K.v>j.v?K:j):null,A=w.length?w.reduce((K,j)=>K.v<j.v?K:j):null,y={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333"},ot=["11","10","8","5","M"];let $e="";if($e+=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">RUNDER</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${h.length}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">SNIT/RUNDE</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${I}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">BEDSTE</div><div style="font-size:28px;font-weight:700;color:#2aaa5a;">${S}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">LAVESTE</div><div style="font-size:28px;font-weight:700;color:var(--danger);">${k}</div></div>
  </div>`,$e+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">PIL STATISTIK</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
      <div><div style="font-size:11px;color:var(--muted);">PIL 1</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${X}</div></div>
      <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
        <div style="font-size:11px;color:var(--muted);">SNT/PIL</div>
        <div style="font-size:22px;font-weight:700;color:#f0c030;">${E}</div>
      </div>
      <div><div style="font-size:11px;color:var(--muted);">PIL 2</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${W}</div></div>
    </div>
    <div style="margin-top:8px;font-size:12px;color:var(--muted);text-align:center;">
      ${Number(X)>Number(W)?"Bedst med PIL 1 🏹":Number(W)>Number(X)?"Bedst med PIL 2 🏹":"Begge pile er lige gode 🎯"}
    </div>
  </div>`,T&&A&&T.i!==A.i&&($e+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">BEDSTE OG SVÆRESTE MÅL</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:center;">
        <div style="background:rgba(42,170,90,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">BEDSTE</div>
          <div style="font-size:24px;font-weight:700;color:#2aaa5a;">Mål ${T.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${T.v.toFixed(2)}</div>
        </div>
        <div style="background:rgba(204,51,51,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">SVÆRESTE</div>
          <div style="font-size:24px;font-weight:700;color:var(--danger);">Mål ${A.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${A.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`),$e+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:12px;">FORDELING PR. SCOREZONE</div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;">`,ot.forEach(K=>{const j=M[K]||0,he=q[K]||0,se=j+he,Z=28;let De="";if(se===0)De=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="var(--surface2)"/>`;else if(he===0)De=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="${y[K]}"/>`;else if(j===0)De=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="#5a3a8a"/>`;else{const je=j/se,Se=je*2*Math.PI,We=Z+Z*Math.sin(0),Ce=Z-Z*Math.cos(0),Ve=Z+Z*Math.sin(Se),wt=Z-Z*Math.cos(Se),Tt=Se>Math.PI?1:0;De=`<path d="M${Z},${Z} L${We},${Ce} A${Z},${Z} 0 ${Tt},1 ${Ve},${wt} Z" fill="${y[K]}"/>
           <path d="M${Z},${Z} L${Ve},${wt} A${Z},${Z} 0 ${1-Tt},1 ${We},${Ce} Z" fill="#5a3a8a"/>`}$e+=`<div style="text-align:center;">
      <svg viewBox="0 0 ${Z*2} ${Z*2}" style="width:52px;height:52px;">${De}</svg>
      <div style="font-weight:700;font-size:14px;color:${y[K]}">${K}</div>
      <div style="font-size:10px;color:var(--muted);">${j}/${he}</div>
    </div>`}),$e+=`</div>
    <div style="display:flex;gap:16px;justify-content:center;margin-top:8px;font-size:11px;color:var(--muted);">
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--acc);margin-right:4px;vertical-align:middle;"></span>PIL 1</span>
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#5a3a8a;margin-right:4px;vertical-align:middle;"></span>PIL 2</span>
    </div>
  </div>`,p.length>1){const se=Math.min(...p)-5,Z=Math.max(...p)+5,De=p.slice().reverse().map((je,Se)=>{const We=30+Se/(p.length-1)*280,Ce=90-(je-se)/(Z-se)*(120-2*30);return`${We},${Ce}`}).join(" ");$e+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">UDVIKLING (RUNDER)</div>
      <svg viewBox="0 0 340 120" style="width:100%;overflow:visible;">
        <polyline points="${De}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${p.slice().reverse().map((je,Se)=>{const We=30+Se/(p.length-1)*280,Ce=90-(je-se)/(Z-se)*(120-2*30);return`<circle cx="${We}" cy="${Ce}" r="4" fill="var(--acc)"/><text x="${We}" y="${Ce-8}" text-anchor="middle" font-size="10" fill="var(--text)">${je}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg>
    </div>`}const Bo=s!=="all"||t==="lastround",st=v.map((K,j)=>({v:K,i:j})).filter(K=>K.v!==null);if(st.length>1&&Bo){const je=Math.floor(Math.min(...st.map(ie=>ie.v))),Se=Math.ceil(Math.max(...st.map(ie=>ie.v))),We=Se-je||1,Ce=ie=>42+(g>1?ie/(g-1)*283:0),Ve=ie=>15+120*(1-(ie-je)/We),wt=st.map(({v:ie,i:bt})=>Ce(bt)+","+Ve(ie)).join(" "),Tt=[];for(let ie=je;ie<=Se;ie++)(Se-je<=6||ie%Math.ceil((Se-je)/5)===0)&&Tt.push(ie);const Wn=Tt.map(ie=>`<line x1="38" y1="${Ve(ie)}" x2="42" y2="${Ve(ie)}" stroke="var(--muted)" stroke-width="1"/><text x="36" y="${Ve(ie)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${ie}</text><line x1="42" y1="${Ve(ie)}" x2="325" y2="${Ve(ie)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join(""),Ws=st.map(({v:ie,i:bt})=>`<circle cx="${Ce(bt)}" cy="${Ve(ie)}" r="3" fill="var(--acc)"/>`).join(""),$o=st.map(({v:ie,i:bt})=>`<circle cx="${Ce(bt)}" cy="${Ve(ie)}" r="4" fill="var(--acc)"/><text x="${Ce(bt)}" y="${Ve(ie)-8}" text-anchor="middle" font-size="9" fill="var(--text)">${ie.toFixed(1)}</text>`).join("");$e+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
        <span>GENNEMSNIT PR. MÅL</span>
        <button class="btn-icon" onclick="document.getElementById('graph-fs').classList.remove('hidden')" style="font-size:16px;">⤢</button>
      </div>
      <svg viewBox="0 0 340 160" style="width:100%;overflow:visible;">
        <line x1="42" y1="15" x2="42" y2="135" stroke="var(--surface2)" stroke-width="1"/>
        <line x1="42" y1="135" x2="325" y2="135" stroke="var(--surface2)" stroke-width="1"/>
        ${Wn}
        <polyline points="${wt}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round"/>
        ${Ws}
        <text x="42" y="155" font-size="9" fill="var(--muted)">1</text>
        <text x="325" y="155" text-anchor="end" font-size="9" fill="var(--muted)">${g}</text>
      </svg>
    </div>
    <div id="graph-fs" class="fs-ov hidden" onclick="this.classList.add('hidden')" style="align-items:center;justify-content:center;padding:20px;">
      <div style="background:var(--card);border-radius:16px;padding:16px;width:100%;max-width:600px;" onclick="event.stopPropagation()">
        <div style="font-family:var(--fd);font-size:14px;color:var(--muted);margin-bottom:8px;">GENNEMSNIT PR. MÅL</div>
        <svg viewBox="0 0 340 160" style="width:100%;overflow:visible;">
          <line x1="42" y1="15" x2="42" y2="135" stroke="var(--surface2)" stroke-width="1"/>
          <line x1="42" y1="135" x2="325" y2="135" stroke="var(--surface2)" stroke-width="1"/>
          ${Wn}
          <polyline points="${wt}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
          ${$o}
          <text x="42" y="155" font-size="9" fill="var(--muted)">1</text>
          <text x="325" y="155" text-anchor="end" font-size="9" fill="var(--muted)">${g}</text>
        </svg>
        <button class="btn btn-dark" style="width:100%;margin-top:12px;" onclick="document.getElementById('graph-fs').classList.add('hidden')">Luk</button>
      </div>
    </div>`}n.innerHTML=$e};window.sendResults=async function(n){if(!n){alert("Ingen runde at sende");return}const e=new Date().toLocaleDateString("da-DK");let t=`3D Bueskydning - Resultater
`;t+="Dato: "+e+`
`,n.courseName&&(t+="Bane: "+n.courseName+`
`),t+=`
--- RESULTATER ---
`,[...n.shooters].sort((c,l)=>it(l.scores)-it(c.scores)).forEach((c,l)=>{t+=`
`+(l+1)+". "+c.name+": "+it(c.scores)+" point"}),t+=`

--- DETALJERET ---
`,n.shooters.forEach(c=>{t+=`
`+c.name+`:
`;for(let l=0;l<n.numTargets;l++){const h=c.scores[l]||[null,null],f=(h[0]!=null&&h[0]!=="M"?Number(h[0]):0)+(h[1]!=null&&h[1]!=="M"?Number(h[1]):0);t+="  Mål "+(l+1)+": "+h.map(p=>p??"-").join("+")+" = "+f+`
`}t+="  Total: "+it(c.scores)+` point
`});const s=n.shooters.map(c=>{var l;return(l=_.friends.find(h=>h.id===c.id))==null?void 0:l.email}).filter(Boolean),i="3D Bueskydning - "+n.name,o="mailto:"+s.join(",")+"?subject="+encodeURIComponent(i)+"&body="+encodeURIComponent(t);window.location.href=o};async function iA(n,e){const t=ue(re,"courses",n),r=await Bn(t);if(!r.exists())return;const s=(r.data().visits||[]).filter(o=>o.roundId!==e);await ut(t,{visits:s});const i=_.courses.find(o=>o.id===n);i&&(i.visits=s)}window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
