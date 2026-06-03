(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var du={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ag=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,h=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let I=(c&15)<<2|h>>6,S=h&63;l||(S=64,o||(I=64)),n.push(t[f],t[p],t[I],t[S])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(nd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ag(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new cg;const I=i<<2|c>>4;if(n.push(I),h!==64){const S=c<<4&240|h>>2;if(n.push(S),p!==64){const D=h<<6&192|p;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class cg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lg=function(r){const e=nd(r);return rd.encodeByteArray(e,!0)},ki=function(r){return lg(r).replace(/\./g,"")},sd=function(r){try{return rd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ug(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hg=()=>ug().__FIREBASE_DEFAULTS__,dg=()=>{if(typeof process>"u"||typeof du>"u")return;const r=du.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},fg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&sd(r[1]);return e&&JSON.parse(e)},eo=()=>{try{return hg()||dg()||fg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},id=r=>{var e,t;return(t=(e=eo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},mg=r=>{const e=id(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},od=()=>{var r;return(r=eo())===null||r===void 0?void 0:r.config},ad=r=>{var e;return(e=eo())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function gg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ki(JSON.stringify(t)),ki(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _g(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function yg(){var r;const e=(r=eo())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ig(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Eg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wg(){const r=be();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function cd(){return!yg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ld(){try{return typeof indexedDB=="object"}catch{return!1}}function Tg(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="FirebaseError";class yt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=bg,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ag(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new yt(s,c,n)}}function Ag(r,e){return r.replace(Rg,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Rg=/\{\$([^}]+)}/g;function Sg(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ys(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(fu(i)&&fu(o)){if(!ys(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function fu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ts(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ns(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Pg(r,e){const t=new Cg(r,e);return t.subscribe.bind(t)}class Cg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");xg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=sa),s.error===void 0&&(s.error=sa),s.complete===void 0&&(s.complete=sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xg(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function sa(){}/**
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
 */function Ee(r){return r&&r._delegate?r._delegate:r}class Zt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new pg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vg(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:kg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kg(r){return r===pn?void 0:r}function Vg(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Z||(Z={}));const Og={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Lg=Z.INFO,Mg={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Fg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Mg[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Za{constructor(e){this.name=e,this._logLevel=Lg,this._logHandler=Fg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Og[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Ug=(r,e)=>e.some(t=>r instanceof t);let mu,pu;function Bg(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $g(){return pu||(pu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ud=new WeakMap,va=new WeakMap,hd=new WeakMap,ia=new WeakMap,ec=new WeakMap;function jg(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Qt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ud.set(t,r)}).catch(()=>{}),ec.set(e,r),e}function qg(r){if(va.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});va.set(r,e)}let Ia={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return va.get(r);if(e==="objectStoreNames")return r.objectStoreNames||hd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function zg(r){Ia=r(Ia)}function Gg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(oa(this),e,...t);return hd.set(n,e.sort?e.sort():[e]),Qt(n)}:$g().includes(r)?function(...e){return r.apply(oa(this),e),Qt(ud.get(this))}:function(...e){return Qt(r.apply(oa(this),e))}}function Kg(r){return typeof r=="function"?Gg(r):(r instanceof IDBTransaction&&qg(r),Ug(r,Bg())?new Proxy(r,Ia):r)}function Qt(r){if(r instanceof IDBRequest)return jg(r);if(ia.has(r))return ia.get(r);const e=Kg(r);return e!==r&&(ia.set(r,e),ec.set(e,r)),e}const oa=r=>ec.get(r);function Hg(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Qt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Qt(o.result),l.oldVersion,l.newVersion,Qt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Wg=["get","getKey","getAll","getAllKeys","count"],Qg=["put","add","delete","clear"],aa=new Map;function gu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(aa.get(e))return aa.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Qg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Wg.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return aa.set(e,i),i}zg(r=>({...r,get:(e,t,n)=>gu(e,t)||r.get(e,t,n),has:(e,t)=>!!gu(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Xg(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ea="@firebase/app",_u="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Za("@firebase/app"),Yg="@firebase/app-compat",Zg="@firebase/analytics-compat",e_="@firebase/analytics",t_="@firebase/app-check-compat",n_="@firebase/app-check",r_="@firebase/auth",s_="@firebase/auth-compat",i_="@firebase/database",o_="@firebase/data-connect",a_="@firebase/database-compat",c_="@firebase/functions",l_="@firebase/functions-compat",u_="@firebase/installations",h_="@firebase/installations-compat",d_="@firebase/messaging",f_="@firebase/messaging-compat",m_="@firebase/performance",p_="@firebase/performance-compat",g_="@firebase/remote-config",__="@firebase/remote-config-compat",y_="@firebase/storage",v_="@firebase/storage-compat",I_="@firebase/firestore",E_="@firebase/vertexai-preview",w_="@firebase/firestore-compat",T_="firebase",b_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="[DEFAULT]",A_={[Ea]:"fire-core",[Yg]:"fire-core-compat",[e_]:"fire-analytics",[Zg]:"fire-analytics-compat",[n_]:"fire-app-check",[t_]:"fire-app-check-compat",[r_]:"fire-auth",[s_]:"fire-auth-compat",[i_]:"fire-rtdb",[o_]:"fire-data-connect",[a_]:"fire-rtdb-compat",[c_]:"fire-fn",[l_]:"fire-fn-compat",[u_]:"fire-iid",[h_]:"fire-iid-compat",[d_]:"fire-fcm",[f_]:"fire-fcm-compat",[m_]:"fire-perf",[p_]:"fire-perf-compat",[g_]:"fire-rc",[__]:"fire-rc-compat",[y_]:"fire-gcs",[v_]:"fire-gcs-compat",[I_]:"fire-fst",[w_]:"fire-fst-compat",[E_]:"fire-vertex","fire-js":"fire-js",[T_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Map,R_=new Map,Ta=new Map;function yu(r,e){try{r.container.addComponent(e)}catch(t){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Pn(r){const e=r.name;if(Ta.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Ta.set(e,r);for(const t of Vi.values())yu(t,r);for(const t of R_.values())yu(t,r);return!0}function to(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function lt(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new ks("app","Firebase",S_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=b_;function dd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:wa,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Jt.create("bad-app-name",{appName:String(s)});if(t||(t=od()),!t)throw Jt.create("no-options");const i=Vi.get(s);if(i){if(ys(t,i.options)&&ys(n,i.config))return i;throw Jt.create("duplicate-app",{appName:s})}const o=new Ng(s);for(const l of Ta.values())o.addComponent(l);const c=new P_(t,n,o);return Vi.set(s,c),c}function fd(r=wa){const e=Vi.get(r);if(!e&&r===wa&&od())return dd();if(!e)throw Jt.create("no-app",{appName:r});return e}function dt(r,e,t){var n;let s=(n=A_[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(c.join(" "));return}Pn(new Zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const C_="firebase-heartbeat-database",x_=1,vs="firebase-heartbeat-store";let ca=null;function md(){return ca||(ca=Hg(C_,x_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(vs)}catch(t){console.warn(t)}}}}).catch(r=>{throw Jt.create("idb-open",{originalErrorMessage:r.message})})),ca}async function D_(r){try{const t=(await md()).transaction(vs),n=await t.objectStore(vs).get(pd(r));return await t.done,n}catch(e){if(e instanceof yt)Pt.warn(e.message);else{const t=Jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(t.message)}}}async function vu(r,e){try{const n=(await md()).transaction(vs,"readwrite");await n.objectStore(vs).put(e,pd(r)),await n.done}catch(t){if(t instanceof yt)Pt.warn(t.message);else{const n=Jt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pt.warn(n.message)}}}function pd(r){return`${r.name}!${r.options.appId}`}/**
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
 */const k_=1024,V_=30*24*60*60*1e3;class N_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Iu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=V_}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Pt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Iu(),{heartbeatsToSend:n,unsentEntries:s}=O_(this._heartbeatsCache.heartbeats),i=ki(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Pt.warn(t),""}}}function Iu(){return new Date().toISOString().substring(0,10)}function O_(r,e=k_){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Eu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Eu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class L_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ld()?Tg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await D_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return vu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return vu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eu(r){return ki(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(r){Pn(new Zt("platform-logger",e=>new Jg(e),"PRIVATE")),Pn(new Zt("heartbeat",e=>new N_(e),"PRIVATE")),dt(Ea,_u,r),dt(Ea,_u,"esm2017"),dt("fire-js","")}M_("");var F_="firebase",U_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt(F_,U_,"app");function tc(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function gd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const B_=gd,_d=new ks("auth","Firebase",gd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new Za("@firebase/auth");function $_(r,...e){Ni.logLevel<=Z.WARN&&Ni.warn(`Auth (${Un}): ${r}`,...e)}function gi(r,...e){Ni.logLevel<=Z.ERROR&&Ni.error(`Auth (${Un}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(r,...e){throw nc(r,...e)}function ft(r,...e){return nc(r,...e)}function yd(r,e,t){const n=Object.assign(Object.assign({},B_()),{[e]:t});return new ks("auth","Firebase",n).create(e,{appName:r.name})}function St(r){return yd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return _d.create(r,...e)}function H(r,e,...t){if(!r)throw nc(e,...t)}function wt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw gi(e),new Error(e)}function Ct(r,e){r||wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function j_(){return wu()==="http:"||wu()==="https:"}function wu(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(j_()||Ig()||"connection"in navigator)?navigator.onLine:!0}function z_(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ct(t>e,"Short delay should be less than long delay!"),this.isMobile=_g()||Eg()}get(){return q_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(r,e){Ct(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=new Ns(3e4,6e4);function Dt(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function kt(r,e,t,n,s={}){return Id(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=Vs(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},i);return vg()||(h.referrerPolicy="no-referrer"),vd.fetch()(Ed(r,r.config.apiHost,t,c),h)})}async function Id(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},G_),e);try{const s=new W_(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ai(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ai(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ai(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw ai(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw yd(r,f,h);at(r,f)}}catch(s){if(s instanceof yt)throw s;at(r,"network-request-failed",{message:String(s)})}}async function Os(r,e,t,n,s={}){const i=await kt(r,e,t,n,s);return"mfaPendingCredential"in i&&at(r,"multi-factor-auth-required",{_serverResponse:i}),i}function Ed(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?rc(r.config,s):`${r.config.apiScheme}://${s}`}function H_(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class W_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(ft(this.auth,"network-request-failed")),K_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ai(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=ft(r,e,n);return s.customData._tokenResponse=t,s}function Tu(r){return r!==void 0&&r.enterprise!==void 0}class Q_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return H_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function J_(r,e){return kt(r,"GET","/v2/recaptchaConfig",Dt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(r,e){return kt(r,"POST","/v1/accounts:delete",e)}async function wd(r,e){return kt(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Y_(r,e=!1){const t=Ee(r),n=await t.getIdToken(e),s=sc(n);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:ls(la(s.auth_time)),issuedAtTime:ls(la(s.iat)),expirationTime:ls(la(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function la(r){return Number(r)*1e3}function sc(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return gi("JWT malformed, contained fewer than 3 sections"),null;try{const s=sd(t);return s?JSON.parse(s):(gi("Failed to decode base64 JWT payload"),null)}catch(s){return gi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bu(r){const e=sc(r);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof yt&&Z_(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Z_({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(r){var e;const t=r.auth,n=await r.getIdToken(),s=await Is(r,wd(t,{idToken:n}));H(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Td(i.providerUserInfo):[],c=ny(r.providerData,o),l=r.isAnonymous,h=!(r.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Aa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function ty(r){const e=Ee(r);await Oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ny(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Td(r){return r.map(e=>{var{providerId:t}=e,n=tc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(r,e){const t=await Id(r,{},async()=>{const n=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=Ed(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",vd.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function sy(r,e){return kt(r,"POST","/v2/accounts:revokeToken",Dt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=bu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await ry(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new cr;return n&&(H(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(r,e){H(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=tc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ey(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Aa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Is(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y_(this,e)}reload(){return ty(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Oi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(St(this.auth));const e=await this.getIdToken();return await Is(this,X_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,c,l,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=t.photoURL)!==null&&o!==void 0?o:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,G=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:z,isAnonymous:X,providerData:Q,stsTokenManager:E}=t;H(M&&E,e,"internal-error");const g=cr.fromJSON(this.name,E);H(typeof M=="string",e,"internal-error"),Ft(p,e.name),Ft(I,e.name),H(typeof z=="boolean",e,"internal-error"),H(typeof X=="boolean",e,"internal-error"),Ft(S,e.name),Ft(D,e.name),Ft(V,e.name),Ft(x,e.name),Ft(G,e.name),Ft(B,e.name);const y=new Tt({uid:M,auth:e,email:I,emailVerified:z,displayName:p,isAnonymous:X,photoURL:D,phoneNumber:S,tenantId:V,stsTokenManager:g,createdAt:G,lastLoginAt:B});return Q&&Array.isArray(Q)&&(y.providerData=Q.map(w=>Object.assign({},w))),x&&(y._redirectEventId=x),y}static async _fromIdTokenResponse(e,t,n=!1){const s=new cr;s.updateFromServerResponse(t);const i=new Tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Oi(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Td(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new cr;c.updateFromIdToken(n);const l=new Tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Aa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Map;function bt(r){Ct(r instanceof Function,"Expected a class definition");let e=Au.get(r);return e?(Ct(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Au.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bd.type="NONE";const Ru=bd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(r,e,t){return`firebase:${r}:${e}:${t}`}class lr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=_i(this.userKey,s.apiKey,i),this.fullPersistenceKey=_i("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new lr(bt(Ru),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bt(Ru);const o=_i(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=Tt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new lr(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new lr(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ad(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xd(e))return"Blackberry";if(Dd(e))return"Webos";if(Rd(e))return"Safari";if((e.includes("chrome/")||Sd(e))&&!e.includes("edge/"))return"Chrome";if(Cd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ad(r=be()){return/firefox\//i.test(r)}function Rd(r=be()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sd(r=be()){return/crios\//i.test(r)}function Pd(r=be()){return/iemobile/i.test(r)}function Cd(r=be()){return/android/i.test(r)}function xd(r=be()){return/blackberry/i.test(r)}function Dd(r=be()){return/webos/i.test(r)}function ic(r=be()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function iy(r=be()){var e;return ic(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oy(){return wg()&&document.documentMode===10}function kd(r=be()){return ic(r)||Cd(r)||Dd(r)||xd(r)||/windows phone/i.test(r)||Pd(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(r,e=[]){let t;switch(r){case"Browser":t=Su(be());break;case"Worker":t=`${Su(be())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Un}/${n}`}/**
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
 */class ay{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function cy(r,e={}){return kt(r,"GET","/v2/passwordPolicy",Dt(r,e))}/**
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
 */const ly=6;class uy{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ly,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pu(this),this.idTokenSubscription=new Pu(this),this.beforeStateQueue=new ay(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bt(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await lr.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wd(this,{idToken:e}),n=await Tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=z_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(St(this));const t=e?Ee(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(St(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(St(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cy(this),t=new uy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ks("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await sy(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&$_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function rn(r){return Ee(r)}class Pu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pg(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dy(r){no=r}function Nd(r){return no.loadJS(r)}function fy(){return no.recaptchaEnterpriseScript}function my(){return no.gapiScript}function py(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const gy="recaptcha-enterprise",_y="NO_RECAPTCHA";class yy{constructor(e){this.type=gy,this.auth=rn(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{J_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Q_(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Tu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(_y)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{n(this.auth).then(c=>{if(!t&&Tu(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=fy();l.length!==0&&(l+=c),Nd(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Cu(r,e,t,n=!1){const s=new yy(r);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Li(r,e,t,n){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Cu(r,e,t,t==="getOobCode");return n(r,i)}else return n(r,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Cu(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(r,e){const t=to(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ys(i,e??{}))return s;at(s,"already-initialized")}return t.initialize({options:e})}function Iy(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(bt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Ey(r,e,t){const n=rn(r);H(n._canInitEmulator,n,"emulator-config-failed"),H(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Od(e),{host:o,port:c}=wy(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${i}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ty()}function Od(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function wy(r){const e=Od(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:xu(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:xu(o)}}}function xu(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Ty(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wt("not implemented")}_getIdTokenResponse(e){return wt("not implemented")}_linkToIdToken(e,t){return wt("not implemented")}_getReauthenticationResolver(e){return wt("not implemented")}}async function by(r,e){return kt(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(r,e){return Os(r,"POST","/v1/accounts:signInWithPassword",Dt(r,e))}async function Ry(r,e){return kt(r,"POST","/v1/accounts:sendOobCode",Dt(r,e))}async function Sy(r,e){return Ry(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Py(r,e){return Os(r,"POST","/v1/accounts:signInWithEmailLink",Dt(r,e))}async function Cy(r,e){return Os(r,"POST","/v1/accounts:signInWithEmailLink",Dt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends oc{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Es(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Es(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Li(e,t,"signInWithPassword",Ay);case"emailLink":return Py(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Li(e,n,"signUpPassword",by);case"emailLink":return Cy(e,{idToken:t,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(r,e){return Os(r,"POST","/v1/accounts:signInWithIdp",Dt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="http://localhost";class Cn extends oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):at("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=tc(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new Cn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ur(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ur(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ur(e,t)}buildRequest(){const e={requestUri:xy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ky(r){const e=ts(ns(r)).link,t=e?ts(ns(e)).deep_link_id:null,n=ts(ns(r)).deep_link_id;return(n?ts(ns(n)).link:null)||n||t||e||r}class ac{constructor(e){var t,n,s,i,o,c;const l=ts(ns(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(n=l.oobCode)!==null&&n!==void 0?n:null,p=Dy((s=l.mode)!==null&&s!==void 0?s:null);H(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=ky(e);try{return new ac(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.providerId=Rr.PROVIDER_ID}static credential(e,t){return Es._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ac.parseLink(t);return H(n,"argument-error"),Es._fromEmailAndCode(e,n.code,n.tenantId)}}Rr.PROVIDER_ID="password";Rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Ld{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ls{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return jt.credential(t,n)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ls{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ls{constructor(){super("twitter.com")}static credential(e,t){return Cn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return zt.credential(t,n)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(r,e){return Os(r,"POST","/v1/accounts:signUp",Dt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Tt._fromIdTokenResponse(e,n,s),o=Du(n);return new xn({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Du(n);return new xn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Du(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends yt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Mi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Mi(e,t,n,s)}}function Md(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mi._fromErrorAndOperation(r,i,e,n):i})}async function Ny(r,e,t=!1){const n=await Is(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return xn._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(r,e,t=!1){const{auth:n}=r;if(lt(n.app))return Promise.reject(St(n));const s="reauthenticate";try{const i=await Is(r,Md(n,s,e,r),t);H(i.idToken,n,"internal-error");const o=sc(i.idToken);H(o,n,"internal-error");const{sub:c}=o;return H(r.uid===c,n,"user-mismatch"),xn._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&at(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fd(r,e,t=!1){if(lt(r.app))return Promise.reject(St(r));const n="signIn",s=await Md(r,n,e),i=await xn._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function Ly(r,e){return Fd(rn(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(r){const e=rn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function My(r,e,t){const n=rn(r);await Li(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Sy)}async function Fy(r,e,t){if(lt(r.app))return Promise.reject(St(r));const n=rn(r),o=await Li(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ud(r),l}),c=await xn._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function Uy(r,e,t){return lt(r.app)?Promise.reject(St(r)):Ly(Ee(r),Rr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Ud(r),n})}function By(r,e,t,n){return Ee(r).onIdTokenChanged(e,t,n)}function $y(r,e,t){return Ee(r).beforeAuthStateChanged(e,t)}function jy(r,e,t,n){return Ee(r).onAuthStateChanged(e,t,n)}function qy(r){return Ee(r).signOut()}const Fi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fi,"1"),this.storage.removeItem(Fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=1e3,Gy=10;class $d extends Bd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);oy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Gy):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$d.type="LOCAL";const Ky=$d;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends Bd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jd.type="SESSION";const qd=jd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ro(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await Hy(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ro.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=cc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const I=p;if(I.data.eventId===h)switch(I.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(I.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return window}function Qy(r){mt().location.href=r}/**
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
 */function zd(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function Jy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xy(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Yy(){return zd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="firebaseLocalStorageDb",Zy=1,Ui="firebaseLocalStorage",Kd="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function so(r,e){return r.transaction([Ui],e?"readwrite":"readonly").objectStore(Ui)}function ev(){const r=indexedDB.deleteDatabase(Gd);return new Ms(r).toPromise()}function Ra(){const r=indexedDB.open(Gd,Zy);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Ui,{keyPath:Kd})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Ui)?e(n):(n.close(),await ev(),e(await Ra()))})})}async function ku(r,e,t){const n=so(r,!0).put({[Kd]:e,value:t});return new Ms(n).toPromise()}async function tv(r,e){const t=so(r,!1).get(e),n=await new Ms(t).toPromise();return n===void 0?null:n.value}function Vu(r,e){const t=so(r,!0).delete(e);return new Ms(t).toPromise()}const nv=800,rv=3;class Hd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ra(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>rv)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ro._getInstance(Yy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Jy(),!this.activeServiceWorker)return;this.sender=new Wy(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ra();return await ku(e,Fi,"1"),await Vu(e,Fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ku(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>tv(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=so(s,!1).getAll();return new Ms(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hd.type="LOCAL";const sv=Hd;new Ns(3e4,6e4);/**
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
 */function iv(r,e){return e?bt(e):(H(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends oc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ur(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ov(r){return Fd(r.auth,new lc(r),r.bypassAuthState)}function av(r){const{auth:e,user:t}=r;return H(t,e,"internal-error"),Oy(t,new lc(r),r.bypassAuthState)}async function cv(r){const{auth:e,user:t}=r;return H(t,e,"internal-error"),Ny(t,new lc(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ov;case"linkViaPopup":case"linkViaRedirect":return cv;case"reauthViaPopup":case"reauthViaRedirect":return av;default:at(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=new Ns(2e3,1e4);class or extends Wd{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const e=cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lv.get())};e()}}or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="pendingRedirect",yi=new Map;class hv extends Wd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=yi.get(this.auth._key());if(!e){try{const n=await dv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}yi.set(this.auth._key(),e)}return this.bypassAuthState||yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dv(r,e){const t=pv(e),n=mv(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function fv(r,e){yi.set(r._key(),e)}function mv(r){return bt(r._redirectPersistence)}function pv(r){return _i(uv,r.config.apiKey,r.name)}async function gv(r,e,t=!1){if(lt(r.app))return Promise.reject(St(r));const n=rn(r),s=iv(n,e),o=await new hv(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=10*60*1e3;class yv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Qd(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(ft(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_v&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nu(e))}saveEventToCache(e){this.cachedEventUids.add(Nu(e)),this.lastProcessedEventTime=Date.now()}}function Nu(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Qd({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vv(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qd(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(r,e={}){return kt(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wv=/^https?/;async function Tv(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Iv(r);for(const t of e)try{if(bv(t))return}catch{}at(r,"unauthorized-domain")}function bv(r){const e=ba(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!wv.test(t))return!1;if(Ev.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const Av=new Ns(3e4,6e4);function Ou(){const r=mt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Rv(r){return new Promise((e,t)=>{var n,s,i;function o(){Ou(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ou(),t(ft(r,"network-request-failed"))},timeout:Av.get()})}if(!((s=(n=mt().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mt().gapi)===null||i===void 0)&&i.load)o();else{const c=py("iframefcb");return mt()[c]=()=>{gapi.load?o():t(ft(r,"network-request-failed"))},Nd(`${my()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw vi=null,e})}let vi=null;function Sv(r){return vi=vi||Rv(r),vi}/**
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
 */const Pv=new Ns(5e3,15e3),Cv="__/auth/iframe",xv="emulator/auth/iframe",Dv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vv(r){const e=r.config;H(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?rc(e,xv):`https://${r.config.authDomain}/${Cv}`,n={apiKey:e.apiKey,appName:r.name,v:Un},s=kv.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Vs(n).slice(1)}`}async function Nv(r){const e=await Sv(r),t=mt().gapi;return H(t,r,"internal-error"),e.open({where:document.body,url:Vv(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dv,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=ft(r,"network-request-failed"),c=mt().setTimeout(()=>{i(o)},Pv.get());function l(){mt().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Ov={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lv=500,Mv=600,Fv="_blank",Uv="http://localhost";class Lu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bv(r,e,t,n=Lv,s=Mv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Ov),{width:n.toString(),height:s.toString(),top:i,left:o}),h=be().toLowerCase();t&&(c=Sd(h)?Fv:t),Ad(h)&&(e=e||Uv,l.scrollbars="yes");const f=Object.entries(l).reduce((I,[S,D])=>`${I}${S}=${D},`,"");if(iy(h)&&c!=="_self")return $v(e||"",c),new Lu(null);const p=window.open(e||"",c,f);H(p,r,"popup-blocked");try{p.focus()}catch{}return new Lu(p)}function $v(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const jv="__/auth/handler",qv="emulator/auth/handler",zv=encodeURIComponent("fac");async function Mu(r,e,t,n,s,i){H(r.config.authDomain,r,"auth-domain-config-required"),H(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Un,eventId:s};if(e instanceof Ld){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Sg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ls){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${zv}=${encodeURIComponent(l)}`:"";return`${Gv(r)}?${Vs(c).slice(1)}${h}`}function Gv({config:r}){return r.emulator?rc(r,qv):`https://${r.authDomain}/${jv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="webStorageSupport";class Kv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qd,this._completeRedirectFn=gv,this._overrideRedirectResult=fv}async _openPopup(e,t,n,s){var i;Ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Mu(e,t,n,ba(),s);return Bv(e,o,cc())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Mu(e,t,n,ba(),s);return Qy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ct(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Nv(e),n=new yv(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ua,{type:ua},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ua];o!==void 0&&t(!!o),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Tv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kd()||Rd()||ic()}}const Hv=Kv;var Fu="@firebase/auth",Uu="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jv(r){Pn(new Zt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vd(r)},h=new hy(n,s,i,l);return Iy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Pn(new Zt("auth-internal",e=>{const t=rn(e.getProvider("auth").getImmediate());return(n=>new Wv(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dt(Fu,Uu,Qv(r)),dt(Fu,Uu,"esm2017")}/**
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
 */const Xv=5*60,Yv=ad("authIdTokenMaxAge")||Xv;let Bu=null;const Zv=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Yv)return;const s=t==null?void 0:t.token;Bu!==s&&(Bu=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eI(r=fd()){const e=to(r,"auth");if(e.isInitialized())return e.getImmediate();const t=vy(r,{popupRedirectResolver:Hv,persistence:[sv,Ky,qd]}),n=ad("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Zv(i.toString());$y(t,o,()=>o(t.currentUser)),By(t,c=>o(c))}}const s=id("auth");return s&&Ey(t,`http://${s}`),t}function tI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}dy({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=ft("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",tI().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jv("Browser");var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wn,Jd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function y(){}y.prototype=g.prototype,E.D=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(w,T,A){for(var v=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)v[rt-2]=arguments[rt];return g.prototype[T].apply(w,v)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,y){y||(y=0);var w=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)w[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;16>T;++T)w[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],T=E.g[2];var A=E.g[3],v=g+(A^y&(T^A))+w[0]+3614090360&4294967295;g=y+(v<<7&4294967295|v>>>25),v=A+(T^g&(y^T))+w[1]+3905402710&4294967295,A=g+(v<<12&4294967295|v>>>20),v=T+(y^A&(g^y))+w[2]+606105819&4294967295,T=A+(v<<17&4294967295|v>>>15),v=y+(g^T&(A^g))+w[3]+3250441966&4294967295,y=T+(v<<22&4294967295|v>>>10),v=g+(A^y&(T^A))+w[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=A+(T^g&(y^T))+w[5]+1200080426&4294967295,A=g+(v<<12&4294967295|v>>>20),v=T+(y^A&(g^y))+w[6]+2821735955&4294967295,T=A+(v<<17&4294967295|v>>>15),v=y+(g^T&(A^g))+w[7]+4249261313&4294967295,y=T+(v<<22&4294967295|v>>>10),v=g+(A^y&(T^A))+w[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=A+(T^g&(y^T))+w[9]+2336552879&4294967295,A=g+(v<<12&4294967295|v>>>20),v=T+(y^A&(g^y))+w[10]+4294925233&4294967295,T=A+(v<<17&4294967295|v>>>15),v=y+(g^T&(A^g))+w[11]+2304563134&4294967295,y=T+(v<<22&4294967295|v>>>10),v=g+(A^y&(T^A))+w[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=A+(T^g&(y^T))+w[13]+4254626195&4294967295,A=g+(v<<12&4294967295|v>>>20),v=T+(y^A&(g^y))+w[14]+2792965006&4294967295,T=A+(v<<17&4294967295|v>>>15),v=y+(g^T&(A^g))+w[15]+1236535329&4294967295,y=T+(v<<22&4294967295|v>>>10),v=g+(T^A&(y^T))+w[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=A+(y^T&(g^y))+w[6]+3225465664&4294967295,A=g+(v<<9&4294967295|v>>>23),v=T+(g^y&(A^g))+w[11]+643717713&4294967295,T=A+(v<<14&4294967295|v>>>18),v=y+(A^g&(T^A))+w[0]+3921069994&4294967295,y=T+(v<<20&4294967295|v>>>12),v=g+(T^A&(y^T))+w[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=A+(y^T&(g^y))+w[10]+38016083&4294967295,A=g+(v<<9&4294967295|v>>>23),v=T+(g^y&(A^g))+w[15]+3634488961&4294967295,T=A+(v<<14&4294967295|v>>>18),v=y+(A^g&(T^A))+w[4]+3889429448&4294967295,y=T+(v<<20&4294967295|v>>>12),v=g+(T^A&(y^T))+w[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=A+(y^T&(g^y))+w[14]+3275163606&4294967295,A=g+(v<<9&4294967295|v>>>23),v=T+(g^y&(A^g))+w[3]+4107603335&4294967295,T=A+(v<<14&4294967295|v>>>18),v=y+(A^g&(T^A))+w[8]+1163531501&4294967295,y=T+(v<<20&4294967295|v>>>12),v=g+(T^A&(y^T))+w[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=A+(y^T&(g^y))+w[2]+4243563512&4294967295,A=g+(v<<9&4294967295|v>>>23),v=T+(g^y&(A^g))+w[7]+1735328473&4294967295,T=A+(v<<14&4294967295|v>>>18),v=y+(A^g&(T^A))+w[12]+2368359562&4294967295,y=T+(v<<20&4294967295|v>>>12),v=g+(y^T^A)+w[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=A+(g^y^T)+w[8]+2272392833&4294967295,A=g+(v<<11&4294967295|v>>>21),v=T+(A^g^y)+w[11]+1839030562&4294967295,T=A+(v<<16&4294967295|v>>>16),v=y+(T^A^g)+w[14]+4259657740&4294967295,y=T+(v<<23&4294967295|v>>>9),v=g+(y^T^A)+w[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=A+(g^y^T)+w[4]+1272893353&4294967295,A=g+(v<<11&4294967295|v>>>21),v=T+(A^g^y)+w[7]+4139469664&4294967295,T=A+(v<<16&4294967295|v>>>16),v=y+(T^A^g)+w[10]+3200236656&4294967295,y=T+(v<<23&4294967295|v>>>9),v=g+(y^T^A)+w[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=A+(g^y^T)+w[0]+3936430074&4294967295,A=g+(v<<11&4294967295|v>>>21),v=T+(A^g^y)+w[3]+3572445317&4294967295,T=A+(v<<16&4294967295|v>>>16),v=y+(T^A^g)+w[6]+76029189&4294967295,y=T+(v<<23&4294967295|v>>>9),v=g+(y^T^A)+w[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=A+(g^y^T)+w[12]+3873151461&4294967295,A=g+(v<<11&4294967295|v>>>21),v=T+(A^g^y)+w[15]+530742520&4294967295,T=A+(v<<16&4294967295|v>>>16),v=y+(T^A^g)+w[2]+3299628645&4294967295,y=T+(v<<23&4294967295|v>>>9),v=g+(T^(y|~A))+w[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=A+(y^(g|~T))+w[7]+1126891415&4294967295,A=g+(v<<10&4294967295|v>>>22),v=T+(g^(A|~y))+w[14]+2878612391&4294967295,T=A+(v<<15&4294967295|v>>>17),v=y+(A^(T|~g))+w[5]+4237533241&4294967295,y=T+(v<<21&4294967295|v>>>11),v=g+(T^(y|~A))+w[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=A+(y^(g|~T))+w[3]+2399980690&4294967295,A=g+(v<<10&4294967295|v>>>22),v=T+(g^(A|~y))+w[10]+4293915773&4294967295,T=A+(v<<15&4294967295|v>>>17),v=y+(A^(T|~g))+w[1]+2240044497&4294967295,y=T+(v<<21&4294967295|v>>>11),v=g+(T^(y|~A))+w[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=A+(y^(g|~T))+w[15]+4264355552&4294967295,A=g+(v<<10&4294967295|v>>>22),v=T+(g^(A|~y))+w[6]+2734768916&4294967295,T=A+(v<<15&4294967295|v>>>17),v=y+(A^(T|~g))+w[13]+1309151649&4294967295,y=T+(v<<21&4294967295|v>>>11),v=g+(T^(y|~A))+w[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=A+(y^(g|~T))+w[11]+3174756917&4294967295,A=g+(v<<10&4294967295|v>>>22),v=T+(g^(A|~y))+w[2]+718787259&4294967295,T=A+(v<<15&4294967295|v>>>17),v=y+(A^(T|~g))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var y=g-this.blockSize,w=this.B,T=this.h,A=0;A<g;){if(T==0)for(;A<=y;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<g;)if(w[T++]=E.charCodeAt(A++),T==this.blockSize){s(this,w),T=0;break}}else for(;A<g;)if(w[T++]=E[A++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=g},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var y=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=y&255,y/=256;for(this.u(E),E=Array(16),g=y=0;4>g;++g)for(var w=0;32>w;w+=8)E[y++]=this.g[g]>>>w&255;return E};function i(E,g){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function o(E,g){this.h=g;for(var y=[],w=!0,T=E.length-1;0<=T;T--){var A=E[T]|0;w&&A==g||(y[T]=A,w=!1)}this.g=y}var c={};function l(E){return-128<=E&&128>E?i(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return x(h(-E));for(var g=[],y=1,w=0;E>=y;w++)g[w]=E/y|0,y*=4294967296;return new o(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return x(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),w=p,T=0;T<E.length;T+=8){var A=Math.min(8,E.length-T),v=parseInt(E.substring(T,T+A),g);8>A?(A=h(Math.pow(g,A)),w=w.j(A).add(h(v))):(w=w.j(y),w=w.add(h(v)))}return w}var p=l(0),I=l(1),S=l(16777216);r=o.prototype,r.m=function(){if(V(this))return-x(this).m();for(var E=0,g=1,y=0;y<this.g.length;y++){var w=this.i(y);E+=(0<=w?w:4294967296+w)*g,g*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(V(this))return"-"+x(this).toString(E);for(var g=h(Math.pow(E,6)),y=this,w="";;){var T=z(y,g).g;y=G(y,T.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=T,D(y))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function V(E){return E.h==-1}r.l=function(E){return E=G(this,E),V(E)?-1:D(E)?0:1};function x(E){for(var g=E.g.length,y=[],w=0;w<g;w++)y[w]=~E.g[w];return new o(y,~E.h).add(I)}r.abs=function(){return V(this)?x(this):this},r.add=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],w=0,T=0;T<=g;T++){var A=w+(this.i(T)&65535)+(E.i(T)&65535),v=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=v>>>16,A&=65535,v&=65535,y[T]=v<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function G(E,g){return E.add(x(g))}r.j=function(E){if(D(this)||D(E))return p;if(V(this))return V(E)?x(this).j(x(E)):x(x(this).j(E));if(V(E))return x(this.j(x(E)));if(0>this.l(S)&&0>E.l(S))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,y=[],w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<E.g.length;T++){var A=this.i(w)>>>16,v=this.i(w)&65535,rt=E.i(T)>>>16,$e=E.i(T)&65535;y[2*w+2*T]+=v*$e,B(y,2*w+2*T),y[2*w+2*T+1]+=A*$e,B(y,2*w+2*T+1),y[2*w+2*T+1]+=v*rt,B(y,2*w+2*T+1),y[2*w+2*T+2]+=A*rt,B(y,2*w+2*T+2)}for(w=0;w<g;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=g;w<2*g;w++)y[w]=0;return new o(y,0)};function B(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function M(E,g){this.g=E,this.h=g}function z(E,g){if(D(g))throw Error("division by zero");if(D(E))return new M(p,p);if(V(E))return g=z(x(E),g),new M(x(g.g),x(g.h));if(V(g))return g=z(E,x(g)),new M(x(g.g),g.h);if(30<E.g.length){if(V(E)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var y=I,w=g;0>=w.l(E);)y=X(y),w=X(w);var T=Q(y,1),A=Q(w,1);for(w=Q(w,2),y=Q(y,2);!D(w);){var v=A.add(w);0>=v.l(E)&&(T=T.add(y),A=v),w=Q(w,1),y=Q(y,1)}return g=G(E,T.j(g)),new M(T,g)}for(T=p;0<=E.l(g);){for(y=Math.max(1,Math.floor(E.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=h(y),v=A.j(g);V(v)||0<v.l(E);)y-=w,A=h(y),v=A.j(g);D(A)&&(A=I),T=T.add(A),E=G(E,v)}return new M(T,E)}r.A=function(E){return z(this,E).h},r.and=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)&E.i(w);return new o(y,this.h&E.h)},r.or=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)|E.i(w);return new o(y,this.h|E.h)},r.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)^E.i(w);return new o(y,this.h^E.h)};function X(E){for(var g=E.g.length+1,y=[],w=0;w<g;w++)y[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(y,E.h)}function Q(E,g){var y=g>>5;g%=32;for(var w=E.g.length-y,T=[],A=0;A<w;A++)T[A]=0<g?E.i(A+y)>>>g|E.i(A+y+1)<<32-g:E.i(A+y);return new o(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Jd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,wn=o}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});var ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xd,rs,Yd,Ii,Sa,Zd,ef,tf;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ci=="object"&&ci];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,b={next:function(){if(!m&&d<a.length){var P=d++;return{value:u(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),a.apply(u,b)}}return function(){return a.apply(u,arguments)}}function I(a,u,d){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,I.apply(null,arguments)}function S(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function D(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,b,P){for(var N=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)N[ce-2]=arguments[ce];return u.prototype[b].apply(m,N)}}function V(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function x(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const b=a.length||0,P=m.length||0;a.length=b+P;for(let N=0;N<P;N++)a[b+N]=m[N]}else a.push(m)}}class G{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var X=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function Q(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function E(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let P=0;P<y.length;P++)d=y[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function T(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function v(){var a=qn;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class rt{constructor(){this.h=this.g=null}add(u,d){const m=$e.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var $e=new G(()=>new Mo,a=>a.reset());class Mo{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let st,Nt=!1,qn=new rt,Nr=()=>{const a=c.Promise.resolve(void 0);st=()=>{a.then(zs)}};var zs=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){A(d)}var u=$e;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Nt=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var le=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function te(a,u){if($.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(X){e:{try{z(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Y[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&te.aa.h.call(this)}}D(te,$);var Y={2:"touch",3:"pen",4:"mouse"};te.prototype.h=function(){te.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Se="closure_listenable_"+(1e6*Math.random()|0),Pe=0;function Ce(a,u,d,m,b){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=b,this.key=++Pe,this.da=this.fa=!1}function ke(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ve(a){this.src=a,this.g={},this.h=0}Ve.prototype.add=function(a,u,d,m,b){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var N=Gn(a,u,m,b);return-1<N?(u=a[N],d||(u.fa=!1)):(u=new Ce(u,this.src,P,!!m,b),u.fa=d,a.push(u)),u};function zn(a,u){var d=u.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=b)&&Array.prototype.splice.call(m,b,1),P&&(ke(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Gn(a,u,d,m){for(var b=0;b<a.length;++b){var P=a[b];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return b}return-1}var Kn="closure_lm_"+(1e6*Math.random()|0),Fo={};function fl(a,u,d,m,b){if(Array.isArray(u)){for(var P=0;P<u.length;P++)fl(a,u[P],d,m,b);return null}return d=gl(d),a&&a[Se]?a.K(u,d,h(m)?!!m.capture:!1,b):kp(a,u,d,!1,m,b)}function kp(a,u,d,m,b,P){if(!u)throw Error("Invalid event type");var N=h(b)?!!b.capture:!!b,ce=Bo(a);if(ce||(a[Kn]=ce=new Ve(a)),d=ce.add(u,d,m,N,P),d.proxy)return d;if(m=Vp(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)le||(b=N),b===void 0&&(b=!1),a.addEventListener(u.toString(),m,b);else if(a.attachEvent)a.attachEvent(pl(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Vp(){function a(d){return u.call(a.src,a.listener,d)}const u=Np;return a}function ml(a,u,d,m,b){if(Array.isArray(u))for(var P=0;P<u.length;P++)ml(a,u[P],d,m,b);else m=h(m)?!!m.capture:!!m,d=gl(d),a&&a[Se]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],d=Gn(P,d,m,b),-1<d&&(ke(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=Bo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Gn(u,d,m,b)),(d=-1<a?u[a]:null)&&Uo(d))}function Uo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Se])zn(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(pl(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Bo(u))?(zn(d,a),d.h==0&&(d.src=null,u[Kn]=null)):ke(a)}}}function pl(a){return a in Fo?Fo[a]:Fo[a]="on"+a}function Np(a,u){if(a.da)a=!0;else{u=new te(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&Uo(a),a=d.call(m,u)}return a}function Bo(a){return a=a[Kn],a instanceof Ve?a:null}var $o="__closure_events_fn_"+(1e9*Math.random()>>>0);function gl(a){return typeof a=="function"?a:(a[$o]||(a[$o]=function(u){return a.handleEvent(u)}),a[$o])}function Ne(){K.call(this),this.i=new Ve(this),this.M=this,this.F=null}D(Ne,K),Ne.prototype[Se]=!0,Ne.prototype.removeEventListener=function(a,u,d,m){ml(this,a,u,d,m)};function je(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new $(u,a);else if(u instanceof $)u.target=u.target||a;else{var b=u;u=new $(m,a),w(u,b)}if(b=!0,d)for(var P=d.length-1;0<=P;P--){var N=u.g=d[P];b=Gs(N,m,!0,u)&&b}if(N=u.g=a,b=Gs(N,m,!0,u)&&b,b=Gs(N,m,!1,u)&&b,d)for(P=0;P<d.length;P++)N=u.g=d[P],b=Gs(N,m,!1,u)&&b}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)ke(d[m]);delete a.g[u],a.h--}}this.F=null},Ne.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},Ne.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Gs(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,P=0;P<u.length;++P){var N=u[P];if(N&&!N.da&&N.capture==d){var ce=N.listener,xe=N.ha||N.src;N.fa&&zn(a.i,N),b=ce.call(xe,m)!==!1&&b}}return b&&!m.defaultPrevented}function _l(a,u,d){if(typeof a=="function")d&&(a=I(a,d));else if(a&&typeof a.handleEvent=="function")a=I(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function yl(a){a.g=_l(()=>{a.g=null,a.i&&(a.i=!1,yl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Op extends K{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:yl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(a){K.call(this),this.h=a,this.g={}}D(Or,K);var vl=[];function Il(a){Q(a.g,function(u,d){this.g.hasOwnProperty(d)&&Uo(u)},a),a.g={}}Or.prototype.N=function(){Or.aa.N.call(this),Il(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jo=c.JSON.stringify,Lp=c.JSON.parse,Mp=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function qo(){}qo.prototype.h=null;function El(a){return a.h||(a.h=a.i())}function wl(){}var Lr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zo(){$.call(this,"d")}D(zo,$);function Go(){$.call(this,"c")}D(Go,$);var un={},Tl=null;function Ks(){return Tl=Tl||new Ne}un.La="serverreachability";function bl(a){$.call(this,un.La,a)}D(bl,$);function Mr(a){const u=Ks();je(u,new bl(u))}un.STAT_EVENT="statevent";function Al(a,u){$.call(this,un.STAT_EVENT,a),this.stat=u}D(Al,$);function qe(a){const u=Ks();je(u,new Al(u,a))}un.Ma="timingevent";function Rl(a,u){$.call(this,un.Ma,a),this.size=u}D(Rl,$);function Fr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Ur(){this.g=!0}Ur.prototype.xa=function(){this.g=!1};function Fp(a,u,d,m,b,P){a.info(function(){if(a.g)if(P)for(var N="",ce=P.split("&"),xe=0;xe<ce.length;xe++){var re=ce[xe].split("=");if(1<re.length){var Oe=re[0];re=re[1];var Le=Oe.split("_");N=2<=Le.length&&Le[1]=="type"?N+(Oe+"="+re+"&"):N+(Oe+"=redacted&")}}else N=null;else N=P;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+u+`
`+d+`
`+N})}function Up(a,u,d,m,b,P,N){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+u+`
`+d+`
`+P+" "+N})}function Hn(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+$p(a,d)+(m?" "+m:"")})}function Bp(a,u){a.info(function(){return"TIMEOUT: "+u})}Ur.prototype.info=function(){};function $p(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var N=1;N<b.length;N++)b[N]=""}}}}return jo(d)}catch{return u}}var Hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ko;function Ws(){}D(Ws,qo),Ws.prototype.g=function(){return new XMLHttpRequest},Ws.prototype.i=function(){return{}},Ko=new Ws;function Ot(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Or(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pl}function Pl(){this.i=null,this.g="",this.h=!1}var Cl={},Ho={};function Wo(a,u,d){a.L=1,a.v=Ys(It(u)),a.m=d,a.P=!0,xl(a,null)}function xl(a,u){a.F=Date.now(),Qs(a),a.A=It(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),zl(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Pl,a.g=cu(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Op(I(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(vl[0]=b.toString()),b=vl);for(var P=0;P<b.length;P++){var N=fl(d,b[P],m||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Mr(),Fp(a.i,a.u,a.A,a.l,a.R,a.m)}Ot.prototype.ca=function(a){a=a.target;const u=this.M;u&&Et(a)==3?u.j():this.Y(a)},Ot.prototype.Y=function(a){try{if(a==this.g)e:{const Le=Et(this.g);var u=this.g.Ba();const Jn=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||Xl(this.g)))){this.J||Le!=4||u==7||(u==8||0>=Jn?Mr(3):Mr(2)),Qo(this);var d=this.g.Z();this.X=d;t:if(Dl(this)){var m=Xl(this.g);a="";var b=m.length,P=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Br(this);var N="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(P&&u==b-1)});m.length=0,this.h.g+=a,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=d==200,Up(this.i,this.u,this.A,this.l,this.R,Le,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,xe=this.g;if((ce=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ce)){var re=ce;break t}}re=null}if(d=re)Hn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jo(this,d);else{this.o=!1,this.s=3,qe(12),hn(this),Br(this);break e}}if(this.P){d=!0;let it;for(;!this.J&&this.C<N.length;)if(it=jp(this,N),it==Ho){Le==4&&(this.s=4,qe(14),d=!1),Hn(this.i,this.l,null,"[Incomplete Response]");break}else if(it==Cl){this.s=4,qe(15),Hn(this.i,this.l,N,"[Invalid Chunk]"),d=!1;break}else Hn(this.i,this.l,it,null),Jo(this,it);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||N.length!=0||this.h.h||(this.s=1,qe(16),d=!1),this.o=this.o&&d,!d)Hn(this.i,this.l,N,"[Invalid Chunked Response]"),hn(this),Br(this);else if(0<N.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),na(Oe),Oe.M=!0,qe(11))}}else Hn(this.i,this.l,N,null),Jo(this,N);Le==4&&hn(this),this.o&&!this.J&&(Le==4?su(this.j,this):(this.o=!1,Qs(this)))}else ig(this.g),d==400&&0<N.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),hn(this),Br(this)}}}catch{}finally{}};function Dl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function jp(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Ho:(d=Number(u.substring(d,m)),isNaN(d)?Cl:(m+=1,m+d>u.length?Ho:(u=u.slice(m,m+d),a.C=m+d,u)))}Ot.prototype.cancel=function(){this.J=!0,hn(this)};function Qs(a){a.S=Date.now()+a.I,kl(a,a.I)}function kl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Fr(I(a.ba,a),u)}function Qo(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Ot.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Bp(this.i,this.A),this.L!=2&&(Mr(),qe(17)),hn(this),this.s=2,Br(this)):kl(this,this.S-a)};function Br(a){a.j.G==0||a.J||su(a.j,a)}function hn(a){Qo(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Il(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Jo(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Xo(d.h,a))){if(!a.K&&Xo(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)si(d),ni(d);else break e;ta(d),qe(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=Fr(I(d.Za,d),6e3));if(1>=Ol(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fn(d,11)}else if((a.K||d.g==a)&&si(d),!B(u))for(b=d.Da.g.parse(u),u=0;u<b.length;u++){let re=b[u];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const Oe=re[3];Oe!=null&&(d.la=Oe,d.j.info("VER="+d.la));const Le=re[4];Le!=null&&(d.Aa=Le,d.j.info("SVER="+d.Aa));const Jn=re[5];Jn!=null&&typeof Jn=="number"&&0<Jn&&(m=1.5*Jn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const it=a.g;if(it){const oi=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oi){var P=m.h;P.g||oi.indexOf("spdy")==-1&&oi.indexOf("quic")==-1&&oi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Yo(P,P.h),P.h=null))}if(m.D){const ra=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;ra&&(m.ya=ra,he(m.I,m.D,ra))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var N=a;if(m.qa=au(m,m.J?m.ia:null,m.W),N.K){Ll(m.h,N);var ce=N,xe=m.L;xe&&(ce.I=xe),ce.B&&(Qo(ce),Qs(ce)),m.g=N}else nu(m);0<d.i.length&&ri(d)}else re[0]!="stop"&&re[0]!="close"||fn(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?fn(d,7):ea(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}Mr(4)}catch{}}var qp=class{constructor(a,u){this.g=a,this.map=u}};function Vl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ol(a){return a.h?1:a.g?a.g.size:0}function Xo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Yo(a,u){a.g?a.g.add(u):a.h=u}function Ll(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Vl.prototype.cancel=function(){if(this.i=Ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ml(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return V(a.i)}function zp(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function Gp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Fl(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Gp(a),m=zp(a),b=m.length,P=0;P<b;P++)u.call(void 0,m[P],d&&d[P],a)}var Ul=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kp(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),b=null;if(0<=m){var P=a[d].substring(0,m);b=a[d].substring(m+1)}else P=a[d];u(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function dn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof dn){this.h=a.h,Js(this,a.j),this.o=a.o,this.g=a.g,Xs(this,a.s),this.l=a.l;var u=a.i,d=new qr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Bl(this,d),this.m=a.m}else a&&(u=String(a).match(Ul))?(this.h=!1,Js(this,u[1]||"",!0),this.o=$r(u[2]||""),this.g=$r(u[3]||"",!0),Xs(this,u[4]),this.l=$r(u[5]||"",!0),Bl(this,u[6]||"",!0),this.m=$r(u[7]||"")):(this.h=!1,this.i=new qr(null,this.h))}dn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(jr(u,$l,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(jr(u,$l,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(jr(d,d.charAt(0)=="/"?Qp:Wp,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",jr(d,Xp)),a.join("")};function It(a){return new dn(a)}function Js(a,u,d){a.j=d?$r(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Xs(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Bl(a,u,d){u instanceof qr?(a.i=u,Yp(a.i,a.h)):(d||(u=jr(u,Jp)),a.i=new qr(u,a.h))}function he(a,u,d){a.i.set(u,d)}function Ys(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $r(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function jr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Hp),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Hp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $l=/[#\/\?@]/g,Wp=/[#\?:]/g,Qp=/[#\?]/g,Jp=/[#\?@]/g,Xp=/#/g;function qr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Lt(a){a.g||(a.g=new Map,a.h=0,a.i&&Kp(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=qr.prototype,r.add=function(a,u){Lt(this),this.i=null,a=Wn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function jl(a,u){Lt(a),u=Wn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ql(a,u){return Lt(a),u=Wn(a,u),a.g.has(u)}r.forEach=function(a,u){Lt(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(u,b,m,this)},this)},this)},r.na=function(){Lt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const b=a[m];for(let P=0;P<b.length;P++)d.push(u[m])}return d},r.V=function(a){Lt(this);let u=[];if(typeof a=="string")ql(this,a)&&(u=u.concat(this.g.get(Wn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return Lt(this),this.i=null,a=Wn(this,a),ql(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function zl(a,u,d){jl(a,u),0<d.length&&(a.i=null,a.g.set(Wn(a,u),V(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const P=encodeURIComponent(String(m)),N=this.V(m);for(m=0;m<N.length;m++){var b=P;N[m]!==""&&(b+="="+encodeURIComponent(String(N[m]))),a.push(b)}}return this.i=a.join("&")};function Wn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Yp(a,u){u&&!a.j&&(Lt(a),a.i=null,a.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(jl(this,m),zl(this,b,d))},a)),a.j=u}function Zp(a,u){const d=new Ur;if(c.Image){const m=new Image;m.onload=S(Mt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=S(Mt,d,"TestLoadImage: error",!1,u,m),m.onabort=S(Mt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=S(Mt,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function eg(a,u){const d=new Ur,m=new AbortController,b=setTimeout(()=>{m.abort(),Mt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(b),P.ok?Mt(d,"TestPingServer: ok",!0,u):Mt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),Mt(d,"TestPingServer: error",!1,u)})}function Mt(a,u,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function tg(){this.g=new Mp}function ng(a,u,d){const m=d||"";try{Fl(a,function(b,P){let N=b;h(b)&&(N=jo(b)),u.push(m+P+"="+encodeURIComponent(N))})}catch(b){throw u.push(m+"type="+encodeURIComponent("_badmap")),b}}function Zs(a){this.l=a.Ub||null,this.j=a.eb||!1}D(Zs,qo),Zs.prototype.g=function(){return new ei(this.l,this.j)},Zs.prototype.i=function(a){return function(){return a}}({});function ei(a,u){Ne.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ei,Ne),r=ei.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Gr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Gr(this)),this.g&&(this.readyState=3,Gr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?zr(this):Gr(this),this.readyState==3&&Gl(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,zr(this))},r.Qa=function(a){this.g&&(this.response=a,zr(this))},r.ga=function(){this.g&&zr(this)};function zr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Gr(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Gr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kl(a){let u="";return Q(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Zo(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Kl(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,u,d))}function ge(a){Ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(ge,Ne);var rg=/^https?$/i,sg=["POST","PUT"];r=ge.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ko.g(),this.v=this.o?El(this.o):El(Ko),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){Hl(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(sg,u,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,N]of d)this.g.setRequestHeader(P,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jl(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Hl(this,P)}};function Hl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Wl(a),ti(a)}function Wl(a){a.A||(a.A=!0,je(a,"complete"),je(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,je(this,"complete"),je(this,"abort"),ti(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ql(this):this.bb())},r.bb=function(){Ql(this)};function Ql(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Et(a)!=4||a.Z()!=2)){if(a.u&&Et(a)==4)_l(a.Ea,0,a);else if(je(a,"readystatechange"),Et(a)==4){a.h=!1;try{const N=a.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=N===0){var b=String(a.D).match(Ul)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),m=!rg.test(b?b.toLowerCase():"")}d=m}if(d)je(a,"complete"),je(a,"success");else{a.m=6;try{var P=2<Et(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",Wl(a)}}finally{ti(a)}}}}function ti(a,u){if(a.g){Jl(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||je(a,"ready");try{d.onreadystatechange=m}catch{}}}function Jl(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Et(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Lp(u)}};function Xl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ig(a){const u={};a=(a.g&&2<=Et(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var d=T(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[b]||[];u[b]=P,P.push(d)}E(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Yl(a){this.Aa=0,this.i=[],this.j=new Ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kr("baseRetryDelayMs",5e3,a),this.cb=Kr("retryDelaySeedMs",1e4,a),this.Wa=Kr("forwardChannelMaxRetries",2,a),this.wa=Kr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Vl(a&&a.concurrentRequestLimit),this.Da=new tg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Yl.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){qe(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=au(this,null,this.W),ri(this)};function ea(a){if(Zl(a),a.G==3){var u=a.U++,d=It(a.I);if(he(d,"SID",a.K),he(d,"RID",u),he(d,"TYPE","terminate"),Hr(a,d),u=new Ot(a,a.j,u),u.L=2,u.v=Ys(It(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=cu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Qs(u)}ou(a)}function ni(a){a.g&&(na(a),a.g.cancel(),a.g=null)}function Zl(a){ni(a),a.u&&(c.clearTimeout(a.u),a.u=null),si(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ri(a){if(!Nl(a.h)&&!a.s){a.s=!0;var u=a.Ga;st||Nr(),Nt||(st(),Nt=!0),qn.add(u,a),a.B=0}}function og(a,u){return Ol(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Fr(I(a.Ga,a,u),iu(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Ot(this,this.j,a);let P=this.o;if(this.S&&(P?(P=g(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=tu(this,b,u),d=It(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),Hr(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(Kl(P)))+"&"+u:this.m&&Zo(d,this.m,P)),Yo(this.h,b),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",u),he(d,"SID","null"),b.T=!0,Wo(b,d,null)):Wo(b,d,u),this.G=2}}else this.G==3&&(a?eu(this,a):this.i.length==0||Nl(this.h)||eu(this))};function eu(a,u){var d;u?d=u.l:d=a.U++;const m=It(a.I);he(m,"SID",a.K),he(m,"RID",d),he(m,"AID",a.T),Hr(a,m),a.m&&a.o&&Zo(m,a.m,a.o),d=new Ot(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=tu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Yo(a.h,d),Wo(d,m,u)}function Hr(a,u){a.H&&Q(a.H,function(d,m){he(u,m,d)}),a.l&&Fl({},function(d,m){he(u,m,d)})}function tu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?I(a.l.Na,a.l,a):null;e:{var b=a.i;let P=-1;for(;;){const N=["count="+d];P==-1?0<d?(P=b[0].g,N.push("ofs="+P)):P=0:N.push("ofs="+P);let ce=!0;for(let xe=0;xe<d;xe++){let re=b[xe].g;const Oe=b[xe].map;if(re-=P,0>re)P=Math.max(0,b[xe].g-100),ce=!1;else try{ng(Oe,N,"req"+re+"_")}catch{m&&m(Oe)}}if(ce){m=N.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function nu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;st||Nr(),Nt||(st(),Nt=!0),qn.add(u,a),a.v=0}}function ta(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Fr(I(a.Fa,a),iu(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,ru(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Fr(I(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),ni(this),ru(this))};function na(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function ru(a){a.g=new Ot(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=It(a.qa);he(u,"RID","rpc"),he(u,"SID",a.K),he(u,"AID",a.T),he(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(u,"TO",a.ja),he(u,"TYPE","xmlhttp"),Hr(a,u),a.m&&a.o&&Zo(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ys(It(u)),d.m=null,d.P=!0,xl(d,a)}r.Za=function(){this.C!=null&&(this.C=null,ni(this),ta(this),qe(19))};function si(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function su(a,u){var d=null;if(a.g==u){si(a),na(a),a.g=null;var m=2}else if(Xo(a.h,u))d=u.D,Ll(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var b=a.B;m=Ks(),je(m,new Rl(m,d)),ri(a)}else nu(a);else if(b=u.s,b==3||b==0&&0<u.X||!(m==1&&og(a,u)||m==2&&ta(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),b){case 1:fn(a,5);break;case 4:fn(a,10);break;case 3:fn(a,6);break;default:fn(a,2)}}}function iu(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function fn(a,u){if(a.j.info("Error code "+u),u==2){var d=I(a.fb,a),m=a.Xa;const b=!m;m=new dn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Js(m,"https"),Ys(m),b?Zp(m.toString(),d):eg(m.toString(),d)}else qe(2);a.G=0,a.l&&a.l.sa(u),ou(a),Zl(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function ou(a){if(a.G=0,a.ka=[],a.l){const u=Ml(a.h);(u.length!=0||a.i.length!=0)&&(x(a.ka,u),x(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function au(a,u,d){var m=d instanceof dn?It(d):new dn(d);if(m.g!="")u&&(m.g=u+"."+m.g),Xs(m,m.s);else{var b=c.location;m=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var P=new dn(null);m&&Js(P,m),u&&(P.g=u),b&&Xs(P,b),d&&(P.l=d),m=P}return d=a.D,u=a.ya,d&&u&&he(m,d,u),he(m,"VER",a.la),Hr(a,m),m}function cu(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ge(new Zs({eb:d})):new ge(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function lu(){}r=lu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ii(){}ii.prototype.g=function(a,u){return new Xe(a,u)};function Xe(a,u){Ne.call(this),this.g=new Yl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Qn(this)}D(Xe,Ne),Xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){ea(this.g)},Xe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=jo(a),a=d);u.i.push(new qp(u.Ya++,a)),u.G==3&&ri(u)},Xe.prototype.N=function(){this.g.l=null,delete this.j,ea(this.g),delete this.g,Xe.aa.N.call(this)};function uu(a){zo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}D(uu,zo);function hu(){Go.call(this),this.status=1}D(hu,Go);function Qn(a){this.g=a}D(Qn,lu),Qn.prototype.ua=function(){je(this.g,"a")},Qn.prototype.ta=function(a){je(this.g,new uu(a))},Qn.prototype.sa=function(a){je(this.g,new hu)},Qn.prototype.ra=function(){je(this.g,"b")},ii.prototype.createWebChannel=ii.prototype.g,Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,tf=function(){return new ii},ef=function(){return Ks()},Zd=un,Sa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hs.NO_ERROR=0,Hs.TIMEOUT=8,Hs.HTTP_ERROR=6,Ii=Hs,Sl.COMPLETE="complete",Yd=Sl,wl.EventType=Lr,Lr.OPEN="a",Lr.CLOSE="b",Lr.ERROR="c",Lr.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,rs=wl,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,Xd=ge}).apply(typeof ci<"u"?ci:typeof self<"u"?self:typeof window<"u"?window:{});const ju="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Sr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Za("@firebase/firestore");function tr(){return Dn.logLevel}function k(r,...e){if(Dn.logLevel<=Z.DEBUG){const t=e.map(uc);Dn.debug(`Firestore (${Sr}): ${r}`,...t)}}function Ie(r,...e){if(Dn.logLevel<=Z.ERROR){const t=e.map(uc);Dn.error(`Firestore (${Sr}): ${r}`,...t)}}function ws(r,...e){if(Dn.logLevel<=Z.WARN){const t=e.map(uc);Dn.warn(`Firestore (${Sr}): ${r}`,...t)}}function uc(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r="Unexpected state"){const e=`FIRESTORE (${Sr}) INTERNAL ASSERTION FAILED: `+r;throw Ie(e),new Error(e)}function j(r,e){r||F()}function U(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Fe.UNAUTHENTICATED))}shutdown(){}}class sI{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){j(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(j(typeof n.accessToken=="string"),new nI(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new Fe(e)}}class iI{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oI{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new iI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){j(this.o===void 0);const n=i=>{i.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(j(typeof t.token=="string"),this.R=t.token,new aI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=lI(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function W(r,e){return r<e?-1:r>e?1:0}function dr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function rf(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new pe(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new pe(0,0))}static max(){return new q(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(),n===void 0?n=e.length-t:n>e.length-t&&F(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ts.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ts?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ie extends Ts{construct(e,t,n){return new ie(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const uI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends Ts{construct(e,t,n){return new me(e,t,n)}static isValidIdentifier(e){return uI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ie.fromString(e))}static fromName(e){return new O(ie.fromString(e).popFirst(5))}static empty(){return new O(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ie(e.slice()))}}/**
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
 */class Bi{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function Pa(r){return r.fields.find(e=>e.kind===2)}function gn(r){return r.fields.filter(e=>e.kind!==2)}Bi.UNKNOWN_ID=-1;class Ei{constructor(e,t){this.fieldPath=e,this.kind=t}}class bs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new bs(0,tt.min())}}function sf(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=q.fromTimestamp(n===1e9?new pe(t+1,0):new pe(t,n));return new tt(s,O.empty(),e)}function of(r){return new tt(r.readTime,r.key,-1)}class tt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new tt(q.min(),O.empty(),-1)}static max(){return new tt(q.max(),O.empty(),-1)}}function hc(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:W(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==af)throw r;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,n)=>{t(e)})}static reject(e){return new R((t,n)=>{n(e)})}static waitFor(e){return new R((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=R.resolve(!1);for(const n of e)t=t.next(s=>s?R.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new R((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&n(o)},f=>s(f))}})}static doWhile(e,t){return new R((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new pt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new us(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=dc(n.target.error);this.V.reject(new us(e,s))}}static open(e,t,n,s){try{return new io(t,e.transaction(s,n))}catch(i){throw new us(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(k("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new dI(t)}}class Xt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Xt.S(be())===12.2&&Ie("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return k("SimpleDb","Removing database:",e),_n(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ld())return!1;if(Xt.v())return!0;const e=be(),t=Xt.S(e),n=0<t&&t<10,s=lf(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(k("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new us(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new L(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new L(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new us(e,o))},s.onupgradeneeded=i=>{k("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{k("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=io.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),R.reject(h))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(k("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function lf(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class hI{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return _n(this.B.delete())}}class us extends L{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function on(r){return r.name==="IndexedDbTransactionError"}class dI{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(k("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(k("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),_n(n)}add(e){return k("SimpleDb","ADD",this.store.name,e,e),_n(this.store.add(e))}get(e){return _n(this.store.get(e)).next(t=>(t===void 0&&(t=null),k("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return k("SimpleDb","DELETE",this.store.name,e),_n(this.store.delete(e))}count(){return k("SimpleDb","COUNT",this.store.name),_n(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new R((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new R((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){k("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new R((n,s)=>{t.onerror=i=>{const o=dc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new R((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new hI(c),h=t(c.primaryKey,c.value,l);if(h instanceof R){const f=h.catch(p=>(l.done(),R.reject(p)));n.push(f)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>R.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function _n(r){return new R((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=dc(n.target.error);t(s)}})}let qu=!1;function dc(r){const e=Xt.S(be());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qu||(qu=!0,setTimeout(()=>{throw n},0)),n}}return r}class fI{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){k("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{k("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){on(t)?k("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await sn(t)}await this.X(6e4)})}}class mI{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return R.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return k("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(k("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=of(i);hc(o,n)>0&&(n=o)}),new tt(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class We{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}We.oe=-1;function oo(r){return r==null}function As(r){return r===0&&1/r==-1/0}function uf(r){return typeof r=="number"&&Number.isInteger(r)&&!As(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=zu(e)),e=pI(r.get(t),e);return zu(e)}function pI(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function zu(r){return r+""}function ut(r){const e=r.length;if(j(e>=2),e===2)return j(r.charAt(0)===""&&r.charAt(1)===""),ie.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&F(),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:F()}i=o+2}return new ie(n)}/**
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
 */const Gu=["userId","batchId"];/**
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
 */function wi(r,e){return[r,Ge(e)]}function hf(r,e,t){return[r,Ge(e),t]}const gI={},_I=["prefixPath","collectionGroup","readTime","documentId"],yI=["prefixPath","collectionGroup","documentId"],vI=["collectionGroup","readTime","prefixPath","documentId"],II=["canonicalId","targetId"],EI=["targetId","path"],wI=["path","targetId"],TI=["collectionId","parent"],bI=["indexId","uid"],AI=["uid","sequenceNumber"],RI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],SI=["indexId","uid","orderedDocumentKey"],PI=["userId","collectionPath","documentId"],CI=["userId","collectionPath","largestBatchId"],xI=["userId","collectionGroup","largestBatchId"],df=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],DI=[...df,"documentOverlays"],ff=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],mf=ff,fc=[...mf,"indexConfiguration","indexState","indexEntries"],kI=fc,VI=[...fc,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends cf{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Ae(r,e){const t=U(r);return Xt.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Bn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function pf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.comparator=e,this.root=t||De.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new li(this.root,e,this.comparator,!1)}getReverseIterator(){return new li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new li(this.root,e,this.comparator,!0)}}class li{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??De.RED,this.left=s??De.EMPTY,this.right=i??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new De(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,n,s,i){return this}insert(e,t,n){return new De(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hu(this.data.getIterator())}getIteratorFrom(e){return new Hu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ae(this.comparator);return t.data=e,t}}class Hu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Xn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new ae(me.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class gf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gf("Invalid base64 string: "+i):i}}(e);return new we(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const NI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(r){if(j(!!r),typeof r=="string"){let e=0;const t=NI.exec(r);if(j(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function en(r){return typeof r=="string"?we.fromBase64String(r):we.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function pc(r){const e=r.mapValue.fields.__previous_value__;return mc(e)?pc(e):e}function Rs(r){const e=xt(r.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t,n,s,i,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class kn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ti={nullValue:"NULL_VALUE"};function Vn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?mc(r)?4:_f(r)?9007199254740991:ao(r)?10:11:F()}function gt(r,e){if(r===e)return!0;const t=Vn(r);if(t!==Vn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Rs(r).isEqual(Rs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=xt(s.timestampValue),c=xt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return en(s.bytesValue).isEqual(en(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return fe(s.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(s.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return fe(s.integerValue)===fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=fe(s.doubleValue),c=fe(i.doubleValue);return o===c?As(o)===As(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return dr(r.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ku(o)!==Ku(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!gt(o[l],c[l])))return!1;return!0}(r,e);default:return F()}}function Ss(r,e){return(r.values||[]).find(t=>gt(t,e))!==void 0}function tn(r,e){if(r===e)return 0;const t=Vn(r),n=Vn(e);if(t!==n)return W(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=fe(i.integerValue||i.doubleValue),l=fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return Wu(r.timestampValue,e.timestampValue);case 4:return Wu(Rs(r),Rs(e));case 5:return W(r.stringValue,e.stringValue);case 6:return function(i,o){const c=en(i),l=en(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=W(c[h],l[h]);if(f!==0)return f}return W(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=W(fe(i.latitude),fe(o.latitude));return c!==0?c:W(fe(i.longitude),fe(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Qu(r.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},I=o.fields||{},S=(c=p.value)===null||c===void 0?void 0:c.arrayValue,D=(l=I.value)===null||l===void 0?void 0:l.arrayValue,V=W(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Qu(S,D)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ht.mapValue&&o===Ht.mapValue)return 0;if(i===Ht.mapValue)return 1;if(o===Ht.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const I=W(l[p],f[p]);if(I!==0)return I;const S=tn(c[l[p]],h[f[p]]);if(S!==0)return S}return W(l.length,f.length)}(r.mapValue,e.mapValue);default:throw F()}}function Wu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return W(r,e);const t=xt(r),n=xt(e),s=W(t.seconds,n.seconds);return s!==0?s:W(t.nanos,n.nanos)}function Qu(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=tn(t[s],n[s]);if(i)return i}return W(t.length,n.length)}function fr(r){return xa(r)}function xa(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=xt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return en(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return O.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=xa(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${xa(t.fields[o])}`;return s+"}"}(r.mapValue):F()}function gc(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Da(r){return!!r&&"integerValue"in r}function Ps(r){return!!r&&"arrayValue"in r}function Ju(r){return!!r&&"nullValue"in r}function Xu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function bi(r){return!!r&&"mapValue"in r}function ao(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function hs(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Bn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=hs(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hs(r.arrayValue.values[t]);return e}return Object.assign({},r)}function _f(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const yf={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function LI(r){return"nullValue"in r?Ti:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?gc(kn.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ao(r)?yf:{mapValue:{}}:F()}function MI(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?gc(kn.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?yf:"mapValue"in r?ao(r)?{mapValue:{}}:Ht:F()}function Yu(r,e){const t=tn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Zu(r,e){const t=tn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!bi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hs(t)}setAll(e){let t=me.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=hs(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());bi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Bn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Ue(hs(this.value))}}function vf(r){const e=[];return Bn(r.fields,(t,n)=>{const s=new me([t]);if(bi(n)){const i=vf(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new _e(e,0,q.min(),q.min(),q.min(),Ue.empty(),0)}static newFoundDocument(e,t,n,s){return new _e(e,1,t,q.min(),n,s,0)}static newNoDocument(e,t){return new _e(e,2,t,q.min(),q.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new _e(e,3,t,q.min(),q.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mr{constructor(e,t){this.position=e,this.inclusive=t}}function eh(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(o.referenceValue),t.key):n=tn(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function th(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!gt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class $i{constructor(e,t="asc"){this.field=e,this.dir=t}}function FI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class If{}class ee extends If{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new UI(e,t,n):t==="array-contains"?new jI(e,n):t==="in"?new Rf(e,n):t==="not-in"?new qI(e,n):t==="array-contains-any"?new zI(e,n):new ee(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new BI(e,n):new $I(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(tn(t,this.value)):t!==null&&Vn(this.value)===Vn(t)&&this.matchesComparison(tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oe extends If{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new oe(e,t)}matches(e){return pr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pr(r){return r.op==="and"}function ka(r){return r.op==="or"}function _c(r){return Ef(r)&&pr(r)}function Ef(r){for(const e of r.filters)if(e instanceof oe)return!1;return!0}function Va(r){if(r instanceof ee)return r.field.canonicalString()+r.op.toString()+fr(r.value);if(_c(r))return r.filters.map(e=>Va(e)).join(",");{const e=r.filters.map(t=>Va(t)).join(",");return`${r.op}(${e})`}}function wf(r,e){return r instanceof ee?function(n,s){return s instanceof ee&&n.op===s.op&&n.field.isEqual(s.field)&&gt(n.value,s.value)}(r,e):r instanceof oe?function(n,s){return s instanceof oe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&wf(o,s.filters[c]),!0):!1}(r,e):void F()}function Tf(r,e){const t=r.filters.concat(e);return oe.create(t,r.op)}function bf(r){return r instanceof ee?function(t){return`${t.field.canonicalString()} ${t.op} ${fr(t.value)}`}(r):r instanceof oe?function(t){return t.op.toString()+" {"+t.getFilters().map(bf).join(" ,")+"}"}(r):"Filter"}class UI extends ee{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class BI extends ee{constructor(e,t){super(e,"in",t),this.keys=Af("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $I extends ee{constructor(e,t){super(e,"not-in",t),this.keys=Af("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Af(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>O.fromName(n.referenceValue))}class jI extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ps(t)&&Ss(t.arrayValue,this.value)}}class Rf extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ss(this.value.arrayValue,t)}}class qI extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ss(this.value.arrayValue,t)}}class zI extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ps(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Ss(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Na(r,e=null,t=[],n=[],s=null,i=null,o=null){return new GI(r,e,t,n,s,i,o)}function Nn(r){const e=U(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Va(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),oo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>fr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>fr(n)).join(",")),e.ue=t}return e.ue}function Fs(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!FI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!wf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!th(r.startAt,e.startAt)&&th(r.endAt,e.endAt)}function ji(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function qi(r,e){return r.filters.filter(t=>t instanceof ee&&t.field.isEqual(e))}function nh(r,e,t){let n=Ti,s=!0;for(const i of qi(r,e)){let o=Ti,c=!0;switch(i.op){case"<":case"<=":o=LI(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Ti}Yu({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Yu({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function rh(r,e,t){let n=Ht,s=!0;for(const i of qi(r,e)){let o=Ht,c=!0;switch(i.op){case">=":case">":o=MI(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Ht}Zu({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Zu({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Sf(r,e,t,n,s,i,o,c){return new co(r,e,t,n,s,i,o,c)}function lo(r){return new co(r)}function sh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function KI(r){return r.collectionGroup!==null}function ds(r){const e=U(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ae(me.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $i(i,n))}),t.has(me.keyField().canonicalString())||e.ce.push(new $i(me.keyField(),n))}return e.ce}function et(r){const e=U(r);return e.le||(e.le=HI(e,ds(r))),e.le}function HI(r,e){if(r.limitType==="F")return Na(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $i(s.field,i)});const t=r.endAt?new mr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new mr(r.startAt.position,r.startAt.inclusive):null;return Na(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Oa(r,e,t){return new co(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function uo(r,e){return Fs(et(r),et(e))&&r.limitType===e.limitType}function Pf(r){return`${Nn(et(r))}|lt:${r.limitType}`}function nr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>bf(s)).join(", ")}]`),oo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>fr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>fr(s)).join(",")),`Target(${n})`}(et(r))}; limitType=${r.limitType})`}function Us(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of ds(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const h=eh(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,ds(n),s)||n.endAt&&!function(o,c,l){const h=eh(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,ds(n),s))}(r,e)}function Cf(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function xf(r){return(e,t)=>{let n=!1;for(const s of ds(r)){const i=WI(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function WI(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?tn(l,h):F()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return pf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new ue(O.comparator);function Ye(){return QI}const Df=new ue(O.comparator);function ss(...r){let e=Df;for(const t of r)e=e.insert(t.key,t);return e}function kf(r){let e=Df;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ht(){return fs()}function Vf(){return fs()}function fs(){return new an(r=>r.toString(),(r,e)=>r.isEqual(e))}const JI=new ue(O.comparator),XI=new ae(O.comparator);function J(...r){let e=XI;for(const t of r)e=e.add(t);return e}const YI=new ae(W);function yc(){return YI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:As(e)?"-0":e}}function Nf(r){return{integerValue:""+r}}function ZI(r,e){return uf(e)?Nf(e):vc(r,e)}/**
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
 */class ho{constructor(){this._=void 0}}function eE(r,e,t){return r instanceof gr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mc(i)&&(i=pc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof _r?Lf(r,e):r instanceof yr?Mf(r,e):function(s,i){const o=Of(s,i),c=ih(o)+ih(s.Pe);return Da(o)&&Da(s.Pe)?Nf(c):vc(s.serializer,c)}(r,e)}function tE(r,e,t){return r instanceof _r?Lf(r,e):r instanceof yr?Mf(r,e):t}function Of(r,e){return r instanceof Cs?function(n){return Da(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class gr extends ho{}class _r extends ho{constructor(e){super(),this.elements=e}}function Lf(r,e){const t=Ff(e);for(const n of r.elements)t.some(s=>gt(s,n))||t.push(n);return{arrayValue:{values:t}}}class yr extends ho{constructor(e){super(),this.elements=e}}function Mf(r,e){let t=Ff(e);for(const n of r.elements)t=t.filter(s=>!gt(s,n));return{arrayValue:{values:t}}}class Cs extends ho{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ih(r){return fe(r.integerValue||r.doubleValue)}function Ff(r){return Ps(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t){this.field=e,this.transform=t}}function nE(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof _r&&s instanceof _r||n instanceof yr&&s instanceof yr?dr(n.elements,s.elements,gt):n instanceof Cs&&s instanceof Cs?gt(n.Pe,s.Pe):n instanceof gr&&s instanceof gr}(r.transform,e.transform)}class rE{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ai(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class fo{}function Bf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new mo(r.key,Be.none()):new Pr(r.key,r.data,Be.none());{const t=r.data,n=Ue.empty();let s=new ae(me.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Vt(r.key,n,new Qe(s.toArray()),Be.none())}}function sE(r,e,t){r instanceof Pr?function(s,i,o){const c=s.value.clone(),l=ah(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Vt?function(s,i,o){if(!Ai(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=ah(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll($f(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ms(r,e,t,n){return r instanceof Pr?function(i,o,c,l){if(!Ai(i.precondition,o))return c;const h=i.value.clone(),f=ch(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof Vt?function(i,o,c,l){if(!Ai(i.precondition,o))return c;const h=ch(i.fieldTransforms,l,o),f=o.data;return f.setAll($f(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,c){return Ai(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function iE(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Of(n.transform,s||null);i!=null&&(t===null&&(t=Ue.empty()),t.set(n.field,i))}return t||null}function oh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&dr(n,s,(i,o)=>nE(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Pr extends fo{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vt extends fo{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $f(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function ah(r,e,t){const n=new Map;j(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,tE(o,c,t[s]))}return n}function ch(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,eE(i,o,e))}return n}class mo extends fo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jf extends fo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sE(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ms(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ms(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Vf();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Bf(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(t,n)=>oh(t,n))&&dr(this.baseMutations,e.baseMutations,(t,n)=>oh(t,n))}}class Ec{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){j(e.mutations.length===n.length);let s=function(){return JI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Ec(e,t,n,s)}}/**
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
 */class wc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,ne;function aE(r){switch(r){default:return F();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function qf(r){if(r===void 0)return Ie("GRPC error has no .code"),C.UNKNOWN;switch(r){case Te.OK:return C.OK;case Te.CANCELLED:return C.CANCELLED;case Te.UNKNOWN:return C.UNKNOWN;case Te.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Te.INTERNAL:return C.INTERNAL;case Te.UNAVAILABLE:return C.UNAVAILABLE;case Te.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Te.NOT_FOUND:return C.NOT_FOUND;case Te.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Te.ABORTED:return C.ABORTED;case Te.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Te.DATA_LOSS:return C.DATA_LOSS;default:return F()}}(ne=Te||(Te={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cE(){return new TextEncoder}/**
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
 */const lE=new wn([4294967295,4294967295],0);function lh(r){const e=cE().encode(r),t=new Jd;return t.update(e),new Uint8Array(t.digest())}function uh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wn([t,n],0),new wn([s,i],0)]}class Tc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new is(`Invalid padding: ${t}`);if(n<0)throw new is(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new is(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new is(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=wn.fromNumber(this.Ie)}Ee(e,t,n){let s=e.add(t.multiply(wn.fromNumber(n)));return s.compare(lE)===1&&(s=new wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=lh(e),[n,s]=uh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Tc(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=lh(e),[n,s]=uh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,$s.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Bs(q.min(),s,new ue(W),Ye(),J())}}class $s{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new $s(n,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class zf{constructor(e,t){this.targetId=e,this.me=t}}class Gf{constructor(e,t,n=we.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class hh{constructor(){this.fe=0,this.ge=fh(),this.pe=we.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=J(),t=J(),n=J();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:F()}}),new $s(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=fh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,j(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uE{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ye(),this.qe=dh(),this.Qe=new ue(W)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,n=e.me.count,s=this.Je(t);if(s){const i=s.target;if(ji(i))if(n===0){const o=new O(i.path);this.Ue(t,o,_e.newNoDocument(o,q.min()))}else j(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=en(n).toUint8Array()}catch(l){if(l instanceof gf)return ws("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Tc(o,s,i)}catch(l){return ws(l instanceof is?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&ji(c.target)){const l=new O(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,_e.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=J();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Bs(e,t,this.Qe,this.ke,n);return this.ke=Ye(),this.qe=dh(),this.Qe=new ue(W),s}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new hh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ae(W),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||k("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function dh(){return new ue(O.comparator)}function fh(){return new ue(O.comparator)}const hE={asc:"ASCENDING",desc:"DESCENDING"},dE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fE={and:"AND",or:"OR"};class mE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function La(r,e){return r.useProto3Json||oo(e)?e:{value:e}}function vr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function pE(r,e){return vr(r,e.toTimestamp())}function Ke(r){return j(!!r),q.fromTimestamp(function(t){const n=xt(t);return new pe(n.seconds,n.nanos)}(r))}function bc(r,e){return Ma(r,e).canonicalString()}function Ma(r,e){const t=function(s){return new ie(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Hf(r){const e=ie.fromString(r);return j(nm(e)),e}function zi(r,e){return bc(r.databaseId,e.path)}function Tn(r,e){const t=Hf(e);if(t.get(1)!==r.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(Jf(t))}function Wf(r,e){return bc(r.databaseId,e)}function Qf(r){const e=Hf(r);return e.length===4?ie.emptyPath():Jf(e)}function Fa(r){return new ie(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Jf(r){return j(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function mh(r,e,t){return{name:zi(r,e),fields:t.value.mapValue.fields}}function gE(r,e,t){const n=Tn(r,e.name),s=Ke(e.updateTime),i=e.createTime?Ke(e.createTime):q.min(),o=new Ue({mapValue:{fields:e.fields}}),c=_e.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function _E(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(j(f===void 0||typeof f=="string"),we.fromBase64String(f||"")):(j(f===void 0||f instanceof Buffer||f instanceof Uint8Array),we.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?C.UNKNOWN:qf(h.code);return new L(f,h.message||"")}(o);t=new Gf(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Tn(r,n.document.name),i=Ke(n.document.updateTime),o=n.document.createTime?Ke(n.document.createTime):q.min(),c=new Ue({mapValue:{fields:n.document.fields}}),l=_e.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new Ri(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Tn(r,n.document),i=n.readTime?Ke(n.readTime):q.min(),o=_e.newNoDocument(s,i),c=n.removedTargetIds||[];t=new Ri([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Tn(r,n.document),i=n.removedTargetIds||[];t=new Ri([],i,s,null)}else{if(!("filter"in e))return F();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new oE(s,i),c=n.targetId;t=new zf(c,o)}}return t}function Gi(r,e){let t;if(e instanceof Pr)t={update:mh(r,e.key,e.value)};else if(e instanceof mo)t={delete:zi(r,e.key)};else if(e instanceof Vt)t={update:mh(r,e.key,e.data),updateMask:TE(e.fieldMask)};else{if(!(e instanceof jf))return F();t={verify:zi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof gr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _r)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof yr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Cs)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw F()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(r,e.precondition)),t}function Ua(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Be.updateTime(Ke(i.updateTime)):i.exists!==void 0?Be.exists(i.exists):Be.none()}(e.currentDocument):Be.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)j(c.setToServerValue==="REQUEST_TIME"),l=new gr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new _r(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new yr(f)}else"increment"in c?l=new Cs(o,c.increment):F();const h=me.fromServerFormat(c.fieldPath);return new Uf(h,l)}(r,s)):[];if(e.update){e.update.name;const s=Tn(r,e.update.name),i=new Ue({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new Qe(h.map(f=>me.fromServerFormat(f)))}(e.updateMask);return new Vt(s,i,o,t,n)}return new Pr(s,i,t,n)}if(e.delete){const s=Tn(r,e.delete);return new mo(s,t)}if(e.verify){const s=Tn(r,e.verify);return new jf(s,t)}return F()}function yE(r,e){return r&&r.length>0?(j(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?Ke(s.updateTime):Ke(i);return o.isEqual(q.min())&&(o=Ke(i)),new rE(o,s.transformResults||[])}(t,e))):[]}function Xf(r,e){return{documents:[Wf(r,e.path)]}}function Yf(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Wf(r,s);const i=function(h){if(h.length!==0)return tm(oe.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(I){return{field:rr(I.field),direction:IE(I.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=La(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function Zf(r){let e=Qf(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){j(n===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const I=em(p);return I instanceof oe&&_c(I)?I.getFilters():[I]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(I=>function(D){return new $i(sr(D.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(p){let I;return I=typeof p=="object"?p.value:p,oo(I)?null:I}(t.limit));let l=null;t.startAt&&(l=function(p){const I=!!p.before,S=p.values||[];return new mr(S,I)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const I=!p.before,S=p.values||[];return new mr(S,I)}(t.endAt)),Sf(e,s,o,i,c,"F",l,h)}function vE(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function em(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=sr(t.unaryFilter.field);return ee.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=sr(t.unaryFilter.field);return ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=sr(t.unaryFilter.field);return ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=sr(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(r):r.fieldFilter!==void 0?function(t){return ee.create(sr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return oe.create(t.compositeFilter.filters.map(n=>em(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(r):F()}function IE(r){return hE[r]}function EE(r){return dE[r]}function wE(r){return fE[r]}function rr(r){return{fieldPath:r.canonicalString()}}function sr(r){return me.fromServerFormat(r.fieldPath)}function tm(r){return r instanceof ee?function(t){if(t.op==="=="){if(Xu(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NAN"}};if(Ju(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xu(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NAN"}};if(Ju(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(t.field),op:EE(t.op),value:t.value}}}(r):r instanceof oe?function(t){const n=t.getFilters().map(s=>tm(s));return n.length===1?n[0]:{compositeFilter:{op:wE(t.op),filters:n}}}(r):F()}function TE(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function nm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,n,s,i=q.min(),o=q.min(),c=we.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new At(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.ct=e}}function bE(r,e){let t;if(e.document)t=gE(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=O.fromSegments(e.noDocument.path),s=Ln(e.noDocument.readTime);t=_e.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const n=O.fromSegments(e.unknownDocument.path),s=Ln(e.unknownDocument.version);t=_e.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new pe(s[0],s[1]);return q.fromTimestamp(i)}(e.readTime)),t}function ph(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ki(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:zi(i,o.key),fields:o.data.value.mapValue.fields,updateTime:vr(i,o.version.toTimestamp()),createTime:vr(i,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:On(e.version)};else{if(!e.isUnknownDocument())return F();n.unknownDocument={path:t.path.toArray(),version:On(e.version)}}return n}function Ki(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function On(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ln(r){const e=new pe(r.seconds,r.nanoseconds);return q.fromTimestamp(e)}function yn(r,e){const t=(e.baseMutations||[]).map(i=>Ua(r.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>Ua(r.ct,i)),s=pe.fromMillis(e.localWriteTimeMs);return new Ic(e.batchId,s,t,n)}function os(r){const e=Ln(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Ln(r.lastLimboFreeSnapshotVersion):q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return j(i.documents.length===1),et(lo(Qf(i.documents[0])))}(r.query):function(i){return et(Zf(i))}(r.query),new At(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,we.fromBase64String(r.resumeToken))}function sm(r,e){const t=On(e.snapshotVersion),n=On(e.lastLimboFreeSnapshotVersion);let s;s=ji(e.target)?Xf(r.ct,e.target):Yf(r.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Nn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function im(r){const e=Zf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Oa(e,e.limit,"L"):e}function ha(r,e){return new wc(e.largestBatchId,Ua(r.ct,e.overlayMutation))}function gh(r,e){const t=e.path.lastSegment();return[r,Ge(e.path.popLast()),t]}function _h(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:On(n.readTime),documentKey:Ge(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{getBundleMetadata(e,t){return yh(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Ln(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return yh(e).put(function(s){return{bundleId:s.id,createTime:On(Ke(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return vh(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:im(i.bundledQuery),readTime:Ln(i.readTime)}}(n)})}saveNamedQuery(e,t){return vh(e).put(function(s){return{name:s.name,readTime:On(Ke(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function yh(r){return Ae(r,"bundles")}function vh(r){return Ae(r,"namedQueries")}/**
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
 */class go{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new go(e,n)}getOverlay(e,t){return Wr(e).get(gh(this.userId,t)).next(n=>n?ha(this.serializer,n):null)}getOverlays(e,t){const n=ht();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new wc(t,o);s.push(this.ht(e,c))}),R.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(Ge(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Wr(e).j("collectionPathOverlayIndex",c))}),R.waitFor(i)}getOverlaysForCollection(e,t,n){const s=ht(),i=Ge(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Wr(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const h=ha(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=ht();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Wr(e).J({index:"collectionGroupOverlayIndex",range:c},(l,h,f)=>{const p=ha(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return Wr(e).put(function(s,i,o){const[c,l,h]=gh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Gi(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Wr(r){return Ae(r,"documentOverlays")}/**
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
 */class RE{Pt(e){return Ae(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?we.fromUint8Array(n):we.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class vn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(fe(e.integerValue));else if("doubleValue"in e){const n=fe(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),As(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=xt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(en(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?_f(e)?this.dt(t,Number.MAX_SAFE_INTEGER):ao(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):F()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const s of Object.keys(n))this.Vt(s,t),this.Tt(n[s],t)}wt(e,t){var n,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(fe(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const s of n)this.Tt(s,t)}yt(e,t){this.dt(t,37),O.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}vn.vt=new vn;function SE(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Ih(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=SE(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class PE{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),n=Ih(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),n=Ih(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class CE{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class xE{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Qr{constructor(){this.jt=new PE,this.Ht=new CE(this.jt),this.Jt=new xE(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class In{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new In(this.indexId,this.documentKey,this.arrayValue,n)}}function Ut(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Eh(r.arrayValue,e.arrayValue),t!==0?t:(t=Eh(r.directionalValue,e.directionalValue),t!==0?t:O.comparator(r.documentKey,e.documentKey)))}function Eh(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class wh{constructor(e){this.Xt=new ae((t,n)=>me.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(j(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Pa(e);if(t!==void 0&&!this.sn(t))return!1;const n=gn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ae(me.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Ei(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Ei(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Ei(n.field,n.dir==="asc"?0:1)));return new Bi(Bi.UNKNOWN_ID,this.collectionId,t,bs.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function om(r){var e,t;if(j(r instanceof ee||r instanceof oe),r instanceof ee){if(r instanceof Rf){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ee.create(r.field,"==",i)))||[];return oe.create(s,"or")}return r}const n=r.filters.map(s=>om(s));return oe.create(n,r.op)}function DE(r){if(r.getFilters().length===0)return[];const e=ja(om(r));return j(am(e)),Ba(e)||$a(e)?[e]:e.getFilters()}function Ba(r){return r instanceof ee}function $a(r){return r instanceof oe&&_c(r)}function am(r){return Ba(r)||$a(r)||function(t){if(t instanceof oe&&ka(t)){for(const n of t.getFilters())if(!Ba(n)&&!$a(n))return!1;return!0}return!1}(r)}function ja(r){if(j(r instanceof ee||r instanceof oe),r instanceof ee)return r;if(r.filters.length===1)return ja(r.filters[0]);const e=r.filters.map(n=>ja(n));let t=oe.create(e,r.op);return t=Hi(t),am(t)?t:(j(t instanceof oe),j(pr(t)),j(t.filters.length>1),t.filters.reduce((n,s)=>Ac(n,s)))}function Ac(r,e){let t;return j(r instanceof ee||r instanceof oe),j(e instanceof ee||e instanceof oe),t=r instanceof ee?e instanceof ee?function(s,i){return oe.create([s,i],"and")}(r,e):Th(r,e):e instanceof ee?Th(e,r):function(s,i){if(j(s.filters.length>0&&i.filters.length>0),pr(s)&&pr(i))return Tf(s,i.getFilters());const o=ka(s)?s:i,c=ka(s)?i:s,l=o.filters.map(h=>Ac(h,c));return oe.create(l,"or")}(r,e),Hi(t)}function Th(r,e){if(pr(e))return Tf(e,r.getFilters());{const t=e.filters.map(n=>Ac(r,n));return oe.create(t,"or")}}function Hi(r){if(j(r instanceof ee||r instanceof oe),r instanceof ee)return r;const e=r.getFilters();if(e.length===1)return Hi(e[0]);if(Ef(r))return r;const t=e.map(s=>Hi(s)),n=[];return t.forEach(s=>{s instanceof ee?n.push(s):s instanceof oe&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:oe.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(){this.un=new Rc}addToCollectionParentIndex(e,t){return this.un.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(tt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(tt.min())}updateCollectionGroup(e,t,n){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Rc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ae(ie.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ae(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Uint8Array(0);class VE{constructor(e,t){this.databaseId=t,this.cn=new Rc,this.ln=new an(n=>Nn(n),(n,s)=>Fs(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:Ge(s)};return bh(e).put(i)}return R.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[rf(t),""],!1,!0);return bh(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(ut(o.parent))}return n})}addFieldIndex(e,t){const n=Jr(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Zn(e);return i.next(c=>{o.put(_h(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Jr(e),s=Zn(e),i=Yn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Jr(e),n=Yn(e),s=Zn(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return R.forEach(this.hn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new wh(n).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Yn(e);let s=!0;const i=new Map;return R.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=J();const c=[];return R.forEach(i,(l,h)=>{k("IndexedDbIndexManager",`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(z=>`${z.fieldPath}:${z.kind}`).join(",")}`}(l)} to execute ${Nn(t)}`);const f=function(M,z){const X=Pa(z);if(X===void 0)return null;for(const Q of qi(M,X.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(h,l),p=function(M,z){const X=new Map;for(const Q of gn(z))for(const E of qi(M,Q.fieldPath))switch(E.op){case"==":case"in":X.set(Q.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return X.set(Q.fieldPath.canonicalString(),E.value),Array.from(X.values())}return null}(h,l),I=function(M,z){const X=[];let Q=!0;for(const E of gn(z)){const g=E.kind===0?nh(M,E.fieldPath,M.startAt):rh(M,E.fieldPath,M.startAt);X.push(g.value),Q&&(Q=g.inclusive)}return new mr(X,Q)}(h,l),S=function(M,z){const X=[];let Q=!0;for(const E of gn(z)){const g=E.kind===0?rh(M,E.fieldPath,M.endAt):nh(M,E.fieldPath,M.endAt);X.push(g.value),Q&&(Q=g.inclusive)}return new mr(X,Q)}(h,l),D=this.In(l,h,I),V=this.In(l,h,S),x=this.Tn(l,h,p),G=this.En(l.indexId,f,D,I.inclusive,V,S.inclusive,x);return R.forEach(G,B=>n.G(B,t.limit).next(M=>{M.forEach(z=>{const X=O.fromSegments(z.documentKey);o.has(X)||(o=o.add(X),c.push(X))})}))}).next(()=>c)}return R.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=DE(oe.create(e.filters,"and")).map(n=>Na(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const I=t?this.dn(t[p/h]):ui,S=this.An(e,I,n[p%h],s),D=this.Rn(e,I,i[p%h],o),V=c.map(x=>this.An(e,I,x,!0));f.push(...this.createRange(S,D,V))}return f}An(e,t,n,s){const i=new In(e,O.empty(),t,n);return s?i:i.Zt()}Rn(e,t,n,s){const i=new In(e,O.empty(),t,n);return s?i.Zt():i}Pn(e,t){const n=new wh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.hn(t);return R.forEach(s,i=>this.Pn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new ae(me.comparator),f=!1;for(const p of l.filters)for(const I of p.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?f=!0:h=h.add(I.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Vn(e,t){const n=new Qr;for(const s of gn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Yt(s.kind);vn.vt.It(i,o)}return n.zt()}dn(e){const t=new Qr;return vn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Qr;return vn.vt.It(gc(this.databaseId,t),n.Yt(function(i){const o=gn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let s=[];s.push(new Qr);let i=0;for(const o of gn(e)){const c=n[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&Ps(c))s=this.gn(s,o,c);else{const h=l.Yt(o.kind);vn.vt.It(c,h)}}return this.pn(s)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new Qr;l.seed(c.zt()),vn.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(n=>n instanceof ee&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Jr(e),s=Zn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return R.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const I=p?new bs(p.sequenceNumber,new tt(Ln(p.readTime),new O(ut(p.documentKey)),p.largestBatchId)):bs.empty(),S=f.fields.map(([D,V])=>new Ei(me.fromServerFormat(D),V));return new Bi(f.indexId,f.collectionGroup,S,I)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:W(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Jr(e),i=Zn(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>R.forEach(c,l=>i.put(_h(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return R.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),R.forEach(c,l=>this.wn(e,s,l).next(h=>{const f=this.Sn(i,l);return h.isEqual(f)?R.resolve():this.bn(e,i,l,h,f)}))))})}Dn(e,t,n,s){return Yn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,s){return Yn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const s=Yn(e);let i=new ae(Ut);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,c)=>{i=i.add(new In(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let n=new ae(Ut);const s=this.Vn(t,e);if(s==null)return n;const i=Pa(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ps(o))for(const c of o.arrayValue.values||[])n=n.add(new In(t.indexId,e.key,this.dn(c),s))}else n=n.add(new In(t.indexId,e.key,ui,s));return n}bn(e,t,n,s,i){k("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,I){const S=l.getIterator(),D=h.getIterator();let V=Xn(S),x=Xn(D);for(;V||x;){let G=!1,B=!1;if(V&&x){const M=f(V,x);M<0?B=!0:M>0&&(G=!0)}else V!=null?B=!0:G=!0;G?(p(x),x=Xn(D)):B?(I(V),V=Xn(S)):(V=Xn(S),x=Xn(D))}}(s,i,Ut,c=>{o.push(this.Dn(e,t,n,c))},c=>{o.push(this.vn(e,t,n,c))}),R.waitFor(o)}yn(e){let t=1;return Zn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>Ut(o,c)).filter((o,c,l)=>!c||Ut(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=Ut(o,e),l=Ut(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,ui,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,ui,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return Ut(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ah)}getMinOffset(e,t){return R.mapArray(this.hn(t),n=>this.Pn(e,n).next(s=>s||F())).next(Ah)}}function bh(r){return Ae(r,"collectionParents")}function Yn(r){return Ae(r,"indexEntries")}function Jr(r){return Ae(r,"indexConfiguration")}function Zn(r){return Ae(r,"indexState")}function Ah(r){j(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;hc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new tt(e.readTime,e.documentKey,t)}/**
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
 */const Rh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class He{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.J({range:o},(f,p,I)=>(c++,I.delete()));i.push(l.next(()=>{j(c===1)}));const h=[];for(const f of t.mutations){const p=hf(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return R.waitFor(i).next(()=>h)}function Wi(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(41943040,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);class _o{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(e,t,n,s){j(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new _o(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Bt(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=ir(e),o=Bt(e);return o.add({}).next(c=>{j(typeof c=="number");const l=new Ic(c,t,n,s),h=function(S,D,V){const x=V.baseMutations.map(B=>Gi(S.ct,B)),G=V.mutations.map(B=>Gi(S.ct,B));return{userId:D,batchId:V.batchId,localWriteTimeMs:V.localWriteTime.toMillis(),baseMutations:x,mutations:G}}(this.serializer,this.userId,l),f=[];let p=new ae((I,S)=>W(I.canonicalString(),S.canonicalString()));for(const I of s){const S=hf(this.userId,I.key.path,c);p=p.add(I.key.path.popLast()),f.push(o.put(h)),f.push(i.put(S,gI))}return p.forEach(I=>{f.push(this.indexManager.addToCollectionParentIndex(e,I))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),R.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Bt(e).get(t).next(n=>n?(j(n.userId===this.userId),yn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?R.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Bt(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(j(c.batchId>=n),i=yn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Bt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Bt(e).U("userMutationsIndex",t).next(n=>n.map(s=>yn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=wi(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return ir(e).J({range:s},(o,c,l)=>{const[h,f,p]=o,I=ut(f);if(h===this.userId&&t.path.isEqual(I))return Bt(e).get(p).next(S=>{if(!S)throw F();j(S.userId===this.userId),i.push(yn(this.serializer,S))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ae(W);const s=[];return t.forEach(i=>{const o=wi(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=ir(e).J({range:c},(h,f,p)=>{const[I,S,D]=h,V=ut(S);I===this.userId&&i.path.isEqual(V)?n=n.add(D):p.done()});s.push(l)}),R.waitFor(s).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=wi(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new ae(W);return ir(e).J({range:o},(l,h,f)=>{const[p,I,S]=l,D=ut(I);p===this.userId&&n.isPrefixOf(D)?D.length===s&&(c=c.add(S)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(Bt(e).get(i).next(o=>{if(o===null)throw F();j(o.userId===this.userId),n.push(yn(this.serializer,o))}))}),R.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return cm(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),R.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return ir(e).J({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=ut(i[1]);s.push(l)}else c.done()}).next(()=>{j(s.length===0)})})}containsKey(e,t){return lm(e,this.userId,t)}Nn(e){return um(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function lm(r,e,t){const n=wi(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return ir(r).J({range:i,H:!0},(c,l,h)=>{const[f,p,I]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function Bt(r){return Ae(r,"mutations")}function ir(r){return Ae(r,"documentMutations")}function um(r){return Ae(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Mn(0)}static kn(){return new Mn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new Mn(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>q.fromTimestamp(new pe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>er(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(j(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return er(e).J((o,c)=>{const l=os(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>R.waitFor(i)).next(()=>s)}forEachTarget(e,t){return er(e).J((n,s)=>{const i=os(s);t(i)})}qn(e){return Sh(e).get("targetGlobalKey").next(t=>(j(t!==null),t))}Qn(e,t){return Sh(e).put("targetGlobalKey",t)}Kn(e,t){return er(e).put(sm(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=Nn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return er(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const h=os(c);Fs(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Gt(e);return t.forEach(o=>{const c=Ge(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),R.waitFor(s)}removeMatchingKeys(e,t,n){const s=Gt(e);return R.forEach(t,i=>{const o=Ge(i.path);return R.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Gt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Gt(e);let i=J();return s.J({range:n,H:!0},(o,c,l)=>{const h=ut(o[1]),f=new O(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=Ge(t.path),s=IDBKeyRange.bound([n],[rf(n)],!1,!0);let i=0;return Gt(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return er(e).get(t).next(n=>n?os(n):null)}}function er(r){return Ae(r,"targets")}function Sh(r){return Ae(r,"targetGlobal")}function Gt(r){return Ae(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph([r,e],[t,n]){const s=W(r,t);return s===0?W(e,n):s}class OE{constructor(e){this.Un=e,this.buffer=new ae(Ph),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Ph(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class LE{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){k("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){on(t)?k("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await sn(t)}await this.Hn(3e5)})}}class ME{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return R.resolve(We.oe);const n=new OE(t);return this.Jn.forEachTarget(e,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Rh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),tr()<=Z.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function FE(r,e){return new ME(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,t){this.db=e,this.garbageCollector=FE(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,s)=>t(s))}addReference(e,t,n){return hi(e,n)}removeReference(e,t,n){return hi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return hi(e,t)}nr(e,t){return function(s,i){let o=!1;return um(s).Y(c=>lm(s,c,i).next(l=>(l&&(o=!0),R.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,q.min()),Gt(e).delete(function(p){return[0,Ge(p.path)]}(o))))});s.push(l)}}).next(()=>R.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return hi(e,t)}tr(e,t){const n=Gt(e);let s,i=We.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==We.oe&&t(new O(ut(s)),i),i=h,s=l):i=We.oe}).next(()=>{i!==We.oe&&t(new O(ut(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function hi(r,e){return Gt(r).put(function(n,s){return{targetId:0,path:Ge(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.changes=new an(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?R.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return mn(e).put(n)}removeEntry(e,t,n){return mn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Ki(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=_e.newInvalidDocument(t);return mn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Xr(t))},(s,i)=>{n=this.ir(t,i)}).next(()=>n)}sr(e,t){let n={size:0,document:_e.newInvalidDocument(t)};return mn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Xr(t))},(s,i)=>{n={document:this.ir(t,i),size:Wi(i)}}).next(()=>n)}getEntries(e,t){let n=Ye();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);n=n.insert(s,o)}).next(()=>n)}ar(e,t){let n=Ye(),s=new ue(O.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);n=n.insert(i,c),s=s.insert(i,Wi(o))}).next(()=>({documents:n,ur:s}))}_r(e,t,n){if(t.isEmpty())return R.resolve();let s=new ae(Dh);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Xr(s.first()),Xr(s.last())),o=s.getIterator();let c=o.getNext();return mn(e).J({index:"documentKeyIndex",range:i},(l,h,f)=>{const p=O.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Dh(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Xr(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Ki(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return mn(e).U(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Ye();for(const p of h){const I=this.ir(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);I.isFoundDocument()&&(Us(t,I)||s.has(I.key))&&(f=f.insert(I.key,I))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=Ye();const o=xh(t,n),c=xh(t,tt.max());return mn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.ir(O.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new $E(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ch(e).get("remoteDocumentGlobalKey").next(t=>(j(!!t),t))}rr(e,t){return Ch(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=bE(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(q.min())))return n}return _e.newInvalidDocument(e)}}function dm(r){return new BE(r)}class $E extends hm{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new an(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new ae((i,o)=>W(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=ph(this.cr.serializer,o);s=s.add(i.path.popLast());const h=Wi(l);n+=h-c.size,t.push(this.cr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=ph(this.cr.serializer,o.convertToNoDocument(q.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,n)),R.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Ch(r){return Ae(r,"remoteDocumentGlobal")}function mn(r){return Ae(r,"remoteDocumentsV14")}function Xr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function xh(r,e){const t=e.documentKey.path.toArray();return[r,Ki(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Dh(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=W(t[i],n[i]),s)return s;return s=W(t.length,n.length),s||(s=W(t[t.length-2],n[n.length-2]),s||W(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&ms(n.mutation,s,Qe.empty(),pe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,J()).next(()=>n))}getLocalViewOfDocuments(e,t,n=J()){const s=ht();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=ss();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=ht();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,J()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=Ye();const o=fs(),c=function(){return fs()}();return t.forEach((l,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Vt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ms(f.mutation,h,f.mutation.getFieldMask(),pe.now())):o.set(h.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new jE(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=fs();let s=new ue((o,c)=>o-c),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||Qe.empty();f=c.applyToLocalView(h,f),n.set(l,f);const p=(s.get(c.batchId)||J()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Vf();f.forEach(I=>{if(!i.has(I)){const S=Bf(t.get(I),n.get(I));S!==null&&p.set(I,S),i=i.add(I)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return R.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):KI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):R.resolve(ht());let c=-1,l=i;return o.next(h=>R.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(I=>{l=l.insert(f,I)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,J())).next(f=>({batchId:c,changes:kf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(n=>{let s=ss();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=ss();return this.indexManager.getCollectionParents(e,i).next(c=>R.forEach(c,l=>{const h=function(p,I){return new co(I,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((p,I)=>{o=o.insert(p,I)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,_e.newInvalidDocument(f)))});let c=ss();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ms(f.mutation,h,Qe.empty(),pe.now()),Us(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return R.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ke(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:im(s.bundledQuery),readTime:Ke(s.readTime)}}(t)),R.resolve()}}/**
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
 */class zE{constructor(){this.overlays=new ue(O.comparator),this.Ir=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ht();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.ht(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),R.resolve()}getOverlaysForCollection(e,t,n){const s=ht(),i=t.length+1,o=new O(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ue((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=ht(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=ht(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return R.resolve(c)}ht(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new wc(t,n));let i=this.Ir.get(t);i===void 0&&(i=J(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
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
 */class GE{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.Tr=new ae(Re.Er),this.dr=new ae(Re.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Re(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Re(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new O(new ie([])),n=new Re(t,e),s=new Re(t,e+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new O(new ie([])),n=new Re(t,e),s=new Re(t,e+1);let i=J();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Re(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Re{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return O.comparator(e.key,t.key)||W(e.wr,t.wr)}static Ar(e,t){return W(e.wr,t.wr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ae(Re.Er)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ic(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Re(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.vr(n),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Re(t,0),s=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const c=this.Dr(o.wr);i.push(c)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ae(W);return t.forEach(s=>{const i=new Re(s,0),o=new Re(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{n=n.add(c.wr)})}),R.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const o=new Re(new O(i),0);let c=new ae(W);return this.br.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),R.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const s=this.Dr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){j(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return R.forEach(t.mutations,s=>{const i=new Re(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Re(t,0),s=this.br.firstAfterOrEqual(n);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.Mr=e,this.docs=function(){return new ue(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return R.resolve(n?n.document.mutableCopy():_e.newInvalidDocument(t))}getEntries(e,t){let n=Ye();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():_e.newInvalidDocument(s))}),R.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ye();const o=t.path,c=new O(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||hc(of(f),n)<=0||(s.has(f.key)||Us(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,n,s){F()}Or(e,t){return R.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new WE(this)}getSize(e){return R.resolve(this.size)}}class WE extends hm{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(n)}),R.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.persistence=e,this.Nr=new an(t=>Nn(t),Fs),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Sc,this.targetCount=0,this.kr=Mn.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),R.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Mn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Kn(t),R.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return R.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),R.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return R.resolve(n)}containsKey(e,t){return R.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t){this.qr={},this.overlays={},this.Qr=new We(0),this.Kr=!1,this.Kr=!0,this.$r=new GE,this.referenceDelegate=e(this),this.Ur=new QE(this),this.indexManager=new kE,this.remoteDocumentCache=function(s){return new HE(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new rm(t),this.Gr=new qE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new KE(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){k("MemoryPersistence","Starting transaction:",e);const s=new JE(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return R.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class JE extends cf{constructor(e){super(),this.currentSequenceNumber=e}}class yo{constructor(e){this.persistence=e,this.Jr=new Sc,this.Yr=null}static Zr(e){return new yo(e)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),R.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),R.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,n=>{const s=O.fromPath(n);return this.ei(e,s).next(i=>{i||t.removeEntry(s,q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return R.or([()=>R.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.serializer=e}O(e,t,n,s){const i=new io("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Gu,{unique:!0}),l.createObjectStore("documentMutations")}(e),kh(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=R.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),kh(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Gu,{unique:!0});const p=h.store("mutations"),I=f.map(S=>p.put(S));return R.waitFor(I)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ni(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&s>=7&&(o=o.next(()=>this.ii(i))),n<8&&s>=8&&(o=o.next(()=>this.si(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.oi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:PI});h.createIndex("collectionPathOverlayIndex",CI,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",xI,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:_I});h.createIndex("documentKeyIndex",yI),h.createIndex("collectionGroupIndex",vI)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:bI}).createIndex("sequenceNumberIndex",AI,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:RI}).createIndex("documentKeyIndex",SI,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=Wi(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>R.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>R.forEach(c,l=>{j(l.userId===i.userId);const h=yn(this.serializer,l);return cm(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,c)=>{const l=new ie(o),h=function(p){return[0,Ge(p)]}(l);i.push(t.get(h).next(f=>f?R.resolve():(p=>t.put({targetId:0,path:Ge(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>R.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:TI});const n=t.store("collectionParents"),s=new Rc,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:Ge(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new ie(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],h)=>{const f=ut(c);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,s)=>{const i=os(s),o=sm(this.serializer,i);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new O(ie.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):F()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>R.waitFor(s))}ai(e,t){const n=t.store("mutations"),s=dm(this.serializer),i=new mm(yo.Zr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:J();yn(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),R.forEach(c,(l,h)=>{const f=new Fe(h),p=go.lt(this.serializer,f),I=i.getIndexManager(f),S=_o.lt(f,this.serializer,I,i.referenceDelegate);return new fm(s,S,p,I).recalculateAndSaveOverlaysForDocumentKeys(new Ca(t,We.oe),l).next()})})}}function kh(r){r.createObjectStore("targetDocuments",{keyPath:EI}).createIndex("documentTargetsIndex",wI,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",II,{unique:!0}),r.createObjectStore("targetGlobal")}const da="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Pc{constructor(e,t,n,s,i,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=I=>Promise.resolve(),!Pc.D())throw new L(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new UE(this,s),this.Ai=t+"main",this.serializer=new rm(l),this.Ri=new Xt(this.Ai,this.hi,new XE(this.serializer)),this.$r=new RE,this.Ur=new NE(this.referenceDelegate,this.serializer),this.remoteDocumentCache=dm(this.serializer),this.Gr=new AE,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&Ie("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(C.FAILED_PRECONDITION,da);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new We(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>di(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(on(e))return k("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return k("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Yr(e).get("owner").next(t=>R.resolve(this.vi(t)))}Ci(e){return di(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Ae(t,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return R.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?R.resolve(!0):Yr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new L(C.FAILED_PRECONDITION,da);return!1}}return!(!this.networkEnabled||!this.inForeground)||di(e).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&k("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ca(e,We.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>di(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return _o.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new VE(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return go.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){k("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?VI:l===16?kI:l===15?fc:l===14?mf:l===13?ff:l===12?DI:l===11?df:void F()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new Ca(c,this.Qr?this.Qr.next():We.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Ie(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new L(C.FAILED_PRECONDITION,af);return n(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Yr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(C.FAILED_PRECONDITION,da)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Yr(e).put("owner",t)}static D(){return Xt.D()}bi(e){const t=Yr(e);return t.get("owner").next(n=>this.vi(n)?(k("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):R.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Ie(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;cd()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return k("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Ie("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Ie("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Yr(r){return Ae(r,"owner")}function di(r){return Ae(r,"clientMetadata")}function pm(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=s}static Wi(e,t){let n=J(),s=J();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cc(e,t.fromCache,n,s)}}/**
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
 */class YE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return cd()?8:lf(be())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YE;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,n,s){return n.documentReadCount<this.ji?(tr()<=Z.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",nr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(tr()<=Z.DEBUG&&k("QueryEngine","Query:",nr(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(tr()<=Z.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",nr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):R.resolve())}Yi(e,t){if(sh(t))return R.resolve(null);let n=et(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Oa(t,null,"F"),n=et(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=J(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,Oa(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,n,s){return sh(t)||s.isEqual(q.min())?R.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const o=this.ts(t,i);return this.ns(t,o,n,s)?R.resolve(null):(tr()<=Z.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),nr(t)),this.rs(e,o,t,sf(s,-1)).next(c=>c))})}ts(e,t){let n=new ae(xf(e));return t.forEach((s,i)=>{Us(e,i)&&(n=n.add(i))}),n}ns(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,n){return tr()<=Z.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",nr(t)),this.Ji.getDocumentsMatchingQuery(e,t,tt.min(),n)}rs(e,t,n,s){return this.Ji.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,t,n,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ue(W),this._s=new an(i=>Nn(i),Fs),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function _m(r,e,t,n){return new ZE(r,e,t,n)}async function ym(r,e){const t=U(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=J();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function ew(r,e){const t=U(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,I=p.keys();let S=R.resolve();return I.forEach(D=>{S=S.next(()=>f.getEntry(l,D)).next(V=>{const x=h.docVersions.get(D);j(x!==null),V.version.compareTo(x)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=J();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function vm(r){const e=U(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function tw(r,e){const t=U(r),n=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const I=s.get(p);if(!I)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let S=I.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(we.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,n)),s=s.insert(p,S),function(V,x,G){return V.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(I,S,f)&&c.push(t.Ur.updateTargetData(i,S))});let l=Ye(),h=J();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(nw(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!n.isEqual(q.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return R.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function nw(r,e,t){let n=J(),s=J();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Ye();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):k("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function rw(r,e){const t=U(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Qi(r,e){const t=U(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ur.getTargetData(n,e).next(i=>i?(s=i,R.resolve(s)):t.Ur.allocateTargetId(n).next(o=>(s=new At(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function Ir(r,e,t){const n=U(r),s=n.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!on(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(s.target)}function qa(r,e,t){const n=U(r);let s=q.min(),i=J();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=U(l),I=p._s.get(f);return I!==void 0?R.resolve(p.os.get(I)):p.Ur.getTargetData(h,f)}(n,o,et(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?i:J())).next(c=>(wm(n,Cf(e),c),{documents:c,Ts:i})))}function Im(r,e){const t=U(r),n=U(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,e).next(o=>o?o.target:null))}function Em(r,e){const t=U(r),n=t.us.get(e)||q.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,sf(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(wm(t,e,s),s))}function wm(r,e,t){let n=r.us.get(e)||q.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(e,n)}function Vh(r,e){return`firestore_clients_${r}_${e}`}function Nh(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function fa(r,e){return`firestore_targets_${r}_${e}`}class Ji{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Rs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new L(s.error.code,s.error.message))),o?new Ji(e,t,s.state,i):(Ie("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ps{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new L(n.error.code,n.error.message))),i?new ps(e,n.state,s):(Ie("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=yc();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=uf(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Xi(e,i):(Ie("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class xc{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new xc(t.clientId,t.onlineState):(Ie("SharedClientState",`Failed to parse online state: ${e}`),null)}}class za{constructor(){this.activeTargetIds=yc()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ma{constructor(e,t,n,s,i){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ue(W),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Vh(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new za),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const s=this.getItem(Vh(this.persistenceKey,n));if(s){const i=Xi.Rs(n,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(fa(this.persistenceKey,e));if(s){const i=ps.Rs(e,s);i&&(n=i.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(fa(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return k("SharedClientState","READ",e,t),t}setItem(e,t){k("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){k("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(k("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Ie("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(i){let o=We.oe;if(i!=null)try{const c=JSON.parse(i);j(typeof c=="number"),o=c}catch(c){Ie("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==We.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const s=new Ji(this.currentUser,e,t,n),i=Nh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=Nh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const s=fa(this.persistenceKey,e),i=new ps(e,t,n);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return Xi.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ji.Rs(new Fe(i),s,t)}Ys(e,t){const n=this.Ms.exec(e),s=Number(n[1]);return ps.Rs(s,t)}Ls(e){return xc.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);k("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(n),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=yc();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Tm{constructor(){this.so=new za,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new za,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fi=null;function pa(){return fi===null?fi=function(){return 268435456+Math.round(2147483648*Math.random())}():fi++,"0x"+fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class aw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,n,s,i,o){const c=pa(),l=this.xo(t,n.toUriEncodedString());k("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(f=>(k("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw ws("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,n,s,i,o,c){return this.Mo(t,n,s,i,o)}Oo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,n){const s=iw[t];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,s){const i=pa();return new Promise((o,c)=>{const l=new Xd;l.setWithCredentials(!0),l.listenOnce(Yd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ii.NO_ERROR:const f=l.getResponseJson();k(Me,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Ii.TIMEOUT:k(Me,`RPC '${e}' ${i} timed out`),c(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ii.HTTP_ERROR:const p=l.getStatus();if(k(Me,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const D=function(x){const G=x.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN}(S.status);c(new L(D,S.message))}else c(new L(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new L(C.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{k(Me,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);k(Me,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,n,15)})}Bo(e,t,n){const s=pa(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tf(),c=ef(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");k(Me,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let I=!1,S=!1;const D=new ow({Io:x=>{S?k(Me,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(I||(k(Me,`Opening RPC '${e}' stream ${s} transport.`),p.open(),I=!0),k(Me,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},To:()=>p.close()}),V=(x,G,B)=>{x.listen(G,M=>{try{B(M)}catch(z){setTimeout(()=>{throw z},0)}})};return V(p,rs.EventType.OPEN,()=>{S||(k(Me,`RPC '${e}' stream ${s} transport opened.`),D.yo())}),V(p,rs.EventType.CLOSE,()=>{S||(S=!0,k(Me,`RPC '${e}' stream ${s} transport closed`),D.So())}),V(p,rs.EventType.ERROR,x=>{S||(S=!0,ws(Me,`RPC '${e}' stream ${s} transport errored:`,x),D.So(new L(C.UNAVAILABLE,"The operation could not be completed")))}),V(p,rs.EventType.MESSAGE,x=>{var G;if(!S){const B=x.data[0];j(!!B);const M=B,z=M.error||((G=M[0])===null||G===void 0?void 0:G.error);if(z){k(Me,`RPC '${e}' stream ${s} received error:`,z);const X=z.status;let Q=function(y){const w=Te[y];if(w!==void 0)return qf(w)}(X),E=z.message;Q===void 0&&(Q=C.INTERNAL,E="Unknown error status: "+X+" with message "+z.message),S=!0,D.So(new L(Q,E)),p.close()}else k(Me,`RPC '${e}' stream ${s} received:`,B),D.bo(B)}}),V(c,Zd.STAT_EVENT,x=>{x.stat===Sa.PROXY?k(Me,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Sa.NOPROXY&&k(Me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function bm(){return typeof window<"u"?window:null}function Si(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(r){return new mE(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-n);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t,n,s,i,o,c,l){this.ui=e,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Am(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ie(t.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===t&&this.P_(n,s)},n=>{e(()=>{const s=new L(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cw extends Rm{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=_E(this.serializer,e),n=function(i){if(!("targetChange"in i))return q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Ke(o.readTime):q.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Fa(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=ji(l)?{documents:Xf(i,l)}:{query:Yf(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Kf(i,o.resumeToken);const h=La(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=vr(i,o.snapshotVersion.toTimestamp());const h=La(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=vE(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Fa(this.serializer),t.removeTarget=e,this.a_(t)}}class lw extends Rm{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return j(!!e.streamToken),this.lastStreamToken=e.streamToken,j(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=yE(e.writeResults,e.commitTime),n=Ke(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Fa(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Gi(this.serializer,n))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Ma(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(C.UNKNOWN,i.toString())})}Lo(e,t,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Ma(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(C.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class hw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ie(t),this.D_=!1):k("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{$n(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=U(l);h.L_.add(4),await js(h),h.q_.set("Unknown"),h.L_.delete(4),await Io(h)}(this))})}),this.q_=new hw(n,s)}}async function Io(r){if($n(r))for(const e of r.B_)await e(!0)}async function js(r){for(const e of r.B_)await e(!1)}function Eo(r,e){const t=U(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Vc(t)?kc(t):xr(t).r_()&&Dc(t,e))}function Er(r,e){const t=U(r),n=xr(t);t.N_.delete(e),n.r_()&&Sm(t,e),t.N_.size===0&&(n.r_()?n.o_():$n(t)&&t.q_.set("Unknown"))}function Dc(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xr(r).A_(e)}function Sm(r,e){r.Q_.xe(e),xr(r).R_(e)}function kc(r){r.Q_=new uE({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),xr(r).start(),r.q_.v_()}function Vc(r){return $n(r)&&!xr(r).n_()&&r.N_.size>0}function $n(r){return U(r).L_.size===0}function Pm(r){r.Q_=void 0}async function fw(r){r.q_.set("Online")}async function mw(r){r.N_.forEach((e,t)=>{Dc(r,e)})}async function pw(r,e){Pm(r),Vc(r)?(r.q_.M_(e),kc(r)):r.q_.set("Unknown")}async function gw(r,e,t){if(r.q_.set("Online"),e instanceof Gf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(r,e)}catch(n){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Yi(r,n)}else if(e instanceof Ri?r.Q_.Ke(e):e instanceof zf?r.Q_.He(e):r.Q_.We(e),!t.isEqual(q.min()))try{const n=await vm(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(we.EMPTY_BYTE_STRING,f.snapshotVersion)),Sm(i,l);const p=new At(f.target,l,h,f.sequenceNumber);Dc(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){k("RemoteStore","Failed to raise snapshot:",n),await Yi(r,n)}}async function Yi(r,e,t){if(!on(e))throw e;r.L_.add(1),await js(r),r.q_.set("Offline"),t||(t=()=>vm(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Io(r)})}function Cm(r,e){return e().catch(t=>Yi(r,t,e))}async function Cr(r){const e=U(r),t=nn(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;_w(e);)try{const s=await rw(e.localStore,n);if(s===null){e.O_.length===0&&t.o_();break}n=s.batchId,yw(e,s)}catch(s){await Yi(e,s)}xm(e)&&Dm(e)}function _w(r){return $n(r)&&r.O_.length<10}function yw(r,e){r.O_.push(e);const t=nn(r);t.r_()&&t.V_&&t.m_(e.mutations)}function xm(r){return $n(r)&&!nn(r).n_()&&r.O_.length>0}function Dm(r){nn(r).start()}async function vw(r){nn(r).p_()}async function Iw(r){const e=nn(r);for(const t of r.O_)e.m_(t.mutations)}async function Ew(r,e,t){const n=r.O_.shift(),s=Ec.from(n,e,t);await Cm(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Cr(r)}async function ww(r,e){e&&nn(r).V_&&await async function(n,s){if(function(o){return aE(o)&&o!==C.ABORTED}(s.code)){const i=n.O_.shift();nn(n).s_(),await Cm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Cr(n)}}(r,e),xm(r)&&Dm(r)}async function Lh(r,e){const t=U(r);t.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const n=$n(t);t.L_.add(3),await js(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Io(t)}async function Ga(r,e){const t=U(r);e?(t.L_.delete(2),await Io(t)):e||(t.L_.add(2),await js(t),t.q_.set("Unknown"))}function xr(r){return r.K_||(r.K_=function(t,n,s){const i=U(t);return i.w_(),new cw(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:fw.bind(null,r),Ro:mw.bind(null,r),mo:pw.bind(null,r),d_:gw.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),Vc(r)?kc(r):r.q_.set("Unknown")):(await r.K_.stop(),Pm(r))})),r.K_}function nn(r){return r.U_||(r.U_=function(t,n,s){const i=U(t);return i.w_(),new lw(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:vw.bind(null,r),mo:ww.bind(null,r),f_:Iw.bind(null,r),g_:Ew.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await Cr(r)):(await r.U_.stop(),r.O_.length>0&&(k("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new Nc(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oc(r,e){if(Ie("AsyncQueue",`${e}: ${r}`),on(r))return new L(C.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=ss(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new hr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.W_=new ue(O.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):F():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class wr{constructor(e,t,n,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new wr(e,t,hr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bw{constructor(){this.queries=Fh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const s=U(t),i=s.queries;s.queries=Fh(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(n)})})(this,new L(C.ABORTED,"Firestore shutting down"))}}function Fh(){return new an(r=>Pf(r),uo)}async function km(r,e){const t=U(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(n=2):(i=new Tw,n=e.J_()?0:1);try{switch(n){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Oc(o,`Initialization of query '${nr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Lc(t)}async function Vm(r,e){const t=U(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Aw(r,e){const t=U(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(n=!0);o.z_=s}}n&&Lc(t)}function Rw(r,e,t){const n=U(r),s=n.queries.get(e);if(s)for(const i of s.j_)i.onError(t);n.queries.delete(e)}function Lc(r){r.Y_.forEach(e=>{e.next()})}var Ka,Uh;(Uh=Ka||(Ka={})).ea="default",Uh.Cache="cache";class Nm{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new wr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=wr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ka.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.key=e}}class Lm{constructor(e){this.key=e}}class Sw{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=J(),this.mutatedKeys=J(),this.Aa=xf(e),this.Ra=new hr(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new Mh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const I=s.get(f),S=Us(this.query,p)?p:null,D=!!I&&this.mutatedKeys.has(I.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;I&&S?I.data.isEqual(S.data)?D!==V&&(n.track({type:3,doc:S}),x=!0):this.ga(I,S)||(n.track({type:2,doc:S}),x=!0,(l&&this.Aa(S,l)>0||h&&this.Aa(S,h)<0)&&(c=!0)):!I&&S?(n.track({type:0,doc:S}),x=!0):I&&!S&&(n.track({type:1,doc:I}),x=!0,(l||h)&&(c=!0)),x&&(S?(o=o.add(S),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(S,D){const V=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return V(S)-V(D)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new wr(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Mh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=J(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Lm(n))}),this.da.forEach(n=>{e.has(n)||t.push(new Om(n))}),t}ba(e){this.Ta=e.Ts,this.da=J();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return wr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Pw{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Cw{constructor(e){this.key=e,this.va=!1}}class xw{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new an(c=>Pf(c),uo),this.Ma=new Map,this.xa=new Set,this.Oa=new ue(O.comparator),this.Na=new Map,this.La=new Sc,this.Ba={},this.ka=new Map,this.qa=Mn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Dw(r,e,t=!0){const n=wo(r);let s;const i=n.Fa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Mm(n,e,t,!0),s}async function kw(r,e){const t=wo(r);await Mm(t,e,!0,!1)}async function Mm(r,e,t,n){const s=await Qi(r.localStore,et(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await Mc(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Eo(r.remoteStore,s),c}async function Mc(r,e,t,n,s){r.Ka=(p,I,S)=>async function(V,x,G,B){let M=x.view.ma(G);M.ns&&(M=await qa(V.localStore,x.query,!1).then(({documents:E})=>x.view.ma(E,M)));const z=B&&B.targetChanges.get(x.targetId),X=B&&B.targetMismatches.get(x.targetId)!=null,Q=x.view.applyChanges(M,V.isPrimaryClient,z,X);return Ha(V,x.targetId,Q.wa),Q.snapshot}(r,p,I,S);const i=await qa(r.localStore,e,!0),o=new Sw(e,i.Ts),c=o.ma(i.documents),l=$s.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,l);Ha(r,t,h.wa);const f=new Pw(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function Vw(r,e,t){const n=U(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!uo(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ir(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Er(n.remoteStore,s.targetId),Tr(n,s.targetId)}).catch(sn)):(Tr(n,s.targetId),await Ir(n.localStore,s.targetId,!0))}async function Nw(r,e){const t=U(r),n=t.Fa.get(e),s=t.Ma.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Er(t.remoteStore,n.targetId))}async function Ow(r,e,t){const n=$c(r);try{const s=await function(o,c){const l=U(o),h=pe.now(),f=c.reduce((S,D)=>S.add(D.key),J());let p,I;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Ye(),V=J();return l.cs.getEntries(S,f).next(x=>{D=x,D.forEach((G,B)=>{B.isValidDocument()||(V=V.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,D)).next(x=>{p=x;const G=[];for(const B of c){const M=iE(B,p.get(B.key).overlayedDocument);M!=null&&G.push(new Vt(B.key,M,vf(M.value.mapValue),Be.exists(!0)))}return l.mutationQueue.addMutationBatch(S,h,G,c)}).next(x=>{I=x;const G=x.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(S,x.batchId,G)})}).then(()=>({batchId:I.batchId,changes:kf(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new ue(W)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(n,s.batchId,t),await cn(n,s.changes),await Cr(n.remoteStore)}catch(s){const i=Oc(s,"Failed to persist write");t.reject(i)}}async function Fm(r,e){const t=U(r);try{const n=await tw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(j(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?j(o.va):s.removedDocuments.size>0&&(j(o.va),o.va=!1))}),await cn(t,n,e)}catch(n){await sn(n)}}function Bh(r,e,t){const n=U(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=U(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const I of p.j_)I.Z_(c)&&(h=!0)}),h&&Lc(l)}(n.eventManager,e),s.length&&n.Ca.d_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Lw(r,e,t){const n=U(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Na.get(e),i=s&&s.key;if(i){let o=new ue(O.comparator);o=o.insert(i,_e.newNoDocument(i,q.min()));const c=J().add(i),l=new Bs(q.min(),new Map,new ue(W),o,c);await Fm(n,l),n.Oa=n.Oa.remove(i),n.Na.delete(e),Bc(n)}else await Ir(n.localStore,e,!1).then(()=>Tr(n,e,t)).catch(sn)}async function Mw(r,e){const t=U(r),n=e.batch.batchId;try{const s=await ew(t.localStore,e);Uc(t,n,null),Fc(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await cn(t,s)}catch(s){await sn(s)}}async function Fw(r,e,t){const n=U(r);try{const s=await function(o,c){const l=U(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(j(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);Uc(n,e,t),Fc(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await cn(n,s)}catch(s){await sn(s)}}function Fc(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function Uc(r,e,t){const n=U(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ba[n.currentUser.toKey()]=s}}function Tr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Um(r,n)})}function Um(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(Er(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),Bc(r))}function Ha(r,e,t){for(const n of t)n instanceof Om?(r.La.addReference(n.key,e),Uw(r,n)):n instanceof Lm?(k("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Um(r,n.key)):F()}function Uw(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(k("SyncEngine","New document in limbo: "+t),r.xa.add(n),Bc(r))}function Bc(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new O(ie.fromString(e)),n=r.qa.next();r.Na.set(n,new Cw(t)),r.Oa=r.Oa.insert(t,n),Eo(r.remoteStore,new At(et(lo(t.path)),n,"TargetPurposeLimboResolution",We.oe))}}async function cn(r,e,t){const n=U(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((c,l)=>{o.push(n.Ka(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Cc.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(l,h){const f=U(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(h,I=>R.forEach(I.$i,S=>f.persistence.referenceDelegate.addReference(p,I.targetId,S)).next(()=>R.forEach(I.Ui,S=>f.persistence.referenceDelegate.removeReference(p,I.targetId,S)))))}catch(p){if(!on(p))throw p;k("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const I=p.targetId;if(!p.fromCache){const S=f.os.get(I),D=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(D);f.os=f.os.insert(I,V)}}}(n.localStore,i))}async function Bw(r,e){const t=U(r);if(!t.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const n=await ym(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new L(C.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await cn(t,n.hs)}}function $w(r,e){const t=U(r),n=t.Na.get(e);if(n&&n.va)return J().add(n.key);{let s=J();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function jw(r,e){const t=U(r),n=await qa(t.localStore,e.query,!0),s=e.view.ba(n);return t.isPrimaryClient&&Ha(t,e.targetId,s.wa),s}async function qw(r,e){const t=U(r);return Em(t.localStore,e).then(n=>cn(t,n))}async function zw(r,e,t,n){const s=U(r),i=await function(c,l){const h=U(c),f=U(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,l).next(I=>I?h.localDocuments.getDocuments(p,I):R.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Cr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Uc(s,e,n||null),Fc(s,e),function(c,l){U(U(c).mutationQueue).On(l)}(s.localStore,e)):F(),await cn(s,i)):k("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Gw(r,e){const t=U(r);if(wo(t),$c(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await $h(t,n.toArray());t.Qa=!0,await Ga(t.remoteStore,!0);for(const i of s)Eo(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const n=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(Tr(t,o),Ir(t.localStore,o,!0))),Er(t.remoteStore,o)}),await s,await $h(t,n),function(o){const c=U(o);c.Na.forEach((l,h)=>{Er(c.remoteStore,h)}),c.La.pr(),c.Na=new Map,c.Oa=new ue(O.comparator)}(t),t.Qa=!1,await Ga(t.remoteStore,!1)}}async function $h(r,e,t){const n=U(r),s=[],i=[];for(const o of e){let c;const l=n.Ma.get(o);if(l&&l.length!==0){c=await Qi(n.localStore,et(l[0]));for(const h of l){const f=n.Fa.get(h),p=await jw(n,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await Im(n.localStore,o);c=await Qi(n.localStore,h),await Mc(n,Bm(h),o,!1,c.resumeToken)}s.push(c)}return n.Ca.d_(i),s}function Bm(r){return Sf(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function Kw(r){return function(t){return U(U(t).persistence).Qi()}(U(r).localStore)}async function Hw(r,e,t,n){const s=U(r);if(s.Qa)return void k("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Em(s.localStore,Cf(i[0])),c=Bs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",we.EMPTY_BYTE_STRING);await cn(s,o,c);break}case"rejected":await Ir(s.localStore,e,!0),Tr(s,e,n);break;default:F()}}async function Ww(r,e,t){const n=wo(r);if(n.Qa){for(const s of e){if(n.Ma.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){k("SyncEngine","Adding an already active target "+s);continue}const i=await Im(n.localStore,s),o=await Qi(n.localStore,i);await Mc(n,Bm(i),o.targetId,!1,o.resumeToken),Eo(n.remoteStore,o)}for(const s of t)n.Ma.has(s)&&await Ir(n.localStore,s,!1).then(()=>{Er(n.remoteStore,s),Tr(n,s)}).catch(sn)}}function wo(r){const e=U(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$w.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lw.bind(null,e),e.Ca.d_=Aw.bind(null,e.eventManager),e.Ca.$a=Rw.bind(null,e.eventManager),e}function $c(r){const e=U(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fw.bind(null,e),e}class xs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return _m(this.persistence,new gm,e.initialUser,this.serializer)}Ga(e){return new mm(yo.Zr,this.serializer)}Wa(e){return new Tm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xs.provider={build:()=>new xs};class $m extends xs{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await $c(this.Ja.syncEngine),await Cr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return _m(this.persistence,new gm,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new LE(n,e.asyncQueue,t)}Ha(e,t){const n=new mI(t,this.persistence);return new fI(e.asyncQueue,n)}Ga(e){const t=pm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new Pc(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,bm(),Si(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Tm}}class Qw extends $m{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof ma&&(this.sharedClientState.syncEngine={no:zw.bind(null,t),ro:Hw.bind(null,t),io:Ww.bind(null,t),Qi:Kw.bind(null,t),eo:qw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await Gw(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=bm();if(!ma.D(t))throw new L(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=pm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ma(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Ds{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Bh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bw.bind(null,this.syncEngine),await Ga(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bw}()}createDatastore(e){const t=vo(e.databaseInfo.databaseId),n=function(i){return new aw(i)}(e.databaseInfo);return function(i,o,c,l){return new uw(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new dw(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Bh(this.syncEngine,t,0),function(){return Oh.D()?new Oh:new sw}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new xw(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=U(s);k("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await js(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ds.provider={build:()=>new Ds};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ie("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{k("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(k("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Oc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ga(r,e){r.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await ym(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function jh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Xw(r);k("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Lh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Lh(e.remoteStore,s)),r._onlineComponents=e}async function Xw(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await ga(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ws("Error using user provided cache. Falling back to memory cache: "+t),await ga(r,new xs)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await ga(r,new xs);return r._offlineComponents}async function qm(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await jh(r,r._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await jh(r,new Ds))),r._onlineComponents}function Yw(r){return qm(r).then(e=>e.syncEngine)}async function zm(r){const e=await qm(r),t=e.eventManager;return t.onListen=Dw.bind(null,e.syncEngine),t.onUnlisten=Vw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Nw.bind(null,e.syncEngine),t}function Zw(r,e,t={}){const n=new pt;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new jm({next:I=>{f.Za(),o.enqueueAndForget(()=>Vm(i,p));const S=I.docs.has(c);!S&&I.fromCache?h.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&l&&l.source==="server"?h.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(I)},error:I=>h.reject(I)}),p=new Nm(lo(c.path),f,{includeMetadataChanges:!0,_a:!0});return km(i,p)}(await zm(r),r.asyncQueue,e,t,n)),n.promise}function eT(r,e,t={}){const n=new pt;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new jm({next:I=>{f.Za(),o.enqueueAndForget(()=>Vm(i,p)),I.fromCache&&l.source==="server"?h.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(I)},error:I=>h.reject(I)}),p=new Nm(c,f,{includeMetadataChanges:!0,_a:!0});return km(i,p)}(await zm(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function Gm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(r,e,t){if(!t)throw new L(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function tT(r,e,t,n){if(e===!0&&n===!0)throw new L(C.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function zh(r){if(!O.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Gh(r){if(O.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function jc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F()}function _t(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jc(r);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new rI;switch(n.type){case"firstParty":return new oI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=qh.get(t);n&&(k("ComponentProvider","Removing Datastore"),qh.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new To(this.firestore,e,this._query)}}class Je{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}}class Yt extends To{constructor(e,t,n){super(e,t,lo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new O(e))}withConverter(e){return new Yt(this.firestore,e,this._path)}}function Wt(r,e,...t){if(r=Ee(r),Km("collection","path",e),r instanceof qc){const n=ie.fromString(e,...t);return Gh(n),new Yt(r,null,n)}{if(!(r instanceof Je||r instanceof Yt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ie.fromString(e,...t));return Gh(n),new Yt(r.firestore,null,n)}}function de(r,e,...t){if(r=Ee(r),arguments.length===1&&(e=nf.newId()),Km("doc","path",e),r instanceof qc){const n=ie.fromString(e,...t);return zh(n),new Je(r,null,new O(n))}{if(!(r instanceof Je||r instanceof Yt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ie.fromString(e,...t));return zh(n),new Je(r.firestore,r instanceof Yt?r.converter:null,new O(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Am(this,"async_queue_retry"),this.Vu=()=>{const n=Si();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=Si();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Si();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new pt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!on(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw Ie("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Nc.createAndSchedule(this,e,t,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class jn extends qc{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Hh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hh(e),this._firestoreClient=void 0,await e}}}function nT(r,e,t){t||(t="(default)");const n=to(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(ys(i,e))return s;throw new L(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new L(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function zc(r){if(r._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rT(r),r._firestoreClient}function rT(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,h,f){return new OI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Gm(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Jw(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new br(we.fromBase64String(e))}catch(t){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new br(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
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
 */class Kc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=/^__.*__$/;class iT{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Vt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pr(e,this.data,t,this.fieldTransforms)}}class Hm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Vt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Wm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Hc{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Hc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.Ou(e),s}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Zi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Wm(this.Cu)&&sT.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class oT{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||vo(e)}Qu(e,t,n,s=!1){return new Hc({Cu:e,methodName:t,qu:n,path:me.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wc(r){const e=r._freezeSettings(),t=vo(r._databaseId);return new oT(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Qm(r,e,t,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,e,t,s);Jc("Data must be an object, but it was:",o,n);const c=Jm(n,o);let l,h;if(i.merge)l=new Qe(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const I=Wa(e,p,t);if(!o.contains(I))throw new L(C.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Ym(f,I)||f.push(I)}l=new Qe(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new iT(new Ue(c),l,h)}class Ro extends Ao{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ro}}class Qc extends Ao{_toFieldTransform(e){return new Uf(e.path,new gr)}isEqual(e){return e instanceof Qc}}function aT(r,e,t,n){const s=r.Qu(1,e,t);Jc("Data must be an object, but it was:",s,n);const i=[],o=Ue.empty();Bn(n,(l,h)=>{const f=Xc(e,l,t);h=Ee(h);const p=s.Nu(f);if(h instanceof Ro)i.push(f);else{const I=So(h,p);I!=null&&(i.push(f),o.set(f,I))}});const c=new Qe(i);return new Hm(o,c,s.fieldTransforms)}function cT(r,e,t,n,s,i){const o=r.Qu(1,e,t),c=[Wa(e,n,t)],l=[s];if(i.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<i.length;I+=2)c.push(Wa(e,i[I])),l.push(i[I+1]);const h=[],f=Ue.empty();for(let I=c.length-1;I>=0;--I)if(!Ym(h,c[I])){const S=c[I];let D=l[I];D=Ee(D);const V=o.Nu(S);if(D instanceof Ro)h.push(S);else{const x=So(D,V);x!=null&&(h.push(S),f.set(S,x))}}const p=new Qe(h);return new Hm(f,p,o.fieldTransforms)}function So(r,e){if(Xm(r=Ee(r)))return Jc("Unsupported field value:",e,r),Jm(r,e);if(r instanceof Ao)return function(n,s){if(!Wm(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=So(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ZI(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=pe.fromDate(n);return{timestampValue:vr(s.serializer,i)}}if(n instanceof pe){const i=new pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vr(s.serializer,i)}}if(n instanceof Gc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof br)return{bytesValue:Kf(s.serializer,n._byteString)};if(n instanceof Je){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bc(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Kc)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return vc(c.serializer,l)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${jc(n)}`)}(r,e)}function Jm(r,e){const t={};return pf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(r,(n,s)=>{const i=So(s,e.Mu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function Xm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof pe||r instanceof Gc||r instanceof br||r instanceof Je||r instanceof Ao||r instanceof Kc)}function Jc(r,e,t){if(!Xm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=jc(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Wa(r,e,t){if((e=Ee(e))instanceof bo)return e._internalPath;if(typeof e=="string")return Xc(r,e);throw Zi("Field path arguments must be of type string or ",r,!1,void 0,t)}const lT=new RegExp("[~\\*/\\[\\]]");function Xc(r,e,t){if(e.search(lT)>=0)throw Zi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new bo(...e.split("."))._internalPath}catch{throw Zi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Zi(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new L(C.INVALID_ARGUMENT,c+r+l)}function Ym(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ep("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uT extends Zm{data(){return super.data()}}function ep(r,e){return typeof e=="string"?Xc(r,e):e instanceof bo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dT{convertValue(e,t="none"){switch(Vn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Bn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>fe(o.doubleValue));return new Kc(i)}convertGeoPoint(e){return new Gc(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=pc(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Rs(e));default:return null}}convertTimestamp(e){const t=xt(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ie.fromString(e);j(nm(n));const s=new kn(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(t)||Ie(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class np extends Zm{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ep("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Pi extends np{data(e={}){return super.data(e)}}class fT{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new as(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Pi(this._firestore,this._userDataWriter,n.key,n,new as(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Pi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new as(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Pi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new as(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:mT(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function mT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(r){r=_t(r,Je);const e=_t(r.firestore,jn);return Zw(zc(e),r._key).then(t=>gT(e,r,t))}class rp extends dT{constructor(e){super(),this.firestore=e}convertBytes(e){return new br(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,t)}}function En(r){r=_t(r,To);const e=_t(r.firestore,jn),t=zc(e),n=new rp(e);return hT(r._query),eT(t,r._query).then(s=>new fT(e,n,r,s))}function Po(r,e,t){r=_t(r,Je);const n=_t(r.firestore,jn),s=tp(r.converter,e);return Co(n,[Qm(Wc(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Be.none())])}function vt(r,e,t,...n){r=_t(r,Je);const s=_t(r.firestore,jn),i=Wc(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof bo?cT(i,"updateDoc",r._key,e,t,n):aT(i,"updateDoc",r._key,e),Co(s,[o.toMutation(r._key,Be.exists(!0))])}function bn(r){return Co(_t(r.firestore,jn),[new mo(r._key,Be.none())])}function pT(r,e){const t=_t(r.firestore,jn),n=de(r),s=tp(r.converter,e);return Co(t,[Qm(Wc(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Be.exists(!1))]).then(()=>n)}function Co(r,e){return function(n,s){const i=new pt;return n.asyncQueue.enqueueAndForget(async()=>Ow(await Yw(n),s,i)),i.promise}(zc(r),e)}function gT(r,e,t){const n=t.docs.get(e._key),s=new rp(r);return new np(r,s,e._key,n,new as(t.hasPendingWrites,t.fromCache),e.converter)}class _T{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=ET(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function yT(r){return new _T(r)}class vT{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ds.provider,this._offlineComponentProvider={build:t=>new $m(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class IT{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ds.provider,this._offlineComponentProvider={build:t=>new Qw(t,e==null?void 0:e.cacheSizeBytes)}}}function ET(r){return new vT(void 0)}function wT(){return new IT}function xo(){return new Qc("serverTimestamp")}(function(e,t=!0){(function(s){Sr=s})(Un),Pn(new Zt("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new jn(new sI(n.getProvider("auth-internal")),new cI(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),dt(ju,"4.7.3",e),dt(ju,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="firebasestorage.googleapis.com",ip="storageBucket",TT=2*60*1e3,bT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends yt{constructor(e,t,n=0){super(_a(e),`Firebase Storage: ${t} (${_a(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _a(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ye;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ye||(ye={}));function _a(r){return"storage/"+r}function Yc(){const r="An unknown error occurred, please check the error payload for server response.";return new ve(ye.UNKNOWN,r)}function AT(r){return new ve(ye.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function RT(r){return new ve(ye.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ST(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve(ye.UNAUTHENTICATED,r)}function PT(){return new ve(ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function CT(r){return new ve(ye.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function xT(){return new ve(ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DT(){return new ve(ye.CANCELED,"User canceled the upload/download.")}function kT(r){return new ve(ye.INVALID_URL,"Invalid URL '"+r+"'.")}function VT(r){return new ve(ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function NT(){return new ve(ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ip+"' property when initializing the app?")}function OT(){return new ve(ye.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function LT(){return new ve(ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function MT(r){return new ve(ye.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qa(r){return new ve(ye.INVALID_ARGUMENT,r)}function op(){return new ve(ye.APP_DELETED,"The Firebase app was deleted.")}function FT(r){return new ve(ye.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function gs(r,e){return new ve(ye.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Zr(r){throw new ve(ye.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Ze.makeFromUrl(e,t)}catch{return new Ze(e,"")}if(n.path==="")return n;throw VT(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(z){z.path_=decodeURIComponent(z.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",S=new RegExp(`^https?://${p}/${f}/b/${s}/o${I}`,"i"),D={bucket:1,path:3},V=t===sp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,x="([^?#]*)",G=new RegExp(`^https?://${V}/${s}/${x}`,"i"),M=[{regex:c,indices:l,postModify:i},{regex:S,indices:D,postModify:h},{regex:G,indices:{bucket:1,path:2},postModify:h}];for(let z=0;z<M.length;z++){const X=M[z],Q=X.regex.exec(e);if(Q){const E=Q[X.indices.bucket];let g=Q[X.indices.path];g||(g=""),n=new Ze(E,g),X.postModify(n);break}}if(n==null)throw kT(e);return n}}class UT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(r,e,t){let n=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...x){h||(h=!0,e.apply(null,x))}function p(x){s=setTimeout(()=>{s=null,r(S,l())},x)}function I(){i&&clearTimeout(i)}function S(x,...G){if(h){I();return}if(x){I(),f.call(null,x,...G);return}if(l()||o){I(),f.call(null,x,...G);return}n<64&&(n*=2);let M;c===1?(c=2,M=0):M=(n+Math.random())*1e3,p(M)}let D=!1;function V(x){D||(D=!0,I(),!h&&(s!==null?(x||(c=2),clearTimeout(s),p(0)):x||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,V(!0)},t),V}function $T(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(r){return r!==void 0}function qT(r){return typeof r=="object"&&!Array.isArray(r)}function Zc(r){return typeof r=="string"||r instanceof String}function Wh(r){return el()&&r instanceof Blob}function el(){return typeof Blob<"u"}function Qh(r,e,t,n){if(n<e)throw Qa(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw Qa(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(r,e,t){let n=e;return t==null&&(n=`https://${e}`),`${t}://${n}/v0${r}`}function ap(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var An;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(An||(An={}));/**
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
 */function zT(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t,n,s,i,o,c,l,h,f,p,I=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,D)=>{this.resolve_=S,this.reject_=D,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new mi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===An.NO_ERROR,l=i.getStatus();if(!c||zT(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===An.ABORT;n(!1,new mi(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;n(!0,new mi(h,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());jT(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Yc();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?op():DT();o(l)}else{const l=xT();o(l)}};this.canceled_?t(!1,new mi(!1,null,!0)):this.backoffId_=BT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$T(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mi{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function KT(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function HT(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WT(r,e){e&&(r["X-Firebase-GMPID"]=e)}function QT(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function JT(r,e,t,n,s,i,o=!0){const c=ap(r.urlParams),l=r.url+c,h=Object.assign({},r.headers);return WT(h,e),KT(h,t),HT(h,i),QT(h,n),new GT(l,r.method,h,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function YT(...r){const e=XT();if(e!==void 0){const t=new e;for(let n=0;n<r.length;n++)t.append(r[n]);return t.getBlob()}else{if(el())return new Blob(r);throw new ve(ye.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ZT(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
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
 */function eb(r){if(typeof atob>"u")throw MT("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ya{constructor(e,t){this.data=e,this.contentType=t||null}}function cp(r,e){switch(r){case ot.RAW:return new ya(lp(e));case ot.BASE64:case ot.BASE64URL:return new ya(up(r,e));case ot.DATA_URL:return new ya(nb(e),rb(e))}throw Yc()}function lp(r){const e=[];for(let t=0;t<r.length;t++){let n=r.charCodeAt(t);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=n,o=r.charCodeAt(++t);n=65536|(i&1023)<<10|o&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function tb(r){let e;try{e=decodeURIComponent(r)}catch{throw gs(ot.DATA_URL,"Malformed data URL.")}return lp(e)}function up(r,e){switch(r){case ot.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw gs(r,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ot.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw gs(r,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=eb(e)}catch(s){throw s.message.includes("polyfill")?s:gs(r,"Invalid character found")}const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}class hp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw gs(ot.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;n!=null&&(this.base64=sb(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function nb(r){const e=new hp(r);return e.base64?up(ot.BASE64,e.rest):tb(e.rest)}function rb(r){return new hp(r).contentType}function sb(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){let n=0,s="";Wh(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Wh(this.data_)){const n=this.data_,s=ZT(n,e,t);return s===null?null:new Kt(s)}else{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Kt(n,!0)}}static getBlob(...e){if(el()){const t=e.map(n=>n instanceof Kt?n.data_:n);return new Kt(YT.apply(null,t))}else{const t=e.map(o=>Zc(o)?cp(ot.RAW,o).data:o.data_);let n=0;t.forEach(o=>{n+=o.byteLength});const s=new Uint8Array(n);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Kt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(r){let e;try{e=JSON.parse(r)}catch{return null}return qT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function ob(r,e){const t=e.split("/").filter(n=>n.length>0).join("/");return r.length===0?t:r+"/"+t}function fp(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(r,e){return e}class ze{constructor(e,t,n,s){this.server=e,this.local=t||e,this.writable=!!n,this.xform=s||ab}}let pi=null;function cb(r){return!Zc(r)||r.length<2?r:fp(r)}function mp(){if(pi)return pi;const r=[];r.push(new ze("bucket")),r.push(new ze("generation")),r.push(new ze("metageneration")),r.push(new ze("name","fullPath",!0));function e(i,o){return cb(o)}const t=new ze("name");t.xform=e,r.push(t);function n(i,o){return o!==void 0?Number(o):o}const s=new ze("size");return s.xform=n,r.push(s),r.push(new ze("timeCreated")),r.push(new ze("updated")),r.push(new ze("md5Hash",null,!0)),r.push(new ze("cacheControl",null,!0)),r.push(new ze("contentDisposition",null,!0)),r.push(new ze("contentEncoding",null,!0)),r.push(new ze("contentLanguage",null,!0)),r.push(new ze("contentType",null,!0)),r.push(new ze("metadata","customMetadata",!0)),pi=r,pi}function lb(r,e){function t(){const n=r.bucket,s=r.fullPath,i=new Ze(n,s);return e._makeStorageReference(i)}Object.defineProperty(r,"ref",{get:t})}function ub(r,e,t){const n={};n.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];n[o.local]=o.xform(n,e[o.server])}return lb(n,r),n}function pp(r,e,t){const n=dp(e);return n===null?null:ub(r,n,t)}function hb(r,e,t,n){const s=dp(e);if(s===null||!Zc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=r.bucket,p=r.fullPath,I="/b/"+o(f)+"/o/"+o(p),S=tl(I,t,n),D=ap({alt:"media",token:h});return S+D})[0]}function db(r,e){const t={},n=e.length;for(let s=0;s<n;s++){const i=e[s];i.writable&&(t[i.server]=r[i.local])}return JSON.stringify(t)}class gp{constructor(e,t,n,s){this.url=e,this.method=t,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(r){if(!r)throw Yc()}function fb(r,e){function t(n,s){const i=pp(r,s,e);return _p(i!==null),i}return t}function mb(r,e){function t(n,s){const i=pp(r,s,e);return _p(i!==null),hb(i,s,r.host,r._protocol)}return t}function yp(r){function e(t,n){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=PT():s=ST():t.getStatus()===402?s=RT(r.bucket):t.getStatus()===403?s=CT(r.path):s=n,s.status=t.getStatus(),s.serverResponse=n.serverResponse,s}return e}function pb(r){const e=yp(r);function t(n,s){let i=e(n,s);return n.getStatus()===404&&(i=AT(r.path)),i.serverResponse=s.serverResponse,i}return t}function gb(r,e,t){const n=e.fullServerUrl(),s=tl(n,r.host,r._protocol),i="GET",o=r.maxOperationRetryTime,c=new gp(s,i,mb(r,t),o);return c.errorHandler=pb(e),c}function _b(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function yb(r,e,t){const n=Object.assign({},t);return n.fullPath=r.path,n.size=e.size(),n.contentType||(n.contentType=_b(null,e)),n}function vb(r,e,t,n,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let z=0;z<2;z++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=yb(e,n,s),f=db(h,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,I=`\r
--`+l+"--",S=Kt.getBlob(p,n,I);if(S===null)throw OT();const D={name:h.fullPath},V=tl(i,r.host,r._protocol),x="POST",G=r.maxUploadRetryTime,B=new gp(V,x,fb(r,t),G);return B.urlParams=D,B.headers=o,B.body=S.uploadData(),B.errorHandler=yp(e),B}class Ib{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=An.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=An.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=An.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,s){if(this.sent_)throw Zr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Eb extends Ib{initXhr(){this.xhr_.responseType="text"}}function vp(){return new Eb}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this._service=e,t instanceof Ze?this._location=t:this._location=Ze.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Fn(e,t)}get root(){const e=new Ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fp(this._location.path)}get storage(){return this._service}get parent(){const e=ib(this._location.path);if(e===null)return null;const t=new Ze(this._location.bucket,e);return new Fn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw FT(e)}}function wb(r,e,t){r._throwIfRoot("uploadBytes");const n=vb(r.storage,r._location,mp(),new Kt(e,!0),t);return r.storage.makeRequestWithTokens(n,vp).then(s=>({metadata:s,ref:r}))}function Tb(r,e,t=ot.RAW,n){r._throwIfRoot("uploadString");const s=cp(t,e),i=Object.assign({},n);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),wb(r,s.data,i)}function bb(r){r._throwIfRoot("getDownloadURL");const e=gb(r.storage,r._location,mp());return r.storage.makeRequestWithTokens(e,vp).then(t=>{if(t===null)throw LT();return t})}function Ab(r,e){const t=ob(r._location.path,e),n=new Ze(r._location.bucket,t);return new Fn(r.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(r){return/^[A-Za-z]+:\/\//.test(r)}function Sb(r,e){return new Fn(r,e)}function Ip(r,e){if(r instanceof nl){const t=r;if(t._bucket==null)throw NT();const n=new Fn(t,t._bucket);return e!=null?Ip(n,e):n}else return e!==void 0?Ab(r,e):r}function Pb(r,e){if(e&&Rb(e)){if(r instanceof nl)return Sb(r,e);throw Qa("To use ref(service, url), the first argument must be a Storage instance.")}else return Ip(r,e)}function Jh(r,e){const t=e==null?void 0:e[ip];return t==null?null:Ze.makeFromBucketSpec(t,r)}function Cb(r,e,t,n={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:gg(s,r.app.options.projectId))}class nl{constructor(e,t,n,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=sp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TT,this._maxUploadRetryTime=bT,this._requests=new Set,s!=null?this._bucket=Ze.makeFromBucketSpec(s,this._host):this._bucket=Jh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ze.makeFromBucketSpec(this._url,e):this._bucket=Jh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fn(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new UT(op());{const o=JT(e,this._appId,n,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const Xh="@firebase/storage",Yh="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="storage";function rl(r,e,t,n){return r=Ee(r),Tb(r,e,t,n)}function sl(r){return r=Ee(r),bb(r)}function il(r,e){return r=Ee(r),Pb(r,e)}function xb(r=fd(),e){r=Ee(r);const n=to(r,Ep).getImmediate({identifier:e}),s=mg("storage");return s&&Db(n,...s),n}function Db(r,e,t,n={}){Cb(r,e,t,n)}function kb(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new nl(t,n,s,e,Un)}function Vb(){Pn(new Zt(Ep,kb,"PUBLIC").setMultipleInstances(!0)),dt(Xh,Yh,""),dt(Xh,Yh,"esm2017")}Vb();const Nb={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},ol=dd(Nb),qs=eI(ol),se=nT(ol,{localCache:yT({tabManager:wT()})}),al=xb(ol),wp="archery_v5",Ob="archery_v4";function Zh(){try{const r=JSON.parse(localStorage.getItem(wp)||"null");if(r)return r;const e=JSON.parse(localStorage.getItem(Ob)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function Rt(){try{localStorage.setItem(wp,JSON.stringify({friends:_.friends,rounds:_.rounds.slice(0,200),courses:_.courses}))}catch{}}const Lb=[11,10,8,5,"M"];function Do(r){return r==="M"||r==null?0:Number(r)}function ko(r){return r?r.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":Number(t))):[]}function Mb(r){return r.map(e=>e.map(t=>t??"M").join(",")).join(";")}function nt(r){return r.flat().reduce((e,t)=>e+Do(t),0)}function Fb(r,e){const t=r.flatMap(n=>(n.scores[e]||[]).filter(s=>s!=null).map(Do));return t.length?(t.reduce((n,s)=>n+s,0)/t.length).toFixed(1):null}function Ub(r){const e={11:0,10:0,8:0,5:0,M:0};return r.flat().forEach(t=>{t==="M"?e.M++:t!=null&&e[Number(t)]!==void 0&&e[Number(t)]++}),e}function cl(r){return r.length?r.reduce((e,t)=>nt(t.scores)>nt(e.scores)?t:e,r[0]):null}function Bb(r,e){const t=r.flat().filter(n=>n!=null);return t.length?t.reduce((n,s)=>n+Do(s),0)/t.length<e:!1}function $b(r,e,t){return{id:r,name:e,isGuest:!!t,scores:[]}}function jb(r,e){for(;r.scores.length<e;)r.scores.push([null,null])}function qb(r,e){let t=0;for(let n=0;n<e;n++)r.every(s=>{const i=s.scores[n]||[null,null];return i[0]!=null&&i[1]!=null})&&t++;return t}function Tp(r){return{name:r.name,courseId:r.courseId||null,courseName:r.courseName||null,numTargets:r.numTargets,startTarget:r.startTarget||1,created:r.created,completed:r.completed||null,gpsRoute:r.gpsRoute||null,gpsDuration:r.gpsDuration||null,gpsDistance:r.gpsDistance||null,traversalOrder:r.traversalOrder,traversalPos:r.traversalPos||0,shooters:r.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:Mb(e.scores)}))}}function zb(r){return{...r,shooters:(r.shooters||[]).map(e=>({...e,scores:ko(e.scores)}))}}let Ci=null,xi=!1,Rn=!1,Ja=[],_s=null,cs=0,ct=null,Xa=null,es=null;function Gb(r){return r?r.split(";").map(e=>{const[t,n]=e.split(",").map(Number);return{lat:t,lng:n}}):[]}function ll(r,e){const n=(e.lat-r.lat)*Math.PI/180,s=(e.lng-r.lng)*Math.PI/180,i=Math.sin(n/2)**2+Math.cos(r.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function bp(r){return`${Math.floor(r/60).toString().padStart(2,"0")}:${(r%60).toString().padStart(2,"0")}`}function Ap(r){return r<1e3?`${Math.round(r)} m`:`${(r/1e3).toFixed(2)} km`}function Kb(r){return navigator.geolocation?(es=r,Ja=[],cs=0,ct=null,_s=Date.now(),Rn=!1,xi=!0,Ci=navigator.geolocation.watchPosition(e=>{if(!xi||Rn)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};ct&&(cs+=ll(ct,t)),ct=t,Ja.push(t),es&&es({lat:t.lat,lng:t.lng,distance:cs,elapsed:Math.round((Date.now()-_s)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),Xa=setInterval(()=>{xi&&!Rn&&es&&es({lat:ct==null?void 0:ct.lat,lng:ct==null?void 0:ct.lng,distance:cs,elapsed:Math.round((Date.now()-_s)/1e3)})},1e3),!0):!1}window.toggleGpsPause=function(){return Rn=!Rn,Rn};function Rp(){return xi=!1,Rn=!1,Ci!==null&&(navigator.geolocation.clearWatch(Ci),Ci=null),clearInterval(Xa),Xa=null,{route:Ja.map(r=>`${r.lat},${r.lng}`).join(";"),distance:Math.round(cs),duration:_s?Math.round((Date.now()-_s)/1e3):0}}function Vo(){return new Promise((r,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>r({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function Hb(r,e){if(!(r!=null&&r.length)||!e)return 0;let t=1/0,n=0;return r.forEach((s,i)=>{if(!s.gps)return;const o=ll(e,s.gps);o<t&&(t=o,n=i)}),n}const _={user:null,profile:null,isAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,currentCourse:null,courseMap:null,courseMapLayer:null,gpsTracking:!1,warnThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0};let Di=null;async function Wb(){try{"wakeLock"in navigator&&(Di=await navigator.wakeLock.request("screen"))}catch{}}function ul(){Di&&(Di.release(),Di=null)}function Sn(r,e="error"){const t=document.getElementById("auth-err");t.textContent=r,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(r){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(r==="login"))),document.getElementById("login-form").classList.toggle("hidden",r!=="login"),document.getElementById("signup-form").classList.toggle("hidden",r!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const r=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!r||!e){Sn("Udfyld alle felter.");return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await Uy(qs,r,e)}catch(n){Sn(n.code==="auth/invalid-credential"?"Ugyldig email eller kodeord.":"Der opstod en fejl: "+n.code)}finally{t.disabled=!1,t.textContent="LOG IND"}};window.doSignup=async function(){const r=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value;if(!r||!e||!t){Sn("Udfyld alle felter.");return}const n=document.querySelector("#signup-form .btn");n.disabled=!0,n.textContent="...";try{const s=await Fy(qs,e,t);await Po(de(se,"users",s.user.uid),{name:r,email:e,yam:r,"e-mail":e,created:xo()})}catch(s){Sn("Fejl: "+s.code)}finally{n.disabled=!1,n.textContent="OPRET KONTO"}};window.doForgot=async function(){const r=document.getElementById("login-email").value.trim();if(!r){Sn("Indtast din email først.");return}try{await My(qs,r),Sn("Nulstillingsmail sendt!","ok")}catch(e){Sn("Fejl: "+e.code)}};window.doLogout=async function(){try{await qy(qs)}catch{}};document.addEventListener("DOMContentLoaded",()=>{var t,n,s;const r=document.getElementById("warn-enabled-sw");if(r){const i=localStorage.getItem("warnEnabled");_.warnEnabled=i===null?!0:i==="true",r.classList.toggle("on",_.warnEnabled),r.addEventListener("click",()=>{_.warnEnabled=!_.warnEnabled,r.classList.toggle("on",_.warnEnabled),localStorage.setItem("warnEnabled",_.warnEnabled)})}jy(qs,async i=>{var o;if(i){_.user=i;let c,l;for(let h=0;h<3;h++)try{console.log("Henter profil for uid:",i.uid),[c,l]=await Promise.all([Ar(de(se,"users",i.uid)),Ar(de(se,"admins",i.uid))]),console.log("Profil:",c.exists(),(o=c.data)==null?void 0:o.call(c));break}catch(f){console.error("Profil fejl attempt",h,f.code,f.message),h<2?await new Promise(p=>setTimeout(p,2e3*(h+1))):(_.profile={name:i.email,email:i.email},_.isAdmin=!1)}if(c!=null&&c.exists()){const h=c.data();_.profile={name:h.name||h.yam||i.email,email:h.email||h["e-mail"]||i.email}}else _.profile||(_.profile={name:i.email,email:i.email});_.isAdmin=(l==null?void 0:l.exists())||!1,Qb()}else Jb()});let e=null;window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),e=i,document.getElementById("pwa-banner").style.display="flex"}),(t=document.getElementById("pwa-install-btn"))==null||t.addEventListener("click",async()=>{e&&(e.prompt(),await e.userChoice,e=null,document.getElementById("pwa-banner").style.display="none")}),(n=document.getElementById("pwa-dismiss-btn"))==null||n.addEventListener("click",()=>{document.getElementById("pwa-banner").style.display="none"}),Ya(24),document.getElementById("target-count").addEventListener("change",i=>Ya(Number(i.target.value))),(s=document.getElementById("photo-input"))==null||s.addEventListener("change",async i=>{var c;const o=i.target.files[0];if(o)try{const l=await dl(o),h=Dr(),f=il(al,`courses/${_.round.courseId}/target_${h}.jpg`);await rl(f,l,"base64",{contentType:"image/jpeg"});const p=await sl(f);await hl(_.round.courseId,h,{imageUrl:p}),(c=_.course)!=null&&c.targets&&(_.course.targets[h].imageUrl=p),ln()}catch(l){alert("Upload fejl: "+l.message)}}),document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("click",o=>{o.target===i&&i.classList.add("hidden")})})});function Qb(){var t;document.getElementById("hdr-name").textContent=_.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),document.getElementById("admin-badge").classList.toggle("hidden",!_.isAdmin),document.querySelectorAll(".admin-only").forEach(n=>n.classList.toggle("hidden",!_.isAdmin));const r=Zh();_.friends=r.friends||[],_.rounds=r.rounds||[],Lo(),No(),ar();const e=Zh().courses||[];_.courses=e,td(),ed(),Xb(),En(Wt(se,"users",_.user.uid,"rounds")).then(n=>{if(!n.docs.length)return;const s=n.docs.map(c=>({...c.data(),id:c.id})),i=new Set(_.rounds.map(c=>c.id)),o=s.filter(c=>!i.has(c.id));o.length&&(_.rounds=[..._.rounds,...o].sort((c,l)=>{const h=c.completed||c.created||0;return(l.completed||l.created||0)-h}),Rt(),ar())}).catch(n=>console.warn("Hent runder fejl:",n)),En(Wt(se,"users",_.user.uid,"rounds")).then(n=>{if(!n.docs.length)return;const s=n.docs.map(c=>({...c.data(),id:c.id})),i=new Set(_.rounds.map(c=>c.id)),o=s.filter(c=>!i.has(c.id));o.length&&(_.rounds=[..._.rounds,...o].sort((c,l)=>{var p,I;const h=c.completed||c.created||0,f=l.completed||l.created||0;return(typeof f=="number"?f:((p=f.toMillis)==null?void 0:p.call(f))??0)-(typeof h=="number"?h:((I=h.toMillis)==null?void 0:I.call(h))??0)}),Rt(),ar(),console.log("Runder fra Firestore:",o.length))}).catch(n=>console.warn("Hent runder:",n)),En(Wt(se,"users",_.user.uid,"rounds")).then(n=>{if(!n.docs.length)return;const s=n.docs.map(c=>({...c.data(),id:c.id})),i=new Set(_.rounds.map(c=>c.id)),o=s.filter(c=>!i.has(c.id));o.length&&(_.rounds=[..._.rounds,...o].sort((c,l)=>{var p,I;const h=c.completed||c.created||0,f=l.completed||l.created||0;return(typeof f=="number"?f:((p=f.toMillis)==null?void 0:p.call(f))??0)-(typeof h=="number"?h:((I=h.toMillis)==null?void 0:I.call(h))??0)}),Rt(),ar(),console.log("Runder fra Firestore:",o.length))}).catch(n=>console.warn("Hent runder:",n)),console.log("Henter baner, user uid:",(t=_.user)==null?void 0:t.uid),En(Wt(se,"courses")).then(n=>{console.log("Baner hentet:",n.docs.length,n.docs.map(i=>i.id));const s=n.docs.map(i=>{const o=i.data();return{id:i.id,name:o.name||o.yam||"—",numTargets:o.numTargets||o.antalMål||24,location:o.location||o.beliggenhed||"",targets:o.targets||o.mål||[],visits:o.visits||o.besøg||[]}});s.length&&(_.courses=s,Rt(),td(),ed())}).catch(n=>console.warn("courses:",n)),eA()}function Jb(){_.user=null,_.profile=null,_.round=null,ul(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){window.appLang=window.appLang==="da"?"en":"da",document.getElementById("lang-btn").textContent=window.appLang.toUpperCase()};window.switchTab=function(r){var t;document.querySelectorAll(".tab").forEach(n=>{n.classList.remove("active"),n.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(n=>n.classList.remove("active"));const e=document.getElementById(`tab-${r}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${r}"]`))==null||t.classList.add("active"),r==="friends"&&iA(),r==="analyse"&&window.renderAnalyse(),r==="courses"&&_.courseMap&&setTimeout(()=>_.courseMap.invalidateSize(),100)};function Xb(){!navigator.geolocation||!_.courses.length||navigator.geolocation.getCurrentPosition(r=>{const e={lat:r.coords.latitude,lng:r.coords.longitude};let t=1/0,n=null;if(_.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=ll(e,o);c<t&&(t=c,n=s.id)})}),n&&t<500){const s=document.getElementById("course-sel");s.value=n,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function ed(){const r=document.getElementById("course-sel"),e=r.value;r.innerHTML='<option value="">-- Ingen bane --</option>',_.courses.forEach(t=>{const n=document.createElement("option");n.value=t.id,n.textContent=`${t.name} (${t.numTargets} mål)`,r.appendChild(n)}),e&&(r.value=e),r.onchange=()=>{const t=_.courses.find(s=>s.id===r.value),n=document.getElementById("target-count");t?(n.value=t.numTargets,n.disabled=!0):n.disabled=!1,Ya(t?t.numTargets:Number(n.value))}}function Ya(r){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=r;t++){const n=document.createElement("option");n.value=t,n.textContent=t,e.appendChild(n)}}window.addParticipant=function(r,e){if(document.getElementById(`chip-${r}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${r}`,t.innerHTML=`<span class="pchip-name">🎯 ${e}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};function Yb(){return Array.from(document.querySelectorAll(".pchip")).map(r=>({id:r.id.replace("chip-",""),name:r.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:r.id.startsWith("chip-guest-")}))}function No(){const r=document.getElementById("qfriends");r.innerHTML="",_.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),r.appendChild(t)})}window.searchFriends=async function(r){const e=document.getElementById("ac-list");if(!r.trim()){e.classList.add("hidden");return}const t=_.friends.filter(i=>i.name.toLowerCase().includes(r.toLowerCase()));let n=[];try{n=(await En(Wt(se,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(r.toLowerCase())&&o.id!==((c=_.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...n];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" onclick="selectFriend('${i.id}','${(i.name||"").replace(/'/g,"\\'")}','${(i.email||"").replace(/'/g,"\\'")}');document.getElementById('friend-search').value='';document.getElementById('ac-list').classList.add('hidden');">${i.name}${i.email?` <span style='font-size:11px;opacity:.6'>${i.email}</span>`:""}</div>`).join(""),e.classList.remove("hidden")};window.selectFriend=function(r,e,t){_.friends.find(n=>n.id===r)||(_.friends.push({id:r,name:e,email:t}),Rt(),Lo(),No()),window.addParticipant(r,e)};window.startRound=async function(){var h,f;const r=document.getElementById("round-name").value.trim()||"Min Skydning",e=document.getElementById("course-sel").value,t=Number(document.getElementById("target-count").value)||24,n=Number(document.getElementById("start-target").value)-1,s=document.getElementById("gps-auto-sw").classList.contains("on"),i=document.getElementById("gps-track-sw").classList.contains("on");_.warnThreshold=Number(document.getElementById("warn-thresh").value)||8;const o=[{id:_.user.uid,name:_.profile.name,isGuest:!1},...Yb().filter(p=>p.id!==_.user.uid)];_.course=e&&_.courses.find(p=>p.id===e)||null;const c=o.map(p=>{const I=$b(p.id,p.name,p.isGuest);return jb(I,t),I});let l=n;if(s&&((h=_.course)!=null&&h.targets))try{l=Hb(_.course.targets,await Vo())}catch{}_.round={name:r,courseId:e||null,courseName:((f=_.course)==null?void 0:f.name)||null,numTargets:t,startTarget:l+1,shooters:c,created:Date.now(),traversalOrder:Sp(l,t),traversalPos:0},i&&(_.gpsTracking=Kb(Zb),document.getElementById("gps-bar").classList.toggle("hidden",!_.gpsTracking),Wb()),showActivePanel(),kr(),ln(),Oo()};function Sp(r,e){return Array.from({length:e},(t,n)=>(r+n)%e)}function Dr(){return _.round.traversalOrder[_.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function ln(){var l,h;if(!_.round)return;const r=Dr(),e=_.round.numTargets;document.getElementById("tnum-big").textContent=r+1,document.getElementById("tnum-suf").textContent=" af "+e,document.getElementById("round-badge").textContent=_.round.name;const t=(h=(l=_.course)==null?void 0:l.targets)==null?void 0:h[r];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||`Mål ${r+1}`;const n=qb(_.round.shooters,e);document.getElementById("pbar").style.width=`${n/e*100}%`;const s=_.round.shooters.flatMap(f=>f.scores.flat().filter(p=>p!=null)),i=s.reduce((f,p)=>f+Do(p),0);document.getElementById("stat-avg").textContent=s.length?(i/s.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=i,document.getElementById("stat-rem").textContent=e-n;const o=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(o.src=t.imageUrl||t.photo,o.classList.remove("hidden")):o.classList.add("hidden"),document.getElementById("edit-target-btn").classList.toggle("hidden",!(_.isAdmin&&_.round.courseId)),document.getElementById("next-btn").textContent=_.round.traversalPos===e-1?"AFSLUT →":"NÆSTE →";const c=Fb(_.round.shooters,r);document.getElementById("target-avg").textContent=c!==null?`Gns. dette mål: ${c}`:""}function kr(){if(!_.round)return;const r=Dr(),e=document.getElementById("shooters-list");e.innerHTML="",_.round.shooters.forEach((t,n)=>{const s=nt(t.scores),i=Bb(t.scores,_.warnThreshold),o=t.scores[r]||[null,null],c=document.createElement("div");c.className="shooter-card",c.innerHTML=`
      <div class="sh-head"><span style="font-size:18px;">🎯</span>${i?'<span class="warn-dot"></span>':""}
        <span class="sh-name">${t.name}</span>
        <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${s}</div></div>
      </div>
      <div class="arrows-row">${[0,1].map(l=>`
        <div class="arrow-grp"><div class="arrow-lbl">🎯 PIL ${l+1}</div>
          <div class="score-btns">${Lb.map(h=>`
            <button class="sbtn ${o[l]===h?`sel-${h}`:""}" data-v="${h}"
              onclick="setScore(${n},${r},${l},'${h}')">${h}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(c)})}window.setScore=function(r,e,t,n){const s=n==="M"?"M":Number(n);_.round.shooters[r].scores[e][t]=s,Oo(),kr(),ln()};function Zb({lat:r,lng:e,distance:t,elapsed:n}){document.getElementById("gps-time").textContent=bp(n),document.getElementById("gps-dist").textContent=Ap(t),r&&e&&(document.getElementById("gps-coord").textContent=`${r.toFixed(5)}, ${e.toFixed(5)}`)}async function Oo(){if(!(!_.round||!_.user))try{await Po(de(se,"users",_.user.uid,"active","round"),Tp(_.round))}catch(r){console.warn(r)}}async function eA(){var r;try{const e=await Ar(de(se,"users",_.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(Date.now()-((r=t.created)!=null&&r.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await bn(de(se,"users",_.user.uid,"active","round"));return}confirm("Genoptag den igangværende runde?")&&(_.round=zb(t),_.round.traversalOrder=t.traversalOrder||Sp(0,_.round.numTargets),_.round.traversalPos=t.traversalPos||0,_.round.courseId&&(_.course=_.courses.find(s=>s.id===_.round.courseId)||null),showActivePanel(),kr(),ln())}catch(e){console.warn(e)}}window.prevTarget=function(){!_.round||_.round.traversalPos<=0||(_.round.traversalPos--,Oo(),kr(),ln(),document.getElementById("scroll-area").scrollTop=0)};window.nextTarget=function(){_.round&&(_.round.traversalPos<_.round.numTargets-1?(_.round.traversalPos++,Oo(),kr(),ln(),document.getElementById("scroll-area").scrollTop=0):window.finishRound())};window.skipToTarget=function(){_.round&&(document.getElementById("skip-input").max=_.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const r=Number(document.getElementById("skip-input").value);if(!_.round||r<1||r>_.round.numTargets)return;const e=_.round.traversalOrder.indexOf(r-1);e!==-1&&(_.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),kr(),ln()};window.finishRound=async function(){_.finishTap++;const r=document.getElementById("finish-btn");if(_.finishTap===1){r.textContent="✓ BEKRÆFT",setTimeout(()=>{_.finishTap=0,r.textContent="✓ AFSLUT NU"},3e3);return}_.finishTap=0,r.textContent="✓ AFSLUT NU";let e={};_.gpsTracking&&(e=Rp(),_.gpsTracking=!1),ul();const t="r_"+Date.now(),n={...Tp(_.round),completed:Date.now(),...e,id:t};if(_.rounds.unshift({...n,created:{toDate:()=>new Date,toMillis:()=>Date.now()}}),Rt(),ar(),Po(de(se,"users",_.user.uid,"rounds",t),{...n,created:xo()}).then(()=>console.log("Runde gemt i Firestore")).catch(i=>console.warn("Gem runde fejl:",i)),_.round.courseId){const i=cl(_.round.shooters);sA(_.round.courseId,{roundId:t,date:new Date().toLocaleDateString("da-DK"),participants:_.round.shooters.map(o=>o.name),winner:i==null?void 0:i.name,winnerScore:i?nt(i.scores):0,gpsRoute:e.route||null,gpsDuration:e.duration||null,gpsDistance:e.distance||null}).catch(console.warn)}const s=_.round;window._lastRound=s,_.round=null,bn(de(se,"users",_.user.uid,"active","round")).catch(()=>{}),tA(s),showResultsPanel()};window.abortRound=async function(){_.abortTap++;const r=document.getElementById("abort-btn");if(_.abortTap===1){r.textContent="🗑 BEKRÆFT",setTimeout(()=>{_.abortTap=0,r.textContent="🗑 AFBRYD"},3e3);return}_.abortTap=0,r.textContent="🗑 AFBRYD",_.gpsTracking&&(Rp(),_.gpsTracking=!1),ul(),bn(de(se,"users",_.user.uid,"active","round")).catch(()=>{}),_.round=null,showSetupPanel()};function tA(r){const e=cl(r.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${(e==null?void 0:e.name)||"—"}</div><div class="win-score">${e?nt(e.scores):0} point</div>`,document.getElementById("res-table").innerHTML=Pp(r),document.getElementById("res-dist").innerHTML=Cp(r)}function Pp(r){let e=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${r.shooters.map(t=>`<th>${t.name}</th>`).join("")}</tr>`;for(let t=0;t<r.numTargets;t++)e+=`<tr><td class="tc">${t+1}</td>`,r.shooters.forEach(n=>{const s=n.scores[t]||[null,null],i=(s[0]!=null&&s[0]!=="M"?Number(s[0]):0)+(s[1]!=null&&s[1]!=="M"?Number(s[1]):0);e+=`<td>${s.map(o=>o??"—").join("/")}<br><small>${i}</small></td>`}),e+="</tr>";return e+=`<tr class="tr-tot"><td class="tc">Total</td>${r.shooters.map(t=>`<td>${nt(t.scores)}</td>`).join("")}</tr></table></div>`,e}function Cp(r){return'<div class="dist-grid">'+r.shooters.map(e=>{const t=Ub(e.scores),n=e.scores.flat().filter(o=>o!=null),s=n.length,i=s?(n.reduce((o,c)=>o+po(c),0)/s).toFixed(2):0;return`<div class="dist-card">
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
    </div>`}).join("")+"</div>"}function ar(){const r=document.getElementById("rounds-list");if(!_.rounds.length){r.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}r.innerHTML="",_.rounds.forEach(e=>{var o;const t=(e.shooters||[]).map(c=>({...c,scores:ko(c.scores)})),n=t.length?cl(t):null,s=(o=e.created)!=null&&o.toDate?e.created.toDate().toLocaleDateString("da-DK"):e.created?new Date(e.created).toLocaleDateString("da-DK"):"—",i=document.createElement("div");i.className="rcard",i.innerHTML=`<div class="rcard-info"><div class="rcard-name">${e.name||"Runde"}</div><div class="rcard-meta">${s} · ${e.courseName||e.numTargets+" mål"}</div><div class="rcard-win">🏆 ${(n==null?void 0:n.name)||"—"} (${n?nt(n.scores):0} pt)</div></div><button class="del-btn" data-id="${e.id}">✕</button>`,i.querySelector(".rcard-info").onclick=()=>xp({...e,shooters:t}),i.querySelector(".del-btn").onclick=c=>{const l=c.currentTarget,h=`r-${e.id}`;_.deleteConfirm[h]?(delete _.deleteConfirm[h],_.rounds=_.rounds.filter(f=>f.id!==e.id),Rt(),ar(),_.user&&bn(de(se,"users",_.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),_.user&&bn(de(se,"users",_.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),_.user&&bn(de(se,"users",_.user.uid,"rounds",e.id)).catch(f=>console.warn(f))):(_.deleteConfirm[h]=!0,l.classList.add("conf"),l.textContent="Slet?",setTimeout(()=>{delete _.deleteConfirm[h],l.classList.remove("conf"),l.textContent="✕"},3e3))},r.appendChild(i)})}function xp(r){window._lastRound=r;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),document.getElementById("rpop-body").innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${r.name}</h3>`+Pp(r)+Cp(r)+'<button class="btn btn-gold" style="width:100%;margin-top:12px;" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>'}function td(){const r=document.getElementById("courses-list");if(!_.courses.length){r.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}r.innerHTML="",_.courses.forEach(e=>{const t=document.createElement("div");t.className="ccard",t.innerHTML=`<div class="ccard-name">${e.name}</div><div class="ccard-meta">${e.numTargets} mål · ${e.location||"—"}</div>`,t.onclick=()=>nA(e),r.appendChild(t)})}function nA(r){_.currentCourse=r,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=r.name,window.switchSubtab("map"),rA(r),Dp(r),Vr(r)}function rA(r){const e=document.getElementById("course-map");_.courseMap&&(_.courseMap.remove(),_.courseMap=null),_.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(_.courseMap);const t=[];(r.targets||[]).forEach((n,s)=>{const i=n.gps||n.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(n.gps||n.GPS).lat,(n.gps||n.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(_.courseMap).bindPopup(`<b>${s+1}. ${n.name||"Mål"}</b>${n.emoji?`<br>${n.emoji}`:""}${n.imageUrl||n.photo?`<br><img src="${n.imageUrl||n.photo}" style="max-width:140px;border-radius:4px;"/>`:""}`))}),t.length?_.courseMap.fitBounds(t,{padding:[20,20]}):_.courseMap.setView([55.7,12.5],10)}function Dp(r){const e=document.getElementById("visits-list"),t=r.visits||r.besøg||[];if(!t.length){e.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}e.innerHTML="",t.forEach((n,s)=>{const i=document.createElement("div");i.className="visit-card",i.style.cursor="pointer",i.onclick=l=>{l.target.closest(".btn-icon")||window.showVisitResults(n.roundId)};const o=n.gpsDuration?bp(n.gpsDuration):null,c=n.gpsDistance?Ap(n.gpsDistance):null;i.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;"><span style="font-weight:700;font-size:13px;">${n.date}</span><div style="display:flex;gap:6px;">${n.gpsRoute?`<button class="btn-icon" onclick="showRouteOnMap(parseRoute('${n.gpsRoute}'))">🗺️</button>`:""}<button class="btn-icon" style="color:var(--danger);" onclick="deleteVisit(${s})">✕</button></div></div><div style="font-size:12px;color:var(--muted);">${(n.participants||[]).join(", ")}</div>${n.winner?`<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${n.winner} (${n.winnerScore} pt)</div>`:""}${c||o?`<div style="display:flex;gap:8px;margin-top:8px;">${c?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${c}</div><div style="font-size:11px;color:var(--muted);">DISTANCE</div></div>`:""}${o?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${o}</div><div style="font-size:11px;color:var(--muted);">TID</div></div>`:""}</div>`:""}`,e.appendChild(i)})}window.showVisitResults=function(r){const e=_.rounds.find(n=>n.id===r);if(!e){alert("Runden er ikke gemt lokalt");return}const t=(e.shooters||[]).map(n=>({...n,scores:ko(n.scores)}));xp({...e,shooters:t})};window.deleteVisit=async function(r){if(!confirm("Slet dette besøg?"))return;const e=de(se,"courses",_.currentCourse.id),t=await Ar(e);if(!t.exists())return;const n=[...t.data().visits||t.data().besøg||[]];n.splice(r,1),await vt(e,{visits:n,besøg:n}),_.currentCourse.visits=n,Dp(_.currentCourse)};window.showRouteOnMap=function(r){!_.courseMap||!r.length||(_.courseMapLayer&&_.courseMap.removeLayer(_.courseMapLayer),_.courseMapLayer=window.L.polyline(r.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(_.courseMap),_.courseMap.fitBounds(_.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.parseRoute=Gb;function Vr(r){const e=r.targets||[];let t=`
    <div class="card" style="margin-bottom:12px;">
      <div class="card-title">Baneinfo</div>
      <div class="fg"><label class="lbl">Banenavn</label><input type="text" id="edit-cname" value="${r.name}" /></div>
      <div class="fg"><label class="lbl">Lokation</label><input type="text" id="edit-cloc" value="${r.location||""}" /></div>
      <button class="btn btn-gold" style="width:100%" onclick="saveCourseEdit()">Gem baneinfo</button>
    </div>
    <div class="card">
      <div class="card-title" style="display:flex;justify-content:space-between;align-items:center;">
        <span>Mål (${e.length})</span>
        <button class="btn-icon" onclick="addTargetToCurrentCourse()" style="font-size:20px;">＋</button>
      </div>
      <div id="targets-edit-list">`;e.forEach((n,s)=>{t+=`<div class="fg" style="border-bottom:1px solid var(--surface2);padding-bottom:12px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;color:var(--acc);">Mål ${s+1}</span>
        <div style="display:flex;gap:6px;">
          <button class="btn-icon" onclick="setTargetGps(${s})" title="Sæt GPS">📍</button>
          <button class="btn-icon" onclick="deleteTargetFromCourse(${s})" style="color:var(--danger)">🗑</button>
        </div>
      </div>
      <div class="fg"><label class="lbl">Navn</label>
        <input type="text" value="${n.name||""}" onchange="updateTargetField(${s},'name',this.value)" style="padding:6px 10px;" /></div>
      <div style="display:flex;gap:8px;">
        <div class="fg" style="flex:1"><label class="lbl">Emoji</label>
          <input type="text" value="${n.emoji||""}" onchange="updateTargetField(${s},'emoji',this.value)" style="padding:6px 10px;" /></div>
        <div class="fg" style="flex:1"><label class="lbl">Afstand (m)</label>
          <input type="number" value="${n.distance||""}" onchange="updateTargetField(${s},'distance',this.value)" style="padding:6px 10px;" /></div>
      </div>
      ${n.gps||n.GPS?`<div style="font-size:12px;color:var(--muted);">📍 GPS: ${(n.gps||n.GPS).lat.toFixed(5)}, ${(n.gps||n.GPS).lng.toFixed(5)}</div>`:'<div style="font-size:12px;color:var(--danger);">Ingen GPS</div>'}
      ${n.imageUrl||n.photo?`<img src="${n.imageUrl||n.photo}" style="max-width:100%;max-height:100px;border-radius:8px;margin-top:6px;object-fit:cover;" />`:""}
      <label class="btn btn-dark" style="margin-top:6px;display:inline-block;font-size:12px;padding:4px 10px;cursor:pointer;">
        📷 Upload foto
        <input type="file" accept="image/*" style="display:none;" onchange="uploadTargetPhoto(${s},this)" />
      </label>
      <button class="btn btn-gold" style="margin-top:6px;font-size:12px;padding:4px 10px;" onclick="saveAllTargets()">💾 Gem alle mål</button>
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t}window.saveCourseEdit=async function(){const r=document.getElementById("edit-cname").value.trim(),e=document.getElementById("edit-cloc").value.trim();r&&(await vt(de(se,"courses",_.currentCourse.id),{name:r,yam:r,location:e,beliggenhed:e}),_.currentCourse.name=r,_.currentCourse.location=e,document.getElementById("course-detail-title").textContent=r,alert("Gemt!"))};window.updateTargetField=function(r,e,t){var n;(n=_.currentCourse)!=null&&n.targets&&(_.currentCourse.targets[r][e]=t)};window.addTargetToCurrentCourse=async function(){if(!_.currentCourse)return;const r=[..._.currentCourse.targets||[]];r.push({number:r.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await vt(de(se,"courses",_.currentCourse.id),{targets:r}),_.currentCourse.targets=r,Vr(_.currentCourse),alert(`Mål ${r.length} tilføjet!`)};window.deleteTargetFromCourse=async function(r){var t;if(!((t=_.currentCourse)!=null&&t.targets)||!confirm(`Slet mål ${r+1}?`))return;const e=[..._.currentCourse.targets];e.splice(r,1),e.forEach((n,s)=>n.number=s+1),await vt(de(se,"courses",_.currentCourse.id),{targets:e,numTargets:e.length}),_.currentCourse.targets=e,_.currentCourse.numTargets=e.length,Vr(_.currentCourse)};window.setTargetGps=async function(r){var e;if((e=_.currentCourse)!=null&&e.targets)try{const t=await Vo();_.currentCourse.targets[r].gps=t,await vt(de(se,"courses",_.currentCourse.id),{targets:_.currentCourse.targets}),Vr(_.currentCourse),alert(`GPS sat for mål ${r+1}!`)}catch(t){alert("GPS fejl: "+t.message)}};window.uploadTargetPhoto=async function(r,e){const t=e.files[0];if(t)try{const n=await dl(t),s=il(al,`courses/${_.currentCourse.id}/target_${r}.jpg`);await rl(s,n,"base64",{contentType:"image/jpeg"});const i=await sl(s);_.currentCourse.targets[r].imageUrl=i,await vt(de(se,"courses",_.currentCourse.id),{targets:_.currentCourse.targets}),Vr(_.currentCourse),alert("Foto gemt!")}catch(n){alert("Upload fejl: "+n.message)}};window.uploadTargetPhoto=async function(r,e){const t=e.files[0];if(t)try{const n=await dl(t),s=il(al,`courses/${_.currentCourse.id}/target_${r}.jpg`);await rl(s,n,"base64",{contentType:"image/jpeg"});const i=await sl(s);_.currentCourse.targets[r].imageUrl=i,await vt(de(se,"courses",_.currentCourse.id),{targets:_.currentCourse.targets}),Vr(_.currentCourse),alert("Foto gemt!")}catch(n){alert("Upload fejl: "+n.message)}};window.saveAllTargets=async function(){var r;(r=_.currentCourse)!=null&&r.targets&&(await vt(de(se,"courses",_.currentCourse.id),{targets:_.currentCourse.targets}),alert("Alle mål gemt!"))};window.switchSubtab=function(r){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===r)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${r}`),e.classList.toggle("hidden",e.id!==`stab-${r}`)}),r==="map"&&_.courseMap&&setTimeout(()=>_.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const r=document.getElementById("mypos-sw");if(r.classList.toggle("on"),r.classList.contains("on"))try{const e=await Vo();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(_.courseMap),_.courseMap.panTo([e.lat,e.lng])}catch{alert("GPS ikke tilgængeligt"),r.classList.remove("on")}};window.doDeleteCourse=async function(){!_.currentCourse||!confirm(`Slet banen "${_.currentCourse.name}"?`)||(await bn(de(se,"courses",_.currentCourse.id)),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"))};window.doCreateCourse=async function(){const r=document.getElementById("new-course-name").value.trim(),e=document.getElementById("new-course-loc").value.trim(),t=Number(document.getElementById("new-course-targets").value)||24;if(!r)return;const n=Array.from({length:t},(s,i)=>({number:i+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));await pT(Wt(se,"courses"),{name:r,yam:r,numTargets:t,antalMål:t,location:e,beliggenhed:e,targets:n,mål:n,created:xo(),visits:[],besøg:[]}),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value=""};async function sA(r,e){try{const t=de(se,"courses",r),n=await Ar(t);if(!n.exists())return;const s=[e,...n.data().visits||n.data().besøg||[]].slice(0,50);await vt(t,{visits:s,besøg:s})}catch(t){console.warn(t)}}async function hl(r,e,t){const n=de(se,"courses",r),s=await Ar(n);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await vt(n,{targets:o,mål:o})}function dl(r){return new Promise((e,t)=>{const n=new FileReader;n.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,l=i.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const h=document.createElement("canvas");h.width=c,h.height=l,h.getContext("2d").drawImage(i,0,0,c,l),e(h.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},n.onerror=t,n.readAsDataURL(r)})}window.openEditTarget=function(){var t,n;const r=Dr(),e=(n=(t=_.course)==null?void 0:t.targets)==null?void 0:n[r];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const r=document.getElementById("edit-tname").value.trim(),e=Dr();_.round.courseId&&(await hl(_.round.courseId,e,{name:r}),(t=_.course)!=null&&t.targets&&(_.course.targets[e].name=r)),document.getElementById("edit-panel").classList.add("hidden"),ln()};window.editGps=async function(){var r;try{const e=await Vo(),t=Dr();await hl(_.round.courseId,t,{gps:e}),(r=_.course)!=null&&r.targets&&(_.course.targets[t].gps=e),alert("GPS gemt!")}catch(e){alert("GPS fejl: "+e.message)}};function Lo(){const r=document.getElementById("friends-list");if(!_.friends.length){r.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}r.innerHTML="",_.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${e.name}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).join(" · ")}</div></div><div class="factions"><button class="btn-icon" onclick='openFriendModal(${JSON.stringify(e)})'>✏️</button><button class="btn-icon" style="color:var(--danger);" onclick="doDeleteFriend('${e.id}','${e.name.replace(/'/g,"\\'")}')">🗑</button></div>`,r.appendChild(t)})}window.openFriendModal=function(r){_.editFriendId=(r==null?void 0:r.id)||null,document.getElementById("friend-modal-title").textContent=r?"Rediger ven":"Tilføj ven",document.getElementById("f-name").value=(r==null?void 0:r.name)||"",document.getElementById("f-email").value=(r==null?void 0:r.email)||"",document.getElementById("f-phone").value=(r==null?void 0:r.phone)||"",document.getElementById("f-club").value=(r==null?void 0:r.club)||"",document.getElementById("f-bow").value=(r==null?void 0:r.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const r={name:document.getElementById("f-name").value.trim(),email:document.getElementById("f-email").value.trim(),phone:document.getElementById("f-phone").value.trim(),club:document.getElementById("f-club").value.trim(),bowType:document.getElementById("f-bow").value};if(r.name){if(_.editFriendId){const e=_.friends.findIndex(t=>t.id===_.editFriendId);e!==-1?_.friends[e]={...r,id:_.editFriendId}:_.friends.push({...r,id:_.editFriendId})}else _.friends.push({...r,id:"f_"+Date.now()});Rt(),document.getElementById("friend-modal").classList.add("hidden"),Lo(),No()}};window.doDeleteFriend=function(r,e){confirm(`Slet ${e}?`)&&(_.friends=_.friends.filter(t=>t.id!==r),Rt(),Lo(),No())};async function iA(){if(_.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{const r=await En(Wt(se,"users")),e=document.getElementById("users-list");e.innerHTML="",r.docs.forEach(t=>{var o;const n=t.data(),s=document.createElement("div");s.className="urow";const i=(o=n.created)!=null&&o.toDate?n.created.toDate().toLocaleDateString("da-DK"):"—";s.innerHTML=`<span class="un">${n.name||n.yam||"—"}</span><span class="ue">${n.email||n["e-mail"]||""}</span><span class="ud">${i}</span>`,e.appendChild(s)})}catch(r){console.warn(r)}}}window.doAddAdmin=async function(){const r=document.getElementById("admin-email").value.trim();if(r)try{const t=(await En(Wt(se,"users"))).docs.find(n=>n.data().email===r||n.data()["e-mail"]===r);if(!t){alert("Bruger ikke fundet");return}await Po(de(se,"admins",t.id),{email:r,created:xo()}),alert(`${t.data().name||r} er nu admin`),document.getElementById("admin-email").value=""}catch(e){alert("Fejl: "+e.message)}};window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const r=document.getElementById("qr-canvas");r.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(r,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"})};window.renderAnalyse=function(){var Nt,qn,Nr,zs;const r=document.getElementById("analyse-content");if(!r)return;const e=document.getElementById("analyse-bane");e&&e.options.length<=1&&[...new Set(_.rounds.map($=>$.courseId).filter(Boolean))].forEach($=>{const le=_.courses.find(te=>te.id===$);if(le&&!Array.from(e.options).find(te=>te.value===$)){const te=document.createElement("option");te.value=$,te.textContent=le.name,e.appendChild(te)}});const t=((Nt=document.getElementById("analyse-filter"))==null?void 0:Nt.value)||"all",n=((qn=document.getElementById("analyse-bane"))==null?void 0:qn.value)||"all",s=Number((Nr=document.getElementById("analyse-antal"))==null?void 0:Nr.value)||0,i=_.rounds.map(K=>({...K,shooters:(K.shooters||[]).map($=>({...$,scores:ko($.scores)}))}));let o=n==="all"?i:i.filter(K=>K.courseId===n);t==="lastround"&&(o=i.slice(0,1));const c=s||(t==="all"||t==="lastround"?0:Number(t)),l=c?o.slice(0,c):o;if(!l.length){r.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}const h=K=>{var $;return K.shooters.find(le=>{var te;return le.id===((te=_.user)==null?void 0:te.uid)})||(($=K.shooters)==null?void 0:$[0])},f=l.map(K=>{const $=h(K);return $?nt($.scores):null}).filter(K=>K!==null),p=f.length?(f.reduce((K,$)=>K+$,0)/f.length).toFixed(1):0,I=f.length?Math.max(...f):0,S=f.length?Math.min(...f):0;let D=0,V=0,x=0,G=0;const B={11:0,10:0,8:0,5:0,M:0},M={11:0,10:0,8:0,5:0,M:0};l.forEach(K=>{const $=h(K);$&&$.scores.forEach(le=>{le[0]!=null&&(le[0]==="M"?B.M++:(B[Number(le[0])]=(B[Number(le[0])]||0)+1,D+=Number(le[0]),V++)),le[1]!=null&&(le[1]==="M"?M.M++:(M[Number(le[1])]=(M[Number(le[1])]||0)+1,x+=Number(le[1]),G++))})});const z=V?(D/V).toFixed(2):0,X=G?(x/G).toFixed(2):0,Q=V+G?((D+x)/(V+G)).toFixed(2):0,E=n==="all"&&t!=="lastcourse"?l.filter(K=>{var $;return K.numTargets===(($=l[0])==null?void 0:$.numTargets)}):l,g=((zs=E[0])==null?void 0:zs.numTargets)||24,y=Array.from({length:g},(K,$)=>{let le=0,te=0;return E.forEach(Y=>{const Se=h(Y);if(!Se)return;(Se.scores[$]||[null,null]).forEach(Ce=>{Ce!=null&&Ce!=="M"&&(le+=Number(Ce),te++)})}),te?le/te:null}),w=y.map((K,$)=>({v:K,i:$})).filter(K=>K.v!==null),T=w.length?w.reduce((K,$)=>K.v>$.v?K:$):null,A=w.length?w.reduce((K,$)=>K.v<$.v?K:$):null,v={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333"},rt=["11","10","8","5","M"];let $e="";if($e+=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">RUNDER</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${l.length}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">SNIT/RUNDE</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${p}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">BEDSTE</div><div style="font-size:28px;font-weight:700;color:#2aaa5a;">${I}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">LAVESTE</div><div style="font-size:28px;font-weight:700;color:var(--danger);">${S}</div></div>
  </div>`,$e+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">PIL STATISTIK</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
      <div><div style="font-size:11px;color:var(--muted);">PIL 1</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${z}</div></div>
      <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
        <div style="font-size:11px;color:var(--muted);">SNT/PIL</div>
        <div style="font-size:22px;font-weight:700;color:var(--text);">${Q}</div>
      </div>
      <div><div style="font-size:11px;color:var(--muted);">PIL 2</div><div style="font-size:22px;font-weight:700;color:#f0c030;">${X}</div></div>
    </div>
    <div style="margin-top:8px;font-size:12px;color:var(--muted);text-align:center;">
      ${Number(z)>Number(X)?"Bedst med PIL 1 🏹":Number(X)>Number(z)?"Bedst med PIL 2 🏹":"Begge pile er lige gode 🎯"}
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
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;">`,rt.forEach(K=>{const $=B[K]||0,le=M[K]||0,te=$+le,Y=28;let Se="";if(te===0)Se=`<circle cx="${Y}" cy="${Y}" r="${Y}" fill="var(--surface2)"/>`;else if(le===0)Se=`<circle cx="${Y}" cy="${Y}" r="${Y}" fill="#00cc44"/>`;else if($===0)Se=`<circle cx="${Y}" cy="${Y}" r="${Y}" fill="#ffd700"/>`;else{const Pe=$/te,Ce=Pe*2*Math.PI,ke=Y+Y*Math.sin(0),Ve=Y-Y*Math.cos(0),zn=Y+Y*Math.sin(Ce),Gn=Y-Y*Math.cos(Ce),Kn=Ce>Math.PI?1:0;Se=`<path d="M${Y},${Y} L${ke},${Ve} A${Y},${Y} 0 ${Kn},1 ${zn},${Gn} Z" fill="#00cc44"/>
           <path d="M${Y},${Y} L${zn},${Gn} A${Y},${Y} 0 ${1-Kn},1 ${ke},${Ve} Z" fill="#ffd700"/>`}$e+=`<div style="text-align:center;">
      <div style="font-weight:700;font-size:20px;color:${v[K]};margin-bottom:4px;">${K}</div>
      <svg viewBox="0 0 ${Y*2} ${Y*2}" style="width:52px;height:52px;">${Se}</svg>
      <div style="font-size:14px;color:var(--muted);margin-top:2px;">${$}/${le}</div>
      <div style="font-size:15px;font-weight:700;color:var(--text);">${te}</div>
    </div>`}),$e+=`</div>
    <div style="display:flex;gap:16px;justify-content:center;margin-top:8px;font-size:11px;color:var(--muted);">
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#ffd700;margin-right:4px;vertical-align:middle;"></span>PIL 1</span>
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#00cc44;margin-right:4px;vertical-align:middle;"></span>PIL 2</span>
    </div>
  </div>`,f.length>1){const te=Math.min(...f)-5,Y=Math.max(...f)+5,Se=f.slice().reverse().map((Pe,Ce)=>{const ke=30+Ce/(f.length-1)*280,Ve=90-(Pe-te)/(Y-te)*(120-2*30);return`${ke},${Ve}`}).join(" ");$e+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">UDVIKLING (RUNDER)</div>
      <svg viewBox="0 0 340 120" style="width:100%;overflow:visible;">
        <polyline points="${Se}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${f.slice().reverse().map((Pe,Ce)=>{const ke=30+Ce/(f.length-1)*280,Ve=90-(Pe-te)/(Y-te)*(120-2*30);return`<circle cx="${ke}" cy="${Ve}" r="4" fill="var(--acc)"/><text x="${ke}" y="${Ve-8}" text-anchor="middle" font-size="10" fill="var(--text)">${Pe}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg>
    </div>`}const Mo=n!=="all"||t==="lastround",st=y.map((K,$)=>({v:K,i:$})).filter(K=>K.v!==null);if(st.length>1&&Mo){const te=Math.min(...st.map(Pe=>Pe.v))-.5,Y=Math.max(...st.map(Pe=>Pe.v))+.5,Se=st.map(({v:Pe,i:Ce})=>{const ke=30+(g>1?Ce/(g-1)*280:0),Ve=100-(Pe-te)/(Y-te)*(130-2*30);return`${ke},${Ve}`}).join(" ");$e+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">GENNEMSNIT PR. MÅL</div>
      <svg viewBox="0 0 340 130" style="width:100%;overflow:visible;">
        <polyline points="${Se}" fill="none" stroke="var(--text)" stroke-width="2" stroke-linejoin="round"/>
        ${st.map(({v:Pe,i:Ce})=>{const ke=30+(g>1?Ce/(g-1)*280:0),Ve=100-(Pe-te)/(Y-te)*(130-2*30);return`<circle cx="${ke}" cy="${Ve}" r="3" fill="var(--text)"/>`}).join("")}
        <text x="30" y="125" font-size="10" fill="var(--muted)">Mål 1</text>
        <text x="310" y="125" text-anchor="end" font-size="10" fill="var(--muted)">Mål ${g}</text>
      </svg>
    </div>`}r.innerHTML=$e};window.sendResults=async function(r){if(!r){alert("Ingen runde at sende");return}const e=new Date().toLocaleDateString("da-DK");let t=`3D Bueskydning - Resultater
`;t+="Dato: "+e+`
`,r.courseName&&(t+="Bane: "+r.courseName+`
`),t+=`
--- RESULTATER ---
`,[...r.shooters].sort((c,l)=>nt(l.scores)-nt(c.scores)).forEach((c,l)=>{t+=`
`+(l+1)+". "+c.name+": "+nt(c.scores)+" point"}),t+=`

--- DETALJERET ---
`,r.shooters.forEach(c=>{t+=`
`+c.name+`:
`;for(let l=0;l<r.numTargets;l++){const h=c.scores[l]||[null,null],f=(h[0]!=null&&h[0]!=="M"?Number(h[0]):0)+(h[1]!=null&&h[1]!=="M"?Number(h[1]):0);t+="  Mål "+(l+1)+": "+h.map(p=>p??"-").join("+")+" = "+f+`
`}t+="  Total: "+nt(c.scores)+` point
`});const s=r.shooters.map(c=>{var l;return(l=_.friends.find(h=>h.id===c.id))==null?void 0:l.email}).filter(Boolean),i="3D Bueskydning - "+r.name,o="mailto:"+s.join(",")+"?subject="+encodeURIComponent(i)+"&body="+encodeURIComponent(t);window.location.href=o};window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const r=document.getElementById("guest-name").value.trim();r&&(window.addParticipant(`guest-${Date.now()}`,r,!0),document.getElementById("guest-modal").classList.add("hidden"))};
